import { useTranslation } from 'react-i18next';
import { CONTACT_PHOTO, contactHref } from '../data/contact';
import ProductQR from '../components/ProductQR';
import { findProduct } from '../data/products';
import React, { useEffect } from 'react';
import heroImg from '../assets/croxx_micro_1790246799190.jpg';
import { Link } from 'react-router-dom';
import { ChevronUp } from 'lucide-react';
import './Inhibitors.css'; // Reuse styles from Inhibitors

function Micro() {
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
      name: t("micro.prodName0"), anchor: tEn("micro.prodName0"), subtitle: t("micro.prodSub0"),
      slug: "6fe-eddha",
      pdf: "/files/CroxX_micro_6FE_EDDHA.pdf",
      comboLogo: "https://croxx-fertilizer.de/images/_ce.jpg",
      img: "https://croxx-fertilizer.de/images/croxx_micro_fe-eddha_1kg.jpg"
    },
    {
      name: t("micro.prodName1"), anchor: tEn("micro.prodName1"), subtitle: t("micro.prodSub1"),
      slug: "iron-13-fe-edta",
      pdf: "/files/CroxX_micro_Iron_13_Fe_EDTA.pdf",
      comboLogo: "https://croxx-fertilizer.de/images/_ce.jpg",
      img: "https://croxx-fertilizer.de/images/croxx_micro_fe-edta_1kg.jpg"
    },
    {
      name: t("micro.prodName2"), anchor: tEn("micro.prodName2"), subtitle: t("micro.prodSub2"),
      slug: "zinc-15-edta",
      pdf: "/files/CroxX_micro_Zinc_15_EDTA.pdf",
      comboLogo: "https://croxx-fertilizer.de/images/_ce.jpg",
      img: "https://croxx-fertilizer.de/images/croxx_micro_zn-edta_1kg.jpg"
    },
    {
      name: t("micro.prodName3"), anchor: tEn("micro.prodName3"), subtitle: t("micro.prodSub3"),
      slug: "mix",
      pdf: "/files/CroxX_micro_Mix.pdf",
      comboLogo: "https://croxx-fertilizer.de/images/_ce.jpg",
      img: "https://croxx-fertilizer.de/images/croxx_micro_mix_beutel_5kg.jpg"
    },
    {
      name: t("micro.prodName4"), anchor: tEn("micro.prodName4"), subtitle: t("micro.prodSub4"),
      slug: "multitop-1",
      pdf: "/files/CroxX_micro_Multitop_1.pdf",
      comboLogo: "https://croxx-fertilizer.de/images/_ce.jpg",
      img: "https://croxx-fertilizer.de/images/croxx_micro_multitop1_alubag_1kg.jpg"
    },
    {
      name: t("micro.prodName5"), anchor: tEn("micro.prodName5"), subtitle: t("micro.prodSub5"),
      slug: "mix-one",
      pdf: "/files/CroxX_micro_Mix_One.pdf",
      comboLogo: "https://croxx-fertilizer.de/images/_ce.jpg",
      img: "https://croxx-fertilizer.de/images/croxx_micro_mix_one.jpg"
    },
    {
      name: t("micro.prodName6"), anchor: tEn("micro.prodName6"), subtitle: t("micro.prodSub6"),
      slug: "boron",
      pdf: "/files/CroxX_micro_Boron.pdf",
      comboLogo: "https://croxx-fertilizer.de/images/_ce.jpg",
      img: "https://croxx-fertilizer.de/images/croxx_micro_boron_1l_vr.jpg"
    },
    {
      name: t("micro.prodName7"), anchor: tEn("micro.prodName7"), subtitle: t("micro.prodSub7"),
      slug: "bormo",
      pdf: "/files/CroxX_micro_BorMo.pdf",
      comboLogo: "https://croxx-fertilizer.de/images/_ce.jpg",
      img: "https://croxx-fertilizer.de/images/croxx_micro_bormo_1l.jpg"
    },
    {
      name: t("micro.prodName8"), anchor: tEn("micro.prodName8"), subtitle: t("micro.prodSub8"),
      slug: "bzn",
      pdf: "/files/CroxX_micro_BZn.pdf",
      comboLogo: "https://croxx-fertilizer.de/images/_ce.jpg",
      img: "https://croxx-fertilizer.de/images/croxx_karton_micro_bzn_A2.jpg"
    }
  ];

  return (
    <main className="inhibitors-page">
      {/* Hero Header */}
      <div className="ih-hero-wrapper">
        <div className="ih-hero">
          <div className="ih-hero-img-container">
            <img src={heroImg} alt="CroxX micro Hero" className="ih-hero-img" />
          </div>
          
          <div className="ih-hero-content">
            <p className="ih-subtitle">{t("micro.heroSubtitle")}</p>
            <h1 className="ih-title" style={{ color: '#e85c33' }}>CroxX <span style={{ fontWeight: 'bold' }}>micro</span></h1>
            <p className="ih-desc">{t("micro.heroDesc")}</p>
            <a href="/files/Leaflet_CroxX_MicroFertilizer.pdf" target="_blank" rel="noopener noreferrer" className="ih-btn-micro">{t("common.leaflet")}</a>
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
                  <p className="ih-product-cat" dangerouslySetInnerHTML={{ __html: t("micro.prodCat") }}></p>
                  <h2 className="ih-product-name" style={{ color: '#e85c33' }}>{prod.name}</h2>
                  <p className="ih-product-desc">{prod.subtitle}</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
                    <a href={prod.pdf} target="_blank" rel="noopener noreferrer" className="ih-btn-red">{t("inhibitors.details")}</a>
                    <ProductQR product={findProduct("micro", prod.slug)} label={t("common.scanMobile")} />
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

export default Micro;





