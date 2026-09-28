import { useTranslation } from 'react-i18next';
import ProductQR from '../components/ProductQR';
import { findProduct } from '../data/products';
import React, { useEffect } from 'react';
import heroImg from '../assets/croxx_microgran_1790246860403.jpg';
import { Link } from 'react-router-dom';
import { ChevronUp } from 'lucide-react';
import './Inhibitors.css'; // Reuse styles from Inhibitors

function Microgran() {
  const { t, i18n } = useTranslation();
  const tEn = i18n.getFixedT('en');
  useEffect(() => {
    window.scrollTo(0, 0);
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
      name: t("microgran.prodName0"), anchor: tEn("microgran.prodName0"), subtitle: t("microgran.prodSub0"),
      slug: "kickstart-10-45",
      pdf: "/files/CroxX_microgran_Kickstart_10_45.pdf",
      comboLogo: "https://croxx-fertilizer.de/images/_ce.jpg",
      img: "https://croxx-fertilizer.de/images/croxx_microgran_kickstart.jpg"
    }
  ];

  return (
    <main className="inhibitors-page">
      {/* Hero Header */}
      <div className="ih-hero-wrapper">
        <div className="ih-hero">
          <div className="ih-hero-img-container">
            <img src={heroImg} alt="CroxX microgran Hero" className="ih-hero-img" />
          </div>
          
          <div className="ih-hero-content">
            <p className="ih-subtitle">{t("microgran.heroSubtitle")}</p>
            <h1 className="ih-title" style={{ color: '#5f2c2c' }}>CroxX <span style={{ fontWeight: 'bold' }}>microgran</span></h1>
            <p className="ih-desc">{t("microgran.heroDesc")}</p>
            <a href="/downloads#specialty_fertilizers" className="ih-btn-microgran">{t("common.leaflet")}</a>
          </div>
        </div>
      </div>

      {/* Products List */}
      <section className="ih-products-section">
        <div className="ih-products-container">
          {products.map((prod, idx) => (
            <div className="ih-product-card" key={idx} id={prod.anchor ? prod.anchor.replace(/\s+/g, "_") : ""}>
              <div className="ih-product-img-wrapper">
                <img src={prod.img} alt={prod.name} className="ih-product-img" />
              </div>
              <div className="ih-product-info">
                <div className="ih-product-text">
                  <p className="ih-product-cat" dangerouslySetInnerHTML={{ __html: t("microgran.prodCat") }}></p>
                  <h2 className="ih-product-name" style={{ color: '#5f2c2c' }}>{prod.name}</h2>
                  <p className="ih-product-desc">{prod.subtitle}</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
                    <a href={prod.pdf} target="_blank" rel="noopener noreferrer" className="ih-btn-red">{t("inhibitors.details")}</a>
                    <ProductQR product={findProduct("microgran", prod.slug)} label={t("common.scanMobile")} />
                  </div>
                </div>
                <div className="ih-product-logos">
                  {prod.comboLogo && (
                    <img src={prod.comboLogo} alt={prod.name + " Certifications"} className="ih-logo-combo" />
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
          <Link to="/inhibitors" className="ih-cat-pill">{t("nav.inhibitors")}</Link>
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

export default Microgran;





