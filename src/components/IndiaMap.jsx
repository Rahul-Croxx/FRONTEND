import React, { useEffect, useMemo, useState } from 'react';
import './IndiaMap.css';

// India map with the distributor states highlighted.
// highlighted: [{ mapId, label, onClick }]
function IndiaMap({ highlighted, legendOn, legendOff }) {
  const [map, setMap] = useState(null);
  const [hover, setHover] = useState(null);

  useEffect(() => {
    let alive = true;
    // map outlines are loaded only on this page, to keep the rest of the site light
    import('../data/indiaMap.js').then((m) => { if (alive) setMap(m.default); });
    return () => { alive = false; };
  }, []);

  const byId = useMemo(() => Object.fromEntries(highlighted.map((h) => [h.mapId, h])), [highlighted]);

  if (!map) return <div className="india-map india-map-loading" aria-hidden="true" />;

  // Draw highlighted states last so their outline sits on top
  const others = map.locations.filter((l) => !byId[l.id]);
  const active = map.locations.filter((l) => byId[l.id]);
  const py = active.find((l) => l.id === 'py');

  return (
    <figure className="india-map">
      <svg viewBox={map.viewBox} role="img" aria-label={highlighted.map((h) => h.label).join(', ')}>
        {others.map((l) => (
          <path key={l.id} d={l.path} className="im-state" />
        ))}
        {active.map((l) => {
          const h = byId[l.id];
          return (
            <path
              key={l.id}
              d={l.path}
              className={`im-state im-active ${hover === l.id ? 'is-hover' : ''}`}
              tabIndex={0}
              role="button"
              aria-label={h.label}
              onMouseEnter={() => setHover(l.id)}
              onMouseLeave={() => setHover(null)}
              onFocus={() => setHover(l.id)}
              onBlur={() => setHover(null)}
              onClick={h.onClick}
              onKeyDown={(e) => { if (e.key === 'Enter') h.onClick?.(); }}
            >
              <title>{h.label}</title>
            </path>
          );
        })}
        {/* Puducherry is tiny on this scale – mark it with a dot */}
        {py && byId.py && (
          <circle
            cx="245" cy="609" r="6"
            className={`im-dot ${hover === 'py' ? 'is-hover' : ''}`}
            onMouseEnter={() => setHover('py')}
            onMouseLeave={() => setHover(null)}
            onClick={byId.py.onClick}
          >
            <title>{byId.py.label}</title>
          </circle>
        )}
      </svg>

      <div className="im-tooltip" aria-live="polite">{hover && byId[hover] ? byId[hover].label : ' '}</div>

      <figcaption className="im-legend">
        <span><i className="im-swatch im-swatch-on" /> {legendOn}</span>
        <span><i className="im-swatch im-swatch-off" /> {legendOff}</span>
      </figcaption>
      <p className="im-credit">
        Map: <a href="https://mapsvg.com/maps/india" target="_blank" rel="noopener noreferrer">MapSVG</a>,{' '}
        <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">CC BY 4.0</a>
      </p>
    </figure>
  );
}

export default IndiaMap;
