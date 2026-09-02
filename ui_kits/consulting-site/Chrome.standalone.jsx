const DS = window.NPCDesignSystem_2f0ecd;
const { NavBar, Fab, FabStack, Wordmark, Button, Divider } = DS;
/** Falls back to a plain ink panel if the bundle predates PatternPanel. */
const PatternPanel = DS.PatternPanel || (({ children, style }) =>
  <div style={{ background: 'var(--pattern-ground)', ...style }}>{children}</div>);

function Icon({ name, size = 17 }) {
  return <i data-lucide={name} style={{ width: size, height: size, display: 'block' }}></i>;
}

function SiteHeader({ route, onNavigate }) {
  return (
    <NavBar
      brand="Nabil Pervez"
      activeHref={route}
      onNavigate={onNavigate}
      links={[
        { label: 'Divisions', href: 'home' },
        { label: 'Speaking', href: 'speaker' },
        { label: 'Case Studies', href: 'cases' }
      ]}
      right={null}
    />
  );
}

function SiteFooter() {
  return (
    <footer style={{ borderTop: '1px solid var(--border)', marginTop: 'var(--sp-32)', padding: 'var(--sp-24) var(--page-pad)' }}>
      <div style={{ maxWidth: 'var(--page-max)', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 'var(--sp-16)', flexWrap: 'wrap' }}>
        <div style={{ display: 'grid', justifyItems: 'center', gap: 14 }}>
          <img src={window.__resources.markGold} alt="" aria-hidden="true" style={{ width: 34, height: 34, display: 'block' }} />
          <span style={{ fontFamily: 'var(--font-sans)', fontSize: 9, lineHeight: 1, letterSpacing: 3.9, textTransform: 'uppercase', color: 'var(--gold-500)', paddingLeft: 3.9, whiteSpace: 'nowrap' }}>Nabil Pervez Consulting</span>
        </div>
        <div style={{ display: 'grid', gap: 'var(--sp-2)', fontSize: 'var(--fs-sm)', color: 'var(--text-muted)', textAlign: 'right' }}>
          <span>Dallas–Fort Worth, TX</span>
          <a href="mailto:nabilpervezgg@gmail.com">nabilpervezgg@gmail.com</a>
          <span style={{ opacity: .6 }}>© 2026 Nabil Pervez Consulting</span>
        </div>
      </div>
    </footer>
  );
}

function ClosingCta() {
  return (
    <PatternPanel fade opacity="var(--pattern-opacity)" style={{ marginTop: 'var(--sp-32)' }}>
      <div style={{ maxWidth: 'var(--page-max)', margin: '0 auto', padding: 'var(--sp-32) var(--page-pad)', display: 'grid', justifyItems: 'center', gap: 'var(--sp-8)', textAlign: 'center' }}>
        <h2 style={{ margin: 0, fontFamily: 'var(--font-serif)', fontWeight: 'var(--fw-light)', fontSize: 'clamp(2rem,4vw,3rem)', lineHeight: 1.08, letterSpacing: 'var(--ls-display)' }}>
          Let's build something<br />worth referring.
        </h2>
        <Button size="lg">Start A Conversation</Button>
      </div>
    </PatternPanel>
  );
}

function SiteShell({ route, onNavigate, children }) {
  return (
    <div className="npc-grain" style={{ minHeight: '100vh', background: 'var(--bg)' }}>
      <SiteHeader route={route} onNavigate={onNavigate} />
      <div style={{ position: 'relative', zIndex: 1 }}>{children}</div>
      <ClosingCta />
      <SiteFooter />
      <FabStack>
        <Fab title="Email Nabil" href="mailto:nabilpervezgg@gmail.com"><Icon name="mail" /></Fab>
        <Fab title="LinkedIn" href="https://linkedin.com/in/perveznabil"><Icon name="linkedin" /></Fab>
      </FabStack>
    </div>
  );
}

function Section({ eyebrow, title, children, id }) {
  const { Eyebrow } = window.NPCDesignSystem_2f0ecd;
  return (
    <section id={id} style={{ maxWidth: 'var(--page-max)', margin: '0 auto', padding: '0 var(--page-pad)', marginBottom: 'var(--sp-32)' }}>
      <div style={{ display: 'grid', gap: 'var(--sp-6)', marginBottom: 'var(--sp-20)' }}>
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        <h2 style={{ margin: 0, fontFamily: 'var(--font-serif)', fontWeight: 'var(--fw-light)', fontSize: 'clamp(2rem,4vw,3rem)', lineHeight: 1.08, letterSpacing: 'var(--ls-display)', color: 'var(--text)' }}>{title}</h2>
      </div>
      {children}
    </section>
  );
}

Object.assign(window, { Icon, SiteHeader, SiteFooter, SiteShell, Section, ClosingCta });
