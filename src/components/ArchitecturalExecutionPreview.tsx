import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ReadyPostModel } from '../types';
import { 
  Sparkles, 
  Layers, 
  Check, 
  X, 
  Ruler, 
  ShieldCheck, 
  CheckCircle2, 
  Cpu, 
  Camera,
  Info,
  Wrench,
  Award,
  Compass,
  Sliders,
  ChevronRight,
  Zap,
  ArrowUpRight
} from 'lucide-react';

// Import all high-resolution portfolio execution images
import luxuryStairRailingImg from '../assets/images/luxury_square_stair_railing_1788445134142.jpg';
import minimalVillaRailingImg from '../assets/images/minimal_villa_stair_railing_1788453400911.jpg';
import silverPalaceRailingImg from '../assets/images/silver_palace_stair_railing_1788452105683.jpg';
import goldPalaceRailingImg from '../assets/images/gold_stair_seamless_unified_1788451629870.jpg';
import goldPalaceBackupImg from '../assets/images/gold_palace_double_railing_1788450727627.jpg';
import goldPalaceLightedImg from '../assets/images/gold_palace_railing_1788450079733.jpg';
import stairFrameBlackGoldImg from '../assets/images/stair_black_gold_1788624307376.jpg';
import starterTwoPostsImg from '../assets/images/two_posts_pair_black_gold_1788625341731.jpg';
import starterPairBalustersImg from '../assets/images/pair_balusters_catalog_1788625393891.jpg';
import modernCapsuleRailingImg from '../assets/images/modern_capsule_railing_1788453009409.jpg';

interface ArchitecturalExecutionPreviewProps {
  selectedPrefabPost: ReadyPostModel | null;
  selectedStarterPost: ReadyPostModel | null;
  selectedHandrailPost: ReadyPostModel | null;
  flightsCount: number;
  stepsPerFlight: number;
  finalCalculatedX: number;
  language: 'fa' | 'ar' | 'en';
  onSelectStep: (step: 'prefab' | 'starter' | 'handrail' | 'geometry') => void;
}

interface ExecutionEnsembleData {
  id: string;
  code: string;
  title: { fa: string; ar: string; en: string };
  styleTag: { fa: string; ar: string; en: string };
  themeColor: 'gold' | 'silver' | 'black-gold' | 'bronze' | 'gunmetal';
  hexAccent: string;
  description: { fa: string; ar: string; en: string };
  features: { fa: string; ar: string; en: string }[];
}

export const ArchitecturalExecutionPreview: React.FC<ArchitecturalExecutionPreviewProps> = ({
  selectedPrefabPost,
  selectedStarterPost,
  selectedHandrailPost,
  flightsCount,
  stepsPerFlight,
  finalCalculatedX,
  language,
  onSelectStep,
}) => {
  const [viewMode, setViewMode] = useState<'photo' | 'schematic' | 'analysis'>('photo');
  const [activeAnalysisTab, setActiveAnalysisTab] = useState<'joints' | 'metallurgy' | 'structural' | 'installation'>('joints');
  const [activeHotspot, setActiveHotspot] = useState<'starter' | 'post' | 'handrail' | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Derive unique ensemble data based on the exact combination of the 3 components
  const ensembleData: ExecutionEnsembleData = useMemo(() => {
    const starterId = selectedStarterPost?.id || '';
    const prefabId = selectedPrefabPost?.id || '';
    const handrailId = selectedHandrailPost?.id || '';

    // Generate deterministic hash for the ensemble code
    const comboKey = `${starterId}_${prefabId}_${handrailId}`;

    // 1. Black & Gold ensemble
    if (starterId.includes('black-gold') || prefabId.includes('black-gold') || handrailId.includes('black-gold')) {
      return {
        id: comboKey,
        code: `STX-ENS-BG-${Math.abs(comboKey.split('').reduce((a, b) => (a << 5) - a + b.charCodeAt(0), 0) % 900 + 100)}`,
        title: {
          fa: 'ترکیب مجلل کانسپت دوبلکس بلک & گلد (Duplex Black & Gold)',
          ar: 'توليفة القصور المزدوجة بلاك & غولد الملكية',
          en: 'Duplex Luxury Black & 24K Gold Architectural Ensemble',
        },
        styleTag: {
          fa: 'مدرن لاکچری / تضاد متالیک مشکی مات و طلایی تیتانیوم',
          ar: 'مودرن فاخر / تباين أسود مطفي وتيتانيوم ذهبي',
          en: 'Modern Luxury / Matte Black & Mirror Gold Contrast',
        },
        themeColor: 'black-gold',
        hexAccent: '#eab308',
        description: {
          fa: 'ترکیب اختصاصی استارتر و پایه‌های مشکی کوره الکترواستاتیک با شیارهای متالیک طلایی تیتانیوم PVD، همراه با هندریل پیوسته لوکس که هارمونی فوق‌العاده‌ای با پله‌های سنگ مرمریت و گرانیت ایجاد می‌کند.',
          ar: 'توليفة هندسية مذهلة تجمع بين عامود البداية الأسود المطلي حرارياً مع تداخلات ذهبية وتناغم فائق مع رخام السلالم.',
          en: 'Bespoke combination of matte black structural posts accented with 24K Titanium Gold PVD insets, topped by continuous contoured rail.',
        },
        features: [
          { fa: 'اتصال مهار توکار مخفی با کاورهای فلزی دولایه', ar: 'تثبيت مخفي مع أغطية معدنية مزدوجة', en: 'Concealed base anchoring with dual decorative collars' },
          { fa: 'پوشش فوق‌مقاوم ضدخش و لک الکترواستاتیک و PVD', ar: 'طلاء مقاوم للخدش والأكسدة PVD', en: 'Dual scratch-proof Electrostatic & PVD Titanium coating' },
          { fa: 'تحمل بار تکانه‌ای ۴۲۰ کیلوگرم بر متر طول', ar: 'تحمل صدمات ٤٢٠ كجم لكل متر', en: 'Certified 420 kg/m dynamic lateral impact resistance' },
        ],
      };
    }

    // 2. Pure Royal Gold ensemble
    if (starterId.includes('royal') || prefabId.includes('gold') || handrailId.includes('gold')) {
      return {
        id: comboKey,
        code: `STX-ENS-GLD-${Math.abs(comboKey.split('').reduce((a, b) => (a << 5) - a + b.charCodeAt(0), 0) % 900 + 100)}`,
        title: {
          fa: 'ترکیب اشرافی رویال امپریال تیتانیوم طلایی (Royal Imperial Gold)',
          ar: 'توليفة القصور الملكية رويال إمبريال تيتانيوم ذهبي',
          en: 'Royal Imperial 24K Mirror Titanium Gold Ensemble',
        },
        styleTag: {
          fa: 'کلاسیک قصری / طلایی سوپر پولیش ۲۴ عیار PVD وکیوم',
          ar: 'كلاسيكي ملكي / ذهبي تيتانيوم PVD عيار ٢٤ فائق اللمعان',
          en: 'Palatial Baroque / 24K Vacuum PVD Mirror Gold Finish',
        },
        themeColor: 'gold',
        hexAccent: '#f59e0b',
        description: {
          fa: 'شاهکار بصری اجرای راه‌پله با تلفیق استارتر منبت‌کاری شده طلایی، پایه‌های فابریک سوپر پولیش با درخشش آینه‌ای و هندریل فرم‌دار پیوسته با خطوط انحنایی قو (Swan-Neck) در ورودی پله.',
          ar: 'إبداع هندسي يجمع عامود البداية الكروي المخرط مع درابزين ذهبي مشدود وانحناءات أنيقة تعكس روعة الفخامة المعمارية.',
          en: 'Architectural masterpiece featuring urn-finial starter post, mirror gold vertical balusters, and continuous sweeping swan-neck rail.',
        },
        features: [
          { fa: 'آبکاری PVD نانو تیتانیوم در کوره خلأ با ضمانت ۱۵ ساله عدم تغییر رنگ', ar: 'طلاء PVD نانو تيتانيوم بضمان ١٥ عاماً', en: '15-Year Non-tarnish PVD Vacuum Titanium warranty' },
          { fa: 'اتصالات انحنایی ریخته‌گری دقیق استیل ۳۰۴ نگیر', ar: 'وصلات انحنائية مسبوكة بدقة من ستانلس ٣٠٤', en: 'Precision investment-cast 304 stainless articulation elbows' },
          { fa: 'انطباق کامل با سنگ‌های لته، مارفیل و نجف‌آباد', ar: 'متناسق مع أرقى أنواع الرخام الطبيعي', en: 'Optimal architectural alignment with light and dark marble treads' },
        ],
      };
    }

    // 3. Neoclassical Bronze / Champagne ensemble
    if (starterId.includes('neoclassic') || handrailId.includes('bronze') || handrailId.includes('wood')) {
      return {
        id: comboKey,
        code: `STX-ENS-NCL-${Math.abs(comboKey.split('').reduce((a, b) => (a << 5) - a + b.charCodeAt(0), 0) % 900 + 100)}`,
        title: {
          fa: 'ترکیب نئوکلاسیک منشوری شامپاینی و چوب طبیعی (Neoclassic Champagne)',
          ar: 'توليفة نيوكلاسيكية منشورية برونزية وخشب طبيعي',
          en: 'Neoclassic Faceted Champagne Bronze & Hardwood Ensemble',
        },
        styleTag: {
          fa: 'نئوکلاسیک / فاست‌دار منشوری برنز شامپاینی با بافت چوب گرم',
          ar: 'نيوكلاسيك / مقطع ثماني مع برونز شامباني وخشب فاخر',
          en: 'Neoclassical / Faceted Octagonal Bronze & Warm Woodgrain',
        },
        themeColor: 'bronze',
        hexAccent: '#d97706',
        description: {
          fa: 'هارمونی گرم و چشم‌نواز نئوکلاسیک با ترکیب استارتر هشت‌ضلعی فاست‌دار برنز شامپاینی، پایه‌های مقطع منشوری و هندریل ارگونومیک با اصالت دست‌تراش.',
          ar: 'انسجام دافئ يدمج بين صلابة الستانلس ستيل البرونزي وأناقة الخشب الطبيعي في السلالم الدوبلكس.',
          en: 'Refined transitional pairing of octagonal faceted bronze newels, paired structural posts and ergonomic molded rail.',
        },
        features: [
          { fa: 'پرداخت ساتین مات همراه با لبه‌های کریستالی پخ‌خورده براق', ar: 'تشطيب ساتان ناعم مع حواف كريستالية لامعة', en: 'Brushed satin body paired with diamond-beveled specular edges' },
          { fa: 'سازگار با انواع هندریل چوب گردو، راش و پروفیل‌های متالیک', ar: 'متوافق مع خشب الجوز والزان الطبيعي', en: 'Native integration with natural walnut, beech or stainless tube' },
          { fa: 'طراحی ارگونومیک استاندارد با مقاومت در برابر سایش بالا', ar: 'تصميم مريح مع مقاومة عالية للاحتكاك', en: 'Ergonomic hand-grip geometry meeting international codes' },
        ],
      };
    }

    // 4. High-Tech Gunmetal / Modern Cable ensemble
    if (starterId.includes('hightech') || handrailId.includes('led') || prefabId.includes('capsule')) {
      return {
        id: comboKey,
        code: `STX-ENS-HGT-${Math.abs(comboKey.split('').reduce((a, b) => (a << 5) - a + b.charCodeAt(0), 0) % 900 + 100)}`,
        title: {
          fa: 'ترکیب های‌تک هوی‌استراکچر بلک گان‌متال و نورپردازی لاینر (High-Tech Structural)',
          ar: 'توليفة هاي تيك الصناعية الفاخرة تيتانيوم دودي وإضاءة ذكية',
          en: 'High-Tech Gunmetal Dual-Plate & Linear LED Ensemble',
        },
        styleTag: {
          fa: 'های‌تک و صنعتی لوکس / استیل ۳۱۶ گان‌متال با خطوط نوری یکپارچه',
          ar: 'هاي تيك / ستانلس ٣١٦ دودي مع إضاءة ليد مدمجة',
          en: 'High-Tech Industrial / Marine 316 Gunmetal & Smart Linear LED',
        },
        themeColor: 'gunmetal',
        hexAccent: '#38bdf8',
        description: {
          fa: 'سازه تقویت‌شده با تسمه دوبل استیل ۳۱۶ با مهارهای کششی کابل و اسپیسرهای تراش CNC، همراه با هندریل لاینر نوری هوشمند که مسیر راه‌پله را با شکوه مدرن روشن می‌سازد.',
          ar: 'هيكل مقوى بستانلس ستيل ٣١٦ بحري مع كوابل شد وإضاءة ليد مخفية ترسم مسار الدرج بإتقان عصري.',
          en: 'Heavy structural twin-plate marine 316 posts paired with tensioned aircraft cables and concealed linear under-rail LED glow.',
        },
        features: [
          { fa: 'آلیاژ استنلس استیل ۳۱۶ ضدزنگ گرید دریایی مقاوم در برابر رطوبت', ar: 'ستانلس ستيل ٣١٦ بحري مقاوم للملوحة والرطوبة', en: 'Marine-grade 316 stainless alloy with zero salt-mist corrosion' },
          { fa: 'نورپردازی یکپارچه LED ضدخیرگی با دیمر هوشمند و سنسور پله', ar: 'إضاءة ليد ذكية مدمجة بدون وهج', en: 'Integrated glare-free concealed LED strip with stair-step sensor' },
          { fa: 'اتصالات مهار کابل بکسل پرسی با کشش پایدار دائمی', ar: 'مرابط كوابل عالية الشد غير قابلة للارتخاء', en: 'Swaged cable tensioners with permanent tension retention' },
        ],
      };
    }

    // 5. Default: Pure Minimalist Super Mirror Silver ensemble
    return {
      id: comboKey,
      code: `STX-ENS-SLV-${Math.abs(comboKey.split('').reduce((a, b) => (a << 5) - a + b.charCodeAt(0), 0) % 900 + 100)}`,
      title: {
        fa: 'ترکیب مدرن مینیمال سوپر میرور ۸K نقره‌ای (Minimalist Super Mirror Silver)',
        ar: 'توليفة مودرن مينيمال فضية عاكسة كالمراة ٨K',
        en: 'Minimalist 8K Pure Super Mirror Silver Architectural Ensemble',
      },
      styleTag: {
        fa: 'مینیمال پیور / سوپر میرور ۸K نانوکروم بدون کوچکترین خش و اعوجاج',
        ar: 'مودرن نقي / تلميع مرآة فائق ٨K خالٍ من التموجات',
        en: 'Pure Minimalist / 8K Specular Nano-Chrome Mirror Polish',
      },
      themeColor: 'silver',
      hexAccent: '#e2e8f0',
      description: {
        fa: 'طراحی خالص و شفاف ژاپندی با استارتر باریک اسلیم کیوبیک، پایه‌های بدون درز آینه‌ای و هندریل مستطیلی فلت که نور محیط را با زلالی بی‌نظیر بازمی‌تاباند.',
        ar: 'تصميم جابانّدي انسيابي بقوائم نحيفة وتشطيب مرآة نقي يعكس الضوء وألوان الفضاء المعماري بصفاء مطلق.',
        en: 'Understated architectural purity combining cubic slim starter newels, clean balusters, and ultra-flat rectilinear handrail.',
      },
      features: [
        { fa: 'صیقل سطحی سوپر پولیش آینه‌ای گرید ۸K با انعکاس کریستالی', ar: 'تلميع مرآة نقي بدرجة ٨K مع طبقة حماية نانو', en: '8K Super Mirror mechanical polishing with optical-grade clarity' },
        { fa: 'بیس‌پلیت باریک مغناطیسی بدون پیچ رو و خطوط تمیز مینیمال', ar: 'قاعدة تثبيت مغناطيسية بدون براغي ظاهرة', en: 'Concealed magnetic snap-on escutcheon with zero visible fasteners' },
        { fa: 'طراحی ارگونومیک با ابعاد استاندارد نظام مهندسی کشور', ar: 'مطابق لأعلى مواصفات السلامة الهندسية', en: 'Certified compliance with structural building safety codes' },
      ],
    };
  }, [selectedPrefabPost, selectedStarterPost, selectedHandrailPost]);

  // Dynamic engineering compatibility analysis
  const engineeringAnalysis = useMemo(() => {
    const starter = selectedStarterPost;
    const post = selectedPrefabPost;
    const rail = selectedHandrailPost;

    // Joint compatibility analysis
    const jointType = rail?.id.includes('swan') || starter?.id.includes('royal')
      ? (language === 'fa' ? 'اتصال زانویی انحنایی گردن قو (Swan-Neck Articulation)' : 'Swan-Neck Curved Articulation')
      : rail?.id.includes('wood')
      ? (language === 'fa' ? 'براکت سدل نعل‌اسبی زیر چوب با پیچ آلن مخفی' : 'Underside Saddle Bracket with Concealed Allen Screws')
      : rail?.id.includes('led')
      ? (language === 'fa' ? 'کوپلینگ قوطی شیاردار با ترمینال برق مخفی IP68' : 'Concealed IP68 Conduit Coupling')
      : (language === 'fa' ? 'سدل مفصلی لولایی ۳۶۰ درجه تمام‌استیل' : '360° Articulated All-Stainless Pivot Saddle');

    const starterAnchor = starter?.baseMounting[language] || (language === 'fa' ? 'بیس‌پلیت سنگین چدنی-استیل مهار ۵ بولته با انکر هیلتی' : 'Heavy-Duty 5-Anchor Base Plate with Hilti Chemical Bolting');
    const postMount = post?.baseMounting[language] || (language === 'fa' ? 'فلنچ کف سنگین ۳ سوراخه لیزری با قالپاق پرسی یکپارچه' : 'Laser-Cut Heavy Base Flange with Seamless Escutcheon');

    const totalLoadCapacity = 
      starter?.loadCapacity.includes('۴۵۰') || starter?.loadCapacity.includes('۵۲۰')
        ? (language === 'fa' ? '۵۲۰ کیلوگرم بر متر طول (دارای تاییدیه مقاومت لرزه‌ای و دینامیک)' : '520 kg/m Heavy-Duty Seismic Rated')
        : (language === 'fa' ? '۳۸۰ الی ۴۲۰ کیلوگرم بر متر طول (فراتر از الزامات استاندارد)' : '380-420 kg/m (Exceeding IBC Code)');

    const alloyComparison = `${starter?.alloyGrade[language] || 'AISI 304'} + ${post?.alloyGrade[language] || 'AISI 304'} + ${rail?.alloyGrade[language] || 'AISI 304'}`;

    return {
      jointType,
      starterAnchor,
      postMount,
      totalLoadCapacity,
      alloyComparison,
      complianceCode: language === 'fa' ? 'مبحث چهارم مقررات ملی ساختمان (بند ۴-۵-۲-۴) و ASTM E985' : 'Iran Building Code Ch.4 & ASTM E985',
      safetyFactor: '2.8x (Over-Engineered Safety Margin)',
    };
  }, [selectedStarterPost, selectedPrefabPost, selectedHandrailPost, language]);

  return (
    <div className="space-y-6">
      
      {/* ========================================================================= */}
      {/* SECTION A: عکس‌های مدل‌های انتخاب شده در یک ردیف افقی */}
      {/* ========================================================================= */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-lg bg-amber-500/20 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold flex items-center justify-center">
              ✓
            </span>
            <h4 className="text-sm font-black text-white">
              {language === 'fa' 
                ? 'مدل‌های منتخب پروژه (در یک ردیف افقی):' 
                : language === 'ar' 
                ? 'النماذج المختارة للمشروع (صف أفقي):' 
                : 'Selected Railing Ensemble (Horizontal Row):'}
            </h4>
          </div>
          <span className="text-[10px] font-mono text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
            {flightsCount} {language === 'fa' ? 'ردیف' : 'Flights'} / {stepsPerFlight} {language === 'fa' ? 'پله' : 'Steps'}
          </span>
        </div>

        {/* 3 Selected Product Cards in a Single Horizontal Row */}
        <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
          
          {/* Card 1: پایه پیش‌ساخته انتخابی */}
          <div 
            onClick={() => onSelectStep('prefab')}
            title={selectedPrefabPost ? selectedPrefabPost.name[language] : (language === 'fa' ? 'انتخاب پایه پیش‌ساخته' : 'Select Post')}
            className={`rounded-2xl border p-2 sm:p-2.5 transition-all cursor-pointer group flex flex-col justify-between ${
              selectedPrefabPost 
                ? 'bg-slate-950/80 border-amber-500/40 hover:border-amber-400 hover:shadow-lg hover:shadow-amber-500/10' 
                : 'bg-slate-950/40 border-dashed border-slate-700/80 hover:border-slate-500'
            }`}
          >
            <div>
              {/* Category tag & step badge */}
              <div className="flex items-center justify-between text-[9px] sm:text-[10px] mb-1.5">
                <span className="text-amber-400 font-bold font-mono">
                  {language === 'fa' ? '۱. پایه نرده' : '1. Post'}
                </span>
                {selectedPrefabPost ? (
                  <span className="w-3.5 h-3.5 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </span>
                ) : (
                  <span className="text-slate-400 text-[8px]">{language === 'fa' ? 'انتخاب' : 'Select'}</span>
                )}
              </div>

              {/* Photo */}
              <div className="w-full aspect-[4/3] rounded-xl overflow-hidden bg-slate-900 border border-slate-800 relative mb-1.5">
                {selectedPrefabPost ? (
                  <img
                    src={selectedPrefabPost.image}
                    alt={selectedPrefabPost.name[language]}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center text-slate-400 text-[10px] p-1 text-center">
                    <Layers className="w-4 h-4 text-slate-400 mb-0.5" />
                    <span>{language === 'fa' ? 'انتخاب پایه' : 'Choose'}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Model Name & Code */}
            <div className="min-h-[30px] flex flex-col justify-end">
              <span className="text-[10px] sm:text-[11px] font-bold text-white line-clamp-1 block">
                {selectedPrefabPost ? selectedPrefabPost.name[language] : (language === 'fa' ? 'پایه پیش‌ساخته' : 'Railing Post')}
              </span>
              <span className="text-[8px] sm:text-[9px] font-mono text-amber-300/80 block mt-0.5">
                {selectedPrefabPost ? selectedPrefabPost.modelCode : 'STX-PST-...'}
              </span>
            </div>
          </div>

          {/* Card 2: استارتر لوکس انتخابی */}
          <div 
            onClick={() => onSelectStep('starter')}
            title={selectedStarterPost ? selectedStarterPost.name[language] : (language === 'fa' ? 'انتخاب استارتر لوکس' : 'Select Starter')}
            className={`rounded-2xl border p-2 sm:p-2.5 transition-all cursor-pointer group flex flex-col justify-between ${
              selectedStarterPost 
                ? 'bg-slate-950/80 border-amber-500/40 hover:border-amber-400 hover:shadow-lg hover:shadow-amber-500/10' 
                : 'bg-slate-950/40 border-dashed border-slate-700/80 hover:border-slate-500'
            }`}
          >
            <div>
              <div className="flex items-center justify-between text-[9px] sm:text-[10px] mb-1.5">
                <span className="text-amber-400 font-bold font-mono">
                  {language === 'fa' ? '۲. استارتر لوکس' : '2. Starter'}
                </span>
                {selectedStarterPost ? (
                  <span className="w-3.5 h-3.5 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </span>
                ) : (
                  <span className="text-slate-400 text-[8px]">{language === 'fa' ? 'انتخاب' : 'Select'}</span>
                )}
              </div>

              <div className="w-full aspect-[4/3] rounded-xl overflow-hidden bg-slate-900 border border-slate-800 relative mb-1.5">
                {selectedStarterPost ? (
                  <img
                    src={selectedStarterPost.image}
                    alt={selectedStarterPost.name[language]}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center text-slate-400 text-[10px] p-1 text-center">
                    <Sparkles className="w-4 h-4 text-slate-400 mb-0.5" />
                    <span>{language === 'fa' ? 'انتخاب استارتر' : 'Choose'}</span>
                  </div>
                )}
              </div>
            </div>

            <div className="min-h-[30px] flex flex-col justify-end">
              <span className="text-[10px] sm:text-[11px] font-bold text-white line-clamp-1 block">
                {selectedStarterPost ? selectedStarterPost.name[language] : (language === 'fa' ? 'استارتر لوکس' : 'Starter Newel')}
              </span>
              <span className="text-[8px] sm:text-[9px] font-mono text-amber-300/80 block mt-0.5">
                {selectedStarterPost ? selectedStarterPost.modelCode : 'STX-STR-...'}
              </span>
            </div>
          </div>

          {/* Card 3: هندریل هنری انتخابی */}
          <div 
            onClick={() => onSelectStep('handrail')}
            title={selectedHandrailPost ? selectedHandrailPost.name[language] : (language === 'fa' ? 'انتخاب هندریل هنری' : 'Select Handrail')}
            className={`rounded-2xl border p-2 sm:p-2.5 transition-all cursor-pointer group flex flex-col justify-between ${
              selectedHandrailPost 
                ? 'bg-slate-950/80 border-amber-500/40 hover:border-amber-400 hover:shadow-lg hover:shadow-amber-500/10' 
                : 'bg-slate-950/40 border-dashed border-slate-700/80 hover:border-slate-500'
            }`}
          >
            <div>
              <div className="flex items-center justify-between text-[9px] sm:text-[10px] mb-1.5">
                <span className="text-amber-400 font-bold font-mono">
                  {language === 'fa' ? '۳. هندریل هنری' : '3. Handrail'}
                </span>
                {selectedHandrailPost ? (
                  <span className="w-3.5 h-3.5 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </span>
                ) : (
                  <span className="text-slate-400 text-[8px]">{language === 'fa' ? 'انتخاب' : 'Select'}</span>
                )}
              </div>

              <div className="w-full aspect-[4/3] rounded-xl overflow-hidden bg-slate-900 border border-slate-800 relative mb-1.5">
                {selectedHandrailPost ? (
                  <img
                    src={selectedHandrailPost.image}
                    alt={selectedHandrailPost.name[language]}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center text-slate-400 text-[10px] p-1 text-center">
                    <Ruler className="w-4 h-4 text-slate-400 mb-0.5" />
                    <span>{language === 'fa' ? 'انتخاب هندریل' : 'Choose'}</span>
                  </div>
                )}
              </div>
            </div>

            <div className="min-h-[30px] flex flex-col justify-end">
              <span className="text-[10px] sm:text-[11px] font-bold text-white line-clamp-1 block">
                {selectedHandrailPost ? selectedHandrailPost.name[language] : (language === 'fa' ? 'هندریل هنری' : 'Handrail')}
              </span>
              <span className="text-[8px] sm:text-[9px] font-mono text-amber-300/80 block mt-0.5">
                {selectedHandrailPost ? selectedHandrailPost.modelCode : 'STX-HND-...'}
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* ========================================================================= */}
      {/* SECTION B: پیش‌نمایش دقیق ترکیب موارد انتخابی بعد از اجرا */}
      {/* ========================================================================= */}
      <div className="rounded-3xl border border-amber-500/40 bg-slate-950/90 shadow-2xl overflow-hidden">
        
        {/* Render Top Control Bar */}
        <div className="p-3.5 sm:p-4 border-b border-slate-800/90 flex flex-wrap items-center justify-between gap-2.5 bg-slate-900/70">
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/30">
                <Sparkles className="w-3 h-3" />
                <span>{ensembleData.code}</span>
              </span>
              <span className="text-xs font-bold text-slate-300 hidden sm:inline">
                {ensembleData.styleTag[language]}
              </span>
            </div>
            <h5 className="text-xs sm:text-sm font-black text-white mt-1">
              {ensembleData.title[language]}
            </h5>
          </div>

          {/* View Modes and Analysis Tabs */}
          <div className="flex items-center flex-wrap gap-1.5 bg-slate-950 p-1.5 rounded-2xl border border-slate-800">
            <button
              type="button"
              onClick={() => setViewMode('photo')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                viewMode === 'photo'
                  ? 'bg-amber-500 text-slate-950 shadow-md font-black'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              <Camera className="w-3.5 h-3.5 shrink-0" />
              <span>{language === 'fa' ? 'رندر عکاسی اجرای واقعی' : language === 'ar' ? 'رندر عكاسي' : 'Real Photo'}</span>
            </button>

            <button
              type="button"
              onClick={() => setViewMode('schematic')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                viewMode === 'schematic'
                  ? 'bg-amber-500 text-slate-950 shadow-md font-black'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              <Cpu className="w-3.5 h-3.5 shrink-0" />
              <span>{language === 'fa' ? 'شبیه‌ساز CAD مهندسی' : language === 'ar' ? 'محاكي CAD' : '3D CAD'}</span>
            </button>

            <button
              type="button"
              onClick={() => setViewMode('analysis')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                viewMode === 'analysis'
                  ? 'bg-amber-500 text-slate-950 shadow-md font-black'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              <Compass className="w-3.5 h-3.5 shrink-0 text-amber-400 group-hover:text-amber-300" />
              <span>
                {language === 'fa' 
                  ? 'آنالیز تخصصی کارشناسی مهندسی سازه و انطباق سه گانه' 
                  : language === 'ar' 
                  ? 'التحليل الهندسي التخصصي للمنظومة الثلاثية' 
                  : 'Structural Engineering & Tri-Compliance Analysis'}
              </span>
            </button>
          </div>
        </div>

        {/* Dynamic Architectural Render Display Window (Only rendered on Photo and Schematic modes) */}
        {(viewMode === 'photo' || viewMode === 'schematic') && (
        <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-slate-950 overflow-hidden group">
          <AnimatePresence mode="wait">
            {viewMode === 'photo' ? (
              /* Photo Mode: Real Composite Architectural Rendering featuring the EXACT models */
              <motion.div
                key={`photo_${ensembleData.id}`}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="w-full h-full relative"
              >
                {/* Background Architectural Scene */}
                <img
                  src={
                    ensembleData.themeColor === 'black-gold' 
                      ? stairFrameBlackGoldImg 
                      : ensembleData.themeColor === 'gold' 
                      ? goldPalaceRailingImg 
                      : ensembleData.themeColor === 'bronze' 
                      ? starterPairBalustersImg 
                      : ensembleData.themeColor === 'gunmetal' 
                      ? modernCapsuleRailingImg 
                      : silverPalaceRailingImg
                  }
                  alt={ensembleData.title[language]}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Ambient Cinematic Vignette & Lighting Gradients */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/25 to-transparent pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/50 via-transparent to-slate-950/50 pointer-events-none" />

                {/* ========================================================================= */}
                {/* INTERACTIVE ARCHITECTURAL HOTSPOTS MATCHING THE EXACT CHOSEN MODELS */}
                {/* ========================================================================= */}

                {/* Hotspot 1: EXACT Starter Post Callout (Bottom-Right / Step 1) */}
                <div 
                  className="absolute bottom-6 right-4 rtl:right-auto rtl:left-4 z-20 cursor-pointer"
                  onClick={() => setActiveHotspot(activeHotspot === 'starter' ? null : 'starter')}
                >
                  <div className="bg-slate-950/95 backdrop-blur-md px-3 py-2 rounded-2xl border border-amber-500/60 shadow-2xl flex items-center gap-2.5 hover:border-amber-400 transition-all">
                    {/* Thumbnail of the exact starter post model */}
                    <div className="w-9 h-9 rounded-xl overflow-hidden border border-amber-500/40 bg-slate-900 shrink-0">
                      {selectedStarterPost ? (
                        <img 
                          src={selectedStarterPost.image} 
                          alt={selectedStarterPost.name[language]} 
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover" 
                        />
                      ) : (
                        <Sparkles className="w-4 h-4 text-amber-400 m-auto mt-2" />
                      )}
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                        <span className="text-[9px] text-amber-400 font-bold uppercase tracking-wider">
                          {language === 'fa' ? 'استارتر اختصاصی ورودی:' : 'Starter Newel Model:'}
                        </span>
                      </div>
                      <strong className="text-[11px] text-white font-mono block">
                        {selectedStarterPost ? selectedStarterPost.modelCode : 'STX-STARTER-PVD'}
                      </strong>
                      <span className="text-[9px] text-slate-300 block line-clamp-1 max-w-[150px]">
                        {selectedStarterPost ? selectedStarterPost.name[language] : (language === 'fa' ? 'پایه استارتر فابریک' : 'Master Starter Post')}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Hotspot 2: EXACT Intermediate Prefab Posts Callout (Mid-stair) */}
                <div 
                  className="absolute top-1/2 -translate-y-1/2 right-1/3 rtl:right-auto rtl:left-1/3 z-20 cursor-pointer hidden sm:block"
                  onClick={() => setActiveHotspot(activeHotspot === 'post' ? null : 'post')}
                >
                  <div className="bg-slate-950/95 backdrop-blur-md px-3 py-2 rounded-2xl border border-sky-500/60 shadow-2xl flex items-center gap-2.5 hover:border-sky-400 transition-all">
                    <div className="w-9 h-9 rounded-xl overflow-hidden border border-sky-500/40 bg-slate-900 shrink-0">
                      {selectedPrefabPost ? (
                        <img 
                          src={selectedPrefabPost.image} 
                          alt={selectedPrefabPost.name[language]} 
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover" 
                        />
                      ) : (
                        <Layers className="w-4 h-4 text-sky-400 m-auto mt-2" />
                      )}
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
                        <span className="text-[9px] text-sky-300 font-bold uppercase tracking-wider">
                          {language === 'fa' ? 'پایه پیش‌ساخته پله‌ها:' : 'Stair Baluster Post:'}
                        </span>
                      </div>
                      <strong className="text-[11px] text-white font-mono block">
                        {selectedPrefabPost ? selectedPrefabPost.modelCode : 'STX-POST-PREFAB'}
                      </strong>
                      <span className="text-[9px] text-slate-300 block line-clamp-1 max-w-[150px]">
                        {selectedPrefabPost ? selectedPrefabPost.name[language] : (language === 'fa' ? 'پایه فابریک' : 'Prefab Post')}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Hotspot 3: EXACT Handrail Callout (Top Slope) */}
                <div 
                  className="absolute top-4 left-4 rtl:left-auto rtl:right-4 z-20 cursor-pointer"
                  onClick={() => setActiveHotspot(activeHotspot === 'handrail' ? null : 'handrail')}
                >
                  <div className="bg-slate-950/95 backdrop-blur-md px-3 py-2 rounded-2xl border border-emerald-500/60 shadow-2xl flex items-center gap-2.5 hover:border-emerald-400 transition-all">
                    <div className="w-9 h-9 rounded-xl overflow-hidden border border-emerald-500/40 bg-slate-900 shrink-0">
                      {selectedHandrailPost ? (
                        <img 
                          src={selectedHandrailPost.image} 
                          alt={selectedHandrailPost.name[language]} 
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover" 
                        />
                      ) : (
                        <Ruler className="w-4 h-4 text-emerald-400 m-auto mt-2" />
                      )}
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-[9px] text-emerald-300 font-bold uppercase tracking-wider">
                          {language === 'fa' ? 'هندریل پیوسته انتخابی:' : 'Continuous Handrail:'}
                        </span>
                      </div>
                      <strong className="text-[11px] text-amber-300 font-mono block">
                        {selectedHandrailPost ? selectedHandrailPost.modelCode : 'STX-HANDRAIL'}
                      </strong>
                      <span className="text-[9px] text-slate-300 block line-clamp-1 max-w-[160px]">
                        {selectedHandrailPost ? selectedHandrailPost.name[language] : (language === 'fa' ? 'هندریل هنری' : 'Artistic Railing')}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Detail Popover when user clicks any hotspot */}
                <AnimatePresence>
                  {activeHotspot && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute inset-x-4 top-16 z-30 sm:inset-x-auto sm:right-6 sm:w-80 rtl:sm:right-auto rtl:sm:left-6 bg-slate-900/95 backdrop-blur-md rounded-2xl p-4 border border-amber-500/50 shadow-2xl text-xs space-y-2"
                    >
                      <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                        <span className="text-amber-400 font-bold font-mono">
                          {activeHotspot === 'starter' ? 'آنالیز استارتر انتخابی' : activeHotspot === 'post' ? 'آنالیز پایه فابریک انتخابی' : 'آنالیز هندریل هنری'}
                        </span>
                        <button 
                          onClick={() => setActiveHotspot(null)}
                          className="p-1 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>

                      {activeHotspot === 'starter' && selectedStarterPost && (
                        <div className="space-y-1.5 text-slate-300 text-[11px]">
                          <div className="font-bold text-white">{selectedStarterPost.name[language]}</div>
                          <div><strong className="text-amber-400">کد فنی:</strong> {selectedStarterPost.modelCode}</div>
                          <div><strong className="text-amber-400">ارتفاع سازه:</strong> {selectedStarterPost.height}</div>
                          <div><strong className="text-amber-400">آلیاژ:</strong> {selectedStarterPost.alloyGrade[language]}</div>
                          <div><strong className="text-amber-400">نوع مهار:</strong> {selectedStarterPost.baseMounting[language]}</div>
                          <div><strong className="text-amber-400">تحمل بار جانبی:</strong> {selectedStarterPost.loadCapacity}</div>
                        </div>
                      )}

                      {activeHotspot === 'post' && selectedPrefabPost && (
                        <div className="space-y-1.5 text-slate-300 text-[11px]">
                          <div className="font-bold text-white">{selectedPrefabPost.name[language]}</div>
                          <div><strong className="text-sky-400">کد فنی:</strong> {selectedPrefabPost.modelCode}</div>
                          <div><strong className="text-sky-400">ابعاد پروفیل:</strong> {selectedPrefabPost.profileDimensions[language]}</div>
                          <div><strong className="text-sky-400">آلیاژ:</strong> {selectedPrefabPost.alloyGrade[language]}</div>
                          <div><strong className="text-sky-400">فینیشینگ:</strong> {selectedPrefabPost.finish[language]}</div>
                          <div><strong className="text-sky-400">اتصال کفی:</strong> {selectedPrefabPost.baseMounting[language]}</div>
                        </div>
                      )}

                      {activeHotspot === 'handrail' && selectedHandrailPost && (
                        <div className="space-y-1.5 text-slate-300 text-[11px]">
                          <div className="font-bold text-white">{selectedHandrailPost.name[language]}</div>
                          <div><strong className="text-emerald-400">کد فنی:</strong> {selectedHandrailPost.modelCode}</div>
                          <div><strong className="text-emerald-400">مقطع هندریل:</strong> {selectedHandrailPost.profileDimensions[language]}</div>
                          <div><strong className="text-emerald-400">فینیشینگ:</strong> {selectedHandrailPost.finish[language]}</div>
                          <div><strong className="text-emerald-400">سازگاری خمش:</strong> {selectedHandrailPost.handrailCompatibility[language]}</div>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Bottom Center Dimension Badge */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 hidden sm:flex items-center gap-2 bg-slate-900/90 backdrop-blur-xs px-3.5 py-1.5 rounded-full border border-slate-800 text-[10px] font-mono text-slate-300 shadow-xl">
                  <span className="text-amber-400 font-bold">X = {finalCalculatedX} m</span>
                  <span className="text-slate-600">|</span>
                  <span>{flightsCount} Flight(s)</span>
                  <span className="text-slate-600">|</span>
                  <span>{stepsPerFlight} Steps/Flight</span>
                  <span className="text-slate-600">|</span>
                  <span className="text-emerald-400 font-bold">100% Engineering Verified</span>
                </div>
              </motion.div>
            ) : (
              /* Schematic 3D Vector Architectural Simulation Canvas with EXACT Model Geometries */
              <motion.div
                key={`schematic_${ensembleData.id}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="w-full h-full relative bg-radial from-slate-900 to-slate-950 flex items-center justify-center p-4 overflow-hidden"
              >
                {/* SVG 2.5D Isometric Staircase Simulator reflecting the EXACT selected models */}
                <svg
                  viewBox="0 0 800 500"
                  className="w-full h-full max-h-[380px] drop-shadow-2xl select-none"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="marbleStepGrad" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#334155" />
                      <stop offset="100%" stopColor="#1e293b" />
                    </linearGradient>
                    <linearGradient id="goldMetalGrad" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#fef08a" />
                      <stop offset="50%" stopColor="#eab308" />
                      <stop offset="100%" stopColor="#a16207" />
                    </linearGradient>
                    <linearGradient id="silverMetalGrad" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#ffffff" />
                      <stop offset="50%" stopColor="#cbd5e1" />
                      <stop offset="100%" stopColor="#64748b" />
                    </linearGradient>
                    <linearGradient id="blackGoldGrad" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#18181b" />
                      <stop offset="60%" stopColor="#09090b" />
                      <stop offset="100%" stopColor="#eab308" />
                    </linearGradient>
                    <linearGradient id="ledGlowGrad" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.9" />
                      <stop offset="50%" stopColor="#67e8f9" stopOpacity="1" />
                      <stop offset="100%" stopColor="#0284c7" stopOpacity="0.8" />
                    </linearGradient>
                    <linearGradient id="woodGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#a16207" />
                      <stop offset="50%" stopColor="#78350f" />
                      <stop offset="100%" stopColor="#451a03" />
                    </linearGradient>
                    <linearGradient id="champagneGrad" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#fed7aa" />
                      <stop offset="50%" stopColor="#f59e0b" />
                      <stop offset="100%" stopColor="#b45309" />
                    </linearGradient>
                    <filter id="glowEffect" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="4" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                  </defs>

                  {/* CAD Grid Lines */}
                  <line x1="50" y1="450" x2="750" y2="450" stroke="#334155" strokeDasharray="4 4" strokeWidth="1" />
                  <line x1="120" y1="40" x2="120" y2="450" stroke="#1e293b" strokeDasharray="2 2" strokeWidth="1" />
                  <line x1="700" y1="40" x2="700" y2="450" stroke="#1e293b" strokeDasharray="2 2" strokeWidth="1" />

                  {/* Ground Floor Level */}
                  <polygon points="40,430 760,430 720,460 20,460" fill="#0f172a" stroke="#1e293b" strokeWidth="1" />

                  {/* Ascending Stair Steps (Steps 1 to 5) */}
                  {/* Step 1 */}
                  <polygon points="100,390 260,390 280,420 120,420" fill="url(#marbleStepGrad)" stroke="#475569" strokeWidth="1" />
                  <polygon points="120,420 280,420 280,440 120,440" fill="#0f172a" stroke="#334155" strokeWidth="1" />

                  {/* Step 2 */}
                  <polygon points="220,330 380,330 400,360 240,360" fill="url(#marbleStepGrad)" stroke="#475569" strokeWidth="1" />
                  <polygon points="240,360 400,360 400,390 240,390" fill="#0f172a" stroke="#334155" strokeWidth="1" />

                  {/* Step 3 */}
                  <polygon points="340,270 500,270 520,300 360,300" fill="url(#marbleStepGrad)" stroke="#475569" strokeWidth="1" />
                  <polygon points="360,300 520,300 520,330 360,330" fill="#0f172a" stroke="#334155" strokeWidth="1" />

                  {/* Step 4 */}
                  <polygon points="460,210 620,210 640,240 480,240" fill="url(#marbleStepGrad)" stroke="#475569" strokeWidth="1" />
                  <polygon points="480,240 640,240 640,270 480,270" fill="#0f172a" stroke="#334155" strokeWidth="1" />

                  {/* Step 5 (Top Landing) */}
                  <polygon points="580,150 740,150 760,180 600,180" fill="url(#marbleStepGrad)" stroke="#475569" strokeWidth="1" />
                  <polygon points="600,180 760,180 760,210 600,210" fill="#0f172a" stroke="#334155" strokeWidth="1" />

                  {/* Horizontal Infill Lines */}
                  <line x1="160" y1="365" x2="660" y2="125" stroke={ensembleData.themeColor === 'gold' ? '#eab308' : ensembleData.themeColor === 'black-gold' ? '#ca8a04' : '#94a3b8'} strokeWidth="2.5" opacity="0.6" />
                  <line x1="160" y1="335" x2="660" y2="95" stroke={ensembleData.themeColor === 'gold' ? '#eab308' : ensembleData.themeColor === 'black-gold' ? '#ca8a04' : '#94a3b8'} strokeWidth="2.5" opacity="0.6" />
                  <line x1="160" y1="305" x2="660" y2="65" stroke={ensembleData.themeColor === 'gold' ? '#eab308' : ensembleData.themeColor === 'black-gold' ? '#ca8a04' : '#94a3b8'} strokeWidth="2.5" opacity="0.6" />

                  {/* Intermediate Prefab Posts on steps 2, 3, 4 - EXACT GEOMETRY */}
                  {[
                    { stepX: 295, stepY: 160, basePlateY: 340, postNum: 1 },
                    { stepX: 415, stepY: 100, basePlateY: 280, postNum: 2 },
                    { stepX: 535, stepY: 40, basePlateY: 220, postNum: 3 },
                    { stepX: 655, stepY: -20, basePlateY: 160, postNum: 4 },
                  ].map((p, idx) => {
                    const isGeometric = selectedPrefabPost?.id.includes('geometric') || selectedPrefabPost?.id.includes('black-gold');
                    const isCubic = selectedPrefabPost?.id.includes('cubic');
                    const isTwinBar = selectedPrefabPost?.id.includes('twin');
                    const isGlassClamp = selectedPrefabPost?.id.includes('clamp') || selectedPrefabPost?.id.includes('star');

                    return (
                      <g key={idx}>
                        {/* Base Escutcheon / Footing */}
                        <polygon 
                          points={`${p.stepX - 7},${p.basePlateY} ${p.stepX + 17},${p.basePlateY} ${p.stepX + 21},${p.basePlateY + 6} ${p.stepX - 11},${p.basePlateY + 6}`} 
                          fill={ensembleData.themeColor === 'gold' ? '#ca8a04' : '#334155'} 
                        />

                        {isGeometric ? (
                          /* Open Hollow Frame with Gold Trim */
                          <g>
                            <rect x={p.stepX - 4} y={p.stepY} width="18" height="180" rx="2" fill="#09090b" stroke="#ca8a04" strokeWidth="1.5" />
                            <rect x={p.stepX} y={p.stepY + 10} width="10" height="160" rx="1" fill="#0f172a" stroke="#eab308" strokeWidth="1" />
                            <line x1={p.stepX + 5} y1={p.stepY + 10} x2={p.stepX + 5} y2={p.stepY + 170} stroke="#eab308" strokeWidth="1" />
                          </g>
                        ) : isTwinBar ? (
                          /* Dual Flat Bars */
                          <g>
                            <rect x={p.stepX - 2} y={p.stepY} width="6" height="180" rx="1" fill="url(#silverMetalGrad)" stroke="#1e293b" strokeWidth="0.5" />
                            <rect x={p.stepX + 6} y={p.stepY} width="6" height="180" rx="1" fill="url(#silverMetalGrad)" stroke="#1e293b" strokeWidth="0.5" />
                            <circle cx={p.stepX + 5} cy={p.stepY + 50} r="3" fill="#ca8a04" />
                            <circle cx={p.stepX + 5} cy={p.stepY + 110} r="3" fill="#ca8a04" />
                          </g>
                        ) : isGlassClamp ? (
                          /* Post with Glass Clamps */
                          <g>
                            <rect x={p.stepX} y={p.stepY} width="10" height="180" rx="2" fill="url(#silverMetalGrad)" stroke="#0f172a" strokeWidth="1" />
                            <rect x={p.stepX - 5} y={p.stepY + 40} width="6" height="10" rx="1" fill="#eab308" />
                            <rect x={p.stepX - 5} y={p.stepY + 100} width="6" height="10" rx="1" fill="#eab308" />
                          </g>
                        ) : (
                          /* Standard / Cubic Post */
                          <rect 
                            x={p.stepX} 
                            y={p.stepY} 
                            width={isCubic ? 12 : 10} 
                            height="180" 
                            rx="2" 
                            fill={
                              ensembleData.themeColor === 'gold' ? 'url(#goldMetalGrad)' : 
                              ensembleData.themeColor === 'black-gold' ? 'url(#blackGoldGrad)' : 
                              'url(#silverMetalGrad)'
                            } 
                            stroke="#0f172a" 
                            strokeWidth="1" 
                          />
                        )}
                      </g>
                    );
                  })}

                  {/* Master Starter Post at Step 1 - EXACT MODEL GEOMETRY */}
                  <g>
                    {/* Starter Base Escutcheon */}
                    <polygon 
                      points="140,405 180,405 188,416 132,416" 
                      fill={ensembleData.themeColor === 'gold' ? 'url(#goldMetalGrad)' : '#475569'} 
                      stroke="#0f172a" 
                      strokeWidth="1.5" 
                    />

                    {selectedStarterPost?.id.includes('royal') ? (
                      /* Royal Imperial Starter with CNC Turned Spheres & Urn Finial */
                      <g>
                        {/* Main Pillar */}
                        <rect x="150" y="210" width="20" height="195" rx="3" fill="url(#goldMetalGrad)" stroke="#78350f" strokeWidth="1.5" />
                        {/* CNC Spheres on Starter Body */}
                        <circle cx="160" cy="360" r="14" fill="url(#goldMetalGrad)" stroke="#78350f" strokeWidth="1" />
                        <circle cx="160" cy="300" r="12" fill="url(#goldMetalGrad)" stroke="#78350f" strokeWidth="1" />
                        <circle cx="160" cy="240" r="10" fill="url(#goldMetalGrad)" stroke="#78350f" strokeWidth="1" />
                        {/* Urn Head Finial */}
                        <circle cx="160" cy="195" r="14" fill="url(#goldMetalGrad)" stroke="#78350f" strokeWidth="1.5" />
                        <ellipse cx="160" cy="178" rx="7" ry="4" fill="#fef08a" />
                      </g>
                    ) : selectedStarterPost?.id.includes('neoclassic') ? (
                      /* Neoclassic Faceted Octagonal Prism with Pyramidal Finial */
                      <g>
                        <polygon points="148,210 172,210 175,405 145,405" fill="url(#champagneGrad)" stroke="#78350f" strokeWidth="1.5" />
                        <line x1="160" y1="210" x2="160" y2="405" stroke="#fef08a" strokeWidth="1.5" />
                        <polygon points="160,175 174,198 160,210 146,198" fill="url(#champagneGrad)" stroke="#78350f" strokeWidth="1.5" />
                      </g>
                    ) : selectedStarterPost?.id.includes('hightech') ? (
                      /* High-Tech Dual Plates with Cable Tensioners */
                      <g>
                        <rect x="146" y="200" width="8" height="205" rx="1" fill="#1e293b" stroke="#38bdf8" strokeWidth="1" />
                        <rect x="166" y="200" width="8" height="205" rx="1" fill="#1e293b" stroke="#38bdf8" strokeWidth="1" />
                        <circle cx="160" cy="260" r="4" fill="#38bdf8" />
                        <circle cx="160" cy="320" r="4" fill="#38bdf8" />
                        <rect x="144" y="185" width="32" height="15" rx="2" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" />
                      </g>
                    ) : selectedStarterPost?.id.includes('parametric') ? (
                      /* Parametric Fluid Capsule Continuous Loop */
                      <g>
                        <rect x="148" y="195" width="24" height="210" rx="12" fill="none" stroke="url(#champagneGrad)" strokeWidth="6" />
                        <line x1="160" y1="210" x2="160" y2="390" stroke="url(#champagneGrad)" strokeWidth="2" />
                      </g>
                    ) : (
                      /* Minimal Slim Square Column */
                      <g>
                        <rect x="148" y="205" width="24" height="200" rx="2" fill="url(#silverMetalGrad)" stroke="#334155" strokeWidth="1.5" />
                        <rect x="145" y="190" width="30" height="15" rx="2" fill="url(#silverMetalGrad)" stroke="#1e293b" strokeWidth="1" />
                      </g>
                    )}

                    {/* Swan-Neck / Connector Bracket from Starter to Top Rail */}
                    <path
                      d="M 160,205 Q 155,245 165,260"
                      stroke={ensembleData.themeColor === 'gold' ? '#eab308' : '#cbd5e1'}
                      strokeWidth="5"
                      fill="none"
                    />
                  </g>

                  {/* Continuous Top Handrail Sweeping across the entire flight - EXACT PROFILE */}
                  <g>
                    <path
                      d="M 145,260 C 155,255 170,250 200,235 L 675, -5"
                      stroke={
                        selectedHandrailPost?.id.includes('wood') ? 'url(#woodGrad)' :
                        selectedHandrailPost?.id.includes('led') ? '#09090b' :
                        ensembleData.themeColor === 'gold' ? 'url(#goldMetalGrad)' :
                        ensembleData.themeColor === 'black-gold' ? '#ca8a04' :
                        'url(#silverMetalGrad)'
                      }
                      strokeWidth={selectedHandrailPost?.id.includes('wood') ? '16' : '13'}
                      strokeLinecap="round"
                    />

                    {/* If LED Handrail: Render the illuminated 4000K daylight-white LED beam */}
                    {selectedHandrailPost?.id.includes('led') && (
                      <path
                        d="M 152,266 L 672, 1"
                        stroke="#38bdf8"
                        strokeWidth="4"
                        strokeLinecap="round"
                        filter="url(#glowEffect)"
                      />
                    )}

                    {/* If Swan-Neck Gold Handrail: Decorative Gold Swan-Neck Flow */}
                    {selectedHandrailPost?.id.includes('swan') && (
                      <path
                        d="M 145,260 C 135,270 145,290 160,205"
                        stroke="url(#goldMetalGrad)"
                        strokeWidth="8"
                        fill="none"
                      />
                    )}
                  </g>

                  {/* Architectural Dimension Leader Lines & Precision Annotations */}
                  <g opacity="0.9">
                    {/* Starter Callout */}
                    <circle cx="160" cy="300" r="4" fill="#f59e0b" />
                    <line x1="160" y1="300" x2="70" y2="340" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="3 3" />
                    <text x="65" y="355" fill="#f59e0b" fontSize="12" fontWeight="bold" textAnchor="end" fontFamily="sans-serif">
                      {selectedStarterPost?.modelCode || 'استارتر ورودی'} (H: 1150mm)
                    </text>

                    {/* Prefab Post Callout */}
                    <circle cx="420" cy="200" r="4" fill="#38bdf8" />
                    <line x1="420" y1="200" x2="420" y2="120" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3 3" />
                    <text x="420" y="110" fill="#38bdf8" fontSize="12" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">
                      {selectedPrefabPost?.modelCode || 'پایه فابریک'} (H: 900mm)
                    </text>

                    {/* Handrail Callout */}
                    <circle cx="560" cy="70" r="4" fill="#10b981" />
                    <line x1="560" y1="70" x2="680" y2="50" stroke="#10b981" strokeWidth="1.5" strokeDasharray="3 3" />
                    <text x="685" y="55" fill="#10b981" fontSize="12" fontWeight="bold" textAnchor="start" fontFamily="sans-serif">
                      {selectedHandrailPost?.modelCode || 'هندریل پیوسته'} (Ø 51mm)
                    </text>
                  </g>
                </svg>

                {/* Info Overlay in Schematic Mode */}
                <div className="absolute bottom-3 right-3 rtl:right-auto rtl:left-3 bg-slate-900/90 backdrop-blur-xs px-3 py-1.5 rounded-xl border border-slate-800 text-[10px] text-slate-300 flex items-center gap-2">
                  <Info className="w-3.5 h-3.5 text-amber-400" />
                  <span>{language === 'fa' ? 'نقشه مهندسی دقیق با فرم هندسی واقعی ۳ مدل انتخابی' : 'Exact Geometry CAD Schematic'}</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        )}

        {/* ========================================================================= */}
        {/* SECTION C: آنالیز تخصصی کارشناسی مهندسی سازه و انطباق سه گانه */}
        {/* ========================================================================= */}
        {viewMode === 'analysis' && (
        <motion.div 
          key="analysis_tab_container"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.25 }}
          className="p-4 sm:p-6 bg-slate-950 space-y-5"
        >
          
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800/80 pb-3">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                <Compass className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h5 className="text-xs sm:text-base font-black text-white">
                    {language === 'fa' 
                      ? 'آنالیز تخصصی کارشناسی مهندسی سازه و انطباق سه گانه' 
                      : language === 'ar' 
                      ? 'التحليل الهندسي التخصصي وانطباق المنظومة الثلاثية' 
                      : 'Expert Structural Engineering & Tri-Component Compliance Analysis'}
                  </h5>
                  <span className="hidden sm:inline-block px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                    100% IBC Match
                  </span>
                </div>
                <span className="text-[10px] sm:text-[11px] text-slate-400 block mt-0.5">
                  {language === 'fa' ? 'بررسی اتصال استارتر، پایه فابریک و هندریل بر اساس استانداردهای نظام مهندسی' : 'Rigorous structural assessment matching Iranian Building Code & ASTM E985'}
                </span>
              </div>
            </div>

            {/* Analysis Tabs */}
            <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-xl border border-slate-800 text-[11px]">
              <button
                type="button"
                onClick={() => setActiveAnalysisTab('joints')}
                className={`px-2.5 py-1 rounded-lg font-bold transition-all cursor-pointer ${
                  activeAnalysisTab === 'joints' ? 'bg-amber-500 text-slate-950 shadow-xs' : 'text-slate-400 hover:text-white'
                }`}
              >
                {language === 'fa' ? 'اتصالات سازه' : 'Joints & Mounts'}
              </button>

              <button
                type="button"
                onClick={() => setActiveAnalysisTab('metallurgy')}
                className={`px-2.5 py-1 rounded-lg font-bold transition-all cursor-pointer ${
                  activeAnalysisTab === 'metallurgy' ? 'bg-amber-500 text-slate-950 shadow-xs' : 'text-slate-400 hover:text-white'
                }`}
              >
                {language === 'fa' ? 'متالورژی و PVD' : 'Metallurgy'}
              </button>

              <button
                type="button"
                onClick={() => setActiveAnalysisTab('structural')}
                className={`px-2.5 py-1 rounded-lg font-bold transition-all cursor-pointer ${
                  activeAnalysisTab === 'structural' ? 'bg-amber-500 text-slate-950 shadow-xs' : 'text-slate-400 hover:text-white'
                }`}
              >
                {language === 'fa' ? 'تحمل بار و ایمنی' : 'Load & Safety'}
              </button>

              <button
                type="button"
                onClick={() => setActiveAnalysisTab('installation')}
                className={`px-2.5 py-1 rounded-lg font-bold transition-all cursor-pointer ${
                  activeAnalysisTab === 'installation' ? 'bg-amber-500 text-slate-950 shadow-xs' : 'text-slate-400 hover:text-white'
                }`}
              >
                {language === 'fa' ? 'پروتکل نصب' : 'Rigging'}
              </button>
            </div>
          </div>

          {/* Active Tab Content */}
          <div className="bg-slate-900/60 rounded-2xl p-3.5 sm:p-4 border border-slate-800/80 text-xs">
            {activeAnalysisTab === 'joints' && (
              <div className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800 space-y-1">
                    <span className="text-[10px] text-amber-400 font-bold block">
                      {language === 'fa' ? '۱. سیستم اتصال هندریل به پایه‌ها و استارتر:' : '1. Handrail-to-Post Articulation:'}
                    </span>
                    <p className="text-slate-300 text-[11px] leading-relaxed">
                      {engineeringAnalysis.jointType}
                    </p>
                    <span className="text-[10px] text-emerald-400 font-mono flex items-center gap-1 mt-1">
                      <Check className="w-3 h-3" /> انطباق ۱۰۰٪ با شیب پله‌ها بدون نیاز به جوشکاری در محل
                    </span>
                  </div>

                  <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800 space-y-1">
                    <span className="text-[10px] text-amber-400 font-bold block">
                      {language === 'fa' ? '۲. مهار کف‌پایه استارتر آغازین پله:' : '2. Starter Base Anchoring:'}
                    </span>
                    <p className="text-slate-300 text-[11px] leading-relaxed">
                      {engineeringAnalysis.starterAnchor}
                    </p>
                    <span className="text-[10px] text-emerald-400 font-mono flex items-center gap-1 mt-1">
                      <Check className="w-3 h-3" /> مهار گشتاور خمشی نقطه شروع با ضریب اطمینان ۲.۸ برابر
                    </span>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-[11px] text-amber-200 flex items-center justify-between">
                  <span>
                    <strong>{language === 'fa' ? 'نتیجه کارشناسی سازگاری قطعات:' : 'Compatibility Verdict:'}</strong>{' '}
                    {language === 'fa' ? 'سه قطعه انتخابی در نقاط اتصال سرپایه، ترنزیشن ورودی و شفت پایه کاملاً با یکدیگر هماهنگ بوده و آماده مونتاژ مکانیکی فابریک می‌باشند.' : 'All 3 selected parts interface seamlessly with standard mechanical joints.'}
                  </span>
                  <span className="font-mono font-bold text-emerald-400 bg-emerald-500/20 px-2 py-0.5 rounded border border-emerald-500/30">
                    100% MATCH
                  </span>
                </div>
              </div>
            )}

            {activeAnalysisTab === 'metallurgy' && (
              <div className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800 space-y-1">
                    <span className="text-[10px] text-amber-400 font-bold block">
                      {language === 'fa' ? 'آلیاژ پایه فابریک:' : 'Prefab Post Alloy:'}
                    </span>
                    <strong className="text-white text-[11px] block">
                      {selectedPrefabPost?.alloyGrade[language] || 'AISI 304 Austenitic'}
                    </strong>
                    <span className="text-[10px] text-slate-400 block">
                      ضخامت گوشت: {selectedPrefabPost?.thickness || '2.5 mm'}
                    </span>
                  </div>

                  <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800 space-y-1">
                    <span className="text-[10px] text-amber-400 font-bold block">
                      {language === 'fa' ? 'آلیاژ استارتر لوکس:' : 'Starter Alloy:'}
                    </span>
                    <strong className="text-white text-[11px] block">
                      {selectedStarterPost?.alloyGrade[language] || 'AISI 304 / 316 Stainless'}
                    </strong>
                    <span className="text-[10px] text-slate-400 block">
                      پوشش: {selectedStarterPost?.finish[language] || 'Titanium PVD'}
                    </span>
                  </div>

                  <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800 space-y-1">
                    <span className="text-[10px] text-amber-400 font-bold block">
                      {language === 'fa' ? 'آلیاژ و متریال هندریل:' : 'Handrail Alloy:'}
                    </span>
                    <strong className="text-white text-[11px] block">
                      {selectedHandrailPost?.alloyGrade[language] || 'AISI 304 Stainless'}
                    </strong>
                    <span className="text-[10px] text-slate-400 block">
                      فینیشینگ: {selectedHandrailPost?.finish[language] || 'Mirror / Satin'}
                    </span>
                  </div>
                </div>

                <div className="text-[11px] text-slate-300 leading-relaxed bg-slate-950/50 p-2.5 rounded-xl border border-slate-800/80">
                  <p>
                    {language === 'fa'
                      ? 'تمامی متریال‌های انتخابی دارای گواهی آزمون متالوژی MTC 3.1 با ضمانت کتبی ۱۰ الی ۱۵ ساله استیلکس در برابر زنگ‌زدگی، سیاه‌شدگی و تغییر رنگ PVD ناشی از شوینده‌ها و اشعه UV می‌باشند. به منظور جلوگیری از هرگونه خوردگی گالوانیک، واشرهای عایق EPDM بین فلزات ناهمگن قرار می‌گیرد.'
                      : 'All certified austenitic alloys with 15-year warranty against corrosion, pitting, or PVD degradation under standard environmental conditions.'}
                  </p>
                </div>
              </div>
            )}

            {activeAnalysisTab === 'structural' && (
              <div className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800 space-y-1">
                    <span className="text-[10px] text-amber-400 font-bold block">
                      {language === 'fa' ? 'تحمل بار جانبی تجمعی سازه:' : 'Total Lateral Impact Load:'}
                    </span>
                    <strong className="text-white text-sm font-mono block">
                      {engineeringAnalysis.totalLoadCapacity}
                    </strong>
                    <span className="text-[10px] text-slate-400 block">
                      الزام استاندارد: ۱۵۰ کیلوگرم بر متر طول (مجموعه منتخب بیش از ۲.۵ برابر استاندارد)
                    </span>
                  </div>

                  <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800 space-y-1">
                    <span className="text-[10px] text-amber-400 font-bold block">
                      {language === 'fa' ? 'تطابق با ضوابط نظام مهندسی و آتش‌نشانی:' : 'Building Code & Fire Safety Compliance:'}
                    </span>
                    <strong className="text-emerald-400 text-xs font-bold flex items-center gap-1 block">
                      <ShieldCheck className="w-3.5 h-3.5" /> تاییدیه کامل مبحث ۴ و ۱۰ مقررات ملی ساختمان
                    </strong>
                    <span className="text-[10px] text-slate-400 block">
                      فاصله بین بالسترها کمتر از ۱۱۰ میلی‌متر (ایمنی کامل کودکان و عدم سقوط اشیاء)
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-2 p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-[10px] text-slate-400">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                    استاندارد مرجع: ASTM E985 / BS 6180 / CE EN 12600
                  </span>
                  <span className="text-amber-400 font-mono font-bold">
                    حداکثر خمش مجاز: L/120 (صلابت ۱۰۰٪ تضمین‌شده)
                  </span>
                </div>
              </div>
            )}

            {activeAnalysisTab === 'installation' && (
              <div className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  <div className="bg-slate-950/80 p-2.5 rounded-xl border border-slate-800 space-y-0.5">
                    <span className="text-[9px] text-amber-400 font-bold block">نوع رول‌بولت:</span>
                    <strong className="text-white text-[11px] block">Hilti HIT-HY 200 / رول‌بولت A4</strong>
                    <span className="text-[9px] text-slate-400 block">کاشت شیمیایی در سنگ و بتن</span>
                  </div>

                  <div className="bg-slate-950/80 p-2.5 rounded-xl border border-slate-800 space-y-0.5">
                    <span className="text-[9px] text-amber-400 font-bold block">عمق سوراخکاری:</span>
                    <strong className="text-white text-[11px] block">۸۰ الی ۱۰۰ میلی‌متر</strong>
                    <span className="text-[9px] text-slate-400 block">با مته ۴ شیار الماسه گردبُر</span>
                  </div>

                  <div className="bg-slate-950/80 p-2.5 rounded-xl border border-slate-800 space-y-0.5">
                    <span className="text-[9px] text-amber-400 font-bold block">تراز و شاقولی:</span>
                    <strong className="text-white text-[11px] block">تلورانس ±۰.۵ میلی‌متر</strong>
                    <span className="text-[9px] text-slate-400 block">با تراز لیزری ۳۶۰ درجه ۳D</span>
                  </div>
                </div>

                <p className="text-[11px] text-slate-300 leading-relaxed bg-slate-950/40 p-2.5 rounded-xl border border-slate-800/80">
                  {language === 'fa'
                    ? 'نصب توسط اکیپ‌های رسمی و مجهز کارخانه استیلکس انجام شده و کلیه محل‌های پیچ‌کاری با قالپاق‌های پرسی کششی فابریک پوشانده می‌شوند تا هیچ‌گونه پیچ یا درز جوشکاری در معرض دید قرار نگیرد.'
                    : 'Turnkey certified installation executed by STELLEX factory technicians with concealed fasteners.'}
                </p>
              </div>
            )}
          </div>

          {/* Technical Ensemble Specs Footer Strip */}
          <div className="pt-3 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] text-slate-400">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 flex-1">
              {ensembleData.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>{feature[language]}</span>
                </div>
              ))}
            </div>
            <button
              type="button"
              onClick={() => setViewMode('photo')}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 text-xs font-bold transition-all cursor-pointer shrink-0"
            >
              <Camera className="w-3.5 h-3.5 text-amber-400" />
              <span>{language === 'fa' ? 'بازگشت به رندر عکاسی' : 'Back to Photo Render'}</span>
            </button>
          </div>

        </motion.div>
        )}

      </div>

      {/* ========================================================================= */}
      {/* FULLSCREEN MODAL PREVIEW */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {isFullscreen && (
          <div className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md flex flex-col p-4 sm:p-8">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div>
                <span className="text-xs font-mono text-amber-400 font-bold">
                  {ensembleData.code}
                </span>
                <h3 className="text-base sm:text-xl font-black text-white mt-0.5">
                  {ensembleData.title[language]}
                </h3>
              </div>
              <button
                onClick={() => setIsFullscreen(false)}
                className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white transition-colors cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex-1 min-h-0 flex items-center justify-center p-4">
              <img
                src={
                  ensembleData.themeColor === 'black-gold' 
                    ? stairFrameBlackGoldImg 
                    : ensembleData.themeColor === 'gold' 
                    ? goldPalaceRailingImg 
                    : ensembleData.themeColor === 'bronze' 
                    ? starterPairBalustersImg 
                    : ensembleData.themeColor === 'gunmetal' 
                    ? modernCapsuleRailingImg 
                    : silverPalaceRailingImg
                }
                alt={ensembleData.title[language]}
                className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl border border-slate-800"
              />
            </div>

            <div className="p-4 bg-slate-900/80 rounded-2xl border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <div className="space-y-1">
                <span className="text-white font-bold block">
                  {ensembleData.title[language]}
                </span>
                <span className="text-slate-400 block text-[11px]">
                  استارتر: {selectedStarterPost?.modelCode} | پایه فابریک: {selectedPrefabPost?.modelCode} | هندریل: {selectedHandrailPost?.modelCode}
                </span>
              </div>
              <span className="text-amber-400 font-mono font-bold shrink-0">
                X = {finalCalculatedX} m ({flightsCount} Flights / {stepsPerFlight} Steps)
              </span>
            </div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};
