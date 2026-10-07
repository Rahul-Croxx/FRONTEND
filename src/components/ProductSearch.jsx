import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Search, X } from 'lucide-react';
import { PRODUCTS, CATEGORIES, productPath } from '../data/products';
import './ProductSearch.css';

// Remove HTML tags (category names contain <strong>) and accents, lower-case.
const clean = (s) => (s || '')
  .replace(/<[^>]*>/g, ' ')
  .normalize('NFKD').replace(/[̀-ͯ]/g, '')
  .toLowerCase();

// Product search box for the navigation bar. Matches product name, product line
// (e.g. "stim", "foliar") and description, in the chosen language and in English.
function ProductSearch({ onNavigate }) {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const boxRef = useRef(null);

  const index = useMemo(() => {
    const tEn = i18n.getFixedT('en');
    return PRODUCTS.map((p) => {
      const cat = CATEGORIES[p.category];
      const name = p.name || t(p.nameKey);
      const catLabel = t(cat.catKey).replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
      const text = clean([
        name, p.name || tEn(p.nameKey), catLabel, clean(tEn(cat.catKey)),
        p.subKey ? t(p.subKey) : '', p.subKey ? tEn(p.subKey) : '', p.slug.replace(/-/g, ' '),
      ].join(' '));
      return { product: p, name, catLabel, text, nameText: clean(name), catText: clean(catLabel + ' ' + tEn(cat.catKey)) };
    });
  }, [t, i18n, i18n.resolvedLanguage]);

  const results = useMemo(() => {
    const words = clean(query).split(/\s+/).filter(Boolean);
    if (!words.length) return [];
    return index
      .filter((item) => words.every((w) => item.text.includes(w)))
      .map((item) => ({
        ...item,
        // best: all words in the product name; next: in the product line (e.g. "micro"); then description
        score: words.every((w) => item.nameText.includes(w)) ? 0
          : words.every((w) => item.nameText.includes(w) || item.catText.includes(w)) ? 1 : 2,
      }))
      .sort((a, b) => a.score - b.score)
      .slice(0, 8);
  }, [query, index]);

  useEffect(() => { setActive(0); }, [query]);

  useEffect(() => {
    const onDown = (e) => { if (boxRef.current && !boxRef.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', onDown);
    document.addEventListener('touchstart', onDown);
    return () => {
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('touchstart', onDown);
    };
  }, []);

  const go = (item) => {
    navigate(productPath(item.product));
    setQuery('');
    setOpen(false);
    if (onNavigate) onNavigate();
  };

  const onKeyDown = (e) => {
    if (e.key === 'ArrowDown') { e.preventDefault(); setOpen(true); setActive((a) => Math.min(a + 1, results.length - 1)); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); setActive((a) => Math.max(a - 1, 0)); }
    else if (e.key === 'Enter' && results[active]) { e.preventDefault(); go(results[active]); }
    else if (e.key === 'Escape') { setOpen(false); }
  };

  const showList = open && query.trim().length > 0;

  return (
    <div className="product-search" ref={boxRef} role="search">
      <Search size={17} className="ps-icon" aria-hidden="true" />
      <input
        type="search"
        className="ps-input"
        value={query}
        placeholder={t('header.searchPlaceholder')}
        aria-label={t('header.searchPlaceholder')}
        aria-expanded={showList}
        aria-controls="product-search-results"
        aria-autocomplete="list"
        role="combobox"
        onChange={(e) => { setQuery(e.target.value); setOpen(true); }}
        onFocus={() => setOpen(true)}
        onKeyDown={onKeyDown}
      />
      {query && (
        <button type="button" className="ps-clear" aria-label="Clear search" onClick={() => { setQuery(''); setOpen(false); }}>
          <X size={16} />
        </button>
      )}
      {showList && (
        <ul className="ps-results" id="product-search-results" role="listbox">
          {results.length === 0 && <li className="ps-empty">{t('header.searchNoResults')}</li>}
          {results.map((item, i) => (
            <li key={`${item.product.category}/${item.product.slug}`} role="option" aria-selected={i === active}>
              <button
                type="button"
                className={`ps-result ${i === active ? 'is-active' : ''}`}
                onMouseEnter={() => setActive(i)}
                onClick={() => go(item)}
              >
                <span className="ps-dot" style={{ background: CATEGORIES[item.product.category].accent }} aria-hidden="true"></span>
                <span className="ps-result-text">
                  <span className="ps-name">{item.name}</span>
                  <span className="ps-cat">{item.catLabel}</span>
                </span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ProductSearch;
