# Auburn Muse Photography — auburnmuse-website-repo

Static website for **Emmi Breazeale's** photography business in **Huntsville, TX**
(digital and film; couples, family, senior, and wedding sessions). Replaces her
Pixieset site at https://auburnmuse.mypixieset.com/, whose copy, packages, prices,
process, and FAQ were carried over in her own voice.

Plain HTML/CSS/JS, no build step. Brand palette was **sampled from Emmi's own
flier**: green `#48725e`, cream `#feebda`, dark forest ink `#0b3521`. The Roman
column mark from the flier is recreated as inline SVG (nav + footer) and drawn into
`favicon.ico` / `img/favicon.png` / `img/apple-touch-icon.png`. Fonts: Cormorant
Garamond (display), Jost (body), Pinyon Script (script accents, echoing the flier).

## Pages

| Page | Purpose |
|---|---|
| `index.html` | Hero (bride on steps), facts strip, session cards with prices, featured photos, about teaser |
| `portfolio.html` | Masonry gallery + lightbox (4 wedding photos so far) |
| `pricing.html` | The four packages with her real prices, four-step process |
| `about.html` | Emmi's story in her own words, what-to-expect cards |
| `book.html` | Booking form (Formspree), contact sidebar, good-to-know, FAQ |

## Run locally

```bash
python -m http.server 8152 --directory .
```

Or `preview_start({name:"auburnmuse"})` from the root `.claude/launch.json`.

Run checks before committing:

```bash
python ../site-checks/check_site.py .
```

## Deploy

GitHub Pages under github.com/alexharper24: create the `auburnmuse-website-repo`
repo, push `main`, Settings → Pages → Deploy from branch → `main` / root.
Canonical/OG/sitemap URLs currently point at
`https://alexharper24.github.io/auburnmuse-website-repo/`; swap them (and the
absolute URLs in `404.html`) when a custom domain is chosen.

## DRAFT MODE — currently ON

Every page carries `noindex,nofollow` and `robots.txt` is `Disallow: /`, so Emmi
can review by URL while search engines stay out. At launch: remove the noindex
meta from every page, flip robots.txt to `Allow: /`, and update canonicals if a
domain landed.

## Pending (the project tracker — keep current)

- [ ] **Formspree form ID** — `book.html` still has `YOUR_FORM_ID`; the form shows
      a friendly fallback message until it is set. First real submission needs the
      one-time confirmation email clicked. Free tier: 50/month.
- [ ] **More portfolio photos** — only 4 wedding photos so far (one gallery).
      Emmi's Pixieset has three unnamed galleries; get exports from her, ideally
      couples/family/senior sessions so the portfolio covers what she sells.
- [ ] **Social links** — she has an Instagram/Facebook presence ("dm to book") but
      no URLs were provided. Add to footer, book page, and JSON-LD `sameAs`.
- [ ] **Phone number** — intentionally absent (her flow is email/DM). Add if she
      wants one published.
- [ ] **Bio expansion** — About page uses only her own published words. She may
      want to add more personal detail (the dalmatian in her photo is uncaptioned
      on purpose; no name/ownership was given).
- [ ] **Domain** — none chosen. When it lands: GitHub Pages custom domain first,
      then DNS, then Enforce HTTPS; update canonicals/OG/sitemap/404.
- [ ] **Analytics** — no GA4 property yet.
- [ ] **Go live** — flip draft mode off (see above) after content lands.
- [ ] **Logo file** — the column mark is a faithful SVG recreation from the flier
      JPEG. If Emmi has the original design file (Canva?), swap for exactness.

## Notes and deliberate choices

- **No fabricated content.** All copy derives from Emmi's Pixieset site and
  fliers. Nothing about her history, experience, or the dog was invented.
- **Wedding price is listed as $500 flat** per her Pixieset "book" page.
- `source-photos/` holds the original Facebook-resolution JPEGs and both fliers,
  tracked deliberately (small, and our only copies). Camera originals
  (HEIC/RAW/MOV) are gitignored by extension.
- The `breazealebros-website-repo` in this folder likely belongs to related
  people; **no cross-linking** was added (house rule: never infer relationships).
- Site checks CI is wired (`.github/workflows/site-checks.yml`) and passes with
  only the expected `YOUR_FORM_ID` warning.
