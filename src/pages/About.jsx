import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { CTASection, Eyebrow, Icon } from '../components/PageElements';
import { localizedPath } from '../i18n/routes';

const principleIcons = ['building', 'workflow', 'chart'];

export default function About() {
  const { t, i18n } = useTranslation();
  const locale = i18n.resolvedLanguage === 'fr' ? 'fr' : 'en';
  const principles = t('about.principles.items', { returnObjects: true });
  return <>
    <section className="page-hero about-page-hero section-pad"><div className="container narrow-hero"><Eyebrow>{t('about.hero.eyebrow')}</Eyebrow><h1>{t('about.hero.title')}</h1><p>{t('about.hero.copy')}</p><p className="about-belief">{t('about.hero.belief')}</p></div></section>
    <section className="section-pad about-story"><div className="container about-story-grid"><div><span className="statement-mark">K</span><h2>{t('about.story.title')}</h2></div><div><p className="large-copy">{t('about.story.lead')}</p><p>{t('about.story.copy1')}</p><p>{t('about.story.copy2')}</p></div></div></section>
    <section className="section-pad principles-section"><div className="container"><div className="principles-header"><Eyebrow>{t('about.principles.eyebrow')}</Eyebrow><h2>{t('about.principles.title')}</h2></div><div className="principles-grid">{principles.map((item, index) => <article key={item.title}><div className="icon-wrap"><Icon name={principleIcons[index]} /></div><h3>{item.title}</h3><p>{item.copy}</p></article>)}</div></div></section>
    <section className="section-pad focus-section"><div className="container focus-grid"><div><Eyebrow>{t('about.focus.eyebrow')}</Eyebrow><h2>{t('about.focus.title')}</h2><Link className="arrow-link" to={localizedPath('product', locale)}>{t('about.focus.link')} <span>→</span></Link></div><div className="focus-tags">{t('about.focus.tags', { returnObjects: true }).map((tag) => <span key={tag}>{tag}</span>)}</div></div></section>
    <CTASection title={t('about.cta.title')} copy={t('about.cta.copy')} eyebrow={t('about.cta.eyebrow')} primaryLabel={t('about.cta.primary')} secondaryLabel={t('about.cta.secondary')} />
  </>;
}
