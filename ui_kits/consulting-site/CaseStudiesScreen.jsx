const { CaseStudyCard, Tag, Eyebrow } = window.NPCDesignSystem_2f0ecd;

function CaseStudiesScreen() {
  const all = window.NPCSiteData.cases;
  const disciplines = ['All', ...Array.from(new Set(all.map(c => c.discipline)))].slice(0, 9);
  const [filter, setFilter] = React.useState('All');
  const shown = filter === 'All' ? all : all.filter(c => c.discipline === filter);
  return (
    <Section eyebrow="Proven Results" title="Case Studies">
      <div style={{ display: 'flex', gap: 'var(--sp-2)', flexWrap: 'wrap', marginBottom: 'var(--sp-16)' }}>
        {disciplines.map(d => (
          <button key={d} onClick={() => setFilter(d)} style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}>
            <Tag variant={filter === d ? 'primary' : 'default'}>{d}</Tag>
          </button>
        ))}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 'var(--sp-6)' }}>
        {shown.map(c => <CaseStudyCard key={c.client + c.discipline} {...c} />)}
      </div>
    </Section>
  );
}

Object.assign(window, { CaseStudiesScreen });
