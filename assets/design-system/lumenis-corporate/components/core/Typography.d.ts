/**
 * @startingPoint section="Components" subtitle="Uppercase titles with the Hero L or an Arizona Mix highlight" viewport="700x260"
 */
export interface HeadlineProps {
  as?: 'h1' | 'h2' | 'h3' | 'div';
  /** xl 120px · l 80px (reference) · m 56px · s 40px */
  size?: 'xl' | 'l' | 'm' | 's';
  /** left or right only — never combine both in one layout; center only for a short stand-alone headline */
  align?: 'left' | 'right' | 'center';
  color?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}
export function Headline(props: HeadlineProps): JSX.Element;

export interface HeroLProps {
  /** defaults to cap height of the surrounding text */
  height?: string;
  color?: string;
  title?: string;
}
/** The slanted serif "L" from the wordmark. Replaces the letter L in 1–2 words of a headline (Option A). */
export function HeroL(props: HeroLProps): JSX.Element;

/** Arizona Mix serif highlight for 1–2 words inside an uppercase headline (Option B). Never combine with HeroL. */
export function Mix(props: { children?: React.ReactNode }): JSX.Element;

export function Subtitle(props: { size?: 'l' | 'm'; color?: string; style?: React.CSSProperties; children?: React.ReactNode }): JSX.Element;

/** Captions and specs — Arizona Sans Regular, all caps, 14px. */
export function Caption(props: { color?: string; style?: React.CSSProperties; children?: React.ReactNode }): JSX.Element;
