import React, { useEffect, useRef, useState } from 'react';
import { ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';

import { MapPin, Globe, Award, Lightbulb, Leaf } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { PRODUCTS } from '../data/products';
import imgStim from '../assets/croxx_stim_1790246769837.jpg';
import imgFoliar from '../assets/croxx_foliar_1790246785336.jpg';
import imgMicro from '../assets/croxx_micro_1790246799190.jpg';
import imgSolub from '../assets/croxx_solub_1790246815367.jpg';
import imgStabil from '../assets/croxx_stabil_1790246829202.jpg';
import imgGran from '../assets/croxx_gran_1790246847787.jpg';
import imgMicrogran from '../assets/croxx_microgran_1790246860403.jpg';
import imgCote from '../assets/croxx_cote_1790246872862.jpg';

// Specialty-fertilizer card: on hover the background cycles through that range's products
function CategoryCard({ category, image, title, subtitle, onOpen }) {
  const productImages = PRODUCTS.filter((p) => p.category === category).map((p) => p.img);
  const [index, setIndex] = useState(-1); // -1 = category photo
  const timer = useRef(null);

  const start = () => {
    if (!productImages.length || timer.current) return;
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    productImages.forEach((src) => { const im = new Image(); im.src = src; }); // preload
    setIndex(0);
    timer.current = setInterval(() => setIndex((i) => (i + 1) % productImages.length), 1300);
  };
  const stop = () => {
    clearInterval(timer.current);
    timer.current = null;
    setIndex(-1);
  };
  useEffect(() => () => clearInterval(timer.current), []);

  return (
    <div
      onClick={onOpen}
      onMouseEnter={start}
      onMouseLeave={stop}
      onFocus={start}
      onBlur={stop}
      onKeyDown={(e) => { if (e.key === 'Enter') onOpen(); }}
      role="link"
      tabIndex={0}
      className={`sf-card ${index >= 0 ? 'is-cycling' : ''}`}
      style={{ display: 'block', color: 'inherit', cursor: 'pointer' }}
    >
      <div className="sf-bg" style={{ backgroundImage: `url(${image})` }}></div>
      {productImages.map((src, i) => (
        <div
          key={src}
          className={`sf-bg sf-bg-product ${i === index ? 'is-active' : ''}`}
          style={{ backgroundImage: `url(${src})` }}
          aria-hidden="true"
        ></div>
      ))}
      <div className="sf-content">
        <h3 dangerouslySetInnerHTML={{ __html: title }}></h3>
        <p dangerouslySetInnerHTML={{ __html: subtitle }}></p>
      </div>
    </div>
  );
}

function Home() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  // Lush green rice paddies and coconut palms in Kerala – video by OvO Films, free Pexels licence
  const heroVideo = "https://videos.pexels.com/video-files/34732818/14723619_2560_1440_60fps.mp4";
  useEffect(() => {
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

  return (
    <>
      {/* Hero Section */}
      <main className="hero-section">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="hero-video"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="hero-content">
          <h1 className="hero-title">{t("home.heroTitle")}</h1>
          <p className="hero-subtitle">{t("home.heroSubtitle")}</p>
        </div>
      </main>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="about-container">
          <div className="about-left">
            <h2 className="about-title">{t("home.aboutTitle")}</h2>

            {t("home.indiaText") && (
              <div className="about-block">
                <h3 className="about-subtitle">{t("home.indiaTitle")}</h3>
                <p className="about-text-bold">{t("home.indiaText")}</p>
              </div>
            )}

            <Link to="/company" className="btn-outline">{t("home.readMore")}</Link>
          </div>

          <div className="about-right">
            <div className="feature-item">
              <div className="feature-icon">
                <MapPin size={48} className="icon-svg" />
              </div>
              <div className="feature-content">
                <h3>{t("home.expertiseTitle")}</h3>
                <p>{t("home.expertiseDesc")}</p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon">
                <Globe size={48} className="icon-svg" />
              </div>
              <div className="feature-content">
                <h3>{t("home.worldwideTitle")}</h3>
                <p>{t("home.worldwideDesc")}</p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon">
                <Award size={48} className="icon-svg" />
              </div>
              <div className="feature-content">
                <h3>{t("home.certifiedTitle")}</h3>
                <p>{t("home.certifiedDesc")}</p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon">
                <Lightbulb size={48} className="icon-svg" />
              </div>
              <div className="feature-content">
                <h3>{t("home.innovativeTitle")}</h3>
                <p>{t("home.innovativeDesc")}</p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon">
                <Leaf size={48} className="icon-svg" />
              </div>
              <div className="feature-content">
                <h3>{t("home.carbonTitle")}</h3>
                <p>{t("home.carbonDesc")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back to top */}
      <button className="back-to-top" aria-label="Back to top" onClick={() => window.scrollTo(0,0)}>
        <ChevronUp size={24} color="#fff" strokeWidth={3} />
      </button>

      {/* Inhibitors Section */}
      <section className="inhibitors-section">
        <div className="inhibitors-container">
          <h2 className="inhibitors-title">{t("nav.inhibitors")}</h2>
          
          <div className="inhibitors-banner-wrapper animate-on-scroll" id="inhibitors">
            <div className="inhibitors-banner">
              <div className="inhibitors-bg"></div>
              <div className="inhibitors-banner-content">
                <h3 dangerouslySetInnerHTML={{__html: t("home.inhibitorsTitle")}}></h3>
                <p>{t("home.inhibitorsSub")}</p>
              </div>
            </div>
          </div>

          <h2 className="inhibitors-title bottom-title animate-on-scroll" id="specialty-fertilizers">{t("nav.specialty")}</h2>

          <div className="sf-grid animate-on-scroll">
            <CategoryCard category="stim" image={imgStim} onOpen={() => navigate('/stim')}
              title={t("home.stimTitle")} subtitle={t("home.stimSub")} />

            <CategoryCard category="foliar" image={imgFoliar} onOpen={() => navigate('/foliar')}
              title={t("home.foliarTitle")} subtitle={t("home.foliarSub")} />

            <CategoryCard category="micro" image={imgMicro} onOpen={() => navigate('/micro')}
              title={t("home.microTitle")} subtitle={t("home.microSub")} />

            <CategoryCard category="solub" image={imgSolub} onOpen={() => navigate('/solub')}
              title={t("home.solubTitle")} subtitle={t("home.solubSub")} />

            <CategoryCard category="stabil" image={imgStabil} onOpen={() => navigate('/stabil')}
              title={t("home.stabilTitle")} subtitle={t("home.stabilSub")} />

            <CategoryCard category="gran" image={imgGran} onOpen={() => navigate('/gran')}
              title={t("home.granTitle")} subtitle={t("home.granSub")} />

            <CategoryCard category="microgran" image={imgMicrogran} onOpen={() => navigate('/microgran')}
              title={t("home.microgranTitle")} subtitle={t("home.microgranSub")} />

            <CategoryCard category="cote" image={imgCote} onOpen={() => navigate('/cote')}
              title={t("home.coteTitle")} subtitle={t("home.coteSub")} />
          </div>
        </div>
      </section>

    </>
  );
}

export default Home;
