import React, { useState, useEffect } from 'react';
import { Globe, Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Building, Package, Info, ChevronRight, Download, ShieldCheck } from 'lucide-react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import LegacyQrRedirect from './components/LegacyQrRedirect';
import ScrollToHash from './components/ScrollToHash';
import { FaLinkedinIn, FaFacebookF, FaInstagram } from 'react-icons/fa';

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
    { code: 'kn', name: 'ಕನ್ನಡ' }
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
                src="https://croxx-fertilizer.de/images/CroxX_Logo_4c_61m_100y_.svg" 
                alt="Crox Logo" 
                style={{ width: '100%', height: 'auto', display: 'block' }} 
              />
            </Link>
          </div>
          
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
              <a href="#" className="social-icon-wrapper" style={{ backgroundColor: '#0077b5' }}><FaLinkedinIn /></a>
              <a href="#" className="social-icon-wrapper" style={{ backgroundColor: '#1877F2' }}><FaFacebookF /></a>
              <a href="#" className="social-icon-wrapper" style={{ background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)' }}><FaInstagram /></a>
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
                <Link to="/#croxx-calculator" className="dropdown-item">{t("nav.calculator")}</Link>
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
              <a href="#" className="social-icon-wrapper" aria-label="LinkedIn" style={{ backgroundColor: '#0077b5' }}><FaLinkedinIn /></a>
              <a href="#" className="social-icon-wrapper" aria-label="Facebook" style={{ backgroundColor: '#1877F2' }}><FaFacebookF /></a>
              <a href="#" className="social-icon-wrapper" aria-label="Instagram" style={{ background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)' }}><FaInstagram /></a>
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
              <p className="footer-text">
                <strong>CroxX GmbH &amp; Co. KG</strong><br />
                Hafenweg 46 – 48<br />
                48155 Münster / Germany<br />
                <br />
                
                <a href="http://www.croxx-fertilizer.de">www.croxx-fertilizer.de</a>
              </p>
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






