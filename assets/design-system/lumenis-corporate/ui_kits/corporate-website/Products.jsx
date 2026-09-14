const { Headline, Tabs, Caption, Button } = window.LumenisCorporateDesignSystem;

const PRODUCTS = {
  Aesthetics: [
    { name: 'Stellar M22', copy: 'A modular multi-application platform for different indications, skin types, ages and genders.', img: 'lumenis-device-studio-001-1280w.webp', alt: 'A white Lumenis aesthetic device with handpieces in a clinical setting.' },
    { name: 'triLift', copy: 'Three technologies in one device for a natural, lift-like facial effect.', img: 'lumenis-facial-treatment-closeup-001-1280w.webp', alt: 'A clinician uses a handheld treatment device on a participant wearing eye shields.' },
    { name: 'LegendPro', copy: 'A skin treatment platform with RF-assisted ultra-thin electrodes and TriPollar® RF.', img: 'lumenis-device-closeup-001-1280w.webp', alt: 'Close-up of a white aesthetic device with a touchscreen.' },
  ],
  Vision: [
    { name: 'OptiLIGHT', copy: 'Intense pulsed light for dry eye management, built on Optimal Pulse Technology (OPT™).', img: 'lumenis-eye-exam-001-1280w.webp', alt: 'A clinician performs an eye examination with a slit lamp.' },
    { name: 'OptiPLUS', copy: 'Dual-frequency RF technology that integrates seamlessly into your workflow.', img: 'lumenis-treatment-demo-001-1280w.webp', alt: 'A provider demonstrates a facial treatment with a handheld device at a trade show.' },
    { name: 'Digital Duet', copy: 'The first digital dual-path SLT-YAG laser platform, with integrated imaging.', img: 'lumenis-device-controls-001-1280w.webp', alt: 'A clinician adjusts the touchscreen controls of a white Lumenis device.' },
  ],
};

function Products(){
  const [tab,setTab]=React.useState('Aesthetics');
  return (
    <section className="lc-section">
      <div className="lc-wrap">
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-end',gap:24,flexWrap:'wrap',marginBottom:40}}>
          <div>
            <Caption style={{color:'var(--text-secondary)'}}>Our products</Caption>
            <Headline as="h2" size="m" style={{marginTop:12}}>Elevating patient care</Headline>
          </div>
          <Tabs items={Object.keys(PRODUCTS)} value={tab} onChange={setTab}/>
        </div>
        <div className="lc-grid-3">
          {PRODUCTS[tab].map(p=>(
            <article key={p.name} className="lc-product">
              <div className="lc-product__img"><img src={'https://information.lumenis.com/hubfs/US%20-%20VIS%20-%20Image%20Catalogue%20-%202026/'+p.img} alt={p.alt}/></div>
              <div style={{padding:24,display:'flex',flexDirection:'column',gap:12,flex:1}}>
                <h3 style={{fontSize:28,lineHeight:1.12}}>{p.name}</h3>
                <p style={{fontSize:18,lineHeight:1.3,color:'var(--text-secondary)',flex:1}}>{p.copy}</p>
                <div><Button variant="text" size="s">Learn more</Button></div>
              </div>
            </article>
          ))}
        </div>
        <div style={{marginTop:56,display:'flex',justifyContent:'center'}}><Button>View all products</Button></div>
      </div>
    </section>
  );
}
window.Products = Products;
