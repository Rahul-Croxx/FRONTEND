import { useTranslation } from 'react-i18next';
import { CONTACT_PHOTO, contactHref } from '../data/contact';
import ProductQR from '../components/ProductQR';
import { findProduct } from '../data/products';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronUp } from 'lucide-react';
import './Inhibitors.css'; // Reuse styles from Inhibitors
import heroImg from '../assets/croxx_stim_1790246769837.jpg';

function Stim() {
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
      name: t("stim.prodName0"), anchor: tEn("stim.prodName0"), subtitle: t("stim.prodSub0"),
      slug: "aminopower",
      pdf: "/files/CroxX_stim_Aminopower.pdf",
      comboLogo: "https://croxx-fertilizer.de/images/Aminopower_Benefit.jpg",
      img: "https://croxx-fertilizer.de/images/croxx_stim_aminopower_5l.jpg"
    },
    {
      name: t("stim.prodName1"), anchor: tEn("stim.prodName1"), subtitle: t("stim.prodSub1"),
      slug: "rootpower",
      pdf: "/files/CroxX_stim_Rootpower.pdf",
      comboLogo: "https://croxx-fertilizer.de/images/Rootpower_Benefit.jpg",
      img: "https://croxx-fertilizer.de/images/croxx_stim_rootpower_5l.jpg"
    },
    {
      name: t("stim.prodName2"), anchor: tEn("stim.prodName2"), subtitle: t("stim.prodSub2"),
      slug: "kelp",
      pdf: "/files/CroxX_stim_Kelp.pdf",
      comboLogo: "https://croxx-fertilizer.de/images/Kelp_Benefit.jpg",
      img: "https://croxx-fertilizer.de/images/croxx_stim_blossom_kelp_5l.jpg"
    },
    {
      name: t("stim.prodName3"), anchor: tEn("stim.prodName3"), subtitle: t("stim.prodSub3"),
      slug: "kelp-maxima",
      pdf: "/files/CroxX_stim_Kelp_Maxima.pdf",
      comboLogo: "https://croxx-fertilizer.de/images/Kelp_Maxima_Benefit.jpg",
      img: "https://croxx-fertilizer.de/images/croxx_stim_maxima_5l-1.jpg"
    },
    {
      name: t("stim.prodName4"), anchor: tEn("stim.prodName4"), subtitle: t("stim.prodSub4"),
      slug: "algae",
      pdf: "/files/CroxX_stim_Algae.pdf",
      comboLogo: "https://croxx-fertilizer.de/images/Algae_Benefit.jpg",
      img: "https://croxx-fertilizer.de/images/croxx_stim_algae_5l.jpg"
    },
    {
      name: t("stim.prodName5"), anchor: tEn("stim.prodName5"), subtitle: t("stim.prodSub5"),
      slug: "blossom",
      pdf: "/files/CroxX_stim_Blossom.pdf",
      comboLogo: "https://croxx-fertilizer.de/images/Blossom_Benefit.jpg",
      img: "https://croxx-fertilizer.de/images/croxx_stim_blossom_kelp2_5l.jpg"
    },
    {
      name: t("stim.prodName6"), anchor: tEn("stim.prodName6"), subtitle: t("stim.prodSub6"),
      slug: "vital",
      pdf: "/files/CroxX_stim_Vital.pdf",
      comboLogo: "https://croxx-fertilizer.de/images/Vital_Benefit.jpg",
      img: "https://croxx-fertilizer.de/images/croxx_stim_vital_5l1.jpg"
    },
    {
      name: t("stim.prodName7"), anchor: tEn("stim.prodName7"), subtitle: t("stim.prodSub7"),
      slug: "super-sl",
      pdf: "/files/CroxX_stim_Super_SL.pdf",
      comboLogo: "https://croxx-fertilizer.de/images/SuperSl_Benefit.jpg",
      img: "https://croxx-fertilizer.de/images/croxx_stim_super_sl_5l1.jpg"
    },
    {
      name: t("stim.prodName8"), anchor: tEn("stim.prodName8"), subtitle: t("stim.prodSub8"),
      slug: "pentaphos",
      pdf: "/files/CroxX_stim_Pentaphos.pdf",
      comboLogo: "https://croxx-fertilizer.de/images/Pentaphos_Benefit.jpg",
      img: "https://croxx-fertilizer.de/images/croxx_stim_pentaphos_5l.jpg"
    },
    {
      name: t("stim.prodName9"), anchor: tEn("stim.prodName9"), subtitle: t("stim.prodSub9"),
      slug: "antisal",
      pdf: "/files/CroxX_stim_Antisal.pdf",
      comboLogo: "https://croxx-fertilizer.de/images/Antisal_Benefit.jpg",
      img: "https://croxx-fertilizer.de/images/croxx_stim_antisal_5l.jpg"
    },
    {
      name: t("stim.prodName10"), anchor: tEn("stim.prodName10"), subtitle: t("stim.prodSub10"),
      slug: "antisal-eco",
      pdf: "/files/CroxX_stim_Antisal_eco.pdf",
      comboLogo: "https://croxx-fertilizer.de/images/Antisal_Benefit.jpg",
      img: "https://croxx-fertilizer.de/images/croxx_stim_antisal_eco_5l.jpg"
    },
    {
      name: t("stim.prodName11"), anchor: tEn("stim.prodName11"), subtitle: t("stim.prodSub11"),
      slug: "aquaboost",
      pdf: "/files/CroxX_stim_AquaBoost.pdf",
      comboLogo: "https://croxx-fertilizer.de/images/Aquaboost_Benefit.jpg",
      img: "https://croxx-fertilizer.de/images/croxx_stim_aquaboost_5l.jpg"
    },
    {
      name: t("stim.prodName12"), anchor: tEn("stim.prodName12"), subtitle: t("stim.prodSub12"),
      slug: "activator-17",
      pdf: "/files/CroxX_stim_Activator_17.pdf",
      comboLogo: "https://croxx-fertilizer.de/images/Activator17_Benefit.jpg",
      img: "https://croxx-fertilizer.de/images/croxx_stim_activator_17_5l.jpg"
    },
    {
      name: t("stim.prodName13"), anchor: tEn("stim.prodName13"), subtitle: t("stim.prodSub13"),
      slug: "activator",
      pdf: "/files/CroxX_stim_Activator.pdf",
      comboLogo: null,
      img: "https://croxx-fertilizer.de/images/croxx_stim_activator.jpg"
    }
  ];

  return (
    <main className="inhibitors-page">
      {/* Hero Header */}
      <div className="ih-hero-wrapper">
        <div className="ih-hero">
          <div className="ih-hero-img-container">
            <img src={heroImg} alt="CroxX stim Hero" className="ih-hero-img" />
          </div>
          
          <div className="ih-hero-content">
            <p className="ih-subtitle">{t("stim.heroSubtitle")}</p>
            <h1 className="ih-title" style={{ color: '#c1272d' }}>CroxX <span style={{ fontWeight: 'bold' }}>stim</span></h1>
            <p className="ih-desc">{t("stim.heroDesc")}</p>
            <a href="/files/Leaflet_CroxX_Stim.pdf" target="_blank" rel="noopener noreferrer" className="ih-btn-red">{t("common.leaflet")}</a>
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
                  <p className="ih-product-cat" dangerouslySetInnerHTML={{ __html: t("stim.prodCat") }}></p>
                  <h2 className="ih-product-name" style={{ color: '#c1272d' }}>{prod.name}</h2>
                  <p className="ih-product-desc">{prod.subtitle}</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
                    <a href={prod.pdf} target="_blank" rel="noopener noreferrer" className="ih-btn-red">{t("inhibitors.details")}</a>
                    <ProductQR product={findProduct("stim", prod.slug)} label={t("common.scanMobile")} />
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

export default Stim;





