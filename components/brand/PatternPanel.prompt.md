One-line: the champagne circle-and-diamond pattern as a surface — print-accurate on paper, a quiet texture on ink.

```jsx
{/* print presentation — gold hairlines on near-white, the canonical form */}
<PatternPanel style={{minHeight:240}} />

{/* brand-card split: pattern one side, clear field the other */}
<div style={{display:'grid',gridTemplateColumns:'2fr 3fr',minHeight:400}}>
  <PatternPanel />
  <div style={{background:'var(--pattern-ground)',display:'grid',placeItems:'center'}}><Wordmark size={72} /></div>
</div>

<PatternPanel size="sm" opacity="var(--pattern-opacity-subtle)" fade style={{padding:'56px 40px'}}>
  <h2>Let's build something worth referring.</h2>
</PatternPanel>
```

- **Don't hardcode the ground.** `--pattern-ground` flips paper→ink with the theme; passing `ground="var(--ink-880)"` breaks light mode.
- **Keep the tile small.** 88px default; 56px at card and print scale; 132px is the ceiling and only for a full viewport. Oversizing turns a texture into big rings and breaks the identity.
- Use it once per view. It reads as luxury because most of the field is doing nothing.
