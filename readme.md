# Nabil Pervez Consulting — Design System

The brand system for **Nabil Pervez Consulting (NPC)**, the consultancy of Nabil Pervez — Founder and Principal Consultant, former Co-Founder / CTO of the award-winning agency **AOE Creative**, and currently AI Implementation SME & Content Producer at T-Mobile.

NPC sells senior judgment to two audiences at once: **organizations** (company branding, web development, marketing consulting, IT consulting) and **individuals** (personal branding, career consulting), plus AI consulting, résumé building and paid speaking. The visual language has to read credible to a Fortune-500 marketing VP and aspirational to a mid-career professional. It does that with one move: **near-black cool navy ink, one champagne-gold accent, high-contrast serif display type, and hairline structure** — editorial luxury rather than SaaS.

---

## Sources this system was built from

| Source | What was taken |
|---|---|
| **github.com/NabilPervez/resume** (`index.html`, branch `main`) — the ground truth | The entire token layer: colour ramps, gradients, type stack, spacing, radii, shadows, easing, hover behaviour. Preserved verbatim in `reference/resume-source.html`. |
| `uploads/3.5x2_NPC_Card_Flat.pdf` → `assets/npc-business-card.pdf` | The print palette, extracted from the artwork's fill operators: `#131921` ink, `#2C2E35` panel, `#AC9760` champagne. Page geometry 270×162pt (3.75×2.25in with bleed). |
| `uploads/Nabil_Full (1).png` → `assets/wordmark-nabil-pervez.png` | The "NABIL PERVEZ" wordmark, black on transparent, 6572×3072. |
| `uploads/Nebtune-removebg-preview (1).png` → `assets/mark-nebtune-teal.png` | The "N" glyph, supplied in its original teal `#48A3C2`. |
| `uploads/Copy of 3.png` → `assets/brand-card-lockup.png` | **The master lockup and the true brand palette.** Measured off the artwork: ground `#0D1522`, champagne `#AB9563`. Establishes the N glyph as a *gold* mark, the split pattern/clear-field layout, and the letterspaced "NABIL PERVEZ CONSULTING" line. |
| `uploads/GoldPattern.png` → `assets/pattern-gold.png` | The NPC geometric pattern — interlocking champagne circles, `#AB9563` on white, 2202×3303. `assets/pattern-gold-alpha.png` is the same artwork with the white knocked out so it tiles over any ground. |
| `uploads/NPC - White.png` → `assets/monogram-npc-white.png` | The serif "NPC" monogram, 752×332. Gold and ink tints alongside. |
| `uploads/nabil-headshot.jpg` → `assets/nabil-headshot.jpg` | The portrait. Now live in both UI kits. |
| `https://nabilpervezconsulting.com/` | All division, speaker, keynote and case-study **copy** (supplied in the brief). The live site is client-rendered and returned no server HTML, so its layout could not be read from source — see the caveat below. |

Anyone with access should read the résumé repo directly — it is the most complete expression of the brand in code, and re-reading it will produce better work than reading this summary alone.

---

## CONTENT FUNDAMENTALS

**Voice: first person singular, addressed to "you."** Nabil writes as himself, not as a company. "I'm Nabil." "I design, build, host, and manage your digital presence so you can focus on your business." The plural "we" appears only where a team is genuinely implied ("We help agencies and businesses execute award-winning strategies") — and the brief mixes the two freely, which is characteristic rather than sloppy.

**Every claim carries a number.** This is the single strongest habit in the copy. Not "grew the account" but "45M views in 4 months." Not "scaled the agency" but "$5M portfolio, 90% client referral rate." Not "improved support" but "reduced ticket time from 24h to 8h." When you write new copy, find the number or don't make the claim.

**Structure: label → promise → proof.** Division and case-study cards all follow it:

> `Experiential` / **Houston Outlaws** / Directed award-winning campaign with pop-up shops. / *10M+ impressions, 10k+ attendees.*

**Named-brand credibility is used deliberately and often.** Riot Games, LEGO, Coca-Cola, Red Bull, Paramount Pictures, Activision Blizzard, T-Mobile, SypherPK. Client names do work that adjectives can't; the copy leans on them rather than on words like "world-class."

**Casing.** Sentence case for sentences. **Title Case for headings and division names** ("Company Branding", "Keynote Topics", "The Agile Creative"). ALL CAPS only as a typographic device — eyebrows, section heads, nav links, button labels — never as emphasis inside a sentence.

**Calls to action are literal and repetitive by design.** "Explore Company Branding." "Explore Web Development." "Explore Marketing Solutions." The verb never changes; only the noun does. Speaker CTAs are two words: "Book Nabil", "Download Kit".

**Sentence rhythm is short and declarative, with a contrarian opener.** "Creativity without process is just chaos." "Stop being filtered out." "Gaming isn't just a hobby; it's the dominant culture of the next generation." "Marketing is now a technical discipline. If your marketing leader doesn't understand the tech stack, you're losing money." State the uncomfortable thing, then the fix.

**Quoted jargon signals scepticism.** The copy puts industry words in quotes when it means to poke at them: `"process"`, `"Definition of Done"`, `"grunt work"`, `"Authenticity"`, speaking `"Internet"`. Use straight double quotes in data, curly in rendered copy.

**Punctuation.** Middle dot `·` separates metadata ("T-Mobile · Frisco, TX", "Python · PowerShell · React"). En dash `–` for date ranges ("Aug 2025 – Present"). Em dash `—` for the achievement-bullet marker and for interruptions. Ampersand `&` in headings, "and" in prose.

**No emoji. Anywhere.** The résumé, the business card and the site copy contain none. The only non-alphabetic glyphs in use are the gold `★` on awards, the `—` bullet marker, and `↗` on outbound links.

**Vibe:** confident, plain-spoken, allergic to buzzwords while operating in a buzzword industry. The bio says it out loud: "His unique brand of optimism, charisma, and honesty has been freshing in world of buzzwords." Warmth without softness; nothing is oversold, because the numbers are doing the selling.

---

## VISUAL FOUNDATIONS

### Colour
One ground, one accent. **Cool navy-black ink** (`--ink-950 #07101F` on screen, `--ink-880 #0D1522` on brand artwork, `--ink-800 #131921` in print) and **champagne gold** (`--gold-300 #DDB84A` on screen, `--gold-500 #AB9563` — the measured brand champagne — in print and in all mark artwork). There is no third hue. No blues, no greens, no semantic red/amber/green set — nothing in the sources needs one, and adding one would break the identity. The teal `#48A3C2` in the original "N" file is a holdover: the brand-card artwork shows the same glyph in champagne, so **gold is the correct treatment** and teal should not appear anywhere.

Text is `#E2EAF4` at full strength and `#5E718F` muted — and **the muted grey carries most of the body copy**, which is why the pages read quiet. Emphasis inside muted paragraphs promotes words to full-strength text or to gold, never to a larger size.

Light theme (`[data-theme="light"]`) inverts to `--paper-100 #EEF2FA` with `--gold-700 #9A6A10` for contrast; `--gold-800 #8A5C08` is the mark tint that passes AA on paper. Dark is the product default, but **light is where the print identity lives** — the business card and the pattern artwork are both light-ground, so treat the two modes as equal citizens rather than a theme and its afterthought. Every specimen card in `guidelines/` carries a Dark/Light toggle in its top-right corner so both can be checked in place.

### Type
Three faces, strictly separated by job:

- **Cormorant Garamond** (serif) — every headline, card title and section head. Weight **300** at display sizes with `-1px` tracking; weight **600 uppercase** at 2.5px tracking for section heads. Italic is the brand's emphasis device ("*Nabil* Pervez", "Scaling *Creativity* through Chaos").
- **Outfit** (sans) — all body copy, UI, buttons, metrics. **300** for long paragraphs, 500 for inline emphasis, 600–700 for buttons and stat numbers.
- **Prata** (display serif) — the wordmark lockup only. ⚠️ **Substitution** — see caveats.

The root font size is **15px**, not 16. Every rem token in `tokens/typography.css` assumes it.

Wide uppercase letterspacing is the loudest brand tell: 2.5px on eyebrows and section heads, 1.4px on nav links, 1.2px on buttons and stat labels. If a design feels off-brand, it is usually because a label is set tight.

### Backgrounds
Flat ink, plus **a fixed fractal-noise overlay at 4% opacity over 55% layer opacity** (`--noise`, tiled at 180px) across the entire page. That grain is what keeps the flat dark from looking like a default dark mode — apply `.npc-grain` to `<body>` on every screen. **No decorative background gradients** — gradient is reserved for gold fills and gold text.

**The geometric pattern is the one ornament in the system.** Interlocking champagne circles, supplied as artwork; the tiling unit is a seamless 303×303 crop (`--pattern-tile`, scale in multiples). Three uses, in order of frequency:

- `--pattern-opacity` **0.22** — full-bleed bands and split-layout panels. On the brand card it fills the left third of the sheet against a completely clear right side. That contrast is the point.
- `--pattern-opacity-subtle` **0.08** — behind copy, or as a card backing.
- `fade` — masked left-to-right so content sits on the clear side.

Use it **once per view**. It reads as luxury only because most of the ink is doing nothing; spread across every section it becomes wallpaper. Reach for `PatternPanel` rather than hand-rolling the background.

### Layout
Fixed 1100px content column, 40px page padding (22px on mobile), a two-column `1fr / 260px` grid with a **52px** gutter and a **sticky sidebar** at `top: nav-h + 28px`. The header is fixed glass at **62px**. Utility FABs are fixed bottom-right at 32px inset. A single breakpoint at **860px** collapses to one column and reorders the stats and skills blocks above the main content; a second at 520px drops the stat grid to 2-up. Section rhythm is 56px.

### Borders and hairlines
Everything is separated by **1px `rgba(220,180,80,.20)`** — a gold-tinted hairline, never neutral grey. On hover it strengthens to `rgba(200,168,76,.38)`. The one heavier rule in the system is the **2px solid gold left border on lead paragraphs**. Section heads pair an uppercase gold title with a hairline running to the right edge.

### Cards
`--bg-card` fill, 1px gold hairline, **10px radius, and no shadow at rest.** Depth is exclusively a hover signal. That flatness is deliberate — the pages read as a printed document until you touch them.

### Shadows
Outer only; no inset shadows anywhere. `--shadow-card` `0 16px 40px rgba(0,0,0,.25)` on images and hero frames; `--shadow-card-hover` `0 12px 48px rgba(0,0,0,.38)` plus a 1px gold ring on hovered cards; `--shadow-fab-hover` is the one *coloured* shadow — a gold glow at 35%.

### Radii
`5px` tags · `6px` buttons and nav-link hover · `10px` cards, images, stat chips · `20px` date pills · `50%` FABs. Nothing between those values.

### Transparency and blur
Blur is used in exactly two places: the fixed nav (`blur(18px) saturate(160%)` over `rgba(7,16,31,.78)`) and the FABs (`blur(14px)`). Never on cards, never on modals, never as decoration. Transparency otherwise appears only in hairlines, `--gold-dim` fills and the shine sweep.

Protection gradients: a bottom-up ink fade (`--protect-bottom`) is the pattern for text over imagery. The brand does **not** use capsules or scrims behind text.

### Animation
One curve for everything: `cubic-bezier(.4, 0, .2, 1)`.

- `0.20s` colour, opacity, FAB scale
- `0.25s` card lift and shadow
- `0.35s` theme change and sibling dimming
- `0.55s` the shine sweep
- `0.60s` scroll reveal — fade up from `translateY(24px)`, triggered by `IntersectionObserver`
- entrance: `fadeDown` for the nav (0.2s / 0.35s stagger), `fadeUp` for hero and FABs (0.4s / 1.2s delay)
- `4s` linear infinite shimmer across gold gradient text (`.npc-gold-text`)

No bounces, no springs, no overshoot, no parallax. Everything fades and translates a short distance. `prefers-reduced-motion: reduce` kills all of it, globally.

### Hover states
**The signature interaction is hover isolation.** When any card in a stack is hovered, its siblings drop to **0.28 opacity** while the hovered card lifts `-2px`, scales `1.012`, gains the gold border and the deep shadow, and a **diagonal champagne shine wipes across it** (`skewX(-12deg)`, left `-100%` → `160%`). Bullet text inside promotes from muted to full-strength, and bolded metrics turn gold. Nothing else on the page moves.

Elsewhere: nav links fill with `--gold-dim` and brighten to full text colour. Tags shift border and text to gold without moving. Primary buttons drop to 88% opacity and lift 1px — the gradient never changes. FABs invert to a solid gold fill, scale 1.12 and glow.

### Press states
Understated: the press state settles the 1px lift back to zero with a `0.985` scale. No colour change, no ripple.

### Imagery
**Warm, not cool.** The supplied portrait is shot in tungsten light — amber bokeh, deep shadow, a tan-and-caramel palette against a dark interior. That warmth is deliberate and it is what makes photography sit naturally next to champagne gold; a cool or blue-graded image would fight the palette. Shallow depth of field, subject centred, eye-level, no hard flash.

Frames: **10px radius, 1px gold hairline, `--shadow-card`, `object-fit: cover`**, on a `--bg-card` backing — 260×340 in the résumé hero, 260×320 on the site hero. Greyscale (`grayscale(1) contrast(1.05)`) is the fallback when a portrait must not compete with gold. Never tint an image gold, and never put type directly on a photo without `--protect-bottom`.

Only one photograph exists so far. Additional imagery should match its temperature and depth of field.

---

## ICONOGRAPHY

**The system is Feather / Lucide, inlined as stroke SVG.** The résumé source hand-inlines Feather-set paths — phone, mail, linkedin, moon, sun, download-cloud, external-link — with `fill: none`, `stroke: currentColor`, `stroke-width: 2`, `stroke-linecap: round`, `stroke-linejoin: round`, `viewBox="0 0 24 24"`. That is Feather's exact signature, so this system standardises on **Lucide** (Feather's maintained successor, identical geometry and stroke weight) from CDN:

```html
<script src="https://unpkg.com/lucide@0.454.0/dist/umd/lucide.js"></script>
<i data-lucide="mail" style="width:17px;height:17px"></i>
<script>lucide.createIcons()</script>
```

⚠️ **Flagged substitution:** Lucide stands in for the hand-inlined Feather paths. Geometry and stroke weight match; a handful of Feather names were renamed in Lucide (`external-link` is stable; `download-cloud` is stable; check before use).

Rules:
- **Sizes: 13px** inside buttons, **17–18px** in FABs and contact rows, **20px** on division cards. Never larger — icons never become illustration.
- **Colour: `currentColor`.** Gold in FABs and division cards, muted in contact rows, ink on gold button fills.
- **No icon font, no sprite sheet, no PNG icons** in the sources.
- **No emoji.** The only glyph-as-icon usages are the gold `★` prefix on awards, the `—` em dash as the bullet marker, and `↗` appended to outbound link labels.
- **Never draw a client logo.** The trusted-by wall sets client names in muted uppercase Cormorant. No licensed client art was supplied and third-party marks must not be reconstructed.

### Brand marks in `assets/`

| File | Use |
|---|---|
| `brand-card-lockup.png` | The master lockup as artwork — reference for spacing, palette and the split layout |
| `pattern-gold.png` | The geometric pattern, champagne on white (print / placement art) |
| `pattern-gold-tile.png` | The **seamless repeat unit** — a 303×303 crop of the artwork downscaled to an 88px CSS tile (176px bitmap for retina), recoloured `#AB9563` with the field knocked out. Inlined as a data URI in `--pattern-gold` so the token works at any directory depth. |
| `pattern-gold-tile-2x.png` | The same tile at 352px, for print or very large placements |
| `pattern-gold-alpha.png` | Full-artwork knockout — placement art, not for tiling |
| `monogram-npc-*.png` | Serif "NPC" monogram in all six tints — favicons, avatars, document corners |
| `nabil-headshot.jpg` | The portrait |
| `wordmark-nabil-pervez.png` | "NABIL PERVEZ" display-serif wordmark, black on transparent |
| `wordmark-nabil-pervez-*.png` | The wordmark artwork in all six tints |
| `mark-nebtune-teal.png` | Legacy Nebtune "N", original teal |
| `mark-nebtune-*.png` | The N glyph in all six tints (`gold`, `gold-bright`, `gold-deep`, `paper`, `white`, `ink`) |
| `npc-business-card.pdf` | The 3.5×2 card artwork, print master for the palette |

The tinted PNGs are recolours of the supplied artwork — the alpha channel is untouched, no shape was redrawn. **No logo was invented for this system.**

### Mark variations

`Wordmark` covers every arrangement the identity needs. All of them compose the supplied artwork; the containers are geometry from the existing system (the 10px radius, the gold hairline, the pattern's diamond), not new marks.

**Lockups**
- `lockup` — the brand-card master: N glyph above "NABIL PERVEZ CONSULTING" in widely letterspaced Outfit. The primary signature.
- `horizontal` / `horizontal-npc` — mark or monogram, a hairline rule, then the name on two lines. For headers, email signatures, and any wide-but-short slot.
- `type` — live type in the wordmark face, with **"CONSULTING" measured at runtime and letterspaced to span the exact width of "NABIL PERVEZ"** — justified between the N and the Z. It re-measures on resize and after webfonts load, so it stays aligned at any size. Never hand-set its letter-spacing.

**Marks**
- `mark` — the N glyph alone. `npc` — the serif NPC monogram. `wordmark` — the "NABIL PERVEZ" artwork.

**Containers** — for favicons, avatars, app icons and stamps
- `badge` / `badge-npc` — circular, hairline gold ring on ink. The default avatar.
- `chip` / `chip-npc` — solid champagne square at 10px radius with ink art. The one inverse treatment in the identity; use where a filled app-icon shape is needed.
- `tile` — the pattern's diamond motif as a frame around the mark, tying the mark to the pattern.

### Mark tints — pick by ground

All three marks (N glyph, NPC monogram, NABIL PERVEZ wordmark) ship in six tints. The right one depends entirely on what the mark is sitting on:

| Tone | Hex | Ground |
|---|---|---|
`gold` | `#AB9563` | The print champagne and the master. Safe on both light and dark. |
| `gold-bright` | `#DDB84A` | Dark grounds — reads livelier than champagne on ink. |
| `gold-deep` | `#8A5C08` | Light grounds. **The only gold that passes AA on paper.** |
| `paper` | `#E2EAF4` | Knockout on ink or a dark photograph. |
| `white` | `#FFFFFF` | Knockout where full contrast is wanted (a gold band, a dark image). |
| `ink` | `#131921` | Anything sitting on a gold fill — the chip variant, foil sims. |

Container variants (`badge`, `chip`, `tile`) take `ground="auto"` by default and follow the page theme — ink in dark mode, paper in light — so an avatar works in both without the caller doing anything. Pass `ground` explicitly only to override. Every variant takes a single `size`; everything inside scales from it.

---

## WEB LAYER — Quiet Precision on NPC (added 2026-10-23)

A second register for **marketing websites**, proven on the 2026 homepage
(github.com/NabilPervez/npc-homepage-redesign, live at npc-homepage-redesign.netlify.app).
It keeps the identity — ink ground, champagne/gold, the circle lattice, the gold N, the
voice — and swaps the editorial résumé discipline for Cisco's *Quiet Precision* layout
discipline. Everything above still applies to the résumé, documents, decks and print.
Use this layer when the job is a website that has to sell and work on a phone.

Tokens live in `tokens/web.css`, scoped to `.npc-web` so they never change the editorial
layer. Specimens: `guidelines/web-offerings.html`, `guidelines/web-type-scale.html`.
The full build is described in `ui_kits/homepage-2026/README.md`.

### Where the web layer deliberately differs from the editorial layer

| Topic | Editorial (résumé) | Web layer | Why |
|---|---|---|---|
| Type | Cormorant display + Outfit body, 15px root | **Outfit only**, 600 display / 500 UI / 400 prose, 16px root | One family reads faster on phones; hierarchy comes from colour, not a second face |
| Scale | rem steps against 15px | **Closed px scale 62/32/24/22/18/16/14/13** | Fewer sizes, every page looks related |
| Headlines | Serif, italic emphasis | **Two-tone**: short white statement + grey continuation ("Brand. *Look the part.*") | Hierarchy by colour, not size |
| Section titles | Uppercase gold serif with rule | **Small (22–24px)**, sentence case, period: "How it works." Only the hero is big | Calm pages; the hero does the shouting |
| Hairlines | Gold-tinted `rgba(220,180,80,.2)` | **Neutral ink hairlines** `#1C2638` | Gold is saved for the one accent per view |
| Accent colours | Gold only | Gold, plus **one hue family per offering** (Brand gold, Web blue, AI violet/cyan, Product gold outline) | Colour carries meaning: a tile, pill or dot tells you which service |
| Pattern | Once per view | Hero, the closing band, the four-way tile and the step cards — always faint or masked, and animated only in hero and close | The lattice is the brand's own texture; used quiet, it reads as brand, not wallpaper |
| Motion | `cubic-bezier(.4,0,.2,1)`, 0.2–0.6s | **`cubic-bezier(.16,1,.3,1)`**, ~900ms enters, 140ms stagger, 30px rise | Slow, physical; noticed but never showy |
| Hover isolation | Signature | Not used | Touch-first pages have no hover |
| Grain overlay | Always | Not used | Kept the page lighter on phones |

### Components the web layer adds

- **Card hero** — the business card full-bleed: lattice, two ripple rings washing outward, a clear radial field behind the lockup, gold N breathing, gold headline shimmer.
- **Proof strip** — big stat numbers (count up once, gold `+`) beside two rows of client names drifting in opposite directions; a 44px pause button (WCAG 2.2.2).
- **Scroll-fill statement** — a paragraph in `--web-hair-2` that lights to full text word by word as it crosses the screen.
- **Four-way lattice tile** — a 2×2 of the circle lattice, one offering per quadrant in its own hue; copy either side on desktop; on phones a swipe rail with dots, and tapping a quadrant jumps the rail.
- **Buy cards** — two equal cards for the two ways to buy; the recommended one is a solid gold-gradient card with ink text and a multiplied lattice fading in from the right.
- **Bento reel** — columns of height H (`tall` .62H, `stack` .9H, `wide` 1.4H, `sq` H), each tile tagged with offering pill + client; slow rAF drift on a real scroller, paused by hover, focus, touch or a button; one still set under reduced motion.
- **Step drawings** — line illustrations on a faint lattice card (hairline strokes, one gold accent), drawn in with `stroke-dasharray` on `pathLength="1"`.
- **Testimonial drift** — cards in an endless CSS marquee, held on hover/touch/focus, with a pause button.
- **Isometric trophy** — built with the anatomy kit, recoloured through CSS variables: plinth in ink, turned parts in a 5-step gold ramp, glints that twinkle.
- **Phone nav** — mark, gold "Book now" and a menu button that opens a native `<dialog>` sheet (focus trap and Esc for free).

### Rules learned building it

1. **Phones first, every section.** Test at 375px before calling anything done; no horizontal scroll, 44px+ tap targets.
2. **Swipe beats stack.** Where a phone would show four long blocks in a row, use one swipe rail with dots instead.
3. **Big numbers must be big.** A stat is the largest type in its block; labels are 13px caps under it.
4. **Show, don't explain, the award.** A single object (the trophy) with one line beats a case-study paragraph.
5. **Everything visible without JS.** Reveal states only hide content once a `js` class is on `<html>`.
6. **Respect reduced motion everywhere.** Drift, ripples, gleam and draw-ins all stop; loops collapse to one static set.
7. **Never style SVG by `[pathLength]`.** Minifiers lowercase attribute selectors and SVG attributes are case-sensitive; select by element or class.
8. **Keep T-Mobile off the site** (Nabil, v7). Check every new image for it.
9. **Only real claims.** The Tempest Award (Best Social Experience, Houston Outlaws #BandTogether) is the award on record; don't invent others.
10. **Client logos stay typeset** until licensed artwork exists.

---

## Index

```
styles.css              @import list only — the single file consumers link
thumbnail.html          homepage tile
readme.md               this file
SKILL.md                Agent Skills wrapper
github.md               upstream source association + sync receipt

tokens/
  fonts.css             webfont loading (CDN — see caveats)
  colors.css            ink / paper / gold ramps, semantic aliases, gradients, light theme
  typography.css        families, sizes, weights, line heights, tracking, ready-made roles
  spacing.css           spacing scale + layout frame
  radius.css            five radii
  elevation.css         shadows + blur
  motion.css            easing, durations, keyframes, reduced-motion
  base.css              reset, body, links, .npc-grain, .npc-gold-text
  web.css               web layer (Quiet Precision), scoped to .npc-web

assets/                 wordmark + mark variants, business-card PDF
reference/
  resume-source.html    verbatim copy of NabilPervez/resume index.html — ground truth
guidelines/             23 foundation specimen cards (Colors, Type, Spacing, Surfaces, Motion, Brand)
```

### Components — `window.NPCDesignSystem_2f0ecd`

**`components/core/`** — `Button` (primary / secondary / ghost / link) · `Eyebrow` · `SectionHead` · `Divider` · `Tag` (rect / pill) · `StatChip`

**`components/cards/`** — `Card` (base surface, `interactive` + `sweep`) · `DivisionCard` · `TalkCard` · `CaseStudyCard` · `ProjectCard` · `JobCard` · `MetaListItem`

**`components/navigation/`** — `NavBar` · `Fab` + `FabStack`

**`components/brand/`** — `Wordmark` (11 variants: `lockup`, `horizontal`, `horizontal-npc`, `type`, `mark`, `npc`, `wordmark`, `badge`, `badge-npc`, `chip`, `chip-npc`, `tile`) · `PatternPanel` · `LogoWall`

Every family above has a counterpart in the sources: the résumé defines Card, JobCard, ProjectCard, Tag, StatChip, MetaListItem, SectionHead, Eyebrow, Divider, NavBar and Fab; the site copy defines DivisionCard, TalkCard, CaseStudyCard and LogoWall; the wordmark asset defines Wordmark.

**Intentional additions** — two, both consolidations rather than inventions:
- `Card` — the résumé repeats the same surface treatment across `.job-card`, `.project-card` and `.stat-chip`; extracting it prevents drift.
- `Button` — the source has one button-like element (`.project-link-btn`) plus link and FAB styles; `variant` collects those existing treatments under one API instead of adding new ones.

### UI kits

- **`ui_kits/consulting-site/`** — nabilpervezconsulting.com. Three click-through routes: home (hero + trusted-by + divisions), speaker profile (hero + story + six keynote cards), case studies (discipline filter + grid).
- **`ui_kits/homepage-2026/`** — the 2026 homepage on the web layer (React app; README maps every section to its component).
- **`ui_kits/resume/`** — faithful recreation of the résumé repo, including hover isolation, shine sweep and the live light/dark toggle.

---

## CAVEATS — things to fix with real assets

1. **The wordmark font is a substitution.** `assets/wordmark-nabil-pervez.png` is a high-contrast display serif with flared terminals that is not on Google Fonts. **Prata** is the closest available match and is what `--font-wordmark` resolves to. It is close in contrast and spirit but not the same face. The `type` variant's N→Z justification is measurement-driven, so it will keep working when the real face is dropped in — only the letterforms change.
2. **No font binaries were provided.** `tokens/fonts.css` loads Cormorant Garamond, Outfit and Prata from the Google Fonts CDN — matching what the résumé source does — rather than shipping local `@font-face` rules. Drop `.woff2` files into `assets/fonts/` and rewrite that one file to make the system self-contained and offline-capable.
3. **The live site's layout was not read from source.** `nabilpervezconsulting.com` is client-rendered and served no HTML to read. The consulting-site UI kit reproduces the supplied copy inside the résumé's proven visual language; section order, hero treatment and any patterns unique to the live site are inferred, not copied.
4. **No client logo art.** The trusted-by wall sets client names in muted uppercase Cormorant. Third-party marks must not be reconstructed, so this stays type until licensed art exists.
5. **No semantic status colours.** Nothing in the sources needed success / warning / error. If a product surface requires them, they need to be designed, not guessed.
6. **One photograph.** The portrait is the only image in the system. Everything documented under Imagery is generalised from that single frame.
