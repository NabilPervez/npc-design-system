import * as React from 'react';

/**
 * The NPC geometric pattern (small interlocking circles and diamonds) as a surface.
 *
 * **Its canonical form is the print one** — champagne hairlines at full strength on a
 * near-white ground, exactly as in `assets/pattern-gold.png`. `--pattern-ground` and
 * `--pattern-opacity` are theme-scoped, so the default panel is print-accurate on paper
 * and drops to a quiet 0.22 texture on ink under `[data-theme="dark"]`.
 *
 * The lattice must read as a fine woven texture repeating infinitely — if you can count
 * the circles at a glance, the tile is too large. 88px is the default.
 */
export interface PatternPanelProps {
  children?: React.ReactNode;
  /** Tile scale: sm 56px (cards, print scale) · md 88px (default) · lg 132px (full-viewport only). @default "md" */
  size?: 'sm' | 'md' | 'lg';
  /** Explicit tile width, overriding `size`. Use a token, not a raw number. */
  tile?: string;
  /** @default "var(--pattern-opacity)" — 0.85 on paper, 0.22 on ink */
  opacity?: string | number;
  /** @default "var(--pattern-ground)" — paper-50 on light, ink-880 on dark */
  ground?: string;
  /** Fade the pattern out left-to-right so content can sit on the clear side. @default false */
  fade?: boolean;
  style?: React.CSSProperties;
}
export function PatternPanel(props: PatternPanelProps): JSX.Element;
