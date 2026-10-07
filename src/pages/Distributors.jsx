import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { MapPin, Phone, Mail, Building2, ChevronUp, Navigation } from 'lucide-react';
import { DISTRIBUTOR_STATES } from '../data/distributors';
import { CONTACT_PHOTO, contactHref } from '../data/contact';
import IndiaMap from '../components/IndiaMap';
import './Inhibitors.css'; // shared page layout (hero, cards, contact section)
import './Distributors.css';

// One office / depot: name, address, phone, email, GSTIN (empty fields are skipped)
function LocationBlock({ loc, t }) {
  return (
    <div className="dist-location">
      <p className="dist-location-name"><Building2 size={18} aria-hidden="true" /> {loc.name}</p>
      {loc.address && <p className="dist-location-line"><MapPin size={16} aria-hidden="true" /> <span>{loc.address}</span></p>}
      {loc.phone && (
        <p className="dist-location-line"><Phone size={16} aria-hidden="true" /> <a href={`tel:${loc.phone.replace(/\s+/g, '')}`}>{loc.phone}</a></p>
      )}
      {loc.email && (
        <p className="dist-location-line"><Mail size={16} aria-hidden="true" /> <a href={`mailto:${loc.email}`}>{loc.email}</a></p>
      )}
      {loc.gstin && <p className="dist-location-gst">{t('distributors.gstin')}: {loc.gstin}</p>}
      {loc.map && (
        <a className="dist-map-link" href={loc.map} target="_blank" rel="noopener noreferrer">
          <Navigation size={15} aria-hidden="true" /> {t('distributors.viewMap')}
        </a>
      )}
    </div>
  );
}

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

  const mapStates = DISTRIBUTOR_STATES.map((s) => ({
    mapId: s.mapId,
    label: t(s.nameKey),
    onClick: () => scrollToState(s.id),
  }));

  return (
    <main className="inhibitors-page distributors-page">
      {/* Hero: intro + company on the left, India map on the right */}
      <div className="ih-hero-wrapper">
        <div className="ih-hero dist-hero">
          <div className="ih-hero-content dist-hero-content">
            <h1 className="ih-title">{t('nav.distributors')}</h1>
            <p className="ih-desc">{t('distributors.intro')}</p>

          </div>

          <div className="dist-map-card">
            <IndiaMap
              highlighted={mapStates}
              legendOn={t('distributors.mapOn')}
              legendOff={t('distributors.mapOff')}
            />
          </div>
        </div>
      </div>

      {/* One card per state */}
      <section className="ih-products-section" id="offices">
        <div className="ih-products-container">
          {DISTRIBUTOR_STATES.map((state) => {
            const locations = state.locations || [];
            return (
              <div className="ih-product-card dist-card" key={state.id} id={state.id}>
                <div className="ih-product-img-wrapper dist-img-wrapper">
                  <img src={state.image} alt={t(state.nameKey)} className="ih-product-img" loading="lazy" />
                  <span className="dist-img-tag">
                    <MapPin size={15} aria-hidden="true" />
                    {t(state.nameKey)}
                  </span>
                </div>

                <div className="ih-product-info">
                  <div className="ih-product-text dist-text">
                    <p className="ih-product-cat">{t('distributors.cat')}</p>
                    <h2 className="ih-product-name">{t(state.nameKey)}</h2>
                    {locations.length > 0 && (
                      <div className="dist-locations">
                        {locations.map((loc) => <LocationBlock key={loc.name} loc={loc} t={t} />)}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Contact Section (same as the product pages) */}
      <section className="ih-contact-section" id="contact">
        <div className="ih-contact-container">
          <div className="ih-contact-left">
            <h2 dangerouslySetInnerHTML={{ __html: t('inhibitors.needMore') }}></h2>
            <p dangerouslySetInnerHTML={{ __html: t('inhibitors.contactDesc') }}></p>
            <a href={contactHref()} className="btn-outline-contact">{t('inhibitors.contactBtn')}</a>
          </div>
          <div className="ih-contact-right animate-on-scroll">
            <img src={CONTACT_PHOTO} alt={t('inhibitors.contactBtn')} className="ih-contact-img" />
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
