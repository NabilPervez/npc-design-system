import * as React from 'react';

/**
 * The NPC identity marks, all built from supplied artwork — nothing is redrawn.
 *
 * Lockups
 * - `lockup` (default) — the brand-card master: N glyph above "NABIL PERVEZ CONSULTING" in
 *   letterspaced Outfit.
 * - `horizontal` / `horizontal-npc` — mark or monogram, hairline rule, two-line name. For
 *   headers, email signatures and any wide, short slot.
 * - `type` — live type in the wordmark face. "CONSULTING" is measured at runtime and
 *   letterspaced to span exactly the width of "NABIL PERVEZ", so it sits justified between
 *   the N and the Z. Re-measures on resize and after webfonts load.
 *
 * Marks
 * - `mark` — the N glyph alone. `npc` — the serif NPC monogram.
 * - `wordmark` — the "NABIL PERVEZ" display-serif artwork.
 *
 * Containers (for avatars, favicons, app icons, stamps)
 * - `badge` / `badge-npc` — circular, hairline gold ring.
 * - `chip` / `chip-npc` — solid champagne square, 10px radius, ink art. The inverse lockup.
 * - `tile` — the pattern's diamond motif as a frame around the mark.
 *
 * **Picking a tone:** `gold` (#AB9563 champagne) is the master and works on both grounds.
 * On dark grounds `gold-bright` reads livelier; on light grounds `gold-deep` is the one
 * that passes AA. `paper`/`white` are knockouts for dark or photographic grounds, and
 * `ink` is for anything sitting on a gold fill.
 */
export interface WordmarkProps {
  /** @default "lockup" */
  variant?: 'lockup' | 'horizontal' | 'horizontal-npc' | 'type' | 'mark' | 'npc' | 'wordmark'
    | 'badge' | 'badge-npc' | 'chip' | 'chip-npc' | 'tile';
  /** Glyph box / cap height / container size in px; everything else scales from it. @default 64 */
  size?: number;
  /** `type` variant only. @default "center" */
  align?: 'center' | 'left';
  /** Which tinted artwork to load. @default "gold" */
  tone?: 'gold' | 'gold-bright' | 'gold-deep' | 'paper' | 'white' | 'ink';
  /**
   * Container fill for badge / chip / tile. `auto` follows the page theme (ink in dark
   * mode, paper in light) — the right default. `gold` is the inverse treatment and forces
   * the art to ink. Ignored by the lockup and artwork-only variants.
   * @default "auto"
   */
  ground?: 'auto' | 'ink' | 'paper' | 'gold' | 'none';
  /** Lockup line and alt text. @default "Nabil Pervez Consulting" */
  label?: string;
  /** The justified second line on the `type` variant; pass "" to drop it. @default "Consulting" */
  subline?: string;
  /** Path to assets/ relative to the rendering file. @default "../../assets/" */
  assetBase?: string;
  /** Override the type colour; defaults follow `tone`. */
  color?: string;
  style?: React.CSSProperties;
}
export function Wordmark(props: WordmarkProps): JSX.Element;
