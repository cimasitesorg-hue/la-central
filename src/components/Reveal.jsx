import { motion } from "framer-motion";

/**
 * Scroll-reveal ligero: solo anima opacity + translateY (compositor GPU).
 * whileInView con once:true => se dispara una vez, no recalcula en cada scroll.
 */
export default function Reveal({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
