/**
 * @startingPoint section="Components" subtitle="Text tabs and site navigation bar with the wordmark" viewport="900x180"
 */
export interface TabsProps {
  items?: string[];
  value?: string;
  onChange?: (value: string) => void;
  onDark?: boolean;
}
/** Quiet text tabs — active item black with a 1px rule, others grey (e.g. News · Events · Insights). */
export function Tabs(props: TabsProps): JSX.Element;

export interface NavBarProps {
  links?: string[];
  onDark?: boolean;
  /** optional trailing element, e.g. <Button size="s">Contact us</Button> */
  cta?: React.ReactNode;
  logoWidth?: string;
}
/** Site header: wordmark left, sentence-case links right. */
export function NavBar(props: NavBarProps): JSX.Element;
