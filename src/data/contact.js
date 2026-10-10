// ─────────────────────────────────────────────────────────────────────────────
// Contact details used across the website (header, footer, contact section,
// distributors page). Fill in the empty values when they are available –
// anything left empty is simply not shown.
// ─────────────────────────────────────────────────────────────────────────────

export const COMPANY_INDIA = {
  brand: 'CroxX India',
  legalName: 'farm metrix India Private Limited',
  address: 'Sy.No: 60/3B1, 61/1A1A2 and 64/11B, KMR Avenue, Janapanchatram Koot Road, Alinjivakkam, Chennai, Tiruvallur, Tamil Nadu 600067',
  phone: '+91 93840 54859',
  email: '', // e.g. 'info@croxx.in' – shown in the footer and used by "Contact" buttons once filled in
};

export const COMPANY_GERMANY = {
  name: 'CroxX GmbH & Co. KG',
  address: 'Hafenweg 46 – 48, 48155 Münster, Germany',
  website: 'https://www.croxx-fertilizer.de',
  websiteLabel: 'www.croxx-fertilizer.de',
};

// Social media pages – replace '#' with the real page links.
export const SOCIAL_LINKS = {
  linkedin: 'https://www.linkedin.com/in/croxx-india-239748375/',
  facebook: '#',
  instagram: '#',
  twitter: '#',
  youtube: 'https://www.youtube.com/@CroxXIndia',
};

// Photo used in the "Contact" sections: green crop field (web-sized copy of public/bg.png).
export const CONTACT_PHOTO = '/images/contact-field.jpg';

// Link for "Contact" buttons: e-mail when available, otherwise a phone call, otherwise the distributors page.
export const contactHref = () => {
  if (COMPANY_INDIA.email) return `mailto:${COMPANY_INDIA.email}`;
  if (COMPANY_INDIA.phone) return `tel:${COMPANY_INDIA.phone.replace(/\s+/g, '')}`;
  return '/distributors';
};
