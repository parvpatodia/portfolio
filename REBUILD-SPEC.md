# Portfolio v2 — Ground-Up Rebuild SPEC

> Mandate (2026-06-15): full ground-up rebuild. Reference: Maxime Heckel (maximeheckel.com)
> — sophisticated, physics-based, genuinely custom motion. Goal: a production-grade,
> professional site that ALSO tells Parv's whole story (not just academia/projects).
> BUILD mode. No fabrication: personal-section copy comes from Parv, not invented.

## What's wrong with v1 (the "vibe-coded" tells to remove)
- Boot-sequence overlay, text-scramble headings, custom dual-ring cursor, magnetic
  buttons, 3D card tilt — decorative gimmicks with no meaning. Cut all.
- A canvas attention-map labeled "live" that is actually pre-baked patterns. Dishonest.
  Either remove or relabel as an illustrative static visual.
- One 1,617-line `index.astro`. Not maintainable. Break into components.
- Motion is CSS-keyframe + hand-rolled rAF. Replace with a real spring system.

## Design system (Maxime-Heckel-informed, kept in Parv's AV identity)
- **Color**: deep near-black base, a single confident accent (keep the blue/cyan family),
  restrained. Define semantic tokens (bg, elev-1/2, border, text-primary/secondary/tertiary,
  accent, accent-muted). Fix the contrast floor (already at AA from v1).
- **Type**: modular scale (1.2 ratio), display = Space Grotesk, body = Inter, mono =
  JetBrains Mono (keep, but a real scale + tighter tracking + better line-heights).
- **Space**: 4/8px spacing system, generous section rhythm, max-width ~720px for prose,
  wider for project grids.
- **Motion**: Motion One (`@motionone/dom`, ~5kb, spring physics, framework-agnostic — fits
  Astro with no React overhead). Principles: motion has meaning, springs not linear easings,
  reveal-on-scroll with subtle stagger, respects `prefers-reduced-motion` from day one.
- **Signature interaction**: ONE meaningful hero visual that represents his domain — an
  interactive LiDAR/point-cloud (or driving-trajectory) canvas that reacts to the cursor.
  This replaces the decorative sweep and is personal, not generic.

## Architecture
- Componentize: `src/components/` → `Nav`, `Hero`, `Story`, `Journey`, `Experience`,
  `Projects`, `Research`, `Beyond`, `Bookshelf`, `Contact`, `Footer`, plus primitives
  (`Section`, `Reveal`, `Tag`, `Card`).
- Keep Astro static output + Vercel. Add `@motionone/dom` only.
- Carry over all v1 SEO/meta/OG/JSON-LD/sitemap work (it's good; do not regress it).

## Information architecture (content-driven — tells the whole story)
1. **Hero** — name, one-line value prop, availability (Fall 2026 co-op), resume/GitHub/
   LinkedIn, signature interactive visual. [have]
2. **Origin** — how he got into AI/robotics, told personally. [NEEDS PARV]
3. **Journey** — India → Singapore → Silicon Valley, as a timeline/narrative. [NEEDS PARV]
4. **Experience** — Venti (AV test), UOB (SRE), NU (GTA). [have]
5. **Projects** — av-policy-lab, Laksh.ai, ViT, career-ops, Feynman-Loop, Trace, + more.
   All synced to real public GitHub repos (done in v1). [have]
6. **Research** — NTU FYP (award). [have]
7. **Beyond code** — sports (basketball, F1, cricket, tennis) + music/film/travel/etc.
   [partial; NEEDS PARV for the new interests]
8. **Bookshelf** — books that shaped him, technical and not. [NEEDS PARV]
9. **Contact** — email, links, location. [have]

## Raw material needed from Parv (so the story is genuine, not invented)
- **Origin**: what first pulled you into AI/robotics? a moment/project/person. 2-4 sentences.
- **Journey**: where in India you grew up; the Singapore years (NTU, UOB); why the SV move.
  A few real specifics each.
- **Books**: 5-10 titles + authors that shaped you (mix technical / non-technical); one line
  each on why, if you can.
- **Other interests**: music (artists/genres), film, travel, food, gaming — whatever is
  actually you, with specifics.
- **The blog/article link** you mentioned (it did not come through in the message).
- **Cut list**: anything currently on the site that is wrong or you want gone.

## Build phases (each build-gated + committed; deploy at the end after your review)
- P0: add Motion One; design tokens + type scale + base styles; `Section`/`Reveal` primitives.
- P1: Nav + Hero (signature LiDAR/point-cloud interaction), de-gimmicked.
- P2: Projects + Experience + Research (real data, refined cards).
- P3: Origin + Journey + Bookshelf + Beyond (drop in Parv's content).
- P4: polish pass, a11y + Lighthouse, cross-device QA, adversarial review, deploy.

## Non-negotiables (carry from v1)
Runs; deploys; AA contrast; reduced-motion respected; no secrets; honest status; all
external links `rel="noopener noreferrer"`; OG/meta/JSON-LD intact; no fabricated facts.
