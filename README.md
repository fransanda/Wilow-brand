# wilow-brand

Design tokens + logos — the change-once brand source of truth for every Wilow surface.

## What it is

A single npm package that exports:
- **CSS variables** (`--wilow-*`) for dark-theme branding
- **Typed tokens** in JavaScript/TypeScript
- **Logo components** and SVG assets

All surfaces (website, desktop app, mobile app, store apps) consume these tokens. Change once in DESIGN.md, and it propagates everywhere via a sync test that enforces consistency.

## How to use

### CSS
```css
@import "wilow-brand/css/theme.css";

body {
  background-color: var(--wilow-bg);
  color: var(--wilow-text);
}
```

### JavaScript/TypeScript
```js
import { tokens } from "wilow-brand/tokens";

const primaryColor = tokens.primary; // "#00ff88"
```

## The sync test

`test/tokens.test.mjs` enforces that:
1. The color table in DESIGN.md
2. The CSS custom properties in `css/theme.css`
3. The exported `tokens` object in `tokens.ts`

...all contain exactly the same values. If you edit DESIGN.md, update the other two files, and the test will verify they're in sync.

Run the tests:
```bash
npm test
```

## The change-once rule

**DESIGN.md is the source of truth.** If the table and the code differ:
- Update `css/theme.css` and `tokens.ts` to match DESIGN.md
- Never edit theme.css or tokens.ts and forget to update DESIGN.md — the test will catch it

## Logo credit

Robot glyph derived from a Gregor Cresnar (Noun Project) icon, CC-BY — restyled for Wilow.
