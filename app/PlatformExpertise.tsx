const platforms = [
  { name: "Salesforce", focus: "CRM & Customer Experience", url: "https://www.salesforce.com/" },
  { name: "Zoho CRM", focus: "CRM & Business Operations", url: "https://www.zoho.com/crm/" },
  { name: "ServiceNow", focus: "Enterprise Service Management", url: "https://www.servicenow.com/" },
  { name: "SignNow", focus: "Digital Signature Workflows", url: "https://www.signnow.com/" },
  { name: "DocuSign", focus: "Agreements & eSignature", url: "https://www.docusign.com/" },
  { name: "NetSuite", focus: "Cloud ERP & Business Systems", url: "https://www.netsuite.com/" },
  { name: "AWS", focus: "Cloud Infrastructure & Services", url: "https://aws.amazon.com/" },
];

export default function PlatformExpertise() {
  return (
    <section className="platforms" id="platforms">
      <div className="shell">
        <div className="platformIntro">
          <div>
            <p className="eyebrow">OUR PRIMARY TECHNOLOGY PLATFORMS</p>
            <h2>Global platforms.<br/><em>African expertise.</em></h2>
          </div>
          <div>
            <p>We provide consulting, implementation, integration, optimisation and ongoing enablement across leading cloud and enterprise technology platforms.</p>
            <p className="platformNote">Platform names and trademarks belong to their respective owners. Inclusion here describes our consulting focus and does not imply an official vendor partnership or certification unless explicitly stated.</p>
          </div>
        </div>
        <div className="platformGrid">
          {platforms.map((platform) => (
            <a key={platform.name} className="platformCard" href={platform.url} target="_blank" rel="noreferrer">
              <span className="platformWordmark">{platform.name}</span>
              <small>{platform.focus}</small>
              <span className="platformArrow">↗</span>
            </a>
          ))}
        </div>
        <div className="platformServices">
          <span>Strategy & Roadmaps</span><span>Implementation</span><span>Integration</span><span>Migration</span><span>Optimisation</span><span>Managed Support</span>
        </div>
      </div>
    </section>
  );
}
