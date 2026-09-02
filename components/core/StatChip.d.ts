import * as React from 'react';

/**
 * Proof-point tile: shimmering gold-gradient number over a wide-tracked uppercase label.
 * Used in 2- and 4-up rows ("10+ Years XP", "$5M+ Portfolio Managed").
 */
export interface StatChipProps {
  /** Short numeric figure — "10+", "$5M+", "45M". */
  value?: React.ReactNode;
  label?: React.ReactNode;
  style?: React.CSSProperties;
}
export function StatChip(props: StatChipProps): JSX.Element;
