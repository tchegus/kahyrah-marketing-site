import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Eyebrow, Icon } from '../components/PageElements';

const journeyIcons = ['send', 'chat', 'demo', 'target', 'check'];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const { t } = useTranslation();
  const journey = t('contact.journey.items', { returnObjects: true });

  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const organisation = data.get('organisation') || data.get('name');
    const subject = encodeURIComponent(t('contact.form.subject', { organisation }));
    const body = encodeURIComponent(t('contact.form.emailBody', {
      name: data.get('name'),
      organisation: data.get('organisation'),
      email: data.get('email'),
      message: data.get('message'),
    }));
    setSubmitted(true);
    window.location.href = `mailto:pilots@kahyrah.com?subject=${subject}&body=${body}`;
  }

  return (
    <section className="contact-section section-pad">
      <div className="container contact-layout">
        <div className="contact-top-grid">
          <div className="contact-copy">
            <Eyebrow>{t('contact.eyebrow')}</Eyebrow>
            <h1>{t('contact.title')}</h1>
            <p>{t('contact.copy')}</p>

            <div className="contact-direct">
              <a href="mailto:pilots@kahyrah.com">
                <span className="contact-direct-icon"><Icon name="mail" /></span>
                <span>{t('contact.demoEnquiries')}</span>
                <b>pilots@kahyrah.com</b>
                <i aria-hidden="true">→</i>
              </a>
              <a href="mailto:contact@kahyrah.com">
                <span className="contact-direct-icon"><Icon name="chat" /></span>
                <span>{t('contact.generalEnquiries')}</span>
                <b>contact@kahyrah.com</b>
                <i aria-hidden="true">→</i>
              </a>
            </div>
          </div>

          <section className="contact-journey" aria-labelledby="contact-journey-title">
            <h2 id="contact-journey-title">{t('contact.journey.eyebrow')}</h2>
            <div className="contact-journey-steps">
              {journey.map((item, index) => (
                <article key={item.title}>
                  <span className="journey-number">{index + 1}</span>
                  <span className="journey-icon"><Icon name={journeyIcons[index]} /></span>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                  {index < journey.length - 1 && <i aria-hidden="true">→</i>}
                </article>
              ))}
            </div>
            <div className="journey-privacy-note">
              <span aria-hidden="true">✓</span>
              <p>{t('contact.journey.privacyNote')}</p>
            </div>
          </section>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-heading">
            <span>{t('contact.form.eyebrow')}</span>
            <h2>{t('contact.form.title')}</h2>
            <p>{t('contact.form.copy')}</p>
          </div>

          <div className="contact-form-fields">
            <div className="contact-form-stack">
              <label>
                {t('contact.form.name')}
                <input name="name" type="text" placeholder={t('contact.form.namePlaceholder')} required />
              </label>
              <label>
                {t('contact.form.organisation')}
                <input name="organisation" type="text" placeholder={t('contact.form.organisationPlaceholder')} required />
              </label>
              <label>
                {t('contact.form.email')}
                <input name="email" type="email" placeholder={t('contact.form.emailPlaceholder')} required />
              </label>
            </div>

            <label className="contact-message-field">
              {t('contact.form.message')}
              <textarea name="message" rows="5" placeholder={t('contact.form.messagePlaceholder')} required />
            </label>
          </div>

          <button className="button button-primary button-large full-width" type="submit">
            {t('contact.form.cta')} <span>→</span>
          </button>
          {submitted && <p className="form-status">{t('contact.form.status')}</p>}
          <small>{t('contact.form.note')}</small>
        </form>
      </div>
    </section>
  );
}
