import React from "react";
import ReactDOM from "react-dom/client";
import { MotionConfig } from "framer-motion";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/*
      reducedMotion="user" => Framer respeta prefers-reduced-motion del sistema.
      Las animaciones JS (glow, formas flotando, "respiración" del CTA) son JS,
      no CSS, así que la regla de index.css no las alcanzaba: esto sí.
    */}
    <MotionConfig reducedMotion="user">
      <App />
    </MotionConfig>
  </React.StrictMode>
);
