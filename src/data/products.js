// Central list of every CroxX product.
// Each product has its own unique URL: /product/<category>/<slug>
// That URL is what the product QR codes point to.

export const CATEGORIES = {
  inhibitors: { nameColor: '#000000', accent: '#dd6f15', btnClass: 'ih-btn-primary', route: '/inhibitors', catKey: 'inhibitors.catInhibitors' },
  stim: { nameColor: '#c1272d', accent: '#c1272d', btnClass: 'ih-btn-red', route: '/stim', catKey: 'stim.prodCat' },
  foliar: { nameColor: '#aa4f26', accent: '#aa4f26', btnClass: 'ih-btn-foliar', route: '/foliar', catKey: 'foliar.prodCat' },
  micro: { nameColor: '#e85c33', accent: '#e85c33', btnClass: 'ih-btn-micro', route: '/micro', catKey: 'micro.prodCat' },
  solub: { nameColor: '#2b5387', accent: '#2b5387', btnClass: 'ih-btn-solub', route: '/solub', catKey: 'solub.prodCat' },
  stabil: { nameColor: '#278644', accent: '#278644', btnClass: 'ih-btn-stabil', route: '/stabil', catKey: 'stabil.prodCat' },
  gran: { nameColor: '#3b6ba5', accent: '#3b6ba5', btnClass: 'ih-btn-gran', route: '/gran', catKey: 'gran.prodCat' },
  microgran: { nameColor: '#5f2c2c', accent: '#5f2c2c', btnClass: 'ih-btn-microgran', route: '/microgran', catKey: 'microgran.prodCat' },
  cote: { nameColor: '#a64a85', accent: '#a64a85', btnClass: 'ih-btn-cote', route: '/cote', catKey: 'cote.prodCat' },
};

export const PRODUCTS = [
  { category: 'stim', slug: 'aminopower', nameKey: 'stim.prodName0', subKey: 'stim.prodSub0', pdf: '/files/CroxX_stim_Aminopower.pdf', img: 'https://croxx-fertilizer.de/images/croxx_stim_aminopower_5l.jpg', logo: "https://croxx-fertilizer.de/images/Aminopower_Benefit.jpg" },
  { category: 'stim', slug: 'rootpower', nameKey: 'stim.prodName1', subKey: 'stim.prodSub1', pdf: '/files/CroxX_stim_Rootpower.pdf', img: 'https://croxx-fertilizer.de/images/croxx_stim_rootpower_5l.jpg', logo: "https://croxx-fertilizer.de/images/Rootpower_Benefit.jpg" },
  { category: 'stim', slug: 'kelp', nameKey: 'stim.prodName2', subKey: 'stim.prodSub2', pdf: '/files/CroxX_stim_Kelp.pdf', img: 'https://croxx-fertilizer.de/images/croxx_stim_blossom_kelp_5l.jpg', logo: "https://croxx-fertilizer.de/images/Kelp_Benefit.jpg" },
  { category: 'stim', slug: 'kelp-maxima', nameKey: 'stim.prodName3', subKey: 'stim.prodSub3', pdf: '/files/CroxX_stim_Kelp_Maxima.pdf', img: 'https://croxx-fertilizer.de/images/croxx_stim_maxima_5l-1.jpg', logo: "https://croxx-fertilizer.de/images/Kelp_Maxima_Benefit.jpg" },
  { category: 'stim', slug: 'algae', nameKey: 'stim.prodName4', subKey: 'stim.prodSub4', pdf: '/files/CroxX_stim_Algae.pdf', img: 'https://croxx-fertilizer.de/images/croxx_stim_algae_5l.jpg', logo: "https://croxx-fertilizer.de/images/Algae_Benefit.jpg" },
  { category: 'stim', slug: 'blossom', nameKey: 'stim.prodName5', subKey: 'stim.prodSub5', pdf: '/files/CroxX_stim_Blossom.pdf', img: 'https://croxx-fertilizer.de/images/croxx_stim_blossom_kelp2_5l.jpg', logo: "https://croxx-fertilizer.de/images/Blossom_Benefit.jpg" },
  { category: 'stim', slug: 'vital', nameKey: 'stim.prodName6', subKey: 'stim.prodSub6', pdf: '/files/CroxX_stim_Vital.pdf', img: 'https://croxx-fertilizer.de/images/croxx_stim_vital_5l1.jpg', logo: "https://croxx-fertilizer.de/images/Vital_Benefit.jpg" },
  { category: 'stim', slug: 'super-sl', nameKey: 'stim.prodName7', subKey: 'stim.prodSub7', pdf: '/files/CroxX_stim_Super_SL.pdf', img: 'https://croxx-fertilizer.de/images/croxx_stim_super_sl_5l1.jpg', logo: "https://croxx-fertilizer.de/images/SuperSl_Benefit.jpg" },
  { category: 'stim', slug: 'pentaphos', nameKey: 'stim.prodName8', subKey: 'stim.prodSub8', pdf: '/files/CroxX_stim_Pentaphos.pdf', img: 'https://croxx-fertilizer.de/images/croxx_stim_pentaphos_5l.jpg', logo: "https://croxx-fertilizer.de/images/Pentaphos_Benefit.jpg" },
  { category: 'stim', slug: 'antisal', nameKey: 'stim.prodName9', subKey: 'stim.prodSub9', pdf: '/files/CroxX_stim_Antisal.pdf', img: 'https://croxx-fertilizer.de/images/croxx_stim_antisal_5l.jpg', logo: "https://croxx-fertilizer.de/images/Antisal_Benefit.jpg" },
  { category: 'stim', slug: 'antisal-eco', nameKey: 'stim.prodName10', subKey: 'stim.prodSub10', pdf: '/files/CroxX_stim_Antisal_eco.pdf', img: 'https://croxx-fertilizer.de/images/croxx_stim_antisal_eco_5l.jpg', logo: "https://croxx-fertilizer.de/images/Antisal_Benefit.jpg" },
  { category: 'stim', slug: 'aquaboost', nameKey: 'stim.prodName11', subKey: 'stim.prodSub11', pdf: '/files/CroxX_stim_AquaBoost.pdf', img: 'https://croxx-fertilizer.de/images/croxx_stim_aquaboost_5l.jpg', logo: "https://croxx-fertilizer.de/images/Aquaboost_Benefit.jpg" },
  { category: 'stim', slug: 'activator-17', nameKey: 'stim.prodName12', subKey: 'stim.prodSub12', pdf: '/files/CroxX_stim_Activator_17.pdf', img: 'https://croxx-fertilizer.de/images/croxx_stim_activator_17_5l.jpg', logo: "https://croxx-fertilizer.de/images/Activator17_Benefit.jpg" },
  { category: 'stim', slug: 'activator', nameKey: 'stim.prodName13', subKey: 'stim.prodSub13', pdf: '/files/CroxX_stim_Activator.pdf', img: 'https://croxx-fertilizer.de/images/croxx_stim_activator.jpg', logo: null },
  { category: 'foliar', slug: '10-4-7', nameKey: 'foliar.prodName0', subKey: 'foliar.prodSub0', pdf: '/files/CroxX_foliar_10_4_7.pdf', img: 'https://croxx-fertilizer.de/images/croxx_foliar_10_4_7_5l.jpg', logo: "https://croxx-fertilizer.de/images/10-4-7_Benefit.jpg" },
  { category: 'foliar', slug: '5-5-5', nameKey: 'foliar.prodName1', subKey: 'foliar.prodSub1', pdf: '/files/CroxX_foliar_5_5_5.pdf', img: 'https://croxx-fertilizer.de/images/croxx_foliar_5-5-5_5l.jpg', logo: "https://croxx-fertilizer.de/images/5-5-5_Benefit1.jpg" },
  { category: 'foliar', slug: 'n37', nameKey: 'foliar.prodName2', subKey: 'foliar.prodSub2', pdf: '/files/CroxX_foliar_N37.pdf', img: 'https://croxx-fertilizer.de/images/croxx_foliar_n37_5l.jpg', logo: "https://croxx-fertilizer.de/images/n37_Benefit.jpg" },
  { category: 'foliar', slug: 'n18-4', nameKey: 'foliar.prodName3', subKey: 'foliar.prodSub3', pdf: '/files/CroxX_foliar_N18_4.pdf', img: 'https://croxx-fertilizer.de/images/croxx_foliar_n184_5l.jpg', logo: "https://croxx-fertilizer.de/images/n184_Benefit1.jpg" },
  { category: 'foliar', slug: '0-30-20', nameKey: 'foliar.prodName4', subKey: 'foliar.prodSub4', pdf: '/files/CroxX_foliar_0_30_20.pdf', img: 'https://croxx-fertilizer.de/images/croxx_foliar_0-30-20_5l.jpg', logo: "https://croxx-fertilizer.de/images/0-30-20_Benefit.jpg" },
  { category: 'foliar', slug: 'k46', nameKey: 'foliar.prodName5', subKey: 'foliar.prodSub5', pdf: '/files/CroxX_foliar_K46.pdf', img: 'https://croxx-fertilizer.de/images/croxx_foliar_k46_5l.jpg', logo: "https://croxx-fertilizer.de/images/K46_Benefit.jpg" },
  { category: 'foliar', slug: 'calciplus', nameKey: 'foliar.prodName6', subKey: 'foliar.prodSub6', pdf: '/files/CroxX_foliar_CalciPlus.pdf', img: 'https://croxx-fertilizer.de/images/croxx_foliar_calciplus_5l.jpg', logo: "https://croxx-fertilizer.de/images/calci_plus_Benefit.jpg" },
  { category: 'foliar', slug: 'cabmg', nameKey: 'foliar.prodName7', subKey: 'foliar.prodSub7', pdf: '/files/CroxX_foliar_CaBMg.pdf', img: 'https://croxx-fertilizer.de/images/croxx_foliar_cabmg_plus_5l.jpg', logo: "https://croxx-fertilizer.de/images/camg_Benefit.jpg" },
  { category: 'foliar', slug: 'si15', nameKey: 'foliar.prodName8', subKey: 'foliar.prodSub8', pdf: '/files/CroxX_foliar_Si15.pdf', img: 'https://croxx-fertilizer.de/images/croxx_foliar_si_15_5l.jpg', logo: "https://croxx-fertilizer.de/images/SI15_Benefit1.jpg" },
  { category: 'micro', slug: '6fe-eddha', nameKey: 'micro.prodName0', subKey: 'micro.prodSub0', pdf: '/files/CroxX_micro_6FE_EDDHA.pdf', img: 'https://croxx-fertilizer.de/images/croxx_micro_fe-eddha_1kg.jpg', logo: "https://croxx-fertilizer.de/images/_ce.jpg" },
  { category: 'micro', slug: 'iron-13-fe-edta', nameKey: 'micro.prodName1', subKey: 'micro.prodSub1', pdf: '/files/CroxX_micro_Iron_13_Fe_EDTA.pdf', img: 'https://croxx-fertilizer.de/images/croxx_micro_fe-edta_1kg.jpg', logo: "https://croxx-fertilizer.de/images/_ce.jpg" },
  { category: 'micro', slug: 'zinc-15-edta', nameKey: 'micro.prodName2', subKey: 'micro.prodSub2', pdf: '/files/CroxX_micro_Zinc_15_EDTA.pdf', img: 'https://croxx-fertilizer.de/images/croxx_micro_zn-edta_1kg.jpg', logo: "https://croxx-fertilizer.de/images/_ce.jpg" },
  { category: 'micro', slug: 'mix', nameKey: 'micro.prodName3', subKey: 'micro.prodSub3', pdf: '/files/CroxX_micro_Mix.pdf', img: 'https://croxx-fertilizer.de/images/croxx_micro_mix_beutel_5kg.jpg', logo: "https://croxx-fertilizer.de/images/_ce.jpg" },
  { category: 'micro', slug: 'multitop-1', nameKey: 'micro.prodName4', subKey: 'micro.prodSub4', pdf: '/files/CroxX_micro_Multitop_1.pdf', img: 'https://croxx-fertilizer.de/images/croxx_micro_multitop1_alubag_1kg.jpg', logo: "https://croxx-fertilizer.de/images/_ce.jpg" },
  { category: 'micro', slug: 'mix-one', nameKey: 'micro.prodName5', subKey: 'micro.prodSub5', pdf: '/files/CroxX_micro_Mix_One.pdf', img: 'https://croxx-fertilizer.de/images/croxx_micro_mix_one.jpg', logo: "https://croxx-fertilizer.de/images/_ce.jpg" },
  { category: 'micro', slug: 'boron', nameKey: 'micro.prodName6', subKey: 'micro.prodSub6', pdf: '/files/CroxX_micro_Boron.pdf', img: 'https://croxx-fertilizer.de/images/croxx_micro_boron_1l_vr.jpg', logo: "https://croxx-fertilizer.de/images/_ce.jpg" },
  { category: 'micro', slug: 'bormo', nameKey: 'micro.prodName7', subKey: 'micro.prodSub7', pdf: '/files/CroxX_micro_BorMo.pdf', img: 'https://croxx-fertilizer.de/images/croxx_micro_bormo_1l.jpg', logo: "https://croxx-fertilizer.de/images/_ce.jpg" },
  { category: 'micro', slug: 'bzn', nameKey: 'micro.prodName8', subKey: 'micro.prodSub8', pdf: '/files/CroxX_micro_BZn.pdf', img: 'https://croxx-fertilizer.de/images/croxx_karton_micro_bzn_A2.jpg', logo: "https://croxx-fertilizer.de/images/_ce.jpg" },
  { category: 'solub', slug: 'calcipower', nameKey: 'solub.prodName0', subKey: 'solub.prodSub0', pdf: '/files/CroxX_solub_Calcipower.pdf', img: 'https://croxx-fertilizer.de/images/croxx_solub_calcipower_A1.jpg', logo: "https://croxx-fertilizer.de/images/_ce.jpg" },
  { category: 'solub', slug: 'calmagpower', nameKey: 'solub.prodName1', subKey: 'solub.prodSub1', pdf: '/files/CroxX_solub_CalMagpower.pdf', img: 'https://croxx-fertilizer.de/images/croxx_solub_calmagpower_A2.jpg', logo: "https://croxx-fertilizer.de/images/_ce.jpg" },
  { category: 'solub', slug: 'npk', nameKey: 'solub.prodName2', subKey: 'solub.prodSub2', pdf: '/files/CroxX_solub_NPK.pdf', img: 'https://croxx-fertilizer.de/images/croxx_solub.jpg', logo: "https://croxx-fertilizer.de/images/_ce.jpg" },
  { category: 'stabil', slug: '21', nameKey: 'stabil.prodName0', subKey: 'stabil.prodSub0', pdf: '/files/CroxX_stabil_21.pdf', img: 'https://croxx-fertilizer.de/images/croxx_stabil_as_21.jpg', logo: "https://croxx-fertilizer.de/images/_ce.jpg" },
  { category: 'stabil', slug: '12-12-17-2mgo-te', nameKey: 'stabil.prodName1', subKey: 'stabil.prodSub1', pdf: '/files/CroxX_stabil_12_12_17_2MgO_TE.pdf', img: 'https://croxx-fertilizer.de/images/croxx_stabil_12_12_17.jpg', logo: "https://croxx-fertilizer.de/images/_ce.jpg" },
  { category: 'gran', slug: '12-12-17-sop', nameKey: 'gran.prodName0', subKey: 'gran.prodSub0', pdf: '/files/CroxX_gran_12_12_17_SOP.pdf', img: 'https://croxx-fertilizer.de/images/croxx_gran_12-12-172MgOTE.jpg', logo: "https://croxx-fertilizer.de/images/_ce.jpg" },
  { category: 'microgran', slug: 'kickstart-10-45', nameKey: 'microgran.prodName0', subKey: 'microgran.prodSub0', pdf: '/files/CroxX_microgran_Kickstart_10_45.pdf', img: 'https://croxx-fertilizer.de/images/croxx_microgran_kickstart.jpg', logo: "https://croxx-fertilizer.de/images/_ce.jpg" },
  { category: 'cote', slug: 'cote', nameKey: 'cote.prodName0', subKey: 'cote.prodSub0', pdf: '/files/CroxX_cote.pdf', img: 'https://croxx-fertilizer.de/images/croxx_cote_A2.jpg', logo: "" },
  { category: 'inhibitors', slug: 'uplus', name: "Uplus⁺", subKey: 'inhibitors.prodSub0', pdf: '/files/CroxX_Uplus.pdf', img: 'https://croxx-fertilizer.de/images/croxx_ibc_Uplus_A1.jpg', logo: "https://croxx-fertilizer.de/images/_footprint_ce.jpg" },
  { category: 'inhibitors', slug: 'nplus', name: "Nplus⁺", subKey: 'inhibitors.prodSub1', pdf: '/files/CroxX_Nplus.pdf', img: 'https://croxx-fertilizer.de/images/croxx_ibc_Nplus_A1.jpg', logo: "https://croxx-fertilizer.de/images/_footprint_ce.jpg" },
  { category: 'inhibitors', slug: 'n2-stabil', name: "N2 stabil", subKey: 'inhibitors.prodSub2', pdf: '/files/CroxX_N2_stabil.pdf', img: 'https://croxx-fertilizer.de/images/croxx_ibc_N2_stabil_A1.jpg', logo: "https://croxx-fertilizer.de/images/_footprint_ce.jpg" },
  { category: 'inhibitors', slug: 'p-booster', name: "P-Booster", subKey: 'inhibitors.prodSub3', pdf: '/files/CroxX_P_Booster.pdf', img: 'https://croxx-fertilizer.de/images/croxx_ibc_P-Booster_A1.jpg', logo: "https://croxx-fertilizer.de/images/_ce.jpg" },
  { category: 'inhibitors', slug: 'phos-n-protect', name: "Phos-N protect", subKey: 'inhibitors.prodSub4', pdf: '/files/CroxX_Phos-N_protect.pdf', img: 'https://croxx-fertilizer.de/images/croxx_ibc_Phos-Nprotect_A1.jpg', logo: null },
  { category: 'inhibitors', slug: 'protection', name: "protectioN", subKey: 'inhibitors.prodSub5', pdf: '/files/CroxX_ProtectioN.pdf', img: 'https://croxx-fertilizer.de/images/croxx_ibc_ProtectioN_A1.jpg', logo: "https://croxx-fertilizer.de/images/_footprint_ce.jpg" },
  { category: 'inhibitors', slug: 'double-protection', name: "Double ProtectioN", subKey: 'inhibitors.prodSub6', pdf: '/files/CroxX_Double_ProtectioN.pdf', img: 'https://croxx-fertilizer.de/images/croxx_ibc_double_protectionN_A1.jpg', logo: "https://croxx-fertilizer.de/images/_ce.jpg" },
];

export const productPath = (p) => `/product/${p.category}/${p.slug}`;

export const findProduct = (category, slug) =>
  PRODUCTS.find((p) => p.category === category && p.slug === slug);

// Old QR codes used "/<category>?qr=true#<English_Name>". Map those to the new product URL.
export const findProductByLegacyAnchor = (category, anchor, tEn) =>
  PRODUCTS.find((p) => p.category === category &&
    (p.name || tEn(p.nameKey)).replace(/\s+/g, '_') === anchor);
