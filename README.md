# Auburn Muse Photography — auburnmuse-website-repo

Static website for **Emmi Breazeale's** photography business in **Huntsville, TX**
(digital and film; couples, family, senior, and wedding sessions). Replaces her
Pixieset site at https://auburnmuse.mypixieset.com/, whose copy, packages, prices,
process, and FAQ were carried over in her own voice.

Plain HTML/CSS/JS, no build step. The Roman column mark from the flier is recreated
as inline SVG (nav + footer) and drawn into `favicon.ico` / `img/favicon.png` /
`img/apple-touch-icon.png`. Fonts: Cormorant Garamond (display), Jost (body),
Pinyon Script (script accents, echoing the flier).

## Palette

Greens and cream were **sampled from Emmi's own flier**; rose is the one added hue.

| Token | Hex | Used for |
|---|---|---|
| `--green` | `#48725e` | primary: buttons, accents, step markers (5.5:1 behind white) |
| `--green-deep` | `#35604e` | button hover |
| `--green-ink` | `#0b3521` | footer, facts strip, photo-band base, headings |
| `--green-soft` | `#c9d9d0` | hairlines, secondary text on dark |
| `--green-mist` | `#e9f0ec` | tinted section backgrounds |
| `--rose` | `#f4dee0` | the closing CTA band (light) |
| `--rose-deep` | `#8c4f57` | the only rose safe for text, 4.9:1 on the band |
| `--rose-line` | `#e6c6ca` | CTA band hairlines |
| `--cream` | `#feebda` | text and buttons on dark bands |
| `--paper` | `#fdf9f3` | page background |
| `--ink` / `--ink-soft` | `#22322a` / `#5a685f` | body copy |

The palette was entirely one green hue at first, which made the CTA band and the
footer read as a single dark slab. The rose fixes that by hue, not lightness, and
the CTA is deliberately **light** so the page closes light then dark.

## Pages

| Page | Purpose |
|---|---|
| `index.html` | Full-background hero (the couple-by-the-columns photo from her Pixieset home page, over a brand-green scrim), facts strip, session cards with prices, featured photos, about teaser |
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

## Live

**https://alexharper24.github.io/auburnmuse-website-repo/**

Published 2026-08-13 on GitHub Pages (deploy from `main` / root, HTTPS enforced).
Pushing to `main` redeploys in about a minute. Canonical, OG, sitemap, and the
absolute URLs in `404.html` all point at that address; swap them when a custom
domain is chosen.

## DRAFT MODE — currently ON

Every page carries `noindex,nofollow` and `robots.txt` is `Disallow: /`, so Emmi
can review by URL while search engines stay out. At launch: remove the noindex
meta from every page, flip robots.txt to `Allow: /`, and update canonicals if a
domain landed.

## Pricing: PROPOSED, not yet approved by Emmi

> **The prices on this site are a recommendation, not what Emmi currently charges.**
> Alex asked for a beginner-reasonable ladder on 2026-08-13 and approved the numbers
> below. **Emmi has not seen or agreed to them.** This is the main reason the site
> must stay in draft mode until she signs off. Do not send her clients here, and do
> not lift draft mode, until she confirms.

| Package | Duration | Her current price | **On this site** | Deliverable | Turnaround |
|---|---|---|---|---|---|
| Mini | 30 minutes | $65 | **$85** | 10&ndash;20 edited images | 2&ndash;3 weeks |
| Couples | 1 hour | $125 | **$150** | 15&ndash;25 edited images | 2&ndash;3 weeks |
| Family | 1 hour (inquire for longer) | $200 | **$225** | 30&ndash;50 edited images | 2&ndash;3 weeks |
| Weddings | not stated on her page | $450 | **$900** | 150&ndash;450 photos | 6 weeks |

Travel fees may apply on all of them. Deliverables and turnaround are unchanged and
still verbatim from her Pixieset page.

### Why these numbers

Effective hourly rate on her own published deliverables, including travel, culling,
editing, and admin:

| Session | At her price | Realistic hours | Gross/hr |
|---|---|---|---|
| Mini | $65 | ~3.5 | ~$19 |
| Couples | $125 | ~4.5 | ~$28 |
| Family | $200 | ~6 | ~$33 |
| Weddings | $450 | ~23&ndash;37 | **~$12&ndash;20** |

That is gross, before gear, insurance, gallery hosting, software, mileage, and
self-employment tax at 15.3%.

**The wedding was the structural problem.** At $450 it was 3.5x the couples session for
20&ndash;30x the labour; the normal ratio is 6&ndash;15x. At $900 it sits at 6x, the
bottom of that band, and still well under the $800&ndash;1,500 typical of beginner
wedding photographers. The portrait tiers moved only slightly, deliberately, since they
were already defensible for someone building a book.

### Still worth doing (not applied, since it changes her offer rather than her price)

- **Trim the deliverables.** 150&ndash;450 edited wedding images and 30&ndash;50 for a
  one-hour family session are generous by professional standards. Cutting the wedding to
  "8 hours coverage, 250+ images" cuts her workload a lot without touching price, and a
  curated gallery is a better product than an exhaustive one.
- **Retire the "DISCOUNTED" / "LOW PRICE" framing** on her fliers once the portfolio
  fills. Clients acquired on price are the hardest to raise later.
- **Give the portfolio-building phase an end condition** ("next 5 bookings") and raise
  from there.

An earlier read of her page returned $125 / $150 / $250 / $500 and 7&ndash;15 images
for Mini, and those wrong numbers were briefly published on 2026-08-13 before being
corrected the same day. Cause was not determined: either Pixieset served a stale cache
or Emmi changed her prices. **Re-check her live page before any future edit that touches
pricing.** Prices are hers to set and must never be inferred.

Prices appear in six places, so change all of them together:
`index.html` (JSON-LD `priceRange`, meta description, facts strip, four session
rows), `pricing.html` (meta description, og:description, four packages),
`book.html` (session-type dropdown), `portfolio.html` (CTA "sessions start at").

## Pending (the project tracker — keep current)

- [ ] **Emmi to approve the proposed pricing** ($85 / $150 / $225 / $900). These are a
      recommendation Alex signed off on, not her published rates, and the wedding is
      double what she currently charges. **This blocks launch.** If she declines, revert
      to $65 / $125 / $200 / $450 in the six places listed below.
- [ ] **Formspree form ID** — `book.html` still has `YOUR_FORM_ID`; the form shows
      a friendly fallback message until it is set. First real submission needs the
      one-time confirmation email clicked. Free tier: 50/month.
- [ ] **Photos beyond the one wedding** — every image on the site was pulled from
      her Pixieset pages (15 in the portfolio). They are all from the same
      courthouse wedding, plus a few detail shots. She sells mini, couples, and
      family sessions too, so **ask her for senior / family / maternity work**;
      until then the pricing page illustrates those packages with wedding frames,
      which is honest but not ideal.
- [ ] **Instagram** — her Facebook page is wired in (found in the Pixieset
      footer). Her profile says "dm to book", so get the Instagram handle and add
      it to the footers, the booking sidebar, and the JSON-LD `sameAs`.
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
