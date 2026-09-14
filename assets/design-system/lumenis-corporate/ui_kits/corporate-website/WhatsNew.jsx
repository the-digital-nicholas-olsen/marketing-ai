const { Headline, Tabs, Caption } = window.LumenisCorporateDesignSystem;

const POSTS = {
  News: [
    { kicker: 'News', title: 'Inside the Lumenis booth', img: 'lumenis-tradeshow-booth-001-1280w.webp', alt: 'Wide view of a Lumenis booth at a trade show.' },
    { kicker: 'News', title: 'Hands-on with our aesthetic platforms', img: 'lumenis-treatment-demo-001-1280w.webp', alt: 'A provider demonstrates a facial treatment with a handheld device at a trade show.' },
    { kicker: 'News', title: 'Designing technology around the clinician', img: 'lumenis-device-controls-001-1280w.webp', alt: 'A clinician adjusts the touchscreen controls of a white Lumenis device.' },
  ],
  Events: [
    { kicker: 'Events', title: 'Accelerate by Lumenis', img: 'lumenis-accelerate-event-stage-003-1280w.webp', alt: 'Accelerate by Lumenis stage with a presentation screen and seating.' },
    { kicker: 'Events', title: 'Panel conversations with practice leaders', img: 'lumenis-accelerate-ny-panel-001-1280w.webp', alt: 'A speaker gestures during an Accelerate by Lumenis New York panel.' },
    { kicker: 'Events', title: 'Meet us in your city', img: 'lumenis-city-skyline-001-1280w.webp', alt: 'A city skyline under a pale sky.' },
  ],
  Insights: [
    { kicker: 'Insights', title: 'Building a dry eye service line', img: 'lumenis-eye-exam-001-1280w.webp', alt: 'A clinician performs an eye examination with a slit lamp.' },
    { kicker: 'Insights', title: 'Bite-size tips for using skin tech', img: 'lumenis-facial-treatment-closeup-001-1280w.webp', alt: 'A clinician uses a handheld treatment device on a participant wearing eye shields.' },
    { kicker: 'Insights', title: 'Choosing the right platform for your practice', img: 'lumenis-device-studio-001-1280w.webp', alt: 'A white Lumenis aesthetic device with handpieces in a clinical setting.' },
  ],
};

function WhatsNew(){
  const [tab,setTab]=React.useState('Insights');
  return (
    <section className="lc-section">
      <div className="lc-wrap">
        <Headline as="h2" size="m">What's new</Headline>
        <div style={{margin:'20px 0 36px'}}><Tabs items={Object.keys(POSTS)} value={tab} onChange={setTab}/></div>
        <div className="lc-grid-3">
          {POSTS[tab].map(p=>(
            <a key={p.title} href="#" className="lc-link" style={{display:'flex',flexDirection:'column',gap:14}}>
              <div style={{aspectRatio:'16/10',overflow:'hidden',background:'var(--lumenis-light-grey)'}}>
                <img src={'https://information.lumenis.com/hubfs/US%20-%20VIS%20-%20Image%20Catalogue%20-%202026/'+p.img} alt={p.alt} style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}}/>
              </div>
              <Caption>{p.kicker}</Caption>
              <span style={{fontSize:22,lineHeight:1.15}}>{p.title}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
window.WhatsNew = WhatsNew;
