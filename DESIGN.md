# Design System

> The visual SPEC — owned by the frontend-designer, steerable by the human.
> This file is the DECLARED INTENT; the theme config (CSS variables / tailwind.config / theme file) is the
> IMPLEMENTATION. Keep them in sync — if they disagree, THIS FILE WINS and the code is corrected.
> /uitest + ui-tester drift-check the rendered UI against these tokens.

## Color tokens
| Token | Value | Usage |
|---|---|---|
| bg | #050508 | page background (near-black) |
| bg-elevated | #0a0a12 | cards / sections on bg |
| surface | #111118 | cards / elevated containers |
| surface-hover | #181825 | hover state for surfaces |
| text | #e8e8ed | primary text |
| text-muted | #8888a0 | secondary / muted text |
| primary | #00ff88 | primary actions, brand accent, glow |
| primary-dim | #00cc66 | primary hover/dimmed |
| accent | #7c3aed | secondary accent (violet) |
| accent-glow | #a78bfa | accent hover/glow |
| border | #1e1e2e | dividers / subtle borders |
| border-glow | rgba(0, 255, 136, 0.15) | glowing borders |
| success | #00ff88 | success states |
| warning | #f59e0b | warning states |
| error | #ef4444 | error states |

## Typography
- Display: Geist (Vercel), weights 400/500/700
- Body: Geist (Vercel), weights 400/500
- Scale (rem): 12 / 14 / 16 / 20 / 24 / 32 / 48 / 64 / 96
- Line-height: body 1.6, headings 1.1
- Letter-spacing: headings -0.02em, body normal

## Spacing & layout
- Spacing scale: 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 / 128
- Container max-width: 1200px; full-bleed for hero
- Radii: sm 4px / md 8px / lg 16px / full 9999px
- Elevation / shadows: sm (0 2px 8px rgba(0,0,0,0.3)), md (0 4px 16px rgba(0,0,0,0.4)), lg (0 8px 32px rgba(0,0,0,0.5))
- Glow: primary glow (0 0 20px rgba(0,255,136,0.15)), accent glow (0 0 20px rgba(124,58,237,0.15))

## Breakpoints (mobile-first)
- mobile < 640px / tablet 640-1024px / desktop > 1024px

## Components (conventions)
- Buttons: variants (primary: bg-primary text-bg, secondary: border border-primary text-primary, ghost: transparent text-primary)
  - Each has hover/active/focus-visible/disabled states
  - Primary buttons have a subtle glow on hover
- Inputs: bg-surface, border border-border (focus: border-primary + focus ring), radius md, text-text, placeholder text-muted
- Cards: bg-surface, border border-border, radius md
- Modals: centered overlay, bg-surface, backdrop blur

## Motion
- Durations: fast 150ms / base 300ms / slow 600ms / reveal 800ms
- Easing: cubic-bezier(0.16, 1, 0.3, 1) for enter/exit, cubic-bezier(0.4, 0, 0.2, 1) for hover
- Always honor prefers-reduced-motion — disable all animations when set

## Accessibility
- WCAG AA contrast on all text (ratio >= 4.5:1 for body, >= 3:1 for large text)
- Visible focus ring on every interactive element (2px primary outline)
- Full keyboard navigation (tab order, enter/space for buttons, escape for modals)
- Semantic HTML (headings hierarchy, landmark regions, alt text)

## Implementation pointer
- Tokens live in THIS package: `css/theme.css` (CSS custom properties `--wilow-*`) + `tokens.ts` (typed JS mirror). Consumers import these — never restate values locally.

## Canonical source
This file lives in the `wilow-brand` package and is THE source of truth for every Wilow surface
(website, desktop app, phone app, store apps). Consumers import `wilow-brand/css/theme.css`
(CSS variables `--wilow-*`) and `wilow-brand/tokens` (typed JS). `test/tokens.test.mjs` enforces
that the Color tokens table above and `css/theme.css` never drift.

## Logo credit
Robot glyph derived from a Gregor Cresnar (Noun Project) icon, CC-BY — restyled for Wilow.
