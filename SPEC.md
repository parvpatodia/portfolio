# Portfolio High-Impact SPEC

> Goal: a recruiter or hiring engineer who lands here for 30 seconds immediately gets
> that Parv does serious AI/ML/robotics work, and can act (resume, GitHub, contact).
> Context: FALL 2026 co-op/internship hunt, start ~early August 2026. BUILD mode.
> Design was recently polished. Do NOT redesign. Fix substance and high-impact gaps.

Audited 2026-06-15 against the live site (parvpatodia.vercel.app) and verified every
project against the real GitHub repos via `gh repo list`. No fabrication: project copy
is sourced from the actual repo descriptions.

## Top 5 improvements (ranked by recruiter impact, each commit build-gated)

### 1. Fix the availability / value-prop mismatch  [CRITICAL substance bug]
The single most damaging issue. The site says he is open to "full-time roles starting
summer 2027" and the hero overline reads `open_to_2027`. He is actually hunting a
**Fall 2026 co-op / internship (start ~August 2026)**. A recruiter filling a Fall 2026
co-op reads "2027" and bounces.
- Hero overline `open_to_2027` -> current, accurate availability.
- Contact paragraph: lead with co-op / internship for Fall 2026 (August start).
- Tighten the hero one-line value prop so the domain (AV / robotics / ML) is unmissable.
- `passes: false`

### 2. Put GitHub + LinkedIn (+ resume) above the fold
A recruiter's first action is to click through to code and profile. The hero currently
offers only "View Projects" and "Resume". GitHub and LinkedIn live only in the footer.
- Add GitHub + LinkedIn icon links to the hero CTA row (reuse existing button styles).
- `passes: false`

### 3. Surface his strongest, most recent real work
Three strong, public, just-pushed repos are completely missing, and his flagship MS
research is mislabeled "Coming Soon" despite being live. Copy sourced from real repos:
- **av-policy-lab**: upgrade to the real research framing ("controlled study of when
  generative/diffusion planners beat deterministic ones on nuPlan, and whether that
  survives realistic reactive agents; MS research, Northeastern"). Drop the misleading
  "Coming Soon" badge (repo is public with commits). Keep "In Progress".
- **Feynman-Loop** (public, Python): "AI tool for thought... you explain a concept, it
  finds the gap against a trusted source, and resurfaces what you don't yet truly know."
- **Trace** (public): "curiosity inference newsletter agent."
- **career-ops** (public): autonomous job-search system, 14 skill modes, Go dashboard,
  PDF generation, batch processing. NOTE: career-ops-v2 is PRIVATE -> do not link v2
  (403 for visitors); link the public career-ops. See "Verify" below.
- Do NOT add `knowledge-distillation` — no such repo exists (it is study material).
- `passes: false`

### 4. SEO / discoverability + social sharing
- The OG image is a placeholder pointing at `/og-image.png`, which does not exist ->
  every shared link (LinkedIn, Slack, iMessage, Twitter) shows a broken preview.
  Generate a real 1200x630 `og-image.png`.
- Layout.astro meta gaps: canonical, `og:url`, `og:site_name`, `og:image:alt` +
  dimensions, `twitter:image`, `author`, `theme-color`.
- Add JSON-LD `Person` schema (name, jobTitle, alumniOf, sameAs: GitHub + LinkedIn) for
  name-search rich results.
- Add `robots.txt` + `sitemap.xml`.
- `passes: false`

### 5. Performance + accessibility pass
- Fonts load via a render-blocking `@import` inside global.css (chained request, worst
  case for LCP). Move to `<link rel="preconnect">` + stylesheet in the head.
- Headshot `<img>` has no width/height (CLS) and no lazy/async hints. Add them.
- Add a `prefers-reduced-motion: reduce` global guard; gate the JS effects (boot,
  typewriter, scramble, cursor, tilt, magnetic) so reduced-motion users get a static page.
- Add `:focus-visible` outlines for keyboard navigation.
- Bump `--muted` (#6B7280 ~3.9:1 on the dark bg) to meet WCAG AA 4.5:1.
- `passes: false`

## Verify (Parv must confirm — NOT changed without his say; possible fabrication risk)
- **LinkedIn URL conflict**: contact uses `linkedin.com/in/parvpatodia`, footer uses
  `linkedin.com/in/parvpatodia-ai-silicon-valley/`. At least one is wrong. Standardizing
  to one; confirm the correct vanity URL.
- **Event date inconsistencies**: YC x DeepMind hackathon shows "Dec 2024" (hackathon
  card) vs "Dec 2025 – Present" (Laksh card); a repo "Pocket-Film-Director" is tagged
  "YC x Deepmind Hackathon Project (7 March 2026)". Northeastern SV Showcase "Late 2024"
  and GTC "March 2025" predate his Sep 2025 move to San Jose (he was at UOB Singapore
  until Jun 2025). Dates left untouched — verify against the real timeline.
- **Multimodal RAG** card links to the bare GitHub profile, not a repo. Provide a repo or
  drop the link.
- **career-ops-v2** is private. Confirm whether to keep it private (link public
  career-ops) or make v2 public.
