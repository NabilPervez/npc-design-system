import React, { useState } from 'react';

export function Fab({ children, href, title, onClick, style, ...rest }) {
  const [hover, setHover] = useState(false);
  const Tag = href ? 'a' : 'button';
  return (
    <Tag
      href={href} onClick={onClick} title={title} aria-label={title}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        width: 46, height: 46, borderRadius: 'var(--radius-round)',
        border: '1px solid var(--border)',
        background: hover ? 'var(--gold)' : 'var(--bg-glass)',
        backdropFilter: 'var(--blur-fab)', WebkitBackdropFilter: 'var(--blur-fab)',
        color: hover ? 'var(--text-on-gold)' : 'var(--gold)',
        cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '1.05rem', textDecoration: 'none', padding: 0,
        boxShadow: hover ? 'var(--shadow-fab-hover)' : 'var(--shadow-fab)',
        transform: hover ? 'scale(1.12)' : 'none',
        transition: 'transform var(--dur-fast), background var(--dur-fast), box-shadow var(--dur-fast), color var(--dur-fast)',
        ...style
      }}
      {...rest}
    >{children}</Tag>
  );
}

/** Bottom-right vertical stack of Fabs. */
export function FabStack({ children, style }) {
  return (
    <div style={{
      position: 'fixed', bottom: 32, right: 32, zIndex: 200,
      display: 'flex', flexDirection: 'column', gap: 'var(--sp-4)', ...style
    }}>{children}</div>
  );
}
