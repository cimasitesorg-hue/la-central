import { QTY_LIMITS } from "../utils/sanitize.js";

/**
 * Selector de cantidad con botones grandes (44x44 garantizado) de - / +.
 * El valor central es de solo lectura para evitar el teclado en movil,
 * pero accesible (aria-live) para lectores de pantalla.
 */
export default function QuantityStepper({ value, onChange }) {
  const dec = () => onChange(Math.max(QTY_LIMITS.MIN, value - 1));
  const inc = () => onChange(Math.min(QTY_LIMITS.MAX, value + 1));

  const btn =
    "tap flex items-center justify-center rounded-xl text-xl font-semibold " +
    "text-ink bg-cream-deep active:scale-95 transition-transform duration-150 " +
    "disabled:opacity-40 disabled:active:scale-100 select-none";

  return (
    <div className="flex items-center gap-1.5" role="group" aria-label="Cantidad">
      <button
        type="button"
        className={btn}
        onClick={dec}
        disabled={value <= QTY_LIMITS.MIN}
        aria-label="Restar uno"
      >
        −
      </button>

      <output
        aria-live="polite"
        className="tap min-w-[44px] flex items-center justify-center px-1 text-base font-semibold tabular-nums"
      >
        {value}
      </output>

      <button
        type="button"
        className={btn}
        onClick={inc}
        disabled={value >= QTY_LIMITS.MAX}
        aria-label="Sumar uno"
      >
        +
      </button>
    </div>
  );
}
