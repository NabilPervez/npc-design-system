import * as React from 'react';

/**
 * Fixed 62px glass header: serif gold wordmark left, uppercase micro-tracked links right,
 * 18px blur with 160% saturation over a hairline gold bottom border.
 */
export interface NavBarProps {
  /** Serif gold wordmark text. @default "Nabil Pervez" */
  brand?: React.ReactNode;
  links?: { label: string; href: string }[];
  /** Href to render in the active (gold-dim) state. */
  activeHref?: string;
  /** Trailing slot — contact icons or a CTA. */
  right?: React.ReactNode;
  /** Intercepts link clicks for click-through prototypes. */
  onNavigate?: (href: string) => void;
  style?: React.CSSProperties;
}
export function NavBar(props: NavBarProps): JSX.Element;
