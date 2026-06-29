import Reveal from "./Reveal.jsx";
import { GoogleG } from "./GoogleLogo.jsx";

/**
 * Reseñas de Google en marquee continuo (movimiento lineal, pausa al hover).
 * El loop se logra duplicando las tarjetas; con prefers-reduced-motion la
 * animación se apaga, se ocultan las duplicadas y el carril pasa a scroll manual
 * (ver .lc-marquee en index.css).
 *
 * PLACEHOLDER: estas reseñas son de ejemplo para ver el diseño. Reemplazar por
 * las reseñas reales de Google del comercio (nombre, estrellas, fecha y texto).
 */
const REVIEWS = [
  {
    name: "Mariana G.",
    initial: "M",
    rating: 5,
    date: "hace 1 semana",
    text: "Excelente calidad y atención. La fruta siempre fresca y bien elegida. Un lujo tener esto en el barrio.",
  },
  {
    name: "Diego R.",
    initial: "D",
    rating: 5,
    date: "hace 3 semanas",
    text: "Las verduras duran muchísimo más que las del súper. Se nota que eligen bien. Súper recomendable.",
  },
  {
    name: "Carla M.",
    initial: "C",
    rating: 5,
    date: "hace 1 mes",
    text: "Re cómodo pedir por WhatsApp y que te lo lleven. Siempre puntuales y todo impecable.",
  },
  {
    name: "Sofía L.",
    initial: "S",
    rating: 5,
    date: "hace 2 meses",
    text: "Variedad increíble, conseguís cosas que en otro lado no hay. El local muy cuidado.",
  },
  {
    name: "Javier P.",
    initial: "J",
    rating: 4,
    date: "hace 1 mes",
    text: "Atención de primera, te asesoran con todo. Precios justos para la calidad que tienen.",
  },
  {
    name: "Lucía F.",
    initial: "L",
    rating: 5,
    date: "hace 2 semanas",
    text: "Mi verdulería de cabecera. Frescura y buena onda siempre.",
  },
];

function Stars({ n }) {
  return (
    <div className="flex gap-0.5 text-[#FBBC05]" aria-label={`${n} de 5 estrellas`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          className="h-3.5 w-3.5"
          fill={i < n ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden="true"
        >
          <path d="M12 2l2.9 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 7.1-1.01z" />
        </svg>
      ))}
    </div>
  );
}

function ReviewCard({ r, duplicate = false }) {
  return (
    <figure
      aria-hidden={duplicate ? "true" : undefined}
      className={`lc-review mr-4 w-[280px] shrink-0 rounded-2xl bg-white p-5 text-left shadow-card${
        duplicate ? " lc-marquee__dup" : ""
      }`}
    >
      <div className="flex items-center justify-between">
        <Stars n={r.rating} />
        <GoogleG className="h-4 w-4" />
      </div>
      <blockquote className="mt-3 text-sm leading-relaxed text-ink/80">
        “{r.text}”
      </blockquote>
      <figcaption className="mt-4 flex items-center gap-3">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sage/15 text-sm font-semibold text-sage-dark">
          {r.initial}
        </span>
        <span className="leading-tight">
          <span className="block text-sm font-semibold text-ink">{r.name}</span>
          <span className="block text-xs text-ink/60">{r.date}</span>
        </span>
      </figcaption>
    </figure>
  );
}

export default function Reviews() {
  return (
    <section id="opiniones" className="py-8">
      <Reveal className="mx-auto max-w-app px-6 text-center">
        <h2 className="font-display text-3xl text-ink">
          Lo que dicen los vecinos
        </h2>
        <p className="mt-2 text-sm text-ink/70">
          Opiniones de quienes nos eligen cada día.
        </p>
      </Reveal>

      <div
        className="lc-marquee mt-6"
        role="region"
        aria-label="Reseñas de clientes en Google"
      >
        <div className="lc-marquee__track">
          {REVIEWS.map((r, i) => (
            <ReviewCard key={i} r={r} />
          ))}
          {REVIEWS.map((r, i) => (
            <ReviewCard key={`dup-${i}`} r={r} duplicate />
          ))}
        </div>
      </div>
    </section>
  );
}
