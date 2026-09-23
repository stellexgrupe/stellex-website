import React, { useState, useEffect } from 'react';
import { COMPANY_INFO } from '../data/stellexData';
import { useLanguage } from '../context/LanguageContext';
import { 
  Phone, 
  Send, 
  Bot, 
  Sparkles, 
  ArrowUp,
  MessageSquare,
  X,
  ChevronRight,
  ChevronLeft
} from 'lucide-react';

interface QuickContactBarProps {
  onOpenConsultation: () => void;
  onOpenAiAdvisor: () => void;
}

export const QuickContactBar: React.FC<QuickContactBarProps> = ({
  onOpenConsultation,
  onOpenAiAdvisor,
}) => {
  const { language, t, isRtl } = useLanguage();
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isMobileMinimized, setIsMobileMinimized] = useState(false);
  const [isCompactMode, setIsCompactMode] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    const handleResize = () => {
      const isNarrow = window.innerWidth < 768;
      const isLandscapeMobile = window.innerHeight < 550 && window.innerWidth < 1024;
      setIsCompactMode(isNarrow || isLandscapeMobile);
    };

    handleResize();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const CollapseIcon = isRtl ? ChevronRight : ChevronLeft;

  return (
    <div 
      id="quick-contact-bar-root"
      className={`fixed ${isCompactMode ? 'bottom-2 sm:bottom-3' : 'bottom-3 sm:bottom-5'} ${isRtl ? (isCompactMode ? 'left-2 sm:left-3' : 'left-3 sm:left-5') : (isCompactMode ? 'right-2 sm:right-3' : 'right-3 sm:right-5')} z-40 flex flex-col items-end gap-1.5 sm:gap-3`}
    >
      {/* Scroll to Top - Hidden in compact/mobile mode to prevent screen clutter */}
      {showScrollTop && !isCompactMode && (
        <button
          onClick={scrollToTop}
          className="hidden md:flex p-3 rounded-full bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 shadow-xl cursor-pointer transition-all backdrop-blur-md"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Floating Action Cluster: Minimal Horizontal Pill Dock in Mobile (both Portrait & Landscape) */}
      <div 
        id="quick-contact-action-cluster"
        className="flex items-center"
      >
        {/* Minimized State: A tiny 34px floating dot button */}
        {isMobileMinimized && isCompactMode ? (
          <button
            onClick={() => setIsMobileMinimized(false)}
            className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-slate-950/90 hover:bg-slate-900 text-amber-400 border border-amber-500/50 shadow-xl backdrop-blur-md active:scale-95 transition-all"
            title={language === 'fa' ? 'ارتباط سریع و پشتیبانی' : 'Quick Contact'}
            aria-label="Open Quick Contact"
          >
            <MessageSquare className="w-3.5 h-3.5 sm:w-4 sm:h-4 animate-pulse" />
            <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-500 ring-2 ring-slate-950" />
          </button>
        ) : isCompactMode ? (
          /* Mobile / Landscape Compact Pill Dock */
          <div className="flex flex-row items-center bg-slate-950/85 border border-amber-500/25 p-1 rounded-full shadow-xl backdrop-blur-xl gap-1">
            
            {/* AI Advisor Floating Button */}
            <button
              onClick={onOpenAiAdvisor}
              className="group flex items-center justify-center w-7 h-7 rounded-full bg-slate-900/90 hover:bg-slate-800 text-amber-400 border border-amber-500/30 hover:border-amber-400 shadow-sm backdrop-blur-xl cursor-pointer transition-all active:scale-95"
              title={t.common.onlineAdvisor}
              aria-label={t.common.onlineAdvisor}
            >
              <div className="relative flex items-center justify-center">
                <Bot className="w-3.5 h-3.5 animate-bounce" />
                <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-emerald-500 ring-1 ring-slate-950" />
              </div>
            </button>

            {/* WhatsApp Direct Chat */}
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappNumber}`}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-center w-7 h-7 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-sm cursor-pointer transition-all active:scale-95"
              title="WhatsApp Chat"
              aria-label="WhatsApp Chat"
            >
              <Send className="w-3.5 h-3.5" />
            </a>

            {/* Direct Call Button */}
            <a
              href="tel:+989125529304"
              className="group flex items-center justify-center w-7 h-7 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-sm cursor-pointer transition-all font-black active:scale-95"
              title="Call Support"
              aria-label="Call Support"
            >
              <Phone className="w-3.5 h-3.5 animate-pulse" />
            </a>

            {/* Mobile Minimize Toggle */}
            <button
              onClick={() => setIsMobileMinimized(true)}
              className="flex items-center justify-center w-5 h-5 rounded-full text-slate-400 hover:text-slate-200 active:scale-90 transition-colors mx-0.5"
              title={language === 'fa' ? 'کوچک‌سازی منوی تماس' : 'Minimize'}
              aria-label="Minimize Quick Contact"
            >
              <X className="w-3 h-3" />
            </button>

          </div>
        ) : (
          /* Desktop Floating Column */
          <div className="flex flex-col gap-2.5 items-end">
            
            {/* AI Advisor Floating Button */}
            <button
              onClick={onOpenAiAdvisor}
              className="group flex items-center gap-2 p-3 rounded-2xl bg-slate-950/90 hover:bg-slate-900 text-amber-400 border border-amber-500/40 hover:border-amber-400 shadow-2xl shadow-amber-500/20 backdrop-blur-xl cursor-pointer transition-all"
            >
              <span className="text-xs font-bold px-1">
                {t.common.onlineAdvisor}
              </span>
              <div className="relative">
                <Bot className="w-5 h-5 animate-bounce" />
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-slate-950" />
              </div>
            </button>

            {/* WhatsApp Direct Chat */}
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappNumber}`}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-2 p-3 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white shadow-2xl shadow-emerald-600/30 cursor-pointer transition-all"
              title="WhatsApp Chat"
            >
              <span className="text-xs font-bold px-1">
                {t.common.whatsapp}
              </span>
              <Send className="w-5 h-5" />
            </a>

            {/* Direct Call Button */}
            <a
              href="tel:+989125529304"
              className="group flex items-center gap-2 p-3 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-2xl shadow-amber-500/30 cursor-pointer transition-all font-black"
              title="Call Support"
            >
              <span className="text-xs font-black px-1 font-mono">
                {COMPANY_INFO.phoneIntl}
              </span>
              <Phone className="w-5 h-5 animate-pulse" />
            </a>

          </div>
        )}
      </div>
    </div>
  );
};

