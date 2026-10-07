import React, { useState, useEffect } from 'react';
import { Globe, Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Building, Package, Info, ChevronRight, Download, ShieldCheck } from 'lucide-react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import LegacyQrRedirect from './components/LegacyQrRedirect';
import ScrollToHash from './components/ScrollToHash';
import { FaLinkedinIn, FaFacebookF, FaInstagram } from 'react-icons/fa';
import { FaXTwitter, FaYoutube } from 'react-icons/fa6';
import { Phone, Mail, MapPin } from 'lucide-react';
import { COMPANY_INDIA, SOCIAL_LINKS } from './data/contact';

import Home from './pages/Home';
import Inhibitors from './pages/Inhibitors';
import Company from './pages/Company';
import Stim from './pages/Stim';
import Foliar from './pages/Foliar';
import Micro from './pages/Micro';
import Solub from './pages/Solub';
import Stabil from './pages/Stabil';
import Gran from './pages/Gran';
import Microgran from './pages/Microgran';
import Cote from './pages/Cote';
import Downloads from './pages/Downloads';
import Footprint from './pages/Footprint';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ProductDetail from './pages/ProductDetail';
import Distributors from './pages/Distributors';
import NotFound from './pages/NotFound';
import './mobile.css'; // phone & tablet layout (loaded last so it can adjust every page)

// Header badge: Germany → India (flags drawn to official proportions)
function FlagGermany() {
  return (
    <svg viewBox="0 0 50 30" className="hb-flag" aria-hidden="true">
      <rect width="50" height="10" fill="#000000" />
      <rect y="10" width="50" height="10" fill="#DD0000" />
      <rect y="20" width="50" height="10" fill="#FFCE00" />
    </svg>
  );
}

function FlagIndia() {
  return (
    <svg viewBox="0 0 45 30" className="hb-flag" aria-hidden="true">
      <rect width="45" height="10" fill="#FF9933" />
      <rect y="10" width="45" height="10" fill="#FFFFFF" />
      <rect y="20" width="45" height="10" fill="#138808" />
      <g transform="translate(22.5 15)" stroke="#000080" strokeWidth="0.45" fill="none">
        <circle r="4.6" strokeWidth="0.7" />
        <line x1="0" y1="0" x2="4.60" y2="0.00" /><line x1="0" y1="0" x2="4.44" y2="1.19" /><line x1="0" y1="0" x2="3.98" y2="2.30" /><line x1="0" y1="0" x2="3.25" y2="3.25" /><line x1="0" y1="0" x2="2.30" y2="3.98" /><line x1="0" y1="0" x2="1.19" y2="4.44" /><line x1="0" y1="0" x2="0.00" y2="4.60" /><line x1="0" y1="0" x2="-1.19" y2="4.44" /><line x1="0" y1="0" x2="-2.30" y2="3.98" /><line x1="0" y1="0" x2="-3.25" y2="3.25" /><line x1="0" y1="0" x2="-3.98" y2="2.30" /><line x1="0" y1="0" x2="-4.44" y2="1.19" /><line x1="0" y1="0" x2="-4.60" y2="0.00" /><line x1="0" y1="0" x2="-4.44" y2="-1.19" /><line x1="0" y1="0" x2="-3.98" y2="-2.30" /><line x1="0" y1="0" x2="-3.25" y2="-3.25" /><line x1="0" y1="0" x2="-2.30" y2="-3.98" /><line x1="0" y1="0" x2="-1.19" y2="-4.44" /><line x1="0" y1="0" x2="-0.00" y2="-4.60" /><line x1="0" y1="0" x2="1.19" y2="-4.44" /><line x1="0" y1="0" x2="2.30" y2="-3.98" /><line x1="0" y1="0" x2="3.25" y2="-3.25" /><line x1="0" y1="0" x2="3.98" y2="-2.30" /><line x1="0" y1="0" x2="4.44" y2="-1.19" />
      </g>
      <circle cx="22.5" cy="15" r="0.9" fill="#000080" />
    </svg>
  );
}

function HeaderBadge({ t }) {
  return (
    <div className="header-badge" aria-label={`${t("header.taglineTop")} – ${t("header.taglineIn")} ${t("header.taglineIndia")}`}>
      <div className="hb-flags" aria-hidden="true">
        <FlagGermany />
        <svg className="hb-arrow" viewBox="0 0 30 12" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M1 6h26M22 1.5 27 6l-5 4.5" />
        </svg>
        <FlagIndia />
      </div>
      <span className="hb-divider" aria-hidden="true"></span>
      <div className="hb-text" aria-hidden="true">
        <span className="hb-top">{t("header.taglineTop")}</span>
        <span className="hb-bottom">{t("header.taglineIn")} <b>{t("header.taglineIndia")}</b></span>
      </div>
    </div>
  );
}

const SOCIAL = [
  { key: 'linkedin', label: 'LinkedIn', icon: <FaLinkedinIn />, style: { backgroundColor: '#0077b5' } },
  { key: 'facebook', label: 'Facebook', icon: <FaFacebookF />, style: { backgroundColor: '#1877F2' } },
  { key: 'instagram', label: 'Instagram', icon: <FaInstagram />, style: { background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)' } },
  { key: 'twitter', label: 'X (Twitter)', icon: <FaXTwitter />, style: { backgroundColor: '#000000' } },
  { key: 'youtube', label: 'YouTube', icon: <FaYoutube />, style: { backgroundColor: '#FF0000' } },
];

function SocialIcons() {
  return SOCIAL.map((s) => {
    const href = SOCIAL_LINKS[s.key] || '#';
    const external = href.startsWith('http');
    return (
      <a
        key={s.key}
        href={href}
        className="social-icon-wrapper"
        aria-label={s.label}
        style={s.style}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {s.icon}
      </a>
    );
  });
}

function App() {
  const { t, i18n } = useTranslation();
  const [showLangMenu, setShowLangMenu] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // phone menu (☰)

  // Stop the page scrolling behind the open phone menu
  useEffect(() => {
    document.body.classList.toggle('mobile-menu-open', menuOpen);
    return () => document.body.classList.remove('mobile-menu-open');
  }, [menuOpen]);

  // Close the phone menu after a link in it is tapped
  const closeMenuOnLink = (e) => {
    if (e.target.closest('a')) setMenuOpen(false);
  };

  useEffect(() => {
    const closeMenu = () => setShowLangMenu(false);
    if(showLangMenu) window.addEventListener("click", closeMenu);
    return () => window.removeEventListener("click", closeMenu);
  }, [showLangMenu]);


  
  const languages = [
    { code: 'en', name: 'English' },
    { code: 'ta', name: 'தமிழ்' },
    { code: 'ml', name: 'മലയാളം' },
    { code: 'kn', name: 'ಕನ್ನಡ' },
    { code: 'te', name: 'తెలుగు' }
  ];

  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
    localStorage.setItem("i18nextLng", code);
    setShowLangMenu(false);
  };
  const oldChangeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <Router>
      <LegacyQrRedirect />
      <ScrollToHash />
      <div className="app-container">
        {/* Header */}
        <header className="header-container">
          <div className="logo-area">
            <Link to="/" className="logo-link">
              <img 
                src="/images/croxx_logo.svg" 
                alt="Crox Logo" 
                style={{ width: '100%', height: 'auto', display: 'block' }} 
              />
            </Link>
          </div>
          
          <HeaderBadge t={t} />

          <div className="header-right">
            
                        
            <div className="lang-selector-container" onClick={(e) => e.stopPropagation()} style={{ marginRight: '15px' }}>
              <button onClick={() => setShowLangMenu(!showLangMenu)} className="lang-toggle" aria-label="Select Language">
                <Globe size={18} />
                <span className="lang-text" style={{textTransform: 'uppercase'}}>{i18n.resolvedLanguage || 'en'}</span>
              </button>
              {showLangMenu && (
                <div className="lang-dropdown">
                  {languages.map(lang => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className={`lang-option ${(i18n.resolvedLanguage || 'en') === lang.code ? 'active' : ''}`}
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              type="button"
              className="nav-toggle"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="main-nav"
              onClick={() => { setMenuOpen(!menuOpen); setShowLangMenu(false); }}
            >
              {menuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>

            <div className="social-icons">
              <SocialIcons />
            </div>
          </div>
        </header>

        {/* Navigation */}
        <nav id="main-nav" className={`navbar sticky-header ${menuOpen ? 'is-open' : ''}`} onClick={closeMenuOnLink}>
          <div className="nav-container">
            <Link to="/" className="nav-link">{t("nav.home")}</Link>
            <div className="nav-item-dropdown">
              <span className="nav-link" style={{cursor: 'pointer'}}>{t("nav.products")}</span>
              <div className="dropdown-menu">
                <Link to="/inhibitors" className="dropdown-item">{t("nav.inhibitors")}</Link>
                <Link to="/#specialty-fertilizers" className="dropdown-item">{t("nav.specialty")}</Link>
              </div>
            </div>
            <Link to="/footprint" className="nav-link">{t("nav.footprint")}</Link>
            <Link to="/company" className="nav-link">{t("nav.company")}</Link>
            <Link to="/distributors" className="nav-link">{t("nav.distributors")}</Link>
            <div className="nav-item-dropdown">
              <Link to="/downloads" className="nav-link">{t("nav.downloads")}</Link>
              <div className="dropdown-menu">
                <Link to="/downloads#inhibitors_enhancers" className="dropdown-item">{t("nav.inhibitors")}</Link>
                <Link to="/downloads#specialty_fertilizers" className="dropdown-item">{t("nav.specialty")}</Link>
              </div>
            </div>
            <Link to="/#contact" className="nav-link">{t("nav.contact")}</Link>
            <div className="nav-social-mobile">
              <SocialIcons />
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inhibitors" element={<Inhibitors />} />
          <Route path="/company" element={<Company />} />
          <Route path="/stim" element={<Stim />} />
          <Route path="/foliar" element={<Foliar />} />
          <Route path="/micro" element={<Micro />} />
          <Route path="/solub" element={<Solub />} />
          <Route path="/stabil" element={<Stabil />} />
          <Route path="/gran" element={<Gran />} />
          <Route path="/microgran" element={<Microgran />} />
          <Route path="/cote" element={<Cote />} />
          <Route path="/downloads" element={<Downloads />} />
          <Route path="/footprint" element={<Footprint />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/product/:category/:slug" element={<ProductDetail />} />
          <Route path="/distributors" element={<Distributors />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        {/* Footer Section */}
        <footer className="footer-section">
          <div className="footer-container">
            {/* Column 1: Company */}
            <div className="footer-col">
              <div className="footer-icon-wrap">
                <Building size={24} />
              </div>
              <h4 className="footer-title">{t("footer.company")}</h4>
              <div className="footer-text">
                <img
                  src="/images/croxx_logo.svg"
                  alt="CroxX"
                  className="footer-company-logo"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
                <p><strong>{COMPANY_INDIA.legalName}</strong></p>
                {COMPANY_INDIA.address && (
                  <p className="footer-contact-line"><MapPin size={16} aria-hidden="true" /> <span>{COMPANY_INDIA.address}</span></p>
                )}
                {COMPANY_INDIA.phone && (
                  <p className="footer-contact-line"><Phone size={16} aria-hidden="true" /> <a href={`tel:${COMPANY_INDIA.phone.replace(/\s+/g, '')}`}>{COMPANY_INDIA.phone}</a></p>
                )}
                {COMPANY_INDIA.email && (
                  <p className="footer-contact-line"><Mail size={16} aria-hidden="true" /> <a href={`mailto:${COMPANY_INDIA.email}`}>{COMPANY_INDIA.email}</a></p>
                )}
              </div>
            </div>

            {/* Column 2: Product range */}
            <div className="footer-col">
              <div className="footer-icon-wrap">
                <Package size={24} />
              </div>
              <h4 className="footer-title">{t("footer.productRange")}</h4>
              <ul className="footer-list">
                <li><Link to="/inhibitors" style={{ display: 'flex', alignItems: 'center', color: 'inherit', textDecoration: 'none' }}><ChevronRight size={16} className="footer-chevron" style={{ marginRight: '8px' }} />{t("nav.inhibitors")}</Link></li>
                <li><Link to="/stim" style={{ display: 'flex', alignItems: 'center', color: 'inherit', textDecoration: 'none' }}><ChevronRight size={16} className="footer-chevron" style={{ marginRight: '8px' }} /> <span>CroxX <strong>stim</strong></span></Link></li>
                <li><Link to="/foliar" style={{ display: 'flex', alignItems: 'center', color: 'inherit', textDecoration: 'none' }}><ChevronRight size={16} className="footer-chevron" style={{ marginRight: '8px' }} /> <span>CroxX <strong>foliar</strong></span></Link></li>
                <li><Link to="/micro" style={{ display: 'flex', alignItems: 'center', color: 'inherit', textDecoration: 'none' }}><ChevronRight size={16} className="footer-chevron" style={{ marginRight: '8px' }} /> <span>CroxX <strong>micro</strong></span></Link></li>
                <li><Link to="/solub" style={{ display: 'flex', alignItems: 'center', color: 'inherit', textDecoration: 'none' }}><ChevronRight size={16} className="footer-chevron" style={{ marginRight: '8px' }} /> <span>CroxX <strong>solub</strong></span></Link></li>
                <li><Link to="/stabil" style={{ display: 'flex', alignItems: 'center', color: 'inherit', textDecoration: 'none' }}><ChevronRight size={16} className="footer-chevron" style={{ marginRight: '8px' }} /> <span>CroxX <strong>stabil</strong></span></Link></li>
                <li><Link to="/gran" style={{ display: 'flex', alignItems: 'center', color: 'inherit', textDecoration: 'none' }}><ChevronRight size={16} className="footer-chevron" style={{ marginRight: '8px' }} /> <span>CroxX <strong>gran</strong></span></Link></li>
                <li><Link to="/microgran" style={{ display: 'flex', alignItems: 'center', color: 'inherit', textDecoration: 'none' }}><ChevronRight size={16} className="footer-chevron" style={{ marginRight: '8px' }} /> <span>CroxX <strong>microgran</strong></span></Link></li>
                <li><Link to="/cote" style={{ display: 'flex', alignItems: 'center', color: 'inherit', textDecoration: 'none' }}><ChevronRight size={16} className="footer-chevron" style={{ marginRight: '8px' }} /> <span>CroxX <strong>cote</strong></span></Link></li>
              </ul>
            </div>

            {/* Column 3: More information */}
            <div className="footer-col">
              <div className="footer-icon-wrap">
                <Info size={24} />
              </div>
              <h4 className="footer-title">{t("footer.moreInfo")}</h4>
              <ul className="footer-list">
                <li><Link to="/downloads" style={{ display: 'flex', alignItems: 'center', color: 'inherit', textDecoration: 'none' }}><Download size={16} style={{ marginRight: '8px' }} /> {t("nav.downloads")}</Link></li>
                <li><Link to="/company" style={{ display: 'flex', alignItems: 'center', color: 'inherit', textDecoration: 'none' }}><Building size={16} style={{ marginRight: '8px' }} /> {t("nav.company")}</Link></li>
                
                <li><Link to="/privacy" style={{ display: 'flex', alignItems: 'center', color: 'inherit', textDecoration: 'none' }}><ShieldCheck size={16} style={{ marginRight: '8px' }} /> {t("footer.privacy")}</Link></li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;






