/**
 * @startingPoint section="Components" subtitle="Split-layout communication format and 1080px social post grid" viewport="900x460"
 */
export interface SplitLayoutProps {
  /** horizontal = side by side, vertical = stacked */
  direction?: 'horizontal' | 'vertical';
  /** ground of the text pane: white, light grey, black, or the single sub-brand accent */
  tone?: 'white' | 'light-grey' | 'black' | 'accent';
  /** image (or any node) for the media pane — should fill it (object-fit: cover) */
  media?: React.ReactNode;
  mediaFirst?: boolean;
  /** share of the text pane, 0–1 */
  ratio?: number;
  /** renders ©YEAR at the bottom-right of the text pane, opposite the wordmark */
  year?: string | number;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}
/** The basic Lumenis communication format: space split in two, type block + image, wordmark and © at the foot. */
export function SplitLayout(props: SplitLayoutProps): JSX.Element;

export interface SocialPostProps {
  tone?: 'white' | 'light-grey' | 'black' | 'accent';
  /** overlay the 6×6 construction grid */
  showGrid?: boolean;
  /** wordmark = 2 columns wide; hero-l = 1 row tall; none */
  logo?: 'wordmark' | 'hero-l' | 'none';
  logoCorner?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  /** artboard size in px (brand spec 1080) */
  size?: number;
  /** display scale of the artboard */
  scale?: number;
  /** full-bleed node behind content (e.g. a photo) */
  background?: React.ReactNode;
  children?: React.ReactNode;
}
/** 1080×1080 social artboard on the brand 6×6 grid with 56px margins. */
export function SocialPost(props: SocialPostProps): JSX.Element;
