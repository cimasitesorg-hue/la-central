import { motion } from "framer-motion";
import Reveal from "./Reveal.jsx";
import { GoogleG, GOOGLE_FONT } from "./GoogleLogo.jsx";

/**
 * Bloque de reseñas de Google al pie de la página: invita a escribir una reseña.
 * Usa el logotipo oficial de Google y su tipografía (Google Sans / Product Sans
 * con fallback a Arial, ya que Product Sans es propietaria).
 */
const REVIEW_URL =
  "https://search.google.com/local/writereview?placeid=ChIJFdNu0v_LvJURKiEyf4FvCBE";

export default function GoogleReviews() {
  return (
    <section className="mx-auto max-w-app px-6 pb-6">
      <Reveal className="rounded-3xl bg-white shadow-card p-6 text-center">
        {/* Logotipo oficial: G de colores + wordmark en la tipografía de Google */}
        <div className="flex items-center justify-center gap-2">
          <GoogleG className="h-7 w-7" />
          <span
            className="text-2xl font-medium tracking-tight text-[#5F6368]"
            style={{ fontFamily: GOOGLE_FONT }}
          >
            Google
          </span>
        </div>

        {/* Calificación 5 estrellas (decorativa) */}
        <div
          className="mt-3 flex items-center justify-center gap-1 text-[#FBBC05]"
          aria-hidden="true"
        >
          {Array.from({ length: 5 }).map((_, i) => (
            <svg key={i} viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
              <path d="M12 2l2.9 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 7.1-1.01z" />
            </svg>
          ))}
        </div>

        <p className="mt-4 font-display text-xl leading-snug text-ink">
          ¿Nos visitaste? Contanos cómo te fue.
        </p>
        <p className="mt-2 text-sm leading-relaxed text-ink/70">
          Tu reseña ayuda a más vecinos del barrio a descubrir La Central.
        </p>

        <motion.a
          href={REVIEW_URL}
          target="_blank"
          rel="noopener noreferrer"
          whileTap={{ scale: 0.97 }}
          className="tap mt-5 inline-flex items-center justify-center gap-2.5 rounded-full
                     border border-cream-deep bg-white px-6 text-sm font-medium text-[#3C4043]
                     shadow-card transition-colors hover:bg-cream/50
                     focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4285F4]/50
                     focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          style={{ fontFamily: GOOGLE_FONT }}
        >
          <GoogleG className="h-4 w-4" />
          Escribir una reseña en Google
        </motion.a>
      </Reveal>
    </section>
  );
}
