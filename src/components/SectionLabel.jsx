import { motion } from "framer-motion";

/**
 * Etiqueta de seccion (mayusculas + tracking) con un subrayado que
 * se "dibuja" al entrar en pantalla (scaleX, GPU).
 */
export default function SectionLabel({ children }) {
  return (
    <span className="relative inline-block">
      <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-sage">
        {children}
      </span>
      <motion.span
        aria-hidden="true"
        className="absolute -bottom-1.5 left-0 h-px w-full origin-left bg-sage/50"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
      />
    </span>
  );
}
