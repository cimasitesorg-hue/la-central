import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useReducedMotion } from "framer-motion";
import HeadingReveal from "./HeadingReveal.jsx";
import Reveal from "./Reveal.jsx";

/**
 * Carrusel del local: "¿Ya conocés nuestro local?".
 * - Scroll-snap horizontal con momentum nativo (se desliza con el dedo).
 * - El slide centrado resalta (escala + opacidad); los demas se atenuan.
 * - Botones prev/next y puntos; el activo se detecta con IntersectionObserver
 *   (sin listeners de scroll). Respeta prefers-reduced-motion.
 */
const PHOTOS = [
  {
    src: "local-5.jpg",
    alt: "Pared principal de La Central con el cartel de neón y las góndolas repletas de fruta y verdura fresca.",
    caption: "Nuestra vidriera de frutas y verduras.",
  },
  {
    src: "local-6.jpg",
    alt: "Frente de La Central sobre la calle, con sandías, ananás y cajones de cítricos y manzanas en la vereda.",
    caption: "Pasá a visitarnos en Caballito.",
  },
  {
    src: "local-4.jpg",
    alt: "Góndola de frutas de La Central: manzanas, cítricos, paltas y peras, con los precios escritos a mano.",
    caption: "Fruta elegida una por una.",
  },
  {
    src: "local-7.jpg",
    alt: "Interior de La Central con el logo LC y góndolas de tomates, manzanas, bananas y verduras de estación.",
    caption: "Verdura y fruta de estación.",
  },
  {
    src: "local-3.jpg",
    alt: "Pared verde con el cartel de neón de La Central y cajones de fruta fresca debajo.",
    caption: "Frutas y verduras frescas, todos los días.",
  },
  {
    src: "local-2.jpg",
    alt: "Góndola de aceites de oliva, conservas y especialidades sobre estantería negra.",
    caption: "Aceites de oliva, conservas y gourmet.",
  },
  {
    src: "local-1.jpg",
    alt: "Estantería de almacén con aceites, salsas, chocolates y conservas elegidas una por una.",
    caption: "Una góndola pensada con cuidado.",
  },
];

export default function PhotoShowcase() {
  const trackRef = useRef(null);
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();

  // Detecta el slide centrado sin escuchar el evento scroll.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const slides = Array.from(track.querySelectorAll("[data-slide]"));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const i = slides.indexOf(e.target);
            if (i >= 0) setActive(i);
          }
        });
      },
      { root: track, threshold: 0.6 }
    );
    slides.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  const goTo = useCallback(
    (i) => {
      const track = trackRef.current;
      if (!track) return;
      const slides = track.querySelectorAll("[data-slide]");
      const clamped = Math.max(0, Math.min(slides.length - 1, i));
      slides[clamped]?.scrollIntoView({
        behavior: reduce ? "auto" : "smooth",
        inline: "center",
        block: "nearest",
      });
    },
    [reduce]
  );

  const arrow =
    "tap flex items-center justify-center rounded-full border border-sage/40 bg-white " +
    "text-sage-dark shadow-card transition-colors hover:border-sage/70 hover:text-sage " +
    "disabled:opacity-35 disabled:cursor-not-allowed disabled:hover:border-sage/40 " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage/50";

  return (
    <section id="local" className="py-8">
      <div className="mx-auto max-w-app px-6 text-center">
        <HeadingReveal className="text-balance font-display text-3xl leading-tight text-ink">
          Conocé nuestro local
        </HeadingReveal>
        <Reveal delay={0.12} y={14} blur={4} className="mt-2">
          <p className="text-sm leading-relaxed text-ink/70">
            En el corazón de Caballito, donde día a día elegimos la mejor calidad para vos.
          </p>
        </Reveal>
      </div>

      <Reveal delay={0.1} className="mx-auto mt-6 max-w-app">
        <div
          ref={trackRef}
          className="lc-carousel flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-1"
          role="region"
          aria-roledescription="carrusel"
          aria-label="Galería del local"
        >
          {PHOTOS.map((p, i) => (
            <figure
              key={p.src}
              data-slide
              aria-label={`${i + 1} de ${PHOTOS.length}`}
              className={
                "relative w-[80%] max-w-[400px] shrink-0 snap-center overflow-hidden rounded-3xl " +
                "bg-ink shadow-card transition-[transform,opacity] duration-500 " +
                "ease-[cubic-bezier(0.22,1,0.36,1)] " +
                (active === i ? "scale-100 opacity-100" : "scale-[0.93] opacity-60")
              }
            >
              <div className="relative aspect-[4/5]">
                <img
                  src={`${import.meta.env.BASE_URL}${p.src}`}
                  alt={p.alt}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-ink/85 via-ink/25 to-transparent"
                />
                <figcaption className="absolute inset-x-0 bottom-0 p-5 text-left font-display text-lg text-cream">
                  {p.caption}
                </figcaption>
              </div>
            </figure>
          ))}
        </div>
      </Reveal>

      {/* Controles: prev · puntos · next */}
      <div className="mx-auto mt-5 flex max-w-app items-center justify-center gap-4 px-6">
        <motion.button
          type="button"
          onClick={() => goTo(active - 1)}
          disabled={active === 0}
          whileTap={active === 0 ? undefined : { scale: 0.9 }}
          aria-label="Foto anterior"
          className={arrow + " h-11 w-11"}
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor"
               strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </motion.button>

        <div className="flex items-center gap-1">
          {PHOTOS.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Ir a la foto ${i + 1}`}
              aria-current={active === i}
              className="grid min-h-[40px] place-items-center rounded-lg px-1.5
                         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage/40"
            >
              <span
                className={
                  "block h-[7px] rounded-full transition-[width,background-color] duration-300 " +
                  "ease-[cubic-bezier(0.22,1,0.36,1)] " +
                  (active === i ? "w-[22px] bg-sage" : "w-[7px] bg-sage/30")
                }
              />
            </button>
          ))}
        </div>

        <motion.button
          type="button"
          onClick={() => goTo(active + 1)}
          disabled={active === PHOTOS.length - 1}
          whileTap={active === PHOTOS.length - 1 ? undefined : { scale: 0.9 }}
          aria-label="Foto siguiente"
          className={arrow + " h-11 w-11"}
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor"
               strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M9 6l6 6-6 6" />
          </svg>
        </motion.button>
      </div>
    </section>
  );
}
