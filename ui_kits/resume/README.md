# UI kit — Résumé

Faithful recreation of **github.com/NabilPervez/resume** (`index.html`), rebuilt on the design-system components. This file is the origin of the entire NPC visual language: the token values in `tokens/` were lifted from its `:root` block verbatim.

| File | Contents |
|---|---|
| `resume-data.js` | All résumé copy, taken from the repo source |
| `ResumeHero.jsx` | 3-row hero grid + 260×340 portrait frame, plus the `rich()` `**bold**` helper |
| `ResumeMain.jsx` | Experience stack with hover isolation, AI-builds list, stats row |
| `ResumeSidebar.jsx` | Sticky sidebar: skills, MarTech tag cloud, certifications, awards, education |
| `index.html` | Mounts the page; the light/dark FAB toggle is live |

## Interactive behaviour reproduced
- **Hover isolation** on the experience stack — non-hovered cards fall to 0.28 opacity.
- **Shine sweep** across the hovered experience card (0.55s).
- **Light/dark toggle** via the bottom-right FAB, driving `[data-theme]`.
- Grain overlay at 0.55 opacity over the page.

## Known gaps
- The portrait slot is an empty labelled frame — the source loads `nabilpervez.com/images/nabil-headshot.jpg`, which was not supplied as a project asset.
- Scroll-reveal (`IntersectionObserver` fade + 24px rise) and the mobile reordering breakpoint are documented in `readme.md` but not wired up here.
- The source's full nine-job history is abbreviated to six entries; older roles follow the identical card pattern.
