import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { SERVICE_CATEGORIES } from '../../data/stellexData';
import {
  Shield,
  Maximize2,
  Layers,
  Sparkles,
  Calculator,
  ArrowRight,
  ArrowLeft,
} from 'lucide-react';

/**
 * ============================================================================
 * نسخه پشتیبان طرح قالب قبلی (کلاسیک) دپارتمان انواع نرده، حفاظ و درب ساختمانی و ویلایی
 * این فایل جهت نگهداری و بازگشت ۱۰۰٪ دقیق به طرح اولیه ذخیره شده است.
 * ============================================================================
 */

interface RailingsDoorsOriginalDepartmentProps {
  onOpenConsultation: (categoryOrItem: string) => void;
  onOpenCalculatorPlus: () => void;
  onOpenGallery: (images: string[], title: string) => void;
}

export const RailingsDoorsOriginalDepartment: React.FC<RailingsDoorsOriginalDepartmentProps> = ({
  onOpenConsultation,
  onOpenCalculatorPlus,
  onOpenGallery,
}) => {
  const { language, t, isRtl } = useLanguage();
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const category = SERVICE_CATEGORIES.find((c) => c.id === 'railings_doors') || SERVICE_CATEGORIES[0];

  return (
    <div id="railings-doors-original-department" className="space-y-6 animate-in fade-in duration-300">
      {/* Main Interactive Stage for Selected Department */}
      <div className="lux-card rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-700/80 shadow-2xl relative overflow-hidden">
        {/* Subtle Ambient Background */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left/Right Media & Gallery (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            {/* Main Cover Image */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-700 group shadow-xl aspect-4/3">
              <img
                src={category.coverImage}
                alt={category.title[language]}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

              {/* Badge Overlay */}
              <div className="absolute top-3 right-3 rtl:right-auto rtl:left-3">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-slate-950/80 text-amber-400 border border-amber-500/40 backdrop-blur-md">
                  {category.badge[language]}
                </span>
              </div>

              {/* Gallery Button overlay */}
              <button
                onClick={() => onOpenGallery(category.galleryImages, category.title[language])}
                className="absolute bottom-3 right-3 rtl:right-auto rtl:left-3 px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-950/90 hover:bg-amber-500 hover:text-slate-950 text-slate-200 border border-slate-700 flex items-center gap-1.5 backdrop-blur-md transition-all cursor-pointer"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span>
                  {t.services.viewGallery} ({category.galleryImages.length})
                </span>
              </button>
            </div>

            {/* Gallery Thumbnails */}
            <div className="grid grid-cols-4 gap-2">
              {category.galleryImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => onOpenGallery(category.galleryImages, category.title[language])}
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
                  <div className="text-xs text-slate-400 font-medium">{t.services.warrantyLabel}</div>
                  <div className="text-sm font-black text-amber-300 font-mono">
                    {category.guaranteeYears}{' '}
                    {language === 'en'
                      ? 'Years Written Guarantee'
                      : language === 'ar'
                      ? 'سنوات ضمان خطي'
                      : 'سال ضمانت کتبی شرکتی'}
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
                  <Shield className="w-4 h-4" />
                </div>
                <span>{category.badge[language]}</span>
              </div>

              <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white mb-3">
                {category.title[language]}
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">{category.description[language]}</p>
            </div>

            {/* 4 Architectural Sub-Features */}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-bold text-slate-400 flex items-center gap-1.5 uppercase tracking-wider">
                <Layers className="w-3.5 h-3.5 text-amber-400" />
                <span>{t.services.exploreSubFeatures}</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {category.subFeatures.map((sub, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-amber-500/40 transition-colors"
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="w-5 h-5 rounded-lg bg-amber-500/10 text-amber-400 text-xs font-bold flex items-center justify-center font-mono">
                        0{idx + 1}
                      </span>
                      <h5 className="text-xs font-black text-slate-100 truncate">{sub.title[language]}</h5>
                    </div>
                    <p className="text-[11px] text-slate-400 leading-normal mb-2">{sub.desc[language]}</p>
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
                <div className="text-xs font-semibold text-slate-400 mb-2">{t.services.appliedAlloysLabel}</div>
                <div className="flex flex-wrap gap-1.5">
                  {category.appliedAlloys.map((alloy, idx) => (
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
                <div className="text-xs font-semibold text-slate-400 mb-2">{t.services.recommendedFinishesLabel}</div>
                <div className="flex flex-wrap gap-1.5">
                  {category.recommendedFinishes.map((finish, idx) => (
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
                onClick={() => onOpenConsultation(category.id)}
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
                <span>
                  {language === 'fa'
                    ? 'محاسبه‌گر پلاس مهندسی'
                    : language === 'ar'
                    ? 'حاسبة بلس الهندسية'
                    : 'Calculator Plus'}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
