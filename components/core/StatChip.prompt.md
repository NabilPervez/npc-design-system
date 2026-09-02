One-line: gold-gradient proof-point tile for metrics rows.

```jsx
<div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:'var(--sp-4)'}}>
  <StatChip value="10+" label="Years XP" />
  <StatChip value="$5M+" label="Portfolio Managed" />
</div>
```

Value inherits `.npc-gold-text` (animated shimmer). Keep labels to 3 words.
