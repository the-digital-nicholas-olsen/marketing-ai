export function Card({variant='outline',padding='var(--space-6)',children,style={}}){
const variants={
outline:{background:'var(--surface-card)',border:'1px solid var(--border-subtle)'},
muted:{background:'var(--surface-muted)',border:'1px solid transparent'},
floating:{background:'var(--surface-card)',border:'1px solid transparent',boxShadow:'var(--shadow-soft)'}
};
return React.createElement('div',{style:{borderRadius:'var(--radius-none)',padding,...variants[variant],...style}},children);
}

export function Tag({selected=false,onDark=false,children,onClick}){
const fg=onDark?'var(--lumenis-white)':'var(--text-primary)';
const selBg=onDark?'var(--lumenis-white)':'var(--lumenis-black)';
const selFg=onDark?'var(--lumenis-black)':'var(--lumenis-white)';
const style={display:'inline-flex',alignItems:'center',padding:'7px 14px',borderRadius:'var(--radius-none)',fontFamily:'var(--font-sans)',fontSize:'14px',lineHeight:1,textTransform:'uppercase',letterSpacing:0,cursor:onClick?'pointer':'default',border:'1px solid '+(selected?selBg:(onDark?'var(--neutral-500)':'var(--border-default)')),background:selected?selBg:'transparent',color:selected?selFg:fg,transition:'all var(--duration-base) var(--ease-standard)'};
return React.createElement('span',{style,onClick},children);
}
