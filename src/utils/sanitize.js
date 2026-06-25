// Sanitizacion estricta de entradas del formulario.
// Aunque el pedido se arma en cliente y se envia a wa.me (no hay backend),
// limpiamos y validamos para evitar datos corruptos / inyeccion en el texto.

import { PRODUCTS } from "../data/products.js";

const MAX_QTY = 99;
const MIN_QTY = 1;

// Caracteres de control ASCII (0x00-0x1F) y DEL (0x7F): se reemplazan por espacio.
const CONTROL_CHARS = new RegExp("[\\u0000-\\u001F\\u007F]", "g");

/** Normaliza texto: quita caracteres de control, colapsa espacios y recorta. */
export function sanitizeText(value = "", maxLength = 60) {
  return String(value)
    .replace(CONTROL_CHARS, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, maxLength);
}

/** Solo acepta productos presentes en el catalogo (whitelist). */
export function sanitizeProduct(value = "") {
  const clean = sanitizeText(value, 60);
  return PRODUCTS.includes(clean) ? clean : "";
}

/** Fuerza un entero dentro del rango permitido. */
export function clampQuantity(value) {
  const n = Math.trunc(Number(value));
  if (!Number.isFinite(n)) return MIN_QTY;
  return Math.min(MAX_QTY, Math.max(MIN_QTY, n));
}

export const QTY_LIMITS = { MIN: MIN_QTY, MAX: MAX_QTY };
