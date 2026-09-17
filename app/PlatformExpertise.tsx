import Link from "next/link";

const platforms = [
  {name:"Salesforce",slug:"salesforce",href:"/platforms/salesforce",logo:"https://www.salesforce.com/news/wp-content/uploads/sites/3/2021/05/Salesforce-logo.jpg?w=1024"},
  {name:"Zoho CRM",slug:"zoho",href:"/platforms/zoho-crm",logo:"/platform-zoho-crm.svg"},
  {name:"ServiceNow",slug:"servicenow",href:"/platforms/servicenow",logo:"https://www.servicenow.com/content/dam/now-www/en-us/images/global-nav/logo/servicenow-header-logo.svg"},
  {name:"airSlate SignNow",slug:"signnow",href:"/platforms/signnow",logo:"/platform-signnow.svg"},
  {name:"Docusign",slug:"docusign",href:"/platforms/docusign",logo:"/platform-docusign.svg"},
  {name:"Oracle NetSuite",slug:"netsuite",href:"/platforms/netsuite",logo:"/platform-netsuite.svg"},
  {name:"AWS",slug:"aws",href:"/platforms/aws",logo:"/platform-aws.svg"},
];

export default function PlatformExpertise(){
  return <section className="platforms" id="platforms">
    <div className="shell platformStrip">
      <div className="platformStripCopy">
        <p className="eyebrow">OUR PRIMARY TECHNOLOGY PLATFORMS</p>
        <h2>Global technology. African expertise.</h2>
        <p>We provide consulting services to help African organisations select, implement, integrate and optimise the world&apos;s leading platforms.</p>
      </div>
      <div className="platformLogoStrip" aria-label="Primary technology platforms">
        {platforms.map((platform)=><Link className={`platformLogoItem platform-${platform.slug}`} href={platform.href} key={platform.name} aria-label={`${platform.name} consulting`}><img src={platform.logo} alt={platform.name}/></Link>)}
      </div>
      <p className="srOnly">Platform names and trademarks belong to their respective owners. Inclusion describes AFT&apos;s consulting focus and does not imply official partnership or certification unless explicitly stated.</p>
    </div>
  </section>;
}
