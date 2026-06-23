import { Link } from 'react-router-dom';
import { CTASection, Eyebrow, Icon } from '../components/PageElements';
import { ScreenshotPlaceholder } from '../components/ProductMockups';

const capabilities = [
  ['qr', 'QR Merchant Verification', 'Generate and print durable QR cards for assigned merchants, creating a simple daily verification point for field agents.'],
  ['presence', 'Presence Tracking', 'Track expected, present and absent merchants by business date—with the operational context supervisors need.'],
  ['collection', 'Collection Workflow', 'Enable agents to record collections, preserve supporting context and submit completed sessions for supervisor review.'],
  ['recovery', 'Payment Recovery Monitoring', 'Identify failed automatic payments and organise the cases requiring manual recovery before they become unexplained gaps.'],
  ['alert', 'Alerts Management', 'Generate missing merchant alerts, acknowledge follow-up activity and keep open operational issues visible.'],
  ['chart', 'Revenue Reconciliation', 'Compare expected revenue, operational collections and remaining gaps across areas and business dates.'],
  ['metric', 'Business Metrics', 'Monitor product and operational activity through Prometheus and Grafana dashboards.'],
  ['audit', 'Audit Trail', 'Retain traceability for important platform actions and support accountable operational review.'],
];

export default function Product() {
  return <>
    <section className="page-hero product-page-hero section-pad"><div className="container narrow-hero"><Eyebrow>Kahyrah’s flagship product</Eyebrow><h1>Council Revenue Platform</h1><p>A pilot-ready platform for merchant presence verification, revenue collection tracking and supervisor reconciliation.</p><div className="hero-actions"><Link className="button button-primary button-large" to="/contact">Request a Pilot</Link><a className="button button-secondary button-large" href="#capabilities">Explore capabilities</a></div></div></section>
    <section className="section-pad product-showcase"><div className="container"><ScreenshotPlaceholder type="dashboard" title="Operational dashboard" copy="A single view of expected revenue, collections, presence and open alerts." /></div></section>
    <section className="section-pad product-capabilities" id="capabilities"><div className="container">
      <div className="product-capability-header"><div><Eyebrow>Connected operations</Eyebrow><h2>One platform for the daily revenue cycle</h2></div><p>Each capability supports a clear operational hand-off—from the council office to field agents and back to supervisors.</p></div>
      <div className="capability-list">{capabilities.map(([icon, title, copy], index) => <article className="capability-row" key={title}><span className="capability-number">{String(index + 1).padStart(2, '0')}</span><div className="icon-wrap"><Icon name={icon} /></div><div><h3>{title}</h3><p>{copy}</p></div></article>)}</div>
    </div></section>
    <section className="section-pad screenshot-grid-section"><div className="container screenshot-grid"><ScreenshotPlaceholder type="scan" title="Mobile scanning" copy="Fast, focused QR verification for field agents on the move." /><ScreenshotPlaceholder type="qr" title="Printable QR cards" copy="Consistent merchant identity and place assignment for daily council use." /></div></section>
    <CTASection title="See Council Revenue Platform in a live pilot" copy="Start with a focused operating area and evaluate the workflow using your council’s real pilot data." />
  </>;
}
