import { useTranslation } from 'react-i18next';
import React, { useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import './PrivacyPolicy.css';
import { PRIVACY_GERMANY, PRIVACY_GERMANY_VERSION } from '../data/privacyGermany';

// Turns "[text](url)" into links and line breaks into <br />
function RichText({ text }) {
  const lines = text.split('\n');
  return lines.map((line, li) => {
    const parts = [];
    const re = /\[([^\]]+)\]\(([^)]+)\)/g;
    let last = 0, m;
    while ((m = re.exec(line))) {
      if (m.index > last) parts.push(line.slice(last, m.index));
      parts.push(<a key={m.index} href={m[2]} target="_blank" rel="noopener noreferrer">{m[1]}</a>);
      last = re.lastIndex;
    }
    if (last < line.length) parts.push(line.slice(last));
    return <React.Fragment key={li}>{parts}{li < lines.length - 1 && <br />}</React.Fragment>;
  });
}

function PrivacyPolicy() {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Returns an array from the translation file (empty array if missing)
  const list = (key) => {
    const value = t(key, { returnObjects: true });
    return Array.isArray(value) ? value : [];
  };

  const renderList = (key) => (
    <ul>
      {list(key).map((item, idx) =>
        typeof item === 'string'
          ? <li key={idx}>{item}</li>
          : <li key={idx}><strong>{item.label}</strong> {item.text}</li>
      )}
    </ul>
  );

  return (
    <div className="privacy-policy-page">
      {/* Hero Section */}
      <section className="privacy-hero">
        <div className="privacy-hero-content">
          <h1>{t("privacy.title")}</h1>
          <p>{t("privacy.subtitle")}</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="privacy-content">
        <div className="container">
          <div className="policy-box">
            <h2>{t("privacy.s1Title")}</h2>
            <p>{t("privacy.s1Body")}</p>

            <h2>{t("privacy.s2Title")}</h2>
            <p>{t("privacy.s2Intro")}</p>
            {renderList("privacy.s2Items")}

            <h2>{t("privacy.s3Title")}</h2>
            <p>{t("privacy.s3Intro")}</p>
            {renderList("privacy.s3Items")}

            <h2>{t("privacy.s4Title")}</h2>
            <p>{t("privacy.s4Body")}</p>

            <h2>{t("privacy.s5Title")}</h2>
            <p>{t("privacy.s5Intro")}</p>
            {renderList("privacy.s5Items")}

            <h2>{t("privacy.s6Title")}</h2>
            <p>{t("privacy.s6Body")}</p>

            <h2>{t("privacy.s7Title")}</h2>
            <p>{t("privacy.s7Intro")}</p>
            {renderList("privacy.s7Items")}

            <h2>{t("privacy.s8Title")}</h2>
            <p>{t("privacy.s8Intro")}</p>
            <div className="grievance-contact">
              <p><strong>{t("privacy.nameLabel")}</strong> [Grievance Officer Name]</p>
              <p><strong>{t("privacy.emailLabel")}</strong> privacy@croxx-fertilizer.in</p>
              <p><strong>{t("privacy.addressLabel")}</strong> CroxX India, [Insert India Office Address]</p>
              <p><strong>{t("privacy.hoursLabel")}</strong> {t("privacy.hoursValue")}</p>
            </div>

            <h2>{t("privacy.s9Title")}</h2>
            <p>{t("privacy.s9Body")}</p>

            <p className="last-updated">{t("privacy.lastUpdated")}</p>
          </div>

          {/* Original privacy notice of CroxX GmbH & Co. KG (Germany) */}
          <div className="policy-box policy-box-germany" lang="en">
            <h2 className="policy-germany-title">{t("privacy.germanyTitle")}</h2>
            <p className="policy-germany-note">{t("privacy.germanyNote")}</p>
            <p className="last-updated policy-germany-version">{PRIVACY_GERMANY_VERSION}</p>
            {PRIVACY_GERMANY.map((b, i) => {
              if (b.h) return <h2 key={i}>{b.h}</h2>;
              if (b.h3) return <h3 key={i}>{b.h3}</h3>;
              if (b.ul) return <ul key={i}>{b.ul.map((x, j) => <li key={j}>{x}</li>)}</ul>;
              return <p key={i}><RichText text={b.p} /></p>;
            })}
          </div>
        </div>
      </section>

      {/* Scroll to Top */}
      <button className="scroll-to-top" onClick={scrollToTop} aria-label="Back to top">
        <ChevronUp />
      </button>
    </div>
  );
}

export default PrivacyPolicy;
