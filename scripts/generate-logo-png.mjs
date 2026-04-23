import sharp from "sharp";
import { writeFileSync } from "node:fs";
import { resolve } from "node:path";

function oklchToHex(L, C, H) {
  const hRad = (H * Math.PI) / 180;
  const a = C * Math.cos(hRad);
  const b = C * Math.sin(hRad);
  const l_ = L + 0.3963377774 * a + 0.2158037573 * b;
  const m_ = L - 0.1055613458 * a - 0.0638541728 * b;
  const s_ = L - 0.0894841775 * a - 1.291485548 * b;
  const l = l_ ** 3;
  const m = m_ ** 3;
  const s = s_ ** 3;
  const r = 4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s;
  const g = -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s;
  const bl = -0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s;
  const toSrgb = (x) => {
    const c = Math.max(0, Math.min(1, x));
    return c <= 0.0031308 ? 12.92 * c : 1.055 * c ** (1 / 2.4) - 0.055;
  };
  const hex = (n) =>
    Math.round(n * 255)
      .toString(16)
      .padStart(2, "0");
  return `#${hex(toSrgb(r))}${hex(toSrgb(g))}${hex(toSrgb(bl))}`;
}

const ink = oklchToHex(0.2, 0.01, 62);
const brand = oklchToHex(0.63, 0.16, 36);

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
  <rect x="1" y="1" width="30" height="30" rx="7" stroke="${ink}" stroke-opacity="0.25" stroke-width="1.5"/>
  <path d="M21 9.5a7.5 7.5 0 1 0 0 13" stroke="${ink}" stroke-width="2.4" stroke-linecap="round"/>
  <circle cx="22.5" cy="16" r="1.8" fill="${brand}"/>
</svg>`;

const out = resolve(process.cwd(), "public/logo.png");
const size = Number(process.argv[2] ?? 512);

await sharp(Buffer.from(svg), { density: (72 * size) / 32 })
  .resize(size, size)
  .png()
  .toFile(out);

writeFileSync(resolve(process.cwd(), "public/logo.svg"), svg);

console.log(`Wrote ${out} (${size}x${size}) with ink=${ink} brand=${brand}`);
