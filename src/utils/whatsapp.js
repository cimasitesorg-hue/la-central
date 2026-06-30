// Construccion del enlace a la API de WhatsApp (wa.me).
// Numero de la verduleria (formato internacional sin "+" ni espacios).

import { sanitizeProduct, sanitizeText, clampQuantity } from "./sanitize.js";
import { OTHER_VALUE, DEFAULT_UNIT, getUnit } from "../data/products.js";

export const WHATSAPP_NUMBER = "5491125427228";

/**
 * Filtra y normaliza los items del carrito.
 * - Producto del catalogo: se valida contra la whitelist.
 * - Producto "Otro": se toma el texto libre del cliente, sanitizado.
 * Solo quedan lineas con nombre valido y cantidad valida.
 */
export function getValidItems(items = []) {
  return items
    .map((it) => {
      const isOther = it.product === OTHER_VALUE;
      const name = isOther ? sanitizeText(it.custom, 60) : sanitizeProduct(it.product);
      const unit = isOther ? DEFAULT_UNIT : getUnit(it.product);
      return { product: name, qty: clampQuantity(it.qty), unit };
    })
    .filter((it) => it.product !== "");
}

/** Arma el mensaje con el formato estructurado solicitado. */
export function buildMessage(items = []) {
  const valid = getValidItems(items);
  const lines = valid.map((it) => `- ${it.qty} ${it.unit} ${it.product}`).join("\n");

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
