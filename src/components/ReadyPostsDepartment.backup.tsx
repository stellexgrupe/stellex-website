import React, { useState } from 'react';
import { ReadyPostModel } from '../types';
import { READY_POST_MODELS } from '../data/stellexData';
import { useLanguage } from '../context/LanguageContext';
import { convertFromToman, formatPriceWithUnit, getCurrencyNotice } from '../utils/currency';
import {
  Layers,
  Sparkles,
  Ruler,
  ShieldCheck,
  Award,
  Calculator,
  Eye,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  Play,
  ArrowRight,
  Info,
  DollarSign,
  Package,
  Coins,
} from 'lucide-react';

interface ReadyPostsDepartmentProps {
  onSelectPostDetail: (post: ReadyPostModel) => void;
  onOpenCalculatorPlus: (post?: ReadyPostModel) => void;
  onOpenConsultation: (postName: string) => void;
}

export const ReadyPostsDepartment: React.FC<ReadyPostsDepartmentProps> = ({
  onSelectPostDetail,
  onOpenCalculatorPlus,
  onOpenConsultation,
}) => {
  const { language, t, isRtl } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'starter' | 'standard'>('all');
  const [activeMediaIndex, setActiveMediaIndex] = useState<{ [postId: string]: number }>({});

  const filteredPosts = READY_POST_MODELS.filter((post) => {
    if (selectedCategory === 'all') return true;
    if (selectedCategory === 'starter') return post.postCategory === 'starter';
    if (selectedCategory === 'standard') return post.postCategory !== 'starter';
    return true;
  });

  const starterCount = READY_POST_MODELS.filter((p) => p.postCategory === 'starter').length;
  const standardCount = READY_POST_MODELS.filter((p) => p.postCategory !== 'starter').length;

  const currencyNotice = getCurrencyNotice(language);
  const minPriceConverted = convertFromToman(18_000_000, language);
  const maxPriceConverted = convertFromToman(45_000_000, language);

  const handleMediaNext = (postId: string, total: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveMediaIndex((prev) => ({
      ...prev,
      [postId]: ((prev[postId] || 0) + 1) % total,
    }));
  };

  const handleMediaPrev = (postId: string, total: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveMediaIndex((prev) => ({
      ...prev,
      [postId]: (prev[postId] || 0) <= 0 ? total - 1 : (prev[postId] || 0) - 1,
    }));
  };

  return (
    <div id="ready-posts-dept" className="space-y-8 animate-in fade-in duration-300">
      
      {/* Department Header & Value Proposition */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 border border-amber-500/30 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold">
                <Layers className="w-3.5 h-3.5" />
                <span>
                  {language === 'fa' 
                    ? 'دپارتمان تخصصی پایه‌های نرده استیل آماده نصب استیلکس' 
                    : language === 'ar' 
                    ? 'قسم القوائم الجاهزة للتركيب - ستيليكس' 
                    : 'STELLEX Ready-to-Install Railing Posts Department'}
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
                    ? 'شروع قیمت اجرای متر طول از ۱۸ تا ۴۵ میلیون تومان' 
                    : language === 'ar' 
                    ? `سعر تنفيذ المتر الطولي: من ${minPriceConverted.formattedNumber} إلى ${maxPriceConverted.formattedNumber} درهم إماراتي` 
                    : `Execution: $${minPriceConverted.formattedNumber} - $${maxPriceConverted.formattedNumber} USD / linear meter`}
                </span>
              </div>
            </div>
            
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-tight">
              {language === 'fa'
                ? 'پایه‌های مهندسی‌شده پیش‌ساخته، آماده نصب فوری بدون جوشکاری'
                : language === 'ar'
                ? 'قوائم درابزين مصمتة جاهزة للتركيب الفوري بأعلى معايير المتانة'
                : 'Engineered Ready Posts for Rapid Bolt-On Installation'}
            </h3>
            
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {language === 'fa'
                ? 'کلیه پایه‌های استیلکس با آلیاژهای فابریک ۳۰۴ و ۳۱۶ نگیر، ماشین‌کاری دقیق CNC و پرداخت سوپر میرور یا پوشش نانو PVD طلایی تولید می‌شوند. همراه با قالپاق، بست‌ها، متعلقات و گارانتی کتبی تعویض.'
                : language === 'ar'
                ? 'تم تصنيع جميع القوائم من الفولاذ المقاوم للصدأ ٣٠٤ و ٣١٦ بتقنيات CNC وتلميع المرآة الفائق أو طلاء PVD الذهبي المقاوم للتآكل.'
                : 'All STELLEX ready posts are precision manufactured from certified 304 and 316 marine-grade alloys with super mirror 8K polish or vacuum titanium PVD.'}
            </p>
          </div>

          {/* Quick CTA to Calculator Plus */}
          <div className="shrink-0 w-full md:w-auto">
            <button
              onClick={() => onOpenCalculatorPlus()}
              className="w-full md:w-auto lux-btn-gold px-6 py-4 rounded-2xl text-xs sm:text-sm font-black flex items-center justify-center gap-2 shadow-xl shadow-amber-500/20 cursor-pointer"
            >
              <Calculator className="w-5 h-5 text-slate-950" />
              <span>
                {language === 'fa' 
                  ? 'ورود به محاسبه‌گر پلاس (محاسبه آنلاین فاکتور)' 
                  : language === 'ar' 
                  ? 'افتح حاسبة بلس لحساب التكلفة' 
                  : 'Open Calculator Plus'}
              </span>
            </button>
          </div>
        </div>

        {/* Feature Highlights Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-6 border-t border-slate-800 text-xs">
          <div className="flex items-center gap-2 text-slate-200">
            <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
            <span>
              {language === 'fa' ? 'نصب سریع بدون جوشکاری در محل' : language === 'ar' ? 'تركيب فوري وسريع بدون لحام' : 'Fast bolt-on assembly, no welding'}
            </span>
          </div>
          <div className="flex items-center gap-2 text-slate-200">
            <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
            <span>
              {language === 'fa' ? 'استیل ۳۰۴ و ۳۱۶ نگیر با گواهی متالوژی' : language === 'ar' ? 'ستانلس ستيل ٣٠٤ و ٣١٦ أصلي مع شهادة' : 'Certified 304 & 316 marine-grade steel'}
            </span>
          </div>
          <div className="flex items-center gap-2 text-slate-200">
            <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
            <span>
              {language === 'fa' ? 'پکینگ کامل همراه با قالپاق و رولبولت' : language === 'ar' ? 'تغليف كامل مع الغطاء والمسامير' : 'Complete packing with base cover & bolts'}
            </span>
          </div>
          <div className="flex items-center gap-2 text-slate-200">
            <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
            <span>
              {language === 'fa' ? 'ضمانت کتبی ۱۰ الی ۲۰ ساله شرکتی' : language === 'ar' ? 'ضمان رسمي من ١٠ إلى ٢٠ سنة' : '10 to 20-year official warranty'}
            </span>
          </div>
        </div>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-2 rounded-2xl bg-slate-900/90 border border-slate-800 backdrop-blur-md">
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
              selectedCategory === 'all'
                ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20'
                : 'bg-slate-950/60 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>{language === 'fa' ? 'همه مدل‌ها' : language === 'ar' ? 'جميع الموديلات' : 'All Models'}</span>
            <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
              selectedCategory === 'all' ? 'bg-slate-950 text-amber-400 font-mono font-bold' : 'bg-slate-800 text-slate-400'
            }`}>
              {READY_POST_MODELS.length}
            </span>
          </button>

          <button
            onClick={() => setSelectedCategory('starter')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
              selectedCategory === 'starter'
                ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 shadow-lg shadow-amber-500/25 ring-2 ring-amber-400/50'
                : 'bg-slate-950/60 text-amber-300 hover:text-amber-200 hover:bg-slate-800 border border-amber-500/30'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>
              {language === 'fa' 
                ? 'استارترهای راه‌پله در ۵ کلاس کاری' 
                : language === 'ar' 
                ? 'أعمدة البداية في ٥ فئات تصميمية' 
                : 'Staircase Starters (5 Work Classes)'}
            </span>
            <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
              selectedCategory === 'starter' ? 'bg-slate-950 text-amber-400 font-mono font-bold' : 'bg-amber-500/20 text-amber-300'
            }`}>
              {starterCount}
            </span>
          </button>

          <button
            onClick={() => setSelectedCategory('standard')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
              selectedCategory === 'standard'
                ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20'
                : 'bg-slate-950/60 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>
              {language === 'fa' 
                ? 'پایه‌های خطی و اسپیگات شیشه' 
                : language === 'ar' 
                ? 'القوائم الخطية وسبیغوت الزجاج' 
                : 'Line & Spigot Posts'}
            </span>
            <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
              selectedCategory === 'standard' ? 'bg-slate-950 text-amber-400 font-mono font-bold' : 'bg-slate-800 text-slate-400'
            }`}>
              {standardCount}
            </span>
          </button>
        </div>

        <div className="text-xs text-slate-400 px-2 flex items-center gap-1.5">
          <Info className="w-3.5 h-3.5 text-amber-400" />
          <span>
            {language === 'fa'
              ? 'تولید سفارشی در متریال ۳۰۴ و ۳۱۶ با استاندارد ISO 9001'
              : language === 'ar'
              ? 'إنتاج حسب الطلب من ستانلس ستيل ٣٠٤ و ٣١٦'
              : 'Precision bespoke fabrication in 304 & 316 marine alloys'}
          </span>
        </div>
      </div>

      {/* Models Grid (Presenting each post with all 6 required criteria) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPosts.map((post) => {
          const mediaList = [post.image, ...post.detailImages, ...post.projectImages];
          const curIdx = activeMediaIndex[post.id] || 0;
          const currentImg = mediaList[curIdx] || post.image;
          const postUnitPrice = convertFromToman(post.unitPrice, language);
          const postLinearPrice = convertFromToman(post.linearMeterPrice, language);

          return (
            <div
              key={post.id}
              className={`bg-slate-900 border ${
                post.postCategory === 'starter' 
                  ? 'border-amber-500/50 hover:border-amber-400 shadow-amber-500/10' 
                  : 'border-slate-800 hover:border-amber-500/60'
              } rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group`}
            >
              
              {/* Card Top: Image & Badge & Slider */}
              <div className="relative aspect-4/3 overflow-hidden bg-slate-950">
                <img
                  src={currentImg}
                  alt={post.name[language]}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-black/40 pointer-events-none" />

                {/* Top Floating Badge & Code */}
                <div className="absolute top-3 inset-x-3 flex items-center justify-between z-10 gap-2">
                  <span className="text-[11px] font-mono font-black bg-slate-950/85 text-amber-400 px-2.5 py-1 rounded-lg border border-amber-500/40 backdrop-blur-md shrink-0">
                    {post.modelCode}
                  </span>
                  
                  <div className="flex items-center gap-1.5 overflow-hidden">
                    {post.postCategory === 'starter' && (
                      <span className="text-[10px] font-black bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 px-2 py-0.5 rounded-full shadow-md shrink-0 flex items-center gap-1">
                        <Sparkles className="w-2.5 h-2.5" />
                        <span>{language === 'fa' ? 'استارتر' : language === 'ar' ? 'عامود بداية' : 'Starter'}</span>
                      </span>
                    )}
                    <span className="text-[10px] font-bold bg-slate-900/90 border border-amber-500/30 text-amber-300 px-2.5 py-0.5 rounded-full truncate">
                      {post.badge[language]}
                    </span>
                  </div>
                </div>

                {/* Gallery Mini Controls */}
                {mediaList.length > 1 && (
                  <div className="absolute bottom-3 inset-x-3 flex items-center justify-between z-10">
                    <button
                      onClick={(e) => handleMediaPrev(post.id, mediaList.length, e)}
                      className="p-1 rounded-lg bg-slate-950/80 text-white hover:bg-amber-500 hover:text-slate-950 border border-slate-700 transition-colors"
                      title={language === 'fa' ? 'عکس قبلی' : language === 'ar' ? 'السابق' : 'Previous'}
                    >
                      <ChevronLeft className="w-3.5 h-3.5" />
                    </button>
                    <span className="text-[10px] font-mono font-bold bg-slate-950/80 text-slate-300 px-2 py-0.5 rounded border border-slate-800">
                      {language === 'fa' ? `تصویر ${curIdx + 1} از ${mediaList.length}` : language === 'ar' ? `صورة ${curIdx + 1} من ${mediaList.length}` : `Image ${curIdx + 1} of ${mediaList.length}`}
                    </span>
                    <button
                      onClick={(e) => handleMediaNext(post.id, mediaList.length, e)}
                      className="p-1 rounded-lg bg-slate-950/80 text-white hover:bg-amber-500 hover:text-slate-950 border border-slate-700 transition-colors"
                      title={language === 'fa' ? 'عکس بعدی' : language === 'ar' ? 'التالي' : 'Next'}
                    >
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}
              </div>

              {/* Card Body: Technical & Pricing Information */}
              <div className="p-5 sm:p-6 space-y-4 flex-1 flex flex-col justify-between">
                
                <div className="space-y-3">
                  <div>
                    {post.workClass && (
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-300 text-[11px] font-bold mb-2">
                        <Sparkles className="w-3 h-3 text-amber-400 shrink-0" />
                        <span>{post.workClass[language]}</span>
                      </div>
                    )}
                    <h4 className="text-base sm:text-lg font-black text-white group-hover:text-amber-300 transition-colors line-clamp-1">
                      {post.name[language]}
                    </h4>
                  </div>

                  {/* 2. Technical & Engineering Specifications Grid */}
                  <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2 text-xs">
                    <div className="flex items-center justify-between text-slate-300">
                      <span className="text-slate-400 flex items-center gap-1">
                        <Ruler className="w-3 h-3 text-amber-400" />
                        {language === 'fa' ? 'طول / ارتفاع:' : language === 'ar' ? 'الارتفاع:' : 'Height:'}
                      </span>
                      <strong className="text-white font-mono">{post.height}</strong>
                    </div>

                    <div className="flex items-center justify-between text-slate-300">
                      <span className="text-slate-400 flex items-center gap-1">
                        <Layers className="w-3 h-3 text-amber-400" />
                        {language === 'fa' ? 'ابعاد مقطع:' : language === 'ar' ? 'أبعاد المقطع:' : 'Section:'}
                      </span>
                      <strong className="text-white text-[11px] truncate max-w-[180px]">
                        {post.profileDimensions[language]}
                      </strong>
                    </div>

                    <div className="flex items-center justify-between text-slate-300">
                      <span className="text-slate-400 flex items-center gap-1">
                        <ShieldCheck className="w-3 h-3 text-amber-400" />
                        {language === 'fa' ? 'ضخامت گوشت:' : language === 'ar' ? 'السماكة:' : 'Thickness:'}
                      </span>
                      <strong className="text-white font-mono">{post.thickness}</strong>
                    </div>

                    <div className="flex items-center justify-between text-slate-300">
                      <span className="text-slate-400 flex items-center gap-1">
                        <Award className="w-3 h-3 text-amber-400" />
                        {language === 'fa' ? 'جنس و گرید:' : language === 'ar' ? 'الدرجة والسبائك:' : 'Alloy:'}
                      </span>
                      <strong className="text-amber-300 text-[11px] truncate max-w-[180px]">
                        {post.alloyGrade[language]}
                      </strong>
                    </div>
                  </div>

                  {/* 3 & 4. Dual Pricing Presentation */}
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    
                    {/* Unit Price per post */}
                    <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 flex flex-col justify-between">
                      <span className="text-[10px] text-slate-400 font-medium">
                        {language === 'fa' ? 'قیمت هر عدد پایه:' : language === 'ar' ? 'سعر القائمة الواحدة:' : 'Unit Post Price:'}
                      </span>
                      <div className="mt-1">
                        <span className="text-sm sm:text-base font-black text-amber-300 font-mono">
                          {language === 'en' && '$'}{postUnitPrice.formattedNumber}
                        </span>
                        <span className="text-[10px] text-slate-300 mr-1 rtl:mr-1 rtl:ml-0 font-bold">
                          {postUnitPrice.shortLabel}
                        </span>
                        {language !== 'fa' && (
                          <span className="text-[9px] text-slate-400 block font-mono mt-0.5">
                            ≈ {post.unitPrice.toLocaleString('fa-IR')} ت
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Linear meter installed price with all materials */}
                    <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-950/30 to-slate-950 border border-emerald-500/30 flex flex-col justify-between">
                      <span className="text-[10px] text-emerald-400 font-bold">
                        {language === 'fa' ? 'قیمت متر طول کامل:' : language === 'ar' ? 'سعر المتر الطولي كامل:' : 'Installed Linear Meter:'}
                      </span>
                      <div className="mt-1">
                        <span className="text-sm sm:text-base font-black text-emerald-400 font-mono">
                          {language === 'en' && '$'}{postLinearPrice.formattedNumber}
                        </span>
                        <span className="text-[10px] text-slate-300 mr-1 rtl:mr-1 rtl:ml-0 font-bold">
                          {language === 'fa' ? 'تومان/متر' : language === 'ar' ? 'درهم/م' : 'USD/m'}
                        </span>
                        {language !== 'fa' && (
                          <span className="text-[9px] text-slate-400 block font-mono mt-0.5">
                            {language === 'en'
                              ? `≈ ${post.linearMeterPrice.toLocaleString()} Toman / m`
                              : `≈ ${post.linearMeterPrice.toLocaleString('ar-AE')} تومان / م`}
                          </span>
                        )}
                      </div>
                    </div>

                  </div>

                  {/* Included Hardware snippet */}
                  <div className="text-[11px] text-slate-400 flex items-center gap-1.5 pt-1">
                    <Package className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span className="truncate">
                      {language === 'fa' 
                        ? 'شامل: قالپاق پرسی، اتصالات، فیتینگ و رولبولت هیلتی' 
                        : language === 'ar' 
                        ? 'شامل: غطاء القاعدة، التركيبات، والبراغي الأصلية' 
                        : 'Includes: base cover, brackets, fittings & bolts'}
                    </span>
                  </div>
                </div>

                {/* 5 & 6 & 7. Action Buttons */}
                <div className="pt-3 border-t border-slate-800 space-y-2">
                  
                  {/* Quick Calculator Plus Button */}
                  <button
                    onClick={() => onOpenCalculatorPlus(post)}
                    className="w-full py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 text-xs font-black flex items-center justify-center gap-1.5 shadow-md shadow-amber-500/15 transition-all cursor-pointer"
                  >
                    <Calculator className="w-4 h-4 text-slate-950" />
                    <span>
                      {language === 'fa' 
                        ? 'محاسبه هزینه این مدل در محاسبه‌گر پلاس' 
                        : language === 'ar' 
                        ? 'حساب تكلفة هذا الموديل في حاسبة بلس' 
                        : 'Calculate in Calculator Plus'}
                    </span>
                  </button>

                  <div className="grid grid-cols-2 gap-2">
                    {/* Full Specs Modal Button */}
                    <button
                      onClick={() => onSelectPostDetail(post)}
                      className="py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold flex items-center justify-center gap-1 border border-slate-700 transition-colors cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5 text-amber-400" />
                      <span>{language === 'fa' ? 'مشخصات و فیلم' : language === 'ar' ? 'المواصفات والفيديو' : 'Specs & Video'}</span>
                    </button>

                    {/* Order / Consultation */}
                    <button
                      onClick={() => onOpenConsultation(post.name[language])}
                      className="py-2 rounded-xl bg-slate-950 hover:bg-slate-800 text-slate-300 hover:text-white text-xs font-bold flex items-center justify-center gap-1 border border-slate-800 transition-colors cursor-pointer"
                    >
                      <span>{language === 'fa' ? 'درخواست بازدید' : language === 'ar' ? 'طلب معاينة' : 'Request Survey'}</span>
                    </button>
                  </div>

                </div>

              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
};
