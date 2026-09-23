import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { Scan } from 'lucide-react';

export const ZephyrFloatingHouse: React.FC = () => {
  const { language } = useLanguage();
  const isEn = language === 'en';

  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [scanModeEnabled, setScanModeEnabled] = useState(true);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    setMousePos({ x, y });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-full min-h-[280px] sm:min-h-[320px] lg:min-h-[340px] bg-transparent select-none flex flex-col items-center justify-center perspective-[1200px] overflow-visible"
    >
      {/* 
        STAGE: 100% Transparent Background - Pure Floating House & Dynamic Ground Shadow.
        Wherever placed, the site's own background (mesh, gradient, dark slate) is 100% visible.
      */}

      {/* Floating Mode HUD Pill - Sleek Architectural Exhibition Tag */}
      <div className="absolute top-0 right-2 sm:right-4 z-30 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-900/80 border border-amber-500/30 backdrop-blur-md text-[10px] sm:text-[11px] font-mono text-amber-300 shadow-sm pointer-events-auto">
        <button
          type="button"
          onClick={() => setScanModeEnabled(!scanModeEnabled)}
          className="flex items-center gap-1.5 hover:text-amber-200 transition-colors cursor-pointer"
          title={isEn ? 'Toggle LiDAR Engineering Scan' : 'فعال/غیرفعال‌سازی اسکن لیزری مهندسی'}
        >
          <Scan className={`w-3 h-3 ${scanModeEnabled ? 'text-amber-400 animate-spin' : 'text-slate-400'}`} style={{ animationDuration: '6s' }} />
          <span className="hidden xs:inline">
            {isEn ? 'LiDAR SCAN' : language === 'ar' ? 'المسح الإنشائي' : 'اسکن سازه'}
          </span>
          <span className={`inline-block w-1.5 h-1.5 rounded-full ${scanModeEnabled ? 'bg-amber-400 animate-ping' : 'bg-slate-500'}`} />
        </button>
      </div>

      <div className="relative w-full max-w-[460px] sm:max-w-[500px] lg:max-w-[540px] flex flex-col items-center justify-center py-1 translate-y-3 sm:translate-y-4">

        {/* 1. FLOATING LEVITATING HOUSE (Transparent Cutout with 3D Parallax & Floating Physics) */}
        <motion.div
          animate={{
            y: [-8, 8, -8],
            rotateZ: isEn ? [0.3, -0.3, 0.3] : [-0.3, 0.3, -0.3],
            scaleX: isEn ? -1 : 1,
          }}
          transition={{
            y: {
              duration: 5.5,
              repeat: Infinity,
              ease: 'easeInOut',
            },
            rotateZ: {
              duration: 5.5,
              repeat: Infinity,
              ease: 'easeInOut',
            },
            scaleX: {
              duration: 0.45,
              ease: 'easeInOut',
            },
          }}
          style={{
            transform: `rotateY(${mousePos.x * (isEn ? -5 : 5)}deg) rotateX(${-mousePos.y * 5}deg)`,
            transformStyle: 'preserve-3d',
            transition: 'transform 0.22s ease-out',
          }}
          className="relative z-20 w-full flex items-center justify-center translate-y-2 sm:translate-y-3"
        >
          {/* Ambient Warm Interior Illumination & Volumetric Levitation Back-Glow */}
          <div 
            className="absolute inset-x-8 top-6 bottom-4 bg-[radial-gradient(ellipse_at_center,rgba(245,158,11,0.22),rgba(217,119,6,0.08)_50%,transparent_75%)] rounded-3xl blur-2xl pointer-events-none transition-opacity duration-700 -z-10"
            style={{ opacity: isHovered ? 0.6 : 0.35 }}
          />

          {/* Floating Atmospheric Golden Micro-Sparks (Zero-G Particles Drifting Upward) */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
            {[
              { left: '18%', bottom: '15%', delay: 0, dur: 4.2 },
              { left: '35%', bottom: '20%', delay: 1.2, dur: 5.1 },
              { left: '62%', bottom: '18%', delay: 0.7, dur: 4.8 },
              { left: '80%', bottom: '25%', delay: 2.1, dur: 4.5 },
              { left: '48%', bottom: '12%', delay: 1.8, dur: 5.5 },
            ].map((p, pIdx) => (
              <motion.div
                key={pIdx}
                animate={{
                  y: [-10, -110],
                  x: [0, (pIdx % 2 === 0 ? 12 : -12)],
                  opacity: [0, 0.85, 0],
                  scale: [0.6, 1.2, 0.4],
                }}
                transition={{
                  duration: p.dur,
                  repeat: Infinity,
                  delay: p.delay,
                  ease: 'easeInOut',
                }}
                style={{ left: p.left, bottom: p.bottom }}
                className="absolute w-1.5 h-1.5 rounded-full bg-amber-300 shadow-[0_0_8px_#fbbf24]"
              />
            ))}
          </div>

          {/* House Image Container with Dynamic Specular Glass Sheen & Architectural Scan Line */}
          <div className="relative w-full flex items-center justify-center">
            
            {/* High-Resolution Modernist Floating Villa with Transparent Alpha Channel - Complete Base Structure */}
            <img
              src="/assets/images/floating_house_transparent.png?v=3"
              alt="Modernist Luxury Floating House"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              draggable={false}
              className="w-full h-auto object-contain drop-shadow-[0_16px_32px_rgba(0,0,0,0.55)] filter contrast-[1.03] transition-transform duration-300 pointer-events-none select-none"
            />

            {/* Specular Glass & Steel Sheen Overlay: Sweeps across the facade like luxury architectural lighting */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-2xl">
              <div 
                className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-amber-200/25 to-transparent mix-blend-screen animate-glass-sheen"
                style={{ filter: 'blur(8px)' }}
              />
            </div>

            {/* Precision Architectural LiDAR Laser Scan Line (Sweeps vertically across structural frame) */}
            {scanModeEnabled && (
              <div className="absolute inset-x-6 h-0.5 animate-architectural-scan pointer-events-none z-30">
                {/* Core high-intensity laser line */}
                <div className="w-full h-full bg-gradient-to-r from-transparent via-amber-300 to-transparent shadow-[0_0_12px_rgba(251,191,36,0.95)]" />
                {/* Laser scan volumetric gradient band */}
                <div className="w-full h-6 -mt-3 bg-gradient-to-b from-amber-500/10 via-amber-400/20 to-transparent blur-[3px]" />
                {/* Micro telemetry crosshair on the scan line */}
                <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-amber-200 shadow-[0_0_6px_#fbbf24]" />
                <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-amber-200 shadow-[0_0_6px_#fbbf24]" />
              </div>
            )}
          </div>
        </motion.div>

        {/* 2. ANTI-GRAVITY MAGNETIC LEVITATION FIELD (Elliptical Energy Rings Rotating in 3D Perspective) */}
        <div className="relative w-full max-w-[420px] sm:max-w-[460px] h-14 -mt-7 sm:-mt-8 flex items-center justify-center pointer-events-none z-15">
          
          {/* Dynamic Expansion Pulse Wave 1 */}
          <div className="absolute w-4/5 h-16 rounded-[100%] border border-amber-400/40 animate-levitation-pulse-1" />

          {/* Dynamic Expansion Pulse Wave 2 (Phase Offset) */}
          <div className="absolute w-4/5 h-16 rounded-[100%] border border-amber-400/30 animate-levitation-pulse-2" />

          {/* Outer Rotating Magnetic Levitation Field Ring (Dashed High-Tech Ring) */}
          <div className="absolute w-[92%] h-14 rounded-[100%] border border-dashed border-amber-400/45 animate-levitation-ring shadow-[0_0_16px_rgba(245,158,11,0.25)]" />

          {/* Inner Counter-Rotating Precision Gradient Ring */}
          <div 
            className="absolute w-[78%] h-12 rounded-[100%] border border-amber-300/60 animate-levitation-ring-rev shadow-[0_0_20px_rgba(251,191,36,0.35)]" 
            style={{
              background: 'radial-gradient(ellipse at center, rgba(245,158,11,0.18) 0%, rgba(217,119,6,0.06) 45%, transparent 70%)',
            }}
          />

          {/* Core Magnetic Levitation Focal Emitter (Golden Radiant Glow Node) */}
          <div className="absolute w-1/3 h-5 rounded-[100%] bg-amber-400/30 blur-md animate-pulse" />
        </div>

        {/* 3. DYNAMIC REALISTIC GROUND SHADOW (Pure Alpha Transparency - Inverse Harmonic Levitation) */}
        <div className="relative w-full flex items-center justify-center -mt-8 sm:-mt-9 z-10 pointer-events-none">
          
          {/* Optical Ground Cast Shadow from the Villa */}
          <motion.div
            animate={{
              scaleX: isEn ? [-1.05, -0.95, -1.05] : [1.05, 0.95, 1.05],
              scaleY: [1.04, 0.94, 1.04],
              opacity: [0.45, 0.85, 0.45],
            }}
            transition={{
              duration: 5.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="w-full max-w-[400px] sm:max-w-[440px] lg:max-w-[480px] flex items-center justify-center"
          >
            {/* Real Pre-baked Geometric Ambient Shadow */}
            <img
              src="/assets/images/floating_house_shadow.png"
              alt=""
              aria-hidden="true"
              draggable={false}
              className="w-full h-auto object-contain select-none"
            />
          </motion.div>

          {/* Core Ambient Contact Shadow Diffusion (Directly on Ground Plane) */}
          <motion.div
            animate={{
              scaleX: isEn ? [-1.04, -0.92, -1.04] : [1.04, 0.92, 1.04],
              opacity: [0.3, 0.65, 0.3],
            }}
            transition={{
              duration: 5.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute bottom-2 w-3/5 h-6 rounded-[100%] bg-black/60 blur-xl pointer-events-none -z-10"
          />

          {/* Ambient Ground Levitation Warm Reflection Halo */}
          <div className="absolute bottom-1 w-2/3 h-8 rounded-[100%] bg-amber-500/10 blur-xl pointer-events-none -z-10" />
        </div>

      </div>
    </div>
  );
};
