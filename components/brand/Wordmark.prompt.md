One-line: every NPC identity mark — stacked and horizontal lockups, the N glyph, the NPC monogram, and badge/chip/tile containers, in six tints for light and dark grounds.

```jsx
<Wordmark size={64} />                                  {/* brand-card stacked lockup */}
<Wordmark variant="type" size={56} />                   {/* CONSULTING justified N→Z */}
<Wordmark variant="horizontal" size={40} />             {/* wide header slot */}
<Wordmark variant="badge" size={44} />                  {/* avatar, follows the theme */}
<Wordmark variant="chip" size={48} />                   {/* app icon, ink on champagne */}
<Wordmark variant="tile" size={52} />                   {/* diamond frame from the pattern */}

{/* on a dark ground */}
<Wordmark variant="mark" size={40} tone="gold-bright" />
{/* on a light ground */}
<Wordmark variant="mark" size={40} tone="gold-deep" />
{/* knocked out of a photo or a solid gold band */}
<Wordmark variant="mark" size={40} tone="white" />
<Wordmark variant="mark" size={40} tone="ink" />
```

- **Set `assetBase`** to the correct relative path from the file you're rendering in — the default assumes `components/<group>/`.
- **Tone by ground:** `gold` (champagne, the master) is safe on both. `gold-bright` on ink, `gold-deep` on paper (the only gold that passes AA on light), `paper`/`white` as knockouts, `ink` on gold fills.
- Container variants take `ground="auto"` by default and follow the page theme; only pass `ground` when you need to fight it.
- Clear space equals the glyph height on all sides.
- The `type` variant justifies "CONSULTING" by measurement — never hand-set its letter-spacing.
