import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Inhibitors.css';

// Shown for any address that does not match a page (instead of an empty screen)
function NotFound() {
  const { t } = useTranslation();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <main className="inhibitors-page">
      <div className="ih-hero-wrapper">
        <div className="ih-hero" style={{ paddingTop: 60, paddingBottom: 80 }}>
          <div className="ih-hero-content">
            <p className="ih-subtitle">404</p>
            <h1 className="ih-title">{t('notFound.title')}</h1>
            <p className="ih-desc">{t('notFound.desc')}</p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Link to="/" className="ih-btn-primary">{t('nav.home')}</Link>
              <Link to="/#specialty-fertilizers" className="ih-btn-primary" style={{ backgroundColor: '#555' }}>{t('nav.products')}</Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default NotFound;
