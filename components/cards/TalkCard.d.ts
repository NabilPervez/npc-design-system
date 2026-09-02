import * as React from 'react';

/**
 * Keynote/signature-talk card from the speaker profile: title, category pill,
 * premise paragraph, and em-dash takeaway bullets.
 */
export interface TalkCardProps {
  title?: React.ReactNode;
  /** One word: "Strategy", "Culture", "Tech Ops", "Branding", "Process", "Insights". */
  category?: string;
  summary?: React.ReactNode;
  /** Takeaways, rendered with the gold em-dash marker. */
  bullets?: React.ReactNode[];
  style?: React.CSSProperties;
}
export function TalkCard(props: TalkCardProps): JSX.Element;
