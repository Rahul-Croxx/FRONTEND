import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { MapPin, Phone, Mail, Building2, ChevronUp } from 'lucide-react';
import { DISTRIBUTOR_STATES } from '../data/distributors';
import { COMPANY_INDIA, CONTACT_PHOTO } from '../data/contact';
import IndiaMap from '../components/IndiaMap';
import './Inhibitors.css'; // shared page layout (hero, cards, contact section)
import './Distributors.css';

// One "label: value" contact line; shows a dash until the detail is filled in
function ContactRow({ icon, label, value, href }) {
  return (
    <div className="dist-row">
      <span className="dist-row-icon" aria-hidden="true">{icon}</span>
      <div>
        <span className="dist-row-label">{label}</span>
        <span className="dist-row-value">
          {value ? (href ? <a href={href}>{value}</a> : value) : <span className="dist-row-empty">—</span>}
        </span>
      </div>
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
            <p className="ih-subtitle">{DISTRIBUTOR_STATES.map((s) => t(s.nameKey)).join(' · ')}</p>
            <h1 className="ih-title">{t('nav.distributors')}</h1>
            <p className="ih-desc">{t('distributors.intro')}</p>

            <div className="dist-company">
              <p className="dist-company-brand">{COMPANY_INDIA.brand}</p>
              <p className="dist-company-name"><Building2 size={18} aria-hidden="true" /> {COMPANY_INDIA.legalName}</p>
              {COMPANY_INDIA.address && <p className="dist-company-line"><MapPin size={16} aria-hidden="true" /> {COMPANY_INDIA.address}</p>}
              {COMPANY_INDIA.phone && (
                <p className="dist-company-line"><Phone size={16} aria-hidden="true" /> <a href={`tel:${COMPANY_INDIA.phone.replace(/\s+/g, '')}`}>{COMPANY_INDIA.phone}</a></p>
              )}
              {COMPANY_INDIA.email && (
                <p className="dist-company-line"><Mail size={16} aria-hidden="true" /> <a href={`mailto:${COMPANY_INDIA.email}`}>{COMPANY_INDIA.email}</a></p>
              )}
            </div>
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
      <section className="ih-products-section">
        <div className="ih-products-container">
          {DISTRIBUTOR_STATES.map((state) => {
            const c = state.contact || {};
            const address = c.address || COMPANY_INDIA.address;
            const phone = c.phone || COMPANY_INDIA.phone;
            const email = c.email || COMPANY_INDIA.email;
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
                    <div className="dist-rows">
                      <ContactRow icon={<MapPin size={18} />} label={t('distributors.address')} value={address} />
                      <ContactRow
                        icon={<Phone size={18} />}
                        label={t('distributors.phone')}
                        value={phone}
                        href={phone ? `tel:${phone.replace(/\s+/g, '')}` : undefined}
                      />
                      <ContactRow
                        icon={<Mail size={18} />}
                        label={t('distributors.email')}
                        value={email}
                        href={email ? `mailto:${email}` : undefined}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
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
