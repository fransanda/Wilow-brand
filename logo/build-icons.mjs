/** SVG → every platform raster. Run: npm run build:icons (regenerates committed icons/). */
import sharp from "sharp";
import pngToIco from "png-to-ico";
import { mkdirSync, writeFileSync, readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const out = join(here, "..", "icons");
mkdirSync(out, { recursive: true });
const svg = readFileSync(join(here, "wilow-logo.svg"));

const SIZES = [16, 32, 48, 128, 180, 192, 256, 512];
const pngs = {};
for (const s of SIZES) {
  // dark tile behind the glyph so small sizes stay legible on any background
  const buf = await sharp(svg, { density: 300 }).resize(s, s, { fit: "contain", background: "#0a0a12" })
    .flatten({ background: "#0a0a12" }).png().toBuffer();
  pngs[s] = buf;
  writeFileSync(join(out, `icon-${s}.png`), buf);
}
writeFileSync(join(out, "favicon.ico"), await pngToIco([pngs[16], pngs[32], pngs[48]]));
writeFileSync(join(out, "wilow.ico"), await pngToIco([pngs[16], pngs[32], pngs[48], pngs[128], pngs[256]]));
console.log(`icons/ regenerated (${SIZES.length} PNGs + 2 ICOs).`);
