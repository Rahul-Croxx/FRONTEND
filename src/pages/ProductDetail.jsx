import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ChevronUp, Globe, Check } from 'lucide-react';
import { findProduct, CATEGORIES } from '../data/products';
import ProductQR from '../components/ProductQR';
import './Inhibitors.css'; // existing product card styles
import './ProductDetail.css';

// Languages offered in the pop-up (native name first so farmers recognise their language)
const LANGUAGES = [
  { code: 'ta', native: 'தமிழ்', english: 'Tamil' },
  { code: 'ml', native: 'മലയാളം', english: 'Malayalam' },
  { code: 'kn', native: 'ಕನ್ನಡ', english: 'Kannada' },
  { code: 'te', native: 'తెలుగు', english: 'Telugu' },
  { code: 'en', native: 'English', english: 'English' },
];

// Shown before any language is chosen, so it is written in all four languages
const SELECT_TITLES = [
  'மொழியைத் தேர்ந்தெடுக்கவும்',
  'ഭാഷ തിരഞ്ഞെടുക്കുക',
  'ಭಾಷೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ',
  'భాషను ఎంచుకోండి',
  'Select your language',
];

// The language chosen in the pop-up becomes the website language (so the header
// language button always matches what the farmer sees). The pop-up remembers the
// choice for this browser tab so it can be highlighted next time.
const SESSION_KEY = 'croxxProductLang';

const readSessionLang = () => {
  try { return sessionStorage.getItem(SESSION_KEY); } catch { return null; }
};
const writeSessionLang = (code) => {
  try { sessionStorage.setItem(SESSION_KEY, code); } catch { /* ignore */ }
};

function LanguageModal({ product, category, current, onSelect, tEn }) {
  const sheetRef = useRef(null);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    sheetRef.current?.focus();
    return () => { document.body.style.overflow = prev; };
  }, []);

  const productName = product.name || tEn(product.nameKey);

  return (
    <div className="pd-lang-overlay" role="dialog" aria-modal="true" aria-labelledby="pd-lang-title">
      <div className="pd-lang-sheet" ref={sheetRef} tabIndex={-1}>
        <div className="pd-lang-product">
          <img src={product.img} alt="" className="pd-lang-thumb" />
          <div>
            <p className="pd-lang-brand" dangerouslySetInnerHTML={{ __html: tEn(category.catKey) }}></p>
            <p className="pd-lang-name" style={{ color: category.nameColor }}>{productName}</p>
          </div>
        </div>

        <div id="pd-lang-title" className="pd-lang-titles">
          <Globe size={22} aria-hidden="true" />
          <div>
            {SELECT_TITLES.map((title) => <span key={title}>{title}</span>)}
          </div>
        </div>

        <div className="pd-lang-options">
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              type="button"
              lang={lang.code}
              className={`pd-lang-btn ${current === lang.code ? 'is-current' : ''}`}
              style={{ '--pd-accent': category.accent }}
              onClick={() => onSelect(lang.code)}
            >
              <span className="pd-lang-native">{lang.native}</span>
              {lang.native !== lang.english && <span className="pd-lang-english">{lang.english}</span>}
              {current === lang.code && <Check size={20} className="pd-lang-check" aria-hidden="true" />}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProductDetail() {
  const { category: categoryId, slug } = useParams();
  const { i18n } = useTranslation();
  const product = findProduct(categoryId, slug);
  const category = product ? CATEGORIES[product.category] : null;

  const [lang, setLang] = useState(null);           // null = not chosen yet -> pop-up is shown
  const [showPicker, setShowPicker] = useState(true);
  const [details, setDetails] = useState(null);

  // A fresh visit (or a new product) always starts with the language pop-up
  useEffect(() => {
    window.scrollTo(0, 0);
    setLang(null);
    setShowPicker(true);
  }, [categoryId, slug]);

  // Product texts are loaded only on this page, to keep the rest of the site fast
  useEffect(() => {
    let alive = true;
    import('../data/productDetails.json').then((mod) => {
      if (alive) setDetails(mod.default || mod);
    });
    return () => { alive = false; };
  }, []);

  // Page-only translator: does not change the site-wide language
  const t = useMemo(() => i18n.getFixedT(lang || 'en'), [i18n, lang]);
  const tEn = useMemo(() => i18n.getFixedT('en'), [i18n]);

  const handleSelect = (code) => {
    writeSessionLang(code);
    setLang(code);
    setShowPicker(false);
    window.scrollTo(0, 0);
    // keep the whole site (header, menu, footer) in the same language
    if (i18n.resolvedLanguage !== code) {
      i18n.changeLanguage(code);
      try { localStorage.setItem('i18nextLng', code); } catch { /* ignore */ }
    }
  };

  // Language changed with the header's language button → update this page too
  useEffect(() => {
    const onChange = (lng) => {
      const code = (lng || 'en').split('-')[0];
      if (!['en', 'ta', 'ml', 'kn', 'te'].includes(code)) return;
      writeSessionLang(code);
      setLang(code);
      setShowPicker(false);
    };
    i18n.on('languageChanged', onChange);
    return () => i18n.off('languageChanged', onChange);
  }, [i18n]);

  if (!product) {
    return (
      <main className="inhibitors-page pd-page">
        <div className="pd-not-found">
          <p>{tEn('productPage.notFound')}</p>
          <Link to="/" className="ih-btn-primary">{tEn('nav.home')}</Link>
        </div>
      </main>
    );
  }

  const info = details?.[`${product.category}/${product.slug}`];
  const text = info && lang ? (info[lang] || info.en) : null;
  const name = product.name || t(product.nameKey);

  return (
    <main className="inhibitors-page pd-page">
      {showPicker && (
        <LanguageModal
          product={product}
          category={category}
          current={lang || readSessionLang()}
          onSelect={handleSelect}
          tEn={tEn}
        />
      )}

      {/* Nothing about the product is shown until a language has been chosen */}
      {lang && (
        <section className="ih-products-section pd-section" lang={lang}>
          <div className="ih-products-container">
            <div className="pd-toolbar">
              <Link to={category.route} className="pd-back">← {t('productPage.backToCategory')}</Link>
              <button type="button" className="pd-change-lang" onClick={() => setShowPicker(true)}>
                <Globe size={18} aria-hidden="true" />
                <span>{LANGUAGES.find((l) => l.code === lang)?.native}</span>
                <span className="pd-change-lang-label">· {t('productPage.changeLanguage')}</span>
              </button>
            </div>

            <div className="ih-product-card" id={`${product.category}-${product.slug}`}>
              <div className="ih-product-img-wrapper">
                <img src={product.img} alt={name} className="ih-product-img" />
              </div>
              <div className="ih-product-info">
                <div className="ih-product-text">
                  <p className="ih-product-cat" dangerouslySetInnerHTML={{ __html: t(category.catKey) }}></p>
                  <h1 className="ih-product-name" style={{ color: category.nameColor }}>{name}</h1>
                  <p className="ih-product-desc">{t(product.subKey)}</p>
                  <div className="pd-actions">
                    <a href={product.pdf} target="_blank" rel="noopener noreferrer" className={category.btnClass}>{t('inhibitors.details')}</a>
                    <ProductQR product={product} label={t('common.scanMobile')} />
                  </div>
                </div>
                {product.logo && (
                  <div className="ih-product-logos">
                    <img src={product.logo} alt={`${name} – ${t('productPage.benefits')}`} className="ih-logo-combo" />
                  </div>
                )}
              </div>
            </div>

            {!text ? (
              <p className="pd-loading">…</p>
            ) : (
              <div className="pd-details" style={{ '--pd-accent': category.accent }}>
                {text.description && (
                  <div className="pd-block">
                    <h2>{t('productPage.description')}</h2>
                    <p>{text.description}</p>
                  </div>
                )}
                {text.application && (
                  <div className="pd-block">
                    <h2>{t('productPage.application')}</h2>
                    <p>{text.application}</p>
                  </div>
                )}
                {text.benefits?.length > 0 && (
                  <div className="pd-block pd-block-wide">
                    <h2>{t('productPage.benefits')}</h2>
                    <ul className="pd-benefits">
                      {text.benefits.map((b, i) => (
                        <li key={i}><Check size={18} className="pd-tick" aria-hidden="true" /><span>{b}</span></li>
                      ))}
                    </ul>
                  </div>
                )}
                {text.content?.length > 0 && (
                  <div className="pd-block">
                    <h2>{t('productPage.content')}</h2>
                    <ul className="pd-plain-list">
                      {text.content.map((c, i) => <li key={i}>{c}</li>)}
                    </ul>
                  </div>
                )}
                {(text.properties?.length > 0 || text.packaging) && (
                  <div className="pd-block">
                    {text.properties?.length > 0 && (
                      <>
                        <h2>{t('productPage.properties')}</h2>
                        <ul className="pd-plain-list">
                          {text.properties.map((p, i) => <li key={i}>{p}</li>)}
                        </ul>
                      </>
                    )}
                    {text.packaging && (
                      <>
                        <h2>{t('productPage.packaging')}</h2>
                        <p className="pd-packaging">{text.packaging}</p>
                      </>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        </section>
      )}

      <button className="back-to-top" aria-label="Back to top" onClick={() => window.scrollTo(0, 0)}>
        <ChevronUp size={24} color="#fff" strokeWidth={3} />
      </button>
    </main>
  );
}

export default ProductDetail;
