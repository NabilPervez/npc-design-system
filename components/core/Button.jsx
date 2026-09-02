import React, { useState } from 'react';

const SIZES = {
  sm: { padding: '5px 12px', fontSize: '.68rem', letterSpacing: '1.1px' },
  md: { padding: '7px 16px', fontSize: '.72rem', letterSpacing: '1.2px' },
  lg: { padding: '11px 26px', fontSize: '.78rem', letterSpacing: '1.4px' }
};

export function Button({
  children, variant = 'primary', size = 'md', href, icon, iconRight,
  disabled = false, fullWidth = false, onClick, style, ...rest
}) {
  const [hover, setHover] = useState(false);
  const [press, setPress] = useState(false);
  const s = SIZES[size] || SIZES.md;

  const base = {
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 'var(--sp-3)',
    font: 'var(--fw-semibold) ' + s.fontSize + '/1 var(--font-sans)',
    letterSpacing: s.letterSpacing, textTransform: 'uppercase', textDecoration: 'none',
    padding: s.padding, borderRadius: 'var(--radius-md)', border: '1px solid transparent',
    cursor: disabled ? 'not-allowed' : 'pointer', width: fullWidth ? '100%' : 'auto',
    opacity: disabled ? 0.4 : 1, whiteSpace: 'nowrap',
    transition: 'opacity var(--dur-fast), transform var(--dur-fast), background var(--dur-fast), color var(--dur-fast), border-color var(--dur-fast)',
    transform: disabled ? 'none' : press ? 'translateY(0) scale(.985)' : hover ? 'translateY(-1px)' : 'none'
  };

  const variants = {
    primary: { background: 'var(--grad)', color: 'var(--text-on-gold)', opacity: disabled ? 0.4 : hover ? 0.88 : 1 },
    secondary: {
      background: hover ? 'var(--gold-dim)' : 'transparent', color: 'var(--gold)',
      borderColor: hover ? 'var(--border-strong)' : 'var(--border)'
    },
    ghost: { background: hover ? 'var(--gold-dim)' : 'transparent', color: hover ? 'var(--text)' : 'var(--text-muted)' },
    link: {
      background: 'none', color: hover ? 'var(--text)' : 'var(--link)', padding: 0,
      textTransform: 'none', letterSpacing: 'var(--ls-tight)', fontWeight: 'var(--fw-medium)',
      borderBottom: '1px solid ' + (hover ? 'var(--gold)' : 'rgba(220,180,80,.35)'), borderRadius: 0
    }
  };

  const Tag = href && !disabled ? 'a' : 'button';
  return (
    <Tag
      href={href} onClick={disabled ? undefined : onClick} disabled={Tag === 'button' ? disabled : undefined}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => { setHover(false); setPress(false); }}
      onMouseDown={() => setPress(true)} onMouseUp={() => setPress(false)}
      style={{ ...base, ...variants[variant], ...style }} {...rest}
    >
      {icon}{children}{iconRight}
    </Tag>
  );
}
