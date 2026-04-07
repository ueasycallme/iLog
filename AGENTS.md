# Repository Guidelines

## Project Structure & Module Organization
This repository is a small static site with all runtime files at the project root:

- `index.html`: page structure and content
- `styles.css`: layout, theme tokens, responsive rules, and animations
- `main.js`: lightweight DOM behavior such as reveal-on-scroll and copy-email actions
- `favicon.svg`: site icon
- `README.md`: deployment and customization notes

Keep related edits grouped by file type. For example, content changes usually start in `index.html`, visual adjustments belong in `styles.css`, and interaction changes belong in `main.js`.

## Build, Test, and Development Commands
There is no build step or package-based toolchain in this repo.

- `python -m http.server 8000`: serve the site locally at `http://localhost:8000`
- Open `index.html` directly: fastest way to preview simple content changes

For deployment, the README documents Cloudflare Pages with `Framework preset: None`, no build command, and `/` as the output directory.

## Coding Style & Naming Conventions
Match the existing style: 2-space indentation in HTML, CSS, and JavaScript. Use semantic HTML sections, keep CSS class names in kebab-case like `.hero-card`, and use camelCase for JavaScript variables such as `copyEmailButton`.

Prefer small, focused changes. Reuse the existing CSS custom properties in `:root` before adding new colors, spacing tokens, or shadows. Keep JavaScript framework-free and centered on progressive enhancement.

## Testing Guidelines
There is no automated test suite yet. Validate changes with a manual smoke test in a browser:

- load the page on desktop and mobile widths
- confirm navigation anchors and external links work
- verify the copy-email button and reveal animations behave correctly
- check layout and text after any content edits

## Commit & Pull Request Guidelines
No Git history is available in this workspace, so follow a simple baseline: use short, imperative commit messages such as `Update hero copy` or `Refine mobile spacing`.

Pull requests should include a clear summary, the files changed, manual test notes, and screenshots for visual updates. Link the related issue or task when one exists.

## Deployment & Content Notes
Before publishing, replace placeholder identity, email, social links, and project cards in `index.html`. Keep the site dependency-light unless a broader architecture change is intentionally planned.
