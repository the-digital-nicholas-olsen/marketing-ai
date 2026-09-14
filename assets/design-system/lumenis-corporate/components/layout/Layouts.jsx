export function SplitLayout({direction='horizontal',tone='light-grey',media,mediaFirst=false,ratio=0.5,year,children,style={}}){
const grounds={'white':'var(--lumenis-white)','light-grey':'var(--lumenis-light-grey)','black':'var(--lumenis-black)','accent':'var(--accent)'};
const fg=tone==='black'?'var(--lumenis-white)':(tone==='accent'?'var(--accent-contrast)':'var(--lumenis-black)');
const isH=direction==='horizontal';
const textPane=React.createElement('div',{key:'t',style:{flex:ratio,background:grounds[tone],color:fg,display:'flex',flexDirection:'column',justifyContent:'space-between',padding:'var(--space-6)',minWidth:0,minHeight:0}},
React.createElement('div',null,children),
React.createElement('div',{style:{display:'flex',justifyContent:'space-between',alignItems:'flex-end',gap:'var(--space-4)',marginTop:'var(--space-6)'}},
React.createElement(Logo,{tone:tone==='black'?'white':'black',width:'96px'}),
year&&React.createElement('span',{style:{fontFamily:'var(--font-sans)',fontSize:'var(--text-caption)'}},'©'+year)));
const mediaPane=React.createElement('div',{key:'m',style:{flex:1-ratio,minWidth:0,minHeight:0,overflow:'hidden',background:'var(--lumenis-light-grey)'}},media);
return React.createElement('div',{style:{display:'flex',flexDirection:isH?'row':'column',width:'100%',height:'100%',...style}},mediaFirst?[mediaPane,textPane]:[textPane,mediaPane]);
}

export function SocialPost({tone='light-grey',showGrid=false,logo='wordmark',logoCorner='bottom-left',size=1080,scale=0.5,children,background}){
const grounds={'white':'var(--lumenis-white)','light-grey':'var(--lumenis-light-grey)','black':'var(--lumenis-black)','accent':'var(--accent)'};
const fg=tone==='black'?'var(--lumenis-white)':(tone==='accent'?'var(--accent-contrast)':'var(--lumenis-black)');
const m=56,cell=(size-2*m)/6;
const corner={'top-left':{top:m,left:m},'top-right':{top:m,right:m},'bottom-left':{bottom:m,left:m},'bottom-right':{bottom:m,right:m}}[logoCorner];
const grid=showGrid&&React.createElement('div',{style:{position:'absolute',inset:m,display:'grid',gridTemplateColumns:'repeat(6,1fr)',gridTemplateRows:'repeat(6,1fr)',pointerEvents:'none'}},
Array.from({length:36}).map((_,i)=>React.createElement('div',{key:i,style:{border:'0.5px solid rgba(128,128,128,.35)'}})));
const mark=logo==='none'?null:React.createElement('div',{style:{position:'absolute',...corner}},
logo==='hero-l'?React.createElement(Logo,{variant:'hero-l',tone:tone==='black'?'white':'black',height:cell+'px'}):React.createElement(Logo,{tone:tone==='black'?'white':'black',width:(cell*2)+'px'}));
return React.createElement('div',{style:{width:size*scale,height:size*scale,overflow:'hidden',flexShrink:0}},
React.createElement('div',{style:{position:'relative',width:size,height:size,transform:'scale('+scale+')',transformOrigin:'0 0',background:grounds[tone],color:fg,fontFamily:'var(--font-sans)'}},
background,grid,
React.createElement('div',{style:{position:'absolute',inset:m}},children),
mark));
}
