const { Caption, Icon, Card } = window.LumenisCorporateDesignSystem;

function Testimonial(){
  return (
    <section style={{background:'var(--accent)',position:'relative',overflow:'hidden'}}>
      <div style={{position:'absolute',left:'-6%',top:'-20%',color:'var(--lumenis-black)',opacity:.9}} aria-hidden="true">
        <Icon name="rings" size="760px" scale="large"/>
      </div>
      <div className="lc-wrap lc-stack-sm" style={{position:'relative',display:'grid',gridTemplateColumns:'1fr 1fr',gap:48,padding:'96px 48px',alignItems:'center'}}>
        <div/>
        <Card variant="floating" padding="48px">
          <Caption style={{color:'var(--text-secondary)'}}>Sample testimonial</Caption>
          <p style={{fontSize:28,lineHeight:1.15,marginTop:18}}>“Placeholder customer quote — replace with an approved statement from a named practice before publishing.”</p>
          <p style={{fontSize:16,marginTop:24,color:'var(--text-secondary)'}}>— Name, Practice, City</p>
        </Card>
      </div>
    </section>
  );
}
window.Testimonial = Testimonial;
