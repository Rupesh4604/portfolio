# Shared site theme

The portfolio's look as one plain CSS file, for the blog, the GeoFM site, the Quantum papers site and anything else.
No build step and no framework needed.

| File | What it is |
|---|---|
| `theme.css` | Tokens for all three modes, base styles and the shared components |
| `preview.html` | Visual reference: the three modes side by side (open it in a browser) |
| `preview.src.html` | Source of the preview; `theme.css` is pasted in at `/*THEME*/` |

## The three modes

| Mode | When | Headings | Accent | Cards |
|---|---|---|---|---|
| A · Editorial | light theme, every screen | Instrument Serif 400, teal italic phrase | `#0E6B66` | white, hairline border, 14px radius |
| C · Glass | dark theme on laptops and tablets | Geist 500, tracking −0.035em, gradient phrase | `#7FD1C6` | 5% white, 22px blur, 20px radius, teal/blue glow |
| D · Bold | dark theme on phones (touch, under 600px) | Geist 600, tracking −0.045em | `#4FB3A9` | flat `#121416`, 8px radius, teal footer band |

## Set up

1. Fonts, in `<head>`:

   ```html
   <link rel="preconnect" href="https://fonts.googleapis.com">
   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
   <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Geist:wght@300..700&family=Instrument+Serif:ital@0;1&display=swap">
   ```

   The portfolio self-hosts the same fonts through `@fontsource-variable/geist` and `@fontsource/instrument-serif`; either works.

2. `<link rel="stylesheet" href="theme.css">`

3. Dark mode: put `class="dark"` on `<html>`. Glass or Bold is picked by screen type automatically.
   To pin one mode (for example a docs site that should always be Glass), use `<html class="dark" data-variant="glass">`.
   `data-variant` also works on any block, which is how the preview shows all three at once.

   Theme toggle that matches the portfolio (saves the choice, follows the OS by default):

   ```html
   <script>
     (function () {
       var s = localStorage.getItem("theme");
       var dark = s ? s === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
       document.documentElement.classList.toggle("dark", dark);
     })();
     function toggleTheme() {
       var dark = document.documentElement.classList.toggle("dark");
       localStorage.setItem("theme", dark ? "dark" : "light");
     }
   </script>
   ```

## Tokens

Colour: `--bg` page, `--bg-2` footer/bands, `--sf` card, `--ink` headings, `--i2` body, `--mu` meta, `--ln` lines,
`--ac` / `--ac-hover` accent, `--tint` + `--acink` tag fill and text, `--err`.
Type: `--font-sans`, `--font-display`, `--display-weight`, `--display-tracking`, `--h1-home`, `--h1-page`, `--h2`.
Shape: `--radius-card`, `--radius-btn`. Layout: `--wrap` 1200px, `--gutter`, `--section`.

Always style through tokens (`color: var(--mu)`), never hex values, so one rule works in all three modes.

## Components

`.wrap`, `.display`, `.h1-home`, `.h1-page`, `.h2`, `.lead`, `.meta`,
`.btn` (primary), `.btn-ghost` (outline pill), `.lk` (text link),
`.cd` (card) + `.cd-lift` (hover lift) + `.spot` (Glass spotlight, set `--x`/`--y` on pointermove),
`.glow` with two `<i>` children (Glass page glow), `.chip` (filter, `aria-pressed`), `.tag`, `.tag-line`, `.pill`, `.pulse-dot`,
`.chev` (drawn chevron that flips on `aria-expanded="true"`), `.row` (list row that nudges on hover),
`.site-header`, `.nav-pill` (Glass floating nav), `.footer-card` (rounded card; a teal band in Bold).

Headline accent: wrap the key phrase in `<em>` inside `.h1-home` or `.h2`.
Editorial shows it in teal italic. In Glass, add a gradient with `background: linear-gradient(90deg,#4FB3A9,#9FD8D1); background-clip: text; color: transparent;`.

## Keep in sync

`theme.css` copies `src/styles/tokens.css` and parts of `src/input.css`.
When a token changes in the portfolio, change it here too.
