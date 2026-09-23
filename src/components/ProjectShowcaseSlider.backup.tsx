import React, { useState, useEffect, useRef } from 'react';
import { FEATURED_PROJECTS, SERVICE_CATEGORIES } from '../data/stellexData';
import { useLanguage } from '../context/LanguageContext';
import { ProjectItem, CategoryId } from '../types';
import { 
  ChevronLeft, 
  ChevronRight, 
  Play, 
  Pause, 
  Maximize2, 
  Sparkles, 
  MapPin, 
  Building2, 
  ShieldCheck, 
  Calendar, 
  Layers, 
  ArrowRight, 
  ArrowLeft,
  CheckCircle2
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

  // Autoplay loop (5 seconds per slide)
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

  return (
    <section id="project-slideshow" className="py-16 sm:py-24 relative overflow-hidden bg-slate-950/80">
      {/* Background Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-amber-500/5 blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
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
                ? 'نمای سینمایی ۱۶:۹ از سازه‌های اجرا شده با آلیاژهای ۳۰۴ و ۳۱۶، درب‌های لوکس، پایه‌های آماده نصب، دکوراسیون و تجهیزات تخصصی'
                : language === 'ar'
                ? 'عرض سينمائي بدقة فائقة للهياكل المنفذة بستانلس ستيل ٣٠٤ و ٣١٦، الأبواب الفاخرة، القوائم الجاهزة والمعدات التخصصية'
                : 'Cinematic widescreen 16:9 view of real-world installations across residential, commercial, and industrial sectors.'}
            </p>
          </div>

          {/* Slideshow Control Buttons */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-amber-400 hover:border-amber-500/40 transition-all cursor-pointer"
              title={isPlaying ? (language === 'en' ? 'Pause' : language === 'ar' ? 'إيقاف مؤقت' : 'توقف موقت') : (language === 'en' ? 'Auto Play' : language === 'ar' ? 'تشغيل تلقائي' : 'پخش خودکار')}
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </button>
            <div className="h-6 w-px bg-slate-800 mx-1" />
            <button
              onClick={handlePrev}
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-amber-400 hover:border-amber-500/40 transition-all cursor-pointer"
              aria-label="Previous Slide"
            >
              {isRtl ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
            </button>
            <button
              onClick={handleNext}
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-amber-400 hover:border-amber-500/40 transition-all cursor-pointer"
              aria-label="Next Slide"
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

        {/* 16:9 Widescreen Cinematic Viewport */}
        <div 
          className="relative w-full aspect-[16/9] min-h-[360px] sm:min-h-[460px] md:min-h-[520px] rounded-3xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900 group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Main Slide Image */}
          <img 
            src={activeProject.mainImage} 
            alt={activeProject.title[language]} 
            className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
          />

          {/* Cinematic Vignette & Dark Gradient Gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-slate-950/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-transparent to-slate-950/80" />

          {/* Top Bar Floating Badges */}
          <div className="absolute top-4 sm:top-6 left-4 sm:left-6 right-4 sm:right-6 flex justify-between items-center z-10">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-black bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/30">
                {SERVICE_CATEGORIES.find(c => c.id === activeProject.category)?.title[language] || 'STELLEX'}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-slate-900/80 text-amber-400 border border-amber-500/30 backdrop-blur-md">
                {activeProject.year}
              </span>
            </div>

            {/* Lightbox / Zoom Button */}
            <button
              onClick={() => {
                if (onOpenGallery) {
                  const imgs = [activeProject.mainImage, ...(activeProject.additionalImages || [])];
                  onOpenGallery(imgs, activeProject.title[language]);
                }
              }}
              className="p-2.5 rounded-xl bg-slate-900/80 text-white hover:text-amber-400 border border-slate-700 hover:border-amber-500/50 backdrop-blur-md transition-all cursor-pointer"
              title={language === 'en' ? 'Full screen & photo album' : language === 'ar' ? 'عرض ملء الشاشة وألبوم الصور' : 'مشاهده تمام‌صفحه و آلبوم تصاویر'}
            >
              <Maximize2 className="w-4 h-4" />
            </button>
          </div>

          {/* Navigation Arrows on Slide */}
          <button
            onClick={handlePrev}
            className={`absolute top-1/2 -translate-y-1/2 ${isRtl ? 'right-4 sm:right-6' : 'left-4 sm:left-6'} p-3 rounded-full bg-slate-950/60 hover:bg-amber-500 text-white hover:text-slate-950 border border-white/10 hover:border-amber-400 backdrop-blur-md transition-all opacity-80 hover:opacity-100 z-20 cursor-pointer`}
            aria-label="Previous Slide"
          >
            {isRtl ? <ChevronRight className="w-6 h-6" /> : <ChevronLeft className="w-6 h-6" />}
          </button>
          <button
            onClick={handleNext}
            className={`absolute top-1/2 -translate-y-1/2 ${isRtl ? 'left-4 sm:left-6' : 'right-4 sm:right-6'} p-3 rounded-full bg-slate-950/60 hover:bg-amber-500 text-white hover:text-slate-950 border border-white/10 hover:border-amber-400 backdrop-blur-md transition-all opacity-80 hover:opacity-100 z-20 cursor-pointer`}
            aria-label="Next Slide"
          >
            {isRtl ? <ChevronLeft className="w-6 h-6" /> : <ChevronRight className="w-6 h-6" />}
          </button>

          {/* Bottom Info Overlay */}
          <div className="absolute bottom-0 inset-x-0 p-5 sm:p-8 z-10">
            <div className="max-w-4xl">
              {/* Client & Location */}
              <div className="flex flex-wrap items-center gap-3 text-xs text-slate-300 font-medium mb-2">
                <span className="flex items-center gap-1.5 text-amber-400">
                  <Building2 className="w-3.5 h-3.5 shrink-0" />
                  <span>{activeProject.client[language]}</span>
                </span>
                <span className="text-slate-600">•</span>
                <span className="flex items-center gap-1.5 text-slate-300">
                  <MapPin className="w-3.5 h-3.5 shrink-0 text-amber-400" />
                  <span>{activeProject.location[language]}</span>
                </span>
              </div>

              {/* Title - Imperial Royal Gold Accent */}
              <h3 className="project-slide-title text-lg sm:text-2xl md:text-3xl font-black text-amber-300 sm:text-yellow-400 leading-tight mb-3">
                {activeProject.title[language]}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-300/90 line-clamp-2 sm:line-clamp-3 mb-4 leading-relaxed max-w-3xl">
                {activeProject.description[language]}
              </p>

              {/* Specs & Action Row */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-white/10">
                <div className="flex flex-wrap items-center gap-2">
                  <div className="px-2.5 py-1 rounded-lg bg-slate-900/80 border border-slate-700/80 text-[11px] text-slate-200">
                    <span className="text-amber-400 font-bold ml-1">{language === 'en' ? 'Alloy:' : language === 'ar' ? 'السبيكة:' : 'آلیاژ:'}</span>
                    <span>{activeProject.alloyUsed[language]}</span>
                  </div>
                  <div className="px-2.5 py-1 rounded-lg bg-slate-900/80 border border-slate-700/80 text-[11px] text-slate-200">
                    <span className="text-amber-400 font-bold ml-1">{language === 'en' ? 'Finish:' : language === 'ar' ? 'الطلاء:' : 'پوشش:'}</span>
                    <span>{activeProject.finish[language]}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {onSelectProject && (
                    <button
                      onClick={() => onSelectProject(activeProject)}
                      className="px-4 py-2 rounded-xl text-xs font-bold bg-slate-900/90 text-slate-200 hover:text-white hover:bg-slate-800 border border-slate-700 transition-all cursor-pointer"
                    >
                      {t.portfolio.viewFullSpecs}
                    </button>
                  )}

                  {onOpenConsultationWithProject && (
                    <button
                      onClick={() => onOpenConsultationWithProject(activeProject.title[language], activeProject.category)}
                      className="lux-btn-gold px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 cursor-pointer shadow-lg shadow-amber-500/20"
                    >
                      <span>{t.portfolio.orderSimilar}</span>
                      <ArrowIcon className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Autoplay Progress Bar */}
          {isPlaying && (
            <div className="absolute bottom-0 inset-x-0 h-1 bg-slate-800">
              <div 
                key={currentIndex}
                className="h-full bg-amber-500 transition-all duration-[5500ms] ease-linear"
                style={{ width: '100%' }}
              />
            </div>
          )}
        </div>

        {/* Thumbnails Carousel Bar */}
        <div className="mt-4 flex items-center gap-3 overflow-x-auto pb-2 no-scrollbar">
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
              >
                <img 
                  src={project.mainImage} 
                  alt={project.title[language]} 
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
