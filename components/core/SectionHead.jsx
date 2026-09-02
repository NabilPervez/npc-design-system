import React from 'react';

export function SectionHead({ children, rule = true, style }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--sp-6)', marginBottom: 'var(--sp-12)', ...style }}>
      <h2 style={{
        margin: 0, font: 'var(--text-section)', textTransform: 'uppercase',
        letterSpacing: 'var(--ls-widest)', color: 'var(--gold)', whiteSpace: 'nowrap'
      }}>{children}</h2>
      {rule && <span style={{ flex: 1, height: 1, background: 'var(--border)' }} />}
    </div>
  );
}
