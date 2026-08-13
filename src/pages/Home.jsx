import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowLink, CTASection, Eyebrow, Icon, SectionHeading } from '../components/PageElements';
import { localizedPath } from '../i18n/routes';

const imageBase = '/images/app';
const featureIcons = ['qr', 'presence', 'collection', 'recovery', 'alert', 'chart', 'metric', 'audit'];
const outcomeIcons = ['chart', 'presence', 'recovery', 'audit', 'metric', 'workflow'];
const evidenceImages = ['hero.webp.png', 'platform-overview-gallery.webp.png', 'multi-device section.webp.png'];
const pilotNumbers = ['20–50', '1–3', '1–2', '2–3'];

function MarketingImage({ src, alt, eager = false }) {
  return <img src={`${imageBase}/${src}`} alt={alt} width="1536" height="1024" loading={eager ? 'eager' : 'lazy'} fetchPriority={eager ? 'high' : 'auto'} decoding="async" />;
}

export default function Home() {
  const { t, i18n } = useTranslation();
  const locale = i18n.resolvedLanguage === 'fr' ? 'fr' : 'en';
  const productPath = localizedPath('product', locale);
  const contactPath = localizedPath('contact', locale);
  const problems = t('home.challenge.items', { returnObjects: true });
  const steps = t('home.workflow.items', { returnObjects: true });
  const features = t('home.features.items', { returnObjects: true });
  const outcomes = t('home.outcomes.items', { returnObjects: true });
  const evidence = t('home.evidence.items', { returnObjects: true });
  return <>
    <section className="hero section-pad"><div className="hero-grid container"><div className="hero-copy">
      <Eyebrow>{t('home.hero.eyebrow')}</Eyebrow><h1>{t('home.hero.title')}</h1><p className="hero-lead">{t('home.hero.copy')}</p>
      <div className="hero-actions"><Link className="button button-primary button-large" to={contactPath}>{t('common.requestPilot')}</Link><Link className="button button-secondary button-large" to={productPath}>{t('home.hero.secondary')}</Link></div>
      <div className="trust-line"><span>✓</span> {t('home.hero.trust')}</div>
    </div><div className="home-hero-product"><MarketingImage src="hero.webp.png" alt={t('home.hero.alt')} eager /></div></div></section>

    <section className="credibility-strip"><div className="container credibility-inner"><span>{t('home.trust.label')}</span>{t('home.trust.items', { returnObjects: true }).map((item, index) => <Fragment key={item}><b>{item}</b>{index < 3 && <i />}</Fragment>)}</div></section>

    <section className="section-pad problems-section"><div className="container"><SectionHeading eyebrow={t('home.challenge.eyebrow')} title={t('home.challenge.title')} copy={t('home.challenge.copy')} /><div className="problems-grid">{problems.map((item, index) => <article className="problem-card" key={item.title}><span>{String(index + 1).padStart(2, '0')}</span><h3>{item.title}</h3><p>{item.copy}</p></article>)}</div></div></section>

    <section className="section-pad product-intro-section"><div className="container product-intro-grid"><div className="product-intro-copy">
      <Eyebrow>{t('home.intro.eyebrow')}</Eyebrow><h2>{t('home.intro.title')}</h2><p className="large-copy">{t('home.intro.lead')}</p><p>{t('home.intro.copy')}</p><ArrowLink to={productPath}>{t('home.intro.link')}</ArrowLink>
      <div className="product-proof">{t('home.intro.proof', { returnObjects: true }).map((item) => <div key={item.title}><b>{item.title}</b><span>{item.copy}</span></div>)}</div>
    </div><div className="home-intro-visual"><MarketingImage src="platform-overview-gallery.webp.png" alt={t('home.intro.alt')} /></div></div></section>

    <section className="section-pad product-evidence-section"><div className="container"><SectionHeading eyebrow={t('home.evidence.eyebrow')} title={t('home.evidence.title')} copy={t('home.evidence.copy')} /><div className="product-evidence-grid">
      {evidence.map((item, index) => <article className={`product-evidence-card${index === 0 ? ' product-evidence-featured' : ''}`} key={item.title}><div className="evidence-image"><MarketingImage src={evidenceImages[index]} alt={item.alt} /></div><div className="evidence-caption"><div><h3>{item.title}</h3><p>{item.copy}</p></div><Link className="arrow-link" to={productPath}>{t('home.evidence.link')} <span>→</span></Link></div></article>)}
    </div></div></section>

    <section className="section-pad workflow-section"><div className="container"><SectionHeading eyebrow={t('home.workflow.eyebrow')} title={t('home.workflow.title')} align="center" /><div className="steps-grid">{steps.map((title, index) => <article className="step-card" key={title}><span>{String(index + 1).padStart(2, '0')}</span><h3>{title}</h3>{index < steps.length - 1 && <i aria-hidden="true">→</i>}</article>)}</div></div></section>

    <section className="section-pad features-section"><div className="container"><SectionHeading eyebrow={t('home.features.eyebrow')} title={t('home.features.title')} copy={t('home.features.copy')} /><div className="feature-grid">{features.map((item, index) => <article className="feature-card" key={item.title}><div className="icon-wrap"><Icon name={featureIcons[index]} /></div><h3>{item.title}</h3><p>{item.copy}</p></article>)}</div></div></section>

    <section className="section-pad outcomes-section"><div className="container"><SectionHeading eyebrow={t('home.outcomes.eyebrow')} title={t('home.outcomes.title')} copy={t('home.outcomes.copy')} /><div className="outcomes-grid">{outcomes.map((item, index) => <article className="outcome-card" key={item.title}><div className="icon-wrap"><Icon name={outcomeIcons[index]} /></div><h3>{item.title}</h3><p>{item.copy}</p></article>)}</div></div></section>

    <section className="section-pad pilot-teaser"><div className="container pilot-teaser-grid"><div><Eyebrow>{t('home.pilot.eyebrow')}</Eyebrow><h2>{t('home.pilot.title')}</h2><p>{t('home.pilot.copy')}</p><Link className="button button-primary" to={contactPath}>{t('home.pilot.cta')}</Link></div><div className="pilot-numbers">{t('home.pilot.metrics', { returnObjects: true }).map((label, index) => <div key={label}><b>{pilotNumbers[index]}</b><span>{label}</span></div>)}</div></div></section>
    <CTASection title={t('home.cta.title')} copy={t('home.cta.copy')} eyebrow={t('home.cta.eyebrow')} primaryLabel={t('home.cta.primary')} secondaryLabel={t('home.cta.secondary')} />
  </>;
}
