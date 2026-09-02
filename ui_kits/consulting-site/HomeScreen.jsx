const { Button, Eyebrow, DivisionCard, LogoWall, StatChip, Divider } = window.NPCDesignSystem_2f0ecd;

function Hero({ onNavigate }) {
  return (
    <section style={{ maxWidth: 'var(--page-max)', margin: '0 auto', padding: 'var(--sp-32) var(--page-pad) var(--sp-32)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) 260px', gap: 'var(--grid-gap)', alignItems: 'center' }}>
        <div style={{ display: 'grid', gap: 'var(--sp-8)' }}>
          <Eyebrow>Principal Consultant · NPC</Eyebrow>
          <h1 style={{ margin: 0, fontFamily: 'var(--font-serif)', fontWeight: 'var(--fw-light)', fontSize: 'var(--fs-display)', lineHeight: 'var(--lh-display)', letterSpacing: 'var(--ls-display)' }}>
            <em className="npc-gold-text" style={{ fontStyle: 'italic' }}>Nabil</em> Pervez
          </h1>
          <p style={{ margin: 0, fontSize: 'var(--fs-sm)', letterSpacing: 'var(--ls-widest)', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
            Brand Identity · Web · MarTech · AI
          </p>
          <p style={{ margin: 0, maxWidth: 640, font: 'var(--text-lead)', color: 'var(--text-muted)', borderLeft: '2px solid var(--gold)', paddingLeft: 'var(--sp-8)' }}>
            I'm Nabil. I'm a former executive and co-founder of the award winning, multi-million dollar agency — AOE Creative. I spent years working with the world's most powerful companies to build brand identities and technology infrastructure for their projects. <strong style={{ color: 'var(--text)', fontWeight: 'var(--fw-medium)' }}>Now I'm taking my expertise to help you.</strong>
          </p>
          <div style={{ display: 'flex', gap: 'var(--sp-5)', flexWrap: 'wrap' }}>
            <Button size="lg" onClick={() => onNavigate('speaker')}>Book Nabil</Button>
            <Button size="lg" variant="secondary" onClick={() => onNavigate('cases')}>See The Work</Button>
          </div>
        </div>
        <div style={{ display: 'grid', gap: 'var(--sp-6)' }}>
          <div style={{ width: 260, height: 320, borderRadius: 'var(--radius)', border: '1px solid var(--border)', overflow: 'hidden', boxShadow: 'var(--shadow-card)', background: 'var(--bg-card)' }}>
            <img src="../../assets/nabil-headshot.jpg" alt="Nabil Pervez" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--sp-4)' }}>
            <StatChip value="$5M+" label="Portfolio" />
            <StatChip value="90%" label="Referral Rate" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Divisions({ onNavigate }) {
  const data = window.NPCSiteData.divisions;
  return (
    <Section id="divisions" eyebrow="Our Consulting Divisions" title={<>Select a specialized area below to<br />learn how we can deliver value.</>}>
      <div style={{ display: 'grid', gap: 'var(--sp-24)' }}>
        {Object.entries(data).map(([group, items]) => (
          <div key={group} style={{ display: 'grid', gap: 'var(--sp-10)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--sp-6)' }}>
              <h3 style={{ margin: 0, font: 'var(--text-section)', textTransform: 'uppercase', letterSpacing: 'var(--ls-widest)', color: 'var(--gold)', whiteSpace: 'nowrap' }}>{group}</h3>
              <span style={{ flex: 1, height: 1, background: 'var(--border)' }} />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 'var(--sp-6)' }}>
              {items.map(d => (
                <DivisionCard key={d.title} title={d.title} description={d.description} cta={d.cta}
                  href="#" icon={<Icon name={d.icon} size={20} />} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function HomeScreen({ onNavigate }) {
  return (
    <>
      <Hero onNavigate={onNavigate} />
      <div style={{ maxWidth: 'var(--page-max)', margin: '0 auto', padding: '0 var(--page-pad)' }}>
        <LogoWall clients={window.NPCSiteData.clients} />
        <Divider />
      </div>
      <Divisions onNavigate={onNavigate} />
    </>
  );
}

Object.assign(window, { HomeScreen, Hero, Divisions });
