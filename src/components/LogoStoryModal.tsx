import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { X, Award, CheckCircle2, Layers, Sparkles, Download, ShieldCheck } from 'lucide-react';
import logo3dAsset from '../assets/images/stellex_hex_logo_1788681476136.jpg';

interface LogoStoryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LogoStoryModal: React.FC<LogoStoryModalProps> = ({ isOpen, onClose }) => {
  const { language, isRtl } = useLanguage();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl bg-slate-900 border border-amber-500/40 rounded-2xl p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
        dir={isRtl ? 'rtl' : 'ltr'}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 rtl:right-auto rtl:left-4 p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors border border-slate-700"
          title="بستن"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400">
            <Sparkles className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white font-['Cinzel',serif]">
              هویت بصری و شناسنامه رسمی لوگوی استیلکس
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              الهام‌گرفته از هندسه ایزومتریک شش‌ضلعی و تلفیق متالورژیک استیل ۳۰۴ و تیتانیوم طلایی
            </p>
          </div>
        </div>

        {/* Centerpiece 3D Emblem Showcase */}
        <div className="relative rounded-2xl bg-gradient-to-b from-slate-950 to-slate-900 border border-slate-800 p-6 flex flex-col items-center justify-center text-center shadow-inner mb-6">
          <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-2xl bg-gradient-to-br from-amber-400 via-amber-600 to-slate-800 p-[2px] shadow-2xl shadow-amber-500/20 mb-4 group">
            <div className="w-full h-full bg-slate-950 rounded-[14px] overflow-hidden flex items-center justify-center p-2">
              <img
                src={logo3dAsset}
                alt="لوگوی رسمی استیلکس"
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain filter drop-shadow-[0_4px_12px_rgba(245,158,11,0.25)] group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl sm:text-3xl font-black text-white font-['Cinzel',serif] tracking-widest">
              STELLEX
            </span>
            <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-bold">
              لوگوی اختصاصی
            </span>
          </div>
          <p className="text-xs text-slate-400 max-w-md">
            نشان برجسته ایزومتریک شش‌ضلعی با حرف مرکزی S، نماد مهندسی سازه‌های معماری و دکوراسیون استنلس استیل
          </p>
        </div>

        {/* Design Pillars / ارکان طراحی */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-6">
          
          <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800">
            <div className="flex items-center gap-2 text-amber-400 font-bold text-sm mb-1.5">
              <Layers className="w-4 h-4" />
              <span>هندسه ایزومتریک شش‌ضلعی (Hexagon)</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              شش‌ضلعی در متالورژی نماد ساختار بلوری پایدار و هندسه مقاطع سازه‌ای است؛ در هم‌تنیدگی خطوط، استحکام اتصالات و ظرافت اتصالات فیتینگ استیلکس را تداعی می‌کند.
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800">
            <div className="flex items-center gap-2 text-amber-400 font-bold text-sm mb-1.5">
              <Award className="w-4 h-4" />
              <span>کالیگرافی مدرن حرف S</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              فرم پیوسته و سه‌بعدی حرف S (ابتدای واژه STELLEX) به‌صورت نوار پیوسته موبیوس طراحی شده تا تداوم کیفیت و انحناهای دقیق خمکاری لوله‌ها و ورق‌ها را بازتاب دهد.
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800">
            <div className="flex items-center gap-2 text-slate-200 font-bold text-sm mb-1.5">
              <span className="w-3.5 h-3.5 rounded-full bg-slate-300 inline-block border border-slate-400" />
              <span>استنلس استیل نقره‌ای نگیر (AISI 304)</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              بخش بال چپ و پایه نقره‌ای مات و براق، اصالت متریال استیل ضدزنگ و مقاومت حداکثری در برابر خوردگی در اقلیم‌های شرجی و مرطوب را نمایان می‌سازد.
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800">
            <div className="flex items-center gap-2 text-amber-300 font-bold text-sm mb-1.5">
              <span className="w-3.5 h-3.5 rounded-full bg-amber-400 inline-block border border-amber-300" />
              <span>پوشش تیتانیوم طلایی (PVD Champagne)</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              سطوح طلایی با انعکاس گرم متالیک، نشانه لایسنس آبکاری پی‌وی‌دی در خلاء و جلوه لوکس در پروژه‌های ویلایی، هتل‌ها و پنت‌هاوس‌ها است.
            </p>
          </div>

        </div>

        {/* Technical Specs & Download */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-slate-800 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>طراحی اختصاصی سازگار با فرمت‌های وکتور، مهر و برش لیزر CNC</span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold transition-all shadow-md"
          >
            تایید و مشاهده در سایت
          </button>
        </div>

      </div>
    </div>
  );
};
