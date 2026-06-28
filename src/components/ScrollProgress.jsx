import { motion, useScroll, useSpring } from "framer-motion";

/**
 * Barra fina de progreso de lectura en el borde superior.
 * Usa scaleX (compositor GPU) suavizado con un spring -> 60fps.
 */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.3,
  });

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-sage"
    />
  );
}
