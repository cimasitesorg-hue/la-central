# Product

## Register

brand

> Registro híbrido (decisión del dueño: "Mixto 50/50"). La superficie actual es
> una landing single-page, por eso el default es `brand`: el sitio ES la vidriera
> de la verdulería. Pero también cumple un trabajo de producto —armar el pedido y
> enviarlo por WhatsApp sin fricción—. Al trabajar específicamente el formulario de
> pedido (`OrderForm`, `ProductRow`, `QuantityStepper`, `StickyBar`), tratalo con
> criterio de producto (eficiencia de tarea) y override el registro a `product` por tarea.

## Users

Vecinos de Caballito (CABA) y alrededores que compran fruta y verdura desde el
celular, casi siempre de pie y con una mano, mientras planean la comida del día o
la semana. Contexto: conexión móvil, pantalla chica, poca paciencia para fricción.
No quieren "explorar un catálogo infinito": quieren elegir lo que necesitan, ver
que el lugar es serio y cuidado, y mandar el pedido en menos de un minuto. El
canal de cierre es WhatsApp (`wa.me`), no un checkout con pagos.

## Product Purpose

La Central es la presencia online de una verdulería boutique de autoservicio en
Donato Álvarez 859, Caballito. Existe para (1) transmitir que es un lugar serio,
fresco y cuidado —no un mayorista ni un súper genérico— y (2) convertir esa
confianza en un pedido concreto enviado por WhatsApp. Éxito = un visitante de
celular arma su pedido y lo envía sin dudar, y se queda con la sensación de
"este lugar elige bien la fruta". No hay carrito con pago, login ni cuentas: la
fricción a vencer es la confianza y la velocidad de armado del pedido.

## Brand Personality

Boutique, fresco, de barrio. Cuidado y elegante pero cercano y cálido —nunca
pretencioso ni de lujo distante—. Voz en español rioplatense (vos), en primera
persona del local ("Elegimos cada producto a mano"), cálida y sin signos de
exclamación de oferta. Emocionalmente debe evocar: frescura, confianza y el
placer simple de comprar bien. Tono actual de referencia: "Frescura que se elige
a mano" / "seleccionada cada mañana en el corazón de Caballito".

## Anti-references

Cuatro lanes a evitar explícitamente (todas marcadas por el dueño):

- **Súper genérico / mayorista**: nada de look de supermercado masivo, ofertas
  estridentes, rojo+amarillo, precios gritados, catálogos saturados de SKUs.
- **App de delivery (PedidosYa / Rappi)**: nada de grilla infinita de cards con
  badges, naranjas chillones, ni estética de plataforma transaccional fría.
- **Corporativo / frío**: nada de cadena corporativa, azul fintech, stock photos
  sin alma, lenguaje institucional.
- **Recargado / artesanal-rústico clché**: nada de exceso de texturas kraft,
  sellos, pizarrón/chalkboard ni el "orgánico" hipster sobrecargado. La calidez
  viene de la tipografía, el verde sage y el espacio, no de texturas pesadas.

## Design Principles

- **El pedido es el héroe silencioso.** Toda la narrativa de marca existe para
  llevar a un pedido enviado. Si una decisión estética añade fricción al armado
  del pedido en mobile, pierde la estética.
- **Calidez por tipografía y espacio, no por textura.** La identidad boutique se
  sostiene en Fraunces + Manrope, el verde sage y el aire en blanco —no en
  ornamentos rústicos ni en cards decorativas.
- **Frescura que se elige a mano.** El lenguaje y el detalle deben transmitir
  selección, cuidado y cercanía de barrio: concreto y humano, nunca corporativo.
- **Mobile real primero.** Diseñado para un pulgar, de pie, con una mano: zonas
  táctiles ≥44px, CTA siempre alcanzable, sin zoom accidental, fluidez a 60fps.
- **Confianza sin gritar.** Seriedad y calidad se comunican con restraint
  (paleta sobria, verde WhatsApp sobrio para el CTA), nunca con urgencia de oferta.

## Accessibility & Inclusion

- Objetivo **WCAG 2.1 AA**: contraste de texto ≥4.5:1 (cuidar `text-ink/55` y
  `cream/70` sobre fondos tintados; verificar y subir hacia el ink si quedan justos).
- **Movimiento reducido** ya respetado vía `prefers-reduced-motion` (los loops
  del Hero y los reveals deben tener alternativa estática/crossfade).
- **Zonas táctiles ≥44×44px** (clase `.tap`) y `safe-area-inset` para notch/gestos.
- Idioma: español rioplatense (es-AR); sin necesidad de i18n por ahora.
- Atención: `maximum-scale=1, user-scalable=no` previene zoom en inputs pero
  limita el zoom del usuario —revisar si afecta a personas con baja visión.
