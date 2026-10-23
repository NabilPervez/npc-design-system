# Nabil Pervez Consulting — Design System

The brand system for **Nabil Pervez Consulting (NPC)**, the consultancy of Nabil Pervez — Founder and Principal Consultant, former Co-Founder / CTO of the award-winning agency **AOE Creative**, and currently AI Implementation SME & Content Producer at T-Mobile.

NPC sells senior creative and technical judgment — **Brand. Web. AI. Product.** — to growing companies: "a big-studio creative exec on your team, at a small-studio price." The visual language does it with **cool navy ink, one gold accent, the circle-lattice pattern, one clean sans (Outfit), hairline structure and slow, quiet motion** — Quiet Precision on NPC's own identity. *(Direction updated 2026-10-23 to follow the 2026 homepage; the earlier editorial serif look is retired.)*

---

## Sources this system was built from

| Source | What was taken |
|---|---|
| **github.com/NabilPervez/npc-homepage-redesign** — **the ground truth since 2026-10-23** | Type, scale, hairlines, radii, motion, offering colours, the 2026 components and rules. Live at npc-homepage-redesign.netlify.app. |
| **github.com/NabilPervez/resume** (`index.html`, branch `main`) — the original ground truth | The entire token layer: colour ramps, gradients, type stack, spacing, radii, shadows, easing, hover behaviour. Preserved verbatim in `reference/resume-source.html`. |
| `uploads/3.5x2_NPC_Card_Flat.pdf` → `assets/npc-business-card.pdf` | The print palette, extracted from the artwork's fill operators: `#131921` ink, `#2C2E35` panel, `#AC9760` champagne. Page geometry 270×162pt (3.75×2.25in with bleed). |
| `uploads/Nabil_Full (1).png` → `assets/wordmark-nabil-pervez.png` | The "NABIL PERVEZ" wordmark, black on transparent, 6572×3072. |
| `uploads/Nebtune-removebg-preview (1).png` → `assets/mark-nebtune-teal.png` | The "N" glyph, supplied in its original teal `#48A3C2`. |
| `uploads/Copy of 3.png` → `assets/brand-card-lockup.png` | **The master lockup and the true brand palette.** Measured off the artwork: ground `#0D1522`, champagne `#AB9563`. Establishes the N glyph as a *gold* mark, the split pattern/clear-field layout, and the letterspaced "NABIL PERVEZ CONSULTING" line. |
| `uploads/GoldPattern.png` → `assets/pattern-gold.png` | The NPC geometric pattern — interlocking champagne circles, `#AB9563` on white, 2202×3303. `assets/pattern-gold-alpha.png` is the same artwork with the white knocked out so it tiles over any ground. |
| `uploads/NPC - White.png` → `assets/monogram-npc-white.png` | The serif "NPC" monogram, 752×332. Gold and ink tints alongside. |
| `uploads/nabil-headshot.jpg` → `assets/nabil-headshot.jpg` | The portrait. Now live in both UI kits. |
| `https://nabilpervezconsulting.com/` | All division, speaker, keynote and case-study **copy** (supplied in the brief). The live site is client-rendered and returned no server HTML, so its layout could not be read from source — see the caveat below. |

Anyone with access should read the homepage repo directly — it is now the most complete expression of the brand in code. The résumé repo remains the source of the colour ramps and the original marks.

---

## CONTENT FUNDAMENTALS

**Voice: first person singular, addressed to "you."** Nabil writes as himself, not as a company. "I'm Nabil." "I design, build, host, and manage your digital presence so you can focus on your business." The plural "we" appears only where a team is genuinely implied ("We help agencies and businesses execute award-winning strategies") — and the brief mixes the two freely, which is characteristic rather than sloppy.

**Every claim carries a number.** This is the single strongest habit in the copy. Not "grew the account" but "45M views in 4 months." Not "scaled the agency" but "$5M portfolio, 90% client referral rate." Not "improved support" but "reduced ticket time from 24h to 8h." When you write new copy, find the number or don't make the claim.

**Structure: label → promise → proof.** Division and case-study cards all follow it:

> `Experiential` / **Houston Outlaws** / Directed award-winning campaign with pop-up shops. / *10M+ impressions, 10k+ attendees.*

**Named-brand credibility is used deliberately and often.** Riot Games, LEGO, Coca-Cola, Red Bull, Paramount Pictures, Activision Blizzard, T-Mobile, SypherPK. Client names do work that adjectives can't; the copy leans on them rather than on words like "world-class."

**Casing (2026).** Sentence case for sentences and most headings. **Headlines are 3–6 words and end with a period** ("How it works.", "In their words.", "Done right."); offering and section names may use Title Case where they read as a name ("One Agency. Four Ways We Help."). ALL CAPS only for 13px labels. Never as emphasis inside a sentence.

**Two-tone headlines.** A short statement in full text colour, then a continuation in muted grey: "Brand. *Look the part.*" "Our work. *Award winning, made for brands of every size.*"

**Calls to action are literal and repetitive by design.** "Explore Company Branding." "Explore Web Development." "Explore Marketing Solutions." The verb never changes; only the noun does. Speaker CTAs are two words: "Book Nabil", "Download Kit".

**Sentence rhythm is short and declarative, with a contrarian opener.** "Creativity without process is just chaos." "Stop being filtered out." "Gaming isn't just a hobby; it's the dominant culture of the next generation." "Marketing is now a technical discipline. If your marketing leader doesn't understand the tech stack, you're losing money." State the uncomfortable thing, then the fix.

**Quoted jargon signals scepticism.** The copy puts industry words in quotes when it means to poke at them: `"process"`, `"Definition of Done"`, `"grunt work"`, `"Authenticity"`, speaking `"Internet"`. Use straight double quotes in data, curly in rendered copy.

**Punctuation.** Middle dot `·` separates metadata ("T-Mobile · Frisco, TX", "Python · PowerShell · React"). En dash `–` for date ranges ("Aug 2025 – Present"). Em dash `—` for the achievement-bullet marker and for interruptions. Ampersand `&` in headings, "and" in prose.

**No emoji. Anywhere.** The résumé, the business card and the site copy contain none. The only non-alphabetic glyphs in use are the gold `★` on awards, the `—` bullet marker, and `↗` on outbound links.

**Vibe:** confident, plain-spoken, allergic to buzzwords while operating in a buzzword industry. The bio says it out loud: "His unique brand of optimism, charisma, and honesty has been freshing in world of buzzwords." Warmth without softness; nothing is oversold, because the numbers are doing the selling.

---

## VISUAL FOUNDATIONS (2026 direction)

**The brand moved on 2026-10-23.** The 2026 homepage (github.com/NabilPervez/npc-homepage-redesign,
live at npc-homepage-redesign.netlify.app) is now the reference for how NPC looks everywhere.
What stayed: the ink ground, the gold, the circle lattice, the gold N, the marks, the voice.
What changed: one sans family instead of serif display, a closed type scale, neutral hairlines
instead of gold ones, no shadows, soft 20px cards and pill controls, slower easing, and one colour
per offering. The discipline is Cisco's *Quiet Precision* (Khyzr), applied to NPC's identity.
Everything below is the rule; the old editorial values survive only as remapped token names.

### Colour
**One ground, one accent, plus offering colours that mean something.**

- Ground: ink `--ink-950 #07101F`. Raised surface `--bg-card #0D1522`, tile top `--bg-tile #121C2C`.
- Text: `--text #E2EAF4`; **`--text-muted #8D9CB4` carries body copy** and the grey half of two-tone
  headlines; `--text-faint #5E718F` for captions, unlit words and client names at rest.
- Gold: one gradient, `--grad` (`#F5D97A → #DDB84A → #C88B20 → #E8B840`), for **one** thing per view:
  the highlighted word, the primary button, the recommended card. Labels use champagne `--label #AB9563`.
- **Offering colours** (the one sanctioned exception to "one accent"): each offering owns a hue family,
  so a tile, pill, dot or rail border tells you the service without reading.

| Offering | Tokens | Use |
|---|---|---|
| Brand | `--brand-a #DDB84A` `--brand-b #C88B20` `--brand-c #F5D97A` on `--brand-bg #2A1E06` | Gold family |
| Web | `--web-a #3E7BE0` `--web-b #7FA8F0` `--web-c #B9D0F7` on `--web-bg #0B1C3A` | Blue family |
| AI | `--ai-a #6C5CE7` `--ai-b #5FD3E8` `--ai-c #A79BF5` on `--ai-bg #140F33` | Violet + cyan |
| Product | `--product-a #DDB84A` on ink | Drawn as a gold-hairline wireframe |

Never use offering colours as decoration. Teal `#48A3C2` stays retired. Light theme
(`[data-theme="light"]`, paper `#EEF2FA`, gold `--gold-700`) remains for print and documents.

### Type
**One family: Outfit.** Three weights with fixed jobs: **600 display, 500 UI/labels/buttons, 400 prose.**
Root size 16px. **Closed scale: 62 / 32 / 24 / 22 / 18 / 16 / 14 / 13px. No other sizes.**

- 62 (`--fs-62`, `clamp(34px,8.6vw,62px)`): the hero headline and the closing band only.
- 32 (`--fs-32`): statements, offering names, big card titles. Stat numbers use `--fs-stat` (44px on phones → 62).
- 24 / 22: **section titles stay small**. "How it works." not a banner.
- 18 h3 and ledes · 16 body · 14 secondary · 13 labels and pills.
- Display tracking `-0.027em`; uppercase labels `.14em`. `text-wrap: balance` on titles, `pretty` on paragraphs; ledes max ~34ch.
- **Two-tone headlines:** a short white statement plus a grey continuation —
  "Brand. <span muted>Look the part.</span>" Hierarchy by colour, not size. Gold-gradient text marks one word at most.
- Cormorant Garamond is **retired** from screens. Prata is kept only for the NABIL PERVEZ wordmark lockup.

### Space and layout
- Container 1240px, gutter `clamp(20px,5vw,96px)` (20px on phones), section padding `clamp(72px,12vh,160px)`.
- Spacing ladder 8 / 12 / 16 / 24 / 32 / 40 / 64.
- **Section header:** title + one-line lede, split left/right on desktop or centred; 40px (64 desktop) to content.
- **Mobile first.** Every section is designed at 375px first. Breakpoints at 760, 860 and 1000px.
- Tap targets 44px minimum. No horizontal page scroll, ever.

### Surfaces
- **Hairlines, not shadows.** 1px neutral `--hair #1C2638`; `--hair-2 #26324A` on pills and buttons. No drop shadows anywhere.
- **Cards:** 20px radius, `--bg-card`→`--bg-tile` gradient or flat ink-2, one hairline. Flat at rest.
- **Slabs with seams:** groups of tiles sit on a hairline-coloured ground with 1px gaps, so the seams draw the grid.
- **Radii:** 20px cards · 14px photo tiles · 8px the nav N tile · 999px every pill and button.
- **Blur:** only the frosted nav (`rgb(7 16 31/.82)` + `blur(18px)`) and caption pills over images.
- **No grain overlay.** It was dropped for a lighter page on phones.

### The pattern (circle lattice)
Still the one ornament, now used in more places, always quiet:
- **Hero:** full-bleed, dimmed (~12%), with two rings rippling outward and a clear radial field behind the lockup.
- **Closing band:** the hero's ripple returns so the page ends where it began.
- **Four-way tile:** the lattice re-drawn as thick arcs, one quadrant per offering colour.
- **Step and buy cards:** faint (~18–28%), masked so it fades toward the content.
Animate it only in the hero and the close.

### Motion
**Fades and reveals only: noticed, never showy.** `--ease: cubic-bezier(.16,1,.3,1)`.
- Scroll reveal: opacity 0→1 with a 30px rise over 900ms, 140ms stagger. Content is visible without JS
  (the hidden start state needs a `js` class on `<html>`).
- Hover 400–500ms; press `scale(.97)`; active-state changes ~800ms.
- Loops (client names, work reel, testimonials) drift linearly, **pause on hover, focus and touch, and have a pause button**.
- Line drawings draw in with `stroke-dasharray` on `pathLength="1"`. Select them by element or class,
  **never `[pathLength]`** (minifiers lowercase it; SVG attributes are case-sensitive).
- `prefers-reduced-motion: reduce` stops everything; loops collapse to one static set.
- Retired: hover isolation (siblings dimming), the card lift and the diagonal shine sweep. Touch-first pages have no hover.

### Imagery
- Warm photography stays (tungsten, shallow depth) — it sits naturally next to gold.
- **Work tiles:** real portfolio images at 720/480px WebP with `srcset`, `loading="lazy"`, width and height set,
  14px radius, a hairline ring, and a caption pill (offering in its colour + client).
- **Portrait:** 2:3, 14px radius, slight desaturation `grayscale(.2)`, always beside its text (never alone in a column).
- **Showpiece:** the isometric gold trophy (anatomy kit) for awards: ink plinth, 5-step gold ramp, glints. Load heavy art as its own chunk.
- Check every image for brands the client has excluded (**T-Mobile stays off NPC pages**).

### Components (2026)
- **Nav:** frosted ink bar; N tile + "NPC"; centred links; gold pill CTA. Phones: N, gold **Book now**, menu button opening a native `<dialog>` sheet.
- **Card hero:** the business card alive — lattice, ripple rings, gold N breathing, "Brand. Web. AI. Product. *Done right.*"
- **Proof strip:** big stat numbers (count up once, gold `+`) beside two rows of client names drifting in opposite directions.
- **Scroll-fill statement:** a positioning paragraph that lights word by word, paired in one row with a proof object.
- **Four-way lattice tile:** 2×2 offerings in their colours; copy either side on desktop; a swipe rail with dots on phones; tap a quadrant to jump.
- **Buy cards:** two equal cards for the two ways to buy; the recommended one is solid gold with ink text.
- **Bento reel:** columns of height H (tall .62H, stack .9H, wide 1.4H, square H), slow drift, native swipe, pause.
- **Step cards:** three steps with literal, spare line drawings on a faint lattice card.
- **Testimonial drift:** many short quotes in an endless row.
- **About row:** portrait and two-tone statement side by side at every width.
- **Closing band** and **colophon footer** (brand · navigate · offer · contact).

### Rules learned (keep these)
1. Review on a real phone at 375px every round.
2. Swipe beats stack: four long blocks on a phone become one rail with dots.
3. The main CTA lives in the phone nav.
4. Big numbers must be big: the stat is the largest type in its block.
5. Show proof, don't explain it: one object and one line.
6. Line drawings stay literal and spare.
7. Everything visible without JS; everything still under reduced motion.
8. Only real claims (one award on record: Tempest Award, Best Social Experience). Client logos stay typeset until licensed art exists.

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
- **Sizes: 13–14px** inside buttons and pills, **18px** in contact rows, **24px** on cards. Icons never become illustration; illustration is the line-drawing style (hairline strokes, one gold accent).
- **Colour: `currentColor`.** Gold in FABs and division cards, muted in contact rows, ink on gold button fills.
- **No icon font, no sprite sheet, no PNG icons** in the sources.
- **No emoji.** The only glyph-as-icon usages are the gold `★` prefix on awards, the `—` em dash as the bullet marker, and `↗` appended to outbound link labels.
- **Never draw a client logo.** Client names are set in Outfit 600, faint ink, in drifting rows. No licensed client art was supplied and third-party marks must not be reconstructed.

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

## Index

```
styles.css              @import list only — the single file consumers link
thumbnail.html          homepage tile
readme.md               this file
SKILL.md                Agent Skills wrapper
github.md               upstream source association + sync receipt

tokens/
  fonts.css             webfont loading: Outfit (+ Prata for the wordmark lockup)
  colors.css            ink / paper / gold ramps, semantic aliases, gradients, light theme
  typography.css        families, sizes, weights, line heights, tracking, ready-made roles
  spacing.css           spacing scale + layout frame
  radius.css            five radii
  elevation.css         shadows + blur
  motion.css            easing, durations, keyframes, reduced-motion
  base.css              reset, body, links, .npc-grain, .npc-gold-text
  web.css               the homepage tokens under their --web-* names (now global)

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

1. **The wordmark font is a substitution** (lockup only; all live type is Outfit). `assets/wordmark-nabil-pervez.png` is a high-contrast display serif with flared terminals that is not on Google Fonts. **Prata** is the closest available match and is what `--font-wordmark` resolves to. It is close in contrast and spirit but not the same face. The `type` variant's N→Z justification is measurement-driven, so it will keep working when the real face is dropped in — only the letterforms change.
2. **No font binaries were provided.** `tokens/fonts.css` loads Outfit and Prata from the Google Fonts CDN — matching what the résumé source does — rather than shipping local `@font-face` rules. Drop `.woff2` files into `assets/fonts/` and rewrite that one file to make the system self-contained and offline-capable.
3. **The live site's layout was not read from source.** `nabilpervezconsulting.com` is client-rendered and served no HTML to read. The consulting-site UI kit reproduces the supplied copy inside the résumé's proven visual language; section order, hero treatment and any patterns unique to the live site are inferred, not copied.
4. **No client logo art.** The trusted-by wall sets client names in muted uppercase Cormorant. Third-party marks must not be reconstructed, so this stays type until licensed art exists.
5. **No semantic status colours.** Nothing in the sources needed success / warning / error. If a product surface requires them, they need to be designed, not guessed.
6. **One photograph.** The portrait is the only image in the system. Everything documented under Imagery is generalised from that single frame.
7. **Components were remapped, not redrawn.** The older components (`components/`) pick up the 2026 tokens through remapped names (serif → Outfit, gold hairlines → neutral, 10px → 20px radius, shadows → none). Their markup still reflects the résumé; for new work, build from the 2026 component list and the homepage repo.
8. **The consulting-site and résumé UI kits** show the earlier editorial direction and are kept for reference.
