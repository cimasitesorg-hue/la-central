// Genera public/logo.svg y public/logo.png.
// El texto en arco se arma colocando cada glifo con su propia rotacion
// (evita textPath, que el rasterizador librsvg no soporta de forma fiable).

import sharp from "sharp";
import { writeFileSync, readFileSync } from "node:fs";

const CX = 256;
const CY = 256;

/** Construye <text> por letra sobre un arco superior. */
function arcText(text, { radius, stepDeg, fontSize, color }) {
  const chars = [...text];
  const mid = (chars.length - 1) / 2;
  const glyphs = chars
    .map((ch, i) => {
      if (ch === " ") return "";
      const angle = -90 + (i - mid) * stepDeg; // -90 = arriba
      const rad = (angle * Math.PI) / 180;
      const x = CX + radius * Math.cos(rad);
      const y = CY + radius * Math.sin(rad);
      const rot = angle + 90; // upright tangente al circulo
      return `<text x="${x.toFixed(2)}" y="${y.toFixed(2)}" transform="rotate(${rot.toFixed(
        2
      )} ${x.toFixed(2)} ${y.toFixed(2)})" fill="${color}" font-size="${fontSize}" ` +
        `text-anchor="middle" dominant-baseline="central">${ch}</text>`;
    })
    .join("\n    ");

  return `<g font-family="Georgia, 'Times New Roman', serif" font-weight="500" letter-spacing="0">\n    ${glyphs}\n  </g>`;
}

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <defs>
    <radialGradient id="disc" cx="50%" cy="42%" r="65%">
      <stop offset="0%" stop-color="#3a3a3a"/>
      <stop offset="70%" stop-color="#262626"/>
      <stop offset="100%" stop-color="#161616"/>
    </radialGradient>
  </defs>

  <circle cx="256" cy="256" r="256" fill="url(#disc)"/>

  <!-- Verduras a linea (fondo sutil) -->
  <g stroke="#EDE7DC" stroke-width="2.2" fill="none" opacity="0.14" stroke-linecap="round" stroke-linejoin="round">
    <g transform="translate(356,168)">
      <path d="M -34,4 C -34,-22 -14,-34 0,-34 C 16,-34 34,-20 34,4 C 34,28 16,40 0,40 C -16,40 -34,28 -34,4 Z"/>
      <path d="M -12,-30 L -2,-40 M 0,-32 L 0,-44 M 12,-30 L 4,-41"/>
    </g>
    <g transform="translate(150,186) rotate(-28)">
      <path d="M 0,-40 C 20,-40 30,-18 30,8 C 30,34 16,52 0,52 C -16,52 -30,34 -30,8 C -30,-18 -20,-40 0,-40 Z"/>
      <path d="M -6,-42 C -6,-54 6,-58 12,-50"/>
    </g>
    <g transform="translate(150,358)">
      <circle r="40"/>
      <circle r="30"/>
      <path d="M 0,0 L 0,-30 M 0,0 L 26,-15 M 0,0 L 26,15 M 0,0 L 0,30 M 0,0 L -26,15 M 0,0 L -26,-15"/>
    </g>
    <g transform="translate(366,346) rotate(18)">
      <path d="M 0,-46 C 26,-46 38,-18 38,12 C 38,40 20,58 0,58 C -20,58 -38,40 -38,12 C -38,-18 -26,-46 0,-46 Z"/>
      <circle cy="16" r="16"/>
    </g>
  </g>

  <!-- Doble anillo -->
  <circle cx="256" cy="256" r="232" fill="none" stroke="#F4EFE6" stroke-width="3"/>
  <circle cx="256" cy="256" r="220" fill="none" stroke="#F4EFE6" stroke-width="2"/>

  <!-- Texto en arco -->
  ${arcText("LA CENTRAL", { radius: 184, stepDeg: 13.5, fontSize: 40, color: "#F6F2EA" })}

  <!-- Monograma LC -->
  <text x="256" y="322" fill="#FBF8F2" font-family="Georgia, 'Times New Roman', serif"
        font-size="186" font-weight="600" text-anchor="middle" letter-spacing="-6">LC</text>
</svg>
`;

writeFileSync("./public/logo.svg", svg);
await sharp(Buffer.from(svg), { density: 384 })
  .resize(512, 512)
  .png()
  .toFile("./public/logo.png");

console.log("OK: public/logo.svg + public/logo.png generados");
