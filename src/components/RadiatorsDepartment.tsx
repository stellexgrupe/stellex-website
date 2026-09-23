import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { RadiatorModel } from '../types';
import { RADIATOR_MODELS } from '../data/radiatorsData';
import { useLanguage } from '../context/LanguageContext';
import { convertFromToman, getCurrencyNotice } from '../utils/currency';
import { EngineeringCatalogModal } from './EngineeringCatalogModal';
import {
  Flame,
  Sparkles,
  Ruler,
  ShieldCheck,
  Eye,
  CheckCircle2,
  ExternalLink,
  Maximize2,
  ChevronRight,
  ChevronLeft,
  X,
  ArrowUpRight,
  ArrowRight,
  ArrowLeft,
  Droplets,
  Paintbrush,
  Check,
  Compass,
  Zap,
  RotateCcw,
  Package,
  Layers,
  Coins,
  DollarSign,
  Info,
  SlidersHorizontal,
  Table2,
  Play,
  Pause,
} from 'lucide-react';

interface RadiatorsDepartmentProps {
  onOpenConsultation: (productName: string) => void;
  onOpenGallery: (images: string[], title: string) => void;
}

export const RadiatorsDepartment: React.FC<RadiatorsDepartmentProps> = ({
  onOpenConsultation,
  onOpenGallery,
}) => {
  const { language, t, isRtl } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'living' | 'bathroom' | 'column'>('all');
  const [selectedModelId, setSelectedModelId] = useState<string | null>(null);
  const [infoTab, setInfoTab] = useState<'overview' | 'comparison'>('overview');
  const [activeMediaIndex, setActiveMediaIndex] = useState<{ [modelId: string]: number }>({});
  const [selectedFinishIndex, setSelectedFinishIndex] = useState<{ [modelId: string]: number }>({});
  const [imageError, setImageError] = useState<{ [id: string]: boolean }>({});
  const [modalModel, setModalModel] = useState<RadiatorModel | null>(null);

  const currencyNotice = getCurrencyNotice(language);
  const minPrice = Math.min(...RADIATOR_MODELS.map((m) => m.priceToman));
  const maxPrice = Math.max(...RADIATOR_MODELS.map((m) => m.priceToman));
  const minPriceConverted = convertFromToman(minPrice, language);
  const maxPriceConverted = convertFromToman(maxPrice, language);

  const filteredModels = RADIATOR_MODELS.filter((model) => {
    if (selectedCategory === 'all') return true;
    if (selectedCategory === 'living') {
      return model.category === 'living_art' || model.category === 'geometric_origami';
    }
    if (selectedCategory === 'bathroom') {
      return model.category === 'bathroom_towel' || model.category === 'curved_sculptural';
    }
    if (selectedCategory === 'column') {
      return model.category === 'architectural_column';
    }
    return true;
  });

  const livingCount = RADIATOR_MODELS.filter(
    (m) => m.category === 'living_art' || m.category === 'geometric_origami'
  ).length;
  const bathroomCount = RADIATOR_MODELS.filter(
    (m) => m.category === 'bathroom_towel' || m.category === 'curved_sculptural'
  ).length;
  const columnCount = RADIATOR_MODELS.filter(
    (m) => m.category === 'architectural_column'
  ).length;

  const selectedModel = RADIATOR_MODELS.find((m) => m.id === selectedModelId) || null;

  // Department General Overview Slides State
  const [overviewSlideIndex, setOverviewSlideIndex] = useState(0);
  const [isOverviewAutoPlay, setIsOverviewAutoPlay] = useState(true);

  // 4 Architectural Slides for Radiators Department Overview
  const radiatorSlides = [
    {
      id: 'slide_art',
      num: '۰۱',
      tabTitle: { fa: 'وال‌آرت و کانسپت معماری', en: 'Wall-Art Concept', ar: 'مفهوم النحت المعماري' },
      badge: { fa: 'رادیاتورهای دکوراتیو لوکس مجسمه‌سازانه', en: 'Sculptural Designer Radiators', ar: 'مشعات ديكورية فاخرة' },
      tag: { fa: 'تلفیق گرمایش مطبوع و هنر مدرن', en: 'Fusion of Warmth & Art', ar: 'فن ودفء متكامل' },
      metric: { label: { fa: 'تنوع مدل', en: 'Master Models', ar: 'عدد النماذج' }, value: `${RADIATOR_MODELS.length} مدل شاخص` },
      title: {
        fa: 'تبدیل رادیاتور از یک مبدل حرارتی ساده به تندیس لوکس دکوراسیون داخلی',
        en: 'Transforming Heating into Architectural Wall Sculptures',
        ar: 'تحويل المشعاع التقليدي إلى تحفة نحتية فاخرة في الديكور الداخلي',
      },
      desc: {
        fa: 'رادیاتورهای استیلکس با طراحی مدرن و مینیمال، نقطه کانونی سالن‌های پذیرایی، مسترروم‌های ویلایی و لابی‌های شاخص هستند که با سنگ‌های بوک‌مچ، میکروسمنت و ترمووود هارمونی بصری چشم‌نوازی ایجاد می‌کنند.',
        en: 'STELLEX designer radiators act as breathtaking focal points in luxury living rooms, villas, and grand lobbies, harmonizing with bookmatch marble, microcement, and wood finishes.',
        ar: 'تشكل مشعات ستيليكس الديكورية محوراً بصرياً مبهراً في الصالونات الفاخرة والفلل الراقية، متناغمة مع الرخام الطبيعي والميكروسمنت.',
      },
      features: [
        {
          icon: Sparkles,
          highlight: 'Wall-Art',
          title: { fa: 'طراحی تندیس‌گونه بدون شباهت به شوفاژ', en: 'Sculptural Aesthetic', ar: 'تصميم نحتي أنيق' },
          desc: { fa: 'خطوط مواج، زوایای ارگونومیک و فرم‌های ژئومتریک که نگاه هر بیننده‌ای را مجذوب می‌کند.', en: 'Organic curves and architectural geometries that captivate.', ar: 'خطوط انسيابية وأشكال هندسية تلفت الأنظار.' },
        },
        {
          icon: Ruler,
          highlight: 'Modular',
          title: { fa: 'ابعاد سفارشی از ۵۰ تا ۲۲۰ سانتی‌متر', en: 'Custom Dimensions', ar: 'أبعاد مخصصة' },
          desc: { fa: 'امکان ساخت رادیاتورهای ستونی، افقی، زیرپنجره‌ای و حوله‌خشک‌کن‌های مدرن.', en: 'Available in vertical columns, horizontal panels, and towel rails.', ar: 'إمكانية التصنيع الرأسي والأفقي ومجففات المناشف.' },
        },
        {
          icon: Flame,
          highlight: 'Balanced',
          title: { fa: 'تابش حرارتی یکنواخت و ملایم', en: 'Gentle Radiant Heat', ar: 'إشعاع حراري متوازن' },
          desc: { fa: 'گرمایش آرام بدون ایجاد بوی سوختگی غبار یا خشکی نامطبوع هوا در فضا.', en: 'Clean infrared radiant comfort without dry air or burning dust odors.', ar: 'دفء صحي بدون حرق لذرات الغبار أو جفاف الهواء.' },
        },
      ],
    },
    {
      id: 'slide_thermo',
      num: '۰۲',
      tabTitle: { fa: 'ترمودینامیک و راندمان حرارتی', en: 'Thermodynamics', ar: 'الكفاءة الحرارية' },
      badge: { fa: 'مهندسی سیالات و ضریب انتقال حرارت', en: 'Fluid Dynamics & Heat Flux', ar: 'ديناميكا الموائع والحرارة' },
      tag: { fa: 'راندمان حرارتی ۲۸۰۰ تا ۶۵۰۰ BTU/h', en: 'High Thermal Output', ar: 'كفاءة تدفئة فائقة' },
      metric: { label: { fa: 'ظرفیت گرمایی', en: 'Thermal Output', ar: 'القدرة الحرارية' }, value: 'تا ۶۵۰۰ BTU/h' },
      title: {
        fa: 'محاسبات پیشرفته دینامیک سیالات CFD و جریان همرفتی گردشی پایدار',
        en: 'Engineered CFD Fluid Dynamics & Convective Airflow Channels',
        ar: 'حسابات تدفق السوائل CFD لتحقيق أقصى كفاءة في التبادل الحراري',
      },
      desc: {
        fa: 'کانال‌های داخلی رادیاتورها با استفاده از شبیه‌سازی‌های حرارتی کامپیوتری طراحی شده‌اند تا بیشترین سطح تماس با آب داغ و هوا را ایجاد کرده و بازده حرارتی را تا ۳۵٪ نسبت به مدل‌های سنتی ارتقا دهند.',
        en: 'Internal flow channels are optimized via computerized heat transfer simulation, maximizing contact area and boosting convective efficiency by up to 35% over conventional radiators.',
        ar: 'تصميم القنوات الداخلية بمحاكاة حاسوبية لرفع مساحة التبادل الحراري وزيادة كفاءة التدفئة بنسبة تصل إلى ٣٥٪.',
      },
      features: [
        {
          icon: Zap,
          highlight: 'Rapid Heat',
          title: { fa: 'گرمایش سریع و پاسخ‌دهی فوری', en: 'Rapid Thermal Response', ar: 'استجابة حرارية سريعة' },
          desc: { fa: 'ضریب انتقال حرارت بهینه استیل که در کمتر از ۱۰ دقیقه کل پنل را به دمای مطلوب می‌رساند.', en: 'Reaches target surface temperature in under 10 minutes.', ar: 'يصل إلى درجة الحرارة المطلوبة في أقل من ١٠ دقائق.' },
        },
        {
          icon: Droplets,
          highlight: 'Zero Sludge',
          title: { fa: 'عدم رسوب‌گیری و عدم انسداد داخلی', en: 'Anti-Sludge & Scale Free', ar: 'مقاومة تامة للتكلس' },
          desc: { fa: 'سطح داخلی فوق‌صیقلی بدون چسبندگی رسوبات آهکی و بی‌نیاز از هواگیری مکرر.', en: 'Ultra-smooth inner lumen prevents limescale buildup and airlocks.', ar: 'سطح داخلي فائق النعومة يمنع تراكم الأملاح والترسبات.' },
        },
        {
          icon: Compass,
          highlight: 'Dual Fuel',
          title: { fa: 'سازگار با پکیج، موتورخانه و المنت برقی', en: 'Dual-Fuel Ready', ar: 'ثنائي التشغيل' },
          desc: { fa: 'امکان اتصال به مدار آب‌گرم موتورخانه یا تجهیز به المنت‌های حرارتی هوشمند برقی.', en: 'Works with hydronic boiler circuits or smart electric heating elements.', ar: 'يعمل مع التدفئة المركزية أو بالمقاومة الكهربائية الذكية.' },
        },
      ],
    },
    {
      id: 'slide_metallurgy',
      num: '۰۳',
      tabTitle: { fa: 'متالورژی ۳۰۴ نگیر و فینیشینگ PVD', en: 'Alloys & Finishes', ar: 'السبائك والطلاء' },
      badge: { fa: 'فولاد زنگ‌نزن آستنیتی استاندارد', en: 'Certified Austenitic Stainless', ar: 'ستانلس ستيل ۳۰۴ فابریک' },
      tag: { fa: 'پوشش نانو PVD تیتانیوم کاتدی', en: 'Vacuum PVD Titanium', ar: 'طلاء PVD مفرغ ومقاوم' },
      metric: { label: { fa: 'آلیاژ اصلی', en: 'Base Alloy', ar: 'السبيكة' }, value: 'استیل ۳۰۴ نگیر' },
      title: {
        fa: 'استیل ۳۰۴ نگیر با فینیش‌های سوپرمیرور، طلایی رویال و دودی تیتانیوم',
        en: 'Standard 304 Stainless with 8K Mirror, Royal Gold & Smoked Titanium PVD',
        ar: 'ستانلس ستيل ۳۰۴ مع طلاء PVD الذهبي والدخاني وتلميع المرآة',
      },
      desc: {
        fa: 'استفاده از شمش‌های وارداتی با گواهی آزمون متالورژی MTC. رنگ‌آمیزی در محفظه‌های تحت خلاء عمیق PVD انجام می‌شود که در آن ذرات تیتانیوم با شبکه کریستالی استیل پیوند یونی برقرار می‌کنند.',
        en: 'Certified imported austenitic stainless with MTC test reports. Vacuum PVD chambers bond titanium ions directly into the metal lattice for lifelong color fastness.',
        ar: 'طلاء في أفران التفريغ العالي PVD حيث تتحد جزيئات التيتانيوم مع شبكة الفولاذ البلورية لضمان ثبات اللون للأبد.',
      },
      features: [
        {
          icon: Paintbrush,
          highlight: '4 Finishes',
          title: { fa: 'چهار فینیش رنگی اختصاصی', en: '4 Signature Finishes', ar: '٤ ألوان حصرية' },
          desc: { fa: 'نقره‌ای سوپرمیرور ۸K، طلایی رویال براق، دودی گرافیت متالیک و برنجی مات سندبلاست.', en: '8K Mirror, Royal Gold, Smoked Charcoal, and Brushed Satin Brass.', ar: 'فضي مرآة، ذهبي ملكي، رمادي دخاني، وبرونزي مطفي.' },
        },
        {
          icon: ShieldCheck,
          highlight: 'Scratch-Proof',
          title: { fa: 'مقاومت در برابر خط‌وخش و رطوبت ۱۰۰٪', en: 'Scratch & Steam Proof', ar: 'مقاوم للخدش والبخار' },
          desc: { fa: 'ایده‌آل برای فضاهای مرطوب استخر، حمام‌های مستر و سونا بدون نگرانی از زنگ یا سیاهی.', en: 'Immune to bathroom humidity, swimming pool steam, and cleaning sprays.', ar: 'مثالي لحمامات السباحة والجاكوزي والمناطق الرطبة.' },
        },
        {
          icon: Layers,
          highlight: 'TIG Weld',
          title: { fa: 'جوشکاری آرگون TIG میکرونی پنهان', en: 'Micro-TIG Orbital Welding', ar: 'لحام أرجون ميكروني' },
          desc: { fa: 'خطوط جوش کاملاً صیقلی‌شده و غیرقابل تشخیص با چشم غیرمسلح.', en: 'Precision robotically polished joints completely invisible to the eye.', ar: 'لحام آلي متقن ومصقول لا تظهر له أي آثار ظاهرة.' },
        },
      ],
    },
    {
      id: 'slide_warranty',
      num: '۰۴',
      tabTitle: { fa: 'تست هیدرواستاتیک و گارانتی ۱۵ ساله', en: 'Testing & Warranty', ar: 'الفحص والضمان' },
      badge: { fa: 'کنترل کیفیت ۱۰۰ درصدی هیدرواستاتیک', en: '100% Hydrostatic Tested', ar: 'فحص ضغط هيدروستاتيكي' },
      tag: { fa: 'تست فشار تا ۱۶ بار (بیش از دو برابر فشار شهری)', en: '16 Bar Proof Pressure', ar: 'اختبار ضغط حتى ١٦ بار' },
      metric: { label: { fa: 'گارانتی تعویض', en: 'Warranty', ar: 'الضمان الرسمي' }, value: '۱۵ سال کتبی' },
      title: {
        fa: 'تست هیدرواستاتیک ۱۶ بار، شناسنامه فنی رسمی و ۱۵ سال ضمانت تعویض کتبی',
        en: '16-Bar Hydrostatic Pressure Testing with 15-Year Replacement Warranty',
        ar: 'فحص ضغط حتى ١٦ بار مع ضمان استبدال رسمي لمدة ١٥ عاماً',
      },
      desc: {
        fa: 'تک‌تک رادیاتورها قبل از خروج از کارخانه به مدت ۲۴ ساعت تحت فشار هیدرواستاتیک ۱۶ بار تست نشتی می‌شوند و همراه با شناسنامه اصالت کالا و برگه گارانتی هولوگرام‌دار تحویل مشتریان محترم می‌گردند.',
        en: 'Every individual radiator undergoes a 24-hour 16-bar pressure leak test prior to shipment, backed by an official serial-numbered hologram warranty certificate.',
        ar: 'يخضع كل مشعاع لاختبار تسريب بالضغط الهيدروستاتيكي لمدة ٢٤ ساعة بضغط ١٦ بار قبل الشحن لضمان الأمان التام.',
      },
      features: [
        {
          icon: CheckCircle2,
          highlight: '16 Bar',
          title: { fa: 'فشار کاری بالا تا ۱۰ بار', en: 'High Working Pressure', ar: 'ضغط تشغيل عالي' },
          desc: { fa: 'مناسب برای برج‌های بلندمرتبه با فشار آب بالا بدون نیاز به فشارشکن در طبقات پایین.', en: 'Engineered for luxury high-rise towers with high static head pressures.', ar: 'مناسب للأبراج السكنية الشاهقة ذات الضغط المائي المرتفع.' },
        },
        {
          icon: Package,
          highlight: 'Full Fitting',
          title: { fa: 'متعلقات و شیرآلات هم‌رنگ لوکس', en: 'Matching Luxury Valves', ar: 'محبس وفيتينغ متناسق' },
          desc: { fa: 'امکان سفارش شیر ترموستاتیک، درپوش و ماسوره با همان فینیش PVD رادیاتور.', en: 'Thermostatic valve kits and escutcheons in matching PVD finishes.', ar: 'إمكانية توفير محابس ترموستاتية بنفس لون المشعاع الفاخر.' },
        },
        {
          icon: Sparkles,
          highlight: '15-Yr Card',
          title: { fa: 'کارت گارانتی تعویض شرکتی', en: '15-Year Official Card', ar: 'بطاقة ضمان ١٥ سنة' },
          desc: { fa: 'پشتیبانی بی‌قیدوشرط و تعویض رادیاتور در صورت بروز هرگونه نشتی یا تغییر رنگ.', en: 'No-quibble replacement guarantee against leaks or surface defects.', ar: 'استبدال فوري في حال حدوث أي تسريب أو خلل في اللون.' },
        },
      ],
    },
  ];

  // Auto-play timer for General Overview slides
  useEffect(() => {
    if (!isOverviewAutoPlay || selectedModelId !== null || infoTab !== 'overview') return;
    const timer = setInterval(() => {
      setOverviewSlideIndex((prev) => (prev + 1) % radiatorSlides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [isOverviewAutoPlay, selectedModelId, infoTab, radiatorSlides.length]);

  const activeSlide = radiatorSlides[overviewSlideIndex] || radiatorSlides[0];

  const handleMediaNext = (modelId: string, total: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveMediaIndex((prev) => ({
      ...prev,
      [modelId]: ((prev[modelId] || 0) + 1) % total,
    }));
  };

  const handleMediaPrev = (modelId: string, total: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveMediaIndex((prev) => ({
      ...prev,
      [modelId]: (prev[modelId] || 0) <= 0 ? total - 1 : (prev[modelId] || 0) - 1,
    }));
  };

  const handleNextModel = () => {
    if (!selectedModel) return;
    const currentIndex = filteredModels.findIndex((m) => m.id === selectedModel.id);
    const nextIndex = (currentIndex + 1) % filteredModels.length;
    setSelectedModelId(filteredModels[nextIndex].id);
  };

  const handlePrevModel = () => {
    if (!selectedModel) return;
    const currentIndex = filteredModels.findIndex((m) => m.id === selectedModel.id);
    const prevIndex = (currentIndex - 1 + filteredModels.length) % filteredModels.length;
    setSelectedModelId(filteredModels[prevIndex].id);
  };

  const handleFinishSelect = (modelId: string, finishIdx: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedFinishIndex((prev) => ({ ...prev, [modelId]: finishIdx }));
  };

  // Media list for selected model
  const selectedMediaList = selectedModel
    ? [selectedModel.image, ...selectedModel.detailImages]
    : [];
  const selectedCurIdx = selectedModel
    ? (activeMediaIndex[selectedModel.id] || 0) % (selectedMediaList.length || 1)
    : 0;
  const selectedCurrentImg = selectedMediaList[selectedCurIdx] || selectedModel?.image || '';

  const selectedPriceObj = selectedModel
    ? convertFromToman(selectedModel.priceToman, language)
    : null;

  const BackArrowIcon = isRtl ? ArrowRight : ArrowLeft;

  return (
    <div id="radiators-department" className="space-y-6 animate-in fade-in duration-300">
      
      {/* Main Showcase Stage matching ReadyPostsDepartment layout (lux-card) */}
      <div className="lux-card rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-700/80 shadow-2xl relative overflow-hidden">
        
        {/* Subtle Ambient Background */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-amber-600/5 rounded-full blur-2xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* ========================================================================= */}
          {/* SIDE 1 (5 COLS): PRODUCT GALLERY IN SMALLER DIMENSIONS                   */}
          {/* ========================================================================= */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Gallery Header with Filter Pills */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-lg bg-amber-500/20 text-amber-400">
                    <Flame className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-black text-white">
                      {language === 'fa' 
                        ? 'گالری رادیاتورهای دکوراتیو' 
                        : language === 'ar' 
                        ? 'معرض المشعات الديكورية' 
                        : 'Designer Radiators Gallery'}
                    </h4>
                    <span className="text-[11px] text-slate-400 font-medium">
                      {language === 'fa' 
                        ? `${filteredModels.length} مدل شاهکار معماری آماده انتخاب` 
                        : language === 'ar' 
                        ? `${filteredModels.length} نماذج معمارية جاهزة للاختيار` 
                        : `${filteredModels.length} architectural models available`}
                    </span>
                  </div>
                </div>

                {selectedModel ? (
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => {
                        setSelectedModelId(null);
                        setInfoTab('overview');
                      }}
                      className="text-[11px] font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1 bg-amber-500/10 hover:bg-amber-500/20 px-2 py-1 rounded-lg border border-amber-500/30 transition-all cursor-pointer"
                      title={language === 'fa' ? 'نمایش توضیحات دپارتمان' : 'Show department info'}
                    >
                      <RotateCcw className="w-3 h-3" />
                      <span>{language === 'fa' ? 'توضیحات' : 'Info'}</span>
                    </button>
                    <button
                      onClick={() => {
                        setSelectedModelId(null);
                        setInfoTab('comparison');
                      }}
                      className="text-[11px] font-bold text-slate-300 hover:text-white flex items-center gap-1 bg-slate-800 hover:bg-slate-700 px-2 py-1 rounded-lg border border-slate-700 transition-all cursor-pointer"
                      title={language === 'fa' ? 'مشاهده جدول مقایسه فنی' : 'Show comparison table'}
                    >
                      <Table2 className="w-3 h-3 text-amber-400" />
                      <span>{language === 'fa' ? 'جدول مقایسه' : 'Matrix'}</span>
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => setInfoTab(infoTab === 'overview' ? 'comparison' : 'overview')}
                    className="text-[11px] font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1 bg-amber-500/10 hover:bg-amber-500/20 px-2.5 py-1 rounded-lg border border-amber-500/30 transition-all cursor-pointer"
                    title={infoTab === 'overview' ? (language === 'fa' ? 'مشاهده جدول مقایسه' : 'View comparison matrix') : (language === 'fa' ? 'مشاهده توضیحات کلی' : 'View overview')}
                  >
                    {infoTab === 'overview' ? (
                      <>
                        <Table2 className="w-3 h-3" />
                        <span>{language === 'fa' ? `جدول مقایسه ${RADIATOR_MODELS.length} مدل` : `Comparison Matrix (${RADIATOR_MODELS.length})`}</span>
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-3 h-3" />
                        <span>{language === 'fa' ? 'معرفی دپارتمان' : 'Overview'}</span>
                      </>
                    )}
                  </button>
                )}
              </div>

              {/* Compact Sub-Menu Filter Tabs */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 p-1 rounded-xl bg-slate-950/80 border border-slate-800 text-xs">
                <button
                  onClick={() => setSelectedCategory('all')}
                  className={`py-1.5 px-2 rounded-lg font-bold transition-all cursor-pointer text-center text-[11px] truncate ${
                    selectedCategory === 'all'
                      ? 'bg-amber-500 text-slate-950 shadow'
                      : 'text-slate-400 hover:text-white hover:bg-slate-900'
                  }`}
                >
                  {language === 'fa' ? `همه (${RADIATOR_MODELS.length})` : `All (${RADIATOR_MODELS.length})`}
                </button>

                <button
                  onClick={() => setSelectedCategory('living')}
                  className={`py-1.5 px-2 rounded-lg font-bold transition-all cursor-pointer text-center text-[11px] flex items-center justify-center gap-1 truncate ${
                    selectedCategory === 'living'
                      ? 'bg-amber-500 text-slate-950 shadow font-black'
                      : 'text-amber-400 hover:text-white hover:bg-slate-900'
                  }`}
                >
                  <Sparkles className="w-3 h-3 shrink-0" />
                  <span className="truncate">{language === 'fa' ? `سالن/وال‌آرت (${livingCount})` : `Living (${livingCount})`}</span>
                </button>

                <button
                  onClick={() => setSelectedCategory('bathroom')}
                  className={`py-1.5 px-2 rounded-lg font-bold transition-all cursor-pointer text-center text-[11px] flex items-center justify-center gap-1 truncate ${
                    selectedCategory === 'bathroom'
                      ? 'bg-amber-500 text-slate-950 shadow'
                      : 'text-slate-400 hover:text-white hover:bg-slate-900'
                  }`}
                >
                  <Droplets className="w-2.5 h-2.5 shrink-0" />
                  <span className="truncate">{language === 'fa' ? `حمام/اسپا (${bathroomCount})` : `Bath/Spa (${bathroomCount})`}</span>
                </button>

                <button
                  onClick={() => setSelectedCategory('column')}
                  className={`py-1.5 px-2 rounded-lg font-bold transition-all cursor-pointer text-center text-[11px] truncate ${
                    selectedCategory === 'column'
                      ? 'bg-amber-500 text-slate-950 shadow'
                      : 'text-slate-400 hover:text-white hover:bg-slate-900'
                  }`}
                >
                  <span className="truncate">{language === 'fa' ? `ستونی/راهرو (${columnCount})` : `Column (${columnCount})`}</span>
                </button>
              </div>
            </div>

            {/* Gallery Grid: Products in smaller dimensions side-by-side (matching ReadyPosts style) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-2.5 sm:gap-3 max-h-[580px] overflow-y-auto p-1 pr-1.5 scrollbar-thin scrollbar-thumb-slate-700">
              {filteredModels.map((model) => {
                const isSelected = selectedModelId === model.id;
                const currentImg = imageError[model.id] ? model.fallbackImage : model.image;

                return (
                  <button
                    key={model.id}
                    onClick={() => setSelectedModelId(isSelected ? null : model.id)}
                    className={`group rounded-2xl overflow-hidden border transition-all cursor-pointer relative aspect-4/3 w-full bg-slate-950 block ${
                      isSelected
                        ? 'border-amber-400 ring-2 ring-amber-400 shadow-xl shadow-amber-500/30 scale-[1.03]'
                        : 'border-slate-800 hover:border-amber-400/60 hover:scale-[1.02]'
                    }`}
                    title={model.name[language]}
                  >
                    {/* ONLY Product Image */}
                    <img
                      src={currentImg}
                      alt={model.name[language]}
                      loading="lazy"
                      decoding="async"
                      onError={() => setImageError((prev) => ({ ...prev, [model.id]: true }))}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />

                    {/* Category mini badge in corner */}
                    <span className="absolute top-1.5 right-1.5 rtl:right-1.5 rtl:left-auto bg-slate-950/85 border border-amber-500/40 text-amber-400 text-[9px] font-black px-1.5 py-0.5 rounded shadow backdrop-blur-md flex items-center gap-0.5 z-10">
                      {model.category === 'living_art' ? (
                        <span>{language === 'fa' ? 'وال‌آرت' : 'Wall-Art'}</span>
                      ) : model.category === 'bathroom_towel' ? (
                        <span>{language === 'fa' ? 'شلف‌دار' : 'Towel-Rack'}</span>
                      ) : model.category === 'architectural_column' ? (
                        <span>{language === 'fa' ? 'ستونی' : 'Column'}</span>
                      ) : model.category === 'geometric_origami' ? (
                        <span>{language === 'fa' ? 'اوریگامی' : 'Origami'}</span>
                      ) : (
                        <span>{language === 'fa' ? 'روبانی' : 'Ribbon'}</span>
                      )}
                    </span>

                    {/* Active Selected State Overlay */}
                    {isSelected && (
                      <div className="absolute inset-0 bg-amber-500/15 border-2 border-amber-400 rounded-2xl flex items-center justify-center backdrop-blur-[1px] pointer-events-none">
                        <span className="bg-amber-500 text-slate-950 text-[10px] font-black px-2.5 py-1 rounded-full shadow-lg">
                          {language === 'fa' ? '✓ انتخاب شده' : '✓ Selected'}
                        </span>
                      </div>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Bottom Warranty & Guarantee Box matching department style */}
            <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-xl bg-amber-500/20 text-amber-400">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] text-slate-400 font-medium">
                    {language === 'fa' ? 'گارانتی و خدمات کارخانه‌ای' : 'Warranty & Guarantee'}
                  </div>
                  <div className="text-xs font-black text-amber-300 font-mono">
                    {language === 'fa' ? '۱۵ سال ضمانت کتبی تعویض بی قید و شرط' : '15-Year Unconditional Written Warranty'}
                  </div>
                </div>
              </div>
              <span className="text-[10px] font-bold text-amber-400 bg-amber-500/20 px-2 py-0.5 rounded-lg border border-amber-500/30 font-mono">
                MTC DIN 304/316
              </span>
            </div>

          </div>


          {/* ========================================================================= */}
          {/* SIDE 2 (7 COLS): GENERAL DESCRIPTION  OR  REPLACED WITH PRODUCT CARD     */}
          {/* ========================================================================= */}
          <div className="lg:col-span-7 space-y-6">

            {/* CONDITIONAL RENDERING: PRODUCT CARD (when clicked) vs GENERAL DESCRIPTION (default) */}
            {selectedModel ? (
              
              /* ------------------------------------------------------------------- */
              /* SCENARIO A: SELECTED PRODUCT PRESENTATION CARD (طرح کارت معرفی محصول) */
              /* ------------------------------------------------------------------- */
              <div className="lux-card rounded-3xl overflow-hidden border border-amber-500/40 hover:border-amber-400/80 shadow-2xl transition-all duration-300 flex flex-col bg-slate-950/90 animate-in fade-in zoom-in-95 duration-200">
                
                {/* Navigation Toolbar between models + Return to General Overview */}
                <div className="p-3 bg-slate-900/95 border-b border-slate-800 flex items-center justify-between gap-3">
                  <button
                    onClick={() => setSelectedModelId(null)}
                    className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-amber-500 hover:text-slate-950 text-slate-200 text-xs font-bold border border-slate-700 flex items-center gap-1.5 transition-all cursor-pointer"
                  >
                    <BackArrowIcon className="w-3.5 h-3.5" />
                    <span>{language === 'fa' ? 'بازگشت به توضیحات عمومی' : 'Back to Department Info'}</span>
                  </button>

                  <div className="flex items-center gap-1.5">
                    <span className="text-[11px] font-mono text-slate-400 px-2">
                      {language === 'fa'
                        ? `مدل ${(filteredModels.findIndex((m) => m.id === selectedModel.id) + 1)} از ${filteredModels.length}`
                        : `Model ${(filteredModels.findIndex((m) => m.id === selectedModel.id) + 1)} of ${filteredModels.length}`}
                    </span>

                    <button
                      onClick={handlePrevModel}
                      className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors cursor-pointer"
                      title={language === 'fa' ? 'مدل قبلی' : 'Previous model'}
                    >
                      <ChevronRight className="w-4 h-4 rtl:rotate-0 rotate-180" />
                    </button>

                    <button
                      onClick={handleNextModel}
                      className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors cursor-pointer"
                      title={language === 'fa' ? 'مدل بعدی' : 'Next model'}
                    >
                      <ChevronLeft className="w-4 h-4 rtl:rotate-0 rotate-180" />
                    </button>
                  </div>
                </div>

                {/* Product Presentation Body: Side-by-Side on md+ for maximum image display without increasing card footprint */}
                <div className="grid grid-cols-1 md:grid-cols-12 items-stretch flex-1">

                  {/* 1. Generously Sized Product Media Showcase (md:col-span-5) */}
                  <div className="md:col-span-5 relative min-h-[340px] sm:min-h-[380px] md:min-h-[440px] w-full overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center p-3 group border-b md:border-b-0 md:border-e border-slate-800">
                    {/* Ambient soft glow backdrop */}
                    <div 
                      className="absolute inset-0 bg-cover bg-center opacity-20 blur-2xl scale-125 pointer-events-none"
                      style={{ backgroundImage: `url(${selectedCurrentImg})` }}
                    />

                    {/* Main Product Image (Full visibility with object-contain - spacious vertical clearance) */}
                    <img
                      src={selectedCurrentImg}
                      alt={selectedModel.name[language]}
                      loading="lazy"
                      decoding="async"
                      className="relative z-10 max-h-[320px] sm:max-h-[360px] md:max-h-[420px] w-auto max-w-full object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.85)] group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Top Floating Badge & Code */}
                    <div className="absolute top-2.5 inset-x-2.5 flex items-center justify-between z-20 gap-2 pointer-events-none">
                      <div className="flex items-center gap-1.5 pointer-events-auto">
                        <span className="text-[11px] font-mono font-black bg-slate-950/90 text-amber-400 px-2.5 py-0.5 rounded-lg border border-amber-500/40 backdrop-blur-md shrink-0 shadow">
                          {selectedModel.modelCode}
                        </span>
                      </div>
                      
                      <span className="text-[9px] font-bold bg-slate-900/90 border border-amber-500/30 text-amber-300 px-2 py-0.5 rounded-full truncate shadow backdrop-blur-md">
                        {selectedModel.badge[language]}
                      </span>
                    </div>

                    {/* Gallery Mini Controls */}
                    {selectedMediaList.length > 1 && (
                      <div className="absolute bottom-2 inset-x-2 flex items-center justify-between z-20">
                        <button
                          onClick={(e) => handleMediaPrev(selectedModel.id, selectedMediaList.length, e)}
                          className="p-1.5 rounded-lg bg-slate-950/85 hover:bg-amber-500 hover:text-slate-950 text-white border border-slate-700 backdrop-blur-md transition-all cursor-pointer shadow"
                          title={language === 'fa' ? 'عکس قبلی' : 'Previous'}
                        >
                          <ChevronLeft className="w-3.5 h-3.5" />
                        </button>
                        <span className="text-[10px] font-mono font-bold bg-slate-950/90 text-slate-300 px-2 py-0.5 rounded-md border border-slate-700 backdrop-blur-md shadow">
                          {selectedCurIdx + 1} / {selectedMediaList.length}
                        </span>
                        <button
                          onClick={(e) => handleMediaNext(selectedModel.id, selectedMediaList.length, e)}
                          className="p-1.5 rounded-lg bg-slate-950/85 hover:bg-amber-500 hover:text-slate-950 text-white border border-slate-700 backdrop-blur-md transition-all cursor-pointer shadow"
                          title={language === 'fa' ? 'عکس بعدی' : 'Next'}
                        >
                          <ChevronRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    )}
                  </div>

                  {/* 2. Compact Technical & Pricing Information (md:col-span-7) */}
                  <div className="md:col-span-7 p-4 sm:p-5 flex flex-col justify-between space-y-3 bg-slate-950/60">
                    
                    <div className="space-y-2.5">
                      <div>
                        {selectedModel.designerSeries && (
                          <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-amber-500/10 border border-amber-500/30 text-amber-300 text-[10px] font-bold mb-1">
                            <Sparkles className="w-3 h-3 text-amber-400 shrink-0" />
                            <span>{selectedModel.designerSeries[language]}</span>
                          </div>
                        )}
                        <h4 className="text-base sm:text-lg font-black text-white group-hover:text-amber-300 transition-colors">
                          {selectedModel.name[language]}
                        </h4>
                        <p className="text-[11px] text-slate-300 leading-snug line-clamp-2 mt-0.5">
                          {selectedModel.description[language]}
                        </p>
                      </div>

                      {/* Streamlined Architect & Interior Tip Strip */}
                      <div className="px-3 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-[11px] flex items-center gap-2 text-slate-300">
                        <Compass className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span className="truncate">
                          <strong className="text-amber-300 font-bold">{language === 'fa' ? 'پیشنهاد چیدمان:' : 'Design Tip:'}</strong>{' '}
                          {selectedModel.roomSuitability[0][language]} • {selectedModel.interiorDesignTip[language].split('.')[0]}
                        </span>
                      </div>

                      {/* Compact 4-Cell Engineering Specifications Grid */}
                      <div className="grid grid-cols-2 gap-1.5 p-2 rounded-xl bg-slate-950/80 border border-slate-800 text-[11px]">
                        <div className="p-2 rounded-lg bg-slate-900/60 border border-slate-800/60">
                          <span className="text-[10px] text-slate-400 block mb-0.5">{language === 'fa' ? 'ابعاد (ارتفاع×عرض)' : 'Dimensions'}</span>
                          <strong className="text-white font-mono text-xs block truncate" title={`${selectedModel.dimensions.height} × ${selectedModel.dimensions.width}`}>
                            {selectedModel.dimensions.height.split(' ')[0]}×{selectedModel.dimensions.width.split(' ')[0]}
                          </strong>
                        </div>

                        <div className="p-2 rounded-lg bg-slate-900/60 border border-slate-800/60">
                          <span className="text-[10px] text-slate-400 block mb-0.5">{language === 'fa' ? 'توان حرارتی' : 'Thermal Output'}</span>
                          <strong className="text-amber-400 font-mono text-xs block truncate">
                            {selectedModel.thermalOutput.wattage}
                          </strong>
                        </div>

                        <div className="p-2 rounded-lg bg-slate-900/60 border border-slate-800/60">
                          <span className="text-[10px] text-slate-400 block mb-0.5">{language === 'fa' ? 'پوشش فضا' : 'Coverage'}</span>
                          <strong className="text-white text-xs block truncate">
                            {selectedModel.thermalOutput.coverageArea}
                          </strong>
                        </div>

                        <div className="p-2 rounded-lg bg-slate-900/60 border border-slate-800/60">
                          <span className="text-[10px] text-slate-400 block mb-0.5">{language === 'fa' ? 'آلیاژ و تست' : 'Alloy & Test'}</span>
                          <strong className="text-emerald-400 text-xs block truncate">
                            استیل {selectedModel.alloyGrade[language].includes('316') ? '316' : '304'} نگیر (۱۶ بار)
                          </strong>
                        </div>
                      </div>

                      {/* Finishes Selector: Sleek Inline Row */}
                      <div className="flex items-center gap-2 text-[11px] py-0.5">
                        <span className="text-slate-400 shrink-0 flex items-center gap-1 text-[10px]">
                          <Paintbrush className="w-3 h-3 text-amber-400" />
                          <span>{language === 'fa' ? 'فینیش:' : 'Finish:'}</span>
                        </span>
                        <div className="flex items-center gap-1.5 flex-wrap">
                          {selectedModel.availableFinishes.map((fin, idx) => {
                            const activeFin = selectedFinishIndex[selectedModel.id] || 0;
                            return (
                              <button
                                key={idx}
                                onClick={(e) => handleFinishSelect(selectedModel.id, idx, e)}
                                className={`px-2 py-0.5 rounded-md text-[10px] font-bold transition-all border cursor-pointer ${
                                  activeFin === idx
                                    ? 'bg-amber-500/20 text-amber-300 border-amber-500/60 shadow-sm'
                                    : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-slate-200'
                                }`}
                              >
                                {fin[language].split('(')[0]}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Compact Horizontal Price & Guarantee Bar */}
                      {selectedPriceObj && (
                        <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950/80 border border-slate-800">
                          <div className="flex items-center gap-2">
                            <span className="text-[11px] text-slate-400 font-medium">
                              {language === 'fa' ? 'برآورد پایه:' : 'Base Price:'}
                            </span>
                            <span className="text-base font-black text-amber-300 font-mono">
                              {language === 'en' && '$'}{selectedPriceObj.formattedNumber}
                            </span>
                            <span className="text-xs text-slate-300 font-bold">
                              {selectedPriceObj.shortLabel}
                            </span>
                            {language !== 'fa' && (
                              <span className="text-[10px] text-slate-400 font-mono">
                                ≈ {selectedModel.priceToman.toLocaleString('fa-IR')} ت
                              </span>
                            )}
                          </div>

                          <div className="flex items-center gap-1.5 text-[10px] text-amber-400 bg-amber-500/10 px-2 py-1 rounded-lg border border-amber-500/20 font-medium">
                            <ShieldCheck className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                            <span>{language === 'fa' ? '۱۵ سال ضمانت تعویض' : '15-Yr Warranty'}</span>
                          </div>
                        </div>
                      )}

                      {/* Included Hardware snippet */}
                      <div className="text-[10px] text-slate-400 flex items-center gap-1.5 pt-0.5 truncate">
                        <Package className="w-3 h-3 text-amber-400 shrink-0" />
                        <span className="truncate">
                          {language === 'fa' 
                            ? 'شامل: شیر و ماسوره ترموستاتیک، بست‌های مخفی، شیر هواگیری اتوماتیک و درپوش' 
                            : 'Includes: thermostatic valve, concealed mounting brackets & auto air vent'}
                        </span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-3 border-t border-slate-800 space-y-2">
                      
                      {/* Primary Gold Button */}
                      <button
                        onClick={() => onOpenConsultation(selectedModel.name[language])}
                        className="w-full py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 text-xs sm:text-sm font-black flex items-center justify-center gap-2 shadow-md shadow-amber-500/20 transition-all cursor-pointer"
                      >
                        <Flame className="w-4 h-4 text-slate-950" />
                        <span>
                          {language === 'fa' 
                            ? 'استعلام قیمت و درخواست پیش‌فاکتور این مدل' 
                            : 'Request Formal Invoice for this Model'}
                        </span>
                      </button>

                      <div className="grid grid-cols-2 gap-2">
                        {/* Full Specs Modal Button */}
                        <button
                          onClick={() => setModalModel(selectedModel)}
                          className="py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-[11px] font-bold flex items-center justify-center gap-1.5 border border-slate-700 transition-colors cursor-pointer"
                        >
                          <Eye className="w-3.5 h-3.5 text-amber-400" />
                          <span>{language === 'fa' ? 'شناسنامه مهندسی کامل' : 'Full Technical Specs'}</span>
                        </button>

                        {/* View Zoom Photos Gallery */}
                        <button
                          onClick={() => onOpenGallery([selectedModel.image, ...selectedModel.detailImages], selectedModel.name[language])}
                          className="py-2 rounded-xl bg-slate-950 hover:bg-slate-800 text-slate-300 hover:text-white text-[11px] font-bold flex items-center justify-center gap-1.5 border border-slate-800 transition-colors cursor-pointer"
                        >
                          <Maximize2 className="w-3.5 h-3.5 text-amber-400" />
                          <span>{language === 'fa' ? 'تصاویر زوم و گالری' : 'Zoom & Gallery'}</span>
                        </button>
                      </div>

                      {/* Quick link to comparison table */}
                      <button
                        onClick={() => {
                          setSelectedModelId(null);
                          setInfoTab('comparison');
                        }}
                        className="w-full py-1.5 px-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-amber-300 hover:text-amber-200 text-[11px] font-bold flex items-center justify-center gap-1.5 border border-amber-500/25 transition-all cursor-pointer mt-1"
                      >
                        <Table2 className="w-3.5 h-3.5 text-amber-400" />
                        <span>
                          {language === 'fa' 
                            ? `مشاهده و مقایسه در جدول فنی ${RADIATOR_MODELS.length} مدل` 
                            : `Compare in ${RADIATOR_MODELS.length}-Model Technical Matrix`}
                        </span>
                      </button>

                    </div>

                  </div>

                </div>

              </div>

            ) : (

              /* ------------------------------------------------------------------- */
              /* SCENARIO B: GENERAL DEPARTMENT OVERVIEW & COMPARISON MATRIX TABS   */
              /* ------------------------------------------------------------------- */
              <div className="space-y-5 animate-in fade-in duration-300">
                
                {/* Header & Value Proposition */}
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold">
                      <Flame className="w-3.5 h-3.5" />
                      <span>
                        {language === 'fa' 
                          ? 'دپارتمان انواع رادیاتورهای دکوراتیو و حوله‌خشک‌کن‌های استیلکس' 
                          : language === 'ar' 
                          ? 'قسم المشعات الديكورية الفاخرة ومجففات المناشف - ستيليكس' 
                          : 'STELLEX Designer Radiators & Heated Towel Rails Department'}
                      </span>
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-amber-500/30 text-amber-300 text-xs font-bold">
                      <Coins className="w-3.5 h-3.5 text-amber-400" />
                      <span>{currencyNotice.badge}</span>
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold">
                      <DollarSign className="w-3.5 h-3.5" />
                      <span>
                        {language === 'fa' 
                          ? 'شروع برآورد پایه از ۲۸ تا ۴۲ میلیون تومان' 
                          : language === 'ar' 
                          ? `الأسعار تبدأ من: ${minPriceConverted.formattedNumber} إلى ${maxPriceConverted.formattedNumber}` 
                          : `Starting Price: $${minPriceConverted.formattedNumber} - $${maxPriceConverted.formattedNumber}`}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-tight">
                    {language === 'fa'
                      ? 'رادیاتورهای دکوراتیو و حوله‌خشک‌کن‌های مدرن، تندیس‌هایی از گرما و هنر معماری'
                      : language === 'ar'
                      ? 'مشعات ديكورية ومجففات مناشف عصرية تجمع بین الفن المعماري والكفاءة'
                      : 'Architectural Designer Radiators & Sculptural Heated Towel Rails'}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {language === 'fa'
                      ? `تلفیق شکوه مجسمه‌سازی مدرن، محاسبات پیشرفته ترمودینامیک و آلیاژ استاندارد استیل ۳۰۴ نگیر (و استیل ۳۱۶ برای مصارف صنعتی خاص). ${RADIATOR_MODELS.length} شاهکار دیزاین برای سالن‌های پذیرایی مجلل، حمام‌های مستر ویلایی، فضاهای اسپا و لابی‌های شاخص با ضمانت تعویض ۱۵ ساله کتبی.`
                      : language === 'ar'
                      ? `تحف معمارية (${RADIATOR_MODELS.length} تصاميم حصرية) تجمع بين النحت المعاصر وكفاءة التدفئة العالية من ستانلس ستيل ۳۰۴ (و۳١٦ للمشاريع الصناعية) مع ضمان ١٥ عاماً.`
                      : `Fusing modern sculptural metalwork with thermodynamic efficiency across ${RADIATOR_MODELS.length} master designs in standard 304 (and 316 for industrial needs) stainless alloys with 15-year replacement warranty.`}
                  </p>
                </div>

                {/* TAB SWITCHER: داخل بخش توضیحات دپارتمان */}
                <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-slate-950/90 border border-slate-800 shadow-inner">
                  <button
                    onClick={() => setInfoTab('overview')}
                    className={`flex-1 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      infoTab === 'overview'
                        ? 'bg-amber-500 text-slate-950 shadow-md font-black'
                        : 'text-slate-400 hover:text-white hover:bg-slate-900/60'
                    }`}
                  >
                    <Sparkles className="w-4 h-4 shrink-0" />
                    <span>{language === 'fa' ? 'معرفی و ویژگی‌های برجسته' : 'Overview & Features'}</span>
                  </button>

                  <button
                    onClick={() => setInfoTab('comparison')}
                    className={`flex-1 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      infoTab === 'comparison'
                        ? 'bg-amber-500 text-slate-950 shadow-md font-black'
                        : 'text-slate-400 hover:text-white hover:bg-slate-900/60'
                    }`}
                  >
                    <Table2 className="w-4 h-4 shrink-0" />
                    <span>
                      {language === 'fa' 
                        ? `جدول مقایسه فنی و معماری (${RADIATOR_MODELS.length} مدل)` 
                        : `Technical Matrix (${RADIATOR_MODELS.length} Models)`}
                    </span>
                  </button>
                </div>

                {/* TAB CONTENT 1: OVERVIEW (طراحی به صورت اسلایدی) */}
                {infoTab === 'overview' && (
                  <div className="space-y-4 animate-in fade-in duration-200">

                    {/* SLIDESHOW NAVIGATION BAR & TABS */}
                    <div className="p-2.5 rounded-2xl bg-slate-900/95 border border-slate-800 flex flex-wrap items-center justify-between gap-2 shadow-lg">
                      
                      {/* Slide Tabs Pills */}
                      <div className="flex items-center gap-1.5 overflow-x-auto py-0.5 max-w-full">
                        {radiatorSlides.map((slide, sIdx) => {
                          const isCur = sIdx === overviewSlideIndex;
                          return (
                            <button
                              key={slide.id}
                              onClick={() => setOverviewSlideIndex(sIdx)}
                              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
                                isCur
                                  ? 'bg-amber-500 text-slate-950 font-black shadow-md shadow-amber-500/20'
                                  : 'bg-slate-800/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/60'
                              }`}
                            >
                              <span className={`text-[10px] font-mono px-1 py-0.2 rounded ${isCur ? 'bg-slate-950/20 text-slate-950' : 'text-amber-400'}`}>
                                {slide.num}
                              </span>
                              <span>{slide.tabTitle[language]}</span>
                            </button>
                          );
                        })}
                      </div>

                      {/* Slide Controls: AutoPlay toggle + Prev / Next Arrows */}
                      <div className="flex items-center gap-1.5 shrink-0">
                        <button
                          onClick={() => setIsOverviewAutoPlay(!isOverviewAutoPlay)}
                          className={`p-1.5 rounded-lg border text-xs font-medium transition-all cursor-pointer flex items-center gap-1 ${
                            isOverviewAutoPlay
                              ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                              : 'bg-slate-800 text-slate-400 hover:text-slate-200 border-slate-700'
                          }`}
                          title={isOverviewAutoPlay ? 'توقف پخش خودکار اسلایدها' : 'پخش خودکار اسلایدها'}
                        >
                          {isOverviewAutoPlay ? <Pause className="w-3.5 h-3.5 text-amber-400" /> : <Play className="w-3.5 h-3.5" />}
                          <span className="text-[10px] hidden sm:inline">
                            {isOverviewAutoPlay ? (language === 'fa' ? 'پخش خودکار' : 'Auto') : (language === 'fa' ? 'اسلاید' : 'Slide')}
                          </span>
                        </button>

                        <button
                          onClick={() => setOverviewSlideIndex((prev) => (prev - 1 + radiatorSlides.length) % radiatorSlides.length)}
                          className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-colors cursor-pointer"
                          title={language === 'fa' ? 'اسلاید قبلی' : 'Previous Slide'}
                        >
                          {isRtl ? <ArrowRight className="w-3.5 h-3.5" /> : <ArrowLeft className="w-3.5 h-3.5" />}
                        </button>

                        <span className="text-[11px] font-mono text-slate-400 px-1.5">
                          {overviewSlideIndex + 1} / {radiatorSlides.length}
                        </span>

                        <button
                          onClick={() => setOverviewSlideIndex((prev) => (prev + 1) % radiatorSlides.length)}
                          className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-colors cursor-pointer"
                          title={language === 'fa' ? 'اسلاید بعدی' : 'Next Slide'}
                        >
                          {isRtl ? <ArrowLeft className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
                        </button>
                      </div>

                    </div>

                    {/* CURRENT ACTIVE SLIDE CONTENT WITH ANIMATION */}
                    <div className="relative overflow-hidden min-h-[340px]">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={activeSlide.id}
                          initial={{ opacity: 0, x: isRtl ? -25 : 25 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: isRtl ? 25 : -25 }}
                          transition={{ duration: 0.28, ease: 'easeOut' }}
                          className="space-y-4"
                        >
                          {/* Slide Top Badges */}
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <div className="flex flex-wrap items-center gap-2">
                              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold">
                                <Flame className="w-3.5 h-3.5" />
                                <span>{activeSlide.badge[language]}</span>
                              </div>

                              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-slate-900 border border-amber-500/30 text-amber-300 text-[11px] font-bold">
                                <Sparkles className="w-3 h-3 text-amber-400" />
                                <span>{activeSlide.tag[language]}</span>
                              </div>
                            </div>

                            {/* Metric Chip */}
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-slate-900/90 border border-slate-700/80 text-xs">
                              <span className="text-[11px] text-slate-400 font-medium">
                                {activeSlide.metric.label[language]}:
                              </span>
                              <span className="font-mono font-black text-amber-300">
                                {activeSlide.metric.value}
                              </span>
                            </div>
                          </div>

                          {/* Slide Title & Description */}
                          <div className="space-y-2">
                            <h3 className="text-lg sm:text-xl lg:text-2xl font-black text-white tracking-tight leading-snug">
                              {activeSlide.title[language]}
                            </h3>
                            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                              {activeSlide.desc[language]}
                            </p>
                          </div>

                          {/* 3 Interactive Highlight Cards for this Slide */}
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                            {activeSlide.features.map((feat, fIdx) => {
                              const FeatIcon = feat.icon;
                              return (
                                <div
                                  key={fIdx}
                                  className="p-3.5 rounded-2xl bg-slate-900/70 border border-slate-800/90 hover:border-amber-500/40 transition-all flex flex-col justify-between group shadow-sm hover:shadow-md"
                                >
                                  <div>
                                    <div className="flex items-center justify-between mb-2">
                                      <div className="p-2 rounded-xl bg-amber-500/15 text-amber-400 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                                        <FeatIcon className="w-4 h-4" />
                                      </div>
                                      <span className="text-[9px] font-mono text-amber-400 bg-amber-500/10 px-1.5 py-0.5 rounded border border-amber-500/20">
                                        {feat.highlight}
                                      </span>
                                    </div>
                                    <h5 className="text-xs font-black text-slate-100 mb-1">
                                      {feat.title[language]}
                                    </h5>
                                    <p className="text-[11px] text-slate-400 leading-relaxed">
                                      {feat.desc[language]}
                                    </p>
                                  </div>
                                </div>
                              );
                            })}
                          </div>

                          {/* Interactive Guide Banner pointing to Thumbnail Gallery */}
                          <div className="p-3 rounded-2xl bg-gradient-to-r from-amber-500/10 via-slate-900/90 to-amber-500/10 border border-amber-500/30 flex items-center justify-between gap-3">
                            <div className="flex items-center gap-2.5">
                              <div className="p-1.5 rounded-lg bg-amber-500/20 text-amber-400 shrink-0">
                                <Info className="w-4 h-4" />
                              </div>
                              <span className="text-xs text-slate-200 font-medium leading-relaxed">
                                {language === 'fa'
                                  ? 'برای مشاهده مشخصات فنی، ابعاد دقیق، توان حرارتی و فینیش‌های هر مدل، روی عکس‌های گالری روبرو کلیک فرمایید.'
                                  : language === 'ar'
                                  ? 'لعرض المواصفات الفنية والأبعاد الدقيقة والقدرة الحرارية، يرجى النقر على صور المعرض المجاور.'
                                  : 'To inspect technical specifications, exact dimensions, heat output and finishes of each model, click any thumbnail in the gallery.'}
                              </span>
                            </div>
                            <span className="text-[11px] font-bold text-amber-300 font-mono shrink-0 hidden md:inline">
                              {filteredModels.length} {language === 'fa' ? 'مدل آماده انتخاب' : 'Models Available'}
                            </span>
                          </div>

                          {/* Slide Bottom Action Buttons */}
                          <div className="pt-2 flex flex-wrap items-center justify-between gap-3 border-t border-slate-800">
                            <div className="flex flex-wrap items-center gap-2.5">
                              <button
                                onClick={() => onOpenConsultation('مشاوره تخصصی رادیاتورهای دکوراتیو')}
                                className="lux-btn-gold px-5 py-2.5 rounded-xl text-xs font-black flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-amber-500/20"
                              >
                                <Flame className="w-3.5 h-3.5 text-slate-950" />
                                <span>
                                  {language === 'fa' 
                                    ? 'مشاوره تخصصی با مهندس تأسیسات و معمار' 
                                    : 'Consult with HVAC Engineer & Architect'}
                                </span>
                              </button>

                              <button
                                onClick={() => setInfoTab('comparison')}
                                className="lux-btn-outline px-4 py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 cursor-pointer"
                              >
                                <Table2 className="w-3.5 h-3.5 text-amber-400" />
                                <span>
                                  {language === 'fa' 
                                    ? `جدول مقایسه فنی (${RADIATOR_MODELS.length} مدل)` 
                                    : `Comparison Matrix (${RADIATOR_MODELS.length})`}
                                </span>
                              </button>
                            </div>

                            {/* Next slide prompt button */}
                            <button
                              onClick={() => setOverviewSlideIndex((prev) => (prev + 1) % radiatorSlides.length)}
                              className="px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-amber-300 hover:text-amber-200 text-xs font-bold flex items-center gap-1.5 border border-amber-500/30 transition-all cursor-pointer"
                            >
                              <span>{language === 'fa' ? 'اسلاید بعدی' : 'Next Slide'}</span>
                              {isRtl ? <ArrowLeft className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
                            </button>
                          </div>

                        </motion.div>
                      </AnimatePresence>
                    </div>

                  </div>
                )}

                {/* TAB CONTENT 2: COMPARISON TABLE (ماتریس مقایسه فنی) */}
                {infoTab === 'comparison' && (
                  <div className="space-y-4 animate-in fade-in duration-200">
                    
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-3.5 rounded-2xl bg-slate-950/60 border border-slate-800">
                      <div>
                        <h4 className="text-sm sm:text-base font-black text-white flex items-center gap-2">
                          <Table2 className="w-4 h-4 text-amber-400" />
                          <span>
                            {language === 'fa'
                              ? `ماتریس مقایسه فنی و معماری ${RADIATOR_MODELS.length} شاهکار رادیاتور استیلکس`
                              : `Technical & Architectural Matrix (${RADIATOR_MODELS.length} Models)`}
                          </span>
                        </h4>
                        <p className="text-[11px] text-slate-400 mt-0.5">
                          {language === 'fa'
                            ? 'بررسی ابعاد، توان حرارتی، متراژ پوشش و آلیاژ استیل نگیر بر اساس استاندارد مهندسی STELLEX'
                            : 'Dimensions, thermal wattage, coverage and alloy grades'}
                        </p>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-lg bg-amber-500/10 text-amber-300 border border-amber-500/30">
                          {RADIATOR_MODELS.length} {language === 'fa' ? 'طرح اختصاصی' : 'Designs'}
                        </span>
                        <button
                          onClick={() => onOpenConsultation('مشاوره جدول مقایسه رادیاتورها')}
                          className="px-3 py-1.5 rounded-xl text-[11px] font-bold bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 transition-all flex items-center gap-1 cursor-pointer"
                        >
                          <span>{language === 'fa' ? 'مشاوره مهندسی' : 'Consult Engineer'}</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    {/* Table Container with Smooth Scroll and Sticky Header */}
                    <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-950/70 shadow-inner max-h-[460px] overflow-y-auto scrollbar-thin scrollbar-thumb-slate-700">
                      <table className="w-full text-right rtl:text-right ltr:text-left text-xs border-collapse">
                        <thead className="sticky top-0 bg-slate-950 z-10 shadow-sm border-b border-slate-800 text-slate-400 font-bold">
                          <tr className="bg-slate-950">
                            <th className="py-2.5 px-3 whitespace-nowrap">{language === 'fa' ? 'مدل و کد تجاری' : 'Model & Code'}</th>
                            <th className="py-2.5 px-3 whitespace-nowrap">{language === 'fa' ? 'ابعاد (H×W)' : 'Dimensions'}</th>
                            <th className="py-2.5 px-3 whitespace-nowrap">{language === 'fa' ? 'توان (وات)' : 'Wattage'}</th>
                            <th className="py-2.5 px-3 whitespace-nowrap">{language === 'fa' ? 'متراژ پوشش' : 'Coverage'}</th>
                            <th className="py-2.5 px-3 whitespace-nowrap">{language === 'fa' ? 'گرید آلیاژ' : 'Alloy'}</th>
                            <th className="py-2.5 px-3 whitespace-nowrap">{language === 'fa' ? 'فضای پیشنهادی' : 'Recommended Room'}</th>
                            <th className="py-2.5 px-3 text-center whitespace-nowrap">{language === 'fa' ? 'عملیات' : 'Action'}</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800/60">
                          {RADIATOR_MODELS.map((m) => (
                            <tr
                              key={m.id}
                              onClick={() => setSelectedModelId(m.id)}
                              className="hover:bg-slate-800/50 transition-colors cursor-pointer group"
                            >
                              <td className="py-2.5 px-3 font-bold text-white flex items-center gap-2.5">
                                <img
                                  src={m.image}
                                  alt={m.name[language]}
                                  className="w-8 h-8 rounded-lg object-cover border border-slate-700 shrink-0 group-hover:border-amber-400/80 transition-colors"
                                />
                                <div className="min-w-0">
                                  <span className="block text-amber-300 font-mono text-[9px]">{m.modelCode}</span>
                                  <span className="block text-[11px] truncate max-w-[150px] group-hover:text-amber-200">{m.name[language]}</span>
                                </div>
                              </td>
                              <td className="py-2.5 px-3 text-slate-300 font-mono text-[11px] whitespace-nowrap">
                                {m.dimensions.height} × {m.dimensions.width}
                              </td>
                              <td className="py-2.5 px-3 whitespace-nowrap">
                                <span className="font-mono font-bold text-amber-400 bg-amber-500/10 px-1.5 py-0.5 rounded text-[11px]">
                                  {m.thermalOutput.wattage}
                                </span>
                              </td>
                              <td className="py-2.5 px-3 text-slate-300 text-[11px] whitespace-nowrap">
                                {m.thermalOutput.coverageArea}
                              </td>
                              <td className="py-2.5 px-3 text-slate-300 text-[11px] whitespace-nowrap">
                                {m.alloyGrade[language].split('(')[0]}
                              </td>
                              <td className="py-2.5 px-3 text-slate-300 text-[10px] max-w-[140px] truncate">
                                {m.roomSuitability[0][language]}
                              </td>
                              <td className="py-2.5 px-3 text-center whitespace-nowrap">
                                <div className="flex items-center justify-center gap-1" onClick={(e) => e.stopPropagation()}>
                                  <button
                                    onClick={() => setSelectedModelId(m.id)}
                                    className="px-2 py-1 rounded-lg text-[10px] font-bold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 hover:border-amber-400/50 transition-colors cursor-pointer"
                                    title={language === 'fa' ? 'نمایش در کارت بالا' : 'View in Card'}
                                  >
                                    <Eye className="w-3 h-3 text-amber-400 inline me-1" />
                                    <span>{language === 'fa' ? 'نمایش' : 'View'}</span>
                                  </button>
                                  <button
                                    onClick={() => onOpenConsultation(m.name[language])}
                                    className="px-2 py-1 rounded-lg text-[10px] font-bold bg-amber-500 hover:bg-amber-400 text-slate-950 transition-colors cursor-pointer"
                                  >
                                    {language === 'fa' ? 'سفارش' : 'Order'}
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    {/* Table Footer Helper & Guarantee */}
                    <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 text-[11px] text-slate-400">
                      <div className="flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>
                          {language === 'fa'
                            ? `تمامی ${RADIATOR_MODELS.length} مدل فوق با ضمانت تعویض ۱۵ ساله شرکتی و تست هیدرواستاتیک ۱۶ بار عرضه می‌گردند.`
                            : `All ${RADIATOR_MODELS.length} models are covered by a 15-year replacement warranty and 16-bar pressure testing.`}
                        </span>
                      </div>

                      <button
                        onClick={() => setInfoTab('overview')}
                        className="text-amber-400 hover:text-amber-300 font-bold underline transition-colors cursor-pointer shrink-0"
                      >
                        {language === 'fa' ? 'بازگشت به معرفی دپارتمان' : 'Back to Overview'}
                      </button>
                    </div>

                  </div>
                )}

              </div>

            )}

          </div>

        </div>

      </div>

      {/* Architectural Engineering Catalog Modal with Send Catalog to WhatsApp */}
      {modalModel && (
        <EngineeringCatalogModal
          item={{
            id: modalModel.id,
            name: modalModel.name,
            modelCode: modalModel.modelCode,
            categoryTitle: {
              fa: 'رادیاتورهای دکوراتیو و استیلکس آرشیتکتورال',
              ar: 'مشعات ديكور ستانلس ستيل فاخرة',
              en: 'STELLEX Luxury Stainless Steel Radiators',
            },
            badge: modalModel.badge,
            image: modalModel.image,
            detailImages: modalModel.detailImages,
            description: modalModel.description,
            alloyGrade: modalModel.alloyGrade,
            warrantyYears: modalModel.warrantyYears || 10,
            priceToman: modalModel.priceToman,
            finish: modalModel.availableFinishes?.length ? {
              fa: modalModel.availableFinishes.map(f => f[language]).join(' / '),
              ar: modalModel.availableFinishes.map(f => f[language]).join(' / '),
              en: modalModel.availableFinishes.map(f => f[language]).join(' / '),
            } : undefined,
            dimensions: {
              height: modalModel.dimensions.height,
              width: modalModel.dimensions.width,
              depth: modalModel.dimensions.depth,
              pipeCenterDistance: modalModel.dimensions.pipeCenterDistance,
            },
            thermalOutput: modalModel.thermalOutput,
            keyFeatures: modalModel.keyFeatures,
            architecturalTip: modalModel.interiorDesignTip,
            pinterestInspiration: modalModel.pinterestInspiration,
          }}
          onClose={() => setModalModel(null)}
          onOpenGallery={onOpenGallery}
          onOpenConsultation={onOpenConsultation}
        />
      )}
    </div>
  );
};
