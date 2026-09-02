import React from 'react';

const TILES = { sm: 'var(--pattern-tile-sm)', md: 'var(--pattern-tile)', lg: 'var(--pattern-tile-lg)' };

/** The NPC geometric pattern as a surface — a fine woven field of small circles and
 *  diamonds. Its canonical form is the print one: champagne hairlines on a near-white
 *  ground. Both the ground and the opacity are theme-scoped, so the same panel reads as
 *  print on paper and as a quiet texture on ink. */
export function PatternPanel({
  children, size = 'md', tile, opacity = 'var(--pattern-opacity)',
  ground = 'var(--pattern-ground)', fade = false, style
}) {
  const t = tile || TILES[size] || TILES.md;
  return (
    <div style={{ position: 'relative', overflow: 'hidden', background: ground, isolation: 'isolate', ...style }}>
      <span aria-hidden="true" style={{
        position: 'absolute', inset: 0, zIndex: 0,
        backgroundImage: 'var(--pattern-gold)', backgroundSize: t + ' auto',
        backgroundRepeat: 'repeat', opacity,
        maskImage: fade ? 'linear-gradient(to right, #000 0%, transparent 100%)' : undefined,
        WebkitMaskImage: fade ? 'linear-gradient(to right, #000 0%, transparent 100%)' : undefined,
        pointerEvents: 'none'
      }} />
      <div style={{ position: 'relative', zIndex: 1 }}>{children}</div>
    </div>
  );
}
