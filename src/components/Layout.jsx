import { useEffect, useState } from 'react';
import { NavLink, Outlet, Link, useLocation } from 'react-router-dom';
import PageMeta from './PageMeta';

const navItems = [
  { to: '/product', label: 'Product' },
  { to: '/pilot', label: 'Pilot Programme' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

const pageMetadata = {
  '/': {
    title: 'Council Revenue Management Platform | Kahyrah',
    description: 'Kahyrah gives councils one connected platform for merchant verification, collections, payment recovery, reconciliation, reporting and audit.',
  },
  '/product': {
    title: 'Council Revenue Platform | Kahyrah',
    description: 'Explore Kahyrah’s operational platform for council merchant verification, presence, collections, payment recovery, reconciliation and audit.',
  },
  '/pilot': {
    title: 'Council Revenue Pilot Programme | Kahyrah',
    description: 'Run a focused council revenue operations pilot with structured onboarding, field workflows, measurable outcomes and practical support.',
  },
  '/about': {
    title: 'About Kahyrah | Civic Technology for Councils',
    description: 'Kahyrah builds practical civic technology that gives councils clearer workflows, operational visibility and reliable revenue data.',
  },
  '/contact': {
    title: 'Contact Kahyrah | Request a Council Revenue Pilot',
    description: 'Contact Kahyrah to discuss council revenue operations or request a focused pilot of Council Revenue Platform.',
  },
  '/privacy': {
    title: 'Privacy Policy | Kahyrah',
    description: 'How Kahyrah handles information submitted through its marketing website and email enquiries.',
  },
  '/terms': {
    title: 'Website Terms | Kahyrah',
    description: 'Terms governing access to and use of the Kahyrah marketing website.',
  },
};

function Brand() {
  return (
    <Link to="/" className="brand" aria-label="Kahyrah home">
      <span className="brand-mark" aria-hidden="true">
        <span />
        <span />
        <span />
      </span>
      <span>Kahyrah</span>
    </Link>
  );
}

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const metadata = pageMetadata[pathname] || pageMetadata['/'];

  useEffect(() => setMenuOpen(false), [pathname]);

  useEffect(() => {
    if (!menuOpen) return undefined;

    function handleEscape(event) {
      if (event.key === 'Escape') setMenuOpen(false);
    }

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [menuOpen]);

  return (
    <div className="site-shell">
      <PageMeta {...metadata} path={pathname} />
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <header className="site-header">
        <div className="container header-inner">
          <Brand />
          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
            aria-controls="main-navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
          </button>
          <nav id="main-navigation" className={menuOpen ? 'site-nav is-open' : 'site-nav'} aria-label="Main navigation">
            <div className="nav-links">
              {navItems.map((item) => (
                <NavLink key={item.to} to={item.to} className={({ isActive }) => (isActive ? 'active' : '')}>
                  {item.label}
                </NavLink>
              ))}
            </div>
            <Link className="button button-primary header-cta" to="/contact">
              Request a Pilot
            </Link>
          </nav>
        </div>
      </header>

      <main id="main-content">
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <Brand />
            <p className="footer-intro">
              Modern civic technology for clearer operations, stronger revenue visibility and practical public-sector transformation.
            </p>
          </div>
          <div className="footer-links">
            <div>
              <strong>Explore</strong>
              <Link to="/product">Product</Link>
              <Link to="/pilot">Pilot Programme</Link>
              <Link to="/about">About</Link>
            </div>
            <div>
              <strong>Company</strong>
              <Link to="/contact">Contact</Link>
              <Link to="/privacy">Privacy Policy</Link>
              <Link to="/terms">Terms</Link>
            </div>
            <div>
              <strong>Email</strong>
              <a href="mailto:pilots@kahyrah.com">pilots@kahyrah.com</a>
              <a href="mailto:contact@kahyrah.com">contact@kahyrah.com</a>
            </div>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© {new Date().getFullYear()} Kahyrah. All rights reserved.</span>
          <span>Built for councils and local authorities.</span>
        </div>
      </footer>
    </div>
  );
}
