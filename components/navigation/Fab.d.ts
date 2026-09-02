import * as React from 'react';

/**
 * 46px round glass utility button, bottom-right. Used for theme toggle and résumé download.
 * Hover inverts to a solid gold fill and scales 1.12 with a gold-tinted glow.
 */
export interface FabProps {
  /** An 17–18px Lucide glyph. */
  children?: React.ReactNode;
  href?: string;
  /** Used for both title and aria-label. */
  title?: string;
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}
export function Fab(props: FabProps): JSX.Element;

export interface FabStackProps {
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
/** Fixed bottom-right column that holds 1–3 Fabs. */
export function FabStack(props: FabStackProps): JSX.Element;
