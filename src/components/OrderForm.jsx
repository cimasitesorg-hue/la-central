import { AnimatePresence, motion } from "framer-motion";
import Reveal from "./Reveal.jsx";
import ProductRow from "./ProductRow.jsx";
import SectionLabel from "./SectionLabel.jsx";

const headerStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};
const headerItem = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

/**
 * Seccion de pedidos. Recibe los items y handlers desde App (estado elevado)
 * para que la barra fija pueda reflejar el carrito en tiempo real.
 */
export default function OrderForm({ items, onItemChange, onAddItem, onRemoveItem, error }) {
  return (
    <section id="pedido" className="mx-auto max-w-app px-6 pb-6">
      <motion.div
        variants={headerStagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="text-center"
      >
        <motion.div variants={headerItem}>
          <SectionLabel>Hacé tu pedido</SectionLabel>
        </motion.div>
        <motion.h2 variants={headerItem} className="mt-2 font-display text-3xl text-ink">
          Armá tu canasta
        </motion.h2>
        <motion.p variants={headerItem} className="mt-2 text-sm text-ink/55">
          Elegí los productos y la cantidad. Lo enviás por WhatsApp en un toque.
        </motion.p>
      </motion.div>

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

      <motion.button
        type="button"
        onClick={onAddItem}
        initial="rest"
        whileHover="hover"
        whileTap={{ scale: 0.98 }}
        className="tap mt-4 flex w-full items-center justify-center gap-2 rounded-2xl
                   border border-dashed border-sage/40 bg-sage/5 text-sm font-semibold
                   text-sage-dark"
      >
        <motion.span
          className="text-lg leading-none"
          variants={{ rest: { rotate: 0 }, hover: { rotate: 90 } }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          +
        </motion.span>
        Añadir otro producto
      </motion.button>
    </section>
  );
}
