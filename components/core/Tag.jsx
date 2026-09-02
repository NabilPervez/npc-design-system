import React, { useState } from 'react';

export function Tag({ children, variant = 'default', shape = 'rect', style }) {
  const [hover, setHover] = useState(false);
  const primary = variant === 'primary';
  return (
    <span
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        display: 'inline-block', fontFamily: 'var(--font-sans)', fontSize: 'var(--fs-xs)',
        lineHeight: 'var(--lh-snug)', padding: shape === 'pill' ? '3px 9px' : '4px 10px',
        borderRadius: shape === 'pill' ? 'var(--radius-pill)' : 'var(--radius-sm)',
        border: '1px solid ' + (primary ? 'var(--border-strong)' : hover ? 'var(--gold)' : 'var(--border)'),
        background: primary ? 'var(--gold-dim)' : shape === 'pill' ? 'transparent' : 'var(--bg-card)',
        color: primary ? 'var(--gold)' : hover ? 'var(--gold)' : 'var(--text-muted)',
        fontWeight: primary ? 'var(--fw-medium)' : 'var(--fw-regular)',
        whiteSpace: shape === 'pill' ? 'nowrap' : 'normal',
        transition: 'border-color var(--dur-fast), color var(--dur-fast)', ...style
      }}
    >{children}</span>
  );
}
