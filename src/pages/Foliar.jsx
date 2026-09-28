import { useTranslation } from 'react-i18next';
import ProductQR from '../components/ProductQR';
import { findProduct } from '../data/products';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronUp } from 'lucide-react';
import './Inhibitors.css'; // Reuse styles from Inhibitors
import heroImg from '../assets/croxx_foliar_1790246785336.jpg';

function Foliar() {
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
      name: t("foliar.prodName0"), anchor: tEn("foliar.prodName0"), subtitle: t("foliar.prodSub0"),
      slug: "10-4-7",
      pdf: "/files/CroxX_foliar_10_4_7.pdf",
      comboLogo: "https://croxx-fertilizer.de/images/10-4-7_Benefit.jpg",
      img: "https://croxx-fertilizer.de/images/croxx_foliar_10_4_7_5l.jpg"
    },
    {
      name: t("foliar.prodName1"), anchor: tEn("foliar.prodName1"), subtitle: t("foliar.prodSub1"),
      slug: "5-5-5",
      pdf: "/files/CroxX_foliar_5_5_5.pdf",
      comboLogo: "https://croxx-fertilizer.de/images/5-5-5_Benefit1.jpg",
      img: "https://croxx-fertilizer.de/images/croxx_foliar_5-5-5_5l.jpg"
    },
    {
      name: t("foliar.prodName2"), anchor: tEn("foliar.prodName2"), subtitle: t("foliar.prodSub2"),
      slug: "n37",
      pdf: "/files/CroxX_foliar_N37.pdf",
      comboLogo: "https://croxx-fertilizer.de/images/n37_Benefit.jpg",
      img: "https://croxx-fertilizer.de/images/croxx_foliar_n37_5l.jpg"
    },
    {
      name: t("foliar.prodName3"), anchor: tEn("foliar.prodName3"), subtitle: t("foliar.prodSub3"),
      slug: "n18-4",
      pdf: "/files/CroxX_foliar_N18_4.pdf",
      comboLogo: "https://croxx-fertilizer.de/images/n184_Benefit1.jpg",
      img: "https://croxx-fertilizer.de/images/croxx_foliar_n184_5l.jpg"
    },
    {
      name: t("foliar.prodName4"), anchor: tEn("foliar.prodName4"), subtitle: t("foliar.prodSub4"),
      slug: "0-30-20",
      pdf: "/files/CroxX_foliar_0_30_20.pdf",
      comboLogo: "https://croxx-fertilizer.de/images/0-30-20_Benefit.jpg",
      img: "https://croxx-fertilizer.de/images/croxx_foliar_0-30-20_5l.jpg"
    },
    {
      name: t("foliar.prodName5"), anchor: tEn("foliar.prodName5"), subtitle: t("foliar.prodSub5"),
      slug: "k46",
      pdf: "/files/CroxX_foliar_K46.pdf",
      comboLogo: "https://croxx-fertilizer.de/images/K46_Benefit.jpg",
      img: "https://croxx-fertilizer.de/images/croxx_foliar_k46_5l.jpg"
    },
    {
      name: t("foliar.prodName6"), anchor: tEn("foliar.prodName6"), subtitle: t("foliar.prodSub6"),
      slug: "calciplus",
      pdf: "/files/CroxX_foliar_CalciPlus.pdf",
      comboLogo: "https://croxx-fertilizer.de/images/calci_plus_Benefit.jpg",
      img: "https://croxx-fertilizer.de/images/croxx_foliar_calciplus_5l.jpg"
    },
    {
      name: t("foliar.prodName7"), anchor: tEn("foliar.prodName7"), subtitle: t("foliar.prodSub7"),
      slug: "cabmg",
      pdf: "/files/CroxX_foliar_CaBMg.pdf",
      comboLogo: "https://croxx-fertilizer.de/images/camg_Benefit.jpg",
      img: "https://croxx-fertilizer.de/images/croxx_foliar_cabmg_plus_5l.jpg"
    },
    {
      name: t("foliar.prodName8"), anchor: tEn("foliar.prodName8"), subtitle: t("foliar.prodSub8"),
      slug: "si15",
      pdf: "/files/CroxX_foliar_Si15.pdf",
      comboLogo: "https://croxx-fertilizer.de/images/SI15_Benefit1.jpg",
      img: "https://croxx-fertilizer.de/images/croxx_foliar_si_15_5l.jpg"
    }
  ];

  return (
    <main className="inhibitors-page">
      {/* Hero Header */}
      <div className="ih-hero-wrapper">
        <div className="ih-hero">
          <div className="ih-hero-img-container">
            <img src={heroImg} alt="CroxX foliar Hero" className="ih-hero-img" />
          </div>
          
          <div className="ih-hero-content">
            <p className="ih-subtitle">{t("foliar.heroSubtitle")}</p>
            <h1 className="ih-title" style={{ color: '#aa4f26' }}>CroxX <span style={{ fontWeight: 'bold' }}>foliar</span></h1>
            <p className="ih-desc">{t("foliar.heroDesc")}</p>
            <a href="/files/Leaflet_CroxX_Foliar-Fertilizers.pdf" target="_blank" rel="noopener noreferrer" className="ih-btn-foliar">{t("common.leaflet")}</a>
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
                  <p className="ih-product-cat" dangerouslySetInnerHTML={{ __html: t("foliar.prodCat") }}></p>
                  <h2 className="ih-product-name" style={{ color: '#aa4f26' }}>{prod.name}</h2>
                  <p className="ih-product-desc">{prod.subtitle}</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
                    <a href={prod.pdf} target="_blank" rel="noopener noreferrer" className="ih-btn-red">{t("inhibitors.details")}</a>
                    <ProductQR product={findProduct("foliar", prod.slug)} label={t("common.scanMobile")} />
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

export default Foliar;




