import { Link } from 'react-router-dom';
import { ArrowLink, CTASection, Eyebrow, Icon, SectionHeading } from '../components/PageElements';

const imageBase = '/images/app';

const problems = [
  ['01', 'Manual reconciliation', 'Disconnected records and spreadsheet totals slow the daily close and make revenue gaps harder to explain.'],
  ['02', 'Delayed operational visibility', 'Supervisors often see missed presence checks and collection issues too late for effective field action.'],
  ['03', 'Fragmented field workflows', 'Merchant verification, presence and collections are difficult to coordinate across teams and operating areas.'],
  ['04', 'Unresolved payment recovery', 'Failed payments and outstanding amounts can remain disconnected from the operational follow-up needed to resolve them.'],
  ['05', 'Limited management reporting', 'Council leaders lack a timely, trusted view of operational performance, revenue outcomes and accountable action.'],
];

const steps = [
  ['01', 'Prepare onboarding workbook'], ['02', 'Register areas, places and merchants'],
  ['03', 'Assign merchants to places'], ['04', 'Print merchant QR cards'],
  ['05', 'Agents scan QR codes daily'], ['06', 'Supervisors review revenue gaps'],
];

const features = [
  ['qr', 'QR-Based Merchant Verification', 'Create a consistent daily verification point for every assigned merchant.'],
  ['presence', 'Presence Tracking', 'See expected, present and absent merchants by business date.'],
  ['collection', 'Collection Workflow', 'Guide field agents from daily collection through supervisor review.'],
  ['recovery', 'Payment Recovery Monitoring', 'Surface failed automatic payments that need manual intervention.'],
  ['alert', 'Alerts Management', 'Turn missing confirmations into clear, actionable operational alerts.'],
  ['chart', 'Revenue Reconciliation', 'Compare expected, collected and outstanding revenue with context.'],
  ['metric', 'Operational Business Reporting', 'Turn daily operational data into clear management dashboards and executive-ready reporting.'],
  ['audit', 'Audit Trail', 'Maintain traceability across the actions that shape daily revenue outcomes.'],
];

const outcomes = [
  ['chart', 'Faster daily reconciliation', 'Bring expected, collected and outstanding revenue into one clear operational view.'],
  ['presence', 'Improved operational visibility', 'Give supervisors timely insight into field activity, presence and open issues.'],
  ['recovery', 'Better payment recovery', 'Keep failed payments and outstanding recovery amounts visible until resolved.'],
  ['audit', 'Complete audit trail', 'Maintain traceability across the actions shaping daily revenue outcomes.'],
  ['metric', 'Operational business reporting', 'Turn daily activity into management dashboards and executive-ready reporting.'],
  ['workflow', 'Pilot-ready implementation', 'Start with a controlled operating scope, structured onboarding and measurable outcomes.'],
];

function MarketingImage({ src, alt, eager = false }) {
  return <img src={`${imageBase}/${src}`} alt={alt} width="1536" height="1024" loading={eager ? 'eager' : 'lazy'} fetchPriority={eager ? 'high' : 'auto'} decoding="async" />;
}

export default function Home() {
  return (
    <>
      <section className="hero section-pad">
        <div className="hero-grid container">
          <div className="hero-copy">
            <Eyebrow>Modern Civic-Tech SaaS</Eyebrow>
            <h1>Modern revenue operations for councils</h1>
            <p className="hero-lead">Kahyrah gives councils one connected platform for merchant verification, presence, collections and payment recovery—linking field operations with reconciliation, business reporting and complete audit traceability.</p>
            <div className="hero-actions">
              <Link className="button button-primary button-large" to="/contact">Request a Pilot</Link>
              <Link className="button button-secondary button-large" to="/product">Explore Council Revenue Platform</Link>
            </div>
            <div className="trust-line"><span>✓</span> Built for council market operations, field agents and revenue supervisors.</div>
          </div>
          <div className="home-hero-product"><MarketingImage src="hero.webp.png" alt="Kahyrah Council Revenue Platform across operational dashboard, collection workflow and mobile scanning views" eager /></div>
        </div>
      </section>

      <section className="credibility-strip"><div className="container credibility-inner"><span>Purpose-built for</span><b>Local authorities</b><i /><b>Market operations</b><i /><b>Revenue teams</b><i /><b>Public-sector partners</b></div></section>

      <section className="section-pad problems-section">
        <div className="container">
          <SectionHeading eyebrow="The operational challenge" title="Replace fragmented processes with operational control" copy="Manual records and disconnected workflows make it difficult to see what is happening in the field, resolve revenue gaps and close each operating day with confidence." />
          <div className="problems-grid">{problems.map(([number, title, copy]) => <article className="problem-card" key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
        </div>
      </section>

      <section className="section-pad product-intro-section">
        <div className="container product-intro-grid">
          <div className="product-intro-copy">
            <Eyebrow>Our flagship product</Eyebrow><h2>Introducing Council Revenue Platform</h2>
            <p className="large-copy">Council Revenue Platform is Kahyrah’s pilot-ready platform for managing the complete daily revenue operation.</p>
            <p>It connects merchant onboarding and verification with presence, collections, payment recovery, alerts, reconciliation, reporting and audit oversight.</p>
            <ArrowLink to="/product">View the product</ArrowLink>
            <div className="product-proof"><div><b>One workflow</b><span>From onboarding to reconciliation</span></div><div><b>Field ready</b><span>Designed around daily council operations</span></div></div>
          </div>
          <div className="home-intro-visual"><MarketingImage src="platform-overview-gallery.webp.png" alt="Gallery of Kahyrah dashboard, collection, merchant, mobile scanning, reconciliation and audit views" /></div>
        </div>
      </section>

      <section className="section-pad product-evidence-section"><div className="container">
        <SectionHeading eyebrow="Product evidence" title="See the platform in action" copy="Real operational views across council oversight, field activity, collections and revenue reconciliation." />
        <div className="product-evidence-grid">
          <article className="product-evidence-card product-evidence-featured">
            <div className="evidence-image"><MarketingImage src="hero.webp.png" alt="Kahyrah operational dashboard, collection workflow and mobile scanning platform showcase" /></div>
            <div className="evidence-caption"><div><h3>Council revenue operations in one view</h3><p>Bring dashboard oversight, collection activity, reconciliation and mobile field workflows together.</p></div><Link className="arrow-link" to="/product">Explore the Product <span>→</span></Link></div>
          </article>
          <article className="product-evidence-card">
            <div className="evidence-image"><MarketingImage src="platform-overview-gallery.webp.png" alt="Nine connected Kahyrah product modules for council revenue operations" /></div>
            <div className="evidence-caption"><div><h3>Nine connected product modules</h3><p>See the operational platform spanning merchants, collections, reconciliation and audit.</p></div><Link className="arrow-link" to="/product">Explore the Product <span>→</span></Link></div>
          </article>
          <article className="product-evidence-card">
            <div className="evidence-image"><MarketingImage src="multi-device section.webp.png" alt="Kahyrah wallets, presence and QR assignment workflows across desktop and mobile devices" /></div>
            <div className="evidence-caption"><div><h3>Field operations across devices</h3><p>Connect wallet activity, merchant presence and QR verification across desktop and mobile.</p></div><Link className="arrow-link" to="/product">Explore the Product <span>→</span></Link></div>
          </article>
        </div>
      </div></section>

      <section className="section-pad workflow-section"><div className="container">
        <SectionHeading eyebrow="How it works" title="From council onboarding to daily revenue reconciliation" align="center" />
        <div className="steps-grid">{steps.map(([number, title], index) => <article className="step-card" key={number}><span>{number}</span><h3>{title}</h3>{index < steps.length - 1 && <i aria-hidden="true">→</i>}</article>)}</div>
      </div></section>

      <section className="section-pad features-section"><div className="container">
        <SectionHeading eyebrow="Platform capabilities" title="Built for real field operations" copy="Practical workflows for the people collecting, supervising and reconciling revenue every day." />
        <div className="feature-grid">{features.map(([icon, title, copy]) => <article className="feature-card" key={title}><div className="icon-wrap"><Icon name={icon} /></div><h3>{title}</h3><p>{copy}</p></article>)}</div>
      </div></section>

      <section className="section-pad outcomes-section"><div className="container">
        <SectionHeading eyebrow="Business outcomes" title="Stronger control across daily revenue operations" copy="Give field teams, supervisors and council leaders the clarity to act earlier and reconcile with confidence." />
        <div className="outcomes-grid">{outcomes.map(([icon, title, copy]) => <article className="outcome-card" key={title}><div className="icon-wrap"><Icon name={icon} /></div><h3>{title}</h3><p>{copy}</p></article>)}</div>
      </div></section>

      <section className="section-pad pilot-teaser"><div className="container pilot-teaser-grid">
        <div><Eyebrow>Pilot Programme</Eyebrow><h2>Designed for a controlled 2–3 week council pilot</h2><p>Start with selected areas, merchants and field agents. Use the onboarding workbook to configure the pilot, print QR cards, train agents and monitor daily operations.</p><Link className="button button-primary" to="/contact">Request a Pilot</Link></div>
        <div className="pilot-numbers"><div><b>20–50</b><span>Selected merchants</span></div><div><b>1–3</b><span>Participating field agents</span></div><div><b>1–2</b><span>Council supervisors</span></div><div><b>2–3</b><span>Weeks of pilot activity</span></div></div>
      </div></section>
      <CTASection title="Pilot a real operational platform with your council" copy="Evaluate Kahyrah with your own operating scope, field teams and daily revenue workflows." />
    </>
  );
}
