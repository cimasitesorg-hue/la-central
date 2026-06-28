import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import SectionLabel from "./SectionLabel.jsx";

/**
 * Galería del local con motion en capas:
 *  - Reveal con clip-path al entrar en viewport (la foto "se abre" desde adentro).
 *  - Parallax: la imagen se desplaza dentro de su marco al scrollear (profundidad).
 *  - Ken Burns: zoom lento e infinito (solo si el usuario no pidió menos movimiento).
 * Todo en transform/opacity/clip-path (GPU). Respeta prefers-reduced-motion.
 */
const PHOTOS = [
  {
    src: "local-3.jpg",
    alt: "Pared verde con el cartel de neón “La Central · Frutas y Verduras” y cajones de fruta fresca debajo: pomelo, papaya, melón y uvas.",
    caption: "Frutas y verduras frescas, todos los días.",
  },
  {
    src: "local-2.jpg",
    alt: "Góndola de La Central con aceites de oliva, conservas y especialidades sobre estantería negra y baldas de madera.",
    caption: "Aceites de oliva, conservas y gourmet.",
  },
  {
    src: "local-1.jpg",
    alt: "Estantería de almacén de La Central con aceites, salsas, chocolates y conservas elegidas una por una.",
    caption: "Una góndola pensada con cuidado.",
  },
];

function ParallaxPhoto({ src, alt, caption }) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  // Desplazamiento vertical de la imagen dentro del marco (parallax).
  const y = useTransform(scrollYProgress, [0, 1], reduce ? ["0%", "0%"] : ["-8%", "8%"]);

  return (
    <motion.figure
      ref={ref}
      initial={{ opacity: 0, clipPath: "inset(10% 10% 10% 10% round 24px)" }}
      whileInView={{ opacity: 1, clipPath: "inset(0% 0% 0% 0% round 24px)" }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="relative overflow-hidden rounded-3xl bg-ink shadow-card"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <motion.img
          src={`${import.meta.env.BASE_URL}${src}`}
          alt={alt}
          loading="lazy"
          style={{ y }}
          // Imagen sobredimensionada (150%) para que el parallax no descubra bordes.
          // El zoom Ken Burns es un loop suave; se desactiva con reduced-motion.
          className="lc-kenburns absolute inset-x-0 -top-1/4 h-[150%] w-full object-cover"
        />
        {/* Degradé inferior para legibilidad del caption sobre cualquier foto. */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent"
        />
        <figcaption className="absolute inset-x-0 bottom-0 p-5 text-left font-display text-lg text-cream">
          {caption}
        </figcaption>
      </div>
    </motion.figure>
  );
}

export default function PhotoShowcase() {
  return (
    <section id="local" className="mx-auto max-w-app px-6 py-8">
      <div className="text-center">
        <SectionLabel>El local</SectionLabel>
        <h2 className="mt-2 font-display text-3xl text-ink">Pasá a conocernos</h2>
        <p className="mt-2 text-sm leading-relaxed text-ink/70">
          Un espacio cuidado en el corazón de Caballito, con lo mejor de cada día.
        </p>
      </div>

      <div className="mt-6 space-y-5">
        {PHOTOS.map((p) => (
          <ParallaxPhoto key={p.src} {...p} />
        ))}
      </div>
    </section>
  );
}
