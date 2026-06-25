# La Central · Verdulería Boutique 🥬

SPA mobile-first para una verdulería autoservicio boutique. Catálogo de
productos, armado de pedido con cantidades y envío directo por **WhatsApp**.

Stack: **React 18 + Vite + TailwindCSS + Framer Motion**.

---

## 🚀 Puesta en marcha

Necesitás [Node.js 18+](https://nodejs.org).

```bash
# 1. Entrar a la carpeta del proyecto
cd la-central

# 2. Instalar dependencias
npm install

# 3. Levantar el entorno de desarrollo
npm run dev
```

Abrí el enlace que muestra la terminal (ej. `http://localhost:5173`).

> 📱 **Probar en el celular real:** Vite ya está configurado con `host: true`.
> En la terminal vas a ver una dirección `Network: http://192.168.x.x:5173`.
> Entrá a esa URL desde tu teléfono (misma red Wi-Fi) para ver la experiencia
> mobile tal cual la verá tu cliente.

### Build de producción

```bash
npm run build      # genera /dist optimizado
npm run preview    # previsualiza el build
```

El contenido de `dist/` se puede subir a cualquier hosting estático
(Vercel, Netlify, Cloudflare Pages, GitHub Pages, etc.).

---

## 🖼️ Antes de empezar: el logo

Colocá tu logo en `public/logo.png` (mirá `public/LEEME-logo.txt`).
La web lo usa en el Hero y como favicon. Sin él, el Hero igual funciona
(el espacio se oculta solo), pero el branding queda incompleto.

---

## 🗂️ Estructura de componentes

```
la-central/
├─ index.html              # viewport con maximum-scale=1 (anti-zoom en inputs) + fuentes
├─ tailwind.config.js      # paleta (ink/cream/sage) + tipografías + tokens
├─ vite.config.js
└─ src/
   ├─ main.jsx
   ├─ App.jsx              # estado del carrito (fuente de verdad) + layout
   ├─ index.css           # base, .tap (44px), safe-area inferior
   ├─ data/
   │  └─ products.js       # catálogo (editable) agrupado por categoría
   ├─ utils/
   │  ├─ sanitize.js       # sanitización de texto + whitelist + clamp cantidad
   │  └─ whatsapp.js       # arma el mensaje y el link wa.me
   └─ components/
      ├─ Hero.jsx          # hero de impacto, fade-in encadenado
      ├─ About.jsx         # "Quiénes somos" + dirección (Google Maps)
      ├─ OrderForm.jsx     # filas dinámicas + "Añadir otro producto"
      ├─ ProductRow.jsx    # <select> nativo + stepper + quitar
      ├─ QuantityStepper.jsx # botones grandes − / +
      ├─ StickyBar.jsx     # CTA fijo inferior "Hacer Pedido por WhatsApp"
      └─ Reveal.jsx        # scroll-reveal (solo opacity/transform → 60fps)
```

---

## ✅ Requisitos cubiertos

**Mobile-first**
- Zonas táctiles ≥ 44×44px (clase utilitaria `.tap`).
- `maximum-scale=1, user-scalable=no` → sin zoom al tocar inputs/selects.
- Sticky Bottom Bar siempre visible, con `safe-area-inset` (notch / barra de gestos).

**Animaciones**
- Solo `opacity` y `transform` (compositor GPU) → fluidez a 60fps, bajo consumo.
- `whileInView` con `once:true` (no recalcula en cada scroll).
- Respeta `prefers-reduced-motion`.

**Seguridad / buenas prácticas**
- Sanitización de texto (quita caracteres de control, recorta longitud).
- Whitelist: solo productos del catálogo se aceptan.
- Cantidad forzada a entero entre 1 y 99.
- `rel="noopener noreferrer"` en enlaces externos.
- Código modular y escalable.

---

## 🔧 Personalización rápida

| Qué cambiar           | Dónde                                            |
|-----------------------|--------------------------------------------------|
| Productos del catálogo| `src/data/products.js`                           |
| Número de WhatsApp    | `WHATSAPP_NUMBER` en `src/utils/whatsapp.js`     |
| Colores / tipografías | `tailwind.config.js`                             |
| Textos / dirección    | `src/components/Hero.jsx` y `About.jsx`          |

---

## 📲 Mensaje que recibe la verdulería

```
¡Hola! Quiero hacer el siguiente pedido:
- 2x Tomate
- 1x Palta
¡Muchas gracias!
```
