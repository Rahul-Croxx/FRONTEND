import React, { useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';

import { MapPin, Globe, Award, Lightbulb, Leaf } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import imgStim from '../assets/croxx_stim_1790246769837.jpg';
import imgFoliar from '../assets/croxx_foliar_1790246785336.jpg';
import imgMicro from '../assets/croxx_micro_1790246799190.jpg';
import imgSolub from '../assets/croxx_solub_1790246815367.jpg';
import imgStabil from '../assets/croxx_stabil_1790246829202.jpg';
import imgGran from '../assets/croxx_gran_1790246847787.jpg';
import imgMicrogran from '../assets/croxx_microgran_1790246860403.jpg';
import imgCote from '../assets/croxx_cote_1790246872862.jpg';

function Home() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const heroVideo = "https://videos.pexels.com/video-files/4226238/4226238-uhd_2560_1440_30fps.mp4"; // Green spring fields – Pexels (free for commercial use)
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
            <p className="about-text-bold">
              {t("home.aboutP1")}
            </p>
            <p className="about-text">
              {t("home.aboutP2")}
            </p>
            <p className="about-text">
              {t("home.aboutP3")}
            </p>
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

      {/* Calculate Section */}
      <section className="calc-section" id="croxx-calculator">
        <div className="calc-container animate-on-scroll">
          <div className="calc-left">
            <h2 className="calc-title" dangerouslySetInnerHTML={{__html: t("home.calcTitle")}}></h2>
            <p className="calc-subtitle">{t("home.calcSubtitle")}</p>
            <a href="#" className="btn-outline-calc">{t("home.calcBtn")}</a>
          </div>
          <div className="calc-right">
            <img src="https://croxx-fertilizer.de/images/CroxX_Calculator_App.jpg" alt="CroxX Calculator App" className="calc-img" />
          </div>
        </div>
      </section>

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
            {/* Card 1 */}
            <div onClick={() => navigate('/stim')} className="sf-card" style={{ display: 'block', color: 'inherit', cursor: 'pointer' }}>
              <div className="sf-bg" style={{ backgroundImage: `url(${imgStim})` }}></div>
              <div className="sf-content">
                <h3 dangerouslySetInnerHTML={{__html: t("home.stimTitle")}}></h3>
                <p dangerouslySetInnerHTML={{__html: t("home.stimSub")}}></p>
              </div>
            </div>

            {/* Card 2 */}
            <div onClick={() => navigate('/foliar')} className="sf-card" style={{ display: 'block', color: 'inherit', cursor: 'pointer' }}>
              <div className="sf-bg" style={{ backgroundImage: `url(${imgFoliar})` }}></div>
              <div className="sf-content">
                <h3 dangerouslySetInnerHTML={{__html: t("home.foliarTitle")}}></h3>
                <p dangerouslySetInnerHTML={{__html: t("home.foliarSub")}}></p>
              </div>
            </div>

            {/* Card 3 */}
            <div onClick={() => navigate('/micro')} className="sf-card" style={{ display: 'block', color: 'inherit', cursor: 'pointer' }}>
              <div className="sf-bg" style={{ backgroundImage: `url(${imgMicro})` }}></div>
              <div className="sf-content">
                <h3 dangerouslySetInnerHTML={{__html: t("home.microTitle")}}></h3>
                <p dangerouslySetInnerHTML={{__html: t("home.microSub")}}></p>
              </div>
            </div>

            {/* Card 4 */}
            <div onClick={() => navigate('/solub')} className="sf-card" style={{ display: 'block', color: 'inherit', cursor: 'pointer' }}>
              <div className="sf-bg" style={{ backgroundImage: `url(${imgSolub})` }}></div>
              <div className="sf-content">
                <h3 dangerouslySetInnerHTML={{__html: t("home.solubTitle")}}></h3>
                <p dangerouslySetInnerHTML={{__html: t("home.solubSub")}}></p>
              </div>
            </div>

            {/* Card 5 */}
            <div onClick={() => navigate('/stabil')} className="sf-card" style={{ display: 'block', color: 'inherit', cursor: 'pointer' }}>
              <div className="sf-bg" style={{ backgroundImage: `url(${imgStabil})` }}></div>
              <div className="sf-content">
                <h3 dangerouslySetInnerHTML={{__html: t("home.stabilTitle")}}></h3>
                <p dangerouslySetInnerHTML={{__html: t("home.stabilSub")}}></p>
              </div>
            </div>

            {/* Card 6 */}
            <div onClick={() => navigate('/gran')} className="sf-card" style={{ display: 'block', color: 'inherit', cursor: 'pointer' }}>
              <div className="sf-bg" style={{ backgroundImage: `url(${imgGran})` }}></div>
              <div className="sf-content">
                <h3 dangerouslySetInnerHTML={{__html: t("home.granTitle")}}></h3>
                <p dangerouslySetInnerHTML={{__html: t("home.granSub")}}></p>
              </div>
            </div>

            {/* Card 7 */}
            <div onClick={() => navigate('/microgran')} className="sf-card" style={{ display: 'block', color: 'inherit', cursor: 'pointer' }}>
              <div className="sf-bg" style={{ backgroundImage: `url(${imgMicrogran})` }}></div>
              <div className="sf-content">
                <h3 dangerouslySetInnerHTML={{__html: t("home.microgranTitle")}}></h3>
                <p dangerouslySetInnerHTML={{__html: t("home.microgranSub")}}></p>
              </div>
            </div>

            {/* Card 8 */}
            <div onClick={() => navigate('/cote')} className="sf-card" style={{ display: 'block', color: 'inherit', cursor: 'pointer' }}>
              <div className="sf-bg" style={{ backgroundImage: `url(${imgCote})` }}></div>
              <div className="sf-content">
                <h3 dangerouslySetInnerHTML={{__html: t("home.coteTitle")}}></h3>
                <p dangerouslySetInnerHTML={{__html: t("home.coteSub")}}></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="contact-container">
          <p className="contact-subtitle">{t("home.contactSub")}</p>
          <h2 className="contact-title" dangerouslySetInnerHTML={{__html: t("home.contactTitle")}}></h2>
          
          <div className="contact-card">
            <div className="contact-card-inner">
              <div className="contact-bg" style={{ backgroundImage: "url('/contact_office.jpg')" }}></div>
              <div className="contact-btn-wrap">
                <a href="#" className="btn-contact">{t("home.contactBtn")}</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
