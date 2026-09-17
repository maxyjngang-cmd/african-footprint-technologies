import Link from "next/link";
import PlatformExpertise from "./PlatformExpertise";
import { Brand, SiteFooter } from "./components/SiteChrome";

const services = [
  { key: "cloud", title: "Cloud Strategy\n& Migration", copy: "Plan, migrate and optimise\nfor the cloud." },
  { key: "shield", title: "Cybersecurity\n& Risk", copy: "Protect what matters.\nBuild resilience." },
  { key: "data", title: "Data & AI\nSolutions", copy: "Turn data into\nopportunity." },
  { key: "digital", title: "Digital\nTransformation", copy: "Modernise. Innovate.\nGrow." },
  { key: "gear", title: "Managed\nServices", copy: "Reliable technology.\nReal impact." },
  { key: "people", title: "Advisory\n& Enablement", copy: "Strategy, skills and support\nfor lasting change." },
];

const industries = [
  ["finance", "Financial Services"],
  ["public", "Public Sector"],
  ["telecom", "Telecommunications"],
  ["energy", "Energy & Resources"],
  ["health", "Healthcare"],
  ["retail", "Retail & Consumer"],
  ["manufacturing", "Manufacturing"],
  ["education", "Education"],
];

function ServiceIcon({ name }: { name: string }) {
  const common = { fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  if (name === "cloud") return <svg viewBox="0 0 48 48" aria-hidden="true"><path {...common} d="M12 34h24a8 8 0 0 0 .7-16A13 13 0 0 0 12 20a7 7 0 0 0 0 14Z" /></svg>;
  if (name === "shield") return <svg viewBox="0 0 48 48" aria-hidden="true"><path {...common} d="M24 5 39 11v11c0 9.5-5.8 16.7-15 21-9.2-4.3-15-11.5-15-21V11L24 5Z"/><path {...common} d="m17.5 23.5 4.2 4.2 9-9"/></svg>;
  if (name === "data") return <svg viewBox="0 0 48 48" aria-hidden="true"><ellipse {...common} cx="24" cy="10" rx="12" ry="5"/><path {...common} d="M12 10v10c0 2.8 5.4 5 12 5s12-2.2 12-5V10M12 20v10c0 2.8 5.4 5 12 5s12-2.2 12-5V20M12 30v8c0 2.8 5.4 5 12 5s12-2.2 12-5v-8"/></svg>;
  if (name === "digital") return <svg viewBox="0 0 48 48" aria-hidden="true"><circle {...common} cx="11" cy="24" r="4"/><circle {...common} cx="36" cy="10" r="4"/><circle {...common} cx="36" cy="38" r="4"/><path {...common} d="m15 22 17-10M15 26l17 10"/></svg>;
  if (name === "gear") return <svg viewBox="0 0 48 48" aria-hidden="true"><circle {...common} cx="24" cy="24" r="7"/><path {...common} d="M20 5h8l1 6a16 16 0 0 1 4 2l5-3 5 7-4 4a17 17 0 0 1 0 6l4 4-5 7-5-3a16 16 0 0 1-4 2l-1 6h-8l-1-6a16 16 0 0 1-4-2l-5 3-5-7 4-4a17 17 0 0 1 0-6l-4-4 5-7 5 3a16 16 0 0 1 4-2l1-6Z"/></svg>;
  return <svg viewBox="0 0 48 48" aria-hidden="true"><circle {...common} cx="24" cy="13" r="6"/><circle {...common} cx="10" cy="19" r="5"/><circle {...common} cx="38" cy="19" r="5"/><path {...common} d="M14 39v-5c0-6 4.5-10 10-10s10 4 10 10v5M2 39v-4c0-5 3.5-8 8-8 2 0 3.5.5 5 1.5M46 39v-4c0-5-3.5-8-8-8-2 0-3.5.5-5 1.5"/></svg>;
}

function IndustryIcon({ name }: { name: string }) {
  const common = { fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  if (name === "finance" || name === "public") return <svg viewBox="0 0 36 36" aria-hidden="true"><path {...common} d="m18 5 13 7H5l13-7ZM7 15h22M9 15v11m6-11v11m6-11v11m6-11v11M5 29h26M3 32h30"/></svg>;
  if (name === "telecom") return <svg viewBox="0 0 36 36" aria-hidden="true"><path {...common} d="M18 8v23M13 31h10M15 24h6l-3-9-3 9Z"/><path {...common} d="M11 12a9 9 0 0 0 0 12M25 12a9 9 0 0 1 0 12M7 8a14 14 0 0 0 0 20M29 8a14 14 0 0 1 0 20"/></svg>;
  if (name === "energy") return <svg viewBox="0 0 36 36" aria-hidden="true"><path {...common} d="M29 5C17 6 9 12 9 21c0 5 4 9 9 9 9 0 13-10 11-25Z"/><path {...common} d="M7 31c6-7 10-11 18-17"/></svg>;
  if (name === "health") return <svg viewBox="0 0 36 36" aria-hidden="true"><circle {...common} cx="18" cy="18" r="13"/><path {...common} d="M18 11v14M11 18h14"/></svg>;
  if (name === "retail") return <svg viewBox="0 0 36 36" aria-hidden="true"><path {...common} d="M5 8h4l3 16h14l4-11H11M14 29a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm11 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"/></svg>;
  if (name === "manufacturing") return <svg viewBox="0 0 36 36" aria-hidden="true"><path {...common} d="M5 31V17l8 4v-7l8 4V9h6v22H5Z"/><path {...common} d="M9 26h4m4 0h4m4 0h2"/></svg>;
  return <svg viewBox="0 0 36 36" aria-hidden="true"><path {...common} d="m3 13 15-7 15 7-15 7-15-7Z"/><path {...common} d="M9 17v7c5 4 13 4 18 0v-7M32 14v10"/></svg>;
}

export default function Home() {
  return <>
    <main id="top" className="homePage">
      <section className="homeHero">
        <header className="homeNav shell">
          <Brand />
          <nav aria-label="Main navigation">
            <Link className="active" href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/industries">Industries</Link>
            <a href="#insights">Insights</a>
            <Link href="/careers">Careers</Link>
            <Link href="/contact">Contact</Link>
          </nav>
          <Link className="pill dark" href="/contact">Let&apos;s Talk <span>→</span></Link>
        </header>
        <div className="heroMask" aria-hidden="true" />
        <div className="heroDecor" aria-hidden="true">
          <div className="heroScript">Same Continent.<br/><b>Greater Possibilities.</b></div>
          <svg className="heroNetwork" viewBox="0 0 760 220" preserveAspectRatio="none">
            <g fill="none" stroke="rgba(239,184,70,.75)" strokeWidth="1">
              <path d="M20 180 Q190 18 360 170"/>
              <path d="M90 200 Q300 34 540 175"/>
              <path d="M170 190 Q360 20 720 188"/>
              <path d="M340 185 Q510 72 735 150"/>
            </g>
            <g fill="#f4b73c">
              <circle cx="90" cy="170" r="3"/><circle cx="220" cy="130" r="3"/><circle cx="360" cy="170" r="3"/><circle cx="470" cy="120" r="3"/><circle cx="590" cy="156" r="3"/><circle cx="710" cy="188" r="3"/>
            </g>
          </svg>
          <div className="heroLocation"><span>●</span> CAPE TOWN, SOUTH AFRICA<br/><small>OUR HOME. A BRIGHTER AFRICA.</small></div>
        </div>
        <div className="shell homeHeroInner">
          <div className="homeHeroCopy">
            <p className="eyebrow">PEOPLE. TECHNOLOGY. OPPORTUNITY. ACROSS AFRICA.</p>
            <h1>Building Africa&apos;s<br/>Digital Tomorrow.</h1>
            <h2>Cloud. Technology. Transformation. Across Africa.</h2>
            <p>We help organisations build, secure and scale their technology footprint across Africa — harnessing the power of cloud and innovative technologies to create a more connected, inclusive and prosperous continent.</p>
            <div className="actions">
              <Link className="pill green" href="/services">Explore Our Services <span>→</span></Link>
              <Link className="pill outline" href="/about">About Us</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="serviceStrip shell" aria-label="Core services">
        {services.map((s) => <article key={s.key}>
          <ServiceIcon name={s.key}/>
          <h3>{s.title.split("\n").map((line, i) => <span key={i}>{line}</span>)}</h3>
          <p>{s.copy.split("\n").map((line, i) => <span key={i}>{line}</span>)}</p>
        </article>)}
      </section>

      <PlatformExpertise />

      <section className="purpose" id="about">
        <div className="shell purposeGrid">
          <div className="purposeCopy">
            <p className="eyebrow mint">OUR PURPOSE</p>
            <h2>A more connected, inclusive and prosperous Africa is within reach.</h2>
            <p>African Footprint Technologies is a technology consulting and solutions partner, enabling businesses and governments to unlock Africa&apos;s potential through cloud, data, security and digital innovation.</p>
            <Link className="pill green smallPill" href="/about">Our Story <span>→</span></Link>
          </div>
          <div className="purposeMap" role="img" aria-label="Illuminated connected network map of Africa">
            <img src="/africa-network-approved.webp" alt="" />
          </div>
          <aside className="purposeStats">
            <div><strong>54</strong><span>AFRICAN COUNTRIES</span></div>
            <div><strong>1</strong><span>BOLDER TOMORROW</span></div>
            <div><strong>∞</strong><span>OPPORTUNITIES</span></div>
            <hr/>
            <p>TECHNOLOGY<br/>THAT LEAVES A<br/>POSITIVE FOOTPRINT.</p>
          </aside>
        </div>
      </section>

      <section className="industry homeIndustry" id="industries">
        <div className="shell industryIntro">
          <div>
            <p className="eyebrow">INDUSTRIES WE SERVE</p>
            <h2>Real Solutions for Real African Impact.</h2>
          </div>
          <div className="industryLead">
            <p>We work with forward-thinking organisations across the continent to solve complex challenges and create lasting value.</p>
            <Link href="/industries">Explore Industries <span>→</span></Link>
          </div>
        </div>
        <div className="shell industryRow">
          {industries.map(([icon, label]) => <div key={label}>
            <IndustryIcon name={icon}/>
            <span>{label}</span>
          </div>)}
        </div>
      </section>

      <section className="belowFold" id="insights">
        <div className="shell">
          <p className="eyebrow">INSIGHTS</p>
          <h2>Ideas. Perspectives. Progress.</h2>
          <p>Explore our thinking on cloud, technology and Africa&apos;s digital future.</p>
        </div>
      </section>
    </main>
    <SiteFooter />
  </>;
}
