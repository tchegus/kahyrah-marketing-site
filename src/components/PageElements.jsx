import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { localizedPath } from '../i18n/routes';

export function Eyebrow({ children, light = false }) {
  return <div className={light ? 'eyebrow eyebrow-light' : 'eyebrow'}>{children}</div>;
}

export function SectionHeading({ eyebrow, title, copy, align = 'left' }) {
  return (
    <div className={`section-heading align-${align}`}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2>{title}</h2>
      {copy && <p>{copy}</p>}
    </div>
  );
}

export function ArrowLink({ to, children }) {
  return (
    <Link className="arrow-link" to={to}>
      {children} <span aria-hidden="true">→</span>
    </Link>
  );
}

export function Check({ children }) {
  return (
    <li className="check-item">
      <span aria-hidden="true">✓</span>
      <span>{children}</span>
    </li>
  );
}

export function CTASection({ title, copy, eyebrow, primaryLabel, secondaryLabel }) {
  const { t, i18n } = useTranslation();
  const locale = i18n.resolvedLanguage === 'fr' ? 'fr' : 'en';
  return (
    <section className="cta-band section-pad">
      <div className="container cta-panel">
        <div>
          <Eyebrow light>{eyebrow || t('common.buildPilot')}</Eyebrow>
          <h2>{title || t('common.defaultCtaTitle')}</h2>
          <p>{copy || t('common.defaultCtaCopy')}</p>
        </div>
        <div className="cta-actions">
          <Link className="button button-light" to={localizedPath('contact', locale)}>{primaryLabel || t('common.requestPilot')}</Link>
          <a className="button button-ghost-light" href="mailto:contact@kahyrah.com">{secondaryLabel || t('common.contactUs')}</a>
        </div>
      </div>
    </section>
  );
}

export function Icon({ name }) {
  const paths = {
    qr: <><path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4z"/><path d="M14 14h2v2h-2zM18 14h2v4h-2zM14 18h4v2h-4z"/></>,
    presence: <><circle cx="9" cy="8" r="3"/><path d="M3 20c.4-4.2 2.4-6 6-6s5.6 1.8 6 6M16 8l2 2 3-4"/></>,
    collection: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 10h18M8 15h3"/></>,
    recovery: <><path d="M4 12a8 8 0 1 0 2.3-5.7L4 9"/><path d="M4 4v5h5M12 8v4l3 2"/></>,
    alert: <><path d="M12 3 2.8 19h18.4z"/><path d="M12 9v4M12 17h.01"/></>,
    chart: <><path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/></>,
    metric: <><path d="M4 18a8 8 0 1 1 16 0"/><path d="m12 14 4-4M7 18h10"/></>,
    audit: <><path d="M6 3h12v18H6zM9 7h6M9 11h6M9 15h3"/></>,
    building: <><path d="M3 21h18M5 21V9l7-5 7 5v12M9 21v-6h6v6"/></>,
    workflow: <><rect x="3" y="3" width="6" height="6" rx="1"/><rect x="15" y="15" width="6" height="6" rx="1"/><path d="M9 6h4a4 4 0 0 1 4 4v5M15 18h-4a4 4 0 0 1-4-4V9"/></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 7 9-7"/></>,
    chat: <><path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 8.7 8.7 0 0 1-3.6-.8L3 20l1.4-4.2A8.2 8.2 0 0 1 3 11.5a8.6 8.6 0 0 1 18 0Z"/><path d="M8 11h.01M12 11h.01M16 11h.01"/></>,
    send: <><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></>,
    demo: <><rect x="4" y="5" width="16" height="11" rx="1.5"/><path d="M8 20h8M12 16v4M8 12l3-3 2 2 3-4"/></>,
    target: <><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M15 9l4-4"/></>,
    check: <><circle cx="12" cy="12" r="9"/><path d="m8 12 3 3 5-6"/></>,
  };
  return <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name] || paths.workflow}</svg>;
}
