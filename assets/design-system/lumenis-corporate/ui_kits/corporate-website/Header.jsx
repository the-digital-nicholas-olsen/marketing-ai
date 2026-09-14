const { Logo, Button } = window.LumenisCorporateDesignSystem;

function Header(){
  const links=['About','Products','Treatments','Science','Contact us'];
  return (
    <header className="lc-header">
      <div className="lc-wrap" style={{display:'flex',alignItems:'center',justifyContent:'space-between',height:84}}>
        <a href="#" aria-label="Lumenis home"><Logo width="136px"/></a>
        <nav style={{display:'flex',alignItems:'center',gap:28}}>
          {links.map(l=><a key={l} href="#" className="lc-link lc-hide-sm" style={{fontSize:16}}>{l}</a>)}
          <Button size="s" variant="outline">Eng</Button>
        </nav>
      </div>
    </header>
  );
}
window.Header = Header;
