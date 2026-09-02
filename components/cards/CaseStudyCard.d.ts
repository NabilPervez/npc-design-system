import * as React from 'react';

/**
 * Proven-results card: discipline kicker, client name, one line of work,
 * and the outcome in shimmering gold. Grid them 3-up.
 */
export interface CaseStudyCardProps {
  /** Discipline kicker — "Experiential", "Agency Scaling", "GTM Strategy". */
  discipline?: React.ReactNode;
  client?: React.ReactNode;
  work?: React.ReactNode;
  /** The measured outcome, e.g. "10M+ impressions, 10k+ attendees." */
  result?: React.ReactNode;
  style?: React.CSSProperties;
}
export function CaseStudyCard(props: CaseStudyCardProps): JSX.Element;
