# UI kit — Consulting Site

Recreation of **nabilpervezconsulting.com**: the marketing surface for Nabil Pervez Consulting.

Three routes, click-through via the glass header:

| Route | File | Contents |
|---|---|---|
| `home` | `HomeScreen.jsx` | Hero (display serif name, gold-shimmer first name, lead paragraph with 2px gold rule, dual CTA), trusted-by wall, the two division groups |
| `speaker` | `SpeakerScreen.jsx` | Speaker-profile hero, trusted-by wall, "The Story" with sticky stat rail, six signature-talk cards |
| `cases` | `CaseStudiesScreen.jsx` | Discipline filter chips over the case-study grid |

`Chrome.jsx` holds `SiteShell`, `SiteHeader`, `SiteFooter`, `Section` and the `Icon` wrapper. `data.js` holds all copy, taken verbatim from the site.

Everything visual comes from the design-system bundle — no styling is redefined here.

## Known gaps
- The live site is client-rendered and returned no server HTML, so **section order, exact hero image treatment, and page-level scroll behaviour are inferred from the supplied copy plus the résumé's visual language** rather than read from source. Correct anything that differs.
- No photography or client logo files were supplied; the trusted-by wall is set in type and the hero has no portrait.
