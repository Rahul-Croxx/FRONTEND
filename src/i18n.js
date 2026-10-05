import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translation files
import en from './locales/en.json';
import ta from './locales/ta.json';
import ml from './locales/ml.json';
import kn from './locales/kn.json';
import te from './locales/te.json';

const resources = {
  en: { translation: en },
  ta: { translation: ta },
  ml: { translation: ml },
  kn: { translation: kn },
  te: { translation: te }
};

const stateLanguageMap = {
  'Tamil Nadu': 'ta',
  'Puducherry': 'ta',
  'Kerala': 'ml',
  'Karnataka': 'kn',
  'Andhra Pradesh': 'te',
  'Telangana': 'te'
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    supportedLngs: ['en', 'ta', 'ml', 'kn', 'te'],
    load: 'languageOnly',
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
    interpolation: {
      escapeValue: false
    }
  });

// Asynchronously apply Indian State detection if no language is saved in localStorage
if (!localStorage.getItem('i18nextLng')) {
  fetch('https://get.geojs.io/v1/ip/geo.json')
    .then(res => res.json())
    .then(data => {
      if (data && data.country === 'India' && data.region) {
        const lang = stateLanguageMap[data.region];
        // Only change if a state matches and we haven't manually changed it in the meantime
        if (lang && !localStorage.getItem('i18nextLng')) {
          i18n.changeLanguage(lang);
        }
      }
    })
    .catch(err => console.warn('Geolocation detection failed', err));
}

export default i18n;
// Tell the browser (and screen readers / search engines) which language is shown
const setHtmlLang = (lng) => {
  if (typeof document !== 'undefined') document.documentElement.lang = (lng || 'en').split('-')[0];
};
setHtmlLang(i18n.resolvedLanguage || i18n.language);
i18n.on('languageChanged', setHtmlLang);
