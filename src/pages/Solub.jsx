import { useTranslation } from 'react-i18next';
import { CONTACT_PHOTO, contactHref } from '../data/contact';
import ProductQR from '../components/ProductQR';
import ProductLink from '../components/ProductLink';
import { findProduct } from '../data/products';
import React, { useEffect } from 'react';
import heroImg from '../assets/croxx_solub_1790246815367.jpg';
import { Link } from 'react-router-dom';
import { ChevronUp } from 'lucide-react';
import './Inhibitors.css'; // Reuse styles from Inhibitors

function Solub() {
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
      name: t("solub.prodName0"), anchor: tEn("solub.prodName0"), subtitle: t("solub.prodSub0"),
      slug: "calcipower",
      pdf: "/files/CroxX_solub_Calcipower.pdf",
      comboLogo: "https://croxx-fertilizer.de/images/_ce.jpg",
      img: "https://croxx-fertilizer.de/images/croxx_solub_calcipower_A1.jpg"
    },
    {
      name: t("solub.prodName1"), anchor: tEn("solub.prodName1"), subtitle: t("solub.prodSub1"),
      slug: "calmagpower",
      pdf: "/files/CroxX_solub_CalMagpower.pdf",
      comboLogo: "https://croxx-fertilizer.de/images/_ce.jpg",
      img: "https://croxx-fertilizer.de/images/croxx_solub_calmagpower_A2.jpg"
    },
    {
      name: t("solub.prodName3"), anchor: tEn("solub.prodName3"), subtitle: t("solub.prodSub2"),
      slug: "13-40-13",
      pdf: "/files/CroxX_solub_13_40_13.pdf",
      comboLogo: "https://croxx-fertilizer.de/images/_ce.jpg",
      img: "https://croxx-fertilizer.de/images/croxx_solub.jpg"
    },
    {
      name: t("solub.prodName4"), anchor: tEn("solub.prodName4"), subtitle: t("solub.prodSub2"),
      slug: "19-19-19",
      pdf: "/files/CroxX_solub_19_19_19.pdf",
      comboLogo: "https://croxx-fertilizer.de/images/_ce.jpg",
      img: "https://croxx-fertilizer.de/images/croxx_solub.jpg"
    },
    {
      name: t("solub.prodName5"), anchor: tEn("solub.prodName5"), subtitle: t("solub.prodSub2"),
      slug: "0-9-47",
      pdf: "/files/CroxX_solub_0_9_47.pdf",
      comboLogo: "https://croxx-fertilizer.de/images/_ce.jpg",
      img: "https://croxx-fertilizer.de/images/croxx_solub.jpg"
    },
    {
      name: t("solub.prodName6"), anchor: tEn("solub.prodName6"), subtitle: t("solub.prodSub2"),
      slug: "0-39-37",
      pdf: "/files/CroxX_solub_0_39_37.pdf",
      comboLogo: "https://croxx-fertilizer.de/images/_ce.jpg",
      img: "https://croxx-fertilizer.de/images/croxx_solub.jpg"
    },
    {
      name: t("solub.prodName7"), anchor: tEn("solub.prodName7"), subtitle: t("solub.prodSub2"),
      slug: "16-8-24-2mgo",
      pdf: "/files/CroxX_solub_16_8_24_2MgO.pdf",
      comboLogo: "https://croxx-fertilizer.de/images/_ce.jpg",
      img: "https://croxx-fertilizer.de/images/croxx_solub.jpg"
    }
  ];

  return (
    <main className="inhibitors-page">
      {/* Hero Header */}
      <div className="ih-hero-wrapper">
        <div className="ih-hero">
          <div className="ih-hero-img-container">
            <img src={heroImg} alt="CroxX solub Hero" className="ih-hero-img" />
          </div>
          
          <div className="ih-hero-content">
            <p className="ih-subtitle">{t("solub.heroSubtitle")}</p>
            <h1 className="ih-title" style={{ color: '#2b5387' }}>CroxX <span style={{ fontWeight: 'bold' }}>solub</span></h1>
            <p className="ih-desc">{t("solub.heroDesc")}</p>
            <a href="/files/Leaflet_CroxX_Solub.pdf" target="_blank" rel="noopener noreferrer" className="ih-btn-solub">{t("common.leaflet")}</a>
          </div>
        </div>
      </div>

      {/* Products List */}
      <section className="ih-products-section">
        <div className="ih-products-container">
          {products.map((prod, idx) => (
            <div className="ih-product-card" key={idx} id={prod.anchor ? prod.anchor.replace(/\s+/g, "_") : ""}>
              <div className="ih-product-img-wrapper">
                <ProductLink category="solub" slug={prod.slug} className="ih-product-link" aria-label={prod.name}><img src={prod.img} alt={prod.name} className="ih-product-img" /></ProductLink>
              </div>
              <div className="ih-product-info">
                <div className="ih-product-text">
                  <p className="ih-product-cat" dangerouslySetInnerHTML={{ __html: t("solub.prodCat") }}></p>
                  <h2 className="ih-product-name" style={{ color: '#2b5387' }}><ProductLink category="solub" slug={prod.slug} className="ih-product-name-link">{prod.name}</ProductLink></h2>
                  <p className="ih-product-desc">{prod.subtitle}</p>
                  {findProduct("solub", prod.slug)?.packs && (
                    <p className="ih-product-packs"><strong>{t("common.packSizes")}:</strong> {findProduct("solub", prod.slug).packs}</p>
                  )}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
                    <a href={prod.pdf} target="_blank" rel="noopener noreferrer" className="ih-btn-red">{t("inhibitors.details")}</a>
                    <ProductLink category="solub" slug={prod.slug} className="ih-btn-view">{t("common.viewProduct")}</ProductLink>
                    <ProductQR product={findProduct("solub", prod.slug)} label={t("common.scanMobile")} />
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

export default Solub;





