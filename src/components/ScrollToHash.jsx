import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Scrolls to "#section" links such as /#contact, from any page.
// The target may not exist yet right after navigating (the page is still rendering),
// so keep looking for it for a short time before giving up.
function ScrollToHash() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    if (!hash || pathname.startsWith('/downloads')) return; // Downloads handles its own sections
    const id = decodeURIComponent(hash.slice(1));
    let tries = 0;
    let timer;

    const tryScroll = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: tries === 0 ? 'smooth' : 'auto', block: 'start' });
        return;
      }
      if (tries++ < 40) timer = setTimeout(tryScroll, 50); // up to ~2 seconds
    };

    // wait one frame so the new page has rendered
    timer = setTimeout(tryScroll, 0);
    return () => clearTimeout(timer);
  }, [pathname, hash, key]);

  return null;
}

export default ScrollToHash;
