import React from 'react';
import { Card } from './Card.jsx';
import { Eyebrow } from '../core/Eyebrow.jsx';

export function CaseStudyCard({ discipline, client, work, result, style }) {
  return (
    <Card interactive padding="var(--sp-10)" style={{ display: 'grid', gap: 'var(--sp-4)', ...style }}>
      <Eyebrow rule={false} style={{ fontSize: 'var(--fs-2xs)', letterSpacing: 'var(--ls-widest)' }}>{discipline}</Eyebrow>
      <h3 style={{ margin: 0, font: 'var(--text-card-title)', color: 'var(--text)' }}>{client}</h3>
      <p style={{ margin: 0, font: 'var(--fw-light) var(--fs-base)/var(--lh-body) var(--font-sans)', color: 'var(--text-muted)' }}>{work}</p>
      {result && (
        <p className="npc-gold-text" style={{
          margin: 0, fontFamily: 'var(--font-sans)', fontWeight: 'var(--fw-semibold)',
          fontSize: 'var(--fs-md)', letterSpacing: 'var(--ls-tight)'
        }}>{result}</p>
      )}
    </Card>
  );
}
