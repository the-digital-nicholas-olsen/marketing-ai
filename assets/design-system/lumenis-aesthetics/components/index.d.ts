// Lumenis Aesthetics — component props (documentation; window.LumenisAesthetics, React 18).
import type { ReactNode, CSSProperties } from 'react';

export type Pairing = 'mint' | 'sky' | 'lavender' | 'rose-gold' | 'silken-rose';
export type ProductId = 'trilift' | 'stellar-m22' | 'splendor-x' | 'folix' | 'ultrapulse-alpha';
export type Gap = 'tight' | 'near' | 'follow' | 'apart' | 'section' | 'wide';
export interface Chapter { name: string; pairing: Pairing }
export interface StatItem { value: string; label: string }

export interface TextProps { role?: 'label' | 'body' | 'lead' | 'number' | 'display' | 'hero' | 'chapter' | 'title' | 'tracker' | 'foot'; tone?: 'ink' | 'grey' | 'field' | 'field-ink' | 'on-field' | 'inverse'; as?: string; className?: string; style?: CSSProperties; children?: ReactNode }
export interface StackProps { gap?: Gap; direction?: 'column' | 'row'; className?: string; style?: CSSProperties; children?: ReactNode }
export interface StatProps { value: string; label: string; size?: 'number' | 'hero'; tone?: TextProps['tone'] }
export interface PillProps { kind?: 'field' | 'tint'; size?: 'small' | 'large'; children?: ReactNode }
export interface ClosingLineProps { loop?: boolean; children?: ReactNode }
export interface TrackerProps { chapters: Chapter[]; current: number; pills?: string[]; pillCurrent?: number }
export interface FooterProps { source?: ReactNode; page?: ReactNode; logoWidth?: number }
export interface PointListProps { items: { head: string; text: string; n?: string }[] }
export interface LogoProps { tone?: 'black' | 'white'; mark?: 'wordmark' | 'hero-l'; width?: number }
export interface ProductLogoProps { product: ProductId; variant?: string; height?: number; alt?: string }
export interface IconProps { name: 'burst' | 'cross' | 'crossover' | 'lines' | 'orbit' | 'rings' | 'sparkle' | 'star' | 'wave' | 'zigzag'; size?: number; color?: string; label?: string }
export interface BandProps { height?: number }
export interface PhotoProps { src?: string; alt?: string; position?: string }

export interface SlideProps { scale?: number; pairing?: Pairing; product?: ProductId; children?: ReactNode }
export interface SlideColumnProps { side?: 'left' | 'right'; title?: ReactNode; centered?: boolean; gap?: Gap; children?: ReactNode }
export interface SlideBleedProps { side?: 'left' | 'right'; width?: 'minor' | 'major'; block?: boolean; pairing?: Pairing; children?: ReactNode }
interface SlidePhoto { photo?: string; photoAlt?: string; photoPosition?: string; scale?: number }
interface SlideFrame { chapters?: Chapter[]; current?: number; navPills?: string[]; navCurrent?: number; source?: ReactNode; page?: ReactNode; closing?: ReactNode; loop?: boolean }
export interface SlideOpeningProps extends SlidePhoto { pairing?: Pairing; label: string; promise: string; date: string; band?: boolean }
export interface SlideChapterProps extends SlidePhoto, SlideFrame { number: string; title: string; question: string }
export interface SlideContentProps extends SlidePhoto, SlideFrame { title: string; lead?: string; points?: PointListProps['items']; photoSide?: 'left' | 'right'; children?: ReactNode }
export interface SlideHeroNumberProps extends SlidePhoto, SlideFrame { title: string; figure: string; figureTone?: TextProps['tone']; lead: string; stats?: StatItem[]; photoSide?: 'left' | 'right' }
export interface SlideProfileProps extends SlidePhoto, SlideFrame { label: string; name: string; quote: string; stats?: StatItem[]; photoSide?: 'left' | 'right' }
export interface SlideProductProps extends SlidePhoto, SlideFrame { product: ProductId; logoVariant?: string; promise: string; lead: string; pills?: string[] }
export interface SlideClosingProps extends SlidePhoto { pairing?: Pairing; line: string; lead: string }

// Lists, cards and dividers
export type BulletItem = string | { head?: string; text?: string };
export interface BulletListProps { items: BulletItem[]; marker?: '✦' | 'dot' | string; size?: 'body' | 'lead'; className?: string }
export interface CardProps { kind?: 'outline' | 'fill' | 'secondary' | 'soft'; label?: string; title?: ReactNode; text?: ReactNode; className?: string; style?: CSSProperties; children?: ReactNode }
export interface DividerProps { vertical?: boolean; className?: string; style?: CSSProperties }

// More slide types. Each takes the frame (tracker, closing line, footer) and `product` or the chapter pairing.
interface SlideList { points?: PointListProps['items']; bullets?: BulletItem[]; marker?: BulletListProps['marker']; children?: ReactNode }
export interface SlideTextProps extends SlideFrame, SlideList { scale?: number; product?: ProductId; title?: string; lead?: string; columns?: 1 | 2 }
export interface SlideMediaProps extends SlidePhoto, SlideFrame, SlideList { product?: ProductId; title: string; lead?: string; photoSide?: 'left' | 'right'; photoFit?: 'cover' | 'contain'; caption?: ReactNode }
export interface GalleryImage { src?: string; alt?: string; label?: string; caption?: ReactNode; position?: string; fit?: 'cover' | 'contain' }
export interface SlideGalleryProps extends SlideFrame { scale?: number; product?: ProductId; title?: string; lead?: string; images: GalleryImage[] }
export interface SlideCardsProps extends SlideFrame { scale?: number; product?: ProductId; title?: string; lead?: string; columns?: 2 | 3 | 4; cards: { kind?: CardProps['kind']; label?: string; title: string; text?: string }[] }
export interface SlideBlankProps extends SlideFrame { scale?: number; product?: ProductId; title?: string; children?: ReactNode }

// Web pages (web.md). Each Web* component renders the plain aes-w-* markup from bundle.css.
export type Ground = page | soft | muted | accent;
export interface WebLink { label: string; href: string }
export interface WebAction { label: string; href: string; kind?: ButtonProps[kind] }
interface WebPhoto { photo?: string; photoAlt?: string; photoPosition?: string }
interface WebColor { pairing?: Pairing; product?: ProductId }
export interface ButtonProps { kind?: field | ink | outline | text; size?: small | medium; href?: string; type?: button | submit; onClick?: () => void; className?: string; children?: ReactNode }
export interface WebPageProps extends WebColor { className?: string; style?: CSSProperties; children?: ReactNode }
export interface WebHeaderProps { links?: WebLink[]; cta?: WebAction; home?: string; extra?: ReactNode }
export interface WebHeroProps extends WebPhoto, WebColor { logoVariant?: string; logoHeight?: number; label?: string; title: ReactNode; intro?: ReactNode; meta?: string[]; actions?: WebAction[]; icon?: IconProps[name] }
export interface WebSectionHeadProps { title?: ReactNode; titleId?: string; lead?: ReactNode; intro?: ReactNode }
export interface WebSectionProps extends WebSectionHeadProps, WebColor { id?: string; ground?: Ground; className?: string; children?: ReactNode }
export interface WebSplitProps extends WebSectionProps, WebPhoto { productImage?: string; productAlt?: string }
export interface WebCardsProps { items: { title: ReactNode; text?: ReactNode; image?: string; alt?: string }[] }
export interface WebAgendaProps { id?: string; label?: string; days: { label: string; date: string; sessions: { time: string; tag?: string; title: ReactNode; subtitle?: string; text?: ReactNode }[] }[] }
export interface WebPeopleProps { people: { name: string; credentials?: string; text?: ReactNode; photo?: string }[] }
export interface WebRowsProps { items: { when: string; title: ReactNode; text?: ReactNode }[] }
export interface WebFactsProps { items: { label: string; value: ReactNode }[] }
export interface WebClosingProps extends WebPhoto, WebColor { id?: string; title: ReactNode; facts?: WebFactsProps[items]; intro?: ReactNode; actions?: WebAction[]; icon?: IconProps[name] }
export interface WebFooterProps { links?: WebLink[]; legal?: ReactNode; note?: ReactNode; band?: boolean }
