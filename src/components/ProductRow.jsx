import { motion, AnimatePresence } from "framer-motion";
import { PRODUCT_GROUPS, OTHER_VALUE } from "../data/products.js";
import QuantityStepper from "./QuantityStepper.jsx";

/**
 * Fila de pedido: <select> nativo (mejor UX en movil, sin zoom gracias al
 * viewport) + stepper de cantidad + boton de quitar.
 */
export default function ProductRow({ item, index, canRemove, onChange, onRemove }) {
  const selected = Boolean(item.product);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8, scale: 0.98 }}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
      className="relative overflow-hidden rounded-2xl bg-white shadow-card p-3"
    >
      {/* Acento lateral que aparece al elegir un producto */}
      <motion.span
        aria-hidden="true"
        className="absolute left-0 top-0 h-full w-1 origin-top bg-sage"
        initial={false}
        animate={{ scaleY: selected ? 1 : 0 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      />

      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <label htmlFor={`prod-${item.id}`} className="sr-only">
            Producto {index + 1}
          </label>
          <select
            id={`prod-${item.id}`}
            value={item.product}
            onChange={(e) => onChange(item.id, { product: e.target.value })}
            className="tap w-full appearance-none rounded-xl border border-cream-deep
                       bg-cream/60 pl-3.5 pr-9 text-[16px] font-medium text-ink
                       focus:outline-none focus:ring-2 focus:ring-sage/40
                       focus:border-sage/40 transition-colors"
          >
            <option value="" disabled>
              Elegí un producto…
            </option>
            {PRODUCT_GROUPS.map((group) => (
              <optgroup key={group.label} label={group.label}>
                {group.items.map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </optgroup>
            ))}
            <option value={OTHER_VALUE}>✏️  Otro (escribir)…</option>
          </select>
          {/* Chevron decorativo */}
          <svg
            aria-hidden="true"
            viewBox="0 0 20 20"
            className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-ink/50"
          >
            <path
              d="M6 8l4 4 4-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <QuantityStepper
          value={item.qty}
          onChange={(qty) => onChange(item.id, { qty })}
        />
      </div>

      {/* Campo libre: solo visible cuando el cliente elige "Otro" */}
      <AnimatePresence initial={false}>
        {item.product === OTHER_VALUE && (
          <motion.div
            key="custom"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="pt-2.5">
              <label htmlFor={`custom-${item.id}`} className="sr-only">
                Escribí el producto
              </label>
              <input
                id={`custom-${item.id}`}
                type="text"
                inputMode="text"
                autoComplete="off"
                maxLength={60}
                value={item.custom || ""}
                onChange={(e) => onChange(item.id, { custom: e.target.value })}
                placeholder="Escribí qué necesitás (ej. Rúcula baby, Albahaca…)"
                className="tap w-full rounded-xl border border-sage/40 bg-sage/5
                           px-3.5 text-[16px] font-medium text-ink placeholder:text-ink/35
                           focus:outline-none focus:ring-2 focus:ring-sage/40
                           focus:border-sage transition-colors"
                autoFocus
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {canRemove && (
        <div className="mt-2 flex justify-end">
          <button
            type="button"
            onClick={() => onRemove(item.id)}
            className="text-xs font-medium text-ink/45 hover:text-sage-dark
                       transition-colors px-2 py-1 -mr-1"
          >
            Quitar
          </button>
        </div>
      )}
    </motion.div>
  );
}
