import React from 'react';
import { Link } from 'react-router-dom';
import { findProduct, productPath } from '../data/products';

// Wraps a product card's photo / name so a click opens the product page
// (the same page a QR code opens). Renders plain content if the product is unknown.
function ProductLink({ category, slug, className, children, ...rest }) {
  const product = findProduct(category, slug);
  if (!product) return <>{children}</>;
  return (
    <Link to={productPath(product)} className={className} {...rest}>
      {children}
    </Link>
  );
}

export default ProductLink;
