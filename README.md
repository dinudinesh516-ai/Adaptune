# Adaptune Dance Crew: Website

React + Bootstrap + Vite landing page for Adaptune Dance Crew, Coimbatore. It's fully responsive and ready for Vercel.

## Run locally

```bash
npm install
npm run dev
```

## Adding gallery photos

1. Drop images (`.jpg`, `.jpeg`, `.png`, `.webp`, `.avif`; portrait or landscape) into the **`gallery/`** folder at the project root.
2. Commit and push to GitHub. Vercel rebuilds automatically and the new photos appear.

That's all you need to do. At build time every photo is resized and converted to optimised WebP (a thumbnail plus a full-screen version), so you can upload full-size phone photos without slowing the site down.

**Optional extras**

- **Categories / filters:** put photos in sub-folders, e.g. `gallery/annual-day/`, `gallery/sangeeth/`. Each sub-folder becomes a filter button ("Annual Day", "Sangeeth"). Photos left directly in `gallery/` appear under "All" only.
- **Order:** photos are sorted by file name in reverse, so date-prefixed names put the newest first, e.g. `2026-10-07-school-fest.jpg`.
- iPhone `.heic` files aren't supported. Export them as JPG first.

The two images currently in `gallery/` are your promo banners, included as placeholders. Delete them once you add real photos.

## Team photos

Every photo in the **`team/`** folder becomes a team card automatically (square photos fit best).
The file name is the key: `team/Vismai.jpg` → `TEAM.Vismai` in [`src/config.js`](src/config.js), where you set each
person's name, role (subtitle), years of experience, known styles, expert style, bio and Instagram link.
Clicking a card opens their profile. `TEAM_ORDER` sets who appears first (currently Vismai, Faizal, Jeffin); the rest follow alphabetically.

## Editing contact details and text

Everything business-related lives in [`src/config.js`](src/config.js): the WhatsApp number, Instagram/YouTube links, the address and the list of choreography services.
All enquiries open WhatsApp (`wa.me/919940712680`) with a pre-filled message.

> Double-check the YouTube URL in `src/config.js`. It's set to `https://www.youtube.com/@adaptune` as a best guess.

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. In Vercel: **Add New → Project → Import** the repo. It auto-detects Vite (`vercel.json` is already included).
3. Deploy. Every push to the main branch redeploys the site.

## Project structure

```
gallery/                 ← your photos (auto-loaded)
public/logo.png          ← favicon / social preview image
src/
  config.js              ← contact info, links, services
  gallery.js             ← gallery loader (import.meta.glob + imagetools)
  styles.css             ← brand theme (black + #FFC21A yellow)
  components/            ← Hero, Services, Gallery, Lightbox, Contact, …
```
