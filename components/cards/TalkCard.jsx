import React from 'react';
import { Card } from './Card.jsx';
import { Tag } from '../core/Tag.jsx';

export function TalkCard({ title, category, summary, bullets = [], style }) {
  return (
    <Card interactive sweep padding="var(--sp-10)" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-4)', ...style }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 'var(--sp-5)' }}>
        <h3 style={{ margin: 0, font: 'var(--text-card-title)', color: 'var(--text)' }}>{title}</h3>
        {category && <Tag shape="pill">{category}</Tag>}
      </div>
      {summary && <p style={{ margin: 0, font: 'var(--fw-light) var(--fs-md)/var(--lh-relaxed) var(--font-sans)', color: 'var(--text-muted)' }}>{summary}</p>}
      {bullets.length > 0 && (
        <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 'var(--sp-3)' }}>
          {bullets.map((b, i) => (
            <li key={i} style={{ position: 'relative', paddingLeft: 'var(--sp-7)', font: 'var(--text-body)', color: 'var(--text-muted)' }}>
              <span aria-hidden="true" style={{ position: 'absolute', left: 0, top: 4, color: 'var(--gold)', fontSize: '.65rem' }}>—</span>
              {b}
            </li>
          ))}
        </ul>
      )}
    </Card>
  );
}
