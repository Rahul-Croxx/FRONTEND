import { useTranslation } from 'react-i18next';
import React, { useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import './Footprint.css';
import earthFootprint from '../assets/earth_footprint.jpg';

function Footprint() {
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="footprint-page">
      {/* Hero Header */}
      <div className="page-hero-banner" style={{ width: '100vw', height: '80vh', minHeight: '600px', marginLeft: 'calc(-50vw + 50%)', position: 'relative' }}>
        <img 
          src={earthFootprint} 
          alt="Earth Carbon Footprint" 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>

      <div className="footprint-container">
        <div className="footprint-content-wrapper">
          <div className="footprint-main-content">
            <h1 className="footprint-title">
              {t("footprint.title1")}<br />
              {t("footprint.title2")}
            </h1>

            <div className="footprint-text-section">
              <p><strong>{t("footprint.certTitle")}</strong><br />
              {t("footprint.certDesc")}</p>

              <p><strong>{t("footprint.whatTitle")}</strong><br />
              {t("footprint.whatDesc")}</p>

              <p><strong>{t("footprint.howTitle")}</strong><br />
              {t("footprint.howDesc")}</p>

              <ul className="footprint-list">
                <li><ChevronRight size={16} color="#dd6f15" /> <span><strong>{t("footprint.rawMaterials")}</strong> {t("footprint.rawDesc")}</span></li>
                <li><ChevronRight size={16} color="#dd6f15" /> <span><strong>{t("footprint.mfg")}</strong> {t("footprint.mfgDesc")}</span></li>
                <li><ChevronRight size={16} color="#dd6f15" /> <span><strong>{t("footprint.transport")}</strong> {t("footprint.transDesc")}</span></li>
                <li><ChevronRight size={16} color="#dd6f15" /> <span><strong>{t("footprint.app")}</strong> {t("footprint.appDesc")}</span></li>
              </ul>

              <p><strong>{t("footprint.reduceTitle")}</strong><br />
              {t("footprint.reduceDescActual")}</p>

              <p><strong>{t("footprint.benefitsTitle")}</strong></p>
              <ul className="footprint-list">
                <li><ChevronRight size={16} color="#dd6f15" /> <span><strong>{t("footprint.emissionReporting")}</strong> {t("footprint.emissionReportingDesc")}</span></li>
                <li><ChevronRight size={16} color="#dd6f15" /> <span><strong>{t("footprint.supplyChain")}</strong> {t("footprint.supplyChainDesc")}</span></li>
                <li><ChevronRight size={16} color="#dd6f15" /> <span><strong>{t("footprint.respComm")}</strong> {t("footprint.respCommDesc")}</span></li>
              </ul>

              <p className="footprint-highlight">
                <strong>{t("footprint.uponRequest")}</strong>
              </p>

              <div className="inquiries-section">
                <p><strong>{t("footprint.inquiries")}</strong></p>
                <a href="mailto:co2@croxx-fertilizer.de" className="inquiry-btn">co2@croxx-fertilizer.de</a>
              </div>
            </div>
          </div>
          
          <div className="footprint-sidebar">
            <img src="/images/carbon-footprint-iso14067.svg" alt="Product Carbon Footprint – ISO 14067:2018, calculated and verified" className="footprint-badge" width="320" height="320" />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Footprint;
