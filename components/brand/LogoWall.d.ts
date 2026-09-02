import * as React from 'react';

/**
 * The "Trusted By Teams At" client wall. Renders client names as muted uppercase
 * Cormorant wordmarks — no client logo files were supplied, and third-party marks
 * must never be redrawn. Swap in real `<img>` children once licensed art exists.
 */
export interface LogoWallProps {
  /** @default "Trusted By Teams At" */
  label?: React.ReactNode;
  clients?: string[];
  /** Fixed column count; omit for a centred wrap. */
  columns?: number;
  style?: React.CSSProperties;
}
export function LogoWall(props: LogoWallProps): JSX.Element;
