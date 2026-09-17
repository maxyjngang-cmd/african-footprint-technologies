const services = [
  ["☁", "Cloud Strategy & Migration", "Plan, migrate and optimise for the cloud."],
  ["◇", "Cybersecurity & Risk", "Protect what matters. Build resilience."],
  ["▤", "Data & AI Solutions", "Turn data into opportunity."],
  ["⌘", "Digital Transformation", "Modernise. Innovate. Grow."],
  ["⚙", "Managed Services", "Reliable technology. Real impact."],
  ["◎", "Advisory & Enablement", "Strategy, skills and support for lasting change."],
];

const industries = ["Financial Services", "Public Sector", "Telecommunications", "Energy & Resources", "Healthcare", "Retail & Consumer", "Manufacturing", "Education"];

function Logo() {
  return (
    <a className="brand" href="#top" aria-label="African Footprint Technologies home">
      <span className="brandMark" aria-hidden="true"><span className="africa">◒</span><span className="cloud">☁</span></span>
      <span className="brandText"><b>African<br/>Footprint</b><span>Technologies</span><small>CLOUDING A BRIGHTER AFRICA</small></span>
    </a>
  );
}

export default function Home() {
  return <main id="top">
    <header className="nav shell">
      <Logo />
      <nav aria-label="Main navigation">
        <a href="#top">Home</a><a href="#about">About</a><a href="#services">Services</a><a href="#industries">Industries</a><a href="#insights">Insights</a><a href="#contact">Contact</a>
      </nav>
      <a className="pill dark" href="#contact">Let&apos;s Talk <span>→</span></a>
    </header>

    <section className="hero">
      <div className="heroGlow one"/><div className="heroGlow two"/>
      <div className="shell heroInner">
        <div className="heroCopy">
          <p className="eyebrow">PEOPLE. TECHNOLOGY. OPPORTUNITY. ACROSS AFRICA.</p>
          <h1>Building Africa&apos;s<br/>Digital <em>Tomorrow.</em></h1>
          <h2>Cloud. Technology. Transformation. Across Africa.</h2>
          <p>We help organisations build, secure and scale their technology footprint across Africa — harnessing the power of cloud and innovative technologies to create a more connected, inclusive and prosperous continent.</p>
          <div className="actions"><a className="pill green" href="#services">Explore Our Services →</a><a className="pill outline" href="#about">About Us</a></div>
        </div>
        <div className="heroArt" aria-label="Stylised African digital network">
          <div className="sun"/><div className="mountain m1"/><div className="mountain m2"/>
          <div className="network"><i/><i/><i/><i/><i/><i/><i/><i/></div>
          <div className="script">Same Continent.<br/><b>Greater Possibilities.</b></div>
          <div className="location">◆ CAPE TOWN, SOUTH AFRICA<br/><small>OUR HOME. A BRIGHTER AFRICA.</small></div>
        </div>
      </div>
    </section>

    <section className="services shell" id="services">
      {services.map(([icon,title,desc]) => <article key={title}><div className="serviceIcon">{icon}</div><h3>{title}</h3><p>{desc}</p></article>)}
    </section>

    <section className="purpose" id="about"><div className="shell purposeGrid">
      <div><p className="eyebrow mint">OUR PURPOSE</p><h2>A more connected,<br/>inclusive and prosperous<br/>Africa is <em>within reach.</em></h2><p>African Footprint Technologies is a technology consulting and solutions partner, enabling businesses and governments to unlock Africa&apos;s potential through cloud, data, security and digital innovation.</p><a className="pill green" href="#contact">Our Story →</a></div>
      <div className="africaMap" aria-label="Abstract connected Africa graphic"><span>AFRICA</span>{[1,2,3,4,5,6,7,8,9,10,11].map(n=><i key={n}/>)}</div>
      <aside><strong>54</strong><span>AFRICAN COUNTRIES</span><strong>1</strong><span>BOLDER TOMORROW</span><strong>∞</strong><span>OPPORTUNITIES</span><hr/><p>TECHNOLOGY<br/>THAT LEAVES A<br/>POSITIVE FOOTPRINT.</p></aside>
    </div></section>

    <section className="industry shell" id="industries">
      <div className="sectionIntro"><div><p className="eyebrow">INDUSTRIES WE SERVE</p><h2>Real Solutions for<br/>Real African Impact.</h2></div><div><p>We work with forward-thinking organisations across the continent to solve complex challenges and create lasting value.</p><a href="#contact">Explore Industries →</a></div></div>
      <div className="industryRow">{industries.map((x,i)=><div key={x}><b>{["▰","▥","⌁","◈","✚","▽","▥","◇"][i]}</b><span>{x}</span></div>)}</div>
    </section>

    <section className="insights" id="insights"><div className="shell insightGrid">
      <div className="quote"><span>Technology<br/>for a stronger,<br/>more inclusive<br/>Africa.</span><small>CLOUDING A BRIGHTER AFRICA</small></div>
      <div><p className="eyebrow mint">INSIGHTS</p><h2>Ideas. Perspectives.<br/>Progress.</h2><p>Explore our thinking on cloud, technology and Africa&apos;s digital future.</p><a className="pill gold" href="#contact">View Insights →</a></div>
      <article className="article"><div className="articleVisual">AFT</div><h3>From Cloud to Opportunity: Accelerating Africa&apos;s Digital Future</h3><small>INSIGHTS · AFRICAN FOOTPRINT TECHNOLOGIES</small></article>
    </div></section>

    <section className="cta shell"><p className="eyebrow">READY TO BUILD WHAT&apos;S NEXT?</p><h2>Let&apos;s create a stronger digital footprint across Africa.</h2><a className="pill green" href="mailto:hello@africanfootprint.tech">Start a conversation →</a></section>

    <footer id="contact"><div className="shell footerGrid"><Logo/><div><b>Quick Links</b><a href="#about">About</a><a href="#services">Services</a><a href="#industries">Industries</a><a href="#insights">Insights</a></div><div><b>Services</b><span>Cloud Strategy & Migration</span><span>Cybersecurity & Risk</span><span>Data & AI Solutions</span><span>Digital Transformation</span></div><div><b>Contact</b><span>Cape Town, South Africa</span><a href="mailto:hello@africanfootprint.tech">hello@africanfootprint.tech</a><small>Contact details are placeholders until confirmed.</small></div></div><div className="shell legal">© 2026 African Footprint Technologies (Pty) Ltd. <span>Same Continent. Greater Possibilities.</span></div></footer>
  </main>;
}
