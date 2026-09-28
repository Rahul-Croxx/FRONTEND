import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { MapPin, Phone, Mail, ChevronUp } from 'lucide-react';
import { DISTRIBUTOR_STATES } from '../data/distributors';
import './Inhibitors.css'; // shared page layout (hero, cards, contact section)
import './Distributors.css';

function Distributors() {
  const { t } = useTranslation();

  useEffect(() => {
    if (!window.location.hash) window.scrollTo(0, 0);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('animated');
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollToState = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <main className="inhibitors-page distributors-page">
      {/* Hero Header (same style as the product range pages) */}
      <div className="ih-hero-wrapper">
        <div className="ih-hero">
          <div className="ih-hero-img-container">
            <img src="/bg.png" alt={t('nav.distributors')} className="ih-hero-img" />
          </div>

          <div className="ih-hero-content">
            <p className="ih-subtitle">{DISTRIBUTOR_STATES.map((s) => t(s.nameKey)).join(' · ')}</p>
            <h1 className="ih-title">{t('nav.distributors')}</h1>
            <p className="ih-desc">{t('distributors.intro')}</p>
            <Link to="/#contact" className="ih-btn-primary">{t('inhibitors.contactBtn')}</Link>
          </div>
        </div>
      </div>

      {/* One card per state */}
      <section className="ih-products-section">
        <div className="ih-products-container">
          {DISTRIBUTOR_STATES.map((state) => (
            <div className="ih-product-card dist-card" key={state.id} id={state.id}>
              <div className="ih-product-img-wrapper dist-img-wrapper">
                <img
                  src={state.image}
                  alt={t(state.nameKey)}
                  className="ih-product-img"
                  loading="lazy"
                />
                <span className="dist-img-tag">
                  <MapPin size={15} aria-hidden="true" />
                  {t(state.nameKey)}
                </span>
              </div>

              <div className="ih-product-info">
                <div className="ih-product-text dist-text">
                  <p className="ih-product-cat">{t('distributors.cat')}</p>
                  <h2 className="ih-product-name">{t(state.nameKey)}</h2>

                  {state.distributors.length > 0 ? (
                    <ul className="dist-list">
                      {state.distributors.map((d) => (
                        <li key={d.name + d.city}>
                          <p className="dist-name">{d.name}</p>
                          {d.city && <p className="dist-city">{d.city}</p>}
                          {d.address && <p className="dist-address">{d.address}</p>}
                          <div className="dist-contacts">
                            {d.phone && (
                              <a href={`tel:${d.phone.replace(/\s+/g, '')}`}><Phone size={16} aria-hidden="true" /> {d.phone}</a>
                            )}
                            {d.email && (
                              <a href={`mailto:${d.email}`}><Mail size={16} aria-hidden="true" /> {d.email}</a>
                            )}
                          </div>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <>
                      <span className="dist-soon">{t('distributors.comingSoon')}</span>
                      <p className="ih-product-desc">{t('distributors.contactPrompt')}</p>
                      <Link to="/#contact" className="ih-btn-primary">{t('inhibitors.contactBtn')}</Link>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* State buttons (same style as the product range buttons) */}
      <section className="ih-categories-section">
        <div className="ih-categories-grid dist-states-grid">
          {DISTRIBUTOR_STATES.map((state) => (
            <button type="button" key={state.id} className="ih-cat-pill dist-pill" onClick={() => scrollToState(state.id)}>
              <MapPin size={18} aria-hidden="true" /> {t(state.nameKey)}
            </button>
          ))}
        </div>
      </section>

      {/* Contact Section (same as the product pages) */}
      <section className="ih-contact-section">
        <div className="ih-contact-container">
          <div className="ih-contact-left">
            <h2 dangerouslySetInnerHTML={{ __html: t('inhibitors.needMore') }}></h2>
            <p dangerouslySetInnerHTML={{ __html: t('inhibitors.contactDesc') }}></p>
            <Link to="/#contact" className="btn-outline-contact">{t('inhibitors.contactBtn')}</Link>
          </div>
          <div className="ih-contact-right animate-on-scroll">
            <img src="/contact_office.jpg" alt={t('inhibitors.contactBtn')} className="ih-contact-img" />
          </div>
        </div>
      </section>

      {/* Back to top */}
      <button className="back-to-top" aria-label="Back to top" onClick={() => window.scrollTo(0, 0)}>
        <ChevronUp size={24} color="#fff" strokeWidth={3} />
      </button>
    </main>
  );
}

export default Distributors;
