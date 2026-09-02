const { SectionHead, JobCard, ProjectCard, StatChip } = window.NPCDesignSystem_2f0ecd;

function ExperienceList() {
  const [hovering, setHovering] = React.useState(null);
  return (
    <section style={{ marginBottom: 'var(--sp-28)' }} id="experience">
      <SectionHead>Experience</SectionHead>
      <div style={{ position: 'relative', display: 'grid', gap: 'var(--card-gap)' }}>
        {window.NPCResume.jobs.map((j, i) => (
          <div key={i} onMouseEnter={() => setHovering(i)} onMouseLeave={() => setHovering(null)}
            style={{ opacity: hovering === null || hovering === i ? 1 : 'var(--dim-inactive)', transition: 'opacity var(--transition)' }}>
            <JobCard title={j.title} company={j.company} date={j.date} bullets={j.bullets.map(rich)} />
          </div>
        ))}
      </div>
    </section>
  );
}

function ProjectList() {
  return (
    <section style={{ marginBottom: 'var(--sp-28)' }} id="projects">
      <SectionHead>AI Builds &amp; Projects</SectionHead>
      <div style={{ display: 'grid', gap: 'var(--sp-5)' }}>
        {window.NPCResume.projects.map(p => (
          <ProjectCard key={p.title} title={p.title} ctaLabel={p.cta} href={p.href}
            icon={p.cta ? <i data-lucide="external-link" style={{ width: 13, height: 13 }}></i> : null}>
            {p.desc}
          </ProjectCard>
        ))}
      </div>
    </section>
  );
}

function StatsRow() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 'var(--sp-4)', marginBottom: 'var(--sp-16)' }}>
      {window.NPCResume.stats.map(s => <StatChip key={s.label} {...s} />)}
    </div>
  );
}

Object.assign(window, { ExperienceList, ProjectList, StatsRow });
