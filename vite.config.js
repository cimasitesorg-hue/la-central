import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base: con dominio propio (lacentralautoservicio.com) el sitio se sirve desde la raiz "/".
// (Antes era "/la-central/" porque Pages servia en subcarpeta sin dominio propio.)
export default defineConfig(() => ({
  base: "/",
  plugins: [react()],
  server: {
    host: true, // accesible desde el celular en la misma red (probar en dispositivo real)
    port: 5173,
  },
}));
