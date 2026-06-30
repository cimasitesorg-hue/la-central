import { useMemo, useRef, useState } from "react";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import PhotoShowcase from "./components/PhotoShowcase.jsx";
import OrderForm from "./components/OrderForm.jsx";
import Reviews from "./components/Reviews.jsx";
import GoogleReviews from "./components/GoogleReviews.jsx";
import StickyBar from "./components/StickyBar.jsx";
import ScrollProgress from "./components/ScrollProgress.jsx";
import { clampQuantity } from "./utils/sanitize.js";
import { buildWhatsappLink, getValidItems } from "./utils/whatsapp.js";

let nextId = 1;
const newItem = () => ({ id: nextId++, product: "", custom: "", qty: 1 });

export default function App() {
  // Estado del carrito (fuente de verdad unica)
  const [items, setItems] = useState([newItem()]);
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");
  const pedidoRef = useRef(null);

  const updateItem = (id, patch) => {
    setError("");
    setItems((prev) =>
      prev.map((it) =>
        it.id === id
          ? {
              ...it,
              ...patch,
              // si llega cantidad, la normalizamos en el acto
              ...(patch.qty !== undefined ? { qty: clampQuantity(patch.qty) } : {}),
            }
          : it
      )
    );
  };

  const addItem = () => setItems((prev) => [...prev, newItem()]);

  const removeItem = (id) =>
    setItems((prev) => (prev.length > 1 ? prev.filter((it) => it.id !== id) : prev));

  // Derivados: solo items validos cuentan para el resumen y el enlace
  const validItems = useMemo(() => getValidItems(items), [items]);
  const link = useMemo(() => buildWhatsappLink(items, address), [items, address]);
  const isEmpty = validItems.length === 0;

  const scrollToPedido = () =>
    pedidoRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });

  const handleBlocked = () => {
    setError("Elegí al menos un producto para enviar tu pedido.");
    scrollToPedido();
  };

  return (
    <div className="min-h-screen" style={{ paddingBottom: "var(--bottom-bar)" }}>
      <ScrollProgress />
      <Hero onCtaClick={scrollToPedido} />

      <main>
        <About />
        <PhotoShowcase />
        <div ref={pedidoRef}>
          <OrderForm
            items={items}
            address={address}
            onAddressChange={setAddress}
            onItemChange={updateItem}
            onAddItem={addItem}
            onRemoveItem={removeItem}
            error={error}
          />
        </div>

        <Reviews />
        <GoogleReviews />

        <footer className="mx-auto max-w-app px-6 pb-8 pt-2 text-center">
          <p className="font-display text-lg text-ink/80">La Central</p>
          <p className="mt-1 text-xs text-ink/60">
            Donato Álvarez 859, Caballito · CABA
          </p>
        </footer>
      </main>

      <StickyBar
        itemCount={validItems.length}
        disabled={isEmpty}
        href={link}
        onBlocked={handleBlocked}
      />
    </div>
  );
}
