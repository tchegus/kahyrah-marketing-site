import { Link } from 'react-router-dom';
import { Check, CTASection, Eyebrow, Icon, SectionHeading } from '../components/PageElements';

const workflow = [
  ['Discovery call', 'Align on the council’s operating context, priorities and the practical boundaries of the pilot.'],
  ['Council data onboarding', 'Prepare selected areas, places, merchants and users through a structured onboarding workbook.'],
  ['Pilot configuration', 'Configure roles, operating areas, expected charges and the workflows the pilot will exercise.'],
  ['QR card printing', 'Generate and prepare merchant QR cards for the selected pilot locations.'],
  ['Team training', 'Run focused sessions for field agents and supervisors using realistic daily scenarios.'],
  ['Daily monitoring', 'Review adoption, alerts, collection activity and operational gaps throughout the pilot.'],
  ['Final pilot review', 'Assess outcomes, capture learning and define the most sensible next phase.'],
];

export default function Pilot() {
  return <>
    <section className="page-hero pilot-page-hero section-pad"><div className="container page-hero-grid"><div><Eyebrow>Pilot Programme</Eyebrow><h1>Run a focused council pilot in 2–3 weeks</h1><p>Evaluate Council Revenue Platform with a controlled operating scope, clear success criteria and hands-on support from onboarding to final review.</p><Link className="button button-primary button-large" to="/contact">Request a Pilot</Link></div><div className="pilot-hero-card"><span>Typical pilot scope</span><div className="scope-number"><b>20–50</b><small>merchants</small></div><div className="scope-mini"><div><b>1–3</b><small>field agents</small></div><div><b>1–2</b><small>supervisors</small></div><div><b>2–3</b><small>weeks</small></div></div><em>Focused, measurable and designed around real council operations.</em></div></div></section>

    <section className="section-pad pilot-includes"><div className="container split-heading-grid"><div><Eyebrow>A practical starting point</Eyebrow><h2>Everything needed to run the first operating cycle</h2></div><ul className="check-list"><Check>Council onboarding workbook</Check><Check>QR card generation</Check><Check>Agent training</Check><Check>Supervisor training</Check><Check>Daily operational review</Check><Check>End-of-pilot review</Check></ul></div></section>

    <section className="section-pad pilot-workflow"><div className="container"><SectionHeading eyebrow="Pilot workflow" title="A clear path from discovery to evidence" copy="Each stage produces a tangible outcome, keeping the pilot focused and easy to evaluate." align="center" /><div className="timeline">{workflow.map(([title, copy], index) => <article key={title}><div className="timeline-marker"><span>{index + 1}</span>{index < workflow.length - 1 && <i />}</div><div><h3>{title}</h3><p>{copy}</p></div></article>)}</div></div></section>

    <section className="section-pad pilot-outcomes"><div className="container pilot-outcomes-card"><div className="icon-wrap large"><Icon name="chart" /></div><div><Eyebrow>Evidence over promises</Eyebrow><h2>Finish with a shared view of what worked</h2><p>The final review brings together operational observations, platform activity and feedback from agents and supervisors—giving decision makers a practical basis for the next step.</p></div></div></section>
    <CTASection title="Plan a focused pilot with Kahyrah" copy="Tell us about your market operations, current collection process and the outcomes you want to test." />
  </>;
}
