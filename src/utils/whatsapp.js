// Construccion del enlace a la API de WhatsApp (wa.me).
// Numero de la verduleria (formato internacional sin "+" ni espacios).

import { sanitizeProduct, clampQuantity } from "./sanitize.js";

export const WHATSAPP_NUMBER = "5491168940231";

/**
 * Filtra y normaliza los items del carrito.
 * Devuelve solo lineas validas: producto en catalogo + cantidad valida.
 */
export function getValidItems(items = []) {
  return items
    .map((it) => ({
      product: sanitizeProduct(it.product),
      qty: clampQuantity(it.qty),
    }))
    .filter((it) => it.product !== "");
}

/** Arma el mensaje con el formato estructurado solicitado. */
export function buildMessage(items = []) {
  const valid = getValidItems(items);
  const lines = valid.map((it) => `- ${it.qty}x ${it.product}`).join("\n");

  return [
    "¡Hola! Quiero hacer el siguiente pedido:",
    lines,
    "¡Muchas gracias!",
  ].join("\n");
}

/** Devuelve la URL completa lista para abrir (texto URL-encodeado). */
export function buildWhatsappLink(items = []) {
  const text = encodeURIComponent(buildMessage(items));
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}
