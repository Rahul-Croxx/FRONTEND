import { useTranslation } from 'react-i18next';
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ChevronUp, ChevronDown, FileText } from 'lucide-react';
import './Downloads.css';

const AccordionItem = ({ title, pdfs }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion-item">
      <div 
        className={`accordion-header ${isOpen ? 'active' : ''}`} 
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="accordion-title">{title}</span>
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </div>
      {isOpen && (
        <div className="accordion-content">
          <ul className="pdf-list">
            {pdfs.map((pdf, idx) => (
              <li key={idx}>
                <FileText size={16} className="pdf-icon-small" />
                <a href={pdf.file.startsWith('http') ? pdf.file : `/files/${pdf.file}`} target="_blank" rel="noopener noreferrer">{pdf.name}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

function Downloads() {
  const { t } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  // Only the products CroxX India sells (client product list)
  const specialtyCategories = [
    {
      title: "CroxX stim",
      pdfs: [
        { name: "CroxX stim Algae", file: "CroxX_stim_Algae.pdf" },
        { name: "CroxX stim Activator 17", file: "CroxX_stim_Activator_17.pdf" },
        { name: "CroxX stim Activator", file: "CroxX_stim_Activator.pdf" }
      ]
    },
    {
      title: "CroxX foliar",
      pdfs: [
        { name: "CroxX foliar CaBMg Plus", file: "CroxX_foliar_CaBMg.pdf" }
      ]
    },
    {
      title: "CroxX micro",
      pdfs: [
        { name: "CroxX micro 6% Fe-EDDHA", file: "CroxX_micro_6FE_EDDHA.pdf" },
        { name: "CroxX micro Multitop 1", file: "CroxX_micro_Multitop_1.pdf" },
        { name: "CroxX micro Bormo", file: "CroxX_micro_BorMo.pdf" }
      ]
    },
    {
      title: "CroxX solub",
      pdfs: [
        { name: "CroxX solub Calcipower", file: "CroxX_solub_Calcipower.pdf" },
        { name: "CroxX solub 13-40-13", file: "CroxX_solub_13_40_13.pdf" },
        { name: "CroxX solub 19-19-19 + TE", file: "CroxX_solub_19_19_19.pdf" },
        { name: "CroxX solub 0-9-47", file: "CroxX_solub_0_9_47.pdf" },
        { name: "CroxX solub 0-39-37", file: "CroxX_solub_0_39_37.pdf" },
        { name: "CroxX solub 16-8-24 + 2MgO + TE", file: "CroxX_solub_16_8_24_2MgO.pdf" }
      ]
    },
    {
      title: "CroxX stabil",
      pdfs: [
        { name: "CroxX stabil 21", file: "CroxX_stabil_21.pdf" }
      ]
    },
    {
      title: "CroxX gran",
      pdfs: [
        { name: "CroxX gran 12-11-18+2MgO+TE", file: "CroxX_gran_12_11_18_2MgO_TE.pdf" }
      ]
    },
    {
      title: "CroxX cote",
      pdfs: [
        { name: "CroxX cote 15-19-15 + TE 6M", file: "CroxX_cote_15_19_15_TE_6M.pdf" }
      ]
    },
  ];

  return (
    <main className="downloads-page">
      {/* Hero Header */}
      <div className="page-hero-banner" style={{ width: '100vw', height: '80vh', minHeight: '600px', marginLeft: 'calc(-50vw + 50%)', position: 'relative' }}>
        <img 
          src="/inhibitors_hero.jpg" 
          alt="Wheat Field" 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>

      <div className="downloads-container">
        {/* Section 2: Specialty Fertilizers */}
        <section id="specialty_fertilizers" className="dl-section">
          <div className="dl-header">
            <FileText size={24} className="dl-header-icon" />
            <h2>{t("downloads.specialty")}</h2>
          </div>
          <div className="dl-accordion-wrapper">
            {specialtyCategories.map((cat, idx) => (
              <AccordionItem key={idx} title={cat.title} pdfs={cat.pdfs} />
            ))}
          </div>
        </section>
      </div>

      {/* Back to top */}
      <button className="back-to-top" aria-label="Back to top" onClick={() => window.scrollTo(0,0)}>
        <ChevronUp size={24} color="#fff" strokeWidth={3} />
      </button>
    </main>
  );
}

export default Downloads;





