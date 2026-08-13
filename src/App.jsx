import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Product from './pages/Product';
import Pilot from './pages/Pilot';
import About from './pages/About';
import Contact from './pages/Contact';
import { Privacy, Terms } from './pages/Legal';
import { routeRegistry } from './i18n/routes';

const pageComponents = { home: Home, product: Product, pilot: Pilot, about: About, contact: Contact, privacy: Privacy, terms: Terms };

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          {Object.entries(routeRegistry).flatMap(([page, paths]) => Object.entries(paths).map(([locale, path]) => {
            const Page = pageComponents[page];
            return <Route key={`${locale}-${page}`} path={path} element={<Page />} />;
          }))}
        </Route>
      </Routes>
    </>
  );
}
