import { useTranslation } from 'react-i18next';
import ProductQR from '../components/ProductQR';
import { findProduct } from '../data/products';
import React, { useEffect } from 'react';
import './Inhibitors.css'; // We'll add some specific styles for this page
import { ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';

function Inhibitors() {
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on load

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const products = [
    {
      name: "Uplus⁺",
      subtitle: t("inhibitors.prodSub0"),
      slug: "uplus",
      pdf: "/files/CroxX_Uplus.pdf",
      comboLogo: "https://croxx-fertilizer.de/images/_footprint_ce.jpg",
      img: "https://croxx-fertilizer.de/images/croxx_ibc_Uplus_A1.jpg"
    },
    {
      name: "Nplus⁺",
      subtitle: t("inhibitors.prodSub1"),
      slug: "nplus",
      pdf: "/files/CroxX_Nplus.pdf",
      comboLogo: "https://croxx-fertilizer.de/images/_footprint_ce.jpg",
      img: "https://croxx-fertilizer.de/images/croxx_ibc_Nplus_A1.jpg"
    },
    {
      name: "N2 stabil",
      subtitle: t("inhibitors.prodSub2"),
      slug: "n2-stabil",
      pdf: "/files/CroxX_N2_stabil.pdf",
      comboLogo: "https://croxx-fertilizer.de/images/_footprint_ce.jpg",
      img: "https://croxx-fertilizer.de/images/croxx_ibc_N2_stabil_A1.jpg"
    },
    {
      name: "P-Booster",
      subtitle: t("inhibitors.prodSub3"),
      slug: "p-booster",
      pdf: "/files/CroxX_P_Booster.pdf",
      comboLogo: "https://croxx-fertilizer.de/images/_ce.jpg",
      img: "https://croxx-fertilizer.de/images/croxx_ibc_P-Booster_A1.jpg"
    },
    {
      name: "Phos-N protect",
      subtitle: t("inhibitors.prodSub4"),
      slug: "phos-n-protect",
      pdf: "/files/CroxX_Phos-N_protect.pdf",
      comboLogo: null,
      img: "https://croxx-fertilizer.de/images/croxx_ibc_Phos-Nprotect_A1.jpg"
    },
    {
      name: "protectioN",
      subtitle: t("inhibitors.prodSub5"),
      slug: "protection",
      pdf: "/files/CroxX_ProtectioN.pdf",
      comboLogo: "https://croxx-fertilizer.de/images/_footprint_ce.jpg",
      img: "https://croxx-fertilizer.de/images/croxx_ibc_ProtectioN_A1.jpg"
    },
    {
      name: "Double ProtectioN",
      subtitle: t("inhibitors.prodSub6"),
      slug: "double-protection",
      pdf: "/files/CroxX_Double_ProtectioN.pdf",
      comboLogo: "https://croxx-fertilizer.de/images/_ce.jpg",
      img: "https://croxx-fertilizer.de/images/croxx_ibc_double_protectionN_A1.jpg"
    }
  ];

  return (
    <main className="inhibitors-page">
      {/* Hero Header */}
      <div className="ih-hero-wrapper">
        <div className="ih-hero">
          <div className="ih-hero-img-container">
            <img src="/inhibitors_hero.jpg" alt="Inhibitors Hero" className="ih-hero-img" />
          </div>
          
          <div className="ih-hero-content">
            <p className="ih-subtitle">{t("inhibitors.subtitle")}</p>
            <h1 className="ih-title">{t("inhibitors.title")}</h1>
            <p className="ih-desc">
              {t("inhibitors.desc")}
            </p>
            <a href="/downloads#inhibitors_enhancers" className="ih-btn-primary">{t("common.leaflet")}</a>
          </div>
        </div>
      </div>

      {/* Calculate Section (Reuse from Home) */}
      <section className="calc-section">
        <div className="calc-container animate-on-scroll">
          <div className="calc-left">
            <h2 className="calc-title" dangerouslySetInnerHTML={{__html: t("inhibitors.calcTitle")}}></h2>
            <p className="calc-subtitle">{t("home.calcSubtitle")}</p>
            <a href="#" className="btn-outline-calc">{t("nav.calculator")}</a>
          </div>
          <div className="calc-right">
            <img src="https://croxx-fertilizer.de/images/CroxX_Calculator_App.jpg" alt="CroxX Calculator App" className="calc-img" />
          </div>
        </div>
      </section>

      {/* Products List */}
      <section className="ih-products-section">
        <div className="ih-products-container">
          {products.map((prod, idx) => (
            <div className="ih-product-card" key={idx} id={prod.name ? prod.name.replace(/\s+/g, "_") : ""}>
              <div className="ih-product-img-wrapper">
                <img src={prod.img} alt={prod.name} className="ih-product-img" />
              </div>
              <div className="ih-product-info">
                <div className="ih-product-text">
                  <p className="ih-product-cat">{t("inhibitors.catInhibitors")}</p>
                  <h2 className="ih-product-name">{prod.name}</h2>
                  <p className="ih-product-desc">{prod.subtitle}</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
                  <a href={prod.pdf} target="_blank" rel="noopener noreferrer" className="ih-btn-primary">{t("inhibitors.details")}</a>
                  <ProductQR product={findProduct("inhibitors", prod.slug)} label={t("common.scanMobile")} />
                </div>
                </div>
                <div className="ih-product-logos">
                  {prod.comboLogo && (
                    <img src={prod.comboLogo} alt="Certifications" className="ih-logo-combo" />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Categories Grid */}
      <section className="ih-categories-section">
        <div className="ih-categories-grid">
          <a href="#" className="ih-cat-pill">{t("nav.inhibitors")}</a>
          <Link to="/stim" className="ih-cat-pill">CroxX <strong>stim</strong></Link>
          <Link to="/foliar" className="ih-cat-pill">CroxX <strong>foliar</strong></Link>
          <Link to="/micro" className="ih-cat-pill">CroxX <strong>micro</strong></Link>
          <Link to="/solub" className="ih-cat-pill">CroxX <strong>solub</strong></Link>
          <Link to="/stabil" className="ih-cat-pill">CroxX <strong>stabil</strong></Link>
          <Link to="/gran" className="ih-cat-pill">CroxX <strong>gran</strong></Link>
          <Link to="/microgran" className="ih-cat-pill">CroxX <strong>microgran</strong></Link>
          <Link to="/cote" className="ih-cat-pill">CroxX <strong>cote</strong></Link>
        </div>
      </section>

      {/* Contact Section */}
      <section className="ih-contact-section">
        <div className="ih-contact-container">
          <div className="ih-contact-left">
            <h2 dangerouslySetInnerHTML={{__html: t("inhibitors.needMore")}}></h2>
            <p dangerouslySetInnerHTML={{__html: t("inhibitors.contactDesc")}}></p>
            <a href="#" className="btn-outline-contact">{t("inhibitors.contactBtn")}</a>
          </div>
          <div className="ih-contact-right animate-on-scroll">
            <img src="/contact_office.jpg" alt={t("inhibitors.contactBtn")} className="ih-contact-img" />
          </div>
        </div>
      </section>

      {/* Back to top */}
      <button className="back-to-top" aria-label="Back to top" onClick={() => window.scrollTo(0,0)}>
        <ChevronUp size={24} color="#fff" strokeWidth={3} />
      </button>
    </main>
  );
}

export default Inhibitors;




