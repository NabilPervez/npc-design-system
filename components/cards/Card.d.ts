import * as React from 'react';

/**
 * The one surface primitive: 10px radius, 1px gold-tinted hairline, --bg-card fill,
 * no resting shadow. Every other card in the system composes this.
 */
export interface CardProps {
  children?: React.ReactNode;
  /** Lift 2px, scale 1.012, gold border, deep shadow on hover. @default false */
  interactive?: boolean;
  /** Diagonal champagne shine wipe across the surface on hover. @default false */
  sweep?: boolean;
  /** @default "var(--card-pad)" */
  padding?: string;
  style?: React.CSSProperties;
}
export function Card(props: CardProps): JSX.Element;
