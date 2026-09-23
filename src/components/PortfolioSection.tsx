import React, { useState } from 'react';
import { FEATURED_PROJECTS, SERVICE_CATEGORIES } from '../data/stellexData';
import { useLanguage } from '../context/LanguageContext';
import { ProjectItem, CategoryId } from '../types';
import { 
  Sparkles, 
  MapPin, 
  Calendar, 
  Layers, 
  Clock, 
  ChevronRight, 
  ArrowRight, 
  ArrowLeft,
  Maximize2, 
  Columns,
  CheckCircle,
  Building2
} from 'lucide-react';

interface PortfolioSectionProps {
  onSelectProject: (project: ProjectItem) => void;
  onOpenConsultationWithProject: (projectTitle: string, category: CategoryId) => void;
  onOpenGallery: (images: string[], title: string) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  onSelectProject,
  onOpenConsultationWithProject,
  onOpenGallery,
}) => {
  const { language, t, isRtl } = useLanguage();
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [compareProject, setCompareProject] = useState<ProjectItem | null>(null);
  const [sliderPos, setSliderPos] = useState<number>(50);

  const filteredProjects = selectedFilter === 'all'
    ? FEATURED_PROJECTS
    : FEATURED_PROJECTS.filter(p => p.category === selectedFilter);

  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <section id="portfolio" className="py-16 sm:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.portfolio.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight mb-4">
            {t.portfolio.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-400 font-normal leading-relaxed">
            {t.portfolio.desc}
          </p>

          {/* Department Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            <button
              onClick={() => setSelectedFilter('all')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                selectedFilter === 'all'
                  ? 'bg-amber-500 text-slate-950 border-amber-400 font-black shadow-lg shadow-amber-500/20'
                  : 'lux-card text-slate-300 hover:text-white border-slate-800'
              }`}
            >
              {t.portfolio.allFilter}
            </button>

            {SERVICE_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedFilter(cat.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                  selectedFilter === cat.id
                    ? 'bg-amber-500 text-slate-950 border-amber-400 font-black shadow-lg shadow-amber-500/20'
                    : 'lux-card text-slate-300 hover:text-white border-slate-800'
                }`}
              >
                {cat.title[language]}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => {
            const cat = SERVICE_CATEGORIES.find(c => c.id === project.category);
            const hasBeforeAfter = !!(project.beforeImage && project.afterImage);

            return (
              <div
                key={project.id}
                className="lux-card rounded-3xl overflow-hidden border border-slate-800 hover:border-amber-500/50 transition-all duration-300 flex flex-col justify-between group shadow-xl"
              >
                {/* Image Viewport */}
                <div className="relative aspect-16/10 overflow-hidden bg-slate-950">
                  <img
                    src={project.mainImage}
                    alt={project.title[language]}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex justify-between items-center pointer-events-none">
                    <div className="flex items-center gap-1.5">
                      <span className="px-2.5 py-1 rounded-lg text-[10px] font-bold bg-slate-950/80 text-amber-400 border border-amber-500/30 backdrop-blur-md">
                        {cat?.title[language]}
                      </span>
                    </div>

                    <span className="px-2 py-1 rounded-lg text-[10px] font-mono font-bold bg-slate-900/80 text-slate-300 border border-slate-700 backdrop-blur-md">
                      {project.year}
                    </span>
                  </div>

                  {/* Action Badges over image */}
                  <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center">
                    {hasBeforeAfter && (
                      <button
                        onClick={() => setCompareProject(project)}
                        className="px-2.5 py-1 rounded-lg text-[10px] font-bold bg-amber-500/90 text-slate-950 hover:bg-amber-400 flex items-center gap-1 shadow-md cursor-pointer transition-all"
                      >
                        <Columns className="w-3 h-3" />
                        <span>{t.common.compareBeforeAfter}</span>
                      </button>
                    )}

                    <button
                      onClick={() => onOpenGallery([project.mainImage, ...(project.additionalImages || [])], project.title[language])}
                      className="px-2.5 py-1 rounded-lg text-[10px] font-bold bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700 flex items-center gap-1 cursor-pointer transition-all ml-auto rtl:ml-0 rtl:mr-auto"
                    >
                      <Maximize2 className="w-3 h-3" />
                      <span>{(project.additionalImages?.length || 0) + 1} {language === 'en' ? 'Photos' : language === 'ar' ? 'صور' : 'تصویر'}</span>
                    </button>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-base font-black text-white group-hover:text-amber-400 transition-colors line-clamp-2 mb-2">
                      {project.title[language]}
                    </h3>
                    <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                      {project.description[language]}
                    </p>
                  </div>

                  {/* Specifications Meta */}
                  <div className="space-y-1.5 pt-2 border-t border-slate-800 text-[11px] text-slate-300">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400 flex items-center gap-1">
                        <Building2 className="w-3 h-3 text-amber-400" />
                        {t.portfolio.clientLabel}
                      </span>
                      <span className="font-bold text-slate-200 truncate max-w-[170px]">
                        {project.client[language]}
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-slate-400 flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-amber-400" />
                        {t.portfolio.locationLabel}
                      </span>
                      <span className="font-medium text-slate-300 truncate max-w-[170px]">
                        {project.location[language]}
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-slate-400 flex items-center gap-1">
                        <Layers className="w-3 h-3 text-amber-400" />
                        {t.portfolio.alloyLabel}
                      </span>
                      <span className="font-mono text-amber-400 font-bold truncate max-w-[170px]">
                        {project.alloyUsed[language]}
                      </span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-800">
                    <button
                      onClick={() => onSelectProject(project)}
                      className="py-2 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 text-xs font-bold border border-slate-700 text-center cursor-pointer transition-all"
                    >
                      {t.portfolio.viewFullSpecs}
                    </button>

                    <button
                      onClick={() => onOpenConsultationWithProject(project.title[language], project.category)}
                      className="lux-btn-gold py-2 px-3 rounded-xl text-xs font-black text-center cursor-pointer flex items-center justify-center gap-1"
                    >
                      <span>{t.portfolio.orderSimilar}</span>
                      <ArrowIcon className="w-3 h-3" />
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Before / After Interactive Split Comparison Modal */}
      {compareProject && compareProject.beforeImage && compareProject.afterImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-xl animate-in fade-in">
          <div className="lux-card w-full max-w-4xl rounded-3xl p-6 sm:p-8 border border-slate-700 shadow-2xl relative">
            <div className="flex items-center justify-between mb-4">
              <div>
                <span className="text-xs text-amber-400 font-bold font-mono">
                  BEFORE & AFTER SPLIT COMPARISON
                </span>
                <h3 className="text-lg font-black text-white">
                  {compareProject.title[language]}
                </h3>
              </div>
              <button
                onClick={() => setCompareProject(null)}
                className="p-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white cursor-pointer"
              >
                ✕
              </button>
            </div>

            <p className="text-xs text-slate-400 mb-4">
              {t.portfolio.beforeAfterNotice}
            </p>

            {/* Split Screen Slider */}
            <div className="relative h-80 sm:h-96 rounded-2xl overflow-hidden select-none border border-slate-700">
              {/* After (Full) Image */}
              <img
                src={compareProject.afterImage}
                alt="After"
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <span className="absolute top-4 right-4 z-10 px-3 py-1 rounded-lg bg-slate-950/80 text-amber-400 text-xs font-bold border border-amber-500/40">
                {language === 'en' ? 'AFTER (STELLEX INSTALLATION)' : language === 'ar' ? 'بعد التنفيذ والتركيب' : 'بعد از اجرای استیلکس'}
              </span>

              {/* Before (Clipped) Image */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${sliderPos}%` }}
              >
                <img
                  src={compareProject.beforeImage}
                  alt="Before"
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover max-w-none"
                  style={{ width: '100%' }}
                />
                <span className="absolute top-4 left-4 z-10 px-3 py-1 rounded-lg bg-slate-950/80 text-slate-300 text-xs font-bold border border-slate-700">
                  {language === 'en' ? 'BEFORE' : language === 'ar' ? 'قبل التنفيذ' : 'قبل از اجرا'}
                </span>
              </div>

              {/* Slider Line & Handle */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-amber-400 shadow-lg cursor-ew-resize flex items-center justify-center"
                style={{ left: `${sliderPos}%` }}
              >
                <div className="w-8 h-8 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center font-bold text-xs shadow-xl border-2 border-white">
                  ⟷
                </div>
              </div>

              {/* Invisible Slider Input for Dragging */}
              <input
                type="range"
                min="0"
                max="100"
                value={sliderPos}
                onChange={(e) => setSliderPos(Number(e.target.value))}
                className="absolute inset-0 opacity-0 cursor-ew-resize w-full h-full"
              />
            </div>

            <div className="mt-4 flex justify-end">
              <button
                onClick={() => setCompareProject(null)}
                className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold cursor-pointer"
              >
                {t.common.close}
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
