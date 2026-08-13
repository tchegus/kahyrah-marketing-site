export const supportedLocales = ['en', 'fr'];

export const routeRegistry = {
  home: { en: '/', fr: '/fr' },
  product: { en: '/product', fr: '/fr/produit' },
  pilot: { en: '/pilot', fr: '/fr/pilote' },
  about: { en: '/about', fr: '/fr/a-propos' },
  contact: { en: '/contact', fr: '/fr/contact' },
  privacy: { en: '/privacy', fr: '/fr/confidentialite' },
  terms: { en: '/terms', fr: '/fr/conditions' },
};

export function localeFromPath(pathname) {
  return pathname === '/fr' || pathname.startsWith('/fr/') ? 'fr' : 'en';
}

export function pageFromPath(pathname) {
  const normalized = pathname !== '/' && pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
  return Object.entries(routeRegistry).find(([, paths]) => Object.values(paths).includes(normalized))?.[0] || 'home';
}

export function localizedPath(page, locale) {
  return routeRegistry[page]?.[locale] || routeRegistry.home[locale];
}

export function alternatePath(pathname, locale) {
  return localizedPath(pageFromPath(pathname), locale);
}
