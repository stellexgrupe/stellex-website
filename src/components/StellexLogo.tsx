import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { COMPANY_INFO } from '../data/stellexData';
import logo3dAsset from '../assets/images/stellex_hex_logo_1788681476136.jpg';

interface StellexLogoProps {
  variant?: 'header' | 'footer' | 'hero' | 'standalone';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  className?: string;
  onClick?: () => void;
}

export const StellexLogo: React.FC<StellexLogoProps> = ({
  variant = 'header',
  size = 'md',
  showText = true,
  className = '',
  onClick,
}) => {
  const { language, t } = useLanguage();
  const [imgError, setImgError] = useState(false);

  // Dimension mapping
  const dimensions = {
    sm: { box: 'w-9 h-9', icon: 'w-7 h-7', text: 'text-lg', sub: 'text-[9px]' },
    md: { box: 'w-11 h-11', icon: 'w-9 h-9', text: 'text-xl', sub: 'text-[10px]' },
    lg: { box: 'w-14 h-14', icon: 'w-11 h-11', text: 'text-2xl', sub: 'text-xs' },
    xl: { box: 'w-24 h-24 sm:w-28 sm:h-28', icon: 'w-20 h-20 sm:w-24 sm:h-24', text: 'text-3xl sm:text-4xl', sub: 'text-sm' },
  }[size];

  return (
    <div 
      className={`inline-flex items-center gap-3 select-none group ${onClick ? 'cursor-pointer' : ''} ${className}`}
      onClick={onClick}
    >
      {/* 3D Isometric Hexagonal "S" Metal Emblem */}
      <div className={`relative ${dimensions.box} rounded-xl bg-gradient-to-br from-amber-400 via-amber-600/90 to-slate-900 p-[1.5px] shadow-lg shadow-amber-500/20 group-hover:shadow-amber-500/40 transition-all duration-300 flex-shrink-0`}>
        <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center overflow-hidden border border-slate-800/90 group-hover:border-amber-500/50 transition-colors">
          
          {/* Use High-Fidelity 3D Render Asset with Vector SVG Fallback */}
          {!imgError && logo3dAsset ? (
            <img
              src={logo3dAsset}
              alt="STELLEX Stainless Steel 3D Emblem"
              referrerPolicy="no-referrer"
              loading="eager"
              decoding="async"
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
              onError={() => setImgError(true)}
            />
          ) : (
            /* Precision Isometric Vector SVG Emblem */
            <svg
              viewBox="0 0 160 180"
              className={`${dimensions.icon} filter drop-shadow-[0_2px_8px_rgba(245,158,11,0.3)]`}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* 24K Titanium Gold Gradient */}
                <linearGradient id="goldTitanium" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#fef08a" />
                  <stop offset="25%" stopColor="#f59e0b" />
                  <stop offset="60%" stopColor="#d97706" />
                  <stop offset="100%" stopColor="#78350f" />
                </linearGradient>

                {/* Titanium Gold Face Light */}
                <linearGradient id="goldLight" x1="20%" y1="0%" x2="80%" y2="100%">
                  <stop offset="0%" stopColor="#fffbeb" />
                  <stop offset="50%" stopColor="#fbbf24" />
                  <stop offset="100%" stopColor="#b45309" />
                </linearGradient>

                {/* AISI 304/316 Stainless Steel Chrome Silver */}
                <linearGradient id="silverChrome" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#334155" />
                  <stop offset="35%" stopColor="#94a3b8" />
                  <stop offset="60%" stopColor="#f8fafc" />
                  <stop offset="100%" stopColor="#64748b" />
                </linearGradient>

                {/* Bevel Dark Shadow */}
                <linearGradient id="metalBevelShadow" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#451a03" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#1e293b" stopOpacity="0.9" />
                </linearGradient>
              </defs>

              {/* Outer Hexagon - Left Silver Stainless Steel Wing */}
              <path
                d="M80 12 L22 45 L22 135 L80 168 L80 148 L40 125 L40 57 L80 34 Z"
                fill="url(#silverChrome)"
                stroke="#475569"
                strokeWidth="1"
              />

              {/* Outer Hexagon - Right & Top Gold Titanium Frame */}
              <path
                d="M80 12 L138 45 L138 85 L120 75 L120 57 L80 34 Z"
                fill="url(#goldLight)"
              />
              <path
                d="M138 95 L138 135 L80 168 L80 148 L120 125 L120 105 Z"
                fill="url(#goldTitanium)"
              />

              {/* Central 3D Isometric "S" - Top Fold */}
              <path
                d="M56 46 L108 46 L118 63 L80 63 L56 46 Z"
                fill="url(#goldLight)"
              />
              <path
                d="M108 46 L122 70 L102 70 L92 53 Z"
                fill="url(#goldTitanium)"
              />

              {/* Central 3D "S" - Upper Spine */}
              <path
                d="M56 46 L70 70 L70 92 L56 78 Z"
                fill="url(#silverChrome)"
              />

              {/* Central 3D "S" - Diagonal Cross-Bridge */}
              <path
                d="M56 78 L96 78 L114 96 L74 96 Z"
                fill="url(#goldLight)"
              />
              <path
                d="M74 96 L96 78 L106 96 L84 114 Z"
                fill="url(#metalBevelShadow)"
              />

              {/* Central 3D "S" - Lower Spine */}
              <path
                d="M104 96 L104 122 L90 134 L90 108 Z"
                fill="url(#goldTitanium)"
              />

              {/* Central 3D "S" - Bottom Return */}
              <path
                d="M48 122 L104 122 L90 134 L34 134 Z"
                fill="url(#goldLight)"
              />
              <path
                d="M34 116 L48 122 L34 134 Z"
                fill="url(#silverChrome)"
              />
            </svg>
          )}

        </div>
      </div>

      {/* Brand Typography Lockup */}
      {showText && (
        <div className="flex flex-col text-left rtl:text-right">
          <div className="flex items-center gap-2">
            <span className={`${dimensions.text} font-black tracking-wider text-white font-['Cinzel',serif] group-hover:text-amber-400 transition-colors`}>
              STELLEX
            </span>
            <span className="text-[9px] font-bold bg-amber-500/20 text-amber-300 px-1.5 py-0.5 rounded border border-amber-500/30">
              {t.common.certMtc}
            </span>
          </div>
          <span className={`${dimensions.sub} text-slate-400 font-medium tracking-wide flex items-center gap-1.5`}>
            <span>{language === 'fa' ? COMPANY_INFO.nameFa : language === 'ar' ? COMPANY_INFO.nameAr : COMPANY_INFO.nameEn}</span>
            <span className="inline-block w-1 h-1 rounded-full bg-amber-500/80" />
            <span className="text-amber-400/90 font-mono text-[9px]">AISI 304/316</span>
          </span>
        </div>
      )}
    </div>
  );
};
