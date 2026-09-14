/**
 * @startingPoint section="Components" subtitle="LUMENIS wordmark and Hero L symbol, black or white" viewport="700x200"
 */
export interface LogoProps {
  /** wordmark = full LUMENIS logotype; hero-l = the standalone serif L signature */
  variant?: 'wordmark' | 'hero-l';
  /** black on light grounds, white on dark grounds or photography. Never any other color. */
  tone?: 'black' | 'white';
  /** CSS width; the wordmark is never smaller than 50px wide on screen (1.5cm in print) */
  width?: string;
  height?: string;
}
export function Logo(props: LogoProps): JSX.Element;
