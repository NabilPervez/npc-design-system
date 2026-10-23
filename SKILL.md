---
name: npc-design
description: Use this skill to generate well-branded interfaces and assets for Nabil Pervez Consulting (NPC), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping. 2026 direction: ink and gold, the circle lattice, Outfit only, a closed type scale, hairlines, quiet motion, one colour per offering (Brand, Web, AI, Product).
user-invocable: true
---

**Start with `PROMPT.md`.** It is the condensed rulebook for the 2026 direction (the brand moved on 2026-10-23 to follow the homepage at github.com/NabilPervez/npc-homepage-redesign). Then read `readme.md` for the full rules and explore the other files: `tokens/` (link `styles.css` to get everything), `assets/` (marks, pattern, portrait), `guidelines/` (specimens; cards grouped "Retired (pre-2026)" show the old editorial look and should not be followed), and `ui_kits/homepage-2026/README.md` (the reference build, mapped section by section).

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

Non-negotiables: one font (Outfit 600/500/400), sizes only from 62/32/24/22/18/16/14/13, gold for one thing per view, offering colours only to mean an offering, hairlines not shadows, fades and reveals only with reduced-motion support, design at 375px first, only real claims, no invented logos, no T-Mobile on NPC pages.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.
