import React, { useState } from 'react';
import { COMPANY_INFO, SERVICE_CATEGORIES } from '../data/stellexData';
import { useLanguage } from '../context/LanguageContext';
import { StellexLogo } from './StellexLogo';
import { LogoStoryModal } from './LogoStoryModal';
import { 
  Layers, 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  Award, 
  Clock, 
  Sparkles, 
  Send,
  Globe
} from 'lucide-react';

interface FooterProps {
  onOpenConsultation: () => void;
  onOpenAiAdvisor: () => void;
  onSelectCategory: (categoryId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenConsultation,
  onOpenAiAdvisor,
  onSelectCategory,
}) => {
  const { language, t, isRtl } = useLanguage();
  const [logoStoryOpen, setLogoStoryOpen] = useState(false);

  return (
    <footer id="contact" className="bg-slate-950 border-t border-slate-800/90 pt-16 pb-12 text-slate-400 relative overflow-hidden">
      
      {/* Background Lighting */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-64 bg-amber-500/5 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-slate-800/80">
          
          {/* Col 1: Brand & Credentials (4 Cols) */}
          <div className="lg:col-span-4 space-y-5">
            <button 
              type="button" 
              onClick={() => setLogoStoryOpen(true)}
              className="text-left rtl:text-right focus:outline-none"
              title="مشاهده شناسنامه و مشخصات متالورژیک لوگوی رسمی استیلکس"
            >
              <StellexLogo variant="footer" size="lg" />
            </button>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
              {t.footer.aboutText}
            </p>

            {/* Certifications Bar */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold bg-slate-900 text-amber-400 border border-slate-800 flex items-center gap-1">
                <Award className="w-3 h-3 text-amber-400" />
                ASTM A240
              </span>
              <span className="px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold bg-slate-900 text-amber-400 border border-slate-800 flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-amber-400" />
                DIN 17440
              </span>
              <span className="px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold bg-slate-900 text-amber-400 border border-slate-800 flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-amber-400" />
                ISO 9001:2015
              </span>
            </div>
          </div>

          {/* Col 2: Engineering Departments (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-black text-white uppercase tracking-wider flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-amber-400" />
              <span>{t.footer.engineeringDepts}</span>
            </h4>
            <ul className="space-y-2.5 text-xs">
              {SERVICE_CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <a
                    href="#services"
                    onClick={() => onSelectCategory(cat.id)}
                    className="hover:text-amber-400 transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500/40 group-hover:bg-amber-400 transition-colors" />
                    <span>{cat.title[language]}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Materials & Standards (2 Cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-black text-white uppercase tracking-wider flex items-center gap-1.5">
              <Award className="w-4 h-4 text-amber-400" />
              <span>{t.footer.materialsStandards}</span>
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#materials" className="hover:text-amber-400 transition-colors">
                  AISI 304 (18/8)
                </a>
              </li>
              <li>
                <a href="#materials" className="hover:text-amber-400 transition-colors">
                  AISI 316 (Marine Grade)
                </a>
              </li>
              <li>
                <a href="#materials" className="hover:text-amber-400 transition-colors">
                  AISI 316L (Medical Pharma)
                </a>
              </li>
              <li>
                <a href="#materials" className="hover:text-amber-400 transition-colors">
                  PVD Titanium Vacuum
                </a>
              </li>
              <li>
                <a href="#materials" className="hover:text-amber-400 transition-colors">
                  Super Mirror 8K
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Factory Offices (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-black text-white uppercase tracking-wider flex items-center gap-1.5">
              <Phone className="w-4 h-4 text-amber-400" />
              <span>{t.footer.contactUs}</span>
            </h4>

            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <a href="tel:+989125529304" className="font-mono font-bold text-white hover:text-amber-400 block" dir="ltr">
                    {COMPANY_INFO.phoneIntl}
                  </a>
                  <span className="text-[10px] text-slate-500 font-mono" dir="ltr">{COMPANY_INFO.mobileSupport}</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="text-slate-300 hover:text-amber-400 font-mono">
                  {COMPANY_INFO.email}
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-slate-300 leading-relaxed">
                  {COMPANY_INFO.officeAddress[language]}
                </span>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-slate-400">
                  {COMPANY_INFO.workHours[language]}
                </span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenConsultation}
                className="lux-btn-gold w-full py-2.5 px-4 rounded-xl text-xs font-black flex items-center justify-center gap-1.5 cursor-pointer shadow-lg"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>{t.nav.expertVisit}</span>
              </button>
            </div>

          </div>

        </div>

        {/* Bottom Copyright & Guarantee Stamp */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 text-center sm:text-left rtl:sm:text-right">
          <div>
            © {new Date().getFullYear()} STELLEX Engineering Group. {t.footer.allRightsReserved}
          </div>

          <div className="flex items-center gap-4 text-[11px] text-slate-400">
            <span>ASTM A240 / DIN 17440</span>
            <span>•</span>
            <span>MTC Certified Materials</span>
            <span>•</span>
            <span className="text-amber-400 font-bold">15 Years Warranty</span>
          </div>
        </div>

      </div>
      
      {/* Official Brand Logo Story Modal */}
      <LogoStoryModal
        isOpen={logoStoryOpen}
        onClose={() => setLogoStoryOpen(false)}
      />
    </footer>
  );
};
