import React, { useState, useId } from 'react';
import { ReadyPostModel } from '../types';
import { READY_POST_MODELS, COMPANY_INFO } from '../data/stellexData';
import { useLanguage } from '../context/LanguageContext';
import { convertFromToman, formatPriceWithUnit, getCurrencyNotice } from '../utils/currency';
import {
  X,
  Calculator,
  Layers,
  Sparkles,
  CheckCircle2,
  Printer,
  Share2,
  FileSpreadsheet,
  ArrowRight,
  ArrowLeft,
  ChevronRight,
  ChevronLeft,
  HelpCircle,
  Building2,
  Phone,
  Ruler,
  Info,
  ShieldCheck,
  Send,
  Eye,
  Sliders,
  DollarSign,
  TrendingUp,
  Coins,
} from 'lucide-react';

interface CalculatorPlusModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSelectedPost?: ReadyPostModel | null;
  onOpenConsultationWithInvoice?: (invoiceData: any) => void;
}

export const CalculatorPlusModal: React.FC<CalculatorPlusModalProps> = ({
  isOpen,
  onClose,
  initialSelectedPost,
  onOpenConsultationWithInvoice,
}) => {
  const { language, t, isRtl } = useLanguage();
  
  // State for selected post model
  const [selectedPostId, setSelectedPostId] = useState<string>(
    initialSelectedPost?.id || READY_POST_MODELS[0].id
  );

  // Core Inputs requested by the user
  const [flightRows, setFlightRows] = useState<number>(2); // تعداد ردیف (شمشیری)
  const [stepsPerFlight, setStepsPerFlight] = useState<number>(10); // تعداد پله در هر ردیف (شمشیری)
  const [landingsCount, setLandingsCount] = useState<number>(1); // تعداد پاگرد

  // Fine-tuning coefficients (accessible in advanced drawer)
  const [stepTreadLength, setStepTreadLength] = useState<number>(0.30); // طول متوسط هر پله (متر)
  const [landingLength, setLandingLength] = useState<number>(1.20); // طول متوسط هر پاگرد (متر)
  
  // Optional installation & client details for official proforma invoice
  const [clientName, setClientName] = useState<string>('');
  const [clientPhone, setClientPhone] = useState<string>('');
  const [clientCity, setClientCity] = useState<string>('تهران');
  const [activeTab, setActiveTab] = useState<'calculator' | 'invoice' | 'schematic'>('calculator');

  if (!isOpen) return null;

  // Find currently selected post
  const selectedPost = READY_POST_MODELS.find(p => p.id === selectedPostId) || READY_POST_MODELS[0];

  // ==========================================
  // MATHEMATICAL FORMULA IMPLEMENTATION
  // ==========================================
  // 1. Calculate Total Linear Meters (میزان متر طول کل کار)
  const totalStairSteps = Math.max(1, flightRows) * Math.max(1, stepsPerFlight);
  const stairLinearMeters = totalStairSteps * stepTreadLength;
  const landingsLinearMeters = Math.max(0, landingsCount) * landingLength;
  const totalLinearMeters = Number((stairLinearMeters + landingsLinearMeters).toFixed(2));

  // 2. Calculate formula value x = (totalLinearMeters + landingsCount + 2)
  const xValue = Number((totalLinearMeters + Math.max(0, landingsCount) + 2).toFixed(2));

  // 3. Calculate Total Order Cost = x * (selectedPost.linearMeterPrice)
  const totalInvoiceAmount = Math.round(xValue * selectedPost.linearMeterPrice);

  // Currency conversions according to active language
  const currencyNotice = getCurrencyNotice(language);
  const convertedMeterPrice = convertFromToman(selectedPost.linearMeterPrice, language);
  const convertedTotalAmount = convertFromToman(totalInvoiceAmount, language);
  const convertedPostUnitPrice = convertFromToman(selectedPost.unitPrice, language);

  // 4. Detailed Hardware Quantity Estimation for Proforma
  // Standard post spacing: 1 post every 2 steps + 2 posts per landing + start/end terminators
  const postsCount = Math.ceil(totalStairSteps / 2) + (landingsCount * 2) + (flightRows * 1);
  const handrailMeters = Math.ceil(xValue);
  const escutcheonsCount = postsCount; // قالپاق
  const fittingsCount = postsCount + (landingsCount * 2) + flightRows; // فیتینگ‌ها و زانوها
  const anchorBoltsCount = postsCount * 3; // رول‌بولت‌های هیلتی

  // Post only cost (if bought standalone)
  const postOnlyTotal = postsCount * selectedPost.unitPrice;

  // Generate unique proforma code
  const proformaCode = `STX-INV-${Math.floor(100000 + Math.random() * 900000)}`;
  const todayPersian = new Date().toLocaleDateString('fa-IR');

  const handlePrint = () => {
    window.print();
  };

  const handleSendToWhatsapp = () => {
    const quotePriceLine = language === 'ar'
      ? `إجمالي الفاتورة: ${convertedTotalAmount.fullLabel} (معادل ${totalInvoiceAmount.toLocaleString('fa-IR')} تومان)`
      : language === 'en'
      ? `Total Quotation: ${convertedTotalAmount.fullLabel} (~${totalInvoiceAmount.toLocaleString('fa-IR')} Toman)`
      : `مبلغ کل فاکتور اجرایی: ${totalInvoiceAmount.toLocaleString('fa-IR')} تومان`;

    const textContent = language === 'en'
      ? `Hello STELLEX, I have calculated my railing estimation via Calculator Plus:\n\n` +
        `Selected Model: ${selectedPost.name.en || selectedPost.name.fa} (${selectedPost.modelCode})\n` +
        `Flight Rows: ${flightRows}\n` +
        `Steps per flight: ${stepsPerFlight} (Total ${totalStairSteps} steps)\n` +
        `Landings: ${landingsCount}\n` +
        `Total Linear Meters: ${totalLinearMeters} m\n` +
        `Calculation Factor (x): ${xValue}\n` +
        `Estimated Posts: ${postsCount} pcs\n` +
        `${quotePriceLine}\n` +
        `Client Name: ${clientName || 'Architect / Client'}\n` +
        `Phone: ${clientPhone || '-'}\n` +
        `City: ${clientCity}\n\n` +
        `Please review the engineering specs and coordinate an on-site survey.`
      : language === 'ar'
      ? `مرحباً ستيليكس، لقد قمت بحساب تقدير تكلفة الدرابزين عبر حاسبة بلس:\n\n` +
        `الموديل المختار: ${selectedPost.name.ar || selectedPost.name.fa} (${selectedPost.modelCode})\n` +
        `عدد مسارات الدرج: ${flightRows}\n` +
        `عدد الدرجات في كل مسار: ${stepsPerFlight} (الإجمالي: ${totalStairSteps} درجة)\n` +
        `عدد البسطات: ${landingsCount}\n` +
        `إجمالي المتر الطولي: ${totalLinearMeters} م\n` +
        `معامل الحساب (x): ${xValue}\n` +
        `العدد التقديري للقوائم: ${postsCount} قطعة\n` +
        `${quotePriceLine}\n` +
        `اسم العميل: ${clientName || 'عميل كريم'}\n` +
        `الهاتف: ${clientPhone || '-'}\n` +
        `المدينة: ${clientCity}\n\n` +
        `يرجى مراجعة المواصفات الهندسية وتنسيق موعد للمعاينة الميدانية.`
      : `سلام و درود، من فاکتور محاسبه‌گر پلاس را برای پروژه نرده استیلکس تکمیل کرده‌ام:\n\n` +
        `مدل پایه انتخابی: ${selectedPost.name[language]} (${selectedPost.modelCode})\n` +
        `تعداد ردیف شمشیری: ${flightRows}\n` +
        `تعداد پله در هر ردیف: ${stepsPerFlight} (مجموعاً ${totalStairSteps} پله)\n` +
        `تعداد پاگرد: ${landingsCount}\n` +
        `متر طول کل کار: ${totalLinearMeters} متر\n` +
        `ضریب محاسبه (x): ${xValue}\n` +
        `تعداد تخمینی پایه‌ها: ${postsCount} عدد\n` +
        `${quotePriceLine}\n` +
        `نام متقاضی: ${clientName || 'همکار گرامی'}\n` +
        `تلفن: ${clientPhone || '-'}\n` +
        `شهر: ${clientCity}\n\n` +
        `لطفاً جهت بازبینی مهندسی و تعیین نوبت بازدید حضوری اقدام فرمایید.`;

    const text = encodeURIComponent(textContent);
    window.open(`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  const handleProceedToConsultation = () => {
    if (onOpenConsultationWithInvoice) {
      onOpenConsultationWithInvoice({
        serviceCategory: 'prefab_posts',
        postModel: selectedPost.name[language],
        modelCode: selectedPost.modelCode,
        flightRows,
        stepsPerFlight,
        landingsCount,
        totalLinearMeters,
        xValue,
        totalInvoiceAmount,
        estimatedPosts: postsCount,
      });
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 overflow-y-auto bg-slate-950/85 backdrop-blur-xl animate-in fade-in duration-300">
      
      {/* Backdrop */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Main Container */}
      <div className="relative w-full max-w-6xl bg-slate-900 border border-amber-500/40 rounded-3xl shadow-2xl overflow-hidden z-10 my-auto max-h-[94vh] flex flex-col">
        
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-4 sm:px-8 py-3.5 sm:py-4 border-b border-slate-800 bg-slate-950/80 shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 text-slate-950 shadow-lg shadow-amber-500/20">
              <Calculator className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-black text-amber-400 uppercase tracking-widest bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/30">
                  CALCULATOR PLUS
                </span>
                <span className="text-[11px] font-bold text-slate-400 hidden sm:inline">
                  {language === 'fa' ? 'محاسبه‌گر پیشرفته متراژ، اقلام و فاکتور آنلاین' : language === 'ar' ? 'حاسبة بلس الذكية لحساب التكلفة والفاتورة' : 'Advanced Railing Cost & Bill of Quantities'}
                </span>
              </div>
              <h2 className="text-base sm:text-xl font-black text-white">
                {language === 'fa' ? 'محاسبه‌گر پلاس نرده‌های استنلس استیل استیلکس' : language === 'ar' ? 'حاسبة بلس الذكية لهياكل الستانلس ستيل' : 'STELLEX Railing Calculator Plus'}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Currency Indicator Badge */}
            <div className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-950/80 border border-amber-500/30 text-[11px] text-slate-300">
              <Coins className="w-3 h-3 text-amber-400" />
              <span className="font-bold text-amber-300">{currencyNotice.badge}</span>
            </div>

            {/* Nav Tabs inside Header */}
            <div className="hidden md:flex items-center bg-slate-800/80 p-1 rounded-xl border border-slate-700">
              <button
                onClick={() => setActiveTab('calculator')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'calculator' 
                    ? 'bg-amber-500 text-slate-950 shadow' 
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {language === 'fa' ? 'محاسبه و انتخاب پایه' : language === 'ar' ? 'الحاسبة واختيار القائمة' : 'Inputs & Post'}
              </button>
              <button
                onClick={() => setActiveTab('schematic')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'schematic' 
                    ? 'bg-amber-500 text-slate-950 shadow' 
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {language === 'fa' ? 'نمای شماتیک پله' : language === 'ar' ? 'المخطط الهندسي' : 'Schematic'}
              </button>
              <button
                onClick={() => setActiveTab('invoice')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'invoice' 
                    ? 'bg-amber-500 text-slate-950 shadow' 
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {language === 'fa' ? 'پیش‌فاکتور رسمی' : language === 'ar' ? 'الفاتورة الرسمية' : 'Proforma Invoice'}
              </button>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700 border border-slate-700 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mobile Tab Switcher */}
        <div className="flex md:hidden items-center justify-around bg-slate-950 border-b border-slate-800 p-1.5 text-xs font-bold shrink-0">
          <button
            onClick={() => setActiveTab('calculator')}
            className={`flex-1 py-1.5 text-center rounded-lg ${activeTab === 'calculator' ? 'bg-amber-500 text-slate-950 font-black' : 'text-slate-400'}`}
          >
            {language === 'fa' ? 'محاسبه' : 'Calc'}
          </button>
          <button
            onClick={() => setActiveTab('schematic')}
            className={`flex-1 py-1.5 text-center rounded-lg ${activeTab === 'schematic' ? 'bg-amber-500 text-slate-950 font-black' : 'Schematic'}`}
          >
            {language === 'fa' ? 'شماتیک' : 'View'}
          </button>
          <button
            onClick={() => setActiveTab('invoice')}
            className={`flex-1 py-1.5 text-center rounded-lg ${activeTab === 'invoice' ? 'bg-amber-500 text-slate-950 font-black' : 'Invoice'}`}
          >
            {language === 'fa' ? 'فاکتور' : 'Bill'}
          </button>
        </div>

        {/* Main Body */}
        <div className="overflow-y-auto flex-1 p-4 sm:p-8 space-y-6">
          
          {activeTab === 'calculator' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
              
              {/* Left/Main Column: Step 1 & 2 (7 Cols) */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* STEP 1: Select Post Model from Ready Department */}
                <div className="p-4 sm:p-5 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xs sm:text-sm font-black text-white flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-amber-500 text-slate-950 text-xs font-black flex items-center justify-center">
                        ۱
                      </span>
                      <span>
                        {language === 'fa' 
                          ? 'انتخاب مدل پایه از دپارتمان پایه‌های آماده استیلکس:' 
                          : language === 'ar' 
                          ? 'اختر نوع القائمة من قسم القوائم الجاهزة:' 
                          : 'Select Post Model from Ready-to-Install Department:'}
                      </span>
                    </h3>
                    <span className="text-[11px] text-amber-400 font-mono">
                      {READY_POST_MODELS.length} {language === 'fa' ? 'مدل استاندارد' : 'Models'}
                    </span>
                  </div>

                  {/* Horizontal Model Cards Slider/Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                    {READY_POST_MODELS.map((post) => {
                      const isSelected = post.id === selectedPostId;
                      return (
                        <div
                          key={post.id}
                          onClick={() => setSelectedPostId(post.id)}
                          className={`relative p-2.5 rounded-xl border transition-all cursor-pointer flex flex-col justify-between text-right rtl:text-right ltr:text-left ${
                            isSelected
                              ? 'bg-amber-500/15 border-amber-400 ring-2 ring-amber-500/40 shadow-lg'
                              : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900'
                          }`}
                        >
                          {isSelected && (
                            <div className="absolute top-1.5 left-1.5 rtl:left-auto rtl:right-1.5 z-10 bg-amber-500 text-slate-950 p-0.5 rounded-full">
                              <CheckCircle2 className="w-3.5 h-3.5" />
                            </div>
                          )}

                          <div className="aspect-4/3 rounded-lg overflow-hidden bg-slate-950 mb-2">
                            <img
                              src={post.image}
                              alt={post.name[language]}
                              className="w-full h-full object-cover"
                            />
                          </div>

                          <div>
                            <span className="text-[9px] font-mono font-bold text-amber-400 block truncate">
                              {post.modelCode}
                            </span>
                            <h4 className="text-xs font-bold text-white line-clamp-1 mt-0.5">
                              {post.name[language]}
                            </h4>
                            <div className="mt-1.5 pt-1.5 border-t border-slate-800/80 flex items-baseline justify-between">
                              <span className="text-[10px] text-slate-400 font-medium">
                                {post.postCategory === 'artistic_handrail' || post.postCategory === 'handrail'
                                  ? (language === 'fa' ? 'متر طول:' : language === 'ar' ? 'المتر:' : 'Per m:')
                                  : post.postCategory === 'starter'
                                  ? (language === 'fa' ? 'هر عدد استارتر:' : language === 'ar' ? 'لكل عامود:' : 'Per starter:')
                                  : (language === 'fa' ? 'هر عدد:' : language === 'ar' ? 'لكل قطعة:' : 'Per unit:')}
                              </span>
                              <span className="text-[11px] font-black text-amber-400 font-mono">
                                {formatPriceWithUnit(
                                  post.postCategory === 'artistic_handrail' || post.postCategory === 'handrail'
                                    ? post.linearMeterPrice
                                    : post.unitPrice,
                                  language,
                                  'card'
                                )}
                              </span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Active Selected Post Specs Overview Bar */}
                  <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 flex flex-wrap items-center justify-between gap-2 text-xs">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-amber-400" />
                      <span className="text-slate-300">
                        {language === 'fa' ? 'آلیاژ:' : 'Alloy:'} <strong className="text-white">{selectedPost.alloyGrade[language]}</strong>
                      </span>
                    </div>
                    <div className="text-slate-400">
                      {language === 'fa' ? 'قیمت هر عدد پایه:' : language === 'ar' ? 'سعر القائمة الواحدة:' : 'Unit Price:'}{' '}
                      <strong className="text-amber-300 font-mono">{convertedPostUnitPrice.fullLabel}</strong>
                    </div>
                  </div>
                </div>

                {/* STEP 2: Input Table for Staircase Parameters */}
                <div className="p-4 sm:p-5 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xs sm:text-sm font-black text-white flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-amber-500 text-slate-950 text-xs font-black flex items-center justify-center">
                        ۲
                      </span>
                      <span>
                        {language === 'fa' 
                          ? 'جدول اطلاعات هندسی و مشخصات راه‌پله / پروژه:' 
                          : language === 'ar' 
                          ? 'جدول البيانات الهندسية للدرج والمشروع:' 
                          : 'Staircase Geometric Data Input Table:'}
                      </span>
                    </h3>
                  </div>

                  {/* Clean Input Table */}
                  <div className="overflow-x-auto border border-slate-800 rounded-xl bg-slate-900/80">
                    <table className="w-full text-right rtl:text-right ltr:text-left text-xs">
                      <thead className="bg-slate-950/80 text-slate-400 border-b border-slate-800">
                        <tr>
                          <th className="py-2.5 px-3 font-bold">{language === 'en' ? 'Engineering Parameter' : language === 'ar' ? 'المعامل الهندسي' : 'پارامتر مهندسی'}</th>
                          <th className="py-2.5 px-3 font-bold text-center">{language === 'en' ? 'Value' : language === 'ar' ? 'القيمة' : 'مقدار'}</th>
                          <th className="py-2.5 px-3 font-bold">{language === 'en' ? 'Unit' : language === 'ar' ? 'الوحدة' : 'واحد'}</th>
                          <th className="py-2.5 px-3 font-bold">{language === 'en' ? 'Quick Adjust' : language === 'ar' ? 'تعديل سريع' : 'تنظیم سریع'}</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-800/80 text-slate-200">
                        
                        {/* 1. تعداد ردیف (شمشیری) */}
                        <tr>
                          <td className="py-3 px-3 font-medium">
                            <span className="text-white font-bold block">{language === 'en' ? 'Number of Flight Rows' : language === 'ar' ? 'عدد مسارات الدرج' : 'تعداد ردیف (شمشیری) نرده'}</span>
                            <span className="text-[10px] text-slate-400">{language === 'en' ? 'Inclined flight sections (Flights)' : language === 'ar' ? 'أقسام الدرج المائلة' : 'تعداد بخش‌های شیب‌دار پله (Flights)'}</span>
                          </td>
                          <td className="py-3 px-3 text-center">
                            <input
                              type="number"
                              min="1"
                              max="100"
                              value={flightRows}
                              onChange={(e) => setFlightRows(Math.max(1, parseInt(e.target.value) || 1))}
                              className="w-16 py-1.5 px-2 rounded-lg bg-slate-950 border border-slate-700 text-center font-black text-amber-400 text-sm focus:outline-none focus:border-amber-400 font-mono"
                            />
                          </td>
                          <td className="py-3 px-3 text-slate-400 font-mono">{language === 'en' ? 'Flights' : language === 'ar' ? 'مسار' : 'ردیف'}</td>
                          <td className="py-3 px-3">
                            <div className="flex items-center gap-1">
                              <button
                                onClick={() => setFlightRows(Math.max(1, flightRows - 1))}
                                className="w-6 h-6 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold flex items-center justify-center cursor-pointer"
                              >
                                -
                              </button>
                              <button
                                onClick={() => setFlightRows(flightRows + 1)}
                                className="w-6 h-6 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold flex items-center justify-center cursor-pointer"
                              >
                                +
                              </button>
                            </div>
                          </td>
                        </tr>

                        {/* 2. تعداد پله در هر ردیف (شمشیری) */}
                        <tr>
                          <td className="py-3 px-3 font-medium">
                            <span className="text-white font-bold block">{language === 'en' ? 'Steps per Flight Row' : language === 'ar' ? 'عدد الدرجات في كل مسار' : 'تعداد پله در هر ردیف (شمشیری)'}</span>
                            <span className="text-[10px] text-slate-400">{language === 'en' ? 'Step treads per flight (Steps)' : language === 'ar' ? 'عدد الدرجات في كل ميل' : 'تعداد کف‌پله‌ها در هر شیب (Steps)'}</span>
                          </td>
                          <td className="py-3 px-3 text-center">
                            <input
                              type="number"
                              min="1"
                              max="50"
                              value={stepsPerFlight}
                              onChange={(e) => setStepsPerFlight(Math.max(1, parseInt(e.target.value) || 1))}
                              className="w-16 py-1.5 px-2 rounded-lg bg-slate-950 border border-slate-700 text-center font-black text-amber-400 text-sm focus:outline-none focus:border-amber-400 font-mono"
                            />
                          </td>
                          <td className="py-3 px-3 text-slate-400 font-mono">{language === 'en' ? 'Steps' : language === 'ar' ? 'درجة' : 'عدد پله'}</td>
                          <td className="py-3 px-3">
                            <div className="flex items-center gap-1">
                              <button
                                onClick={() => setStepsPerFlight(Math.max(1, stepsPerFlight - 1))}
                                className="w-6 h-6 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold flex items-center justify-center cursor-pointer"
                              >
                                -
                              </button>
                              <button
                                onClick={() => setStepsPerFlight(stepsPerFlight + 1)}
                                className="w-6 h-6 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold flex items-center justify-center cursor-pointer"
                              >
                                +
                              </button>
                            </div>
                          </td>
                        </tr>

                        {/* 3. تعداد پاگرد */}
                        <tr>
                          <td className="py-3 px-3 font-medium">
                            <span className="text-white font-bold block">{language === 'en' ? 'Number of Landings' : language === 'ar' ? 'عدد البسطات' : 'تعداد پاگرد (Landings)'}</span>
                            <span className="text-[10px] text-slate-400">{language === 'en' ? 'Horizontal resting platforms' : language === 'ar' ? 'المنصات الأفقية بين مسارات الدرج' : 'سطوح افقی و استراحتگاه بین پله‌ها'}</span>
                          </td>
                          <td className="py-3 px-3 text-center">
                            <input
                              type="number"
                              min="0"
                              max="50"
                              value={landingsCount}
                              onChange={(e) => setLandingsCount(Math.max(0, parseInt(e.target.value) || 0))}
                              className="w-16 py-1.5 px-2 rounded-lg bg-slate-950 border border-slate-700 text-center font-black text-amber-400 text-sm focus:outline-none focus:border-amber-400 font-mono"
                            />
                          </td>
                          <td className="py-3 px-3 text-slate-400 font-mono">{language === 'en' ? 'Landings' : language === 'ar' ? 'بسطة' : 'پاگرد'}</td>
                          <td className="py-3 px-3">
                            <div className="flex items-center gap-1">
                              <button
                                onClick={() => setLandingsCount(Math.max(0, landingsCount - 1))}
                                className="w-6 h-6 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold flex items-center justify-center cursor-pointer"
                              >
                                -
                              </button>
                              <button
                                onClick={() => setLandingsCount(landingsCount + 1)}
                                className="w-6 h-6 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold flex items-center justify-center cursor-pointer"
                              >
                                +
                              </button>
                            </div>
                          </td>
                        </tr>

                      </tbody>
                    </table>
                  </div>

                  {/* Summary of Intermediate Values */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                    <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-center">
                      <span className="text-[10px] text-slate-400 block">{language === 'en' ? 'Total Steps:' : language === 'ar' ? 'إجمالي الدرجات:' : 'مجموع پله‌ها:'}</span>
                      <span className="text-sm font-black text-white font-mono">{totalStairSteps} {language === 'en' ? 'Steps' : language === 'ar' ? 'درجة' : 'پله'}</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-center">
                      <span className="text-[10px] text-slate-400 block">{language === 'en' ? 'Flight Length:' : language === 'ar' ? 'طول الميل:' : 'متراژ شیب پله:'}</span>
                      <span className="text-sm font-black text-white font-mono">{stairLinearMeters.toFixed(1)} {language === 'en' ? 'm' : language === 'ar' ? 'م' : 'متر'}</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-center">
                      <span className="text-[10px] text-slate-400 block">{language === 'en' ? 'Landing Length:' : language === 'ar' ? 'طول البسطات:' : 'متراژ پاگردها:'}</span>
                      <span className="text-sm font-black text-white font-mono">{landingsLinearMeters.toFixed(1)} {language === 'en' ? 'm' : language === 'ar' ? 'م' : 'متر'}</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-center">
                      <span className="text-[10px] text-amber-300 font-bold block">{language === 'en' ? 'Total Linear Length:' : language === 'ar' ? 'المتر الطولي الإجمالي:' : 'متر طول کل کار:'}</span>
                      <span className="text-sm font-black text-amber-400 font-mono">{totalLinearMeters} {language === 'en' ? 'm' : language === 'ar' ? 'م' : 'متر'}</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Right Column: Calculations, Formula & Total Bill (5 Cols) */}
              <div className="lg:col-span-5 space-y-5">
                
                {/* FORMULA TRANSPARENCY CARD */}
                <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 border border-slate-700/80 shadow-xl space-y-3">
                  <div className="flex items-center gap-2 text-amber-400 font-black text-xs uppercase tracking-wider">
                    <TrendingUp className="w-4 h-4" />
                    <span>{language === 'en' ? 'Engineering Formula & Calculation Steps:' : language === 'ar' ? 'خطوات الحساب والمعادلة الهندسية:' : 'مراحل محاسبه و فرمول مهندسی اختصاصی:'}</span>
                  </div>

                  <div className="space-y-2 text-xs">
                    
                    {/* Step A: Total Linear meters */}
                    <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1">
                      <span className="text-[11px] text-slate-400 block">{language === 'en' ? '1. Calculate Total Linear Length:' : language === 'ar' ? '١. حساب إجمالي المتر الطولي:' : '۱. محاسبه متر طول کل کار:'}</span>
                      <div className="font-mono text-slate-200 text-xs">
                        ({flightRows} {language === 'en' ? 'flights' : language === 'ar' ? 'مسار' : 'ردیف'} × {stepsPerFlight} {language === 'en' ? 'steps' : language === 'ar' ? 'درجة' : 'پله'} × 0.30) + ({landingsCount} {language === 'en' ? 'landings' : language === 'ar' ? 'بسطة' : 'پاگرد'} × 1.20) = <strong className="text-amber-400">{totalLinearMeters} {language === 'en' ? 'm' : language === 'ar' ? 'م' : 'متر'}</strong>
                      </div>
                    </div>

                    {/* Step B: Formula x = (totalLinearMeters + landings + 2) */}
                    <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1">
                      <span className="text-[11px] text-slate-400 block">{language === 'en' ? '2. Calculate Multiplier (x = Linear Meters + Landings + 2):' : language === 'ar' ? '٢. حساب المعامل (x = الأمتار + البسطات + ٢):' : '۲. محاسبه ضریب فرمول (x = عدد به دست آمده + پاگرد + ۲):'}</span>
                      <div className="font-mono text-slate-200 text-xs">
                        x = ({totalLinearMeters} + {landingsCount} + 2) = <strong className="text-emerald-400 text-sm font-black">{xValue}</strong>
                      </div>
                    </div>

                    {/* Step C: Final Bill Formula */}
                    <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 space-y-1">
                      <span className="text-[11px] text-amber-300 font-bold block">
                        {language === 'fa' ? '۳. جمع کل فاکتور = x × (قیمت متر طول):' : language === 'ar' ? '٣. إجمالي الفاتورة = x × (سعر المتر):' : '3. Total Estimate = x × (Linear Meter Price):'}
                      </span>
                      <div className="font-mono text-slate-200 text-xs">
                        {xValue} × {convertedMeterPrice.fullLabel}
                      </div>
                    </div>

                  </div>
                </div>

                {/* FINAL ESTIMATED QUOTE BOX */}
                <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-amber-500/20 via-slate-900 to-slate-950 border-2 border-amber-400 shadow-2xl space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <span className="text-xs text-slate-300 font-bold">
                      {language === 'fa' ? 'جمع کل فاکتور سفارش نرده منتخب:' : language === 'ar' ? 'إجمالي الفاتورة التقديرية للطلب:' : 'Total Proforma Estimate:'}
                    </span>
                    <span className="text-[10px] font-mono bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded border border-emerald-500/30 font-bold">
                      {language === 'fa' ? 'شامل تمام متریال و اجرا' : language === 'ar' ? 'شامل التوريد والتركيب' : 'Complete Supply & Install'}
                    </span>
                  </div>

                  <div className="text-center py-2">
                    <div className="text-2xl sm:text-3xl font-black text-amber-300 font-mono tracking-tight">
                      {language === 'en' && '$'}{convertedTotalAmount.formattedNumber}
                    </div>
                    <div className="text-xs text-slate-300 font-bold mt-1">
                      {convertedTotalAmount.currencyName}
                    </div>
                    {language !== 'fa' ? (
                      <div className="text-[11px] text-slate-400 font-mono mt-0.5">
                        {language === 'en' ? `≈ ${totalInvoiceAmount.toLocaleString()} Iranian Toman` : `يعادل ${totalInvoiceAmount.toLocaleString('ar-AE')} تومان إيراني`}
                      </div>
                    ) : (
                      <div className="text-[11px] text-slate-500 font-mono mt-0.5">
                        معادل {(totalInvoiceAmount / 10000000).toFixed(2)} میلیارد ریال
                      </div>
                    )}
                  </div>

                  {/* Breakdown of required hardware items */}
                  <div className="pt-3 border-t border-slate-800 space-y-1.5 text-xs text-slate-300">
                    <div className="flex items-center justify-between">
                      <span>{language === 'en' ? 'Prefab Posts Required:' : language === 'ar' ? 'القوائم الجاهزة المطلوبة:' : 'تعداد پایه‌های آماده مورد نیاز:'}</span>
                      <span className="font-bold text-white font-mono">{postsCount} {language === 'en' ? 'pcs' : language === 'ar' ? 'قطعة' : 'عدد'}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>{language === 'en' ? 'Handrail & Top Connectors:' : language === 'ar' ? 'طول المقبض والوصلات:' : 'متراژ هندریل و اتصالات فوقانی:'}</span>
                      <span className="font-bold text-white font-mono">{handrailMeters} {language === 'en' ? 'm' : language === 'ar' ? 'م' : 'متر'}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>{language === 'en' ? 'Stainless Base Escutcheons:' : language === 'ar' ? 'أغطية القواعد ستانلس:' : 'تعداد قالپاق پرسی کفی استیل:'}</span>
                      <span className="font-bold text-white font-mono">{escutcheonsCount} {language === 'en' ? 'pcs' : language === 'ar' ? 'قطعة' : 'عدد'}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>{language === 'en' ? 'Hilti Stainless Anchor Bolts:' : language === 'ar' ? 'براغي تثبيت هيلتي ستانلس:' : 'پیچ و رول‌بولت‌های هیلتی ضدزنگ:'}</span>
                      <span className="font-bold text-white font-mono">{anchorBoltsCount} {language === 'en' ? 'pcs' : language === 'ar' ? 'قطعة' : 'عدد'}</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-2 space-y-2">
                    <button
                      onClick={() => setActiveTab('invoice')}
                      className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 text-xs font-black flex items-center justify-center gap-2 shadow-lg shadow-amber-500/25 transition-all cursor-pointer"
                    >
                      <FileSpreadsheet className="w-4 h-4" />
                      <span>{language === 'en' ? 'View & Issue Official Proforma' : language === 'ar' ? 'عرض وإصدار الفاتورة الرسمية' : 'مشاهده و صدور پیش‌فاکتور رسمی'}</span>
                    </button>

                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={handleSendToWhatsapp}
                        className="py-2.5 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/40 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                      >
                        <Share2 className="w-3.5 h-3.5" />
                        <span>{language === 'en' ? 'Send via WhatsApp' : language === 'ar' ? 'إرسال عبر واتساب' : 'ارسال در واتساپ'}</span>
                      </button>

                      <button
                        onClick={handleProceedToConsultation}
                        className="py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                      >
                        <Phone className="w-3.5 h-3.5 text-amber-400" />
                        <span>{language === 'en' ? 'Book Site Visit' : language === 'ar' ? 'حجز موعد معاينة' : 'ثبت جهت بازدید'}</span>
                      </button>
                    </div>
                  </div>

                </div>

              </div>

            </div>
          )}

          {/* TAB 2: SCHEMATIC VISUALIZER */}
          {activeTab === 'schematic' && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-white flex items-center gap-2">
                      <Ruler className="w-4 h-4 text-amber-400" />
                      <span>{language === 'en' ? 'Architectural Schematic View with Selected Post' : language === 'ar' ? 'المخطط الهندسي والمعماري للدرج' : 'نمای شماتیک و معماری راه‌پله با پایه انتخابی'}</span>
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5">
                      {language === 'en' ? 'Model: ' : language === 'ar' ? 'الموديل: ' : 'مدل: '}<strong className="text-amber-400">{selectedPost.name[language]}</strong> | {flightRows} {language === 'en' ? 'flight rows' : language === 'ar' ? 'مسارات' : 'ردیف شمشیری'} | {stepsPerFlight} {language === 'en' ? 'steps/flight' : language === 'ar' ? 'درجة/مسار' : 'پله در هر ردیف'} | {landingsCount} {language === 'en' ? 'landings' : language === 'ar' ? 'بسطة' : 'پاگرد'}
                    </p>
                  </div>
                  <button
                    onClick={() => setActiveTab('calculator')}
                    className="text-xs text-amber-400 hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <span>{language === 'en' ? 'Modify Inputs' : language === 'ar' ? 'تعديل المدخلات' : 'تغییر مقادیر'}</span>
                    <ChevronLeft className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* SVG Schematic Canvas */}
                <div className="w-full h-80 bg-slate-900/90 rounded-xl border border-slate-800 flex items-center justify-center p-4 relative overflow-hidden">
                  <svg className="w-full h-full" viewBox="0 0 800 320">
                    <defs>
                      <linearGradient id="stairGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#334155" />
                        <stop offset="100%" stopColor="#1e293b" />
                      </linearGradient>
                      <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#f59e0b" />
                        <stop offset="100%" stopColor="#fbbf24" />
                      </linearGradient>
                    </defs>

                    {/* Ground floor line */}
                    <line x1="40" y1="280" x2="140" y2="280" stroke="#475569" strokeWidth="4" />
                    
                    {/* Flight 1 Steps */}
                    <path 
                      d="M 140 280 L 170 280 L 170 250 L 200 250 L 200 220 L 230 220 L 230 190 L 260 190 L 260 160 L 320 160" 
                      fill="none" 
                      stroke="#64748b" 
                      strokeWidth="3" 
                    />
                    
                    {/* Landing 1 Platform */}
                    <line x1="320" y1="160" x2="420" y2="160" stroke="#f59e0b" strokeWidth="4" />
                    <text x="350" y="150" fill="#fbbf24" fontSize="11" fontFamily="sans-serif">
                      {language === 'en' ? `Landing 1 (${landingsCount > 0 ? 'Active' : 'Direct'})` : language === 'ar' ? `بسطة ١ (${landingsCount > 0 ? 'مفعل' : 'مباشر'})` : `پاگرد ۱ (${landingsCount > 0 ? 'فعال' : 'مستقیم'})`}
                    </text>

                    {/* Flight 2 Steps */}
                    <path 
                      d="M 420 160 L 450 160 L 450 130 L 480 130 L 480 100 L 510 100 L 510 70 L 540 70 L 540 40 L 620 40" 
                      fill="none" 
                      stroke="#64748b" 
                      strokeWidth="3" 
                    />

                    {/* Top Landing Platform */}
                    <line x1="620" y1="40" x2="740" y2="40" stroke="#475569" strokeWidth="4" />

                    {/* Railing Handrail Line (Gold) */}
                    <path 
                      d="M 140 200 L 260 80 L 420 80 L 540 -40 L 740 -40" 
                      fill="none" 
                      stroke="url(#goldGrad)" 
                      strokeWidth="5" 
                      strokeLinecap="round" 
                    />

                    {/* Vertical Posts corresponding to user selected model */}
                    {[140, 200, 260, 320, 420, 480, 540, 620, 720].map((posX, idx) => {
                      let baseY = 280;
                      let topY = 200;
                      if (posX >= 170 && posX <= 260) {
                        baseY = 280 - ((posX - 140) * 1.0);
                        topY = baseY - 80;
                      } else if (posX > 260 && posX <= 420) {
                        baseY = 160;
                        topY = 80;
                      } else if (posX > 420 && posX <= 540) {
                        baseY = 160 - ((posX - 420) * 1.0);
                        topY = baseY - 80;
                      } else if (posX > 540) {
                        baseY = 40;
                        topY = -40;
                      }

                      return (
                        <g key={idx}>
                          {/* Base Escutcheon */}
                          <rect x={posX - 6} y={baseY - 3} width="12" height="6" rx="2" fill="#d97706" />
                          {/* Post Body */}
                          <line x1={posX} y1={baseY} x2={posX} y2={topY} stroke="#cbd5e1" strokeWidth="4" strokeLinecap="round" />
                          {/* Top Saddle Clamp */}
                          <circle cx={posX} cy={topY} r="4" fill="#fbbf24" />
                        </g>
                      );
                    })}

                    {/* Annotations */}
                    <text x="140" y="310" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">
                      {language === 'en' ? 'Stair Start (Flight 1)' : language === 'ar' ? 'بداية الدرج (مسار ١)' : 'شروع پله (ردیف ۱)'}
                    </text>
                    <text x="640" y="25" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">
                      {language === 'en' ? 'Top Landing (Flight 2)' : language === 'ar' ? 'نهاية المسار (مسار ٢)' : 'انتهای مسیر (ردیف ۲)'}
                    </text>
                  </svg>

                  <div className="absolute bottom-3 right-3 rtl:right-auto rtl:left-3 bg-slate-950/80 px-3 py-1 rounded-lg border border-slate-700 text-[10px] text-slate-300">
                    {language === 'en' ? 'Total Length: ' : language === 'ar' ? 'إجمالي المتر: ' : 'متر طول کل: '}<strong className="text-amber-400 font-mono">{totalLinearMeters}m</strong> | {language === 'en' ? 'Estimated Posts: ' : language === 'ar' ? 'القوائم التقديرية: ' : 'پایه تخمینی: '}<strong className="text-white font-mono">{postsCount} {language === 'en' ? 'pcs' : language === 'ar' ? 'قطعة' : 'عدد'}</strong>
                  </div>
                </div>

                {/* Selected Post Summary Box */}
                <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-900 border border-slate-800">
                  <img src={selectedPost.image} alt={selectedPost.name[language]} className="w-16 h-16 rounded-xl object-cover border border-slate-700" />
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] font-mono font-bold text-amber-400">{selectedPost.modelCode}</span>
                    <h4 className="text-sm font-bold text-white truncate">{selectedPost.name[language]}</h4>
                    <p className="text-xs text-slate-400 mt-0.5">{selectedPost.profileDimensions[language]} • {selectedPost.thickness}</p>
                  </div>
                  <button
                    onClick={() => setActiveTab('invoice')}
                    className="lux-btn-gold px-4 py-2 rounded-xl text-xs font-black shrink-0 cursor-pointer"
                  >
                    {language === 'en' ? 'Generate Proforma for This Design' : language === 'ar' ? 'إصدار فاتورة لهذا التصميم' : 'صدور پیش‌فاکتور این طرح'}
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: OFFICIAL PROFORMA INVOICE */}
          {activeTab === 'invoice' && (
            <div className="space-y-6 animate-in fade-in duration-200">
              
              {/* Proforma Paper Container */}
              <div id="stellex-proforma-print" className="p-6 sm:p-8 rounded-3xl bg-slate-950 border border-slate-700 shadow-2xl space-y-6 text-slate-100">
                
                {/* Proforma Header */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-slate-950 font-black text-xl shadow-lg">
                      ST
                    </div>
                    <div>
                      <h2 className="text-lg font-black text-white">{language === 'en' ? COMPANY_INFO.nameEn : COMPANY_INFO.nameFa}</h2>
                      <p className="text-xs text-slate-400">{language === 'en' ? 'Specialized Stainless Steel Engineering & Estimation Unit' : language === 'ar' ? 'قسم الهندسة والتقدير المتخصص لهياكل الستانلس ستيل' : 'واحد مهندسی و برآورد تخصصی سازه‌های استنلس استیل'}</p>
                    </div>
                  </div>

                  <div className="text-right rtl:text-left text-xs space-y-1 font-mono">
                    <div>
                      <span className="text-slate-400">{language === 'en' ? 'Proforma No:' : language === 'ar' ? 'رقم الفاتورة:' : 'شماره پیش‌فاکتور:'}</span>{' '}
                      <strong className="text-amber-400">{proformaCode}</strong>
                    </div>
                    <div>
                      <span className="text-slate-400">{language === 'en' ? 'Issue Date:' : language === 'ar' ? 'تاريخ الإصدار:' : 'تاریخ صدور:'}</span>{' '}
                      <span className="text-slate-200">{language === 'en' ? new Date().toISOString().split('T')[0] : todayPersian}</span>
                    </div>
                    <div>
                      <span className="text-slate-400">{language === 'en' ? 'Validity:' : language === 'ar' ? 'الصلاحية:' : 'اعتبار پیش‌فاکتور:'}</span>{' '}
                      <span className="text-emerald-400">{language === 'en' ? '7 Business Days' : language === 'ar' ? '٧ أيام عمل' : '۷ روز کاری'}</span>
                    </div>
                  </div>
                </div>

                {/* Client Info Bar */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-xs">
                  <div>
                    <label className="text-[10px] text-slate-400 block mb-1">{language === 'en' ? 'Client / Project Owner Name:' : language === 'ar' ? 'اسم العميل / صاحب المشروع:' : 'نام متقاضی / کارفرما:'}</label>
                    <input
                      type="text"
                      placeholder={language === 'en' ? 'Full Name' : language === 'ar' ? 'الاسم الكامل' : 'نام و نام‌خانوادگی'}
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      className="w-full px-2.5 py-1.5 rounded-lg bg-slate-950 border border-slate-700 text-white focus:outline-none focus:border-amber-400 text-xs"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] text-slate-400 block mb-1">{language === 'en' ? 'Contact Phone:' : language === 'ar' ? 'رقم الهاتف:' : 'شماره تماس:'}</label>
                    <input
                      type="tel"
                      placeholder={language === 'en' ? '+1 / Phone...' : '۰۹۱۲...'}
                      value={clientPhone}
                      onChange={(e) => setClientPhone(e.target.value)}
                      className="w-full px-2.5 py-1.5 rounded-lg bg-slate-950 border border-slate-700 text-white focus:outline-none focus:border-amber-400 text-xs font-mono text-left"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] text-slate-400 block mb-1">{language === 'en' ? 'Project City / Location:' : language === 'ar' ? 'مدينة المشروع:' : 'شهر محل پروژه:'}</label>
                    <input
                      type="text"
                      value={clientCity}
                      onChange={(e) => setClientCity(e.target.value)}
                      className="w-full px-2.5 py-1.5 rounded-lg bg-slate-950 border border-slate-700 text-white focus:outline-none focus:border-amber-400 text-xs"
                    />
                  </div>
                </div>

                {/* Items & Parameters Table */}
                <div className="overflow-x-auto border border-slate-800 rounded-xl">
                  <table className="w-full text-right rtl:text-right ltr:text-left text-xs">
                    <thead className="bg-slate-900 text-slate-300 border-b border-slate-800 font-bold">
                      <tr>
                        <th className="py-2.5 px-3">{language === 'en' ? '#' : language === 'ar' ? 'الرقم' : 'ردیف'}</th>
                        <th className="py-2.5 px-3">{language === 'en' ? 'Description of Goods & Engineering Services' : language === 'ar' ? 'بيان البضائع والخدمات الهندسية' : 'شرح مشخصات کالا و خدمات مهندسی'}</th>
                        <th className="py-2.5 px-3 text-center">{language === 'en' ? 'Qty' : language === 'ar' ? 'الكمية' : 'مقدار'}</th>
                        <th className="py-2.5 px-3 text-center">{language === 'en' ? 'Unit' : language === 'ar' ? 'الوحدة' : 'واحد'}</th>
                        <th className="py-2.5 px-3 text-left rtl:text-left ltr:text-right">{language === 'en' ? 'Unit Price' : language === 'ar' ? 'سعر الوحدة' : 'مبلغ واحد (تومان)'}</th>
                        <th className="py-2.5 px-3 text-left rtl:text-left ltr:text-right">{language === 'en' ? 'Total Amount' : language === 'ar' ? 'المبلغ الإجمالي' : 'مبلغ کل (تومان)'}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60 text-slate-300">
                      
                      {/* Item 1: Selected Post & Assembly System */}
                      <tr>
                        <td className="py-3 px-3 font-mono">۱</td>
                        <td className="py-3 px-3">
                          <strong className="text-white block">{selectedPost.name[language]}</strong>
                          <span className="text-[11px] text-slate-400 block">
                            {language === 'en' ? 'Model: ' : language === 'ar' ? 'رمز الموديل: ' : 'کد مدل '}{selectedPost.modelCode} | {language === 'en' ? 'Thickness: ' : language === 'ar' ? 'السماكة: ' : 'ضخامت: '}{selectedPost.thickness} | {language === 'en' ? 'Alloy: ' : language === 'ar' ? 'السبائك: ' : 'آلیاژ: '}{selectedPost.alloyGrade[language]}
                          </span>
                          <span className="text-[10px] text-amber-400 block">
                            {language === 'en' ? 'Includes handrail, base covers, structural fittings, Hilti anchor bolts, and professional installation' : language === 'ar' ? 'يشمل المقابض، أغطية القواعد، الوصلات، براغي التثبيت هيلتي والتركيب المتخصص' : 'شامل هندریل، قالپاق، اتصالات، فیتینگ، رول‌بولت هیلتی و نصب تخصصی'}
                          </span>
                        </td>
                        <td className="py-3 px-3 text-center font-black text-amber-400 font-mono text-sm">
                          {xValue}
                        </td>
                        <td className="py-3 px-3 text-center font-mono">
                          {language === 'fa' ? 'متر ضریب (x)' : language === 'ar' ? 'أمتار المعامل (x)' : 'Linear Meters (x)'}
                        </td>
                        <td className="py-3 px-3 text-left rtl:text-left ltr:text-right font-mono">
                          {convertedMeterPrice.fullLabel}
                        </td>
                        <td className="py-3 px-3 text-left rtl:text-left ltr:text-right font-black text-emerald-400 font-mono text-sm">
                          {convertedTotalAmount.fullLabel}
                        </td>
                      </tr>

                      {/* Item 2: Summary of physical dimensions */}
                      <tr className="bg-slate-900/40 text-[11px]">
                        <td className="py-2 px-3 font-mono">۲</td>
                        <td className="py-2 px-3" colSpan={3}>
                          <span>{language === 'en' ? 'Project Input Specs: ' : language === 'ar' ? 'المواصفات المدخلة للمشروع: ' : 'مشخصات ورودی پروژه: '}</span>
                          <strong className="text-white font-mono">{flightRows}</strong> {language === 'en' ? 'flight rows' : language === 'ar' ? 'مسار' : 'ردیف شمشیری'} × <strong className="text-white font-mono">{stepsPerFlight}</strong> {language === 'en' ? 'steps' : language === 'ar' ? 'درجة' : 'پله'} + <strong className="text-white font-mono">{landingsCount}</strong> {language === 'en' ? 'landings' : language === 'ar' ? 'بسطة' : 'پاگرد'} ({language === 'en' ? 'Total linear meters: ' : language === 'ar' ? 'إجمالي المتر الطولي: ' : 'متر طول کل کار: '}<strong className="text-amber-400 font-mono">{totalLinearMeters}m</strong>)
                        </td>
                        <td className="py-2 px-3 text-left rtl:text-left ltr:text-right font-mono" colSpan={2}>
                          {language === 'en' ? 'Formula: ' : language === 'ar' ? 'المعادلة: ' : 'فرمول: '}x = ({totalLinearMeters} + {landingsCount} + 2) = {xValue}
                        </td>
                      </tr>

                      {/* Item 3: Hardware count checklist */}
                      <tr className="bg-slate-900/20 text-[11px] text-slate-400">
                        <td className="py-2 px-3 font-mono">۳</td>
                        <td className="py-2 px-3" colSpan={5}>
                          {language === 'en' ? `B.O.Q Pack includes: ${postsCount} pcs STELLEX posts, ${handrailMeters} m handrails, ${escutcheonsCount} pcs seamless base covers, ${anchorBoltsCount} pcs stainless anchor bolts` : language === 'ar' ? `يشمل الطرد: ${postsCount} قائمة ستيليكس، ${handrailMeters} م مقبض، ${escutcheonsCount} غطاء قاعدة، ${anchorBoltsCount} برغي تثبيت` : `پکینگ و ملزومات شامل: ${postsCount} عدد پایه استیلکس، ${handrailMeters} متر هندریل، ${escutcheonsCount} عدد قالپاق بدون درز، ${anchorBoltsCount} عدد رولبولت`}
                        </td>
                      </tr>

                    </tbody>
                    <tfoot className="bg-slate-900 border-t-2 border-slate-700">
                      <tr>
                        <td colSpan={4} className="py-3.5 px-4 font-bold text-white text-right rtl:text-right ltr:text-left">
                          {language === 'fa' ? 'جمع کل نهایی فاکتور سفارش منتخب:' : language === 'ar' ? 'إجمالي الفاتورة المعتمدة للطلب:' : 'Final Order Total Estimate:'}
                        </td>
                        <td colSpan={2} className="py-3.5 px-4 text-left rtl:text-left ltr:text-right font-black text-amber-400 text-base font-mono">
                          {convertedTotalAmount.fullLabel}
                          {language !== 'fa' && (
                            <span className="text-[10px] text-slate-400 block font-normal font-mono mt-0.5">
                              ({language === 'en' ? `≈ ${totalInvoiceAmount.toLocaleString()} Iranian Toman` : `يعادل ${totalInvoiceAmount.toLocaleString('ar-AE')} تومان إيراني`})
                            </span>
                          )}
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>

                {/* Terms and Signatures */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-[11px] text-slate-400">
                  <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1">
                    <span className="font-bold text-slate-300 block">{language === 'en' ? 'STELLEX Engineering Terms & Conditions:' : language === 'ar' ? 'الشروط والملاحظات الهندسية لستيليكس:' : 'توضیحات و شرایط مهندسی استیلکس:'}</span>
                    <p>{language === 'en' ? `• All materials carry an official ${selectedPost.warrantyYears}-year anti-corrosion written warranty and metallurgical certification.` : language === 'ar' ? `• جميع المواد مشمولة بضمان خطي لمدة ${selectedPost.warrantyYears} سنوات ضد الصدأ مع شهادة فحص معتمدة.` : `• کلیه متریال‌ها دارای ضمانت‌نامه کتبی ${selectedPost.warrantyYears} ساله ضدزنگ و تاییدیه متالوژی هستند.`}</p>
                    <p>{language === 'en' ? '• Final amount is validated after precise on-site laser dimension survey.' : language === 'ar' ? '• يتم تأكيد المبلغ النهائي بعد إجراء المسح الليزري الميداني الدقيق في الموقع.' : '• مبلغ نهایی پس از نقشه‌برداری دقیق لیزری در محل پروژه نهایی و تایید می‌گردد.'}</p>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between">
                    <div>
                      <span className="font-bold text-slate-300 block">{language === 'en' ? 'STELLEX Engineering Seal & Signature' : language === 'ar' ? 'ختم وتوقيع الهندسة لستيليكس' : 'مهر و امضای مهندسی استیلکس'}</span>
                      <span className="text-[10px] text-emerald-400 font-mono">{language === 'en' ? 'Approved by Quality Control Department (QC)' : language === 'ar' ? 'معتمد من قسم مراقبة الجودة (QC)' : 'تایید شده توسط واحد کنترل کیفیت (QC)'}</span>
                    </div>
                    <div className="w-16 h-16 rounded-full border-2 border-dashed border-amber-500/40 flex items-center justify-center text-amber-400 text-[9px] font-bold text-center">
                      STELLEX QC APPROVED
                    </div>
                  </div>
                </div>

              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                <button
                  onClick={() => setActiveTab('calculator')}
                  className="lux-btn-outline px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-1.5 cursor-pointer"
                >
                  <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                  <span>{language === 'en' ? 'Back to Calculator' : language === 'ar' ? 'العودة إلى الحاسبة' : 'بازگشت به محاسبه‌گر'}</span>
                </button>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrint}
                    className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold flex items-center gap-1.5 border border-slate-700 transition-colors cursor-pointer"
                  >
                    <Printer className="w-4 h-4 text-amber-400" />
                    <span>{language === 'en' ? 'Print Proforma' : language === 'ar' ? 'طباعة الفاتورة' : 'چاپ پیش‌فاکتور'}</span>
                  </button>

                  <button
                    onClick={handleSendToWhatsapp}
                    className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-black flex items-center gap-1.5 shadow-lg shadow-emerald-600/20 transition-all cursor-pointer"
                  >
                    <Share2 className="w-4 h-4" />
                    <span>{language === 'en' ? 'Send Proforma via WhatsApp' : language === 'ar' ? 'إرسال الفاتورة عبر واتساب' : 'ارسال فاکتور در واتساپ'}</span>
                  </button>

                  <button
                    onClick={handleProceedToConsultation}
                    className="lux-btn-gold px-5 py-2.5 rounded-xl text-xs font-black flex items-center gap-1.5 shadow-lg shadow-amber-500/20 cursor-pointer"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span>{language === 'en' ? 'Confirm & Request Site Specialist' : language === 'ar' ? 'تأكيد وطلب إرسال خبير للمعاينة' : 'تایید و درخواست اعزام کارشناس'}</span>
                  </button>
                </div>
              </div>

            </div>
          )}

        </div>

      </div>

    </div>
  );
};
