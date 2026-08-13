import { useEffect, useState } from 'react';
import { NavLink, Outlet, Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PageMeta from './PageMeta';
import { alternatePath, localeFromPath, localizedPath, pageFromPath } from '../i18n/routes';

const navItems = ['product', 'pilot', 'about', 'contact'];

function rememberLocale(locale) {
  try { localStorage.setItem('kahyrah-language', locale); } catch { /* URL routing still preserves the active locale. */ }
}

function Brand({ locale }) {
  return <Link to={localizedPath('home', locale)} className="brand" aria-label="Kahyrah"><span className="brand-mark" aria-hidden="true"><span /><span /><span /></span><span>Kahyrah</span></Link>;
}

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const { t, i18n } = useTranslation();
  const locale = localeFromPath(pathname);
  const page = pageFromPath(pathname);

  useEffect(() => {
    if (i18n.resolvedLanguage !== locale) i18n.changeLanguage(locale);
    document.documentElement.lang = locale;
    rememberLocale(locale);
    setMenuOpen(false);
  }, [i18n, locale, pathname]);

  useEffect(() => {
    if (!menuOpen) return undefined;
    function handleEscape(event) { if (event.key === 'Escape') setMenuOpen(false); }
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [menuOpen]);

  return <div className="site-shell">
    <PageMeta page={page} locale={locale} path={pathname} />
    <a className="skip-link" href="#main-content">{t('common.skip')}</a>
    <header className="site-header"><div className="container header-inner">
      <Brand locale={locale} />
      <button className="menu-toggle" type="button" aria-label={t(menuOpen ? 'common.closeNav' : 'common.openNav')} aria-controls="main-navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}><span /><span /></button>
      <nav id="main-navigation" className={menuOpen ? 'site-nav is-open' : 'site-nav'} aria-label={t('common.mainNav')}>
        <div className="nav-links">{navItems.map((item) => <NavLink key={item} to={localizedPath(item, locale)} className={({ isActive }) => isActive ? 'active' : ''}>{t(`navigation.${item}`)}</NavLink>)}</div>
        <div className="language-switcher" aria-label={t('common.language')}><Link to={alternatePath(pathname, 'en')} lang="en" aria-current={locale === 'en' ? 'page' : undefined} onClick={() => rememberLocale('en')}>EN</Link><span aria-hidden="true">|</span><Link to={alternatePath(pathname, 'fr')} lang="fr" aria-current={locale === 'fr' ? 'page' : undefined} onClick={() => rememberLocale('fr')}>FR</Link></div>
        <Link className="button button-primary header-cta" to={localizedPath('contact', locale)}>{t('common.requestPilot')}</Link>
      </nav>
    </div></header>
    <main id="main-content"><Outlet /></main>
    <footer className="site-footer">
      <div className="container footer-grid"><div><Brand locale={locale} /><p className="footer-intro">{t('footer.intro')}</p></div><div className="footer-links">
        <div><strong>{t('footer.explore')}</strong><Link to={localizedPath('product', locale)}>{t('footer.product')}</Link><Link to={localizedPath('pilot', locale)}>{t('footer.pilot')}</Link><Link to={localizedPath('about', locale)}>{t('footer.about')}</Link></div>
        <div><strong>{t('footer.company')}</strong><Link to={localizedPath('contact', locale)}>{t('footer.contact')}</Link><Link to={localizedPath('privacy', locale)}>{t('footer.privacy')}</Link><Link to={localizedPath('terms', locale)}>{t('footer.terms')}</Link></div>
        <div><strong>{t('footer.email')}</strong><a href="mailto:pilots@kahyrah.com">pilots@kahyrah.com</a><a href="mailto:contact@kahyrah.com">contact@kahyrah.com</a></div>
      </div></div>
      <div className="container footer-bottom"><span>{t('footer.copyright', { year: new Date().getFullYear() })}</span><span>{t('footer.builtFor')}</span></div>
    </footer>
  </div>;
}
