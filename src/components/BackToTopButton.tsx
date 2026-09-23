import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const BackToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { language, isRtl } = useLanguage();

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsVisible(window.scrollY > 450);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label={language === 'fa' ? 'بازگشت به بالای صفحه' : language === 'ar' ? 'العودة إلى الأعلى' : 'Back to top'}
      title={language === 'fa' ? 'بازگشت به بالا' : language === 'ar' ? 'العودة إلى الأعلى' : 'Back to top'}
      className={`fixed bottom-20 z-40 p-2.5 rounded-xl bg-slate-900/90 hover:bg-amber-500 text-slate-300 hover:text-slate-950 border border-slate-700/80 hover:border-amber-400 shadow-lg shadow-black/40 backdrop-blur-md transition-all duration-300 cursor-pointer group animate-in fade-in zoom-in-90 ${
        isRtl ? 'left-5 sm:left-6' : 'right-5 sm:right-6'
      }`}
    >
      <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
    </button>
  );
};
