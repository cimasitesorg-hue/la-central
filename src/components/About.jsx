import { motion } from "framer-motion";
import Reveal from "./Reveal.jsx";

/**
 * Quienes somos: texto exacto requerido + info ampliada (valores, horarios,
 * direccion). Las "features" entran con animacion escalonada (stagger).
 */
const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Donato+Alvarez+859+Caballito+CABA";

// Iconos de linea (sage) para cada valor de la verduleria.
const FEATURES = [
  {
    title: "Frescura diaria",
    text: "Elegimos fruta y verdura cada mañana, una por una.",
    icon: (
      <path d="M12 3c0 4-3 5-3 9a3 3 0 0 0 6 0c0-4-3-5-3-9zM12 14v7" />
    ),
  },
  {
    title: "Variedad de estación",
    text: "Lo mejor de cada temporada, siempre en góndola.",
    icon: (
      <path d="M5 13a7 7 0 0 1 14 0M5 13c0 4 3 7 7 7s7-3 7-7M9 6c1-2 4-2 6 0" />
    ),
  },
  {
    title: "Atención del barrio",
    text: "Te asesoramos en lo que necesites, con onda.",
    icon: (
      <path d="M21 11.5a8.5 8.5 0 0 1-12.3 7.6L3 21l1.9-5.7A8.5 8.5 0 1 1 21 11.5z" />
    ),
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const fadeItem = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export default function About() {
  return (
    <section id="nosotros" className="mx-auto max-w-app px-6 py-10">
      <Reveal className="rounded-3xl bg-white shadow-card p-6 text-center">
        <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-sage">
          Quiénes somos
        </span>

        {/* Texto exacto requerido */}
        <p className="mt-3 font-display text-2xl leading-snug text-ink">
          Verdulería boutique con la mejor calidad y variedad de productos.
        </p>

        {/* Info ampliada */}
        <p className="mt-3 text-sm leading-relaxed text-ink/60">
          En La Central elegimos cada producto a mano para que te lleves siempre
          lo mejor: frutas, verduras y de estación, frescas todos los días. Un
          espacio cuidado, pensado para que comprar saludable sea simple y
          placentero.
        </p>

        {/* Valores con animacion escalonada */}
        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-6 space-y-3 text-left"
        >
          {FEATURES.map((f) => (
            <motion.li
              key={f.title}
              variants={fadeItem}
              className="flex items-start gap-3 rounded-2xl bg-cream/70 p-3"
            >
              <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sage/12">
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 text-sage"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  {f.icon}
                </svg>
              </span>
              <span>
                <span className="block text-sm font-semibold text-ink">
                  {f.title}
                </span>
                <span className="block text-xs leading-relaxed text-ink/55">
                  {f.text}
                </span>
              </span>
            </motion.li>
          ))}
        </motion.ul>

        {/* Horarios */}
        <div className="mt-6 flex items-center justify-center gap-2 text-sm text-ink/70">
          <svg viewBox="0 0 24 24" className="h-4 w-4 text-sage" fill="none"
               stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"
               strokeLinejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="9" />
            <path d="M12 7v5l3 2" />
          </svg>
          <span>
            Lunes a sábado de 8 a 21 h
            <span className="text-ink/35"> · </span>
            Domingos de 8 a 14 h
          </span>
        </div>

        {/* Direccion */}
        <a
          href={MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="tap mt-4 inline-flex items-center justify-center gap-2 rounded-full
                     bg-cream px-5 text-sm font-medium text-ink/80
                     active:scale-95 transition-transform duration-150"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4 text-sage" aria-hidden="true">
            <path
              fill="currentColor"
              d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z"
            />
          </svg>
          Donato Álvarez 859, Caballito
        </a>
      </Reveal>
    </section>
  );
}
