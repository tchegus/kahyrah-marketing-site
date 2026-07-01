import { Link } from 'react-router-dom';
import { Eyebrow, Icon } from '../components/PageElements';

const imageBase = '/images/app';

const capabilities = [
  { icon: 'qr', title: 'QR Merchant Verification', copy: 'Generate and print durable QR cards for assigned merchants, creating a simple daily verification point for field agents.', image: 'mobile-scanning.webp.png', alt: 'Kahyrah mobile QR scanner beside a council merchant assignment card' },
  { icon: 'presence', title: 'Presence Tracking', copy: 'Track expected, present and absent merchants by business date—with the operational context supervisors need.', image: 'presence-tracking.webp.png', alt: 'Kahyrah presence dashboard showing expected, present and absent merchants' },
  { icon: 'collection', title: 'Collection Workflow', copy: 'Enable agents to record collections, preserve supporting context and submit completed sessions for supervisor review.', image: 'collection-workflow.webp.png', alt: 'Kahyrah collection workflow for recording and reviewing merchant payments' },
  { icon: 'recovery', title: 'Payment Recovery Monitoring', copy: 'Track failed automatic payments and ensure outstanding recovery amounts remain visible until they are resolved.', image: 'payment-recovery-monitoring.webp.png', alt: 'Kahyrah payment recovery monitoring view showing failed payments and outstanding recovery amounts' },
  { icon: 'alert', title: 'Alerts Management', copy: 'Generate missing merchant alerts, acknowledge follow-up activity and keep open operational issues visible.', image: 'alerts-management-new.webp.png', alt: 'Kahyrah alerts management view showing operational issues and follow-up activity' },
  { icon: 'chart', title: 'Revenue Reconciliation', copy: 'Compare expected revenue, operational collections and remaining gaps across areas and business dates.', image: 'revenue-reconciliation.webp.png', alt: 'Kahyrah revenue reconciliation dashboard with totals and merchant collection details', portrait: true },
  { icon: 'audit', title: 'Audit Trail', copy: 'Retain traceability for important platform actions and support accountable operational review.', image: 'audit-platform.webp.png', alt: 'Kahyrah audit platform showing a traceable history of operational actions' },
];

function ProductImage({ src, alt, eager = false, portrait = false }) {
  return (
    <div className={`product-image-frame${portrait ? ' product-image-frame-portrait' : ''}`}>
      <img src={`${imageBase}/${src}`} alt={alt} width={portrait ? 1024 : 1536} height={portrait ? 1536 : 1024} loading={eager ? 'eager' : 'lazy'} fetchPriority={eager ? 'high' : 'auto'} decoding="async" />
    </div>
  );
}

export default function Product() {
  return (
    <>
      <section className="page-hero product-page-hero section-pad">
        <div className="container narrow-hero">
          <Eyebrow>Kahyrah’s flagship product</Eyebrow>
          <h1>Council Revenue Platform</h1>
          <p>A pilot-ready platform for merchant presence verification, revenue collection tracking and supervisor reconciliation.</p>
          <div className="hero-actions">
            <Link className="button button-primary button-large" to="/contact">Request a Pilot</Link>
            <a className="button button-secondary button-large" href="#capabilities">Explore Capabilities</a>
          </div>
        </div>
      </section>

      <section className="product-showcase" aria-labelledby="dashboard-preview-title">
        <div className="container">
          <figure className="product-preview-card">
            <ProductImage src="dashboard-overview.webp.png" alt="Kahyrah operations dashboard showing revenue, collections, merchant presence and alerts" eager />
            <figcaption><span>Product preview</span><div><h2 id="dashboard-preview-title">Operational dashboard</h2><p>A single view of expected revenue, collections, presence and open alerts.</p></div></figcaption>
          </figure>
        </div>
      </section>

      <section className="section-pad product-capabilities" id="capabilities">
        <div className="container">
          <div className="product-capability-header">
            <div><Eyebrow>Core Operational Capabilities</Eyebrow><h2>One operational platform for council revenue management</h2></div>
            <p>Kahyrah gives councils one connected platform to manage daily revenue operations—from verified field activity and collections through payment recovery, financial reconciliation, management reporting and complete audit traceability.</p>
          </div>
          <div className="capability-story">
            {capabilities.map((capability, index) => (
              <article className="capability-feature" key={capability.title}>
                <div className="capability-feature-copy">
                  <span className="capability-number">{String(index + 1).padStart(2, '0')}</span>
                  <div className="icon-wrap"><Icon name={capability.icon} /></div>
                  <h3>{capability.title}</h3>
                  <p>{capability.copy}</p>
                </div>
                <ProductImage src={capability.image} alt={capability.alt} portrait={capability.portrait} />
              </article>
            ))}
          </div>
          <section className="supporting-capabilities" aria-labelledby="supporting-capabilities-title">
            <div className="supporting-capabilities-heading">
              <span>Platform layer</span>
              <h2 id="supporting-capabilities-title">Supporting Platform Capabilities</h2>
            </div>
            <article className="business-metrics-card">
              <div className="icon-wrap"><Icon name="metric" /></div>
              <div>
                <span className="coming-soon-badge">Coming Soon</span>
                <h3>Operational Business Reporting</h3>
                <p>Transform operational data into executive-ready dashboards and reports for supervisors, finance teams and council management through Grafana-powered business reporting.</p>
              </div>
            </article>
          </section>
        </div>
      </section>

      <section className="section-pad mobile-scanning-section">
        <div className="container mobile-scanning-grid">
          <div className="mobile-scanning-copy"><Eyebrow>Built for the field</Eyebrow><h2>Scan, verify and keep moving</h2><p>Fast, focused QR verification gives field agents a clear daily touchpoint while printable cards keep merchant identity and place assignments consistent.</p></div>
          <ProductImage src="mobile-scanning.webp.png" alt="Mobile QR verification screen and printable Kahyrah council merchant card" />
        </div>
      </section>

      <section className="cta-band section-pad">
        <div className="container cta-panel">
          <div>
            <Eyebrow light>Build the next pilot with us</Eyebrow>
            <h2>See Council Revenue Platform in a live pilot</h2>
            <p>Start with a focused operating area and evaluate the workflow using your council’s real pilot data.</p>
          </div>
          <div className="cta-actions">
            <Link className="button button-light" to="/contact">Request a Pilot</Link>
            <Link className="button button-ghost-light" to="/pilot">Learn More</Link>
          </div>
        </div>
      </section>
    </>
  );
}
