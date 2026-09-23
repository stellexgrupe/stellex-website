import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { RotateCw, Smartphone, Maximize2, Check, ArrowRight, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function MobileLandscapeEnforcer() {
  const { language } = useLanguage();
  const [isMobilePortrait, setIsMobilePortrait] = useState<boolean>(false);
  const [isDismissed, setIsDismissed] = useState<boolean>(false);
  const [isForcedLandscape, setIsForcedLandscape] = useState<boolean>(false);
  const [orientationLocked, setOrientationLocked] = useState<boolean>(false);

  // Check viewport orientation
  useEffect(() => {
    const checkOrientation = () => {
      const isMobile = window.innerWidth <= 860 || /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent);
      const isPortrait = window.innerHeight > window.innerWidth;
      
      if (isMobile && isPortrait) {
        setIsMobilePortrait(true);
      } else {
        setIsMobilePortrait(false);
        // If user physically turned to landscape, reset dismissed state
        setIsDismissed(false);
      }
    };

    checkOrientation();

    window.addEventListener('resize', checkOrientation);
    window.addEventListener('orientationchange', checkOrientation);

    // Automatically attempt landscape lock on initial touch or load
    const tryAutoLandscapeLock = async () => {
      try {
        if (screen.orientation && typeof (screen.orientation as any).lock === 'function') {
          await (screen.orientation as any).lock('landscape');
          setOrientationLocked(true);
        }
      } catch {
        // Silently handled: standard mobile browsers restrict orientation lock to fullscreen or PWA mode
      }
    };

    tryAutoLandscapeLock();

    return () => {
      window.removeEventListener('resize', checkOrientation);
      window.removeEventListener('orientationchange', checkOrientation);
    };
  }, []);

  // Handle CSS forced landscape class on body
  useEffect(() => {
    if (isForcedLandscape) {
      document.body.classList.add('force-landscape-active');
    } else {
      document.body.classList.remove('force-landscape-active');
    }

    return () => {
      document.body.classList.remove('force-landscape-active');
    };
  }, [isForcedLandscape]);

  // Request native fullscreen & screen orientation lock
  const handleFullscreenLandscape = async () => {
    try {
      if (!document.fullscreenElement) {
        if (document.documentElement.requestFullscreen) {
          await document.documentElement.requestFullscreen();
        } else if ((document.documentElement as any).webkitRequestFullscreen) {
          await (document.documentElement as any).webkitRequestFullscreen();
        }
      }

      if (screen.orientation && typeof (screen.orientation as any).lock === 'function') {
        await (screen.orientation as any).lock('landscape');
        setOrientationLocked(true);
      }
    } catch {
      // If hardware lock is rejected by browser, fallback to virtual landscape rotation
      setIsForcedLandscape(true);
    }
  };

  const handleToggleVirtualLandscape = () => {
    setIsForcedLandscape(prev => !prev);
  };

  // Translations
  const texts = {
    fa: {
      badge: 'بهینه‌سازی نمایش مهندسی',
      title: 'نمایش افقی خودکار (Landscape Mode)',
      desc: 'برای وضوح بالای نقشه‌های مهندسی، کاتالوگ سازه‌ها، دکوراسیون استیل و محاسبات هوشمند، نمایش در موبایل به‌صورت افقی تنظیم شده است.',
      rotateTip: 'لطفاً گوشی خود را به حالت افقی بچرخانید',
      fullscreenBtn: 'قفل و چرخش تمام‌صفحه افقی',
      virtualBtn: isForcedLandscape ? 'غیرفعال‌سازی چرخش مجازی' : 'چرخش مجازی فوری صفحه (۹۰°)',
      continuePortrait: 'ادامه در حالت عمودی',
      floatingPill: 'حالت افقی موبایل',
      autoRotatedNotice: 'جهت چرخش خودکار، قفل چرخش گوشی (Auto-Rotate) را فعال کنید.',
    },
    en: {
      badge: 'Engineering Display Optimization',
      title: 'Automatic Landscape Mode',
      desc: 'For the best clarity of architectural drawings, 3D stainless structures, and engineering calculations, mobile view is optimized for landscape orientation.',
      rotateTip: 'Please rotate your device horizontally',
      fullscreenBtn: 'Fullscreen Landscape Lock',
      virtualBtn: isForcedLandscape ? 'Disable Virtual Rotation' : 'Force Virtual Landscape (90°)',
      continuePortrait: 'Continue in portrait view',
      floatingPill: 'Mobile Landscape',
      autoRotatedNotice: 'Enable Auto-Rotate in your device settings for seamless rotation.',
    },
    ar: {
      badge: 'تحسين العرض الهندسي',
      title: 'وضع العرض الأفقي التلقائي (Landscape)',
      desc: 'للحصول على أفضل وضوح للمخططات الهندسية ونماذج الفولاذ المقاوم للصدأ الفاخرة، تم ضبط العرض على الهواتف ليكون أفقيًا.',
      rotateTip: 'يرجى تدوير هاتفك إلى الوضع الأفقي',
      fullscreenBtn: 'قفل ودوران أفقي بملء الشاشة',
      virtualBtn: isForcedLandscape ? 'إلغاء التدوير الافتراضي' : 'تدوير الشاشة افتراضيًا (90°)',
      continuePortrait: 'المتابعة بالوضع الرأسي',
      floatingPill: 'العرض الأفقي',
      autoRotatedNotice: 'يرجى تفعيل التدوير التلقائي في إعدادات الهاتف.',
    },
    tr: {
      badge: 'Mühendislik Görüntü Optimizasyonu',
      title: 'Otomatik Yatay Ekran (Landscape)',
      desc: 'Mimari çizimler, paslanmaz çelik modelleri ve mühendislik hesaplamalarını en net şekilde incelemek için mobil görünüm yatay moda ayarlanmıştır.',
      rotateTip: 'Lütfen cihazınızı yatay konuma çevirin',
      fullscreenBtn: 'Tam Ekran Yatay Kilit',
      virtualBtn: isForcedLandscape ? 'Sanal Döndürmeyi Kapat' : '90° Sanal Yatay Görünüm',
      continuePortrait: 'Dikey modda devam et',
      floatingPill: 'Yatay Görünüm',
      autoRotatedNotice: 'Otomatik döndürme için telefonunuzun döndürme kilidini açın.',
    }
  };

  const t = texts[language as keyof typeof texts] || texts.fa;

  return (
    <>
      {/* Floating Re-Open Button when dismissed in portrait */}
      <AnimatePresence>
        {isMobilePortrait && isDismissed && !isForcedLandscape && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.9 }}
            className="fixed bottom-20 left-4 z-40 sm:hidden"
          >
            <button
              onClick={() => setIsDismissed(false)}
              className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-slate-900/90 text-amber-400 border border-amber-500/40 shadow-xl shadow-black/50 backdrop-blur-md text-xs font-semibold hover:bg-slate-800 transition-colors"
              title={t.title}
            >
              <RotateCw className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '6s' }} />
              <span>{t.floatingPill}</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Landscape Guide & Enforcer Modal */}
      <AnimatePresence>
        {isMobilePortrait && !isDismissed && !isForcedLandscape && (
          <motion.div
            id="mobile-landscape-enforcer-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/95 backdrop-blur-xl p-5 overflow-y-auto"
          >
            {/* Ambient Background Glow */}
            <div className="absolute inset-0 bg-radial from-amber-500/10 via-transparent to-transparent pointer-events-none" />

            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-sm rounded-3xl bg-slate-900/90 border border-amber-500/30 p-6 sm:p-8 text-center shadow-2xl shadow-amber-950/30 backdrop-blur-md"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-medium mb-5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{t.badge}</span>
              </div>

              {/* Animated Phone Rotation Visual */}
              <div className="relative w-32 h-32 mx-auto mb-6 flex items-center justify-center">
                {/* Glow ring */}
                <div className="absolute inset-0 rounded-full bg-amber-500/10 animate-pulse border border-amber-500/20" />

                {/* Animated Rotating Phone */}
                <motion.div
                  animate={{
                    rotate: [0, 0, 90, 90, 0],
                    scale: [1, 1, 1.05, 1.05, 1],
                  }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    times: [0, 0.2, 0.5, 0.8, 1],
                  }}
                  className="w-14 h-24 rounded-xl border-2 border-amber-400 bg-slate-800/80 shadow-lg shadow-amber-500/20 flex flex-col items-center justify-between p-1.5"
                >
                  <div className="w-4 h-1 rounded-full bg-amber-400/50" />
                  <div className="w-full flex-1 my-1 rounded bg-slate-900/90 border border-amber-500/20 flex items-center justify-center">
                    <span className="text-[8px] font-black text-amber-400 tracking-wider">STELLEX</span>
                  </div>
                  <div className="w-2 h-2 rounded-full border border-amber-400/50" />
                </motion.div>

                {/* Rotating curved arrows */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-2 border-2 border-dashed border-amber-500/30 rounded-full pointer-events-none"
                />
              </div>

              {/* Headline & Description */}
              <h3 className="text-lg sm:text-xl font-black text-slate-100 mb-2">
                {t.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-light">
                {t.desc}
              </p>

              {/* Rotate Tip Card */}
              <div className="flex items-center justify-center gap-2 p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold mb-6">
                <RotateCw className="w-4 h-4 animate-spin shrink-0" style={{ animationDuration: '4s' }} />
                <span>{t.rotateTip}</span>
              </div>

              {/* Actions */}
              <div className="space-y-2.5">
                {/* Fullscreen Landscape Lock Button */}
                <button
                  type="button"
                  onClick={handleFullscreenLandscape}
                  className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-slate-950 font-bold text-sm shadow-lg shadow-amber-500/20 hover:brightness-110 active:scale-[0.98] transition-all"
                >
                  <Maximize2 className="w-4 h-4" />
                  <span>{t.fullscreenBtn}</span>
                </button>

                {/* Virtual Landscape Mode Button (CSS 90 deg rotation) */}
                <button
                  type="button"
                  onClick={handleToggleVirtualLandscape}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800/90 hover:bg-slate-800 text-slate-200 border border-slate-700 text-xs font-medium transition-colors"
                >
                  <Smartphone className="w-3.5 h-3.5 text-amber-400" />
                  <span>{t.virtualBtn}</span>
                </button>

                {/* Dismiss option to view in portrait if desired */}
                <button
                  type="button"
                  onClick={() => setIsDismissed(true)}
                  className="w-full py-2 text-xs text-slate-400 hover:text-slate-200 transition-colors pt-2 underline underline-offset-4"
                >
                  {t.continuePortrait}
                </button>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-slate-500">
                {t.autoRotatedNotice}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Indicator when Virtual Landscape is active */}
      {isForcedLandscape && (
        <div className="fixed top-3 left-3 z-[110] flex items-center gap-2">
          <button
            onClick={() => setIsForcedLandscape(false)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-950/90 text-amber-400 border border-amber-500/50 shadow-2xl backdrop-blur-md text-xs font-bold"
          >
            <RotateCw className="w-3.5 h-3.5" />
            <span>خروج از چرخش ۹۰°</span>
          </button>
        </div>
      )}
    </>
  );
}
