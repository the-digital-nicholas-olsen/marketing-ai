export function Button({variant='primary',size='m',disabled=false,fullWidth=false,children,onClick,type='button',href}){
const fontSize={s:'14px',m:'var(--text-button)',l:'22px'}[size];
const pad={s:'10px 18px',m:'14px 28px',l:'18px 36px'}[size];
const base={fontFamily:'var(--font-sans)',fontWeight:400,fontSize,lineHeight:'var(--leading-button)',letterSpacing:0,textTransform:'uppercase',padding:pad,borderRadius:'var(--radius-none)',border:'1px solid transparent',cursor:disabled?'not-allowed':'pointer',opacity:disabled?0.4:1,display:fullWidth?'flex':'inline-flex',width:fullWidth?'100%':'auto',alignItems:'center',justifyContent:'center',gap:'10px',whiteSpace:'nowrap',textDecoration:'none',transition:'background var(--duration-base) var(--ease-standard),color var(--duration-base) var(--ease-standard),border-color var(--duration-base) var(--ease-standard)'};
const variants={
primary:{background:'var(--cta-bg)',color:'var(--cta-fg)'},
inverse:{background:'var(--lumenis-white)',color:'var(--lumenis-black)'},
outline:{background:'transparent',color:'var(--text-primary)',borderColor:'var(--border-strong)'},
accent:{background:'var(--accent)',color:'var(--accent-contrast)'},
text:{background:'transparent',color:'var(--text-primary)',padding:'4px 0',borderBottom:'1px solid currentColor'}
};
const style={...base,...variants[variant]};
return React.createElement(href?'a':'button',href?{href,style,onClick}:{type,disabled,onClick,style},children);
}
