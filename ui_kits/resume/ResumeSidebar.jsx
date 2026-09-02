const { SectionHead, Tag, MetaListItem } = window.NPCDesignSystem_2f0ecd;

function SkillBlock() {
  return (
    <div style={{ marginBottom: 'var(--sp-16)' }}>
      <SectionHead rule={false}>Core Skills</SectionHead>
      {window.NPCResume.skills.map(([cat, list], i) => (
        <div key={cat}>
          <div style={{ fontSize: 'var(--fs-2xs)', letterSpacing: 'var(--ls-wide)', textTransform: 'uppercase', fontWeight: 'var(--fw-semibold)', color: 'var(--gold)', marginTop: i ? 'var(--sp-6)' : 0, marginBottom: 'var(--sp-2)' }}>{cat}</div>
          <div style={{ fontSize: 'var(--fs-base)', color: 'var(--text-muted)', lineHeight: 1.65 }}>{list}</div>
        </div>
      ))}
    </div>
  );
}

function MartechBlock() {
  return (
    <div style={{ marginBottom: 'var(--sp-16)' }} id="martech">
      <SectionHead rule={false}>MarTech &amp; Platforms</SectionHead>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--sp-2)' }}>
        {window.NPCResume.martech.map(([name, primary]) => <Tag key={name} variant={primary ? 'primary' : 'default'}>{name}</Tag>)}
      </div>
    </div>
  );
}

function MetaBlock({ title, items, star }) {
  return (
    <div style={{ marginBottom: 'var(--sp-16)' }}>
      <SectionHead rule={false}>{title}</SectionHead>
      {items.map((it, i) => <MetaListItem key={it.name} {...it} star={star} last={i === items.length - 1} />)}
    </div>
  );
}

function ResumeSidebar() {
  const d = window.NPCResume;
  return (
    <aside style={{ position: 'sticky', top: 'calc(var(--nav-h) + var(--sp-12))' }}>
      <StatsRow />
      <SkillBlock />
      <MartechBlock />
      <MetaBlock title="Certifications" items={d.certs} />
      <MetaBlock title="Awards" items={d.awards} star />
      <MetaBlock title="Education" items={d.education} />
    </aside>
  );
}

Object.assign(window, { ResumeSidebar, SkillBlock, MartechBlock, MetaBlock });
