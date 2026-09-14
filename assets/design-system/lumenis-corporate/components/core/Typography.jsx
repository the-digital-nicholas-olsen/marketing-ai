const HERO_L_PATH='M6.6,1097.32c122.71-26.78,149.33-91.87,171.08-166.31L388.1,213.61c33.67-111.82-12.95-149.75-98.64-164.68V6.53h441.39V48.93c-94.58,10.12-143.25,52.35-173.23,163.34l-247.86,841.04h293.49c146.1,0,234.78-135.21,234.78-302.8h57.53v389.21H6.6v-42.4Z';

export function HeroL({height='0.72em',color='currentColor',title}){
const style={display:'inline-block',height,width:'auto',verticalAlign:'baseline',marginRight:'0.02em',overflow:'visible'};
// Word joiners (U+2060) keep the glyph attached to its neighbouring letters so "YOURSE<HeroL/>F" never breaks around it.
return React.createElement('span',{style:{whiteSpace:'nowrap'}},'\u2060',
React.createElement('svg',{viewBox:'0 0 902.15 1146.25',style,role:title?'img':undefined,'aria-label':title||undefined,'aria-hidden':title?undefined:'true'},
React.createElement('path',{d:HERO_L_PATH,fill:color})),'\u2060');
}

export function Mix({children}){
return React.createElement('span',{style:{fontFamily:'var(--font-mix)',fontWeight:400}},children);
}

export function Headline({as='h1',size='l',align='left',color='var(--text-primary)',children,style={}}){
const fontSize={xl:'var(--text-display-xl)',l:'var(--text-display-l)',m:'var(--text-display-m)',s:'var(--text-display-s)'}[size];
const base={fontFamily:'var(--font-sans)',fontWeight:400,fontSize,lineHeight:'var(--leading-title)',letterSpacing:0,textTransform:'uppercase',textAlign:align,color,margin:0,...style};
return React.createElement(as,{style:base},children);
}

export function Subtitle({size='l',color='var(--text-primary)',children,style={}}){
const fontSize={l:'var(--text-subtitle-l)',m:'var(--text-subtitle-m)'}[size];
return React.createElement('p',{style:{fontFamily:'var(--font-sans)',fontSize,lineHeight:'var(--leading-subtitle)',color,margin:0,...style}},children);
}

export function Caption({color='var(--text-primary)',children,style={}}){
return React.createElement('span',{style:{fontFamily:'var(--font-sans)',fontSize:'var(--text-caption)',lineHeight:'var(--leading-caption)',textTransform:'uppercase',letterSpacing:0,color,...style}},children);
}
