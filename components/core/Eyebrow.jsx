import React from 'react';

export function Eyebrow({ children, rule = true, as: Tag = 'div', style }) {
  return (
    <Tag style={{
      display: 'flex', alignItems: 'center', gap: 'var(--sp-5)',
      font: 'var(--text-eyebrow)', letterSpacing: 'var(--ls-widest)',
      textTransform: 'uppercase', color: 'var(--gold)', ...style
    }}>
      {rule && <span style={{ display: 'block', width: 32, height: 1, background: 'var(--gold)', flexShrink: 0 }} />}
      {children}
    </Tag>
  );
}
