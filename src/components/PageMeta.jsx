import { useEffect } from 'react';

const siteOrigin = 'https://kahyrah.com';
const socialImage = `${siteOrigin}/images/app/hero.webp.png`;

function setMeta(selector, attributes, content) {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement('meta');
    Object.entries(attributes).forEach(([name, value]) => element.setAttribute(name, value));
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}

export default function PageMeta({ title, description, path = '/' }) {
  useEffect(() => {
    const canonicalUrl = `${siteOrigin}${path === '/' ? '' : path}`;
    let canonical = document.head.querySelector('link[rel="canonical"]');

    document.title = title;
    setMeta('meta[name="description"]', { name: 'description' }, description);

    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);

    const entries = [
      ['meta[property="og:type"]', { property: 'og:type' }, 'website'],
      ['meta[property="og:site_name"]', { property: 'og:site_name' }, 'Kahyrah'],
      ['meta[property="og:locale"]', { property: 'og:locale' }, 'en_GB'],
      ['meta[property="og:title"]', { property: 'og:title' }, title],
      ['meta[property="og:description"]', { property: 'og:description' }, description],
      ['meta[property="og:url"]', { property: 'og:url' }, canonicalUrl],
      ['meta[property="og:image"]', { property: 'og:image' }, socialImage],
      ['meta[property="og:image:alt"]', { property: 'og:image:alt' }, 'Kahyrah Council Revenue Platform across desktop and mobile operational views'],
      ['meta[name="twitter:card"]', { name: 'twitter:card' }, 'summary_large_image'],
      ['meta[name="twitter:title"]', { name: 'twitter:title' }, title],
      ['meta[name="twitter:description"]', { name: 'twitter:description' }, description],
      ['meta[name="twitter:image"]', { name: 'twitter:image' }, socialImage],
      ['meta[name="twitter:image:alt"]', { name: 'twitter:image:alt' }, 'Kahyrah Council Revenue Platform across desktop and mobile operational views'],
    ];
    entries.forEach(([selector, attributes, content]) => setMeta(selector, attributes, content));
  }, [description, path, title]);

  return null;
}
