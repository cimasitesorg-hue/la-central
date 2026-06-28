/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Paleta derivada del logo (monocromo) + acento fresco
        ink: {
          DEFAULT: "#101010", // negro carbon del fondo del logo
          soft: "#1c1c1c",
          70: "rgba(16,16,16,0.7)",
        },
        cream: {
          DEFAULT: "#F7F4EF", // crema calido (espacio en blanco)
          deep: "#EFEAE1",
        },
        sage: {
          DEFAULT: "#4F6F52", // verde elegante = frescura / verduleria
          light: "#7E9A7E",
          dark: "#3C553F",
        },
        whatsapp: "#1FA855", // verde sobrio para el CTA (no estridente)
        // Color funcional de alerta/error: terracota sobrio (no el rojo de super).
        // Dialoga con el terracota de los cajones de fruta del local.
        clay: {
          DEFAULT: "#A23C1E",
          soft: "rgba(162,60,30,0.10)",
        },
      },
      fontFamily: {
        display: ['"Fraunces"', "Georgia", "serif"],
        sans: ['"Manrope"', "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(16,16,16,0.04), 0 8px 24px -12px rgba(16,16,16,0.18)",
        bar: "0 -8px 30px -12px rgba(16,16,16,0.25)",
      },
      maxWidth: {
        app: "520px", // contenedor mobile-first centrado
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
