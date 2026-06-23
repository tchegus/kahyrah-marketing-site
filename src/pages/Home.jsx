import { Link } from 'react-router-dom';
import { ArrowLink, CTASection, Eyebrow, Icon, SectionHeading } from '../components/PageElements';
import { DashboardMockup, HeroProductVisual } from '../components/ProductMockups';

const problems = [
  ['01', 'Slow reconciliation', 'Manual collection tracking creates delays, duplicate work and uncertainty at the end of each business day.'],
  ['02', 'Late operational signals', 'Missing merchants are often discovered after the moment for practical field intervention has passed.'],
  ['03', 'Limited field visibility', 'Supervisors lack a reliable, real-time view of presence checks and collection activity across areas.'],
  ['04', 'Unclear revenue gaps', 'Spreadsheet totals show a shortfall, but rarely explain where it started or what action should follow.'],
  ['05', 'Fragmented verification', 'Merchant identity, place assignments and QR verification are difficult to manage consistently at scale.'],
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
  ['metric', 'Business Metrics', 'Monitor platform and operational performance through clear dashboards.'],
  ['audit', 'Audit Trail', 'Maintain traceability across the actions that shape daily revenue outcomes.'],
];

export default function Home() {
  return (
    <>
      <section className="hero section-pad">
        <div className="hero-grid container">
          <div className="hero-copy">
            <Eyebrow>Modern Civic-Tech SaaS</Eyebrow>
            <h1>Modern revenue operations for councils</h1>
            <p className="hero-lead">Kahyrah builds civic technology that helps councils digitise merchant presence verification, daily revenue collection, QR cards, alerts and revenue reconciliation.</p>
            <div className="hero-actions">
              <Link className="button button-primary button-large" to="/contact">Request a Pilot</Link>
              <Link className="button button-secondary button-large" to="/product">Explore Council Revenue Platform</Link>
            </div>
            <div className="trust-line"><span>✓</span> Built for council market operations, field agents and revenue supervisors.</div>
          </div>
          <HeroProductVisual />
        </div>
      </section>

      <section className="credibility-strip"><div className="container credibility-inner"><span>Purpose-built for</span><b>Local authorities</b><i /><b>Market operations</b><i /><b>Revenue teams</b><i /><b>Public-sector partners</b></div></section>

      <section className="section-pad problems-section">
        <div className="container">
          <SectionHeading eyebrow="The operational challenge" title="Replace manual spreadsheets with real-time operational visibility" copy="Many councils still rely on paper forms, WhatsApp updates and spreadsheets to track daily merchant activity and revenue collection." />
          <div className="problems-grid">{problems.map(([number, title, copy]) => <article className="problem-card" key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
        </div>
      </section>

      <section className="section-pad product-intro-section">
        <div className="container product-intro-grid">
          <div className="product-intro-copy">
            <Eyebrow>Our flagship product</Eyebrow><h2>Introducing Council Revenue Platform</h2>
            <p className="large-copy">Council Revenue Platform is Kahyrah’s pilot-ready product for digitising daily market revenue operations.</p>
            <p>It helps councils assign merchants to places, print QR cards, verify presence, track collections, manage alerts and reconcile revenue.</p>
            <ArrowLink to="/product">View the product</ArrowLink>
            <div className="product-proof"><div><b>One workflow</b><span>From onboarding to reconciliation</span></div><div><b>Field ready</b><span>Designed around daily council operations</span></div></div>
          </div>
          <div className="product-intro-visual"><DashboardMockup /></div>
        </div>
      </section>

      <section className="section-pad workflow-section"><div className="container">
        <SectionHeading eyebrow="How it works" title="From council onboarding to daily revenue reconciliation" align="center" />
        <div className="steps-grid">{steps.map(([number, title], index) => <article className="step-card" key={number}><span>{number}</span><h3>{title}</h3>{index < steps.length - 1 && <i aria-hidden="true">→</i>}</article>)}</div>
      </div></section>

      <section className="section-pad features-section"><div className="container">
        <SectionHeading eyebrow="Platform capabilities" title="Built for real field operations" copy="Practical workflows for the people collecting, supervising and reconciling revenue every day." />
        <div className="feature-grid">{features.map(([icon, title, copy]) => <article className="feature-card" key={title}><div className="icon-wrap"><Icon name={icon} /></div><h3>{title}</h3><p>{copy}</p></article>)}</div>
      </div></section>

      <section className="section-pad pilot-teaser"><div className="container pilot-teaser-grid">
        <div><Eyebrow>Pilot Programme</Eyebrow><h2>Designed for a controlled 2–3 week council pilot</h2><p>Start with selected areas, merchants and field agents. Use the onboarding workbook to configure the pilot, print QR cards, train agents and monitor daily operations.</p><Link className="button button-primary" to="/contact">Request a Pilot</Link></div>
        <div className="pilot-numbers"><div><b>20–50</b><span>Merchants</span></div><div><b>1–3</b><span>Field agents</span></div><div><b>1–2</b><span>Supervisors</span></div><div><b>2–3</b><span>Weeks</span></div></div>
      </div></section>
      <CTASection />
    </>
  );
}
