// High-resolution photo assets for the STELLEX 50-second cinematic reel
import stellexHexLogoImg from '../assets/images/stellex_hex_logo_1788681476136.jpg';
import luxuryStairRailingImg from '../assets/images/luxury_square_stair_railing_1788445134142.jpg';
import minimalVillaRailingImg from '../assets/images/minimal_villa_stair_railing_1788453400911.jpg';
import silverPalaceRailingImg from '../assets/images/silver_palace_stair_railing_1788452105683.jpg';
import goldPalaceRailingImg from '../assets/images/gold_stair_seamless_unified_1788451629870.jpg';
import goldPalaceBackupImg from '../assets/images/gold_palace_double_railing_1788450727627.jpg';
import goldPalaceLightedImg from '../assets/images/gold_palace_railing_1788450079733.jpg';
import starterRoyalPalaceImg from '../assets/images/starter_royal_palace_1788453958630.jpg';
import starterMinimalSlimImg from '../assets/images/starter_minimal_slim_1788453979213.jpg';
import starterNeoclassicImg from '../assets/images/starter_neoclassic_1788453992863.jpg';
import starterHightechImg from '../assets/images/starter_hightech_1788454008793.jpg';
import starterParametricImg from '../assets/images/starter_parametric_1788454021876.jpg';
import starterFrameBlackGoldImg from '../assets/images/frame_black_gold_1788624290720.jpg';
import stairFrameBlackGoldImg from '../assets/images/stair_black_gold_1788624307376.jpg';
import starterPairBalustersImg from '../assets/images/pair_balusters_catalog_1788625393891.jpg';
import starterTwoPostsImg from '../assets/images/two_posts_pair_black_gold_1788625341731.jpg';
import modernCapsuleRailingImg from '../assets/images/modern_capsule_railing_1788453009409.jpg';
import holdingHallHeroLocal from '../assets/images/stellex_hall_official_logo_1788683211197.jpg';
import luxuryVillaFacadeLocal from '../assets/images/luxury_villa_facade_1788354878070.jpg';

// Radiators and landscaping architectural elements
import radiatorOrigamiImg from '../assets/images/radiators/radiator_origami_geometric.jpg';
import radiatorPureflatImg from '../assets/images/radiators/radiator_pureflat_luxury.jpg';
import radiatorSinuousWaveImg from '../assets/images/radiators/radiator_sinuous_wave.jpg';
import radiatorWaveGoldImg from '../assets/images/radiators/radiator_wave_gold.jpg';
import radiatorBladeVerticalImg from '../assets/images/radiators/radiator_blade_vertical.jpg';
import radiatorEosCurvedImg from '../assets/images/radiators/radiator_eos_curved.jpg';
import radiatorArboniaImg from '../assets/images/radiators/radiator_arbonia_column.jpg';
import landscapingWaterfallImg from '../assets/images/landscaping/modern_waterfall_pool.jpg';
import landscapingBridgeImg from '../assets/images/landscaping/architectural_garden_bridge.jpg';
import landscapingPergolaImg from '../assets/images/landscaping/luxury_pool_pergola.jpg';
import landscapingFountainImg from '../assets/images/landscaping/sculptural_fountain_feature.jpg';

export interface ReelSlideItem {
  id: number;
  titleFa: string;
  titleEn: string;
  categoryFa: string;
  categoryEn: string;
  image: string;
  durationSec: number;
}

// Exactly the user's uploaded 3D emblem as Slide 1
export const REEL_LOGO_IMAGE = stellexHexLogoImg;

// The corporate showroom hall image to alternate with
export const REEL_SHOWROOM_IMAGE = holdingHallHeroLocal;

// Exactly 29 curated, ultra-high-resolution railing & architectural structure images for Slides 2 to 30
export const REEL_RAILING_SLIDES: ReelSlideItem[] = [
  {
    id: 2,
    titleFa: 'نرده راه‌پله سلطنتی استنلس استیل نقره‌ای سوپرپولیش',
    titleEn: 'Super Mirror Chrome Silver Stair Railing',
    categoryFa: 'نرده راه‌پله عمارت',
    categoryEn: 'Luxury Stair Railing',
    image: silverPalaceRailingImg,
    durationSec: 1.5,
  },
  {
    id: 3,
    titleFa: 'نرده تمام استیل طلایی پی‌وی‌دی با هندریل یکپارچه',
    titleEn: 'PVD Titanium Gold Seamless Handrail & Posts',
    categoryFa: 'سازه طلایی ۲۴ عیار',
    categoryEn: '24K Gold PVD Railing',
    image: goldPalaceRailingImg,
    durationSec: 1.5,
  },
  {
    id: 4,
    titleFa: 'نرده راه‌پله قوطی ۴۰×۴۰ با ۴ خط پروفیلی سوپرمیرور',
    titleEn: 'Square Profile 4-Rail Duplex Balustrade',
    categoryFa: 'نرده پروفیلی مدرن',
    categoryEn: 'Square Stainless System',
    image: luxuryStairRailingImg,
    durationSec: 1.5,
  },
  {
    id: 5,
    titleFa: 'نرده قصر سلطنتی با لاینر نوری ال‌ای‌دی و آبکاری طلایی',
    titleEn: 'Gold Palace Railing with Integrated LED Light',
    categoryFa: 'نرده نورپردازی‌شده',
    categoryEn: 'Illuminated Handrail',
    image: goldPalaceLightedImg,
    durationSec: 1.5,
  },
  {
    id: 6,
    titleFa: 'استارتر لوکس رویال پالاس با گوی‌های تراش‌خورده سی‌ان‌سی',
    titleEn: 'Royal Palace CNC Carved Starter Post',
    categoryFa: 'استارتر لوکس ورودی',
    categoryEn: 'Luxury Starter Post',
    image: starterRoyalPalaceImg,
    durationSec: 1.5,
  },
  {
    id: 7,
    titleFa: 'نرده کپسولی مدرن پارامتریک با اسکلت مقاوم مهندسی',
    titleEn: 'Parametric Capsule Stair Balustrade',
    categoryFa: 'طراحی پارامتریک',
    categoryEn: 'Parametric Railing',
    image: modernCapsuleRailingImg,
    durationSec: 1.5,
  },
  {
    id: 8,
    titleFa: 'نرده مشکی مات کاتافورز با گلد پی‌وی‌دی تیتانیوم',
    titleEn: 'Matte Black & Titanium Gold Geometric Balustrade',
    categoryFa: 'بلک اند گلد مدرن',
    categoryEn: 'Black & Gold Architecture',
    image: stairFrameBlackGoldImg,
    durationSec: 1.5,
  },
  {
    id: 9,
    titleFa: 'پایه استارت ترکیبی مشکی و طلایی با کادر ژئومتریک',
    titleEn: 'Geometric Black & Gold Starter Post Column',
    categoryFa: 'پایه پیش‌ساخته لوکس',
    categoryEn: 'Prefab Black-Gold Post',
    image: starterFrameBlackGoldImg,
    durationSec: 1.5,
  },
  {
    id: 10,
    titleFa: 'استارتر نئوکلاسیک منشوری ۸ ضلعی آبکاری تیتانیوم طلایی',
    titleEn: 'Octagonal Neoclassic PVD Titanium Post',
    categoryFa: 'استارتر نئوکلاسیک',
    categoryEn: 'Neoclassic Starter',
    image: starterNeoclassicImg,
    durationSec: 1.5,
  },
  {
    id: 11,
    titleFa: 'استارتر های‌تک تسمه دوبل مینیمال با اتصالات دقیق لیزری',
    titleEn: 'Hi-Tech Double Blade Minimal Post',
    categoryFa: 'استارتر های‌تک',
    categoryEn: 'Hi-Tech Minimal Post',
    image: starterHightechImg,
    durationSec: 1.5,
  },
  {
    id: 12,
    titleFa: 'استارتر کپسولی ارگونومیک پارامتریک استیل ۳۰۴ نگیر',
    titleEn: 'Ergonomic Parametric Capsule Post',
    categoryFa: 'استارتر مدرن',
    categoryEn: 'Parametric Starter',
    image: starterParametricImg,
    durationSec: 1.5,
  },
  {
    id: 13,
    titleFa: 'استارتر مینیمال اسلیم باریک با هندریل گردن‌قو',
    titleEn: 'Minimal Slim Post with Swan-Neck Fitting',
    categoryFa: 'استارتر مینیمال',
    categoryEn: 'Minimal Slim Starter',
    image: starterMinimalSlimImg,
    durationSec: 1.5,
  },
  {
    id: 14,
    titleFa: 'نرده ویلایی نئوکلاسیک مینیمال با اتصالات ۳۶۰ درجه',
    titleEn: 'Minimal Villa Stair Balustrade with Articulated Saddles',
    categoryFa: 'نرده ویلایی مینیمال',
    categoryEn: 'Minimal Villa Railing',
    image: minimalVillaRailingImg,
    durationSec: 1.5,
  },
  {
    id: 15,
    titleFa: 'زوج پایه دکوراتیو کاتالوگی با پوشش براق سوپرمیرور',
    titleEn: 'Catalog Twin Balusters with Mirror Polish',
    categoryFa: 'پایه‌های جفتی توین‌بار',
    categoryEn: 'Twin Balusters Set',
    image: starterPairBalustersImg,
    durationSec: 1.5,
  },
  {
    id: 16,
    titleFa: 'نرده دوبلکس طلایی دوبل با خطوط محافظتی پیوسته',
    titleEn: 'Double Flight Gold Palace Balustrade',
    categoryFa: 'نرده دوبل کاخ',
    categoryEn: 'Double Palace Railing',
    image: goldPalaceBackupImg,
    durationSec: 1.5,
  },
  {
    id: 17,
    titleFa: 'پایه توین‌بار بلک اند گلد دکوراتیو با آنودایز تیتانیوم',
    titleEn: 'Decorative Twin Post Black & Gold Anodized',
    categoryFa: 'پایه پیش‌ساخته بلک‌گلد',
    categoryEn: 'Black-Gold Twin Post',
    image: starterTwoPostsImg,
    durationSec: 1.5,
  },
  {
    id: 18,
    titleFa: 'نمای بیرونی ویلای فوق‌لوکس با تلفیق شیشه و استیل',
    titleEn: 'Luxury Villa Architectural Facade & Balustrade',
    categoryFa: 'معماری فضای باز',
    categoryEn: 'Architectural Facade',
    image: luxuryVillaFacadeLocal,
    durationSec: 1.5,
  },
  {
    id: 19,
    titleFa: 'رادیاتور دکوراتیو اوریگامی ژئومتریک استنلس استیل طلایی',
    titleEn: 'Geometric Origami Stainless Steel Radiator',
    categoryFa: 'تجهیزات لوکس گرمایشی',
    categoryEn: 'Luxury Radiators',
    image: radiatorOrigamiImg,
    durationSec: 1.5,
  },
  {
    id: 20,
    titleFa: 'رادیاتور پیورفلت سوپرپولیش آینه‌ای استیل ۳۰۴',
    titleEn: 'PureFlat Super Mirror Stainless Radiator',
    categoryFa: 'رادیاتور دکوراتیو',
    categoryEn: 'PureFlat Luxury Radiator',
    image: radiatorPureflatImg,
    durationSec: 1.5,
  },
  {
    id: 21,
    titleFa: 'حوله خشک‌کن مواج استنلس استیل سینوس لاین',
    titleEn: 'Sinuous Wave Stainless Steel Towel Warmer',
    categoryFa: 'حوله خشک‌کن لوکس',
    categoryEn: 'Wave Towel Warmer',
    image: radiatorSinuousWaveImg,
    durationSec: 1.5,
  },
  {
    id: 22,
    titleFa: 'رادیاتور پنلی موج طلایی پی‌وی‌دی با رفلکس درخشان',
    titleEn: 'Golden Wave PVD Titanium Radiator',
    categoryFa: 'رادیاتور طلایی',
    categoryEn: 'Golden Wave Radiator',
    image: radiatorWaveGoldImg,
    durationSec: 1.5,
  },
  {
    id: 23,
    titleFa: 'رادیاتور عمودی تیغه‌ای های‌تک استیل مشکی مات',
    titleEn: 'Hi-Tech Blade Vertical Stainless Radiator',
    categoryFa: 'رادیاتور دیواری مدرن',
    categoryEn: 'Vertical Blade Radiator',
    image: radiatorBladeVerticalImg,
    durationSec: 1.5,
  },
  {
    id: 24,
    titleFa: 'رادیاتور قوسی ارگونومیک ایوس با پولیش میکرونی',
    titleEn: 'Eos Curved Stainless Architectural Radiator',
    categoryFa: 'رادیاتور قوسی',
    categoryEn: 'Eos Curved Radiator',
    image: radiatorEosCurvedImg,
    durationSec: 1.5,
  },
  {
    id: 25,
    titleFa: 'رادیاتور ستونی آربونیای مدرن تمام استنلس استیل',
    titleEn: 'Arbonia Column Stainless Steel Radiator',
    categoryFa: 'رادیاتور ستونی کلاسیک',
    categoryEn: 'Column Radiator',
    image: radiatorArboniaImg,
    durationSec: 1.5,
  },
  {
    id: 26,
    titleFa: 'آبشار و پرده آب استیل استخر ویلایی ضدزنگ',
    titleEn: 'Modern Waterfall Cascade & Stainless Pool Edge',
    categoryFa: 'لنداسکیپ و استخر',
    categoryEn: 'Pool Waterfalls',
    image: landscapingWaterfallImg,
    durationSec: 1.5,
  },
  {
    id: 27,
    titleFa: 'پل معلق و دست‌انداز تمام استیل باغ ویلایی آرشیتکتورال',
    titleEn: 'Architectural Garden Stainless Bridge & Railing',
    categoryFa: 'سازه لنداسکیپ',
    categoryEn: 'Garden Bridge Railing',
    image: landscapingBridgeImg,
    durationSec: 1.5,
  },
  {
    id: 28,
    titleFa: 'پرگولا و سایبان استراکچر استیل محوطه استخر روباز',
    titleEn: 'Stainless Steel Pool Pergola & Shading Structure',
    categoryFa: 'سایبان استنلس استیل',
    categoryEn: 'Luxury Pool Pergola',
    image: landscapingPergolaImg,
    durationSec: 1.5,
  },
  {
    id: 29,
    titleFa: 'المان و مجسمه فواره استنلس استیل مدرن لنداسکیپ',
    titleEn: 'Modern Stainless Steel Sculptural Fountain Feature',
    categoryFa: 'المان دکوراتیو محوطه',
    categoryEn: 'Sculptural Fountain',
    image: landscapingFountainImg,
    durationSec: 1.5,
  },
  {
    id: 30,
    titleFa: 'نرده راه‌پله پنت‌هاوس دوبلکس مدرن با شیشه لمینت و استیل',
    titleEn: 'Penthouse Duplex Minimalist Glass & Stainless Railing',
    categoryFa: 'پنت‌هاوس لوکس',
    categoryEn: 'Penthouse Balustrade',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85',
    durationSec: 1.5,
  },
];
