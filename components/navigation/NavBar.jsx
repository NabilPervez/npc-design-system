import React, { useState } from 'react';

export function NavBar({ brand = 'Nabil Pervez', links = [], activeHref, right, onNavigate, style }) {
  const [hoverHref, setHover] = useState(null);
  return (
    <nav style={{
      position: 'sticky', top: 0, left: 0, right: 0, height: 'var(--nav-h)', zIndex: 100,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 36px',
      background: 'var(--bg-glass)', backdropFilter: 'var(--blur-glass)', WebkitBackdropFilter: 'var(--blur-glass)',
      borderBottom: '1px solid var(--border)', ...style
    }}>
      <span style={{
        fontFamily: 'var(--font-serif)', fontSize: 'var(--fs-title-lg)', fontWeight: 'var(--fw-semibold)',
        letterSpacing: '.5px', color: 'var(--gold)', whiteSpace: 'nowrap'
      }}>{brand}</span>
      <ul style={{ display: 'flex', gap: 'var(--sp-2)', listStyle: 'none', margin: 0, padding: 0 }}>
        {links.map(l => {
          const on = l.href === hoverHref || l.href === activeHref;
          return (
            <li key={l.href}>
              <a
                href={l.href}
                onMouseEnter={() => setHover(l.href)} onMouseLeave={() => setHover(null)}
                onClick={onNavigate ? e => { e.preventDefault(); onNavigate(l.href); } : undefined}
                style={{
                  display: 'block', fontFamily: 'var(--font-sans)', fontSize: 'var(--fs-sm)',
                  fontWeight: 'var(--fw-medium)', textTransform: 'uppercase', letterSpacing: 'var(--ls-wider)',
                  color: on ? 'var(--text)' : 'var(--text-muted)', textDecoration: 'none',
                  padding: '6px 12px', borderRadius: 'var(--radius-md)',
                  background: on ? 'var(--gold-dim)' : 'transparent',
                  transition: 'color var(--dur-fast), background var(--dur-fast)'
                }}
              >{l.label}</a>
            </li>
          );
        })}
      </ul>
      {right}
    </nav>
  );
}
