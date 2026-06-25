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
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <header className="relative overflow-hidden bg-ink text-cream">
      {/* Glow sutil para dar profundidad sin texturas pesadas */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2
                   rounded-full bg-sage/20 blur-3xl"
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto flex max-w-app flex-col items-center
                   px-6 pt-14 pb-12 text-center"
      >
        <motion.img
          variants={fadeUp}
          src={`${import.meta.env.BASE_URL}logo.png`}
          alt="La Central · Verdulería Boutique"
          width="220"
          height="220"
          className="h-40 w-40 rounded-full object-cover shadow-[0_20px_50px_-20px_rgba(0,0,0,0.7)]"
          // Si el logo aun no fue colocado, no rompe el layout
          onError={(e) => (e.currentTarget.style.visibility = "hidden")}
        />

        <motion.p
          variants={fadeUp}
          className="mt-7 text-[11px] font-semibold uppercase tracking-[0.32em] text-sage-light"
        >
          Verdulería Boutique
        </motion.p>

        <motion.h1
          variants={fadeUp}
          className="mt-3 font-display text-[2.6rem] leading-[1.05] font-medium"
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
          className="tap mt-8 inline-flex items-center gap-2 rounded-full bg-cream
                     px-7 text-sm font-semibold text-ink active:scale-95
                     transition-transform duration-150"
        >
          Armar mi pedido
          <span aria-hidden="true">↓</span>
        </motion.button>
      </motion.div>
    </header>
  );
}
