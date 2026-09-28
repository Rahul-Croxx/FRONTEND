import React from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { Link } from 'react-router-dom';
import { productPath } from '../data/products';
import './ProductQR.css';

// Address used inside the QR codes:
// 1. VITE_SITE_URL from the .env file (use this for the live website / printed labels)
// 2. When testing on this computer (localhost), the computer's Wi-Fi address,
//    so a phone on the same Wi-Fi can open the scanned link
// 3. Otherwise, the address the site is currently opened on
function getSiteUrl() {
  if (import.meta.env.VITE_SITE_URL) return import.meta.env.VITE_SITE_URL;
  const { protocol, hostname, port, origin } = window.location;
  const isLocal = ['localhost', '127.0.0.1', '[::1]'].includes(hostname);
  // eslint-disable-next-line no-undef
  const lanIp = typeof __LAN_IP__ !== 'undefined' ? __LAN_IP__ : '';
  if (isLocal && lanIp) return `${protocol}//${lanIp}${port ? `:${port}` : ''}`;
  return origin;
}

const SITE_URL = getSiteUrl().replace(/\/$/, '');

export const productQrUrl = (product) => `${SITE_URL}${productPath(product)}?qr=1`;

function ProductQR({ product, label, size = 148 }) {
  if (!product) return null;
  const url = productQrUrl(product);
  return (
    <div className="product-qr">
      <Link to={`${productPath(product)}?qr=1`} className="product-qr-code" aria-label={label}>
        <QRCodeSVG
          value={url}
          size={size}
          level="Q"
          marginSize={2}
          bgColor="#ffffff"
          fgColor="#111111"
          title={url}
        />
      </Link>
      {label && <span className="product-qr-label">{label}</span>}
    </div>
  );
}

export default ProductQR;
