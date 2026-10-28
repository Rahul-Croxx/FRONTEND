import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import './PrivacyPolicy.css';
import { COMPANY_INDIA, COMPANY_GERMANY } from '../data/contact';

// Privacy notice of CroxX GmbH & Co. KG – linked for reference only
const GERMANY_PRIVACY_URL = `${COMPANY_GERMANY.website}/datenschutz.html`;

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
              <p><strong>{t("privacy.nameLabel")}</strong> {COMPANY_INDIA.legalName}</p>
              {COMPANY_INDIA.email && (
                <p><strong>{t("privacy.emailLabel")}</strong> <a href={`mailto:${COMPANY_INDIA.email}`}>{COMPANY_INDIA.email}</a></p>
              )}
              {COMPANY_INDIA.phone && (
                <p><strong>{t("privacy.phoneLabel")}</strong> <a href={`tel:${COMPANY_INDIA.phone.replace(/\s+/g, '')}`}>{COMPANY_INDIA.phone}</a></p>
              )}
              <p><strong>{t("privacy.addressLabel")}</strong> {COMPANY_INDIA.address}</p>
              <p><strong>{t("privacy.hoursLabel")}</strong> {t("privacy.hoursValue")}</p>
            </div>

            <h2>{t("privacy.s9Title")}</h2>
            <p>{t("privacy.s9Body")}</p>

            <p className="last-updated">{t("privacy.lastUpdated")}</p>
          </div>

          {/* CroxX GmbH & Co. KG privacy notice – link to the original for reference */}
          <div className="policy-box policy-box-germany">
            <h2 className="policy-germany-title">{t("privacy.germanyTitle")}</h2>
            <p className="policy-germany-note">{t("privacy.germanyNote")}</p>
            <p>
              <a href={GERMANY_PRIVACY_URL} target="_blank" rel="noopener noreferrer">
                {t("privacy.germanyLink")}
              </a>
            </p>
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
