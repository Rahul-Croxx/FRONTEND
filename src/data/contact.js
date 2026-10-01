// ─────────────────────────────────────────────────────────────────────────────
// Contact details used across the website (header, footer, contact section,
// distributors page). Fill in the empty values when they are available –
// anything left empty is simply not shown.
// ─────────────────────────────────────────────────────────────────────────────

export const COMPANY_INDIA = {
  brand: 'CroxX India',
  legalName: 'Farmmatrix India Private Limited',
  address: '', // e.g. 'No. 12, Main Road, Chennai 600001, Tamil Nadu'
  phone: '',   // e.g. '+91 98765 43210'
  email: '',   // e.g. 'info@croxx.in'
};

export const COMPANY_GERMANY = {
  name: 'CroxX GmbH & Co. KG',
  address: 'Hafenweg 46 – 48, 48155 Münster, Germany',
  website: 'https://www.croxx-fertilizer.de',
  websiteLabel: 'www.croxx-fertilizer.de',
};

// Social media pages – replace '#' with the real page links.
export const SOCIAL_LINKS = {
  linkedin: '#',
  facebook: '#',
  instagram: '#',
  twitter: '#',
};

// Photo used behind the "Contact" sections (rice fields with palm trees, Hampi, Karnataka –
// photo by Alexey Turenkov, free Pexels licence).
export const CONTACT_PHOTO =
  'https://images.pexels.com/photos/14721502/pexels-photo-14721502.jpeg?auto=compress&cs=tinysrgb&w=1000&h=680&fit=crop';

// Link for "Contact" buttons: e-mail when available, otherwise the distributors page.
export const contactHref = () => (COMPANY_INDIA.email ? `mailto:${COMPANY_INDIA.email}` : '/distributors');
