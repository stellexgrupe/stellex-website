import React, { useState, useEffect } from 'react';
import { SERVICE_CATEGORIES } from '../data/stellexData';
import { useLanguage } from '../context/LanguageContext';
import { ServiceCategory, ReadyPostModel } from '../types';
import { ReadyPostsDepartment } from './ReadyPostsDepartment';
import { 
  Shield, 
  Gem, 
  Trees, 
  Stethoscope, 
  Cpu, 
  Flame, 
  CheckCircle, 
  Layers, 
  Sparkles, 
  Image as ImageIcon, 
  Calculator, 
  ArrowRight, 
  ArrowLeft,
  ChevronRight,
  Maximize2
} from 'lucide-react';

interface ServicesSectionProps {
  onOpenConsultation: (categoryId?: string) => void;
  onOpenGallery: (images: string[], title: string) => void;
  onSelectPostDetail: (post: ReadyPostModel) => void;
  onOpenCalculatorPlus: (post?: ReadyPostModel) => void;
  selectedCategoryProp?: string;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onOpenConsultation,
  onOpenGallery,
  onSelectPostDetail,
  onOpenCalculatorPlus,
  selectedCategoryProp,
}) => {
  const { language, t, isRtl } = useLanguage();
  const [activeCategoryId, setActiveCategoryId] = useState<string>(
    selectedCategoryProp || SERVICE_CATEGORIES[0].id
  );

  useEffect(() => {
    if (selectedCategoryProp) {
      setActiveCategoryId(selectedCategoryProp);
    }
  }, [selectedCategoryProp]);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Shield': return <Shield className="w-5 h-5" />;
      case 'Gem': return <Gem className="w-5 h-5" />;
      case 'Trees': return <Trees className="w-5 h-5" />;
      case 'Stethoscope': return <Stethoscope className="w-5 h-5" />;
      case 'Cpu': return <Cpu className="w-5 h-5" />;
      case 'Flame': return <Flame className="w-5 h-5" />;
      default: return <Layers className="w-5 h-5" />;
    }
  };

  const activeCategory = SERVICE_CATEGORIES.find(c => c.id === activeCategoryId) || SERVICE_CATEGORIES[0];
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <section id="services" className="py-16 sm:py-24 relative">
      {/* Background Section Accent */}
      <div className="absolute inset-0 bg-slate-900/30 -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.services.sectionBadge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight mb-4">
            {t.services.sectionTitle}
          </h2>
          <p className="text-sm sm:text-base text-slate-400 font-normal leading-relaxed">
            {t.services.sectionDesc}
          </p>
        </div>

        {/* 7 Category Selection Tabs (Luxina Horizontal Pill Bar) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-2.5">
          {SERVICE_CATEGORIES.map((cat) => {
            const isActive = cat.id === activeCategory.id;
            const isSpecialPrefab = cat.id === 'prefab_posts';
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategoryId(cat.id)}
                className={`p-3.5 rounded-2xl flex flex-col items-center text-center gap-2 transition-all cursor-pointer border relative ${
                  isActive
                    ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-xl shadow-amber-500/20 font-bold scale-[1.02]'
                    : isSpecialPrefab
                    ? 'bg-slate-900/90 text-amber-300 border-amber-500/40 hover:border-amber-400 shadow-md shadow-amber-500/10'
                    : 'lux-card text-slate-300 hover:text-white hover:border-slate-600'
                }`}
              >
                {isSpecialPrefab && !isActive && (
                  <span className="absolute -top-2 right-2 rtl:right-2 rtl:left-auto text-[9px] bg-amber-500 text-slate-950 font-black px-1.5 py-0.5 rounded-full shadow">
                    {language === 'en' ? 'NEW' : language === 'ar' ? 'جديد' : 'جدید'}
                  </span>
                )}
                <div className={`p-2 rounded-xl ${isActive ? 'bg-slate-950/20 text-slate-950' : 'bg-slate-800 text-amber-400'}`}>
                  {getCategoryIcon(cat.iconName)}
                </div>
                <span className="text-xs font-bold line-clamp-2 leading-tight">
                  {cat.title[language]}
                </span>
              </button>
            );
          })}
        </div>

        {/* If Ready Posts Department is active, show the full department showcase */}
        {activeCategory.id === 'prefab_posts' ? (
          <ReadyPostsDepartment
            onSelectPostDetail={onSelectPostDetail}
            onOpenCalculatorPlus={onOpenCalculatorPlus}
            onOpenConsultation={(postName) => onOpenConsultation(postName)}
          />
        ) : (
          /* Main Interactive Stage for Selected Department */
          <div className="lux-card rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-700/80 shadow-2xl relative overflow-hidden">
            
            {/* Subtle Ambient Background */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              
              {/* Left/Right Media & Gallery (5 Cols) */}
              <div className="lg:col-span-5 space-y-4">
                {/* Main Cover Image */}
                <div className="relative rounded-2xl overflow-hidden border border-slate-700 group shadow-xl aspect-4/3">
                  <img
                    src={activeCategory.coverImage}
                    alt={activeCategory.title[language]}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  
                  {/* Badge Overlay */}
                  <div className="absolute top-3 right-3 rtl:right-auto rtl:left-3">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-slate-950/80 text-amber-400 border border-amber-500/40 backdrop-blur-md">
                      {activeCategory.badge[language]}
                    </span>
                  </div>

                  {/* Gallery Button overlay */}
                  <button
                    onClick={() => onOpenGallery(activeCategory.galleryImages, activeCategory.title[language])}
                    className="absolute bottom-3 right-3 rtl:right-auto rtl:left-3 px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-950/90 hover:bg-amber-500 hover:text-slate-950 text-slate-200 border border-slate-700 flex items-center gap-1.5 backdrop-blur-md transition-all cursor-pointer"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>{t.services.viewGallery} ({activeCategory.galleryImages.length})</span>
                  </button>
                </div>

                {/* Gallery Thumbnails */}
                <div className="grid grid-cols-4 gap-2">
                  {activeCategory.galleryImages.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => onOpenGallery(activeCategory.galleryImages, activeCategory.title[language])}
                      className="aspect-square rounded-xl overflow-hidden border border-slate-700 hover:border-amber-400 transition-all cursor-pointer group"
                    >
                      <img
                        src={img}
                        alt="Thumbnail"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </button>
                  ))}
                </div>

                {/* Warranty & Guarantee Box */}
                <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-amber-500/20 text-amber-400">
                      <Shield className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 font-medium">
                        {t.services.warrantyLabel}
                      </div>
                      <div className="text-sm font-black text-amber-300 font-mono">
                        {activeCategory.guaranteeYears} {language === 'en' ? 'Years Written Guarantee' : language === 'ar' ? 'سنوات ضمان خطي' : 'سال ضمانت کتبی شرکتی'}
                      </div>
                    </div>
                  </div>
                  <span className="text-[11px] font-bold text-amber-400 bg-amber-500/20 px-2.5 py-1 rounded-lg border border-amber-500/30 font-mono">
                    MTC ASTM
                  </span>
                </div>
              </div>

              {/* Right/Left Detailed Content & Sub-features (7 Cols) */}
              <div className="lg:col-span-7 space-y-6">
                
                <div>
                  <div className="flex items-center gap-2 text-amber-400 text-xs font-bold mb-1.5">
                    <div className="p-1 rounded-md bg-amber-500/20">
                      {getCategoryIcon(activeCategory.iconName)}
                    </div>
                    <span>{activeCategory.badge[language]}</span>
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white mb-3">
                    {activeCategory.title[language]}
                  </h3>
                  
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {activeCategory.description[language]}
                  </p>
                </div>

                {/* 4 Architectural Sub-Features */}
                <div className="space-y-3 pt-2">
                  <h4 className="text-xs font-bold text-slate-400 flex items-center gap-1.5 uppercase tracking-wider">
                    <Layers className="w-3.5 h-3.5 text-amber-400" />
                    <span>{t.services.exploreSubFeatures}</span>
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeCategory.subFeatures.map((sub, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-amber-500/40 transition-colors"
                      >
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className="w-5 h-5 rounded-lg bg-amber-500/10 text-amber-400 text-xs font-bold flex items-center justify-center font-mono">
                            0{idx + 1}
                          </span>
                          <h5 className="text-xs font-black text-slate-100 truncate">
                            {sub.title[language]}
                          </h5>
                        </div>
                        <p className="text-[11px] text-slate-400 leading-normal mb-2">
                          {sub.desc[language]}
                        </p>
                        <div className="text-[10px] text-amber-400/90 font-mono bg-slate-950/60 px-2 py-1 rounded-md border border-slate-800">
                          {sub.specs[language]}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Applied Alloys & PVD Badges */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-slate-800">
                  <div>
                    <div className="text-xs font-semibold text-slate-400 mb-2">
                      {t.services.appliedAlloysLabel}
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {activeCategory.appliedAlloys.map((alloy, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-900 text-slate-300 border border-slate-700/80"
                        >
                          {alloy[language]}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="text-xs font-semibold text-slate-400 mb-2">
                      {t.services.recommendedFinishesLabel}
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {activeCategory.recommendedFinishes.map((finish, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-lg text-xs font-medium bg-amber-500/10 text-amber-300 border border-amber-500/30"
                        >
                          {finish[language]}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Category Call to Actions */}
                <div className="pt-4 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => onOpenConsultation(activeCategory.id)}
                    className="lux-btn-gold px-5 py-3 rounded-xl text-xs font-black flex items-center gap-2 cursor-pointer"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>{t.services.orderThisCategory}</span>
                    <ArrowIcon className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onOpenCalculatorPlus()}
                    className="lux-btn-outline px-4 py-3 rounded-xl text-xs font-bold flex items-center gap-2 cursor-pointer"
                  >
                    <Calculator className="w-4 h-4 text-amber-400" />
                    <span>{language === 'fa' ? 'محاسبه‌گر پلاس مهندسی' : language === 'ar' ? 'حاسبة بلس الهندسية' : 'Calculator Plus'}</span>
                  </button>
                </div>

              </div>

            </div>

          </div>
        )}

      </div>
    </section>
  );
};
