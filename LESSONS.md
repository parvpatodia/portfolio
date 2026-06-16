# LESSONS.md
> Append-only diagnostic log. Format: `date | what went wrong | root cause | corrective rule`.
> Read at session start. Promote recurring/general lessons into CLAUDE.md or a hook.

2026-06-15 | GitHub/LinkedIn icon buttons collapsed to clipped boxes when they wrapped onto their own flex line | Assumed `align-items: stretch` would size icon-only buttons to match their text-button siblings, but stretch only equalizes items on the SAME flex line; an item that wraps alone stretches to its own content height (~0 here, no vertical padding) | Never ship a layout that depends on flex-stretch from siblings. Give the element a self-sufficient size (padding / min-height) and visually verify at BOTH desktop and mobile widths before committing.

2026-06-15 | Risk of linking a private repo (career-ops-v2) and of adding a non-existent project (knowledge-distillation) straight from the task's candidate list | The prompt's project list was a starting point, not ground truth; v2 is private (would 403 for recruiters) and there is no knowledge-distillation repo | Verify every project against `gh repo list` (visibility + real description) before writing portfolio copy. Link only PUBLIC repos. Source descriptions from the repo itself, not from memory or the prompt.

2026-06-15 | An em-dash slipped into the og:image:alt meta attribute | Applied the no-em-dash writing rule only to visible prose, not to meta/alt/asset text | The global writing rules apply to ALL shipped text: meta tags, alt text, OG assets, JSON-LD. `grep $'—'` the diff before committing.

2026-06-15 | preview_screenshot returned a blank frame on deep-scrolled pages | The screenshot tool does not reliably preserve an eval-set scroll position on long pages | For long pages, verify deep sections via DOM eval (geometry + text + hrefs) rather than relying on a scrolled screenshot; use screenshots for above-the-fold/short viewports.

2026-06-15 | Em-dashes slipped into v2 page titles, date ranges, prose, and CSS comments | Applied the no-em-dash rule while writing prose but not to data arrays, `title=` props, and meta | `grep -rn $'—' src/` before every commit; titles and data objects are output too. Date ranges use en-dash, titles use `|`, prose gets rewritten.

2026-06-15 | Mobile nav was `display:none` with no replacement, stranding phone users on a multi-page site | Copied a single-page hide-on-mobile rule into a multi-page layout where the nav is the only way between pages | Any responsive nav that hides desktop links MUST provide a mobile alternative. Verify nav links are reachable at 375px before shipping.

2026-06-15 | Nearly published a wrong/garbled book title ("Autobiography of Demesis Abis") on the live site | Voice-transcribed user input was garbled; my first guesses (Power Law, NdGT Cosmos) were also wrong | Verify factual claims (book titles/authors, awards) against an authoritative source (WebSearch) before they go live; flag, do not guess. Decoded to "The Infinity Machine" by Sebastian Mallaby (Demis Hassabis bio) via search.

## Retro metrics (2026-06-15, autonomous session)
parv_corrections=0 (not yet reviewed by Parv) | repeat_mistakes=0 (no prior log) | bugs_found=1 (icon-button collapse, caught in visual QA pre-"done") | shipped_first_try=false (feature 2 needed a layout rework after visual QA) | rework_commits=1
Adversarial diff review verdict: SHIP (0 blocking findings).
