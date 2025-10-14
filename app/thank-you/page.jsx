'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ThankYouPage() {
  const router = useRouter();
  const [lang, setLang] = useState('en');

  const t = translations[lang];

  

  return (
    <div
        style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0f2027, #203a43, #2c5364)',
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        fontFamily: "'Poppins', sans-serif",
        padding: 20,
      }}
    >
      {/* Language Toggle */}
        <div className="lang-toggle">
          <button
            onClick={() => setLang('en')}
            style={{
              background: lang === 'en' ? '#f5c400' : 'transparent',
              color: lang === 'en' ? '#000' : '#fff',
            }}
          >
            EN
          </button>
          <button
            onClick={() => setLang('ru')}
            style={{
              background: lang === 'ru' ? '#f5c400' : 'transparent',
              color: lang === 'ru' ? '#000' : '#fff',
            }}
          >
            RU
          </button>
        </div>

      <h1 style={{ fontSize: '2.2rem', color: '#ffd700', marginBottom: 10 }}>
        🎉 {t.thankYou}
      </h1>
      <p style={{ fontSize: '1rem', color: '#ccc', maxWidth: 500 }}>
        {t.success}
      </p>

      <button
        onClick={() => router.push('/')}
        style={{
          marginTop: 30,
          padding: '12px 24px',
          fontSize: '1rem',
          fontWeight: 'bold',
          background: 'linear-gradient(135deg, #ffd700, #ffb700)',
          border: 'none',
          borderRadius: 10,
          cursor: 'pointer',
          color: '#000',
          transition: 'background 0.3s ease',
        }}
      >
        {t.homeBtn}
      </button>
    </div>
  );
}

const translations = {
  en: {
    thankYou: 'Thank You for Registering!',
    success: 'Your entry has been successfully submitted. Winners will be announced soon!',
    homeBtn: 'Go to Home',
  },
  ru: {
    thankYou: 'Спасибо за регистрацию!',
    success: 'Ваша заявка успешно отправлена. Победители будут объявлены в ближайшее время!',
    homeBtn: 'Перейти на главную',
  },
};
