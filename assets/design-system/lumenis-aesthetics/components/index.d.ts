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
export interface PillProps { kind?: 'field' | 'tint' | 'winning' | 'watch' | 'warning'; size?: 'small' | 'large'; children?: ReactNode }
export interface ClosingLineProps { loop?: boolean; children?: ReactNode }
export interface TrackerProps { chapters: Chapter[]; current: number; pills?: string[]; pillCurrent?: number }
export interface FooterProps { source?: ReactNode; page?: ReactNode; logoWidth?: number }
export interface PointListProps { items: { head: string; text: string; n?: string }[] }
export interface LogoProps { tone?: 'black' | 'white'; mark?: 'wordmark' | 'hero-l'; width?: number }
export interface ProductLogoProps { product: ProductId; variant?: string; height?: number; alt?: string }
export interface IconProps { name: 'burst' | 'cross' | 'crossover' | 'lines' | 'orbit' | 'rings' | 'sparkle' | 'star' | 'wave' | 'zigzag'; size?: number; color?: string; label?: string }
export interface BandProps { height?: number }
export interface PhotoProps { src?: string; alt?: string; position?: string }

export interface SlideProps { scale?: number; pairing?: Pairing; theme?: ProductId; children?: ReactNode }
export interface SlideColumnProps { side?: 'left' | 'right'; title?: ReactNode; centered?: boolean; gap?: Gap; children?: ReactNode }
export interface SlideBleedProps { side?: 'left' | 'right'; width?: 'minor' | 'major'; block?: boolean; children?: ReactNode }
interface SlidePhoto { photo?: string; photoAlt?: string; photoPosition?: string; scale?: number }
interface SlideFrame { chapters?: Chapter[]; current?: number; navPills?: string[]; navCurrent?: number; source?: ReactNode; page?: ReactNode; closing?: ReactNode; loop?: boolean }
export interface SlideOpeningProps extends SlidePhoto { label: string; promise: string; date: string; band?: boolean }
export interface SlideChapterProps extends SlidePhoto, SlideFrame { number: string; title: string; question: string }
export interface SlideContentProps extends SlidePhoto, SlideFrame { title: string; lead?: string; points?: PointListProps['items']; photoSide?: 'left' | 'right'; children?: ReactNode }
export interface SlideHeroNumberProps extends SlidePhoto, SlideFrame { title: string; figure: string; figureTone?: TextProps['tone']; lead: string; stats?: StatItem[]; photoSide?: 'left' | 'right' }
export interface SlideProfileProps extends SlidePhoto, SlideFrame { label: string; name: string; quote: string; stats?: StatItem[]; photoSide?: 'left' | 'right' }
export interface SlideProductProps extends SlidePhoto, SlideFrame { product: ProductId; logoVariant?: string; promise: string; lead: string; pills?: string[] }
export interface SlideClosingProps extends SlidePhoto { line: string; lead: string }
