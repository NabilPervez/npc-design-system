import * as React from 'react';

/**
 * Résumé experience entry: serif role, gold company line, outline date pill,
 * and em-dash achievement bullets. Wrap a column of these in a container that
 * dims non-hovered siblings to 0.28 (see the hover-isolation pattern in readme.md).
 */
export interface JobCardProps {
  title?: React.ReactNode;
  /** "Company · City, ST" */
  company?: React.ReactNode;
  /** "Aug 2025 – Present" — en dash, not hyphen. */
  date?: React.ReactNode;
  /** Achievement lines; wrap the metric in <strong>. */
  bullets?: React.ReactNode[];
  style?: React.CSSProperties;
}
export function JobCard(props: JobCardProps): JSX.Element;
