export function Tabs({items=[],value,onChange,onDark=false}){
const active=onDark?'var(--lumenis-white)':'var(--text-primary)';
const idle=onDark?'var(--neutral-500)':'var(--neutral-400)';
return React.createElement('div',{role:'tablist',style:{display:'flex',gap:'var(--space-5)',fontFamily:'var(--font-sans)',flexWrap:'wrap'}},
items.map(it=>{
const sel=it===value;
return React.createElement('button',{key:it,role:'tab','aria-selected':sel,onClick:()=>onChange&&onChange(it),style:{background:'none',border:'none',padding:'6px 0',cursor:'pointer',fontFamily:'var(--font-sans)',fontSize:'var(--text-body)',color:sel?active:idle,borderBottom:'1px solid '+(sel?active:'transparent'),transition:'color var(--duration-base) var(--ease-standard)'}},it);
}));
}

export function NavBar({links=[],onDark=false,cta,logoWidth='132px'}){
const fg=onDark?'var(--lumenis-white)':'var(--text-primary)';
return React.createElement('header',{style:{display:'flex',alignItems:'center',justifyContent:'space-between',gap:'var(--space-6)',padding:'var(--space-5) var(--space-7)',fontFamily:'var(--font-sans)',color:fg}},
React.createElement(Logo,{tone:onDark?'white':'black',width:logoWidth}),
React.createElement('nav',{style:{display:'flex',alignItems:'center',gap:'var(--space-5)',flexWrap:'wrap'}},
links.map(l=>React.createElement('a',{key:l,href:'#',style:{color:fg,textDecoration:'none',fontSize:'var(--text-body)'}},l)),
cta));
}
