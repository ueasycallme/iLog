# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static personal site — no build toolchain, no npm, no framework. All runtime files live at the project root.

- `index.html` — page structure and content
- `styles.css` — layout, theme tokens, responsive rules, animations
- `main.js` — DOM behavior (signal animation, dynamic year, copy-email)
- `favicon.svg` — site icon

## Development

No build step. Two options for local preview:

```bash
python -m http.server 8000   # then open http://localhost:8000
# or just open index.html directly in the browser
```

**Deployment:** Cloudflare Pages — Framework preset: `None`, build command: (empty), output directory: `/`.

## Architecture

**Design tokens** are CSS custom properties in `:root` (styles.css). Reuse them before introducing new values:
- Colors: `--bg`, `--bg-soft`, `--text`, `--accent` (#22d3ee cyan), `--accent-warm` (#f97316 orange)
- Typography: Fraunces serif (headings), Manrope sans-serif (body) — loaded via Google Fonts

**JavaScript** is vanilla and progressive-enhancement only. The signal bar animation uses `requestAnimationFrame` with composite sine waves; it respects `prefers-reduced-motion` by slowing animation to 0.4× speed.

**Responsive breakpoints:** 720px (tablet) and 420px (phone).

## Coding Conventions

- 2-space indentation in HTML, CSS, and JS
- CSS class names: kebab-case (`.hero-card`)
- JS variables: camelCase (`copyEmailButton`)
- Content edits → `index.html`, visual changes → `styles.css`, interaction changes → `main.js`

## Testing

Manual smoke test only — no automated suite:
1. Load on desktop and mobile widths
2. Confirm navigation anchors and external links
3. Verify signal animation and copy-email button
4. Check layout after content edits
