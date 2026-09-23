import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { LandscapingProduct } from '../types';
import { LANDSCAPING_PRODUCTS } from '../data/landscapingData';
import { convertFromToman, getCurrencyNotice } from '../utils/currency';
import { EngineeringCatalogModal } from './EngineeringCatalogModal';
import {
  Trees,
  Sparkles,
  ShieldCheck,
  Compass,
  Maximize2,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  ArrowLeft,
  Eye,
  X,
  Check,
  CheckCircle2,
  Table2,
  Coins,
  DollarSign,
  Package,
  Waves,
  Sun,
  Droplets,
  ExternalLink,
  Layers,
  Palette,
  Footprints
} from 'lucide-react';

interface LandscapingDepartmentProps {
  onOpenConsultation: (productName?: string) => void;
  onOpenGallery: (images: string[], title: string) => void;
}

export const LandscapingDepartment: React.FC<LandscapingDepartmentProps> = ({
  onOpenConsultation,
  onOpenGallery,
}) => {
  const { language, isRtl } = useLanguage();

  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeMediaIndex, setActiveMediaIndex] = useState<{ [productId: string]: number }>({});
  const [selectedFinishIndex, setSelectedFinishIndex] = useState<{ [productId: string]: number }>({});
  const [imageError, setImageError] = useState<{ [productId: string]: boolean }>({});
  const [infoTab, setInfoTab] = useState<'overview' | 'comparison'>('overview');
  const [modalProduct, setModalProduct] = useState<LandscapingProduct | null>(null);

  const currencyNotice = getCurrencyNotice(language);
  const minPrice = Math.min(...LANDSCAPING_PRODUCTS.map((p) => p.priceToman));
  const maxPrice = Math.max(...LANDSCAPING_PRODUCTS.map((p) => p.priceToman));
  const minPriceConverted = convertFromToman(minPrice, language);
  const maxPriceConverted = convertFromToman(maxPrice, language);

  const filteredProducts = LANDSCAPING_PRODUCTS.filter((product) => {
    if (selectedCategory === 'all') return true;
    return product.category === selectedCategory;
  });

  const selectedProduct = LANDSCAPING_PRODUCTS.find((p) => p.id === selectedProductId) || null;

  const handleMediaNext = (productId: string, total: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveMediaIndex((prev) => {
      const current = prev[productId] || 0;
      return { ...prev, [productId]: (current + 1) % total };
    });
  };

  const handleMediaPrev = (productId: string, total: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveMediaIndex((prev) => {
      const current = prev[productId] || 0;
      return { ...prev, [productId]: (current - 1 + total) % total };
    });
  };

  const handleNextModel = () => {
    if (!selectedProduct) return;
    const currentIndex = filteredProducts.findIndex((p) => p.id === selectedProduct.id);
    const nextIndex = (currentIndex + 1) % filteredProducts.length;
    setSelectedProductId(filteredProducts[nextIndex].id);
  };

  const handlePrevModel = () => {
    if (!selectedProduct) return;
    const currentIndex = filteredProducts.findIndex((p) => p.id === selectedProduct.id);
    const prevIndex = (currentIndex - 1 + filteredProducts.length) % filteredProducts.length;
    setSelectedProductId(filteredProducts[prevIndex].id);
  };

  const handleFinishSelect = (productId: string, finishIdx: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedFinishIndex((prev) => ({ ...prev, [productId]: finishIdx }));
  };

  // Media list for selected product
  const selectedMediaList = selectedProduct
    ? [selectedProduct.image, ...selectedProduct.detailImages]
    : [];
  const selectedCurIdx = selectedProduct
    ? (activeMediaIndex[selectedProduct.id] || 0) % (selectedMediaList.length || 1)
    : 0;
  const selectedCurrentImg = selectedMediaList[selectedCurIdx] || selectedProduct?.image || '';

  const selectedPriceObj = selectedProduct
    ? convertFromToman(selectedProduct.priceToman, language)
    : null;

  const BackArrowIcon = isRtl ? ArrowRight : ArrowLeft;

  // Counts for filters
  const waterWallCount = LANDSCAPING_PRODUCTS.filter((p) => p.category === 'water_wall').length;
  const poolCascadeCount = LANDSCAPING_PRODUCTS.filter((p) => p.category === 'pool_cascade').length;
  const entranceCount = LANDSCAPING_PRODUCTS.filter((p) => p.category === 'entrance_fountain').length;
  const bridgeCount = LANDSCAPING_PRODUCTS.filter((p) => p.category === 'garden_bridge').length;

  return (
    <div id="landscaping-department" className="space-y-6 animate-in fade-in duration-300">
      
      {/* Main Showcase Stage matching ReadyPosts & Radiators layout (lux-card) */}
      <div className="lux-card rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-700/80 shadow-2xl relative overflow-hidden">
        
        {/* Subtle Ambient Background */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
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
                  <div className="p-1.5 rounded-lg bg-emerald-500/20 text-emerald-400">
                    <Trees className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-black text-white">
                      {language === 'fa' 
                        ? 'گالری آبنماها و سازه‌های لندسکیپ' 
                        : language === 'ar' 
                        ? 'معرض النوافير والهياكل الخارجية' 
                        : 'Landscape & Water Architecture'}
                    </h4>
                    <span className="text-[11px] text-slate-400 font-medium">
                      {language === 'fa' 
                        ? `${filteredProducts.length} شاهکار دیزاین فضای باز آماده سفارش` 
                        : language === 'ar' 
                        ? `${filteredProducts.length} تصاميم معمارية فاخرة جاهزة للطلب` 
                        : `${filteredProducts.length} architectural outdoor models available`}
                    </span>
                  </div>
                </div>

                {selectedProduct && (
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => setSelectedProductId(null)}
                      className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-[11px] font-bold border border-slate-700 transition-colors cursor-pointer"
                    >
                      {language === 'fa' ? 'بستن کارت' : 'Deselect'}
                    </button>
                  </div>
                )}
              </div>

              {/* Filter Pills */}
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-1 p-1 rounded-xl bg-slate-950/80 border border-slate-800 text-xs">
                <button
                  onClick={() => setSelectedCategory('all')}
                  className={`py-1.5 px-2 rounded-lg font-bold transition-all cursor-pointer text-center text-[11px] truncate ${
                    selectedCategory === 'all'
                      ? 'bg-amber-500 text-slate-950 shadow font-black'
                      : 'text-slate-400 hover:text-white hover:bg-slate-900'
                  }`}
                >
                  <span className="truncate">{language === 'fa' ? `همه (${LANDSCAPING_PRODUCTS.length})` : `All (${LANDSCAPING_PRODUCTS.length})`}</span>
                </button>

                <button
                  onClick={() => setSelectedCategory('water_wall')}
                  className={`py-1.5 px-2 rounded-lg font-bold transition-all cursor-pointer text-center text-[11px] flex items-center justify-center gap-1 truncate ${
                    selectedCategory === 'water_wall'
                      ? 'bg-amber-500 text-slate-950 shadow font-black'
                      : 'text-amber-400 hover:text-white hover:bg-slate-900'
                  }`}
                >
                  <Waves className="w-3 h-3 shrink-0" />
                  <span className="truncate">{language === 'fa' ? `دیوار آبنما (${waterWallCount})` : `Water Wall (${waterWallCount})`}</span>
                </button>

                <button
                  onClick={() => setSelectedCategory('pool_cascade')}
                  className={`py-1.5 px-2 rounded-lg font-bold transition-all cursor-pointer text-center text-[11px] flex items-center justify-center gap-1 truncate ${
                    selectedCategory === 'pool_cascade'
                      ? 'bg-amber-500 text-slate-950 shadow font-black'
                      : 'text-slate-400 hover:text-white hover:bg-slate-900'
                  }`}
                >
                  <Droplets className="w-2.5 h-2.5 shrink-0" />
                  <span className="truncate">{language === 'fa' ? `استخر/پرگولا (${poolCascadeCount})` : `Bio-Pool (${poolCascadeCount})`}</span>
                </button>

                <button
                  onClick={() => setSelectedCategory('entrance_fountain')}
                  className={`py-1.5 px-2 rounded-lg font-bold transition-all cursor-pointer text-center text-[11px] flex items-center justify-center gap-1 truncate ${
                    selectedCategory === 'entrance_fountain'
                      ? 'bg-amber-500 text-slate-950 shadow font-black'
                      : 'text-slate-400 hover:text-white hover:bg-slate-900'
                  }`}
                >
                  <Sun className="w-2.5 h-2.5 shrink-0" />
                  <span className="truncate">{language === 'fa' ? `ورودی/فواره (${entranceCount})` : `Entrance (${entranceCount})`}</span>
                </button>

                <button
                  onClick={() => setSelectedCategory('garden_bridge')}
                  className={`py-1.5 px-2 rounded-lg font-bold transition-all cursor-pointer text-center text-[11px] flex items-center justify-center gap-1 truncate ${
                    selectedCategory === 'garden_bridge'
                      ? 'bg-amber-500 text-slate-950 shadow font-black'
                      : 'text-slate-400 hover:text-white hover:bg-slate-900'
                  }`}
                >
                  <Footprints className="w-2.5 h-2.5 shrink-0" />
                  <span className="truncate">{language === 'fa' ? `پل و گذرگاه (${bridgeCount})` : `Bridge (${bridgeCount})`}</span>
                </button>
              </div>
            </div>

            {/* Gallery Grid: Products in smaller dimensions side-by-side (matching ReadyPosts & Radiators style) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-2.5 sm:gap-3 max-h-[580px] overflow-y-auto p-1 pr-1.5 scrollbar-thin scrollbar-thumb-slate-700">
              {filteredProducts.map((product) => {
                const isSelected = selectedProductId === product.id;
                const currentImg = imageError[product.id] ? product.fallbackImage : product.image;

                return (
                  <button
                    key={product.id}
                    onClick={() => setSelectedProductId(isSelected ? null : product.id)}
                    className={`group rounded-2xl overflow-hidden border transition-all cursor-pointer relative aspect-4/3 w-full bg-slate-950 block ${
                      isSelected
                        ? 'border-amber-400 ring-2 ring-amber-400 shadow-xl shadow-amber-500/30 scale-[1.03]'
                        : 'border-slate-800 hover:border-amber-400/60 hover:scale-[1.02]'
                    }`}
                    title={product.name[language]}
                  >
                    {/* ONLY Product Image */}
                    <img
                      src={currentImg}
                      alt={product.name[language]}
                      loading="lazy"
                      decoding="async"
                      onError={() => setImageError((prev) => ({ ...prev, [product.id]: true }))}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />

                    {/* Category mini badge in corner */}
                    <span className="absolute top-1.5 right-1.5 rtl:right-1.5 rtl:left-auto bg-slate-950/85 border border-amber-500/40 text-amber-400 text-[9px] font-black px-1.5 py-0.5 rounded shadow backdrop-blur-md flex items-center gap-0.5 z-10">
                      {product.category === 'water_wall' ? (
                        <span>{language === 'fa' ? 'دیوار آبنما' : 'Water-Wall'}</span>
                      ) : product.category === 'pool_cascade' ? (
                        <span>{language === 'fa' ? 'آبشار استخر' : 'Bio-Cascade'}</span>
                      ) : product.category === 'entrance_fountain' ? (
                        <span>{language === 'fa' ? 'فواره ورودی' : 'Entrance'}</span>
                      ) : (
                        <span>{language === 'fa' ? 'پل و گذرگاه' : 'Bridge'}</span>
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
                    {language === 'fa' ? 'استاندارد سازه‌های ساحلی و استخری' : 'Marine & Pool Standard'}
                  </div>
                  <div className="text-xs font-black text-amber-300 font-mono">
                    {language === 'fa' ? '۱۵ سال گارانتی کتبی عدم خوردگی در کلر و آب شور' : '15-Year Full Warranty in Saltwater & Chlorine'}
                  </div>
                </div>
              </div>
              <span className="text-[10px] font-bold text-amber-400 bg-amber-500/20 px-2 py-0.5 rounded-lg border border-amber-500/30 font-mono">
                ASTM B117 / 316L
              </span>
            </div>

          </div>


          {/* ========================================================================= */}
          {/* SIDE 2 (7 COLS): GENERAL DESCRIPTION  OR  REPLACED WITH PRODUCT CARD     */}
          {/* ========================================================================= */}
          <div className="lg:col-span-7 space-y-6">

            {/* CONDITIONAL RENDERING: PRODUCT CARD (when clicked) vs GENERAL DESCRIPTION (default) */}
            {selectedProduct ? (
              
              /* ------------------------------------------------------------------- */
              /* SCENARIO A: SELECTED PRODUCT PRESENTATION CARD (طرح کارت معرفی محصول) */
              /* ------------------------------------------------------------------- */
              <div className="lux-card rounded-3xl overflow-hidden border border-amber-500/40 hover:border-amber-400/80 shadow-2xl transition-all duration-300 flex flex-col bg-slate-950/90 animate-in fade-in zoom-in-95 duration-200">
                
                {/* Navigation Toolbar between models + Return to General Overview */}
                <div className="p-3 bg-slate-900/95 border-b border-slate-800 flex items-center justify-between gap-3">
                  <button
                    onClick={() => setSelectedProductId(null)}
                    className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-amber-500 hover:text-slate-950 text-slate-200 text-xs font-bold border border-slate-700 flex items-center gap-1.5 transition-all cursor-pointer"
                  >
                    <BackArrowIcon className="w-3.5 h-3.5" />
                    <span>{language === 'fa' ? 'بازگشت به توضیحات عمومی' : 'Back to Department Info'}</span>
                  </button>

                  <div className="flex items-center gap-1.5">
                    <span className="text-[11px] font-mono text-slate-400 px-2">
                      {language === 'fa'
                        ? `محصول ${(filteredProducts.findIndex((p) => p.id === selectedProduct.id) + 1)} از ${filteredProducts.length}`
                        : `Model ${(filteredProducts.findIndex((p) => p.id === selectedProduct.id) + 1)} of ${filteredProducts.length}`}
                    </span>

                    <button
                      onClick={handlePrevModel}
                      className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors cursor-pointer"
                      title={language === 'fa' ? 'محصول قبلی' : 'Previous model'}
                    >
                      <ChevronRight className="w-4 h-4 rtl:rotate-0 rotate-180" />
                    </button>

                    <button
                      onClick={handleNextModel}
                      className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors cursor-pointer"
                      title={language === 'fa' ? 'محصول بعدی' : 'Next model'}
                    >
                      <ChevronLeft className="w-4 h-4 rtl:rotate-0 rotate-180" />
                    </button>
                  </div>
                </div>

                {/* Product Presentation Body: Side-by-Side on md+ for maximum image display */}
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
                      alt={selectedProduct.name[language]}
                      loading="lazy"
                      decoding="async"
                      className="relative z-10 max-h-[320px] sm:max-h-[360px] md:max-h-[420px] w-auto max-w-full object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.85)] group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Top Floating Badge & Code */}
                    <div className="absolute top-2.5 inset-x-2.5 flex items-center justify-between z-20 gap-2 pointer-events-none">
                      <div className="flex items-center gap-1.5 pointer-events-auto">
                        <span className="text-[11px] font-mono font-black bg-slate-950/90 text-amber-400 px-2.5 py-0.5 rounded-lg border border-amber-500/40 backdrop-blur-md shrink-0 shadow">
                          {selectedProduct.modelCode}
                        </span>
                      </div>
                      
                      <span className="text-[9px] font-bold bg-slate-900/90 border border-emerald-500/30 text-emerald-300 px-2 py-0.5 rounded-full truncate shadow backdrop-blur-md">
                        {selectedProduct.badge[language]}
                      </span>
                    </div>

                    {/* Gallery Mini Controls */}
                    {selectedMediaList.length > 1 && (
                      <div className="absolute bottom-2 inset-x-2 flex items-center justify-between z-20">
                        <button
                          onClick={(e) => handleMediaPrev(selectedProduct.id, selectedMediaList.length, e)}
                          className="p-1.5 rounded-lg bg-slate-950/85 hover:bg-amber-500 hover:text-slate-950 text-white border border-slate-700 backdrop-blur-md transition-all cursor-pointer shadow"
                          title={language === 'fa' ? 'عکس قبلی' : 'Previous'}
                        >
                          <ChevronLeft className="w-3.5 h-3.5" />
                        </button>
                        <span className="text-[10px] font-mono font-bold bg-slate-950/90 text-slate-300 px-2 py-0.5 rounded-md border border-slate-700 backdrop-blur-md shadow">
                          {selectedCurIdx + 1} / {selectedMediaList.length}
                        </span>
                        <button
                          onClick={(e) => handleMediaNext(selectedProduct.id, selectedMediaList.length, e)}
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
                        {selectedProduct.designerSeries && (
                          <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-[10px] font-bold mb-1">
                            <Sparkles className="w-3 h-3 text-emerald-400 shrink-0" />
                            <span>{selectedProduct.designerSeries[language]}</span>
                          </div>
                        )}
                        <h4 className="text-base sm:text-lg font-black text-white group-hover:text-amber-300 transition-colors">
                          {selectedProduct.name[language]}
                        </h4>
                        <p className="text-[11px] text-slate-300 leading-snug line-clamp-2 mt-0.5">
                          {selectedProduct.description[language]}
                        </p>
                      </div>

                      {/* Streamlined Landscape Architect Tip Strip */}
                      <div className="px-3 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-[11px] flex items-center gap-2 text-slate-300">
                        <Compass className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span className="truncate">
                          <strong className="text-amber-300 font-bold">{language === 'fa' ? 'پیشنهاد دیزاینر لندسکیپ:' : 'Landscape Tip:'}</strong>{' '}
                          {selectedProduct.outdoorSuitability[0][language]} • {selectedProduct.landscapeDesignTip[language].split('.')[0]}
                        </span>
                      </div>

                      {/* Compact 4-Cell Engineering Specifications Grid */}
                      <div className="grid grid-cols-2 gap-1.5 p-2 rounded-xl bg-slate-950/80 border border-slate-800 text-[11px]">
                        <div className="p-2 rounded-lg bg-slate-900/60 border border-slate-800/60">
                          <span className="text-[10px] text-slate-400 block mb-0.5">{language === 'fa' ? 'ابعاد کلی و دهانه' : 'Dimensions & Lip'}</span>
                          <strong className="text-white font-mono text-xs block truncate" title={`${selectedProduct.dimensions.height} × ${selectedProduct.dimensions.width}`}>
                            {selectedProduct.dimensions.height.split(' ')[0]} × {selectedProduct.dimensions.width.split(' ')[0]}
                          </strong>
                        </div>

                        <div className="p-2 rounded-lg bg-slate-900/60 border border-slate-800/60">
                          <span className="text-[10px] text-slate-400 block mb-0.5">{language === 'fa' ? 'دبی جریان آب' : 'Water Flow Rate'}</span>
                          <strong className="text-amber-400 font-mono text-xs block truncate">
                            {selectedProduct.hydraulicSpecs.flowRate.split('(')[0]}
                          </strong>
                        </div>

                        <div className="p-2 rounded-lg bg-slate-900/60 border border-slate-800/60">
                          <span className="text-[10px] text-slate-400 block mb-0.5">{language === 'fa' ? 'توان پمپ و نورپردازی' : 'Pump & IP68 Light'}</span>
                          <strong className="text-white text-xs block truncate">
                            {selectedProduct.hydraulicSpecs.pumpPower.split('با')[0]} (IP68)
                          </strong>
                        </div>

                        <div className="p-2 rounded-lg bg-slate-900/60 border border-slate-800/60">
                          <span className="text-[10px] text-slate-400 block mb-0.5">{language === 'fa' ? 'آلیاژ ساختاری' : 'Marine Alloy'}</span>
                          <strong className="text-emerald-400 text-xs block truncate">
                            استیل ۳۱۶L دریایی ضدکلر
                          </strong>
                        </div>
                      </div>

                      {/* Finishes Selector: Sleek Inline Row */}
                      <div className="flex items-center gap-2 text-[11px] py-0.5">
                        <span className="text-slate-400 shrink-0 flex items-center gap-1 text-[10px]">
                          <Palette className="w-3 h-3 text-amber-400" />
                          <span>{language === 'fa' ? 'فینیش:' : 'Finish:'}</span>
                        </span>
                        <div className="flex items-center gap-1.5 flex-wrap">
                          {selectedProduct.availableFinishes.map((fin, idx) => {
                            const activeFin = selectedFinishIndex[selectedProduct.id] || 0;
                            return (
                              <button
                                key={idx}
                                onClick={(e) => handleFinishSelect(selectedProduct.id, idx, e)}
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
                                ≈ {selectedProduct.priceToman.toLocaleString('fa-IR')} ت
                              </span>
                            )}
                          </div>

                          <div className="flex items-center gap-1.5 text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded-lg border border-emerald-500/20 font-medium">
                            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                            <span>{language === 'fa' ? '۱۵ سال ضمانت تعویض' : '15-Yr Warranty'}</span>
                          </div>
                        </div>
                      )}

                      {/* Included Hardware snippet */}
                      <div className="text-[10px] text-slate-400 flex items-center gap-1.5 pt-0.5 truncate">
                        <Package className="w-3 h-3 text-amber-400 shrink-0" />
                        <span className="truncate">
                          {language === 'fa' 
                            ? 'شامل: نازل استیل ۳۱۶L، روشنایی خطی IP68، اتصالات ورودی فلنجی، فیلتر توری و کیت شاسی' 
                            : 'Includes: 316L weir nozzle, IP68 luminaire, flanged inlets, leaf strainer & bracket kit'}
                        </span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-3 border-t border-slate-800 space-y-2">
                      
                      {/* Primary Gold Button */}
                      <button
                        onClick={() => onOpenConsultation(selectedProduct.name[language])}
                        className="w-full py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 text-xs sm:text-sm font-black flex items-center justify-center gap-2 shadow-md shadow-amber-500/20 transition-all cursor-pointer"
                      >
                        <Trees className="w-4 h-4 text-slate-950" />
                        <span>
                          {language === 'fa' 
                            ? 'استعلام قیمت و درخواست پیش‌فاکتور این محصول' 
                            : 'Request Formal Invoice for this Product'}
                        </span>
                      </button>

                      <div className="grid grid-cols-2 gap-2">
                        {/* Full Specs Modal Button */}
                        <button
                          onClick={() => setModalProduct(selectedProduct)}
                          className="py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-[11px] font-bold flex items-center justify-center gap-1.5 border border-slate-700 transition-colors cursor-pointer"
                        >
                          <Eye className="w-3.5 h-3.5 text-amber-400" />
                          <span>{language === 'fa' ? 'شناسنامه مهندسی کامل' : 'Full Technical Specs'}</span>
                        </button>

                        {/* View Zoom Photos Gallery */}
                        <button
                          onClick={() => onOpenGallery([selectedProduct.image, ...selectedProduct.detailImages], selectedProduct.name[language])}
                          className="py-2 rounded-xl bg-slate-950 hover:bg-slate-800 text-slate-300 hover:text-white text-[11px] font-bold flex items-center justify-center gap-1.5 border border-slate-800 transition-colors cursor-pointer"
                        >
                          <Maximize2 className="w-3.5 h-3.5 text-amber-400" />
                          <span>{language === 'fa' ? 'تصاویر زوم و گالری' : 'Zoom & Gallery'}</span>
                        </button>
                      </div>

                      {/* Reference link to Pinterest */}
                      {selectedProduct.pinterestInspiration && (
                        <a
                          href={selectedProduct.pinterestInspiration}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="w-full py-1.5 px-3 rounded-xl bg-red-950/30 hover:bg-red-900/40 text-red-300 hover:text-red-200 text-[11px] font-bold flex items-center justify-center gap-1.5 border border-red-500/25 transition-all mt-1"
                        >
                          <ExternalLink className="w-3 h-3 text-red-400" />
                          <span>
                            {language === 'fa' 
                              ? 'مشاهده مرجع الهام در پین‌ترست (Pinterest Ref)' 
                              : 'View Inspiration Reference on Pinterest'}
                          </span>
                        </a>
                      )}

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
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold">
                      <Trees className="w-3.5 h-3.5" />
                      <span>
                        {language === 'fa' 
                          ? 'دپارتمان تخصصی محوطه‌سازی، آبنماها و فضای باز استیلکس' 
                          : language === 'ar' 
                          ? 'قسم تنسيق الحدائق والنوافير والمساحات الخارجية - ستيليكس' 
                          : 'STELLEX Architectural Landscape & Water Architecture'}
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
                          ? `شروع برآورد پایه از ۴۲ تا ۵۴ میلیون تومان` 
                          : language === 'ar' 
                          ? `الأسعار تبدأ من: ${minPriceConverted.formattedNumber} إلى ${maxPriceConverted.formattedNumber}` 
                          : `Starting Price: $${minPriceConverted.formattedNumber} - $${maxPriceConverted.formattedNumber}`}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-tight">
                    {language === 'fa'
                      ? 'محوطه‌سازی و آبنماهای مدرن معماری، هارمونی آب، استیل ۳۱۶ و طبیعت'
                      : language === 'ar'
                      ? 'نوافير معمارية وهياكل خارجية تجمع بين جمال الماء وستانلس ستيل ٣١٦ والطبيعة'
                      : 'Architectural Water Curtains, Bio-Pool Weirs & Outdoor Living Masterpieces'}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {language === 'fa'
                      ? `طراحی و ساخت المان‌های هیدرولیکی فضای باز، پرده‌های آب شیشه‌ای لمینار، آبشارهای صخره‌ای استخر و فواره‌های تندیس‌گون ورودی لابی با آلیاژ انحصاری استنلس استیل ۳۱۶L مولیبدن‌دار ضدکلر و تست ۱۰۰۰ ساعت مه نمکی با ۱۵ سال گارانتی کتبی تعویض استیلکس.`
                      : language === 'ar'
                      ? `تصميم وتنفيذ شلالات المسابح المقاومة للكلور، مطابخ الشواء الخارجية، المظلات والبرغولا ومصبات المياه المعمارية بستانلس ستيل ٣١٦L مع ضمان ١٥ عاماً.`
                      : `Custom fabrication of swimming pool water curtains, 316L marine-grade cascade weirs, and sculptural entry water features engineered with hydraulic laminar flow and 15-year corrosion warranty.`}
                  </p>
                </div>

                {/* OVERVIEW CONTENT */}
                <div className="space-y-4 animate-in fade-in duration-200">
                    {/* 4 Feature Highlights Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                      <div className="p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-amber-500/40 transition-colors">
                        <div className="flex items-center gap-2 mb-1.5 text-emerald-400">
                          <CheckCircle2 className="w-4 h-4 shrink-0" />
                          <h5 className="text-xs font-black text-slate-100">
                            {language === 'fa' ? 'آلیاژ استیل ۳۱۶L مولیبدن‌دار سوپردریایی' : 'Super Marine 316L Stainless'}
                          </h5>
                        </div>
                        <p className="text-[11px] text-slate-400 leading-relaxed">
                          {language === 'fa'
                            ? '۱۰۰٪ مقاوم در برابر کلر غلیظ استخر، آب شور، نمک‌های تصفیه، باران‌های اسیدی و هوای شرجی ساحلی.'
                            : 'Absolute immunity to pool chlorine, saltwater systems, salt fog and coastal humidity.'}
                        </p>
                      </div>

                      <div className="p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-amber-500/40 transition-colors">
                        <div className="flex items-center gap-2 mb-1.5 text-emerald-400">
                          <CheckCircle2 className="w-4 h-4 shrink-0" />
                          <h5 className="text-xs font-black text-slate-100">
                            {language === 'fa' ? 'تکنولوژی جریان لمینار بدون پاشش' : 'Laminar Hydrodynamic Flow'}
                          </h5>
                        </div>
                        <p className="text-[11px] text-slate-400 leading-relaxed">
                          {language === 'fa'
                            ? 'طراحی محفظه هیدرولیکی داخلی با بافل‌های شکست گردابه جهت ریزش یکنواخت شیشه‌ای بدون خیس‌کردن مبلمان نشیمن.'
                            : 'Engineered anti-turbulence internal baffles delivering a glass-smooth water sheet with zero splashing.'}
                        </p>
                      </div>

                      <div className="p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-amber-500/40 transition-colors">
                        <div className="flex items-center gap-2 mb-1.5 text-emerald-400">
                          <CheckCircle2 className="w-4 h-4 shrink-0" />
                          <h5 className="text-xs font-black text-slate-100">
                            {language === 'fa' ? 'نورپردازی زیرآبی خطی و اسپات IP68' : 'IP68 Underwater Illumination'}
                          </h5>
                        </div>
                        <p className="text-[11px] text-slate-400 leading-relaxed">
                          {language === 'fa'
                            ? 'تجهیز به چراغ‌های غاطس با فریم استیل ۳۱۶ و نور گرم ۲۷۰۰K جهت ایجاد منظره‌ای رویایی در شب.'
                            : 'Equipped with submersed 316 stainless warm 2700K or RGBW fixtures for breathtaking night scenes.'}
                        </p>
                      </div>

                      <div className="p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-amber-500/40 transition-colors">
                        <div className="flex items-center gap-2 mb-1.5 text-emerald-400">
                          <CheckCircle2 className="w-4 h-4 shrink-0" />
                          <h5 className="text-xs font-black text-slate-100">
                            {language === 'fa' ? '۱۵ سال ضمانت تعویض کتبی کارخانه‌ای' : '15-Year Factory Warranty'}
                          </h5>
                        </div>
                        <p className="text-[11px] text-slate-400 leading-relaxed">
                          {language === 'fa'
                            ? 'تست هیدرولیکی فشار و پاس‌کردن آزمون‌های استاندارد بین‌المللی همراه با پشتیبانی مهندسی استیلکس.'
                            : 'Tested to rigorous hydrostatic standards and backed by STELLEX 15-year written replacement warranty.'}
                        </p>
                      </div>
                    </div>

                    {/* Pinterest References Highlight Box */}
                    <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2.5">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-amber-400 flex items-center gap-1.5">
                          <Compass className="w-3.5 h-3.5" />
                          {language === 'fa' ? 'الگوبرداری مستقیم از ۳ طرح برتر پین‌ترست بین‌المللی:' : 'Directly inspired by top 3 international Pinterest references:'}
                        </span>
                        <span className="text-[10px] text-slate-400 font-mono">Bespoke Design 2026</span>
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[11px]">
                        {LANDSCAPING_PRODUCTS.map((prod) => (
                          <button
                            key={prod.id}
                            onClick={() => setSelectedProductId(prod.id)}
                            className="p-2 rounded-xl bg-slate-950/80 hover:bg-slate-800 border border-slate-800 hover:border-amber-500/40 text-start transition-all cursor-pointer group"
                          >
                            <span className="font-bold text-slate-200 group-hover:text-amber-300 block truncate mb-0.5">
                              {prod.name[language].split('(')[0]}
                            </span>
                            <span className="text-[10px] text-slate-400 font-mono block truncate">
                              {prod.modelCode}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* CTA Section for Consultation & Site Inspection */}
                    <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-500/10 via-emerald-500/5 to-slate-900 border border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
                      <div className="space-y-1 text-center sm:text-start">
                        <h4 className="text-sm font-black text-white">
                          {language === 'fa' ? 'نیاز به بازدید محوطه و کارشناسی هیدرولیک دارید؟' : 'Need on-site hydraulic inspection & 3D landscape design?'}
                        </h4>
                        <p className="text-xs text-slate-300">
                          {language === 'fa'
                            ? 'کارشناسان معماری فضای باز استیلکس جهت اندازه‌برداری دقیق، بررسی مدار پمپاژ و ارائه نقشه شبیه‌سازی در محل پروژه حاضر می‌شوند.'
                            : 'STELLEX outdoor engineers visit your site for laser dimensions, pump head calculation and photorealistic 3D mockups.'}
                        </p>
                      </div>

                      <button
                        onClick={() => onOpenConsultation(language === 'fa' ? 'محوطه‌سازی و آبنماهای استیل ۳۱۶' : 'Landscape & 316 Marine Water Features')}
                        className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shrink-0 shadow-lg shadow-amber-500/20 transition-all cursor-pointer flex items-center gap-1.5"
                      >
                        <Trees className="w-4 h-4" />
                        <span>{language === 'fa' ? 'درخواست بازدید و مشاوره محوطه' : 'Schedule On-Site Consultation'}</span>
                      </button>
                    </div>

                  </div>

                </div>

            )}

          </div>

        </div>

      </div>

      {/* Architectural Engineering Catalog Modal with Send Catalog to WhatsApp */}
      {modalProduct && (
        <EngineeringCatalogModal
          item={{
            id: modalProduct.id,
            name: modalProduct.name,
            modelCode: modalProduct.modelCode,
            categoryTitle: {
              fa: 'المان‌های معماری منظر، آبنما و استخر استیلکس',
              ar: 'عناصر اللاندسكيب والشلالات ستانلس ستيل',
              en: 'STELLEX Luxury Landscaping & Water Features',
            },
            badge: modalProduct.badge,
            image: modalProduct.image,
            detailImages: modalProduct.detailImages,
            description: modalProduct.description,
            alloyGrade: modalProduct.alloyGrade,
            warrantyYears: modalProduct.warrantyYears || 10,
            priceToman: modalProduct.priceToman,
            finish: modalProduct.availableFinishes?.length ? {
              fa: modalProduct.availableFinishes.join(' / '),
              ar: modalProduct.availableFinishes.join(' / '),
              en: modalProduct.availableFinishes.join(' / '),
            } : undefined,
            dimensions: {
              height: modalProduct.dimensions.height,
              width: modalProduct.dimensions.width,
              depth: modalProduct.dimensions.depth,
              weirLipLength: modalProduct.dimensions.weirLipLength,
            },
            hydraulicSpecs: modalProduct.hydraulicSpecs,
            keyFeatures: modalProduct.keyFeatures,
            includedHardware: modalProduct.includedHardware,
            architecturalTip: modalProduct.landscapeDesignTip,
            pinterestInspiration: modalProduct.pinterestInspiration,
          }}
          onClose={() => setModalProduct(null)}
          onOpenGallery={onOpenGallery}
          onOpenConsultation={onOpenConsultation}
        />
      )}
    </div>
  );
};
