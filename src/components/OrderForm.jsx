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
export default function OrderForm({ items, address, onAddressChange, onItemChange, onAddItem, onRemoveItem, error }) {
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
        <motion.p variants={headerItem} className="mt-2 text-sm text-ink/70">
          Elegí los productos y la cantidad. Lo enviás por WhatsApp en segundos.
        </motion.p>

        {/* Aviso de servicio: pedido + preparacion + envio (con horario de entrega) */}
        <motion.p
          variants={headerItem}
          className="mx-auto mt-4 flex max-w-[22rem] items-start justify-center gap-2
                     rounded-2xl bg-sage/10 px-4 py-3 text-sm font-medium text-sage-dark"
        >
          <svg viewBox="0 0 24 24" className="mt-0.5 h-5 w-5 shrink-0 text-sage" fill="none"
               stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"
               strokeLinejoin="round" aria-hidden="true">
            <path d="M3 7h11v8H3zM14 10h4l3 3v2h-7z" />
            <circle cx="7" cy="18" r="1.6" />
            <circle cx="17.5" cy="18" r="1.6" />
          </svg>
          <span className="text-left">
            <span className="block">
              Pedí por WhatsApp, nosotros lo preparamos y te lo enviamos a la
              puerta de tu casa.
            </span>
            <span className="mt-1 block text-xs font-normal text-sage-dark/80">
              Entregas el siguiente día hábil de 14:00 a 21:00 hs.
            </span>
          </span>
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
        <p
          role="alert"
          className="mt-3 flex items-center justify-center gap-1.5 text-center
                     text-sm font-semibold text-clay"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="none"
               stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"
               strokeLinejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="9" />
            <path d="M12 8v4" />
            <path d="M12 16h.01" />
          </svg>
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
                   text-sage-dark focus-visible:outline-none focus-visible:ring-2
                   focus-visible:ring-sage/50 focus-visible:ring-offset-2
                   focus-visible:ring-offset-cream"
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

      {/* Dirección de entrega: se incluye en el mensaje de WhatsApp del pedido */}
      <div className="mt-5">
        <label htmlFor="direccion-entrega" className="mb-1.5 block text-sm font-semibold text-ink">
          Dirección de entrega
        </label>
        <input
          id="direccion-entrega"
          type="text"
          inputMode="text"
          autoComplete="street-address"
          maxLength={120}
          value={address}
          onChange={(e) => onAddressChange(e.target.value)}
          placeholder="Calle y número, piso/depto y barrio"
          className="tap w-full rounded-xl border border-cream-deep bg-cream/60 px-3.5
                     text-[16px] font-medium text-ink placeholder:text-ink/60
                     focus:outline-none focus:ring-2 focus:ring-sage/40 focus:border-sage/40
                     transition-colors"
        />
      </div>
    </section>
  );
}
