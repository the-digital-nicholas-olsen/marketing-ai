const { Headline, HeroL, Subtitle, Button, Icon } = window.LumenisCorporateDesignSystem;

function Hero(){
  const phrases=[['Discover','burst'],['a new you.','sparkle'],['Discover','crossover'],['your inner world.','star']];
  const run=[...phrases,...phrases,...phrases,...phrases];
  return (
    <section style={{background:'var(--lumenis-light-grey)'}}>
      <div className="lc-wrap lc-stack-sm" style={{display:'grid',gridTemplateColumns:'1.05fr 1fr',gap:48,alignItems:'stretch',minHeight:620}}>
        <div style={{display:'flex',flexDirection:'column',justifyContent:'center',padding:'64px 0'}}>
          <Headline size="l" style={{fontSize:'clamp(48px,6.4vw,92px)'}}><HeroL/>eading technologies for your body.</Headline>
          <Subtitle style={{marginTop:28,maxWidth:520}}>Lumenis develops life-changing, minimally invasive energy-based solutions for the Aesthetic and Vision markets.</Subtitle>
          <div style={{marginTop:56,display:'flex',gap:16,flexWrap:'wrap'}}>
            <Button>Discover more</Button>
            <Button variant="outline">Find a provider</Button>
          </div>
        </div>
        <div style={{position:'relative',overflow:'hidden',minHeight:420}}>
          <img src="https://information.lumenis.com/hubfs/US%20-%20VIS%20-%20Image%20Catalogue%20-%202026/lumenis-device-controls-001-1280w.webp" alt="A clinician adjusts the touchscreen controls of a white Lumenis device." style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover'}}/>
        </div>
      </div>
      <div className="lc-marquee" aria-hidden="true">
        <div className="lc-marquee__track">
          {run.map(([w,ic],i)=><React.Fragment key={i}><span>{w}</span><Icon name={ic} size="34px"/></React.Fragment>)}
        </div>
      </div>
    </section>
  );
}
window.Hero = Hero;
