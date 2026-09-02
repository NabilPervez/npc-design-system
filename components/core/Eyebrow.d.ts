import * as React from 'react';

/** Gold uppercase kicker with the signature 32px hairline rule to its left. Sits above display headlines and section titles. */
export interface EyebrowProps {
  children?: React.ReactNode;
  /** Show the 32×1px gold rule. @default true */
  rule?: boolean;
  /** @default "div" */
  as?: keyof JSX.IntrinsicElements;
  style?: React.CSSProperties;
}
export function Eyebrow(props: EyebrowProps): JSX.Element;
