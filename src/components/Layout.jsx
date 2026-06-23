import { useEffect, useState } from 'react';
import { NavLink, Outlet, Link, useLocation } from 'react-router-dom';

const navItems = [
  { to: '/product', label: 'Product' },
  { to: '/pilot', label: 'Pilot Programme' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

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

  useEffect(() => setMenuOpen(false), [pathname]);

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="container header-inner">
          <Brand />
          <button
            className="menu-toggle"
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
          </button>
          <nav className={menuOpen ? 'site-nav is-open' : 'site-nav'} aria-label="Main navigation">
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

      <main>
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
              <Link to="/product">Council Revenue Platform</Link>
              <Link to="/pilot">Pilot Programme</Link>
              <Link to="/about">About Kahyrah</Link>
            </div>
            <div>
              <strong>Contact</strong>
              <a href="mailto:pilots@kahyrah.com">pilots@kahyrah.com</a>
              <a href="mailto:contact@kahyrah.com">contact@kahyrah.com</a>
              <Link to="/contact">Start a conversation</Link>
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
