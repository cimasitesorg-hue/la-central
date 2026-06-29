import { motion } from "framer-motion";

/**
 * Hero de impacto inmediato en celular: fondo carbon (como el logo),
 * logo + titulo con fade-in encadenado. Animaciones solo opacity/transform.
 */
export default function Hero({ onCtaClick }) {
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.14, delayChildren: 0.1 } },
  };
  const fadeUp = {
    hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };
  // El logo entra con un leve "enfoque" (escala + blur). Nunca desde scale(0).
  const fadeScale = {
    hidden: { opacity: 0, scale: 0.92, filter: "blur(10px)" },
    show: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <header className="relative overflow-hidden bg-ink text-cream">
      {/* Glow que late suavemente (profundidad sin texturas pesadas) */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2
                   rounded-full bg-sage/20 blur-3xl"
        animate={{ scale: [1, 1.18, 1], opacity: [0.5, 0.85, 0.5] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Formas suaves flotando de fondo */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        {[
          { c: "left-6 top-24 h-16 w-16", d: 9, x: 10, y: -14 },
          { c: "right-8 top-16 h-10 w-10", d: 7, x: -12, y: 10 },
          { c: "right-12 bottom-10 h-20 w-20", d: 11, x: -8, y: -16 },
          { c: "left-10 bottom-8 h-8 w-8", d: 8, x: 14, y: -10 },
        ].map((s, i) => (
          <motion.span
            key={i}
            className={`absolute rounded-full border border-sage/25 ${s.c}`}
            animate={{ x: [0, s.x, 0], y: [0, s.y, 0], opacity: [0.25, 0.5, 0.25] }}
            transition={{ duration: s.d, repeat: Infinity, ease: "easeInOut", delay: i * 0.6 }}
          />
        ))}
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto flex max-w-app flex-col items-center
                   px-6 pt-14 pb-12 text-center"
      >
        {/* Logo: entra con escala + blur y luego flota suavemente (loop infinito, solo transform) */}
        <motion.div variants={fadeScale}>
          <motion.img
            src={`${import.meta.env.BASE_URL}logo.png`}
            alt="La Central · Verdulería Boutique"
            width="220"
            height="220"
            className="h-40 w-40 rounded-full object-cover shadow-[0_20px_50px_-20px_rgba(0,0,0,0.7)]"
            animate={{ y: [0, -9, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            // Si el logo aun no fue colocado, no rompe el layout
            onError={(e) => (e.currentTarget.style.visibility = "hidden")}
          />
        </motion.div>

        <motion.p
          variants={fadeUp}
          className="mt-7 text-[11px] font-semibold uppercase tracking-[0.32em] text-sage-light"
        >
          Verdulería Boutique
        </motion.p>

        <motion.h1
          variants={fadeUp}
          className="mt-3 font-display text-[clamp(2rem,8vw,2.6rem)] leading-[1.05] font-medium"
        >
          Frescura que se
          <br />
          <span className="italic text-sage-light">elige</span> a mano.
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mt-4 max-w-[19rem] text-sm leading-relaxed text-cream/70"
        >
          La mejor calidad y variedad, seleccionada cada mañana en el corazón de
          Caballito.
        </motion.p>

        <motion.button
          variants={fadeUp}
          type="button"
          onClick={onCtaClick}
          whileTap={{ scale: 0.95 }}
          className="tap mt-8 inline-flex items-center gap-2 rounded-full bg-cream
                     px-7 text-sm font-semibold text-ink
                     focus-visible:outline-none focus-visible:ring-2
                     focus-visible:ring-sage-light focus-visible:ring-offset-2
                     focus-visible:ring-offset-ink"
        >
          Armar mi pedido
          <motion.span
            aria-hidden="true"
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          >
            ↓
          </motion.span>
        </motion.button>
      </motion.div>
    </header>
  );
}
