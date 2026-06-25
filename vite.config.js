import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base: en build de produccion el sitio se sirve desde /la-central/ (GitHub Pages).
// En desarrollo (npm run dev) se mantiene en la raiz "/".
export default defineConfig(({ command }) => ({
  base: command === "build" ? "/la-central/" : "/",
  plugins: [react()],
  server: {
    host: true, // accesible desde el celular en la misma red (probar en dispositivo real)
    port: 5173,
  },
}));
