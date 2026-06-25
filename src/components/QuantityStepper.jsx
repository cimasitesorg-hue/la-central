import { motion, AnimatePresence } from "framer-motion";
import { QTY_LIMITS } from "../utils/sanitize.js";

/**
 * Selector de cantidad con botones grandes (44x44 garantizado) de - / +.
 * El valor central es de solo lectura para evitar el teclado en movil,
 * pero accesible (aria-live) para lectores de pantalla.
 */
export default function QuantityStepper({ value, onChange }) {
  const dec = () => onChange(Math.max(QTY_LIMITS.MIN, value - 1));
  const inc = () => onChange(Math.min(QTY_LIMITS.MAX, value + 1));

  const btnClass =
    "tap flex items-center justify-center rounded-xl text-xl font-semibold " +
    "text-ink bg-cream-deep disabled:opacity-40 select-none";

  return (
    <div className="flex items-center gap-1.5" role="group" aria-label="Cantidad">
      <motion.button
        type="button"
        className={btnClass}
        onClick={dec}
        disabled={value <= QTY_LIMITS.MIN}
        aria-label="Restar uno"
        whileTap={value > QTY_LIMITS.MIN ? { scale: 0.88 } : undefined}
      >
        −
      </motion.button>

      <output
        aria-live="polite"
        className="tap relative min-w-[44px] flex items-center justify-center
                   overflow-hidden px-1 text-base font-semibold tabular-nums"
      >
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.span
            key={value}
            initial={{ y: 12, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -12, opacity: 0 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
          >
            {value}
          </motion.span>
        </AnimatePresence>
      </output>

      <motion.button
        type="button"
        className={btnClass}
        onClick={inc}
        disabled={value >= QTY_LIMITS.MAX}
        aria-label="Sumar uno"
        whileTap={value < QTY_LIMITS.MAX ? { scale: 0.88 } : undefined}
      >
        +
      </motion.button>
    </div>
  );
}
