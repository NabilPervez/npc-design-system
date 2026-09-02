import * as React from 'react';

/** Section title: uppercase gold Cormorant, wide tracking, with a hairline border rule running to the right edge. */
export interface SectionHeadProps {
  children?: React.ReactNode;
  /** Trailing hairline rule. @default true */
  rule?: boolean;
  style?: React.CSSProperties;
}
export function SectionHead(props: SectionHeadProps): JSX.Element;
