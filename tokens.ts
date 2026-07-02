/** Wilow brand tokens as typed JS — mirror of css/theme.css (sync-tested). */
export const tokens = {
  "bg": "#050508",
  "bg-elevated": "#0a0a12",
  "surface": "#111118",
  "surface-hover": "#181825",
  "text": "#e8e8ed",
  "text-muted": "#8888a0",
  "primary": "#00ff88",
  "primary-dim": "#00cc66",
  "accent": "#7c3aed",
  "accent-glow": "#a78bfa",
  "border": "#1e1e2e",
  "border-glow": "rgba(0, 255, 136, 0.15)",
  "success": "#00ff88",
  "warning": "#f59e0b",
  "error": "#ef4444",
} as const;
export type WilowToken = keyof typeof tokens;
