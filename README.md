# Road Queen Fitness

The website for **Road Queen Fitness** — Soca dance and conditioning classes,
live on Zoom and Instagram, with on-demand videos and merch.

**Live site:** https://roadqueenfitness.com

It is plain HTML, CSS and JavaScript: no build step, no server. GitHub Pages
publishes whatever is on the `gh-pages` branch, so a commit there goes live in
about a minute.

## Editing the site

| What | Where |
| --- | --- |
| Email, social links, Instagram handle, Zoom link, live-stream embed | `js/config.js` |
| Classes (and each class card's photo), events, videos, products and prices | `js/data.js` |
| Page wording (About Us, goals, headings) | `index.html` |
| Colors and layout | `css/style.css` (colors are the variables at the top) |
| Photos | `img/` — after adding or replacing one, run `python3 tools/images.py` to make the phone-sized copies the page uses |

You can edit any of these on github.com: open the file, click the pencil, then
**Commit changes**.

- **Classes** are written in the studio's time zone (`timezone` in
  `js/config.js`); visitors see them in their own time zone.
- **Videos** show "Premieres soon" until you paste a YouTube video ID into
  `youtubeId` (the part after `watch?v=` in the video's link).
- **Forms and checkout:** with `joinEndpoint`, `uploadEndpoint` or
  `checkoutUrl` left blank, sign-ups, clip submissions and orders open a
  pre-filled email to the address in `email`. Paste a form service URL
  (e.g. Formspree) or a hosted checkout link (Shopify, Square, a Stripe
  Payment Link) to take them online instead.

## Logo and brand files

The logo is a carnival feather headpiece over the Trinidad & Tobago flag.
`icon.svg` is the master file; the PNGs in `brand/` are ready to upload:

| File | Use it for |
| --- | --- |
| `brand/profile-photo.png` | Instagram, TikTok, Facebook and YouTube profile pictures |
| `brand/logo-horizontal-dark.png` | Logo with name, on dark backgrounds (flyers, video intros) |
| `brand/logo-horizontal-light.png` | Logo with name, on white or light backgrounds |
| `brand/logo-mark.png` | The logo alone, transparent background |

`favicon.ico`, `apple-touch-icon.png` and `icon-192/512.png` (listed in
`site.webmanifest`) are the browser-tab and phone home-screen icons.

## Fonts and speed

The two typefaces (Anton and Inter) are served from `fonts/` rather than
Google Fonts, so the page paints without waiting on another server; their
licence is in `fonts/LICENSE.txt`. Photos are delivered as WebP in three
sizes with a JPEG fallback (`tools/images.py`), and the video library and
shop are built after the first screen is shown.

## Domain setup (roadqueenfitness.com)

The `CNAME` file tells GitHub Pages to serve this site at
`roadqueenfitness.com`. To finish connecting the domain:

1. **Make the repository public** (Settings → General → Danger Zone → Change
   visibility). On a free GitHub account, Pages only publishes public
   repositories.
2. **Register `roadqueenfitness.com`** with a domain registrar.
3. **Add these DNS records** at the registrar:

   | Type | Name | Value |
   | --- | --- | --- |
   | A | `@` | `185.199.108.153` |
   | A | `@` | `185.199.109.153` |
   | A | `@` | `185.199.110.153` |
   | A | `@` | `185.199.111.153` |
   | AAAA | `@` | `2606:50c0:8000::153` |
   | AAAA | `@` | `2606:50c0:8001::153` |
   | AAAA | `@` | `2606:50c0:8002::153` |
   | AAAA | `@` | `2606:50c0:8003::153` |
   | CNAME | `www` | `kevdogg05.github.io` |

4. **Verify the domain** in GitHub (profile picture → Settings → Pages →
   Add a domain) so no other GitHub account can claim it.
5. In this repository, open **Settings → Pages**. Check that the source is
   **Deploy from a branch: `gh-pages` / root** and the custom domain reads
   `roadqueenfitness.com`. Once the DNS check passes (minutes to a few hours),
   tick **Enforce HTTPS**.
