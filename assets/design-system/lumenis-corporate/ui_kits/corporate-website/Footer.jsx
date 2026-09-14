const { Logo, Button } = window.LumenisCorporateDesignSystem;

function Footer(){
  const [email,setEmail]=React.useState('');
  const [sent,setSent]=React.useState(false);
  const cols=[['Company',['About','Find a provider','Careers','Contact us']],['Aesthetics',['Products','Treatments']],['Vision',['Products','Treatments']]];
  const field={fontFamily:'var(--font-sans)',fontSize:16,background:'transparent',color:'var(--lumenis-white)',border:'1px solid var(--neutral-600)',borderRight:'none',padding:'12px 14px',flex:1,minWidth:0,outline:'none'};
  return (
    <footer style={{background:'var(--lumenis-black)',color:'var(--lumenis-white)'}}>
      <div className="lc-wrap lc-stack-sm" style={{display:'grid',gridTemplateColumns:'1.2fr 1fr 1fr 1fr',gap:40,padding:'80px 48px 48px'}}>
        <div>
          <p style={{fontSize:22,lineHeight:1.15,maxWidth:320}}>Science with us — reads for your inbox.</p>
          {sent ? <p style={{marginTop:20,color:'var(--neutral-300)'}}>Thanks — you're on the list.</p> : (
            <form onSubmit={e=>{e.preventDefault(); if(email.includes('@')) setSent(true);}} style={{display:'flex',marginTop:20,maxWidth:380}}>
              <input aria-label="Email" type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} style={field}/>
              <Button type="submit" variant="inverse" size="s">Sign up</Button>
            </form>
          )}
          <p style={{fontSize:12,color:'var(--neutral-500)',marginTop:10}}>By signing up, you consent to receive Lumenis emails.</p>
        </div>
        {cols.map(([h,ls])=>(
          <div key={h}>
            <div style={{fontSize:14,textTransform:'uppercase',marginBottom:16}}>{h}</div>
            {ls.map(l=><a key={l} href="#" className="lc-link" style={{display:'block',color:'var(--neutral-300)',fontSize:16,lineHeight:1.9}}>{l}</a>)}
          </div>
        ))}
      </div>
      <div className="lc-wrap" style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:24,padding:'24px 48px 40px',borderTop:'1px solid var(--neutral-700)',flexWrap:'wrap'}}>
        <Logo tone="white" width="120px"/>
        <span style={{fontSize:13,color:'var(--neutral-500)'}}>©2026 Lumenis. Legal footer links: copy them from the approved Lumenis landing page.</span>
      </div>
    </footer>
  );
}
window.Footer = Footer;
