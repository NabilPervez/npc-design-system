import React from 'react';
import { Card } from './Card.jsx';
import { Button } from '../core/Button.jsx';

export function DivisionCard({ title, description, cta, href, icon, style }) {
  return (
    <Card interactive padding="var(--sp-10)" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-4)', ...style }}>
      {icon && <div style={{ color: 'var(--gold)', marginBottom: 'var(--sp-2)' }}>{icon}</div>}
      <h3 style={{ margin: 0, font: 'var(--text-card-title)', color: 'var(--text)' }}>{title}</h3>
      <p style={{ margin: 0, font: 'var(--fw-light) var(--fs-md)/var(--lh-relaxed) var(--font-sans)', color: 'var(--text-muted)', flex: 1 }}>{description}</p>
      {cta && <Button variant="link" href={href} style={{ marginTop: 'var(--sp-4)', alignSelf: 'flex-start' }}>{cta}</Button>}
    </Card>
  );
}
