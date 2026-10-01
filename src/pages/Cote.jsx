import { useTranslation } from 'react-i18next';
import { CONTACT_PHOTO, contactHref } from '../data/contact';
import ProductQR from '../components/ProductQR';
import { findProduct } from '../data/products';
import React, { useEffect } from 'react';
import heroImg from '../assets/croxx_cote_1790246872862.jpg';
import { Link } from 'react-router-dom';
import { ChevronUp } from 'lucide-react';
import './Inhibitors.css'; // Reuse styles from Inhibitors

function Cote() {
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
      name: t("cote.prodName0"), anchor: tEn("cote.prodName0"), subtitle: t("cote.prodSub0"),
      slug: "cote",
      pdf: "/files/CroxX_cote.pdf",
      comboLogo: "",
      img: "https://croxx-fertilizer.de/images/croxx_cote_A2.jpg"
    }
  ];

  return (
    <main className="inhibitors-page">
      {/* Hero Header */}
      <div className="ih-hero-wrapper">
        <div className="ih-hero">
          <div className="ih-hero-img-container">
            <img src={heroImg} alt="CroxX cote Hero" className="ih-hero-img" />
          </div>
          
          <div className="ih-hero-content">
            <p className="ih-subtitle">{t("cote.heroSubtitle")}</p>
            <h1 className="ih-title" style={{ color: '#a64a85' }}>CroxX <span style={{ fontWeight: 'bold' }}>cote</span></h1>
            <p className="ih-desc">{t("cote.heroDesc")}</p>
            <a href="/downloads#specialty_fertilizers" className="ih-btn-cote">{t("common.leaflet")}</a>
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
                  <p className="ih-product-cat" dangerouslySetInnerHTML={{ __html: t("cote.prodCat") }}></p>
                  <h2 className="ih-product-name" style={{ color: '#a64a85' }}>{prod.name}</h2>
                  <p className="ih-product-desc">{prod.subtitle}</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
                    <a href={prod.pdf} target="_blank" rel="noopener noreferrer" className="ih-btn-red">{t("inhibitors.details")}</a>
                    <ProductQR product={findProduct("cote", prod.slug)} label={t("common.scanMobile")} />
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
            <a href={contactHref()} className="btn-outline-contact">{t("inhibitors.contactBtn")}</a>
          </div>
          <div className="ih-contact-right animate-on-scroll">
            <img src={CONTACT_PHOTO} alt={t("inhibitors.contactBtn")} className="ih-contact-img" />
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

export default Cote;





