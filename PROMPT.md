You are designing for Nabil Pervez Consulting (NPC): Brand. Web. AI. Product. Positioning: "a big-studio creative exec on your team, at a small-studio price." Follow the NPC Design System (github.com/NabilPervez/npc-design-system, 2026 direction). The reference build is github.com/NabilPervez/npc-homepage-redesign (live: npc-homepage-redesign.netlify.app). Read both before designing if you can.

IDENTITY (keep exactly)
- Ground: ink #07101F. Raised surface #0D1522, tile top #121C2C.
- Text #E2EAF4. Muted #8D9CB4 carries body copy. Faint #5E718F for captions and unlit text.
- Gold is the one accent, as one gradient: linear-gradient(120deg,#F5D97A 0%,#DDB84A 40%,#C88B20 75%,#E8B840 100%). Use it for ONE thing per view: the highlighted word, the primary button, or the recommended card. Uppercase labels use champagne #AB9563.
- The circle-lattice pattern (interlocking circles, stroke #AB9563, 88px tile) is the one ornament. The gold N mark and NPC assets come from the repo's assets/ folder. Never draw or invent a logo.
- Offering colours mean something, never decoration: Brand gold (#DDB84A/#C88B20/#F5D97A on #2A1E06), Web blue (#3E7BE0/#7FA8F0/#B9D0F7 on #0B1C3A), AI violet+cyan (#6C5CE7/#5FD3E8/#A79BF5 on #140F33), Product = gold hairline wireframe on ink.

TYPE
- One family: Outfit (Google Fonts, weights 400/500/600). 600 display, 500 UI/labels/buttons, 400 prose. No serif, no second face.
- Closed scale only: 62 / 32 / 24 / 22 / 18 / 16 / 14 / 13 px. 62 = clamp(34px,8.6vw,62px), hero and closing band only. 32 = statements and big card titles. Section titles stay small (22-24px). Stats: clamp(44px,13vw,62px).
- Headline tracking -0.027em; labels 13px uppercase at .14em. text-wrap: balance on titles, pretty on paragraphs; ledes max ~34ch.
- Two-tone headlines: a short white statement + a muted grey continuation ("Brand. Look the part."). Headlines are 3-6 words and end with a period.

LAYOUT AND SURFACES
- Mobile first: design at 375px first, 16-20px side gutter, no horizontal scroll, tap targets 44px+. Container 1240px, gutter clamp(20px,5vw,96px), section padding clamp(72px,12vh,160px).
- Section header = small title + one-line lede, split left/right on desktop or centred.
- Hairlines, not shadows: 1px #1C2638 (pills/buttons #26324A). No drop shadows. No grain.
- Radii: 20px cards, 14px photo tiles, 999px every button and pill.
- Blur only on the frosted sticky nav (rgb(7 16 31/.82) + blur(18px)) and caption pills over images.

MOTION
- Fades and reveals only: noticed, never showy. Easing cubic-bezier(.16,1,.3,1). Reveal: opacity 0->1 + 30px rise over ~900ms, 140ms stagger. Press: scale(.97).
- Content must be visible without JS (only hide reveal start states when a `js` class is on <html>).
- Loops (client names, work reels, testimonials) drift slowly and pause on hover, focus and touch, with a pause button.
- Respect prefers-reduced-motion: stop every animation; loops become one static set.
- Never style SVG with [pathLength] attribute selectors; select by element or class.

COMPONENTS TO REACH FOR
Frosted nav (N tile + NPC, centred links, gold pill CTA; on phones a gold "Book now" + menu opening a native <dialog>) · card hero (lattice, rippling rings, gold N, "Done right.") · proof strip (big count-up stats + two rows of client names drifting opposite ways) · scroll-fill statement paired with a proof object · four-way lattice tile (2x2 offerings in their colours; swipe rail with dots on phones) · two buy cards (project / retainer; recommended one solid gold with ink text) · bento work reel (columns of height H: tall .62H, stack .9H, wide 1.4H, square H) · step cards with spare line drawings · testimonial drift · portrait + statement side by side · closing band echoing the hero · colophon footer.

VOICE
First person, to "you." Short, declarative, plain-spoken, no buzzwords, no emoji. Every claim carries a number or a named client. Label -> promise -> proof. Only real claims: the award on record is the Tempest Award, Best Social Experience (Houston Outlaws #BandTogether). Client names are typeset (no client logos without licensed art). Keep T-Mobile off NPC pages.

RULES
Phone first, every section. Swipe beats stack on phones. The main CTA lives in the phone nav. Big numbers must be big. Show proof, don't explain it. Line drawings stay literal and spare. One idea per section. Don't copy another brand's name, colours, copy or images; borrow the system, keep NPC's identity.

Before you finish: check 375px and 1280px for horizontal scroll, confirm only the allowed type sizes and one font are used, hairlines not shadows, reduced motion works, and the page reads without JS.
