import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { RailingDoorProduct } from '../types';
import { RAILINGS_DOORS_PRODUCTS } from '../data/railingsDoorsData';
import { useLanguage } from '../context/LanguageContext';
import { convertFromToman, getCurrencyNotice } from '../utils/currency';
import { RailingsDoorsOriginalDepartment } from './backup/RailingsDoorsOriginalDepartment';
import { EngineeringCatalogModal, CatalogItemData } from './EngineeringCatalogModal';
import {
  Shield,
  ShieldCheck,
  Sparkles,
  Maximize2,
  ChevronRight,
  ChevronLeft,
  X,
  ArrowUpRight,
  ArrowRight,
  ArrowLeft,
  Paintbrush,
  Check,
  Compass,
  RotateCcw,
  Package,
  Layers,
  Coins,
  DollarSign,
  Table2,
  Eye,
  SlidersHorizontal,
  Building,
  CheckCircle2,
  Calculator,
  Flame,
  Award,
  Play,
  Pause,
  Info,
  FileText,
} from 'lucide-react';

interface RailingsDoorsDepartmentProps {
  onOpenConsultation: (categoryOrItemName?: string) => void;
  onOpenGallery: (images: string[], title: string) => void;
  onOpenCalculatorPlus: () => void;
}

export const RailingsDoorsDepartment: React.FC<RailingsDoorsDepartmentProps> = ({
  onOpenConsultation,
  onOpenGallery,
  onOpenCalculatorPlus,
}) => {
  const { language, t, isRtl } = useLanguage();

  // Template Mode: Allow instant toggle between New Radiator-style and Backup Classic template
  const [layoutMode, setLayoutMode] = useState<'radiator_style' | 'original_classic'>('radiator_style');

  // Filter & Selected Product State (default to null: shows general department overview until user clicks a thumbnail)
  const [selectedCategory, setSelectedCategory] = useState<'luxury_stairs' | 'glass_spigot' | 'entrance_doors' | 'security_grilles'>('luxury_stairs');
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
  const [infoTab, setInfoTab] = useState<'overview' | 'comparison'>('overview');

  // Media carousel index per product
  const [activeMediaIndex, setActiveMediaIndex] = useState<Record<string, number>>({});
  // Selected finish index per product
  const [selectedFinishIndex, setSelectedFinishIndex] = useState<Record<string, number>>({});
  // Modal inspector
  const [modalProduct, setModalProduct] = useState<RailingDoorProduct | null>(null);

  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;
  const BackArrowIcon = isRtl ? ArrowRight : ArrowLeft;

  // Filtered list (strictly category-based, without 'all')
  const filteredProducts = RAILINGS_DOORS_PRODUCTS.filter(
    (prod) => prod.category === selectedCategory
  );

  const selectedProduct = RAILINGS_DOORS_PRODUCTS.find((p) => p.id === selectedProductId) || null;

  const handleCategorySelect = (cat: 'luxury_stairs' | 'glass_spigot' | 'entrance_doors' | 'security_grilles') => {
    setSelectedCategory(cat);
    setSelectedProductId(null);
  };

  // Navigation handlers
  const handlePrevProduct = () => {
    if (!selectedProduct) return;
    const currentIndex = filteredProducts.findIndex((p) => p.id === selectedProduct.id);
    const prevIndex = (currentIndex - 1 + filteredProducts.length) % filteredProducts.length;
    setSelectedProductId(filteredProducts[prevIndex].id);
  };

  const handleNextProduct = () => {
    if (!selectedProduct) return;
    const currentIndex = filteredProducts.findIndex((p) => p.id === selectedProduct.id);
    const nextIndex = (currentIndex + 1) % filteredProducts.length;
    setSelectedProductId(filteredProducts[nextIndex].id);
  };

  // Media carousel handler
  const handleMediaNext = (productId: string, totalCount: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveMediaIndex((prev) => ({
      ...prev,
      [productId]: ((prev[productId] || 0) + 1) % totalCount,
    }));
  };

  const handleMediaPrev = (productId: string, totalCount: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveMediaIndex((prev) => ({
      ...prev,
      [productId]: ((prev[productId] || 0) - 1 + totalCount) % totalCount,
    }));
  };

  const handleFinishSelect = (productId: string, finishIndex: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedFinishIndex((prev) => ({
      ...prev,
      [productId]: finishIndex,
    }));
  };

  // Category counts
  const stairsCount = RAILINGS_DOORS_PRODUCTS.filter((p) => p.category === 'luxury_stairs').length;
  const glassCount = RAILINGS_DOORS_PRODUCTS.filter((p) => p.category === 'glass_spigot').length;
  const doorsCount = RAILINGS_DOORS_PRODUCTS.filter((p) => p.category === 'entrance_doors').length;
  const grillesCount = RAILINGS_DOORS_PRODUCTS.filter((p) => p.category === 'security_grilles').length;

  // Currencies & pricing notice
  const currencyNotice = getCurrencyNotice(language);
  const minPrice = Math.min(...RAILINGS_DOORS_PRODUCTS.map((p) => p.priceToman));
  const maxPrice = Math.max(...RAILINGS_DOORS_PRODUCTS.map((p) => p.priceToman));
  const minPriceConverted = convertFromToman(minPrice, language);
  const maxPriceConverted = convertFromToman(maxPrice, language);

  // Selected product media info
  const selectedMediaList = selectedProduct
    ? [selectedProduct.image, ...(selectedProduct.detailImages || [])]
    : [];
  const selectedCurIdx = selectedProduct ? activeMediaIndex[selectedProduct.id] || 0 : 0;
  const selectedCurrentImg = selectedMediaList[selectedCurIdx] || selectedProduct?.image || '';
  const selectedPriceObj = selectedProduct ? convertFromToman(selectedProduct.priceToman, language) : null;

  // If user toggled to backup original classic template
  if (layoutMode === 'original_classic') {
    return (
      <div className="space-y-4 animate-in fade-in duration-300">
        {/* Switcher Bar back to New Template */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-3 rounded-2xl bg-amber-500/10 border border-amber-500/30">
          <div className="flex items-center gap-2 text-xs font-bold text-amber-300">
            <RotateCcw className="w-4 h-4 text-amber-400" />
            <span>
              {language === 'fa'
                ? 'در حال نمایش: طرح قالب اولیه (کلاسیک ذخیره‌شده)'
                : 'Displaying: Original Classic Template (Backup Version)'}
            </span>
          </div>

          <button
            onClick={() => setLayoutMode('radiator_style')}
            className="px-4 py-2 rounded-xl text-xs font-black bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 flex items-center gap-1.5 shadow-md shadow-amber-500/20 transition-all cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>
              {language === 'fa'
                ? 'انتقال به طرح نوین مهندسی (مشابه رادیاتورها)'
                : 'Switch to Modern Engineering Template'}
            </span>
          </button>
        </div>

        <RailingsDoorsOriginalDepartment
          onOpenConsultation={onOpenConsultation}
          onOpenCalculatorPlus={onOpenCalculatorPlus}
          onOpenGallery={onOpenGallery}
        />
      </div>
    );
  }

  return (
    <div id="railings-doors-department" className="space-y-6 animate-in fade-in duration-300">
      {/* Main Interactive Stage */}
      <div className="lux-card rounded-3xl p-5 sm:p-7 lg:p-9 border border-slate-700/80 shadow-2xl relative overflow-hidden bg-slate-950/70">
        {/* Subtle Ambient Background */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* ========================================================================= */}
          {/* SIDE 1: INTERACTIVE GALLERY & PRODUCT PICKER (Adaptive 2/3 vs 5 columns) */}
          {/* ========================================================================= */}
          <div className={`${selectedProduct ? 'lg:col-span-3 xl:col-span-2' : 'lg:col-span-5'} space-y-4 transition-all duration-300`}>
            
            {/* Gallery Header with Filter Pills */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-lg bg-amber-500/20 text-amber-400">
                    <Building className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-black text-white">
                      {language === 'fa' 
                        ? (selectedProduct ? 'لیست پروژه‌ها' : 'گالری سازه‌ها و پروژه‌های شاخص')
                        : language === 'ar' 
                        ? (selectedProduct ? 'قائمة المشاريع' : 'معرض المشاريع والهياكل') 
                        : (selectedProduct ? 'Projects List' : 'Architectural Projects Gallery')}
                    </h4>
                    <span className="text-[11px] text-slate-400 font-medium">
                      {language === 'fa' 
                        ? `${filteredProducts.length} سازه مهندسی` 
                        : `${filteredProducts.length} models`}
                    </span>
                  </div>
                </div>

                {selectedProduct && (
                  <button
                    onClick={() => {
                      setSelectedProductId(null);
                      setInfoTab('overview');
                    }}
                    className="text-[11px] font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1 bg-amber-500/10 hover:bg-amber-500/20 px-2 py-1 rounded-lg border border-amber-500/30 transition-all cursor-pointer"
                    title={language === 'fa' ? 'نمایش توضیحات دپارتمان' : 'Show department info'}
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>{language === 'fa' ? 'توضیحات' : 'Info'}</span>
                  </button>
                )}
              </div>

              {/* Sub-Category Filter Tabs (Strictly Category-Based, No 'All' Tab) */}
              <div className={`grid ${selectedProduct ? 'grid-cols-2' : 'grid-cols-2 sm:grid-cols-4'} gap-1.5 p-1 rounded-xl bg-slate-950/80 border border-slate-800 text-xs`}>
                <button
                  onClick={() => handleCategorySelect('luxury_stairs')}
                  className={`py-1.5 px-2 rounded-lg font-bold transition-all cursor-pointer text-center text-[11px] flex items-center justify-center gap-1 truncate ${
                    selectedCategory === 'luxury_stairs'
                      ? 'bg-amber-500 text-slate-950 shadow font-black'
                      : 'text-amber-400 hover:text-white hover:bg-slate-900'
                  }`}
                >
                  <Sparkles className="w-3 h-3 shrink-0" />
                  <span className="truncate">{language === 'fa' ? `نرده (${stairsCount})` : `Stairs (${stairsCount})`}</span>
                </button>

                <button
                  onClick={() => handleCategorySelect('glass_spigot')}
                  className={`py-1.5 px-2 rounded-lg font-bold transition-all cursor-pointer text-center text-[11px] flex items-center justify-center gap-1 truncate ${
                    selectedCategory === 'glass_spigot'
                      ? 'bg-amber-500 text-slate-950 shadow font-black'
                      : 'text-slate-400 hover:text-white hover:bg-slate-900'
                  }`}
                >
                  <span className="truncate">{language === 'fa' ? `شیشه (${glassCount})` : `Glass (${glassCount})`}</span>
                </button>

                <button
                  onClick={() => handleCategorySelect('entrance_doors')}
                  className={`py-1.5 px-2 rounded-lg font-bold transition-all cursor-pointer text-center text-[11px] flex items-center justify-center gap-1 truncate ${
                    selectedCategory === 'entrance_doors'
                      ? 'bg-amber-500 text-slate-950 shadow font-black'
                      : 'text-slate-400 hover:text-white hover:bg-slate-900'
                  }`}
                >
                  <span className="truncate">{language === 'fa' ? `درب (${doorsCount})` : `Doors (${doorsCount})`}</span>
                </button>

                <button
                  onClick={() => handleCategorySelect('security_grilles')}
                  className={`py-1.5 px-2 rounded-lg font-bold transition-all cursor-pointer text-center text-[11px] flex items-center justify-center gap-1 truncate ${
                    selectedCategory === 'security_grilles'
                      ? 'bg-amber-500 text-slate-950 shadow font-black'
                      : 'text-slate-400 hover:text-white hover:bg-slate-900'
                  }`}
                >
                  <Shield className="w-3 h-3 shrink-0" />
                  <span className="truncate">{language === 'fa' ? `حفاظ (${grillesCount})` : `Security (${grillesCount})`}</span>
                </button>
              </div>
            </div>

            {/* Gallery Grid: When a project is selected, projects are stacked in a single column with identical photo size */}
            <div className={`grid ${
              selectedProduct 
                ? 'grid-cols-1 justify-items-center max-h-[660px]' 
                : 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 max-h-[580px]'
            } gap-2.5 sm:gap-3 overflow-y-auto p-1 pr-1.5 scrollbar-thin scrollbar-thumb-slate-700`}>
              {filteredProducts.map((product) => {
                const isSelected = selectedProductId === product.id;

                return (
                  <button
                    key={product.id}
                    onClick={() => setSelectedProductId(isSelected ? null : product.id)}
                    className={`group rounded-2xl overflow-hidden border transition-all cursor-pointer relative aspect-4/3 bg-slate-950 block ${
                      selectedProduct ? 'w-[140px] shrink-0' : 'w-full'
                    } ${
                      isSelected
                        ? 'border-amber-400 ring-2 ring-amber-400 shadow-xl shadow-amber-500/30 scale-[1.03]'
                        : 'border-slate-800 hover:border-amber-400/60 hover:scale-[1.02]'
                    }`}
                    title={product.name[language]}
                  >
                    {/* Project Image */}
                    <img
                      src={product.image}
                      alt={product.name[language]}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Category mini badge in corner */}
                    <span className="absolute top-1.5 right-1.5 rtl:right-1.5 rtl:left-auto bg-slate-950/85 border border-amber-500/40 text-amber-400 text-[9px] font-black px-1.5 py-0.5 rounded shadow backdrop-blur-md flex items-center gap-0.5 z-10">
                      {product.category === 'luxury_stairs' ? (
                        <span>{language === 'fa' ? 'نرده لوکس' : 'Stair Rail'}</span>
                      ) : product.category === 'glass_spigot' ? (
                        <span>{language === 'fa' ? 'اسپیگات' : 'Glass Spigot'}</span>
                      ) : product.category === 'entrance_doors' ? (
                        <span>{language === 'fa' ? 'درب لابی' : 'Villa Door'}</span>
                      ) : (
                        <span>{language === 'fa' ? 'حفاظ امنیتی' : 'Security'}</span>
                      )}
                    </span>

                    {/* Model Code badge at bottom left */}
                    <span className="absolute bottom-1.5 left-1.5 rtl:left-1.5 rtl:right-auto bg-slate-950/90 text-slate-300 font-mono text-[9px] px-1.5 py-0.5 rounded border border-slate-700/80 shadow z-10">
                      {product.modelCode}
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

          </div>

          {/* ========================================================================= */}
          {/* SIDE 2: GENERAL DESCRIPTION OR SELECTED PRODUCT CARD (Adaptive 10/9 vs 7) */}
          {/* ========================================================================= */}
          <div className={`${selectedProduct ? 'lg:col-span-9 xl:col-span-10' : 'lg:col-span-7'} space-y-6 transition-all duration-300`}>

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
                        ? `سازه‌ ${(filteredProducts.findIndex((p) => p.id === selectedProduct.id) + 1)} از ${filteredProducts.length}`
                        : `Model ${(filteredProducts.findIndex((p) => p.id === selectedProduct.id) + 1)} of ${filteredProducts.length}`}
                    </span>

                    <button
                      onClick={handlePrevProduct}
                      className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors cursor-pointer"
                      title={language === 'fa' ? 'مدل قبلی' : 'Previous model'}
                    >
                      <ChevronRight className="w-4 h-4 rtl:rotate-0 rotate-180" />
                    </button>

                    <button
                      onClick={handleNextProduct}
                      className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors cursor-pointer"
                      title={language === 'fa' ? 'مدل بعدی' : 'Next model'}
                    >
                      <ChevronLeft className="w-4 h-4 rtl:rotate-0 rotate-180" />
                    </button>
                  </div>
                </div>

                {/* Product Presentation Body: Side-by-Side on md+ (identical to Radiators layout) */}
                <div className="grid grid-cols-1 md:grid-cols-12 items-stretch flex-1">

                  {/* 1. Generously Sized Product Media Showcase (md:col-span-6 lg:col-span-6 with enlarged image) */}
                  <div className="md:col-span-6 lg:col-span-6 relative min-h-[380px] sm:min-h-[440px] md:min-h-[500px] lg:min-h-[560px] w-full overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center p-4 group border-b md:border-b-0 md:border-e border-slate-800">
                    {/* Ambient soft glow backdrop */}
                    <div 
                      className="absolute inset-0 bg-cover bg-center opacity-25 blur-3xl scale-125 pointer-events-none"
                      style={{ backgroundImage: `url(${selectedCurrentImg})` }}
                    />

                    {/* Main Product Image - Significantly enlarged for cinematic architectural view */}
                    <img
                      src={selectedCurrentImg}
                      alt={selectedProduct.name[language]}
                      loading="lazy"
                      decoding="async"
                      className="relative z-10 max-h-[360px] sm:max-h-[420px] md:max-h-[480px] lg:max-h-[530px] w-auto max-w-full object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.9)] group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Top Floating Badge & Code */}
                    <div className="absolute top-2.5 inset-x-2.5 flex items-center justify-between z-20 gap-2 pointer-events-none">
                      <div className="flex items-center gap-1.5 pointer-events-auto">
                        <span className="text-[11px] font-mono font-black bg-slate-950/90 text-amber-400 px-2.5 py-0.5 rounded-lg border border-amber-500/40 backdrop-blur-md shrink-0 shadow">
                          {selectedProduct.modelCode}
                        </span>
                      </div>
                      
                      <span className="text-[9px] font-bold bg-slate-900/90 border border-amber-500/30 text-amber-300 px-2 py-0.5 rounded-full truncate shadow backdrop-blur-md">
                        {selectedProduct.badge[language]}
                      </span>
                    </div>

                    {/* Gallery Mini Controls & Clickable Thumbnails */}
                    {selectedMediaList.length > 1 && (
                      <div className="absolute bottom-2.5 inset-x-2.5 flex flex-col gap-1.5 z-20">
                        <div className="flex items-center justify-between gap-1">
                          <button
                            onClick={(e) => handleMediaPrev(selectedProduct.id, selectedMediaList.length, e)}
                            className="p-1.5 rounded-lg bg-slate-950/90 hover:bg-amber-500 hover:text-slate-950 text-white border border-slate-700 backdrop-blur-md transition-all cursor-pointer shadow shrink-0"
                            title={language === 'fa' ? 'عکس قبلی' : 'Previous'}
                          >
                            <ChevronLeft className="w-3.5 h-3.5" />
                          </button>

                          <div className="flex items-center gap-1.5 overflow-x-auto py-0.5 px-1 scrollbar-none max-w-[280px] sm:max-w-[340px]">
                            {selectedMediaList.map((imgUrl, mIdx) => (
                              <button
                                key={mIdx}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setActiveMediaIndex((prev) => ({
                                    ...prev,
                                    [selectedProduct.id]: mIdx,
                                  }));
                                }}
                                className={`w-9 h-9 rounded-lg overflow-hidden border transition-all cursor-pointer shrink-0 relative ${
                                  selectedCurIdx === mIdx
                                    ? 'border-amber-400 ring-2 ring-amber-400/80 scale-105 shadow-md shadow-amber-500/30'
                                    : 'border-slate-700 opacity-60 hover:opacity-100'
                                }`}
                                title={
                                  mIdx === 0
                                    ? (language === 'fa' ? 'عکس کاتالوگ اصلی (زاویه ورودی لابی)' : 'Enhanced Master Catalog Photo')
                                    : mIdx === 1
                                    ? (language === 'fa' ? '۱- نمای نزدیک از دستگیره و پایه‌های نرده (Closeup)' : '1- Closeup View')
                                    : mIdx === 2
                                    ? (language === 'fa' ? '۲- نمای کامل از فاصله‌ی دور / فضای کلی (Wide Angle)' : '2- Wide Angle View')
                                    : mIdx === 3
                                    ? (language === 'fa' ? '۳- نمای سینمایی با نورپردازی مشابه عکس اصلی (Cinematic)' : '3- Cinematic View')
                                    : mIdx === 4
                                    ? (language === 'fa' ? '۴- نمای از بالا / عمودی (Overhead Top View)' : '4- Top View')
                                    : (language === 'fa' ? '۵- نمای سه‌چهارم / مورب (Three-Quarter Angle)' : '5- Three-Quarter View')
                                }
                              >
                                <img src={imgUrl} alt={`Thumbnail ${mIdx + 1}`} loading="lazy" decoding="async" className="w-full h-full object-cover" />
                              </button>
                            ))}
                          </div>

                          <button
                            onClick={(e) => handleMediaNext(selectedProduct.id, selectedMediaList.length, e)}
                            className="p-1.5 rounded-lg bg-slate-950/90 hover:bg-amber-500 hover:text-slate-950 text-white border border-slate-700 backdrop-blur-md transition-all cursor-pointer shadow shrink-0"
                            title={language === 'fa' ? 'عکس بعدی' : 'Next'}
                          >
                            <ChevronRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* 2. Compact Technical & Pricing Information (md:col-span-6 lg:col-span-6) */}
                  <div className="md:col-span-6 lg:col-span-6 p-4 sm:p-5 flex flex-col justify-between space-y-3 bg-slate-950/60">
                    
                    <div className="space-y-2.5">
                      <div>
                        {selectedProduct.designerSeries && (
                          <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-amber-500/10 border border-amber-500/30 text-amber-300 text-[10px] font-bold mb-1">
                            <Sparkles className="w-3 h-3 text-amber-400 shrink-0" />
                            <span>{selectedProduct.designerSeries[language]}</span>
                          </div>
                        )}
                        <h4 className="text-base sm:text-lg font-black text-white group-hover:text-amber-300 transition-colors">
                          {selectedProduct.name[language]}
                        </h4>
                        <div className="flex items-center gap-2 text-[10px] text-slate-400 mt-1">
                          <span className="text-amber-400 font-medium">{selectedProduct.client[language]}</span>
                          <span>•</span>
                          <span>{selectedProduct.location[language]}</span>
                        </div>
                      </div>

                      {/* Architect & Interior Tip Strip */}
                      <div className="px-3 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-[11px] flex items-center gap-2 text-slate-300">
                        <Compass className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span className="truncate">
                          <strong className="text-amber-300 font-bold">{language === 'fa' ? 'دیدگاه کارشناس معماری:' : 'Architectural Tip:'}</strong>{' '}
                          {selectedProduct.architecturalTip[language].split('.')[0]}
                        </span>
                      </div>

                      {/* Compact 4-Cell Engineering Specifications Grid */}
                      <div className="grid grid-cols-2 gap-1.5 p-2 rounded-xl bg-slate-950/80 border border-slate-800 text-[11px]">
                        <div className="p-2 rounded-lg bg-slate-900/60 border border-slate-800/60">
                          <span className="text-[10px] text-slate-400 block mb-0.5">{language === 'fa' ? 'ارتفاع و مقاطع' : 'Height & Section'}</span>
                          <strong className="text-white font-mono text-xs block truncate" title={selectedProduct.dimensions.height}>
                            {selectedProduct.dimensions.height.split(' ')[0]} {language === 'fa' ? 'استاندارد' : 'Std'}
                          </strong>
                        </div>

                        <div className="p-2 rounded-lg bg-slate-900/60 border border-slate-800/60">
                          <span className="text-[10px] text-slate-400 block mb-0.5">{language === 'fa' ? 'ظرفیت بار جانبی' : 'Lateral Load'}</span>
                          <strong className="text-amber-400 font-mono text-xs block truncate">
                            {selectedProduct.structuralSpecs.lateralLoadCapacity.split(' ')[0]} kg/m
                          </strong>
                        </div>

                        <div className="p-2 rounded-lg bg-slate-900/60 border border-slate-800/60">
                          <span className="text-[10px] text-slate-400 block mb-0.5">{language === 'fa' ? 'آلیاژ ساختار' : 'Alloy Grade'}</span>
                          <strong className="text-emerald-400 text-xs block truncate">
                            استیل {selectedProduct.alloyGrade[language].includes('316') ? '۳۱۶ مارین' : '۳۰۴ نگیر'}
                          </strong>
                        </div>

                        <div className="p-2 rounded-lg bg-slate-900/60 border border-slate-800/60">
                          <span className="text-[10px] text-slate-400 block mb-0.5">{language === 'fa' ? 'ضریب ایمنی' : 'Safety Factor'}</span>
                          <strong className="text-white text-xs block truncate">
                            {selectedProduct.structuralSpecs.safetyFactor}
                          </strong>
                        </div>
                      </div>

                      {/* Finishes Selector: Sleek Inline Row */}
                      <div className="flex items-center gap-2 text-[11px] py-0.5">
                        <span className="text-slate-400 shrink-0 flex items-center gap-1 text-[10px]">
                          <Paintbrush className="w-3 h-3 text-amber-400" />
                          <span>{language === 'fa' ? 'پوشش PVD:' : 'Finish:'}</span>
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
                              {language === 'fa' ? 'برآورد هزینه:' : 'Estimate:'}
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

                          <div className="flex items-center gap-1.5 text-[10px] text-amber-400 bg-amber-500/10 px-2 py-1 rounded-lg border border-amber-500/20 font-medium">
                            <ShieldCheck className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                            <span>{language === 'fa' ? '۱۰ الی ۱۵ سال ضمانت' : '10-15 Yr Warranty'}</span>
                          </div>
                        </div>
                      )}

                      {/* Price unit subtitle */}
                      <div className="text-[10px] text-slate-400 flex items-center gap-1.5 pt-0.5 truncate">
                        <Package className="w-3 h-3 text-amber-400 shrink-0" />
                        <span className="truncate">
                          {selectedProduct.priceUnitLabel[language]}
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
                        <Sparkles className="w-4 h-4 text-slate-950" />
                        <span>
                          {language === 'fa' 
                            ? 'استعلام قیمت و درخواست پیش‌فاکتور این سازه' 
                            : 'Request Formal Engineering Quotation'}
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
                          ? 'دپارتمان تخصصی انواع نرده، حفاظ و درب ساختمانی و ویلایی استیلکس' 
                          : language === 'ar' 
                          ? 'قسم درابزينات وأبواب الفولاذ المقاوم للصدأ - ستيليكس' 
                          : 'STELLEX Architectural Railings, Balustrades & Luxury Doors Department'}
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
                          ? 'شروع قیمت اجرای متر طول از ۲۱.۵ تا ۸۵ میلیون تومان' 
                          : language === 'ar' 
                          ? `سعر تنفيذ المتر: من ${minPriceConverted.formattedNumber} إلى ${maxPriceConverted.formattedNumber}` 
                          : `Execution: $${minPriceConverted.formattedNumber} - $${maxPriceConverted.formattedNumber} USD / m`}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-tight">
                    {language === 'fa'
                      ? 'طراحی، مدلسازی ۳D و اجرای صفر تا صد انواع نرده، حفاظ و درب‌های لوکس'
                      : language === 'ar'
                      ? 'تصميم وتنفيذ مخصص لكافة درابزينات وحواجز وأبواب الفولاذ الفاخرة'
                      : 'Turnkey Architectural Engineering of Luxury Railings, Balustrades & Doors'}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {language === 'fa'
                      ? 'طراحی، مدلسازی سه‌بعدی و اجرای صفر تا صد انواع نرده‌های راه‌پله دوبلکس سلطنتی، نرده‌های شیشه‌ای اسپیگات، درب‌های لابی لوکس پیوت و حفاظ‌های بانکی ضدسرقت با استفاده از آلیاژ استاندارد ۳۰۴ نگیر در اکثریت پروژه‌ها (استفاده از ۲۰۱ در فضاهای بدون رطوبت جهت کاهش هزینه و آلیاژ ۳۱۶ در موارد صنعتی) و ۱۰ الی ۱۵ سال ضمانت کتبی.'
                      : language === 'ar'
                      ? 'تصميم وهندسة مخصصة للدرابزينات الفاخرة، أنظمة الزجاج البانورامي، وأبواب المداخل المحورية من ستانلس ستيل ۳۰۴ مع ضمان كتيبي من ١٠ إلى ١٥ عاماً.'
                      : 'Turnkey architectural engineering of luxury duplex railings, cantilever floating stairs, glass balustrades, and high-security laser doors with standard 304 alloy and 10 to 15-year warranty.'}
                  </p>
                </div>

                {/* 4 Feature Highlights Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-amber-500/40 transition-colors">
                    <div className="flex items-center gap-2 mb-1.5 text-amber-400">
                      <CheckCircle2 className="w-4 h-4 shrink-0" />
                      <h5 className="text-xs font-black text-slate-100">
                        {language === 'fa' ? 'طراحی و مدلسازی ۳ بعدی اختصاصی' : 'Custom 3D CAD Modeling'}
                      </h5>
                    </div>
                    <p className="text-[11px] text-slate-400 leading-relaxed">
                      {language === 'fa'
                        ? 'برداشت لیزری وضع موجود راه‌پله و مدلسازی سه‌بعدی دقیق قبل از تولید قطعات بدون خطا.'
                        : 'Laser site survey and accurate 3D CAD modeling prior to fabrication.'}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-amber-500/40 transition-colors">
                    <div className="flex items-center gap-2 mb-1.5 text-amber-400">
                      <CheckCircle2 className="w-4 h-4 shrink-0" />
                      <h5 className="text-xs font-black text-slate-100">
                        {language === 'fa' ? 'آلیاژهای فابریک ۳۰۴ و ۳۱۶ نگیر' : 'Certified 304 & 316 Alloys'}
                      </h5>
                    </div>
                    <p className="text-[11px] text-slate-400 leading-relaxed">
                      {language === 'fa'
                        ? 'تضمین متالوژی عدم زنگ‌زدگی، پرداخت سوپر میرور ۸۰۰ و پوشش نانو تیتانیوم PVD مقاوم.'
                        : 'Guaranteed rust-proof metallurgical grade with super mirror polish and vacuum PVD.'}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-amber-500/40 transition-colors">
                    <div className="flex items-center gap-2 mb-1.5 text-amber-400">
                      <CheckCircle2 className="w-4 h-4 shrink-0" />
                      <h5 className="text-xs font-black text-slate-100">
                        {language === 'fa' ? 'نصب مهندسی بدون تخریب' : 'Precision Bolt Assembly'}
                      </h5>
                    </div>
                    <p className="text-[11px] text-slate-400 leading-relaxed">
                      {language === 'fa'
                        ? 'مونتاژ مکانیکی تمام‌پیچ و جوشکاری آرگون TIG میکرونی بدون آسیب به کف‌پوش و سنگ.'
                        : 'Clean bolt-on assembly and TIG micro-welding with zero damage to luxury flooring.'}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-amber-500/40 transition-colors">
                    <div className="flex items-center gap-2 mb-1.5 text-amber-400">
                      <CheckCircle2 className="w-4 h-4 shrink-0" />
                      <h5 className="text-xs font-black text-slate-100">
                        {language === 'fa' ? 'ضمانت کتبی ۱۰ الی ۱۵ ساله' : '10-15 Year Warranty'}
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
                      {language === 'fa' ? 'راهنمای مشاهده و انتخاب سازه‌ها:' : 'Interactive Model Selection:'}
                    </strong>
                    {language === 'fa'
                      ? 'روی هر یک از عکس‌های سازه‌ها در گالری روبرو کلیک فرمایید تا کارت مشخصات فنی، تصاویر زوم، ویدیوی پروژه و استعلام آنلاین برای آن مدل در این بخش نمایان شود.'
                      : 'Click on any project photo in the gallery to reveal its full technical specifications, dual pricing, zoom photos, and instant consultation here.'}
                  </div>
                </div>

                {/* CTA Action Buttons */}
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => onOpenConsultation('مشاوره تخصصی سازه‌های استیلکس')}
                    className="lux-btn-gold px-7 py-4 rounded-2xl text-xs sm:text-sm font-black flex items-center justify-center gap-2 shadow-xl shadow-amber-500/20 cursor-pointer"
                  >
                    <Sparkles className="w-5 h-5 text-slate-950" />
                    <span>
                      {language === 'fa' 
                        ? 'مشاوره و استعلام فنی رایگان' 
                        : 'Free Technical Consultation'}
                    </span>
                  </button>

                  <button
                    onClick={onOpenCalculatorPlus}
                    className="lux-btn-outline px-6 py-4 rounded-2xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Calculator className="w-5 h-5 text-amber-400" />
                    <span>
                      {language === 'fa' ? 'ورود به محاسبه‌گر پلاس' : 'Open Calculator Plus'}
                    </span>
                  </button>
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
              fa: 'نرده، حفاظ و درب استنلس استیل استیلکس',
              ar: 'درابزينات وأبواب ستانلس ستيل ستیلکس',
              en: 'STELLEX Architectural Railings & Doors',
            },
            badge: modalProduct.badge,
            image: modalProduct.image,
            detailImages: modalProduct.detailImages,
            description: modalProduct.description,
            alloyGrade: modalProduct.alloyGrade,
            warrantyYears: modalProduct.warrantyYears || 10,
            priceToman: modalProduct.priceToman,
            priceUnitLabel: modalProduct.priceUnitLabel,
            finish: modalProduct.availableFinishes?.length ? {
              fa: modalProduct.availableFinishes.join(' / '),
              ar: modalProduct.availableFinishes.join(' / '),
              en: modalProduct.availableFinishes.join(' / '),
            } : undefined,
            dimensions: modalProduct.dimensions,
            structuralSpecs: modalProduct.structuralSpecs,
            keyFeatures: modalProduct.keyFeatures,
            includedHardware: modalProduct.includedHardware,
            architecturalTip: modalProduct.architecturalTip,
            client: modalProduct.client,
            location: modalProduct.location,
          }}
          onClose={() => setModalProduct(null)}
          onOpenGallery={onOpenGallery}
          onOpenConsultation={onOpenConsultation}
        />
      )}

    </div>
  );
};
