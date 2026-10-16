import React, { useEffect, useState } from 'react';
import qrInfo from '../data/qrInfo.json';
import './QrInfo.css';

const CODES = qrInfo.languages.map((l) => l.code);

// "QR Code Info" block (like the reference site): description, technical
// specification table, crop, dose and application – each in English, Tamil,
// Hindi, Telugu or Malayalam, chosen with the tabs at the top.
export function hasQrInfo(product) {
  return Boolean(product && qrInfo.products[`${product.category}/${product.slug}`]);
}

function QrInfo({ product, pageLang, details, accent }) {
  const key = `${product.category}/${product.slug}`;
  const data = qrInfo.products[key];
  const start = CODES.includes(pageLang) ? pageLang : 'en';
  const [lang, setLang] = useState(start);

  // follow the page language when the visitor changes it in the pop-up
  useEffect(() => { if (CODES.includes(pageLang)) setLang(pageLang); }, [pageLang]);

  if (!data) return null;
  const L = qrInfo.labels[lang];
  const pick = (obj) => (obj && (obj[lang] || obj.en)) || '';
  const description = data.description?.[lang] || details?.[lang]?.description || details?.en?.description || '';

  return (
    <section className="qri" style={{ '--qri-accent': accent }} aria-labelledby="qri-heading" lang={lang}>
      <div className="qri-head">
        <h2 id="qri-heading">{L.heading}</h2>
        <div className="qri-tabs" role="tablist" aria-label={L.language}>
          {qrInfo.languages.map((l) => (
            <button
              key={l.code}
              type="button"
              role="tab"
              lang={l.code}
              aria-selected={l.code === lang}
              className={`qri-tab ${l.code === lang ? 'is-active' : ''}`}
              onClick={() => setLang(l.code)}
            >
              {l.native}
            </button>
          ))}
        </div>
      </div>

      {data.gazette && (
        <p className="qri-gazette">
          <span className="qri-gazette-label">{L.gazette}:</span> <strong>{pick(data.gazette)}</strong>
        </p>
      )}

      {description && (
        <div className="qri-block">
          <h3>{L.description}</h3>
          <p>{description}</p>
        </div>
      )}

      <div className="qri-block">
        <h3>{L.spec}: <span className="qri-spec-title">{pick(data.title)}</span></h3>
        <div className="qri-table-wrap">
          <table className="qri-table">
            <thead>
              <tr>
                <th scope="col" className="qri-sno">{L.sno}</th>
                <th scope="col">{L.param}</th>
                <th scope="col" className="qri-val">{L.value}</th>
              </tr>
            </thead>
            <tbody>
              {data.rows.map((r, i) => (
                <tr key={i}>
                  <td className="qri-sno">{i + 1}</td>
                  <td>{pick(r.param)}</td>
                  <td className="qri-val">{r.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <dl className="qri-facts">
        <div><dt>{L.crop}</dt><dd>{pick(data.crop)}</dd></div>
        <div><dt>{L.dose}</dt><dd>{pick(data.dose)}</dd></div>
        <div><dt>{L.application}</dt><dd>{pick(data.application)}</dd></div>
      </dl>
    </section>
  );
}

export default QrInfo;
