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

## Android adaptive icon

`icons/wilow-foreground-432.png` is the adaptive-icon foreground layer for Android (API 26+): 432×432, transparent background, glyph scaled into the OS mask's safe zone (inner ~264px, centered). Pass it as the foreground input to `@capacitor/assets` or `android/app/src/main/res/mipmap-anydpi-v26/*.xml` alongside a solid background color/layer — unlike the other `icons/icon-*.png` sizes, it is not pre-flattened onto the dark tile.

## Logo credit

Robot glyph derived from a Gregor Cresnar (Noun Project) icon, CC-BY — restyled for Wilow.
