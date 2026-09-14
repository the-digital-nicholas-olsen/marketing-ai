/**
 * @startingPoint section="Components" subtitle="Rectangular all-caps CTA — primary, inverse, outline, accent, text" viewport="700x220"
 */
export interface ButtonProps {
  /** primary = black CTA (default); inverse = white CTA on black grounds; outline; accent = sub-brand color (only in sub-brand context); text = underlined link */
  variant?: 'primary' | 'inverse' | 'outline' | 'accent' | 'text';
  size?: 's' | 'm' | 'l';
  disabled?: boolean;
  fullWidth?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit';
  /** renders an <a> when set */
  href?: string;
}
export function Button(props: ButtonProps): JSX.Element;
