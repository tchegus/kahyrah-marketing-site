import { Eyebrow } from '../components/PageElements';

const updated = '2 July 2026';

export function Privacy() {
  return (
    <>
      <section className="page-hero legal-page-hero section-pad"><div className="container narrow-hero"><Eyebrow>Legal</Eyebrow><h1>Privacy Policy</h1><p>How information is handled when you visit the Kahyrah website or contact our team.</p></div></section>
      <section className="section-pad legal-content"><div className="container legal-prose">
        <p className="legal-updated">Last updated: {updated}</p>
        <h2>Information you provide</h2><p>The website contact form prepares an email in your email application. Kahyrah does not store form entries on this website. If you send us an email, we use the information you provide to respond to your enquiry and manage relevant follow-up.</p>
        <h2>Website services</h2><p>This website may load essential resources, such as web fonts, from third-party infrastructure. Those providers may process limited technical information required to deliver the resource.</p>
        <h2>Sharing and retention</h2><p>We do not sell personal information. Enquiry information is shared only where needed to respond, operate our business or meet legal obligations, and is retained only for as long as reasonably necessary.</p>
        <h2>Your choices</h2><p>You may ask about, correct or request deletion of information you have provided by contacting <a href="mailto:contact@kahyrah.com">contact@kahyrah.com</a>.</p>
      </div></section>
    </>
  );
}

export function Terms() {
  return (
    <>
      <section className="page-hero legal-page-hero section-pad"><div className="container narrow-hero"><Eyebrow>Legal</Eyebrow><h1>Website Terms</h1><p>Terms governing access to and use of the Kahyrah marketing website.</p></div></section>
      <section className="section-pad legal-content"><div className="container legal-prose">
        <p className="legal-updated">Last updated: {updated}</p>
        <h2>Website information</h2><p>This website provides general information about Kahyrah and Council Revenue Platform. It does not constitute a binding offer, procurement commitment or professional advice.</p>
        <h2>Acceptable use</h2><p>You may use this website for lawful informational and business-enquiry purposes. You must not interfere with its operation, attempt unauthorised access or misuse its content.</p>
        <h2>Intellectual property</h2><p>Unless stated otherwise, the website, brand, copy, product visuals and related materials belong to Kahyrah or its licensors and may not be reproduced without permission.</p>
        <h2>Availability and liability</h2><p>We aim to keep website information accurate and available, but it may change and uninterrupted access is not guaranteed. To the extent permitted by law, Kahyrah is not responsible for loss arising solely from reliance on this marketing website.</p>
        <h2>Contact</h2><p>Questions about these terms can be sent to <a href="mailto:contact@kahyrah.com">contact@kahyrah.com</a>.</p>
      </div></section>
    </>
  );
}
