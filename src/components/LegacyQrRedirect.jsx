import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { findProductByLegacyAnchor, productPath } from '../data/products';

// Older QR codes pointed to "/<category>?qr=true#<Product_Name>".
// Send those scans to the new product page (which shows the language pop-up).
function LegacyQrRedirect() {
  const location = useLocation();
  const navigate = useNavigate();
  const { i18n } = useTranslation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get('qr') !== 'true' || !location.hash) return;
    const category = location.pathname.replace(/^\/+|\/+$/g, '');
    let anchor = location.hash.slice(1);
    try { anchor = decodeURIComponent(anchor); } catch { /* keep raw */ }
    const product = findProductByLegacyAnchor(category, anchor, i18n.getFixedT('en'));
    if (product) navigate(`${productPath(product)}?qr=1`, { replace: true });
  }, [location, navigate, i18n]);

  return null;
}

export default LegacyQrRedirect;
