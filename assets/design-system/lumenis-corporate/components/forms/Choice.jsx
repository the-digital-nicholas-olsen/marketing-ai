function ChoiceRow({control,label,disabled}){
return React.createElement('label',{style:{display:'inline-flex',alignItems:'center',gap:'10px',fontFamily:'var(--font-sans)',fontSize:'var(--text-body)',color:'var(--text-primary)',cursor:disabled?'not-allowed':'pointer',opacity:disabled?0.4:1}},control,label);
}

export function Checkbox({label,checked=false,onChange,disabled=false}){
const box=React.createElement('span',{onClick:()=>!disabled&&onChange&&onChange(!checked),style:{width:'18px',height:'18px',border:'1px solid var(--lumenis-black)',background:checked?'var(--lumenis-black)':'var(--lumenis-white)',display:'inline-flex',alignItems:'center',justifyContent:'center',flexShrink:0}},
checked&&React.createElement('svg',{width:12,height:12,viewBox:'0 0 12 12'},React.createElement('path',{d:'M2 6.2l2.6 2.6L10 3.4',fill:'none',stroke:'var(--lumenis-white)',strokeWidth:1.2})));
return React.createElement(ChoiceRow,{control:box,label,disabled});
}

export function Radio({label,checked=false,onChange,disabled=false}){
const dot=React.createElement('span',{onClick:()=>!disabled&&onChange&&onChange(true),style:{width:'18px',height:'18px',borderRadius:'50%',border:'1px solid var(--lumenis-black)',display:'inline-flex',alignItems:'center',justifyContent:'center',flexShrink:0}},
checked&&React.createElement('span',{style:{width:'8px',height:'8px',borderRadius:'50%',background:'var(--lumenis-black)'}}));
return React.createElement(ChoiceRow,{control:dot,label,disabled});
}
