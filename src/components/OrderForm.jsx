import { AnimatePresence } from "framer-motion";
import Reveal from "./Reveal.jsx";
import ProductRow from "./ProductRow.jsx";

/**
 * Seccion de pedidos. Recibe los items y handlers desde App (estado elevado)
 * para que la barra fija pueda reflejar el carrito en tiempo real.
 */
export default function OrderForm({ items, onItemChange, onAddItem, onRemoveItem, error }) {
  return (
    <section id="pedido" className="mx-auto max-w-app px-6 pb-6">
      <Reveal>
        <div className="text-center">
          <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-sage">
            Hacé tu pedido
          </span>
          <h2 className="mt-2 font-display text-3xl text-ink">Armá tu canasta</h2>
          <p className="mt-2 text-sm text-ink/55">
            Elegí los productos y la cantidad. Lo enviás por WhatsApp en un toque.
          </p>
        </div>
      </Reveal>

      <div className="mt-6 space-y-3">
        <AnimatePresence initial={false}>
          {items.map((item, index) => (
            <ProductRow
              key={item.id}
              item={item}
              index={index}
              canRemove={items.length > 1}
              onChange={onItemChange}
              onRemove={onRemoveItem}
            />
          ))}
        </AnimatePresence>
      </div>

      {error && (
        <p role="alert" className="mt-3 text-center text-sm font-medium text-sage-dark">
          {error}
        </p>
      )}

      <button
        type="button"
        onClick={onAddItem}
        className="tap mt-4 flex w-full items-center justify-center gap-2 rounded-2xl
                   border border-dashed border-sage/40 bg-sage/5 text-sm font-semibold
                   text-sage-dark active:scale-[0.99] transition-transform duration-150"
      >
        <span className="text-lg leading-none">+</span>
        Añadir otro producto
      </button>
    </section>
  );
}
