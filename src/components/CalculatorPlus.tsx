import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ReadyPostModel } from '../types';
import { READY_POST_MODELS } from '../data/stellexData';
import { useLanguage } from '../context/LanguageContext';
import { convertFromToman, formatPriceWithUnit, getCurrencyNotice } from '../utils/currency';
import { ArchitecturalExecutionPreview } from './ArchitecturalExecutionPreview';
import { 
  Calculator, 
  Sparkles, 
  Layers, 
  CheckCircle2, 
  Check,
  FileText, 
  Printer, 
  ShieldCheck, 
  ArrowLeft, 
  ArrowRight,
  Ruler,
  Info,
  X,
  Coins,
  Palette,
  Eye
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface CalculatorPlusProps {
  initialPostModel?: ReadyPostModel;
  onOpenConsultationWithInvoice?: (invoiceData: any) => void;
  onSelectPostDetails?: (post: ReadyPostModel) => void;
}

export const CalculatorPlus: React.FC<CalculatorPlusProps> = ({
  initialPostModel,
  onOpenConsultationWithInvoice,
  onSelectPostDetails,
}) => {
  const { language, t, isRtl } = useLanguage();
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  // Filter models by the 3 distinct departments requested by the user
  const prefabModels = READY_POST_MODELS.filter((p) => p.postCategory === 'prefab');
  const starterModels = READY_POST_MODELS.filter((p) => p.postCategory === 'starter');
  const handrailModels = READY_POST_MODELS.filter((p) => p.postCategory === 'artistic_handrail');

  // Step 1: Selected Prefab Post Model (پایه‌های پیش‌ساخته - در ابتدا هیچ گزینه‌ای انتخاب نیست)
  const [selectedPrefabPostId, setSelectedPrefabPostId] = useState<string | null>(
    initialPostModel?.postCategory === 'prefab' ? initialPostModel.id : null
  );

  // Step 2: Selected Starter Model (استارترهای لوکس - در ابتدا هیچ گزینه‌ای انتخاب نیست)
  const [selectedStarterPostId, setSelectedStarterPostId] = useState<string | null>(
    initialPostModel?.postCategory === 'starter' ? initialPostModel.id : null
  );

  // Step 3: Selected Handrail Model (هندریل‌های هنری - در ابتدا هیچ گزینه‌ای انتخاب نیست)
  const [selectedHandrailPostId, setSelectedHandrailPostId] = useState<string | null>(
    initialPostModel?.postCategory === 'artistic_handrail' ? initialPostModel.id : null
  );

  // بخش فعال و فوکوس‌شده در کادر واحد: ابتدا فوکوس روی پایه‌های پیش‌ساخته است
  const [activeStep, setActiveStep] = useState<'prefab' | 'starter' | 'handrail' | 'geometry' | 'completed'>(
    initialPostModel?.postCategory === 'starter' ? 'starter' :
    initialPostModel?.postCategory === 'artistic_handrail' ? 'handrail' : 'prefab'
  );

  // Step 4: User input fields - Project geometric information
  const [flightsCount, setFlightsCount] = useState<number>(2); // تعداد ردیف (شمشیری) پله یا نرده
  const [stepsPerFlight, setStepsPerFlight] = useState<number>(10); // تعداد پله در هر ردیف (شمشیری)

  // Customer contact info
  const [customerName, setCustomerName] = useState<string>('');
  const [customerPhone, setCustomerPhone] = useState<string>('');
  const [projectLocation, setProjectLocation] = useState<string>('تهران');
  const [invoiceGenerated, setInvoiceGenerated] = useState<boolean>(false);

  // Update selected post if initialPostModel changes
  useEffect(() => {
    if (initialPostModel) {
      if (initialPostModel.postCategory === 'starter') {
        setSelectedStarterPostId(initialPostModel.id);
        setActiveStep('starter');
      } else if (initialPostModel.postCategory === 'artistic_handrail') {
        setSelectedHandrailPostId(initialPostModel.id);
        setActiveStep('handrail');
      } else {
        setSelectedPrefabPostId(initialPostModel.id);
        setActiveStep('prefab');
      }
    }
  }, [initialPostModel]);

  // توابع انتخاب قطعات با هدایت گام‌به‌گام فوکوس:
  const handleSelectPrefab = (id: string) => {
    setSelectedPrefabPostId(id);
    // با انتخاب پایه، بخش پایه فشرده شده و استارترها به حالت کارت کامل باز می‌شوند
    setActiveStep('starter');
  };

  const handleSelectStarter = (id: string) => {
    setSelectedStarterPostId(id);
    // با انتخاب استارتر، بخش استارتر فشرده شده و هندریل‌ها به حالت کارت کامل باز می‌شوند
    setActiveStep('handrail');
  };

  const handleSelectHandrail = (id: string) => {
    setSelectedHandrailPostId(id);
    // با انتخاب هندریل‌های هنری، گام بعدی تعیین تعداد ردیف و پله‌ها در کادر واحد است
    setActiveStep('geometry');
  };

  // Retrieve active selected models
  const selectedPrefabPost = prefabModels.find((p) => p.id === selectedPrefabPostId) || null;
  const selectedStarterPost = starterModels.find((p) => p.id === selectedStarterPostId) || null;
  const selectedHandrailPost = handrailModels.find((p) => p.id === selectedHandrailPostId) || null;

  /* 
    📐 فرمول مهندسی محاسبه متراژ (X) و مقادیر:
    ۱. تعداد کل پله‌ها = تعداد ردیف (شمشیری) × تعداد پله در هر ردیف
    ۲. طول خام پله‌ها بر روی شیب = تعداد کل پله‌ها × ۰.۳۵ متر
    ۳. فرمول نهایی ضریب متراژ فاکتور:
       x = (طول خام محاسبه شده پله‌ها + ۲)
    ۴. تعداد پایه‌های پیش‌ساخته میانی = ردیف‌ها × (تعداد پله / ۳ + ۱)
    ۵. تعداد استارتر لوکس ورودی = تعداد ردیف شمشیری (۱ عدد برای ورودی هر شیب)
  */

  const totalSteps = Math.max(1, flightsCount) * Math.max(1, stepsPerFlight);
  // طول خام شیب پله‌ها
  const rawCalculatedMeters = Number((totalSteps * 0.35).toFixed(2));
  // فرمول متراژ نهایی X
  const finalCalculatedX = Number((rawCalculatedMeters + 2).toFixed(2));

  // تعداد پایه‌های میانی پیش‌ساخته و استارتر
  const estimatedPrefabPostsQuantity = Math.ceil(flightsCount * (Math.ceil(stepsPerFlight / 3) + 1));
  const startersQuantity = flightsCount;

  // محاسبه مالی اقلام فاکتور با بررسی انتخاب شدن
  // ۱. پایه‌های پیش‌ساخته و سازه پایه بر اساس متر طول
  const prefabStructureCost = selectedPrefabPost ? Math.round(finalCalculatedX * selectedPrefabPost.linearMeterPrice) : 0;
  // ۲. استارتر لوکس ورودی به ازای هر عدد
  const startersCost = selectedStarterPost ? Math.round(startersQuantity * selectedStarterPost.unitPrice) : 0;
  // ۳. هندریل هنری پیوسته دکوراتیو بر روی کار
  const handrailCraftPerMeter = selectedHandrailPost ? Math.round(selectedHandrailPost.linearMeterPrice * 0.25) : 0;
  const handrailCost = selectedHandrailPost ? Math.round(finalCalculatedX * handrailCraftPerMeter) : 0;

  // جمع کل فاکتور نهایی
  const totalInvoicePrice = prefabStructureCost + startersCost + handrailCost;

  // تبدیل ارزی متناسب با زبان فعال (تومان، درهم امارات، دلار)
  const currencyNotice = getCurrencyNotice(language);
  const convertedPrefabMeterPrice = selectedPrefabPost ? convertFromToman(selectedPrefabPost.linearMeterPrice, language) : null;
  const convertedStarterUnitPrice = selectedStarterPost ? convertFromToman(selectedStarterPost.unitPrice, language) : null;
  const convertedHandrailMeterPrice = selectedHandrailPost ? convertFromToman(handrailCraftPerMeter, language) : null;
  const convertedTotalPrice = convertFromToman(totalInvoicePrice, language);

  const handleGenerateInvoice = () => {
    if (!selectedPrefabPost) {
      setActiveStep('prefab');
      return;
    }
    if (!selectedStarterPost) {
      setActiveStep('starter');
      return;
    }
    if (!selectedHandrailPost) {
      setActiveStep('handrail');
      return;
    }

    setInvoiceGenerated(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#f59e0b', '#fbbf24', '#cbd5e1', '#38bdf8']
    });
  };

  const handlePrintInvoice = () => {
    try {
      window.print();
    } catch (e) {
      console.warn('Window print unavailable in preview sandbox:', e);
    }
  };

  const handleProceedToConsultation = () => {
    if (!selectedPrefabPost) {
      setActiveStep('prefab');
      return;
    }
    if (!selectedStarterPost) {
      setActiveStep('starter');
      return;
    }
    if (!selectedHandrailPost) {
      setActiveStep('handrail');
      return;
    }

    if (onOpenConsultationWithInvoice) {
      const descriptionText = language === 'ar'
        ? `طلب عبر حاسبة بلس الهندسية:
- موديل القائمة الجاهزة: ${selectedPrefabPost.name[language]} (${selectedPrefabPost.modelCode})
- موديل عامود البداية الفاخر: ${selectedStarterPost.name[language]} (${selectedStarterPost.modelCode})
- موديل الهندريل الفني: ${selectedHandrailPost.name[language]} (${selectedHandrailPost.modelCode})
- أبعاد المشروع: ${flightsCount} مسارات (شمشيري) × ${stepsPerFlight} درجات في كل مسار | متراژ X=${finalCalculatedX} م
- إجمالي عرض السعر التقديري: ${convertedTotalPrice.fullLabel} (معادل ${totalInvoicePrice.toLocaleString('fa-IR')} تومان)`
        : language === 'en'
        ? `Order via Engineering Calculator Plus:
- Prefab Post Model: ${selectedPrefabPost.name[language]} (${selectedPrefabPost.modelCode})
- Luxury Starter Model: ${selectedStarterPost.name[language]} (${selectedStarterPost.modelCode})
- Artistic Handrail Model: ${selectedHandrailPost.name[language]} (${selectedHandrailPost.modelCode})
- Dimensions: ${flightsCount} flights × ${stepsPerFlight} steps/flight | Total Billable X=${finalCalculatedX}m
- Total Estimated Quotation: ${convertedTotalPrice.fullLabel} (~${totalInvoicePrice.toLocaleString('fa-IR')} Toman)`
        : `سفارش محاسبه‌گر هوشمند پلاس استیلکس:
- مدل پایه پیش‌ساخته: ${selectedPrefabPost.name[language]} (${selectedPrefabPost.modelCode})
- مدل استارتر لوکس: ${selectedStarterPost.name[language]} (${selectedStarterPost.modelCode})
- مدل هندریل هنری: ${selectedHandrailPost.name[language]} (${selectedHandrailPost.modelCode})
- مشخصات هندسی پله‌ها: ${flightsCount} ردیف شمشیری × ${stepsPerFlight} پله در هر ردیف | متراژ نهایی X=${finalCalculatedX} متر طول
- پیش‌فاکتور کل: ${totalInvoicePrice.toLocaleString('fa-IR')} تومان (${convertedTotalPrice.fullLabel})`;

      onOpenConsultationWithInvoice({
        serviceCategory: 'ready-posts',
        postModel: `${selectedPrefabPost.name[language]} + ${selectedStarterPost.name[language]} + ${selectedHandrailPost.name[language]}`,
        postCode: `${selectedPrefabPost.modelCode} / ${selectedStarterPost.modelCode} / ${selectedHandrailPost.modelCode}`,
        flightsCount,
        stepsPerFlight,
        totalMetersX: finalCalculatedX,
        totalEstimatedPrice: totalInvoicePrice,
        currencyAmount: convertedTotalPrice.amount,
        currencyCode: convertedTotalPrice.currencyCode,
        currencyLabel: convertedTotalPrice.fullLabel,
        customerName,
        customerPhone,
        projectLocation,
        description: descriptionText,
      });
    }
  };

  return (
    <section id="calculator-plus" className="py-16 sm:py-24 bg-slate-950 text-slate-100 relative overflow-hidden border-t border-slate-800">
      
      {/* Background Ambience Glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="flex flex-wrap items-center justify-center gap-2.5 mb-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold backdrop-blur-md">
              <Calculator className="w-4 h-4 text-amber-400" />
              <span>{language === 'fa' ? 'محاسبه‌گر آنلاین پلاس | استودیو مهندسی استیلکس' : language === 'ar' ? 'حاسبة بلس الهندسية أونلاين' : 'STELLEX Calculator Plus Studio'}</span>
            </div>

            {/* Currency Indicator Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/90 border border-amber-500/30 text-xs text-slate-200 backdrop-blur-md shadow-sm">
              <Coins className="w-3.5 h-3.5 text-amber-400" />
              <span className="font-bold text-amber-300">{currencyNotice.badge}</span>
            </div>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight mb-4">
            {language === 'fa' ? (
              <>
                محاسبه‌گر هوشمند <span className="text-amber-400">پایه‌های آماده، استارتر و هندریل</span> نرده استیل
              </>
            ) : language === 'ar' ? (
              <>
                حاسبة <span className="text-amber-400">القوائم الجاهزة وعواميد البداية والهندريل</span> الذكية
              </>
            ) : (
              <>
                Smart <span className="text-amber-400">Prefab Posts, Starters & Handrails</span> Railing Calculator
              </>
            )}
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {language === 'fa' 
              ? 'در مراحل گام‌به‌گام زیر، مدل پایه پیش‌ساخته، استارتر لوکس و هندریل هنری پروژه خود را برگزینید و با تعیین تعداد شمشیری و پله‌ها، متراژ دقیق فاکتور (X) و هزینه تمام‌شده را به صورت آنلاین دریافت کنید.'
              : language === 'ar'
              ? 'اتبع الخطوات الهندسية التالية لاختيار القائمة الجاهزة، عامود البداية الفاخر، والهندريل الفني، ثم حدد مسارات ودرجات السلم لتحصل فورياً على الأمتار الطولية وتكلفة الفاتورة.'
              : 'Configure your staircase step-by-step: choose your prefab post, luxury starter, and artistic handrail, then input flight and step counts to compute precise billable meters and itemized costs.'}
          </p>
        </div>

        {/* ========================================================================= */}
        {/* کادر واحد و مراحل سه‌گانه انتخاب اجزای پروژه: پایه پیش‌ساخته، استارتر لوکس و هندریل هنری */}
        {/* ========================================================================= */}
        <div className="mb-10 lux-card rounded-3xl p-5 sm:p-7 border border-slate-800 bg-slate-900/60 shadow-xl space-y-7">
          {/* Header & Multi-Step Navigation Bar */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-800 pb-5">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-amber-500/10 border border-amber-500/30 text-amber-400">
                  {language === 'fa' ? 'انتخاب هوشمند و تعیین مشخصات' : language === 'ar' ? 'اختيار وتحديد المواصفات' : 'Component Selection & Specs'}
                </span>
                <span className="text-xs text-slate-400 hidden sm:inline">
                  {language === 'fa' ? 'مراحل گام‌به‌گام در یک کادر واحد' : 'Step-by-step guided flow in one unified container'}
                </span>
              </div>
              <h3 className="text-base sm:text-xl font-black text-white">
                {language === 'fa' 
                  ? 'انتخاب مدل پایه، استارتر، هندریل و تعیین تعداد پله‌ها:' 
                  : language === 'ar' 
                  ? 'اختيار موديل القائمة، عامود البداية، المقبض وتحديد درجات السلم:' 
                  : 'Choose Railing Post, Luxury Starter, Artistic Handrail & Stair Dimensions:'}
              </h3>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* SECTION 1: پایه‌های پیش‌ساخته (Prefab Posts) */}
          {/* ========================================================================= */}
          <div className="pt-3">
            {/* Section 1 Content: Vertical Tab at the start + Products Grid (Full or Mini) */}
            <div className="flex items-stretch gap-2.5 sm:gap-3">
              {/* Vertical Tab Wrapper: self-stretch so height matches product gallery exactly */}
              <div className="relative shrink-0 w-10 sm:w-12 self-stretch">
                {/* Step Number Circle: Center of circle placed at top border tangent to vertical tab box */}
                <div
                  onClick={() => setActiveStep('prefab')}
                  className={`absolute -top-3 left-1/2 -translate-x-1/2 z-20 w-6 h-6 rounded-full text-[11px] font-mono font-bold flex items-center justify-center shadow-md transition-all cursor-pointer ${
                    activeStep === 'prefab'
                      ? 'bg-amber-500 text-slate-950 border-2 border-slate-950 ring-2 ring-amber-400'
                      : selectedPrefabPost
                      ? 'bg-slate-900 text-amber-300 border-2 border-amber-500/60 shadow-amber-500/20'
                      : 'bg-slate-900 text-slate-400 border-2 border-slate-700'
                  }`}
                >
                  ۱
                </div>

                <button
                  type="button"
                  onClick={() => setActiveStep('prefab')}
                  title={language === 'fa' ? 'پایه پیش‌ساخته' : language === 'ar' ? 'القوائم الجاهزة' : 'Prefab Posts'}
                  className={`w-full h-full pt-4 pb-2 px-1 rounded-2xl border transition-all flex flex-col items-center justify-between cursor-pointer select-none group shadow-md ${
                    activeStep === 'prefab'
                      ? 'bg-amber-500 text-slate-950 font-black border-amber-400 shadow-lg shadow-amber-500/20'
                      : selectedPrefabPost
                      ? 'bg-slate-900/90 text-amber-300 hover:text-white hover:bg-slate-800 border-amber-500/40'
                      : 'bg-slate-950/90 text-slate-400 hover:text-white hover:bg-slate-900 border-slate-800'
                  }`}
                >
                  {/* Rotated vertical text (adapts cleanly to single-row or multi-row heights) */}
                  <div className="flex-1 min-h-0 w-full flex items-center justify-center my-0.5 overflow-hidden">
                    <span
                      className="text-[10px] sm:text-[11px] font-black tracking-tight whitespace-nowrap [writing-mode:vertical-rl] rotate-180 transition-colors select-none"
                    >
                      {activeStep === 'prefab'
                        ? (language === 'fa' ? 'پایه پیش‌ساخته' : language === 'ar' ? 'القوائم الجاهزة' : 'Prefab Posts')
                        : (language === 'fa' ? 'پایه‌ها' : language === 'ar' ? 'القوائم' : 'Posts')}
                    </span>
                  </div>

                  {/* Model Selection Checkmark Indicator in a separate space (bottom of the tab box) */}
                  <div className="shrink-0 flex items-center justify-center">
                    {selectedPrefabPost ? (
                      <span
                        title={language === 'fa' ? `انتخاب شده: ${selectedPrefabPost.name[language]}` : 'Selected'}
                        className={`w-5 h-5 rounded-full flex items-center justify-center shadow-xs transition-all ${
                          activeStep === 'prefab'
                            ? 'bg-slate-950 text-amber-400 border border-amber-400/40'
                            : 'bg-emerald-500 text-slate-950 border border-emerald-300 shadow-emerald-500/30'
                        }`}
                      >
                        <Check className="w-3 h-3 stroke-[3]" />
                      </span>
                    ) : (
                      <span className={`w-1.5 h-1.5 rounded-full transition-all ${
                        activeStep === 'prefab'
                          ? 'bg-slate-950'
                          : 'bg-slate-700 group-hover:bg-slate-500'
                      }`} />
                    )}
                  </div>
                </button>
              </div>

              {/* Product Cards Container (Expanded or Mini) */}
              <div className="flex-1 min-w-0">
                <AnimatePresence mode="wait">
                  {activeStep === 'prefab' ? (
                    /* طرح کامل کارت‌ها با عکس، نام محصول، قیمت و دکمه مشخصات */
                    <motion.div
                      key="prefab-full"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.28, ease: 'easeOut' }}
                      className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3"
                    >
                      {prefabModels.map((post) => {
                        const isSelected = selectedPrefabPostId === post.id;
                        const postUnitPriceConverted = convertFromToman(post.unitPrice, language);
                        return (
                          <motion.div
                            key={post.id}
                            layout
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => handleSelectPrefab(post.id)}
                            className={`group rounded-2xl p-2.5 border transition-all cursor-pointer relative flex flex-col justify-between ${
                              isSelected
                                ? 'border-amber-400 bg-amber-500/10 ring-2 ring-amber-400/40 shadow-lg shadow-amber-500/10'
                                : 'border-slate-800 bg-slate-950/70 hover:border-slate-700 hover:bg-slate-900'
                            }`}
                          >
                            <div>
                              {/* 1. عکس محصول */}
                              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-slate-950 border border-slate-800 mb-1.5 relative">
                                <img
                                  src={post.image}
                                  alt={post.name[language]}
                                  loading="lazy"
                                  decoding="async"
                                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                {isSelected && (
                                  <div className="absolute top-1 right-1 rtl:right-auto rtl:left-1 z-10 w-5 h-5 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center shadow-md">
                                    <CheckCircle2 className="w-3.5 h-3.5 stroke-[3]" />
                                  </div>
                                )}
                                <span className="absolute bottom-1 right-1 rtl:right-auto rtl:left-1 px-1.5 py-0.5 rounded bg-slate-950/80 backdrop-blur-xs text-[9px] font-mono font-bold text-amber-400 border border-slate-700/50">
                                  {post.modelCode}
                                </span>
                              </div>

                              {/* 2. نام محصول */}
                              <h4 className="text-xs font-bold text-white group-hover:text-amber-300 transition-colors line-clamp-1 mb-1 leading-tight">
                                {post.name[language]}
                              </h4>

                              {/* 3. قیمت محصول بر اساس هر عدد پایه */}
                              <div className="text-[11px] font-mono text-amber-400 font-bold bg-slate-950/60 rounded-lg px-2 py-1 border border-slate-800/80 flex items-center justify-between">
                                <span className="text-[9px] font-normal text-slate-400">
                                  {language === 'fa' ? 'هر عدد:' : language === 'ar' ? 'لكل قطعة:' : 'per unit:'}
                                </span>
                                <span>
                                  {language === 'en' ? (
                                    <><span className="text-[9px] font-normal text-slate-400">$</span>{postUnitPriceConverted.formattedNumber}</>
                                  ) : language === 'ar' ? (
                                    <>{postUnitPriceConverted.formattedNumber} <span className="text-[9px] font-normal text-slate-400">د.إ</span></>
                                  ) : (
                                    <>{postUnitPriceConverted.formattedNumber} <span className="text-[9px] font-normal text-slate-400">ت</span></>
                                  )}
                                </span>
                              </div>
                            </div>

                            {/* 4. تب مشخصات */}
                            {onSelectPostDetails && (
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  onSelectPostDetails(post);
                                }}
                                className="mt-2 w-full py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-[10px] font-medium text-slate-300 hover:text-white transition-colors flex items-center justify-center gap-1 cursor-pointer"
                              >
                                <Info className="w-3 h-3 text-amber-400" />
                                <span>{language === 'fa' ? 'مشخصات' : 'Specs'}</span>
                              </button>
                            )}
                          </motion.div>
                        );
                      })}
                    </motion.div>
                  ) : (
                    /* طرح فشرده یک‌سوم اندازه، فقط عکس بدون نوشتار، نام، قیمت و دکمه مشخصات با ترنزیشن نرم */
                    <motion.div
                      key="prefab-mini"
                      initial={{ opacity: 0, scale: 0.97 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.97 }}
                      transition={{ duration: 0.24, ease: 'easeOut' }}
                      className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-12 gap-2"
                    >
                      {prefabModels.map((post) => {
                        const isSelected = selectedPrefabPostId === post.id;
                        return (
                          <motion.div
                            key={post.id}
                            layout
                            whileHover={{ scale: 1.08 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => handleSelectPrefab(post.id)}
                            title={`${post.name[language]} (${post.modelCode})`}
                            className={`group rounded-xl overflow-hidden border transition-all cursor-pointer relative aspect-[4/3] ${
                              isSelected
                                ? 'border-amber-400 ring-2 ring-amber-400 shadow-lg shadow-amber-500/30 scale-105 z-10'
                                : 'border-slate-800 bg-slate-950/80 hover:border-slate-600 opacity-70 hover:opacity-100'
                            }`}
                          >
                            <img
                              src={post.image}
                              alt={post.name[language]}
                              loading="lazy"
                              decoding="async"
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                            />
                            {isSelected && (
                              <div className="absolute top-1 right-1 rtl:right-auto rtl:left-1 z-10 w-4 h-4 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center shadow-md">
                                <CheckCircle2 className="w-3 h-3 stroke-[3]" />
                              </div>
                            )}
                          </motion.div>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* SECTION 2: استارترهای لوکس (Luxury Starters) */}
          {/* ========================================================================= */}
          <div className="pt-5 border-t border-slate-800/80">
            {/* Section 2 Content: Vertical Tab at the start + Products Grid (Full or Mini) */}
            <div className="flex items-stretch gap-2.5 sm:gap-3">
              {/* Vertical Tab Wrapper: self-stretch so height matches product gallery exactly */}
              <div className="relative shrink-0 w-10 sm:w-12 self-stretch">
                {/* Step Number Circle: Center of circle placed at top border tangent to vertical tab box */}
                <div
                  onClick={() => setActiveStep('starter')}
                  className={`absolute -top-3 left-1/2 -translate-x-1/2 z-20 w-6 h-6 rounded-full text-[11px] font-mono font-bold flex items-center justify-center shadow-md transition-all cursor-pointer ${
                    activeStep === 'starter'
                      ? 'bg-amber-500 text-slate-950 border-2 border-slate-950 ring-2 ring-amber-400'
                      : selectedStarterPost
                      ? 'bg-slate-900 text-amber-300 border-2 border-amber-500/60 shadow-amber-500/20'
                      : 'bg-slate-900 text-slate-400 border-2 border-slate-700'
                  }`}
                >
                  ۲
                </div>

                <button
                  type="button"
                  onClick={() => setActiveStep('starter')}
                  title={language === 'fa' ? 'استارتر لوکس' : language === 'ar' ? 'عامود البداية الفاخر' : 'Luxury Starter'}
                  className={`w-full h-full pt-4 pb-2 px-1 rounded-2xl border transition-all flex flex-col items-center justify-between cursor-pointer select-none group shadow-md ${
                    activeStep === 'starter'
                      ? 'bg-amber-500 text-slate-950 font-black border-amber-400 shadow-lg shadow-amber-500/20'
                      : selectedStarterPost
                      ? 'bg-slate-900/90 text-amber-300 hover:text-white hover:bg-slate-800 border-amber-500/40'
                      : 'bg-slate-950/90 text-slate-400 hover:text-white hover:bg-slate-900 border-slate-800'
                  }`}
                >
                  {/* Rotated vertical text (adapts cleanly to single-row or multi-row heights) */}
                  <div className="flex-1 min-h-0 w-full flex items-center justify-center my-0.5 overflow-hidden">
                    <span
                      className="text-[10px] sm:text-[11px] font-black tracking-tight whitespace-nowrap [writing-mode:vertical-rl] rotate-180 transition-colors select-none"
                    >
                      {activeStep === 'starter'
                        ? (language === 'fa' ? 'استارتر لوکس' : language === 'ar' ? 'الاستارتر الفاخر' : 'Luxury Starter')
                        : (language === 'fa' ? 'استارتر' : language === 'ar' ? 'الاستارتر' : 'Starter')}
                    </span>
                  </div>

                  {/* Model Selection Checkmark Indicator in a separate space (bottom of the tab box) */}
                  <div className="shrink-0 flex items-center justify-center">
                    {selectedStarterPost ? (
                      <span
                        title={language === 'fa' ? `انتخاب شده: ${selectedStarterPost.name[language]}` : 'Selected'}
                        className={`w-5 h-5 rounded-full flex items-center justify-center shadow-xs transition-all ${
                          activeStep === 'starter'
                            ? 'bg-slate-950 text-amber-400 border border-amber-400/40'
                            : 'bg-emerald-500 text-slate-950 border border-emerald-300 shadow-emerald-500/30'
                        }`}
                      >
                        <Check className="w-3 h-3 stroke-[3]" />
                      </span>
                    ) : (
                      <span className={`w-1.5 h-1.5 rounded-full transition-all ${
                        activeStep === 'starter'
                          ? 'bg-slate-950'
                          : 'bg-slate-700 group-hover:bg-slate-500'
                      }`} />
                    )}
                  </div>
                </button>
              </div>

              {/* Product Cards Container (Expanded or Mini) */}
              <div className="flex-1 min-w-0">
                <AnimatePresence mode="wait">
                  {activeStep === 'starter' ? (
                /* طرح کامل کارت‌ها با عکس، نام محصول، قیمت و دکمه مشخصات */
                <motion.div
                  key="starter-full"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.28, ease: 'easeOut' }}
                  className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3"
                >
                  {starterModels.map((post) => {
                    const isSelected = selectedStarterPostId === post.id;
                    const postUnitPriceConverted = convertFromToman(post.unitPrice, language);
                    return (
                      <motion.div
                        key={post.id}
                        layout
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleSelectStarter(post.id)}
                        className={`group rounded-2xl p-2.5 border transition-all cursor-pointer relative flex flex-col justify-between ${
                          isSelected
                            ? 'border-amber-400 bg-amber-500/10 ring-2 ring-amber-400/40 shadow-lg shadow-amber-500/10'
                            : 'border-slate-800 bg-slate-950/70 hover:border-slate-700 hover:bg-slate-900'
                        }`}
                      >
                        <div>
                          {/* 1. عکس محصول */}
                          <div className="aspect-[4/3] rounded-xl overflow-hidden bg-slate-950 border border-slate-800 mb-1.5 relative">
                            <img
                              src={post.image}
                              alt={post.name[language]}
                              loading="lazy"
                              decoding="async"
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            {isSelected && (
                              <div className="absolute top-1 right-1 rtl:right-auto rtl:left-1 z-10 w-5 h-5 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center shadow-md">
                                <CheckCircle2 className="w-3.5 h-3.5 stroke-[3]" />
                              </div>
                            )}
                            <span className="absolute bottom-1 right-1 rtl:right-auto rtl:left-1 px-1.5 py-0.5 rounded bg-slate-950/80 backdrop-blur-xs text-[9px] font-mono font-bold text-amber-400 border border-slate-700/50">
                              {post.modelCode}
                            </span>
                          </div>

                          {/* 2. نام محصول */}
                          <h4 className="text-xs font-bold text-white group-hover:text-amber-300 transition-colors line-clamp-1 mb-1 leading-tight">
                            {post.name[language]}
                          </h4>

                          {/* 3. قیمت محصول بر اساس هر عدد استارتر */}
                          <div className="text-[11px] font-mono text-amber-400 font-bold bg-slate-950/60 rounded-lg px-2 py-1 border border-slate-800/80 flex items-center justify-between">
                            <span className="text-[9px] font-normal text-slate-400">
                              {language === 'fa' ? 'هر عدد استارتر:' : language === 'ar' ? 'لكل عامود:' : 'per starter:'}
                            </span>
                            <span>
                              {language === 'en' ? (
                                <><span className="text-[9px] font-normal text-slate-400">$</span>{postUnitPriceConverted.formattedNumber}</>
                              ) : language === 'ar' ? (
                                <>{postUnitPriceConverted.formattedNumber} <span className="text-[9px] font-normal text-slate-400">د.إ</span></>
                              ) : (
                                <>{postUnitPriceConverted.formattedNumber} <span className="text-[9px] font-normal text-slate-400">ت</span></>
                              )}
                            </span>
                          </div>
                        </div>

                        {/* 4. تب مشخصات */}
                        {onSelectPostDetails && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              onSelectPostDetails(post);
                            }}
                            className="mt-2 w-full py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-[10px] font-medium text-slate-300 hover:text-white transition-colors flex items-center justify-center gap-1 cursor-pointer"
                          >
                            <Info className="w-3 h-3 text-amber-400" />
                            <span>{language === 'fa' ? 'مشخصات' : 'Specs'}</span>
                          </button>
                        )}
                      </motion.div>
                    );
                  })}
                </motion.div>
              ) : (
                /* طرح فشرده یک‌سوم اندازه، فقط عکس بدون نوشتار، نام، قیمت و دکمه مشخصات با ترنزیشن نرم */
                <motion.div
                  key="starter-mini"
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.24, ease: 'easeOut' }}
                  className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-12 gap-2"
                >
                  {starterModels.map((post) => {
                    const isSelected = selectedStarterPostId === post.id;
                    return (
                      <motion.div
                        key={post.id}
                        layout
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleSelectStarter(post.id)}
                        title={`${post.name[language]} (${post.modelCode})`}
                        className={`group rounded-xl overflow-hidden border transition-all cursor-pointer relative aspect-[4/3] ${
                          isSelected
                            ? 'border-amber-400 ring-2 ring-amber-400 shadow-lg shadow-amber-500/30 scale-105 z-10'
                            : 'border-slate-800 bg-slate-950/80 hover:border-slate-600 opacity-70 hover:opacity-100'
                        }`}
                      >
                        <img
                          src={post.image}
                          alt={post.name[language]}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        {isSelected && (
                          <div className="absolute top-1 right-1 rtl:right-auto rtl:left-1 z-10 w-4 h-4 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center shadow-md">
                            <CheckCircle2 className="w-3 h-3 stroke-[3]" />
                          </div>
                        )}
                      </motion.div>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
              </div>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* SECTION 3: هندریل‌های هنری (Artistic Handrails) */}
          {/* ========================================================================= */}
          <div className="pt-5 border-t border-slate-800/80">
            {/* Section 3 Content: Vertical Tab at the start + Products Grid (Full or Mini) */}
            <div className="flex items-stretch gap-2.5 sm:gap-3">
              {/* Vertical Tab Wrapper: self-stretch so height matches product gallery exactly */}
              <div className="relative shrink-0 w-10 sm:w-12 self-stretch">
                {/* Step Number Circle: Center of circle placed at top border tangent to vertical tab box */}
                <div
                  onClick={() => setActiveStep('handrail')}
                  className={`absolute -top-3 left-1/2 -translate-x-1/2 z-20 w-6 h-6 rounded-full text-[11px] font-mono font-bold flex items-center justify-center shadow-md transition-all cursor-pointer ${
                    activeStep === 'handrail'
                      ? 'bg-amber-500 text-slate-950 border-2 border-slate-950 ring-2 ring-amber-400'
                      : selectedHandrailPost
                      ? 'bg-slate-900 text-amber-300 border-2 border-amber-500/60 shadow-amber-500/20'
                      : 'bg-slate-900 text-slate-400 border-2 border-slate-700'
                  }`}
                >
                  ۳
                </div>

                <button
                  type="button"
                  onClick={() => setActiveStep('handrail')}
                  title={language === 'fa' ? 'هندریل هنری' : language === 'ar' ? 'الهندريل الفني' : 'Artistic Handrail'}
                  className={`w-full h-full pt-4 pb-2 px-1 rounded-2xl border transition-all flex flex-col items-center justify-between cursor-pointer select-none group shadow-md ${
                    activeStep === 'handrail'
                      ? 'bg-amber-500 text-slate-950 font-black border-amber-400 shadow-lg shadow-amber-500/20'
                      : selectedHandrailPost
                      ? 'bg-slate-900/90 text-amber-300 hover:text-white hover:bg-slate-800 border-amber-500/40'
                      : 'bg-slate-950/90 text-slate-400 hover:text-white hover:bg-slate-900 border-slate-800'
                  }`}
                >
                  {/* Rotated vertical text (adapts cleanly to single-row or multi-row heights) */}
                  <div className="flex-1 min-h-0 w-full flex items-center justify-center my-0.5 overflow-hidden">
                    <span
                      className="text-[10px] sm:text-[11px] font-black tracking-tight whitespace-nowrap [writing-mode:vertical-rl] rotate-180 transition-colors select-none"
                    >
                      {activeStep === 'handrail'
                        ? (language === 'fa' ? 'هندریل هنری' : language === 'ar' ? 'الهندريل الفني' : 'Artistic Handrail')
                        : (language === 'fa' ? 'هندریل' : language === 'ar' ? 'الهندريل' : 'Handrail')}
                    </span>
                  </div>

                  {/* Model Selection Checkmark Indicator in a separate space (bottom of the tab box) */}
                  <div className="shrink-0 flex items-center justify-center">
                    {selectedHandrailPost ? (
                      <span
                        title={language === 'fa' ? `انتخاب شده: ${selectedHandrailPost.name[language]}` : 'Selected'}
                        className={`w-5 h-5 rounded-full flex items-center justify-center shadow-xs transition-all ${
                          activeStep === 'handrail'
                            ? 'bg-slate-950 text-amber-400 border border-amber-400/40'
                            : 'bg-emerald-500 text-slate-950 border border-emerald-300 shadow-emerald-500/30'
                        }`}
                      >
                        <Check className="w-3 h-3 stroke-[3]" />
                      </span>
                    ) : (
                      <span className={`w-1.5 h-1.5 rounded-full transition-all ${
                        activeStep === 'handrail'
                          ? 'bg-slate-950'
                          : 'bg-slate-700 group-hover:bg-slate-500'
                      }`} />
                    )}
                  </div>
                </button>
              </div>

              {/* Product Cards Container (Expanded or Mini) */}
              <div className="flex-1 min-w-0">
                <AnimatePresence mode="wait">
                  {activeStep === 'handrail' ? (
                /* طرح کامل کارت‌ها با عکس، نام محصول، قیمت و دکمه مشخصات */
                <motion.div
                  key="handrail-full"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.28, ease: 'easeOut' }}
                  className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3"
                >
                  {handrailModels.map((post) => {
                    const isSelected = selectedHandrailPostId === post.id;
                    const postMeterPriceConverted = convertFromToman(post.linearMeterPrice, language);
                    return (
                      <motion.div
                        key={post.id}
                        layout
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleSelectHandrail(post.id)}
                        className={`group rounded-2xl p-2.5 border transition-all cursor-pointer relative flex flex-col justify-between ${
                          isSelected
                            ? 'border-amber-400 bg-amber-500/10 ring-2 ring-amber-400/40 shadow-lg shadow-amber-500/10'
                            : 'border-slate-800 bg-slate-950/70 hover:border-slate-700 hover:bg-slate-900'
                        }`}
                      >
                        <div>
                          {/* 1. عکس محصول */}
                          <div className="aspect-[4/3] rounded-xl overflow-hidden bg-slate-950 border border-slate-800 mb-1.5 relative">
                            <img
                              src={post.image}
                              alt={post.name[language]}
                              loading="lazy"
                              decoding="async"
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            {isSelected && (
                              <div className="absolute top-1 right-1 rtl:right-auto rtl:left-1 z-10 w-5 h-5 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center shadow-md">
                                <CheckCircle2 className="w-3.5 h-3.5 stroke-[3]" />
                              </div>
                            )}
                            <span className="absolute bottom-1 right-1 rtl:right-auto rtl:left-1 px-1.5 py-0.5 rounded bg-slate-950/80 backdrop-blur-xs text-[9px] font-mono font-bold text-amber-400 border border-slate-700/50">
                              {post.modelCode}
                            </span>
                          </div>

                          {/* 2. نام محصول */}
                          <h4 className="text-xs font-bold text-white group-hover:text-amber-300 transition-colors line-clamp-1 mb-1 leading-tight">
                            {post.name[language]}
                          </h4>

                          {/* 3. قیمت محصول بر اساس متر طول */}
                          <div className="text-[11px] font-mono text-amber-400 font-bold bg-slate-950/60 rounded-lg px-2 py-1 border border-slate-800/80 flex items-center justify-between">
                            <span className="text-[9px] font-normal text-slate-400">
                              {language === 'fa' ? 'متر طول:' : language === 'ar' ? 'المتر الطولي:' : 'per meter:'}
                            </span>
                            <span>
                              {language === 'en' ? (
                                <><span className="text-[9px] font-normal text-slate-400">$</span>{postMeterPriceConverted.formattedNumber}</>
                              ) : language === 'ar' ? (
                                <>{postMeterPriceConverted.formattedNumber} <span className="text-[9px] font-normal text-slate-400">د.إ</span></>
                              ) : (
                                <>{postMeterPriceConverted.formattedNumber} <span className="text-[9px] font-normal text-slate-400">ت</span></>
                              )}
                            </span>
                          </div>
                        </div>

                        {/* 4. تب مشخصات */}
                        {onSelectPostDetails && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              onSelectPostDetails(post);
                            }}
                            className="mt-2 w-full py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-[10px] font-medium text-slate-300 hover:text-white transition-colors flex items-center justify-center gap-1 cursor-pointer"
                          >
                            <Info className="w-3 h-3 text-amber-400" />
                            <span>{language === 'fa' ? 'مشخصات' : 'Specs'}</span>
                          </button>
                        )}
                      </motion.div>
                    );
                  })}
                </motion.div>
              ) : (
                /* طرح فشرده یک‌سوم اندازه، فقط عکس بدون نوشتار، نام، قیمت و دکمه مشخصات با ترنزیشن نرم */
                <motion.div
                  key="handrail-mini"
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.24, ease: 'easeOut' }}
                  className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-12 gap-2"
                >
                  {handrailModels.map((post) => {
                    const isSelected = selectedHandrailPostId === post.id;
                    return (
                      <motion.div
                        key={post.id}
                        layout
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleSelectHandrail(post.id)}
                        title={`${post.name[language]} (${post.modelCode})`}
                        className={`group rounded-xl overflow-hidden border transition-all cursor-pointer relative aspect-[4/3] ${
                          isSelected
                            ? 'border-amber-400 ring-2 ring-amber-400 shadow-lg shadow-amber-500/30 scale-105 z-10'
                            : 'border-slate-800 bg-slate-950/80 hover:border-slate-600 opacity-70 hover:opacity-100'
                        }`}
                      >
                        <img
                          src={post.image}
                          alt={post.name[language]}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        {isSelected && (
                          <div className="absolute top-1 right-1 rtl:right-auto rtl:left-1 z-10 w-4 h-4 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center shadow-md">
                            <CheckCircle2 className="w-3 h-3 stroke-[3]" />
                          </div>
                        )}
                      </motion.div>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
              </div>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* SECTION 4: تعیین مشخصات و تعداد پله‌ها (Stair Dimensions: Flights & Steps) */}
          {/* ========================================================================= */}
          <div className="pt-5 border-t border-slate-800/80">
            {/* Section 4 Content: Vertical Tab at the start + Sliders in ONE line */}
            <div className="flex items-stretch gap-2.5 sm:gap-3">
              {/* Vertical Tab Wrapper: self-stretch so height matches sliders card exactly */}
              <div className="relative shrink-0 w-10 sm:w-12 self-stretch">
                {/* Step Number Circle: Center of circle placed at top border tangent to vertical tab box */}
                <div
                  onClick={() => setActiveStep('geometry')}
                  className={`absolute -top-3 left-1/2 -translate-x-1/2 z-20 w-6 h-6 rounded-full text-[11px] font-mono font-bold flex items-center justify-center shadow-md transition-all cursor-pointer ${
                    activeStep === 'geometry'
                      ? 'bg-amber-500 text-slate-950 border-2 border-slate-950 ring-2 ring-amber-400'
                      : 'bg-slate-900 text-amber-300 border-2 border-amber-500/60 shadow-amber-500/20'
                  }`}
                >
                  {language === 'fa' ? '۴' : language === 'ar' ? '٤' : '4'}
                </div>

                <button
                  type="button"
                  onClick={() => setActiveStep('geometry')}
                  title={language === 'fa' ? 'گام ۴: تعیین تعداد ردیف و پله‌ها' : 'Step 4: Stair Flights & Steps'}
                  className={`w-full h-full pt-4 pb-2 px-1 rounded-2xl border transition-all flex flex-col items-center justify-between cursor-pointer select-none group shadow-md ${
                    activeStep === 'geometry'
                      ? 'bg-amber-500 text-slate-950 font-black border-amber-400 shadow-lg shadow-amber-500/20'
                      : 'bg-slate-900/90 text-amber-300 hover:text-white hover:bg-slate-800 border-amber-500/40'
                  }`}
                >
                  {/* Rotated vertical text */}
                  <div className="flex-1 min-h-0 w-full flex items-center justify-center my-0.5 overflow-hidden">
                    <span
                      className="text-[10px] sm:text-[11px] font-bold tracking-tight whitespace-nowrap"
                      style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
                    >
                      {language === 'fa' ? 'ابعاد و پله‌ها' : language === 'ar' ? 'أبعاد الدرج' : 'Stair Dimensions'}
                    </span>
                  </div>

                  {/* Model Selection Checkmark Indicator in a separate space (bottom of the tab box) */}
                  <div className="shrink-0 flex items-center justify-center">
                    <span
                      title={language === 'fa' ? `${flightsCount} ردیف / ${stepsPerFlight} پله` : `${flightsCount} Flights / ${stepsPerFlight} Steps`}
                      className={`w-5 h-5 rounded-full flex items-center justify-center shadow-xs transition-all ${
                        activeStep === 'geometry'
                          ? 'bg-slate-950 text-amber-400 border border-amber-400/40'
                          : 'bg-emerald-500 text-slate-950 border border-emerald-300 shadow-emerald-500/30'
                      }`}
                    >
                      <Check className="w-3 h-3 stroke-[3]" />
                    </span>
                  </div>
                </button>
              </div>

              {/* Sliders Container: نوار تعیین اعداد در یک خط (side by side) */}
              <div 
                onClick={() => setActiveStep('geometry')}
                className={`flex-1 min-w-0 rounded-2xl border transition-all p-3.5 sm:p-5 flex flex-col justify-center ${
                  activeStep === 'geometry'
                    ? 'bg-slate-950/90 border-amber-400/70 shadow-lg shadow-amber-500/10 ring-1 ring-amber-400/30'
                    : 'bg-slate-950/70 border-slate-800/90 hover:border-slate-700'
                }`}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 items-center">
                  {/* Slider 1: تعداد ردیف (شمشیری) پله یا نرده */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs font-bold text-slate-200">
                      <label className="flex items-center gap-1.5 cursor-pointer">
                        <Layers className="w-4 h-4 text-amber-400 shrink-0" />
                        <span>{language === 'fa' ? 'تعداد ردیف (شمشیری) پله یا نرده:' : language === 'ar' ? 'عدد مسارات السلالم (الشمشيري):' : 'Number of Stair Flights (Runs):'}</span>
                      </label>
                      <span className="font-mono text-amber-400 font-black text-xs sm:text-sm bg-slate-900 px-2.5 py-0.5 rounded-lg border border-slate-800 shrink-0 shadow-xs">
                        {flightsCount} {language === 'fa' ? 'ردیف' : language === 'ar' ? 'مسار' : 'Flights'}
                      </span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="20"
                      value={flightsCount}
                      onChange={(e) => setFlightsCount(Number(e.target.value))}
                      className="w-full accent-amber-500 cursor-pointer h-2 bg-slate-800 rounded-lg"
                    />
                    <div className="flex justify-between text-[10px] font-mono text-slate-400">
                      <span>{language === 'en' ? '1 Flight (Duplex)' : language === 'ar' ? 'مسار ١' : '۱ ردیف (دوبلکس)'}</span>
                      <span>{language === 'en' ? '5 Flights' : language === 'ar' ? '٥ مسارات' : '۵ ردیف (۲ طبقه)'}</span>
                      <span>{language === 'en' ? '10 Flights' : language === 'ar' ? '١٠ مسارات' : '۱۰ ردیف (۴ طبقه)'}</span>
                      <span>{language === 'en' ? '20 Flights' : language === 'ar' ? '٢٠ مسار' : '۲۰ ردیف (برج)'}</span>
                    </div>
                  </div>

                  {/* Slider 2: تعداد پله در هر ردیف (شمشیری) */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs font-bold text-slate-200">
                      <label className="flex items-center gap-1.5 cursor-pointer">
                        <Ruler className="w-4 h-4 text-amber-400 shrink-0" />
                        <span>{language === 'fa' ? 'تعداد پله در هر ردیف (شمشیری):' : language === 'ar' ? 'عدد الدرجات في كل مسار:' : 'Steps Count per Flight:'}</span>
                      </label>
                      <span className="font-mono text-amber-400 font-black text-xs sm:text-sm bg-slate-900 px-2.5 py-0.5 rounded-lg border border-slate-800 shrink-0 shadow-xs">
                        {stepsPerFlight} {language === 'fa' ? 'پله' : language === 'ar' ? 'درجة' : 'Steps'}
                      </span>
                    </div>
                    <input
                      type="range"
                      min="3"
                      max="30"
                      value={stepsPerFlight}
                      onChange={(e) => setStepsPerFlight(Number(e.target.value))}
                      className="w-full accent-amber-500 cursor-pointer h-2 bg-slate-800 rounded-lg"
                    />
                    <div className="flex justify-between text-[10px] font-mono text-slate-400">
                      <span>{language === 'en' ? '3 Steps' : language === 'ar' ? '٣ درجات' : '۳ پله'}</span>
                      <span>{language === 'en' ? '10 Steps (Standard)' : language === 'ar' ? '١٠ درجات' : '۱۰ پله (استاندارد)'}</span>
                      <span>{language === 'en' ? '20 Steps' : language === 'ar' ? '٢٠ درجة' : '۲۰ پله'}</span>
                      <span>{language === 'en' ? '30 Steps' : language === 'ar' ? '٣٠ درجة' : '۳۰ پله'}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* محاسبات مهندسی، ثبت مشخصات پروژه و پیش‌فاکتور بلادرنگ */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* ستون اول: رندر و شبیه‌ساز معماری پس از اجرا و ردیف افقی مدل‌های انتخابی */}
          <div className="lg:col-span-7">
            <ArchitecturalExecutionPreview
              selectedPrefabPost={selectedPrefabPost}
              selectedStarterPost={selectedStarterPost}
              selectedHandrailPost={selectedHandrailPost}
              flightsCount={flightsCount}
              stepsPerFlight={stepsPerFlight}
              finalCalculatedX={finalCalculatedX}
              language={language}
              onSelectStep={(step) => setActiveStep(step)}
            />
          </div>

          {/* ستون دوم: کارت پیش‌فاکتور بلادرنگ، فرمول محاسباتی X و ثبت مشخصات کارفرما */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="lux-card rounded-3xl p-6 border border-slate-700/80 shadow-2xl space-y-4">
              
              <div className="border-b border-slate-800 pb-3 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono font-bold text-amber-400 uppercase tracking-wider block">
                    {language === 'fa' ? 'محاسبه متراژ و صورتحساب پروژه' : 'Official Project Quotation'}
                  </span>
                  <h4 className="text-base sm:text-lg font-black text-white mt-0.5">
                    {language === 'fa' ? 'پیش‌فاکتور بلادرنگ پروژه' : 'Real-Time Project Quotation'}
                  </h4>
                </div>
                <span className="text-xs font-mono font-bold text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-lg border border-amber-500/30">
                  X = {finalCalculatedX} m
                </span>
              </div>

              {/* Formula Explanation Live Box */}
              <div className="p-3.5 rounded-2xl bg-slate-950/90 border border-amber-500/30 space-y-2">
                <div className="flex items-center justify-between text-xs font-bold text-amber-400">
                  <span className="flex items-center gap-1.5">
                    <Info className="w-4 h-4" />
                    <span>{language === 'fa' ? 'فرمول محاسباتی مهندسی استیلکس (X):' : language === 'ar' ? 'معادلة الحساب الهندسية (X):' : 'Engineering Formula (X):'}</span>
                  </span>
                  <span className="font-mono text-[11px] bg-amber-500/10 px-2 py-0.5 rounded text-amber-300">
                    {language === 'en' ? 'x = (stair run + 2)' : language === 'ar' ? 'x = (طول الدرج + ٢)' : 'x = (طول پله‌ها + ۲)'}
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-1.5 pt-2 border-t border-slate-800 text-[10px]">
                  <div className="bg-slate-900/80 p-1.5 rounded-lg text-center">
                    <span className="text-slate-400 block text-[9px]">{language === 'en' ? 'Stairs Run' : language === 'ar' ? 'طول الدرج' : 'طول پله‌ها'}</span>
                    <strong className="text-white font-mono">{rawCalculatedMeters} {language === 'en' ? 'm' : 'م'}</strong>
                  </div>
                  <div className="bg-slate-900/80 p-1.5 rounded-lg text-center">
                    <span className="text-slate-400 block text-[9px]">{language === 'en' ? 'Turns & Overlap' : language === 'ar' ? 'تداخل والوصلات' : 'اورلپ و اتصالات'}</span>
                    <strong className="text-amber-300 font-mono">+ {language === 'fa' ? '۲ متر' : '2m'}</strong>
                  </div>
                  <div className="bg-amber-500/20 p-1.5 rounded-lg text-center border border-amber-500/40">
                    <span className="text-amber-400 block text-[9px] font-bold">{language === 'en' ? 'Final (X)' : language === 'ar' ? 'المتر النهائي' : 'متر نهایی (X)'}</span>
                    <strong className="text-amber-300 font-mono">{finalCalculatedX} {language === 'en' ? 'm' : language === 'ar' ? 'م' : 'متر'}</strong>
                  </div>
                </div>
              </div>

              {/* Live Calculations Detailed Breakdown */}
              <div className="space-y-2 pt-2 border-t border-slate-800 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">
                    {language === 'fa' ? 'تعداد کل پله‌های پروژه:' : language === 'ar' ? 'إجمالي عدد الدرجات:' : 'Total Steps Count:'}
                  </span>
                  <span className="font-mono font-bold text-slate-200">
                    {totalSteps} {language === 'fa' ? 'پله' : 'Steps'}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-slate-400">
                    {language === 'fa' ? 'تعداد پایه‌های پیش‌ساخته میانی (تخمینی):' : language === 'ar' ? 'عدد القوائم الوسطية المقدرة:' : 'Estimated Intermediate Posts:'}
                  </span>
                  <span className="font-mono font-bold text-amber-400">
                    {estimatedPrefabPostsQuantity} {language === 'fa' ? 'پایه فابریک' : 'Posts'}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-slate-400">
                    {language === 'fa' ? 'تعداد استارترهای لوکس آغازین:' : language === 'ar' ? 'عدد عواميد البداية:' : 'Luxury Starters Count:'}
                  </span>
                  <span className="font-mono font-bold text-amber-400">
                    {startersQuantity} {language === 'fa' ? 'شاخه استارتر' : 'Starters'}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-slate-400">
                    {language === 'fa' ? 'متراژ کل فاکتور بر اساس فرمول X:' : language === 'ar' ? 'المتر الطولي الإجمالي (X):' : 'Total Billable Meters (X):'}
                  </span>
                  <span className="font-mono font-black text-amber-300 text-sm">
                    {finalCalculatedX} {language === 'fa' ? 'متر طول' : language === 'ar' ? 'متر طولي' : 'Meters'}
                  </span>
                </div>
              </div>

              {/* Itemized Financial Breakdown Callout */}
              <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2 text-[11px]">
                <div className="flex items-center justify-between text-slate-300">
                  <span>{language === 'fa' ? '۱. پایه پیش‌ساخته و اتصالات سازه:' : '1. Prefab Structure & Posts:'}</span>
                  <span className="font-mono font-bold text-slate-100">
                    {convertFromToman(prefabStructureCost, language).fullLabel}
                  </span>
                </div>

                <div className="flex items-center justify-between text-slate-300">
                  <span>{language === 'fa' ? '۲. استارتر لوکس ورودی راه‌پله:' : '2. Luxury Starter Posts:'}</span>
                  <span className="font-mono font-bold text-slate-100">
                    {convertFromToman(startersCost, language).fullLabel}
                  </span>
                </div>

                <div className="flex items-center justify-between text-slate-300">
                  <span>{language === 'fa' ? '۳. هندریل هنری و خمش پیوسته:' : '3. Artistic Handrail & Curvature:'}</span>
                  <span className="font-mono font-bold text-slate-100">
                    {convertFromToman(handrailCost, language).fullLabel}
                  </span>
                </div>
              </div>

              {/* Total Price Callout Box */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-500/20 via-slate-900 to-amber-500/10 border border-amber-500/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <span className="text-xs font-bold text-slate-200 block">
                    {language === 'fa' ? 'جمع کل پیش‌فاکتور سفارش منتخب:' : language === 'ar' ? 'إجمالي الفاتورة التقديرية:' : 'Total Quotation Estimate:'}
                  </span>
                  <span className="text-[11px] text-slate-400 block font-mono mt-0.5">
                    ({finalCalculatedX} {language === 'en' ? 'm length' : 'متر طول'} + {startersQuantity} {language === 'fa' ? 'استارتر' : 'starter'})
                  </span>
                  {language !== 'fa' && (
                    <span className="text-[10px] text-slate-400 block font-mono mt-0.5" dir="ltr">
                      ≈ {totalInvoicePrice.toLocaleString('fa-IR')} Toman IRT
                    </span>
                  )}
                </div>
                <div className="text-right rtl:text-left flex items-baseline gap-1.5">
                  <span className="text-2xl font-black text-amber-400 font-mono">
                    {language === 'en' && '$'}{convertedTotalPrice.formattedNumber}
                  </span>
                  <span className="text-xs text-slate-300 font-bold">
                    {convertedTotalPrice.currencyName}
                  </span>
                </div>
              </div>

              {/* Quick Project Contact Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div>
                  <label className="block text-[11px] font-medium text-slate-300 mb-1">
                    {language === 'fa' ? 'نام کارفرما / پروژه (اختیاری):' : language === 'ar' ? 'اسم العميل / المشروع:' : 'Client / Project Name:'}
                  </label>
                  <input
                    type="text"
                    placeholder={language === 'fa' ? 'مثال: مهندس رضایی' : 'Name'}
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:border-amber-400 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-medium text-slate-300 mb-1">
                    {language === 'fa' ? 'شماره تماس جهت ثبت رسمی فاکتور:' : language === 'ar' ? 'رقم الهاتف:' : 'Phone Number:'}
                  </label>
                  <input
                    type="tel"
                    placeholder="0912..."
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:border-amber-400 outline-none font-mono"
                  />
                </div>
              </div>

              {/* Actions */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <button
                  onClick={handleProceedToConsultation}
                  className="py-3 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-black flex items-center justify-center gap-1.5 shadow-lg shadow-amber-500/20 transition-all cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-slate-950" />
                  <span>{language === 'fa' ? 'ثبت سفارش و اعزام کارشناس' : language === 'ar' ? 'طلب زيارة ومعاينة' : 'Book Free Survey'}</span>
                </button>

                <button
                  onClick={handleGenerateInvoice}
                  className="py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white text-xs font-bold flex items-center justify-center gap-1.5 border border-slate-700 transition-all cursor-pointer"
                >
                  <Printer className="w-4 h-4 text-amber-400" />
                  <span>{language === 'fa' ? 'چاپ / دانلود پیش‌فاکتور' : language === 'ar' ? 'طباعة الفاتورة' : 'Print Invoice'}</span>
                </button>
              </div>

            </div>

            {/* Included Materials & Standards Guarantee Box */}
            <div className="p-5 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-3">
              <h5 className="text-xs font-bold text-slate-200 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>{language === 'fa' ? 'متریال‌ها و استانداردهای تضمین شده استیلکس:' : language === 'ar' ? 'المواصفات والضمانات المشمولة:' : 'STELLEX Certified Inclusions:'}</span>
              </h5>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-slate-300">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>{language === 'en' ? `Grade ${selectedPrefabPost ? selectedPrefabPost.alloyGrade[language] : 'AISI 304 / 316'} stainless steel` : `فولاد ضدزنگ گرید ${selectedPrefabPost ? selectedPrefabPost.alloyGrade[language] : 'AISI 304 / 316'}`}</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>{language === 'en' ? 'Concealed base flange & mounting hardware' : 'قالپاق پرسی و بست‌های فیتینگ تمام‌مخفی'}</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>{language === 'en' ? 'Integrated starter post with heavy anchor' : 'پایه استارتر مقاوم ورودی با رول‌بولت سنگین'}</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>{language === 'en' ? `${selectedPrefabPost ? selectedPrefabPost.warrantyYears : 10}-year written anti-corrosion certificate` : `ضمانت‌نامه کتبی ${selectedPrefabPost ? selectedPrefabPost.warrantyYears : 10} ساله ضدزنگ`}</span>
                </li>
                <li className="flex items-center gap-1.5 sm:col-span-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>{language === 'en' ? 'Seamless factory assembly without unesthetic on-site welding' : 'نصب و اجرای تخصصی بدون نیاز به جوشکاری بدشکل در محل'}</span>
                </li>
              </ul>
            </div>

          </div>

        </div>

      </div>

      {/* ========================================================================= */}
      {/* Official Proforma Invoice Sheet Modal */}
      {/* ========================================================================= */}
      {invoiceGenerated && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
          <div className="bg-slate-900 border border-amber-500/30 rounded-3xl max-w-2xl w-full p-6 text-slate-100 shadow-2xl relative my-8">
            <button
              onClick={() => setInvoiceGenerated(false)}
              className="absolute top-4 right-4 rtl:right-auto rtl:left-4 p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Proforma Header */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
              <div>
                <span className="text-[10px] font-mono text-amber-400 font-bold tracking-wider uppercase block">
                  STELLEX Architectural Stainless Industrial Co.
                </span>
                <h3 className="text-lg font-black text-white">
                  {language === 'fa' ? 'پیش‌فاکتور رسمی استودیو محاسبه‌گر پلاس' : language === 'ar' ? 'فاتورة عرض السعر الرسمية - ستيليكس' : 'Official STELLEX Proforma Quotation'}
                </h3>
              </div>
              <div className="text-right rtl:text-left">
                <span className="text-xs font-mono text-slate-400 block">
                  INV-{Math.floor(100000 + Math.random() * 900000)}
                </span>
                <span className="text-[10px] text-amber-400 font-bold block">
                  {currencyNotice.badge}
                </span>
              </div>
            </div>

            {/* Project Specs */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 p-3 rounded-2xl bg-slate-950/70 border border-slate-800 text-xs mb-4">
              <div>
                <span className="text-slate-400 block text-[10px]">{language === 'fa' ? 'پایه پیش‌ساخته:' : 'Prefab Post:'}</span>
                <span className="font-bold text-white">{selectedPrefabPost.name[language]}</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px]">{language === 'fa' ? 'استارتر لوکس:' : 'Luxury Starter:'}</span>
                <span className="font-bold text-amber-400">{selectedStarterPost.name[language]}</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px]">{language === 'fa' ? 'هندریل هنری:' : 'Artistic Handrail:'}</span>
                <span className="font-bold text-white">{selectedHandrailPost.name[language]}</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px]">{language === 'fa' ? 'متراژ فاکتور X:' : 'Total X (m):'}</span>
                <span className="font-mono font-bold text-amber-300">{finalCalculatedX} m</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px]">{language === 'fa' ? 'مشتری:' : 'Client:'}</span>
                <span className="text-slate-200">{customerName || (language === 'fa' ? 'همکار گرامی' : 'Valued Client')}</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px]">{language === 'fa' ? 'تلفن تماس:' : 'Phone:'}</span>
                <span className="font-mono text-slate-200">{customerPhone || '-'}</span>
              </div>
            </div>

            {/* Itemized Table of the 3 Selected Architectural Components */}
            <div className="overflow-x-auto mb-4 border border-slate-800 rounded-xl">
              <table className="w-full text-xs text-right rtl:text-right ltr:text-left">
                <thead className="bg-slate-950 text-slate-400 text-[11px] border-b border-slate-800">
                  <tr>
                    <th className="py-2.5 px-3">#</th>
                    <th className="py-2.5 px-3">{language === 'fa' ? 'شرح خدمات و متریال' : language === 'ar' ? 'الوصف' : 'Description'}</th>
                    <th className="py-2.5 px-3 text-center">{language === 'fa' ? 'مقدار / متراژ' : 'Qty'}</th>
                    <th className="py-2.5 px-3">{language === 'fa' ? 'قیمت واحد' : language === 'ar' ? 'سعر الوحدة' : 'Unit Price'}</th>
                    <th className="py-2.5 px-3">{language === 'fa' ? 'مبلغ کل' : language === 'ar' ? 'الإجمالي' : 'Total'}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 text-slate-200">
                  {/* Row 1: Prefab Post System */}
                  <tr>
                    <td className="py-2.5 px-3 font-mono">{language === 'fa' ? '۱' : '1'}</td>
                    <td className="py-2.5 px-3">
                      <span className="font-bold text-white block">{selectedPrefabPost.name[language]} ({selectedPrefabPost.modelCode})</span>
                      <span className="text-[10px] text-slate-400 block">{language === 'fa' ? 'پایه پیش‌ساخته استنلس استیل، قالپاق پرسی و اتصالات فیتینگ مخفی' : 'Prefabricated stainless steel post, escutcheons & concealed fittings'}</span>
                    </td>
                    <td className="py-2.5 px-3 text-center font-mono font-bold text-amber-400">{finalCalculatedX} {language === 'fa' ? 'متر' : 'm'}</td>
                    <td className="py-2.5 px-3 font-mono">
                      {convertedPrefabMeterPrice.fullLabel}
                    </td>
                    <td className="py-2.5 px-3 font-mono font-black text-amber-400">
                      {convertFromToman(prefabStructureCost, language).fullLabel}
                    </td>
                  </tr>

                  {/* Row 2: Luxury Starter */}
                  <tr>
                    <td className="py-2.5 px-3 font-mono">{language === 'fa' ? '۲' : '2'}</td>
                    <td className="py-2.5 px-3">
                      <span className="font-bold text-white block">{selectedStarterPost.name[language]} ({selectedStarterPost.modelCode})</span>
                      <span className="text-[10px] text-slate-400 block">{language === 'fa' ? 'استارتر لوکس ورودی شروع راه‌پله با اتصالات سنگین کف' : 'Luxury decorative starter post for staircase run entrance'}</span>
                    </td>
                    <td className="py-2.5 px-3 text-center font-mono font-bold text-amber-400">{startersQuantity} {language === 'fa' ? 'عدد' : 'pcs'}</td>
                    <td className="py-2.5 px-3 font-mono">
                      {convertedStarterUnitPrice.fullLabel}
                    </td>
                    <td className="py-2.5 px-3 font-mono font-black text-amber-400">
                      {convertFromToman(startersCost, language).fullLabel}
                    </td>
                  </tr>

                  {/* Row 3: Artistic Handrail */}
                  <tr>
                    <td className="py-2.5 px-3 font-mono">{language === 'fa' ? '۳' : '3'}</td>
                    <td className="py-2.5 px-3">
                      <span className="font-bold text-white block">{selectedHandrailPost.name[language]} ({selectedHandrailPost.modelCode})</span>
                      <span className="text-[10px] text-slate-400 block">{language === 'fa' ? 'هندریل هنری پیوسته، خمش‌های آرشیتکتورال و پرداخت سطحی' : 'Continuous artistic handrail profile, bending & finish craft'}</span>
                    </td>
                    <td className="py-2.5 px-3 text-center font-mono font-bold text-amber-400">{finalCalculatedX} {language === 'fa' ? 'متر' : 'm'}</td>
                    <td className="py-2.5 px-3 font-mono">
                      {convertedHandrailMeterPrice.fullLabel}
                    </td>
                    <td className="py-2.5 px-3 font-mono font-black text-amber-400">
                      {convertFromToman(handrailCost, language).fullLabel}
                    </td>
                  </tr>
                </tbody>
                <tfoot className="bg-slate-950 font-bold">
                  <tr>
                    <td colSpan={3} className="py-3 px-3 text-white">
                      {language === 'fa' ? 'جمع کل نهایی سفارش:' : language === 'ar' ? 'إجمالي الطلب المعتمد:' : 'Final Order Total:'}
                    </td>
                    <td colSpan={2} className="py-3 px-3 text-amber-400 font-mono text-sm font-black">
                      {convertedTotalPrice.fullLabel}
                      {language !== 'fa' && (
                        <span className="text-[10px] text-slate-400 block font-normal font-mono mt-0.5">
                          ({language === 'en' ? `≈ ${totalInvoicePrice.toLocaleString()} Iranian Toman` : `يعادل ${totalInvoicePrice.toLocaleString('ar-AE')} تومان إيراني`})
                        </span>
                      )}
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-end gap-2.5 pt-2">
              <button
                onClick={handlePrintInvoice}
                className="py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Printer className="w-4 h-4 text-amber-400" />
                <span>{language === 'fa' ? 'چاپ پیش‌فاکتور' : language === 'ar' ? 'طباعة' : 'Print'}</span>
              </button>
              <button
                onClick={handleProceedToConsultation}
                className="py-2.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-black flex items-center gap-1.5 transition-all shadow-lg shadow-amber-500/20 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-slate-950" />
                <span>{language === 'fa' ? 'تأیید و اعزام کارشناس رایگان' : language === 'ar' ? 'تأكيد وحجز المعاينة' : 'Confirm Survey'}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
