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
                <a href={`/files/${pdf.file}`} target="_blank" rel="noopener noreferrer">{pdf.name}</a>
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

  const inhibitorsData = [
    { name: "CroxX Uplus+", file: "CroxX_Uplus.pdf" },
    { name: "CroxX Nplus+", file: "CroxX_Nplus.pdf" },
    { name: "CroxX N2 stabil", file: "CroxX_N2_stabil.pdf" },
    { name: "CroxX P-Booster", file: "CroxX_P_Booster.pdf" },
    { name: "CroxX Phos-N protect", file: "CroxX_Phos-N_protect.pdf" },
    { name: "CroxX protectioN", file: "CroxX_ProtectioN.pdf" },
    { name: "CroxX Double ProtectioN", file: "CroxX_Double_ProtectioN.pdf" },
  ];

  const specialtyCategories = [
    {
      title: "CroxX stim",
      pdfs: [
        { name: "CroxX stim Aminopower", file: "CroxX_stim_Aminopower.pdf" },
        { name: "CroxX stim Rootpower", file: "CroxX_stim_Rootpower.pdf" },
        { name: "CroxX stim Kelp", file: "CroxX_stim_Kelp.pdf" },
        { name: "CroxX stim Kelp Maxima", file: "CroxX_stim_Kelp_Maxima.pdf" },
        { name: "CroxX stim Algae", file: "CroxX_stim_Algae.pdf" },
        { name: "CroxX stim Blossom", file: "CroxX_stim_Blossom.pdf" },
        { name: "CroxX stim Vital", file: "CroxX_stim_Vital.pdf" },
        { name: "CroxX stim Super SL", file: "CroxX_stim_Super_SL.pdf" },
        { name: "CroxX stim Pentaphos", file: "CroxX_stim_Pentaphos.pdf" },
        { name: "CroxX stim Antisal", file: "CroxX_stim_Antisal.pdf" },
        { name: "CroxX stim Antisal eco", file: "CroxX_stim_Antisal_eco.pdf" },
        { name: "CroxX stim AquaBoost", file: "CroxX_stim_AquaBoost.pdf" },
        { name: "CroxX stim Activator 17", file: "CroxX_stim_Activator_17.pdf" },
        { name: "CroxX stim Activator", file: "CroxX_stim_Activator.pdf" }
      ]
    },
    {
      title: "CroxX foliar",
      pdfs: [
        { name: "CroxX foliar CalciPlus", file: "CroxX_foliar_CalciPlus.pdf" },
        { name: "CroxX foliar Si15", file: "CroxX_foliar_Si15.pdf" },
        { name: "CroxX foliar 5-5-5", file: "CroxX_foliar_5_5_5.pdf" },
        { name: "CroxX foliar 10-4-7", file: "CroxX_foliar_10_4_7.pdf" },
        { name: "CroxX foliar N37", file: "CroxX_foliar_N37.pdf" },
        { name: "CroxX foliar K46", file: "CroxX_foliar_K46.pdf" },
        { name: "CroxX foliar N18/4", file: "CroxX_foliar_N18_4.pdf" },
        { name: "CroxX foliar 0-30-20", file: "CroxX_foliar_0_30_20.pdf" }
      ]
    },
    {
      title: "CroxX micro",
      pdfs: [
        { name: "CroxX micro 6FE EDDHA", file: "CroxX_micro_6FE_EDDHA.pdf" },
        { name: "CroxX micro Multitop 1", file: "CroxX_micro_Multitop_1.pdf" },
        { name: "CroxX micro Boron", file: "CroxX_micro_Boron.pdf" },
        { name: "CroxX micro Zinc 15 EDTA", file: "CroxX_micro_Zinc_15_EDTA.pdf" },
        { name: "CroxX micro Iron 13 Fe EDTA", file: "CroxX_micro_Iron_13_Fe_EDTA.pdf" },
        { name: "CroxX micro BorMo", file: "CroxX_micro_BorMo.pdf" }
      ]
    },
    {
      title: "CroxX solub",
      pdfs: [
        { name: "CroxX solub NPK", file: "CroxX_solub_NPK.pdf" },
        { name: "CroxX solub Calcipower", file: "CroxX_solub_Calcipower.pdf" },
        { name: "CroxX solub CalMagpower", file: "CroxX_solub_CalMagpower.pdf" }
      ]
    },
    {
      title: "CroxX stabil",
      pdfs: [
        { name: "CroxX stabil 26", file: "CroxX_stabil_26.pdf" },
        { name: "CroxX stabil 12-12-17 2MgO TE", file: "CroxX_stabil_12_12_17_2MgO_TE.pdf" },
        { name: "CroxX stabil 21", file: "CroxX_stabil_21.pdf" }
      ]
    },
    {
      title: "CroxX gran",
      pdfs: [
        { name: "CroxX gran 12-12-17 SOP", file: "CroxX_gran_12_12_17_SOP.pdf" }
      ]
    },
    {
      title: "CroxX microgran",
      pdfs: [
        { name: "CroxX microgran Kickstart 10-45", file: "CroxX_microgran_Kickstart_10_45.pdf" }
      ]
    },
    {
      title: "CroxX cote",
      pdfs: [
        { name: "CroxX cote", file: "CroxX_cote.pdf" }
      ]
    }
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
        {/* Section 1: Inhibitors */}
        <section id="inhibitors_enhancers" className="dl-section">
          <div className="dl-header">
            <FileText size={24} className="dl-header-icon" />
            <h2>{t("downloads.inhibitors")}</h2>
          </div>
          <div className="dl-accordion-wrapper">
            <AccordionItem title={t("downloads.products")} pdfs={inhibitorsData} />
            <AccordionItem title={t("downloads.leafletsInh")} pdfs={[
              { name: `${t("common.leaflet")} – ${t("nav.inhibitors")}`, file: "Leaflet_CroxX_Inhibitors_Enhancers.pdf" },
              { name: `${t("common.leaflet")} CroxX protectioN`, file: "Leaflet_CroxX_protectioN.pdf" },
              { name: `${t("common.leaflet")} CroxX P-Booster`, file: "Leaflet_CroxX_P-Booster.pdf" },
              { name: `${t("common.leaflet")} CroxX N2stabil`, file: "Leaflet_CroxX_N2stabil.pdf" }
            ]} />
          </div>
        </section>

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
            <AccordionItem title={t("downloads.leafletsSpec")} pdfs={[
              { name: `${t("common.leaflet")} CroxX stim`, file: "Leaflet_CroxX_Stim.pdf" },
              { name: `${t("common.leaflet")} CroxX foliar`, file: "Leaflet_CroxX_Foliar-Fertilizers.pdf" },
              { name: `${t("common.leaflet")} CroxX micro`, file: "Leaflet_CroxX_MicroFertilizer.pdf" },
              { name: `${t("common.leaflet")} CroxX solub`, file: "Leaflet_CroxX_Solub.pdf" }
            ]} />
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





