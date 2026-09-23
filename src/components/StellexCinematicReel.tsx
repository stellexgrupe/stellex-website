import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  Maximize2, 
  Minimize2, 
  Volume2, 
  VolumeX, 
  Sparkles, 
  Layers, 
  ChevronLeft, 
  ChevronRight, 
  Film, 
  Image as ImageIcon,
  CheckCircle2,
  X
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { 
  REEL_LOGO_IMAGE, 
  REEL_SHOWROOM_IMAGE, 
  REEL_RAILING_SLIDES 
} from '../data/stellexReelData';

interface StellexCinematicReelProps {
  onOpenLogoStory?: () => void;
}

export const StellexCinematicReel: React.FC<StellexCinematicReelProps> = ({
  onOpenLogoStory
}) => {
  const { language, isRtl } = useLanguage();

  // Mode: 'reel' (50s video reel), 'showroom' (original showroom photo), 'auto_alternate'
  const [activeView, setActiveView] = useState<'reel' | 'showroom'>('reel');
  const [autoAlternate, setAutoAlternate] = useState<boolean>(true);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(false);

  // Time in seconds (0.0 to 50.0)
  const [currentTime, setCurrentTime] = useState<number>(0);
  const TOTAL_DURATION = 50.0;
  const SLIDE_1_DURATION = 3.0;
  const PER_RAILING_SLIDE_DURATION = 1.5;
  const RAILING_SLIDES_COUNT = REEL_RAILING_SLIDES.length; // 29
  const RAILINGS_TOTAL_DURATION = RAILING_SLIDES_COUNT * PER_RAILING_SLIDE_DURATION; // 43.5s
  const OUTRO_START_TIME = SLIDE_1_DURATION + RAILINGS_TOTAL_DURATION; // 46.5s

  const animationFrameRef = useRef<number | null>(null);
  const lastTimestampRef = useRef<number | null>(null);

  // Ambient sound synthesis for luxury metallic reel feel
  const audioCtxRef = useRef<AudioContext | null>(null);
  const oscRef = useRef<OscillatorNode | null>(null);

  // Determine current slide state based on currentTime:
  // 0: Slide 1 (Logo full frame, Ken Burns 0 to 3s)
  // 1..29: Slides 2..30 (Railing photos 1 to 29, 3s to 46.5s)
  // 30: Outro / Breathing space (46.5s to 50.0s)
  let currentSlideIndex = 0;
  let isSlideOne = false;
  let isOutro = false;
  let currentRailingSlide = REEL_RAILING_SLIDES[0];

  if (currentTime < SLIDE_1_DURATION) {
    isSlideOne = true;
    currentSlideIndex = 0;
  } else if (currentTime < OUTRO_START_TIME) {
    const elapsedRailings = currentTime - SLIDE_1_DURATION;
    const railingIndex = Math.min(
      Math.floor(elapsedRailings / PER_RAILING_SLIDE_DURATION),
      RAILING_SLIDES_COUNT - 1
    );
    currentSlideIndex = railingIndex + 1; // 1 to 29 (Slides 2 to 30)
    currentRailingSlide = REEL_RAILING_SLIDES[railingIndex];
  } else {
    isOutro = true;
    currentSlideIndex = RAILING_SLIDES_COUNT + 1; // 30
  }

  // Animation Loop for 50-second Reel
  useEffect(() => {
    if (!isPlaying || activeView !== 'reel') {
      lastTimestampRef.current = null;
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      return;
    }

    const tick = (timestamp: number) => {
      if (!lastTimestampRef.current) {
        lastTimestampRef.current = timestamp;
      }
      const deltaSeconds = (timestamp - lastTimestampRef.current) / 1000;
      lastTimestampRef.current = timestamp;

      setCurrentTime((prev) => {
        const nextTime = prev + deltaSeconds;
        if (nextTime >= TOTAL_DURATION) {
          // If auto alternate is enabled, smoothly switch to showroom for a turn
          if (autoAlternate) {
            setActiveView('showroom');
            return 0;
          }
          return 0; // loop reel
        }
        return nextTime;
      });

      animationFrameRef.current = requestAnimationFrame(tick);
    };

    animationFrameRef.current = requestAnimationFrame(tick);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isPlaying, activeView, autoAlternate]);

  // When in showroom view with autoAlternate enabled, display showroom for 6 seconds then switch back to reel
  useEffect(() => {
    if (activeView === 'showroom' && autoAlternate && isPlaying) {
      const timer = setTimeout(() => {
        setActiveView('reel');
        setCurrentTime(0);
      }, 6500);
      return () => clearTimeout(timer);
    }
  }, [activeView, autoAlternate, isPlaying]);

  // Optional subtle harmonic ambient tone generator
  const toggleSound = () => {
    if (!soundEnabled) {
      try {
        const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        const ctx = new AudioContextClass();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(216, ctx.currentTime); // 216Hz deep calm gold frequency
        gain.gain.setValueAtTime(0.04, ctx.currentTime);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        audioCtxRef.current = ctx;
        oscRef.current = osc;
        setSoundEnabled(true);
      } catch {
        setSoundEnabled(false);
      }
    } else {
      if (audioCtxRef.current) {
        audioCtxRef.current.close();
        audioCtxRef.current = null;
      }
      setSoundEnabled(false);
    }
  };

  useEffect(() => {
    return () => {
      if (audioCtxRef.current) {
        audioCtxRef.current.close();
      }
    };
  }, []);

  // Format seconds to mm:ss
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  // Skip forward or backward
  const handleSeek = (newTime: number) => {
    setCurrentTime(Math.max(0, Math.min(TOTAL_DURATION, newTime)));
  };

  return (
    <div className="relative h-80 sm:h-96 w-full rounded-2xl overflow-hidden bg-slate-950 border border-slate-700/80 shadow-2xl select-none group/reel">
      
      {/* View Switcher Tabs (Header) */}
      <div className="absolute top-2.5 inset-x-2.5 z-30 flex items-center justify-between gap-1 pointer-events-auto">
        <div className="flex items-center gap-1 bg-slate-950/85 backdrop-blur-md p-1 rounded-xl border border-slate-800 shadow-lg">
          <button
            type="button"
            onClick={() => {
              setActiveView('reel');
              setIsPlaying(true);
            }}
            className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
              activeView === 'reel'
                ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-md shadow-amber-500/20'
                : 'text-slate-300 hover:text-white hover:bg-slate-900'
            }`}
          >
            <Film className="w-3.5 h-3.5" />
            <span>{language === 'fa' ? '🎬 ریل ۵۰ث' : language === 'ar' ? '🎬 فيديو ٥٠ث' : '🎬 50s Reel'}</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveView('showroom')}
            className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
              activeView === 'showroom'
                ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-md shadow-amber-500/20'
                : 'text-slate-300 hover:text-white hover:bg-slate-900'
            }`}
          >
            <ImageIcon className="w-3.5 h-3.5" />
            <span>{language === 'fa' ? '🏛️ سالن مرکزی' : language === 'ar' ? '🏛️ صالة العرض' : '🏛️ Showroom'}</span>
          </button>
        </div>

        {/* Action Pills (Fullscreen & Auto-Alternate status) */}
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => setAutoAlternate(!autoAlternate)}
            className={`px-2 py-1 rounded-lg text-[10px] font-mono font-bold border transition-all flex items-center gap-1 backdrop-blur-md cursor-pointer ${
              autoAlternate 
                ? 'bg-emerald-950/80 text-emerald-300 border-emerald-500/40' 
                : 'bg-slate-950/70 text-slate-400 border-slate-800'
            }`}
            title={language === 'fa' ? 'تعویض خودکار نوبتی بین ریل و عکس سالن' : 'Auto alternate between reel and showroom'}
          >
            <span className={`w-1.5 h-1.5 rounded-full ${autoAlternate ? 'bg-emerald-400 animate-pulse' : 'bg-slate-500'}`} />
            <span>{language === 'fa' ? 'گردش نوبتی' : 'Auto-Loop'}</span>
          </button>

          <button
            type="button"
            onClick={() => setIsFullscreen(true)}
            className="p-1.5 rounded-lg bg-slate-950/80 hover:bg-amber-500/20 text-slate-300 hover:text-amber-300 border border-slate-800 transition-colors backdrop-blur-md cursor-pointer"
            title={language === 'fa' ? 'نمای سینمایی تمام‌صفحه ریل ۱۰۸۰×۱۹۲۰' : 'Fullscreen 1080x1920 Reel Mode'}
          >
            <Maximize2 className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* VIEW 1: REEL SCENARIO (50-Second Layered Reel) */}
      {activeView === 'reel' && (
        <div className="relative w-full h-full overflow-hidden">
          
          {/* SLIDE 1: (0:00 – 0:03) Logo Fullscreen with Ease-Out Ken Burns Zoom */}
          <AnimatePresence mode="wait">
            {isSlideOne && (
              <motion.div
                key="slide-1-logo-fullscreen"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.3 } }}
                className="absolute inset-0 z-10 overflow-hidden bg-black"
              >
                {/* Ken Burns Zoom from 100% to 110% over 3 seconds */}
                <motion.div
                  initial={{ scale: 1.0 }}
                  animate={{ scale: 1.10 }}
                  transition={{ duration: 3.0, ease: 'easeOut' }}
                  className="w-full h-full flex items-center justify-center"
                >
                  <img
                    src={REEL_LOGO_IMAGE}
                    alt="STELLEX 3D Luxury Logo Fullscreen"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-center"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>

                {/* Subtle cinematic top-bottom dark gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-slate-950/30 pointer-events-none" />

                {/* Slide 1 Tag */}
                <div className="absolute bottom-12 left-4 z-20 pointer-events-none">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/80 border border-amber-500/30 backdrop-blur-md text-[11px] font-bold text-amber-300 shadow-lg">
                    <Sparkles className="w-3 h-3 text-amber-400 animate-spin" />
                    <span>STELLEX STAINLESS STEEL</span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* SLIDES 2 to 30: (0:03 – 0:46.5) 29 Railing Photos + Layer Stack */}
          {!isSlideOne && (
            <div className="absolute inset-0 z-10 overflow-hidden bg-slate-950">
              
              {/* LAYER 1 (Bottom): Railing Photo with subtle 100% -> 104% zoom and 0.3s cross-dissolve */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`railing-slide-${currentRailingSlide?.id || 2}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="absolute inset-0 w-full h-full overflow-hidden"
                >
                  <motion.img
                    key={`img-zoom-${currentRailingSlide?.id || 2}`}
                    src={currentRailingSlide?.image}
                    alt={currentRailingSlide?.titleFa}
                    initial={{ scale: 1.0 }}
                    animate={{ scale: 1.04 }}
                    transition={{ duration: PER_RAILING_SLIDE_DURATION, ease: 'linear' }}
                    className="w-full h-full object-cover object-center"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
              </AnimatePresence>

              {/* LAYER 2 (Middle): Vignette & Subtle Radial Darkening for Logo Legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-black/25 to-slate-950/50 pointer-events-none" />
              <div 
                className="absolute inset-0 pointer-events-none" 
                style={{
                  background: 'radial-gradient(circle at center, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.15) 50%, rgba(0,0,0,0.7) 100%)'
                }}
              />

              {/* LAYER 3 (Top): Center Fixed STELLEX Logo 175x175 (Responsive) */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
                <motion.div
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1.0, opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  className="relative w-28 h-28 sm:w-36 sm:h-36 lg:w-40 lg:h-40 rounded-2xl overflow-hidden p-1.5 flex items-center justify-center"
                  style={{
                    filter: 'drop-shadow(0px 8px 24px rgba(0, 0, 0, 0.65))',
                  }}
                >
                  {/* Outer subtle golden rim ring */}
                  <div className="absolute inset-0 rounded-2xl border border-amber-400/40 bg-slate-950/30 backdrop-blur-[2px]" />
                  
                  {/* Centered Logo Image */}
                  <img
                    src={REEL_LOGO_IMAGE}
                    alt="STELLEX Official Logo Overlay"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover rounded-xl shadow-2xl relative z-10"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
              </div>

              {/* Current Slide Info Overlay (Bottom Left) */}
              <div className="absolute bottom-11 inset-x-3 z-20 flex items-center justify-between pointer-events-none">
                <div className="max-w-[75%] truncate">
                  <span className="text-[10px] font-mono text-amber-400 block tracking-wider uppercase">
                    {language === 'fa' ? currentRailingSlide?.categoryFa : currentRailingSlide?.categoryEn}
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-white drop-shadow truncate block">
                    {language === 'fa' ? currentRailingSlide?.titleFa : currentRailingSlide?.titleEn}
                  </span>
                </div>

                <span className="px-2 py-0.5 rounded-md bg-slate-950/80 backdrop-blur-md text-[10px] font-mono text-slate-300 border border-slate-700">
                  {currentSlideIndex}/30
                </span>
              </div>

            </div>
          )}

          {/* SLIDE 31 / OUTRO: (46.5 – 50.0s) Breathing Space / Loop Transition */}
          {isOutro && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 z-20 bg-slate-950/90 backdrop-blur-md flex flex-col items-center justify-center p-6 text-center"
            >
              <div className="w-16 h-16 rounded-2xl overflow-hidden border border-amber-400/40 shadow-xl mb-3">
                <img src={REEL_LOGO_IMAGE} alt="STELLEX" className="w-full h-full object-cover" />
              </div>
              <h4 className="text-sm font-black text-amber-300">گروه فنی و مهندسی استیلکس</h4>
              <p className="text-[11px] text-slate-300 mt-1 max-w-xs">
                {language === 'fa' ? 'طراحی، مدلسازی و اجرای تخصصی سازه‌های فاخر استیل' : 'Luxury Stainless Steel Architectural Engineering'}
              </p>
              <span className="mt-2 text-[10px] font-mono text-amber-400/80">لوپ مجدد ریل...</span>
            </motion.div>
          )}

          {/* Reel Interactive Control Bar (Bottom Overlay) */}
          <div className="absolute bottom-0 inset-x-0 z-30 bg-gradient-to-t from-slate-950 via-slate-950/90 to-transparent pt-3 pb-2 px-3 flex flex-col gap-1.5">
            
            {/* 50-second Progress Bar (Interactive scrubber) */}
            <div 
              className="w-full h-1.5 bg-slate-800/90 rounded-full overflow-hidden cursor-pointer relative group/bar"
              onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const clickX = isRtl ? (rect.right - e.clientX) : (e.clientX - rect.left);
                const percent = Math.max(0, Math.min(1, clickX / rect.width));
                handleSeek(percent * TOTAL_DURATION);
              }}
            >
              <div 
                className="h-full bg-gradient-to-r from-amber-500 via-amber-400 to-amber-300 rounded-full transition-all duration-75"
                style={{ width: `${(currentTime / TOTAL_DURATION) * 100}%` }}
              />
            </div>

            {/* Bottom Controls Row */}
            <div className="flex items-center justify-between text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="p-1 rounded-md hover:bg-slate-800 text-amber-400 hover:text-amber-300 cursor-pointer transition-colors"
                  title={isPlaying ? 'توقف' : 'پخش'}
                >
                  {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                </button>

                <button
                  type="button"
                  onClick={() => handleSeek(0)}
                  className="p-1 rounded-md hover:bg-slate-800 text-slate-400 hover:text-white cursor-pointer transition-colors"
                  title="شروع مجدد از اول"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>

                <span className="font-mono text-[10px] text-slate-400">
                  {formatTime(currentTime)} / 0:50
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={toggleSound}
                  className="p-1 rounded-md hover:bg-slate-800 text-slate-400 hover:text-amber-400 cursor-pointer transition-colors"
                  title={soundEnabled ? 'قطع صدای محیطی' : 'پخش صدای آرامش‌بخش متالیک'}
                >
                  {soundEnabled ? <Volume2 className="w-3.5 h-3.5 text-amber-400" /> : <VolumeX className="w-3.5 h-3.5" />}
                </button>

                <span className="text-[10px] font-mono text-amber-400/90 font-bold bg-amber-500/10 px-1.5 py-0.5 rounded border border-amber-500/20">
                  {isSlideOne ? 'لوگو (۳ث)' : isOutro ? 'پایان ریل' : `اسلاید ${currentSlideIndex}`}
                </span>
              </div>
            </div>

          </div>

        </div>
      )}

      {/* VIEW 2: SHOWROOM ORIGINAL PHOTO (Corporate Holding Hall) */}
      {activeView === 'showroom' && (
        <div className="relative w-full h-full overflow-hidden">
          <img
            src={REEL_SHOWROOM_IMAGE}
            alt="سالن مرکزی هلدینگ استیلکس با سازه برجسته لوگو، شوروم نرده‌ها و ماکت شهرک"
            className="w-full h-full object-cover object-center group-hover/reel:scale-105 transition-transform duration-700 ease-out"
            referrerPolicy="no-referrer"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-black/30 pointer-events-none" />

          {/* Showroom Badge */}
          <div className="absolute bottom-3 inset-x-3 z-20 flex items-center justify-between">
            <div className="bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-700/80 text-left rtl:text-right">
              <span className="text-[11px] font-bold text-amber-300 block flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                <span>{language === 'fa' ? 'دفتر مرکزی و شوروم دائمی استیلکس' : 'STELLEX Corporate HQ & Showroom'}</span>
              </span>
              <span className="text-[10px] text-slate-300">
                {language === 'fa' ? 'سازه لوگوی استیلکس + ماکت شهرک معماری' : '3D Logo Wall & Architectural Scale Model'}
              </span>
            </div>

            <button
              type="button"
              onClick={() => {
                setActiveView('reel');
                setIsPlaying(true);
              }}
              className="px-3 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs shadow-lg flex items-center gap-1.5 cursor-pointer transition-all hover:scale-105"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>{language === 'fa' ? 'پخش ریل ۵۰ ثانیه' : 'Play 50s Reel'}</span>
            </button>
          </div>
        </div>
      )}

      {/* FULLSCREEN 1080x1920 (9:16) CINEMATIC MODAL */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex items-center justify-center p-2 sm:p-6"
            onClick={() => setIsFullscreen(false)}
          >
            <div 
              className="relative w-full max-w-[420px] aspect-[9/16] max-h-[92vh] rounded-3xl overflow-hidden bg-black border border-amber-500/30 shadow-[0_0_50px_rgba(245,158,11,0.2)]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setIsFullscreen(false)}
                className="absolute top-4 right-4 z-40 w-9 h-9 rounded-full bg-slate-950/80 hover:bg-red-500/20 text-slate-300 hover:text-red-400 border border-slate-700 flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* 1080x1920 Reel Header */}
              <div className="absolute top-4 left-4 z-30 flex items-center gap-2">
                <div className="px-3 py-1 rounded-full bg-slate-950/80 border border-amber-500/40 text-[11px] font-bold text-amber-300 backdrop-blur-md">
                  🎬 STELLEX 1080×1920 REEL
                </div>
              </div>

              {/* Inside Fullscreen: Exact same Layer Stack */}
              <div className="relative w-full h-full overflow-hidden">
                {isSlideOne ? (
                  <motion.div
                    initial={{ scale: 1.0 }}
                    animate={{ scale: 1.10 }}
                    transition={{ duration: 3.0, ease: 'easeOut' }}
                    className="w-full h-full flex items-center justify-center"
                  >
                    <img
                      src={REEL_LOGO_IMAGE}
                      alt="STELLEX Fullscreen Logo"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                ) : (
                  <div className="relative w-full h-full">
                    {/* Layer 1 */}
                    <motion.img
                      key={`fs-railing-${currentRailingSlide?.id}`}
                      src={currentRailingSlide?.image}
                      alt={currentRailingSlide?.titleFa}
                      initial={{ scale: 1.0 }}
                      animate={{ scale: 1.04 }}
                      transition={{ duration: PER_RAILING_SLIDE_DURATION, ease: 'linear' }}
                      className="w-full h-full object-cover"
                    />

                    {/* Layer 2: Vignette */}
                    <div 
                      className="absolute inset-0 pointer-events-none" 
                      style={{
                        background: 'radial-gradient(circle at center, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.15) 50%, rgba(0,0,0,0.75) 100%)'
                      }}
                    />

                    {/* Layer 3: Logo 175x175 in Dead-Center */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
                      <div 
                        className="w-[175px] h-[175px] rounded-2xl overflow-hidden p-2 flex items-center justify-center border border-amber-400/50 bg-black/40 backdrop-blur-[2px]"
                        style={{ filter: 'drop-shadow(0px 8px 24px rgba(0, 0, 0, 0.75))' }}
                      >
                        <img
                          src={REEL_LOGO_IMAGE}
                          alt="STELLEX Centered Logo"
                          className="w-full h-full object-cover rounded-xl"
                        />
                      </div>
                    </div>

                    {/* Meta info */}
                    <div className="absolute bottom-16 inset-x-5 z-20 text-center">
                      <span className="text-xs font-mono text-amber-400 uppercase tracking-widest block">
                        {currentRailingSlide?.categoryFa}
                      </span>
                      <h3 className="text-sm font-black text-white drop-shadow mt-1">
                        {currentRailingSlide?.titleFa}
                      </h3>
                    </div>
                  </div>
                )}

                {/* Progress bar in Fullscreen */}
                <div className="absolute bottom-4 inset-x-4 z-30">
                  <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden mb-2">
                    <div 
                      className="h-full bg-amber-400 rounded-full"
                      style={{ width: `${(currentTime / TOTAL_DURATION) * 100}%` }}
                    />
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-slate-300 font-mono">
                    <span>{formatTime(currentTime)}</span>
                    <span>{currentSlideIndex}/30</span>
                    <span>0:50</span>
                  </div>
                </div>

              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};
