import Reveal from "./Reveal.jsx";

/**
 * Quienes somos: compacto, sin scroll excesivo. Texto exacto + direccion
 * con enlace a Google Maps.
 */
const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Donato+Alvarez+859+Caballito+CABA";

export default function About() {
  return (
    <section id="nosotros" className="mx-auto max-w-app px-6 py-10">
      <Reveal className="rounded-3xl bg-white shadow-card p-6 text-center">
        <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-sage">
          Quiénes somos
        </span>

        <p className="mt-3 font-display text-2xl leading-snug text-ink">
          Verdulería boutique con la mejor calidad y variedad de productos.
        </p>

        <a
          href={MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="tap mt-5 inline-flex items-center justify-center gap-2 rounded-full
                     bg-cream px-5 text-sm font-medium text-ink/80
                     active:scale-95 transition-transform duration-150"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4 text-sage" aria-hidden="true">
            <path
              fill="currentColor"
              d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z"
            />
          </svg>
          Donato Álvarez 859, Caballito
        </a>
      </Reveal>
    </section>
  );
}
