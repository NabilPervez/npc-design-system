import React from 'react';
import { Card } from './Card.jsx';
import { Button } from '../core/Button.jsx';

export function ProjectCard({ title, children, ctaLabel, href, icon, style }) {
  return (
    <Card interactive padding="20px 22px" style={{ display: 'grid', gap: 'var(--sp-3)', ...style }}>
      <div style={{ font: 'var(--fw-semibold) 1rem/var(--lh-tight) var(--font-serif)', color: 'var(--text)' }}>{title}</div>
      <p style={{ margin: 0, font: 'var(--fw-regular) var(--fs-base)/1.65 var(--font-sans)', color: 'var(--text-muted)' }}>{children}</p>
      {ctaLabel && (
        <Button size="md" href={href} icon={icon} style={{ marginTop: 'var(--sp-5)', justifySelf: 'start' }}>{ctaLabel}</Button>
      )}
    </Card>
  );
}
