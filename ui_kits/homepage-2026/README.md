# UI kit: NPC homepage 2026 (web layer)

The production homepage built on the **web layer** (`tokens/web.css`, `.npc-web`).
It is a real React app, not a mock, so this kit points at it instead of copying it.

- **Code:** github.com/NabilPervez/npc-homepage-redesign (React 18 + Vite + TypeScript, plain CSS)
- **Live:** https://npc-homepage-redesign.netlify.app
- **Copy:** `src/content.ts` in that repo holds every word, client name, offering and testimonial.

## Section order (and the component that renders it)

| # | Section | Component | Pattern |
|---|---|---|---|
| 1 | Nav | `Nav.tsx` | Frosted ink bar: mark · centred links · one gold CTA. Phones: mark · gold "Book now" · menu button opening a native `<dialog>` sheet. |
| 2 | Hero | `Hero.tsx` | The business card full-bleed: lattice pattern, two ripple rings, gold N, "Brand. Web. AI. Product. *Done right.*" |
| 3 | Proof strip | `Proof.tsx` | Big stat numbers (count up once) + two rows of client names drifting in opposite directions, with a pause button. |
| 4 | Statement + award | `Statement.tsx`, `Trophy.tsx` | Words light up as you scroll; beside it the isometric gold trophy, still, gleaming. |
| 5 | Four ways in | `Offerings.tsx` | "One Agency. Four Ways We Help." Four-quadrant lattice tile, one colour per offering; copy either side on desktop, a swipe rail with dots on phones. Then two buy cards (project / retainer, retainer in gold). |
| 6 | Our work | `WorkReel.tsx` | Endless bento reel of portfolio tiles, slow auto-drift, native swipe, pause. |
| 7 | How it works | `Closing.tsx` → `Process` + `StepArt.tsx` | Three steps, each with a line drawing that draws in on reveal. |
| 8 | In their words | `Closing.tsx` → `Voices` | 11 testimonials in an endless drift. |
| 9 | About | `Closing.tsx` → `About` | Photo and two-tone statement side by side at every width. |
| 10 | Close | `Closing.tsx` → `Close` | "Everything starts with a call." The hero's ripple returns. |
| 11 | Footer | `Closing.tsx` → `Footer` | Colophon: brand · navigate · offer · contact. |

## Reusable pieces worth lifting

- `Reveal.tsx`: one shared IntersectionObserver; content visible without JS, fade + 30px rise with JS.
- The lattice quadrant (`Offerings.tsx` → `Lattice`): circles of radius S/2 on the corners and centre of an S square, stroked thick in three tones of one hue; Product draws the same lattice as double gold hairlines.
- The bento reel (`WorkReel.tsx`): columns of height H, widths in multiples of H, tiles split each column; a duplicated set for the loop; scrollLeft driven by rAF so swipe still works.
- The trophy (`tools/trophy/build.mjs`): geometry built once with the anatomy kit, recoloured by CSS variables (ink plinth, gold `.au` groups).
