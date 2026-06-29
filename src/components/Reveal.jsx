import { motion, useReducedMotion } from "framer-motion";

/**
 * Scroll-reveal premium: opacity + translateY + un leve blur que "enfoca" al
 * entrar (material premium). Solo transform/opacity/filter, once:true (no
 * recalcula en cada scroll). Con prefers-reduced-motion degrada a un crossfade
 * simple, sin desplazamiento ni blur.
 */
export default function Reveal({ children, delay = 0, y = 24, blur = 6, className = "" }) {
  const reduce = useReducedMotion();

  const hidden = reduce ? { opacity: 0 } : { opacity: 0, y, filter: `blur(${blur}px)` };
  const shown = reduce ? { opacity: 1 } : { opacity: 1, y: 0, filter: "blur(0px)" };

  return (
    <motion.div
      className={className}
      initial={hidden}
      whileInView={shown}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: reduce ? 0.3 : 0.7,
        delay: reduce ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
