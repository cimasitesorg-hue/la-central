---
name: La Central
description: Verdulería boutique de Caballito — lienzo carbón, producto como joya, pedido por WhatsApp.
colors:
  ink: "#101010"
  ink-soft: "#1C1C1C"
  cream: "#F7F4EF"
  cream-deep: "#EFEAE1"
  surface: "#FFFFFF"
  sage: "#4F6F52"
  sage-light: "#7E9A7E"
  sage-dark: "#3C553F"
  whatsapp: "#1FA855"
typography:
  display:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(2rem, 8vw, 2.6rem)"
    fontWeight: 500
    lineHeight: 1.05
    letterSpacing: "normal"
  headline:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "1.875rem"
    fontWeight: 500
    lineHeight: 1.15
    letterSpacing: "normal"
  body:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "0.6875rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.28em"
rounded:
  xl: "0.75rem"
  2xl: "1rem"
  3xl: "1.5rem"
  full: "9999px"
spacing:
  gutter: "24px"
  app-max: "520px"
components:
  button-primary:
    backgroundColor: "{colors.whatsapp}"
    textColor: "{colors.surface}"
    rounded: "{rounded.full}"
    padding: "14px 20px"
  button-primary-disabled:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
  button-hero:
    backgroundColor: "{colors.cream}"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    padding: "14px 28px"
  button-add:
    backgroundColor: "{colors.sage}"
    textColor: "{colors.sage-dark}"
    rounded: "{rounded.2xl}"
    padding: "14px 16px"
  card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.2xl}"
    padding: "12px"
  input-select:
    backgroundColor: "{colors.cream}"
    textColor: "{colors.ink}"
    rounded: "{rounded.xl}"
    padding: "0 14px"
  stepper-button:
    backgroundColor: "{colors.cream-deep}"
    textColor: "{colors.ink}"
    rounded: "{rounded.xl}"
---

# Design System: La Central

## 1. Overview

**Creative North Star: "La Vidriera de Noche"**

La Central es una verdulería boutique de Caballito cuya fachada es, literalmente,
carbón: un frente negro mate del que se desbordan cajones de fruta encendida —
naranjas, melones, manzanas, sandías— hacia la vereda. El sistema visual nace de
esa escena. El lienzo es oscuro y sobrio (`ink #101010`); el color y la vida los
pone el producto, como joyas iluminadas contra la noche. Adentro, estantería
negra con baldas de madera cálida sostiene aceites de oliva, vinos y conservas:
una góndola curada, no un mayorista. Esa es la marca — selección, cuidado,
oficio de barrio — y el diseño existe para transmitirla y, sin fricción, cerrar
un pedido por WhatsApp.

La personalidad es **boutique, fresca y de barrio**: elegante pero cálida, nunca
pretenciosa ni de lujo distante. El refinamiento llega por la tipografía (un
serif Fraunces de carácter junto a Manrope sobrio), el verde sage como firma y
el aire en blanco — **nunca por textura pesada**. La densidad es baja y mobile-
first: un contenedor angosto (520px) pensado para un pulgar, de pie, con una mano.

Este sistema **rechaza explícitamente**: el look de súper genérico o mayorista
(rojo+amarillo, ofertas gritadas, catálogos saturados); la estética de app de
delivery (grillas infinitas de cards con badges, naranjas chillones); lo
corporativo y frío (azul fintech, stock sin alma); y el cliché artesanal-rústico
recargado (kraft, sellos, pizarrón). La calidez es de tipografía y luz, no de
textura.

**Key Characteristics:**
- Lienzo carbón; el producto (imágenes) carga el color saturado.
- Verde sage como única firma cromática de la UI; uso disciplinado.
- Serif editorial + sans humanista, en eje de contraste real.
- Mobile-first estricto: 520px, zonas táctiles ≥44px, CTA siempre al alcance.
- Refinado y táctil: bordes suaves, sombra sutil, respuesta al toque.

## 2. Colors

Una paleta sobria de tres familias — carbón, crema cálida y verde sage — donde el
color vibrante lo aporta la fotografía del producto, no la interfaz.

### Primary
- **Carbón de Vidriera** (`#101010`): el negro mate de la fachada real. Fondo del
  hero y del `theme-color`; es el lienzo de marca. Sobre él, todo texto es crema
  y el producto brilla. Variante **Carbón Suave** (`#1C1C1C`) para capas apenas
  elevadas sobre el negro.

### Secondary
- **Sage de Huerta** (`#4F6F52`): el verde elegante = frescura y verdulería. Única
  firma cromática de la UI: labels de sección, íconos de línea, acentos de estado,
  foco de inputs. **Sage Claro** (`#7E9A7E`) para acentos sobre fondo carbón (texto
  itálico del hero, eyebrow). **Sage Oscuro** (`#3C553F`) para texto verde sobre
  fondos claros, donde el sage medio no llegaría a contraste.

### Tertiary
- **Verde WhatsApp** (`#1FA855`): exclusivo del CTA de envío. Verde sobrio, no
  estridente, deliberadamente distinto del sage de marca para señalar "acción de
  canal". No usar para nada que no sea el botón de pedido.

### Neutral
- **Crema Cálida** (`#F7F4EF`): fondo global (`body`) y superficie de la barra
  fija. El espacio en blanco de la marca, tibio como la madera de las baldas.
- **Crema Profunda** (`#EFEAE1`): bordes, divisores y fondo de los botones del
  stepper. El neutro un paso más oscuro que la crema.
- **Blanco** (`#FFFFFF`): superficie de las cards (filas de pedido, "Quiénes
  somos"), para que floten sobre la crema.
- **Tinta de Texto** (`#101010` con alfa): cuerpo `ink/60`, secundario `ink/55`,
  terciario `ink/45`. **Verificar contraste**: `ink/45` y `ink/55` sobre crema
  quedan justos; subir hacia el ink si un bloque es texto de lectura real.

### Named Rules
**The Producto-es-Color Rule.** La saturación vive en la fotografía de la
mercadería, no en la UI. El chrome se queda en carbón, crema y un único verde.
Si una pantalla necesita "más color", se agrega producto, no acentos.

**The Dos Verdes Rule.** Hay exactamente dos verdes con trabajos distintos:
sage = identidad de marca; WhatsApp = acción de envío. Nunca intercambiables.

## 3. Typography

**Display Font:** Fraunces (con Georgia, serif)
**Body Font:** Manrope (con system-ui, sans-serif)

**Character:** Un serif `opsz` de carácter editorial y cálido para los momentos de
marca, contra un sans humanista limpio y legible para toda la UI. Es un par de
contraste real (serif + sans), no dos sans parecidos. Fraunces aporta el alma de
"boutique"; Manrope, la claridad mobile.

### Hierarchy
- **Display** (Fraunces 500, `clamp(2rem, 8vw, 2.6rem)`, 1.05): título del hero
  ("Frescura que se elige a mano"). Una palabra clave en itálica sage-claro.
- **Headline** (Fraunces 500, 1.875rem / 1.5rem, ~1.15): títulos de sección
  ("Armá tu canasta", "Verdulería boutique con la mejor calidad…").
- **Body** (Manrope 400, 0.875rem, 1.6): toda la prosa y descripciones. Tope de
  ancho efectivo dado por el contenedor de 520px (sin líneas largas).
- **Label** (Manrope 600, 0.6875rem, tracking 0.28em, mayúsculas): etiquetas de
  sección en sage con subrayado animado; eyebrow del hero en tracking 0.32em.

### Named Rules
**The Fraunces-para-Marca Rule.** Fraunces se reserva para títulos y momentos de
marca. La UI funcional (botones, inputs, datos, barra) es Manrope siempre. Nunca
serif en controles.

## 4. Elevation

Sistema casi plano con sombras suaves y difusas, de rol ambiental, no estructural.
La profundidad nace del contraste carbón↔crema y de cards blancas sobre crema, no
de capas apiladas. Dos sombras nombradas, ambas largas y de baja opacidad (radio
del producto en carbón translúcido), más un `backdrop-blur` en la barra fija.

### Shadow Vocabulary
- **Card** (`box-shadow: 0 1px 2px rgba(16,16,16,0.04), 0 8px 24px -12px rgba(16,16,16,0.18)`):
  filas de pedido y card de "Quiénes somos". Levanta apenas el blanco sobre la crema.
- **Bar** (`box-shadow: 0 -8px 30px -12px rgba(16,16,16,0.25)`): barra fija
  inferior, sombra hacia arriba que la despega del contenido al hacer scroll.
- **CTA glow** (`shadow-lg shadow-whatsapp/25`): halo verde bajo el botón de
  WhatsApp activo; única sombra teñida, refuerza la acción.

### Named Rules
**The Sombra-Ambiente Rule.** Las sombras son tibias y difusas (carbón a baja
opacidad, blur grande), nunca duras ni de "tarjeta 2014". Si se ve el borde de la
sombra, está mal: subir el blur y bajar la opacidad.

## 5. Components

Carácter general: **refinado y táctil**. Bordes suaves, sombra sutil, y micro-
respuesta al toque (`whileTap` con `scale`). Todo control respeta 44×44px mínimo.

### Buttons
- **Shape:** dos formas según rol — píldora completa (`9999px`) para CTAs de
  marca/acción; redondeo `2xl` (16px) para acciones secundarias en bloque.
- **Primary (CTA WhatsApp):** fondo `whatsapp #1FA855`, texto blanco, peso bold,
  glow verde. Ícono de WhatsApp que "respira" (scale loop) cuando hay pedido.
  Deshabilitado: `ink/15` + texto `ink/40`, sin glow, cursor not-allowed.
- **Hero CTA:** píldora crema sobre el carbón del hero, texto ink, semibold, con
  flecha ↓ que rebota suave. Alto contraste invertido = foco inmediato.
- **Secondary (Añadir producto):** ancho completo, borde **punteado** `sage/40`,
  fondo `sage/5`, texto `sage-dark`, redondeo 2xl. El "+" rota 90° al hover.
- **Tap feedback:** todos bajan a `scale 0.95–0.98` al presionar.

### Cards / Containers
- **Corner Style:** filas de pedido y bloques 2xl (16px); card de "Quiénes somos"
  3xl (24px), la más generosa.
- **Background:** blanco puro sobre crema.
- **Shadow Strategy:** sombra `card` (ver Elevation). Sin bordes salvo el acento
  de estado.
- **Internal Padding:** 12px (filas) a 24px (card About).
- **Signature — acento de estado:** la fila de pedido muestra una barra sage de
  4px a la izquierda que se **dibuja con `scaleY` solo al elegir un producto**. Es
  un indicador de estado animado, no un adorno fijo (ver Do's & Don'ts).

### Inputs / Fields
- **Select (producto):** nativo, `appearance-none`, borde `cream-deep`, fondo
  `cream/60`, texto 16px (evita zoom iOS), chevron sage decorativo. Foco: anillo
  `sage/40` + borde sage.
- **Text (campo "Otro"):** borde `sage/40`, fondo `sage/5`, placeholder `ink/35`.
  Aparece con animación de altura solo al elegir "Otro". **Placeholder al límite
  de contraste — subir si hace falta.**
- **Stepper de cantidad:** botones − / + cuadrados `xl`, fondo `cream-deep`, texto
  ink; valor central de solo lectura (sin teclado móvil) con `aria-live` y
  transición vertical del número.

### Navigation
- No hay nav tradicional (single-page). La navegación es el scroll + la **barra
  fija inferior** (`StickyBar`): fondo `cream/85` con `backdrop-blur-md`, borde
  superior `cream-deep`, sombra `bar`. Muestra resumen del pedido en vivo a la
  izquierda y el CTA a la derecha. Es el ancla persistente de la experiencia.

## 6. Do's and Don'ts

### Do:
- **Do** mantener el chrome en carbón, crema y un solo sage; dejar que el color
  saturado lo aporte la **fotografía del producto** (Producto-es-Color Rule).
- **Do** reservar Fraunces para títulos y momentos de marca; Manrope para toda la UI.
- **Do** usar los dos verdes con sus trabajos fijos: sage = marca, WhatsApp = envío.
- **Do** garantizar 44×44px en todo control y mantener el CTA siempre alcanzable
  con el pulgar (barra fija + safe-area).
- **Do** mantener sombras tibias y difusas (carbón a baja opacidad, blur grande).
- **Do** verificar contraste real de los grises de texto (`ink/45`, `ink/55`,
  `cream/70`, placeholder `ink/35`); subir hacia el ink si quedan bajo 4.5:1.
- **Do** dar alternativa estática a cada animación (`prefers-reduced-motion`).

### Don't:
- **Don't** parecerse a un **súper genérico / mayorista**: nada de rojo+amarillo,
  ofertas gritadas, ni catálogos saturados de SKUs.
- **Don't** caer en estética de **app de delivery** (PedidosYa/Rappi): grillas
  infinitas de cards con badges, naranjas chillones, look transaccional frío.
- **Don't** volverse **corporativo / frío**: azul fintech, lenguaje institucional,
  stock photos sin alma.
- **Don't** recargar con **artesanal-rústico cliché**: kraft, sellos, pizarrón,
  texturas pesadas. La calidez es de tipografía y luz.
- **Don't** introducir un tercer color de marca ni teñir neutros "porque sí".
- **Don't** usar barras laterales de color como adorno fijo en cards/listas. La
  única excepción válida es el acento sage de 4px de la fila de pedido, **y solo
  porque es un indicador de estado animado** (aparece al seleccionar). Fuera de
  ese caso, los bordes-acento laterales >1px están prohibidos.
- **Don't** poner serif en controles, ni clamp de display por encima de ~2.6rem
  (la marca habla, no grita).
