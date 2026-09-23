import { ServiceCategory, ProjectItem, SteelAlloy, FinishType, Testimonial, FAQItem, ReadyPostModel } from '../types';
import { RADIATOR_MODELS } from './radiatorsData';
export { RADIATOR_MODELS };
import marzdaranVillaSoltaniImg from '../assets/images/marzdaran_villa_soltani_1789472781168.jpg';
import soltaniCloseupImg from '../assets/images/soltani_closeup_hd_1789482845495.jpg';
import soltaniWideImg from '../assets/images/soltani_wide_hd_1789482861188.jpg';
import soltaniCinemaImg from '../assets/images/soltani_cinema_hd_1789482873593.jpg';
import soltaniTopviewImg from '../assets/images/soltani_top_hd_1789482885345.jpg';
import soltaniThreequarterImg from '../assets/images/soltani_threequarter_hd_1789482896950.jpg';
import masoudiVillaIsfahanImg from '../assets/images/masoudi_villa_isfahan_1789471192327.jpg';
import masoudiCloseupImg from '../assets/images/masoudi_closeup_1789471210742.jpg';
import masoudiWideImg from '../assets/images/masoudi_wide_1789471228443.jpg';
import masoudiCinemaImg from '../assets/images/masoudi_cinema_1789471253324.jpg';
import masoudiTopviewImg from '../assets/images/masoudi_topview_1789471267169.jpg';
import masoudiThreequarterImg from '../assets/images/masoudi_threequarter_1789471281147.jpg';
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

export const COMPANY_INFO = {
  nameFa: 'گروه فنی و مهندسی استیلکس',
  nameAr: 'مجموعة ستيليكس الهندسية والصناعية',
  nameEn: 'STELLEX Metal Engineering Group',
  tagline: {
    fa: 'پیشرو در طراحی، مهندسی و اجرای سازه‌های لوکس استنلس استیل ساختمانی، دکوراتیو و صنعتی',
    ar: 'الرواد في تصميم وهندسة وتصنيع هياكل الستانلس ستيل الفاخرة، الديكورية والصناعية',
    en: 'Pioneering in architectural luxury, decorative and industrial stainless steel engineering & fabrication',
  },
  experienceYears: 15,
  completedProjectsCount: 1450,
  clientSatisfactionRate: 99.4,
  factoryArea: '۳۰۰ متر مربع کارخانه و شوروم مرکزی',
  phone: '۰۹۱۲۵۵۲۹۳۰۴',
  phoneIntl: '+989125529304',
  mobileSupport: '09125529304',
  mobileSupportIntl: '+989125529304',
  whatsappNumber: '989125529304',
  email: 'info@stellex-group.ir',
  officeAddress: {
    fa: 'ایران، قم، بلوار توحید، خیابان بشارت، نبش بشارت 3',
    ar: 'زاوية بشارات 3، شارع بشارات، بوليفارد توحيد، قم، إيران',
    en: 'Corner of Besharat 3, Besharat Street, Tohid Boulevard, Qom, Iran',
  },
  factoryAddress: {
    fa: 'تهران، شهرک صنعتی شمس‌آباد، بلوار بوستان، گلبن پنجم، مجتمع صنعتی استیلکس',
    ar: 'مدينة شمس آباد الصناعية، جادة بوستان، مجمع ستيليكس الصناعي',
    en: 'STELLEX Industrial Complex, 5th Golbon, Boostan Blvd, Shamsabad Industrial Park',
  },
  showroomAddress: {
    fa: 'تهران، نیاوران، خیابان یاسر، نبش کوچه مریم، شوروم تخصصی استیلکس',
    ar: 'طهران، نياوران، شارع ياسر، تقاطع مريم، صالة عرض ستيليكس الفاخرة',
    en: 'STELLEX Luxury Showroom, Yaser St, Niavaran, Tehran',
  },
  workHours: {
    fa: 'شنبه تا چهارشنبه: ۸:۳۰ الی ۱۹:۰۰ | پنج‌شنبه: ۸:۳۰ الی ۱۴:۳۰',
    ar: 'السبت إلى الأربعاء: ٨:٣٠ حتى ١٩:٠٠ | الخميس: ٨:٣٠ حتى ١٤:٣٠',
    en: 'Sat - Wed: 8:30 AM to 7:00 PM | Thursday: 8:30 AM to 2:30 PM',
  },
};

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: 'railings_doors',
    title: {
      fa: 'انواع نرده، حفاظ و درب ساختمانی و ویلایی',
      ar: 'أنواع الدرابزين، الحواجز والأبواب الفاخرة للفلل والمباني',
      en: 'Architectural Railings, Balustrades & Luxury Entrance Doors',
    },
    subtitle: {
      fa: 'سازه‌های مدرن تلفیقی شیشه و استیل، درب‌های لیزری ویلایی و حفاظ‌های امنیتی ۳۰۴ و ۳۱۶',
      ar: 'هياكل عصرية تدمج الزجاج والستانلس ستيل، أبواب مقطوعة بالليزر وحواجز أمنية ۳۰۴ و ۳۱۶',
      en: 'Modern glass & stainless steel balustrades, CNC laser entrance doors & 304/316 security gates',
    },
    shortDesc: {
      fa: 'طراحی و ساخت نرده‌های اسپیگات شیشه‌ای، هندریل‌های اکسپوز، درب‌های لوکس لولایی و ریلی با برش لیزر فایبر و حفاظ‌های ضدسرقت.',
      ar: 'تصميم وتصنيع درابزين الزجاج والستانلس ستيل، مقابض مكشوفة، أبواب مفصلية وسحابة فاخرة وحواجز أمنية.',
      en: 'Engineering and fabrication of glass spigot railings, exposed handrails, luxury hinged/sliding doors and high-security structural grilles.',
    },
    description: {
      fa: 'دپارتمان تخصصی سازه‌های ورودی و حفاظتی استیلکس با بهره‌گیری از آلیاژهای استنلس استیل نگیر ۳۰۴ و ۳۱۶، زیباترین و مستحکم‌ترین نرده‌های شیشه و استیل، پله‌های معلق اکسپوز، هندریل‌های نوری و درب‌های ورودی لوکس ویلایی را طبق آخرین ضوابط آتش‌نشانی و نظام مهندسی کشور اجرا می‌کند.',
      ar: 'ينفذ قسم الهياكل المعمارية والحماية في ستيليكس أرقى درابزينات الزجاج والستانلس ستيل ۳۰۴ و ۳۱۶ غير المغناطيسية، والسلالم المعلقة، والمقابض المضيئة والأبواب الفاخرة وفق أعلى معايير السلامة والدفاع المدني.',
      en: 'STELLEX architectural railings and entrance division utilizes certified austenitic 304 and 316 marine-grade alloys to deliver heavy-duty structural glass spigot railings, cantilever staircases, LED-illuminated handrails and bespoke villa entrance doors.',
    },
    iconName: 'Shield',
    badge: {
      fa: 'پرفروش‌ترین رده ساختمانی',
      ar: 'الأكثر طلباً في المشاريع الفاخرة',
      en: 'Top Architectural Choice',
    },
    coverImage: marzdaranVillaSoltaniImg,
    galleryImages: [
      marzdaranVillaSoltaniImg,
      soltaniCloseupImg,
      soltaniWideImg,
      soltaniCinemaImg,
      soltaniTopviewImg,
      soltaniThreequarterImg,
    ],
    subFeatures: [
      {
        title: {
          fa: 'نرده‌های شیشه‌ای اسپیگات و دفنی',
          ar: 'درابزين الزجاج بنظام سبیغوت والدفن',
          en: 'Spigot & Base-Shoe Glass Balustrades',
        },
        desc: {
          fa: 'ترکیب پایه‌های استیل سنگین ۳۱۶ با شیشه‌های لمینت سکوریت ۱۰+۱۰ میلی‌متر شفاف و سوپرکلیر',
          ar: 'دمج قواعد الستانلس ستيل ۳۱۶ الثقيلة مع زجاج سيكوريت مصفح ۱۰+۱۰ ملم سوبر كلير',
          en: 'Heavy-duty 316 marine-grade base spigots coupled with 10+10mm tempered laminated ultra-clear glass',
        },
        specs: {
          fa: 'تحمل بار جانبی تا ۲۵۰ کیلوگرم بر متر طول | گرید ضد زنگ ۳۱۶ ساحلی',
          ar: 'تحمل حمل جانبي حتى ٢٥٠ كجم/م | درجة مقاومة الصدأ ٣١٦ البحرية',
          en: 'Lateral load capacity up to 250 kg/linear meter | Marine-grade 316 anti-corrosion',
        },
      },
      {
        title: {
          fa: 'درب‌های لوکس ورودی و لابی با برش لیزری',
          ar: 'أبواب المداخل واللوبي الفاخرة بقطع الليزر',
          en: 'Luxury Entrance & Lobby Doors with CNC Laser Cutting',
        },
        desc: {
          fa: 'درب‌های اکسکلوسیو با تلفیق ورق‌های استیل PVD طلایی و مشکی با چوب ترمووود و دستگیره‌های ۲ متری',
          ar: 'أبواب حصرية تجمع بين صفائح الستانلس PVD الذهبية والأسود مع خشب ثرمووود ومقابض بطول ٢ متر',
          en: 'Exclusive architectural entrance doors combining PVD gold/black steel sheets, thermo-wood and custom 2-meter pull handles',
        },
        specs: {
          fa: 'ضخامت ورق ۲ تا ۴ میلی‌متر | لولاهای بلبرینگی نامرئی تحمل ۱ تن',
          ar: 'سماكة الصفائح ٢ إلى ٤ ملم | مفصلات رولمان بلي مخفية تتحمل ١ طن',
          en: 'Sheet thickness 2 to 4 mm | Concealed heavy-duty pivot bearings tested up to 1,000 kg',
        },
      },
      {
        title: {
          fa: 'حفاظ‌های بانکی، پنجره و بالکن ضدسرقت',
          ar: 'حواجز أمنية للبنوك والنوافذ والشرفات ضد السرقة',
          en: 'High-Security Bank, Window & Balcony Grilles',
        },
        desc: {
          fa: 'شبکه‌بندی مستحکم لوله و قوطی استیل با میلگرد آجدار داخلی ضد برش و اتصالات جوش آرگون',
          ar: 'شبكة قوية من أنابيب الستانلس مع قضبان تسليح داخلية مضادة للقطع ولحام أرجون مخفي',
          en: 'Reinforced stainless tubing with internal hardened rebar core and full-penetration argon TIG joints',
        },
        specs: {
          fa: 'مقاوم در برابر مته، برش و اسید | گواهینامه تاییدیه ایمنی انتظامی',
          ar: 'مقاوم للمثقاب، القطع والأحماض | شهادة اعتماد أمني رسمي',
          en: 'Drill, cut and acid resistant | Certified security grade compliance',
        },
      },
      {
        title: {
          fa: 'پله‌های معلق و مارپیچ استیل (Cantilever & Spiral)',
          ar: 'السلالم المعلقة واللولبية المصنوعة من الستانلس ستيل',
          en: 'Cantilever & Floating Spiral Stainless Stairs',
        },
        desc: {
          fa: 'سازه باربر مهندسی شده مخفی در دیوار با کف‌پله‌های استیل خش‌دار، چوب بلوط یا سنگ طبیعی',
          ar: 'هيكل حامل مخفي داخل الجدار مع درجات من الستانلس ستيل الحريري، خشب البلوط أو الرخام',
          en: 'Concealed high-tensile internal steel spine with brushed stainless, oakwood or natural marble treads',
        },
        specs: {
          fa: 'طراحی ارتعاش‌سنجی شده با استاندارد بارگذاری ASTM E985',
          ar: 'تصميم مدروس لامتصاص الاهتزاز وفق معيار ASTM E985',
          en: 'Vibration & deflection analyzed according to ASTM E985 structural standards',
        },
      },
    ],
    appliedAlloys: [
      { fa: 'استیل ۳۰۴ نگیر (استاندارد اصلی پروژه‌ها با ۱۰ تا ۱۵ سال گارانتی)', ar: 'ستانلس ستيل ٣٠٤ غير مغناطيسي (المعيار الأساسي للمشاريع)', en: 'Certified Austenitic 304 (Standard for Most Projects)' },
      { fa: 'استیل ۲۰۱ اقتصادی (ویژه فضاهای سرپوشیده بدون رطوبت جهت کاهش هزینه)', ar: 'ستانلس ستيل ٢٠١ اقتصادي (للمساحات الجافة لتقليل التكلفة)', en: 'Alloy 201 (Economical for Dry Moisture-Free Spaces)' },
      { fa: 'استیل ۳۱۶ و بالاتر (صرفاً در موارد و تأسیسات صنعتی)', ar: 'ستانلس ستيل ٣١٦ فما فوق (حصرياً للتطبيقات الصناعية)', en: 'Alloy 316+ (Strictly for Industrial Facilities)' },
    ],
    recommendedFinishes: [
      { fa: 'آینه‌ای براق (Super Mirror 8K)', ar: 'مرآة براقة فائقة (Mirror 8K)', en: 'Super Mirror 8K' },
      { fa: 'خش‌دار مات (Hairline Satin)', ar: 'حريري مطفي خطي (Hairline Satin)', en: 'Hairline Satin No.4' },
      { fa: 'آبکاری PVD تیتانیوم طلایی و مشکی', ar: 'طلاء تيتانيوم PVD ذهبي وأسود فاخر', en: 'PVD Titanium Gold & Black' },
    ],
    guaranteeYears: 15,
  },
  {
    id: 'prefab_posts',
    title: {
      fa: 'پایه‌های نرده‌ی آماده‌ی نصب (Pre-Fabricated Posts)',
      ar: 'قوائم الدرابزينات الجاهزة للتركيب الفوري',
      en: 'Pre-Fabricated Ready-to-Install Railing Posts & Spigots',
    },
    subtitle: {
      fa: 'پایه‌های مدولار استیل ۳۰۴ و ۳۱۶ تولید انبوه کارخانه‌ای، اسپیگات‌های شیشه، براکت‌های پیش‌ساخته، آماده ارسال فوری',
      ar: 'قوائم ستانلس ستيل معيارية جاهزة للتركيب، سبیغوت زجاج، قطاعات جاهزة للشحن الفوري',
      en: 'Factory pre-assembled 304 & 316 modular railing posts, heavy spigots, glass clamps & rapid dispatch systems',
    },
    shortDesc: {
      fa: 'مجموعه پایه‌های آماده نصب تمام‌استیل با کف‌بندهای تقویت‌شده، چنگک‌های تنظیم زاویه، پایه‌های اسپیگات شیشه‌ای و پایه‌های قوطی و لوله همراه با کلیه متعلقات، بدون نیاز به جوشکاری در محل با قابلیت ارسال فوری.',
      ar: 'تشكيلة واسعة من قوائم الدرابزين الجاهزة للتركيب بكافة ملحقاتها، قواعد تثبيت مدعمة ومثبتات زجاجية دون الحاجة للحام في الموقع.',
      en: 'Engineered pre-fabricated modular stainless posts with pre-drilled base plates, glass clamps, adjustable saddle brackets and plug-and-play installation without on-site welding.',
    },
    description: {
      fa: 'دپارتمان تولید صنعتی پایه‌های پیش‌ساخته استیلکس با هدف تسریع در اجرای پروژه‌ها و کاهش هزینه‌های نصب در محل، خط تولید انبوه پایه‌های مدولار را راه‌اندازی نموده است. این پایه‌ها در کارخانه با دقت لیزری ۰.۰۱ میلیمتر جوشکاری، پولیش و تست بارگذاری شده و به همراه پیچ‌ها، رول‌بولت‌ها و یراق‌آلات کامل آماده نصب سریع عرضه می‌شوند.',
      ar: 'يوفر قسم القوائم الجاهزة في ستيليكس حلولاً هندسية متكاملة لتركيب الدرابزين بسرعة قياسية ودون الحاجة لأي أعمال لحام في الموقع. يتم إنتاج القوائم بآلات CNC وفحصها مخبرياً لتتحمل أقصى درجات الضغط والرياح.',
      en: 'STELLEX Pre-Fabricated Railing Posts Division delivers factory pre-assembled, CNC-machined modular posts and solid casting glass spigots engineered for instant plug-and-play installation, cutting on-site assembly time by up to 70% while maintaining certified structural rigidity.',
    },
    iconName: 'Layers',
    badge: {
      fa: 'تحویل و ارسال فوری سراسر کشور',
      ar: 'جاهزة للشحن والتسليم الفوري',
      en: 'Ready Stock & Instant Dispatch',
    },
    coverImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80',
    ],
    subFeatures: [
      {
        title: {
          fa: 'پایه‌های اسپیگات خودایستا شیشه (Solid Casting Spigots)',
          ar: 'قواعد سبیغوت زجاج مصمتة شديدة التحمل',
          en: 'Heavy-Duty Solid Glass Spigot Clamps',
        },
        desc: {
          fa: 'ریخته‌گری دقیق استیل ۳۱۶ با فک‌های تفلونی ضداصطکاک، قابلیت مهار شیشه ۱۰ تا ۲۰ میلی‌متر بدون نیاز به سوراخکاری شیشه',
          ar: 'صب دقيق من ستانلس ستيل ٣١٦ مع حواشي تفلون لتثبيت زجاج ١٠ إلى ٢٠ ملم بدون ثقب',
          en: 'Precision investment cast 316 marine spigots with internal Teflon friction pads, clamping 10-20mm glass without hole drilling',
        },
        specs: {
          fa: 'ارتفاع استاندارد ۱۶ تا ۲۵ سانتی‌متر | مقاومت جانبی تا ۳۰۰ کیلوگرم بر پایه',
          ar: 'ارتفاع ١٦ إلى ٢٥ سم | تحمل جانبي حتى ٣٠٠ كجم للقاعدة الواحدة',
          en: 'Standard heights 160mm - 250mm | Up to 300kg lateral resistance per post',
        },
      },
      {
        title: {
          fa: 'پایه‌های مدولار قوطی ۴۰×۴۰ و لوله ۵۱ میلی‌متر',
          ar: 'قوائم معيارية مقاس ٤٠×٤٠ وأنابيب ٥١ ملم',
          en: 'Modular 40x40mm Box & 51mm Round Tube Posts',
        },
        desc: {
          fa: 'مجهز به فلنچ کف ۴ سوراخه مستحکم، کاور چاک‌دار پرسی بدون درز، یراق‌های نگهدارنده توپر و اتصال هندریل بالایی مفصلی',
          ar: 'مزودة بقاعدة تثبيت رباعية البراغي، غطاء أرضي مضغوط بدون فواصل ووصلات علوية مفصلية',
          en: 'Factory-welded heavy base flange with seamless press-fit cover, solid bar cross-holders and multi-angle top saddle',
        },
        specs: {
          fa: 'ارتفاع استاندارد ۸۵، ۹۰، ۹۵ و ۱۱۰ سانتی‌متر | ضخامت گوشت لوله ۱.۵ تا ۲ میلی‌متر',
          ar: 'ارتفاعات قياسية ٨٥، ٩٠، ٩٥ و ١١٠ سم | سماكة الجدار ١.٥ إلى ٢ ملم',
          en: 'Standard heights 850mm, 900mm, 950mm & 1100mm | Wall thickness 1.5mm - 2.0mm',
        },
      },
      {
        title: {
          fa: 'پایه‌های پیشانی‌نصب و پله بغل (Fascia Side-Mount Posts)',
          ar: 'قوائم التثبيت الجانبي على واجهات الدرج والخرسانة',
          en: 'Fascia & Side-Mount Space-Saving Posts',
        },
        desc: {
          fa: 'طراحی ویژه جهت نصب روی لبه بیرونی راه پله و بالکن، آزادسازی ۱۰۰٪ فضای تردد روی کف پله',
          ar: 'تصميم مخصص للتثبيت على الحافة الخارجية للدرج لتوفير كامل مساحة المشي',
          en: 'Engineered for lateral mounting on stringers and concrete slabs, maximizing 100% usable stairway width',
        },
        specs: {
          fa: 'اتصال با رول‌بولت‌های استاندارد استیل M12 هیلتی | آلیاژ استیل ۳۰۴ و ۳۱۶',
          ar: 'تثبيت ببراغي ستانلس M12 هيلتي | سبائك ٣٠٤ و ٣١٦',
          en: 'Fastened with certified M12 stainless anchors | Available in 304 & 316 alloys',
        },
      },
      {
        title: {
          fa: 'پایه‌های مدرن فیتینگی و مفصلی بدون نیاز به جوشکاری',
          ar: 'أنظمة قوائم مفصلية وميكانيكية بدون أي لحام',
          en: 'Weldless Mechanical Joint Post Assemblies',
        },
        desc: {
          fa: 'مونتاژ فوق‌سریع در محل با استفاده از آچارهای آلن و اتصالات مخفی مکانیکی بدون آسیب به رنگ و سنگ محیط',
          ar: 'تجميع فائق السرعة باستخدام مفاتيح ألن ومفاصل مخفية دون تلويث الموقع',
          en: 'Ultra-fast on-site bolt-together assembly using hex-key internal expanders without hot works or site polishing',
        },
        specs: {
          fa: 'کاهش ۶۰٪ زمان اجرای پروژه | پوشش‌های PVD طلایی، دودی، رزگلد و استیل نقره‌ای',
          ar: 'تقليل ٦٠٪ من وقت التنفيذ | ألوان PVD ذهبي، أسود، روز غولد وفضي',
          en: '60% faster project turnaround | PVD Gold, Black, Rose Gold & Super Mirror finishes',
        },
      },
    ],
    appliedAlloys: [
      { fa: 'استیل ۳۰۴ نگیر سازه‌ای استاندارد (استاندارد اکثریت پروژه‌ها)', ar: 'ستانلس ستيل ٣٠٤ غير مغناطيسي معتمد', en: 'Certified Austenitic 304 (Standard for Projects)' },
      { fa: 'استیل ۲۰۱ اقتصادی (ویژه محیط‌های خشک داخلی جهت کاهش هزینه‌ها)', ar: 'ستانلس ستيل ٢٠١ للمساحات الجافة لتقليل التكاليف', en: 'Alloy 201 (Cost-saving for dry indoor environments)' },
      { fa: 'استیل ۳۱۶ صنعتی (سفارشی ویژه محیط‌ها و خطوط خاص صنعتی)', ar: 'ستانلس ستيل ٣١٦ صب دقيق للتطبيقات الصناعية', en: 'Investment Cast 316 (Special Industrial Facilities)' },
    ],
    recommendedFinishes: [
      { fa: 'سوپر میرور نقره‌ای ۸K (Super Mirror 8K)', ar: 'مرآة فضية فائقة 8K', en: 'Super Mirror 8K Silver' },
      { fa: 'خش‌دار مات متالیک (Hairline Satin No.4)', ar: 'حريري مطفي خطي No.4', en: 'Hairline Satin No.4' },
      { fa: 'طلایی تیتانیوم ۲۴ عیار PVD (Titanium Gold)', ar: 'ذهبي تيتانيوم PVD عيار ٢٤', en: '24K Titanium Gold PVD' },
      { fa: 'مشکی دودی مات و براق (Titanium Black)', ar: 'أسود تيتانيوم فاخر PVD', en: 'Smoky Titanium Black PVD' },
    ],
    guaranteeYears: 15,
  },
  {
    id: 'commercial_decor',
    title: {
      fa: 'دکوراسیون و دیزاین رستوران، کافه، طلافروشی، صرافی و کارگزاری',
      ar: 'ديكورات وتجهيزات فاخرة لمحلات الذهب، الصرافة، المطاعم والمقاهي',
      en: 'Luxury Commercial Interiors: Jewelry Stores, Exchanges & Restaurants',
    },
    subtitle: {
      fa: 'سازه‌های لوکس تجاری با آبکاری PVD تحت خلاء، استندهای ضدسرقت طلا و صرافی، کانتر بارهای مدرن',
      ar: 'هياكل تجارية فاخرة مع طلاء PVD تحت التفريغ، واجهات مجوهرات أمنية وكانترات عصرية',
      en: 'High-vacuum PVD titanium architectural fixtures, bulletproof jewelry display showcases & bar counters',
    },
    shortDesc: {
      fa: 'طراحی و ساخت ویترین‌های ضدگلوله طلافروشی، باجه‌های امنیتی صرافی، قفسه‌بندی و کانتر بارهای معلق رستوران و پارتیشن‌های مشبک.',
      ar: 'تصميم وتصنيع واجهات الذهب المقاومة للرصاص، قواطع الصرافة والبورصة، رفوف وكانترات المطاعم المعلقة.',
      en: 'Fabrication of bulletproof jewelry vitrines, exchange security counters, suspended restaurant bar gantries and CNC privacy screens.',
    },
    description: {
      fa: 'استیلکس شریک استراتژیک برترین برندهای طلا و جواهر، صرافی‌های معتبر و رستوران‌های مجلل است. با استفاده از دقیق‌ترین دستگاه‌های لیزر فایبر و اتاق‌های پوشش‌دهی PVD، المان‌هایی منحصربه‌فرد خلق می‌کنیم که علاوه بر لوکس‌ترین جلوه بصری، استانداردهای امنیتی سنگین را پوشش می‌دهند.',
      ar: 'تعد ستيليكس الشريك الاستراتيجي لأرقى علامات المجوهرات والصرافة والمطاعم الفاخرة. نوفر أحدث تقنيات الليزر الفايبر وحجرات PVD لإنتاج عناصر ديكورية استثنائية تلبي أعلى متطلبات الأمان والجمال.',
      en: 'STELLEX is the trusted partner for premier jewelry boutiques, financial institutions and high-end hospitality venues, engineering bespoke titanium-coated architectural metalwork that balances unmatched opulence with rigorous security standards.',
    },
    iconName: 'Gem',
    badge: {
      fa: 'پروژه‌های VIP و لوکس',
      ar: 'مشاريع كبار الشخصيات VIP',
      en: 'VIP & Luxury Category',
    },
    coverImage: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80',
    ],
    subFeatures: [
      {
        title: {
          fa: 'ویترین و گالری طلا و جواهرات و ساعت',
          ar: 'واجهات وصالات عرض الذهب والمجوهرات والساعات',
          en: 'Luxury Jewelry & Horology Display Vitrines',
        },
        desc: {
          fa: 'فریم‌های استیل طلایی و شامپاینی PVD با شیشه‌های ضدگلوله و قفل‌های بیومتریک مخفی',
          ar: 'إطارات ستانلس ستيل PVD ذهبي وشامباني مع زجاج ضد الرصاص وأقفال بيومترية مخفية',
          en: 'High-micron PVD titanium gold/champagne frames integrated with certified bullet-resistant glass and hidden biometric locks',
        },
        specs: {
          fa: 'ضمانت مادام‌العمر ثبات رنگ PVD | نورپردازی خطی LED CRI>95 بدون انعکاس',
          ar: 'ضمان دائم على ثبات لون PVD | إضاءة خطية CRI>95 بدون انعكاسات مزعجة',
          en: 'Lifetime color stability on PVD coating | Glare-free high-CRI LED lighting integration',
        },
      },
      {
        title: {
          fa: 'باجه‌ها و پارتیشن‌های صرافی و کارگزاری بورس',
          ar: 'قواطع وكبائن شركات الصرافة والوساطة المالية',
          en: 'Currency Exchange Counters & Brokerage Partitions',
        },
        desc: {
          fa: 'پارتیشن‌های آکوستیک استیل خش‌دار و شیشه مات هوشمند، کانترهای مدیریت و پنل‌های دیواری',
          ar: 'قواطع عازلة للصوت من الستانلس ستيل الحريري والزجاج الذكي، مكاتب إدارية وبانوهات جدارية',
          en: 'Acoustic brushed stainless partitions with smart PDLC glass, executive transaction counters and wall cladding',
        },
        specs: {
          fa: 'سازگار با سیستم‌های انتقال وجه و کشوهای ایمن ضد گلوله سطح ۳',
          ar: 'متوافق مع أنظمة تحويل الأموال والأدراج المصفحة مستوى ٣',
          en: 'UL Level 3 bullet-resistant security transaction drawers and money transfer modules',
        },
      },
      {
        title: {
          fa: 'کانتر بار، رگال و قفسه‌های معلق کافه و رستوران',
          ar: 'كانترات البار، الرفوف المعلقة ومعدات المطاعم الفاخرة',
          en: 'Suspended Bar Gantries & Luxury Hospitality Shelving',
        },
        desc: {
          fa: 'قفسه‌های معلق از سقف با تحمل وزن سنگین، تاپینگ استیل بهداشتی و لاینرهای طلایی',
          ar: 'رفوف معلقة من السقف تتحمل أوزاناً ثقيلة مع أسطح صحية ولمسات ذهبية راقية',
          en: 'Ceiling-suspended heavy-load glass & bottle gantries with sanitary tops and gold accent inlays',
        },
        specs: {
          fa: 'مقاومت کامل در برابر بخار داغ، چربی و مواد ضدعفونی کننده الکلی',
          ar: 'مقاومة تامة للبخار الساخن، الدهون والمطهرات الكحولية',
          en: '100% steam, oil and chemical cleaning agent resistant',
        },
      },
      {
        title: {
          fa: 'پنل‌های دیواری مشبک CNC و لوگوهای ۳ بعدی استیل',
          ar: 'بانوهات جدارية مفرغة CNC وشعارات ثلاثية الأبعاد',
          en: 'Parametric CNC Architectural Screens & 3D Steel Logos',
        },
        desc: {
          fa: 'طراحی هندسی پارامتریک با ورق‌های استیل آینه‌ای و رزگلد به عنوان دیوار شاخص',
          ar: 'تصميم هندسي متطور بصفائح الستانلس اللامعة والروز غولد كجدران بارزة',
          en: 'Geometric parametric laser-cut feature walls with mirror and rose gold PVD stainless panels',
        },
        specs: {
          fa: 'برش با تلرانس ۰.۰۵ میلی‌متر و نصب بدون دید پیچ و اتصالات',
          ar: 'قطع بدقة ٠.٠٥ ملم وتركيب بدون أي براغي ظاهرة',
          en: '0.05mm CNC fiber laser tolerance with concealed seamless mechanical fastenings',
        },
      },
    ],
    appliedAlloys: [
      { fa: 'استیل ۳۰۴ دکوراتیو با پولیش گرید ۸۰۰', ar: 'ستانلس ستيل ٣٠٤ ديكوري بدرجة صقل ٨٠٠', en: 'Decorative 304 with Grade 800 Polish' },
      { fa: 'پوشش PVD تیتانیوم نیترید سخت', ar: 'طلاء نتريد التيتانيوم PVD شديد الصلابة', en: 'Cathodic Titanium Nitride Hard PVD' },
      { fa: 'شیت‌های ضخامت ۱.۵ تا ۳ میلی‌متر', ar: 'صفائح بسماكة ١.٥ حتى ٣ ملم', en: 'Sheets in 1.5mm to 3.0mm Gauge' },
    ],
    recommendedFinishes: [
      { fa: 'طلایی متالیک ۲۴ عیار (Titanium 24K Gold)', ar: 'ذهبي ميتاليك عيار ٢٤ (PVD Gold)', en: '24K Titanium Gold PVD' },
      { fa: 'رزگلد لوکس (Rose Gold Polish)', ar: 'روز غولد فاخر مصقول', en: 'Rose Gold PVD Polish' },
      { fa: 'مشکی تیتانیوم دودی (Black Titanium)', ar: 'أسود تيتانيوم دخاني فاخر', en: 'Smoky Black Titanium PVD' },
      { fa: 'برنز شامپاینی (Champagne Bronze)', ar: 'برونز شامباني راقي', en: 'Champagne Bronze PVD' },
    ],
    guaranteeYears: 15,
  },
  {
    id: 'landscaping',
    title: {
      fa: 'محوطه‌سازی و فضای باز (Landscape & Outdoor)',
      ar: 'تنسيق الحدائق والمساحات الخارجية (Landscape)',
      en: 'Architectural Landscape, Water Features & Outdoor Living',
    },
    subtitle: {
      fa: 'آبنماهای کرتین استیل ۳۱۶ ضدکلر، آلاچیق و پرگولا، باربیکیو مدولار، تاب و المان‌های معلق فضای باز',
      ar: 'نوافير ستانلس ستيل ۳۱۶ مقاومة للكلور، مظلات برغولا، مطابخ شواء خارجية ومجسمات معلقة',
      en: 'Marine 316 chlorine-resistant water curtains, stainless pergolas, modular outdoor kitchens & swing daybeds',
    },
    shortDesc: {
      fa: 'طراحی و ساخت آبنماهای استخری، پرده‌های آب و نازل‌های کرتین استیل ۳۱۶ ضدکلر، باربیکیو و آشپزخانه‌های مدولار فضای باز و المان‌های دکوراتیو باغی.',
      ar: 'تصميم وتنفيذ شلالات المسابح المقاومة للكلور، مطابخ الشواء الخارجية، المظلات والبرغولا ومقاعد الاسترخاء المعلقة.',
      en: 'Turnkey fabrication of swimming pool water curtains, 316 marine-grade outdoor kitchens, stainless pergolas and kinetic garden sculptures.',
    },
    description: {
      fa: 'فضاهای باز ویلایی و روف‌گاردن‌ها نیازمند متریال‌هایی هستند که در برابر نور خورشید، باران، رطوبت و گاز کلر استخرها هرگز اکسید نشوند. استیلکس کلیه سازه‌های محوطه را منحصراً با آلیاژ استنلس استیل ۳۱۶ و جوشکاری آب‌بند هیدرولیکی تولید می‌نماید.',
      ar: 'تتطلب المساحات الخارجية وحدائق الأسطح خامات متطورة لا تتأثر بحرارة الشمس، الأمطار وكلور المسابح. تصنع ستيليكس جميع هياكل اللاندسكيب حصرياً من ستانلس ستيل ۳۱۶ مع لحام هيدروليكي محكم.',
      en: 'Outdoor luxury landscapes and private rooftop retreats demand materials immune to intense UV rays, driving rain, humidity and chlorinated pool water. STELLEX fabricates outdoor structures exclusively from 316 marine-grade stainless steel with hydraulic-tested TIG joints.',
    },
    iconName: 'Trees',
    badge: {
      fa: 'مقاومت ۱۰۰٪ در برابر رطوبت و کلر',
      ar: 'مقاومة ١٠٠٪ للرطوبة والكلور',
      en: '100% Weather & Chlorine Proof',
    },
    coverImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80',
    ],
    subFeatures: [
      {
        title: {
          fa: 'آبنماهای کرتین و پرده آب استخر استیل ۳۱۶',
          ar: 'شلالات ومصبات مياه المسابح ستانلس ستيل ٣١٦',
          en: 'Marine 316 Pool Waterfalls & Laminar Curtains',
        },
        desc: {
          fa: 'طراحی هیدرودینامیک با ریزش آب یکنواخت و صیقلی، مقاوم در برابر گاز کلر و اسیدهای تصفیه',
          ar: 'تصميم هيدروديناميكي يضمن تدفقاً مائياً ناعماً ومقاوماً للكلور وأحماض المعالجة',
          en: 'Hydrodynamic laminar flow engineering with uniform sheet discharge, immune to high chlorine and saltwater',
        },
        specs: {
          fa: 'آلیاژ خالص ۳۱۶L دریایی با ضخامت ۳ میلی‌متر | تست فشار هیدرولیک کارخانه‌ای',
          ar: 'سبيكة ٣١٦L بحرية نقية بسماكة ٣ ملم | اختبار ضغط هيدروليكي معملي',
          en: 'Pure 316L Marine Grade 3.0mm thickness | Factory hydrostatic pressure certified',
        },
      },
      {
        title: {
          fa: 'باربیکیو و آشپزخانه‌های مدولار فضای باز (Outdoor Kitchen)',
          ar: 'مطابخ الشواء الخارجية المعيارية الفاخرة',
          en: 'Modular Stainless Outdoor Kitchens & Custom BBQ Islands',
        },
        desc: {
          fa: 'شامل گریل گازی و زغالی، سینک شستشوی توکار، یخچال مدولار و کشوهای آب‌بند بدون نفوذ گرد و غبار',
          ar: 'تتضمن شوايات غاز وفحم، مغاسل مدمجة، ثلاجات وأدراج محكمة ضد الغبار ومياه الأمطار',
          en: 'Featuring high-BTU gas/charcoal grills, undermount sinks, outdoor refrigeration and weather-sealed drawers',
        },
        specs: {
          fa: 'عایق‌بندی کامل حرارتی پشم سنگ متراکم | ورق‌های دوبل استیل ضد زنگ',
          ar: 'عزل حراري كامل بالصوف الصخري عالي الكثافة | صفائح صلب مزدوجة',
          en: 'High-density rockwool thermal insulation | Double-walled stainless steel construction',
        },
      },
      {
        title: {
          fa: 'آلاچیق، پرگولا و سایبان‌های متحرک استیل',
          ar: 'مظلات برغولا وجلسات خارجية من الستانلس ستيل',
          en: 'Stainless Pergolas, Cabanas & Louvered Roof Structures',
        },
        desc: {
          fa: 'تلفیق تیرهای قوطی سنگین استیل ۳۱۶ با لوورهای آلومینیومی متحرک یا سقف‌های شیشه‌ای لمینت',
          ar: 'دمج جسور الستانلس ستيل ٣١٦ الثقيلة مع شرائح متحركة أو أسقف زجاجية مصفحة',
          en: 'Heavy structural 316 box-beam frames integrated with motorized louvers or laminated glass canopies',
        },
        specs: {
          fa: 'تحمل بارهای بادی شدید تا ۱۲۰ کیلومتر بر ساعت | اتصالات جوش آرگون مخفی',
          ar: 'تحمل رياح عاتية حتى ١٢٠ كم/ساعة | لحامات أرجون مخفية ومصقولة',
          en: 'Engineered for wind gust loads up to 120 km/h | Hidden structural anchorages',
        },
      },
      {
        title: {
          fa: 'تاب‌های ریلکسی، تخت‌های استخری و مبلمان لندسکیپ',
          ar: 'أراجيح الاسترخاء، أسرّة المسابح وأثاث الحدائق الفاخر',
          en: 'Suspended Daybeds, Sun Loungers & Landscape Kinetic Art',
        },
        desc: {
          fa: 'سازه‌های ارگونومیک با پارچه‌های ضدآب Sunbrella و فریم‌های استیل ضدسایش و ضدخوردگی',
          ar: 'هياكل هندسية مريحة مع أقمشة سنبريلا المقاومة للماء وإطارات ستانلس ستيل فائقة القوة',
          en: 'Ergonomic stainless frames paired with weatherproof Sunbrella fabrics and custom suspension cables',
        },
        specs: {
          fa: 'تحمل وزن تا ۴۰۰ کیلوگرم در المان‌های نشیمن معلق با اتصالات مهندسی هیلتی',
          ar: 'تحمل أوزان حتى ٤٠٠ كجم للجلسات المعلقة مع مثبتات هيلتي الهندسية',
          en: 'Tested up to 400 kg suspension payload with heavy-duty architectural swivels',
        },
      },
    ],
    appliedAlloys: [
      { fa: 'استیل ۳۱۶ مارین گرید ۲.۵٪ مولیبدن', ar: 'ستانلس ستيل ٣١٦ بحري مع ٢.٥٪ موليبدينوم', en: 'Marine-Grade 316 with 2.5% Molybdenum' },
      { fa: 'استیل ۳۱۶L کم‌کربن مقاوم به اسید', ar: 'ستانلس ستيل ٣١٦L منخفض الكربون ومقاوم للأحماض', en: 'Ultra-Low Carbon 316L Acid-Resistant' },
    ],
    recommendedFinishes: [
      { fa: 'الکتروپولیش ضدجرم (Electropolish)', ar: 'صقل كهربائي مقاوم للشوائب (Electropolish)', en: 'Electropolished Anti-Fouling' },
      { fa: 'خش‌دار متالیک مات (Satin Hairline)', ar: 'حريري مطفي خطي (Satin Hairline)', en: 'Satin Hairline No.4' },
      { fa: 'پوشش PVD مشکی مات ضد UV', ar: 'طلاء PVD أسود مطفي مقاوم لأشعة الشمس', en: 'UV-Resistant Matt Black PVD' },
    ],
    guaranteeYears: 15,
  },
  {
    id: 'medical_lab',
    title: {
      fa: 'تجهیزات آزمایشگاهی، بیمارستانی و اتاق عمل',
      ar: 'تجهيزات المستشفيات، المختبرات وغرف العمليات والكلين روم',
      en: 'Medical, Cleanroom & Hospital Sanitary Engineering',
    },
    subtitle: {
      fa: 'سینک‌های اسکراب جراحی چشمی، کمدهای کلین‌روم، پس‌باکس هوشمند، ترولی و میزهای کالبدشکافی استیل ۳۱۶L',
      ar: 'أحواض غسيل جراحي بدون لمس، خزائن كلين روم، صناديق نقل العينات، وطاولات التشريح ۳۱۶L',
      en: 'Surgical scrub sinks, cleanroom pass-boxes, hermetic pass-throughs & sanitary 316L equipment',
    },
    shortDesc: {
      fa: 'تولید تخصصی سینک‌های اسکراب اتاق عمل تمام الکترونیک، پس‌باکس‌های هوشمند با فیلتر هپا، کمدهای کلین‌روم و میزهای کالبدشکافی طبق استانداردهای GMP و وزارت بهداشت.',
      ar: 'تصنيع أحواض التعقيم الجراحي، صناديق تمرير العينات مع فلاتر هيبا، وخزائن غرف العمليات وفق معايير GMP الدولية.',
      en: 'Specialized fabrication of electronic touchless surgical scrub sinks, HEPA-filtered pass-boxes, cleanroom pass-throughs and GMP-compliant autopsy dissection tables.',
    },
    description: {
      fa: 'دپارتمان بهداشتی و درمانی استیلکس بر اساس آخرین دستورالعمل‌های GMP و FDA، تجهیزات استنلس استیل ۳۱۶L ضدباکتری را با پرداخت الکتروپولیش بدون درز و گوشه‌های کرو (R15) جهت جلوگیری از تجمع آلودگی و بیوفیلم تولید می‌نماید.',
      ar: 'ينتج قسم التجهيزات الطبية في ستيليكس معدات ستانلس ستيل ۳۱۶L مضادة للبكتيريا مع صقل كهربائي خالي من الفواصل وزوايا منحنية (R15) لمنع تراكم الميكروبات وفق معايير GMP و FDA.',
      en: 'STELLEX sanitary engineering department manufactures GMP & FDA-compliant 316L low-carbon equipment featuring seamless coved internal corners (R15 radius) and electropolished surface roughness Ra < 0.4 µm to eliminate microbial contamination.',
    },
    iconName: 'Stethoscope',
    badge: {
      fa: 'استاندارد GMP و تاییدیه وزارت بهداشت',
      ar: 'مطابق لمعايير GMP ووزارة الصحة',
      en: 'GMP & FDA Pharma Certified',
    },
    coverImage: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80',
    ],
    subFeatures: [
      {
        title: {
          fa: 'سینک‌های اسکراب جراحی ۱، ۲ و ۳ نفره',
          ar: 'أحواض الغسيل والتعقيم الجراحي لشخص إلى ٣ أشخاص',
          en: '1, 2 & 3-Station Surgical Scrub Sinks',
        },
        desc: {
          fa: 'مجهز به شیرهای چشمی هوشمند، جا صابونی اتوماتیک و سیستم کنترل دمای دیجیتال ترموستاتیک',
          ar: 'مزودة بصنابير وحساسات ذكية، مضخات صابون تلقائية ونظام تحكم رقمي بدرجة الحرارة',
          en: 'Equipped with infrared touchless sensor taps, digital thermostatic mixer and automatic scrub dispensers',
        },
        specs: {
          fa: 'استیل ۳۱۶L پزشکی بدون درز جوشکاری با زبری سطح Ra < 0.4µm',
          ar: 'ستانلس ستيل ٣١٦L طبي خالي من فواصل اللحام مع نعومة Ra < 0.4µm',
          en: 'Pharma-grade 316L seamless pressed bowl with surface roughness Ra < 0.4µm',
        },
      },
      {
        title: {
          fa: 'پس‌باکس هوشمند کلین‌روم (Dynamic Pass Box)',
          ar: 'صناديق نقل العينات الذكية لغرف الكلين روم',
          en: 'Dynamic Cleanroom Pass-Boxes with HEPA H14',
        },
        desc: {
          fa: 'دارای سیستم اینترلاک الکترومغناطیسی دو طرفه، لامپ ضدعفونی UV-C و فیلتراسیون هپا',
          ar: 'نظام قفل كهرومغناطيسي متبادل، أشعة تعقيم UV-C وفلاتر هيبا فائقة النقاوة',
          en: 'Featuring electromagnetic interlocking doors, UV-C germicidal lamps and laminar HEPA H14 airflow',
        },
        specs: {
          fa: 'دستیابی به کلاس تمیزی ISO Class 5 (Class 100) و استاندارد GMP',
          ar: 'تحقيق مستوى نقاء ISO Class 5 (Class 100) ومعايير GMP العالمية',
          en: 'Certified ISO Class 5 (Class 100) cleanroom compliance',
        },
      },
      {
        title: {
          fa: 'کمدهای نگهداری دارو، البسه و آندوسکوپ',
          ar: 'خزائن حفظ الأدوية، الملابس المعقمة ومناظير العمليات',
          en: 'Pharma Cabinets & Endoscope Storage Solutions',
        },
        desc: {
          fa: 'مجهز به سیستم گردش هوای تصفیه شده، طبقات مشبک با شیب ضدماندگاری قطرات آب و قفل الکترونیک',
          ar: 'نظام تدوير هواء منقى، أرفف مائلة لمنع تجمع قطرات الماء وأقفال إلكترونية',
          en: 'Equipped with HEPA air circulation, sloped self-draining shelves and electronic access control',
        },
        specs: {
          fa: 'مقاومت ۱۰۰٪ در برابر بتادین، الکل، هیپوکلریت سدیم و گاز فرمالدئید',
          ar: 'مقاومة تامة للبيتادين، الكحول، هيبوكلوريت الصوديوم وغازات التعقيم',
          en: '100% immune to Betadine stains, alcohol, bleach and chemical sterilants',
        },
      },
      {
        title: {
          fa: 'میزهای تشریح، کالبدشکافی و ترولی‌های دارویی',
          ar: 'طاولات التشريح الطبي وعربات نقل الأدوية المعقمة',
          en: 'Autopsy Dissection Tables & Sanitary Pharma Trolleys',
        },
        desc: {
          fa: 'دارای سیستم شستشوی محیطی خودکار، فن مکنده بوهای نامطبوع و خردکن ضایعات بیولوژیک',
          ar: 'نظام غسيل محيطي تلقائي، شفاط سحب الروائح ومفرمة للنفايات البيولوجية',
          en: 'Equipped with perimeter hydro-wash, downdraft air extraction and biological waste grinder',
        },
        specs: {
          fa: 'ساخت با ورق‌های استیل ضخامت ۲.۵ میلی‌متر با ریل‌های هیدرولیک بالابر',
          ar: 'تصنيع بصفائح ستانلس ستيل ٢.٥ ملم مع روافع هيدروليكية',
          en: 'Fabricated from 2.5mm heavy-gauge 316L sheet with hydraulic elevation mechanism',
        },
      },
    ],
    appliedAlloys: [
      { fa: 'استیل ۳۱۶L پزشکی و دارویی (کربن کمتر از ۰.۰۳٪)', ar: 'ستانلس ستيل ٣١٦L طبي ودوائي (كربون أقل من ٠.٠٣٪)', en: 'Medical & Pharma Grade 316L (C < 0.03%)' },
      { fa: 'استیل ۳۰۴ بهداشتی بیمارستانی', ar: 'ستانلس ستيل ٣٠٤ صحي للمستشفيات', en: 'Sanitary Hospital Grade 304' },
    ],
    recommendedFinishes: [
      { fa: 'الکتروپولیش بهداشتی زبری سطح Ra<0.4', ar: 'صقل كهربائي صحي بدرجة Ra<0.4', en: 'Sanitary Electropolish (Ra < 0.4 µm)' },
      { fa: 'ساتن مات بهداشتی بدون انعکاس نور', ar: 'ساتان مطفي صحي يمنع انعكاس الأضواء المزعجة', en: 'Non-Glare Medical Satin Finish' },
    ],
    guaranteeYears: 15,
  },
  {
    id: 'industrial_parts',
    title: {
      fa: 'تجهیزات، مخازن و قطعات دقیق صنعتی',
      ar: 'المعدات، الخزانات والقطع الصناعية الدقيقة',
      en: 'Industrial Stainless Vessels, Piping & Heavy-Duty Components',
    },
    subtitle: {
      fa: 'مخازن تک، دو و سه‌جداره صنایع غذایی و دارویی، سیستم‌های پایپینگ بهداشتی و شاسی‌های مهندسی',
      ar: 'خزانات معزولة أحادية وثنائية وثلاثية الجدران، شبكات أنابيب صحية وشاسيهات صناعية',
      en: 'Single, jacketed & dimpled processing vessels, sanitary orbital piping & precision CNC assemblies',
    },
    shortDesc: {
      fa: 'طراحی و ساخت مخازن تحت فشار، میکسرهای دو جداره استیل ۳۱۶ صنایع لبنی و داروسازی، خطوط لوله‌کشی بهداشتی جوش اوربیتال و فریم‌های صنعتی با برش لیزر ۶ کیلووات.',
      ar: 'تصميم وصناعة خزانات الضغط والمكسرات ثنائية الجدار للصناعات الغذائية والدوائية، وشبكات الأنابيب الصحية ولحام الأوربيتال.',
      en: 'Engineering and fabrication of ASME pressure vessels, dimple-jacketed pharmaceutical mixing tanks, sanitary orbital piping loops and CNC machinery chassis.',
    },
    description: {
      fa: 'دپارتمان صنعتی استیلکس مجهز به رول‌فرمینگ، دستگاه‌های جوش اتوماتیک زیرپودری و اوربیتال، مخازن استیل فرآیندی را مطابق استاندارد ASME و DIN تولید کرده و برای کارخانجات صنایع غذایی، دارویی، پتروشیمی و آرایشی-بهداشتی عرضه می‌نماید.',
      ar: 'يضم قسم الصناعة في ستيليكس أحدث ماكينات لف الصفائح واللحام الأوتوماتيكي المداري، لتصنيع الخزانات الصناعية وفق معايير ASME و DIN الدولية للمصانع الكبرى.',
      en: 'Equipped with automated CNC plate rolling, submerged arc and orbital welding systems, STELLEX fabricates industrial stainless processing tanks complying with ASME Section VIII and DIN sanitary codes for food, pharma, cosmetics and chemical industries.',
    },
    iconName: 'Cpu',
    badge: {
      fa: 'استاندارد ASME و تست هیدرواستاتیک',
      ar: 'معايير ASME واختبار هيدروستاتيكي',
      en: 'ASME Pressure Vessel Code',
    },
    coverImage: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
    ],
    subFeatures: [
      {
        title: {
          fa: 'مخازن فرآیندی و میکسر دوجداره ژاکت‌دار',
          ar: 'خزانات معالجة ومكسرات ثنائية الجدار مع غلاف تسخين/تبريد',
          en: 'Dimple-Jacketed & Insulated Mixing Vessels',
        },
        desc: {
          fa: 'مجهز به ژاکت دیمپل جهت گردش بخار یا آب سرد، عایق پشم سنگ و همزن‌های مغناطیسی یا مکانیکی',
          ar: 'مزودة بغلاف ديمبل لتدوير البخار أو الماء المثلج، عزل حراري ومحركات خلط مغناطيسية',
          en: 'Featuring high-efficiency dimple heat-transfer jackets, sanitary agitation impellers and CIP spray balls',
        },
        specs: {
          fa: 'ظرفیت از ۵۰۰ لیتر تا ۵۰,۰۰۰ لیتر | فشار کاری تا ۱۰ بار با تاییدیه تست NDT',
          ar: 'سعات من ٥٠٠ لتر حتى ٥٠,٠٠٠ لتر | ضغط تشغيلي حتى ١٠ بار مع فحص NDT',
          en: 'Capacity from 500L to 50,000L | Working pressure up to 10 bar with full NDT weld radiography',
        },
      },
      {
        title: {
          fa: 'پایپینگ بهداشتی و لوپ WFI با جوشکاری اوربیتال',
          ar: 'شبكات الأنابيب الصحية ولوپ WFI مع لحام أوربيتال',
          en: 'Sanitary Orbital Piping & WFI Pure Water Loops',
        },
        desc: {
          fa: 'لوله‌کشی تخصصی استیل ۳۱۶L با گاز آرگون با خلوص ۹۹.۹۹۹٪ و تست بوروسکوپی داخلی جوش',
          ar: 'أنابيب ستانلس ستيل ٣١٦L متخصصة مع غاز أرجون عالي النقاوة وفحص داخلي بكاميرا البوروسكوب',
          en: 'Pharma 316L tubing fabricated with automated orbital TIG welding and 100% video borescope inspection',
        },
        specs: {
          fa: 'عدم وجود هرگونه ناپیوستگی و اکسیداسیون | گواهی پسیواسیون و تست شیمیایی',
          ar: 'خلو تام من أي شوائب أو أكسدة | شهادة تخميل وكفاءة كيميائية',
          en: 'Zero discoloration with ASTM A380 acid pickling and chemical passivation',
        },
      },
      {
        title: {
          fa: 'شاسی‌های مهندسی و قطعات دقیق برش لیزر فایبر',
          ar: 'شاسيهات هندسية وقطع دقيقة مقطوعة بالليزر',
          en: 'Heavy Machine Chassis & Precision CNC Cut Parts',
        },
        desc: {
          fa: 'برش ورق‌های استیل تا ضخامت ۲۰ میلی‌متر با گاز نیتروژن بدون تغییر رنگ لبه‌ها',
          ar: 'قطع صفائح حتى سماكة ٢٠ ملم بغاز النيتروجين بدون أي تغير في ألوان الحواف',
          en: 'Nitrogen-assist fiber laser cutting up to 20mm plate thickness with zero oxide edge',
        },
        specs: {
          fa: 'دقت ابعادی ۰.۰۵ میلی‌متر | قابلیت خمکاری CNC با تناژ ۳۰۰ تن',
          ar: 'دقة أبعاد ٠.٠٥ ملم | ثني بضغط ٣٠٠ طن على ماكينات CNC',
          en: 'Dimensional precision ±0.05 mm | 300-ton CNC press brake bending',
        },
      },
      {
        title: {
          fa: 'هودها و کانال‌های مکنده ضدانفجار و ضداستیک',
          ar: 'شفاطات وقنوات سحب مقاومة للانفجار والأحماض',
          en: 'Explosion-Proof Stainless Exhaust Hoods & Ducting',
        },
        desc: {
          fa: 'جهت تخلیه گازهای خورنده اسیدی و بخارات حلال‌ها در آزمایشگاه‌ها و پتروشیمی‌ها',
          ar: 'لسحب الغازات الحمضية والأبخرة الكيميائية في المختبرات ومصانع البتروكيماويات',
          en: 'Engineered for corrosive acid vapor extraction and volatile organic solvent atmospheres',
        },
        specs: {
          fa: 'استیل ضداسید ۳۱۶Ti حاوی تیتانیوم مقاوم به حرارت‌های بالا',
          ar: 'ستانلس ستيل ٣١٦Ti المقوى بالتيتانيوم والمقاوم لدرجات الحرارة العالية',
          en: 'Titanium-stabilized 316Ti alloy for elevated thermal and chemical resistance',
        },
      },
    ],
    appliedAlloys: [
      { fa: 'استیل ۳۱۶L کم‌کربن صنعتی', ar: 'ستانلس ستيل ٣١٦L منخفض الكربون صناعي', en: 'Industrial Grade 316L' },
      { fa: 'استیل ۳۰۴ ضخامت بالا (Plate & Pipe)', ar: 'ستانلس ستيل ٣٠٤ سماكات عالية', en: 'Heavy Gauge 304 Plate & Pipe' },
      { fa: 'استیل نسوز ۳۱۰ و ۳۲۱', ar: 'ستانلس ستيل مقاوم للحرارة ٣١٠ و ٣٢١', en: 'Heat-Resistant 310 & 321 Alloys' },
    ],
    recommendedFinishes: [
      { fa: 'پسیواسیون شیمیایی و اسیدشویی کامل', ar: 'تخميل كيميائي وغسيل حمضي كامل', en: 'Chemical Passivation & Pickling' },
      { fa: 'پرداخت صنعتی خش‌دار No.4', ar: 'صقل صناعي خطي No.4', en: 'Industrial Satin No.4' },
      { fa: 'پولیش آینه‌ای مخازن فرآیندی', ar: 'صقل مرآتي لخزانات المعالجة', en: 'Internal Mirror Sanitary Finish' },
    ],
    guaranteeYears: 15,
  },
  {
    id: 'decorative_radiators',
    title: {
      fa: 'انواع رادیاتورهای دکوراتیو استیل (Designer Radiators)',
      ar: 'المشعات الديكورية الفاخرة ومجففات المناشف (Radiators)',
      en: 'Luxury Designer Stainless Radiators & Heated Towel Rails',
    },
    subtitle: {
      fa: '۵ کالکشن الهام‌گرفته از دیزاین ایتالیا، آلمان و پینترست؛ سری وال‌آرت امواج، شلف‌دار حمام مستر، ماژولار ISH، اوریگامی ژئومتریک و منحنی روبانی EOS',
      ar: '٥ مجموعات مستوحاة من التصميم الإيطالي والألماني؛ اللوحات النحتية، رفوف المناشف الفاخرة، أعمدة ISH الموديلار والأوريغامي ثلاثي الأبعاد',
      en: '5 Curated Designer Collections: Wave Sculptural Art, Towel-Rack Shelf, ISH Modular Columns, 3D Origami & EOS Ribbon',
    },
    shortDesc: {
      fa: 'تولید لوکس‌ترین رادیاتورهای استیل ۳۰۴ و ۳۱۶ نگیر با پوشش‌های طلایی PVD، مشکی تیتانیوم و سوپرمیرور، تست فشار ۱۶ بار و ۱۵ سال گارانتی تعویض بی قید و شرط.',
      ar: 'إنتاج أرقى المشعات الديكورية ومجففات المناشف من ستانلس ستيل ۳۰۴ و ٣١٦ بأعلى كفاءة حرارية وطلاءات PVD مع ضمان استبدال ١٥ عاماً.',
      en: 'Engineering ultra-luxury decorative 304 & 316 stainless radiators and towel warmers with maximum thermal dissipation, PVD titanium finishes and 15-year warranty.',
    },
    description: {
      fa: 'رادیاتورهای دکوراتیو استیلکس مرز میان تأسیسات حرارتی و مجسمه‌سازی معماری را محو کرده‌اند. این مجموعه شامل ۵ مدل سفارشی‌سازی‌شده طبق ترندهای روز بین‌المللی با آلیاژ استیل ۳۰۴ و ۳۱۶ نگیر، مقاومت کامل در برابر رسوب و زنگ‌زدگی، بالاترین راندمان تابشی-همرفتی و ۱۵ سال گارانتی تعویض کتبی می‌باشد.',
      ar: 'تجمع مشعات ستيليكس بين الكفاءة الحرارية المتقدمة والجمال الفني كلوحة جدارية فاخرة وفق ٥ طرازات معمارية عالمية مع أعلى متانة من ستانلس ستيل ٣٠٤ و ٣١٦ وضمان ١٥ عاماً.',
      en: 'STELLEX designer radiators merge thermodynamic hydronic heating with contemporary architectural sculpture. Featuring 5 curated international models engineered in 304/316 alloys with 15-year unconditional warranty.',
    },
    iconName: 'Flame',
    badge: {
      fa: '۵ دیزاین منتخب معماران داخلی | ۱۵ سال گارانتی',
      ar: '٥ تصاميم مختارة لمهندسي الديكور | ضمان ١٥ عاماً',
      en: '5 Curated Designer Models | 15-Yr Warranty',
    },
    coverImage: 'https://i.pinimg.com/1200x/1e/a2/c7/1ea2c73975467fc84338152ec2ad52d0.jpg',
    galleryImages: [
      'https://i.pinimg.com/1200x/1e/a2/c7/1ea2c73975467fc84338152ec2ad52d0.jpg',
      'https://i.pinimg.com/originals/a1/ed/85/a1ed8509062e158cf909f19ab5f60f16.jpg',
      'https://i.pinimg.com/originals/52/a4/3a/52a43a3556edfd301f281ebd16cb7c1a.jpg',
      'https://i.pinimg.com/1200x/10/b0/75/10b075d9d3191e5ec7d64c366969b84b.jpg',
      'https://i.pinimg.com/1200x/56/2e/ea/562eeabde42a5006691ddc3dbec9c04e.jpg',
    ],
    subFeatures: [
      {
        title: {
          fa: 'رادیاتور وال‌آرت امواج ارگانیک (Wave Sculptural Art)',
          ar: 'مشع اللوحة الجدارية النحتية بتموجات انسيابية',
          en: 'Wave Sculptural Wall-Art Gold Radiator',
        },
        desc: {
          fa: 'طراحی تندیس‌وار با خطوط سیال عمودی و رفلکس متالیک طلایی شامپاینی در کنار شلف چوبی دکوراتیو',
          ar: 'تصميم منحوت بانسيابية عمودية ولمعان ذهبي شامباني بجانب الرفوف الخشبية',
          en: 'Organic fluid vertical waves with champagne gold PVD mounted beside architectural shelving',
        },
        specs: {
          fa: 'ابعاد ۱۸۰۰×۵۲۰ میلی‌متر | راندمان ۱۵۲۰ kcal/h | پوشش ۲۰ الی ۲۸ مترمربع',
          ar: 'الأبعاد ١٨٠٠×٥٢٠ ملم | كفاءة ١٥٢٠ كيلو كالوري | مساحة ٢٨ م٢',
          en: '1800×520 mm | 1,520 kcal/h | 20-28 m² coverage',
        },
      },
      {
        title: {
          fa: 'حوله‌خشک‌کن مدرن با شلف فوقانی حوله (Luxury Towel Rack)',
          ar: 'مجفف مناشف فاخر مع رف علوي للحمامات الماستر',
          en: 'Modern Luxury Heated Towel Rack & Radiator',
        },
        desc: {
          fa: 'مجهز به شلف افقی ۹۰ درجه برای نگهداری و گرمایش ۴ عدد حوله بزرگ تن‌پوش همزمان',
          ar: 'مجهز ببروز أفقي ٩٠ درجة لتسخين وتجفيف ٤ مناشف حمام كبيرة في وقت واحد',
          en: 'Integrated 90-degree heated top shelf for keeping plush bathrobes and towels warm',
        },
        specs: {
          fa: 'ابعاد ۱۲۰۰×۵۰۰ میلی‌متر | دوگانه‌سوز پکیج + المنت برقی | ضد زنگ بخار ۱۰۰٪',
          ar: 'الأبعاد ١٢٠٠×٥٠٠ ملم | مزدوج الطاقة مائي + كهربائي | مقاوم للبخار ١٠٠٪',
          en: '1200×500 mm | Dual-Fuel Hydronic + Electric | 100% Steam-Proof 304',
        },
      },
      {
        title: {
          fa: 'رادیاتور ستونی ماژولار استیل ISH آلمان (Modular Column)',
          ar: 'مشع الأعمدة الموديلار الهندسية من ستانلس ٣١٦',
          en: 'ISH Frankfurt Modular Stainless Steel Radiator',
        },
        desc: {
          fa: 'پروفیل‌های عمودی موازی با آلیاژ استیل ۳۱۶ دریایی و آویزهای پنهان لباس و حوله با فینیش کروم ۸K',
          ar: 'أعمدة متوازية من ستانلس ٣١٦ البحري مع علاقات مخفية وتشطيب مرآتي كروم',
          en: 'Parallel vertical 316 marine steel columns with concealed clothing hanger pegs',
        },
        specs: {
          fa: 'ارتفاع قدی ۲۰۰۰ میلی‌متر | راندمان ۱۸۵۰ kcal/h | تست فشار ۱۶ بار DIN آلمان',
          ar: 'ارتفاع ٢٠٠٠ ملم | كفاءة ١٨٥٠ كيلو كالوري | فحص ضغط ١٦ بار DIN',
          en: '2000 mm Tall Column | 1,850 kcal/h | 16-Bar DIN EN 442 Pressure',
        },
      },
      {
        title: {
          fa: 'رادیاتور ژئومتریک اوریگامی دیواری (Geometric 3D Faceted)',
          ar: 'مشع هندسي ثلاثي الأبعاد بتصميم الأوريغامي المعاصر',
          en: 'Geometric 3D Faceted Origami Wall Radiator',
        },
        desc: {
          fa: 'شکست‌های زاویه‌دار چندوجهی سه‌بعدی با انکسار نوری جذاب در رنگ مشکی تیتانیوم مات',
          ar: 'انكسارات هندسية متعددة الأوجه تزيد مساحة الإشعاع بلون أسود تيتانيوم مطفي',
          en: '3D multi-faceted origami planes generating dynamic light play in matte titanium black',
        },
        specs: {
          fa: 'ابعاد ۱۶۰۰×۶۰۰ میلی‌متر | ورق ۲ میل لیزر فیبر | افزایش ۳۵٪ بازده تابشی',
          ar: 'الأبعاد ١٦٠٠×٦٠٠ ملم | فولاذ ٢ ملم فايبر ليزر | زيادة ٣٥٪ في الإشعاع',
          en: '1600×600 mm | 2mm CNC Laser Steel | +35% Radiant Efficiency',
        },
      },
      {
        title: {
          fa: 'رادیاتور ارگانیک منحنی روبانی سری ایوس (EOS Curved Ribbon)',
          ar: 'مشع إيوس المنحني الانسيابي بتوقيع ماريو تالين',
          en: 'EOS Curved Ribbon Sculptural Radiator by Mario Talin',
        },
        desc: {
          fa: 'دیزاین نمادین معمار ایتالیایی Mario Talin با لوله یکپارچه هیدروفرمینگ بدون درز',
          ar: 'تصميم أيقوني إيطالي بتوقيع المصمم العالمي Mario Talin بأنابيب بدون فواصل',
          en: 'Iconic Italian design by Mario Talin featuring seamless hydroformed ribbon contours',
        },
        specs: {
          fa: 'ابعاد ۱۵۰۰×۴۵۰ میلی‌متر | گردش هیدرولیک بی‌صدا | طلایی ۲۴ عیار و کروم سوپرمیرور',
          ar: 'الأبعاد ١٥٠٠×٤٥٠ ملم | تدفق هيدروليكي فائق الهدوء | ذهبي عيار ٢٤ ومرآة 8K',
          en: '1500×450 mm | Whisper-Quiet Flow | 24K Mirror Gold & 8K Chrome',
        },
      },
    ],
    appliedAlloys: [
      { fa: 'استیل ۳۰۴ نگیر حرارتی با ضریب هدایت بالا', ar: 'ستانلس ستيل ٣٠٤ حراري عالي التوصيل', en: 'High-Conductivity Austenitic 304' },
      { fa: 'استیل ۳۱۶ دریایی برای محیط‌های اسپا و رطوبت بالا', ar: 'ستانلس ستيل ٣١٦ بحري لمحيط السبا والمسابح', en: '316 Marine-Grade for Spa & Pool Enclosures' },
    ],
    recommendedFinishes: [
      { fa: 'طلایی ۲۴ عیار PVD لوکس (Gold Mirrored)', ar: 'ذهبي عيار ٢٤ لامع PVD', en: '24K Mirror Gold PVD' },
      { fa: 'طلایی برنجی مات حصیری (Brushed Brass Gold)', ar: 'نحاسي ذهبي مطفي حريري', en: 'Brushed Brass Gold PVD' },
      { fa: 'مشکی تیتانیوم مات متالیک (Titanium Black)', ar: 'أسود تيتانيوم ميتاليك دودی', en: 'Titanium Black PVD' },
      { fa: 'سوپر میرور نقره‌ای کروم (Super Mirror 8K)', ar: 'مرآة فضية فائقة النقاء (8K)', en: 'Super Mirror 8K Silver' },
    ],
    guaranteeYears: 15,
  },
];

export const STEEL_ALLOYS: SteelAlloy[] = [
  {
    id: 'alloy-304',
    name: 'استیل ۳۰۴ نگیر (AISI 304 / 1.4301)',
    code: 'ASTM A240 - 304 (پروژه‌های شاخص)',
    persianName: {
      fa: 'استنلس استیل ۳۰۴ نگیر (آلیاژ اصلی و استاندارد اکثریت پروژه‌ها)',
      ar: 'ستانلس ستيل ۳۰۴ غير مغناطيسي (المعيار الأساسي لأغلب المشاريع)',
      en: 'Austenitic Stainless Steel 304 (Standard for Most Projects)',
    },
    grade: {
      fa: 'آلیاژ اصلی و استاندارد استیلکس در اکثریت پروژه‌ها (۱۰ تا ۱۵ سال گارانتی)',
      ar: 'المعيار الأساسي المعتمد في أغلب مشاريع ستيليكس (ضمان ١٠-١٥ عاماً)',
      en: 'Primary Engineering Standard for Projects (10-15 Year Warranty)',
    },
    chromium: '۱۸.۰٪ الی ۲۰.۰٪',
    nickel: '۸.۰٪ الی ۱۰.۵٪',
    molybdenum: 'ندارد (فاقد مولیبدن)',
    carbon: 'حداکثر ۰.۰۷٪',
    corrosionResistance: 92,
    heatResistance: 88,
    hardness: 'HRB 88 (سختی بالا)',
    magnetResponse: {
      fa: 'غیرمغناطیسی (کاملاً نگیر)',
      ar: 'غير مغناطيسي تماماً',
      en: '100% Non-Magnetic',
    },
    bestApplications: [
      { fa: 'انواع نرده، حفاظ و درب‌های ساختمانی و ویلایی (استاندارد اصلی)', ar: 'كافة أنواع الدرابزينات والأبواب المعمارية للفلل والمباني', en: 'All architectural railings, doors and security gates (primary standard)' },
      { fa: 'پایه‌های پیش‌ساخته، هندریل‌ها و اتصالات سازه‌ای', ar: 'القوائم مسبقة الصنع والوصلات الإنشائية', en: 'Pre-fabricated baluster posts, handrails & architectural hardware' },
      { fa: 'دکوراسیون طلافروشی، صرافی، بوتیک‌ها و رستوران‌ها', ar: 'ديكورات محلات الذهب والصرافة والمطاعم الفاخرة', en: 'Jewelry boutiques, financial showrooms & luxury restaurants' },
      { fa: 'انواع رادیاتورهای دکوراتیو و حوله‌خشک‌کن‌های مدرن', ar: 'المشعات الديكورية ومجففات المناشف العصرية', en: 'Designer decorative radiators & modern towel warmers' },
    ],
    priceTier: {
      fa: 'استاندارد اصلی پروژه‌ها (بالاترین ارزش خرید و دوام)',
      ar: 'المعيار الأساسي للمشاريع (أعلى قيمة ومتانة)',
      en: 'Primary Project Standard (Optimal Value & Lifetime Durability)',
    },
    description: {
      fa: 'استنلس استیل ۳۰۴ نگیر (Austenitic) آلیاژ اصلی، رسمی و استاندارد مورد استفاده در اکثریت پروژه‌های اجرایی استیلکس اعم از انواع نرده، حفاظ، درب ساختمانی، سازه‌های دکوراتیو و رادیاتورها است. این آلیاژ حاوی ۱۸٪ کروم و ۸٪ نیکل بوده و به همراه ۱۰ تا ۱۵ سال گارانتی کتبی رسمی ضدزنگ و شناسنامه معتبر متالورژی MTC ارائه می‌گردد.',
      ar: 'يعد ستانلس ستيل ۳۰۴ غير المغناطيسي السبيكة الأساسية المعتمدة في أغلبية مشاريع ستيليكس من درابزينات، أبواب، هياكل ديكورية ومشعات. يحتوي على ١٨٪ كروم و٨٪ نيكل ويأتي مع ضمان خطي معتمد من ١٠ إلى ١٥ عاماً ضد الصدأ.',
      en: 'Certified AISI 304 austenitic non-magnetic stainless steel is the primary, standard alloy deployed across the vast majority of STELLEX projects, including railings, doors, decorative fixtures and radiators. It contains 18% Cr and 8% Ni, backed by a 10 to 15-year official written anti-corrosion warranty.',
    },
  },
  {
    id: 'alloy-201',
    name: 'استیل ۲۰۱ اقتصادی (AISI 201)',
    code: 'ASTM A240 - 201 Economy',
    persianName: {
      fa: 'استیل ۲۰۱ اقتصادی (ویژه موارد خاص و فضاهای فاقد رطوبت)',
      ar: 'ستانلس ستيل ۲۰۱ الاقتصادي (للمساحات الجافة لتقليل التكلفة)',
      en: 'Austenitic 201 Economy Grade (For Dry Non-Humid Spaces)',
    },
    grade: {
      fa: 'ویژه موارد خاص و فضاهای بدون رطوبت جهت کاهش هزینه‌ها',
      ar: 'مخصص للمساحات الجافة تماماً بهدف تخفيض التكاليف الإجمالية',
      en: 'Special Economy Grade for Dry Indoor Spaces to Reduce Costs',
    },
    chromium: '۱۶.۰٪ الی ۱۸.۰٪',
    nickel: '۳.۵٪ الی ۵.۵٪ (نیکل کاهش یافته)',
    molybdenum: 'ندارد',
    carbon: 'حداکثر ۰.۱۵٪',
    corrosionResistance: 60,
    heatResistance: 65,
    hardness: 'HRB 95 (سخت‌تر و شکننده‌تر)',
    magnetResponse: {
      fa: 'نیمه نگیر (در صورت کشش سرد کمی جذب آهنربا دارد)',
      ar: 'شبه مغناطيسي (قد يجذب المغناطيس خفيفاً بعد التشكيل)',
      en: 'Semi-Magnetic after cold forming',
    },
    bestApplications: [
      { fa: 'فضاهای سرپوشیده کاملاً خشک دور از هرگونه رطوبت', ar: 'المساحات الداخلية الجافة تماماً والبعيدة عن الرطوبة', en: 'Completely dry, climate-controlled indoor spaces' },
      { fa: 'پارتیشن‌ها و فریم‌های داخلی با هدف بهینه‌سازی بودجه کارفرما', ar: 'القواطع والإطارات الداخلية بهدف تقليل الميزانية', en: 'Internal partition framing tailored for budget optimization' },
      { fa: 'سازه و استندهای نمایشگاهی موقت در سالن‌های سرپوشیده', ar: 'الهياكل المؤقتة للمعارض داخل القاعات المغلقة', en: 'Temporary indoor showroom and exhibition framework' },
    ],
    priceTier: {
      fa: 'اقتصادی (کاهش و مدیریت هزینه در فضاهای خشک)',
      ar: 'اقتصادي (لتخفيض التكاليف في المساحات الجافة)',
      en: 'Economical (Budget-Reduction for Dry Interiors)',
    },
    description: {
      fa: 'در آلیاژ استیل ۲۰۱ بخشی از نیکل با منگنز جایگزین شده است. در استیلکس، در بعضی موارد خاص و فضاهایی که کاملاً سرپوشیده و فاقد رطوبت هستند، به منظور کاهش و مدیریت هزینه‌های کارفرما از آلیاژ استیل ۲۰۱ استفاده می‌شود. این آلیاژ به هیچ عنوان برای فضاهای باز، مرطوب یا در معرض شستشو توصیه نمی‌شود.',
      ar: 'في سبيكة ۲۰۱ يتم استبدال جزء من النيكل بالمنجنيز. في ستيليكس، تستخدم هذه السبيكة في بعض الحالات الخاصة وللمساحات المغلقة الخالية تماماً من الرطوبة لتقليل تكاليف المشروع للعميل، ولا ينصح بها إطلاقاً للمساحات الخارجية أو الرطبة.',
      en: 'In Grade 201, a portion of Nickel is substituted with Manganese. At STELLEX, in select cases and dry, moisture-free indoor environments, Grade 201 is utilized to optimize and lower overall costs. It is strictly not recommended for outdoor or high-humidity installations.',
    },
  },
  {
    id: 'alloy-316',
    name: 'استیل ۳۱۶ و بالاتر صنعتی (AISI 316 / Industrial & Chemical)',
    code: 'ASTM A240 - 316 Industrial Specialty',
    persianName: {
      fa: 'استنلس استیل ۳۱۶ و بالاتر (صرفاً در موارد صنعتی)',
      ar: 'ستانلس ستيل ۳۱۶ فما فوق (مخصص للمشاريع الصناعية فقط)',
      en: 'Industrial Grade 316+ (Strictly for Industrial Applications)',
    },
    grade: {
      fa: 'صرفاً ویژه موارد خاص صنعتی، خطوط شیمیایی و مخازن فرآیندی',
      ar: 'مخصص حصرياً للمشاريع الصناعية والمنشآت الكيميائية والمعالجة',
      en: 'Strictly for Industrial Facilities, Chemical Lines & Processing Tanks',
    },
    chromium: '۱۶.۰٪ الی ۱۸.۰٪',
    nickel: '۱۰.۰٪ الی ۱۴.۰٪',
    molybdenum: '۲.۰٪ الی ۳.۰٪ (مولیبدن فعال ضداسید)',
    carbon: 'حداکثر ۰.۰۸٪',
    corrosionResistance: 98,
    heatResistance: 92,
    hardness: 'HRB 90 (استحکام تسلیم فوق‌العاده)',
    magnetResponse: {
      fa: 'غیرمغناطیسی (کاملاً نگیر)',
      ar: 'غير مغناطيسي تماماً',
      en: '100% Non-Magnetic',
    },
    bestApplications: [
      { fa: 'خطوط تولید و تأسیسات کارخانجات شیمیایی و پتروشیمی', ar: 'خطوط الإنتاج ومنشآت المصانع الكيميائية والبتروكيماويات', en: 'Chemical plants, refineries & petrochemical process piping' },
      { fa: 'مخازن فرآیندی، همزن‌ها و پایپینگ اسیدها و مواد خورنده', ar: 'خزانات المعالجة وأنابيب نقل الأحماض والمواد المسببة للتآكل', en: 'Industrial acid storage tanks, agitators & corrosive fluid piping' },
      { fa: 'محیط‌های صنعتی سنگین با بخارات شیمیایی و آلاینده شدید', ar: 'البيئات الصناعية الثقيلة ذات الأبخرة الكيميائية الحادة', en: 'Heavy industrial environments exposed to aggressive chemical vapors' },
      { fa: 'تجهیزات صنعتی صنایع غذایی و دارویی حساس با استاندارد بهداشتی', ar: 'المعدات الصناعية الغذائية والدوائية الحساسة', en: 'Industrial food processing & pharmaceutical sanitary reactors' },
    ],
    priceTier: {
      fa: 'صنعتی فوق مقاوم (ویژه مصارف صنعتی سنگین)',
      ar: 'صناعي فائق التحمل (للاستخدامات الصناعية الثقيلة)',
      en: 'Heavy Industrial Grade (High-Spec Industrial Applications)',
    },
    description: {
      fa: 'آلیاژ استنلس استیل ۳۱۶ و گریدهای بالاتر حاوی ۲ الی ۳ درصد عنصر مولیبدن هستند که مقاومت به خوردگی در برابر اسیدهای قوی و ترکیبات کلرایدی غلیظ را افزایش می‌دهد. در سیاست فنی استیلکس، آلیاژ استیل ۳۱۶ و بالاتر صرفاً و انحصاراً در موارد صنعتی، کارخانجات، مخازن فرآیندی و محیط‌های در معرض مواد شیمیایی خورنده استفاده می‌شود.',
      ar: 'تحتوي سبائك ستانلس ستيل ۳۱۶ وما فوق على الموليبدينوم لتعزيز مقاومة الأحماض القوية والمركبات الكيميائية. في استراتيجية ستيليكس الهندسية، تخصص هذه السبائك حصرياً للمشاريع والتطبيقات الصناعية ومخازن المعالجة والمنشآت الكيميائية.',
      en: 'Alloy 316 and higher grades feature 2-3% Molybdenum for elevated resistance against severe acids and harsh chemicals. Under STELLEX engineering standards, alloy 316 and above are deployed strictly and exclusively in industrial facilities, processing tanks and severe chemical plants.',
    },
  },
  {
    id: 'alloy-316l',
    name: 'استیل ۳۱۶L دارویی و پزشکی (AISI 316L / 1.4404)',
    code: 'ASTM A240 / DIN 1.4404 - Pharma Grade',
    persianName: {
      fa: 'استنلس استیل ۳۱۶L کم‌کربن فوق بهداشتی',
      ar: 'ستانلس ستيل ۳۱۶L الدوائي منخفض الكربون',
      en: 'Pharma & Medical Ultra-Low Carbon 316L',
    },
    grade: {
      fa: 'گرید بهداشتی، داروسازی و جراحی اتاق عمل',
      ar: 'المعيار الطبي، الدوائي وغرف العمليات المعقمة',
      en: 'Medical, Cleanroom & Pharmaceutical Standard',
    },
    chromium: '۱۶.۵٪ الی ۱۸.۵٪',
    nickel: '۱۰.۵٪ الی ۱۴.۵٪',
    molybdenum: '۲.۵٪ الی ۳.۰٪',
    carbon: 'کمتر از ۰.۰۳٪ (Ultra Low Carbon)',
    corrosionResistance: 99,
    heatResistance: 95,
    hardness: 'HRB 85 (قابلیت پولیش‌پذیری آینه‌ای فوق‌العاده)',
    magnetResponse: {
      fa: 'غیرمغناطیسی (کاملاً نگیر)',
      ar: 'غير مغناطيسي تماماً',
      en: '100% Non-Magnetic',
    },
    bestApplications: [
      { fa: 'سینک اسکراب اتاق عمل و تجهیزات کلین‌روم', ar: 'أحواض التعقيم الجراحي وخزائن غرف العمليات', en: 'Surgical scrub sinks & cleanroom pass-boxes' },
      { fa: 'مخازن فرآیندی داروسازی و پایپینگ WFI', ar: 'خزانات الأدوية المعقمة وشبكات المياه النقية WFI', en: 'Pharma reactors & WFI pure water injection loops' },
      { fa: 'صنایع بیوتکنولوژی و آزمایشگاه‌های پیشرفته', ar: 'صناعات التكنولوجيا الحيوية والمختبرات المتقدمة', en: 'Biotech facilities & high-purity research laboratories' },
      { fa: 'میزهای کالبدشکافی و ترولی‌های بهداشتی', ar: 'طاولات التشريح وعربات المستشفيات المعقمة', en: 'Autopsy tables & sanitary transport trolleys' },
    ],
    priceTier: {
      fa: 'تخصصی بهداشتی و دارویی (بالاترین سطح خلوص)',
      ar: 'طبي تخصصي فائق النقاوة (أعلى درجات الجودة)',
      en: 'Specialized Pharma & Surgical Grade',
    },
    description: {
      fa: 'استیل ۳۱۶L به دلیل کربن فوق‌العاده پایین (کمتر از ۰.۰۳٪)، در حین جوشکاری دچار رسوب کاربید کروم در مرز دانه‌ها نمی‌شود و همراه با الکتروپولیش به زبری سطح Ra < 0.4µm می‌رسد تا هیچ باکتری یا جرمی در آن نفوذ نکند.',
      ar: 'بفضل النسبة الضئيلة جداً من الكربون (أقل من ٠.٠٣٪)، يمنع ستانلس ستيل ۳۱۶L أي ترسبات كربونية أثناء اللحام، ويوفر سطحاً مضاداً للبكتيريا تماماً عند صقله كهربائياً.',
      en: 'With carbon content restricted below 0.03%, Grade 316L eliminates carbide precipitation during welding, providing a pristine hygienic substrate that meets stringent GMP/FDA biopharma cleanability standards.',
    },
  },
];

export const FINISH_TYPES: FinishType[] = [
  {
    id: 'pvd-gold',
    name: {
      fa: 'آبکاری تیتانیوم طلایی ۲۴ عیار (Titanium 24K Gold)',
      ar: 'طلاء التيتانيوم الذهبي عيار ٢٤ (PVD 24K Gold)',
      en: '24K Titanium Gold Cathodic PVD',
    },
    englishName: 'PVD Titanium 24K Gold',
    colorHex: '#eab308',
    gradientBg: 'linear-gradient(135deg, #fef08a 0%, #eab308 50%, #ca8a04 100%)',
    specularClass: 'specular-gold',
    pvdCoated: true,
    scratchResistance: {
      fa: 'بسیار بالا (سختی HV 2500)',
      ar: 'شديد الصلابة (HV 2500)',
      en: 'Extremely High (HV 2500)',
    },
    reflectionType: {
      fa: 'آینه‌ای براق یا خش‌دار طلایی',
      ar: 'مرآتي لامع أو حريري ذهبي',
      en: 'Super Mirror or Satin Gold',
    },
    description: {
      fa: 'پوشش‌دهی نیترید تیتانیوم کاتدی تحت خلأ بالا (PVD) با مقاومت سایشی فوق‌العاده و ضمانت کتبی مادام‌العمر در برابر محو شدن رنگ در برابر نور خورشید و شوینده‌ها.',
      ar: 'طلاء نتريد التيتانيوم الكاثودي تحت التفريغ العالي مع مقاومة فائقة للاحتكاك وضمان دائم ضد تغير اللون تحت أشعة الشمس.',
      en: 'High-vacuum cathodic arc Titanium Nitride (TiN) molecular coating delivering deep 24K gold luster with supreme scratch hardness and zero UV degradation.',
    },
    popularFor: {
      fa: 'ویترین طلافروشی، صرافی، درب‌های لابی لوکس و رادیاتورهای دکوراتیو',
      ar: 'واجهات المجوهرات، الصرافة، أبواب اللوبي والمشعات الفاخرة',
      en: 'Jewelry showcases, currency exchanges, lobby doors and designer radiators',
    },
  },
  {
    id: 'pvd-rosegold',
    name: {
      fa: 'آبکاری رزگلد لوکس (PVD Rose Gold)',
      ar: 'طلاء الروز غولد الفاخر (PVD Rose Gold)',
      en: 'Luxury Rose Gold Cathodic PVD',
    },
    englishName: 'PVD Luxury Rose Gold',
    colorHex: '#fb7185',
    gradientBg: 'linear-gradient(135deg, #ffe4e6 0%, #fda4af 40%, #f43f5e 80%, #9f1239 100%)',
    specularClass: 'specular-rosegold',
    pvdCoated: true,
    scratchResistance: {
      fa: 'بسیار بالا',
      ar: 'عالي جداً',
      en: 'Very High',
    },
    reflectionType: {
      fa: 'انعکاس گرم لوکس و صیقلی',
      ar: 'انعكاس دافئ ومصقول فاخر',
      en: 'Warm Luster Polish',
    },
    description: {
      fa: 'ترکیب نیترید تیتانیوم و کربونیترید زیرکونیوم برای خلق تناژ رنگی گرم و اشرافی رزگلد با شفافیت بی‌نظیر.',
      ar: 'مزيج متطور من نتريد التيتانيوم والزركونيوم لإنتاج لون الروز غولد الأرستقراطي الدافئ بلمعان مبهر.',
      en: 'Titanium-Zirconium carbonitride vacuum deposition creating an opulent warm rose-gold hue highly favored in contemporary luxury residences.',
    },
    popularFor: {
      fa: 'پنت‌هاوس‌ها، گالری‌های ساعت و جواهر، هتل‌های ۵ ستاره و اسپا',
      ar: 'البنتهاوس، معارض الساعات والمجوهرات، الفنادق والسبا',
      en: 'Penthouses, horology boutiques, 5-star hotel lounges & wellness suites',
    },
  },
  {
    id: 'pvd-black',
    name: {
      fa: 'مشکی تیتانیوم دودی (PVD Titanium Black)',
      ar: 'أسود تيتانيوم دخاني فاخر (PVD Black)',
      en: 'Titanium Black / Anthracite PVD',
    },
    englishName: 'PVD Titanium Black',
    colorHex: '#334155',
    gradientBg: 'linear-gradient(135deg, #64748b 0%, #334155 50%, #0f172a 100%)',
    specularClass: 'specular-black',
    pvdCoated: true,
    scratchResistance: {
      fa: 'بسیار بالا (ضد لک انگشت)',
      ar: 'فائق المقاومة ومضاد لبصمات الأصابع',
      en: 'Very High (Anti-Fingerprint)',
    },
    reflectionType: {
      fa: 'مشکی کریستالی متالیک',
      ar: 'أسود كريستالي ميتاليك',
      en: 'Metallic Crystal Black',
    },
    description: {
      fa: 'پوشش کربن شبه‌الماس (DLC) و تیتانیوم اکسید مشکی، مدرن‌ترین انتخاب معماران مینیمال و های‌تک با خاصیت ضد اثر انگشت.',
      ar: 'طلاء التيتانيوم الكربوني الأسود الفاخر، الخيار المفضل للمعماريين المعاصرين مع خاصية مقاومة بصمات الأصابع.',
      en: 'Diamond-like carbon and titanium carbide deposition offering a deep architectural gunmetal/anthracite finish with anti-fingerprint surface treatment.',
    },
    popularFor: {
      fa: 'درب‌های مدرن، سازه‌های لندسکیپ، کافه‌های ترند و رادیاتورهای مشکی مات',
      ar: 'الأبواب العصرية، تصاميم اللاندسكيب، المقاهي الراقية والمشعات المودرن',
      en: 'High-tech minimalist entrances, outdoor pergolas, designer cafes & dark radiator panels',
    },
  },
  {
    id: 'super-mirror',
    name: {
      fa: 'نقره‌ای آینه‌ای سوپر میرور (Super Mirror 8K)',
      ar: 'مرآة فضية فائقة النقاء (Super Mirror 8K)',
      en: 'Super Mirror 8K Polish',
    },
    englishName: 'Super Mirror 8K',
    colorHex: '#e2e8f0',
    gradientBg: 'linear-gradient(135deg, #ffffff 0%, #cbd5e1 45%, #94a3b8 100%)',
    specularClass: 'specular-silver',
    pvdCoated: false,
    scratchResistance: {
      fa: 'استاندارد پولیش صنعتی',
      ar: 'معياري صناعي',
      en: 'Standard High Polish',
    },
    reflectionType: {
      fa: 'آینه کامل بدون موج (شفافیت ۱۰۰٪)',
      ar: 'مرآة كاملة خالية من أي تموجات',
      en: '100% Wave-Free True Mirror',
    },
    description: {
      fa: 'پرداخت چندمرحله‌ای با نمد و خمیر پولیش گرید ۸۰۰ بدون هیچ‌گونه اعوجاج یا خطوط میکرونی، دقیقاً همانند آینه شیشه‌ای شفاف.',
      ar: 'صقل متعدد المراحل بمعجون خاص درجة ٨٠٠ ينتج انعكاساً مرآتياً تاماً بدون أي تشويش.',
      en: 'Multi-stage abrasive and felt mechanical buffing to Grade 800 paste, generating a flawless, distortion-free optical mirror reflection.',
    },
    popularFor: {
      fa: 'نرده‌های شیشه‌ای، رادیاتورهای پنلی آینه‌ای و تجهیزات لابی',
      ar: 'درابزين الزجاج، المشعات المرآتية وهياكل اللوبي',
      en: 'Glass balustrades, mirror radiator panels & elevator door skins',
    },
  },
  {
    id: 'hairline-satin',
    name: {
      fa: 'نقره‌ای خش‌دار مات (Hairline Satin No.4)',
      ar: 'فضي حريري مطفي خطي (Hairline No.4)',
      en: 'Hairline Satin No.4 Brushed',
    },
    englishName: 'Hairline Satin No.4',
    colorHex: '#94a3b8',
    gradientBg: 'linear-gradient(135deg, #e2e8f0 0%, #94a3b8 50%, #64748b 100%)',
    specularClass: 'specular-silver',
    pvdCoated: false,
    scratchResistance: {
      fa: 'عالی (خط‌وخش روزمره را نشان نمی‌دهد)',
      ar: 'ممتاز (يخفي الخدوش اليومية تماماً)',
      en: 'Excellent (Conceals Everyday Scratches)',
    },
    reflectionType: {
      fa: 'مات با خطوط ظریف میکرونی یکنواخت',
      ar: 'مطفي مع خطوط حريرية ميكرونية متناسقة',
      en: 'Uniform Micro-Linear Satin',
    },
    description: {
      fa: 'ایجاد خطوط ممتد و بی‌نهایت ظریف با سنباده‌های اتوماتیک، بسیار محبوب برای محیط‌های پرتردد به دلیل عدم جذب لک و چربی.',
      ar: 'خطوط طولية حريرية فائقة الدقة بالصنفرة الأوتوماتيكية، ممتازة للمناطق الحيوية ذات الاستخدام المتكرر.',
      en: 'Precision mechanical brushing producing continuous micro-fine linear grain. Highly durable and forgiving against routine contact and scuffs.',
    },
    popularFor: {
      fa: 'هندریل‌های پرتردد، کابین آسانسور، تجهیزات آشپزخانه صنعتی و بیمارستانی',
      ar: 'مقابض السلالم، كبائن المصاعد، معدات المستشفيات والمطابخ الفندقية',
      en: 'Heavy-traffic handrails, elevator cabs, commercial kitchens & clinical equipment',
    },
  },
  {
    id: 'pvd-bronze',
    name: {
      fa: 'برنز و شامپاینی اشرافی (Champagne Bronze PVD)',
      ar: 'برونز وشامباني ملكي (Champagne Bronze PVD)',
      en: 'Champagne Bronze Cathodic PVD',
    },
    englishName: 'Champagne Bronze PVD',
    colorHex: '#b45309',
    gradientBg: 'linear-gradient(135deg, #fef3c7 0%, #f59e0b 40%, #b45309 80%, #78350f 100%)',
    specularClass: 'specular-bronze',
    pvdCoated: true,
    scratchResistance: {
      fa: 'بسیار بالا',
      ar: 'عالي جداً',
      en: 'Very High',
    },
    reflectionType: {
      fa: 'گرم، مات یا براق با تم کهربایی',
      ar: 'دافئ، مطفي أو لامع بلمسة كهرمانية',
      en: 'Warm Amber-Infused Metallic',
    },
    description: {
      fa: 'پوشش لوکس با تلفیق تیتانیوم و برنز کاتدی، هارمونی فوق‌العاده با سنگ‌های مرمر کرم و چوب‌های طبیعی گردو.',
      ar: 'طلاء ملكي يدمج التيتانيوم مع لمسات البرونز، ينسجم بشكل مذهل مع الرخام والخشب الطبيعي.',
      en: 'Refined cathodic deposition fusing champagne gold with warm bronze undertones, matching seamlessly with Italian marble and walnut woodwork.',
    },
    popularFor: {
      fa: 'پارتیشن‌های دکوراتیو، کاور ستون‌های لابی و لوسترهای معلق',
      ar: 'القواطع الديكورية، تلبيس أعمدة اللوبي والثريات المعلقة',
      en: 'Parametric privacy screens, lobby column claddings & custom suspended chandeliers',
    },
  },
];

export const FEATURED_PROJECTS: ProjectItem[] = [
  {
    id: 'proj-1',
    title: {
      fa: 'عمارت دوبلکس نیاوران - نرده راه‌پله تمام استیل پروفیلی ۴ خطه با پایه‌های قوطی ۴۰×۴۰ و هندریل مستطیلی',
      ar: 'قصر نياوران الدوبلكس الفاخر - درابزين درج مقطع ٤ خطوط من ستانلس ستيل ۳۰۴ وقوائم ٤٠×٤٠',
      en: 'Niavaran Luxury Duplex: 4-Line Square Profile Stainless Stair Railing & 40x40 Posts',
    },
    category: 'railings_doors',
    client: {
      fa: 'شرکت مهندسی و سرمایه‌گذاری بام سازان البرز',
      ar: 'شركة البرز للاستثمار والتطوير العقاري',
      en: 'Alborz Luxury Real Estate Developers',
    },
    location: {
      fa: 'تهران، نیاوران، خیابان یاسر',
      ar: 'طهران، نياوران',
      en: 'Niavaran, Tehran',
    },
    year: '۱۴۰۳ (2024)',
    mainImage: luxuryStairRailingImg,
    additionalImages: [
      luxuryStairRailingImg,
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
    ],
    beforeImage: 'https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=1200&q=80',
    afterImage: luxuryStairRailingImg,
    description: {
      fa: 'طراحی، مدلسازی سه‌بعدی و اجرای نرده راه‌پله تمام استنلس استیل ۳۰۴ نگیر سوپر میرور با پایه‌های قوطی ۴۰×۴۰ میلی‌متر، دستک مستطیلی با اتصالات مفصلی زاویه ۹۰ درجه پاگرد و ۴ ردیف حفاظ پروفیلی افقی سرتاسری بر روی پله‌های مرمریت مشکی با بالاترین استاندارد نظام مهندسی و آتش‌نشانی.',
      ar: 'تصميم وتنفيذ درابزين درج دوبلكس من ستانلس ستيل ۳۰۴ فائق اللمعان Super Mirror بقوائم مقطع ٤٠×٤٠ ملم وهندريل مستطيل مدمج مع ٤ خطوط حماية أفقية على درجات الرخام الأسود الفاخر وفق معايير السلامة العالمية.',
      en: 'Custom architectural engineering and fabrication of an ultra-luxury duplex staircase balustrade featuring heavy-duty 40x40mm AISI 304 mirror-finish square posts, precision 90-degree landing miters, and 4 horizontal continuous profile safety bars anchored onto polished black marble treads.',
    },
    alloyUsed: {
      fa: 'استنلس استیل ۳۰۴ نگیر سوپر میرور ۸K (ضمانت کتبی متالورژی)',
      ar: 'ستانلس ستيل ۳۰۴ غير مغناطيسي سوبر ميرور 8K',
      en: 'Certified AISI 304 Austenitic 8K Super Mirror Steel',
    },
    finish: {
      fa: 'سوپر میرور نقره‌ای کروم ۸K (پولیش آینه‌ای صددرصد بدون خط)',
      ar: 'صقل مرآتي فائق النقاء 8K كروم فضي',
      en: '8K Super Mirror Chrome Silver Finish',
    },
    duration: {
      fa: '۱۸ روز کاری (از نقشه‌برداری لیزری تا تحویل قطعی)',
      ar: '١٨ يوم عمل من المسح الليزري حتى التسليم',
      en: '18 Business Days from Laser Survey to Handover',
    },
    keyFeatures: [
      { fa: 'پایه‌های قوطی ۴۰×۴۰ و حفاظ پروفیلی ۴ خطه صلب', ar: 'قوائم ٤٠×٤٠ و ٤ خطوط حماية أفقية متينة', en: 'Heavy 40x40mm square posts with 4 rigid profile rails' },
      { fa: 'اتصالات مفصلی ۹۰ درجه پاگرد بدون نیاز به جوشکاری در محل', ar: 'وصلات زاوية ٩٠ درجة ميكانيكية بدون لحام بالموقع', en: 'Precision 90-degree landing miter joints' },
      { fa: 'تاییدیه رسمی آتش‌نشانی و تحمل بار جانبی ۲۵۰ کیلوگرم', ar: 'مطابق لاشتراطات الدفاع المدني وتحمل ٢٥٠ كجم/م', en: 'Building safety certified with 250 kg/m lateral load' },
    ],
  },
  {
    id: 'proj-marzdaran-soltani',
    title: {
      fa: 'عمارت ویلایی خانم مهندس سلطانی اقدم (تهران، مرزداران) - نرده راه‌پله و وید دوبلکس مدرن با فریم‌های هندسی مشکی مات و PVD طلایی تیتانیوم و هندریل چوب گردو',
      ar: 'فيلا المهندسة سلطاني أقدم (طهران، مرزداران) - درابزين درج دوبلكس فاخر بإطارات هندسية سوداء مع ذهب تيتانيوم PVD ومسند خشب الجوز',
      en: 'Tehran Marzdaran Villa (Eng. Soltani Aghdam): Modern Duplex Stair Balustrade with Matte Black & Titanium Gold Geometric Frames',
    },
    category: 'railings_doors',
    client: {
      fa: 'سرکار خانم مهندس سلطانی اقدم (ویلای شخصی)',
      ar: 'المهندسة سلطاني أقدم (الفيلا الخاصة)',
      en: 'Eng. Soltani Aghdam (Private Villa Estate)',
    },
    location: {
      fa: 'تهران، مرزداران، شهرک ویلایی',
      ar: 'طهران، مرزداران، إيران',
      en: 'Marzdaran, Tehran, Iran',
    },
    year: '۱۴۰۳ (2024)',
    mainImage: marzdaranVillaSoltaniImg,
    additionalImages: [
      soltaniCloseupImg,
      soltaniWideImg,
      soltaniCinemaImg,
      soltaniTopviewImg,
      soltaniThreequarterImg,
    ],
    beforeImage: 'https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=1200&q=80',
    afterImage: marzdaranVillaSoltaniImg,
    description: {
      fa: 'طراحی، مدلسازی سه‌بعدی و ساخت اختصاصی نرده راه‌پله و وید دوبلکس عمارت ویلایی سرکار خانم مهندس سلطانی اقدم در مرزداران تهران. این اثر با ترکیب جسورانه فریم‌های هندسی توخالی مستطیلی با پوشش تیتانیوم طلایی ۲۴ عیار PVD، اسپیندل‌های عمودی مشکی مات و هندریل ارگونومیک چوب طبیعی گردوی تیره اجرا گردیده است. پایه‌ها و گلویی‌های تزئینی تراشکاری‌شده برنجی در نقطه اتصال به سنگ‌های مرمر کلکته سفید با نورپردازی مخفی خطی، هماهنگی فوق‌العاده‌ای در فضای نشیمن و وید دو طبقه پدید آورده‌اند.',
      ar: 'تصميم وهندسة درابزين درج دوبلكس فاخر لفيلا المهندسة سلطاني أقدم في مرزداران بطهران. يجمع بين فخامة الإطارات الهندسية المطلية بالذهب عيار ٢٤ بتقنية PVD، والقوائم السوداء المطفية ومسند خشب الجوز الداكن على رخام كلكتا الأبيض المضيء.',
      en: 'Bespoke architectural engineering and installation of modern duplex staircase and gallery balustrades for Eng. Soltani Aghdam Villa in Marzdaran, Tehran. Features open-box rectangular geometric frames in 24K titanium gold PVD, architectural matte black spindles, sculpted dark walnut timber handrails, and precision brass collar ferrules on illuminated Calacatta marble steps.',
    },
    alloyUsed: {
      fa: 'استنلس استیل ۳۰۴ نگیر آنتی‌اکسید با کوتینگ کاتدی PVD طلایی تیتانیوم + رنگ کوره الکترواستاتیک مشکی + شمش برنج',
      ar: 'ستانلس ستيل ۳۰۴ مع طلاء تيتانيوم PVD ذهبي، دهان كهرستاتي أسود ونحاس طبيعي',
      en: 'AISI 304 Stainless Steel + 24K Titanium Gold PVD + Architectural Matte Black Powder Coat + Lathed Brass',
    },
    finish: {
      fa: 'مشکی مات الکترواستاتیک ضدخش + طلایی براق تیتانیوم PVD بدون رد اثر انگشت + چوب گردوی روغنی',
      ar: 'أسود مطفي مقاوم للخدش مع ذهب تيتانيوم PVD براق ومسند خشب جوز معالج بالزيت الطبيعي',
      en: 'Architectural Matte Black Powder Coat with 24K Specular Gold PVD Accents & Oiled Walnut Handrail',
    },
    duration: {
      fa: '۲۵ روز کاری (مدلسازی ۳D، برش لیزر CNC، کوتینگ PVD و نصب بدون تخریب در محل)',
      ar: '٢٥ يوم عمل (تصميم ثلاثي الأبعاد، قص ليزر CNC، طلاء PVD وتثبيت احترافي)',
      en: '25 Business Days from 3D Laser Scanning to Complete Turnkey Installation',
    },
    keyFeatures: [
      { fa: 'فریم‌های مستطیلی هندسی دو لایه با کوتینگ تیتانیوم طلایی PVD مقاوم در برابر سایش و خط و خش', ar: 'إطارات هندسية مستطيلة مزدوجة بطلاء PVD ذهبي فائق الصلابة', en: 'Dual-border rectangular geometric frames with ultra-durable 24K titanium gold PVD coating' },
      { fa: 'هندریل قوسی یکپارچه از چوب طبیعی گردوی تیره فرآوری‌شده ضد رطوبت با پرداخت ابریشمی', ar: 'مسند يدوي منحني من خشب الجوز الداكن الطبيعي المعالج', en: 'Continuous sculpted solid dark walnut handrail with satin smooth touch' },
      { fa: 'پایه‌ها و گلویی‌های تزئینی تراش برنجی در نقاط اتصال با کف‌پله‌های مرمر روشن', ar: 'حلقات وقواعد نحاسية مخرطة بالكامل بالتحكم الرقمي', en: 'CNC lathed brass decorative ferrules with concealed anchoring into marble treads' },
      { fa: 'ضمانت کتبی ۱۵ ساله ثبات رنگ کوتینگ PVD، عدم زنگ‌زدگی و پایداری هندریل چوبی', ar: 'ضمان كِتابي ١٥ عاماً لثبات الألوان ومقاومة الصدأ وسلامة الخشب', en: '15-Year written warranty covering PVD color stability and structural integrity' },
    ],
  },
  {
    id: 'proj-masoudi-isfahan',
    title: {
      fa: 'عمارت ویلایی دکتر مسعودی (اصفهان) - نرده راه‌پله قوسی دوبلکس استیل ۳۱۶ سوپرمیرور با ستون استارت منشور کریستال فاست‌دار و فرش تشریفاتی',
      ar: 'فيلا د. مسعودي الفاخرة (أصفهان) - درابزين درج دوبلكس منحني ستانلس ستيل ۳۱۶ سوبر بولش مع عامود بداية بلوري منشوري هندسي',
      en: 'Isfahan Dr. Masoudi Villa: Super Mirror AISI 316 Curved Duplex Staircase Railing with Faceted Crystal Newel Post',
    },
    category: 'railings_doors',
    client: {
      fa: 'دکتر مسعودی (عمارت ویلایی شخصی)',
      ar: 'د. مسعودي (الفيلا الخاصة)',
      en: 'Dr. Masoudi (Private Villa Estate)',
    },
    location: {
      fa: 'اصفهان، شهرک ویلایی زاینده‌رود',
      ar: 'أصفهان، إيران',
      en: 'Isfahan, Iran',
    },
    year: '۱۴۰۳ (2024)',
    mainImage: masoudiVillaIsfahanImg,
    additionalImages: [
      masoudiCloseupImg,
      masoudiWideImg,
      masoudiCinemaImg,
      masoudiTopviewImg,
      masoudiThreequarterImg,
    ],
    beforeImage: 'https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=1200&q=80',
    afterImage: masoudiVillaIsfahanImg,
    description: {
      fa: 'طراحی، مدلسازی سه‌بعدی و ساخت اختصاصی نرده راه‌پله قوسی دوبلکس متقارن عمارت ویلایی دکتر مسعودی در اصفهان با استنلس استیل ۳۱۶ نگیر سوپر پولیش آینه‌ای (Super Mirror 8K). مجهز به ستون استارت شاه‌نشین منشوری تراش‌خورده کریستال اپتیکال K9 با سرستون گوی فاست‌دار، ردیف‌های پیوسته لوله‌ای چندخطه افقی بدون شیشه با اتصالات انحنایی مهندسی‌شده و هارمونی بی‌نظیر روی سنگ مرمریت مشکی و فرش تشریفاتی قرمز.',
      ar: 'تصميم وهندسة درابزين درج دوبلكس فاخر لفيلا الدكتور مسعودي في أصفهان من ستانلس ستيل ۳۱۶ نقي بتشطيب سوبر بولش فضي عاكس كالمراة مع عامود بداية كريستالي فخم.',
      en: 'Bespoke architectural engineering of an ultra-luxury bifurcating curved duplex staircase balustrade in AISI 316 super-mirror polished silver stainless steel for Dr. Masoudi Villa in Isfahan. Features faceted K9 optical crystal newel starter posts and multi-line tubular profiles.',
    },
    alloyUsed: {
      fa: 'استنلس استیل ۳۱۶ نگیر مارین گرید سوپر پولیش آینه‌ای (Super Mirror Finish #8) + بلور K9',
      ar: 'ستانلس ستيل ۳۱۶ بحري فائق اللمعان عاكس كالمراة + كريستال K9',
      en: 'AISI 316 Marine-Grade Austenitic Stainless Steel with Super Mirror #8 Polish + K9 Crystal',
    },
    finish: {
      fa: 'نقره‌ای کروم آینه‌ای براق سوپرمیرور ۸K (Super Mirror Chrome) با بازتاب کامل و ضدلک',
      ar: 'فضي لامع عاكس كالمراة فائق الجودة 8K',
      en: 'High-Luster Specular Mirror Chrome Silver (Non-tarnishing)',
    },
    duration: {
      fa: '۲۴ روز کاری (طراحی ۳D، خم‌کاری سه‌بعدی CNC و نصب فیتینگ توکار بدون جوشکاری در محل)',
      ar: '٢٤ يوم عمل (تصميم ثلاثي الأبعاد، انحناء CNC وتثبيت بدون لحام)',
      en: '24 Business Days from 3D Laser Scan to Turnkey Delivery',
    },
    keyFeatures: [
      { fa: 'ستون استارت شاه‌نشین منشوری کریستال اپتیکال K9 با سرستون گوی فاست‌دار تراش الماسی', ar: 'عامود بداية ملكي من الكريستال البصري المنشوري K9 مع رأس مضلع', en: 'Monumental faceted optical crystal newel post with diamond-cut sphere finial' },
      { fa: 'خم‌کاری سه‌بعدی تمام‌استیل بدون جوشکاری در محل با اتصالات مخفی هیلتی', ar: 'انحناء ثلاثي الأبعاد دقيق للغاية للستانلس ستيل بدون لحام في الموقع', en: 'Precision 3D curved stainless tubular fabrication with seamless mechanical connections' },
      { fa: 'ضمانت کتبی ۱۵ ساله مقاومت در برابر زنگ‌زدگی، مات شدن و ماندگاری پولیش آینه‌ای', ar: 'ضمان كِتابي ١٥ عاماً لمقاومة الصدأ والحفاظ على اللمعان الفضي كالمراة', en: '15-Year rust-proof and mirror-luster written warranty' },
    ],
  },
  {
    id: 'proj-gold-palace',
    title: {
      fa: 'کاخ ویلای سلطنتی لواسان - نرده راه‌پله مجلل استیل نقره‌ای سوپر پولیش براق با ستون استارت تراش هندسی و هندریل تمام‌فلزی',
      ar: 'قصر لواسان الملكي - درابزين درج ستانلس ستيل فضي سوبر بولش عاكس مع عامود بداية هندسي منقوش وهندريل معدني كامل',
      en: 'Lavasan Royal Palace: Ultra-Luxury Mirror Silver Polished Stainless Steel Stair Railing with Geometric Faceted Newel Post',
    },
    category: 'railings_doors',
    client: {
      fa: 'هلدینگ ساختمانی و معماری رویال پالاس',
      ar: 'مجموعة رويال بالاس للتطوير العقاري الفاخر',
      en: 'Royal Palace Luxury Estates',
    },
    location: {
      fa: 'تهران، لواسان، باستی هیلز',
      ar: 'طهران، لواسان، باستي هيلز',
      en: 'Basti Hills, Lavasan, Tehran',
    },
    year: '۱۴۰۳ (2024)',
    mainImage: silverPalaceRailingImg,
    additionalImages: [
      silverPalaceRailingImg,
      goldPalaceRailingImg,
      goldPalaceBackupImg,
      goldPalaceLightedImg,
      luxuryStairRailingImg,
    ],
    beforeImage: 'https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=1200&q=80',
    afterImage: silverPalaceRailingImg,
    description: {
      fa: 'طراحی، مدلسازی سه‌بعدی و ساخت اختصاصی نرده راه‌پله دوبلکس سلطنتی با استنلس استیل ۳۰۴ نگیر سوپر پولیش آینه‌ای (Mirror Polish نقره‌ای براق). مجهز به ستون استارت شاه‌نشین بازطراحی‌شده با ستون شیاردار مارپیچ و سرستون تراش‌خورده هندسی کریستالی فاست‌دار، ردیف‌های نرده لوله‌ای چندخطه افقی تمام‌استیل نقره‌ای براق بدون شیشه با اتصالات انحنایی قو (Swan-Neck) و هارمونی چشم‌نواز روی سنگ مرمریت مشکی مارکینا.',
      ar: 'تصميم وهندسة درابزين درج دوبلكس فاخر من ستانلس ستيل ۳۰۴ نقي بتشطيب سوبر بولش فضي عاكس كالمراة. يتميز بعامود بداية فخم بتصميم حلزوني ورأس هندسي مضلع، مع مسارات متوازية متطابقة تماماً من الأنابيب الفضية البراقة بدون زجاج على رخام نيرو ماركينا الأسود.',
      en: 'Bespoke architectural engineering of an ultra-luxury duplex staircase balustrade in AISI 304 super-mirror polished silver stainless steel. Features a newly sculpted bespoke silver starting newel post with spiral fluting and a faceted geometric crystalline finial, twin parallel continuous all-metal silver tubular railing lines with swan-neck brackets, and high-contrast Nero Marquina black marble steps.',
    },
    alloyUsed: {
      fa: 'استنلس استیل ۳۰۴ نگیر دکوراتیو سوپر پولیش آینه‌ای (Super Mirror Finish #8)',
      ar: 'ستانلس ستيل ۳۰۴ فائق اللمعان عاكس كالمراة',
      en: 'AISI 304 Austenitic Stainless Steel with Super Mirror #8 Polish',
    },
    finish: {
      fa: 'نقره‌ای کروم آینه‌ای براق (Mirror Chrome Silver) بدون خط و خش با بازتاب کامل',
      ar: 'فضي لامع عاكس كالمراة فائق الجودة',
      en: 'High-Luster Specular Mirror Chrome Silver (Non-tarnishing)',
    },
    duration: {
      fa: '۲۲ روز کاری (طراحی ۳D، تراشکاری CNC و نصب فیتینگ بدون جوشکاری در محل)',
      ar: '٢٢ يوم عمل (تصميم ثلاثي الأبعاد، خراطة CNC وتثبيت بدون لحام)',
      en: '22 Business Days from 3D Scan to Turnkey Delivery',
    },
    keyFeatures: [
      { fa: 'ستون استارت نردبانی بازطراحی‌شده با بدنه مارپیچ و سرستون تراش هندسی فاست‌دار', ar: 'عامود بداية فاخر بتصميم حلزوني ورأس هندسي مضلع', en: 'Bespoke sculpted silver newel post with spiral fluting & faceted geometric finial' },
      { fa: 'ساختار تمام‌استیل نقره‌ای براق پیوسته در هر دو سمت راه‌پله (بدون پنل شیشه‌ای)', ar: 'مسارات متوازية متطابقة تماماً من الستانلس ستيل الفضي اللامع بدون زجاج', en: 'Harmonious all-metal mirror silver tubular railing in both parallel rows without glass' },
      { fa: 'ضمانت کتبی مادام‌العمر ضدزنگ و مقاومت در برابر کدر شدن پولیش آینه‌ای', ar: 'ضمان دائم لمقاومة الصدأ والحفاظ على اللمعان الفضي', en: 'Lifetime rust-proof and mirror-luster written warranty' },
    ],
  },
  {
    id: 'proj-gold-lighted',
    title: {
      fa: 'پنت‌هاوس عمارت دیپلماتیک فرمانیه - نرده راه‌پله استیل طلایی PVD با ستون استارت کروی CNC و هندریل دیواری نوری',
      ar: 'بنتهاوس قصر فرمانية الدبلوماسي - درابزين درج ستانلس ستيل PVD ذهبي مع عامود كروي وهندريل جداري بإضاءة LED',
      en: 'Farmaniyeh Diplomatic Penthouse: Bespoke 24K Gold PVD Stair Railing with Spherical CNC Newel Post & Lighted Wall Rail',
    },
    category: 'railings_doors',
    client: {
      fa: 'دفتر معماری و طراحی داخلی لوکس هیراد',
      ar: 'مكتب هيراد للتصميم المعماري والديكور الداخلي',
      en: 'Hirad Luxury Interior & Architecture Studio',
    },
    location: {
      fa: 'تهران، فرمانیه، خیابان سنبل',
      ar: 'طهران، فرمانية',
      en: 'Farmaniyeh, Tehran',
    },
    year: '۱۴۰۳ (2024)',
    mainImage: goldPalaceLightedImg,
    additionalImages: [
      goldPalaceLightedImg,
      goldPalaceRailingImg,
      luxuryStairRailingImg,
    ],
    beforeImage: 'https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=1200&q=80',
    afterImage: goldPalaceLightedImg,
    description: {
      fa: 'طراحی، مدلسازی سه‌بعدی و ساخت اختصاصی نرده راه‌پله سلطنتی استنلس استیل ۳۰۴ نگیر با پوشش PVD طلایی تیتانیوم ۲۴ عیار. مجهز به ستون استارت هنری با گوی‌های متالیک تراش‌خورده CNC و رینگ‌های دیسکی مطبق، اتصالات خم نرم قو (Swan-Neck)، سه خط لوله هندریل سرتاسری و هندریل دیواری مکمل با نورپردازی مخفی خطی LED روی سنگ مرمریت مشکی مارکینا.',
      ar: 'تصميم وتنفيذ درابزين درج دوبلكس فاخر من ستانلس ستيل ۳۰۴ مع طلاء PVD تيتانيوم ذهبي عيار ٢٤. يتميز بعامود بداية كروي مطبق مصنع بتقنية CNC، ووصلات انحنائية متناسقة مع ٣ خطوط هندريل موازية وهندريل جداري بإضاءة LED مخفية دافئة على درجات الرخام الأسود.',
      en: 'Custom architectural engineering of a grand duplex staircase balustrade in AISI 304 stainless steel with Titanium Gold PVD finish. Features a signature CNC-turned multi-spherical starting newel post, curved swan-neck transitions connecting 3 continuous tubular rails, and a matching wall-mounted handrail with integrated warm under-glow LED illumination on Nero Marquina marble steps.',
    },
    alloyUsed: {
      fa: 'استنلس استیل ۳۰۴ نگیر دکوراتیو با پوشش تیتانیوم طلایی PVD',
      ar: 'ستانلس ستيل ۳۰۴ غير مغناطيسي مع طلاء PVD ذهبي',
      en: 'Certified AISI 304 Austenitic Steel with Titanium Gold PVD',
    },
    finish: {
      fa: 'طلایی متالیک براق تیتانیوم ۲۴ عیار PVD (ضد سایش و بدون تغییر رنگ)',
      ar: 'PVD تيتانيوم ذهبي عيار ٢٤ مقاوم للخدش والتآكل',
      en: '24K Titanium Gold PVD (Abrasion & Wear Resistant)',
    },
    duration: {
      fa: '۲۰ روز کاری (از طراحی و نقشه‌برداری لیزری تا تحویل نهایی)',
      ar: '٢٠ يوم عمل من المسح حتى التسليم',
      en: '20 Business Days from Laser Survey to Handover',
    },
    keyFeatures: [
      { fa: 'ستون استارت نردبانی اختصاصی با گوی‌ها و دیسک‌های تراش CNC', ar: 'عامود بداية فاخر بتقنية الخراطة الدقيقة CNC', en: 'Bespoke CNC-turned spherical artistic newel post' },
      { fa: 'هندریل مکمل دیواری مجهز به نورپردازی مخفی خطی LED', ar: 'هندريل جداري مكمل بإضاءة LED خطية مخفية', en: 'Matching wall handrail with integrated warm linear LED' },
      { fa: 'ضمانت کتبی ۱۵ ساله ثبات رنگ PVD تیتانیوم و استحکام سازه', ar: 'ضمان مكتوب ١٥ عاماً لثبات لون PVD وقوة التثبيت', en: '15-Year written warranty on PVD color retention' },
    ],
  },
  {
    id: 'proj-modern-capsule',
    title: {
      fa: 'ویلای مدرن لواسانات (طراحی ژاپندی) - نرده اسلیم ریتمیک استیل شامپاینی برنز با هندریل پیوسته و پله‌های معلق چوب بلوط',
      ar: 'فيلا جابانّدي العصرية الفاخرة - درابزين ستانلس ستيل شاقولي شامباني برونزي مع هندريل انسيابي ودرجات بلوط معلقة',
      en: 'Minimalist Boutique Villa: Slim Rhythmic Champagne-Bronze Stainless Steel Balustrade with Seamless Handrail & Floating Oak Treads',
    },
    category: 'railings_doors',
    client: {
      fa: 'استودیو معماری و طراحی مینیمال کوبیک (مهندس فرهمند)',
      ar: 'استوديو كوبيك للتصميم المعماري الحديث',
      en: 'Kubic Minimal Architecture & Design Studio',
    },
    location: {
      fa: 'تهران، لواسان، شهرک ویلایی سروستان',
      ar: 'طهران، لواسان',
      en: 'Sarvestan Villa Enclave, Lavasan, Tehran',
    },
    year: '۱۴۰۳ (2024)',
    mainImage: minimalVillaRailingImg,
    additionalImages: [
      minimalVillaRailingImg,
      silverPalaceRailingImg,
      goldPalaceRailingImg,
      luxuryStairRailingImg,
    ],
    beforeImage: 'https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=1200&q=80',
    afterImage: minimalVillaRailingImg,
    description: {
      fa: 'طراحی، مدلسازی پارامتریک و ساخت اختصاصی نرده راه‌پله برای ویلای مدرن و مینیمال با سبک ژاپندی (تلفیق مینیمالیسم ژاپنی و نوردیک). با استفاده از پروفیل‌های فوق‌باریک اسلیم و مقاطع بیضوی انحنادار استنلس استیل ۳۰۴ نگیر با پوشش PVD شامپاینی برنز مات خش‌دار (Satin Brushed Champagne-Bronze). سیستم نصب مخفی و اتصال یکپارچه بالسترهای ریتمیک به هندریل پیوسته بدون درز جوش اکسپوز، در توازن با پله‌های شناور چوب بلوط طبیعی و کفپوش میکروسمنت روشن.',
      ar: 'تصميم وهندسة مخصصة لدرابزين درج فيلا عصرية بأسلوب جاباندي المينيماليزم الراقي. تم استخدام مقاطع ستانلس ستيل ۳۰۴ فائقة النحافة بتشطيب PVD شامباني برونزي مطفي ناعم، مع تثبيت مخفي لخطوط الدرابزين المتتالية بانتظام هندسي متناغم مع هندريل انسيابي بدون لحامات ظاهرة على درجات خشب البلوط الطبيعي المعلقة.',
      en: 'Bespoke architectural parametric engineering and fabrication of a minimalist staircase balustrade for a contemporary Japandi boutique villa. Crafted from ultra-slender oval-profile AISI 304 austenitic stainless steel with a satin brushed Champagne-Bronze PVD finish. Features a rhythmic vertical cadence, concealed base fixings, and a seamless continuous slim handrail with invisible TIG welds, complementing natural floating white oak treads and polished microcement flooring.',
    },
    alloyUsed: {
      fa: 'استنلس استیل ۳۰۴ نگیر دکوراتیو با فینیش خش‌دار مات تیتانیوم شامپاینی برنز (PVD)',
      ar: 'ستانلس ستيل ۳۰۴ غير مغناطيسي مع طلاء PVD برونزي شامباني ناعم',
      en: 'AISI 304 Austenitic Stainless Steel with Satin Brushed Champagne-Bronze PVD',
    },
    finish: {
      fa: 'شامپاینی برنز ساتین مات (Satin Brushed Champagne Bronze PVD) ضد لک و ضد انعکاس شدید',
      ar: 'PVD شامباني برونزي ناعم مطفي مقاوم للخدش والبصمات',
      en: 'Satin Brushed Champagne Bronze PVD (Non-glare & Anti-Fingerprint)',
    },
    duration: {
      fa: '۱۴ روز کاری (طراحی سه‌بعدی میلی‌متری، آبکاری تحت خلاء PVD و نصب با اتصالات فیتینگ مخفی)',
      ar: '١٤ يوم عمل من المسح الدقيق حتى التركيب النهائي',
      en: '14 Business Days from Laser Templating to Seamless Installation',
    },
    keyFeatures: [
      { fa: 'ریتم فواصل دقیق میلی‌متری پروفیل‌های اسلیم با انحنای نرم گوشه‌ها', ar: 'تنسيق متناسق شاقولي نحيف مع انحناءات زوايا ناعمة', en: 'Precision-spaced slim vertical metal slats with soft radiused contours' },
      { fa: 'هندریل اسلیم پیوسته با اتصالات کاملاً محو و فیتینگ مهندسی مخفی', ar: 'هندريل انسيابي مستمر بتثبيت هندسي مخفي بالكامل', en: 'Continuous slim handrail with completely concealed engineered joints' },
      { fa: 'هارمونی خالص مینیمال در ترکیب با پله‌های شناور چوب بلوط روشن', ar: 'انسجام تام مع درجات خشب البلوط الطبيعي المعلقة', en: 'Pure Japandi harmony paired with floating natural oak wood treads' },
    ],
  },
  {
    id: 'proj-2',
    title: {
      fa: 'گالری طلا و جواهرات لوکس لوتوس - ویترین‌های ضدسرقت و باجه‌های امنیتی صرافی',
      ar: 'معرض مجوهرات لوتوس وصرافة النخبة - واجهات أمنية ضد الرصاص وقواطع PVD',
      en: 'Lotus High-Jewelry & Exchange: Bulletproof Vitrines & PVD Gold Fixtures',
    },
    category: 'commercial_decor',
    client: {
      fa: 'گروه بازرگانی طلا و جواهر لوتوس',
      ar: 'مجموعة لوتوس لتجارة الذهب والمجوهرات',
      en: 'Lotus Luxury Jewelry Group',
    },
    location: {
      fa: 'تهران، مرکز خرید پالادیوم زعفرانیه',
      ar: 'طهران، مجمع بالاديوم زعفرانية',
      en: 'Palladium Mall, Zafaraniyeh, Tehran',
    },
    year: '۱۴۰۳ (2024)',
    mainImage: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
    ],
    beforeImage: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
    afterImage: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80',
    description: {
      fa: 'ساخت و اجرای ویترین‌های فوق امنیتی طلافروشی با شیشه‌های ضدگلوله ۲۸ میلی‌متر، فریم‌های استیل PVD شامپاینی، قفسه‌بندی‌های معلق و پارتیشن‌های مشبک آکوستیک با قفل‌های امنیتی بیومتریک مخفی.',
      ar: 'تصنيع واجهات أمنية للمجوهرات بزجاج ضد الرصاص ٢٨ ملم وإطارات ستانلس ستيل PVD شامباني، مع رفوف معلقة وأقفال بيومترية ذكية.',
      en: 'Comprehensive fit-out including Level-3 bulletproof vitrines with 28mm multi-ply glass, champagne bronze PVD structural frames, suspended display shelves and biometric hidden vault mechanisms.',
    },
    alloyUsed: {
      fa: 'استیل ۳۰۴ دکوراتیو با گرید پولیش ۸۰۰',
      ar: 'ستانلس ستيل ٣٠٤ ديكوري بصقل ٨٠٠',
      en: 'Grade 304 with Grade 800 Polish & PVD',
    },
    finish: {
      fa: 'آبکاری PVD تیتانیوم شامپاینی و رزگلد',
      ar: 'طلاء PVD شامباني وروز غولد',
      en: 'Champagne Bronze & Rose Gold PVD',
    },
    duration: {
      fa: '۲۴ روز کاری',
      ar: '٢٤ يوم عمل',
      en: '24 Business Days',
    },
    keyFeatures: [
      { fa: 'شیشه‌های ضدگلوله استاندارد NIJ Level III-A', ar: 'زجاج ضد الرصاص معيار NIJ III-A', en: 'NIJ Level III-A ballistic rated' },
      { fa: 'نورپردازی خطی مخفی CRI 98 برای جلوه واقعی طلا', ar: 'إضاءة مخفية CRI 98 لإبراز بريق الذهب', en: 'Integrated CRI 98 museum-grade LED' },
      { fa: 'گارانتی ۱۵ ساله رنگ و اتصالات مهندسی', ar: 'ضمان ١٥ عاماً للون واللحامات', en: '15-Year Structural & Color Guarantee' },
    ],
  },
  {
    id: 'proj-3',
    title: {
      fa: 'ویلای فوق لوکس لواسان - آبنماهای کرتین، پرگولا استیل ۳۱۶ و آشپزخانه فضای باز',
      ar: 'فيلا لواسان الفاخرة - شلالات مسابح، برغولا ستانلس ستيل ٣١٦ ومطبخ خارجي',
      en: 'Lavasan Royal Villa: Marine 316 Pool Waterfalls, Pergola & Outdoor Kitchen',
    },
    category: 'landscaping',
    client: {
      fa: 'پروژه خصوصی مهندس فرهمند',
      ar: 'مشروع خاص - المهندس فرهمند',
      en: 'Private Luxury Estate (Eng. Farahmand)',
    },
    location: {
      fa: 'لواسان، باستی هیلز',
      ar: 'لواسان، طهران',
      en: 'Basti Hills, Lavasan',
    },
    year: '۱۴۰۳ (2024)',
    mainImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
    ],
    description: {
      fa: 'اجرای آبنمای پرده‌ای استیل ۳۱۶ با طول ۴ متر با ریزش خطی یکنواخت، پرگولای استیل دکوراتیو با سقف شیشه‌ای لمینت، آشپزخانه و باربیکیو مدولار استیل با گریل گازی توکار و مبلمان معلق نشیمن استخری.',
      ar: 'تنفيذ شلال ستانلس ستيل ٣١٦ بطول ٤ أمتار بتدفق ناعم، برغولا بسقف زجاجي مصفح، مطبخ شواء خارجي متكامل ومقاعد استرخاء معلقة.',
      en: '4-meter seamless marine 316 laminar water curtain, structural stainless outdoor pergola with laminated glass canopy, custom modular BBQ island and heavy suspended poolside daybeds.',
    },
    alloyUsed: {
      fa: 'استنلس استیل ۳۱۶ مارین گرید (ضد کلر و رطوبت)',
      ar: 'ستانلس ستيل ٣١٦ بحري (مقاوم للكلور والرطوبة)',
      en: 'Pure Austenitic 316 Marine Grade',
    },
    finish: {
      fa: 'الکتروپولیش بهداشتی + خش‌دار ساتن',
      ar: 'صقل كهربائي + حريري ساتان',
      en: 'Electropolished & Satin Hairline No.4',
    },
    duration: {
      fa: '۲۸ روز کاری',
      ar: '٢٨ يوم عمل',
      en: '28 Business Days',
    },
    keyFeatures: [
      { fa: 'مقاومت ۱۰۰٪ در برابر گاز کلر و اسیدهای تصفیه استخر', ar: 'مقاومة تامة للكلور ومياه المسابح', en: '100% Chlorine & Saltwater Immune' },
      { fa: 'عایق‌بندی کامل حرارتی آشپزخانه فضای باز', ar: 'عزل حراري كامل لمطبخ الشواء', en: 'Dual-wall insulated BBQ island' },
      { fa: 'ضمانت ۱۵ ساله عدم زنگ‌زدگی در فضای باز', ar: 'ضمان ١٥ عاماً ضد الصدأ والتآكل', en: '15-Year Outdoor Weather Guarantee' },
    ],
  },
  {
    id: 'proj-4',
    title: {
      fa: 'مجتمع داروسازی و کلین‌روم سینا دارو - سینک‌های اسکراب جراحی و پس‌باکس هوشمند',
      ar: 'مصانع سينا الدوائية - أحواض تعقيم جراحي وصناديق نقل العينات للكلين روم',
      en: 'Sina Pharma Cleanrooms: Surgical Scrub Sinks & Dynamic HEPA Pass-Boxes',
    },
    category: 'medical_lab',
    client: {
      fa: 'شرکت داروسازی سینا دارو',
      ar: 'مجموعة سينا للصناعات الدوائية',
      en: 'Sina Pharmaceutical Holdings',
    },
    location: {
      fa: 'تهران، شهرک دارویی برکت',
      ar: 'مدينة بركت للصناعات الدوائية',
      en: 'Barekat Pharma Industrial Zone',
    },
    year: '۱۴۰۲ (2023)',
    mainImage: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80',
    ],
    description: {
      fa: 'ساخت و تجهیز ۱۲ ایستگاه سینک اسکراب ۲ و ۳ نفره تمام الکترونیک با آبکاری الکتروپولیش بدون درز، ۲۴ دستگاه پس‌باکس هوشمند مجهز به لامپ UV-C و فیلتر هپا H14 و کمدهای نگهداری تجهیزات کلین‌روم طبق الزامات استاندارد GMP.',
      ar: 'تصنيع وتجهيز ١٢ محطة تعقيم جراحي إلكترونية بالكامل مع صقل كهربائي فائق، و ٢٤ صندوق تمرير ذكي مع فلاتر هيبا H14 وفق متطلبات GMP.',
      en: 'Fabrication of 12 electronic multi-station touchless scrub sinks with seamless electropolished deep bowls, alongside 24 dynamic HEPA-filtered pass-boxes certified for ISO Class 5 cleanrooms.',
    },
    alloyUsed: {
      fa: 'استنلس استیل ۳۱۶L کم‌کربن پزشکی و دارویی',
      ar: 'ستانلس ستيل ٣١٦L طبي ودوائي منخفض الكربون',
      en: 'Low-Carbon 316L (Pharma & Surgical Grade)',
    },
    finish: {
      fa: 'الکتروپولیش آینه‌ای با زبری سطح Ra < 0.4 میکرون',
      ar: 'صقل كهربائي بنعومة Ra < 0.4 ميكرون',
      en: 'Sanitary Electropolish (Ra < 0.4 µm)',
    },
    duration: {
      fa: '۴۵ روز کاری',
      ar: '٤٥ يوم عمل',
      en: '45 Business Days',
    },
    keyFeatures: [
      { fa: 'استاندارد معتبر GMP و تاییدیه رسمی سازمان غذا و دارو', ar: 'معتمد من هيئة الغذاء والدواء ومعايير GMP', en: 'GMP & FDA Biopharma Compliant' },
      { fa: 'سیستم اینترلاک الکترومغناطیسی هوشمند', ar: 'نظام إغلاق كهرومغناطيسي ذكي', en: 'Dynamic interlocking pass-through system' },
      { fa: 'ضمانت ۱۵ ساله ضدبتادین و ضدعفونی‌کننده‌های بیمارستانی', ar: 'ضمان ١٥ عاماً ضد المطهرات الكيميائية', en: '15-Year Betadine & Sterilant Immunity' },
    ],
  },
  {
    id: 'proj-5',
    title: {
      fa: 'کارخانه فرآوری لبنیات کاله - مخازن سه‌جداره استیل ۳۱۶ و پایپینگ بهداشتی',
      ar: 'مصانع كاله للألبان - خزانات معالجة ثلاثية الجدار وأنابيب صحية بأحدث لحام',
      en: 'Kalleh Dairy Processing Plant: 316 Triple-Jacket Vessels & Sanitary Piping',
    },
    category: 'industrial_parts',
    client: {
      fa: 'گروه صنایع غذایی سولیکو (کاله)',
      ar: 'مجموعة سوليكو للصناعات الغذائية (كاله)',
      en: 'Solico Group (Kalleh Dairy)',
    },
    location: {
      fa: 'مازندران، آمل',
      ar: 'مازندران، إيران',
      en: 'Amol Industrial Zone',
    },
    year: '۱۴۰۲ (2023)',
    mainImage: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    description: {
      fa: 'طراحی، مدلسازی، ساخت و نصب ۴ دستگاه مخزن سه‌جداره پروسس ۲۰,۰۰۰ لیتری استیل ۳۱۶ مجهز به ژاکت دیمپل حرارتی، عایق پشم سنگ و سیستم شستشوی خودکار CIP به همراه ۱,۲۰۰ متر لوله‌کشی بهداشتی جوش اوربیتال.',
      ar: 'تصميم وصناعة ٤ خزانات معالجة ثلاثية الجدار سعة ٢٠,٠٠٠ لتر مع غلاف ديمبل وعزل حراري ونظام غسيل CIP و ١,٢٠٠ متر من الأنابيب الصحية.',
      en: 'Engineering and installation of four 20,000-liter triple-jacketed dimple processing tanks equipped with automated CIP washheads, accompanied by 1,200m of orbital TIG-welded sanitary piping loops.',
    },
    alloyUsed: {
      fa: 'استنلس استیل ۳۱۶L بهداشتی و ۳۰۴ صنعتی',
      ar: 'ستانلس ستيل ٣١٦L صحي و ٣٠٤ صناعي',
      en: 'Sanitary 316L & Heavy Gauge 304',
    },
    finish: {
      fa: 'پرداخت آینه‌ای داخلی + اسیدشویی و پسیواسیون',
      ar: 'صقل داخلي فائق + تخميل وغسيل حمضي',
      en: 'Internal Sanitary Mirror & Chemical Passivation',
    },
    duration: {
      fa: '۶۰ روز کاری',
      ar: '٦٠ يوم عمل',
      en: '60 Business Days',
    },
    keyFeatures: [
      { fa: 'استاندارد مخازن تحت فشار ASME Section VIII', ar: 'معيار ASME لخزانات الضغط الصناعية', en: 'ASME Section VIII Code Certified' },
      { fa: 'تست ۱۰۰٪ رادیوگرافی NDT و بوروسکوپی جوش‌ها', ar: 'فحص إشعاعي NDT وبوروسكوبي شامل', en: '100% Radiographic & Borescopic NDT Inspection' },
      { fa: 'ضمانت کتبی ۱۵ ساله کارایی هیدرولیکی و مخزن', ar: 'ضمان ١٥ عاماً للكفاءة الهيدروليكية', en: '15-Year Written Hydrostatic Guarantee' },
    ],
  },
  {
    id: 'proj-6',
    title: {
      fa: 'هتل ۵ ستاره اسپیناس پالاس - رادیاتورهای دکوراتیو پنلی سوپر میرور و حوله‌خشک‌کن‌های طلایی PVD',
      ar: 'فندق سبيناس بالاس ٥ نجوم - مشعات بانوه مرآتية ومجففات مناشف PVD ذهبية',
      en: 'Espinas Palace 5-Star Hotel: Super Mirror Radiators & 24K Gold Towel Warmers',
    },
    category: 'decorative_radiators',
    client: {
      fa: 'گروه هتل‌های بین‌المللی اسپیناس',
      ar: 'مجموعة فنادق سبيناس الدولية',
      en: 'Espinas International Hotels Group',
    },
    location: {
      fa: 'تهران، سعادت‌آباد',
      ar: 'طهران، سعادت آباد',
      en: 'Saadat Abad, Tehran',
    },
    year: '۱۴۰۳ (2024)',
    mainImage: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80',
    description: {
      fa: 'طراحی و ساخت ۱۸۰ دستگاه حوله‌خشک‌کن لوکس حمام با آبکاری طلایی ۲۴ عیار PVD و ۶۵ پنل رادیاتور دکوراتیو سوپر میرور ۸K با راندمان حرارتی فوق‌العاده برای سوئیت‌های پرزیدنتال و رویال هتل اسپیناس پالاس.',
      ar: 'تصنيع ١٨٠ مجفف مناشف فاخر مطلي بـ PVD ذهبي عيار ٢٤ و ٦٥ مشعاً مرآتياً فائقة النقاء للأجنحة الملكية بفندق سبيناس بالاس.',
      en: 'Manufacturing of 180 bespoke 24K gold PVD towel warmers and 65 vertical super mirror radiator panels for presidential and royal suites, combining aesthetic luxury with high-efficiency hydronic heating.',
    },
    alloyUsed: {
      fa: 'استنلس استیل ۳۰۴ حرارتی نگیر با جوش میکروپلاسما',
      ar: 'ستانلس ستيل ٣٠٤ حراري مع لحام ميكرو بلازما',
      en: 'High-Conductivity Austenitic 304',
    },
    finish: {
      fa: 'آبکاری PVD طلایی ۲۴ عیار + سوپر میرور ۸K',
      ar: 'طلاء PVD ذهبي عيار ٢٤ + مرآة 8K',
      en: '24K Gold PVD & 8K True Mirror',
    },
    duration: {
      fa: '۴۰ روز کاری',
      ar: '٤٠ يوم عمل',
      en: '40 Business Days',
    },
    keyFeatures: [
      { fa: '۱۵ سال ضمانت تعویض بی قید و شرط', ar: 'ضمان استبدال ١٥ عاماً بدون قيد أو شرط', en: '15-Year Unconditional Replacement Warranty' },
      { fa: 'تست هیدرواستاتیک تحت فشار ۱۰ بار', ar: 'فحص ضغط هيدروستاتيكي ١٠ بار', en: '10-Bar Hydrostatic Pressure Tested' },
      { fa: 'رسوب‌ناپذیری کامل و ضد کدر شدن سطحی', ar: 'مقاوم لتراكم الكلس وتغير اللمعان', en: '100% Anti-Scaling & Luster Retaining' },
    ],
  },
  {
    id: 'proj-7',
    title: {
      fa: 'پروژه مجتمع تجاری رونیکا مال - تجهیز و ارسال ۱,۲۰۰ عدد پایه نرده پیش‌ساخته مدولار و اسپیگات استیل ۳۱۶',
      ar: 'مجمع رونيكا مول التجاري - توريد وتجهيز ١٢٠٠ قائم درابزين مسبق الصنع وسبیغوت ستانلس ستيل ٣١٦',
      en: 'Ronika Commercial Mall: 1,200 Modular Pre-Fabricated Posts & Heavy 316 Spigots',
    },
    category: 'prefab_posts',
    client: {
      fa: 'هلدینگ ساختمانی و تجاری رونیکا',
      ar: 'مجموعة رونيكا للمشاريع التجارية',
      en: 'Ronika Commercial & Mall Developments',
    },
    location: {
      fa: 'تهران، اشرفی اصفهانی',
      ar: 'طهران، مجمع رونيكا',
      en: 'Ronika Mall Complex, Tehran',
    },
    year: '۱۴۰۳ (2024)',
    mainImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80',
    ],
    beforeImage: 'https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=1200&q=80',
    afterImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    description: {
      fa: 'تولید انبوه، بسته‌بندی پالت‌بندی شده صنعتی و تحویل ۱,۲۰۰ عدد پایه استیل ۳۰۴ و ۳۱۶ شامل پایه‌های اسپیگات خودایستا شیشه و پایه‌های قوطی ۴۰×۴۰ با آبکاری PVD طلایی و دودی بدون نیاز به جوشکاری در محل با نصب رکورددار ۴۸ ساعته در ویدهای تجاری.',
      ar: 'إنتاج وتوريد ١٢٠٠ قاعدة وقائم درابزين ستانلس ستيل ٣٠٤ و ٣١٦ مسبقة الصنع مع سبیغوت زجاج وطلاء PVD، تم تركيبها بالكامل في زمن قياسي ٤٨ ساعة دون أي لحام.',
      en: 'Factory series manufacturing and palletized supply of 1,200 modular 304 and 316 posts including solid floor spigots and 40x40 box balusters in Titanium Gold and Black PVD, completed on site in record 48 hours without site welding.',
    },
    alloyUsed: {
      fa: 'استیل ۳۱۶ ریخته‌گری دقیق و ۳۰۴ ضخامت ۲ میلی‌متر',
      ar: 'ستانلس ستيل ٣١٦ صب دقيق و ٣٠٤ سماكة ٢ ملم',
      en: 'Investment Cast 316 Marine & 2.0mm Heavy 304',
    },
    finish: {
      fa: 'آبکاری PVD طلایی و تیتانیوم دودی + سوپر میرور ۸K',
      ar: 'طلاء PVD ذهبي وتيتانيوم دخاني + مرآة 8K',
      en: 'Titanium Gold & Black PVD + Super Mirror 8K',
    },
    duration: {
      fa: '۱۴ روز کاری (تولید، کنترل کیفیت و ارسال فوری)',
      ar: '١٤ يوم عمل (تصنيع، فحص جودة وشحن فوري)',
      en: '14 Business Days (Mass Production, QC & Dispatch)',
    },
    keyFeatures: [
      { fa: 'نصب سریع پلاگ اند پلی بدون نیاز به جوشکاری', ar: 'تركيب ميكانيكي سريع بدون لحام', en: '100% Weldless Plug-and-Play Quick Assembly' },
      { fa: 'مقاومت بارگذاری جانبی ۳۲۰ کیلوگرم طبق استاندارد ASTM', ar: 'تحمل ضغط جانبي ٣٢٠ كجم وفق ASTM', en: '320 kg/m Lateral Load ASTM Tested' },
      { fa: '۱۲ سال ضمانت کتبی کارخانه‌ای قطعات و آبکاری', ar: 'ضمان مصنعي ١٢ عاماً للقطع والطلاء', en: '12-Year Written Factory Warranty' },
    ],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    author: {
      fa: 'دکتر مهندس علیرضا بهرامی',
      ar: 'د. م. علي رضا بهرامي',
      en: 'Dr. Alireza Bahrami',
    },
    role: {
      fa: 'معمار ارشد و عضو هیئت مدیره شرکت مهندسی مهرازان',
      ar: 'كبير المعماريين وعضو مجلس إدارة شركة مهرازان الهندسية',
      en: 'Principal Architect & Board Member, Mehrazan Architecture',
    },
    company: {
      fa: 'پروژه‌های لوکس نیاوران و فرمانیه',
      ar: 'مشاريع نياوران وفرمانية الفاخرة',
      en: 'Niavaran & Farmaniyeh Luxury Developments',
    },
    location: {
      fa: 'تهران',
      ar: 'طهران',
      en: 'Tehran',
    },
    projectType: {
      fa: 'نرده‌های شیشه‌ای اسپیگات و درب ورودی لابی PVD',
      ar: 'درابزين زجاجي سبیغوت وأبواب لوبي PVD',
      en: 'Glass Balustrades & PVD Lobby Portal',
    },
    rating: 5,
    text: {
      fa: 'دقت اجرای اکیپ مهندسی استیلکس در برش‌های لیزری و یکنواختی آبکاری PVD طلایی کم‌نظیر است. در پروژه‌های لوکس منطقه یک، ضمانت کتبی متالوژی و تحویل طبق زمان‌بندی دقیق استیلکس خیال ما را آسوده کرد.',
      ar: 'دقة فريق ستيليكس في قطع الليزر وتناسق طلاء PVD الذهبي لا مثيل لها. في مشاريعنا الفاخرة، منحنا الضمان الخطي المعتمد والالتزام الصارم بالوقت راحة بال كاملة.',
      en: 'The execution precision of STELLEX in CNC laser cutting and high-vacuum PVD color consistency is unmatched. Their written metallurgical guarantee and on-time delivery set the benchmark for luxury architectural fabrication.',
    },
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
  },
  {
    id: 'test-2',
    author: {
      fa: 'مهندس سهراب خسروی',
      ar: 'المهندس سهراب خسروي',
      en: 'Eng. Sohrab Khosravi',
    },
    role: {
      fa: 'مدیر فنی و مهندسی تاسیسات',
      ar: 'مدير الشؤون الهندسية والمصانع',
      en: 'Chief Technical Director',
    },
    company: {
      fa: 'شرکت داروسازی بین‌المللی کاسپین',
      ar: 'شركة كاسبيان الدولية للصناعات الدوائية',
      en: 'Caspian International Pharma Group',
    },
    location: {
      fa: 'گیلان / رشت',
      ar: 'جيلان / رشت',
      en: 'Rasht BioPharma Park',
    },
    projectType: {
      fa: 'سینک‌های اسکراب الکتروپولیش و پس‌باکس‌های کلین‌روم',
      ar: 'أحواض تعقيم وصناديق نقل عينات للكلين روم',
      en: 'Electropolished Scrub Sinks & Cleanroom Pass-Boxes',
    },
    rating: 5,
    text: {
      fa: 'برای خطوط تولید دارویی، تاییدیه زبری سطح Ra < 0.4 میکرون و استیل ۳۱۶L واقعی حیاتی است. استیلکس کلیه سرتیفیکیت‌های متالوژی MTC و تست‌های NDT را به طور شفاف ارائه داد و در بازرسی GMP نمره عالی گرفت.',
      ar: 'في خطوط الإنتاج الدوائي، يعد التحقق من نعومة السطح Ra < 0.4µm وسبيكة ٣١٦L أمراً حاسماً. وفرت ستيليكس كافة شهادات التحليل واختبارات NDT باحترافية تامة ونالت إشادة المفتشين.',
      en: 'In pharmaceutical manufacturing, surface roughness below Ra 0.4µm and genuine 316L metallurgy are critical. STELLEX delivered verified MTC documentation and passed all GMP quality audits flawlessly.',
    },
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
  },
  {
    id: 'test-3',
    author: {
      fa: 'حاج مرتضی طاهری',
      ar: 'الحاج مرتضى طاهري',
      en: 'Morteza Taheri',
    },
    role: {
      fa: 'رئیس اتحادیه طلا و جواهر و مالک گالری زمرد',
      ar: 'رئيس نقابة تجار الذهب ومالك مجوهرات زمرد',
      en: 'President of Jewelry Guild & Owner of Zomorrod High-Jewelry',
    },
    company: {
      fa: 'پاساژ طلا و جواهر فرشته',
      ar: 'مجمع مجوهرات فرشتة الفاخر',
      en: 'Fereshteh Luxury Jewelry Galleria',
    },
    location: {
      fa: 'تهران، الهیه',
      ar: 'طهران، إلهية',
      en: 'Elahiye, Tehran',
    },
    projectType: {
      fa: 'ویترین‌های ضدگلوله و گالری طلا با PVD شامپاینی',
      ar: 'واجهات مجوهرات ضد الرصاص مع PVD شامباني',
      en: 'Bulletproof Jewelry Vitrines & Champagne Gold Boutique',
    },
    rating: 5,
    text: {
      fa: 'امنیت و زیبایی در صنف طلا حرف اول را می‌زند. سازه ویترین‌های استیلکس با شیشه‌های ضدگلوله و روکش طلایی، علاوه بر جلوه فوق‌العاده در شب، تاییدیه صددرصدی پلیس پیشگیری را دریافت کرد.',
      ar: 'الأمان والجمال هما الركيزتان الأساسيتان في قطاع المجوهرات. واجهات ستيليكس بزجاجها المضاد للرصاص وطلائها الذهبي منحت متجرنا أماناً مطلقاً ومظهراً مبهراً جذب كبار الزبائن.',
      en: 'Security and elegance are paramount in high-jewelry. STELLEX reinforced vitrines with bulletproof glass and champagne PVD finish gave our showroom uncompromising security along with breathtaking aesthetic allure.',
    },
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    question: {
      fa: 'چگونه می‌توانیم مطمئن شویم استیل مصرفی در پروژه اصل و نگیر (۳۰۴ یا ۳۱۶) است؟',
      ar: 'كيف يمكننا التأكد من أن الستانلس ستيل المستخدم أصلي وغير مغناطيسي (٣٠٤ أو ٣١٦)؟',
      en: 'How can we verify that the stainless steel used in our project is genuine non-magnetic 304 or 316?',
    },
    answer: {
      fa: 'گروه مهندسی استیلکس در زمان تحویل پروژه، علاوه بر ارائه برگه آنالیز متالوژی رسمی آزمایشگاه (MTC)، تست‌های حضوری شامل: ۱) تست آهنربا (عدم جذب کامل آهنربا در گریدهای آستنیتی)، ۲) تست قطره معرف شیمیایی اسید مولیبدات و ۳) دستگاه کوانتومتری پرتابل را در حضور کارفرما انجام می‌دهد.',
      ar: 'تقدم مجموعة ستيليكس شهادة التحليل الميتالورجي الرسمية (MTC) وتجري اختبارات ميدانية بحضور العميل تشمل: ١) اختبار المغناطيس، ٢) اختبار قطرة الكاشف الكيميائي للموليبدينوم، ٣) فحص مطيافي عبر جهاز كوانتومتر محمول.',
      en: 'Upon project delivery, STELLEX provides certified Mill Test Certificates (MTC) and performs on-site verification in the client presence: 1) Magnet Proximity Test (genuine 304/316 repels magnets), 2) Acid Molybdate Reagent chemical drop test, and 3) Handheld Spectrometer (XRF) elemental verification.',
    },
    category: {
      fa: 'متالوژی و آلیاژها',
      ar: 'الميتالورجيا والسبائك',
      en: 'Metallurgy & Alloys',
    },
  },
  {
    id: 'faq-2',
    question: {
      fa: 'سیاست انتخاب آلیاژ در استیلکس چیست و کاربرد استیل‌های ۳۰۴، ۲۰۱ و ۳۱۶ به چه صورت است؟',
      ar: 'ما هي معايير اختيار السبائك في ستيليكس واستخدامات 304 و 201 و 316؟',
      en: 'What is STELLEX alloy selection policy and usage of 304, 201 and 316 grades?',
    },
    answer: {
      fa: 'در استیلکس، آلیاژ مصرفی در اکثریت قریب به اتفاق پروژه‌ها استنلس استیل ۳۰۴ نگیر (Austenitic) با گارانتی کتبی ۱۰ الی ۱۵ ساله است. در بعضی موارد خاص و فضاهایی که کاملاً فاقد رطوبت هستند، برای کاهش و مدیریت هزینه‌های کارفرما از آلیاژ ۲۰۱ استفاده می‌شود. همچنین آلیاژ استیل ۳۱۶ و بالاتر صرفاً در موارد و تأسیسات صنعتی با شرایط شیمیایی خاص کاربرد دارد.',
      ar: 'في ستيليكس، السبيكة الأساسية المعتمدة في أغلبية المشاريع هي ستانلس ستيل 304 الأصلي غير المغناطيسي بضمان خطي من 10 إلى 15 عاماً. في حالات خاصة وللمساحات الجافة الخالية من الرطوبة يمكن استخدام سبيكة 201 لتقليل التكاليف، بينما تخصص سبائك 316 وما فوق للمشاريع والمنشآت الصناعية فقط.',
      en: 'At STELLEX, certified austenitic 304 stainless steel is the standard material used across the vast majority of projects, backed by a 10 to 15-year written warranty. In select dry, moisture-free indoor spaces, alloy 201 may be utilized to reduce project costs. Alloy 316 and higher grades are strictly reserved for industrial plants and chemical processing applications.',
    },
    category: {
      fa: 'متالوژی و آلیاژها',
      ar: 'الميتالورجيا والسبائك',
      en: 'Metallurgy & Alloys',
    },
  },
  {
    id: 'faq-3',
    question: {
      fa: 'آیا آبکاری طلایی PVD در برابر نور خورشید، باران‌های اسیدی و شوینده‌ها کدر یا پوسته‌پوسته می‌شود؟',
      ar: 'هل يتأثر طلاء PVD الذهبي بأشعة الشمس، الأمطار الحمضية والمنظفات؟',
      en: 'Does PVD Gold Titanium coating fade, peel or tarnish under direct sun, acid rain and detergents?',
    },
    answer: {
      fa: 'خیر. تکنولوژی PVD استیلکس از نوع لایه‌نشانی فیزیکی بخار تحت خلأ بالا (۱۰⁻⁵ تور) و در دمای ۴۰۰ درجه است که لایه نیترید تیتانیوم را با سطح کریستالی استیل پیوند مولکولی می‌دهد. این پوشش برخلاف رنگ‌های کوره‌ای یا آبکاری سنتی، هرگز پوسته نمی‌شود و با ضمانت کتبی ۱۰ الی ۱۵ ساله استیلکس در برابر اشعه UV آفتاب و باران پایدار است.',
      ar: 'كلا إطلاقاً. يتم تطبيق طلاء PVD في ستيليكس تحت تفريغ عالي وحرارة ٤٠٠ درجة ليتحد جزيئياً مع بنية الصلب. لا يتقشر إطلاقاً ومقاوم للأشعة فوق البنفسجية ومكفول بضمان خطي من ١٠ إلى ١٥ عاماً.',
      en: 'No. STELLEX cathodic PVD titanium coating is molecularly bonded inside a high-vacuum chamber at 400°C. Unlike electroplating or lacquers, it is impossible to flake or peel and comes with an official 10 to 15-year written warranty against UV fading and standard cleaners.',
    },
    category: {
      fa: 'گارانتی و خدمات',
      ar: 'الضمان والخدمات',
      en: 'Warranty & Technology',
    },
  },
  {
    id: 'faq-4',
    question: {
      fa: 'پروسه ثبت سفارش، نقشه‌برداری لیزری و زمان ساخت و نصب سازه‌ها چقدر طول می‌کشد؟',
      ar: 'كم تستغرق عملية الطلب، المسح الليزري ثلاثي الأبعاد والتصنيع والتركيب؟',
      en: 'What is the standard workflow and timeline from 3D laser survey to fabrication and final installation?',
    },
    answer: {
      fa: 'پس از ثبت درخواست اولیه، ظرف حداکثر ۲ ساعت کاری هماهنگی بازدید رایگان با متر لیزری سه‌بعدی انجام می‌شود. پس از تایید مدل ۳D و نقشه اجرایی، فرآیند ساخت در کارخانه مرکزی استیلکس بین ۷ الی ۲۰ روز کاری (بسته به متراژ و نوع پوشش PVD) زمان می‌برد و نصب نهایی توسط اکیپ‌های تخصصی در محل پروژه با تجهیزات هیلتی و پولیش نهایی انجام می‌پذیرد.',
      ar: 'بعد تسجيل الطلب، يتم التنسيق خلال ساعتين لزيارة مجانية بمسح ليزري. بعد اعتماد المخططات، يستغرق التصنيع من ٧ إلى ٢٠ يوم عمل، ويتم التركيب عبر أطقمنا المتخصصة بأحدث المعدات.',
      en: 'Following inquiry, our survey team conducts complimentary 3D laser scanning within 24 hours. After CAD/3D blueprint approval, factory CNC laser cutting and PVD coating take 7-20 business days, followed by precision installation by certified riggers.',
    },
    category: {
      fa: 'قیمت‌گذاری و برآورد',
      ar: 'الأسعار والتقدير',
      en: 'Pricing & Timelines',
    },
  },
];

export const READY_POST_MODELS: ReadyPostModel[] = [
  // ================= BESPOKE STARTER & ARCHITECTURAL POSTS =================
  {
    id: 'post-starter-geometric-blackgold',
    modelCode: 'STX-PRF-GEO-BG',
    postCategory: 'prefab',
    workClass: {
      fa: 'پایه پیش‌ساخته مدرن ژئومتریک دو رنگ (Pre-Fabricated Dual-Tone Baluster Post)',
      ar: 'قائمة مسبقة الصنع هندسية بلونين (Pre-Fabricated Dual-Tone Baluster Post)',
      en: 'Pre-Fabricated Modular Dual-Tone Geometric Baluster Post',
    },
    name: {
      fa: 'پایه پیش‌ساخته هندسی رکتنگل بلک گلد (Pre-Fabricated Geometric Black & Gold)',
      ar: 'قائمة جاهزة هندسية مستطيل أسود وذهبي (Pre-Fabricated Geometric Black & Gold)',
      en: 'Pre-Fabricated Geometric Rectangle Dual-Tone Black & Titanium Gold Baluster Post',
    },
    badge: {
      fa: 'پایه پیش‌ساخته آماده نصب سریع با کادر هندسی و تلفیق مشکی مات و طلایی ۲۴K',
      ar: 'قائمة جاهزة للتركيب الفوري بإطار هندسي يجمع بين الأسود المطفي والذهب عيار ٢٤',
      en: 'Ready Pre-Fabricated Rapid-Install Dual-Tone Velvet Black & 24K Gold Baluster',
    },
    image: starterPairBalustersImg,
    detailImages: [
      starterPairBalustersImg,
      starterTwoPostsImg,
      starterFrameBlackGoldImg,
      stairFrameBlackGoldImg,
    ],
    projectImages: [
      stairFrameBlackGoldImg,
      starterPairBalustersImg,
      starterFrameBlackGoldImg,
      luxuryStairRailingImg,
    ],
    height: '۸۵۰ الی ۹۵۰ میلی‌متر (ارتفاع استاندارد ارگونومیک راه‌پله و وید)',
    profileDimensions: {
      fa: 'کادر مستطیل توخالی هندسی ۱۴۰×۴۵۰ میلی‌متر با پروفیل مشکی مات و زهوار داخلی طلایی آینه‌ای + شفت‌های لوله‌ای ۳۲ میل',
      ar: 'إطار مستطيل مفرغ ١٤٠×٤٥٠ ملم مع قطاع أسود مطفي وحافة داخلية ذهبية + محورين أسطوانيين ٣٢ ملم',
      en: '140x450mm Open Geometric Hollow Frame with Dual-Tone Black Outer & Gold Inner Trim + 32mm Spindles',
    },
    thickness: '۲.۵ میلی‌متر گوشت پروفیل استنلس استیل ۳۰۴ + زهوار پرسی بدون درز',
    alloyGrade: {
      fa: 'استنلس استیل ۳۰۴ نگیر دکوراتیو با رنگ الکترواستاتیک مشکی کوره‌ای سوپر مات و آبکاری تحت خلأ PVD طلایی ۲۴ عیار',
      ar: 'ستانلس ستيل ٣٠٤ مع طلاء إلكتروستاتيكي أسود مطفي فاخر وطلاء PVD تيتانيوم ذهبي عيار ٢٤',
      en: 'AISI 304 Stainless Steel with Architectural Matte Black Coating & 24K Titanium Gold PVD Inlay',
    },
    finish: {
      fa: 'ترکیبی: مشکی مات مخملی ضد خش (Velvet Jet-Black) + حاشیه طلایی سوپر میرور ۸K (Specular Mirror Gold PVD)',
      ar: 'مزدوج: أسود مخملي مطفي مضاد للخدش + حواف ذهبية فائقة اللمعان كالمراة',
      en: 'Dual-Finish: Velvet Satin Matte Black with 8K Mirror Polished Gold Trim',
    },
    baseMounting: {
      fa: 'کف‌پایه مفصلی گردان ۳۶۰ درجه زاویه‌پذیر (Swivel Pivot Shoe) با اتصال پیچی مخفی مناسب شیب پله',
      ar: 'قاعدة سفلية مفصلية دوارة بزاوية متغيرة لضبط ميلان الدرج بدقة مع تثبيت مخفي',
      en: '360° Articulated Swivel Pivot Shoe with Concealed Screws for Stair Pitch Alignment',
    },
    handrailCompatibility: {
      fa: 'سدل سرپایه لولایی زاویه‌پذیر مناسب زیر دست‌انداز چوب گردو/راش، پروفیل استیل مشکی یا هندریل لوله ۵۱ طلایی',
      ar: 'حامل علوي مفصلي متوافق مع مقبض خشب طبيعي أو أنبوب ستانلس أسود/ذهبي',
      en: 'Articulated Tilting Top Saddle for Underside of Hardwood, Black Steel or 51mm Round Handrail',
    },
    infillType: {
      fa: 'نصب ریتمیک یک‌درمیان با بالسترهای اسلیم پیچ‌دار، یا نصب متوالی هندسی با فاصله ۱۰ الی ۱۲ سانتی‌متر',
      ar: 'تركيب تبادلي مع قواطع حلزونية رفيعة أو تركيب متتالي بمسافات نظامية',
      en: 'Alternating Rhythm with Slender Spindles or Continuous Modular Array',
    },
    weight: '۴.۹ کیلوگرم هر عدد',
    loadCapacity: '۳۲۰ کیلوگرم نیروی جانبی (ایمنی کامل طبق ضوابط آتش‌نشانی و نظام مهندسی)',
    warrantyYears: 15,
    standardCert: 'ASTM A554 / CE EN 12600 / ISO 9001:2015',
    includedHardware: [
      { fa: 'یراق مفصلی زیر دستک زاویه‌پذیر تمام‌فلزی طلایی', ar: 'مفصل علوي لولبي ذهبي متوافق مع زاوية مقبض اليد', en: 'Precision gold-plated articulated handrail underside pivot adapter' },
      { fa: 'کف‌پایه زاویه‌پذیر گردان ۳۶۰ درجه طلایی با پد عایق', ar: 'قاعدة تثبيت أرضية دوارة ٣٦٠ درجة ذهبية مع عازل', en: '360-degree rotating gold swivel pivot shoe with isolation pad' },
      { fa: 'رول‌پلاک‌های کاشت دقیق در سنگ مرمر و پیچ‌های استیل A4', ar: 'مسامير تثبيت دقيقة للرخام والخرسانة من الستانلس A4', en: 'A4 stainless heavy-duty mechanical marble anchor screws' },
      { fa: 'آلن رگلاژ زاویه و شیم‌های تنظیم ایستایی عمودی', ar: 'مفتاح آلن وحلقات ميكرومترية لضبط الاستقامة', en: 'Angle adjustment Allen key and vertical alignment leveling shims' },
    ],
    unitPrice: 14800000,
    linearMeterPrice: 32000000,
    description: {
      fa: 'پایه نرده هندسی رکتنگل بلک گلد یکی از ترندترین و چشم‌نوازترین پایه‌های نرده راه‌پله‌های دوبلکس معاصر و نئوکلاسیک است. کادر مستطیلی باز با ترکیب هنرمندانه رنگ مشکی مات متالیک و زهوار داخلی طلایی براق تیتانیوم PVD، نوری مطبوع را از میان خود عبور داده و با یراق‌آلات مفصلی سر و ته، با هر زاویه شیب راه‌پله بدون نیاز به جوشکاری یا برشکاری هماهنگ می‌شود.',
      ar: 'يعد عامود الدرابزين الهندسي المستطيل أسود وذهبي من أحدث التصاميم المعمارية الرائجة للسلالم الدوبلكس الفاخرة، حيث يجمع بين هدوء الأسود المطفي وبريق الذهب مع مفاصل متغيرة تناسب أي زاوية ميل للدرج بدون لحام.',
      en: 'The Geometric Rectangle Black & Gold baluster post is a premier contemporary classic. Its open rectangular silhouette framed in velvet matte black with an inner 24K titanium gold trim allows light to stream freely through the staircase. Equipped with adjustable swivel pivot brackets at both ends, it adapts seamlessly to any stair slope.',
    },
    idealFor: [
      { fa: 'راه‌پله‌های دوبلکس ویلاهای لاکچری، پنت‌هاوس‌ها و عمارت‌های نئوکلاسیک و مدرن', ar: 'سلالم الفلل الدوبلكس الفاخرة والبنتهاوس والقصور المعاصرة', en: 'Luxury villa duplex staircases, penthouses & neoclassical mansions' },
      { fa: 'پله‌های سنگ مرمر، بتن اکسپوز و سرامیک با هندریل‌های چوب تیره یا استیل مشکی', ar: 'سلالم الرخام والخشب الطبيعي مع مقبض أسود أو ذهبي', en: 'White marble or dark hardwood stairs with contrasting handrails' },
      { fa: 'طراحی‌های ترکیبی یک‌درمیان با بالسترهای ساده مشکی و طلایی', ar: 'التصاميم التبادلية الراقية مع قضبان رفيعة متناسقة', en: 'Alternating rhythmic patterns with companion slender black spindles' },
    ],
  },
  {
    id: 'post-starter-royal',
    modelCode: 'STX-STR-ROYAL-PVD',
    postCategory: 'starter',
    workClass: {
      fa: 'کلاس ۱: سلطنتی و اشرافی (Royal Palace Luxury)',
      ar: 'الفئة الأولى: كلاسيكي ملكي فاخر (Royal Palace)',
      en: 'Class 1: Royal Palace Luxury & Baroque',
    },
    name: {
      fa: 'استارتر راه‌پله سلطنتی رویال امپریال (Royal Imperial 24K Gold Starter)',
      ar: 'عامود بداية راقي للدرج رويال إمبريال ذهبي عيار ٢٤ (Royal Imperial)',
      en: 'Royal Imperial 24K Titanium Gold Staircase Starting Newel Post',
    },
    badge: {
      fa: 'ستون استارت شاه‌نشین کاخ‌ویلایی و عمارت‌های سلطنتی',
      ar: 'عامود بداية ملوكي للقصور والفلل الفاخرة',
      en: 'Signature Newel Post for Palatial Mansions',
    },
    image: starterRoyalPalaceImg,
    detailImages: [
      starterRoyalPalaceImg,
      goldPalaceRailingImg,
      goldPalaceLightedImg,
    ],
    projectImages: [
      goldPalaceRailingImg,
      goldPalaceLightedImg,
      luxuryStairRailingImg,
    ],
    height: '۱۱۵۰ الی ۱۲۵۰ میلی‌متر (ارتفاع استاندارد استارت شاه‌نشین)',
    profileDimensions: {
      fa: 'ستون با گوی‌های متالیک تراش‌خورده قطر ۱۲۰ و ۱۰۰ میل + رینگ‌های مطبق',
      ar: 'عامود ذو كرات معدنية مخرطة بقطر ١٢٠ و ١٠٠ ملم مع حلقات حلقية متدرجة',
      en: 'Multi-spherical CNC turned 120mm & 100mm spheres with tiered ring pedestal',
    },
    thickness: 'تراشکاری سالید و لوله گوشتی ۵ میلی‌متر استیل ۳۰۴ توپر سنگین',
    alloyGrade: {
      fa: 'استنلس استیل ۳۰۴ نگیر دکوراتیو با پوشش نیترید تیتانیوم ۲۴ عیار PVD',
      ar: 'ستانلس ستيل ٣٠٤ مع طلاء PVD تيتانيوم ذهبي عيار ٢٤',
      en: 'Certified AISI 304 Austenitic Steel with Titanium Gold PVD Vacuum Coating',
    },
    finish: {
      fa: 'طلایی آینه‌ای رویال سوپر پولیش تیتانیوم ۲۴ عیار (ضد کدر شدن و مقاوم در برابر سایش)',
      ar: 'PVD تيتانيوم ذهبي عيار ٢٤ فائق اللمعان كالمراة',
      en: '24K Mirror Specular Titanium Gold PVD (Abrasion & Tarnish Proof)',
    },
    baseMounting: {
      fa: 'بیس‌پلیت سنگین چدنی-استیل مهار ۵ بولته با قالپاق کاسه‌ای مطبق تراش‌خورده',
      ar: 'قاعدة تثبيت مصفحة بـ ٥ مسامير قوية مع غطاء مطبق مخرط أنيق',
      en: 'Heavy-duty 5-anchor reinforced base flange with stepped turned decorative escutcheon',
    },
    handrailCompatibility: {
      fa: 'اتصال انحنایی قو (Swan-Neck)، هندریل لوله ۵۱ یا ۷۶ طلایی و هندریل چوب راش منبت‌کاری',
      ar: 'وصلة انحنائية فخمة (Swan-Neck) أو هندريل خشب منحوت أو أنبوب ذهبي',
      en: 'Articulated swan-neck transition bracket, 51/76mm gold tube or carved hardwood',
    },
    infillType: {
      fa: 'سازگار با انواع خطوط لوله‌ای موازی تمام‌فلزی طلایی، کابل استیل و پنل‌های شیشه‌ای',
      ar: 'متوافق مع خطوط الأنابيب الذهبية المتوازية أو الزجاج أو الكوابل',
      en: 'Compatible with multi-line horizontal gold tubes, glass inlays or cables',
    },
    weight: '۹.۸ کیلوگرم (فوق‌العاده مستحکم و پایدار در برابر بارهای تکانه‌ای)',
    loadCapacity: '۴۵۰ کیلوگرم نیروی جانبی (ایمنی کامل ضربه در پای پله)',
    warrantyYears: 15,
    standardCert: 'ASTM A554 / PVD MIL-STD / CE EN 12600',
    includedHardware: [
      { fa: 'سرستون گلدانی/کروی تراش CNC قابل اتصال به هندریل', ar: 'رأس عامود كروي مخرط CNC قابل للتثبيت بالهندريل', en: 'Precision CNC-turned spherical/urn finial fitting' },
      { fa: 'قالپاق مطبق کاسه‌ای فابریک پوشش PVD طلایی', ar: 'غطاء أرضي مدرج مطلي بـ PVD ذهبي', en: 'Tiered stamped gold PVD decorative floor cover' },
      { fa: 'پک رول‌بولت‌های کاشت شیمیایی هیلتی (Hilti Chemical Anchor Kit)', ar: 'طقم مسامير تثبيت كيميائي هيلتي للرخام والخرسانة', en: 'Heavy-duty Hilti chemical masonry anchor bolts' },
      { fa: 'براکت ترنزیشن انحنایی قو تمام استیل طلایی', ar: 'وصلة انحناء إوزية من الستانلس الذهبي', en: 'All-metal mirror gold swan-neck transition adapter' },
    ],
    unitPrice: 28500000,
    linearMeterPrice: 42000000,
    description: {
      fa: 'شاهکار صنایع فلزی استیلکس برای ورودی پله‌های اشرافی و عمارت‌های سلطنتی. استارتر رویال امپریال با تراشکاری دقیق CNC گوی‌های متالیک، رینگ‌های مطبق و پوشش PVD طلایی تیتانیوم ۲۴ عیار، نقطه کانونی خیره‌کننده هر راه‌پله لوکس دوبلکس است.',
      ar: 'تحفة ستيليكس الهندسية لقصور الدرج الملكي. يتميز عامود البداية رويال إمبريال بكرات معدنية مخرطة بدقة وتقنية طلاء PVD ذهبي عيار ٢٤ تمنحه بريقاً استثنائياً وثباتاً هيكلياً فائقاً.',
      en: 'The pinnacle of architectural metalwork for palatial duplexes. Hand-crafted with precision CNC-turned spheres and coated in 24K Titanium Gold PVD, the Royal Imperial starter anchors the staircase with breathtaking majesty and structural authority.',
    },
    idealFor: [
      { fa: 'کاخ‌ویلاها، پنت‌هاوس‌های مجلل و عمارت‌های سلطنتی دوبلکس', ar: 'الفلل والقصور الملكية والدوبلكس الفاخر', en: 'Palatial estates, duplex mansions & royal penthouses' },
      { fa: 'لابی هتل‌های ۵ ستاره بین‌المللی و تالارهای تشریفاتی VIP', ar: 'ردهات فنادق الخمس نجوم وصالات كبار الشخصيات', en: '5-Star luxury hotel lobbies & VIP reception atriums' },
      { fa: 'فضاهای با تم دکوراسیون کلاسیک، باروک و نئوباروک اشرافی', ar: 'المشاريع ذات الطراز الكلاسيكي والباروكي الفخم', en: 'Interiors with neoclassical, baroque or opulent gold themes' },
    ],
  },

  {
    id: 'post-starter-minimal',
    modelCode: 'STX-STR-MIN-SLM',
    postCategory: 'starter',
    workClass: {
      fa: 'کلاس ۲: مدرن و مینیمال (Modern Minimalist & Japandi)',
      ar: 'الفئة الثانية: مودرن مينيمال (Modern Japandi)',
      en: 'Class 2: Modern Minimalist & Japandi',
    },
    name: {
      fa: 'استارتر راه‌پله مینیمال اسلیم کیوبیک نقره‌ای (Minimalist Slim Cubic Silver Starter)',
      ar: 'عامود بداية مودرن نحيف كيوبيك فضي فائق اللمعان (Minimal Slim)',
      en: 'Minimalist Slim Cubic Silver Mirror Starting Newel Post',
    },
    badge: {
      fa: 'طراحی خالص ژاپندی، خطوط هندسی پیور و سوپر میرور ۸K',
      ar: 'تصميم جابانّدي هندسي نقي بتشطيب مرآة عاكس',
      en: 'Pure Japandi Geometry with Super Mirror #8 Polish',
    },
    image: starterMinimalSlimImg,
    detailImages: [
      starterMinimalSlimImg,
      silverPalaceRailingImg,
      minimalVillaRailingImg,
    ],
    projectImages: [
      silverPalaceRailingImg,
      minimalVillaRailingImg,
      luxuryStairRailingImg,
    ],
    height: '۹۵۰ الی ۱۰۵۰ میلی‌متر (ارگونومی مدرن و کشیده)',
    profileDimensions: {
      fa: 'مقطع مربعی اسلیم ۶۰×۶۰ یا ۵۰×۵۰ میلی‌متر با گوشه‌های پخ‌خورده میکرو',
      ar: 'مقطع مربع نحيف ٦٠×٦٠ أو ٥٠×٥٠ ملم مع زوايا ميكرو ناعمة',
      en: 'Slender 60x60mm or 50x50mm square profile with micro-radiused bevels',
    },
    thickness: '۲.۵ میلی‌متر گوشت پروفیل صنعتی + کفی تقویت‌شده توکار',
    alloyGrade: {
      fa: 'استنلس استیل ۳۰۴ نگیر سوپر پولیش آینه‌ای نانو پلیمر',
      ar: 'ستانلس ستيل ٣٠٤ غير مغناطيسي تلميع مرآة فائق',
      en: 'Certified AISI 304 Super Mirror Chrome Stainless Steel (#8 Finish)',
    },
    finish: {
      fa: 'کروم نقره‌ای آینه‌ای سوپر میرور ۸K (بازتاب زلال نور و سنگ بدون کمترین موج و خش)',
      ar: 'فضي لامع عاكس كالمراة فائق الصفاء ٨K بدون تموجات',
      en: 'Ultra-Pure Super Mirror 8K Chrome Silver (Zero-distortion specular reflection)',
    },
    baseMounting: {
      fa: 'بیس‌پلیت باریک مغناطیسی بدون پیچ رو با لنگر ۴ بولته پنهان',
      ar: 'قاعدة تثبيت مغناطيسية رقيقة بدون براغي ظاهرة',
      en: 'Concealed 4-anchor structural base plate with ultra-flat magnetic snap-on cover',
    },
    handrailCompatibility: {
      fa: 'هندریل اسلیم مستطیلی ۶۰×۲۰، لوله استیل ۵۱ نقره‌ای یا چوب بلوط روشن',
      ar: 'هندريل مستطيل نحيف ٦٠×٢٠، أنبوب فضي ٥١ ملم أو خشب بلوط',
      en: 'Slim rectangular 60x20mm rail, 51mm silver round tube or floating light oak',
    },
    infillType: {
      fa: 'بالسترهای اسلیم عمودی ریتمیک، پنل‌های شیشه کریستال کلیر یا کابل‌های بکسل استیل',
      ar: 'خطوط عمودية نحيفة، ألواح زجاج كريستالي أو كوابل شد',
      en: 'Slim rhythmic vertical slats, low-iron clear glass panels or wire cables',
    },
    weight: '۶.۴ کیلوگرم',
    loadCapacity: '۳۶۰ کیلوگرم بر متر طول',
    warrantyYears: 15,
    standardCert: 'CE EN 12600 / ASTM E985 / ISO 9001',
    includedHardware: [
      { fa: 'کاور کفی مگنتی فوق باریک استیل پولیش بدون درز', ar: 'غطاء أرضي مغناطيسي فائق النحافة', en: 'Ultra-slim seamless magnetic floor cover escutcheon' },
      { fa: 'براکت اتصال سرپایه زاویه‌پذیر توکار مخفی', ar: 'حامل علوي مخفي قابل لتعديل زاوية الدرج', en: 'Concealed adjustable internal top handrail saddle' },
      { fa: 'انکر بولت‌های کاشت بتن و سنگ مرمریت استیل A4', ar: 'مسامير تثبيت قوية للخرسانة والرخام', en: 'A4 stainless precision mechanical anchor bolts' },
    ],
    unitPrice: 16800000,
    linearMeterPrice: 29000000,
    description: {
      fa: 'استارتر مینیمال اسلیم کیوبیک پاسخی مدرن به نیاز ویلاها و خانه‌های معاصر است. خطوط کشیده، زوایای دقیق میلی‌متری و پرداخت آینه‌ای نقره‌ای بی‌نقص، بدون ایجاد آشفتگی بصری، اصالت فلز ناب استیل را در راه‌پله منعکس می‌سازد.',
      ar: 'يعد عامود البداية مينيمال سليم كيوبيك الخيار المثالي للتصاميم المعاصرة وجابانّدي، حيث تتكامل خطوطه الهندسية النقية مع لمعانه الفضي لتعزيز رحابة ونقاء المكان.',
      en: 'The Minimalist Slim Cubic Starter embodies pure Japandi architecture: crisp geometric proportions, micro-radiused corners, and zero visible fasteners for an uncluttered, high-contrast entry to contemporary stairs.',
    },
    idealFor: [
      { fa: 'ویلاهای مدرن دوبلکس، پنت‌هاوس‌های مینیمال و خانه‌های هوشمند', ar: 'الفلل العصرية، البنتهاوس والمنازل الذكية', en: 'Contemporary boutique duplexes, Japandi villas & smart homes' },
      { fa: 'استودیوهای معماری، شوروم‌های دیزاین و گالری‌های مینیمال', ar: 'استوديوهات العمارة والمعارض العصرية', en: 'Design ateliers, creative studios & art galleries' },
      { fa: 'پروژه‌های با پله‌های شناور چوب بلوط، بتن اکسپوز و میکروسمنت', ar: 'السلالم المعلقة من خشب البلوط أو الميكروسمنت', en: 'Interiors featuring floating oak treads and microcement flooring' },
    ],
  },

  {
    id: 'post-starter-neoclassic',
    modelCode: 'STX-STR-NEO-FCT',
    postCategory: 'starter',
    workClass: {
      fa: 'کلاس ۳: نئوکلاسیک و آرت‌دکو (Neo-Classical & Art Deco)',
      ar: 'الفئة الثالثة: نيوكلاسيك وآرت ديكو (Neo-Classical)',
      en: 'Class 3: Neo-Classical & Art Deco Luxury',
    },
    name: {
      fa: 'استارتر نئوکلاسیک منشوری فاست‌دار (Neo-Classic Faceted Prism Starter)',
      ar: 'عامود بداية نيوكلاسيك مضلع منشوري مطلي PVD (Neo-Classic Prism)',
      en: 'Neo-Classical Faceted Prism Rose-Gold Champagne Starter Post',
    },
    badge: {
      fa: 'ستون منشوری چندوجهی با فاست‌های کریستال‌کات و فینیش رزگلد برنز',
      ar: 'عامود مضلع هندسي مع تشطيب PVD روز جولد برونزي',
      en: 'Multi-Faceted Octagonal Post with Stepped Pyramidal Finial',
    },
    image: starterNeoclassicImg,
    detailImages: [
      starterNeoclassicImg,
      goldPalaceBackupImg,
      luxuryStairRailingImg,
    ],
    projectImages: [
      luxuryStairRailingImg,
      goldPalaceBackupImg,
      silverPalaceRailingImg,
    ],
    height: '۱۱۰۰ الی ۱۲۰۰ میلی‌متر',
    profileDimensions: {
      fa: 'پروفیل هشت‌ضلعی منشوری (Octagonal Prism) قطر ۸۰ الی ۹۰ میل با سرستون هرمی',
      ar: 'مقطع ثماني الأضلاع منشوري ٨٠ إلى ٩٠ ملم مع تاج هرمي مصفح',
      en: '80-90mm Octagonal multi-faceted prism with stepped pyramidal faceted finial',
    },
    thickness: '۳.۰ میلی‌متر ورق و قطعات ریخته‌گری دقیق فاست‌دار',
    alloyGrade: {
      fa: 'استنلس استیل ۳۰۴ دکوراتیو با آبکاری تحت خلأ PVD تیتانیوم رزگلد / برنز شامپاینی',
      ar: 'ستانلس ستيل ٣٠٤ مع طلاء PVD روز غولد وبرونزي شامباني',
      en: 'AISI 304 Austenitic Steel with Satin Brushed Rose-Gold Champagne PVD',
    },
    finish: {
      fa: 'رزگلد / برنز شامپاینی ساتین مات همراه با لبه‌های پخ‌خورده براق آینه‌ای کریستالی',
      ar: 'روز جولد وبرونزي شامباني حريري مع حواف براقة عاكسة للضوء',
      en: 'Satin Brushed Champagne Bronze PVD with Diamond-Beveled Mirror Accent Facets',
    },
    baseMounting: {
      fa: 'کف‌پایه هشت‌ضلعی چندمرحله‌ای با اتصالات مهار سنگین ضدپیچش',
      ar: 'قاعدة مثمنة متعددة الطبقات بتثبيت قوي مقاوم للاهتزاز',
      en: 'Multi-tiered octagonal pedestal base with anti-torsion internal structural anchoring',
    },
    handrailCompatibility: {
      fa: 'هندریل چوب راش یا گردو گرد، هندریل لوله ۶۰ استیل و اتصالات زاویه‌دار آرت دکو',
      ar: 'هندريل خشب طبيعي مدور أو أنبوب ستانلس ٦٠ ملم',
      en: 'Molded rounded hardwood handrail, 60mm stainless profile or custom Art Deco rail',
    },
    infillType: {
      fa: 'سازگار با شبکه‌های فرفورژه مدرن استیل، نرده‌های لوله‌ای طلایی یا شیشه‌های تراش‌خورده',
      ar: 'متوافق مع الزجاج المشطوف، النقوش الليزرية والأنابيب المعدنية',
      en: 'Beveled safety glass, laser-cut geometric patterns or multi-row metal balusters',
    },
    weight: '۸.۵ کیلوگرم',
    loadCapacity: '۴۰۰ کیلوگرم بر متر طول',
    warrantyYears: 15,
    standardCert: 'DIN 18065 / ASTM A554 / ISO 9001',
    includedHardware: [
      { fa: 'سرستون هرمی هندسی فاست‌دار تراش CNC', ar: 'تاج هرمي هندسي مخرط بتقنية CNC', en: 'Stepped pyramidal geometric faceted finial cap' },
      { fa: 'کاور کفی هشت‌ضلعی مطبق رزگلد', ar: 'غطاء أرضي ثماني الأضلاع متدرج', en: 'Tiered octagonal decorative base plate collar' },
      { fa: 'مجموعه انکرهای مکانیکی فولادی با روکش ضدخوردگی', ar: 'طقم مسامير تثبيت فولادية معالجة', en: 'High-tensile corrosion-proof expansion anchor bolts' },
    ],
    unitPrice: 24800000,
    linearMeterPrice: 38000000,
    description: {
      fa: 'ترکیب اصالت معماری نئوکلاسیک با جذابیت خیره‌کننده آرت دکو. استارتر منشوری فاست‌دار استیلکس با بازی نور بر روی صفحات زاویه‌دار هشت‌ضلعی و درخشش متالیک رزگلد-برنز، راه‌پله را به یک مجسمه دکوراتیو لوکس تبدیل می‌کند.',
      ar: 'يجمع هذا العامود المضلع بين أصالة الطراز النيوكلاسيكي وبريق الآرت ديكو، حيث تعكس أسطحه الهندسية الثمانية تدرجات الضوء بأسلوب فني ساحر.',
      en: 'Bridging timeless neoclassical proportions with vibrant Art Deco geometry, the Faceted Prism starter post captures room reflections along its precision-angled octagonal facets in warm champagne bronze.',
    },
    idealFor: [
      { fa: 'عمارت‌های نئوکلاسیک، ویلاهای سبک فرانسوی و پنت‌هاوس‌های کلاسیک مدرن', ar: 'الفلل النيوكلاسيكية والمنازل ذات الطراز الفرنسي', en: 'Neoclassical duplexes, French provincial villas & classic estates' },
      { fa: 'لابی ساختمان‌های برند در مناطق اعیان‌نشین و باشگاه‌های اختصاصی', ar: 'المباني الراقية والنوادي الخاصة الفاخرة', en: 'Luxury residential towers, country clubs & executive suites' },
      { fa: 'هماهنگی با راه‌پله‌های سنگی کرم مارفیل، لته و مرمریت ده‌بید', ar: 'متناسق جداً مع رخام مارفيل والسلالم الحجرية الكلاسيكية', en: 'Pairing with warm Crema Marfil, Dehbid marble and hardwood steps' },
    ],
  },

  {
    id: 'post-starter-hightech',
    modelCode: 'STX-STR-HGT-GNM',
    postCategory: 'starter',
    workClass: {
      fa: 'کلاس ۴: صنعتی و های‌تک آرشیتکتورال (High-Tech & Structural Engineering)',
      ar: 'الفئة الرابعة: هاي تيك وصناعي هيكلي (High-Tech Industrial)',
      en: 'Class 4: High-Tech & Architectural Structural',
    },
    name: {
      fa: 'استارتر های‌تک هوی‌استراکچر بلک گان‌متال (High-Tech Structural Gunmetal Starter)',
      ar: 'عامود بداية هاي تيك مصفح تيتانيوم أسود هيكلي (High-Tech Gunmetal)',
      en: 'High-Tech Heavy Structural Gunmetal Dark Chrome Starter Post',
    },
    badge: {
      fa: 'سازه تقویت‌شده استیل ۳۱۶ مارین با اتصالات مهار کابل بکسل و رنگ دودی مات',
      ar: 'هيكل مقوى ستانلس ٣١٦ بحري مع كوابل شد وتيتانيوم دخاني',
      en: 'Marine 316 Dual-Plate Post with Engineered Cable Tensioners',
    },
    image: starterHightechImg,
    detailImages: [
      starterHightechImg,
      silverPalaceRailingImg,
      minimalVillaRailingImg,
    ],
    projectImages: [
      minimalVillaRailingImg,
      luxuryStairRailingImg,
      silverPalaceRailingImg,
    ],
    height: '۱۰۵۰ الی ۱۱۵۰ میلی‌متر',
    profileDimensions: {
      fa: 'تسمه دوبل استیل توپر ۱۵×۶۰ میلی‌متر با اسپیسرها و چشمی‌های مهار کابل بکسل',
      ar: 'شريحتان فولاذيتان مصمتتان ١٥×٦٠ ملم مع فواصل ميكانيكية ومرابط كوابل',
      en: 'Dual 15x60mm solid marine plates with CNC precision standoffs & cable tension eyes',
    },
    thickness: 'تسمه توپر ۳۰ میلی‌متر باربر (۱۵+۱۵) ریخته‌گری و برش واترجت سنگین',
    alloyGrade: {
      fa: 'استنلس استیل ۳۱۶ مارین گرید (ضداسید، ضدکلر و ضدزنگ صنعتی)',
      ar: 'ستانلس ستيل ٣١٦ بحري عالي المتانة ومقاوم للتآكل',
      en: 'Marine Grade AISI 316 Industrial Stainless Steel (Acid & Salt Proof)',
    },
    finish: {
      fa: 'گان‌متال دودی بلک تیتانیوم مات متالیک (Satin Gunmetal Black PVD)',
      ar: 'PVD أسود تيتانيوم دخاني مطفي مقاوم للبصمات والخدوش',
      en: 'Satin Matte Gunmetal Black Titanium PVD (Anti-Glare & Ultra Tough)',
    },
    baseMounting: {
      fa: 'بیس‌پلیت صنعتی فوق سنگین با ۴ لنگر بولت فولادی هیلتی و قابلیت نصب کف‌پله یا پیشانی پله',
      ar: 'قاعدة هيكلية ثقيلة قابلة للتركيب العلوي أو الجانبي على واجهة الدرج',
      en: 'Industrial-grade 4-bolt base anchor for top-tread or side-fascia stringer mounting',
    },
    handrailCompatibility: {
      fa: 'سرپایه مفصلی مکانیکی قابل انطباق با لوله ۵۱ مشکی، تسمه استیل یا لوله چوب ترمووود',
      ar: 'مفصل علوي ميكانيكي متوافق مع أنابيب الستانلس ٥١ ملم أو الخشب المعالج',
      en: 'Precision articulated mechanical swivel saddle for 50mm black tube or thermo-wood',
    },
    infillType: {
      fa: 'سیم‌بکسل‌های کششی استیل گرید دریایی ۳۱۶، میله‌های افقی صلب یا شیشه سکوریت دودی',
      ar: 'كوابل فولاذية بحرية مشدودة، قضبان صلبة أو زجاج مدخن',
      en: 'Tensioned 316 marine wire cables, solid cross-rods or smoked safety glass',
    },
    weight: '۱۱.۲ کیلوگرم (سنگین‌ترین و مقاوم‌ترین استارتر سازه‌ای)',
    loadCapacity: '۵۲۰ کیلوگرم بر متر طول (دارای تاییدیه تحمل بارهای لرزه‌ای و دینامیک)',
    warrantyYears: 15,
    standardCert: 'DIN EN 1090 / ASTM E985 Heavy Duty / MTC 3.1 Marine',
    includedHardware: [
      { fa: 'چشمی‌ها و ترمینال‌های هیدرولیکی مهار سیم‌بکسل استیل ۳۱۶', ar: 'مرابط هيدروليكية لتثبيت كوابل الشد الستانلس', en: 'Hydraulic swaged 316 cable tensioner eyes' },
      { fa: 'سدل سرپایه مفصلی مکانیکی بلک PVD با پیچ‌های خشکه استیل', ar: 'مفصل علوي ميكانيكي متين لضبط ميلان الدرج', en: 'Articulated mechanical pivot saddle with A4 set screws' },
      { fa: 'اسپیسرهای استوانه‌ای تفلون-استیل ضد ارتعاش', ar: 'فواصل أسطوانية مانعة للاهتزاز والضوضاء', en: 'Machined anti-vibration cylindrical stainless standoffs' },
    ],
    unitPrice: 22900000,
    linearMeterPrice: 36000000,
    description: {
      fa: 'استارتر های‌تک سازه‌ای استیلکس با بهره‌گیری از متالوژی پیشرفته استیل ۳۱۶ دریایی و پوشش گان‌متال دودی تیتانیوم، قدرت مهندسی و هویت صنعتی معاصر را به نمایش می‌گذارد. ایده‌آل برای فضاهای لوفت، ویلاهای اکسپوز، پله‌های معلق و محیط‌های مرطوب یا ساحلی.',
      ar: 'يجسد عامود البداية هاي تيك قمة الصلابة الهندسية والتصميم المعماري الصناعي بفضل استخدام ستانلس ستيل ٣١٦ البحري وطلاء التيتانيوم الدخاني المطفي المقاوم لأقسى الظروف.',
      en: 'Engineered for cutting-edge structural architecture, the High-Tech Gunmetal starter pairs heavy 316 solid plates with integrated cable tensioners, delivering peerless seismic strength and sleek industrial elegance.',
    },
    idealFor: [
      { fa: 'لوفت‌های صنعتی، ویلاهای بتن اکسپوز، پله‌های معلق کنسولی و فلزی', ar: 'شقق اللوفت والفلل العصرية والسلالم المعلقة المكشوفة', en: 'Industrial lofts, exposed concrete villas & cantilevered steel stairs' },
      { fa: 'محیط‌های ساحلی با رطوبت و نمک شدید (شمال، کیش، دبی و سواحل عمان)', ar: 'المناطق الساحلية والبحرية ذات الرطوبة والأملاح العالية', en: 'Coastal and marine environments with intense humidity and salt air' },
      { fa: 'ساختمان‌های دفاتر مرکزی مهندسی، شوروم‌های خودروهای لوکس و های‌تک', ar: 'المقرات الإدارية الحديثة ومعارض السيارات الفاخرة', en: 'Corporate technology centers, tech campuses & high-end showrooms' },
    ],
  },

  {
    id: 'post-starter-parametric',
    modelCode: 'STX-STR-PRM-GLD',
    postCategory: 'starter',
    workClass: {
      fa: 'کلاس ۵: استارتر لوکس پارامتریک و ارگانیک (Parametric Organic & Biophilic Luxury)',
      ar: 'الفئة الخامسة: استارتر عضوي بارامتري فخم (Parametric Organic)',
      en: 'Class 5: Parametric Organic & Biophilic Luxury Starter Post',
    },
    name: {
      fa: 'استارتر راه‌پله پارامتریک لوپ کپسولی شامپاینی (Parametric Fluid Capsule Starter)',
      ar: 'عامود بداية راقي بارامتري كبسولي انسيابي شامباني (Parametric Capsule)',
      en: 'Parametric Fluid Capsule Champagne Gold Organic Starter Post',
    },
    badge: {
      fa: 'طراحی بیوفیلیک تندیس‌گون با خمش ۳D پیوسته و فینیش شامپاینی مات',
      ar: 'تصميم انسيابي عضوي كبسولي بطلاء PVD شامباني ناعم',
      en: 'Sculptural Stadium-Capsule Loop with Seamless 3D CNC Bends',
    },
    image: starterParametricImg,
    detailImages: [
      starterParametricImg,
      minimalVillaRailingImg,
      silverPalaceRailingImg,
    ],
    projectImages: [
      minimalVillaRailingImg,
      goldPalaceRailingImg,
      luxuryStairRailingImg,
    ],
    height: '۱۰۰۰ الی ۱۱۰۰ میلی‌متر',
    profileDimensions: {
      fa: 'حلقه بیضوی پیوسته با مقطع بیضی و دایره لوله‌ای خمکاری‌شده ۴۲ الی ۵۱ میل',
      ar: 'حلقة بيضاوية انسيابية مستمرة بقطر ٤٢ إلى ٥١ ملم خالية من اللحامات',
      en: 'Seamless continuous stadium-capsule loop with 42-51mm radiused tubular profile',
    },
    thickness: '۲.۵ میلی‌متر گوشت لوله بدون چروکیدگی در خمش‌های مقعر و محدب',
    alloyGrade: {
      fa: 'استنلس استیل ۳۰۴ نگیر دکوراتیو با فینیش ابریشمی PVD شامپاینی مات',
      ar: 'ستانلس ستيل ٣٠٤ مع طلاء PVD شامباني حريري مطفي',
      en: 'Austenitic AISI 304 Stainless with Satin Brushed Champagne Gold PVD',
    },
    finish: {
      fa: 'شامپاینی بژ ساتین مات (Satin Champagne Gold PVD) با مقاومت در برابر لک و خط و خش',
      ar: 'PVD شامباني حريري ناعم مضاد للبصمات والخدوش',
      en: 'Satin Brushed Champagne Gold PVD (Warm, non-glare & anti-fingerprint)',
    },
    baseMounting: {
      fa: 'کف‌پایه دفنی توکار بدون درز با سیستم اتصال پنهان فلزی ضدلقی',
      ar: 'تثبيت أرضي مدفون مخفي بالكامل لمنظر انسيابي نقي',
      en: 'Concealed flush-mount subterranean base socket for a pure floating aesthetic',
    },
    handrailCompatibility: {
      fa: 'امتداد پیوسته ارگانیک هندریل یا اتصال به دست‌اندازهای چوب گردو و چوب بلوط ملایم',
      ar: 'امتداد انسيابي مباشر مع مقبض اليد أو هندريل خشب الجوز الناعم',
      en: 'Fluid organic curve transitioning directly into matching handrail or natural walnut',
    },
    infillType: {
      fa: 'پارتیشن‌های اسکرین کپسولی، بالسترهای اسلیم عمودی و جام‌های شیشه خم کریستالی',
      ar: 'قواطع كبسولية عمودية، زجاج منحنٍ أو خطوط انسيابية',
      en: 'Capsule screen partitions, slender rhythmic vertical bars or curved safety glass',
    },
    weight: '۷.۳ کیلوگرم',
    loadCapacity: '۳۸۰ کیلوگرم بر متر طول',
    warrantyYears: 15,
    standardCert: 'ISO 9001:2015 / ASTM A554 / CE Directive',
    includedHardware: [
      { fa: 'سوکت فلزی دفنی توکار با مکانیزم رگلاژ زاویه و شیم‌های تراز', ar: 'مقبس تثبيت أرضي مدفون مع حلقات ضبط التوازن', en: 'Flush-mount socket assembly with micro-leveling adjusters' },
      { fa: 'کوپلینگ رابط بدون درز اتصال مستقیم به هندریل شیب‌دار', ar: 'وصلة انسيابية مخفية للربط بمقبض اليد', en: 'Concealed internal expanding coupling for seamless handrail flow' },
      { fa: 'واشرها و پدهای عایق ارتعاش و رطوبت زیرکف', ar: 'حواشي عازلة للصوت والاهتزاز والرطوبة', en: 'Anti-vibration acoustic & moisture barrier gaskets' },
    ],
    unitPrice: 19500000,
    linearMeterPrice: 34000000,
    description: {
      fa: 'استارتر لوکس پارامتریک لوپ کپسولی الهام‌گرفته از فرم‌های سیال و ارگانیک طبیعت است. حذف زوایای تیز و اجرای قوس‌های پیوسته ۳D بدون درز جوش اکسپوز، به ورودی راه‌پله هویتی مجسمه‌گونه، لوکس و آرامش‌بخش می‌بخشد.',
      ar: 'يستلهم هذا الاستارتر البارامتري شكله من المنحنيات الطبيعية الحيوية، حيث تلتقي الخطوط الكبسولية بدون زوايا حادة لتعطي مدخل الدرج لمسة نحتية فنية دافئة.',
      en: 'Inspired by biophilic contours, the Parametric Fluid Capsule starter replaces rigid corners with continuous 3D sweeps, adding sculptural tranquility to luxury modern stairs.',
    },
    idealFor: [
      { fa: 'ویلاهای ارگانیک و بیوفیلیک، خانه‌های مدرن سبک منحنی و ولنس‌سنترها', ar: 'الفلل ذات التصاميم العضوية والمراكز الصحية الراقية', en: 'Biophilic villas, organic curvilinear interiors & wellness retreats' },
      { fa: 'بوتیک‌هتل‌ها، گالری‌های هنری لوکس و آتلیه‌های طراحان مد', ar: 'فنادق البوتيك ومعارض الفنون الراقية', en: 'Boutique hotels, couture fashion houses & private art galleries' },
      { fa: 'راه‌پله‌های پیچ، اکسپوز و معلق با هندریل‌های چوب گردوی فرم‌داده‌شده', ar: 'السلالم المنحنية والمعلقة مع خشب الجوز المعالج', en: 'Curved and spiral staircases with organic steam-bent wooden handrails' },
    ],
  },

  // ================= ARTISTIC HANDRAILS =================
  {
    id: 'post-handrail-parametric',
    modelCode: 'STX-HDL-PRM-GLD',
    postCategory: 'artistic_handrail',
    workClass: {
      fa: 'کلاس هندریل هنری: ارگانیک پارامتریک و فلوئید (Parametric Organic & Biophilic Luxury)',
      ar: 'الفئة الخامسة: هندريل عضوي بارامتري فخم (Parametric Organic)',
      en: 'Class: Parametric Organic & Biophilic Luxury Handrail',
    },
    name: {
      fa: 'هندریل هنری پارامتریک لوپ کپسولی شامپاینی (Parametric Fluid Capsule Handrail)',
      ar: 'هندريل فني بارامتري كبسولي انسيابي شامباني (Parametric Capsule)',
      en: 'Parametric Fluid Capsule Champagne Gold Organic Sculptural Handrail',
    },
    badge: {
      fa: 'طراحی بیوفیلیک تندیس‌گون با خمش ۳D پیوسته و فینیش شامپاینی مات',
      ar: 'تصميم انسيابي عضوي كبسولي بطلاء PVD شامباني ناعم',
      en: 'Sculptural Stadium-Capsule Loop with Seamless 3D CNC Bends',
    },
    image: modernCapsuleRailingImg,
    detailImages: [
      modernCapsuleRailingImg,
      starterParametricImg,
      minimalVillaRailingImg,
    ],
    projectImages: [
      modernCapsuleRailingImg,
      minimalVillaRailingImg,
      luxuryStairRailingImg,
    ],
    height: '۱۰۰۰ الی ۱۱۰۰ میلی‌متر',
    profileDimensions: {
      fa: 'حلقه بیضوی پیوسته با مقطع بیضی و دایره لوله‌ای خمکاری‌شده ۴۲ الی ۵۱ میل',
      ar: 'حلقة بيضاوية انسيابية مستمرة بقطر ٤٢ إلى ٥١ ملم خالية من اللحامات',
      en: 'Seamless continuous stadium-capsule loop with 42-51mm radiused tubular profile',
    },
    thickness: '۲.۵ میلی‌متر گوشت لوله بدون چروکیدگی در خمش‌های مقعر و محدب',
    alloyGrade: {
      fa: 'استنلس استیل ۳۰۴ نگیر دکوراتیو با فینیش ابریشمی PVD شامپاینی مات',
      ar: 'ستانلس ستيل ٣٠٤ مع طلاء PVD شامباني حريري مطفي',
      en: 'Austenitic AISI 304 Stainless with Satin Brushed Champagne Gold PVD',
    },
    finish: {
      fa: 'شامپاینی بژ ساتین مات (Satin Champagne Gold PVD) با مقاومت در برابر لک و خط و خش',
      ar: 'PVD شامباني حريري ناعم مضاد للبصمات والخدوش',
      en: 'Satin Brushed Champagne Gold PVD (Warm, non-glare & anti-fingerprint)',
    },
    baseMounting: {
      fa: 'کف‌پایه دفنی توکار بدون درز با سیستم اتصال پنهان فلزی ضدلقی',
      ar: 'تثبيت أرضي مدفون مخفي بالكامل لمنظر انسيابي نقي',
      en: 'Concealed flush-mount subterranean base socket for a pure floating aesthetic',
    },
    handrailCompatibility: {
      fa: 'امتداد پیوسته ارگانیک هندریل یا اتصال به دست‌اندازهای چوب گردو و چوب بلوط ملایم',
      ar: 'امتداد انسيابي مباشر مع مقبض اليد أو هندريل خشب الجوز الناعم',
      en: 'Fluid organic curve transitioning directly into matching handrail or natural walnut',
    },
    infillType: {
      fa: 'پارتیشن‌های اسکرین کپسولی، بالسترهای اسلیم عمودی و جام‌های شیشه خم کریستالی',
      ar: 'قواطع كبسولية عمودية، زجاج منحنٍ أو خطوط انسيابية',
      en: 'Capsule screen partitions, slender rhythmic vertical bars or curved safety glass',
    },
    weight: '۷.۳ کیلوگرم',
    loadCapacity: '۳۸۰ کیلوگرم بر متر طول',
    warrantyYears: 15,
    standardCert: 'ISO 9001:2015 / ASTM A554 / CE Directive',
    includedHardware: [
      { fa: 'سوکت فلزی دفنی توکار با مکانیزم رگلاژ زاویه و شیم‌های تراز', ar: 'مقبس تثبيت أرضي مدفون مع حلقات ضبط التوازن', en: 'Flush-mount socket assembly with micro-leveling adjusters' },
      { fa: 'کوپلینگ رابط بدون درز اتصال مستقیم به هندریل شیب‌دار', ar: 'وصلة انسيابية مخفية للربط بمقبض اليد', en: 'Concealed internal expanding coupling for seamless handrail flow' },
      { fa: 'واشرها و پدهای عایق ارتعاش و رطوبت زیرکف', ar: 'حواشي عازلة للصوت والاهتزاز والرطوبة', en: 'Anti-vibration acoustic & moisture barrier gaskets' },
    ],
    unitPrice: 19500000,
    linearMeterPrice: 34000000,
    description: {
      fa: 'هندریل هنری پارامتریک لوپ کپسولی الهام‌گرفته از فرم‌های سیال و ارگانیک طبیعت است. حذف زوایای تیز و اجرای قوس‌های پیوسته ۳D بدون درز جوش اکسپوز، به راه‌پله کیفیتی تندیس‌گونه و لمس‌پذیر می‌بخشد که دست در امتداد آن به نرمی حرکت می‌کند.',
      ar: 'يستلهم هذا الهندريل البارامتري شكله من المنحنيات الطبيعية الحيوية، حيث تلتقي الخطوط الكبسولية بدون زوايا حادة لتعطي مدخل الدرج لمسة نحتية فنية دافئة.',
      en: 'Inspired by biophilic contours, the Parametric Fluid Capsule handrail replaces rigid corners with continuous 3D sweeps. Its seamless organic transition guides the hand effortlessly, adding sculptural serenity to boutique staircases.',
    },
    idealFor: [
      { fa: 'ویلاهای ارگانیک و بیوفیلیک، خانه‌های مدرن سبک منحنی و ولنس‌سنترها', ar: 'الفلل ذات التصاميم العضوية والمراكز الصحية الراقية', en: 'Biophilic villas, organic curvilinear interiors & wellness retreats' },
      { fa: 'بوتیک‌هتل‌ها، گالری‌های هنری لوکس و آتلیه‌های طراحان مد', ar: 'فنادق البوتيك ومعارض الفنون الراقية', en: 'Boutique hotels, couture fashion houses & private art galleries' },
      { fa: 'راه‌پله‌های پیچ، اکسپوز و معلق با هندریل‌های چوب گردوی فرم‌داده‌شده', ar: 'السلالم المنحنية والمعلقة مع خشب الجوز المعالج', en: 'Curved and spiral staircases with organic steam-bent wooden handrails' },
    ],
  },

  {
    id: 'handrail-royal-swan-gold',
    modelCode: 'STX-HDL-SWN-GLD',
    postCategory: 'artistic_handrail',
    workClass: {
      fa: 'کلاس هندریل هنری: سلطنتی امپریال با خمش گردن‌قو (Imperial Swan-Neck Gold Class)',
      ar: 'فئة هندريل فني راقي ملكي ذهبي بانحناء عنق البجعة',
      en: 'Imperial Swan-Neck 24K Gold Artistic Handrail Class',
    },
    name: {
      fa: 'هندریل هنری سلطنتی امپریال گلد با انحنای گردن‌قو (Imperial Swan-Neck 24K Gold Handrail)',
      ar: 'هندريل فني راقي سلطاني إمبريال ذهبي بانحناء عنق البجعة',
      en: 'Artistic Royal Imperial 24K Gold Swan-Neck Handrail',
    },
    badge: {
      fa: 'دست‌انداز هنری اشرافی با خم‌های نرم پیوسته و پوشش طلای ۲۴ عیار',
      ar: 'هندريل فني ملوكي بانحناءات مستمرة وذهب عيار ٢٤',
      en: 'Masterpiece Continuous Curved Handrail with 24K PVD Gold',
    },
    image: goldPalaceLightedImg,
    detailImages: [
      goldPalaceLightedImg,
      goldPalaceRailingImg,
      goldPalaceBackupImg,
    ],
    projectImages: [
      goldPalaceRailingImg,
      luxuryStairRailingImg,
      silverPalaceRailingImg,
    ],
    height: '۹۰۰ الی ۹۵۰ میلی‌متر از کف پله',
    profileDimensions: {
      fa: 'لوله ارگونومیک قطر ۵۱ الی ۶۳ میلی‌متر با اتصالات منحنی Swan-Neck دست‌ساز',
      ar: 'أنبوب مريح بقطر ٥١ إلى ٦٣ ملم مع وصلات عنق البجعة اليدوية',
      en: '51-63mm Ergonomic Round Tube with Custom Handcrafted Swan-Neck Radii',
    },
    thickness: '۲.۵ میلی‌متر استنلس استیل ۳۰۴ نگیر گوشتی سنگین',
    alloyGrade: {
      fa: 'استنلس استیل ۳۰۴ نگیر دکوراتیو با تیتانیوم PVD طلایی ۲۴ عیار نانو',
      ar: 'ستانلس ستيل ٣٠٤ مع طلاء PVD ذهب ٢٤ عيار فائق النقاء',
      en: 'AISI 304 Stainless with 24K Titanium Gold PVD & Nano-Hardening',
    },
    finish: {
      fa: 'سوپر میرور ۸K فوق‌براق طلایی سلطنتی با رفلکس آینه‌ای کریستالی',
      ar: 'مرآة براقة ٨K ذهبية ملكية فائقة اللمعان',
      en: 'Super Mirror 8K Royal Gold Crystal Reflection',
    },
    baseMounting: {
      fa: 'براکت‌های تندیس‌گون تراش‌خورده CNC دیواری و پایه‌کف با بست‌های مخفی',
      ar: 'حوامل جدارية وأرضية مخرطة بتقنية CNC ببراغي تثبيت مخفية',
      en: 'Sculpted CNC-machined wall brackets & floor posts with concealed fasteners',
    },
    handrailCompatibility: {
      fa: 'امتداد پیوسته یکپارچه در پاگردها و چرخش‌های شیب‌دار بدون انقطاع',
      ar: 'استمرار انسيابي متواصل عند البسطات والمنحدرات بدون انقطاع',
      en: 'Continuous unbroken flow across landings and helical stair inclines',
    },
    infillType: {
      fa: 'ترکیب با بالسترهای سلطنتی فاستال، شیشه سوپرکلیر یا کتیبه‌های برنزی اسلیمی',
      ar: 'متوافق مع القوائم الملكية، الزجاج النقي أو ألواح البرونز الزخرفية',
      en: 'Compatible with Royal faceted balusters, low-iron crystal glass or ornate bronze grilles',
    },
    weight: '۴.۸ کیلوگرم هر متر طول',
    loadCapacity: '۴۲۰ کیلوگرم بر متر طول (تحمل بارهای لرزه‌ای و سنگین)',
    warrantyYears: 15,
    standardCert: 'BS 6180 / ASTM E985 / CE Luxury Class',
    includedHardware: [
      { fa: 'اتصالات جوش آرگون مدفون و پرداخت میکرونی بدون درز', ar: 'وصلات لحام أرغون دقيقة مصقولة بدون أي فواصل', en: 'Concealed argon-welded joints micro-polished to seamless perfection' },
      { fa: 'براکت‌های دیواری ریخته‌گری توپر PVD طلایی', ar: 'حوامل جدارية مصمتة بطلاء ذهبي PVD', en: 'Heavy solid cast PVD gold wall brackets' },
      { fa: 'درپوش‌ها و گوی‌های تراش خورده CNC انتهای هندریل', ar: 'أغطية وكرات نهاية الهندريل مخرطة بـ CNC', en: 'Precision CNC-turned decorative end caps and finials' },
    ],
    unitPrice: 23500000,
    linearMeterPrice: 42000000,
    description: {
      fa: 'هندریل هنری سلطنتی رویال امپریال نماد اوج استادی در خمش و پرداخت استیل نگیر است. انحناهای نرم گردن قو (Swan-Neck) در پاگردها و چرخش‌های پله بدون هیچ‌گونه زاویه تند یا درز جوش اکسپوز اجرا شده و حسی اشرافی و بی‌همتا از لمس فلز صیقلی زرین به ارمغان می‌آورد.',
      ar: 'يمثل الهندريل الفني الملكي إمبريال قمة الإتقان في تشكيل وصقل الستانلس ستيل. انحناءات عنق البجعة الانسيابية تمنح الدرج طابع القصور الملكية بدون أي لحامات ظاهرة.',
      en: 'The Royal Imperial Swan-Neck artistic handrail represents the pinnacle of tube manipulation and mirror polishing. Its continuous fluid transitions eliminate sharp breaks across staircase winders, offering an unbroken ribbon of 24K gold luxury.',
    },
    idealFor: [
      { fa: 'عمارت‌های دوبلکس و تریپلکس کلاسیک، پنت‌هاوس‌های دیپلماتیک و کاخ‌ویلاها', ar: 'القصور الفاخرة، الفلل الدوبلكس والبنتهاوس الدبلوماسي', en: 'Classical palatial estates, luxury duplexes & diplomatic residences' },
      { fa: 'راه‌پله‌های پیچ، معلق و شاه‌نشین ورودی عمارت‌ها', ar: 'السلالم الدائرية والمنحنية في مداخل القصور', en: 'Grand curved, helical and monumental entrance staircases' },
      { fa: 'فضاهای تشریفاتی هتل‌های ۵ ستاره بین‌المللی و تالارهای مجلل', ar: 'صالات الاستقبال في الفنادق الفاخرة ٥ نجوم', en: '5-star grand lobbies, VIP presidential suites & opera ballrooms' },
    ],
  },

  {
    id: 'handrail-sculpted-walnut-gold',
    modelCode: 'STX-HDL-WLT-GLD',
    postCategory: 'artistic_handrail',
    workClass: {
      fa: 'کلاس هندریل هنری: تلفیقی چوب طبیعی گردو و استیل طلایی (Artistic Hardwood & Gold Stainless)',
      ar: 'فئة هندريل فني راقي مدمج خشب الجوز الطبيعي مع الستانلس الذهبي',
      en: 'Artistic Sculpted American Walnut & Gold Stainless Handrail Class',
    },
    name: {
      fa: 'هندریل هنری تلفیقی چوب گردو و استنلس استیل PVD طلایی (Sculpted Walnut & Gold Stainless)',
      ar: 'هندريل فني راقي مدمج بخشب الجوز الأمريكي وستانلس ذهبي',
      en: 'Artistic Sculpted Walnut & Gold Stainless Architectural Handrail',
    },
    badge: {
      fa: 'تلفیق گرمای چوب گردوی دست‌تراش با براکت‌های زرین استنلس استیل ۳۰۴',
      ar: 'توليفة دافئة من خشب الجوز المنحوت مع حوامل ستانلس ذهبية',
      en: 'Hand-Sculpted American Walnut with Mirror Gold Stainless Brackets',
    },
    image: luxuryStairRailingImg,
    detailImages: [
      luxuryStairRailingImg,
      goldPalaceRailingImg,
      silverPalaceRailingImg,
    ],
    projectImages: [
      luxuryStairRailingImg,
      goldPalaceRailingImg,
      starterRoyalPalaceImg,
    ],
    height: '۹۰۰ الی ۹۵۰ میلی‌متر',
    profileDimensions: {
      fa: 'مقطع بیضی ارگونومیک ۸۰×۵۰ میلی‌متر چوب گردوی اشباع با مغزی سازه‌ای استیل',
      ar: 'مقطع بيضوي ٨٠×٥٠ ملم من خشب الجوز المعالج مع هيكل داخلي فولاذي',
      en: '80x50mm Ergonomic Oval Solid Walnut Profile with Internal Stainless Steel Spine',
    },
    thickness: 'مغزی تسمه استنلس استیل ضخامت ۵ میلی‌متر + بدنه چوب تمام‌گردو',
    alloyGrade: {
      fa: 'استیل ۳۰۴ نگیر با پوشش PVD طلایی تیتانیوم + چوب گردوی آمریکایی سوپر',
      ar: 'ستانلس ستيل ٣٠٤ بطلاء PVD ذهبي مع خشب جوز أمريكي ممتاز',
      en: 'AISI 304 Titanium Gold PVD Hardware & Solid American Black Walnut',
    },
    finish: {
      fa: 'روغن گیاهی طبیعی ضدآب مات روی چوب و سوپر میرور ۸K طلایی روی یراق‌آلات',
      ar: 'زيت طبيعي واقٍ غير لامع للخشب ولمعان مرآة عالي للحوامل الذهبية',
      en: 'Hand-Rubbed Natural Hardwax Matte Wood Finish & 8K Mirror Gold Brackets',
    },
    baseMounting: {
      fa: 'براکت‌های دیواری مخفی استیلکس با پیچ‌های مغزی آلن و انکربولت هیلتی',
      ar: 'حوامل تثبيت جدارية مخفية مع براغي داخلية عالية المتانة',
      en: 'Concealed heavy architectural wall brackets with hidden set-screws',
    },
    handrailCompatibility: {
      fa: 'اتصال بدون درز به پایه‌های مدرن و کلاسیک یا نصب یکپارچه روی دیوار سنگ و گچ',
      ar: 'توصيل انسيابي بالقوائم المعدنية أو تثبيت جداري على الرخام والجبس',
      en: 'Seamless integration with baluster posts or direct wall mounting onto marble/plaster',
    },
    infillType: {
      fa: 'هماهنگ با انواع حفاظ‌های شیشه‌ای، بالسترهای پروفیلی و نرده‌های اسلیم',
      ar: 'متوافق مع درابزينات الزجاج، القوائم المعدنية والأسوار الرشيقة',
      en: 'Harmonious with glass infill balustrades, metallic spindles and minimalist screens',
    },
    weight: '۳.۹ کیلوگرم هر متر طول',
    loadCapacity: '۳۶۰ کیلوگرم بر متر طول',
    warrantyYears: 15,
    standardCert: 'FSC Certified Timber / ASTM E985 / CE Marking',
    includedHardware: [
      { fa: 'مغزی تقویتی استیل پنهان داخل شیار زیرین چوب جهت جلوگیری از خمش و تغییر فرم', ar: 'قضيب ستانلس داخلي لتقوية الخشب ومنع التقوس', en: 'Internal structural stainless stabilizing backbone preventing wood warp' },
      { fa: 'براکت‌های دست‌ساز تمام استیل ۳۰۴ با پوشش طلایی PVD', ar: 'حوامل ستانلس ٣٠٤ يدوية الصنع بطلاء ذهبي PVD', en: 'Precision-machined 304 stainless wall saddles with PVD gold finish' },
      { fa: 'کوپلینگ‌های برنجی-استیل انبساطی جهت اتصال طولی مخفی چوب‌ها', ar: 'وصلات تمدد نحاسية وفولاذية للتوصيل الخفي للخشب', en: 'Expanding internal brass-stainless joinery couplings for invisible end-to-end joints' },
    ],
    unitPrice: 21000000,
    linearMeterPrice: 38000000,
    description: {
      fa: 'هندریل هنری تلفیقی چوب گردو و استیل طلایی، تلفیق بی‌همتای طبیعت ارگانیک و مهندسی دقیق متالوژی است. حس گرمای طبیعی چوب گردو در زیر دستان و تلألوء براکت‌های زرین استنلس استیل بر روی دیوار یا نرده، فضایی سرشار از آرامش، وقار و اصالت پدید می‌آورد.',
      ar: 'يجمع هذا الهندريل الفني بين دفء الطبيعة في خشب الجوز المنحوت ودقة الهندسة في حوامل الستانلس الذهبية، مما يمنح الدرج لمسة من الأناقة والهدوء والرفاهية.',
      en: 'Combining the organic warmth of hand-sculpted American walnut with precision PVD mirror-gold stainless fittings, this architectural handrail delivers acoustic comfort, tactile luxury, and timeless aesthetic presence.',
    },
    idealFor: [
      { fa: 'ویلاهای مدرن و تلفیقی، عمارت‌های سبک نئوکلاسیک و سوئیت‌های ریاست‌جمهوری', ar: 'الفلل العصرية والقصور النيوكلاسيكية والأجنحة الرئاسية', en: 'Modern luxury villas, neo-classical residences & presidential hotel suites' },
      { fa: 'راه‌پله‌های با دیواره‌های سنگ مرمر، بتن اکسپوز و چوب ترمووود', ar: 'السلالم ذات الجدران الرخامية والخشبية والخرسانية', en: 'Staircases flanked by bookmatched marble, microcement or architectural wood paneling' },
      { fa: 'پنت‌هاوس‌ها، کتابخانه‌های خصوصی و کلینیک‌های زیبایی VIP', ar: 'البنتهاوس والمكتبات الخاصة والعيادات التجميلية الراقية', en: 'Private penthouse libraries, luxury executive offices & VIP cosmetic lounges' },
    ],
  },

  // ================= PRE-FABRICATED & MODULAR POSTS =================
  {
    id: 'post-spigot-316',
    modelCode: 'STX-SPG-316',
    postCategory: 'prefab',
    workClass: {
      fa: 'کلاس پایه پیش‌ساخته اسپیگات شیشه خودایستا (Heavy Spigot Class)',
      ar: 'فئة سبیغوت زجاج مسبقة الصنع',
      en: 'Pre-Fabricated Self-Supporting Glass Spigot Class',
    },
    name: {
      fa: 'پایه اسپیگات پیش‌ساخته توپر خودایستا شیشه ۳۱۶ (Mega Spigot 316)',
      ar: 'قاعدة سبیغوت زجاج مسبقة الصنع ستانلس ٣١٦ (Mega Spigot)',
      en: 'Pre-Fabricated Solid Core Self-Supporting Glass Spigot (Mega Spigot 316)',
    },
    badge: {
      fa: 'پرفروش‌ترین مدل ویلایی و استخری',
      ar: 'الأكثر مبيعاً للفلل والمسابح',
      en: 'Top Selling for Luxury Villas & Pools',
    },
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
    detailImages: [
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=80',
    ],
    projectImages: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1000&q=80',
    ],
    projectVideoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-modern-luxury-building-facade-42774-large.mp4',
    height: '۱۸۰ الی ۲۲۰ میلی‌متر',
    profileDimensions: {
      fa: 'مقطع مربعی ۵۰×۵۰ یا استوانه‌ای ۵۰ میلی‌متر',
      ar: 'مقطع مربع ٥٠×٥٠ أو أسطواني ٥٠ ملم',
      en: '50x50mm Square or 50mm Round Solid Profile',
    },
    thickness: 'ریخته‌گری دقیق توپر (Solid Investment Cast)',
    alloyGrade: {
      fa: 'استنلس استیل ۳۱۶ مارین گرید ضداسید و کلر',
      ar: 'ستانلس ستيل ٣١٦ بحري مقاوم للأحماض والكلور',
      en: 'Marine Grade 316 Acid & Chlorine Resistant',
    },
    finish: {
      fa: 'سوپر میرور ۸K آینه‌ای / خش‌دار ساتن مات / PVD طلایی',
      ar: 'مرآة براقة ٨K / حريري مطفي / PVD ذهبي',
      en: 'Super Mirror 8K / Satin Hairline / PVD Titanium Gold',
    },
    baseMounting: {
      fa: 'کفی توکار ۴ بولته سنگین با رگلاژ زاویه و قالپاق پرسی یکپارچه',
      ar: 'قاعدة تثبيت مدمجة بـ ٤ براغي شديدة التحمل مع ضبط الزاوية',
      en: 'Heavy-duty 4-bolt base flange with angle micro-adjustment & seamless cover',
    },
    handrailCompatibility: {
      fa: 'هندریل یو‌چنل شیاردار استیل، لوله بیضی یا بدون دست‌انداز (دید بی‌پایان)',
      ar: 'هندريل ستانلس مقعر على الزجاج أو بدون هندريل (رؤية بانورامية)',
      en: 'Top U-channel glass-mounted slotted tube, oval handrail or frameless vista',
    },
    infillType: {
      fa: 'شیشه سکوریت و لمینت ۱۰ تا ۲۲ میلی‌متر با فک‌های تفلون ضدخش',
      ar: 'زجاج سيكوريت ومصفح ١٠ إلى ٢٢ ملم مع حواشي تفلون واقية',
      en: '10mm to 22mm Toughened & Laminated Safety Glass with Teflon Grippers',
    },
    weight: '۳.۴ کیلوگرم هر عدد',
    loadCapacity: '۳۵۰ کیلوگرم بر متر طول (تاییدیه استاندارد ASTM E985)',
    warrantyYears: 15,
    standardCert: 'ASTM E985 / CE EN 12600 / MTC 3.1',
    includedHardware: [
      { fa: 'فک‌های تفلون نسوز ضدخش محافظ شیشه', ar: 'حواشي تفلون واقية لمنع الخدش', en: 'Scratch-resistant Teflon glass padding' },
      { fa: 'پیچ‌های آلن استیل A4-70 گرید دریایی', ar: 'براغي ستانلس ألين A4-70 بحرية', en: 'Marine A4-70 stainless hex bolts' },
      { fa: 'قالپاق پرسی کششی فابریک استیلکس', ar: 'غطاء أرضي مضغوط فابريك ستيليكس', en: 'Seamless precision stamped floor escutcheon' },
      { fa: 'شیم‌های تنظیم تراز میلی‌متری', ar: 'حلقات ضبط الاستقامة الدقيقة', en: 'Precision leveling adjustment shims' },
    ],
    unitPrice: 13800000,
    linearMeterPrice: 32000000,
    description: {
      fa: 'پایه اسپیگات استیلکس شاهکار مهندسی ریخته‌گری دقیق با آلیاژ ۳۱۶ است که امکان مهار ایمن شیشه‌های ضخیم بدون سوراخکاری شیشه را فراهم می‌سازد. ایده‌آل برای بالکن‌های ویلایی، روف‌گاردن، حاشیه استخر و پنت‌هاوس با حداکثر شفافیت بصری.',
      ar: 'قاعدة سبیغوت ستيليكس هي تحفة هندسية من الستانلس ستيل ٣١٦ تتيح تثبيت الزجاج السميك دون الحاجة لثقبه. مثالية للفلل والمسابح والأسطح البانورامية.',
      en: 'STELLEX Mega Spigot represents solid investment casting excellence in 316 marine alloy, securing thick glass balustrades with zero glass perforation for unobstructed panoramic architectural vistas.',
    },
    idealFor: [
      { fa: 'تراس و بالکن ویلاهای لوکس و پنت‌هاوس', ar: 'شرفات الفلل الفاخرة والبنتهاوس', en: 'Luxury villa balconies & penthouses' },
      { fa: 'محیط‌های استخری و ساحلی با رطوبت و کلر بالا', ar: 'أحواض السباحة والمناطق الساحلية', en: 'Swimming pool decks & coastal areas' },
      { fa: 'روف‌گاردن‌ها و محوطه‌سازی معاصر', ar: 'حدائق الأسطح وتنسيق الحدائق الحديثة', en: 'Rooftop gardens & contemporary landscaping' },
    ],
  },
  {
    id: 'post-diplomat-51',
    modelCode: 'STX-DPL-51R',
    postCategory: 'prefab',
    name: {
      fa: 'پایه پیش‌ساخته لوله‌ای مدولار دیپلمات ۵۱ (Diplomat Round 51)',
      ar: 'قائمة أنبوبية مسبقة الصنع معيارية دبلومات ٥١ (Diplomat Round)',
      en: 'Pre-Fabricated Diplomat Modular 51mm Round Railing Post',
    },
    badge: {
      fa: 'اقتصادی‌ترین و محبوب‌ترین مدل پیش‌ساخته راه‌پله',
      ar: 'الأكثر اقتصادية ومثالية للسلالم',
      en: 'Best Value & Most Popular Modular Staircase Post',
    },
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186156a?auto=format&fit=crop&w=800&q=80',
    detailImages: [
      'https://images.unsplash.com/photo-1541888946425-d0fbb186156a?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1000&q=80',
    ],
    projectImages: [
      'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80',
    ],
    projectVideoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-interior-of-a-modern-building-with-stairs-43343-large.mp4',
    height: '۸۵۰ الی ۹۵۰ میلی‌متر',
    profileDimensions: {
      fa: 'لوله استاندارد قطر ۵۱ میلی‌متر استیلکس',
      ar: 'أنبوب قياسي بقطر ٥١ ملم ستيليكس',
      en: 'Standard 51mm OD Stainless Steel Tube',
    },
    thickness: '۱.۵ الی ۲.۰ میلی‌متر گوشتی سنگین',
    alloyGrade: {
      fa: 'استیل ۳۰۴ نگیر تایوانی (گواهی استاندارد ASTM A554)',
      ar: 'ستانلس ستيل ٣٠٤ غير مغناطيسي تايواني',
      en: 'Austenitic 304 High-Purity (ASTM A554 Certified)',
    },
    finish: {
      fa: 'سوپر میرور ۸K براق / مات خش‌دار فابریک',
      ar: 'مرآة براقة ٨K / ساتان خطي مطفي',
      en: 'Super Mirror 8K Polish / Hairline Satin',
    },
    baseMounting: {
      fa: 'فلنچ کف سنگین ۳ سوراخه لیزری با قالپاق محدب پرسی بدون درز',
      ar: 'قاعدة سفلية مثلثة البراغي مع غطاء محدب مضغوط بدون فواصل',
      en: 'Laser-cut 3-hole heavy base flange with pressed convex escutcheon',
    },
    handrailCompatibility: {
      fa: 'هندریل لوله ۵۱ استیل، لوله ۳۸ یا چوب طبیعی',
      ar: 'هندريل أنبوب ٥١ ستانلس أو خشب طبيعي',
      en: '51mm Round Tube Handrail, 38mm Grab Bar or Natural Hardwood',
    },
    infillType: {
      fa: '۳ الی ۵ خط لوله محافظ ۱۶ میلی‌متر یا کابل بکسل استیل',
      ar: '٣ إلى ٥ خطوط أنابيب حماية ١٦ ملم أو كوابل شد فولاذية',
      en: '3 to 5 Rows of 16mm Security Cross-Tubes or Stainless Wire Ropes',
    },
    weight: '۲.۵ کیلوگرم هر عدد',
    loadCapacity: '۲۲۰ کیلوگرم بر متر طول',
    warrantyYears: 15,
    standardCert: 'ASTM A554 / ISO 9001:2015 / MTC',
    includedHardware: [
      { fa: 'قالپاق چاک‌دار پرسی بدون درز کفی', ar: 'غطاء أرضي مضغوط بدون فواصل', en: 'Pressed seamless base flange escutcheon' },
      { fa: 'چنگک‌های زاویه‌پذیر ۱۶ میل برای شیب پله', ar: 'مثبتات مفصلية ١٦ ملم لزوايا السلالم', en: 'Adjustable angle holders for 16mm horizontal tubes' },
      { fa: 'زانو و مفصل متحرک سرپایه جهت اتصال به هندریل', ar: 'مفصل علوي لتثبيت مقبض اليد', en: 'Articulated top saddle for handrail slope alignment' },
      { fa: 'رول‌بولت‌های فولادی رزوه استیل هیلتی', ar: 'براغي تثبيت قوية بالخرسانة والرخام', en: 'Heavy anchoring expansion bolts for stone & concrete' },
    ],
    unitPrice: 7500000,
    linearMeterPrice: 18000000,
    description: {
      fa: 'پایه آماده نصب لوله‌ای دیپلمات ۵۱ استانداردترین، مقاوم‌ترین و پرکاربردترین پایه نرده استیل در ساختمان‌های مسکونی، اداری و بیمارستانی است. سرعت نصب فوق‌العاده بالا بدون نیاز به حتی یک نقطه جوشکاری در محل پروژه.',
      ar: 'القائمة الأنبوبية دبلومات ٥١ هي الحل الأمثل والأكثر اعتمادية لسلالم المباني السكنية والتجارية، وتتميز بسرعة تركيب فائقة دون لحام.',
      en: 'The Diplomat 51mm is the industry benchmark for staircase balustrades, offering certified structural safety, modular angle adaptability and swift on-site mechanical assembly.',
    },
    idealFor: [
      { fa: 'راه‌پله ساختمان‌های مسکونی، تجاری و اداری', ar: 'سلالم المباني السكنية والتجارية', en: 'Residential & commercial staircases' },
      { fa: 'نرده راهروها و فضاهای پرتردد عمومی', ar: 'ممرات المشاة والمناطق العامة', en: 'High-traffic corridors and walkways' },
      { fa: 'پروژه‌های انبوه‌سازی با نیاز به تحویل سریع', ar: 'مشاريع البناء الكبرى ذات الجداول السريعة', en: 'Mass housing developments & rapid fit-outs' },
    ],
  },
  {
    id: 'post-cubic-gold',
    modelCode: 'STX-CBC-40G',
    postCategory: 'prefab',
    name: {
      fa: 'پایه پیش‌ساخته قوطی مدرن کیوبیک طلایی (Cubic Gold PVD 40x40)',
      ar: 'قائمة قوطي مربعة مسبقة الصنع مودرن PVD ذهبية ٤٠×٤٠',
      en: 'Pre-Fabricated Cubic Luxury 40x40mm Gold PVD Square Post',
    },
    badge: {
      fa: 'پایه پیش‌ساخته لوکس طلافروشی، هتل و ویلاهای مدرن',
      ar: 'فاخرة لمحلات المجوهرات والفنادق والفلل',
      en: 'Luxury Modular Choice for Hotels, Jewelers & Villas',
    },
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    detailImages: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80',
    ],
    projectImages: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1541888946425-d0fbb186156a?auto=format&fit=crop&w=1000&q=80',
    ],
    projectVideoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-curved-staircase-in-a-luxurious-hotel-lobby-43344-large.mp4',
    height: '۹۰۰ الی ۱۰۰۰ میلی‌متر',
    profileDimensions: {
      fa: 'قوطی مربعی ۴۰×۴۰ میلی‌متر گوشتی سنگین',
      ar: 'أنبوب مربع ٤٠×٤٠ ملم جدار سميك',
      en: 'Heavy Wall 40x40mm Square Box Profile',
    },
    thickness: '۲.۰ میلی‌متر گوشت کامل صنعتی',
    alloyGrade: {
      fa: 'استیل ۳۰۴ / ۳۱۶ با پوشش نیترید تیتانیوم PVD تحت خلأ',
      ar: 'ستانلس ستيل ٣٠٤/٣١٦ مع طلاء PVD تيتانيوم تحت التفريغ',
      en: '304/316 Base Alloy with High-Vacuum Titanium Nitride PVD',
    },
    finish: {
      fa: 'طلایی آینه‌ای رویال (Royal Gold PVD) / طلایی خش‌دار متالیک',
      ar: 'ذهبي مرآة ملكي / ذهبي حريري مطفي',
      en: 'Royal Mirror Gold / Brushed Satin Titanium Gold',
    },
    baseMounting: {
      fa: 'بیس‌پلیت مربعی دوبل مخفی با قالپاق مربعی لوکس مغناطیسی',
      ar: 'قاعدة مربعة مخفية مع غطاء مغناطيسي بدون براغي ظاهرة',
      en: 'Concealed double square base plate with snap-fit magnetic square escutcheon',
    },
    handrailCompatibility: {
      fa: 'هندریل قوطی ۴۰×۲۰، لوله ۵۱ طلایی یا چوب ترمووود راش',
      ar: 'هندريل مربع ٤٠×٢٠، أنبوب ٥١ ذهبي أو خشب ثرمووود',
      en: '40x20mm Rectangle Handrail, 51mm Gold Tube or Dark Hardwood',
    },
    infillType: {
      fa: 'شیشه سکوریت شفاف/دودی ۱۰ الی ۱۶ میل یا لوله‌های طلایی ۱۶ میل',
      ar: 'زجاج سيكوريت شفاف/مدخن ١٠ إلى ١٦ ملم أو أنابيب ذهبية',
      en: '10-16mm Tinted/Clear Glass with Clamps or 16mm PVD Horizontal Tubes',
    },
    weight: '۳.۱ کیلوگرم هر عدد',
    loadCapacity: '۲۷۰ کیلوگرم بر متر طول',
    warrantyYears: 15,
    standardCert: 'PVD MIL-STD / ASTM E985 / CE',
    includedHardware: [
      { fa: 'قالپاق مربعی ۴۰×۴۰ طلایی ضدخش', ar: 'غطاء مربع ذهبي فاخر مضاد للخدش', en: 'Scratch-resistant gold square base cover' },
      { fa: 'بست‌های کلمپ شیشه یا چنگک طلایی زوایای پله', ar: 'مثبتات زجاج أو أنابيب ذهبية مفصلية', en: 'PVD gold glass clamps or swivel tube brackets' },
      { fa: 'سدل سرپایه مربعی با پیچ‌های مخفی آلن', ar: 'حامل علوي مربع ببراغي مخفية', en: 'Square articulated top saddle with concealed set-screws' },
      { fa: 'پک پیچ و رولبولت استاندارد هیلتی ضدزنگ', ar: 'مجموعة براغي التثبيت الفولاذية', en: 'Complete stainless anchoring hardware kit' },
    ],
    unitPrice: 11800000,
    linearMeterPrice: 28000000,
    description: {
      fa: 'پایه مربعی کیوبیک طلایی نماد اوج هماهنگی مینیمالیسم هندسی و درخشش رنگ طلای سلطنتی است. پوشش PVD اختصاصی استیلکس در دمای ۴۰۰ درجه سانتی‌گراد پخته شده و مقاومت سایشی و نوری مادام‌العمر دارد.',
      ar: 'تجمع القائمة المربعة الذهبية كيوبيك بين دقة الخطوط الهندسية وفخامة الطلاء الذهبي الملكي المقاوم للتآكل وأشعة الشمس.',
      en: 'The Cubic Gold PVD square post combines crisp architectural geometry with deep lustrous titanium gold finish, elevating modern duplexes, hotel lobbies and premium retail stores.',
    },
    idealFor: [
      { fa: 'دوبلکس‌های مدرن، عمارت‌ها و تالارهای تشریفاتی', ar: 'الفلل الدوبلكس، القصور وصالات الاحتفالات', en: 'Modern luxury duplexes, mansions & event halls' },
      { fa: 'طلافروشی‌ها، صرافی‌ها و بوتیک‌های برند لوکس', ar: 'محلات المجوهرات والصرافة والمعارض الراقية', en: 'Jewelry boutiques, luxury retail & banks' },
      { fa: 'هتل‌های ۵ ستاره و مجتمع‌های تجاری شاخص', ar: 'فنادق ٥ نجوم والمجمعات التجارية الراقية', en: '5-star hotels & premier shopping galleries' },
    ],
  },
  {
    id: 'post-twin-bar',
    modelCode: 'STX-TWB-FLAT',
    postCategory: 'prefab',
    name: {
      fa: 'پایه پیش‌ساخته دوبل تسمه آرشیتکتورال (Architectural Twin-Bar)',
      ar: 'قائمة تسميات مزدوجة مسبقة الصنع معمارية (Twin-Bar Flat)',
      en: 'Pre-Fabricated Architectural Twin-Bar Flat Laser-Cut Post',
    },
    badge: {
      fa: 'طراحی پیش‌ساخته مهندسی و آرشیتکتی سنگین',
      ar: 'تصميم معماري هندسي مسبق الصنع',
      en: 'Architectural & Heavy Structural Modular Choice',
    },
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80',
    detailImages: [
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80',
    ],
    projectImages: [
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1541888946425-d0fbb186156a?auto=format&fit=crop&w=1000&q=80',
    ],
    projectVideoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-modern-apartment-interior-with-stairs-42775-large.mp4',
    height: '۹۵۰ الی ۱۰۵۰ میلی‌متر',
    profileDimensions: {
      fa: 'دو عدد تسمه دوبل ۱۰×۵۰ میلی‌متر برش لیزر CNC',
      ar: 'شريحتان فولاذيتان مزدوجتان مقاس ١٠×٥٠ ملم قص ليزر',
      en: 'Dual 10x50mm Precision CNC Laser Cut Solid Bars',
    },
    thickness: '۱۰ میلی‌متر تسمه استیل دوبل (مجموعاً ۲۰ میلی‌متر باربر)',
    alloyGrade: {
      fa: 'استیل ۳۰۴ / ۳۱۶ فابریک توپر صنعتی',
      ar: 'ستانلس ستيل ٣٠٤/٣١٦ فابريك مصمت',
      en: 'Industrial Solid Austenitic 304/316 Plate',
    },
    finish: {
      fa: 'خش‌دار مات خطی (Hairline Satin) / نقره‌ای آینه‌ای / بلک کروم',
      ar: 'حريري مطفي خطي / مرآة فضية / أسود كروم',
      en: 'Fine Hairline Satin / Mirror Polish / Black Chrome',
    },
    baseMounting: {
      fa: 'قابلیت نصب روکار (کف‌پله) یا نصب اکسپوز از بغل پیشانی پله (Side/Fascia Mount)',
      ar: 'إمكانية التركيب العلوي أو الجانبي على واجهة الدرج (Side Mount)',
      en: 'Top surface tread mount or Side Fascia step mounting options',
    },
    handrailCompatibility: {
      fa: 'هندریل چوب بلوط/گردو طبیعی، لوله استیل ۵۱ یا تسمه تخت ۴۰',
      ar: 'هندريل خشب طبيعي بلوط/جوز أو أنبوب ستانلس',
      en: 'Natural Oak/Walnut Timber Handrail, 51mm Stainless Tube or Flat Bar',
    },
    infillType: {
      fa: 'جام‌های شیشه سکوریت لمینت ۱۰ تا ۱۶ میل بین دو تسمه یا کابل استیل',
      ar: 'ألواح زجاج سيكوريت مصفح ١٠ إلى ١٦ ملم بين الشريحتين',
      en: '10-16mm Laminated Glass Captured Between Bars or Wire System',
    },
    weight: '۴.۸ کیلوگرم هر عدد',
    loadCapacity: '۳۳۰ کیلوگرم بر متر طول (فوق سنگین)',
    warrantyYears: 15,
    standardCert: 'DIN 18065 / ASTM E985 / MTC',
    includedHardware: [
      { fa: 'اسپیسرها و بوش‌های تفلونی ضد ارتعاش', ar: 'فواصل وبوشات تفلون مانعة للاهتزاز', en: 'Anti-vibration Teflon spacers & compression bushings' },
      { fa: 'پیچ‌ها و مهره‌های ماسوره‌ای تراشکاری‌شده استیل', ar: 'صواميل وبراغي ستانلس مخرطة دقيقة', en: 'Precision-machined decorative stainless cap bolts' },
      { fa: 'بیس‌پلیت سنگین با براکت تنظیم شیب شمشیری', ar: 'قاعدة تثبيت مع مفصل ضبط ميلان الدرج', en: 'Heavy base plate with stair angle compensator' },
      { fa: 'کاورهای محافظ محل سوراخکاری شیشه', ar: 'أغطية واقية لنقاط تثبيت الزجاج', en: 'Glass perforation protective collars' },
    ],
    unitPrice: 17200000,
    linearMeterPrice: 40000000,
    description: {
      fa: 'پایه دوبل تسمه آرشیتکتورال انتخابی منحصربه‌فرد برای معماران برجسته است. ضخامت ۲۰ میلی‌متری تسمه‌ها استحکام سازه‌ای کم‌نظیری را فراهم کرده و قابلیت نصب از کنار پیشانی پله (Side Mount) فضای مفید تردد را افزایش می‌دهد.',
      ar: 'تعد القائمة المزدوجة Twin-Bar الخيار المفضل للمهندسين المعماريين لما توفره من صلابة هيكلية وإمكانية التثبيت الجانبي لتوسيع عرض الدرج.',
      en: 'Engineered for visionary architects, the Twin-Bar flat post offers immense structural stiffness with its dual 10mm solid plates, enabling dramatic side-fascia mounting that maximizes staircase clearance.',
    },
    idealFor: [
      { fa: 'پله‌های معلق، کنسولی و اکسپوز ویلاهای مدرن', ar: 'السلالم المعلقة والمكشوفة في الفلل الحديثة', en: 'Cantilevered & floating stairs in luxury villas' },
      { fa: 'مجتمع‌های اداری مدرن و ساختمان‌های دفتر مرکزی', ar: 'المباني الإدارية الحديثة والمقرات الرئيسية', en: 'Corporate headquarters & modern commercial spaces' },
      { fa: 'پروژه‌هایی با محدودیت عرض پله و نیاز به نصب از بغل', ar: 'السلالم ذات العرض المحدود التي تتطلب تثبيتاً جانبياً', en: 'Narrow stairways requiring side-fascia clearance' },
    ],
  },
  {
    id: 'post-star-clamp',
    modelCode: 'STX-STR-CLM',
    postCategory: 'prefab',
    name: {
      fa: 'پایه پیش‌ساخته بست شیشه‌ای استار کلمپ (Star Glass Clamp Post)',
      ar: 'قائمة مثبتات الزجاج مسبقة الصنع ستار كランプ ٥١ (Star Clamp)',
      en: 'Pre-Fabricated Star Round Glass Clamp Post with 4 Heavy Clamps',
    },
    badge: {
      fa: 'بالاترین ایمنی سازه‌ای برای پرتگاه و وید مجتمع‌ها',
      ar: 'أعلى درجات الأمان للشرفات والمجمعات',
      en: 'Maximum Safety for Voids & Commercial Atriums',
    },
    image: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=800&q=80',
    detailImages: [
      'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1541888946425-d0fbb186156a?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80',
    ],
    projectImages: [
      'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80',
    ],
    projectVideoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-bright-hallway-with-glass-railings-and-steps-43345-large.mp4',
    height: '۹۰۰ الی ۹۵۰ میلی‌متر',
    profileDimensions: {
      fa: 'لوله استیل قطر ۵۱ میلی‌متر با ۴ کلمپ دایکست استیل',
      ar: 'أنبوب ٥١ ملم مع ٤ مثبتات زجاج ستانلس دقيقة',
      en: '51mm Round Post with 4 Precision Die-Cast Glass Clamps',
    },
    thickness: '۲.۰ میلی‌متر گوشت لوله + کلمپ‌های توپر ریخته‌گری',
    alloyGrade: {
      fa: 'استنلس استیل ۳۰۴ / ۳۱۶ استاندارد بین‌المللی',
      ar: 'ستانلس ستيل ٣٠٤/٣١٦ معتمد دولياً',
      en: 'International Grade 304 or Marine 316 Stainless',
    },
    finish: {
      fa: 'سوپر میرور ۸K براق / خش‌دار ساتن ضد لک',
      ar: 'مرآة براقة ٨K / ساتان حريري ضد البصمات',
      en: 'Super Mirror 8K / Anti-Fingerprint Hairline Satin',
    },
    baseMounting: {
      fa: 'کفی ریخته‌گری سنگین با ۴ رول‌بولت بولتن و قالپاق چاکدار پرسی',
      ar: 'قاعدة صب ثقيلة بـ ٤ براغي مع غطاء أرضي مضغوط',
      en: 'Heavy cast 4-anchor base plate with snap-on flush escutcheon',
    },
    handrailCompatibility: {
      fa: 'هندریل لوله ۵۱ یا لوله ۶۳ استیل با سرپایه مفصلی',
      ar: 'هندريل أنبوب ٥١ أو ٦٣ ملم مع وصلة علوية مفصلية',
      en: '51mm or 63mm Stainless Handrail Tube with Articulated Saddle',
    },
    infillType: {
      fa: 'جام شیشه سکوریت و لمینت ۸، ۱۰ و ۱۲ میلی‌متر با پین ایمنی ضد سقوط',
      ar: 'زجاج سيكوريت ٨، ١٠ و ١٢ ملم مع مسمار أمان لمنع السقوط',
      en: '8mm, 10mm & 12mm Glass Infill with Anti-Drop Safety Security Pin',
    },
    weight: '۳.۲ کیلوگرم هر عدد',
    loadCapacity: '۲۹۰ کیلوگرم بر متر طول',
    warrantyYears: 15,
    standardCert: 'BS 6180 / ASTM E985 / ISO 9001',
    includedHardware: [
      { fa: '۴ عدد بست کلمپ شیشه D-Type تمام استیل با واشر EPDM', ar: '٤ مثبتات زجاج D-Type مع واشرات EPDM', en: '4x D-Shape Stainless Glass Clamps with EPDM Gaskets' },
      { fa: 'پین فولادی قفل‌کننده ایمنی داخل شیشه', ar: 'مسمار قفل أمان فولادي داخلي', en: 'Internal structural glass safety support pin' },
      { fa: 'قالپاق کششی بدون درز فابریک استیلکس', ar: 'غطاء أرضي مسحوب بدون فواصل', en: 'Seamless deep-draw floor cover escutcheon' },
      { fa: 'سرپایه قابل تنظیم زاویه هندریل', ar: 'حامل علوي مفصلي لمقبض اليد', en: 'Adjustable top saddle adapter for ramp incline' },
    ],
    unitPrice: 9400000,
    linearMeterPrice: 22000000,
    description: {
      fa: 'پایه آماده نصب استار کلمپ ترکیب پایداری لوله‌های استیل با شفافیت پنل‌های شیشه‌ای است. کلمپ‌های دایکست این پایه مجهز به پین قفل‌کننده ضد سقوط بوده و برای راهروها و پرتگاه‌های مجتمع‌های تجاری و مسکونی بالاترین ضریب ایمنی را تضمین می‌کند.',
      ar: 'تجمع القائمة استار كرمپ بين ثبات أنابيب الصلب وشفافية الألواح الزجاجية مع مثبتات أمان ضد السقوط تضمن أعلى درجات السلامة في المجمعات التجارية.',
      en: 'The Star Clamp post merges modular stainless tube strength with framed safety glass panels. Equipped with captive safety load pins, it satisfies stringent commercial building safety codes for high-fall atrium voids.',
    },
    idealFor: [
      { fa: 'وید و بالکن‌های مرتفع مجتمع‌های تجاری و مراکز خرید', ar: 'شرفات وممرات المجمعات التجارية والأسواق', en: 'Shopping malls, atrium voids & multi-story mezzanines' },
      { fa: 'تراس ساختمان‌های مسکونی با کودک یا تردد بالا', ar: 'شرفات المباني السكنية الآمنة للأطفال', en: 'Residential balconies requiring maximum child safety' },
      { fa: 'فرودگاه‌ها، پایانه‌ها و ایستگاه‌های مسافربری', ar: 'المطارات والمحطات العامة', en: 'Airports, transit terminals & public venues' },
    ],
  },
  {
    id: 'post-black-titanium-led',
    modelCode: 'STX-HDL-BLK-LED',
    postCategory: 'artistic_handrail',
    name: {
      fa: 'هندریل هنری بلک تیتانیوم لاینر با نورپردازی هوشمند (Black Titanium VIP Linear LED Handrail)',
      ar: 'هندريل فني بلاك تيتانيوم الذكي مع إضاءة LED خطية (VIP Black LED Handrail)',
      en: 'Black Titanium VIP Architectural Linear LED Handrail',
    },
    badge: {
      fa: 'هندریل اکسپوز فوق‌مدرن با لاین نوری هوشمند و تیتانیوم دودی PVD',
      ar: 'هندريل فخم فائق العصرية مع إضاءة LED وتيتانيوم أسود',
      en: 'Ultra-Modern Dark Luxury Handrail with Integrated Underside LED',
    },
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
    detailImages: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80',
    ],
    projectImages: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=80',
    ],
    projectVideoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-modern-luxury-building-facade-42774-large.mp4',
    height: '۹۵۰ الی ۱۱۰۰ میلی‌متر',
    profileDimensions: {
      fa: 'پروفیل شیاردار ۶۰×۳۰ یا ۵۰×۵۰ با داکت سیم‌کشی مخفی',
      ar: 'قطاع ٦٠×٣٠ مع مجرى مخفي لتمديدات الإضاءة',
      en: '60x30mm Grooved Architectural Profile with Concealed Wire Conduit',
    },
    thickness: '۲.۵ میلی‌متر گوشتی تقویت‌شده سازه‌ای',
    alloyGrade: {
      fa: 'استیل ۳۱۶ با پوشش تیتانیوم دودی PVD و نانو سرامیک ضدخش',
      ar: 'ستانلس ستيل ٣١٦ مع طلاء تيتانيوم أسود PVD ونانو سيراميك',
      en: 'Marine 316 Stainless with Black Titanium PVD & Nano-Ceramic Hard-Coat',
    },
    finish: {
      fa: 'مشکی تیتانیوم مات متالیک (Satin Black Titanium) / دودی آینه‌ای',
      ar: 'أسود تيتانيوم حريري مطفي / رمادي دخاني مرآة',
      en: 'Satin Matte Black Titanium / Smoky Dark Mirror',
    },
    baseMounting: {
      fa: 'بیس‌پلیت دفنی ضدآب با خروجی برق IP68 و قالپاق مغناطیسی بدون پیچ رو',
      ar: 'قاعدة تثبيت مدمجة مقاومة للماء IP68 مع غطاء مغناطيسي',
      en: 'Waterproof IP68 subterranean base plate with concealed magnetic escutcheon',
    },
    handrailCompatibility: {
      fa: 'هندریل شیاردار ال‌ای‌دی مشکی، چوب گردوی تیره یا شیشه بدون فرم',
      ar: 'هندريل أسود مضيء LED أو خشب جوز داكن',
      en: 'Slotted Black LED Handrail, Smoked Oak or Minimalist Frameless Cap',
    },
    infillType: {
      fa: 'شیشه کریستال سوپرکلیر، شیشه دودی لمینت یا ورق استیل مشبک لیزری',
      ar: 'زجاج كريستال فائق النقاء، زجاج مدخن مصفح أو صفائح ليزر',
      en: 'Ultra-Clear Low-Iron, Smoked Laminated Glass or CNC Perforated Panels',
    },
    weight: '۴.۲ کیلوگرم هر عدد',
    loadCapacity: '۳۱۰ کیلوگرم بر متر طول',
    warrantyYears: 15,
    standardCert: 'IP68 Waterproof / CE / ASTM E985 / PVD MIL',
    includedHardware: [
      { fa: 'کیت روشنایی ال‌ای‌دی استریپ لاین نوری ۱۲ ولت ضدآب IP68', ar: 'شريط إضاءة LED مقاوم للماء ١٢ فولت IP68', en: '12V IP68 Waterproof Linear Accent LED Strip Kit' },
      { fa: 'ترمینال و کابل‌های نسوز ضدآب توکار', ar: 'توصيلات كهربائية مقاومة للحرارة والماء', en: 'Concealed flame-retardant waterproof cable harnesses' },
      { fa: 'کاور مغناطیسی پایه‌کف بدون پیچ رو با پوشش مشکی PVD', ar: 'غطاء مغناطيسي أسود بدون براغي ظاهرة', en: 'Screwless magnetic black titanium floor cover' },
      { fa: 'بست‌های شیشه دودی تمام‌استیل مشکی با لاستیک‌های سیلیکونی', ar: 'مثبتات زجاج سوداء مع مطاط سيليكون', en: 'Black PVD glass clamps with premium black silicone isolators' },
    ],
    unitPrice: 21500000,
    linearMeterPrice: 45000000,
    description: {
      fa: 'هندریل هنری بلک تیتانیوم ال‌ای‌دی استیلکس پرچمدار سازه‌های لوکس شب‌تاب است. تلفیق متالوژی تیتانیوم دودی PVD با لاین نوری مخفی ال‌ای‌دی، در تاریکی شب جلوه‌ای سینمایی و رویایی به پله‌ها، استخرها و تراس‌های لاکچری می‌بخشد.',
      ar: 'تعد القائمة بلاك تيتانيوم المضيئة قمة الفخامة العصرية، حيث تدمج بين الستانلس ستيل الأسود المقاوم للخدش وشريط إضاءة LED مخفي يضفي رونقاً ساحراً ليلاً.',
      en: 'STELLEX Black Titanium LED handrail is the pinnacle of nocturnal luxury architecture. Fusing high-vacuum black titanium PVD with seamless IP68 light channels, it transforms staircases and pool decks into illuminated art.',
    },
    idealFor: [
      { fa: 'پنت‌هاوس‌ها، ویلاهای تریپلکس و عمارت‌های مدرن شب‌نما', ar: 'البنتهاوس والفلل التريبلكس والقصور الليلية الفاخرة', en: 'Nocturnal luxury penthouses, triplexes & modern estates' },
      { fa: 'روف‌گاردن‌ها، آتشکده‌ها و محوطه حاشیه استخر شبانه', ar: 'حدائق الأسطح ومحيط المسابح ذات الإضاءة الليلية', en: 'Rooftops, fire pits & illuminated night pool decks' },
      { fa: 'رستوران‌های روف‌تاپ و کلوپ‌های VIP بین‌المللی', ar: 'المطاعم الفاخرة والنوادي الراقية', en: 'Rooftop lounges, VIP suites & boutique hospitality' },
    ],
  },
  {
    id: 'post-handrail-swan-gold',
    modelCode: 'STX-HDL-SWN-GLD',
    postCategory: 'artistic_handrail',
    workClass: {
      fa: 'کلاس هندریل هنری: سلطنتی یکپارچه گردن‌قو (Royal Swan-Neck Luxury Handrail)',
      ar: 'الفئة الملكية: هندريل رقبة البجعة الذهبي الفاخر',
      en: 'Class: Royal Swan-Neck Seamless 24K Gold Handrail',
    },
    name: {
      fa: 'هندریل هنری یکپارچه سلطنتی گردن‌قو طلایی (Royal Swan-Neck Seamless 24K Gold Handrail)',
      ar: 'هندريل فني انسيابي ملكي رقبة البجعة ذهبي عيار ٢٤ (Royal Swan-Neck Gold)',
      en: 'Royal Seamless Swan-Neck 24K Titanium Gold Architectural Handrail',
    },
    badge: {
      fa: 'هندریل منحنی پیوسته دست‌ساز با انحناهای نرم گردن‌قو و آبکاری طلایی ۲۴K',
      ar: 'مقبض درج انسيابي مستمر مع انحناءات رقبة البجعة وطلاء ذهبي عيار ٢٤',
      en: 'Continuous Flowing Swan-Neck Ergonomic Handrail with 24K Mirror Titanium Gold',
    },
    image: goldPalaceRailingImg,
    detailImages: [
      goldPalaceRailingImg,
      goldPalaceBackupImg,
      goldPalaceLightedImg,
      starterRoyalPalaceImg,
    ],
    projectImages: [
      goldPalaceRailingImg,
      luxuryStairRailingImg,
      goldPalaceLightedImg,
    ],
    projectVideoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-curved-staircase-in-a-luxurious-hotel-lobby-43344-large.mp4',
    height: '۹۰۰ الی ۱۰۰۰ میلی‌متر استاندارد',
    profileDimensions: {
      fa: 'لوله ارگونومیک قطر ۵۱ یا ۶۳ میلی‌متر با زانوهای فرم‌دهی سرد سوان‌نک',
      ar: 'أنبوب مريح قطر ٥١ أو ٦٣ ملم مع انحناءات باردة رقبة البجعة',
      en: 'Ergonomic 51mm or 63mm OD Tube with Cold-Formed Continuous Swan-Neck Transitions',
    },
    thickness: '۲.۵ میلی‌متر گوشتی سنگین ضد دفرمه',
    alloyGrade: {
      fa: 'استنلس استیل ۳۰۴ نگیر سوپر آینه‌ای با پوشش نیترید تیتانیوم PVD ۲۴ عیار',
      ar: 'ستانلس ستيل ٣٠٤ مع طلاء تيتانيوم ذهبي عيار ٢٤ فائق اللمعان',
      en: 'Austenitic AISI 304 High-Purity with 24K Titanium Gold PVD Mirror Plating',
    },
    finish: {
      fa: 'سوپر میرور ۸K فوق براق بدون کوچکترین انحراف بصری و درز جوش اکسپوز',
      ar: 'مرآة فائقة ٨K بدون فواصل لحام ظاهرة',
      en: 'Flawless 8K Super Mirror Optical Polish, Seamless Welds & Joins',
    },
    baseMounting: {
      fa: 'پایه‌های نگهدارنده براکت سنگین دیواری توپر یا اتصال مستقیم به ستون‌های استارت',
      ar: 'حوامل جدارية مصمتة ثقيلة أو تثبيت مباشر على استارترات السلالم',
      en: 'Heavy-duty solid wall brackets or direct mechanical interface to royal newel posts',
    },
    handrailCompatibility: {
      fa: 'هندریل اصلی راه‌پله‌های دوبلکس، ویدها و شاه‌نشین عمارت‌های مجلل',
      ar: 'المقبض الرئيسي لسلالم القصور والفلل الفاخرة',
      en: 'Primary grand architectural handrail for imperial stairs & atriums',
    },
    infillType: {
      fa: 'سازگار با خطوط لوله موازی، بالسترهای منبت استیل و پنل‌های شیشه کریستال',
      ar: 'متوافق مع الخطوط الأفقية، بالسترات الزخرفية وألواح الزجاج الكريستالي',
      en: 'Matching horizontal gold rods, bespoke ornamental balusters or crystal glass',
    },
    weight: '۵.۸ کیلوگرم هر شاخه',
    loadCapacity: '۳۶۰ کیلوگرم بر متر طول',
    warrantyYears: 15,
    standardCert: 'ASTM A554 / CE EN 12600 / ISO 9001:2015',
    includedHardware: [
      { fa: 'زانویی‌های خم نرم گردن‌قو (Swan-Neck) فابریک ریخته‌گری استیلکس', ar: 'وصلات انحناء رقبة البجعة الانسيابية الفابريك', en: 'Factory precision swan-neck curved elbow adapters' },
      { fa: 'کوپلینگ‌های انبساطی مغزی مخفی اتصال شاخه‌ها بدون درز جوش', ar: 'وصلات تمدد داخلية مخفية للربط غير المرئي', en: 'Concealed internal expanding alignment connectors' },
      { fa: 'براکت‌های لوکس دیواری ریخته‌گری توپر با قالپاق مگنتی', ar: 'حوامل جدارية فاخرة بأغطية مغناطيسية', en: 'Solid cast decorative wall mounting brackets with magnetic covers' },
    ],
    unitPrice: 19800000,
    linearMeterPrice: 38000000,
    description: {
      fa: 'هندریل هنری یکپارچه سلطنتی با فرم‌های انحنادار گردن‌قو (Swan-Neck) اوج ظرافت دست صنعتگران استیلکس است. حذف زوایای شکسته و جوش‌های نازیبا، حسی از امتداد بی‌پایان فلز طلا را به دستان نوازشگر القا می‌کند.',
      ar: 'يمثل هذا الهندريل الفني الملكي قمة الحرفية في تشكيل الستانلس ستيل، حيث تتدفق انحناءات رقبة البجعة بسلاسة دون زوايا حادة لتعطي إحساساً بالفخامة المطلقة.',
      en: 'The Royal Swan-Neck seamless handrail represents the pinnacle of artisanal metalforming. By banishing angular joints in favor of organic continuous gold sweeps, it provides an uninterrupted tactile journey of royal indulgence.',
    },
    idealFor: [
      { fa: 'راه‌پله‌های مجلل دوبلکس، کاخ‌ویلاها و عمارت‌های نئوکلاسیک و باروک', ar: 'سلالم القصور والفلل الكلاسيكية وصالات الاحتفالات', en: 'Grand palace staircases, baroque estates & neoclassical villas' },
      { fa: 'ویدهای مرکزی و پل‌های ارتباطی شیشه‌ای هتل‌های سلطنتی', ar: 'الجسور المعلقة والشرفات الملكية في الفنادق', en: 'Hotel central atriums, grand mezzanines & presidential suites' },
      { fa: 'پروژه‌های بازسازی و ساخت تالارهای پذیرایی VIP', ar: 'قاعات استقبال كبار الشخصيات والنوادي الخاصة', en: 'VIP banquet halls & luxury ballroom entrances' },
    ],
  },
  {
    id: 'post-handrail-japandi-sculptural',
    modelCode: 'STX-HDL-JPN-OAK',
    postCategory: 'artistic_handrail',
    workClass: {
      fa: 'کلاس هندریل هنری: تلفیق چوب بلوط و استیل مینیمال (Japandi Architecture)',
      ar: 'فئة هندريل جابانّدي خشب وبلوط ستانلس ناعم',
      en: 'Class: Bespoke Japandi Natural Timber & Stainless Handrail',
    },
    name: {
      fa: 'هندریل هنری اسلیم ژاپندی چوب و استیل معلق (Bespoke Japandi Wood & Stainless Handrail)',
      ar: 'هندريل فني نحيف جابانّدي خشب وبلوط ستانلس (Japandi Handrail)',
      en: 'Bespoke Japandi Architectural Natural Timber & Stainless Slim Handrail',
    },
    badge: {
      fa: 'تلفیق هنری استیل برنز شامپاینی و چوب بلوط طبیعی با هندسه خطی پیور',
      ar: 'دمج فني بين الستانلس الشامباني وخشب البلوط الطبيعي بنقاء هندسي',
      en: 'Pure Japandi Fusion of Satin Champagne Stainless & Natural Oak Timber',
    },
    image: minimalVillaRailingImg,
    detailImages: [
      minimalVillaRailingImg,
      silverPalaceRailingImg,
      luxuryStairRailingImg,
    ],
    projectImages: [
      minimalVillaRailingImg,
      silverPalaceRailingImg,
      luxuryStairRailingImg,
    ],
    projectVideoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-modern-apartment-interior-with-stairs-42775-large.mp4',
    height: '۹۰۰ میلی‌متر استاندارد نظام مهندسی',
    profileDimensions: {
      fa: 'پروفیل مستطیلی اسلیم ۶۰×۲۵ میلی‌متر استیل شامپاینی با مغزی چوب بلوط',
      ar: 'قطاع نحيف ٦٠×٢٥ ملم ستانلس شامباني مع خشب بلوط طبيعي',
      en: 'Slender 60x25mm Satin Champagne Stainless Casing with Solid Natural Oak Inlay',
    },
    thickness: '۲.۰ میلی‌متر استیل تقویت‌شده + چوب اشباع ضد رطوبت',
    alloyGrade: {
      fa: 'استنلس استیل ۳۰۴ نگیر با فینیش شامپاینی برنز مات ساتین و پوشش محافظ ضد لک',
      ar: 'ستانلس ستيل ٣٠٤ مع طلاء PVD شامباني برونزي مضاد للبصمات',
      en: 'AISI 304 Stainless with Satin Brushed Champagne-Bronze PVD & Anti-Stain Nano-Coat',
    },
    finish: {
      fa: 'ساتین برس‌خورده ابریشمی (Satin Hairline) بدون بازتاب زننده',
      ar: 'ساتان حريري ناعم مضاد للانعكاسات المزعجة',
      en: 'Subtle Non-Glare Satin Hairline Bronze with Warm Organic Texture',
    },
    baseMounting: {
      fa: 'براکت‌های اسلیم دیواری مخفی با پیچ‌های توکار و شابلون نصب لیزری',
      ar: 'حوامل جدارية نحيفة مخفية بالكامل لمنظر عائم',
      en: 'Ultra-slim concealed floating wall brackets with laser-aligned mounting pins',
    },
    handrailCompatibility: {
      fa: 'پله‌های شناور چوب بلوط، بتن اکسپوز، پله‌های معلق و راهروهای مینیمال',
      ar: 'السلالم العائمة والخرسانية والممرات المينيمالية',
      en: 'Cantilevered oak floating stairs, exposed architectural concrete & gallery walls',
    },
    infillType: {
      fa: 'بالسترهای اسلیم عمودی، سیم‌بکسل یا شیشه‌های فوق شفاف کریستال',
      ar: 'بالسترات رأسية نحيفة، كوابل شد أو زجاج شفاف',
      en: 'Vertical slim balusters, stainless tension cables or ultra-clear low-iron glass',
    },
    weight: '۴.۴ کیلوگرم هر شاخه',
    loadCapacity: '۳۰۰ کیلوگرم بر متر طول',
    warrantyYears: 15,
    standardCert: 'ASTM E985 / DIN 18065 / CE Directive',
    includedHardware: [
      { fa: 'شابلون دقیق مته‌کاری لیزری جهت نصب آسان و تراز میلی‌متری', ar: 'قالب تحديد ثقوب بالليزر لسهولة التركيب بدقة متناهية', en: 'Precision laser-cut drill template for millimeter-perfect alignment' },
      { fa: 'براکت‌های اسلیم دیواری مگنتی بدون پیچ رو', ar: 'حوامل جدارية مغناطيسية بدون براغي ظاهرة', en: 'Concealed magnetic escutcheon slim architectural wall brackets' },
      { fa: 'درپوش‌های انتهایی ارگونومیک تمام استیل با شعاع منحنی ایمن', ar: 'سدادات نهاية أنيقة بانحناءات آمنة تمنع التعثر', en: 'Ergonomic stainless end-caps with code-compliant safety radius returns' },
    ],
    unitPrice: 17500000,
    linearMeterPrice: 31000000,
    description: {
      fa: 'هندریل هنری سبک ژاپندی با پیوند آرامش‌بخش چوب بلوط ارگانیک و استنلس استیل شامپاینی، لمسی گرم و حسی از هماهنگی با طبیعت را به فضاهای معاصر هدیه می‌دهد.',
      ar: 'يجمع هذا الهندريل الفني بين دفء خشب البلوط الطبيعي وأناقة الستانلس ستيل الشامباني ليوفر تصميماً مريحاً وبسيطاً يتناغم مع أرقى الديكورات العصرية.',
      en: 'Blending warm Scandinavian natural oak with the serene precision of Japanese-inspired brushed champagne steel, this handrail delivers understated poetic tactile elegance.',
    },
    idealFor: [
      { fa: 'ویلاهای مدرن مینیمال، خانه‌های سبک ژاپندی و پنت‌هاوس‌های نوردیک', ar: 'الفلل المودرن ومنازل الطراز الجابانّدي والمساحات المينيمال', en: 'Modern minimalist villas, Japandi residences & Nordic penthouses' },
      { fa: 'راه‌پله‌های کنسولی معلق و شناور با کف‌پله‌های چوبی طبیعی', ar: 'السلالم المعلقة ذات الدرجات الخشبية الطبيعية', en: 'Floating cantilever stairways with natural timber treads' },
      { fa: 'فضاهای کار اشتراکی، دفاتر معماری و شوروم‌های برندهای دیزاین', ar: 'مكاتب الهندسة المعمارية وصالات عرض التصميم الراقي', en: 'Boutique architectural studios, design showrooms & art spaces' },
    ],
  },
];
