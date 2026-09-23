import React, { useState, useEffect } from 'react';
import { useTheme, THEME_OPTIONS, ThemeId } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { Palette, Check, Sparkles, X } from 'lucide-react';

export const ThemeFloatingSwitcher: React.FC = () => {
  const { theme, setTheme, activeThemeOption } = useTheme();
  const { language, isRtl } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileLandscape, setIsMobileLandscape] = useState(false);

  useEffect(() => {
    const checkOrientation = () => {
      const isLandscapeHeight = window.innerWidth > window.innerHeight && window.innerHeight < 550;
      const isMobileLandscapeQuery = window.innerWidth <= 1024 && window.matchMedia('(orientation: landscape)').matches && window.innerHeight < 600;
      const isForced = document.body.classList.contains('force-landscape-active');
      setIsMobileLandscape(isLandscapeHeight || isMobileLandscapeQuery || isForced);
    };

    checkOrientation();
    window.addEventListener('resize', checkOrientation);
    window.addEventListener('orientationchange', checkOrientation);

    // Also observe class mutations on body for force-landscape-active
    const observer = new MutationObserver(checkOrientation);
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });

    return () => {
      window.removeEventListener('resize', checkOrientation);
      window.removeEventListener('orientationchange', checkOrientation);
      observer.disconnect();
    };
  }, []);

  if (isMobileLandscape) {
    return null;
  }

  return (
    <div 
      id="floating-theme-switcher"
      className={`fixed bottom-20 ${isRtl ? 'left-4' : 'right-4'} z-40 print:hidden transition-all duration-300 max-md:landscape:hidden max-h-[550px]:hidden`}
    >
      {isOpen ? (
        <div className="bg-slate-900/95 backdrop-blur-2xl border border-slate-700/80 rounded-2xl shadow-2xl p-3 w-72 animate-in fade-in zoom-in-95 text-slate-200">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-xs">
            <div className="flex items-center gap-1.5 font-bold text-amber-400">
              <Palette className="w-4 h-4" />
              <span>{language === 'fa' ? 'انتخاب و تست پالت رنگی' : language === 'ar' ? 'اختيار ومعاينة الألوان' : 'Live Color Palette Preview'}</span>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="py-2 space-y-1.5">
            {THEME_OPTIONS.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setTheme(item.id);
                }}
                className={`w-full flex items-center justify-between p-2.5 rounded-xl text-xs transition-all text-left rtl:text-right cursor-pointer group ${
                  theme === item.id 
                    ? 'bg-amber-500/20 text-white border border-amber-500/50 shadow-inner' 
                    : 'text-slate-300 hover:bg-slate-800/90 hover:text-white border border-slate-800'
                }`}
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="relative shrink-0 flex items-center">
                    <div 
                      className="w-4 h-4 rounded-full flex items-center justify-center shadow-sm" 
                      style={{ backgroundColor: item.primaryColor }}
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-950/40" />
                    </div>
                    <div 
                      className="w-2.5 h-2.5 rounded-full -mr-1 rtl:-ml-1 rtl:mr-0 border border-slate-900 shadow-sm" 
                      style={{ backgroundColor: item.secondaryColor }} 
                    />
                  </div>
                  <div className="truncate">
                    <div className="font-bold text-xs flex items-center gap-1.5">
                      <span>{item.name?.[language] || item.name?.fa || 'تم'}</span>
                      {item.id === 'gold' && <span className="text-[9px] bg-amber-500/20 text-amber-300 px-1 py-0.2 rounded font-normal">{language === 'en' ? 'Default' : language === 'ar' ? 'الرئيسي' : 'اصلی'}</span>}
                      {item.id === 'silver' && <span className="text-[9px] bg-purple-900/40 text-purple-200 border border-purple-500/30 px-1 py-0.2 rounded font-normal">{language === 'en' ? 'Violet & Moka' : language === 'ar' ? 'بنفسجي وموكا' : 'بنفش و موکا'}</span>}
                      {item.id === 'emerald' && <span className="text-[9px] bg-emerald-500/20 text-emerald-300 px-1 py-0.2 rounded font-normal">{language === 'en' ? 'Serene' : language === 'ar' ? 'مريح وهادئ' : 'آرامش‌بخش'}</span>}
                    </div>
                    <div className="text-[10px] text-slate-400 truncate">{item.subtitle?.[language] || item.subtitle?.fa || ''}</div>
                  </div>
                </div>
                {theme === item.id ? (
                  <Check className="w-4 h-4 text-amber-400 shrink-0" />
                ) : (
                  <span className="text-[10px] text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity">
                    {language === 'fa' ? 'انتخاب' : language === 'ar' ? 'تطبيق' : 'Apply'}
                  </span>
                )}
              </button>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-800/80 text-[10px] text-slate-400 text-center flex items-center justify-center gap-1">
            <Sparkles className="w-3 h-3 text-amber-400" />
            <span>{language === 'fa' ? 'تغییر رنگ کل دکمه‌ها، حاشیه‌ها و کارت‌ها' : 'Instant theme sync across all components'}</span>
          </div>
        </div>
      ) : (
        <button
          id="floating-theme-switcher-btn"
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white px-3 py-2 rounded-full border border-slate-700/90 shadow-xl backdrop-blur-xl transition-all hover:scale-105 group cursor-pointer max-md:landscape:hidden max-h-[550px]:hidden"
          title={language === 'fa' ? 'تغییر تم رنگی سایت' : 'Change Site Theme'}
        >
          <div className="relative flex items-center">
            <span 
              className="w-3.5 h-3.5 rounded-full inline-block shrink-0 transition-transform group-hover:scale-110 shadow-sm" 
              style={{ backgroundColor: activeThemeOption?.primaryColor || '#f59e0b', boxShadow: `0 0 8px ${activeThemeOption?.primaryColor || '#f59e0b'}` }} 
            />
            <span 
              className="w-2.5 h-2.5 rounded-full -mr-1 rtl:-ml-1 rtl:mr-0 border border-slate-900 shrink-0" 
              style={{ backgroundColor: activeThemeOption?.secondaryColor || '#d97706' }} 
            />
          </div>
          <span className="text-xs font-bold">
            {activeThemeOption?.name?.[language]?.split(' ')?.[0] || activeThemeOption?.name?.fa?.split(' ')?.[0] || 'تم'}
          </span>
          <Palette className="w-3.5 h-3.5 text-amber-400" />
        </button>
      )}
    </div>
  );
};
