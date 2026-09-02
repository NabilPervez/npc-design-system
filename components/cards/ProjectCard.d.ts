import * as React from 'react';

/** Portfolio / AI-build card: serif title, description, and a gradient primary button linking out. */
export interface ProjectCardProps {
  title?: React.ReactNode;
  children?: React.ReactNode;
  /** Button label — "View Project", "View Live Portfolio". */
  ctaLabel?: string;
  href?: string;
  /** 13px external-link glyph for the button. */
  icon?: React.ReactNode;
  style?: React.CSSProperties;
}
export function ProjectCard(props: ProjectCardProps): JSX.Element;
