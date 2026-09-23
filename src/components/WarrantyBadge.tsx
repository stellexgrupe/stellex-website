import React from 'react';
import { ShieldCheck, Award, Sparkles, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface WarrantyBadgeProps {
  variant?: 'card' | 'seal' | 'compact' | 'ribbon' | 'banner';
  years?: number;
  className?: string;
  showDetails?: boolean;
}

export const WarrantyBadge: React.FC<WarrantyBadgeProps> = ({
  variant = 'card',
  years = 10,
  className = '',
  showDetails = false,
}) => {
  const { language } = useLanguage();

  const label = {
    fa: `گارانتی ۱۰ ساله رسمی`,
    ar: `ضمان خطي ١٠ سنوات`,
    en: `10-Year Written Warranty`,
  }[language];

  const subLabel = {
    fa: `تضمین کتبی اصالت و ضدزنگ کارخانه`,
    ar: `ضمان معتمد ضد الصدأ وتآكل السبائك`,
    en: `Official Written Anti-Corrosion Guarantee`,
  }[language];

  if (variant === 'seal') {
    return (
      <div
        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gradient-to-r from-amber-500/20 via-amber-400/10 to-amber-600/20 border border-amber-400/50 shadow-md shadow-amber-500/10 backdrop-blur-md select-none group transition-all hover:scale-105 ${className}`}
        title={label}
      >
        <div className="w-5 h-5 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-slate-950 font-black shadow-sm shrink-0">
          <ShieldCheck className="w-3.5 h-3.5 text-slate-950 stroke-[2.5]" />
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] font-black text-amber-300 font-mono tracking-tight leading-tight whitespace-nowrap flex items-center gap-1">
            <span>{label}</span>
            <Sparkles className="w-2.5 h-2.5 text-amber-400" />
          </span>
          {showDetails && (
            <span className="text-[8px] text-slate-400 font-medium whitespace-nowrap">
              {subLabel}
            </span>
          )}
        </div>
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <span
        className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-amber-500/15 border border-amber-400/40 text-amber-300 text-[10px] font-bold backdrop-blur-sm select-none shadow-sm ${className}`}
        title={label}
      >
        <ShieldCheck className="w-3 h-3 text-amber-400 shrink-0" />
        <span className="font-mono">{label}</span>
      </span>
    );
  }

  if (variant === 'ribbon') {
    return (
      <div
        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-gradient-to-r from-amber-500/90 via-amber-400 to-amber-500 text-slate-950 font-black text-[11px] shadow-lg shadow-amber-500/25 select-none ${className}`}
      >
        <Award className="w-3.5 h-3.5 text-slate-950 shrink-0" />
        <span className="font-bold">{label}</span>
      </div>
    );
  }

  if (variant === 'banner') {
    return (
      <div
        className={`flex items-center justify-between gap-3 p-3 rounded-2xl bg-gradient-to-r from-amber-500/15 via-slate-900 to-amber-500/10 border border-amber-400/30 shadow-md ${className}`}
      >
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-400 shrink-0">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <h5 className="text-xs font-black text-amber-300 flex items-center gap-1.5">
              <span>{label}</span>
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            </h5>
            <p className="text-[10px] text-slate-400 leading-snug">
              {subLabel}
            </p>
          </div>
        </div>
        <span className="px-2 py-1 rounded-lg bg-slate-950 border border-amber-500/30 text-[10px] font-mono font-bold text-amber-400 shrink-0">
          ASTM A240 / 304
        </span>
      </div>
    );
  }

  // Default: 'card' (For card overlays or prominent badges)
  return (
    <div
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-slate-950/85 hover:bg-slate-900 border border-amber-400/50 shadow-md shadow-amber-500/10 backdrop-blur-md transition-all select-none group ${className}`}
      title={subLabel}
    >
      <div className="w-4 h-4 rounded-full bg-amber-500/20 border border-amber-400/60 flex items-center justify-center text-amber-400 shrink-0">
        <ShieldCheck className="w-3 h-3 text-amber-300" />
      </div>
      <span className="text-[10px] font-black text-amber-300 font-mono tracking-tight whitespace-nowrap">
        {label}
      </span>
    </div>
  );
};
