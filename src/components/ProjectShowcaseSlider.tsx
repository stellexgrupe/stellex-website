import React, { useState, useEffect, useRef } from 'react';
import { FEATURED_PROJECTS, SERVICE_CATEGORIES } from '../data/stellexData';
import { useLanguage } from '../context/LanguageContext';
import { ProjectItem } from '../types';
import { WarrantyBadge } from './WarrantyBadge';
import { 
  ChevronLeft, 
  ChevronRight, 
  Play, 
  Pause, 
  Maximize2, 
  Sparkles, 
  MapPin, 
  Building2, 
  ArrowRight, 
  ArrowLeft,
  Calendar,
  Layers,
  Award,
  Eye,
  MessageSquare
} from 'lucide-react';

interface ProjectShowcaseSliderProps {
  onSelectProject?: (project: ProjectItem) => void;
  onOpenConsultationWithProject?: (projectTitle: string, categoryId: string) => void;
  onOpenGallery?: (images: string[], title: string) => void;
}

export const ProjectShowcaseSlider: React.FC<ProjectShowcaseSliderProps> = ({
  onSelectProject,
  onOpenConsultationWithProject,
  onOpenGallery,
}) => {
  const { language, t, isRtl } = useLanguage();
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Filter projects
  const filteredProjects = selectedFilter === 'all' 
    ? FEATURED_PROJECTS 
    : FEATURED_PROJECTS.filter(p => p.category === selectedFilter);

  // Reset index when filter changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [selectedFilter]);

  // Autoplay loop (5.5 seconds per slide)
  useEffect(() => {
    if (isPlaying && !isHovered && filteredProjects.length > 1) {
      timerRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % filteredProjects.length);
      }, 5500);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, isHovered, filteredProjects.length]);

  const activeProject = filteredProjects[currentIndex] || FEATURED_PROJECTS[0];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? filteredProjects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredProjects.length);
  };

  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;
  const activeCategoryTitle = SERVICE_CATEGORIES.find(c => c.id === activeProject.category)?.title[language] || 'STELLEX';

  return (
    <section id="project-slideshow" className="pt-4 pb-16 sm:pt-8 sm:pb-24 relative overflow-hidden bg-slate-950/90">
      {/* Background Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-amber-500/5 blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-2 sm:-mt-4">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>
                {language === 'fa' 
                  ? 'گالری و اسلاید شو سینمایی ۱۶:۹ پروژه‌ها' 
                  : language === 'ar' 
                  ? 'المعرض السينمائي ١٦:٩ للمشاريع المنفذة' 
                  : '16:9 Cinematic Showcase of Executed Projects'}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              {language === 'fa'
                ? 'شو کیس پروژه‌های اجرایی استیلکس'
                : language === 'ar'
                ? 'معرض الإنجازات والأعمال الكبرى'
                : 'STELLEX Executed Architectural Projects'}
            </h2>
            <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-2xl">
              {language === 'fa'
                ? 'نمای سینمایی از سازه‌های اجرا شده با آلیاژهای ۳۰۴ و ۳۱۶، درب‌های لوکس، پایه‌های آماده نصب، دکوراسیون و تجهیزات تخصصی'
                : language === 'ar'
                ? 'عرض سينمائي بدقة فائقة للهياكل المنفذة بستانلس ستيل ٣٠٤ و ٣١٦، الأبواب الفاخرة، القوائم الجاهزة والمعدات التخصصية'
                : 'Cinematic widescreen view of real-world installations across residential, commercial, and industrial sectors.'}
            </p>
          </div>

          {/* Slideshow Global Controls */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-amber-400 hover:border-amber-500/40 transition-all cursor-pointer shadow-sm"
              title={isPlaying ? (language === 'en' ? 'Pause' : language === 'ar' ? 'إيقاف مؤقت' : 'توقف موقت') : (language === 'en' ? 'Auto Play' : language === 'ar' ? 'تشغيل تلقائي' : 'پخش خودکار')}
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </button>
            <div className="h-6 w-px bg-slate-800 mx-1" />
            <button
              onClick={handlePrev}
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-amber-400 hover:border-amber-500/40 transition-all cursor-pointer shadow-sm"
              aria-label="Previous Slide"
              title={language === 'fa' ? 'پروژه قبلی' : 'Previous'}
            >
              {isRtl ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
            </button>
            <button
              onClick={handleNext}
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-amber-400 hover:border-amber-500/40 transition-all cursor-pointer shadow-sm"
              aria-label="Next Slide"
              title={language === 'fa' ? 'پروژه بعدی' : 'Next'}
            >
              {isRtl ? <ChevronLeft className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 no-scrollbar">
          <button
            onClick={() => setSelectedFilter('all')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer border ${
              selectedFilter === 'all'
                ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-md shadow-amber-500/20'
                : 'bg-slate-900/80 text-slate-300 border-slate-800 hover:border-slate-700 hover:text-white'
            }`}
          >
            {t.portfolio.allFilter} ({FEATURED_PROJECTS.length})
          </button>
          {SERVICE_CATEGORIES.map((cat) => {
            const count = FEATURED_PROJECTS.filter(p => p.category === cat.id).length;
            const isSelected = selectedFilter === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedFilter(cat.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer border flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-md shadow-amber-500/20'
                    : 'bg-slate-900/80 text-slate-300 border-slate-800 hover:border-slate-700 hover:text-white'
                }`}
              >
                <span>{cat.title[language]}</span>
                {count > 0 && (
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-md ${
                    isSelected ? 'bg-slate-950/20 text-slate-950' : 'bg-slate-800 text-amber-400'
                  }`}>
                    {count}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* ========================================================================= */}
        {/* 2-PANEL SHOWCASE STAGE: COMPACT INFO CARD (4 COLS) + ELONGATED SLIDE (8 COLS) */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">
          
          {/* ----------------------------------------------------------------------- */}
          {/* 1. COMPACT GENERAL INFO CARD (کادر توضیحات کوچک‌تر و جمع‌وجور) - 4 COLS  */}
          {/* ----------------------------------------------------------------------- */}
          <div className="lg:col-span-4 order-2 lg:order-1 flex flex-col">
            <div className="lux-card rounded-3xl p-5 sm:p-6 border border-slate-800 hover:border-amber-500/40 shadow-2xl bg-gradient-to-b from-slate-900/95 via-slate-950 to-slate-900/95 flex-1 flex flex-col justify-between relative overflow-hidden transition-all">
              
              {/* Subtle Ambient Light in Card */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-amber-500/5 rounded-full blur-2xl pointer-events-none" />

              <div className="space-y-3 relative z-10">
                
                {/* Badges & Slide Counter Row */}
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-black bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20">
                      {activeCategoryTitle}
                    </span>
                    <span className="px-2 py-0.5 rounded-full text-[11px] font-mono font-bold bg-slate-950 border border-slate-800 text-amber-400">
                      {activeProject.year}
                    </span>
                    <WarrantyBadge variant="seal" years={10} />
                  </div>

                  <span className="text-[10px] font-mono font-bold text-slate-400 bg-slate-950/80 px-2 py-0.5 rounded-lg border border-slate-800">
                    {language === 'fa' 
                      ? `${currentIndex + 1} از ${filteredProjects.length}`
                      : `${currentIndex + 1} of ${filteredProjects.length}`}
                  </span>
                </div>

                {/* Client & Location Details */}
                <div className="flex flex-wrap items-center gap-2 text-xs text-slate-300 font-medium">
                  <span className="flex items-center gap-1 text-amber-400 font-bold truncate max-w-[160px]">
                    <Building2 className="w-3.5 h-3.5 shrink-0" />
                    <span>{activeProject.client[language]}</span>
                  </span>
                  <span className="text-slate-700">•</span>
                  <span className="flex items-center gap-1 text-slate-300 truncate max-w-[140px]">
                    <MapPin className="w-3.5 h-3.5 shrink-0 text-amber-400" />
                    <span>{activeProject.location[language]}</span>
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="project-slide-title text-base sm:text-lg lg:text-xl font-black text-amber-300 leading-snug">
                  {activeProject.title[language]}
                </h3>

                {/* Project Description (Compact & clear) */}
                <p className="text-xs text-slate-300 leading-relaxed font-normal line-clamp-3">
                  {activeProject.description[language]}
                </p>

                {/* Engineering Specifications Grid (Compact) */}
                <div className="p-3 rounded-2xl bg-slate-950/80 border border-slate-800/90 space-y-2 text-[11px]">
                  <div className="flex items-center justify-between text-slate-300">
                    <span className="text-slate-400 flex items-center gap-1.5">
                      <Layers className="w-3 h-3 text-amber-400 shrink-0" />
                      <span>{language === 'en' ? 'Alloy:' : language === 'ar' ? 'السبيكة:' : 'آلیاژ:'}</span>
                    </span>
                    <strong className="text-amber-300 font-mono font-bold truncate max-w-[130px]">
                      {activeProject.alloyUsed[language]}
                    </strong>
                  </div>

                  <div className="flex items-center justify-between text-slate-300">
                    <span className="text-slate-400 flex items-center gap-1.5">
                      <Award className="w-3 h-3 text-amber-400 shrink-0" />
                      <span>{language === 'en' ? 'Finish:' : language === 'ar' ? 'الطلاء:' : 'پوشش:'}</span>
                    </span>
                    <strong className="text-white font-medium truncate max-w-[130px]">
                      {activeProject.finish[language]}
                    </strong>
                  </div>
                </div>

              </div>

              {/* Action Buttons & Mini Stepper */}
              <div className="pt-3.5 mt-3 border-t border-slate-800/80 space-y-2 relative z-10">
                <div className="grid grid-cols-2 gap-2">
                  {onSelectProject && (
                    <button
                      onClick={() => onSelectProject(activeProject)}
                      className="w-full py-2 px-2.5 rounded-xl text-[11px] font-bold bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700 transition-all cursor-pointer flex items-center justify-center gap-1"
                    >
                      <Eye className="w-3 h-3 text-amber-400" />
                      <span className="truncate">{t.portfolio.viewFullSpecs}</span>
                    </button>
                  )}

                  {onOpenConsultationWithProject && (
                    <button
                      onClick={() => onOpenConsultationWithProject(activeProject.title[language], activeProject.category)}
                      className="w-full lux-btn-gold py-2 px-2.5 rounded-xl text-[11px] font-black flex items-center justify-center gap-1 cursor-pointer shadow-md shadow-amber-500/20"
                    >
                      <MessageSquare className="w-3 h-3" />
                      <span className="truncate">{t.portfolio.orderSimilar}</span>
                      <ArrowIcon className="w-2.5 h-2.5" />
                    </button>
                  )}
                </div>

                {/* Quick Next/Prev Stepper inside info card */}
                <div className="flex items-center justify-between pt-1 text-[11px] text-slate-400">
                  <button
                    onClick={handlePrev}
                    className="flex items-center gap-1 hover:text-amber-400 transition-colors cursor-pointer py-1 px-1.5 rounded-lg hover:bg-slate-800/60"
                  >
                    {isRtl ? <ChevronRight className="w-3 h-3" /> : <ChevronLeft className="w-3 h-3" />}
                    <span>{language === 'fa' ? 'پروژه قبل' : 'Prev'}</span>
                  </button>

                  <button
                    onClick={handleNext}
                    className="flex items-center gap-1 hover:text-amber-400 transition-colors cursor-pointer py-1 px-1.5 rounded-lg hover:bg-slate-800/60"
                  >
                    <span>{language === 'fa' ? 'پروژه بعد' : 'Next'}</span>
                    {isRtl ? <ChevronLeft className="w-3 h-3" /> : <ChevronRight className="w-3 h-3" />}
                  </button>
                </div>
              </div>

            </div>
          </div>

          {/* ----------------------------------------------------------------------- */}
          {/* 2. WIDER & ELONGATED SLIDESHOW FRAME (کادر عکس کشیده‌تر و عریض‌تر) - 8 COLS */}
          {/* ----------------------------------------------------------------------- */}
          <div className="lg:col-span-8 order-1 lg:order-2 flex flex-col">
            <div 
              className="relative w-full rounded-3xl overflow-hidden border border-slate-800 hover:border-amber-500/40 shadow-2xl bg-slate-900 group aspect-[16/9] md:aspect-[18/9] lg:aspect-[20/9] min-h-[300px] sm:min-h-[360px] lg:min-h-[420px] flex-1 flex items-center justify-center transition-all"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Main Slide Image: 100% clear widescreen elongated view */}
              <img 
                src={activeProject.mainImage} 
                alt={activeProject.title[language]} 
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              />

              {/* Minimal soft vignette on edges only */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-black/15 pointer-events-none" />

              {/* Lightbox / Zoom Button (Top-end) */}
              <div className="absolute top-4 end-4 z-20">
                <button
                  onClick={() => {
                    if (onOpenGallery) {
                      const imgs = [activeProject.mainImage, ...(activeProject.additionalImages || [])];
                      onOpenGallery(imgs, activeProject.title[language]);
                    }
                  }}
                  className="p-2.5 rounded-xl bg-slate-950/80 text-white hover:bg-amber-500 hover:text-slate-950 border border-slate-700 hover:border-amber-400 backdrop-blur-md transition-all cursor-pointer shadow-xl"
                  title={language === 'en' ? 'Full screen & photo album' : language === 'ar' ? 'عرض ملء الشاشة وألبوم الصور' : 'مشاهده تمام‌صفحه و آلبوم تصاویر'}
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>

              {/* Navigation Arrows on Slide */}
              <button
                onClick={handlePrev}
                className={`absolute top-1/2 -translate-y-1/2 ${isRtl ? 'right-3 sm:right-4' : 'left-3 sm:left-4'} p-2.5 sm:p-3 rounded-full bg-slate-950/70 hover:bg-amber-500 text-white hover:text-slate-950 border border-white/10 hover:border-amber-400 backdrop-blur-md transition-all opacity-80 hover:opacity-100 z-20 cursor-pointer shadow-lg`}
                aria-label="Previous Slide"
              >
                {isRtl ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
              </button>
              <button
                onClick={handleNext}
                className={`absolute top-1/2 -translate-y-1/2 ${isRtl ? 'left-3 sm:left-4' : 'right-3 sm:right-4'} p-2.5 sm:p-3 rounded-full bg-slate-950/70 hover:bg-amber-500 text-white hover:text-slate-950 border border-white/10 hover:border-amber-400 backdrop-blur-md transition-all opacity-80 hover:opacity-100 z-20 cursor-pointer shadow-lg`}
                aria-label="Next Slide"
              >
                {isRtl ? <ChevronLeft className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
              </button>

              {/* Floating Slide Client Label */}
              <div className="absolute bottom-3 start-4 z-20 pointer-events-none">
                <span className="px-3 py-1 rounded-lg text-[11px] font-mono font-bold bg-slate-950/85 text-slate-200 border border-slate-800 backdrop-blur-md shadow-md">
                  {activeProject.client[language]}
                </span>
              </div>

              {/* Autoplay Progress Bar */}
              {isPlaying && (
                <div className="absolute bottom-0 inset-x-0 h-1 bg-slate-800/80 z-20">
                  <div 
                    key={currentIndex}
                    className="h-full bg-amber-500 transition-all duration-[5500ms] ease-linear"
                    style={{ width: '100%' }}
                  />
                </div>
              )}
            </div>
          </div>

        </div>

        {/* Thumbnails Carousel Bar */}
        <div className="mt-6 flex items-center gap-3 overflow-x-auto pb-2 no-scrollbar">
          {filteredProjects.map((project, idx) => {
            const isActive = idx === currentIndex;
            return (
              <button
                key={project.id}
                onClick={() => setCurrentIndex(idx)}
                className={`relative w-24 sm:w-32 aspect-video shrink-0 rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                  isActive 
                    ? 'border-amber-400 ring-2 ring-amber-500/50 scale-105' 
                    : 'border-slate-800 opacity-60 hover:opacity-100 hover:border-slate-600'
                }`}
                title={project.title[language]}
              >
                <img 
                  src={project.mainImage} 
                  alt={project.title[language]} 
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
                {isActive && (
                  <div className="absolute inset-0 bg-amber-500/10" />
                )}
                <div className="absolute bottom-1 right-1 left-1">
                  <span className="text-[9px] font-bold text-white bg-slate-950/80 px-1 py-0.5 rounded block truncate">
                    {project.client[language]}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
};
