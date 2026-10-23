# Upstream source

repo: NabilPervez/resume
branch: main
path: index.html

## Last sync

date: 2026-08-31T14:05:36Z

### Updated in this project
- Lifted the full token layer (colours, type, spacing, radii, shadows, easing) from the résumé's `:root` block into `tokens/`.
- Built 17 components across core / cards / navigation / brand from the résumé's card, tag, nav and FAB patterns.
- Recreated the résumé as a UI kit with hover isolation, shine sweep and the live light/dark toggle.
- Kept a verbatim copy of the source at `reference/resume-source.html` as ground truth.

## Screen map

| Screen / file | Built from |
|---|---|
| `ui_kits/resume/index.html` + `Resume*.jsx` + `resume-data.js` | `index.html` (whole file) |
| `tokens/colors.css`, `typography.css`, `spacing.css`, `radius.css`, `elevation.css`, `motion.css` | `index.html` — `:root` and `[data-theme="light"]` blocks |
| `components/cards/*` | `index.html` — `.job-card`, `.project-card`, `.stat-chip`, `.cert-item`, `.edu-item`, `.award-item` |
| `components/core/*` | `index.html` — `.project-link-btn`, `.hero-eyebrow`, `.section-head`, `.divider`, `.tag`, `.stat-chip` |
| `components/navigation/*` | `index.html` — `nav`, `.fab`, `.fab-btn` |
| `guidelines/*.html` | `index.html` — token values and hover/motion rules |
| `ui_kits/consulting-site/*` | nabilpervezconsulting.com copy (not repo-derived); styling from `index.html` |

## 2026-10-23 · Direction change

repo: NabilPervez/npc-homepage-redesign (branch main) is now the ground truth.

- Tokens moved to the homepage style: Outfit only, closed 62/32/24/22/18/16/14/13 scale, neutral
  hairlines, no shadows, 20px cards and pill controls, `cubic-bezier(.16,1,.3,1)`, offering colours.
  Old token names are kept and remapped so existing components still resolve.
- Kept: ink and gold ramps, the lattice pattern, every mark and asset, the voice.
- Retired: Cormorant Garamond on screen, gold-tinted hairlines, shadows, grain, hover isolation and
  shine sweep. Four specimen cards regrouped as "Retired (pre-2026)".
- New: PROMPT.md (copy-paste starter prompt), rebuilt index.html, rewritten readme foundations.
