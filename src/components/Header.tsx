import React, { useState, useEffect } from 'react';
import { COMPANY_INFO, SERVICE_CATEGORIES } from '../data/stellexData';
import { useLanguage } from '../context/LanguageContext';
import { useTheme, THEME_OPTIONS, ThemeId } from '../context/ThemeContext';
import { Language } from '../types';
import { StellexLogo } from './StellexLogo';
import { LogoStoryModal } from './LogoStoryModal';
import { 
  Phone, 
  Layers, 
  Calculator, 
  Menu, 
  X, 
  ShieldCheck, 
  Sparkles, 
  ChevronDown, 
  Globe, 
  Bot,
  ArrowRight,
  ArrowLeft,
  Flame,
  Check,
  Palette
} from 'lucide-react';

interface HeaderProps {
  onOpenConsultation: () => void;
  onOpenCalculatorPlus: () => void;
  onOpenAiAdvisor: () => void;
  onSelectCategory?: (categoryId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ 
  onOpenConsultation, 
  onOpenCalculatorPlus,
  onOpenAiAdvisor,
  onSelectCategory
}) => {
  const { language, setLanguage, t, dir, isRtl } = useLanguage();
  const { theme, setTheme, activeThemeOption } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [themeDropdownOpen, setThemeDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [logoStoryOpen, setLogoStoryOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const languages: { code: Language; label: string; flag: string; nativeName: string }[] = [
    { code: 'fa', label: 'فارسی', flag: '🇮🇷', nativeName: 'Persian' },
    { code: 'ar', label: 'العربية', flag: '🇦🇪', nativeName: 'Arabic' },
    { code: 'en', label: 'English', flag: '🇬🇧', nativeName: 'English' },
  ];

  const currentLangObj = languages.find(l => l.code === language) || languages[0];

  const calcPlusLabel = {
    fa: { full: 'محاسبه‌گر پلاس', short: 'محاسبه پلاس', title: 'محاسبه‌گر پلاس (فرمول مهندسی دقیق)' },
    ar: { full: 'حاسبة بلس', short: 'حاسبة بلس', title: 'حاسبة بلس (حساب هندسي دقيق)' },
    en: { full: 'Calculator Plus', short: 'Calc Plus', title: 'Calculator Plus (Precision Engineering Formula)' }
  }[language];

  const navLinks = [
    { name: t.nav.services, href: '#services', hasDropdown: true },
    { name: t.nav.materials, href: '#materials' },
    { name: t.nav.portfolio, href: '#project-slideshow' },
    { name: t.nav.whyUs, href: '#why-us' },
    { name: t.nav.faq, href: '#faq' },
    { name: t.nav.contact, href: '#contact' },
  ];

  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <>
      {/* Luxina Top Bar with Live Metal Indices & Multi-language Selector */}
      <div className="bg-slate-950 border-b border-slate-800/80 text-xs py-2 px-4 text-slate-300 relative z-50">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-3">
          
          {/* Market Ticker / Guarantee */}
          <div className="flex items-center gap-3 overflow-hidden text-[11px] sm:text-xs">
            <span className="flex items-center gap-1.5 text-amber-400 font-semibold shrink-0">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              {t.topBar.guaranteeText}
            </span>
            <span className="hidden lg:inline-block text-slate-700">|</span>
            <span className="hidden xl:inline-flex items-center gap-1.5 text-slate-400">
              <Flame className="w-3.5 h-3.5 text-amber-500 animate-pulse" />
              {t.topBar.liveTicker}
            </span>
          </div>

          {/* Hotline & Language Switcher */}
          <div className="flex items-center gap-4 text-xs shrink-0">
            <a 
              href="tel:+989125529304" 
              className="flex items-center gap-1.5 text-slate-200 hover:text-amber-400 font-bold transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
              <span className="hidden sm:inline">{t.topBar.urgentConsultation}</span>
              <span dir="ltr" className="text-amber-400 font-mono font-bold">+989125529304</span>
            </a>

            <div className="hidden sm:inline-block h-3.5 w-px bg-slate-800" />

            {/* Theme / Color Palette Selector Dropdown */}
            <div className="relative">
              <button
                onClick={() => {
                  setThemeDropdownOpen(!themeDropdownOpen);
                  setLangDropdownOpen(false);
                }}
                className="flex items-center gap-1.5 bg-slate-900/90 hover:bg-slate-800 text-slate-200 px-2.5 py-1 rounded-lg border border-slate-700/80 transition-all text-xs cursor-pointer shadow-sm group"
                title={language === 'fa' ? 'انتخاب پالت رنگی' : language === 'ar' ? 'اختيار لوحة الألوان' : 'Select Color Palette'}
              >
                <span 
                  className="w-2.5 h-2.5 rounded-full inline-block shrink-0 transition-transform group-hover:scale-125" 
                  style={{ backgroundColor: activeThemeOption.primaryColor, boxShadow: `0 0 6px ${activeThemeOption.primaryColor}` }} 
                />
                <span className="font-semibold hidden md:inline">{activeThemeOption.name[language]}</span>
                <Palette className="w-3.5 h-3.5 text-amber-400 md:hidden" />
                <ChevronDown className={`w-3 h-3 text-slate-400 transition-transform ${themeDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {themeDropdownOpen && (
                <>
                  <div 
                    className="fixed inset-0 z-40" 
                    onClick={() => setThemeDropdownOpen(false)} 
                  />
                  <div className={`absolute top-full mt-1.5 ${isRtl ? 'left-0' : 'right-0'} z-50 w-64 bg-slate-900/95 border border-slate-700/90 rounded-2xl shadow-2xl overflow-hidden p-1.5 backdrop-blur-2xl animate-in fade-in zoom-in-95`}>
                    <div className="px-3 py-2 border-b border-slate-800 text-[11px] font-bold text-slate-400 flex items-center justify-between">
                      <span className="flex items-center gap-1.5">
                        <Palette className="w-3.5 h-3.5 text-amber-400" />
                        <span>
                          {language === 'fa' ? 'پالت‌های رنگی قالب' : language === 'ar' ? 'أنماط لوحة الألوان' : 'Color Palette Themes'}
                        </span>
                      </span>
                      <span className="text-[10px] text-amber-400 font-mono">3 PALETTES</span>
                    </div>
                    <div className="py-1 space-y-1">
                      {THEME_OPTIONS.map((item) => (
                        <button
                          key={item.id}
                          onClick={() => {
                            setTheme(item.id);
                            setThemeDropdownOpen(false);
                          }}
                          className={`w-full flex items-center justify-between p-2.5 rounded-xl text-xs transition-all text-left rtl:text-right cursor-pointer ${
                            theme === item.id 
                              ? 'bg-amber-500/15 text-white border border-amber-500/40 shadow-inner' 
                              : 'text-slate-300 hover:bg-slate-800/90 hover:text-white border border-transparent'
                          }`}
                        >
                          <div className="flex items-center gap-2.5 min-w-0">
                            {/* Color Swatch Circle preview */}
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
                              <div className="font-bold text-xs">{item.name[language]}</div>
                              <div className="text-[10px] text-slate-400 truncate">{item.subtitle[language]}</div>
                            </div>
                          </div>
                          {theme === item.id && <Check className="w-4 h-4 text-amber-400 shrink-0 mr-1 rtl:ml-1 rtl:mr-0" />}
                        </button>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>

            <div className="hidden sm:inline-block h-3.5 w-px bg-slate-800" />

            {/* Language Selector Dropdown */}
            <div className="relative">
              <button
                onClick={() => {
                  setLangDropdownOpen(!langDropdownOpen);
                  setThemeDropdownOpen(false);
                }}
                className="flex items-center gap-1.5 bg-slate-900/90 hover:bg-slate-800 text-slate-200 px-2.5 py-1 rounded-lg border border-slate-700/80 transition-all text-xs cursor-pointer shadow-sm"
              >
                <span className="text-sm">{currentLangObj.flag}</span>
                <span className="font-semibold">{currentLangObj.label}</span>
                <ChevronDown className={`w-3 h-3 text-slate-400 transition-transform ${langDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {langDropdownOpen && (
                <>
                  <div 
                    className="fixed inset-0 z-40" 
                    onClick={() => setLangDropdownOpen(false)} 
                  />
                  <div className={`absolute top-full mt-1.5 ${isRtl ? 'left-0' : 'right-0'} z-50 w-36 bg-slate-900 border border-slate-700/90 rounded-xl shadow-2xl overflow-hidden py-1 backdrop-blur-xl animate-in fade-in zoom-in-95`}>
                    {languages.map((item) => (
                      <button
                        key={item.code}
                        onClick={() => {
                          setLanguage(item.code);
                          setLangDropdownOpen(false);
                        }}
                        className={`w-full flex items-center justify-between px-3 py-2 text-xs transition-colors hover:bg-amber-500/10 hover:text-amber-400 text-left ${
                          language === item.code ? 'bg-amber-500/15 text-amber-400 font-bold' : 'text-slate-300'
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <span className="text-base">{item.flag}</span>
                          <span>{item.label}</span>
                        </span>
                        {language === item.code && <Check className="w-3.5 h-3.5 text-amber-400" />}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'lux-glass-header border-b border-slate-800/90 shadow-2xl py-2.5'
            : 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800/40 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Official 3D Hexagonal S Brand Logo */}
          <button 
            type="button"
            onClick={() => setLogoStoryOpen(true)} 
            className="flex items-center text-left rtl:text-right focus:outline-none"
            title="مشاهده شناسنامه و مشخصات متالورژیک لوگوی رسمی استیلکس"
          >
            <StellexLogo variant="header" size="md" />
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              if (link.hasDropdown) {
                return (
                  <div 
                    key={link.name} 
                    className="relative group"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <a
                      href={link.href}
                      className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-slate-300 hover:text-amber-400 hover:bg-slate-900/60 rounded-lg transition-all"
                    >
                      <span>{link.name}</span>
                      <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-amber-400 group-hover:rotate-180 transition-transform" />
                    </a>

                    {/* Mega Dropdown Menu for 6 Engineering Departments */}
                    {servicesDropdownOpen && (
                      <div className={`absolute top-full mt-1.5 ${isRtl ? 'right-0' : 'left-0'} w-[540px] bg-slate-950/95 border border-slate-800 rounded-2xl shadow-2xl p-4 backdrop-blur-2xl grid grid-cols-2 gap-2.5 z-50 animate-in fade-in slide-in-from-top-2`}>
                        {SERVICE_CATEGORIES.map((cat) => (
                          <a
                            key={cat.id}
                            href={`#services`}
                            onClick={() => {
                              if (onSelectCategory) onSelectCategory(cat.id);
                              setServicesDropdownOpen(false);
                            }}
                            className="group/item flex items-start gap-3 p-2.5 rounded-xl bg-slate-900/40 hover:bg-amber-500/10 border border-slate-800/80 hover:border-amber-500/40 transition-all text-left rtl:text-right"
                          >
                            <img 
                              src={cat.coverImage} 
                              alt={cat.title[language]} 
                              className="w-12 h-12 rounded-lg object-cover border border-slate-700 shrink-0 group-hover/item:scale-105 transition-transform"
                            />
                            <div className="flex-1 min-w-0">
                              <h4 className="text-xs font-bold text-slate-200 group-hover/item:text-amber-400 truncate">
                                {cat.title[language]}
                              </h4>
                              <p className="text-[10px] text-slate-400 line-clamp-1 mt-0.5">
                                {cat.badge[language]}
                              </p>
                              <span className="text-[9px] text-amber-500 font-medium inline-block mt-0.5">
                                {t.common.viewDetails} →
                              </span>
                            </div>
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-amber-400 hover:bg-slate-900/60 rounded-lg transition-all"
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Action CTAs: Calculator Plus, AI Advisor & Free Survey */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Direct Calculator Plus Header Button (Multilingual) */}
            <button
              onClick={onOpenCalculatorPlus}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-black bg-amber-500/15 text-amber-400 hover:bg-amber-500/25 border border-amber-500/50 hover:border-amber-400 transition-all shadow-sm cursor-pointer"
              title={calcPlusLabel.title}
            >
              <Calculator className="w-3.5 h-3.5 text-amber-400" />
              <span className="hidden xl:inline">{calcPlusLabel.full}</span>
              <span className="xl:hidden">{calcPlusLabel.short}</span>
            </button>

            {/* AI Advisor Trigger Button */}
            <button
              onClick={onOpenAiAdvisor}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold bg-slate-900/80 text-slate-200 hover:text-amber-400 hover:bg-slate-800 border border-slate-700/80 hover:border-amber-500/60 transition-all shadow-sm cursor-pointer"
              title={t.common.metallurgyAdvisor}
            >
              <Bot className="w-4 h-4 text-amber-400 animate-bounce" />
              <span>{t.common.onlineAdvisor}</span>
            </button>

            {/* Free On-Site Survey (Luxina Gold Pill Button) */}
            <button
              onClick={onOpenConsultation}
              className="lux-btn-gold px-4 py-2 rounded-xl text-xs flex items-center gap-1.5 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t.nav.expertVisit}</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenAiAdvisor}
              className="p-2 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/30"
              aria-label="AI Advisor"
            >
              <Bot className="w-5 h-5" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-900 text-slate-300 hover:text-white border border-slate-800"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-slate-950/95 border-b border-slate-800 px-4 pt-3 pb-6 space-y-3 backdrop-blur-2xl animate-in slide-in-from-top-4">
            
            {/* Mobile Language Selector */}
            <div className="flex items-center justify-between p-2 rounded-xl bg-slate-900/80 border border-slate-800">
              <span className="text-xs text-slate-400 flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-amber-400" />
                <span>{language === 'en' ? 'Select Language:' : language === 'ar' ? 'اختيار اللغة:' : 'انتخاب زبان:'}</span>
              </span>
              <div className="flex items-center gap-1">
                {languages.map((item) => (
                  <button
                    key={item.code}
                    onClick={() => setLanguage(item.code)}
                    className={`px-2.5 py-1 text-xs rounded-lg font-bold transition-all ${
                      language === item.code 
                        ? 'bg-amber-500 text-slate-950 shadow-md' 
                        : 'text-slate-400 hover:text-white bg-slate-800/80'
                    }`}
                  >
                    {item.flag} {item.code.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Theme Selector */}
            <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Palette className="w-3.5 h-3.5 text-amber-400" />
                  <span>{language === 'fa' ? 'تم رنگی سایت:' : language === 'ar' ? 'نمط الألوان:' : 'Color Theme:'}</span>
                </span>
                <span className="text-[10px] text-amber-400 font-bold">{activeThemeOption.name[language]}</span>
              </div>
              <div className="grid grid-cols-3 gap-1.5">
                {THEME_OPTIONS.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setTheme(item.id)}
                    className={`p-2 rounded-lg text-center flex flex-col items-center gap-1.5 transition-all text-[11px] ${
                      theme === item.id 
                        ? 'bg-amber-500/20 border border-amber-500/60 text-white font-bold' 
                        : 'bg-slate-800/60 text-slate-300 border border-slate-700/60 hover:bg-slate-800'
                    }`}
                  >
                    <div className="flex items-center">
                      <span className="w-3.5 h-3.5 rounded-full inline-block" style={{ backgroundColor: item.primaryColor }} />
                      <span className="w-2.5 h-2.5 rounded-full inline-block -mr-1 rtl:-ml-1 rtl:mr-0 border border-slate-900" style={{ backgroundColor: item.secondaryColor }} />
                    </div>
                    <span className="truncate w-full leading-tight text-[10px]">{item.name[language].split(' ')[0]}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Links */}
            <div className="grid grid-cols-1 gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between p-2.5 rounded-xl text-sm font-semibold text-slate-300 hover:text-amber-400 hover:bg-slate-900 border border-transparent hover:border-slate-800"
                >
                  <span>{link.name}</span>
                  <ArrowIcon className="w-4 h-4 text-slate-600" />
                </a>
              ))}
            </div>

            {/* Mobile Actions */}
            <div className="pt-2 space-y-2">
              <a
                href="tel:+989125529304"
                className="w-full py-2.5 px-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700/80 text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-sm"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
                <span>{t.topBar.urgentConsultation}</span>
                <span dir="ltr" className="text-amber-400 font-mono font-bold">+989125529304</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCalculatorPlus();
                }}
                className="w-full py-3 px-3 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/50 text-xs font-black flex items-center justify-center gap-2 shadow-sm transition-all"
              >
                <Calculator className="w-4 h-4 text-amber-400" />
                <span>{calcPlusLabel.full}</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="lux-btn-gold w-full py-3 px-3 rounded-xl text-xs font-black flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>{t.nav.expertVisit}</span>
              </button>
            </div>
          </div>
        )}
      </header>
      
      {/* Official Brand Logo Story Modal */}
      <LogoStoryModal
        isOpen={logoStoryOpen}
        onClose={() => setLogoStoryOpen(false)}
      />
    </>
  );
};
