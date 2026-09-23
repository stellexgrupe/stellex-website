import React, { useState, useEffect } from 'react';
import { COMPANY_INFO, SERVICE_CATEGORIES } from '../data/stellexData';
import { useLanguage } from '../context/LanguageContext';
import holdingHallHeroLocal from '../assets/images/stellex_hall_official_logo_1788683211197.jpg';
import { LogoStoryModal } from './LogoStoryModal';
import { ZephyrFloatingHouse } from './ZephyrFloatingHouse';
import { 
  Sparkles, 
  ShieldCheck, 
  Layers, 
  ArrowRight, 
  ArrowLeft, 
  Calculator, 
  ChevronRight,
  Award,
  Zap,
  CheckCircle2,
  MapPin,
  ExternalLink
} from 'lucide-react';

interface HeroProps {
  onOpenConsultation: () => void;
  onOpenCalculatorPlus: () => void;
  onSelectCategory: (categoryId: string) => void;
}

// Precision Mechanical Fastener Screw - Bolting the card to the substrate
const CornerScrew: React.FC<{ className?: string; rotation?: number; isLit?: boolean }> = ({ 
  className = '', 
  rotation = 0, 
  isLit = false 
}) => (
  <div
    className={`absolute w-2 h-2 sm:w-2.5 sm:h-2.5 pointer-events-none z-20 transition-all duration-300 ${className}`}
    style={{ transform: `rotate(${rotation}deg)` }}
    title="Mechanical Fastener Bolt"
  >
    <svg viewBox="0 0 10 10" className="w-full h-full drop-shadow-[0_1px_2px_rgba(0,0,0,0.95)] overflow-visible">
      {/* Countersunk Outer Chamfer / Washer Ring */}
      <circle
        cx="5"
        cy="5"
        r="4.4"
        className={`stroke-slate-500 group-hover:stroke-amber-400/90 group-hover:fill-slate-600 transition-colors duration-300 ${
          isLit ? 'stroke-amber-400/90 fill-slate-600' : 'fill-slate-700'
        }`}
        strokeWidth="0.8"
      />
      {/* Recessed Screw Well */}
      <circle cx="5" cy="5" r="3.2" className="fill-slate-900 group-hover:fill-slate-950 transition-colors duration-300" />
      {/* Precision Crosshead Slot / Allen Drive */}
      <line x1="5" y1="2.2" x2="5" y2="7.8" stroke="#020617" strokeWidth="0.95" strokeLinecap="round" />
      <line x1="2.2" y1="5" x2="7.8" y2="5" stroke="#020617" strokeWidth="0.95" strokeLinecap="round" />
      {/* Metallic Center Specular Light Point */}
      <circle
        cx="5"
        cy="5"
        r="0.75"
        className={`group-hover:fill-amber-300 transition-colors duration-300 ${
          isLit ? 'fill-amber-300' : 'fill-slate-300'
        }`}
        opacity="0.9"
      />
    </svg>
  </div>
);

export const Hero: React.FC<HeroProps> = ({
  onOpenConsultation,
  onOpenCalculatorPlus,
  onSelectCategory,
}) => {
  const { language, t, isRtl } = useLanguage();
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;
  
  // Robust image loading with reliable high-res architectural fallback
  const fallbackHoldingImage = 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=85';
  const [imgSrc, setImgSrc] = useState<string>(holdingHallHeroLocal || '/assets/images/holding_hall_hero.jpg');
  const [logoStoryOpen, setLogoStoryOpen] = useState(false);

  // Sequential idle neon patrol:
  // Starts from rightmost card (index 0), completes 1 full clockwise rotation (2.0s),
  // cuts off and moves to card 1, then card 2, then card 3, then loops.
  // When user hovers mouse over any card, the idle sequence pauses and hover takes full precedence.
  const [activeSequenceIndex, setActiveSequenceIndex] = useState<number | null>(0);
  const [isHoveredOnBar, setIsHoveredOnBar] = useState<boolean>(false);

  useEffect(() => {
    if (isHoveredOnBar) {
      setActiveSequenceIndex(null);
      return;
    }

    // Set initial card to 0 if was null
    setActiveSequenceIndex((prev) => (prev === null ? 0 : prev));

    // Each cycle runs for 2000ms (1 full clockwise rotation) + 100ms crisp cut-off handoff
    const interval = setInterval(() => {
      setActiveSequenceIndex((prev) => (prev === null ? 0 : (prev + 1) % 4));
    }, 2100);

    return () => clearInterval(interval);
  }, [isHoveredOnBar]);

  const statCards = [
    {
      id: 'hero-stat-card-projects',
      Icon: Sparkles,
      value: `${COMPANY_INFO.completedProjectsCount}+`,
      label: t.hero.stat1Label,
      screws: [
        { className: 'top-1.5 left-1.5', rotation: 18 },
        { className: 'top-1.5 right-1.5', rotation: -35 },
        { className: 'bottom-1.5 left-1.5', rotation: 52 },
        { className: 'bottom-1.5 right-1.5', rotation: -70 },
      ],
    },
    {
      id: 'hero-stat-card-experience',
      Icon: ShieldCheck,
      value: `${COMPANY_INFO.experienceYears} ${language === 'en' ? 'Years' : language === 'ar' ? 'عاماً' : 'سال'}`,
      label: t.hero.stat2Label,
      screws: [
        { className: 'top-1.5 left-1.5', rotation: 30 },
        { className: 'top-1.5 right-1.5', rotation: -15 },
        { className: 'bottom-1.5 left-1.5', rotation: 75 },
        { className: 'bottom-1.5 right-1.5', rotation: -45 },
      ],
    },
    {
      id: 'hero-stat-card-cnc',
      Icon: Zap,
      value: '6-kW CNC',
      label: t.hero.stat3Label,
      screws: [
        { className: 'top-1.5 left-1.5', rotation: 45 },
        { className: 'top-1.5 right-1.5', rotation: -60 },
        { className: 'bottom-1.5 left-1.5', rotation: 10 },
        { className: 'bottom-1.5 right-1.5', rotation: -25 },
      ],
    },
    {
      id: 'hero-stat-card-satisfaction',
      Icon: Award,
      value: `${COMPANY_INFO.clientSatisfactionRate}%`,
      label: t.hero.stat4Label,
      screws: [
        { className: 'top-1.5 left-1.5', rotation: -20 },
        { className: 'top-1.5 right-1.5', rotation: 40 },
        { className: 'bottom-1.5 left-1.5', rotation: -55 },
        { className: 'bottom-1.5 right-1.5', rotation: 25 },
      ],
    },
  ];

  return (
    <div className="relative overflow-hidden pt-2 pb-10 lg:pt-4 lg:pb-14">
      {/* Luxina Ambient Gold & Steel Radial Lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] bg-gradient-to-b from-amber-500/10 via-slate-800/10 to-transparent blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-slate-400/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
          
          {/* Main Hero Copy & Actions Column (Left Box) */}
          <div className="w-full flex flex-col justify-center items-start text-left rtl:text-right space-y-3 max-w-xl">
            
            {/* Badges Bar: Engineering & Official 3D Logo Identity */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/90 border border-amber-500/30 shadow-sm backdrop-blur-md">
                <span className="flex h-1.5 w-1.5 rounded-full bg-amber-400 animate-ping" />
                <span className="text-[11px] font-bold text-amber-300">
                  {t.hero.badge}
                </span>
                <span className="text-slate-600">|</span>
                <span className="text-[10px] text-slate-400 font-mono flex items-center gap-1">
                  <Award className="w-2.5 h-2.5 text-amber-400" />
                  ASTM A240 / DIN
                </span>
              </div>

              {/* Official 3D Isometric Logo Badge */}
              <button
                type="button"
                onClick={() => setLogoStoryOpen(true)}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/40 text-amber-300 text-[11px] font-bold transition-all shadow-sm cursor-pointer hover:scale-105"
                title="مشاهده شناسنامه و هویت بصری لوگوی اختصاصی استیلکس"
              >
                <Sparkles className="w-3 h-3 text-amber-400 animate-pulse" />
                <span>لوگوی رسمی STELLEX</span>
              </button>
            </div>

            {/* Main Headline */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] font-black text-white leading-snug tracking-tight">
              <span className="block text-slate-100 mb-0.5">
                {t.hero.titlePrimary}
              </span>
              <span className="text-gold-gradient block">
                {t.hero.titleSecondary}
              </span>
            </h1>

            {/* Description Body */}
            <p className="text-xs sm:text-sm text-slate-300 leading-normal max-w-xl font-normal">
              {t.hero.description}
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-2.5 w-full pt-1">
              <button
                onClick={onOpenConsultation}
                className="lux-btn-gold px-4 py-2.5 rounded-xl text-xs sm:text-sm font-black flex items-center gap-1.5 cursor-pointer shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-transform"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>{t.hero.ctaPrimary}</span>
                <ArrowIcon className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={onOpenCalculatorPlus}
                className="lux-btn-outline px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 cursor-pointer"
              >
                <Calculator className="w-3.5 h-3.5 text-amber-400" />
                <span>{language === 'fa' ? 'محاسبه‌گر پلاس' : language === 'ar' ? 'حاسبة بلس الهندسية' : 'Calculator Plus'}</span>
              </button>
            </div>

          </div>

          {/* Floating House Animation Column - Right Box, perfectly matching height and baseline with Left Box */}
          <div className="w-full relative flex items-center justify-center">
            {/* Pure Floating House Graphic & Dynamic Shadow in Full Grandeur */}
            <ZephyrFloatingHouse />
          </div>

        </div>

        {/* Luxina 4-Metric Golden Pillar Bar - Compact Content-Fitted Cards with Sequential Idle Neon Patrol & Clockwise Rotation */}
        <div 
          id="hero-stat-cards-container"
          className="mt-5 sm:mt-6 flex flex-wrap max-md:landscape:flex-nowrap sm:flex-nowrap items-center justify-center gap-2 sm:gap-2.5 md:gap-3 w-full"
          onMouseEnter={() => setIsHoveredOnBar(true)}
          onMouseLeave={() => setIsHoveredOnBar(false)}
        >
          {statCards.map((card, idx) => {
            const isSeqActive = activeSequenceIndex === idx && !isHoveredOnBar;
            const CardIcon = card.Icon;

            return (
              <div
                key={card.id}
                id={card.id}
                onMouseEnter={() => setIsHoveredOnBar(true)}
                onMouseLeave={() => setIsHoveredOnBar(false)}
                className={`group relative rounded-xl p-[1.5px] overflow-hidden transition-all duration-300 hover:shadow-[0_0_24px_rgba(245,158,11,0.35),0_0_8px_rgba(251,191,36,0.45)] cursor-pointer w-[calc(50%-6px)] max-md:landscape:w-auto max-md:landscape:flex-1 max-md:landscape:min-w-0 sm:w-auto ${
                  isSeqActive ? 'shadow-[0_0_22px_rgba(245,158,11,0.35),0_0_8px_rgba(251,191,36,0.45)] ring-1 ring-amber-400/40' : ''
                }`}
              >
                {/* Static Graphic Neon Border Frame (idle state) */}
                <div className={`absolute inset-0 rounded-xl bg-gradient-to-br from-amber-500/25 via-slate-800/80 to-amber-500/15 border border-amber-500/25 transition-opacity duration-300 ${
                  isSeqActive ? 'opacity-20' : 'group-hover:opacity-20'
                }`} />

                {/* Idle Sequential Patrol: 1 Full Clockwise Rotation Neon Laser Beam */}
                {isSeqActive && (
                  <div
                    key={`seq-laser-${card.id}-${activeSequenceIndex}`}
                    className="absolute inset-[-150%] pointer-events-none animate-neon-single-turn z-0"
                    style={{
                      background: 'conic-gradient(from 0deg, transparent 0deg, transparent 230deg, rgba(217, 119, 6, 0.25) 275deg, rgba(245, 158, 11, 0.9) 320deg, #fbbf24 348deg, #ffffff 360deg)',
                    }}
                  />
                )}

                {/* Idle Sequential Patrol: 1 Full Clockwise Rotation Diffuse Neon Glow Halo */}
                {isSeqActive && (
                  <div
                    key={`seq-halo-${card.id}-${activeSequenceIndex}`}
                    className="absolute inset-[-150%] blur-[6px] pointer-events-none animate-neon-single-turn z-0"
                    style={{
                      background: 'conic-gradient(from 0deg, transparent 0deg, transparent 250deg, rgba(245, 158, 11, 0.4) 290deg, #f59e0b 330deg, #fbbf24 350deg, #ffffff 360deg)',
                    }}
                  />
                )}

                {/* Interactive Hover Graphic Neon Laser Beam - Clockwise Rotation */}
                <div
                  className="absolute inset-[-150%] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover-neon-spin z-0"
                  style={{
                    background: 'conic-gradient(from 0deg, transparent 0deg, transparent 230deg, rgba(217, 119, 6, 0.25) 275deg, rgba(245, 158, 11, 0.9) 320deg, #fbbf24 348deg, #ffffff 360deg)',
                  }}
                />

                {/* Interactive Hover Diffuse Neon Glow Halo (Radiant Tube Bloom) */}
                <div
                  className="absolute inset-[-150%] opacity-0 group-hover:opacity-100 blur-[6px] transition-opacity duration-300 pointer-events-none group-hover-neon-spin z-0"
                  style={{
                    background: 'conic-gradient(from 0deg, transparent 0deg, transparent 250deg, rgba(245, 158, 11, 0.4) 290deg, #f59e0b 330deg, #fbbf24 350deg, #ffffff 360deg)',
                  }}
                />

                {/* Inner Card Content - Centered, Snug to Content with Safe Corner Buffer */}
                <div className={`stat-card-inner relative z-10 w-full h-full rounded-[10.5px] py-2 px-2.5 sm:py-2.5 sm:px-4 max-md:landscape:py-1.5 max-md:landscape:px-2 flex items-center justify-center gap-1.5 sm:gap-2.5 bg-slate-950/85 backdrop-blur-md transition-all duration-300 ${
                  isSeqActive ? 'bg-slate-900/90' : 'group-hover:bg-slate-900/90'
                }`}>
                  {/* 4 Precision Corner Screws Bolted in Extreme Corners */}
                  {card.screws.map((screw, sIdx) => (
                    <CornerScrew 
                      key={sIdx} 
                      className={screw.className} 
                      rotation={screw.rotation} 
                      isLit={isSeqActive}
                    />
                  ))}

                  {/* Ambient Neon Backlight on Idle Sequence & Hover */}
                  <div className={`absolute inset-0 rounded-[10.5px] bg-[radial-gradient(ellipse_at_center,rgba(245,158,11,0.09),transparent_70%)] transition-opacity duration-300 pointer-events-none ${
                    isSeqActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                  }`} />

                  {/* Small Inner Box (Icon) - Centered with Clear Corner Margin */}
                  <div className={`w-7 h-7 max-md:landscape:w-6 max-md:landscape:h-6 sm:w-8 sm:h-8 rounded-lg bg-amber-500/10 border border-amber-500/25 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:border-amber-400/60 group-hover:bg-amber-500/20 group-hover:shadow-[0_0_12px_rgba(245,158,11,0.4)] group-hover:scale-105 ${
                    isSeqActive ? 'border-amber-400/60 bg-amber-500/20 shadow-[0_0_12px_rgba(245,158,11,0.4)] scale-105' : ''
                  }`}>
                    <CardIcon className={`w-3.5 h-3.5 max-md:landscape:w-3 max-md:landscape:h-3 sm:w-4 sm:h-4 text-amber-400 transition-colors group-hover:text-amber-300 ${
                      isSeqActive ? 'text-amber-300' : ''
                    }`} />
                  </div>

                  {/* Centered Typography */}
                  <div className="flex flex-col items-center justify-center text-center relative z-10 shrink-0">
                    <div className={`stat-card-value text-sm max-md:landscape:text-xs sm:text-base font-bold text-white font-mono leading-tight transition-colors group-hover:text-amber-100 ${
                      isSeqActive ? 'text-amber-100' : ''
                    }`}>
                      {card.value}
                    </div>
                    <div className={`stat-card-label text-[10px] max-md:landscape:text-[9px] sm:text-[11px] text-slate-400 font-medium leading-tight whitespace-nowrap transition-colors group-hover:text-slate-200 ${
                      isSeqActive ? 'text-slate-200' : ''
                    }`}>
                      {card.label}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Official Brand Logo Story Modal */}
      <LogoStoryModal
        isOpen={logoStoryOpen}
        onClose={() => setLogoStoryOpen(false)}
      />
    </div>
  );
};
