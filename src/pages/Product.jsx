import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Eyebrow, Icon } from '../components/PageElements';
import { localizedPath } from '../i18n/routes';
import marketPhotograph from '../../docs/image/standalone-market-photograph.png';

const imageBase = '/images/app';
const capabilityData = [
  ['qr', 'mobile-scanning.webp.png'],
  ['presence', 'presence-tracking.webp.png'],
  ['collection', 'collection-workflow.webp.png'],
  ['recovery', 'payment-recovery-monitoring.webp.png'],
  ['alert', 'alerts-management-new.webp.png'],
  ['chart', 'revenue-reconciliation.webp.png'],
  ['metric', 'dashboard-overview.webp.png'],
  ['audit', 'audit-platform.webp.png'],
];

function ProductImage({ src, alt, eager = false, portrait = false, wide = false }) {
  return (
    <div className={`product-image-frame${portrait ? ' product-image-frame-portrait' : ''}${wide ? ' product-image-frame-wide' : ''}`}>
      <img
        src={`${imageBase}/${src}`}
        alt={alt}
        width={wide ? 1800 : portrait ? 1024 : 1536}
        height={wide ? 960 : portrait ? 1536 : 1024}
        loading={eager ? 'eager' : 'lazy'}
        fetchPriority={eager ? 'high' : 'auto'}
        decoding="async"
      />
    </div>
  );
}

export default function Product() {
  const { t, i18n } = useTranslation();
  const locale = i18n.resolvedLanguage === 'fr' ? 'fr' : 'en';
  const heroStrip = t('product.hero.strip', { returnObjects: true });
  const capabilities = t('product.capabilities.items', { returnObjects: true });

  return (
    <>
      <section className="product-hero-v3" aria-labelledby="product-hero-title">
        <div className="product-hero-photo" aria-hidden="true">
          <img src={marketPhotograph} alt="" />
        </div>
        <div className="product-hero-overlay" />
        <div className="container product-hero-v3-inner">
          <div className="product-hero-copy">
            <Eyebrow>{t('product.hero.eyebrow')}</Eyebrow>
            <h1 id="product-hero-title">{t('product.hero.title')}</h1>
            <p className="product-hero-proposition">{t('product.hero.proposition')}</p>
            <p>{t('product.hero.copy')}</p>
            <div className="hero-actions">
              <Link className="button button-primary button-large" to={localizedPath('contact', locale)}>{t('product.hero.primary')}</Link>
              <a className="button button-secondary button-large" href="#capabilities">{t('product.hero.secondary')} <span aria-hidden="true">→</span></a>
            </div>
          </div>
          <img className="product-hero-accessible-image" src={marketPhotograph} alt={t('product.hero.imageAlt')} />
        </div>
        <div className="container product-hero-strip" aria-label={t('product.hero.secondary')}>
          {heroStrip.map((item) => (
            <article key={item.title}>
              <span><Icon name={item.icon} /></span>
              <div>
                <h2>{item.title}</h2>
                <p>{item.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-pad product-capabilities" id="capabilities">
        <div className="container">
          <div className="product-capability-header">
            <div>
              <Eyebrow>{t('product.capabilities.eyebrow')}</Eyebrow>
              <h2>{t('product.capabilities.title')}</h2>
            </div>
            <p>{t('product.capabilities.copy')}</p>
          </div>

          <div className="capability-story">
            {capabilities.map((item, index) => {
              const [icon, image, portrait] = capabilityData[index];
              const number = String(index + 1).padStart(2, '0');

              if (index === 6) {
                return (
                  <article className="capability-dashboard" key={item.title}>
                    <div className="capability-dashboard-heading">
                      <div>
                        <span className="capability-number">{number}</span>
                        <div className="icon-wrap"><Icon name={icon} /></div>
                        <p className="capability-dashboard-kicker">{item.title}</p>
                        <h3>{item.heading}</h3>
                      </div>
                      <p>{item.copy}</p>
                    </div>
                    <ProductImage src={image} alt={item.alt} wide />
                    <div className="dashboard-indicator-grid">
                      {item.indicators.map((indicator) => (
                        <article key={indicator.title}>
                          <h4>{indicator.title}</h4>
                          <p>{indicator.copy}</p>
                        </article>
                      ))}
                    </div>
                  </article>
                );
              }

              return (
                <article className="capability-feature" key={item.title}>
                  <div className="capability-feature-copy">
                    <span className="capability-number">{number}</span>
                    <div className="icon-wrap"><Icon name={icon} /></div>
                    <h3>{item.title}</h3>
                    <p>{item.copy}</p>
                  </div>
                  <ProductImage src={image} alt={item.alt} portrait={portrait} />
                </article>
              );
            })}
          </div>

          <section className="supporting-capabilities" aria-labelledby="supporting-capabilities-title">
            <div className="supporting-capabilities-heading">
              <span>{t('product.supporting.label')}</span>
              <h2 id="supporting-capabilities-title">{t('product.supporting.title')}</h2>
            </div>
            <article className="business-metrics-card">
              <div className="icon-wrap"><Icon name="metric" /></div>
              <div>
                <span className="coming-soon-badge">{t('product.supporting.badge')}</span>
                <h3>{t('product.supporting.capability')}</h3>
                <p>{t('product.supporting.copy')}</p>
                <p><strong>{t('product.supporting.view')}</strong> — {t('product.supporting.supportingText')}</p>
              </div>
            </article>
          </section>
        </div>
      </section>

      <section className="section-pad mobile-scanning-section">
        <div className="container mobile-scanning-grid">
          <div className="mobile-scanning-copy">
            <Eyebrow>{t('product.mobile.eyebrow')}</Eyebrow>
            <h2>{t('product.mobile.title')}</h2>
            <p>{t('product.mobile.copy')}</p>
          </div>
          <ProductImage src="mobile-scanning.webp.png" alt={t('product.mobile.alt')} />
        </div>
      </section>

      <section className="cta-band section-pad">
        <div className="container cta-panel">
          <div>
            <Eyebrow light>{t('product.cta.eyebrow')}</Eyebrow>
            <h2>{t('product.cta.title')}</h2>
            <p>{t('product.cta.copy')}</p>
          </div>
          <div className="cta-actions">
            <Link className="button button-light" to={localizedPath('contact', locale)}>{t('product.cta.primary')}</Link>
            <Link className="button button-ghost-light" to={localizedPath('pilot', locale)}>{t('product.cta.secondary')}</Link>
          </div>
        </div>
      </section>
    </>
  );
}
