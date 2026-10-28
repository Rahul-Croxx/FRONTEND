import { useTranslation } from 'react-i18next';
import React, { useEffect } from 'react';
import './Company.css';
import { ChevronUp } from 'lucide-react';

function Company() {
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on load
  }, []);

  return (
    <main className="company-page">
      {/* Hero Header */}
      <div className="company-hero-container">
        <img src="/images/company-warehouse.jpg" alt="CroxX at the Münster harbour" className="company-hero-img" />
      </div>

      <div className="company-content-container">
        <div className="company-left">
          <h1 className="company-title">{t("home.aboutTitle")}</h1>
          
          <p className="company-text-bold">
            {t("home.aboutP1")}
          </p>

          <p className="company-text">
            {t("home.aboutP2")}
          </p>

          <p className="company-text">
            {t("home.aboutP3")}
          </p>

          <h3 className="company-subtitle">{t("company.inhibitorsTitle")}</h3>
          <p className="company-text">
            {t("company.inhibitorsDesc")}
          </p>

          <h3 className="company-subtitle">{t("company.specialtyTitle")}</h3>
          <p className="company-text">
            {t("company.portfolioDesc")}
          </p>

          <h3 className="company-subtitle">{t("company.chooseTitle")}</h3>
          <p className="company-text">
            {t("company.chooseDesc")}
          </p>

          <div className="wocklum-section">
            <p className="wocklum-text">{t("company.wocklum")}</p>
            
          </div>
        </div>

        <div className="company-right">

          <img src="/images/croxx_logo.svg" alt="CroxX Logo" className="croxx-logo-large" />
        </div>
      </div>

      {/* Footer Image Gallery */}
      <div className="company-gallery-container">
        <img src="/images/wocklum-tank.jpg" alt="Wocklum Chemie tank" className="gallery-img" loading="lazy" />
        <img src="/images/wocklum-factory-aerial.jpg" alt="Wocklum Chemie factory – aerial view" className="gallery-img" loading="lazy" />
      </div>

      {/* Back to top */}
      <button className="back-to-top" aria-label="Back to top" onClick={() => window.scrollTo(0,0)}>
        <ChevronUp size={24} color="#fff" strokeWidth={3} />
      </button>
    </main>
  );
}

export default Company;




