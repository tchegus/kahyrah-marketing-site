import { useState } from 'react';
import { Eyebrow } from '../components/PageElements';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Kahyrah enquiry from ${data.get('organisation') || data.get('name')}`);
    const body = encodeURIComponent(`Name: ${data.get('name')}\nOrganisation: ${data.get('organisation')}\nEmail: ${data.get('email')}\n\n${data.get('message')}`);
    setSubmitted(true);
    window.location.href = `mailto:pilots@kahyrah.com?subject=${subject}&body=${body}`;
  }

  return <>
    <section className="contact-section section-pad"><div className="container contact-grid">
      <div className="contact-copy"><Eyebrow>Contact Kahyrah</Eyebrow><h1>Start a conversation with Kahyrah</h1><p>Interested in piloting Council Revenue Platform or discussing council revenue operations? Contact Kahyrah to arrange a conversation.</p><div className="contact-direct"><a href="mailto:pilots@kahyrah.com"><span>Pilot enquiries</span><b>pilots@kahyrah.com</b><i>→</i></a><a href="mailto:contact@kahyrah.com"><span>General enquiries</span><b>contact@kahyrah.com</b><i>→</i></a></div><div className="contact-note"><span>✓</span><p><b>What happens next?</b><br />We’ll arrange a focused conversation about your current operations, pilot scope and practical next steps.</p></div></div>
      <form className="contact-form" onSubmit={handleSubmit}><div className="form-heading"><span>Request a Pilot</span><h2>Tell us about your council</h2><p>Complete the form and your email client will prepare a message to our pilot team.</p></div><label>Name<input name="name" type="text" placeholder="Your full name" required /></label><label>Organisation<input name="organisation" type="text" placeholder="Council or organisation" required /></label><label>Email<input name="email" type="email" placeholder="name@organisation.gov" required /></label><label>Message<textarea name="message" rows="5" placeholder="Tell us about your current operations or pilot goals" required /></label><button className="button button-primary button-large full-width" type="submit">Request a Pilot <span>→</span></button>{submitted && <p className="form-status">Your email application should now open with the message prepared.</p>}<small>For V1, this secure static form opens your email client. No information is stored on this website.</small></form>
    </div></section>
  </>;
}
