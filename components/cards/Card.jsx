import React, { useState } from 'react';

/** Base NPC surface: 10px radius, gold-tinted hairline, --bg-card fill.
 *  interactive=true adds the 2px lift + gold border; sweep=true adds the diagonal shine wipe. */
export function Card({ children, interactive = false, sweep = false, padding = 'var(--card-pad)', style, ...rest }) {
  const [hover, setHover] = useState(false);
  const on = interactive && hover;
  return (
    <div
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        position: 'relative', overflow: 'hidden', padding, background: 'var(--bg-card)',
        border: '1px solid ' + (on ? 'var(--border-strong)' : 'var(--border)'),
        borderRadius: 'var(--radius)',
        transform: on ? 'translateY(var(--lift)) scale(var(--scale-active))' : 'none',
        boxShadow: on ? 'var(--shadow-card-hover)' : 'none',
        transition: 'transform var(--dur-mid) ease, box-shadow var(--dur-mid) ease, border-color var(--dur-mid) ease, opacity var(--transition)',
        ...style
      }}
      {...rest}
    >
      {sweep && (
        <span aria-hidden="true" style={{
          position: 'absolute', top: 0, left: on ? '160%' : '-100%', width: '55%', height: '100%',
          background: 'var(--shine)', transform: 'skewX(-12deg)', pointerEvents: 'none',
          transition: 'left var(--dur-sweep) ease'
        }} />
      )}
      {children}
    </div>
  );
}
