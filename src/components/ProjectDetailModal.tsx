import React from 'react';
import { ProjectItem, CategoryId } from '../types';
import { SERVICE_CATEGORIES, COMPANY_INFO } from '../data/stellexData';
import { useLanguage } from '../context/LanguageContext';
import { WarrantyBadge } from './WarrantyBadge';
import { 
  X, 
  MapPin, 
  Calendar, 
  Layers, 
  Sparkles, 
  Clock, 
  Building2, 
  CheckCircle2, 
  ShieldCheck,
  Send,
  Maximize2
} from 'lucide-react';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onOpenConsultationWithProject: (title: string, category: CategoryId) => void;
  onOpenGallery: (images: string[], title: string) => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onOpenConsultationWithProject,
  onOpenGallery,
}) => {
  const { language, t } = useLanguage();

  if (!project) return null;

  const category = SERVICE_CATEGORIES.find(c => c.id === project.category);
  const allImages = [project.mainImage, ...(project.additionalImages || [])];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-xl animate-in fade-in">
      <div className="lux-card w-full max-w-4xl rounded-3xl p-6 sm:p-8 border border-slate-700 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 rtl:right-auto rtl:left-5 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white cursor-pointer transition-colors z-20"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-6">
          
          {/* Header & Meta */}
          <div>
            <div className="flex items-center gap-2 text-amber-400 text-xs font-bold mb-1.5 flex-wrap">
              <span className="px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30">
                {category?.title[language]}
              </span>
              <span className="text-slate-600">|</span>
              <span className="font-mono text-slate-400">{project.year}</span>
              <WarrantyBadge variant="seal" years={10} />
            </div>

            <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-white">
              {project.title[language]}
            </h2>
          </div>

          {/* Main Visual Image & Gallery trigger */}
          <div className="relative rounded-2xl overflow-hidden border border-slate-700 aspect-16/9 bg-slate-950">
            <img
              src={project.mainImage}
              alt={project.title[language]}
              className="w-full h-full object-cover"
            />
            <button
              onClick={() => onOpenGallery(allImages, project.title[language])}
              className="absolute bottom-4 right-4 rtl:right-auto rtl:left-4 px-3.5 py-2 rounded-xl text-xs font-bold bg-slate-950/90 hover:bg-amber-500 hover:text-slate-950 text-slate-200 border border-slate-700 flex items-center gap-1.5 backdrop-blur-md transition-all cursor-pointer"
            >
              <Maximize2 className="w-4 h-4" />
              <span>{t.services.viewGallery} ({allImages.length})</span>
            </button>
          </div>

          {/* 4 Specifications Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800">
              <span className="text-[10px] text-slate-400 block mb-0.5">{t.portfolio.clientLabel}</span>
              <span className="text-xs font-black text-white truncate block">{project.client[language]}</span>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800">
              <span className="text-[10px] text-slate-400 block mb-0.5">{t.portfolio.locationLabel}</span>
              <span className="text-xs font-bold text-white truncate block">{project.location[language]}</span>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800">
              <span className="text-[10px] text-slate-400 block mb-0.5">{t.portfolio.alloyLabel}</span>
              <span className="text-xs font-mono font-black text-amber-400 truncate block">{project.alloyUsed[language]}</span>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800">
              <span className="text-[10px] text-slate-400 block mb-0.5">{language === 'en' ? 'PVD Finish:' : language === 'ar' ? 'نوع الطلاء:' : 'نوع پوشش و پرداخت:'}</span>
              <span className="text-xs font-bold text-amber-300 truncate block">{project.finish?.[language] || '-'}</span>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
              {language === 'en' ? 'Project Overview' : language === 'ar' ? 'نظرة عامة على المشروع' : 'شرح و مشخصات فنی پروژه'}
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed">
              {project.description[language]}
            </p>
          </div>

          {/* Highlights & Engineering Challenges */}
          {project.keyFeatures && project.keyFeatures.length > 0 && (
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800">
              <h4 className="text-xs font-bold text-amber-400 mb-3 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4" />
                <span>{language === 'en' ? 'Technical Highlights & Precision' : language === 'ar' ? 'أبرز الإنجازات الهندسية' : 'نقاط قوت و ظرافت‌های مهندسی اجرا'}</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.keyFeatures.map((h, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{h[language]}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Additional Photos Strip */}
          {project.additionalImages && project.additionalImages.length > 0 && (
            <div>
              <h4 className="text-xs font-bold text-slate-400 mb-2">
                {language === 'en' ? 'Project Gallery' : language === 'ar' ? 'صور إضافية للمشروع' : 'گالری تصاویر بیشتر'}
              </h4>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                {project.additionalImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => onOpenGallery(allImages, project.title[language])}
                    className="aspect-video rounded-xl overflow-hidden border border-slate-700 hover:border-amber-400 transition-all cursor-pointer"
                  >
                    <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Action CTAs */}
          <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
            <button
              onClick={() => {
                onClose();
                onOpenConsultationWithProject(project.title[language], project.category);
              }}
              className="lux-btn-gold px-6 py-3.5 rounded-xl text-xs font-black flex items-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>{t.portfolio.orderSimilar}</span>
            </button>

            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(
                language === 'en'
                  ? `Hello, I would like more information regarding the project "${project.title.en}".`
                  : language === 'ar'
                  ? `مرحباً، أود الحصول على مزيد من المعلومات حول مشروع "${project.title.ar}".`
                  : `سلام، اطلاعات بیشتری در مورد پروژه ${project.title.fa} نیاز دارم.`
              )}`}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-2 cursor-pointer shadow-lg"
            >
              <Send className="w-4 h-4" />
              <span>{language === 'en' ? 'Inquire on WhatsApp' : language === 'ar' ? 'استفسار عبر واتساب' : 'استعلام در واتس‌اپ'}</span>
            </a>
          </div>

        </div>

      </div>
    </div>
  );
};
