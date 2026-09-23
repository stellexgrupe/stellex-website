import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/stellexData';
import { useLanguage } from '../context/LanguageContext';
import { 
  HelpCircle, 
  ChevronDown, 
  Sparkles, 
  MessageSquare, 
  Bot,
  CheckCircle2
} from 'lucide-react';

interface FaqSectionProps {
  onOpenAiAdvisor: () => void;
  onOpenConsultation: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({
  onOpenAiAdvisor,
  onOpenConsultation,
}) => {
  const { language, t } = useLanguage();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [selectedFaqCat, setSelectedFaqCat] = useState<string>('all');

  const categories = [
    { id: 'all', label: language === 'en' ? 'All Questions' : language === 'ar' ? 'جميع الأسئلة' : 'همه پرسش‌ها' },
    { id: 'alloys', label: language === 'en' ? 'Alloys & Standards' : language === 'ar' ? 'السبائك والمعايير' : 'آلیاژها و استانداردها' },
    { id: 'pvd', label: language === 'en' ? 'PVD Coating' : language === 'ar' ? 'طلاء PVD' : 'پوشش‌دهی PVD' },
    { id: 'orders', label: language === 'en' ? 'Orders & Warranty' : language === 'ar' ? 'الطلبات والضمان' : 'سفارش و ضمانت‌نامه' },
  ];

  return (
    <section id="faq" className="py-16 sm:py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{t.faq.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight mb-4">
            {t.faq.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-400 font-normal leading-relaxed">
            {t.faq.desc}
          </p>

          {/* Categories Pill Bar */}
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setSelectedFaqCat(cat.id);
                  setOpenFaqIndex(0);
                }}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                  selectedFaqCat === cat.id
                    ? 'bg-amber-500 text-slate-950 border-amber-400 font-black shadow-md'
                    : 'lux-card text-slate-300 hover:text-white border-slate-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion FAQ List */}
        <div className="space-y-3.5">
          {FAQ_ITEMS.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={faq.id}
                className="lux-card rounded-2xl border border-slate-800 overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                  className="w-full p-5 sm:p-6 text-left rtl:text-right flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-900/50 transition-colors"
                >
                  <span className="text-sm sm:text-base font-bold text-slate-100 leading-snug">
                    {faq.question[language]}
                  </span>
                  <div className={`p-1.5 rounded-lg bg-slate-800 text-amber-400 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-amber-500/20' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-slate-800/80 text-xs sm:text-sm text-slate-300 leading-relaxed animate-in fade-in slide-in-from-top-1">
                    <p>{faq.answer[language]}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Need More Help Box */}
        <div className="mt-10 p-6 rounded-2xl bg-slate-950/80 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left rtl:sm:text-right">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400">
              <Bot className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">
                {t.faq.stillHaveQuestion}
              </h4>
              <p className="text-xs text-slate-400 mt-0.5">
                {t.faq.askAiOrSupport}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onOpenAiAdvisor}
              className="px-4 py-2.5 rounded-xl bg-amber-500/15 text-amber-300 border border-amber-500/40 text-xs font-bold hover:bg-amber-500/25 transition-all cursor-pointer flex items-center gap-1.5"
            >
              <Bot className="w-4 h-4" />
              <span>{t.common.onlineAdvisor}</span>
            </button>

            <button
              onClick={onOpenConsultation}
              className="lux-btn-gold px-4 py-2.5 rounded-xl text-xs font-bold cursor-pointer"
            >
              <span>{t.nav.expertVisit}</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
