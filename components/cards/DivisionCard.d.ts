import * as React from 'react';

/**
 * A consulting-division tile from the website's "Our Consulting Divisions" grid:
 * serif title, light muted description, one underlined gold "Explore …" link.
 */
export interface DivisionCardProps {
  title?: React.ReactNode;
  description?: React.ReactNode;
  /** Link label, always in the form "Explore <Division>". */
  cta?: string;
  href?: string;
  /** 20px Lucide glyph, gold. */
  icon?: React.ReactNode;
  style?: React.CSSProperties;
}
export function DivisionCard(props: DivisionCardProps): JSX.Element;
