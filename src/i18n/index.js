import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './messages/en.json';
import fr from './messages/fr.json';
import { localeFromPath } from './routes';

try {
  if (window.location.pathname === '/' && window.localStorage.getItem('kahyrah-language') === 'fr') {
    window.history.replaceState(null, '', '/fr');
  }
} catch {
  // The locale in the URL remains authoritative when storage is unavailable.
}

i18n.use(initReactI18next).init({
  resources: { en: { translation: en }, fr: { translation: fr } },
  lng: localeFromPath(window.location.pathname),
  fallbackLng: 'en',
  supportedLngs: ['en', 'fr'],
  interpolation: { escapeValue: false },
});

export default i18n;
