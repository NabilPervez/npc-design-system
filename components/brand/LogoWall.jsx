import React from 'react';

/** "Trusted By Teams At" — client names set as restrained uppercase type, not logo images.
 *  No client logo files were supplied with the brand assets, so this renders wordmarks in type. */
export function LogoWall({ label = 'Trusted By Teams At', clients = [], columns, style }) {
  return (
    <div style={{ display: 'grid', gap: 'var(--sp-8)', ...style }}>
      {label && (
        <div style={{
          fontFamily: 'var(--font-sans)', fontSize: 'var(--fs-sm)', fontWeight: 'var(--fw-medium)',
          letterSpacing: 'var(--ls-widest)', textTransform: 'uppercase', color: 'var(--text-muted)', textAlign: 'center'
        }}>{label}</div>
      )}
      <div style={{
        display: columns ? 'grid' : 'flex', gridTemplateColumns: columns ? 'repeat(' + columns + ',1fr)' : undefined,
        flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center',
        gap: 'var(--sp-8) var(--sp-16)'
      }}>
        {clients.map(c => (
          <span key={c} style={{
            fontFamily: 'var(--font-serif)', fontSize: '1rem', fontWeight: 'var(--fw-medium)',
            letterSpacing: 'var(--ls-wide)', textTransform: 'uppercase',
            color: 'var(--text-muted)', textAlign: 'center', whiteSpace: 'nowrap'
          }}>{c}</span>
        ))}
      </div>
    </div>
  );
}
