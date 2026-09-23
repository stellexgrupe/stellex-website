import React, { createContext, useContext, useState, useEffect } from 'react';

export type ThemeId = 'gold' | 'silver' | 'emerald';

export interface ThemeOption {
  id: ThemeId;
  name: {
    fa: string;
    ar: string;
    en: string;
  };
  subtitle: {
    fa: string;
    ar: string;
    en: string;
  };
  primaryColor: string;
  secondaryColor: string;
  gradient: string;
  glowColor: string;
}

export const THEME_OPTIONS: ThemeOption[] = [
  {
    id: 'gold',
    name: {
      fa: 'طلایی و تیتانیوم تیره',
      ar: 'ذهبي وتيتانيوم فاخر',
      en: 'Royal Gold & Titanium'
    },
    subtitle: {
      fa: 'پالت متالیک اشرافی و تیتانیوم تیره',
      ar: 'درجات الذهب الكاثودي والمعدن الداكن',
      en: 'Classic Cathodic Gold & Dark Titanium'
    },
    primaryColor: '#f59e0b',
    secondaryColor: '#d97706',
    gradient: 'from-amber-400 via-amber-500 to-amber-700',
    glowColor: 'rgba(245, 158, 11, 0.3)'
  },
  {
    id: 'silver',
    name: {
      fa: 'کالباسی، مسی و بنفش شاهانه با زرد سلطنتی',
      ar: 'كالباسي ونحاسي مع أرجواني ملكي وأصفر إمبراطوري',
      en: 'Dusty Rose & Copper with Royal Purple & Imperial Gold'
    },
    subtitle: {
      fa: 'زمینه کالباسی، کادرها و سرصفحه بنفش شاهانه با عناوین اسلاید زرد سلطنتی',
      ar: 'خلفية كالباسي أنيقة، كادرات وأشرطة بنفسجية ملكية مع عناوين بالأصفر الإمبراطوري',
      en: 'Dusty Rose backdrop with Royal Purple headers & Imperial Gold slide titles'
    },
    primaryColor: '#e09888',
    secondaryColor: '#a855f7',
    gradient: 'from-rose-400 via-purple-600 to-amber-500',
    glowColor: 'rgba(224, 152, 136, 0.4)'
  },
  {
    id: 'emerald',
    name: {
      fa: 'سبز زمردی ملایم و برنز طبیعت',
      ar: 'زمردي هادئ ولمسات برونزية',
      en: 'Sage Green & Soft Emerald'
    },
    subtitle: {
      fa: 'پالت آرامش‌بخش سبز گیاهی، زمرد و استیل ارگانیک',
      ar: 'درجات الزمرد الهادئ والأخضر المريح للعين',
      en: 'Soothing Sage & Soft Emerald Architectural Palette'
    },
    primaryColor: '#10b981',
    secondaryColor: '#059669',
    gradient: 'from-emerald-400 via-emerald-500 to-teal-700',
    glowColor: 'rgba(16, 185, 129, 0.3)'
  }
];

interface ThemeContextType {
  theme: ThemeId;
  setTheme: (theme: ThemeId) => void;
  activeThemeOption: ThemeOption;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<ThemeId>(() => {
    try {
      if (typeof window !== 'undefined' && typeof window.localStorage !== 'undefined') {
        const saved = window.localStorage.getItem('stellex_theme') as ThemeId;
        if (saved && (saved === 'gold' || saved === 'silver' || saved === 'emerald')) {
          return saved;
        }
        // handle legacy storage keys
        if (saved === ('sapphire' as any)) return 'silver';
        if (saved === ('rosegold' as any)) return 'emerald';
      }
    } catch {
      // ignore storage restrictions in iframe
    }
    return 'gold';
  });

  const setTheme = (newTheme: ThemeId) => {
    setThemeState(newTheme);
    try {
      if (typeof window !== 'undefined' && typeof window.localStorage !== 'undefined') {
        window.localStorage.setItem('stellex_theme', newTheme);
      }
    } catch {
      // ignore storage errors
    }
  };

  useEffect(() => {
    try {
      const root = document.documentElement;
      root.classList.remove('theme-gold', 'theme-silver', 'theme-emerald', 'theme-sapphire', 'theme-rosegold');
      root.classList.add(`theme-${theme}`);
      root.setAttribute('data-theme', theme);
    } catch {
      // ignore DOM error if any
    }
  }, [theme]);

  const activeThemeOption = THEME_OPTIONS.find((t) => t.id === theme) || THEME_OPTIONS[0];

  return (
    <ThemeContext.Provider value={{ theme, setTheme, activeThemeOption }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
