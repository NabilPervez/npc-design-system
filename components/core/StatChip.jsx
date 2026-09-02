import React from 'react';

export function StatChip({ value, label, style }) {
  return (
    <div style={{
      padding: '16px 16px 14px', border: '1px solid var(--border)', borderRadius: 'var(--radius)',
      background: 'var(--bg-card)', textAlign: 'center', display: 'grid', gap: 2, ...style
    }}>
      <span className="npc-gold-text" style={{
        fontFamily: 'var(--font-sans)', fontWeight: 'var(--fw-bold)', fontSize: '1.5rem', lineHeight: 1.1
      }}>{value}</span>
      <span style={{
        fontFamily: 'var(--font-sans)', fontSize: 'var(--fs-micro)', letterSpacing: 'var(--ls-wide)',
        textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 'var(--fw-regular)'
      }}>{label}</span>
    </div>
  );
}
