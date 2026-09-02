import * as React from 'react';

/** Hairline-separated sidebar row used for certifications, education and awards. `star` prefixes the gold ★ used on awards. */
export interface MetaListItemProps {
  name?: React.ReactNode;
  /** Issuer, school or year. */
  sub?: React.ReactNode;
  /** Credential id, set in the mono role at 0.64rem / 70% opacity. */
  id?: React.ReactNode;
  /** Gold ★ prefix — awards only. @default false */
  star?: boolean;
  /** Drop the bottom hairline on the last row. @default false */
  last?: boolean;
  style?: React.CSSProperties;
}
export function MetaListItem(props: MetaListItemProps): JSX.Element;
