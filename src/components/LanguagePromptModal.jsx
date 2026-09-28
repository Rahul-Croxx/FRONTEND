import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';

const LanguagePromptModal = () => {
  const { i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get('qr') === 'true') {
      setShow(true);
    }
  }, [location]);

  if (!show) return null;

  const languages = [
    { code: 'en', label: 'English' },
    { code: 'ta', label: 'தமிழ் (Tamil)' },
    { code: 'ml', label: 'മലയാളം (Malayalam)' },
    { code: 'kn', label: 'ಕನ್ನಡ (Kannada)' }
  ];

  const handleSelect = (langCode) => {
    i18n.changeLanguage(langCode);
    localStorage.setItem('i18nextLng', langCode);
    setShow(false);
    
    const params = new URLSearchParams(location.search);
    params.delete('qr');
    const newUrl = location.pathname + (params.toString() ? `?${params.toString()}` : '');
    navigate(newUrl, { replace: true });
  };

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.8)', zIndex: 9999,
      display: 'flex', flexDirection: 'column',
      justifyContent: 'center', alignItems: 'center',
      padding: '20px'
    }}>
      <div style={{
        background: '#fff', borderRadius: '12px', padding: '30px',
        maxWidth: '400px', width: '100%', textAlign: 'center'
      }}>
        <h2 style={{ marginBottom: '20px', color: '#333' }}>Select Your Language</h2>
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px',
          maxHeight: '60vh', overflowY: 'auto'
        }}>
          {languages.map(l => (
            <button
              key={l.code}
              onClick={() => handleSelect(l.code)}
              style={{
                padding: '12px', background: '#f5f5f5', border: '1px solid #ddd',
                borderRadius: '8px', cursor: 'pointer', fontSize: '16px',
                color: '#333', fontWeight: '500'
              }}
            >
              {l.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LanguagePromptModal;