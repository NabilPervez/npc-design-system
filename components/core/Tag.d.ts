import * as React from 'react';

/**
 * Skill / platform chip. `rect` (5px radius) is the tag-cloud form; `pill` (20px radius,
 * transparent) is the date pill on experience cards. `primary` fills with gold-dim for
 * the platforms worth foregrounding.
 */
export interface TagProps {
  children?: React.ReactNode;
  /** @default "default" */
  variant?: 'default' | 'primary';
  /** @default "rect" */
  shape?: 'rect' | 'pill';
  style?: React.CSSProperties;
}
export function Tag(props: TagProps): JSX.Element;
