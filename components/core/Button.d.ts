import * as React from 'react';

/**
 * NPC action. Primary is the champagne gradient pill used for the one committing
 * action per view ("Book Nabil", "View Project"); secondary is the hairline gold
 * outline used beside it; ghost is nav-weight; link is the underlined inline gold link.
 */
export interface ButtonProps {
  children?: React.ReactNode;
  /** @default "primary" */
  variant?: 'primary' | 'secondary' | 'ghost' | 'link';
  /** @default "md" */
  size?: 'sm' | 'md' | 'lg';
  /** Renders an <a> instead of a <button>. */
  href?: string;
  /** Leading glyph — a 13px Lucide SVG. */
  icon?: React.ReactNode;
  /** Trailing glyph, usually an arrow or external-link. */
  iconRight?: React.ReactNode;
  /** @default false */
  disabled?: boolean;
  /** @default false */
  fullWidth?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}
export function Button(props: ButtonProps): JSX.Element;
