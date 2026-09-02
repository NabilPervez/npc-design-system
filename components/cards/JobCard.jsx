import React from 'react';
import { Card } from './Card.jsx';
import { Tag } from '../core/Tag.jsx';

export function JobCard({ title, company, date, bullets = [], style }) {
  return (
    <Card interactive sweep style={{ ...style }}>
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
        gap: 'var(--sp-5)', flexWrap: 'wrap', marginBottom: 'var(--sp-5)'
      }}>
        <div>
          <div style={{ font: 'var(--text-card-title)', color: 'var(--text)' }}>{title}</div>
          <div style={{
            fontFamily: 'var(--font-sans)', fontSize: 'var(--fs-base)', color: 'var(--gold)',
            fontWeight: 'var(--fw-regular)', marginTop: 3, letterSpacing: 'var(--ls-tight)'
          }}>{company}</div>
        </div>
        {date && <Tag shape="pill" style={{ marginTop: 2, flexShrink: 0, fontSize: '.73rem', color: 'var(--text-muted)', fontWeight: 'var(--fw-light)' }}>{date}</Tag>}
      </div>
      <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 'var(--sp-3)' }}>
        {bullets.map((b, i) => (
          <li key={i} style={{ position: 'relative', paddingLeft: 'var(--sp-7)', font: 'var(--text-body)', color: 'var(--text-muted)' }}>
            <span aria-hidden="true" style={{ position: 'absolute', left: 0, top: 4, color: 'var(--gold)', fontSize: '.65rem' }}>—</span>
            {b}
          </li>
        ))}
      </ul>
    </Card>
  );
}
