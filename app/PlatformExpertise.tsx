import Link from "next/link";

const platforms = [
  {name:"Salesforce",href:"/platforms/salesforce",logo:"/platform-salesforce.svg"},
  {name:"Zoho CRM",href:"/platforms/zoho-crm",logo:"/platform-zoho-crm.svg"},
  {name:"ServiceNow",href:"/platforms/servicenow",logo:"/platform-servicenow.svg"},
  {name:"airSlate SignNow",href:"/platforms/signnow",logo:"/platform-signnow.svg"},
  {name:"Docusign",href:"/platforms/docusign",logo:"/platform-docusign.svg"},
  {name:"Oracle NetSuite",href:"/platforms/netsuite",logo:"/platform-netsuite.svg"},
  {name:"AWS",href:"/platforms/aws",logo:"/platform-aws.svg"},
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
        {platforms.map((platform)=><Link className="platformLogoItem" href={platform.href} key={platform.name} aria-label={`${platform.name} consulting`}><img src={platform.logo} alt={platform.name}/></Link>)}
      </div>
      <p className="srOnly">Platform names and trademarks belong to their respective owners. Inclusion describes AFT&apos;s consulting focus and does not imply official partnership or certification unless explicitly stated.</p>
    </div>
  </section>;
}
