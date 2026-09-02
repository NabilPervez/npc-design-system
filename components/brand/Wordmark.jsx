import React, { useLayoutEffect, useRef, useState } from 'react';

const A = '../../assets/';

/* Every mark ships in six tints. Champagne is the master; the two screen golds are for
   dark and light grounds respectively; paper/white are knockouts; ink is for gold fills. */
const TONES = ['gold', 'gold-bright', 'gold-deep', 'paper', 'white', 'ink'];
const TONE_INK = {
  'gold': 'var(--gold-500)',
  'gold-bright': 'var(--gold-300)',
  'gold-deep': 'var(--gold-800)',
  'paper': 'var(--ink-50)',
  'white': '#FFFFFF',
  'ink': 'var(--ink-800)'
};
const art = (base, file, tone) => base + file + '-' + (TONES.includes(tone) ? tone : 'gold') + '.png';

/** Measures the ink width of the line above and returns the letter-spacing that makes
 *  `text` span exactly that width — so "CONSULTING" sits justified between the N and the Z.
 *  Uses a hidden twin for the natural-width measurement so nothing mutates the live node
 *  (imperative style writes fight React's style object and never settle). */
function useJustifyTo(topRef, twinRef, text, trailing, deps) {
  const [ls, setLs] = useState(null);
  useLayoutEffect(() => {
    // The hook runs for every variant (hook order must stay stable), but only the `type`
    // variant mounts these refs — bail before touching the DOM for all the others.
    if (!text || text.length < 2) return;
    if (!topRef.current || !twinRef.current) return;
    let raf, cancelled = false;
    const fit = () => {
      const top = topRef.current, twin = twinRef.current;
      if (!top || !twin || cancelled) return;
      // subtract the top line's own trailing letter-space to get the true N…Z ink width
      const want = top.getBoundingClientRect().width - (trailing || 0);
      const natural = twin.getBoundingClientRect().width;
      if (!want || !natural) { raf = requestAnimationFrame(fit); return; }
      setLs((want - natural) / (text.length - 1));
    };
    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(topRef.current);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(fit);
    return () => { cancelled = true; ro.disconnect(); cancelAnimationFrame(raf); };
  }, deps);
  return ls;
}

/** The NPC identity marks. See Wordmark.prompt.md for the variant map. */
export function Wordmark({
  variant = 'lockup', size = 64, align = 'center', tone = 'gold', ground = 'auto',
  label = 'Nabil Pervez Consulting', subline = 'Consulting',
  assetBase = A, color, style
}) {
  const ink = color || TONE_INK[tone] || TONE_INK.gold;
  const glyph = art(assetBase, 'mark-nebtune', tone);
  const npc = art(assetBase, 'monogram-npc', tone);

  /* Container fills. `auto` follows the page theme via --pattern-ground, so a badge sits
     on ink in dark mode and on paper in light mode without the caller doing anything. */
  const FILL = { auto: 'var(--pattern-ground)', ink: 'var(--ink-880)', paper: 'var(--paper-50)', gold: 'var(--gold-500)', none: 'transparent' };
  const fill = FILL[ground] || FILL.auto;
  /* Art inside a gold fill must be ink; inside a paper fill it must not be a knockout. */
  const onGold = ground === 'gold';
  const containerTone = onGold ? 'ink' : ground === 'paper' && (tone === 'paper' || tone === 'white') ? 'gold-deep' : tone;

  const topRef = useRef(null);
  const twinRef = useRef(null);
  const subFs = size * 0.395;
  const subLs = useJustifyTo(topRef, twinRef, subline, size * 0.04, [size, subline, variant, tone]);

  /* ── artwork-only variants ── */
  if (variant === 'mark') {
    return <img src={glyph} alt={label} style={{ width: size, height: size, display: 'block', ...style }} />;
  }
  if (variant === 'npc') {
    return <img src={npc} alt="NPC" style={{ width: size * 2.26, height: 'auto', display: 'block', ...style }} />;
  }
  if (variant === 'wordmark') {
    return <img src={art(assetBase, 'wordmark-nabil-pervez', tone)} alt="Nabil Pervez"
      style={{ width: size * 4, height: 'auto', display: 'block', ...style }} />;
  }

  /* ── containers ── */
  if (variant === 'badge' || variant === 'badge-npc') {
    const isNpc = variant === 'badge-npc';
    const src2 = art(assetBase, isNpc ? 'monogram-npc' : 'mark-nebtune', containerTone);
    return (
      <div style={{
        width: size, height: size, borderRadius: '50%', display: 'grid', placeItems: 'center',
        border: '1px solid ' + (onGold ? 'rgba(19,25,33,.35)' : 'var(--border-strong)'),
        background: fill, flexShrink: 0, ...style
      }}>
        <img src={src2} alt={label} style={{ width: size * (isNpc ? 0.62 : 0.5), height: 'auto', display: 'block' }} />
      </div>
    );
  }
  if (variant === 'chip' || variant === 'chip-npc') {
    const isNpc = variant === 'chip-npc';
    /* The chip is the inverse treatment by definition: solid champagne, ink art. */
    const chipGround = ground === 'auto' ? 'gold' : ground;
    const chipTone = chipGround === 'gold' ? 'ink' : tone;
    return (
      <div style={{
        width: size, height: size, borderRadius: 'var(--radius)', display: 'grid', placeItems: 'center',
        background: FILL[chipGround] || FILL.gold, flexShrink: 0, ...style
      }}>
        <img src={art(assetBase, isNpc ? 'monogram-npc' : 'mark-nebtune', chipTone)} alt={label}
          style={{ width: size * (isNpc ? 0.66 : 0.52), height: 'auto', display: 'block' }} />
      </div>
    );
  }
  if (variant === 'tile') {
    return (
      <div style={{
        width: size, height: size, display: 'grid', placeItems: 'center', flexShrink: 0,
        background: fill, border: '1px solid var(--border)', ...style
      }}>
        <div style={{ width: size * 0.62, height: size * 0.62, transform: 'rotate(45deg)', border: '1px solid var(--border-strong)', display: 'grid', placeItems: 'center' }}>
          <img src={art(assetBase, 'mark-nebtune', containerTone)} alt={label}
            style={{ width: size * 0.34, height: 'auto', display: 'block', transform: 'rotate(-45deg)' }} />
        </div>
      </div>
    );
  }

  /* ── horizontal lockups ── */
  if (variant === 'horizontal' || variant === 'horizontal-npc') {
    const isNpc = variant === 'horizontal-npc';
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: size * 0.42, ...style }}>
        <img src={isNpc ? npc : glyph} alt="" aria-hidden="true"
          style={{ width: size * (isNpc ? 1.9 : 1), height: 'auto', display: 'block', flexShrink: 0 }} />
        <span style={{ width: 1, height: size * 0.82, background: 'var(--border-strong)', flexShrink: 0 }} />
        <span style={{
          fontFamily: 'var(--font-sans)', fontWeight: 'var(--fw-regular)',
          fontSize: Math.max(9, size * 0.20), lineHeight: 1.5,
          letterSpacing: size * 0.055, textTransform: 'uppercase', color: ink
        }}>Nabil Pervez<br />Consulting</span>
      </div>
    );
  }

  /* ── stacked lockup (the brand-card master) ── */
  if (variant === 'lockup') {
    return (
      <div style={{ display: 'grid', justifyItems: 'center', gap: size * 0.42, ...style }}>
        <img src={glyph} alt="" aria-hidden="true" style={{ width: size, height: size, display: 'block' }} />
        <span style={{
          fontFamily: 'var(--font-sans)', fontWeight: 'var(--fw-regular)',
          fontSize: Math.max(9, size * 0.20), lineHeight: 1,
          letterSpacing: size * 0.115, textTransform: 'uppercase',
          color: ink, paddingLeft: size * 0.115, whiteSpace: 'nowrap'
        }}>{label}</span>
      </div>
    );
  }

  /* ── live type: CONSULTING justified to the N…Z width above ── */
  const subFont = { fontFamily: 'var(--font-wordmark)', fontSize: subFs, lineHeight: 1, textTransform: 'uppercase', whiteSpace: 'nowrap', display: 'inline-block' };
  return (
    <div style={{ display: 'grid', justifyItems: align === 'center' ? 'center' : 'start', gap: size * 0.14, ...style }}>
      <span ref={topRef} style={{
        fontFamily: 'var(--font-wordmark)', fontSize: size, lineHeight: .95,
        letterSpacing: size * 0.04, textTransform: 'uppercase', color: ink, whiteSpace: 'nowrap'
      }}>Nabil Pervez</span>
      {subline && (
        <>
          <span ref={twinRef} aria-hidden="true" style={{
            ...subFont, letterSpacing: 'normal', position: 'absolute', visibility: 'hidden',
            pointerEvents: 'none', left: -99999, top: 0
          }}>{subline}</span>
          <span style={{
            ...subFont, color: ink,
            letterSpacing: subLs == null ? 'normal' : subLs,
            /* letter-spacing also lands after the final glyph; pull that blank back in
               (inline-block, so the negative margin actually collapses the box) or a
               centred lockup drifts left by half a letter-space */
            marginRight: subLs == null ? 0 : -subLs,
            visibility: subLs == null ? 'hidden' : 'visible'
          }}>{subline}</span>
        </>
      )}
    </div>
  );
}
