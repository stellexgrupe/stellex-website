import React, { useState } from 'react';
import { STEEL_ALLOYS, FINISH_TYPES } from '../data/stellexData';
import { useLanguage } from '../context/LanguageContext';
import { SteelAlloy, FinishType } from '../types';
import { 
  Sparkles, 
  FlaskConical, 
  Magnet, 
  ShieldCheck, 
  CheckCircle2, 
  XCircle, 
  Flame, 
  Layers, 
  Zap, 
  HelpCircle,
  Award,
  BarChart3
} from 'lucide-react';

export const MaterialVisualizer: React.FC = () => {
  const { language, t, isRtl } = useLanguage();
  const [activeTab, setActiveTab] = useState<'alloys' | 'finishes'>('alloys');
  const [selectedAlloyId, setSelectedAlloyId] = useState<string>(STEEL_ALLOYS[0].id);
  const [selectedFinishId, setSelectedFinishId] = useState<string>(FINISH_TYPES[0].id);
  const [magnetActive, setMagnetActive] = useState(false);

  const selectedAlloy = STEEL_ALLOYS.find(a => a.id === selectedAlloyId) || STEEL_ALLOYS[0];
  const selectedFinish = FINISH_TYPES.find(f => f.id === selectedFinishId) || FINISH_TYPES[0];

  const handleTestMagnet = () => {
    setMagnetActive(true);
    setTimeout(() => {
      // Keep it active or toggle
    }, 2000);
  };

  const isAusteniticNonMagnetic = selectedAlloy.id === 'alloy-304' || selectedAlloy.id === 'alloy-316' || selectedAlloy.id === 'alloy-316l';

  return (
    <section id="materials" className="py-16 sm:py-24 relative overflow-hidden">
      
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-slate-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold mb-3">
            <FlaskConical className="w-3.5 h-3.5" />
            <span>{t.materials.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight mb-4">
            {t.materials.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-400 font-normal leading-relaxed">
            {t.materials.desc}
          </p>

          {/* Tab Switcher (Alloys vs PVD Finishes) */}
          <div className="flex justify-center mt-6">
            <div className="p-1 rounded-2xl bg-slate-900 border border-slate-800 flex gap-1 shadow-xl">
              <button
                onClick={() => setActiveTab('alloys')}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                  activeTab === 'alloys'
                    ? 'bg-amber-500 text-slate-950 shadow-md font-black'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <FlaskConical className="w-4 h-4" />
                <span>{t.materials.alloysTab}</span>
              </button>

              <button
                onClick={() => setActiveTab('finishes')}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                  activeTab === 'finishes'
                    ? 'bg-amber-500 text-slate-950 shadow-md font-black'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Sparkles className="w-4 h-4" />
                <span>{t.materials.finishesTab}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Tab 1: Alloys & ASTM Metallurgy Matrix */}
        {activeTab === 'alloys' && (
          <div className="space-y-8 animate-in fade-in zoom-in-95 duration-300">
            
            {/* Alloy Selection Bar */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              {STEEL_ALLOYS.map((alloy) => {
                const isSelected = alloy.id === selectedAlloy.id;
                return (
                  <button
                    key={alloy.id}
                    onClick={() => {
                      setSelectedAlloyId(alloy.id);
                      setMagnetActive(false);
                    }}
                    className={`p-4 rounded-2xl text-left rtl:text-right border transition-all cursor-pointer flex flex-col justify-between ${
                      isSelected
                        ? 'bg-slate-900 border-amber-400 shadow-xl shadow-amber-500/10 ring-1 ring-amber-500/30'
                        : 'lux-card border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-xs font-mono font-bold text-amber-400">
                          {alloy.code}
                        </span>
                        {isSelected && (
                          <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                        )}
                      </div>
                      <h4 className="text-sm font-black text-white">
                        {alloy.name}
                      </h4>
                      <p className="text-[11px] text-slate-400 line-clamp-1 mt-1">
                        {alloy.grade[language]}
                      </p>
                    </div>

                    <div className="mt-4 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px]">
                      <span className="text-slate-400 font-medium">{t.materials.corrosionResist}</span>
                      <span className="font-mono font-bold text-amber-400">{alloy.corrosionResistance}%</span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Selected Alloy Deep Analysis Stage */}
            <div className="lux-card rounded-3xl p-6 sm:p-8 border border-slate-700/80 shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left/Right Column: Chemical & ASTM Specs (7 Cols) */}
                <div className="lg:col-span-7 space-y-6">
                  <div>
                    <div className="flex items-center gap-2 text-amber-400 text-xs font-bold mb-1">
                      <Award className="w-4 h-4" />
                      <span>{selectedAlloy.code}</span>
                      <span className="text-slate-600">|</span>
                      <span className="text-slate-400">{selectedAlloy.grade[language]}</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-white mb-2">
                      {selectedAlloy.persianName[language]}
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {selectedAlloy.description[language]}
                    </p>
                  </div>

                  {/* Chemical Composition Matrix Bar */}
                  <div>
                    <h4 className="text-xs font-bold text-slate-300 mb-3 flex items-center gap-1.5 uppercase tracking-wider">
                      <BarChart3 className="w-3.5 h-3.5 text-amber-400" />
                      <span>{t.materials.elementAnalysisTitle}</span>
                    </h4>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                      <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800">
                        <span className="text-[10px] text-slate-400 font-medium block">
                          {t.materials.chromium}
                        </span>
                        <span className="text-xs font-bold text-amber-400 font-mono">
                          {selectedAlloy.chromium}
                        </span>
                      </div>

                      <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800">
                        <span className="text-[10px] text-slate-400 font-medium block">
                          {t.materials.nickel}
                        </span>
                        <span className="text-xs font-bold text-amber-400 font-mono">
                          {selectedAlloy.nickel}
                        </span>
                      </div>

                      <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800">
                        <span className="text-[10px] text-slate-400 font-medium block">
                          {t.materials.molybdenum}
                        </span>
                        <span className="text-xs font-bold text-amber-400 font-mono">
                          {selectedAlloy.molybdenum || '---'}
                        </span>
                      </div>

                      <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800">
                        <span className="text-[10px] text-slate-400 font-medium block">
                          {t.materials.carbon}
                        </span>
                        <span className="text-xs font-bold text-amber-400 font-mono">
                          {selectedAlloy.carbon}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Mechanical Dials */}
                  <div className="space-y-2.5 pt-2">
                    <div>
                      <div className="flex justify-between text-xs font-medium mb-1">
                        <span className="text-slate-300">{t.materials.corrosionResist}</span>
                        <span className="text-amber-400 font-mono font-bold">{selectedAlloy.corrosionResistance}%</span>
                      </div>
                      <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-amber-500 to-amber-300 rounded-full transition-all duration-700"
                          style={{ width: `${selectedAlloy.corrosionResistance}%` }}
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs font-medium mb-1">
                        <span className="text-slate-300">{t.materials.heatResist}</span>
                        <span className="text-amber-400 font-mono font-bold">{selectedAlloy.heatResistance}%</span>
                      </div>
                      <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-orange-500 to-amber-400 rounded-full transition-all duration-700"
                          style={{ width: `${selectedAlloy.heatResistance}%` }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Best Applications */}
                  <div className="pt-2">
                    <h5 className="text-xs font-bold text-slate-400 mb-2">
                      {t.materials.bestUseTitle}
                    </h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {selectedAlloy.bestApplications.map((app, idx) => (
                        <div
                          key={idx}
                          className="p-2.5 rounded-xl bg-slate-900/50 border border-slate-800 text-xs text-slate-300 flex items-center gap-2"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                          <span>{app[language]}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right/Left Column: Interactive Magnet Test Simulator (5 Cols) */}
                <div className="lg:col-span-5">
                  <div className="p-5 sm:p-6 rounded-2xl bg-slate-950/90 border border-slate-800 relative overflow-hidden shadow-inner">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400">
                          <Magnet className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="text-sm font-black text-white">
                            {t.materials.magnetTestTitle}
                          </h4>
                          <span className="text-[10px] text-slate-400">
                            Austenitic Non-Magnetic Test
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed mb-6">
                      {t.materials.magnetTestDesc}
                    </p>

                    {/* Interactive Animation Box */}
                    <div className="h-44 rounded-2xl bg-slate-900/90 border border-slate-800 flex flex-col items-center justify-center relative overflow-hidden p-4 mb-4">
                      {/* Alloy Sample Plate */}
                      <div className="w-40 h-14 rounded-xl bg-gradient-to-r from-slate-300 via-slate-100 to-slate-400 shadow-xl border border-slate-200 flex items-center justify-center font-mono text-xs font-bold text-slate-900 z-10">
                        {selectedAlloy.name.split(' ')[0]} {selectedAlloy.name.split(' ')[1]}
                      </div>

                      {/* Magnet Element */}
                      <div 
                        className={`absolute transition-all duration-700 flex items-center gap-2 z-20 ${
                          magnetActive 
                            ? isAusteniticNonMagnetic 
                              ? 'top-4 scale-95 opacity-90' 
                              : 'top-10 scale-100'
                            : 'top-2 opacity-60'
                        }`}
                      >
                        <div className="px-3 py-1.5 rounded-lg bg-red-600 text-white text-xs font-bold shadow-lg flex items-center gap-1.5 animate-pulse">
                          <Magnet className="w-4 h-4" />
                          <span>NEODYMIUM MAGNET</span>
                        </div>
                      </div>

                      {/* Repel / Attract Field Visualization */}
                      {magnetActive && (
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                          {isAusteniticNonMagnetic ? (
                            <div className="w-48 h-48 rounded-full border-2 border-emerald-500/40 bg-emerald-500/5 animate-ping" />
                          ) : (
                            <div className="w-48 h-48 rounded-full border-2 border-red-500/40 bg-red-500/5 animate-pulse" />
                          )}
                        </div>
                      )}
                    </div>

                    {/* Trigger Button */}
                    <button
                      onClick={handleTestMagnet}
                      className="w-full py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-amber-400 border border-amber-500/40 hover:border-amber-500 font-bold text-xs flex items-center justify-center gap-2 cursor-pointer transition-all shadow-md"
                    >
                      <Magnet className="w-4 h-4 animate-bounce" />
                      <span>{t.materials.testMagnetBtn}</span>
                    </button>

                    {/* Result Notification */}
                    <div className="mt-3 p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center gap-2.5">
                      {isAusteniticNonMagnetic ? (
                        <>
                          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                          <span className="text-xs text-emerald-300 font-bold">
                            {t.materials.magnetResultNegir}
                          </span>
                        </>
                      ) : (
                        <>
                          <XCircle className="w-5 h-5 text-amber-400 shrink-0" />
                          <span className="text-xs text-amber-300 font-bold">
                            {t.materials.magnetResultSemi}
                          </span>
                        </>
                      )}
                    </div>

                  </div>
                </div>

              </div>
            </div>

          </div>
        )}

        {/* Tab 2: PVD & Surface Finishes Studio */}
        {activeTab === 'finishes' && (
          <div className="space-y-8 animate-in fade-in zoom-in-95 duration-300">
            
            {/* 6 Finish Selection Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {FINISH_TYPES.map((finish) => {
                const isSelected = finish.id === selectedFinish.id;
                return (
                  <button
                    key={finish.id}
                    onClick={() => setSelectedFinishId(finish.id)}
                    className={`p-3 rounded-2xl border text-center transition-all cursor-pointer flex flex-col items-center gap-2 ${
                      isSelected
                        ? 'bg-slate-900 border-amber-400 shadow-xl shadow-amber-500/20 scale-105 ring-2 ring-amber-500/40'
                        : 'lux-card border-slate-800 hover:border-slate-600'
                    }`}
                  >
                    <div
                      className="w-12 h-12 rounded-xl shadow-md border border-white/20 relative overflow-hidden"
                      style={{ background: finish.gradientBg }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-steel-shimmer" />
                    </div>
                    <span className="text-xs font-bold text-slate-100 line-clamp-1">
                      {finish.englishName}
                    </span>
                    <span className="text-[10px] text-amber-400 font-medium">
                      {finish.pvdCoated ? 'PVD Vacuum' : 'Super Polish'}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Selected Finish Stage */}
            <div className="lux-card rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-700/80 shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left/Right Large Specular Shimmer Viewport (6 Cols) */}
                <div className="lg:col-span-6">
                  <div className="h-72 sm:h-80 rounded-3xl overflow-hidden border border-slate-700 shadow-2xl relative flex flex-col justify-between p-6">
                    <div 
                      className="absolute inset-0 transition-all duration-700"
                      style={{ background: selectedFinish.gradientBg }}
                    />
                    <div className="absolute inset-0 bg-slate-950/20 backdrop-blur-[1px]" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-black/20" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 animate-steel-shimmer pointer-events-none" />

                    {/* Top Tag inside viewport */}
                    <div className="relative z-10 flex justify-between items-center">
                      <span className="px-3 py-1.5 rounded-xl bg-slate-950/80 backdrop-blur-md text-xs font-mono font-bold text-white border border-slate-700 shadow-md">
                        {selectedFinish.englishName}
                      </span>
                      <span className="px-2.5 py-1 rounded-lg bg-amber-500/20 text-amber-300 text-[10px] font-bold border border-amber-500/40 backdrop-blur-md">
                        {selectedFinish.pvdCoated ? 'TiN Cathodic PVD' : 'Mechanical 8K Polish'}
                      </span>
                    </div>

                    {/* Bottom Floating Tag */}
                    <div className="relative z-10 bg-slate-950/85 backdrop-blur-md p-3.5 rounded-2xl border border-slate-700 shadow-lg">
                      <div className="text-xs text-slate-300 font-medium">
                        {selectedFinish.description[language]}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right/Left Detail Specs (6 Cols) */}
                <div className="lg:col-span-6 space-y-6">
                  <div>
                    <div className="text-amber-400 text-xs font-mono font-bold mb-1">
                      {selectedFinish.pvdCoated ? 'PVD CATHODIC ARC TECHNOLOGY' : 'GRADE 800 MECHANICAL FINISH'}
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-black text-white mb-2">
                      {selectedFinish.name[language]}
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {selectedFinish.description[language]}
                    </p>
                  </div>

                  {/* Feature Attributes */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                      <span className="text-[11px] text-slate-400 block mb-1">
                        {t.materials.colorReflectivity}
                      </span>
                      <span className="text-xs font-bold text-amber-400">
                        {selectedFinish.reflectionType[language]}
                      </span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                      <span className="text-[11px] text-slate-400 block mb-1">
                        {t.materials.scratchResistanceLabel}
                      </span>
                      <span className="text-xs font-bold text-amber-400">
                        {selectedFinish.scratchResistance[language]}
                      </span>
                    </div>
                  </div>

                  {/* Popular For */}
                  <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30">
                    <div className="text-xs text-slate-400 font-medium mb-1">
                      {t.materials.popularApplicationLabel}
                    </div>
                    <div className="text-sm font-bold text-amber-300">
                      {selectedFinish.popularFor[language]}
                    </div>
                  </div>

                  {/* PVD Advantage Explanation */}
                  <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 text-xs text-slate-400 leading-relaxed">
                    <strong className="text-slate-200 block mb-1">
                      {t.materials.pvdAdvantageTitle}
                    </strong>
                    {t.materials.pvdAdvantageDesc}
                  </div>

                </div>

              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
