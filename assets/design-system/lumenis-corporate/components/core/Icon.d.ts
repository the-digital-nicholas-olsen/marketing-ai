/**
 * @startingPoint section="Components" subtitle="The 10 brand line illustrations — 1pt small, 2pt large" viewport="700x200"
 */
export type IconName = 'crossover' | 'burst' | 'zigzag' | 'wave' | 'sparkle' | 'rings' | 'star' | 'cross' | 'lines' | 'orbit';
export interface IconProps {
  name: IconName;
  /** CSS size, square */
  size?: string;
  /** small = 1px stroke next to type; large = 2px stroke as an enlarged graphic */
  scale?: 'small' | 'large';
  color?: string;
  title?: string;
}
export function Icon(props: IconProps): JSX.Element;
export const ICON_NAMES: IconName[];
