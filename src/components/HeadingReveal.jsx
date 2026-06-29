import { motion, useReducedMotion } from "framer-motion";

/**
 * Revelado de título tipo "máscara": el texto sube desde detrás de un borde
 * recortado (overflow-hidden). Más fluido y premium que un fade simple.
 * - pb-1 reserva espacio para descendentes (q, g, y, p) y evita que se corten.
 * - Respeta prefers-reduced-motion degradando a un crossfade sin desplazamiento.
 */
export default function HeadingReveal({ children, className = "", delay = 0 }) {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <motion.h2
        className={className}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.3, delay }}
      >
        {children}
      </motion.h2>
    );
  }

  return (
    <span className="block overflow-hidden pb-1">
      <motion.h2
        className={className}
        initial={{ y: "115%" }}
        whileInView={{ y: "0%" }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.h2>
    </span>
  );
}
