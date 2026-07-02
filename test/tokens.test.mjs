import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

function designTokens() {
  const md = readFileSync(join(root, "DESIGN.md"), "utf8");
  const section = md.split("## Color tokens")[1].split("\n## ")[0];
  const out = {};
  for (const line of section.split("\n")) {
    const m = line.match(/^\|\s*([a-z][a-z-]*)\s*\|\s*([^|]+?)\s*\|/);
    if (m && m[1] !== "Token") out[m[1]] = m[2].toLowerCase();
  }
  return out;
}

function cssTokens() {
  const css = readFileSync(join(root, "css", "theme.css"), "utf8");
  const out = {};
  for (const m of css.matchAll(/--wilow-([a-z-]+):\s*([^;]+);/g)) out[m[1]] = m[2].trim().toLowerCase();
  return out;
}

test("DESIGN.md color table matches css/theme.css exactly", () => {
  const design = designTokens();
  const css = cssTokens();
  assert.ok(Object.keys(design).length >= 15, "parsed the token table");
  assert.deepEqual(css, design);
});

test("tokens.ts mirrors the same values", async () => {
  // tokens.ts is plain TS with no TS-only syntax in values; import via tsx is unavailable here,
  // so parse it textually the same way.
  const src = readFileSync(join(root, "tokens.ts"), "utf8");
  const out = {};
  for (const m of src.matchAll(/"([a-z-]+)":\s*"([^"]+)"/g)) out[m[1]] = m[2].toLowerCase();
  assert.deepEqual(out, designTokens());
});
