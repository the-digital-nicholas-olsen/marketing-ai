/**
 * @startingPoint section="Components" subtitle="Square-cornered surfaces — outline, muted grey, floating" viewport="700x260"
 */
export interface CardProps {
  /** outline = white + hairline; muted = light grey #f2f2f2; floating = soft shadow (e.g. a card over a color block) */
  variant?: 'outline' | 'muted' | 'floating';
  padding?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}
export function Card(props: CardProps): JSX.Element;

export interface TagProps {
  selected?: boolean;
  onDark?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
}
/** Rectangular uppercase filter chip. */
export function Tag(props: TagProps): JSX.Element;
