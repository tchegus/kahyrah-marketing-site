import { useTranslation } from 'react-i18next';
import { Eyebrow } from '../components/PageElements';

function LegalPage({ type }) {
  const { t } = useTranslation();
  const sections = t(`legal.${type}.sections`, { returnObjects: true });
  return <><section className="page-hero legal-page-hero section-pad"><div className="container narrow-hero"><Eyebrow>{t('legal.eyebrow')}</Eyebrow><h1>{t(`legal.${type}.title`)}</h1><p>{t(`legal.${type}.intro`)}</p></div></section><section className="section-pad legal-content"><div className="container legal-prose"><p className="legal-updated">{t('legal.updated')}</p>{sections.map((section, index) => <div key={section.title}><h2>{section.title}</h2><p>{section.copy}{index === sections.length - 1 && <> <a href="mailto:contact@kahyrah.com">contact@kahyrah.com</a>.</>}</p></div>)}</div></section></>;
}

export function Privacy() { return <LegalPage type="privacy" />; }
export function Terms() { return <LegalPage type="terms" />; }
