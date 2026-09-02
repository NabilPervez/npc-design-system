const { Button, Eyebrow, TalkCard, LogoWall, StatChip, Divider, Card } = window.NPCDesignSystem_2f0ecd;

function SpeakerHero({ onNavigate }) {
  return (
    <section style={{ maxWidth: 'var(--page-max)', margin: '0 auto', padding: 'var(--sp-32) var(--page-pad) var(--sp-28)' }}>
      <div style={{ display: 'grid', gap: 'var(--sp-8)', maxWidth: 820 }}>
        <Eyebrow>Speaker Profile</Eyebrow>
        <h1 style={{ margin: 0, fontFamily: 'var(--font-serif)', fontWeight: 'var(--fw-light)', fontSize: 'var(--fs-display)', lineHeight: 'var(--lh-display)', letterSpacing: 'var(--ls-display)' }}>
          Scaling <em className="npc-gold-text" style={{ fontStyle: 'italic' }}>Creativity</em><br />through Chaos.
        </h1>
        <p style={{ margin: 0, fontSize: 'var(--fs-sm)', letterSpacing: 'var(--ls-widest)', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
          The intersection of Agile Systems, Entertainment Culture, and Enterprise Marketing.
        </p>
        <p style={{ margin: 0, maxWidth: 680, font: 'var(--text-lead)', color: 'var(--text-muted)', borderLeft: '2px solid var(--gold)', paddingLeft: 'var(--sp-8)' }}>
          Co-Founder &amp; Tech-Marketer behind campaigns for Riot Games, LEGO, and Coca-Cola. Helping teams bridge the gap between creative vision and technical execution.
        </p>
        <div style={{ display: 'flex', gap: 'var(--sp-5)', flexWrap: 'wrap' }}>
          <Button size="lg">Book Nabil</Button>
          <Button size="lg" variant="secondary" icon={<Icon name="download" size={14} />}>Download Kit</Button>
        </div>
      </div>
    </section>
  );
}

function TheStory() {
  return (
    <Section eyebrow="The Story" title="Creativity without process is just chaos.">
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) 260px', gap: 'var(--grid-gap)', alignItems: 'start' }}>
        <div style={{ display: 'grid', gap: 'var(--sp-8)', font: 'var(--fw-light) var(--fs-md)/var(--lh-relaxed) var(--font-sans)', color: 'var(--text-muted)' }}>
          <p style={{ margin: 0 }}>Nabil Pervez knows this better than anyone. Starting his career in the trenches of IT Service Desk support, Nabil learned the critical importance of systems, uptime, and efficiency. But he didn't stay in the server room.</p>
          <p style={{ margin: 0 }}>Pivoting to the fast-paced world of digital marketing, Nabil Co-Founded AOE Creative, where he served as Lead Project Manager and CTO. There, he didn't just run campaigns; he built the engines that ran them. He managed a <strong style={{ color: 'var(--text)', fontWeight: 'var(--fw-medium)' }}>$5M+ portfolio</strong> and led cross-functional teams to sell out clothing lines for Fortnite creators and drive <strong style={{ color: 'var(--text)', fontWeight: 'var(--fw-medium)' }}>45 million views</strong> for Activision Blizzard.</p>
          <p style={{ margin: 0 }}>Over the years, Nabil has moderated, spoken, shoutcasted, and hosted hundreds of events. The largest crowd Nabil has spoken in front of was 70,000 people.</p>
          <p style={{ margin: 0 }}>His unique brand of optimism, charisma, and honesty has been freshing in world of buzzwords.</p>
        </div>
        <div style={{ display: 'grid', gap: 'var(--sp-4)', position: 'sticky', top: 'calc(var(--nav-h) + var(--sp-12))' }}>
          <StatChip value="70K" label="Largest Crowd" />
          <StatChip value="100s" label="Events Hosted" />
          <StatChip value="45M" label="Views Driven" />
        </div>
      </div>
    </Section>
  );
}

function Keynotes() {
  return (
    <Section eyebrow="Signature Talks" title="Keynote Topics">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 'var(--sp-6)' }}>
        {window.NPCSiteData.talks.map(t => <TalkCard key={t.title} {...t} />)}
      </div>
    </Section>
  );
}

function SpeakerScreen({ onNavigate }) {
  return (
    <>
      <SpeakerHero onNavigate={onNavigate} />
      <div style={{ maxWidth: 'var(--page-max)', margin: '0 auto', padding: '0 var(--page-pad)' }}>
        <LogoWall clients={window.NPCSiteData.clients} />
        <Divider />
      </div>
      <TheStory />
      <Keynotes />
    </>
  );
}

Object.assign(window, { SpeakerScreen, SpeakerHero, TheStory, Keynotes });
