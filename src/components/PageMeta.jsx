import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { localizedPath } from '../i18n/routes';

const siteOrigin = 'https://kahyrah.com';
const socialImage = `${siteOrigin}/images/app/hero.webp.png`;

function setMeta(selector, attributes, content) {
  let element = document.head.querySelector(selector);
  if (!element) { element = document.createElement('meta'); Object.entries(attributes).forEach(([name, value]) => element.setAttribute(name, value)); document.head.appendChild(element); }
  element.setAttribute('content', content);
}

function setAlternate(hreflang, href) {
  let link = document.head.querySelector(`link[rel="alternate"][hreflang="${hreflang}"]`);
  if (!link) { link = document.createElement('link'); link.rel = 'alternate'; link.hreflang = hreflang; document.head.appendChild(link); }
  link.href = href;
}

export default function PageMeta({ page, locale, path }) {
  const { t } = useTranslation();
  const title = t(`meta.${page}.title`);
  const description = t(`meta.${page}.description`);

  useEffect(() => {
    const canonicalUrl = `${siteOrigin}${path === '/' ? '' : path}`;
    let canonical = document.head.querySelector('link[rel="canonical"]');
    document.title = title;
    document.documentElement.lang = locale;
    setMeta('meta[name="description"]', { name: 'description' }, description);
    if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.appendChild(canonical); }
    canonical.href = canonicalUrl;
    const enPath = localizedPath(page, 'en');
    setAlternate('en-GB', `${siteOrigin}${enPath === '/' ? '' : enPath}`);
    setAlternate('fr-FR', `${siteOrigin}${localizedPath(page, 'fr')}`);
    setAlternate('x-default', `${siteOrigin}${enPath === '/' ? '' : enPath}`);
    let structuredData = document.head.querySelector('script[data-kahyrah-structured-data]');
    if (!structuredData) { structuredData = document.createElement('script'); structuredData.type = 'application/ld+json'; structuredData.dataset.kahyrahStructuredData = ''; document.head.appendChild(structuredData); }
    structuredData.textContent = JSON.stringify({ '@context': 'https://schema.org', '@type': 'WebSite', name: 'Kahyrah', url: canonicalUrl, description, inLanguage: locale === 'fr' ? 'fr-FR' : 'en-GB' });
    const alt = t('meta.socialAlt');
    const entries = [
      ['meta[property="og:type"]', { property: 'og:type' }, 'website'], ['meta[property="og:site_name"]', { property: 'og:site_name' }, 'Kahyrah'],
      ['meta[property="og:locale"]', { property: 'og:locale' }, locale === 'fr' ? 'fr_FR' : 'en_GB'], ['meta[property="og:locale:alternate"]', { property: 'og:locale:alternate' }, locale === 'fr' ? 'en_GB' : 'fr_FR'], ['meta[property="og:title"]', { property: 'og:title' }, title],
      ['meta[property="og:description"]', { property: 'og:description' }, description], ['meta[property="og:url"]', { property: 'og:url' }, canonicalUrl],
      ['meta[property="og:image"]', { property: 'og:image' }, socialImage], ['meta[property="og:image:alt"]', { property: 'og:image:alt' }, alt],
      ['meta[name="twitter:card"]', { name: 'twitter:card' }, 'summary_large_image'], ['meta[name="twitter:title"]', { name: 'twitter:title' }, title],
      ['meta[name="twitter:description"]', { name: 'twitter:description' }, description], ['meta[name="twitter:image"]', { name: 'twitter:image' }, socialImage], ['meta[name="twitter:image:alt"]', { name: 'twitter:image:alt' }, alt]
    ];
    entries.forEach(([selector, attributes, content]) => setMeta(selector, attributes, content));
  }, [description, locale, page, path, t, title]);
  return null;
}
