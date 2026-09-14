const fieldBase=(error)=>({fontFamily:'var(--font-sans)',fontSize:'var(--text-body)',lineHeight:'var(--leading-form)',color:'var(--text-primary)',background:'var(--lumenis-white)',border:'1px solid '+(error?'var(--error)':'var(--border-default)'),borderRadius:'var(--radius-none)',padding:'12px 14px',width:'100%',boxSizing:'border-box',outline:'none'});

function Field({label,hint,error,id,children}){
return React.createElement('label',{htmlFor:id,style:{display:'flex',flexDirection:'column',gap:'8px',fontFamily:'var(--font-sans)'}},
label&&React.createElement('span',{style:{fontSize:'var(--text-body)',color:'var(--text-primary)'}},label),
children,
(error||hint)&&React.createElement('span',{style:{fontSize:'13px',color:error?'var(--error)':'var(--text-secondary)'}},error||hint));
}

export function Input({label,placeholder,value,onChange,type='text',hint,error,id,variant='outline'}){
const style=variant==='underline'?{...fieldBase(error),border:'none',borderBottom:'1px solid '+(error?'var(--error)':'var(--border-default)'),padding:'10px 0',background:'transparent'}:fieldBase(error);
return React.createElement(Field,{label,hint,error,id},
React.createElement('input',{id,type,placeholder,value,onChange:e=>onChange&&onChange(e.target.value),style}));
}

export function Textarea({label,placeholder,value,onChange,rows=4,hint,error,id}){
return React.createElement(Field,{label,hint,error,id},
React.createElement('textarea',{id,rows,placeholder,value,onChange:e=>onChange&&onChange(e.target.value),style:{...fieldBase(error),resize:'vertical'}}));
}

export function Select({label,options=[],value,onChange,placeholder,hint,error,id}){
const caret="url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' fill='none' stroke='%23000' stroke-width='1'/%3E%3C/svg%3E\")";
return React.createElement(Field,{label,hint,error,id},
React.createElement('select',{id,value,onChange:e=>onChange&&onChange(e.target.value),style:{...fieldBase(error),appearance:'none',WebkitAppearance:'none',paddingRight:'40px',backgroundImage:caret,backgroundRepeat:'no-repeat',backgroundPosition:'right 14px center'}},
placeholder&&React.createElement('option',{value:''},placeholder),
options.map(o=>typeof o==='string'?React.createElement('option',{key:o,value:o},o):React.createElement('option',{key:o.value,value:o.value},o.label))));
}
