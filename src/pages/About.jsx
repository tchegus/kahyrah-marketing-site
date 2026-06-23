import { Link } from 'react-router-dom';
import { CTASection, Eyebrow, Icon } from '../components/PageElements';

const principles = [
  ['building', 'Built for public service', 'Technology should make council operations clearer and more dependable for the people delivering them.'],
  ['workflow', 'Practical by design', 'We begin with real workflows, field constraints and measurable operational needs—not abstract transformation language.'],
  ['chart', 'Visibility that drives action', 'Good data is useful when it helps teams understand what happened, why it matters and what to do next.'],
];

export default function About() {
  return <>
    <section className="page-hero about-page-hero section-pad"><div className="container narrow-hero"><Eyebrow>About Kahyrah</Eyebrow><h1>Civic technology for operational visibility</h1><p>Kahyrah builds practical digital tools for councils and local authorities. Our focus is replacing manual operational processes with clear workflows, real-time visibility and reliable data.</p></div></section>

    <section className="section-pad about-story"><div className="container about-story-grid"><div><span className="statement-mark">K</span><h2>Modernising the work behind essential local services</h2></div><div><p className="large-copy">Councils manage complex, high-frequency operations with limited time and many moving parts. Too often, the systems supporting that work are fragmented or manual.</p><p>Kahyrah creates civic technology that respects the reality of public-sector delivery: field teams need focused workflows, supervisors need timely signals and decision makers need reliable evidence.</p><p>Council Revenue Platform is our first product—and the beginning of a broader commitment to practical digital infrastructure for local authorities.</p></div></div></section>

    <section className="section-pad principles-section"><div className="container"><div className="principles-header"><Eyebrow>How we work</Eyebrow><h2>Serious software. Grounded implementation.</h2></div><div className="principles-grid">{principles.map(([icon, title, copy]) => <article key={title}><div className="icon-wrap"><Icon name={icon} /></div><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section>

    <section className="section-pad focus-section"><div className="container focus-grid"><div><Eyebrow>Our focus</Eyebrow><h2>Where technology meets day-to-day council operations</h2><Link className="arrow-link" to="/product">Explore our flagship product <span>→</span></Link></div><div className="focus-tags"><span>Civic technology</span><span>Revenue visibility</span><span>Field operations</span><span>Digital transformation</span><span>Practical implementation</span><span>Reliable data</span></div></div></section>
    <CTASection title="Let’s improve council operations together" copy="Talk to Kahyrah about the operational challenges your authority is ready to modernise." />
  </>;
}
