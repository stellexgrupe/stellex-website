import { LandscapingProduct } from '../types';
import outdoorWaterfallPool from '../assets/images/landscaping/modern_waterfall_pool.jpg';
import outdoorPoolPergola from '../assets/images/landscaping/luxury_pool_pergola.jpg';
import outdoorEntranceFountain from '../assets/images/landscaping/sculptural_fountain_feature.jpg';
import outdoorGardenBridge from '../assets/images/landscaping/architectural_garden_bridge.jpg';

export const LANDSCAPING_PRODUCTS: LandscapingProduct[] = [
  {
    id: 'out-reflwall-01',
    modelCode: 'STX-OUT-REFLWALL01',
    name: {
      fa: 'دیوار آبنمای پرده‌ای و استخر رفلکتینگ مدرن (Reflecting Pool & Water Wall)',
      ar: 'جدارية شلال الماء العاكسة الحديثة وبركة الانعكاس المعمارية',
      en: 'Architectural Reflecting Pool & Illuminated Water Wall',
    },
    designerSeries: {
      fa: 'سری وال‌آب و استخرهای رفلکتینگ مدرن (Architectural Water Wall Series)',
      ar: 'سلسلة الشلالات الجدارية والبرك العاكسة المعمارية',
      en: 'Architectural Water Wall & Reflecting Basin Series',
    },
    pinterestInspiration: 'https://www.pinterest.com/pin/3870349675963023/',
    badge: {
      fa: 'پرده آب لمینار شیشه‌ای + نورپردازی خطی IP68',
      ar: 'ستارة مائية رقائقية زجاجية + إضاءة خطية IP68',
      en: 'Laminar Glass Water Sheet + IP68 Linear Cove Light',
    },
    category: 'water_wall',
    image: outdoorWaterfallPool,
    fallbackImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    detailImages: [
      outdoorWaterfallPool,
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=900&q=80',
    ],
    landscapeDesignTip: {
      fa: 'در طراحی محوطه ویلا و باغ‌های مدرن، ترکیب این دیوار آبنما با سنگ گرانیت فلیم‌شده یا اسلب‌های مشکی پرشین سیلک، پرده صوتی طبیعی و دلنشینی (Acoustic White Noise) خلق می‌کند که همهمه‌های اطراف را کاملاً مهار می‌سازد. پیشنهاد می‌شود استخر رفلکتینگ با پله‌های سنگی شناور و نورپردازی دفنی ۲۷۰۰K کادربندی شود تا فضایی آرامش‌بخش برای نشیمن شبانه و فایرپیت پدید آید.',
      ar: 'في تنسيق الحدائق المعاصرة، يوفر هذا الشلال الجداري مع الجرانيت الأسود أو الرخام صوتاً مهدئاً يعزل ضجيج المحيط. ننصح بتأطير بركة الانعكاس بألواح حجرية عائمة مع إضاءة دافئة 2700K لتوفير جلسة ليلية شاعرة قرب موقد النار.',
      en: 'In high-end modern landscape architecture, pairing this dark-clad water wall with flamed granite creates a soothing acoustic mask against surrounding noise. Frame the reflecting pool with submerged stepping pavers and 2700K warm uplights alongside an outdoor fire pit for an exquisite night sanctuary.',
    },
    outdoorSuitability: [
      { fa: 'حیاط خلوت و باغ‌ویلاهای معاصر', ar: 'حدائق الفلل الخلفية المعاصرة', en: 'Contemporary Backyard Gardens' },
      { fa: 'روف‌گاردن‌ها و پنت‌هاوس‌های اختصاصی', ar: 'حدائق الأسطح والبنتهوس الفاخر', en: 'Private Rooftop Terraces' },
      { fa: 'محوطه فایرپیت و نشیمن باز حیاط', ar: 'جلسات النار والمساحات المفتوحة', en: 'Outdoor Fire Pit Lounges' },
    ],
    aestheticStyle: {
      fa: 'مینیمالیسم مدرن، خطوط افقی کشیده، رفلکس آینه‌ای آب در ترکیب با سنگ‌های تیره و گیاهان زینتی',
      ar: 'بساطة عصرية، خطوط أفقية انسيابية وانعكاس مائي مع الحجر الداكن ونباتات الزينة',
      en: 'Modern Minimalist with elongated horizontal serenity, mirror water reflections & dark slate textures',
    },
    dimensions: {
      height: '۲۴۰۰ میلی‌متر (۲.۴ متر)',
      width: '۱۸۰۰ میلی‌متر (۱.۸ متر دهانه)',
      depth: '۳۵۰ میلی‌متر (حوضچه آرامش)',
      weirLipLength: '۱۸۰۰ میلی‌متر (لبه ریزش استیل ۳۱۶)',
    },
    hydraulicSpecs: {
      flowRate: '۱۲ الی ۱۵ مترمکعب بر ساعت (جریان لمینار بدون پاشش)',
      pumpPower: 'پمپ فوق‌کم‌صدا ۱.۵ اسب با اینورتر کنترل دور',
      lighting: 'خط نور LED زیرلب استیل IP68 با دمای رنگ ۲۷۰۰K گرم',
      coverageArea: 'پوشش بصری و حریم صوتی برای فضای ۳۰ تا ۵۰ مترمربع',
    },
    alloyGrade: {
      fa: 'استنلس استیل ۳۱۶L مولیبدن‌دار نگیر با ضخامت ۳ میلی‌متر (Super Marine 316L)',
      ar: 'ستانلس ستيل ٣١٦L بحري فائق المقاومة مع الموليبدينوم بسماكة ٣ ملم',
      en: 'Super Marine Grade 316L Stainless with 3.0mm Sheet Gauge',
    },
    availableFinishes: [
      { fa: 'مشکی دودی تیتانیوم مات پی‌وی‌دی (Smoky Black Titanium)', ar: 'أسود تيتانيوم دخاني مطفي PVD', en: 'Matte Smoky Black Titanium PVD' },
      { fa: 'سوپرمیرور نقره‌ای دریایی ۸K (Marine Super Mirror)', ar: 'مرآة بحرية فائقة الصقل 8K', en: 'Marine Super Mirror 8K' },
      { fa: 'برنز شامپاینی متالیک (Champagne Bronze PVD)', ar: 'برونز شامباني ميتاليك PVD', en: 'Champagne Bronze Metallic PVD' },
    ],
    weatherResistance: {
      fa: 'مقاومت ۱۰۰٪ در برابر یخ‌زدگی تا منفی ۳۵ درجه، تست مه نمکی ۱۰۰۰ ساعت ASTM B117 و تابش ماورای بنفش خورشید',
      ar: 'مقاومة تامة للتجمد حتى -٣٥ درجة، واختبار الضباب الملحي ASTM B117 وأشعة الشمس الفوق بنفسجية',
      en: '100% Frost-proof down to -35°C, 1000-hr Salt Spray ASTM B117 & Total UV Sun Shield',
    },
    warrantyYears: 15,
    priceToman: 48500000,
    description: {
      fa: 'الهام‌گرفته از معماری لندسکیپ مدرن با استخر رفلکتینگ؛ این مجموعه آبنما با نازل یکپارچه استیل ۳۱۶L مهندسی‌شده، پرده‌ای پیوسته، کریستالی و کاملاً صیقلی از آب را بدون کوچک‌ترین پاشش به اطراف به گردش درمی‌آورد. رفلکس نورپردازی خطی مخفی در پهنه آب حوضچه، آرامش و شکوهی بی‌بدیل به شب‌های محوطه ویلا می‌بخشد.',
      ar: 'مستوحى من الهندسة المعمارية الحديثة للحدائق المائية، يوفر هذا الشلال ستارة مائية كريستالية متدفقة بسلاسة تامة دون تطاير، مع إضاءة خطية غاطسة تعكس هدوءاً وفخامة استثنائية.',
      en: 'Inspired by modern landscape water architecture, this engineered system features a precision 316L stainless weir generating a seamless, silent glass-like water sheet. Submerged linear LEDs cast warm luminescence across the mirror basin, creating an awe-inspiring outdoor nocturnal atmosphere.',
    },
    keyFeatures: [
      { fa: 'تیغه ریزش لیزری بدون موج با سیستم هدایت آب مخفی ضد گردابه', ar: 'شفرة تدفق ليزرية بنظام توجيه داخلي مانع للاضطراب', en: 'CNC laser weir blade with internal anti-turbulence flow chamber' },
      { fa: 'مقاومت مطلق در برابر جلبک، املاح معدنی و تغییر رنگ زیر آفتاب شدید', ar: 'مقاومة مطلقة للطحالب، الترسبات الكلسية وأشعة الشمس الحارقة', en: 'Absolute immunity to algae, mineral scaling & UV degradation' },
      { fa: 'شاسی‌کشی پیش‌ساخته استیل با اتصالات مخفی و نصب آسان', ar: 'هيكل تثبيت مسبق الصنع من الستانلس ستيل بتوصيلات مخفية', en: 'Prefabricated stainless structural framework with concealed mounts' },
      { fa: '۱۵ سال ضمانت کتبی کارخانه‌ای عدم اکسیداسیون و خوردگی استیلکس', ar: 'ضمان مصنعي معتمد ١٥ عاماً ضد الصدأ والتآكل من ستيليكس', en: '15-Year unconditional corrosion-proof written warranty by STELLEX' },
    ],
    includedHardware: [
      { fa: 'یونیت نازل پرده آب استیل ۳۱۶L با طول ۱۸۰۰ میلی‌متر', ar: 'وحدة مصب الشلال ستانلس ستيل ٣١٦L بطول ١٨٠٠ ملم', en: '1800mm Marine 316L Laminar Water Wall Nozzle Unit' },
      { fa: 'پروژکتور خطی LED ضدآب IP68 گرید دریایی با ترانس ایمن ۱۲ ولت', ar: 'إضاءة خطية LED غاطسة IP68 مع محول أمان ١٢ فولت', en: 'IP68 Submersible Marine LED Linear Luminaire with 12V Driver' },
      { fa: 'اتصالات لوله‌کشی استیل فلنج‌دار ۲ اینچ با شیر تنظیم فشار', ar: 'توصيلات مواسير فلانجة ستانلس ٢ بوصة مع صمام موازنة', en: '2-Inch Flanged Stainless Inflow Manifold with Balance Valve' },
      { fa: 'کیت فیلتر استنلس استیل برگ‌گیر و پمپ کم‌مصرف هماهنگ', ar: 'طقم فلترة ستانلس مانع للشوائب ومضخة هادئة موفرة للطاقة', en: 'Stainless Leaf Strainer Mesh & Matched Ultra-Quiet Pump Kit' },
    ],
  },
  {
    id: 'out-biocascade-02',
    modelCode: 'STX-OUT-BIOCASCADE02',
    name: {
      fa: 'آبشار صخره‌ای استخر و پرگولای آفتابگیر استیلکس (Bio-Pool Cascade Weir & Pergola)',
      ar: 'مصب شلال المسابح الصخرية الطبيعية ومظلة البرغولا الفاخرة',
      en: 'Natural Stone Bio-Pool Cascade Weir & Poolside Pergola',
    },
    designerSeries: {
      fa: 'سری استخر و تفرجگاه‌های ساحلی ریزورت (Bio-Resort Pool Series)',
      ar: 'سلسلة مسابح المنتجعات الطبيعية والبرغولا الفاخرة',
      en: 'Bio-Resort Pool & Waterfront Pergola Series',
    },
    pinterestInspiration: 'https://www.pinterest.com/pin/10625749120591947/',
    badge: {
      fa: 'مقاوم ۱۰۰٪ در برابر کلر غلیظ و آب شور نمکی استخر',
      ar: 'مقاومة ١٠٠٪ لكلور المسابح والمياه المالحة',
      en: '100% Chlorine & Saltwater Resistant Marine 316L',
    },
    category: 'pool_cascade',
    image: outdoorPoolPergola,
    fallbackImage: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1200&q=80',
    detailImages: [
      outdoorPoolPergola,
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=900&q=80',
    ],
    landscapeDesignTip: {
      fa: 'این طراحی برای استخرهای مدرن سبک ریزورت با سنگ‌های صخره‌ای طبیعی تراورتن و بازالت صیقلی ایده‌آل است. آبنمای استیل ۳۱۶L با پرتاب آبی قوی و پرطنین، حس چشمه‌های طبیعی کوهستانی را شبیه‌سازی کرده و همزمان به عنوان ماساژور آبی گردن و شانه (Hydrotherapy) برای شناگران عمل می‌کند. سایبان پرگولای استیل و ترمووود در مجاورت آن، فضایی لوکس برای ریلکسیشن و تماشای آب فراهم می‌آورد.',
      ar: 'مثالي للمسابح الحديثة بنمط المنتجعات مع الحجر الطبيعي والرخام. يوفر المصب تدفقاً مائياً قوياً يحاكي الشلالات الطبيعية ويعمل كتدليك مائي للسباحين، بينما توفر مظلة البرغولا المصنوعة من الستانلس ستيل والخشب المعالج راحة متكاملة بجوار المسبح.',
      en: 'Tailored for luxury natural bio-pools and modern stone-edged swimming pools. The cantilevered 316L chute produces a vigorous cascading waterfall that doubles as a hydrotherapy shoulder massage, while the companion stainless pergola and sun deck creates a world-class resort sanctuary.',
    },
    outdoorSuitability: [
      { fa: 'استخرهای روباز و چهارفصل ویلاهای لاکچری', ar: 'المسابح الخارجية للفلل والقصور الفاخرة', en: 'Luxury Outdoor & Year-Round Pools' },
      { fa: 'روف‌پول‌ها و استخرهای معلق پنت‌هاوس', ar: 'مسابح الأسطح والبنتهوس المعلقة', en: 'Penthouse Rooftop Suspended Pools' },
      { fa: 'مجموعه‌های اسپا و ولنس کلاب‌های خصوصی', ar: 'نوادي السبا والمنتجعات الصحية الخاصة', en: 'Private Wellness Clubs & Spa Resorts' },
    ],
    aestheticStyle: {
      fa: 'ارگانیک مدرن هتلینگ با تلفیق سنگ طبیعی صخره‌ای، درخشش کروم متالیک و گرمای چوب ترمووود',
      ar: 'عصري فندقي راقٍ يجمع بين الحجر الطبيعي، بريق الستانلس ستيل ودفء الخشب المعالج',
      en: 'Organic Hotel Resort luxury marrying raw natural stone, gleaming marine steel & thermo-wood warmth',
    },
    dimensions: {
      height: '۱۴۰۰ میلی‌متر (ارتفاع ریزش از سطح آب)',
      width: '۱۲۰۰ میلی‌متر (عرض دهانه آبشار)',
      depth: '۸۰۰ میلی‌متر (کنسول شلیک آب به استخر)',
      weirLipLength: '۱۲۰۰ میلی‌متر (لب ریزش لبه باز استیل ۳.۵ میلی‌متر)',
    },
    hydraulicSpecs: {
      flowRate: '۱۸ الی ۲۴ مترمکعب بر ساعت (جریان پرحجم آبشاری)',
      pumpPower: '۲.۰ اسب بخار با تحمل کلر و سختی آب بالا',
      lighting: 'وال‌واشر استیل دفنی ضدآب IP68 با طیف نوری RGBW قابل برنامه‌ریزی',
      coverageArea: 'پرتاب آب تا فاصله ۱ متری از لبه استخر با قابلیت ماساژ هیدروتراپی',
    },
    alloyGrade: {
      fa: 'استنلس استیل ۳۱۶L مولیبدن‌دار ضد گاز کلر و اسید استخری (DIN 1.4404)',
      ar: 'ستانلس ستيل ٣١٦L المقاوم لغاز الكلور وأحماض تعقيم المسابح (DIN 1.4404)',
      en: 'Marine Grade 316L High-Moly Alloy (DIN 1.4404) Immune to Pool Chemistry',
    },
    availableFinishes: [
      { fa: 'پولیش استیل نقره‌ای براق دریایی (High Polish Marine Silver)', ar: 'ستانلس ستيل بحري فائق اللمعان', en: 'High Polish Marine Silver' },
      { fa: 'مشکی ابریشمی کاتافورزیک ضد املاح (Silk Black Anti-Calc)', ar: 'أسود حريري معالج ضد التكلسات', en: 'Silk Black Anti-Calc Treatment' },
      { fa: 'طلایی ۲۴ عیار براق تیتانیوم PVD (Royal Gold 24K)', ar: 'ذهبي ملكي براق PVD عيار ٢٤', en: 'Royal 24K Titanium Gold PVD' },
    ],
    weatherResistance: {
      fa: 'مقاومت ۱۰۰٪ در برابر گاز کلر، ازن، نمک‌های تصفیه، اسیدهای شستشوی استخر و تغییرات دمایی شدید ۴۰- تا ۸۰+ درجه سانتی‌گراد',
      ar: 'مقاومة تامة لغاز الكلور، الأوزون، أملاح التصفية وأحماض الغسيل وتقلبات الحرارة القاسية',
      en: '100% Resistant to chlorine fumes, ozone, salt electrolysis, pool acid washes & -40°C to +80°C swings',
    },
    warrantyYears: 15,
    priceToman: 54000000,
    description: {
      fa: 'طراحی‌شده با الهام از استخرهای صخره‌ای و تفرجگاه‌های لوکس بالی و مدیترانه؛ این آبشار استخری با تیغه سرریز تقویت‌شده استیل ۳۱۶L با ضخامت ۳.۵ میلی‌متر، حجم پرقدرت و خروشانی از آب را مانند یک آبشار طبیعی به قلب استخر سرازیر می‌کند. پرگولای هماهنگ استیلکس در کنار آن، منظره‌ای ژورنالی و اقامتگاهی شاهانه می‌آفریند.',
      ar: 'مستوحى من مسابح المنتجعات الفاخرة في بالي والبحر المتوسط؛ يتميز بشفرة ستانلس ستيل ٣١٦L متينة بسماكة ٣.٥ ملم تضخ تدفقاً مائياً قوياً يشبه الشلالات الطبيعية، مع مظلة برغولا فاخرة تمنح المكان طابعاً استجمامياً استثنائياً.',
      en: 'Emulating the world-class tropical resort pools of Bali and the Mediterranean; this heavy-gauge 3.5mm 316L chute delivers a powerful, voluminous cascade that transforms the pool into a natural mountain waterfall retreat alongside a matching architectural pergola lounge.',
    },
    keyFeatures: [
      { fa: 'شلیک آب با قوس هیدرولیکی مهندسی‌شده بدون سایش و لرزش سازه', ar: 'تدفق مائي بقوس هيدروليكي مدروس دون أي اهتزازات في الهيكل', en: 'Engineered parabolic water trajectory with zero structural vibration' },
      { fa: 'آلیاژ خالص ۳۱۶L مولیبدن‌دار مقاوم در برابر تصفیه نمکی و گاز کلر', ar: 'سبيكة ٣١٦L النقية بالموليبدينوم المقاومة للأنظمة الملحية والكلور', en: 'Pure 316L molybdenum chemistry immune to saltwater chlorinators' },
      { fa: 'هماهنگی کامل با پرگولای مدولار استیل و سایبان چوب ترمو', ar: 'توافق كامل مع البرغولا المعيارية من الستانلس والخشب المعالج', en: 'Seamless pairing with STELLEX modular stainless & thermo-wood pergolas' },
      { fa: 'تست هیدرولیک کارخانه‌ای تحت فشار ۱۶ بار با تضمین ۱۵ ساله استیلکس', ar: 'اختبار هيدروليكي مصنعي تحت ضغط ١٦ بار بضمان ١٥ عاماً', en: 'Factory hydrostatically pressure tested at 16 bar with 15-year warranty' },
    ],
    includedHardware: [
      { fa: 'نازل سرریز استخری استیل ۳۱۶L ضخامت ۳.۵ میلی‌متر با لب کنسولی', ar: 'مصب شلال ستانلس ستيل ٣١٦L بسماكة ٣.٥ ملم مع لسان متدلي', en: '3.5mm Heavy Marine 316L Pool Weir Chute with Cantilever Lip' },
      { fa: 'دو ورودی آب رزوه استیل ۲ اینچ با اتصالات تفکیک‌پذیر سریع', ar: 'مدخلان ملولبان للماء من الستانلس ٢ بوصة بوصلات سريعة', en: 'Dual 2-Inch Stainless NPT Water Inlets with Quick-Union Connectors' },
      { fa: 'کیت وال‌واشر LED ضدآب IP68 استخری با درایور ضدانفجار', ar: 'طقم إضاءة غاطسة IP68 مع درايفر معزول للأمان', en: 'IP68 Underwater LED Wall-Washer with Sealed Isolation Power Unit' },
      { fa: 'بست‌ها و پیچ‌های استیل گرید دریایی A4-80 با لرزه‌گیرهای پلیمری', ar: 'براغي ومثبتات ستانلس A4-80 بحرية مع موانع اهتزاز مطاطية', en: 'Marine A4-80 Stainless Fastener Kit with Neoprene Vibration Dampeners' },
    ],
  },
  {
    id: 'out-entrance-03',
    modelCode: 'STX-OUT-ENTRANCE03',
    name: {
      fa: 'آبنمای تندیس‌گون و نازل‌های ورودی لابی ویلا (Sculptural Entrance Water Feature & Spouts)',
      ar: 'نافورة المدخل النحتية المعمارية والمصبات الجدارية للفيلات',
      en: 'Sculptural Entrance Water Wall & Quad-Spout Fountain',
    },
    designerSeries: {
      fa: 'سری معماری ورودی و پیش‌لابی‌های اشرافی (Executive Entrance & Facade Series)',
      ar: 'سلسلة المداخل المعمارية الفاخرة وواجهات القصور',
      en: 'Executive Entrance & Grand Facade Series',
    },
    pinterestInspiration: 'https://www.pinterest.com/pin/7670261862724053/',
    badge: {
      fa: 'المان خوش‌آمدگویی اشرافی هماهنگ با نمای ورودی مدرن',
      ar: 'عنصر استقبال ملكي متناغم مع واجهات الفيلات الحديثة',
      en: 'Prestige Architectural Greeting Feature for Luxury Entrances',
    },
    category: 'entrance_fountain',
    image: outdoorEntranceFountain,
    fallbackImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    detailImages: [
      outdoorEntranceFountain,
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80',
    ],
    landscapeDesignTip: {
      fa: 'در معماری ورودی، مسیر دسترسی و درگاه ورودی اولین تصویر و هویت بصری بنا را شکل می‌دهد. نصب این آبنمای دیواری با نازل‌های فواره‌ای لوله‌ای ماشین‌کاری‌شده استیل ۳۱۶ درون دیواره‌ای با رنگ متضاد، جریان‌های قوس‌دار، شیشه‌ای و آرام از آب را به درون حوضچه پرتاب می‌کند. قرارگیری مسیر سنگ‌فرش شناور بر روی آب به همراه اسپات‌لایت‌های گرم ۲۷۰۰K، حس استقبالی بسیار مجلل و رویایی به مهمانان هدیه می‌کند.',
      ar: 'تشكل واجهة المدخل الانطباع الأول لفخامة الفيلا. تطلق هذه المصبات الأسطوانية الدقيقة تدفقات مائية زجاجية متقوسة نحو الحوض السفلي. المرور عبر ممشى الألواح الحجرية العائمة فوق الماء مع الإضاءة المركزة يمنح الضيوف استقبالاً ملكياً مبهراً.',
      en: 'The front entrance walkway defines the prestige and emotional arrival of the entire residence. Precision-machined 316 tubular spouts project arched, glass-clear water trajectories into a low-profile architectural reflecting pond. Passing over floating stepping stones framed by 2700K spot beams creates an unforgettable VIP arrival experience.',
    },
    outdoorSuitability: [
      { fa: 'مسیر ورودی و حیاط جلویی (Front Yard) ویلاها', ar: 'الممر الرئيسي وحديقة المدخل الأمامي للفلل', en: 'Front Yard Entrance & Approach Walkways' },
      { fa: 'لابی و پیش‌ورودی برج‌های مسکونی مجلل', ar: 'مداخل ولوبي الأبراج السكنية الراقية', en: 'Prestige Residential Tower Entries & Foyers' },
      { fa: 'پاسیوهای مرکزی و فضاهای نیمه‌باز هتل‌ها', ar: 'الأفنية الداخلية والمساحات الترحيبية للفنادق', en: 'Boutique Hotel Courtyards & Atriums' },
    ],
    aestheticStyle: {
      fa: 'مینیمالیسم هندسی مجسمه‌گون، خطوط افقی مدرن، هارمونی با بتن اکسپوز، چوب، شیشه و سنگ اسلب',
      ar: 'هندسي نحتي، خطوط أفقية متطورة تتناغم مع الخرسانة والخشب المعالج والحجر',
      en: 'Sculptural Geometric with crisp horizontal rhythms, exposed architectural concrete & dark slate stone',
    },
    dimensions: {
      height: '۲۰۰۰ میلی‌متر (۲ متر دیواره)',
      width: '۲۲۰۰ میلی‌متر (۲.۲ متر دهانه کلی)',
      depth: '۱۰۰۰ میلی‌متر (حوضچه سنگ‌فرش شناور)',
      weirLipLength: '۴ نازل لوله‌ای استیل با بیرون‌زدگی ۱۸۰ میلی‌متر',
    },
    hydraulicSpecs: {
      flowRate: '۸ الی ۱۰ مترمکعب بر ساعت (جریان لوله‌ای شیشه‌ای بدون کف و تلاطم)',
      pumpPower: '۱.۰ اسب بخار با مدار سیرکولاسیون بسته و مخزن مخفی',
      lighting: '۴ عدد اسپات‌لایت لنزدار توکار استیل ۳۱۶ با زاویه تابش ۱۵ درجه متمرکز',
      coverageArea: 'جلوه بصری و انعکاس باشکوه برای ورودی‌های ۵۰ تا ۱۲۰ مترمربع',
    },
    alloyGrade: {
      fa: 'استنلس استیل ۳۱۶L دریایی نگیر خالص مقاوم به ذرات جوی و گرد و غبار',
      ar: 'ستانلس ستيل ٣١٦L بحري نقي فائق التحمل للظروف الجوية والغبار',
      en: 'High Purity Marine 316L Stainless Steel Resistant to Outdoor Dust & Smog',
    },
    availableFinishes: [
      { fa: 'مشکی تیتانیوم مات پی‌وی‌دی (Matte Black Titanium)', ar: 'أسود تيتانيوم مطفي فاخر PVD', en: 'Matte Black Titanium PVD' },
      { fa: 'برنز کورتن با پتینه متالیک (Corten Bronze Metallic PVD)', ar: 'برونز كورتن مع مظهر الباتينا المعدنية', en: 'Corten Bronze Metallic PVD' },
      { fa: 'رزگلد لوکس متالیک (Luxury Rose Gold PVD)', ar: 'روز غولد ميتاليك فاخر PVD', en: 'Luxury Rose Gold PVD' },
    ],
    weatherResistance: {
      fa: 'مقاوم ۱۰۰٪ در برابر بادهای شدید، رطوبت، اشعه فرابنفش، باران‌های اسیدی و سرمای یخبندان بدون نیاز به تخلیه اضطراری',
      ar: 'مقاومة تامة للرياح الشديدة، الرطوبة، الأشعة الفوق بنفسجية والأمطار الحمضية والتجمد',
      en: '100% Weatherproof against high winds, driving rain, freezing temperatures & scorching solar radiation',
    },
    warrantyYears: 15,
    priceToman: 42000000,
    description: {
      fa: 'طراحی‌شده ویژه حیاط جلویی، درگاه‌های ورودی و محوطه لابی ویلاهای مدرن؛ این اثر مجسمه‌ای با تلفیق ۴ نازل استیل ۳۱۶ خراطی‌شده با تکنولوژی جریان آرام (Laminar Stream)، آب را در قالب کمان‌هایی بلورین و بی‌صدا به حوضچه سنگی هدایت می‌کند. گذر از روی پل شناور این آبنما، عبور از دروازه هنر و آرامش را تداعی می‌کند.',
      ar: 'مصممة خصيصاً لمداخل الفيلات الفاخرة؛ تجمع هذه التحفة المعمارية بين ٤ مصبات ستانلس ستيل ٣١٦ تطلق المياه في أقواس زجاجية كريستالية هادئة نحو الحوض الحجري، لتجعل من الدخول إلى المبنى تجربة ساحرة من الهدوء والأناقة.',
      en: 'Tailored for prestige front yards, entry walkways and luxury arrival plazas; this architectural feature features four CNC-machined 316 spouts discharging crystal-clear laminar arcs of water into a granite pond. Walking across its illuminated floating bridge imparts an unforgettable feeling of grandeur.',
    },
    keyFeatures: [
      { fa: 'نازل‌های لوله‌ای استیل خراطی‌شده با پرتاب قوس‌دار شیشه‌ای بدون ترشح قطرات', ar: 'مصبات أسطوانية مصقولة بدقة تطلق المياه في أقواس زجاجية دون تطاير', en: 'CNC-machined tubular spouts producing smooth laminar arcs with zero splashing' },
      { fa: 'سیستم منیفولد داخلی تعادل فشار هیدرولیک جهت یکنواختی کامل هر ۴ نازل', ar: 'نظام موزع داخلي لموازنة الضغط يضمن تدفقاً متطابقاً للمصبات الأربعة', en: 'Internal pressure-balanced stainless manifold for perfectly identical spout discharges' },
      { fa: 'طراحی منطبق با فنگ‌شویی آب روان در مبادی ورودی و جذب انرژی مثبت', ar: 'تصميم متوافق مع مبادئ طاقة المكان وتدفق المياه الترحيبية عند المداخل', en: 'Harmonious water flow orientation engineered for serene welcoming energy' },
      { fa: '۱۵ سال گارانتی تعویض کتبی کارخانه‌ای قطعات و سازه استیلکس', ar: 'ضمان استبدال معتمد ١٥ عاماً لجميع الأجزاء والهيكل من ستيليكس', en: '15-Year unconditional factory replacement warranty by STELLEX' },
    ],
    includedHardware: [
      { fa: 'یونیت منیفولد و ۴ نازل استیل ۳۱۶L خراطی‌شده با شیرهای تنظیم مجزا', ar: 'موزع مائي مع ٤ مصبات ستانلس ستيل ٣١٦L وصمامات موازنة مستقلة', en: 'Quad 316L Machined Spout Set with Balanced Inflow Manifold' },
      { fa: '۴ عدد اسپات‌لایت لنزدار توکار استیل ۳۱۶ گرید IP68 با نور گرم ۲۷۰۰K', ar: '٤ كشافات سبوت غاطسة IP68 من الستانلس ستيل بنور دافئ ٢٧٠٠K', en: '4x Submersible IP68 Marine 316 Spotlights with 2700K Warm Lenses' },
      { fa: 'مجموعه لوله‌کشی و شیرآلات استنلس استیل مدار بسته با پمپ ۱ اسب سایلنت', ar: 'طقم سباكة وصمامات ستانلس ستيل مع مضخة هادئة ١ حصان', en: 'Closed-Loop Stainless Plumbing Kit with 1.0 HP Ultra-Quiet Water Pump' },
      { fa: 'شاسی‌کشی مخفی دیواری با رول‌بولت‌های استیل A4 ضد زلزله', ar: 'هيكل تثبيت جداري مخفي مع مسامير ستانلس A4 مقاومة للاهتزاز', en: 'Concealed Structural Wall-Mount Bracket with Seismic A4 Anchors' },
    ],
  },
  {
    id: 'out-bridge-04',
    modelCode: 'STX-OUT-BRIDGE04',
    name: {
      fa: 'پل و گذرگاه شناور آبنمای باغی و استخری استیلکس (Architectural Garden Bridge & Floating Deck)',
      ar: 'جسر الممشى المائي العائم والحدائق المعمارية الفاخرة',
      en: 'Architectural Floating Garden Bridge & Water Feature Walkway',
    },
    designerSeries: {
      fa: 'سری پل‌های معلق معماری و کراسینگ‌های لوکس محوطه (Architectural Crossing Series)',
      ar: 'سلسلة الجسور المائية المعمارية الفاخرة للحدائق',
      en: 'Architectural Crossing & Modern Garden Bridge Series',
    },
    pinterestInspiration: 'https://www.pinterest.com/pin/1010495235162020039/',
    badge: {
      fa: 'شاسی استیل ۳۱۶L سوپرمارین + عرشه ترمووود و نور مخفی IP68',
      ar: 'هيكل ستانلس ستيل ٣١٦L بحري + خشب معالج حرارياً وإضاءة مخفية',
      en: 'Marine 316L Stainless Truss + Thermo-Wood Deck & IP68 Undermount Lights',
    },
    category: 'garden_bridge',
    image: outdoorGardenBridge,
    fallbackImage: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1200&q=80',
    detailImages: [
      outdoorGardenBridge,
      'https://images.unsplash.com/photo-1598908314732-07113901949e?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=900&q=80',
    ],
    landscapeDesignTip: {
      fa: 'در لندسکیپ و معماری منظر مدرن، گذرگاه‌های روی آب حس کشف و ترنزیشن شاعرانه (Poetic Transition) بین زون‌های مختلف محوطه خلق می‌کنند. سازه شاسی پنهان استیل ۳۱۶L نگیر، امکان نصب مستقیماً روی استخرهای شنا، برکه‌های رفلکتینگ یا بستر سنگ‌رودخانه را بدون هیچ‌گونه لرزش و خمش فراهم می‌آورد. نورپردازی خطی مخفی ۲۷۰۰K زیر لبه‌های کف‌پوش ترمووود، پیاده‌روی شبانه را به سفری رویایی روی انعکاس آب بدل می‌کند.',
      ar: 'في تصميم الحدائق الفاخرة، تمنح الجسور المائية شعوراً بالانتقال الشاعري بين أركان الحديقة. يتيح الهيكل المخفي من الستانلس ستيل ٣١٦L تركيب الجسر فوق المسابح أو البرك المائية دون أي اهتزاز، مع إضاءة خطية دافئة ٢٧٠٠K تمنح تجربة مشي ليلية استثنائية.',
      en: 'In luxury landscape architecture, water-spanning pedestrian bridges create a poetic transition between outdoor garden zones. The concealed marine-grade 316L stainless under-chassis allows seamless mounting directly above reflecting basins, koi ponds, or dry creek beds with zero structural flex. Hidden 2700K linear edge lighting transforms nighttime walks into a celestial floating experience.',
    },
    outdoorSuitability: [
      { fa: 'مسیر عبور از روی استخر شنا و برکه‌های رفلکتینگ', ar: 'ممشى فوق المسابح والبرك المائية العاكسة', en: 'Suspended Walkway Over Pools & Water Features' },
      { fa: 'محوطه‌سازی باغ‌های ژاپنی و بستر رودخانه‌های صخره‌ای', ar: 'تنسيق الحدائق اليابانية ومجاري الحصى الصخرية', en: 'Zen Japanese Gardens & Dry Rock Riverbeds' },
      { fa: 'ارتباط میان پاویلیون، فایرپیت و عرشه آفتابگیر ویلا', ar: 'الربط بين أجنحة الحديقة ومواقد النار والتراس', en: 'Connecting Pavilions, Fire Pits & Sun Decks' },
    ],
    aestheticStyle: {
      fa: 'مینیمالیسم مدرن ارگانیک، ترکیب گرمای چوب طبیعی فرآوری‌شده با صلابت و درخشش استیل ۳۱۶',
      ar: 'عصري دافئ يجمع بين الخشب المعالج وبريق الستانلس ستيل ٣١٦',
      en: 'Modern Organic Minimalist combining warm thermo-decking with sleek 316 marine steel accents',
    },
    dimensions: {
      height: '۲۵۰ میلی‌متر (ارتفاع شاسی باربر)',
      width: '۱۱۰۰ میلی‌متر (۱.۱ متر عرض معبر استاندارد)',
      depth: '۳۶۰۰ میلی‌متر (۳.۶ متر طول دهانه مدولار)',
      weirLipLength: 'پروفیل‌های استیل ۳۱۶L نگیر با ضخامت ۳ میلی‌متر',
    },
    hydraulicSpecs: {
      flowRate: 'ظرفیت بارگذاری زنده ۸۵۰ کیلوگرم (۸ نفر همزمان)',
      pumpPower: 'پایه‌های غواصی استیل ۳۱۶ جهت غوطه‌وری کامل در آب',
      lighting: 'خط نور LED خطی پیوسته IP68 زیرلب عرشه با دمای ۲۷۰۰K گرم',
      coverageArea: 'دهانه آزاد تا ۴ متر بدون نیاز به ستون میانی',
    },
    alloyGrade: {
      fa: 'استنلس استیل ۳۱۶L مولیبدن‌دار گرید سوپرمارین به همراه اتصالات ضد گالوانیک',
      ar: 'ستانلس ستيل ٣١٦L سوبر بحري مع عوازل كلفانية مقاومة للأملاح',
      en: 'Super Marine 316L High-Moly Stainless Steel with Anti-Galvanic Isolation',
    },
    availableFinishes: [
      { fa: 'مشکی مات دودی تیتانیوم PVD (Smoky Black Titanium)', ar: 'أسود دخاني مطفي تيتانيوم PVD', en: 'Smoky Black Titanium PVD' },
      { fa: 'سوپرمیرور نقره‌ای دریایی ۸K (Marine Super Mirror 8K)', ar: 'مرآة بحرية فائقة الصقل 8K', en: 'Marine Super Mirror 8K' },
      { fa: 'برنز کهربایی متالیک PVD (Amber Bronze PVD)', ar: 'برونز عنبري ميتاليك PVD', en: 'Amber Bronze Metallic PVD' },
    ],
    weatherResistance: {
      fa: 'مقاومت ۱۰۰٪ در برابر رطوبت دائمی آب، جلبک، پوسیدگی چوب، سرمای یخبندان ۳۵- درجه و برف سنگین',
      ar: 'مقاومة تامة للرطوبة الدائمة، الطحالب، التجمد حتى -٣٥ درجة والثلوج دون أي تشوه',
      en: '100% Weatherproof against permanent water immersion, algae, rot, -35°C freeze & heavy snow',
    },
    warrantyYears: 15,
    priceToman: 59000000,
    description: {
      fa: 'الگوبرداری‌شده از برترین طراحی‌های معماری منظر پین‌ترست؛ این پل و معبر معمارانه با استراکچر پیش‌ساخته استنلس استیل ۳۱۶L نگیر و عرشه چوب اش ترمووود ضدآب، پیاده‌روی روی پهنه آب یا باغ صخره‌ای را به شکلی معلق و بی‌وزن میسر می‌سازد. نورپردازی خطی پنهان، خطوط طلایی آب و گذرگاه را در تاریکی شب برجسته می‌کند.',
      ar: 'مستوحى من أرقى تصاميم بنترست المعمارية لتنسيق الحدائق؛ يتميز بهيكل ستانلس ستيل ٣١٦L قوي مع خشب معالج حرارياً مضاد للماء ليمنح شعوراً خيالياً بالطوفان فوق الماء أو البرك الحجرية مع إضاءة خطية ساحرة في المساء.',
      en: 'Inspired by world-class Pinterest landscape architecture; this precision-engineered crossing pairs a heavy-duty concealed 316L marine stainless truss with weather-stabilized thermo-ash decking. Suspended above reflective pools or stone gardens, its concealed 2700K perimeter illumination creates the illusion of floating weightlessly over water.',
    },
    keyFeatures: [
      { fa: 'شاسی خرپایی فول استیل ۳۱۶L مهندسی‌شده با ارتعاش صفر و ضریب ایمنی ۳ برابری', ar: 'هيكل جملوني من الستانلس ستيل ٣١٦L بدون أي اهتزاز وبمعامل أمان مضاعف', en: 'Engineered 316L stainless steel truss with zero flex and 3x safety factor' },
      { fa: 'عرشه ترمووود اش ضد تابیدگی با شیارهای ارگونومیک ضد لغزش در شرایط خیس', ar: 'ألواح خشب معالج حرارياً مضادة للانزلاق والتشوه في الظروف الرطبة', en: 'Warp-free thermo-ash planks with ergonomic wet anti-slip grooving' },
      { fa: 'خط نورپردازی ضدآب سرتاسری IP68 با ترانس ۱۲ ولت کاملاً ایمن غوطه‌ور', ar: 'إضاءة خطية غاطسة IP68 مع محول أمان ١٢ فولت للعزل الكامل', en: 'Continuous submerged IP68 linear LED glow with 12V isolated safe driver' },
      { fa: '۱۵ سال ضمانت کتبی کارخانه‌ای عدم پوسیدگی، خمش و اکسیداسیون استیلکس', ar: 'ضمان مصنعي معتمد ١٥ عاماً ضد التآكل والتشوه من ستيليكس', en: '15-Year unconditional structural & corrosion warranty by STELLEX' },
    ],
    includedHardware: [
      { fa: 'شاسی خرپایی مدولار استیل ۳۱۶L با طول ۳۶۰۰ و عرض ۱۱۰۰ میلی‌متر', ar: 'هيكل جملوني معياري من الستانلس ٣١٦L بطول ٣٦٠٠ وعرض ١١٠٠ ملم', en: '3600mm Modular Marine 316L Truss Chassis Unit' },
      { fa: 'تایل‌های چوب اش ترمووود فیت‌شده با کلیپس‌های مخفی استیل ضدزنگ', ar: 'ألواح خشب معالج حرارياً مع كلبسات تثبيت مخفية ستانلس', en: 'Fitted Thermo-Ash Deck Planks with Concealed Stainless Clips' },
      { fa: 'پک نورپردازی خطی زیرلب IP68 به همراه درایور ضدآب ایمن ۱۲ ولت', ar: 'طقم إضاءة خطية IP68 مع درايفر أمان ١٢ فولت معزول', en: 'IP68 Undermount Linear Luminaire Kit with 12V Driver' },
      { fa: 'پایه‌های تنظیم ارتفاع شاقول استیل ۳۱۶ با انکربولت‌های ضد زلزله', ar: 'قواعد ستانلس ٣١٦ قابلة لضبط الارتفاع مع مسامير تثبيت زلزالية', en: 'Adjustable Leveling 316 Stems with Seismic Anchor Bolts' },
    ],
  },
];
