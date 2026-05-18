# Parv Patodia Portfolio

Personal portfolio site built with Astro and Tailwind CSS v4.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:4321 in your browser.

## Build for production

```bash
npm run build
```

Output goes to `./dist`.

## Deploy to Cloudflare Pages

**Option A: Cloudflare dashboard (recommended for first deploy)**

1. Push this repo to GitHub.
2. Log in to https://dash.cloudflare.com and go to Pages.
3. Connect your GitHub repo.
4. Set build command: `npm run build`
5. Set output directory: `dist`
6. Deploy.

**Option B: Wrangler CLI**

```bash
npm install -g wrangler
npm run build
wrangler pages deploy dist --project-name parv-portfolio
```

## Deploy to Vercel (backup)

```bash
npm install -g vercel
vercel
```

Vercel auto-detects Astro via `vercel.json`.

## Updating content

All content lives in one file: `src/pages/index.astro`

- **Headshot photo** - replace the `.about-photo-placeholder` div with an `<img>` tag pointing to your photo in `/public/`. Look for the comment `<!-- REPLACE: user to supply headshot image -->`.
- **Resume** - place your resume PDF at `public/resume.pdf`.
- **OG image** - place a 1200x630 PNG at `public/og-image.png` for social previews.
- **Research section** - find the comment `<!-- PLACEHOLDER: user to supply paper title, abstract, and co-authors from the NTU DR page -->` and fill in the title, abstract, and co-authors from https://dr.ntu.edu.sg/entities/publication/74a1db78-1992-435f-931a-0b3717e027f0.
- **New projects** - copy an existing `<article class="project-card ...">` block and update the content.

## Tech stack

- Astro 5
- Tailwind CSS v4 (via @tailwindcss/vite)
- Vanilla TypeScript for animations (no external JS dependencies)
- Google Fonts: Space Grotesk, Inter, JetBrains Mono
