const { Eyebrow } = window.NPCDesignSystem_2f0ecd;

/** Renders **bold** spans as the brand's emphasis style. */
function rich(text) {
  return text.split(/\*\*(.+?)\*\*/g).map((part, i) =>
    i % 2 ? <strong key={i} style={{ color: 'var(--text)', fontWeight: 'var(--fw-medium)' }}>{part}</strong> : part
  );
}

function ResumeHero() {
  const d = window.NPCResume;
  return (
    <section style={{ marginBottom: 'var(--sp-32)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) 260px', columnGap: 'var(--sp-20)' }}>
        <div style={{ gridColumn: 1, gridRow: 1, alignSelf: 'end', marginBottom: 'var(--sp-10)', display: 'grid', gap: 'var(--sp-6)' }}>
          <Eyebrow>{d.eyebrow}</Eyebrow>
          <h1 style={{ margin: 0, fontFamily: 'var(--font-serif)', fontWeight: 'var(--fw-light)', fontSize: 'var(--fs-display)', lineHeight: 'var(--lh-display)', letterSpacing: 'var(--ls-display)' }}>
            <em className="npc-gold-text" style={{ fontStyle: 'italic' }}>{d.name[0]}</em> {d.name[1]}
          </h1>
          <p style={{ margin: 0, fontSize: 'var(--fs-base)', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--text-muted)' }}>{d.tagline}</p>
        </div>

        <div style={{ gridColumn: 1, gridRow: 2, display: 'flex', flexDirection: 'column', gap: 'var(--sp-2)', marginBottom: 'var(--sp-12)', fontSize: 'var(--fs-base)', color: 'var(--text-muted)' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px 20px' }}>
            <span>{d.contact.phone}</span><span>{d.contact.location}</span>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px 20px' }}>
            <a href={'mailto:' + d.contact.email}>{d.contact.email}</a>
            {d.links.map(l => <a key={l.href} href={l.href} target="_blank" rel="noopener">{l.label}</a>)}
          </div>
        </div>

        <p style={{ gridColumn: 1, gridRow: 3, margin: 0, maxWidth: 720, font: 'var(--text-lead)', color: 'var(--text-muted)', borderLeft: '2px solid var(--gold)', paddingLeft: 'var(--sp-8)' }}>
          {rich("Award-winning product manager with **10+ years experience** driving enterprise MarTech implementations across CMS, DAM, and AI-powered content platforms. Currently serving as the **AI Subject Matter Expert & Content Producer at T-Mobile**, coaching cross-functional teams on platform adoption and directly influencing Gradial's product roadmap. Previous clients include **Riot Games, Coca-Cola, LEGO, and Red Bull**. Personal portfolio of **12+ AI-Assisted Code Web Applications**.")}
        </p>

        <div style={{ gridColumn: 2, gridRow: '1 / 4', alignSelf: 'center', width: 260, height: 340, borderRadius: 'var(--radius)', border: '1px solid var(--border)', overflow: 'hidden', boxShadow: 'var(--shadow-card)', background: 'var(--bg-card)', }}>
          <img src="../../assets/nabil-headshot.jpg" alt="Nabil Pervez" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { ResumeHero, rich });
