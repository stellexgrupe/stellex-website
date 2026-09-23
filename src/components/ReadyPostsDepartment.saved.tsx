import React, { useState } from 'react';
import { ReadyPostModel } from '../types';
import { READY_POST_MODELS } from '../data/stellexData';
import { useLanguage } from '../context/LanguageContext';
import { convertFromToman, getCurrencyNotice } from '../utils/currency';
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
  DollarSign,
  Package,
  Coins,
  ArrowRight,
  ArrowLeft,
  ArrowUpRight,
  RotateCcw,
  SlidersHorizontal,
  Info,
  Shield,
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
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);
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

  const selectedPost = READY_POST_MODELS.find((p) => p.id === selectedPostId) || null;

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

  const handleNextPost = () => {
    if (!selectedPost) return;
    const currentIndex = filteredPosts.findIndex((p) => p.id === selectedPost.id);
    const nextIndex = (currentIndex + 1) % filteredPosts.length;
    setSelectedPostId(filteredPosts[nextIndex].id);
  };

  const handlePrevPost = () => {
    if (!selectedPost) return;
    const currentIndex = filteredPosts.findIndex((p) => p.id === selectedPost.id);
    const prevIndex = (currentIndex - 1 + filteredPosts.length) % filteredPosts.length;
    setSelectedPostId(filteredPosts[prevIndex].id);
  };

  // Selected post media list
  const selectedMediaList = selectedPost
    ? [selectedPost.image, ...selectedPost.detailImages, ...selectedPost.projectImages]
    : [];
  const selectedCurIdx = selectedPost
    ? (activeMediaIndex[selectedPost.id] || 0) % (selectedMediaList.length || 1)
    : 0;
  const selectedCurrentImg = selectedMediaList[selectedCurIdx] || selectedPost?.image || '';

  const selectedUnitPrice = selectedPost ? convertFromToman(selectedPost.unitPrice, language) : null;
  const selectedLinearPrice = selectedPost
    ? convertFromToman(selectedPost.linearMeterPrice, language)
    : null;

  const BackArrowIcon = isRtl ? ArrowRight : ArrowLeft;

  return (
    <div id="ready-posts-dept" className="space-y-6 animate-in fade-in duration-300">
      
      {/* Main Showcase Stage matching other departments (lux-card) */}
      <div className="lux-card rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-700/80 shadow-2xl relative overflow-hidden">
        
        {/* Subtle Ambient Background */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

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
                    <Layers className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-black text-white">
                      {language === 'fa' 
                        ? 'گالری مدل‌های پایه نرده' 
                        : language === 'ar' 
                        ? 'معرض موديلات القوائم' 
                        : 'Post Models Gallery'}
                    </h4>
                    <span className="text-[11px] text-slate-400 font-medium">
                      {language === 'fa' 
                        ? `${filteredPosts.length} مدل مهندسی‌شده آماده انتخاب` 
                        : language === 'ar' 
                        ? `${filteredPosts.length} نموذج جاهز للاختيار` 
                        : `${filteredPosts.length} models ready to select`}
                    </span>
                  </div>
                </div>

                {selectedPost && (
                  <button
                    onClick={() => setSelectedPostId(null)}
                    className="text-[11px] font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1 bg-amber-500/10 hover:bg-amber-500/20 px-2.5 py-1 rounded-lg border border-amber-500/30 transition-all cursor-pointer"
                    title={language === 'fa' ? 'نمایش توضیحات عمومی' : 'Show general description'}
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>{language === 'fa' ? 'توضیحات دپارتمان' : 'General Info'}</span>
                  </button>
                )}
              </div>

              {/* Compact Filter Tabs */}
              <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-950/80 border border-slate-800 text-xs">
                <button
                  onClick={() => setSelectedCategory('all')}
                  className={`flex-1 py-1.5 px-2 rounded-lg font-bold transition-all cursor-pointer text-center text-[11px] ${
                    selectedCategory === 'all'
                      ? 'bg-amber-500 text-slate-950 shadow'
                      : 'text-slate-400 hover:text-white hover:bg-slate-900'
                  }`}
                >
                  {language === 'fa' ? `همه (${READY_POST_MODELS.length})` : `All (${READY_POST_MODELS.length})`}
                </button>

                <button
                  onClick={() => setSelectedCategory('starter')}
                  className={`flex-1 py-1.5 px-2 rounded-lg font-bold transition-all cursor-pointer text-center text-[11px] flex items-center justify-center gap-1 ${
                    selectedCategory === 'starter'
                      ? 'bg-amber-500 text-slate-950 shadow'
                      : 'text-slate-400 hover:text-white hover:bg-slate-900'
                  }`}
                >
                  <Sparkles className="w-2.5 h-2.5" />
                  <span>{language === 'fa' ? `استارتر (${starterCount})` : `Starter (${starterCount})`}</span>
                </button>

                <button
                  onClick={() => setSelectedCategory('standard')}
                  className={`flex-1 py-1.5 px-2 rounded-lg font-bold transition-all cursor-pointer text-center text-[11px] ${
                    selectedCategory === 'standard'
                      ? 'bg-amber-500 text-slate-950 shadow'
                      : 'text-slate-400 hover:text-white hover:bg-slate-900'
                  }`}
                >
                  {language === 'fa' ? `خطی/اسپیگات (${standardCount})` : `Standard (${standardCount})`}
                </button>
              </div>
            </div>

            {/* Gallery Grid: Products in smaller dimensions side-by-side (ONLY PHOTOS) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-2.5 sm:gap-3 max-h-[580px] overflow-y-auto p-1 pr-1.5 scrollbar-thin scrollbar-thumb-slate-700">
              {filteredPosts.map((post) => {
                const isSelected = selectedPostId === post.id;

                return (
                  <button
                    key={post.id}
                    onClick={() => setSelectedPostId(isSelected ? null : post.id)}
                    className={`group rounded-2xl overflow-hidden border transition-all cursor-pointer relative aspect-4/3 w-full bg-slate-950 block ${
                      isSelected
                        ? 'border-amber-400 ring-2 ring-amber-400 shadow-xl shadow-amber-500/30 scale-[1.03]'
                        : 'border-slate-800 hover:border-amber-400/60 hover:scale-[1.02]'
                    }`}
                    title={post.name[language]}
                  >
                    {/* ONLY Product Image */}
                    <img
                      src={post.image}
                      alt={post.name[language]}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />

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
                    {language === 'fa' ? 'گارانتی و خدمات شرکتی' : 'Warranty & Guarantee'}
                  </div>
                  <div className="text-xs font-black text-amber-300 font-mono">
                    {language === 'fa' ? '۱۰ الی ۲۰ سال ضمانت کتبی تعویض' : '10 to 20 Years Written Warranty'}
                  </div>
                </div>
              </div>
              <span className="text-[10px] font-bold text-amber-400 bg-amber-500/20 px-2 py-0.5 rounded-lg border border-amber-500/30 font-mono">
                MTC ASTM
              </span>
            </div>

          </div>


          {/* ========================================================================= */}
          {/* SIDE 2 (7 COLS): GENERAL DESCRIPTION  OR  REPLACED WITH PRODUCT CARD     */}
          {/* ========================================================================= */}
          <div className="lg:col-span-7 space-y-6">

            {/* CONDITIONAL RENDERING: PRODUCT CARD (when clicked) vs GENERAL DESCRIPTION (default) */}
            {selectedPost ? (
              
              /* ------------------------------------------------------------------- */
              /* SCENARIO A: SELECTED PRODUCT PRESENTATION CARD (طرح کارت معرفی محصول) */
              /* ------------------------------------------------------------------- */
              <div className="lux-card rounded-3xl overflow-hidden border border-amber-500/40 hover:border-amber-400/80 shadow-2xl transition-all duration-300 flex flex-col bg-slate-950/90 animate-in fade-in zoom-in-95 duration-200">
                
                {/* Navigation Toolbar between models + Return to General Overview */}
                <div className="p-3 bg-slate-900/95 border-b border-slate-800 flex items-center justify-between gap-3">
                  <button
                    onClick={() => setSelectedPostId(null)}
                    className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-amber-500 hover:text-slate-950 text-slate-200 text-xs font-bold border border-slate-700 flex items-center gap-1.5 transition-all cursor-pointer"
                  >
                    <BackArrowIcon className="w-3.5 h-3.5" />
                    <span>{language === 'fa' ? 'بازگشت به توضیحات عمومی' : 'Back to Department Info'}</span>
                  </button>

                  <div className="flex items-center gap-1.5">
                    <span className="text-[11px] font-mono text-slate-400 px-2">
                      {language === 'fa'
                        ? `مدل ${(filteredPosts.findIndex((p) => p.id === selectedPost.id) + 1)} از ${filteredPosts.length}`
                        : `Model ${(filteredPosts.findIndex((p) => p.id === selectedPost.id) + 1)} of ${filteredPosts.length}`}
                    </span>

                    <button
                      onClick={handlePrevPost}
                      className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
                      title={language === 'fa' ? 'مدل قبلی' : 'Previous model'}
                    >
                      <ChevronRight className="w-4 h-4 rtl:rotate-0 rotate-180" />
                    </button>

                    <button
                      onClick={handleNextPost}
                      className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
                      title={language === 'fa' ? 'مدل بعدی' : 'Next model'}
                    >
                      <ChevronLeft className="w-4 h-4 rtl:rotate-0 rotate-180" />
                    </button>
                  </div>
                </div>

                {/* 1. Complete Product Media Showcase: Entire image visible (object-contain) */}
                <div className="relative min-h-[340px] sm:min-h-[400px] max-h-[460px] w-full overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center p-4 group border-b border-slate-800">
                  {/* Ambient soft glow backdrop */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center opacity-20 blur-2xl scale-125 pointer-events-none"
                    style={{ backgroundImage: `url(${selectedCurrentImg})` }}
                  />

                  {/* Main Product Image (Full visibility with object-contain - no clipping) */}
                  <img
                    src={selectedCurrentImg}
                    alt={selectedPost.name[language]}
                    className="relative z-10 max-h-[310px] sm:max-h-[370px] w-auto max-w-full object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)] group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Top Floating Badge & Code */}
                  <div className="absolute top-3 inset-x-3 flex items-center justify-between z-20 gap-2 pointer-events-none">
                    <span className="text-xs font-mono font-black bg-slate-950/90 text-amber-400 px-3 py-1 rounded-lg border border-amber-500/40 backdrop-blur-md shrink-0 shadow-lg">
                      {selectedPost.modelCode}
                    </span>
                    
                    <div className="flex items-center gap-1.5 overflow-hidden">
                      {selectedPost.postCategory === 'starter' && (
                        <span className="text-[10px] font-black bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 px-2.5 py-1 rounded-full shadow-md shrink-0 flex items-center gap-1">
                          <Sparkles className="w-3 h-3" />
                          <span>{language === 'fa' ? 'استارتر شیک' : 'Starter'}</span>
                        </span>
                      )}
                      <span className="text-[10px] font-bold bg-slate-900/90 border border-amber-500/30 text-amber-300 px-3 py-1 rounded-full truncate shadow-md backdrop-blur-md">
                        {selectedPost.badge[language]}
                      </span>
                    </div>
                  </div>

                  {/* Gallery Mini Controls */}
                  {selectedMediaList.length > 1 && (
                    <div className="absolute bottom-3 inset-x-3 flex items-center justify-between z-20">
                      <button
                        onClick={(e) => handleMediaPrev(selectedPost.id, selectedMediaList.length, e)}
                        className="p-2 rounded-xl bg-slate-950/85 hover:bg-amber-500 hover:text-slate-950 text-white border border-slate-700 backdrop-blur-md transition-all cursor-pointer shadow-lg"
                        title={language === 'fa' ? 'عکس قبلی' : 'Previous'}
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <span className="text-xs font-mono font-bold bg-slate-950/90 text-slate-200 px-3 py-1 rounded-lg border border-slate-700 backdrop-blur-md shadow-lg">
                        {language === 'fa'
                          ? `تصویر ${selectedCurIdx + 1} از ${selectedMediaList.length}`
                          : `Image ${selectedCurIdx + 1} of ${selectedMediaList.length}`}
                      </span>
                      <button
                        onClick={(e) => handleMediaNext(selectedPost.id, selectedMediaList.length, e)}
                        className="p-2 rounded-xl bg-slate-950/85 hover:bg-amber-500 hover:text-slate-950 text-white border border-slate-700 backdrop-blur-md transition-all cursor-pointer shadow-lg"
                        title={language === 'fa' ? 'عکس بعدی' : 'Next'}
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                </div>

                {/* 2. Card Body: Technical & Pricing Information */}
                <div className="p-5 sm:p-6 space-y-4 flex-1 flex flex-col justify-between">
                  
                  <div className="space-y-3">
                    <div>
                      {selectedPost.workClass && (
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold mb-2">
                          <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                          <span>{selectedPost.workClass[language]}</span>
                        </div>
                      )}
                      <h4 className="text-lg sm:text-xl font-black text-white group-hover:text-amber-300 transition-colors">
                        {selectedPost.name[language]}
                      </h4>
                      <p className="text-xs text-slate-300 leading-relaxed mt-1">
                        {selectedPost.description[language]}
                      </p>
                    </div>

                    {/* Technical & Engineering Specifications Grid */}
                    <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2.5 text-xs">
                      <div className="flex items-center justify-between text-slate-300">
                        <span className="text-slate-400 flex items-center gap-1.5">
                          <Ruler className="w-3.5 h-3.5 text-amber-400" />
                          {language === 'fa' ? 'طول / ارتفاع استاندارد:' : 'Standard Height:'}
                        </span>
                        <strong className="text-white font-mono">{selectedPost.height}</strong>
                      </div>

                      <div className="flex items-center justify-between text-slate-300">
                        <span className="text-slate-400 flex items-center gap-1.5">
                          <Layers className="w-3.5 h-3.5 text-amber-400" />
                          {language === 'fa' ? 'ابعاد و هندسه مقطع:' : 'Section Geometry:'}
                        </span>
                        <strong className="text-white text-xs truncate max-w-[240px]">
                          {selectedPost.profileDimensions[language]}
                        </strong>
                      </div>

                      <div className="flex items-center justify-between text-slate-300">
                        <span className="text-slate-400 flex items-center gap-1.5">
                          <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                          {language === 'fa' ? 'ضخامت گوشت بدنه:' : 'Wall Thickness:'}
                        </span>
                        <strong className="text-white font-mono">{selectedPost.thickness}</strong>
                      </div>

                      <div className="flex items-center justify-between text-slate-300">
                        <span className="text-slate-400 flex items-center gap-1.5">
                          <Award className="w-3.5 h-3.5 text-amber-400" />
                          {language === 'fa' ? 'جنس و استاندارد آلیاژ:' : 'Material & Grade:'}
                        </span>
                        <strong className="text-amber-300 text-xs truncate max-w-[240px]">
                          {selectedPost.alloyGrade[language]}
                        </strong>
                      </div>
                    </div>

                    {/* Dual Pricing Presentation */}
                    {selectedUnitPrice && selectedLinearPrice && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                        
                        {/* Unit Price per post */}
                        <div className="p-3.5 rounded-2xl bg-slate-950/70 border border-slate-800/80 flex flex-col justify-between">
                          <span className="text-[11px] text-slate-400 font-medium">
                            {language === 'fa' ? 'قیمت هر عدد پایه تکی:' : 'Unit Post Price:'}
                          </span>
                          <div className="mt-1.5">
                            <span className="text-base sm:text-lg font-black text-amber-300 font-mono">
                              {language === 'en' && '$'}{selectedUnitPrice.formattedNumber}
                            </span>
                            <span className="text-xs text-slate-300 mr-1 rtl:mr-1 rtl:ml-0 font-bold">
                              {selectedUnitPrice.shortLabel}
                            </span>
                            {language !== 'fa' && (
                              <span className="text-[10px] text-slate-400 block font-mono mt-0.5">
                                ≈ {selectedPost.unitPrice.toLocaleString('fa-IR')} ت
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Linear meter installed price with all materials */}
                        <div className="p-3.5 rounded-2xl bg-gradient-to-br from-emerald-950/30 to-slate-950 border border-emerald-500/30 flex flex-col justify-between">
                          <span className="text-[11px] text-emerald-400 font-bold">
                            {language === 'fa' ? 'قیمت متر طول کامل با مصالح:' : 'Installed Linear Meter:'}
                          </span>
                          <div className="mt-1.5">
                            <span className="text-base sm:text-lg font-black text-emerald-400 font-mono">
                              {language === 'en' && '$'}{selectedLinearPrice.formattedNumber}
                            </span>
                            <span className="text-xs text-slate-300 mr-1 rtl:mr-1 rtl:ml-0 font-bold">
                              {language === 'fa' ? 'تومان/متر' : 'USD/m'}
                            </span>
                            {language !== 'fa' && (
                              <span className="text-[10px] text-slate-400 block font-mono mt-0.5">
                                ≈ {selectedPost.linearMeterPrice.toLocaleString()} Toman / m
                              </span>
                            )}
                          </div>
                        </div>

                      </div>
                    )}

                    {/* Included Hardware snippet */}
                    <div className="text-xs text-slate-400 flex items-center gap-2 pt-1">
                      <Package className="w-4 h-4 text-amber-400 shrink-0" />
                      <span className="truncate">
                        {language === 'fa' 
                          ? 'شامل: قالپاق پرسی، اتصالات، فیتینگ و رولبولت هیلتی' 
                          : 'Includes: base cover, brackets, fittings & bolts'}
                      </span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-4 border-t border-slate-800 space-y-2.5">
                    
                    {/* Quick Calculator Plus Button */}
                    <button
                      onClick={() => onOpenCalculatorPlus(selectedPost)}
                      className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 text-xs sm:text-sm font-black flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 transition-all cursor-pointer"
                    >
                      <Calculator className="w-4 h-4 text-slate-950" />
                      <span>
                        {language === 'fa' 
                          ? 'محاسبه هزینه این مدل در محاسبه‌گر پلاس' 
                          : 'Calculate in Calculator Plus'}
                      </span>
                    </button>

                    <div className="grid grid-cols-2 gap-2.5">
                      {/* Full Specs Modal Button */}
                      <button
                        onClick={() => onSelectPostDetail(selectedPost)}
                        className="py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold flex items-center justify-center gap-1.5 border border-slate-700 transition-colors cursor-pointer"
                      >
                        <Eye className="w-4 h-4 text-amber-400" />
                        <span>{language === 'fa' ? 'مشخصات و فیلم' : 'Specs & Video'}</span>
                      </button>

                      {/* Order / Consultation */}
                      <button
                        onClick={() => onOpenConsultation(selectedPost.name[language])}
                        className="py-2.5 rounded-xl bg-slate-950 hover:bg-slate-800 text-slate-300 hover:text-white text-xs font-bold flex items-center justify-center gap-1.5 border border-slate-800 transition-colors cursor-pointer"
                      >
                        <span>{language === 'fa' ? 'درخواست بازدید' : 'Request Survey'}</span>
                      </button>
                    </div>

                  </div>

                </div>

              </div>

            ) : (

              /* ------------------------------------------------------------------- */
              /* SCENARIO B: GENERAL DEPARTMENT OVERVIEW (توضیحات کادری دپارتمان)     */
              /* ------------------------------------------------------------------- */
              <div className="space-y-6 animate-in fade-in duration-300">
                
                {/* Header & Value Proposition */}
                <div className="space-y-3">
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
                          ? `سعر تنفيذ المتر: من ${minPriceConverted.formattedNumber} إلى ${maxPriceConverted.formattedNumber}` 
                          : `Execution: $${minPriceConverted.formattedNumber} - $${maxPriceConverted.formattedNumber} USD / m`}
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

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {language === 'fa'
                      ? 'کلیه پایه‌های استیلکس با آلیاژهای فابریک ۳۰۴ و ۳۱۶ نگیر، ماشین‌کاری دقیق CNC و پرداخت سوپر میرور یا پوشش نانو PVD طلایی تولید می‌شوند. همراه با قالپاق، بست‌ها، متعلقات و گارانتی کتبی تعویض.'
                      : language === 'ar'
                      ? 'تم تصنيع جميع القوائم من الفولاذ المقاوم للصدأ ٣٠٤ و ٣١٦ بتقنيات CNC وتلميع المرآة الفائق أو طلاء PVD الذهبي المقاوم للتآكل.'
                      : 'All STELLEX ready posts are precision manufactured from certified 304 and 316 marine-grade alloys with super mirror 8K polish or vacuum titanium PVD.'}
                  </p>
                </div>

                {/* 4 Feature Highlights Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-amber-500/40 transition-colors">
                    <div className="flex items-center gap-2 mb-1.5 text-amber-400">
                      <CheckCircle2 className="w-4 h-4 shrink-0" />
                      <h5 className="text-xs font-black text-slate-100">
                        {language === 'fa' ? 'نصب سریع بدون جوشکاری' : 'Bolt-on Assembly'}
                      </h5>
                    </div>
                    <p className="text-[11px] text-slate-400 leading-relaxed">
                      {language === 'fa'
                        ? 'قلاویزکاری CNC در کارخانه و مونتاژ تمام‌پیچ و مهره در محل بدون تخریب و دود جوشکاری.'
                        : 'Factory CNC tapping and 100% mechanical bolt assembly on site.'}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-amber-500/40 transition-colors">
                    <div className="flex items-center gap-2 mb-1.5 text-amber-400">
                      <CheckCircle2 className="w-4 h-4 shrink-0" />
                      <h5 className="text-xs font-black text-slate-100">
                        {language === 'fa' ? 'استیل ۳۰۴ و ۳۱۶ نگیر' : 'Certified Marine Alloys'}
                      </h5>
                    </div>
                    <p className="text-[11px] text-slate-400 leading-relaxed">
                      {language === 'fa'
                        ? 'تضمین متالوژی عدم زنگ‌زدگی و سیاهی، پرداخت سوپر میرور ۸۰۰ و مقاومت بی‌رقیب محیطی.'
                        : 'Guaranteed rust-proof metallurgical grade with super mirror 8K polish.'}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-amber-500/40 transition-colors">
                    <div className="flex items-center gap-2 mb-1.5 text-amber-400">
                      <CheckCircle2 className="w-4 h-4 shrink-0" />
                      <h5 className="text-xs font-black text-slate-100">
                        {language === 'fa' ? 'پکینگ کامل کارخانه‌ای' : 'Complete Hardware Pack'}
                      </h5>
                    </div>
                    <p className="text-[11px] text-slate-400 leading-relaxed">
                      {language === 'fa'
                        ? 'ارسال بسته کامل شامل قالپاق پرسی، اتصالات، فیتینگ‌ها و انکر بولت‌های اختصاصی.'
                        : 'Full package with press-fit flange covers, brackets, and anchor bolts.'}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-amber-500/40 transition-colors">
                    <div className="flex items-center gap-2 mb-1.5 text-amber-400">
                      <CheckCircle2 className="w-4 h-4 shrink-0" />
                      <h5 className="text-xs font-black text-slate-100">
                        {language === 'fa' ? 'ضمانت کتبی ۱۰ الی ۲۰ ساله' : '10-20 Year Warranty'}
                      </h5>
                    </div>
                    <p className="text-[11px] text-slate-400 leading-relaxed">
                      {language === 'fa'
                        ? 'صدور ضمانت‌نامه رسمی شرکتی و خدمات پس از فروش دائم برای تمامی مدل‌ها.'
                        : 'Official written warranty certificates with permanent spare parts support.'}
                    </p>
                  </div>
                </div>

                {/* Interactive Click Prompt Helper */}
                <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-500/15 via-slate-900 to-amber-500/10 border border-amber-500/30 flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-amber-500/20 text-amber-400 shrink-0 animate-pulse">
                    <Info className="w-5 h-5" />
                  </div>
                  <div className="text-xs text-slate-300 leading-relaxed">
                    <strong className="text-amber-300 font-bold block mb-0.5">
                      {language === 'fa' ? 'راهنمای مشاهده و انتخاب مدل‌ها:' : 'Interactive Model Selection:'}
                    </strong>
                    {language === 'fa'
                      ? 'روی هر یک از عکس‌های پایه‌ها در گالری روبرو کلیک فرمایید تا کارت مشخصات فنی، تصاویر زوم، قیمت متر طول و استعلام آنلاین برای آن مدل در این بخش نمایان شود.'
                      : 'Click on any post photo in the gallery to reveal its full technical specifications, dual pricing, zoom photos, and instant calculator here.'}
                  </div>
                </div>

                {/* CTA Action Button to Calculator Plus */}
                <div className="pt-2">
                  <button
                    onClick={() => onOpenCalculatorPlus()}
                    className="w-full sm:w-auto lux-btn-gold px-7 py-4 rounded-2xl text-xs sm:text-sm font-black flex items-center justify-center gap-2 shadow-xl shadow-amber-500/20 cursor-pointer"
                  >
                    <Calculator className="w-5 h-5 text-slate-950" />
                    <span>
                      {language === 'fa' 
                        ? 'ورود به محاسبه‌گر پلاس (محاسبه آنلاین فاکتور)' 
                        : 'Open Calculator Plus'}
                    </span>
                  </button>
                </div>

              </div>

            )}

          </div>

        </div>

      </div>

    </div>
  );
};
