/* @ds-bundle: {"format":4,"namespace":"NPCDesignSystem_2f0ecd","components":[{"name":"LogoWall","sourcePath":"components/brand/LogoWall.jsx"},{"name":"PatternPanel","sourcePath":"components/brand/PatternPanel.jsx"},{"name":"Wordmark","sourcePath":"components/brand/Wordmark.jsx"},{"name":"Card","sourcePath":"components/cards/Card.jsx"},{"name":"CaseStudyCard","sourcePath":"components/cards/CaseStudyCard.jsx"},{"name":"DivisionCard","sourcePath":"components/cards/DivisionCard.jsx"},{"name":"JobCard","sourcePath":"components/cards/JobCard.jsx"},{"name":"MetaListItem","sourcePath":"components/cards/MetaListItem.jsx"},{"name":"ProjectCard","sourcePath":"components/cards/ProjectCard.jsx"},{"name":"TalkCard","sourcePath":"components/cards/TalkCard.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Divider","sourcePath":"components/core/Divider.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"SectionHead","sourcePath":"components/core/SectionHead.jsx"},{"name":"StatChip","sourcePath":"components/core/StatChip.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Fab","sourcePath":"components/navigation/Fab.jsx"},{"name":"FabStack","sourcePath":"components/navigation/Fab.jsx"},{"name":"NavBar","sourcePath":"components/navigation/NavBar.jsx"}],"sourceHashes":{"components/brand/LogoWall.jsx":"174ab89d23b3","components/brand/PatternPanel.jsx":"b9e45aaae15c","components/brand/Wordmark.jsx":"cc2865a8253e","components/cards/Card.jsx":"3243fa2c3ef0","components/cards/CaseStudyCard.jsx":"fac31fcc333b","components/cards/DivisionCard.jsx":"3a748c03541a","components/cards/JobCard.jsx":"c79f46f8e450","components/cards/MetaListItem.jsx":"71e78756e27d","components/cards/ProjectCard.jsx":"91bbeb24579a","components/cards/TalkCard.jsx":"81597f3226f2","components/core/Button.jsx":"8d63c7e284f4","components/core/Divider.jsx":"55ed1bf7f3fa","components/core/Eyebrow.jsx":"0c8b0f554796","components/core/SectionHead.jsx":"105ceaf3dea6","components/core/StatChip.jsx":"2bcf61fba309","components/core/Tag.jsx":"848c79afdde3","components/navigation/Fab.jsx":"f12ac0962bda","components/navigation/NavBar.jsx":"4bb23d0f59d7","guidelines/card-theme.js":"70cb6dc06842","ui_kits/consulting-site/CaseStudiesScreen.jsx":"8e88234a8214","ui_kits/consulting-site/Chrome.jsx":"eff8b93b209e","ui_kits/consulting-site/Chrome.standalone.jsx":"c2d8bf635786","ui_kits/consulting-site/HomeScreen.jsx":"aa37ea566621","ui_kits/consulting-site/HomeScreen.standalone.jsx":"e5ded49e8555","ui_kits/consulting-site/SpeakerScreen.jsx":"75913c68d5d5","ui_kits/consulting-site/data.js":"3f4356a732a3","ui_kits/resume/ResumeHero.jsx":"7151b34d20e0","ui_kits/resume/ResumeMain.jsx":"163501a90567","ui_kits/resume/ResumeSidebar.jsx":"49bc7829b29f","ui_kits/resume/resume-data.js":"ef6a5045447e"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.NPCDesignSystem_2f0ecd = window.NPCDesignSystem_2f0ecd || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/LogoWall.jsx
try { (() => {
/** "Trusted By Teams At" — client names set as restrained uppercase type, not logo images.
 *  No client logo files were supplied with the brand assets, so this renders wordmarks in type. */
function LogoWall({
  label = 'Trusted By Teams At',
  clients = [],
  columns,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--sp-8)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-sm)',
      fontWeight: 'var(--fw-medium)',
      letterSpacing: 'var(--ls-widest)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      textAlign: 'center'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: columns ? 'grid' : 'flex',
      gridTemplateColumns: columns ? 'repeat(' + columns + ',1fr)' : undefined,
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 'var(--sp-8) var(--sp-16)'
    }
  }, clients.map(c => /*#__PURE__*/React.createElement("span", {
    key: c,
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: '1rem',
      fontWeight: 'var(--fw-medium)',
      letterSpacing: 'var(--ls-wide)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      textAlign: 'center',
      whiteSpace: 'nowrap'
    }
  }, c))));
}
Object.assign(__ds_scope, { LogoWall });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/LogoWall.jsx", error: String((e && e.message) || e) }); }

// components/brand/PatternPanel.jsx
try { (() => {
const TILES = {
  sm: 'var(--pattern-tile-sm)',
  md: 'var(--pattern-tile)',
  lg: 'var(--pattern-tile-lg)'
};

/** The NPC geometric pattern as a surface — a fine woven field of small circles and
 *  diamonds. Its canonical form is the print one: champagne hairlines on a near-white
 *  ground. Both the ground and the opacity are theme-scoped, so the same panel reads as
 *  print on paper and as a quiet texture on ink. */
function PatternPanel({
  children,
  size = 'md',
  tile,
  opacity = 'var(--pattern-opacity)',
  ground = 'var(--pattern-ground)',
  fade = false,
  style
}) {
  const t = tile || TILES[size] || TILES.md;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: ground,
      isolation: 'isolate',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      zIndex: 0,
      backgroundImage: 'var(--pattern-gold)',
      backgroundSize: t + ' auto',
      backgroundRepeat: 'repeat',
      opacity,
      maskImage: fade ? 'linear-gradient(to right, #000 0%, transparent 100%)' : undefined,
      WebkitMaskImage: fade ? 'linear-gradient(to right, #000 0%, transparent 100%)' : undefined,
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1
    }
  }, children));
}
Object.assign(__ds_scope, { PatternPanel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/PatternPanel.jsx", error: String((e && e.message) || e) }); }

// components/brand/Wordmark.jsx
try { (() => {
const {
  useLayoutEffect,
  useRef,
  useState
} = React;
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
    let raf,
      cancelled = false;
    const fit = () => {
      const top = topRef.current,
        twin = twinRef.current;
      if (!top || !twin || cancelled) return;
      // subtract the top line's own trailing letter-space to get the true N…Z ink width
      const want = top.getBoundingClientRect().width - (trailing || 0);
      const natural = twin.getBoundingClientRect().width;
      if (!want || !natural) {
        raf = requestAnimationFrame(fit);
        return;
      }
      setLs((want - natural) / (text.length - 1));
    };
    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(topRef.current);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(fit);
    return () => {
      cancelled = true;
      ro.disconnect();
      cancelAnimationFrame(raf);
    };
  }, deps);
  return ls;
}

/** The NPC identity marks. See Wordmark.prompt.md for the variant map. */
function Wordmark({
  variant = 'lockup',
  size = 64,
  align = 'center',
  tone = 'gold',
  ground = 'auto',
  label = 'Nabil Pervez Consulting',
  subline = 'Consulting',
  assetBase = A,
  color,
  style
}) {
  const ink = color || TONE_INK[tone] || TONE_INK.gold;
  const glyph = art(assetBase, 'mark-nebtune', tone);
  const npc = art(assetBase, 'monogram-npc', tone);

  /* Container fills. `auto` follows the page theme via --pattern-ground, so a badge sits
     on ink in dark mode and on paper in light mode without the caller doing anything. */
  const FILL = {
    auto: 'var(--pattern-ground)',
    ink: 'var(--ink-880)',
    paper: 'var(--paper-50)',
    gold: 'var(--gold-500)',
    none: 'transparent'
  };
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
    return /*#__PURE__*/React.createElement("img", {
      src: glyph,
      alt: label,
      style: {
        width: size,
        height: size,
        display: 'block',
        ...style
      }
    });
  }
  if (variant === 'npc') {
    return /*#__PURE__*/React.createElement("img", {
      src: npc,
      alt: "NPC",
      style: {
        width: size * 2.26,
        height: 'auto',
        display: 'block',
        ...style
      }
    });
  }
  if (variant === 'wordmark') {
    return /*#__PURE__*/React.createElement("img", {
      src: art(assetBase, 'wordmark-nabil-pervez', tone),
      alt: "Nabil Pervez",
      style: {
        width: size * 4,
        height: 'auto',
        display: 'block',
        ...style
      }
    });
  }

  /* ── containers ── */
  if (variant === 'badge' || variant === 'badge-npc') {
    const isNpc = variant === 'badge-npc';
    const src2 = art(assetBase, isNpc ? 'monogram-npc' : 'mark-nebtune', containerTone);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        width: size,
        height: size,
        borderRadius: '50%',
        display: 'grid',
        placeItems: 'center',
        border: '1px solid ' + (onGold ? 'rgba(19,25,33,.35)' : 'var(--border-strong)'),
        background: fill,
        flexShrink: 0,
        ...style
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: src2,
      alt: label,
      style: {
        width: size * (isNpc ? 0.62 : 0.5),
        height: 'auto',
        display: 'block'
      }
    }));
  }
  if (variant === 'chip' || variant === 'chip-npc') {
    const isNpc = variant === 'chip-npc';
    /* The chip is the inverse treatment by definition: solid champagne, ink art. */
    const chipGround = ground === 'auto' ? 'gold' : ground;
    const chipTone = chipGround === 'gold' ? 'ink' : tone;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        width: size,
        height: size,
        borderRadius: 'var(--radius)',
        display: 'grid',
        placeItems: 'center',
        background: FILL[chipGround] || FILL.gold,
        flexShrink: 0,
        ...style
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: art(assetBase, isNpc ? 'monogram-npc' : 'mark-nebtune', chipTone),
      alt: label,
      style: {
        width: size * (isNpc ? 0.66 : 0.52),
        height: 'auto',
        display: 'block'
      }
    }));
  }
  if (variant === 'tile') {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        width: size,
        height: size,
        display: 'grid',
        placeItems: 'center',
        flexShrink: 0,
        background: fill,
        border: '1px solid var(--border)',
        ...style
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: size * 0.62,
        height: size * 0.62,
        transform: 'rotate(45deg)',
        border: '1px solid var(--border-strong)',
        display: 'grid',
        placeItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: art(assetBase, 'mark-nebtune', containerTone),
      alt: label,
      style: {
        width: size * 0.34,
        height: 'auto',
        display: 'block',
        transform: 'rotate(-45deg)'
      }
    })));
  }

  /* ── horizontal lockups ── */
  if (variant === 'horizontal' || variant === 'horizontal-npc') {
    const isNpc = variant === 'horizontal-npc';
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: size * 0.42,
        ...style
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: isNpc ? npc : glyph,
      alt: "",
      "aria-hidden": "true",
      style: {
        width: size * (isNpc ? 1.9 : 1),
        height: 'auto',
        display: 'block',
        flexShrink: 0
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 1,
        height: size * 0.82,
        background: 'var(--border-strong)',
        flexShrink: 0
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontWeight: 'var(--fw-regular)',
        fontSize: Math.max(9, size * 0.20),
        lineHeight: 1.5,
        letterSpacing: size * 0.055,
        textTransform: 'uppercase',
        color: ink
      }
    }, "Nabil Pervez", /*#__PURE__*/React.createElement("br", null), "Consulting"));
  }

  /* ── stacked lockup (the brand-card master) ── */
  if (variant === 'lockup') {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        justifyItems: 'center',
        gap: size * 0.42,
        ...style
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: glyph,
      alt: "",
      "aria-hidden": "true",
      style: {
        width: size,
        height: size,
        display: 'block'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontWeight: 'var(--fw-regular)',
        fontSize: Math.max(9, size * 0.20),
        lineHeight: 1,
        letterSpacing: size * 0.115,
        textTransform: 'uppercase',
        color: ink,
        paddingLeft: size * 0.115,
        whiteSpace: 'nowrap'
      }
    }, label));
  }

  /* ── live type: CONSULTING justified to the N…Z width above ── */
  const subFont = {
    fontFamily: 'var(--font-wordmark)',
    fontSize: subFs,
    lineHeight: 1,
    textTransform: 'uppercase',
    whiteSpace: 'nowrap',
    display: 'inline-block'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      justifyItems: align === 'center' ? 'center' : 'start',
      gap: size * 0.14,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    ref: topRef,
    style: {
      fontFamily: 'var(--font-wordmark)',
      fontSize: size,
      lineHeight: .95,
      letterSpacing: size * 0.04,
      textTransform: 'uppercase',
      color: ink,
      whiteSpace: 'nowrap'
    }
  }, "Nabil Pervez"), subline && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    ref: twinRef,
    "aria-hidden": "true",
    style: {
      ...subFont,
      letterSpacing: 'normal',
      position: 'absolute',
      visibility: 'hidden',
      pointerEvents: 'none',
      left: -99999,
      top: 0
    }
  }, subline), /*#__PURE__*/React.createElement("span", {
    style: {
      ...subFont,
      color: ink,
      letterSpacing: subLs == null ? 'normal' : subLs,
      /* letter-spacing also lands after the final glyph; pull that blank back in
         (inline-block, so the negative margin actually collapses the box) or a
         centred lockup drifts left by half a letter-space */
      marginRight: subLs == null ? 0 : -subLs,
      visibility: subLs == null ? 'hidden' : 'visible'
    }
  }, subline)));
}
Object.assign(__ds_scope, { Wordmark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Wordmark.jsx", error: String((e && e.message) || e) }); }

// components/cards/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/** Base NPC surface: 10px radius, gold-tinted hairline, --bg-card fill.
 *  interactive=true adds the 2px lift + gold border; sweep=true adds the diagonal shine wipe. */
function Card({
  children,
  interactive = false,
  sweep = false,
  padding = 'var(--card-pad)',
  style,
  ...rest
}) {
  const [hover, setHover] = useState(false);
  const on = interactive && hover;
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: 'relative',
      overflow: 'hidden',
      padding,
      background: 'var(--bg-card)',
      border: '1px solid ' + (on ? 'var(--border-strong)' : 'var(--border)'),
      borderRadius: 'var(--radius)',
      transform: on ? 'translateY(var(--lift)) scale(var(--scale-active))' : 'none',
      boxShadow: on ? 'var(--shadow-card-hover)' : 'none',
      transition: 'transform var(--dur-mid) ease, box-shadow var(--dur-mid) ease, border-color var(--dur-mid) ease, opacity var(--transition)',
      ...style
    }
  }, rest), sweep && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      top: 0,
      left: on ? '160%' : '-100%',
      width: '55%',
      height: '100%',
      background: 'var(--shine)',
      transform: 'skewX(-12deg)',
      pointerEvents: 'none',
      transition: 'left var(--dur-sweep) ease'
    }
  }), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/Card.jsx", error: String((e && e.message) || e) }); }

// components/cards/MetaListItem.jsx
try { (() => {
function MetaListItem({
  name,
  sub,
  id,
  star = false,
  last = false,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 0',
      borderBottom: last ? 'none' : '1px solid var(--border)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--sp-3)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-md)',
      fontWeight: 'var(--fw-medium)',
      color: 'var(--text)',
      lineHeight: 1.35,
      marginBottom: 2
    }
  }, star && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      fontSize: '.65rem',
      color: 'var(--gold)'
    }
  }, "\u2605"), name), sub && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-sm)',
      color: 'var(--text-muted)'
    }
  }, sub), id && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-micro)',
      color: 'var(--text-muted)',
      opacity: .7,
      letterSpacing: '.5px'
    }
  }, id));
}
Object.assign(__ds_scope, { MetaListItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/MetaListItem.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
const SIZES = {
  sm: {
    padding: '5px 12px',
    fontSize: '.68rem',
    letterSpacing: '1.1px'
  },
  md: {
    padding: '7px 16px',
    fontSize: '.72rem',
    letterSpacing: '1.2px'
  },
  lg: {
    padding: '11px 26px',
    fontSize: '.78rem',
    letterSpacing: '1.4px'
  }
};
function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  icon,
  iconRight,
  disabled = false,
  fullWidth = false,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = useState(false);
  const [press, setPress] = useState(false);
  const s = SIZES[size] || SIZES.md;
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 'var(--sp-3)',
    font: 'var(--fw-semibold) ' + s.fontSize + '/1 var(--font-sans)',
    letterSpacing: s.letterSpacing,
    textTransform: 'uppercase',
    textDecoration: 'none',
    padding: s.padding,
    borderRadius: 'var(--radius-md)',
    border: '1px solid transparent',
    cursor: disabled ? 'not-allowed' : 'pointer',
    width: fullWidth ? '100%' : 'auto',
    opacity: disabled ? 0.4 : 1,
    whiteSpace: 'nowrap',
    transition: 'opacity var(--dur-fast), transform var(--dur-fast), background var(--dur-fast), color var(--dur-fast), border-color var(--dur-fast)',
    transform: disabled ? 'none' : press ? 'translateY(0) scale(.985)' : hover ? 'translateY(-1px)' : 'none'
  };
  const variants = {
    primary: {
      background: 'var(--grad)',
      color: 'var(--text-on-gold)',
      opacity: disabled ? 0.4 : hover ? 0.88 : 1
    },
    secondary: {
      background: hover ? 'var(--gold-dim)' : 'transparent',
      color: 'var(--gold)',
      borderColor: hover ? 'var(--border-strong)' : 'var(--border)'
    },
    ghost: {
      background: hover ? 'var(--gold-dim)' : 'transparent',
      color: hover ? 'var(--text)' : 'var(--text-muted)'
    },
    link: {
      background: 'none',
      color: hover ? 'var(--text)' : 'var(--link)',
      padding: 0,
      textTransform: 'none',
      letterSpacing: 'var(--ls-tight)',
      fontWeight: 'var(--fw-medium)',
      borderBottom: '1px solid ' + (hover ? 'var(--gold)' : 'rgba(220,180,80,.35)'),
      borderRadius: 0
    }
  };
  const Tag = href && !disabled ? 'a' : 'button';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    onClick: disabled ? undefined : onClick,
    disabled: Tag === 'button' ? disabled : undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    style: {
      ...base,
      ...variants[variant],
      ...style
    }
  }, rest), icon, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/cards/DivisionCard.jsx
try { (() => {
function DivisionCard({
  title,
  description,
  cta,
  href,
  icon,
  style
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.Card, {
    interactive: true,
    padding: "var(--sp-10)",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--sp-4)',
      ...style
    }
  }, icon && /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--gold)',
      marginBottom: 'var(--sp-2)'
    }
  }, icon), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      font: 'var(--text-card-title)',
      color: 'var(--text)'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: 'var(--fw-light) var(--fs-md)/var(--lh-relaxed) var(--font-sans)',
      color: 'var(--text-muted)',
      flex: 1
    }
  }, description), cta && /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "link",
    href: href,
    style: {
      marginTop: 'var(--sp-4)',
      alignSelf: 'flex-start'
    }
  }, cta));
}
Object.assign(__ds_scope, { DivisionCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/DivisionCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/ProjectCard.jsx
try { (() => {
function ProjectCard({
  title,
  children,
  ctaLabel,
  href,
  icon,
  style
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.Card, {
    interactive: true,
    padding: "20px 22px",
    style: {
      display: 'grid',
      gap: 'var(--sp-3)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--fw-semibold) 1rem/var(--lh-tight) var(--font-serif)',
      color: 'var(--text)'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: 'var(--fw-regular) var(--fs-base)/1.65 var(--font-sans)',
      color: 'var(--text-muted)'
    }
  }, children), ctaLabel && /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "md",
    href: href,
    icon: icon,
    style: {
      marginTop: 'var(--sp-5)',
      justifySelf: 'start'
    }
  }, ctaLabel));
}
Object.assign(__ds_scope, { ProjectCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/ProjectCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Divider.jsx
try { (() => {
function Divider({
  spacing = 'var(--sp-28)',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'var(--border)',
      margin: spacing + ' 0',
      ...style
    }
  });
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Divider.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function Eyebrow({
  children,
  rule = true,
  as: Tag = 'div',
  style
}) {
  return /*#__PURE__*/React.createElement(Tag, {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--sp-5)',
      font: 'var(--text-eyebrow)',
      letterSpacing: 'var(--ls-widest)',
      textTransform: 'uppercase',
      color: 'var(--gold)',
      ...style
    }
  }, rule && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      width: 32,
      height: 1,
      background: 'var(--gold)',
      flexShrink: 0
    }
  }), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/cards/CaseStudyCard.jsx
try { (() => {
function CaseStudyCard({
  discipline,
  client,
  work,
  result,
  style
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.Card, {
    interactive: true,
    padding: "var(--sp-10)",
    style: {
      display: 'grid',
      gap: 'var(--sp-4)',
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, {
    rule: false,
    style: {
      fontSize: 'var(--fs-2xs)',
      letterSpacing: 'var(--ls-widest)'
    }
  }, discipline), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      font: 'var(--text-card-title)',
      color: 'var(--text)'
    }
  }, client), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: 'var(--fw-light) var(--fs-base)/var(--lh-body) var(--font-sans)',
      color: 'var(--text-muted)'
    }
  }, work), result && /*#__PURE__*/React.createElement("p", {
    className: "npc-gold-text",
    style: {
      margin: 0,
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--fw-semibold)',
      fontSize: 'var(--fs-md)',
      letterSpacing: 'var(--ls-tight)'
    }
  }, result));
}
Object.assign(__ds_scope, { CaseStudyCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/CaseStudyCard.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionHead.jsx
try { (() => {
function SectionHead({
  children,
  rule = true,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--sp-6)',
      marginBottom: 'var(--sp-12)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      font: 'var(--text-section)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--ls-widest)',
      color: 'var(--gold)',
      whiteSpace: 'nowrap'
    }
  }, children), rule && /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 1,
      background: 'var(--border)'
    }
  }));
}
Object.assign(__ds_scope, { SectionHead });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionHead.jsx", error: String((e && e.message) || e) }); }

// components/core/StatChip.jsx
try { (() => {
function StatChip({
  value,
  label,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 16px 14px',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius)',
      background: 'var(--bg-card)',
      textAlign: 'center',
      display: 'grid',
      gap: 2,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "npc-gold-text",
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--fw-bold)',
      fontSize: '1.5rem',
      lineHeight: 1.1
    }
  }, value), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-micro)',
      letterSpacing: 'var(--ls-wide)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      fontWeight: 'var(--fw-regular)'
    }
  }, label));
}
Object.assign(__ds_scope, { StatChip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StatChip.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
const {
  useState
} = React;
function Tag({
  children,
  variant = 'default',
  shape = 'rect',
  style
}) {
  const [hover, setHover] = useState(false);
  const primary = variant === 'primary';
  return /*#__PURE__*/React.createElement("span", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-block',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-xs)',
      lineHeight: 'var(--lh-snug)',
      padding: shape === 'pill' ? '3px 9px' : '4px 10px',
      borderRadius: shape === 'pill' ? 'var(--radius-pill)' : 'var(--radius-sm)',
      border: '1px solid ' + (primary ? 'var(--border-strong)' : hover ? 'var(--gold)' : 'var(--border)'),
      background: primary ? 'var(--gold-dim)' : shape === 'pill' ? 'transparent' : 'var(--bg-card)',
      color: primary ? 'var(--gold)' : hover ? 'var(--gold)' : 'var(--text-muted)',
      fontWeight: primary ? 'var(--fw-medium)' : 'var(--fw-regular)',
      whiteSpace: shape === 'pill' ? 'nowrap' : 'normal',
      transition: 'border-color var(--dur-fast), color var(--dur-fast)',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/cards/JobCard.jsx
try { (() => {
function JobCard({
  title,
  company,
  date,
  bullets = [],
  style
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.Card, {
    interactive: true,
    sweep: true,
    style: {
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      gap: 'var(--sp-5)',
      flexWrap: 'wrap',
      marginBottom: 'var(--sp-5)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-card-title)',
      color: 'var(--text)'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-base)',
      color: 'var(--gold)',
      fontWeight: 'var(--fw-regular)',
      marginTop: 3,
      letterSpacing: 'var(--ls-tight)'
    }
  }, company)), date && /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    shape: "pill",
    style: {
      marginTop: 2,
      flexShrink: 0,
      fontSize: '.73rem',
      color: 'var(--text-muted)',
      fontWeight: 'var(--fw-light)'
    }
  }, date)), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--sp-3)'
    }
  }, bullets.map((b, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      position: 'relative',
      paddingLeft: 'var(--sp-7)',
      font: 'var(--text-body)',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      left: 0,
      top: 4,
      color: 'var(--gold)',
      fontSize: '.65rem'
    }
  }, "\u2014"), b))));
}
Object.assign(__ds_scope, { JobCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/JobCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/TalkCard.jsx
try { (() => {
function TalkCard({
  title,
  category,
  summary,
  bullets = [],
  style
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.Card, {
    interactive: true,
    sweep: true,
    padding: "var(--sp-10)",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--sp-4)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 'var(--sp-5)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      font: 'var(--text-card-title)',
      color: 'var(--text)'
    }
  }, title), category && /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    shape: "pill"
  }, category)), summary && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: 'var(--fw-light) var(--fs-md)/var(--lh-relaxed) var(--font-sans)',
      color: 'var(--text-muted)'
    }
  }, summary), bullets.length > 0 && /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--sp-3)'
    }
  }, bullets.map((b, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      position: 'relative',
      paddingLeft: 'var(--sp-7)',
      font: 'var(--text-body)',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      left: 0,
      top: 4,
      color: 'var(--gold)',
      fontSize: '.65rem'
    }
  }, "\u2014"), b))));
}
Object.assign(__ds_scope, { TalkCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/TalkCard.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Fab.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
function Fab({
  children,
  href,
  title,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = useState(false);
  const Tag = href ? 'a' : 'button';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    onClick: onClick,
    title: title,
    "aria-label": title,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: 46,
      height: 46,
      borderRadius: 'var(--radius-round)',
      border: '1px solid var(--border)',
      background: hover ? 'var(--gold)' : 'var(--bg-glass)',
      backdropFilter: 'var(--blur-fab)',
      WebkitBackdropFilter: 'var(--blur-fab)',
      color: hover ? 'var(--text-on-gold)' : 'var(--gold)',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '1.05rem',
      textDecoration: 'none',
      padding: 0,
      boxShadow: hover ? 'var(--shadow-fab-hover)' : 'var(--shadow-fab)',
      transform: hover ? 'scale(1.12)' : 'none',
      transition: 'transform var(--dur-fast), background var(--dur-fast), box-shadow var(--dur-fast), color var(--dur-fast)',
      ...style
    }
  }, rest), children);
}

/** Bottom-right vertical stack of Fabs. */
function FabStack({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      bottom: 32,
      right: 32,
      zIndex: 200,
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--sp-4)',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Fab, FabStack });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Fab.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavBar.jsx
try { (() => {
const {
  useState
} = React;
function NavBar({
  brand = 'Nabil Pervez',
  links = [],
  activeHref,
  right,
  onNavigate,
  style
}) {
  const [hoverHref, setHover] = useState(null);
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      position: 'sticky',
      top: 0,
      left: 0,
      right: 0,
      height: 'var(--nav-h)',
      zIndex: 100,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 36px',
      background: 'var(--bg-glass)',
      backdropFilter: 'var(--blur-glass)',
      WebkitBackdropFilter: 'var(--blur-glass)',
      borderBottom: '1px solid var(--border)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 'var(--fs-title-lg)',
      fontWeight: 'var(--fw-semibold)',
      letterSpacing: '.5px',
      color: 'var(--gold)',
      whiteSpace: 'nowrap'
    }
  }, brand), /*#__PURE__*/React.createElement("ul", {
    style: {
      display: 'flex',
      gap: 'var(--sp-2)',
      listStyle: 'none',
      margin: 0,
      padding: 0
    }
  }, links.map(l => {
    const on = l.href === hoverHref || l.href === activeHref;
    return /*#__PURE__*/React.createElement("li", {
      key: l.href
    }, /*#__PURE__*/React.createElement("a", {
      href: l.href,
      onMouseEnter: () => setHover(l.href),
      onMouseLeave: () => setHover(null),
      onClick: onNavigate ? e => {
        e.preventDefault();
        onNavigate(l.href);
      } : undefined,
      style: {
        display: 'block',
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--fs-sm)',
        fontWeight: 'var(--fw-medium)',
        textTransform: 'uppercase',
        letterSpacing: 'var(--ls-wider)',
        color: on ? 'var(--text)' : 'var(--text-muted)',
        textDecoration: 'none',
        padding: '6px 12px',
        borderRadius: 'var(--radius-md)',
        background: on ? 'var(--gold-dim)' : 'transparent',
        transition: 'color var(--dur-fast), background var(--dur-fast)'
      }
    }, l.label));
  })), right);
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavBar.jsx", error: String((e && e.message) || e) }); }

// guidelines/card-theme.js
try { (() => {
/* Adds a small Dark/Light toggle to a @dsCard specimen so both themes can be checked
   in place. Purely a documentation affordance — not part of the shipped system.

   Dark is the default on open, always. A card that declares its own data-theme keeps it
   (brand-pattern.html is authored light because the print presentation IS the light one).
   Toggling is per-card and deliberately NOT persisted across loads — a stored preference
   must never decide what a card looks like when someone opens it. */
(() => {
  const root = document.documentElement;
  const declared = root.getAttribute('data-theme');
  if (!declared) root.dataset.theme = 'dark';
  const mount = () => {
    /* Reserve room so the control never sits on top of the specimen. */
    const pad = document.createElement('style');
    pad.textContent = 'body{padding-bottom:26px!important}';
    document.head.appendChild(pad);
    const btn = document.createElement('button');
    btn.type = 'button';
    const paint = () => {
      btn.textContent = root.dataset.theme === 'dark' ? 'Dark' : 'Light';
      btn.style.cssText = ['position:fixed', 'bottom:6px', 'right:8px', 'z-index:9999', 'font:500 9px/1 var(--font-sans, system-ui)', 'letter-spacing:1.4px', 'text-transform:uppercase', 'padding:4px 9px', 'border-radius:20px', 'cursor:pointer', 'border:1px solid var(--border)', 'background:var(--gold-dim)', 'color:var(--gold)', 'transition:background .2s, color .2s'].join(';');
    };
    btn.addEventListener('click', () => {
      root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
      paint();
    });
    paint();
    document.body.appendChild(btn);
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mount);else mount();
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "guidelines/card-theme.js", error: String((e && e.message) || e) }); }

// ui_kits/consulting-site/CaseStudiesScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  CaseStudyCard,
  Tag,
  Eyebrow
} = window.NPCDesignSystem_2f0ecd;
function CaseStudiesScreen() {
  const all = window.NPCSiteData.cases;
  const disciplines = ['All', ...Array.from(new Set(all.map(c => c.discipline)))].slice(0, 9);
  const [filter, setFilter] = React.useState('All');
  const shown = filter === 'All' ? all : all.filter(c => c.discipline === filter);
  return /*#__PURE__*/React.createElement(Section, {
    eyebrow: "Proven Results",
    title: "Case Studies"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--sp-2)',
      flexWrap: 'wrap',
      marginBottom: 'var(--sp-16)'
    }
  }, disciplines.map(d => /*#__PURE__*/React.createElement("button", {
    key: d,
    onClick: () => setFilter(d),
    style: {
      background: 'none',
      border: 'none',
      padding: 0,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    variant: filter === d ? 'primary' : 'default'
  }, d)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))',
      gap: 'var(--sp-6)'
    }
  }, shown.map(c => /*#__PURE__*/React.createElement(CaseStudyCard, _extends({
    key: c.client + c.discipline
  }, c)))));
}
Object.assign(window, {
  CaseStudiesScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/consulting-site/CaseStudiesScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/consulting-site/Chrome.jsx
try { (() => {
const DS = window.NPCDesignSystem_2f0ecd;
const {
  NavBar,
  Fab,
  FabStack,
  Wordmark,
  Button,
  Divider
} = DS;
/** Falls back to a plain ink panel if the bundle predates PatternPanel. */
const PatternPanel = DS.PatternPanel || (({
  children,
  style
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    background: 'var(--pattern-ground)',
    ...style
  }
}, children));
function Icon({
  name,
  size = 17
}) {
  return /*#__PURE__*/React.createElement("i", {
    "data-lucide": name,
    style: {
      width: size,
      height: size,
      display: 'block'
    }
  });
}
function SiteHeader({
  route,
  onNavigate
}) {
  return /*#__PURE__*/React.createElement(NavBar, {
    brand: "Nabil Pervez",
    activeHref: route,
    onNavigate: onNavigate,
    links: [{
      label: 'Divisions',
      href: 'home'
    }, {
      label: 'Speaking',
      href: 'speaker'
    }, {
      label: 'Case Studies',
      href: 'cases'
    }],
    right: null
  });
}
function SiteFooter() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      borderTop: '1px solid var(--border)',
      marginTop: 'var(--sp-32)',
      padding: 'var(--sp-24) var(--page-pad)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--page-max)',
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      gap: 'var(--sp-16)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    size: 34
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--sp-2)',
      fontSize: 'var(--fs-sm)',
      color: 'var(--text-muted)',
      textAlign: 'right'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Dallas\u2013Fort Worth, TX"), /*#__PURE__*/React.createElement("a", {
    href: "mailto:nabilpervezgg@gmail.com"
  }, "nabilpervezgg@gmail.com"), /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: .6
    }
  }, "\xA9 2026 Nabil Pervez Consulting"))));
}
function ClosingCta() {
  return /*#__PURE__*/React.createElement(PatternPanel, {
    fade: true,
    size: "md",
    opacity: "var(--pattern-opacity)",
    style: {
      marginTop: 'var(--sp-32)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--page-max)',
      margin: '0 auto',
      padding: 'var(--sp-32) var(--page-pad)',
      display: 'grid',
      justifyItems: 'center',
      gap: 'var(--sp-8)',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-serif)',
      fontWeight: 'var(--fw-light)',
      fontSize: 'clamp(2rem,4vw,3rem)',
      lineHeight: 1.08,
      letterSpacing: 'var(--ls-display)'
    }
  }, "Let's build something", /*#__PURE__*/React.createElement("br", null), "worth referring."), /*#__PURE__*/React.createElement(Button, {
    size: "lg"
  }, "Start A Conversation")));
}
function SiteShell({
  route,
  onNavigate,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "npc-grain",
    style: {
      minHeight: '100vh',
      background: 'var(--bg)'
    }
  }, /*#__PURE__*/React.createElement(SiteHeader, {
    route: route,
    onNavigate: onNavigate
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1
    }
  }, children), /*#__PURE__*/React.createElement(ClosingCta, null), /*#__PURE__*/React.createElement(SiteFooter, null), /*#__PURE__*/React.createElement(FabStack, null, /*#__PURE__*/React.createElement(Fab, {
    title: "Email Nabil",
    href: "mailto:nabilpervezgg@gmail.com"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "mail"
  })), /*#__PURE__*/React.createElement(Fab, {
    title: "LinkedIn",
    href: "https://linkedin.com/in/perveznabil"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "linkedin"
  }))));
}
function Section({
  eyebrow,
  title,
  children,
  id
}) {
  const {
    Eyebrow
  } = window.NPCDesignSystem_2f0ecd;
  return /*#__PURE__*/React.createElement("section", {
    id: id,
    style: {
      maxWidth: 'var(--page-max)',
      margin: '0 auto',
      padding: '0 var(--page-pad)',
      marginBottom: 'var(--sp-32)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--sp-6)',
      marginBottom: 'var(--sp-20)'
    }
  }, eyebrow && /*#__PURE__*/React.createElement(Eyebrow, null, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-serif)',
      fontWeight: 'var(--fw-light)',
      fontSize: 'clamp(2rem,4vw,3rem)',
      lineHeight: 1.08,
      letterSpacing: 'var(--ls-display)',
      color: 'var(--text)'
    }
  }, title)), children);
}
Object.assign(window, {
  Icon,
  SiteHeader,
  SiteFooter,
  SiteShell,
  Section,
  ClosingCta
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/consulting-site/Chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/consulting-site/Chrome.standalone.jsx
try { (() => {
const DS = window.NPCDesignSystem_2f0ecd;
const {
  NavBar,
  Fab,
  FabStack,
  Wordmark,
  Button,
  Divider
} = DS;
/** Falls back to a plain ink panel if the bundle predates PatternPanel. */
const PatternPanel = DS.PatternPanel || (({
  children,
  style
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    background: 'var(--pattern-ground)',
    ...style
  }
}, children));
function Icon({
  name,
  size = 17
}) {
  return /*#__PURE__*/React.createElement("i", {
    "data-lucide": name,
    style: {
      width: size,
      height: size,
      display: 'block'
    }
  });
}
function SiteHeader({
  route,
  onNavigate
}) {
  return /*#__PURE__*/React.createElement(NavBar, {
    brand: "Nabil Pervez",
    activeHref: route,
    onNavigate: onNavigate,
    links: [{
      label: 'Divisions',
      href: 'home'
    }, {
      label: 'Speaking',
      href: 'speaker'
    }, {
      label: 'Case Studies',
      href: 'cases'
    }],
    right: null
  });
}
function SiteFooter() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      borderTop: '1px solid var(--border)',
      marginTop: 'var(--sp-32)',
      padding: 'var(--sp-24) var(--page-pad)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--page-max)',
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      gap: 'var(--sp-16)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      justifyItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.__resources.markGold,
    alt: "",
    "aria-hidden": "true",
    style: {
      width: 34,
      height: 34,
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 9,
      lineHeight: 1,
      letterSpacing: 3.9,
      textTransform: 'uppercase',
      color: 'var(--gold-500)',
      paddingLeft: 3.9,
      whiteSpace: 'nowrap'
    }
  }, "Nabil Pervez Consulting")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--sp-2)',
      fontSize: 'var(--fs-sm)',
      color: 'var(--text-muted)',
      textAlign: 'right'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Dallas\u2013Fort Worth, TX"), /*#__PURE__*/React.createElement("a", {
    href: "mailto:nabilpervezgg@gmail.com"
  }, "nabilpervezgg@gmail.com"), /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: .6
    }
  }, "\xA9 2026 Nabil Pervez Consulting"))));
}
function ClosingCta() {
  return /*#__PURE__*/React.createElement(PatternPanel, {
    fade: true,
    opacity: "var(--pattern-opacity)",
    style: {
      marginTop: 'var(--sp-32)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--page-max)',
      margin: '0 auto',
      padding: 'var(--sp-32) var(--page-pad)',
      display: 'grid',
      justifyItems: 'center',
      gap: 'var(--sp-8)',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-serif)',
      fontWeight: 'var(--fw-light)',
      fontSize: 'clamp(2rem,4vw,3rem)',
      lineHeight: 1.08,
      letterSpacing: 'var(--ls-display)'
    }
  }, "Let's build something", /*#__PURE__*/React.createElement("br", null), "worth referring."), /*#__PURE__*/React.createElement(Button, {
    size: "lg"
  }, "Start A Conversation")));
}
function SiteShell({
  route,
  onNavigate,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "npc-grain",
    style: {
      minHeight: '100vh',
      background: 'var(--bg)'
    }
  }, /*#__PURE__*/React.createElement(SiteHeader, {
    route: route,
    onNavigate: onNavigate
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1
    }
  }, children), /*#__PURE__*/React.createElement(ClosingCta, null), /*#__PURE__*/React.createElement(SiteFooter, null), /*#__PURE__*/React.createElement(FabStack, null, /*#__PURE__*/React.createElement(Fab, {
    title: "Email Nabil",
    href: "mailto:nabilpervezgg@gmail.com"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "mail"
  })), /*#__PURE__*/React.createElement(Fab, {
    title: "LinkedIn",
    href: "https://linkedin.com/in/perveznabil"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "linkedin"
  }))));
}
function Section({
  eyebrow,
  title,
  children,
  id
}) {
  const {
    Eyebrow
  } = window.NPCDesignSystem_2f0ecd;
  return /*#__PURE__*/React.createElement("section", {
    id: id,
    style: {
      maxWidth: 'var(--page-max)',
      margin: '0 auto',
      padding: '0 var(--page-pad)',
      marginBottom: 'var(--sp-32)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--sp-6)',
      marginBottom: 'var(--sp-20)'
    }
  }, eyebrow && /*#__PURE__*/React.createElement(Eyebrow, null, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-serif)',
      fontWeight: 'var(--fw-light)',
      fontSize: 'clamp(2rem,4vw,3rem)',
      lineHeight: 1.08,
      letterSpacing: 'var(--ls-display)',
      color: 'var(--text)'
    }
  }, title)), children);
}
Object.assign(window, {
  Icon,
  SiteHeader,
  SiteFooter,
  SiteShell,
  Section,
  ClosingCta
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/consulting-site/Chrome.standalone.jsx", error: String((e && e.message) || e) }); }

// ui_kits/consulting-site/HomeScreen.jsx
try { (() => {
const {
  Button,
  Eyebrow,
  DivisionCard,
  LogoWall,
  StatChip,
  Divider
} = window.NPCDesignSystem_2f0ecd;
function Hero({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--page-max)',
      margin: '0 auto',
      padding: 'var(--sp-32) var(--page-pad) var(--sp-32)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) 260px',
      gap: 'var(--grid-gap)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--sp-8)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Principal Consultant \xB7 NPC"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-serif)',
      fontWeight: 'var(--fw-light)',
      fontSize: 'var(--fs-display)',
      lineHeight: 'var(--lh-display)',
      letterSpacing: 'var(--ls-display)'
    }
  }, /*#__PURE__*/React.createElement("em", {
    className: "npc-gold-text",
    style: {
      fontStyle: 'italic'
    }
  }, "Nabil"), " Pervez"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--fs-sm)',
      letterSpacing: 'var(--ls-widest)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, "Brand Identity \xB7 Web \xB7 MarTech \xB7 AI"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: 640,
      font: 'var(--text-lead)',
      color: 'var(--text-muted)',
      borderLeft: '2px solid var(--gold)',
      paddingLeft: 'var(--sp-8)'
    }
  }, "I'm Nabil. I'm a former executive and co-founder of the award winning, multi-million dollar agency \u2014 AOE Creative. I spent years working with the world's most powerful companies to build brand identities and technology infrastructure for their projects. ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--text)',
      fontWeight: 'var(--fw-medium)'
    }
  }, "Now I'm taking my expertise to help you.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--sp-5)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: () => onNavigate('speaker')
  }, "Book Nabil"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "secondary",
    onClick: () => onNavigate('cases')
  }, "See The Work"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--sp-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 260,
      height: 320,
      borderRadius: 'var(--radius)',
      border: '1px solid var(--border)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-card)',
      background: 'var(--bg-card)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/nabil-headshot.jpg",
    alt: "Nabil Pervez",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--sp-4)'
    }
  }, /*#__PURE__*/React.createElement(StatChip, {
    value: "$5M+",
    label: "Portfolio"
  }), /*#__PURE__*/React.createElement(StatChip, {
    value: "90%",
    label: "Referral Rate"
  })))));
}
function Divisions({
  onNavigate
}) {
  const data = window.NPCSiteData.divisions;
  return /*#__PURE__*/React.createElement(Section, {
    id: "divisions",
    eyebrow: "Our Consulting Divisions",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Select a specialized area below to", /*#__PURE__*/React.createElement("br", null), "learn how we can deliver value.")
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--sp-24)'
    }
  }, Object.entries(data).map(([group, items]) => /*#__PURE__*/React.createElement("div", {
    key: group,
    style: {
      display: 'grid',
      gap: 'var(--sp-10)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--sp-6)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      font: 'var(--text-section)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--ls-widest)',
      color: 'var(--gold)',
      whiteSpace: 'nowrap'
    }
  }, group), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 1,
      background: 'var(--border)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))',
      gap: 'var(--sp-6)'
    }
  }, items.map(d => /*#__PURE__*/React.createElement(DivisionCard, {
    key: d.title,
    title: d.title,
    description: d.description,
    cta: d.cta,
    href: "#",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: d.icon,
      size: 20
    })
  })))))));
}
function HomeScreen({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Hero, {
    onNavigate: onNavigate
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--page-max)',
      margin: '0 auto',
      padding: '0 var(--page-pad)'
    }
  }, /*#__PURE__*/React.createElement(LogoWall, {
    clients: window.NPCSiteData.clients
  }), /*#__PURE__*/React.createElement(Divider, null)), /*#__PURE__*/React.createElement(Divisions, {
    onNavigate: onNavigate
  }));
}
Object.assign(window, {
  HomeScreen,
  Hero,
  Divisions
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/consulting-site/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/consulting-site/HomeScreen.standalone.jsx
try { (() => {
const {
  Button,
  Eyebrow,
  DivisionCard,
  LogoWall,
  StatChip,
  Divider
} = window.NPCDesignSystem_2f0ecd;
function Hero({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--page-max)',
      margin: '0 auto',
      padding: 'var(--sp-32) var(--page-pad) var(--sp-32)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) 260px',
      gap: 'var(--grid-gap)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--sp-8)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Principal Consultant \xB7 NPC"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-serif)',
      fontWeight: 'var(--fw-light)',
      fontSize: 'var(--fs-display)',
      lineHeight: 'var(--lh-display)',
      letterSpacing: 'var(--ls-display)'
    }
  }, /*#__PURE__*/React.createElement("em", {
    className: "npc-gold-text",
    style: {
      fontStyle: 'italic'
    }
  }, "Nabil"), " Pervez"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--fs-sm)',
      letterSpacing: 'var(--ls-widest)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, "Brand Identity \xB7 Web \xB7 MarTech \xB7 AI"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: 640,
      font: 'var(--text-lead)',
      color: 'var(--text-muted)',
      borderLeft: '2px solid var(--gold)',
      paddingLeft: 'var(--sp-8)'
    }
  }, "I'm Nabil. I'm a former executive and co-founder of the award winning, multi-million dollar agency \u2014 AOE Creative. I spent years working with the world's most powerful companies to build brand identities and technology infrastructure for their projects. ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--text)',
      fontWeight: 'var(--fw-medium)'
    }
  }, "Now I'm taking my expertise to help you.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--sp-5)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: () => onNavigate('speaker')
  }, "Book Nabil"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "secondary",
    onClick: () => onNavigate('cases')
  }, "See The Work"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--sp-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 260,
      height: 320,
      borderRadius: 'var(--radius)',
      border: '1px solid var(--border)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-card)',
      background: 'var(--bg-card)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.__resources.headshot,
    alt: "Nabil Pervez",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--sp-4)'
    }
  }, /*#__PURE__*/React.createElement(StatChip, {
    value: "$5M+",
    label: "Portfolio"
  }), /*#__PURE__*/React.createElement(StatChip, {
    value: "90%",
    label: "Referral Rate"
  })))));
}
function Divisions({
  onNavigate
}) {
  const data = window.NPCSiteData.divisions;
  return /*#__PURE__*/React.createElement(Section, {
    id: "divisions",
    eyebrow: "Our Consulting Divisions",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Select a specialized area below to", /*#__PURE__*/React.createElement("br", null), "learn how we can deliver value.")
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--sp-24)'
    }
  }, Object.entries(data).map(([group, items]) => /*#__PURE__*/React.createElement("div", {
    key: group,
    style: {
      display: 'grid',
      gap: 'var(--sp-10)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--sp-6)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      font: 'var(--text-section)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--ls-widest)',
      color: 'var(--gold)',
      whiteSpace: 'nowrap'
    }
  }, group), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 1,
      background: 'var(--border)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))',
      gap: 'var(--sp-6)'
    }
  }, items.map(d => /*#__PURE__*/React.createElement(DivisionCard, {
    key: d.title,
    title: d.title,
    description: d.description,
    cta: d.cta,
    href: "#",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: d.icon,
      size: 20
    })
  })))))));
}
function HomeScreen({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Hero, {
    onNavigate: onNavigate
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--page-max)',
      margin: '0 auto',
      padding: '0 var(--page-pad)'
    }
  }, /*#__PURE__*/React.createElement(LogoWall, {
    clients: window.NPCSiteData.clients
  }), /*#__PURE__*/React.createElement(Divider, null)), /*#__PURE__*/React.createElement(Divisions, {
    onNavigate: onNavigate
  }));
}
Object.assign(window, {
  HomeScreen,
  Hero,
  Divisions
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/consulting-site/HomeScreen.standalone.jsx", error: String((e && e.message) || e) }); }

// ui_kits/consulting-site/SpeakerScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Button,
  Eyebrow,
  TalkCard,
  LogoWall,
  StatChip,
  Divider,
  Card
} = window.NPCDesignSystem_2f0ecd;
function SpeakerHero({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--page-max)',
      margin: '0 auto',
      padding: 'var(--sp-32) var(--page-pad) var(--sp-28)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--sp-8)',
      maxWidth: 820
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Speaker Profile"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-serif)',
      fontWeight: 'var(--fw-light)',
      fontSize: 'var(--fs-display)',
      lineHeight: 'var(--lh-display)',
      letterSpacing: 'var(--ls-display)'
    }
  }, "Scaling ", /*#__PURE__*/React.createElement("em", {
    className: "npc-gold-text",
    style: {
      fontStyle: 'italic'
    }
  }, "Creativity"), /*#__PURE__*/React.createElement("br", null), "through Chaos."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--fs-sm)',
      letterSpacing: 'var(--ls-widest)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, "The intersection of Agile Systems, Entertainment Culture, and Enterprise Marketing."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: 680,
      font: 'var(--text-lead)',
      color: 'var(--text-muted)',
      borderLeft: '2px solid var(--gold)',
      paddingLeft: 'var(--sp-8)'
    }
  }, "Co-Founder & Tech-Marketer behind campaigns for Riot Games, LEGO, and Coca-Cola. Helping teams bridge the gap between creative vision and technical execution."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--sp-5)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg"
  }, "Book Nabil"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "secondary",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "download",
      size: 14
    })
  }, "Download Kit"))));
}
function TheStory() {
  return /*#__PURE__*/React.createElement(Section, {
    eyebrow: "The Story",
    title: "Creativity without process is just chaos."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) 260px',
      gap: 'var(--grid-gap)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--sp-8)',
      font: 'var(--fw-light) var(--fs-md)/var(--lh-relaxed) var(--font-sans)',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "Nabil Pervez knows this better than anyone. Starting his career in the trenches of IT Service Desk support, Nabil learned the critical importance of systems, uptime, and efficiency. But he didn't stay in the server room."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "Pivoting to the fast-paced world of digital marketing, Nabil Co-Founded AOE Creative, where he served as Lead Project Manager and CTO. There, he didn't just run campaigns; he built the engines that ran them. He managed a ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--text)',
      fontWeight: 'var(--fw-medium)'
    }
  }, "$5M+ portfolio"), " and led cross-functional teams to sell out clothing lines for Fortnite creators and drive ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--text)',
      fontWeight: 'var(--fw-medium)'
    }
  }, "45 million views"), " for Activision Blizzard."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "Over the years, Nabil has moderated, spoken, shoutcasted, and hosted hundreds of events. The largest crowd Nabil has spoken in front of was 70,000 people."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "His unique brand of optimism, charisma, and honesty has been freshing in world of buzzwords.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--sp-4)',
      position: 'sticky',
      top: 'calc(var(--nav-h) + var(--sp-12))'
    }
  }, /*#__PURE__*/React.createElement(StatChip, {
    value: "70K",
    label: "Largest Crowd"
  }), /*#__PURE__*/React.createElement(StatChip, {
    value: "100s",
    label: "Events Hosted"
  }), /*#__PURE__*/React.createElement(StatChip, {
    value: "45M",
    label: "Views Driven"
  }))));
}
function Keynotes() {
  return /*#__PURE__*/React.createElement(Section, {
    eyebrow: "Signature Talks",
    title: "Keynote Topics"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))',
      gap: 'var(--sp-6)'
    }
  }, window.NPCSiteData.talks.map(t => /*#__PURE__*/React.createElement(TalkCard, _extends({
    key: t.title
  }, t)))));
}
function SpeakerScreen({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SpeakerHero, {
    onNavigate: onNavigate
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--page-max)',
      margin: '0 auto',
      padding: '0 var(--page-pad)'
    }
  }, /*#__PURE__*/React.createElement(LogoWall, {
    clients: window.NPCSiteData.clients
  }), /*#__PURE__*/React.createElement(Divider, null)), /*#__PURE__*/React.createElement(TheStory, null), /*#__PURE__*/React.createElement(Keynotes, null));
}
Object.assign(window, {
  SpeakerScreen,
  SpeakerHero,
  TheStory,
  Keynotes
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/consulting-site/SpeakerScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/consulting-site/data.js
try { (() => {
window.NPCSiteData = {
  divisions: {
    'Organization Growth': [{
      title: 'Company Branding',
      description: 'Define your corporate identity, refine your brand voice, and build a legacy that resonates with your audience.',
      cta: 'Explore Company Branding',
      icon: 'gem'
    }, {
      title: 'Web Development',
      description: 'Premium, end-to-end web development. I design, build, host, and manage your digital presence so you can focus on your business.',
      cta: 'Explore Web Development',
      icon: 'code-2'
    }, {
      title: 'Marketing Consulting',
      description: 'Strategic marketing frameworks used by global brands like Riot Games and LEGO. We help agencies and businesses execute award-winning strategies.',
      cta: 'Explore Marketing Solutions',
      icon: 'megaphone'
    }, {
      title: 'IT Consulting',
      description: 'Architecting high-performance operational models for predictable, automated operations. Turn your ITSM from a cost center into an efficiency engine.',
      cta: 'Explore IT Consulting',
      icon: 'server'
    }],
    'Professional Growth': [{
      title: 'Personal Branding',
      description: 'Build a personal brand that opens doors. Optimize your profile, establish thought leadership, and accelerate your career.',
      cta: 'Explore Personal Branding',
      icon: 'user-round'
    }, {
      title: 'Career Consulting',
      description: 'Stop being filtered out. Build a winning narrative and personal brand that commands attention and draws opportunities to you.',
      cta: 'Explore Career Services',
      icon: 'compass'
    }]
  },
  clients: ['Coca-Cola', 'LEGO', 'Paramount Pictures', 'RedBull', 'The Kraft Group', 'Riot Games', 'Activision', 'Blizzard Entertainment', 'OniStudios', 'SypherPK', 'NACON'],
  talks: [{
    title: 'The Agile Creative',
    category: 'Strategy',
    summary: 'Creatives hate "process," but they need it to scale. How to use Scrum/Agile (typically for software) to manage design and marketing.',
    bullets: ['Run a "Creative Sprint" without killing inspiration.', 'The "Definition of Done" for ambiguous assets.', 'Case Study: Shipping 40 assets for LEGO in record time.']
  }, {
    title: 'Decoding the Gamer Generation',
    category: 'Culture',
    summary: "Gaming isn't just a hobby; it's the dominant culture of the next generation. Lessons from the frontlines of Esports.",
    bullets: ['"Authenticity" is the only currency that matters.', 'Community as a Moat: Lessons from SypherPK.', 'How to speak "Internet" without sounding like a bot.']
  }, {
    title: 'The CTO in the Marketing Department',
    category: 'Tech Ops',
    summary: "Marketing is now a technical discipline. If your marketing leader doesn't understand the tech stack, you're losing money.",
    bullets: ['Bridging the gap between IT and Marketing.', 'Using automation to reduce "grunt work" by 20%.', 'Building a "MarTech" stack that scales.']
  }, {
    title: 'Branding For A Digital Audience',
    category: 'Branding',
    summary: "Digital-first branding isn't just about a logo; it's about how you show up in the feed.",
    bullets: ['Visual Identity Systems for Social Media.', 'Voice & Tone validation.', 'Case Study: Paramount Pictures.']
  }, {
    title: 'How To Build An Engaging Creative Brief',
    category: 'Process',
    summary: 'The brief is the most important creative asset. Learn how to write one that inspires rather than restricts.',
    bullets: ['The 4 essential components of every brief.', 'Eliminating ambiguity.', 'Briefing for Gen Z campaigns.']
  }, {
    title: 'The Importance Of Understanding Your Audience',
    category: 'Insights',
    summary: "Data doesn't tell the whole story. You need to understand the subcultures and communities you are speaking to.",
    bullets: ['Moving beyond demographics.', 'Community listening strategies.', 'Case Study: Houston Outlaws.']
  }],
  cases: [{
    discipline: 'Experiential',
    client: 'Houston Outlaws',
    work: 'Directed award-winning campaign with pop-up shops.',
    result: '10M+ impressions, 10k+ attendees.'
  }, {
    discipline: 'Agency Scaling',
    client: 'AOE Creative',
    work: 'Scaled operations for a $5M portfolio.',
    result: '90% client referral rate.'
  }, {
    discipline: 'Social Media',
    client: 'Activision Blizzard',
    work: 'Built 4th most connected TikTok account from scratch.',
    result: '45M views in 4 months.'
  }, {
    discipline: 'Advertising',
    client: 'Coca-Cola',
    work: 'High-impact advertising campaign across social.',
    result: '2.2M reach at 50% industry cost.'
  }, {
    discipline: 'Merchandise',
    client: 'SypherPK',
    work: 'End-to-end brand build for apparel line.',
    result: 'Sold-out clothing line upon launch.'
  }, {
    discipline: 'Branding',
    client: 'Paramount Pictures\' "Players"',
    work: 'Branding for mockumentary.',
    result: '25% rise in trailer views.'
  }, {
    discipline: 'GTM Strategy',
    client: 'Boston Breach',
    work: 'GTM strategy for CDL team.',
    result: '#1 most engaged team in league.'
  }, {
    discipline: 'Crowdfunding',
    client: 'Immortal: Gates of Pyre',
    work: 'Kickstarter launch strategy.',
    result: "5X'd funding goal."
  }, {
    discipline: 'Content Production',
    client: 'World Series of Warzone',
    work: 'Content production for tournament.',
    result: '40% increase in social impressions.'
  }, {
    discipline: 'Interactive Web',
    client: 'Riot Games',
    work: 'Interactive Map of EMEA.',
    result: '40% boost in user interaction.'
  }, {
    discipline: 'Web Launch',
    client: 'Voyagers of Nera',
    work: 'Lore and gameplay website launch.',
    result: '30% traffic increase.'
  }, {
    discipline: 'Visual Design',
    client: 'Session Skate Sim',
    work: 'Led design teams for key art.',
    result: '30% surge in pre-order sales.'
  }, {
    discipline: 'Rebranding',
    client: 'A-KON',
    work: 'Brand identity and marketing strategy.',
    result: 'Record-high attendance.'
  }, {
    discipline: 'Web Performance',
    client: 'The Story Mob',
    work: 'Technical overhaul of digital presence.',
    result: 'Reduced load times by 75%.'
  }, {
    discipline: 'AI Automation',
    client: 'Prospera Financial Services',
    work: 'AI integration in pipelines.',
    result: 'Enhanced scalability via automation.'
  }, {
    discipline: 'IT Service Management',
    client: 'T-Mobile (ITSM)',
    work: 'Led ITSM teams.',
    result: 'Reduced ticket time from 24h to 8h.'
  }, {
    discipline: 'Security Ops',
    client: 'Fujitsu',
    work: 'Endpoint security management.',
    result: '15% reduction in security incidents.'
  }, {
    discipline: 'Vendor Management',
    client: 'MutualMind',
    work: 'Optimized support and vendor contracts.',
    result: 'Saved $50k annually.'
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/consulting-site/data.js", error: String((e && e.message) || e) }); }

// ui_kits/resume/ResumeHero.jsx
try { (() => {
const {
  Eyebrow
} = window.NPCDesignSystem_2f0ecd;

/** Renders **bold** spans as the brand's emphasis style. */
function rich(text) {
  return text.split(/\*\*(.+?)\*\*/g).map((part, i) => i % 2 ? /*#__PURE__*/React.createElement("strong", {
    key: i,
    style: {
      color: 'var(--text)',
      fontWeight: 'var(--fw-medium)'
    }
  }, part) : part);
}
function ResumeHero() {
  const d = window.NPCResume;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      marginBottom: 'var(--sp-32)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) 260px',
      columnGap: 'var(--sp-20)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: 1,
      gridRow: 1,
      alignSelf: 'end',
      marginBottom: 'var(--sp-10)',
      display: 'grid',
      gap: 'var(--sp-6)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, d.eyebrow), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-serif)',
      fontWeight: 'var(--fw-light)',
      fontSize: 'var(--fs-display)',
      lineHeight: 'var(--lh-display)',
      letterSpacing: 'var(--ls-display)'
    }
  }, /*#__PURE__*/React.createElement("em", {
    className: "npc-gold-text",
    style: {
      fontStyle: 'italic'
    }
  }, d.name[0]), " ", d.name[1]), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--fs-base)',
      letterSpacing: '2px',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, d.tagline)), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: 1,
      gridRow: 2,
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--sp-2)',
      marginBottom: 'var(--sp-12)',
      fontSize: 'var(--fs-base)',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '6px 20px'
    }
  }, /*#__PURE__*/React.createElement("span", null, d.contact.phone), /*#__PURE__*/React.createElement("span", null, d.contact.location)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '6px 20px'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: 'mailto:' + d.contact.email
  }, d.contact.email), d.links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.href,
    href: l.href,
    target: "_blank",
    rel: "noopener"
  }, l.label)))), /*#__PURE__*/React.createElement("p", {
    style: {
      gridColumn: 1,
      gridRow: 3,
      margin: 0,
      maxWidth: 720,
      font: 'var(--text-lead)',
      color: 'var(--text-muted)',
      borderLeft: '2px solid var(--gold)',
      paddingLeft: 'var(--sp-8)'
    }
  }, rich("Award-winning product manager with **10+ years experience** driving enterprise MarTech implementations across CMS, DAM, and AI-powered content platforms. Currently serving as the **AI Subject Matter Expert & Content Producer at T-Mobile**, coaching cross-functional teams on platform adoption and directly influencing Gradial's product roadmap. Previous clients include **Riot Games, Coca-Cola, LEGO, and Red Bull**. Personal portfolio of **12+ AI-Assisted Code Web Applications**.")), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: 2,
      gridRow: '1 / 4',
      alignSelf: 'center',
      width: 260,
      height: 340,
      borderRadius: 'var(--radius)',
      border: '1px solid var(--border)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-card)',
      background: 'var(--bg-card)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/nabil-headshot.jpg",
    alt: "Nabil Pervez",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  }))));
}
Object.assign(window, {
  ResumeHero,
  rich
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/resume/ResumeHero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/resume/ResumeMain.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  SectionHead,
  JobCard,
  ProjectCard,
  StatChip
} = window.NPCDesignSystem_2f0ecd;
function ExperienceList() {
  const [hovering, setHovering] = React.useState(null);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      marginBottom: 'var(--sp-28)'
    },
    id: "experience"
  }, /*#__PURE__*/React.createElement(SectionHead, null, "Experience"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'grid',
      gap: 'var(--card-gap)'
    }
  }, window.NPCResume.jobs.map((j, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    onMouseEnter: () => setHovering(i),
    onMouseLeave: () => setHovering(null),
    style: {
      opacity: hovering === null || hovering === i ? 1 : 'var(--dim-inactive)',
      transition: 'opacity var(--transition)'
    }
  }, /*#__PURE__*/React.createElement(JobCard, {
    title: j.title,
    company: j.company,
    date: j.date,
    bullets: j.bullets.map(rich)
  })))));
}
function ProjectList() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      marginBottom: 'var(--sp-28)'
    },
    id: "projects"
  }, /*#__PURE__*/React.createElement(SectionHead, null, "AI Builds & Projects"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--sp-5)'
    }
  }, window.NPCResume.projects.map(p => /*#__PURE__*/React.createElement(ProjectCard, {
    key: p.title,
    title: p.title,
    ctaLabel: p.cta,
    href: p.href,
    icon: p.cta ? /*#__PURE__*/React.createElement("i", {
      "data-lucide": "external-link",
      style: {
        width: 13,
        height: 13
      }
    }) : null
  }, p.desc))));
}
function StatsRow() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2,1fr)',
      gap: 'var(--sp-4)',
      marginBottom: 'var(--sp-16)'
    }
  }, window.NPCResume.stats.map(s => /*#__PURE__*/React.createElement(StatChip, _extends({
    key: s.label
  }, s))));
}
Object.assign(window, {
  ExperienceList,
  ProjectList,
  StatsRow
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/resume/ResumeMain.jsx", error: String((e && e.message) || e) }); }

// ui_kits/resume/ResumeSidebar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  SectionHead,
  Tag,
  MetaListItem
} = window.NPCDesignSystem_2f0ecd;
function SkillBlock() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 'var(--sp-16)'
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    rule: false
  }, "Core Skills"), window.NPCResume.skills.map(([cat, list], i) => /*#__PURE__*/React.createElement("div", {
    key: cat
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-2xs)',
      letterSpacing: 'var(--ls-wide)',
      textTransform: 'uppercase',
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--gold)',
      marginTop: i ? 'var(--sp-6)' : 0,
      marginBottom: 'var(--sp-2)'
    }
  }, cat), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-base)',
      color: 'var(--text-muted)',
      lineHeight: 1.65
    }
  }, list))));
}
function MartechBlock() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 'var(--sp-16)'
    },
    id: "martech"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    rule: false
  }, "MarTech & Platforms"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--sp-2)'
    }
  }, window.NPCResume.martech.map(([name, primary]) => /*#__PURE__*/React.createElement(Tag, {
    key: name,
    variant: primary ? 'primary' : 'default'
  }, name))));
}
function MetaBlock({
  title,
  items,
  star
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 'var(--sp-16)'
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    rule: false
  }, title), items.map((it, i) => /*#__PURE__*/React.createElement(MetaListItem, _extends({
    key: it.name
  }, it, {
    star: star,
    last: i === items.length - 1
  }))));
}
function ResumeSidebar() {
  const d = window.NPCResume;
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      position: 'sticky',
      top: 'calc(var(--nav-h) + var(--sp-12))'
    }
  }, /*#__PURE__*/React.createElement(StatsRow, null), /*#__PURE__*/React.createElement(SkillBlock, null), /*#__PURE__*/React.createElement(MartechBlock, null), /*#__PURE__*/React.createElement(MetaBlock, {
    title: "Certifications",
    items: d.certs
  }), /*#__PURE__*/React.createElement(MetaBlock, {
    title: "Awards",
    items: d.awards,
    star: true
  }), /*#__PURE__*/React.createElement(MetaBlock, {
    title: "Education",
    items: d.education
  }));
}
Object.assign(window, {
  ResumeSidebar,
  SkillBlock,
  MartechBlock,
  MetaBlock
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/resume/ResumeSidebar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/resume/resume-data.js
try { (() => {
window.NPCResume = {
  eyebrow: 'Award-Winning Product Manager',
  name: ['Nabil', 'Pervez'],
  tagline: 'MarTech & AI Implementation · Certified ScrumMaster',
  contact: {
    phone: '(214) 605-4762',
    location: 'Dallas–Fort Worth, TX',
    email: 'nabilpervezgg@gmail.com'
  },
  links: [{
    label: 'LinkedIn ↗',
    href: 'https://linkedin.com/in/perveznabil'
  }, {
    label: 'GitHub ↗',
    href: 'https://github.com/nabilpervez'
  }, {
    label: 'Behance ↗',
    href: 'https://www.behance.net/aoecreative'
  }, {
    label: 'Portfolio ↗',
    href: 'https://nabilpervez.com/products'
  }],
  stats: [{
    value: '10+',
    label: 'Years XP'
  }, {
    value: '12+',
    label: 'AI Apps'
  }, {
    value: '$5M+',
    label: 'Portfolio Managed'
  }, {
    value: '90%',
    label: 'Client Referral Rate'
  }],
  jobs: [{
    title: 'AI Implementation SME & Content Producer',
    company: 'T-Mobile · Frisco, TX',
    date: 'Aug 2025 – Present',
    bullets: ["Serve as enterprise SME for Gradial across T-Mobile's digital content org, coaching multiple lines of business on platform adoption, rule creation, and workflow integration — **directly accelerating time-to-value** for each LOB.", 'Lead implementation for the Zipline LOB: defining integration scope, configuring Gradial rules, and aligning workflows to business goals within AEM environments.', '**Architected and deployed 12+ Gradial rules** of varying complexity, streamlining content ingestion from Jira and reducing manual production effort across teams.', "**Influenced Gradial's product roadmap** as an embedded enterprise power user: proposed a real-time ticket feedback mechanism post-Jira ingestion and a Gradial chatbot for ticket description refinement.", 'Managed content publishing and QA across T-Mobile web platforms in **Adobe Experience Manager (AEM)**, ensuring brand integrity and cross-functional alignment with Legal, Analytics, SEO, and Product.']
  }, {
    title: 'Founder & Principal Consultant',
    company: 'Nabil Pervez Consulting (NPC) · Dallas, TX',
    date: 'Jan 2024 – Present',
    bullets: ['Provided fractional executive consulting on AI strategy, MarTech stack selection, branding, and digital operations for agencies and businesses.', '**Leveraged AI-assisted coding to dramatically compress branding timelines** — using LLM-assisted research, rapid prototyping, and automated asset generation to deliver brand identities at a fraction of traditional agency cost.', 'Scoped and designed system integrations in complex marketing environments; defined success criteria, validated implementations, and delivered phased activation roadmaps aligned to client KPIs.']
  }, {
    title: 'AI Implementation SME & Information Technology Specialist',
    company: 'Prospera Financial Services, Inc. · Dallas, TX',
    date: 'Oct 2024 – Aug 2025',
    bullets: ['**Implemented a RAG AI system using Microsoft Copilot**, enabling AI-assisted information retrieval across business-critical knowledge bases.', 'Led cross-functional IT initiatives covering systems, network security, and AI enhancements — **reducing security incidents by 15%**.', 'Automated new PC builds using PowerShell, Autopilot and Intune — **reducing new PC build times by 90%**.']
  }, {
    title: 'Co-Founder, CTO & Senior Product Manager',
    company: 'AOE Creative · Award-Winning Digital Agency · Dallas, TX',
    date: 'Nov 2018 – Feb 2024',
    bullets: ['Co-founded and scaled a multi-million dollar digital agency with enterprise clients including **LEGO, Red Bull, Coca-Cola, Riot Games, and Activision Blizzard**; managed a **$5M+ project portfolio**.', 'Directed end-to-end product and implementation lifecycle for SaaS, web, AR/VR, and campaign products — from scoping and roadmap definition through go-live, QA, UAT, and client adoption.', 'Led cross-functional teams of up to 30 using Agile and Waterfall; achieved **95% milestone adherence**.', 'Built executive-level client relationships; achieved a **90% client referral rate** and reduced churn by 30%.']
  }, {
    title: 'Marketing Project Manager',
    company: 'Infinite Esports & Entertainment · Dallas, TX',
    date: 'Oct 2017 – Oct 2018',
    bullets: ['Directed award-winning brand campaign generating **10M+ impressions** and events with 10K+ attendees each.']
  }, {
    title: 'Marketing Project Manager',
    company: 'PVP Live · Frisco, TX',
    date: 'Jun 2016 – Sep 2017',
    bullets: ['Scaled platform to **3M+ monthly active users** through influencer strategy and data-driven content marketing.']
  }],
  projects: [{
    title: 'Product Portfolio — 12+ AI-Assisted Code Web Applications',
    desc: 'Full suite of products built using AI-assisted development, including productivity tools, Islamic heritage apps, and interactive experiences. Hosted across ~100 GitHub repositories.',
    cta: 'View Live Portfolio',
    href: 'https://nabilpervez.com/products'
  }, {
    title: 'Serenity',
    desc: 'A comprehensive mental health toolkit featuring anxiety management strategies, guided box breathing exercises, and mood-tracking journaling.',
    cta: 'View Project',
    href: 'https://serenity-daily.netlify.app/'
  }, {
    title: 'KinKeep',
    desc: 'A privacy-focused Personal Relationship Manager that transforms a static address book into an active relationship maintenance plan, built entirely as a local-first application.',
    cta: 'View Project',
    href: 'https://kinkeepmarketing.netlify.app/'
  }, {
    title: 'Islamic Information RAG Agent',
    desc: 'Built a custom Retrieval-Augmented Generation AI agent using n8n, enabling semantic search and Q&A over Islamic knowledge bases.'
  }],
  skills: [['Delivery & Product', 'Forward Deployment · Scoping & Discovery · Go-Live Ownership · UAT/QA · Roadmap Influence · Time-to-Value Optimization · Agile / Scrum / Waterfall'], ['AI & Automation', 'Prompt Engineering · AI Assisted Coding · RAG Architecture · AI Workflow Design · LLM Implementation'], ['Stakeholder & Ops', 'Executive Communication · Cross-Functional Alignment · Enablement & Training · Requirements Elicitation · Risk Management'], ['Strategy & Marketing', 'Brand Management · Digital Strategy · Marketing Strategy · Influencer Marketing · Go-to-Market Strategy'], ['Technical', 'Python · PowerShell · React · Azure AD · Endpoint Security · Incident Response · Jira · Confluence · Microsoft Intune']],
  martech: [['Gradial', true], ['Adobe Experience Manager', true], ['AEM Assets (DAM)', false], ['WordPress', false], ['Adobe Target', false], ['Jira', false], ['Content Workflow Automation', false], ['n8n', false], ['Microsoft Copilot', false], ['Google Adwords', false], ['ChatGPT', false], ['Claude', false], ['Google Firebase Studio', false], ['Loveable', false], ['Netlify', false], ['Github', false]],
  certs: [{
    name: 'Gradial Practitioner',
    sub: 'Gradial'
  }, {
    name: 'Teaching the AI Fluency Framework',
    sub: 'Anthropic · Apr 2026',
    id: 'ID: ps32cr7cyspi'
  }, {
    name: 'AI Fluency Framework & Foundations',
    sub: 'Anthropic · Apr 2026',
    id: 'ID: 3j9fj4u42krz'
  }, {
    name: 'Adobe Experience Manager Foundations',
    sub: 'Adobe'
  }, {
    name: 'Adobe Target Foundations',
    sub: 'Adobe · Sep 2025'
  }, {
    name: 'Scrum Master Certified (SMC)',
    sub: 'SCRUMstudy'
  }, {
    name: 'Azure Fundamentals (AZ-900)',
    sub: 'Microsoft'
  }, {
    name: 'PMP® Certification Training',
    sub: 'Completed coursework'
  }],
  awards: [{
    name: 'Winner — Best Social Experience',
    sub: 'Band Together · Houston Outlaws'
  }, {
    name: 'Finalist — Esports Organization of the Year',
    sub: 'Optic Gaming / Houston Outlaws'
  }, {
    name: 'Finalist — Creative Agency of the Year (×2)',
    sub: 'AOE Creative'
  }],
  education: [{
    name: 'Full Stack Web Development',
    sub: 'NuCamp Coding Bootcamp · 2022–2023'
  }, {
    name: 'Computer Science',
    sub: 'University of Texas at Dallas · 2011–2013'
  }, {
    name: 'A.S., Computer Science',
    sub: 'Collin County Community College · 2008–2011'
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/resume/resume-data.js", error: String((e && e.message) || e) }); }

__ds_ns.LogoWall = __ds_scope.LogoWall;

__ds_ns.PatternPanel = __ds_scope.PatternPanel;

__ds_ns.Wordmark = __ds_scope.Wordmark;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.CaseStudyCard = __ds_scope.CaseStudyCard;

__ds_ns.DivisionCard = __ds_scope.DivisionCard;

__ds_ns.JobCard = __ds_scope.JobCard;

__ds_ns.MetaListItem = __ds_scope.MetaListItem;

__ds_ns.ProjectCard = __ds_scope.ProjectCard;

__ds_ns.TalkCard = __ds_scope.TalkCard;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.SectionHead = __ds_scope.SectionHead;

__ds_ns.StatChip = __ds_scope.StatChip;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Fab = __ds_scope.Fab;

__ds_ns.FabStack = __ds_scope.FabStack;

__ds_ns.NavBar = __ds_scope.NavBar;

})();
