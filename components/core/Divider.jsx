import React from 'react';

export function Divider({ spacing = 'var(--sp-28)', style }) {
  return <div style={{ height: 1, background: 'var(--border)', margin: spacing + ' 0', ...style }} />;
}
