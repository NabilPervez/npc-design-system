import React from 'react';

export function MetaListItem({ name, sub, id, star = false, last = false, style }) {
  return (
    <div style={{
      padding: '12px 0',
      borderBottom: last ? 'none' : '1px solid var(--border)',
      ...style
    }}>
      <div style={{
        display: 'flex', alignItems: 'center', gap: 'var(--sp-3)',
        fontFamily: 'var(--font-sans)', fontSize: 'var(--fs-md)', fontWeight: 'var(--fw-medium)',
        color: 'var(--text)', lineHeight: 1.35, marginBottom: 2
      }}>
        {star && <span aria-hidden="true" style={{ fontSize: '.65rem', color: 'var(--gold)' }}>★</span>}
        {name}
      </div>
      {sub && <div style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--fs-sm)', color: 'var(--text-muted)' }}>{sub}</div>}
      {id && <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-micro)', color: 'var(--text-muted)', opacity: .7, letterSpacing: '.5px' }}>{id}</div>}
    </div>
  );
}
