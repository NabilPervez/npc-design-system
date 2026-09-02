import * as React from 'react';

/** 1px gold-tinted hairline. The brand separates with hairlines, never with heavier rules or filled bands. */
export interface DividerProps {
  /** Vertical margin. @default "var(--sp-28)" */
  spacing?: string;
  style?: React.CSSProperties;
}
export function Divider(props: DividerProps): JSX.Element;
