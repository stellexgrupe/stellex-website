import React, { useState } from 'react';
import { 
  X, 
  Send, 
  MessageSquare, 
  CheckCircle2, 
  ShieldCheck, 
  Download, 
  Printer, 
  Layers, 
  Sparkles, 
  Ruler, 
  Weight, 
  Award, 
  FileText, 
  User, 
  Phone, 
  Building2, 
  MapPin, 
  Maximize2, 
  Coins, 
  ExternalLink,
  QrCode,
  Calendar,
  Eye,
  Flame,
  Droplets,
  Share2,
  Calculator,
  ArrowRight
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { LocalizedString } from '../types';
import { StellexLogo } from './StellexLogo';
import { WarrantyBadge } from './WarrantyBadge';
import { convertFromToman } from '../utils/currency';

export interface CustomerLead {
  id: string;
  createdAt: string;
  fullName: string;
  phone: string;
  projectType: string;
  city: string;
  productCode: string;
  productName: string;
  categoryTitle: string;
  status: 'catalog_sent_whatsapp';
}

export interface CatalogItemData {
  id: string;
  name: LocalizedString;
  modelCode: string;
  badge?: LocalizedString;
  categoryTitle?: LocalizedString;
  image: string;
  detailImages?: string[];
  galleryImages?: string[];
  description: LocalizedString;
  alloyGrade: LocalizedString;
  warrantyYears?: number;
  priceToman?: number;
  priceUnitLabel?: LocalizedString;
  finish?: LocalizedString;
  weight?: string;
  
  // Dimensions
  dimensions?: {
    height?: string;
    width?: string;
    depth?: string;
    profileSize?: string;
    thickness?: string;
    spanOrWidth?: string;
    weirLipLength?: string;
    pipeCenterDistance?: string;
  };
  
  // Specific specs
  structuralSpecs?: {
    lateralLoadCapacity?: string;
    safetyFactor?: string;
    fireRating?: string;
    windOrImpactResistance?: string;
  };
  hydraulicSpecs?: {
    flowRate?: string;
    pumpPower?: string;
    lighting?: string;
  };
  thermalOutput?: {
    kcalPerHour?: string;
    btu?: string;
    wattage?: string;
    coverageArea?: string;
  };

  keyFeatures?: LocalizedString[];
  includedHardware?: LocalizedString[];
  architecturalTip?: LocalizedString;
  pinterestInspiration?: string;
  client?: LocalizedString;
  location?: LocalizedString;
}

interface EngineeringCatalogModalProps {
  item: CatalogItemData | null;
  onClose: () => void;
  onOpenGallery?: (images: string[], title: string) => void;
  onOpenConsultation?: (productName: string) => void;
  onOpenCalculator?: () => void;
}

export const EngineeringCatalogModal: React.FC<EngineeringCatalogModalProps> = ({
  item,
  onClose,
  onOpenGallery,
  onOpenConsultation,
  onOpenCalculator,
}) => {
  const { language, t, isRtl } = useLanguage();
  const [activeTab, setActiveTab] = useState<'specs' | 'sendCatalog' | 'gallery' | 'hardware'>('specs');
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  // Form State for Sending Catalog via WhatsApp & Saving to Customer Bank
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [projectType, setProjectType] = useState('ویلایی / مسکونی لوکس');
  const [city, setCity] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sendSuccess, setSendSuccess] = useState(false);
  const [lastSavedLead, setLastSavedLead] = useState<CustomerLead | null>(null);

  if (!item) return null;

  const allImages = [item.image, ...((item.detailImages && item.detailImages.length > 0) ? item.detailImages : (item.galleryImages || []))];
  const convertedPrice = item.priceToman ? convertFromToman(item.priceToman, language) : null;
  const docRefNumber = `STX-CAT-${item.modelCode.replace(/[^a-zA-Z0-9]/g, '') || '2026'}-REV4`;

  // Submit Handler: Saves lead to Customer Bank and dispatches Catalog to WhatsApp
  const handleSendCatalogToWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !phone.trim()) return;

    setIsSubmitting(true);

    try {
      // 1. Save to Customer Bank in localStorage
      const newLead: CustomerLead = {
        id: `lead-${Date.now()}`,
        createdAt: new Date().toISOString(),
        fullName: fullName.trim(),
        phone: phone.trim(),
        projectType: projectType.trim(),
        city: city.trim(),
        productCode: item.modelCode,
        productName: item.name[language],
        categoryTitle: item.categoryTitle?.[language] || 'سازه‌های استنلس استیل استیلکس',
        status: 'catalog_sent_whatsapp',
      };

      const existingLeads: CustomerLead[] = JSON.parse(
        localStorage.getItem('stellex_customer_leads') || '[]'
      );
      existingLeads.unshift(newLead);
      localStorage.setItem('stellex_customer_leads', JSON.stringify(existingLeads));
      setLastSavedLead(newLead);

      // 2. Format WhatsApp link targeting customer's phone number
      // Clean phone number (convert 0912... to 98912...)
      let cleanPhone = phone.replace(/[\s\-\+\(\)]/g, '');
      if (cleanPhone.startsWith('09')) {
        cleanPhone = '98' + cleanPhone.substring(1);
      } else if (cleanPhone.startsWith('9') && cleanPhone.length === 10) {
        cleanPhone = '98' + cleanPhone;
      }

      // Catalog dossier text in WhatsApp
      const catalogMessage = 
`📄 *کاتالوگ رسمی مهندسی و شناسنامه فنی استیلکس (STELLEX)*

سلام جناب/سرکار *${fullName.trim()}* گرامی،
شناسنامه و کاتالوگ فنی محصول درخواستی شما صادر و آماده ارسال گردید:

🔹 *نام محصول:* ${item.name[language]}
🔹 *کد اختصاصی مدل:* ${item.modelCode}
🔹 *آلیاژ استاندارد:* ${item.alloyGrade[language]}
🔹 *مدت ضمانت:* ۱۰ سال گارانتی کتبی رسمی ضدزنگ
🔹 *شماره سند مهندسی:* ${docRefNumber}
${item.dimensions?.thickness ? `🔹 *ضخامت متریال:* ${item.dimensions.thickness}` : ''}
${item.structuralSpecs?.lateralLoadCapacity ? `🔹 *تحمل بار جانبی:* ${item.structuralSpecs.lateralLoadCapacity}` : ''}

🔗 *مشاهده زنده شناسنامه و گالری در وب‌سایت استیلکس:*
${window.location.origin}

📞 *مهندسین فروش و مشاوره حضوری کارخانه:*
09128090700 | 02166391200
دفتر مرکزی و شوروم: تهران، بازار استیل غرب`;

      const encodedMsg = encodeURIComponent(catalogMessage);
      const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodedMsg}`;

      // Open WhatsApp in a new window/tab
      window.open(whatsappUrl, '_blank');

      setSendSuccess(true);
    } catch (err) {
      console.error('Error saving customer lead:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 overflow-y-auto bg-slate-950/85 backdrop-blur-2xl animate-in fade-in duration-300">
      <div 
        className="fixed inset-0" 
        onClick={onClose} 
      />

      <div className="relative w-full max-w-5xl bg-slate-900 border-2 border-amber-500/40 rounded-3xl shadow-2xl shadow-amber-500/10 overflow-hidden z-10 my-auto max-h-[94vh] flex flex-col">
        
        {/* ========================================================= */}
        {/* CATALOG LUXURY TOP BANNER WITH STELLEX LOGO & DOCUMENT ID */}
        {/* ========================================================= */}
        <div className="px-5 sm:px-8 py-3.5 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border-b border-amber-500/30 flex flex-wrap items-center justify-between gap-4 shrink-0">
          
          {/* Logo & Catalog Title */}
          <div className="flex items-center gap-3">
            <StellexLogo size="md" showText={true} />
            <div className="h-8 w-px bg-amber-500/30 hidden sm:block" />
            <div className="hidden sm:block">
              <span className="text-[11px] font-black text-amber-300 tracking-wider uppercase block font-mono">
                {language === 'fa' ? 'کاتالوگ جامع مهندسی و شناسنامه رسمی' : 'ARCHITECTURAL CATALOG & ENGINEERING DOSSIER'}
              </span>
              <span className="text-[10px] text-slate-400 font-mono flex items-center gap-2">
                <span>REF: {docRefNumber}</span>
                <span>•</span>
                <span>ASTM A240 / 304 CERTIFIED</span>
              </span>
            </div>
          </div>

          {/* Badges & Close Button */}
          <div className="flex items-center gap-2.5">
            <WarrantyBadge variant="seal" years={10} />

            <button
              onClick={handlePrint}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-colors cursor-pointer hidden md:flex items-center gap-1 text-xs"
              title={language === 'fa' ? 'چاپ شناسنامه کاتالوگ' : 'Print Catalog Sheet'}
            >
              <Printer className="w-4 h-4 text-amber-400" />
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800/90 text-slate-400 hover:text-white hover:bg-slate-700 border border-slate-700 transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* ========================================================= */}
        {/* CATALOG TAB NAVIGATION BAR                                */}
        {/* ========================================================= */}
        <div className="px-5 sm:px-8 py-2.5 bg-slate-950/90 border-b border-slate-800 flex items-center justify-between gap-2 overflow-x-auto shrink-0 scrollbar-none">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <button
              onClick={() => setActiveTab('specs')}
              className={`px-3 sm:px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 shrink-0 ${
                activeTab === 'specs'
                  ? 'bg-amber-500 text-slate-950 shadow-md font-black'
                  : 'text-slate-400 hover:text-white bg-slate-800/70 hover:bg-slate-800'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>{language === 'fa' ? 'شناسنامه و مشخصات کاتالوگی' : language === 'ar' ? 'مواصفات الكتالوج' : 'Catalog Specification'}</span>
            </button>

            {item.includedHardware && item.includedHardware.length > 0 && (
              <button
                onClick={() => setActiveTab('hardware')}
                className={`px-3 sm:px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 shrink-0 ${
                  activeTab === 'hardware'
                    ? 'bg-amber-500 text-slate-950 shadow-md font-black'
                    : 'text-slate-400 hover:text-white bg-slate-800/70 hover:bg-slate-800'
                }`}
              >
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>{language === 'fa' ? 'متعلقات و اتصالات' : language === 'ar' ? 'الملحقات والتثبيت' : 'Hardware & Mounts'}</span>
              </button>
            )}

            {allImages.length > 1 && (
              <button
                onClick={() => setActiveTab('gallery')}
                className={`px-3 sm:px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 shrink-0 ${
                  activeTab === 'gallery'
                    ? 'bg-amber-500 text-slate-950 shadow-md font-black'
                    : 'text-slate-400 hover:text-white bg-slate-800/70 hover:bg-slate-800'
                }`}
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span>{language === 'fa' ? `گالری کاتالوگ (${allImages.length})` : `Gallery (${allImages.length})`}</span>
              </button>
            )}
          </div>

          <div className="hidden lg:flex items-center gap-2 text-[11px] font-mono font-bold text-amber-400 bg-amber-500/10 px-3 py-1 rounded-lg border border-amber-500/30 shrink-0">
            <span>MODEL: {item.modelCode}</span>
          </div>
        </div>

        {/* ========================================================= */}
        {/* SCROLLABLE CATALOG CONTENT BODY                           */}
        {/* ========================================================= */}
        <div className="overflow-y-auto flex-1 p-5 sm:p-8 space-y-6">

          {/* TAB 1: CATALOG SPECIFICATIONS (طرح ژورنالی و کاتالوگی) */}
          {activeTab === 'specs' && (
            <div className="space-y-6 animate-in fade-in duration-200">
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                
                {/* Visual Column (5 Cols) */}
                <div className="lg:col-span-5 space-y-4">
                  {/* Hero Catalog Frame */}
                  <div className="relative aspect-4/3 rounded-2xl overflow-hidden bg-slate-950 border-2 border-amber-500/30 shadow-2xl group">
                    <img
                      src={allImages[activeImageIdx] || item.image}
                      alt={item.name[language]}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                    {/* Catalog Stamp Badges */}
                    <div className="absolute top-3 right-3 rtl:right-auto rtl:left-3 z-10 flex flex-col gap-1.5">
                      <span className="px-2.5 py-1 rounded-lg text-[10px] font-mono font-black bg-slate-950/90 text-amber-300 border border-amber-500/40 backdrop-blur-md shadow-lg">
                        {item.modelCode}
                      </span>
                      {item.badge && (
                        <span className="px-2.5 py-1 rounded-lg text-[10px] font-bold bg-amber-500 text-slate-950 shadow-md">
                          {item.badge[language]}
                        </span>
                      )}
                    </div>

                    {/* Zoom trigger */}
                    {onOpenGallery && (
                      <button
                        onClick={() => onOpenGallery(allImages, item.name[language])}
                        className="absolute bottom-3 right-3 rtl:right-auto rtl:left-3 p-2 rounded-xl bg-slate-950/80 hover:bg-amber-500 hover:text-slate-950 text-white border border-slate-700 transition-colors cursor-pointer"
                        title={language === 'fa' ? 'مشاهده تمام‌صفحه و زوم' : 'Zoom HD'}
                      >
                        <Maximize2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>

                  {/* Thumbnail Previews */}
                  {allImages.length > 1 && (
                    <div className="grid grid-cols-6 gap-1.5 sm:gap-2">
                      {allImages.map((img, idx) => (
                        <button
                          key={idx}
                          onClick={() => setActiveImageIdx(idx)}
                          className={`aspect-square rounded-xl overflow-hidden border transition-all cursor-pointer relative group ${
                            activeImageIdx === idx 
                              ? 'border-amber-400 ring-2 ring-amber-500/50 scale-105 shadow-md' 
                              : 'border-slate-800 hover:border-slate-600 opacity-70 hover:opacity-100'
                          }`}
                        >
                          <img src={img} alt="Thumb" className="w-full h-full object-cover" />
                          <span className="absolute bottom-0.5 right-0.5 rtl:right-auto rtl:left-0.5 text-[8px] bg-slate-950/90 text-amber-300 px-1 rounded font-mono">
                            {idx + 1}
                          </span>
                        </button>
                      ))}
                    </div>
                  )}

                </div>

                {/* Spec Sheet & Engineering Tables Column (7 Cols) */}
                <div className="lg:col-span-7 space-y-5">
                  
                  {/* Header Title & Subtitle */}
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                      <span className="text-xs font-mono font-bold text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded border border-amber-500/30">
                        {item.modelCode}
                      </span>
                      {item.categoryTitle && (
                        <span className="text-xs text-slate-400 font-bold">
                          {item.categoryTitle[language]}
                        </span>
                      )}
                    </div>
                    <h2 className="text-lg sm:text-2xl font-black text-white leading-tight">
                      {item.name[language]}
                    </h2>
                    {(item.client || item.location) && (
                      <div className="flex items-center gap-2 text-xs text-slate-400 font-medium mt-1">
                        {item.client && <span>{item.client[language]}</span>}
                        {item.client && item.location && <span>•</span>}
                        {item.location && <span>{item.location[language]}</span>}
                      </div>
                    )}
                  </div>

                  {/* Editorial Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed border-s-2 border-amber-500/50 ps-3">
                    {item.description[language]}
                  </p>

                  {/* Price Banner if available */}
                  {convertedPrice && item.priceUnitLabel && (
                    <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-300">
                        {item.priceUnitLabel[language]}:
                      </span>
                      <div className="text-right rtl:text-left flex items-baseline gap-1.5">
                        <span className="text-base sm:text-lg font-black text-amber-300 font-mono">
                          {language === 'en' && '$'}{convertedPrice.formattedNumber}
                        </span>
                        <span className="text-xs text-slate-300 font-bold">
                          {convertedPrice.shortLabel}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* ENGINEERING TECHNICAL MATRIX */}
                  <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-3">
                    <h4 className="text-xs font-bold text-amber-400 flex items-center gap-1.5 uppercase tracking-wider font-mono">
                      <Ruler className="w-4 h-4" />
                      <span>{language === 'fa' ? 'ماتریس مشخصات فنی و استانداردهای سازه' : 'Engineering Specifications Matrix'}</span>
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                      
                      {/* Alloy Grade */}
                      <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800/80 flex items-center justify-between">
                        <span className="text-slate-400 text-[11px]">
                          {language === 'fa' ? 'گرید آلیاژ استیل:' : 'Steel Alloy Grade:'}
                        </span>
                        <span className="font-bold text-amber-300 font-mono text-[11px]">
                          {item.alloyGrade[language]}
                        </span>
                      </div>

                      {/* Dimensions / Profile */}
                      {item.dimensions?.profileSize && (
                        <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800/80 flex items-center justify-between">
                          <span className="text-slate-400 text-[11px]">
                            {language === 'fa' ? 'ابعاد مقطع پروفیل:' : 'Profile Size:'}
                          </span>
                          <span className="font-bold text-white font-mono text-[11px]">
                            {item.dimensions.profileSize}
                          </span>
                        </div>
                      )}

                      {/* Thickness */}
                      {item.dimensions?.thickness && (
                        <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800/80 flex items-center justify-between">
                          <span className="text-slate-400 text-[11px]">
                            {language === 'fa' ? 'ضخامت گوشت ورق/لوله:' : 'Material Thickness:'}
                          </span>
                          <span className="font-bold text-white font-mono text-[11px]">
                            {item.dimensions.thickness}
                          </span>
                        </div>
                      )}

                      {/* Height */}
                      {item.dimensions?.height && (
                        <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800/80 flex items-center justify-between">
                          <span className="text-slate-400 text-[11px]">
                            {language === 'fa' ? 'ارتفاع سازه:' : 'Height:'}
                          </span>
                          <span className="font-bold text-white font-mono text-[11px]">
                            {item.dimensions.height}
                          </span>
                        </div>
                      )}

                      {/* Lateral Load Capacity */}
                      {item.structuralSpecs?.lateralLoadCapacity && (
                        <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800/80 flex items-center justify-between">
                          <span className="text-slate-400 text-[11px]">
                            {language === 'fa' ? 'تحمل بار جانبی سازه‌ای:' : 'Lateral Load Capacity:'}
                          </span>
                          <span className="font-bold text-emerald-400 font-mono text-[11px]">
                            {item.structuralSpecs.lateralLoadCapacity}
                          </span>
                        </div>
                      )}

                      {/* Safety Factor */}
                      {item.structuralSpecs?.safetyFactor && (
                        <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800/80 flex items-center justify-between">
                          <span className="text-slate-400 text-[11px]">
                            {language === 'fa' ? 'ضریب ایمنی مهندسی:' : 'Safety Factor:'}
                          </span>
                          <span className="font-bold text-emerald-400 font-mono text-[11px]">
                            {item.structuralSpecs.safetyFactor}
                          </span>
                        </div>
                      )}

                      {/* Hydraulic Flow (if water feature) */}
                      {item.hydraulicSpecs?.flowRate && (
                        <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800/80 flex items-center justify-between">
                          <span className="text-slate-400 text-[11px]">
                            {language === 'fa' ? 'دبی هیدرولیک جریان:' : 'Flow Rate:'}
                          </span>
                          <span className="font-bold text-amber-400 font-mono text-[11px]">
                            {item.hydraulicSpecs.flowRate}
                          </span>
                        </div>
                      )}

                      {/* Thermal Output (if radiator) */}
                      {item.thermalOutput?.kcalPerHour && (
                        <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800/80 flex items-center justify-between">
                          <span className="text-slate-400 text-[11px]">
                            {language === 'fa' ? 'ظرفیت حرارتی خروجی:' : 'Thermal Output:'}
                          </span>
                          <span className="font-bold text-amber-400 font-mono text-[11px]">
                            {item.thermalOutput.kcalPerHour}
                          </span>
                        </div>
                      )}

                      {/* Surface Finish */}
                      {item.finish && (
                        <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800/80 flex items-center justify-between sm:col-span-2">
                          <span className="text-slate-400 text-[11px]">
                            {language === 'fa' ? 'پوشش و پرداخت سطح:' : 'Surface Finish:'}
                          </span>
                          <span className="font-bold text-white text-[11px]">
                            {item.finish[language]}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Key Features Bullet List */}
                  {item.keyFeatures && item.keyFeatures.length > 0 && (
                    <div className="space-y-2">
                      <h4 className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                        <span>{language === 'fa' ? 'مزایا و ویژگی‌های انحصاری استیلکس:' : 'Key Engineering Highlights:'}</span>
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {item.keyFeatures.map((feat, idx) => (
                          <div key={idx} className="flex items-start gap-2 p-2 rounded-xl bg-slate-950/60 border border-slate-800/70 text-xs text-slate-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{feat[language]}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Official Guarantee & Compliance Hallmark */}
                  <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-500/15 via-slate-900 to-amber-500/10 border border-amber-400/40 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-400/50 flex items-center justify-center text-amber-400 shrink-0">
                        <ShieldCheck className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-xs font-black text-amber-300 block">
                          {language === 'fa' ? '۱۰ سال گارانتی کتبی تعویض و عدم خوردگی' : '10-Year Written Official Warranty'}
                        </span>
                        <span className="text-[10px] text-slate-400 block">
                          {language === 'fa' ? 'همراه با گواهینامه تست آزمایشگاهی MTC و آنالیز کوانتومتری' : 'Backed by Certified Metallurgical Mill Test Report (MTC)'}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setActiveTab('sendCatalog')}
                        className="lux-btn-gold px-4 py-2 rounded-xl text-xs font-black flex items-center gap-1.5 shadow-md cursor-pointer"
                      >
                        <Send className="w-3.5 h-3.5" />
                        <span>{language === 'fa' ? 'ارسال کاتالوگ' : 'Send Catalog'}</span>
                      </button>
                    </div>
                  </div>

                </div>

              </div>

            </div>
          )}

          {/* ========================================================= */}
          {/* TAB 2: SEND CATALOG VIA WHATSAPP (فرم ارسال و ثبت در بانک) */}
          {/* ========================================================= */}
          {activeTab === 'sendCatalog' && (
            <div className="max-w-2xl mx-auto space-y-6 animate-in fade-in duration-200">
              
              {/* Back to Specs Button */}
              <div className="flex items-center justify-start">
                <button
                  type="button"
                  onClick={() => setActiveTab('specs')}
                  className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 hover:text-amber-300 bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-amber-500/40 px-3.5 py-2 rounded-xl transition-all cursor-pointer"
                >
                  <ArrowRight className="w-4 h-4 rtl:rotate-0 ltr:rotate-180" />
                  <span>{language === 'fa' ? 'بازگشت به شناسنامه و مشخصات فنی' : 'Back to Specifications'}</span>
                </button>
              </div>

              {/* Header Box */}
              <div className="text-center space-y-2">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-400 mx-auto shadow-lg shadow-emerald-500/20">
                  <Send className="w-6 h-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-black text-white">
                  {language === 'fa' 
                    ? 'ارسال فوری کاتالوگ به واتساپ و ثبت در بانک مشتریان' 
                    : language === 'ar' 
                    ? 'إرسال الكتالوج إلى واتساب وتسجيل البيانات' 
                    : 'Send Engineering Catalog to WhatsApp & Customer Registry'}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 max-w-lg mx-auto leading-relaxed">
                  {language === 'fa'
                    ? `اطلاعات تماس خود را وارد نمایید تا شناسنامه رسمی، دیتایل‌های فنی و کاتالوگ مدل «${item.name[language]}» مستقیماً به شماره واتساپ شما ارسال شده و در بانک مشتریان استیلکس ثبت گردد.`
                    : `Enter your details to receive the official engineering catalog and CAD specifications for ${item.modelCode} directly on your WhatsApp.`}
                </p>
              </div>

              {/* SUCCESS CONFIRMATION STATE */}
              {sendSuccess ? (
                <div className="p-6 rounded-3xl bg-slate-950 border-2 border-emerald-500/60 shadow-2xl space-y-5 text-center">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 border-2 border-emerald-400 flex items-center justify-center text-emerald-400 mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div className="space-y-1.5">
                    <h4 className="text-base font-black text-emerald-300">
                      {language === 'fa' ? 'اطلاعات در بانک مشتریان استیلکس ثبت شد' : 'Recorded in STELLEX Customer Database'}
                    </h4>
                    <p className="text-xs text-slate-300">
                      {language === 'fa'
                        ? `کاتالوگ فنی مهندسی با موفقیت برای شماره ${phone} در برنامه واتساپ ارسال گردید.`
                        : `The engineering catalog has been dispatched to ${phone} via WhatsApp.`}
                    </p>
                  </div>

                  {/* Customer Card Record Preview */}
                  <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-right rtl:text-right ltr:text-left text-xs space-y-2 text-slate-300">
                    <div className="flex justify-between border-b border-slate-800 pb-2">
                      <span className="text-slate-400">نام مشتری:</span>
                      <span className="font-bold text-white">{fullName}</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-800 pb-2">
                      <span className="text-slate-400">شماره واتساپ:</span>
                      <span className="font-mono font-bold text-amber-400">{phone}</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-800 pb-2">
                      <span className="text-slate-400">محصول درخواستی:</span>
                      <span className="font-bold text-white">{item.name[language]} ({item.modelCode})</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">شماره ارجاع کاتالوگ:</span>
                      <span className="font-mono text-emerald-400">{docRefNumber}</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                    <button
                      onClick={() => {
                        let cleanPhone = phone.replace(/[\s\-\+\(\)]/g, '');
                        if (cleanPhone.startsWith('09')) cleanPhone = '98' + cleanPhone.substring(1);
                        window.open(`https://wa.me/${cleanPhone}`, '_blank');
                      }}
                      className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs flex items-center gap-2 cursor-pointer shadow-lg shadow-emerald-500/20"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>{language === 'fa' ? 'باز کردن گفتگوی واتساپ' : 'Open WhatsApp'}</span>
                    </button>

                    <button
                      onClick={handlePrint}
                      className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs flex items-center gap-2 cursor-pointer border border-slate-700"
                    >
                      <Printer className="w-4 h-4 text-amber-400" />
                      <span>{language === 'fa' ? 'چاپ / دانلود PDF کاتالوگ' : 'Print / Download PDF'}</span>
                    </button>

                    <button
                      onClick={() => setSendSuccess(false)}
                      className="px-4 py-2.5 rounded-xl text-slate-400 hover:text-white text-xs cursor-pointer"
                    >
                      {language === 'fa' ? 'ارسال برای شماره دیگر' : 'Send to another number'}
                    </button>
                  </div>
                </div>
              ) : (
                /* FORM VIEW */
                <form 
                  onSubmit={handleSendCatalogToWhatsApp}
                  className="p-6 rounded-3xl bg-slate-950/90 border border-slate-800 shadow-xl space-y-4"
                >
                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-200 flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-amber-400" />
                      <span>{language === 'fa' ? 'نام و نام خانوادگی:' : 'Full Name:'}</span>
                      <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder={language === 'fa' ? 'مثال: مهندس علیرضا رضایی' : 'e.g. Alireza Rezaei'}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors"
                    />
                  </div>

                  {/* Phone / WhatsApp */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-200 flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{language === 'fa' ? 'شماره تماس و واتساپ:' : 'WhatsApp Phone Number:'}</span>
                      <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder={language === 'fa' ? 'مثال: 09121234567' : '+98 912 123 4567'}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-xs font-mono focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-colors"
                      dir="ltr"
                    />
                    <span className="text-[10px] text-slate-400 block">
                      {language === 'fa' ? 'کاتالوگ و شناسنامه به این شماره در واتساپ ارسال خواهد شد.' : 'The catalog link will be sent to this WhatsApp number.'}
                    </span>
                  </div>

                  {/* Project Type & City */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-200 flex items-center gap-1.5">
                        <Building2 className="w-3.5 h-3.5 text-amber-400" />
                        <span>{language === 'fa' ? 'نوع پروژه:' : 'Project Type:'}</span>
                      </label>
                      <select
                        value={projectType}
                        onChange={(e) => setProjectType(e.target.value)}
                        className="w-full px-3.5 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-amber-400 transition-colors"
                      >
                        <option value="ویلایی / مسکونی لوکس">ویلایی / مسکونی لوکس</option>
                        <option value="برج و مجتمع مسکونی">برج و مجتمع مسکونی</option>
                        <option value="پنت‌هاوس و دوبلکس">پنت‌هاوس و دوبلکس</option>
                        <option value="تجاری، طلافروشی و رستوران">تجاری، طلافروشی و رستوران</option>
                        <option value="کلین‌روم، دارویی و بهداشتی">کلین‌روم، دارویی و بهداشتی</option>
                        <option value="استخر و محوطه‌سازی ویلا">استخر و محوطه‌سازی ویلا</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-200 flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-amber-400" />
                        <span>{language === 'fa' ? 'شهر محل پروژه:' : 'City:'}</span>
                      </label>
                      <input
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder={language === 'fa' ? 'مثال: تهران / لواسان' : 'e.g. Tehran / Lavasan'}
                        className="w-full px-3.5 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-amber-400 transition-colors"
                      >
                      </input>
                    </div>
                  </div>

                  {/* Summary of what will be dispatched */}
                  <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-[11px] text-slate-300 space-y-1">
                    <div className="flex items-center gap-2 text-amber-400 font-bold">
                      <FileText className="w-3.5 h-3.5" />
                      <span>اقلام ارسالی در پکیج کاتالوگ واتساپ:</span>
                    </div>
                    <ul className="list-disc list-inside text-slate-400 space-y-0.5 ps-1">
                      <li>شناسنامه فنی مدل {item.modelCode} با آلیاژ ۳۰۴ استاندارد</li>
                      <li>ضمانت‌نامه ۱۰ ساله کتبی رسمی کارخانه‌ای</li>
                      <li>دیتایل‌های ابعادی مقاطع، تست بار و نحوه مهار سازه</li>
                    </ul>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-emerald-500 via-emerald-600 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white text-xs sm:text-sm font-black flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/25 transition-all cursor-pointer disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                    <span>
                      {isSubmitting
                        ? (language === 'fa' ? 'در حال ثبت و ارسال به واتساپ...' : 'Processing...')
                        : (language === 'fa' ? 'ثبت در بانک مشتریان و ارسال کاتالوگ به واتساپ' : 'Save to CRM & Send Catalog via WhatsApp')}
                    </span>
                  </button>

                  <p className="text-[10px] text-slate-500 text-center leading-tight">
                    {language === 'fa'
                      ? 'اطلاعات شما با حفظ محرمانگی کامل در سامانه CRM گروه فنی مهندسی استیلکس ثبت می‌شود.'
                      : 'Your contact information is strictly protected and processed in STELLEX CRM system.'}
                  </p>
                </form>
              )}

            </div>
          )}

          {/* TAB 3: HARDWARE & PACKAGING (متعلقات و اتصالات) */}
          {activeTab === 'hardware' && item.includedHardware && (
            <div className="space-y-5 animate-in fade-in duration-200">
              <div className="p-5 rounded-3xl bg-slate-950/80 border border-slate-800 space-y-4">
                <h4 className="text-xs font-bold text-amber-400 flex items-center gap-1.5 uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4" />
                  <span>{language === 'fa' ? 'متعلقات استاندارد، اتصالات و پکینگ فابریک استیلکس:' : 'Included Factory Hardware & Mounts:'}</span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {item.includedHardware.map((hw, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-3 rounded-2xl bg-slate-900/70 border border-slate-800 text-xs text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{hw[language]}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: HD GALLERY */}
          {activeTab === 'gallery' && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {allImages.map((img, idx) => {
                  const shotLabelsFa = [
                    'عکس کاتالوگ اصلی (زاویه ورودی لابی)',
                    'تصویر ۱ – نمای نزدیک از دستگیره و پایه‌های نرده (Close-up)',
                    'تصویر ۲ – نمای کامل از فاصله‌ی دور / فضای کلی (Wide Angle)',
                    'تصویر ۳ – نمای سینمایی با نورپردازی مشابه عکس اصلی (Cinematic)',
                    'تصویر ۴ – نمای از بالا / عمودی (Overhead Top View)',
                    'تصویر ۵ – نمای سه‌چهارم / مورب (Three-Quarter Angle)',
                  ];
                  const shotLabelsEn = [
                    'Main Catalog Angle (Foyer Perspective)',
                    'Shot 1 – Close-up (Handrails, Spigots & Posts)',
                    'Shot 2 – Wide Angle (Full Interior Space Perspective)',
                    'Shot 3 – Cinematic (Identical Lighting & Chiaroscuro)',
                    'Shot 4 – Top View (Overhead Vertical Plan)',
                    'Shot 5 – 3/4 Angle (Oblique Form & Architecture)',
                  ];
                  const label = language === 'fa' 
                    ? (shotLabelsFa[idx] || `تصویر کاتالوگ ${idx + 1}`) 
                    : (shotLabelsEn[idx] || `Catalog View ${idx + 1}`);

                  return (
                    <div
                      key={idx}
                      onClick={() => {
                        if (onOpenGallery) onOpenGallery(allImages, item.name[language]);
                      }}
                      className="aspect-4/3 rounded-2xl overflow-hidden border border-slate-800 hover:border-amber-400 transition-all cursor-pointer group relative shadow-md bg-slate-950"
                    >
                      <img src={img} alt="Gallery" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent group-hover:from-slate-950/70 transition-colors" />
                      <div className="absolute bottom-2 inset-x-2 flex items-center justify-between pointer-events-none gap-1">
                        <span className="text-[10px] font-bold bg-slate-950/90 text-amber-300 px-2 py-0.5 rounded-lg border border-amber-500/30 backdrop-blur-sm truncate">
                          {label}
                        </span>
                        <span className="text-[9px] font-mono text-slate-300 bg-slate-900/90 px-1.5 py-0.5 rounded border border-slate-700 shrink-0">
                          {idx + 1}/6
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

        </div>

        {/* ========================================================= */}
        {/* CATALOG FOOTER BAR WITH DIRECT ACTION BUTTONS             */}
        {/* ========================================================= */}
        <div className="px-5 sm:px-8 py-4 bg-slate-950 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-3">
            <WarrantyBadge variant="compact" years={10} />
            <span className="text-[11px] text-slate-400 hidden sm:inline font-mono">
              DOC-ID: {docRefNumber}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {onOpenCalculator && (
              <button
                onClick={() => {
                  onClose();
                  onOpenCalculator();
                }}
                className="px-3.5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-300 border border-amber-500/30 text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer"
              >
                <Calculator className="w-3.5 h-3.5 text-amber-400" />
                <span>{language === 'fa' ? 'محاسبه در مترور' : 'Calculator'}</span>
              </button>
            )}

            <button
              onClick={() => setActiveTab(activeTab === 'sendCatalog' ? 'specs' : 'sendCatalog')}
              className={`px-4 py-2.5 rounded-xl text-xs font-black flex items-center gap-1.5 transition-all cursor-pointer ${
                activeTab === 'sendCatalog'
                  ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/25 ring-2 ring-emerald-400/40'
                  : 'bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/40'
              }`}
            >
              <Send className="w-3.5 h-3.5" />
              <span>{language === 'fa' ? 'ارسال کاتالوگ به واتساپ' : 'Send to WhatsApp'}</span>
            </button>

            {onOpenConsultation && (
              <button
                onClick={() => {
                  onClose();
                  onOpenConsultation(item.name[language]);
                }}
                className="lux-btn-gold px-4 py-2.5 rounded-xl text-xs font-black flex items-center gap-1.5 cursor-pointer shadow-md shadow-amber-500/15"
              >
                <Sparkles className="w-3.5 h-3.5 text-slate-950" />
                <span>{language === 'fa' ? 'درخواست پیش‌فاکتور این مدل' : 'Request Official Quote'}</span>
              </button>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
