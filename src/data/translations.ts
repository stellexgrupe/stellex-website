import { Language } from '../types';

export interface TranslationSchema {
  common: {
    brandName: string;
    brandSub: string;
    viewDetails: string;
    requestQuote: string;
    freeConsultation: string;
    instantEstimate: string;
    downloadCatalog: string;
    guaranteeYears: string;
    certMtc: string;
    allProjects: string;
    yearsExp: string;
    completedProjects: string;
    satisfactionRate: string;
    callNow: string;
    whatsapp: string;
    email: string;
    address: string;
    showroom: string;
    factory: string;
    workingHours: string;
    close: string;
    backToTop: string;
    meters: string;
    kilograms: string;
    days: string;
    toman: string;
    aed: string;
    usd: string;
    sendToWhatsapp: string;
    submitRequest: string;
    submitting: string;
    successTitle: string;
    successDesc: string;
    trackingCode: string;
    fastSupport: string;
    returnHome: string;
    namePlaceholder: string;
    phonePlaceholder: string;
    cityPlaceholder: string;
    dimensionsPlaceholder: string;
    descPlaceholder: string;
    uploadBlueprint: string;
    chooseFile: string;
    privacyNote: string;
    similarProjectQuote: string;
    compareBeforeAfter: string;
    metallurgyAdvisor: string;
    onlineAdvisor: string;
    advisorDesc: string;
    askAdvisor: string;
    quickQuestions: string;
    quickQuestionsList: string[];
    advisorTyping: string;
    needOnsiteExpert: string;
    requestVisit: string;
  };
  topBar: {
    guaranteeText: string;
    expText: string;
    workHoursText: string;
    urgentConsultation: string;
    liveTicker: string;
  };
  nav: {
    services: string;
    materials: string;
    estimator: string;
    portfolio: string;
    whyUs: string;
    faq: string;
    contact: string;
    quickQuote: string;
    expertVisit: string;
  };
  hero: {
    badge: string;
    titlePrimary: string;
    titleSecondary: string;
    description: string;
    stat1Label: string;
    stat2Label: string;
    stat3Label: string;
    stat4Label: string;
    ctaPrimary: string;
    ctaSecondary: string;
    ctaEstimator: string;
    quickDeptTitle: string;
    explore360: string;
    pvdFinishesTitle: string;
  };
  services: {
    sectionBadge: string;
    sectionTitle: string;
    sectionDesc: string;
    exploreSubFeatures: string;
    appliedAlloysLabel: string;
    recommendedFinishesLabel: string;
    warrantyLabel: string;
    viewGallery: string;
    orderThisCategory: string;
    calculateCategoryPrice: string;
    specsTitle: string;
  };
  materials: {
    badge: string;
    title: string;
    desc: string;
    alloysTab: string;
    finishesTab: string;
    magnetTestTitle: string;
    magnetTestDesc: string;
    testMagnetBtn: string;
    magnetResultNegir: string;
    magnetResultBegir: string;
    magnetResultSemi: string;
    elementAnalysisTitle: string;
    chromium: string;
    nickel: string;
    molybdenum: string;
    carbon: string;
    corrosionResist: string;
    heatResist: string;
    hardnessLevel: string;
    magnetBehavior: string;
    priceLevel: string;
    bestUseTitle: string;
    pvdAdvantageTitle: string;
    pvdAdvantageDesc: string;
    colorReflectivity: string;
    scratchResistanceLabel: string;
    popularApplicationLabel: string;
  };
  estimator: {
    badge: string;
    title: string;
    desc: string;
    step1Title: string;
    step2Title: string;
    step3Title: string;
    step4Title: string;
    selectCategory: string;
    selectAlloy: string;
    selectFinish: string;
    selectEnvironment: string;
    lengthMeter: string;
    heightMeter: string;
    complexityLevel: string;
    standardDesign: string;
    luxuryCustomDesign: string;
    ultraLuxuryCurvedDesign: string;
    calcSummaryTitle: string;
    estimatedBasePrice: string;
    estimatedWeight: string;
    estimatedProductionTime: string;
    warrantyDuration: string;
    priceBreakdown: string;
    materialShare: string;
    laserAndWelding: string;
    pvdFinishShare: string;
    installationShare: string;
    whatsappQuoteBtn: string;
    bookFreeVisitBtn: string;
    disclaimer: string;
  };
  portfolio: {
    badge: string;
    title: string;
    desc: string;
    orderSimilar: string;
    allFilter: string;
    yearLabel: string;
    clientLabel: string;
    locationLabel: string;
    alloyLabel: string;
    durationLabel: string;
    viewFullSpecs: string;
    beforeAfterNotice: string;
  };
  whyUs: {
    badge: string;
    title: string;
    desc: string;
    testimonialsTitle: string;
    testimonialsDesc: string;
  };
  faq: {
    badge: string;
    title: string;
    desc: string;
    filterAll: string;
    stillHaveQuestion: string;
    askAiOrSupport: string;
  };
  consultation: {
    badge: string;
    title: string;
    desc: string;
    fullName: string;
    phone: string;
    city: string;
    projectType: string;
    selectCategory: string;
    notes: string;
    notesPlaceholder: string;
    freeVisitDisclaimer: string;
    submitBtn: string;
  };
  footer: {
    companyBio: string;
    warrantyCert: string;
    mtcCert: string;
    downloadTechnicalPdf: string;
    engineeringDepts: string;
    sixDeptsTitle: string;
    materialsStandards: string;
    onlineToolsTitle: string;
    contactUs: string;
    contactHeadquarters: string;
    allRightsReserved: string;
    rightsReserved: string;
    aboutText: string;
  };
}

export const translations: Record<Language, TranslationSchema> = {
  fa: {
    common: {
      brandName: 'STELLEX',
      brandSub: 'استیلکس',
      viewDetails: 'مشاهده جزئیات کامل',
      requestQuote: 'استعلام قیمت و سفارش',
      freeConsultation: 'درخواست کارشناسی و بازدید حضوری',
      instantEstimate: 'محاسبه‌گر آنلاین قیمت',
      downloadCatalog: 'دانلود کاتالوگ جامع مهندسی (PDF)',
      guaranteeYears: 'ضمانت کتبی ۱۰ تا ۱۵ ساله',
      certMtc: 'گواهی متالوژی MTC',
      allProjects: 'همه پروژه‌ها',
      yearsExp: '۱۵ سال سابقه',
      completedProjects: '۱۴۵۰+ پروژه موفق',
      satisfactionRate: '۹۹.۴٪ رضایت کارفرمایان',
      callNow: 'تماس با دفتر مهندسی',
      whatsapp: 'ارتباط در واتساپ',
      email: 'ایمیل دپارتمان فنی',
      address: 'آدرس دفتر مرکزی',
      showroom: 'شوروم نیاوران',
      factory: 'کارخانه شهرک صنعتی شمس‌آباد',
      workingHours: 'ساعات کاری: شنبه تا چهارشنبه ۸:۳۰ تا ۱۹:۰۰',
      close: 'بستن',
      backToTop: 'بازگشت به بالا',
      meters: 'متر',
      kilograms: 'کیلوگرم',
      days: 'روز کاری',
      toman: 'تومان',
      aed: 'درهم AED',
      usd: 'دلار USD',
      sendToWhatsapp: 'ارسال پیش‌فاکتور به واتساپ مهندسین فروش',
      submitRequest: 'ثبت نهایی درخواست کارشناسی',
      submitting: 'در حال ثبت اطلاعات...',
      successTitle: 'درخواست شما با موفقیت ثبت گردید',
      successDesc: 'کارشناسان فنی استیلکس ظرف حداکثر ۲ ساعت کاری جهت هماهنگی زمان بازدید حضوری و نقشه‌برداری لیزری رایگان با شما تماس خواهند گرفت.',
      trackingCode: 'کد پیگیری:',
      fastSupport: 'پشتیبانی فوری:',
      returnHome: 'بستن و بازگشت به سایت',
      namePlaceholder: 'نام و نام خانوادگی (مثال: مهندس رادمنش)',
      phonePlaceholder: 'شماره تماس همراه (۰۹۱۲۳۴۵۶۷۸۹)',
      cityPlaceholder: 'شهر و منطقه پروژه (مثال: تهران - نیاوران)',
      dimensionsPlaceholder: 'متراژ تقریبی یا ابعاد محل (مثال: ۲۰ متر طول)',
      descPlaceholder: 'توضیحات تکمیلی پروژه، انتظارات طراحی و ویژگی‌های مدنظر...',
      uploadBlueprint: 'ضمیمه نقشه، پلان یا عکس محل (اختیاری)',
      chooseFile: 'انتخاب فایل',
      privacyNote: 'اطلاعات شما محفوظ بوده و کارشناسی اولیه در تهران و کرج کاملاً رایگان است.',
      similarProjectQuote: 'استعلام قیمت و اجرای طرح مشابه',
      compareBeforeAfter: 'مقایسه قبل و بعد از اجرا',
      metallurgyAdvisor: 'مشاور هوشمند متالوژی و سازه‌های استیلکس',
      onlineAdvisor: 'مشاور آنلاین',
      advisorDesc: 'پاسخگوی تخصصی انتخاب آلیاژ، استانداردهای ASTM و برآورد فنی',
      askAdvisor: 'پرسش خود را مطرح کنید...',
      quickQuestions: 'پرسش‌های پرتکرار:',
      quickQuestionsList: [
        'برای ویلای شمال و استخر استیل ۳۰۴ مناسب است یا ۳۱۶؟',
        'ضخامت استاندارد شیشه و استیل در نرده بالکن چقدر است؟',
        'آیا آبکاری طلایی PVD در برابر باران و آفتاب کدر می‌شود؟',
        'تفاوت استیل ۳۱۶L دارویی با استیل معمولی چیست؟'
      ],
      advisorTyping: 'مشاور هوشمند در حال تحلیل متالوژی و تدوین پاسخ است...',
      needOnsiteExpert: 'نیاز به بازدید حضوری و متر لیزری در محل دارید؟',
      requestVisit: 'درخواست کارشناسی حضوری'
    },
    topBar: {
      guaranteeText: 'ضمانت کتبی ۱۰ تا ۱۵ ساله ضد زنگ و سرتیفیکیت MTC اصل',
      expText: '۱۵ سال تخصص متمرکز در ساخت سازه‌های استنلس استیل',
      workHoursText: 'کارخانه و شوروم نیاوران: ۸:۳۰ الی ۱۹:۰۰',
      urgentConsultation: 'مشاوره فوری مهندسی:',
      liveTicker: 'نرخ لحظه‌ای ورق استنلس استیل ۳۰۴ و ۳۱۶ (ASTM A240) با تاییدیه تست کوانتومتری'
    },
    nav: {
      services: 'دپارتمان‌های ۷ گانه',
      materials: 'استودیو متریال و PVD',
      estimator: 'محاسبه‌گر آنلاین قیمت',
      portfolio: 'پروژه‌های شاخص',
      whyUs: 'استانداردها و تمایزات',
      faq: 'سوالات متداول',
      contact: 'تماس و شوروم',
      quickQuote: 'محاسبه هزینه',
      expertVisit: 'درخواست بازدید رایگان'
    },
    hero: {
      badge: 'مهندسی سازه‌های استنلس استیل ۳۰۴ نگیر (و آلیاژهای ۲۰۱ و ۳۱۶ صنعتی)',
      titlePrimary: 'تلفیق هنر معماری لوکس و',
      titleSecondary: 'استانداردهای مهندسی متالوژی',
      description: 'طراحی، ساخت و اجرای تخصصی انواع نرده و حفاظ شیشه و استیل، دکوراسیون طلافروشی و رستوران، محوطه‌سازی و لندسکیپ، تجهیزات اتاق عمل و کلین‌روم، مخازن صنعتی و رادیاتورهای دکوراتیو با ۱۵ سال سابقه درخشان.',
      stat1Label: 'پروژه موفق در سراسر کشور',
      stat2Label: 'سال ضمانت کتبی متریال',
      stat3Label: 'دستگاه لیزر ۶ کیلووات فایبر',
      stat4Label: 'رضایت کارفرمایان و معماران',
      ctaPrimary: 'درخواست کارشناسی و بازدید رایگان',
      ctaSecondary: 'مشاهده دپارتمان‌های تخصصی',
      ctaEstimator: 'محاسبه‌گر هوشمند قیمت پروژه',
      quickDeptTitle: 'دسترسی سریع به دپارتمان‌های مهندسی:',
      explore360: 'پیش‌نمایش متریال و پوشش‌های PVD',
      pvdFinishesTitle: 'تست زنده بازتاب نور و رنگ‌های تیتانیوم PVD'
    },
    services: {
      sectionBadge: 'دپارتمان‌های ۷ گانه تخصصی استیلکس',
      sectionTitle: 'خدمات جامع طراحی، ساخت و نصب سازه های استیل ساختمانی و صنعتی و دکوراتیو',
      sectionDesc: 'تمامی مراحل از برش لیزری فایبر تا جوشکاری آرگون، پرداخت سوپرپولیش و پوشش دهی pvd تحت خلا با بالاترین کیفیت و نظارت مهندسی کامل استیلکس اجرا می گردد.',
      exploreSubFeatures: 'زیرمجموعه‌ها و مشخصات فنی این دپارتمان:',
      appliedAlloysLabel: 'آلیاژهای مصرفی استاندارد:',
      recommendedFinishesLabel: 'پوشش‌های سطحی و فینیش:',
      warrantyLabel: 'مدت گارانتی تضمین اصالت:',
      viewGallery: 'مشاهده آلبوم تصاویر با کیفیت بالا',
      orderThisCategory: 'ثبت سفارش در این دپارتمان',
      calculateCategoryPrice: 'برآورد قیمت آنلاین این بخش',
      specsTitle: 'مشخصات فنی و استاندارد اجرایی'
    },
    materials: {
      badge: 'متالوژی، آلیاژها و استودیو پوشش PVD',
      title: 'شناخت علمی آلیاژهای استیل و شبیه‌ساز فینیش‌های سطحی',
      desc: 'آشنایی با خواص فیزیکی و شیمیایی گریدهای ۳۰۴، ۳۱۶ مارین گرید، ۳۱۶L دارویی و ۲۰۱ به همراه تست مجازی آهنربا و جلوه بصری آبکاری تیتانیوم.',
      alloysTab: 'جدول متالوژی آلیاژها',
      finishesTab: 'شبیه‌ساز پوشش‌های PVD و پولیش',
      magnetTestTitle: 'شبیه‌ساز تست آهنربا (اثبات اصل بودن و نگیر بودن آلیاژ)',
      magnetTestDesc: 'آلیاژهای آستنیتی اصل (۳۰۴ و ۳۱۶) به دلیل داشتن نیکل بالا خاصیت مغناطیسی ندارند و آهنربا به آن‌ها نمی‌چسبد.',
      testMagnetBtn: 'اجرای تست نزدیک‌کردن آهنربا',
      magnetResultNegir: 'کاملاً نگیر (غیرمغناطیسی) — اثبات اصالت گرید ۳۰۴ یا ۳۱۶',
      magnetResultBegir: 'مغناطیسی (بگیر) — مستعد زنگ‌زدگی در محیط‌های مرطوب',
      magnetResultSemi: 'نیمه‌نگیر — مقاومت خوردگی متوسط',
      elementAnalysisTitle: 'آنالیز عناصر شیمیایی بر اساس استاندارد ASTM:',
      chromium: 'کروم (Cr)',
      nickel: 'نیکل (Ni)',
      molybdenum: 'مولیبدن (Mo)',
      carbon: 'کربن (C)',
      corrosionResist: 'مقاومت در برابر زنگ‌زدگی و اسید',
      heatResist: 'مقاومت در برابر حرارت بالا',
      hardnessLevel: 'سختی و مقاومت تسلیم',
      magnetBehavior: 'رفتار در برابر آهنربا',
      priceLevel: 'رده قیمتی',
      bestUseTitle: 'بهترین کاربردهای پیشنهادی:',
      pvdAdvantageTitle: 'تکنولوژی پوشش‌دهی PVD نیترید تیتانیوم استیلکس:',
      pvdAdvantageDesc: 'این پوشش تحت خلأ بالا (۱۰⁻⁵ تور) و در دمای ۴۰۰ درجه با ساختار کریستالی استیل پیوند خورده و کاملاً ضد خش و ضد تغییر رنگ در برابر نور خورشید است.',
      colorReflectivity: 'نوع بازتاب نور:',
      scratchResistanceLabel: 'مقاومت سایشی:',
      popularApplicationLabel: 'کاربردهای پرطرفدار:'
    },
    estimator: {
      badge: 'سیستم هوشمند مهندسی قیمت',
      title: 'محاسبه‌گر آنلاین برآورد هزینه و مشخصات سازه استیل',
      desc: 'با مشخص کردن نوع پروژه، متراژ، گرید آلیاژ و پوشش سطحی، برآورد دقیق متریال، زمان ساخت کارخانه‌ای و وزن تقریبی را در لحظه دریافت کنید.',
      step1Title: '۱. نوع سازه و دپارتمان',
      step2Title: '۲. ابعاد و متراژ دقیق',
      step3Title: '۳. آلیاژ و پوشش نهایی',
      step4Title: '۴. شرایط محیطی نصب',
      selectCategory: 'انتخاب نوع کاربری و سازه:',
      selectAlloy: 'انتخاب گرید استیل:',
      selectFinish: 'نوع فینیش و رنگ پوشش:',
      selectEnvironment: 'محیط نصب و کاربری:',
      lengthMeter: 'طول تقریبی (متر طول):',
      heightMeter: 'ارتفاع یا عمق سازه (متر):',
      complexityLevel: 'پیچیدگی طراحی و سفارشی‌سازی:',
      standardDesign: 'طرح استاندارد و مینیمال خطی',
      luxuryCustomDesign: 'طرح لوکس سفارشی با برش CNC لیزری',
      ultraLuxuryCurvedDesign: 'طرح خاص پارامتریک و منحنی / شیشه خم',
      calcSummaryTitle: 'خلاصه مشخصات فنی و مالی برآورد:',
      estimatedBasePrice: 'هزینه کل برآورد شده:',
      estimatedWeight: 'وزن تقریبی سازه نهایی:',
      estimatedProductionTime: 'زمان تولید و آماده‌سازی در کارخانه:',
      warrantyDuration: 'مدت ضمانت کتبی این پیکربندی:',
      priceBreakdown: 'تسهیم هزینه‌های ساخت:',
      materialShare: 'ورق و پروفیل استیل اصل MTC',
      laserAndWelding: 'برش لیزر فایبر ۶kW و جوش آرگون TIG',
      pvdFinishShare: 'آبکاری PVD تیتانیوم کاتدی / پولیش',
      installationShare: 'نصب، اکسسوری و گارانتی شرکتی',
      whatsappQuoteBtn: 'ارسال رسمی پیش‌فاکتور به کارشناس واتساپ',
      bookFreeVisitBtn: 'درخواست هماهنگی بازدید حضوری برای این برآورد',
      disclaimer: '* برآورد فوق بر اساس قیمت روز شمش نیکل و ورق استیل محاسبه شده و با حضور کارشناس و نقشه‌برداری دقیق نهایی خواهد شد.'
    },
    portfolio: {
      badge: 'کارنامه درخشان مهندسی استیلکس',
      title: 'نمونه‌کارهای شاخص اجرا شده در سراسر کشور',
      desc: 'از پروژه‌های لوکس نیاوران و لواسان تا مجتمع‌های داروسازی و هتل‌های ۵ ستاره بین‌المللی با متریال تضمین شده ۳۰۴ و ۳۱۶.',
      orderSimilar: 'درخواست اجرای پروژه مشابه',
      allFilter: 'همه پروژه‌ها (۱۴۵۰+)',
      yearLabel: 'سال اجرا:',
      clientLabel: 'کارفرما:',
      locationLabel: 'محل پروژه:',
      alloyLabel: 'آلیاژ مصرفی:',
      durationLabel: 'مدت ساخت و نصب:',
      viewFullSpecs: 'مشاهده جزئیات کامل و نقشه‌ها',
      beforeAfterNotice: 'اسلایدر را به چپ و راست بکشید تا مقایسه قبل و بعد از نصب را ببینید'
    },
    whyUs: {
      badge: 'چرا کارفرمایان حرفه‌ای استیلکس را انتخاب می‌کنند؟',
      title: 'استانداردهای مهندسی و تمایزات فنی استیلکس',
      desc: '۱۵ سال تمرکز انحصاری بر آلیاژهای زنگ‌نزن استیل، ماشین‌آلات مدرن و تعهد بی قید و شرط به اصالت متریال',
      testimonialsTitle: 'نظرات معماران و کارفرمایان درباره استیلکس',
      testimonialsDesc: 'رضایت ۹۹.۴ درصدی بیش از ۱۴۵۰ کارفرمای حقیقی و حقوقی در سراسر کشور'
    },
    faq: {
      badge: 'پاسخ به سوالات فنی کارفرمایان',
      title: 'سوالات متداول و راهنمای خرید سازه‌های استیل',
      desc: 'نکات کلیدی پیرامون نحوه تشخیص استیل نگیر اصل، انتخاب آلیاژ برای مناطق مرطوب و شرایط گارانتی استیلکس',
      filterAll: 'همه',
      stillHaveQuestion: 'سوال فنی دیگری در مورد پروژه خود دارید؟',
      askAiOrSupport: 'با مشاور هوشمند هوش مصنوعی متالورژی گفتگو کنید یا درخواست کارشناسی در محل ثبت نمایید.'
    },
    consultation: {
      badge: 'اعزام کارشناس ارشد و متره حضوری',
      title: 'درخواست بازدید رایگان و مشاوره تخصصی در محل پروژه',
      desc: 'کارشناسان متالورژی و نقشه‌برداری استیلکس با تجهیزات لیزری و کاتالوگ نمونه آلیاژها در محل پروژه شما حاضر می‌شوند.',
      fullName: 'نام و نام خانوادگی',
      phone: 'شماره تماس مستقیم',
      city: 'شهر و محدوده پروژه',
      projectType: 'نوع کاربری و فضا',
      selectCategory: 'دپارتمان مهندسی مورد نظر',
      notes: 'توضیحات و متراژ حدودی',
      notesPlaceholder: 'ابعاد حدودی، نوع آلیاژ مد نظر، شرایط محیطی (مرطوب/خشک) و هرگونه نکته فنی...',
      freeVisitDisclaimer: 'بازدید اولیه، اندازه‌گیری لیزری و مشاوره انتخاب آلیاژ در کلیه مناطق کاملاً رایگان می‌باشد.',
      submitBtn: 'ثبت درخواست و اعزام کارشناس'
    },
    footer: {
      companyBio: 'گروه فنی و مهندسی استیلکس با ۱۵ سال سابقه مستمر در طراحی، ساخت و اجرای تخصصی انواع سازه‌های فلزی ساختمانی، دکوراسیون لوکس، لندسکیپ و رادیاتورهای دکوراتیو با استفاده از آلیاژ استاندارد ۳۰۴ نگیر در اکثریت پروژه‌ها (با امکان انتخاب ۲۰۱ در فضاهای بدون رطوبت جهت کاهش هزینه و آلیاژ ۳۱۶ در مصارف صنعتی) همراه با ضمانت کتبی ۱۰ الی ۱۵ ساله.',
      aboutText: 'گروه فنی و مهندسی استیلکس با ۱۵ سال سابقه مستمر در طراحی، ساخت و اجرای تخصصی انواع سازه‌های فلزی ساختمانی، دکوراسیون لوکس، لندسکیپ و رادیاتورهای دکوراتیو با استفاده از آلیاژ استاندارد ۳۰۴ نگیر در اکثریت پروژه‌ها (با امکان انتخاب ۲۰۱ در فضاهای بدون رطوبت جهت کاهش هزینه و آلیاژ ۳۱۶ در مصارف صنعتی) همراه با ضمانت کتبی ۱۰ الی ۱۵ ساله.',
      warrantyCert: 'ضمانت کتبی ۱۰ تا ۱۵ ساله',
      mtcCert: 'گواهی متالوژی MTC',
      downloadTechnicalPdf: 'دانلود کاتالوگ جامع فنی استیلکس (PDF)',
      engineeringDepts: 'دپارتمان‌های ۷ گانه مهندسی',
      sixDeptsTitle: 'دپارتمان‌های ۷ گانه',
      materialsStandards: 'آلیاژها و استانداردهای ASTM',
      onlineToolsTitle: 'ابزارهای آنلاین',
      contactUs: 'راه‌های ارتباطی و دفاتر',
      contactHeadquarters: 'ارتباط با دفتر و کارخانه',
      allRightsReserved: 'کلیه حقوق محفوظ است.',
      rightsReserved: '© کلیه حقوق مادی و معنوی متعلق به گروه مهندسی و صنعتی استیلکس (STELLEX) می‌باشد. طراحی و اجرا با استانداردهای متالوژی ASTM.'
    }
  },
  ar: {
    common: {
      brandName: 'STELLEX',
      brandSub: 'ستيليكس',
      viewDetails: 'عرض كافة التفاصيل',
      requestQuote: 'طلب عرض سعر وتنفيذ',
      freeConsultation: 'طلب معاينة ميدانية مجانية',
      instantEstimate: 'حاسبة الأسعار الفورية',
      downloadCatalog: 'تحميل الكتالوج الهندسي الشامل (PDF)',
      guaranteeYears: 'ضمان خطي من ١٠ إلى ١٥ عاماً',
      certMtc: 'شهادة التحليل الميتالورجي MTC',
      allProjects: 'جميع المشاريع',
      yearsExp: '١٥ عاماً من الخبرة',
      completedProjects: '١٤٥٠+ مشروع ناجح',
      satisfactionRate: '٩٩.٤٪ نسبة رضا العملاء',
      callNow: 'الاتصال بالمكتب الهندسي',
      whatsapp: 'التواصل عبر واتساب',
      email: 'بريد القسم الهندسي',
      address: 'عنوان المكتب الرئيسي',
      showroom: 'صالة العرض الرئيسية',
      factory: 'المجمع الصناعي ومصنع الإنتاج',
      workingHours: 'ساعات العمل: السبت إلى الأربعاء ٨:٣٠ حتى ١٩:٠٠',
      close: 'إغلاق',
      backToTop: 'العودة إلى الأعلى',
      meters: 'متر',
      kilograms: 'كجم',
      days: 'أيام عمل',
      toman: 'تومان',
      aed: 'درهم إماراتي AED',
      usd: 'دولار أمريكي USD',
      sendToWhatsapp: 'إرسال عرض السعر إلى مهندسي المبيعات على واتساب',
      submitRequest: 'تأكيد طلب المعاينة الميدانية',
      submitting: 'جاري إرسال البيانات...',
      successTitle: 'تم تسجيل طلبكم بنجاح',
      successDesc: 'سيتواصل معكم كبار المهندسين في ستيليكس خلال ساعتي عمل لترتيب موعد المعاينة والمسح الليزري ثلاثي الأبعاد مجاناً.',
      trackingCode: 'رمز المتابعة:',
      fastSupport: 'الدعم الفوري:',
      returnHome: 'إغلاق والعودة للموقع',
      namePlaceholder: 'الاسم الكامل (مثال: المهندس منصور)',
      phonePlaceholder: 'رقم الهاتف الجوال (+971 / 0912)',
      cityPlaceholder: 'المدينة والمنطقة (مثال: دبي / طهران)',
      dimensionsPlaceholder: 'الأبعاد التقديرية أو الطول (مثال: ٢٠ متراً)',
      descPlaceholder: 'تفاصيل إضافية عن المشروع ومتطلبات التصميم الخاصة...',
      uploadBlueprint: 'إرفاق المخطط المعماري أو صورة الموقع (اختياري)',
      chooseFile: 'اختيار ملف',
      privacyNote: 'معلوماتكم محمية بالكامل والمعاينة الأولية مجانية.',
      similarProjectQuote: 'طلب عرض سعر لمشروع مماثل',
      compareBeforeAfter: 'مقارنة قبل وبعد التنفيذ',
      metallurgyAdvisor: 'المستشار الذكي للميتالورجيا وهياكل الستانلس ستيل',
      onlineAdvisor: 'المستشار المباشر',
      advisorDesc: 'خبير ذكي في اختيار السبائك ومعايير ASTM وحساب التكاليف',
      askAdvisor: 'اطرح سؤالك الهندسي هنا...',
      quickQuestions: 'الأسئلة الشائعة السريعة:',
      quickQuestionsList: [
        'هل ستانلس ستيل ٣٠٤ مناسب للبيئات الساحلية أم ٣١٦؟',
        'ما هي السماكة القياسية للزجاج والصلب في درابزين الشرفة؟',
        'هل يتغير لون طلاء PVD الذهبي بفعل الشمس والمطر؟',
        'ما الفرق بين ستانلس ستيل ٣١٦L الطبي والنوع العادي؟'
      ],
      advisorTyping: 'يقوم المستشار الذكي بتحليل الخواص الميتالورجية وكتابة الرد...',
      needOnsiteExpert: 'هل تحتاج إلى زيارة ميدانية ومسح ليزري لموقعك؟',
      requestVisit: 'طلب زيارة مهندس مختص'
    },
    topBar: {
      guaranteeText: 'ضمان خطي من ١٠ إلى ١٥ عاماً ضد الصدأ وشهادة MTC الأصلية المعتمدة',
      expText: '١٥ عاماً من الريادة في تصنيع هياكل الستانلس ستيل الفاخرة',
      workHoursText: 'المصنع وصالة العرض: ٨:٣٠ حتى ١٩:٠٠',
      urgentConsultation: 'استشارة هندسية فورية:',
      liveTicker: 'الأسعار المباشرة لصفائح الستانلس ستيل ٣٠٤ و ٣١٦ (ASTM A240) مع فحص مطيافي معتمد'
    },
    nav: {
      services: 'الأقسام الهندسية السبعة',
      materials: 'استوديو السبائك و PVD',
      estimator: 'حاسبة الأسعار الفورية',
      portfolio: 'المشاريع البارزة',
      whyUs: 'معايير التميز الهندسي',
      faq: 'الأسئلة الشائعة',
      contact: 'الاتصال وصالة العرض',
      quickQuote: 'حساب التكلفة',
      expertVisit: 'طلب زيارة مجانية'
    },
    hero: {
      badge: 'هندسة هياكل الستانلس ستيل ٣٠٤ و ٣١٦ غير المغناطيسية',
      titlePrimary: 'تكامل الفخامة المعمارية مع',
      titleSecondary: 'أعلى المعايير الهندسية والميتالورجية',
      description: 'تصميم وتصنيع وتركيب درابزين الزجاج والستانلس ستيل، ديكورات محلات الذهب والمطاعم الفاخرة، هياكل اللاندسكيب، معدات غرف العمليات والمستشفيات، الخزانات الصناعية والمشعات الديكورية بخبرة ١٥ عاماً.',
      stat1Label: 'مشروع منجز بكفاءة عالية',
      stat2Label: 'سنوات الضمان الخطي المعتمد',
      stat3Label: 'ماكينات ليزر فايبر بقوة ٦ كيلوواط',
      stat4Label: 'نسبة رضا المعماريين والملاك',
      ctaPrimary: 'طلب معاينة ومسح ليزري مجاني',
      ctaSecondary: 'استكشاف الأقسام التخصصية',
      ctaEstimator: 'حاسبة التكلفة الذكية للمشروع',
      quickDeptTitle: 'الوصول السريع للأقسام التخصصية:',
      explore360: 'معاينة السبائك وطلاءات PVD الفاخرة',
      pvdFinishesTitle: 'اختبار حي لانعكاس الضوء وألوان التيتانيوم PVD'
    },
    services: {
      sectionBadge: 'الأقسام الهندسية السبعة في ستيليكس',
      sectionTitle: 'خدمات شاملة في تصميم، تصنيع وتركيب الهياكل الستانلس ستيل المعمارية، الصناعية والديكورية',
      sectionDesc: 'تتم كافة مراحل الإنتاج بدءاً من القطع بالليزر الفايبر إلى اللحام بالأرجون، الصقل الفائق وطلاء PVD تحت تفريغ الهواء بأعلى معايير الجودة والإشراف الهندسي الكامل لشركة ستيليكس.',
      exploreSubFeatures: 'المنتجات التخصصية والمواصفات الفنية لهذا القسم:',
      appliedAlloysLabel: 'السبائك القياسية المستخدمة:',
      recommendedFinishesLabel: 'أنواع الطلاء والتشطيب السطحي:',
      warrantyLabel: 'مدة الضمان الخطي للجودة:',
      viewGallery: 'مشاهدة ألبوم الصور عالي الدقة',
      orderThisCategory: 'طلب تنفيذ في هذا القسم',
      calculateCategoryPrice: 'حساب تكلفة هذا القسم عبر الإنترنت',
      specsTitle: 'المواصفات الفنية والمعايير الهندسية'
    },
    materials: {
      badge: 'الميتالورجيا، السبائك واستوديو تشطيب PVD',
      title: 'الدليل العلمي لسبائك الستانلس ستيل ومحاكي التشطيبات السطحية',
      desc: 'تعرف على الخصائص الفيزيائية والكيميائية لدرجات ٣٠٤، ٣١٦ البحرية، ٣١٦L الدوائية، مع اختبار المغناطيس الافتراضي ومحاكي انعكاس طلاء التيتانيوم.',
      alloysTab: 'جدول السبائك الميتالورجي',
      finishesTab: 'محاكي طلاءات PVD والتشطيب',
      magnetTestTitle: 'محاكي اختبار المغناطيس (إثبات نقاء وجودة السبيكة غير المغناطيسية)',
      magnetTestDesc: 'السبائك الأوستنيتية الأصلية (٣٠٤ و ٣١٦) لا تجذب المغناطيس إطلاقاً بسبب احتوائها على نسب عالية من النيكل والكروم.',
      testMagnetBtn: 'إجراء اختبار تقريب المغناطيس',
      magnetResultNegir: 'غير مغناطيسي تماماً — إثبات نقاء سبيكة ٣٠٤ أو ٣١٦',
      magnetResultBegir: 'مغناطيسي — سبيكة عرضة للصدأ في البيئات الرطبة',
      magnetResultSemi: 'شبه مغناطيسي — مقاومة متوسطة للتآكل',
      elementAnalysisTitle: 'تحليل العناصر الكيميائية وفق معيار ASTM:',
      chromium: 'الكروم (Cr)',
      nickel: 'النيكل (Ni)',
      molybdenum: 'الموليبدينوم (Mo)',
      carbon: 'الكربون (C)',
      corrosionResist: 'مقاومة الصدأ والأحماض',
      heatResist: 'مقاومة درجات الحرارة العالية',
      hardnessLevel: 'الصلابة ومقاومة الإجهاد',
      magnetBehavior: 'الاستجابة للمغناطيس',
      priceLevel: 'الفئة السعرية',
      bestUseTitle: 'أفضل الاستخدامات والتطبيقات:',
      pvdAdvantageTitle: 'تقنية طلاء PVD بنتريد التيتانيوم في ستيليكس:',
      pvdAdvantageDesc: 'يتم تطبيق الطلاء تحت ضغط تفريغ هائل (١٠⁻⁵ تور) وحرارة ٤٠٠ درجة مئوية للاندماج مع البنية البلورية للصلب، مما يجعله مقاوماً للخدش وأشعة الشمس بنسبة ١٠٠٪.',
      colorReflectivity: 'نوع الانعكاس الضوئي:',
      scratchResistanceLabel: 'مقاومة الاحتكاك:',
      popularApplicationLabel: 'أبرز الاستخدامات الفاخرة:'
    },
    estimator: {
      badge: 'النظام الهندسي الذكي لحساب التكاليف',
      title: 'حاسبة التكلفة الفورية ومواصفات الهياكل المعدنية',
      desc: 'حدد نوع المشروع، الأبعاد، سبيكة الصلب، ونوع التشطيب للحصول على تقدير فوري للتكلفة، والوزن الإجمالي بالكيلوغرام، والمدة الزمنية للإنتاج في المصنع.',
      step1Title: '١. نوع الهيكل والقسم',
      step2Title: '٢. الأبعاد والمتراج الدقيق',
      step3Title: '٣. السبيكة والطلاء النهائي',
      step4Title: '٤. بيئة الموقع والتركيب',
      selectCategory: 'اختيار نوع الهيكل والاستخدام:',
      selectAlloy: 'اختيار درجة الستانلس ستيل:',
      selectFinish: 'نوع التشطيب ولون الطلاء:',
      selectEnvironment: 'بيئة موقع التركيب:',
      lengthMeter: 'الطول التقديري (بالمتر الطولي):',
      heightMeter: 'الارتفاع أو العمق (بالمتر):',
      complexityLevel: 'مستوى تعقيد التصميم:',
      standardDesign: 'تصميم قياسي وخطي بسيط',
      luxuryCustomDesign: 'تصميم مخصص فاخر مع قطع ليزر CNC',
      ultraLuxuryCurvedDesign: 'تصميم بارامتري فريد ومنحنيات خاصة',
      calcSummaryTitle: 'ملخص التقدير الفني والمالي:',
      estimatedBasePrice: 'التكلفة الإجمالية التقديرية:',
      estimatedWeight: 'الوزن التقريبي للهيكل النهائي:',
      estimatedProductionTime: 'مدة التصنيع والجاهزية في المصنع:',
      warrantyDuration: 'مدة الضمان الخطي لهذا التكوين:',
      priceBreakdown: 'توزيع تكاليف التصنيع:',
      materialShare: 'صفائح وأنابيب الصلب الأصلية مع شهادة MTC',
      laserAndWelding: 'القطع بليزر ٦kW ولحام الأرجون TIG',
      pvdFinishShare: 'طلاء التيتانيوم PVD الكاثودي / الصقل الفائق',
      installationShare: 'التركيب والإكسسوارات والضمان المعتمد',
      whatsappQuoteBtn: 'إرسال عرض السعر الرسمي إلى مهندس المبيعات عبر واتساب',
      bookFreeVisitBtn: 'طلب معاينة ميدانية مجانية لهذا التقدير',
      disclaimer: '* التقدير أعلاه مبني على أسعار بورصة المعادن المباشرة وسيتم اعتماده نهائياً بعد المعاينة والمسح الليزري.'
    },
    portfolio: {
      badge: 'سجل إنجازات ستيليكس الهندسية',
      title: 'مشاريعنا الريادية المنفذة في مختلف القطاعات',
      desc: 'من الفلل والقصور الفاخرة إلى مصانع الأدوية الكبرى والفنادق العالمية فئة ٥ نجوم بضمان سبائك ٣٠۴ و ٣١۶.',
      orderSimilar: 'طلب تنفيذ مشروع مماثل',
      allFilter: 'جميع المشاريع (١٤٥٠+)',
      yearLabel: 'سنة التنفيذ:',
      clientLabel: 'العميل:',
      locationLabel: 'الموقع:',
      alloyLabel: 'السبيكة المستخدمة:',
      durationLabel: 'مدة التصنيع والتركيب:',
      viewFullSpecs: 'مشاهدة المواصفات والمخططات الكاملة',
      beforeAfterNotice: 'حرك الشريط لمقارنة الموقع قبل وبعد تركيب الهياكل'
    },
    whyUs: {
      badge: 'لماذا يختار كبار المعماريين والمطورين ستيليكس؟',
      title: 'المعايير الهندسية والمزايا التنافسية لستيليكس',
      desc: '١٥ عاماً من التركيز الحصري على سبائك الستانلس ستيل، وأحدث المعدات الصناعية والالتزام الصارم بأصالة المواد.',
      testimonialsTitle: 'آراء المعماريين والمطورين في ستيليكس',
      testimonialsDesc: 'نسبة رضا ٩٩.٤٪ لأكثر من ١٤٥٠ عميلاً ومؤسسة في المنطقة'
    },
    faq: {
      badge: 'إجابات على استفسارات العملاء الفنية',
      title: 'الأسئلة الشائعة ودليل شراء هياكل الستانلس ستيل',
      desc: 'معلومات هامة حول كيفية التمييز بين السبائك الأصلية، اختيار الصلب للمناطق الرطبة، وشروط الضمان المعتمد.',
      filterAll: 'الكل',
      stillHaveQuestion: 'هل لديك استفسار فني آخر بخصوص مشروعك؟',
      askAiOrSupport: 'تحدث مع مستشار الذكاء الاصطناعي للميتالورجيا أو اطلب موعد معاينة ميدانية.'
    },
    consultation: {
      badge: 'إرسال كبير المهندسين والمسح الميداني',
      title: 'طلب زيارة معاينة مجانية واستشارة هندسية في الموقع',
      desc: 'يحضر خبراء الميتالورجيا والمسح الهندسي لستيليكس مع أجهزة الليزر وعينات السبائك إلى موقع مشروعك.',
      fullName: 'الاسم الكامل',
      phone: 'رقم الهاتف المباشر',
      city: 'المدينة ومنطقة المشروع',
      projectType: 'نوع المشروع والمساحة',
      selectCategory: 'القسم الهندسي المطلوب',
      notes: 'الملاحظات والأبعاد التقريبية',
      notesPlaceholder: 'المقاسات التقريبية، السبيكة المفضلة، ظروف البيئة وأي متطلبات معمارية...',
      freeVisitDisclaimer: 'المعاينة الأولية، المسح الليزري والاستشارة الهندسية مجانية بالكامل لجميع المشاريع.',
      submitBtn: 'تسجيل الطلب وتحديد موعد المعاينة'
    },
    footer: {
      companyBio: 'مجموعة ستيليكس الهندسية بخبرة ١٥ عاماً في تصميم وتصنيع وتركيب هياكل الستانلس ستيل المعمارية، الديكورات التجارية الفاخرة، هياكل اللاندسكيب، المعدات الطبية والمشعات الديكورية باستخدام سبائك ٣٠۴ و ٣١۶ النقية.',
      aboutText: 'مجموعة ستيليكس الهندسية بخبرة ١٥ عاماً في تصميم وتصنيع وتركيب هياكل الستانلس ستيل المعمارية، الديكورات التجارية الفاخرة، هياكل اللاندسكيب، المعدات الطبية والمشعات الديكورية باستخدام سبائك ٣٠۴ و ٣١۶ النقية.',
      warrantyCert: 'ضمان خطي من ١٠ إلى ١٥ عاماً',
      mtcCert: 'شهادة التحليل الميتالورجي MTC',
      downloadTechnicalPdf: 'تحميل الكتالوج الفني الشامل لستيليكس (PDF)',
      engineeringDepts: 'الأقسام الهندسية السبعة',
      sixDeptsTitle: 'الأقسام الهندسية السبعة',
      materialsStandards: 'السبائك ومعايير ASTM الدولية',
      onlineToolsTitle: 'الأدوات التفاعلية',
      contactUs: 'معلومات الاتصال والمكاتب',
      contactHeadquarters: 'التواصل مع المكتب والمصنع',
      allRightsReserved: 'جميع الحقوق محفوظة.',
      rightsReserved: '© جميع الحقوق محفوظة لمجموعة ستيليكس الهندسية والصناعية (STELLEX). التصنيع وفق معايير ASTM العالمية.'
    }
  },
  en: {
    common: {
      brandName: 'STELLEX',
      brandSub: 'Engineering',
      viewDetails: 'View Full Specifications',
      requestQuote: 'Request Quote & Fabrication',
      freeConsultation: 'Request Free On-Site Survey',
      instantEstimate: 'Instant Online Estimator',
      downloadCatalog: 'Download Master Catalog (PDF)',
      guaranteeYears: '10 to 15 Years Written Warranty',
      certMtc: 'MTC Metallurgy Certification',
      allProjects: 'All Projects',
      yearsExp: '15 Years Experience',
      completedProjects: '1,450+ Completed Projects',
      satisfactionRate: '99.4% Client Satisfaction',
      callNow: 'Call Engineering Office',
      whatsapp: 'WhatsApp Support',
      email: 'Technical Email',
      address: 'Headquarters Address',
      showroom: 'Niavaran Showroom',
      factory: 'Industrial Manufacturing Complex',
      workingHours: 'Working Hours: Sat - Wed 8:30 to 19:00',
      close: 'Close',
      backToTop: 'Back to Top',
      meters: 'Meters',
      kilograms: 'kg',
      days: 'Business Days',
      toman: 'Toman',
      aed: 'AED (Dirhams)',
      usd: 'USD ($)',
      sendToWhatsapp: 'Send Quote directly to Sales Engineers on WhatsApp',
      submitRequest: 'Submit On-Site Consultation Request',
      submitting: 'Submitting Details...',
      successTitle: 'Your Request has been Successfully Submitted',
      successDesc: 'Senior STELLEX technical engineers will contact you within 2 business hours to arrange a free on-site laser survey and metallurgical consultation.',
      trackingCode: 'Tracking Code:',
      fastSupport: 'Hotline Support:',
      returnHome: 'Return to Website',
      namePlaceholder: 'Full Name (e.g. Eng. Alexander Smith)',
      phonePlaceholder: 'Contact Mobile Number (+1 / +971 / 0912)',
      cityPlaceholder: 'Project City & Area (e.g. Dubai Marina / Tehran)',
      dimensionsPlaceholder: 'Estimated Length or Dimensions (e.g. 25 meters)',
      descPlaceholder: 'Project architectural requirements, alloy preferences, and details...',
      uploadBlueprint: 'Attach Architectural Drawing, Blueprint or Photo (Optional)',
      chooseFile: 'Select File',
      privacyNote: 'Your information is fully protected and on-site initial laser survey is complimentary.',
      similarProjectQuote: 'Request Quote for Similar Project',
      compareBeforeAfter: 'Compare Before & After Installation',
      metallurgyAdvisor: 'AI Stainless Steel & Metallurgy Advisor',
      onlineAdvisor: 'Online Advisor',
      advisorDesc: 'Specialized metallurgical engine for alloy selection, ASTM standards and estimates',
      askAdvisor: 'Ask any technical question regarding steel alloys or projects...',
      quickQuestions: 'Frequently Asked Technical Questions:',
      quickQuestionsList: [
        'Is Grade 304 suitable for coastal/pool environments or 316?',
        'What is standard glass & steel thickness for balcony railings?',
        'Does Titanium PVD gold coating fade under sun and rain?',
        'What is the difference between 316L Pharma steel and regular steel?'
      ],
      advisorTyping: 'AI metallurgical advisor is analyzing specs and composing answer...',
      needOnsiteExpert: 'Need a certified engineer with 3D laser scanner on your site?',
      requestVisit: 'Request Site Visit'
    },
    topBar: {
      guaranteeText: '10 to 15-Year Written Anti-Corrosion Guarantee & Verified MTC Certificate',
      expText: '15 Years of Specialized Stainless Steel Architectural Engineering',
      workHoursText: 'Factory & Showroom: 8:30 AM to 7:00 PM',
      urgentConsultation: 'Fast Technical Support:',
      liveTicker: 'Live Stainless Steel 304 & 316 Market Ticker (ASTM A240) with Lab Spectrometry Verification'
    },
    nav: {
      services: '7 Engineering Divisions',
      materials: 'Alloy & PVD Studio',
      estimator: 'Online Cost Estimator',
      portfolio: 'Featured Projects',
      whyUs: 'Why STELLEX',
      faq: 'FAQ & Knowledge',
      contact: 'Contact & Showroom',
      quickQuote: 'Calculate Cost',
      expertVisit: 'Free Site Survey'
    },
    hero: {
      badge: 'Austenitic Non-Magnetic Stainless Steel 304 & 316 Engineering',
      titlePrimary: 'Harmonizing Architectural Luxury with',
      titleSecondary: 'Rigorous Metallurgical Engineering',
      description: 'Turnkey architectural design, CNC fiber laser fabrication, and installation of glass & steel railings, luxury commercial and jewelry store fixtures, landscape water features, cleanroom medical equipment, and decorative radiators with 15 years of proven excellence.',
      stat1Label: 'Successfully Delivered Projects',
      stat2Label: 'Years Guaranteed Warranty',
      stat3Label: '6-kW Fiber Laser Cutters',
      stat4Label: 'Architect & Client Satisfaction',
      ctaPrimary: 'Request Free On-Site Laser Survey',
      ctaSecondary: 'Explore 7 Engineering Divisions',
      ctaEstimator: 'Smart Project Cost Estimator',
      quickDeptTitle: 'Quick Jump to Specialized Engineering Division:',
      explore360: 'Preview Alloys & High-Vacuum PVD Finishes',
      pvdFinishesTitle: 'Live Visualizer: Specular Reflection & Titanium PVD Colors'
    },
    services: {
      sectionBadge: '7 Specialized Engineering Divisions',
      sectionTitle: 'Comprehensive Design, Fabrication & Installation of Architectural, Industrial and Decorative Stainless Steel Structures',
      sectionDesc: 'All processes from fiber laser cutting to argon welding, super-polishing, and vacuum PVD coating are executed with the highest quality and full engineering supervision by STELLEX.',
      exploreSubFeatures: 'Sub-Categories & Architectural Engineering Specifications:',
      appliedAlloysLabel: 'Certified Metallurgical Alloys:',
      recommendedFinishesLabel: 'Surface Polishes & PVD Colors:',
      warrantyLabel: 'Written Warranty Coverage:',
      viewGallery: 'View High-Resolution Image Gallery',
      orderThisCategory: 'Order Fabrication in this Division',
      calculateCategoryPrice: 'Calculate Instant Cost for this Division',
      specsTitle: 'Technical Specifications & ASTM Standards'
    },
    materials: {
      badge: 'Metallurgy, Alloys & Vacuum PVD Studio',
      title: 'Scientific Stainless Steel Guide & Interactive Surface Finish Simulator',
      desc: 'Explore physical and chemical properties of 304, 316 Marine Grade, 316L Ultra-Low Carbon Pharma and 201 alloys with virtual magnet non-magnetic test and high-vacuum PVD color reflections.',
      alloysTab: 'Metallurgical Alloy Matrix',
      finishesTab: 'Interactive PVD & Polish Simulator',
      magnetTestTitle: 'Interactive Magnet Non-Magnetic Test Simulator',
      magnetTestDesc: 'Genuine austenitic stainless steels (304 and 316) have a non-magnetic crystal lattice due to high Nickel & Chromium content, repelling magnets completely.',
      testMagnetBtn: 'Run Virtual Magnet Proximity Test',
      magnetResultNegir: '100% Non-Magnetic (Repels Magnet) — Verified Authentic 304 or 316 Grade',
      magnetResultBegir: 'Magnetic (Attracts Magnet) — Low Nickel, vulnerable to rust in humid areas',
      magnetResultSemi: 'Semi-Magnetic — Moderate corrosion resistance',
      elementAnalysisTitle: 'ASTM Chemical Element Matrix Breakdown:',
      chromium: 'Chromium (Cr)',
      nickel: 'Nickel (Ni)',
      molybdenum: 'Molybdenum (Mo)',
      carbon: 'Carbon (C)',
      corrosionResist: 'Corrosion & Acid Resistance',
      heatResist: 'High Temperature Tolerance',
      hardnessLevel: 'Hardness & Yield Strength',
      magnetBehavior: 'Magnetic Permeability',
      priceLevel: 'Price Category',
      bestUseTitle: 'Recommended Engineering Applications:',
      pvdAdvantageTitle: 'STELLEX Cathodic Titanium Nitride PVD Technology:',
      pvdAdvantageDesc: 'Our vacuum chamber PVD coating is deposited at 10⁻⁵ Torr vacuum and 400°C, molecularly bonding with the steel matrix to deliver extreme scratch and UV fading resistance.',
      colorReflectivity: 'Reflection Character:',
      scratchResistanceLabel: 'Wear & Scratch Resistance:',
      popularApplicationLabel: 'Signature Applications:'
    },
    estimator: {
      badge: 'Smart Engineering Cost Engine',
      title: 'Online Instant Cost, Weight & Production Timeline Estimator',
      desc: 'Specify project category, dimensions, steel alloy, and surface finish to obtain an instant estimation of material requirements, factory fabrication time, and total weight in kilograms.',
      step1Title: '1. Structure Type & Division',
      step2Title: '2. Dimensions & Length',
      step3Title: '3. Alloy & PVD Finish',
      step4Title: '4. Environment & Installation',
      selectCategory: 'Select Architectural Structure Type:',
      selectAlloy: 'Select Stainless Steel Grade:',
      selectFinish: 'Select Surface Polish & PVD Color:',
      selectEnvironment: 'Installation Environment:',
      lengthMeter: 'Estimated Length (Linear Meters):',
      heightMeter: 'Height / Depth (Meters):',
      complexityLevel: 'Design & Fabrication Complexity:',
      standardDesign: 'Standard & Minimalist Linear Design',
      luxuryCustomDesign: 'Custom Luxury Design with CNC Laser Cutting',
      ultraLuxuryCurvedDesign: 'Parametric Ultra-Luxury Curved & Formed Design',
      calcSummaryTitle: 'Technical & Financial Estimate Breakdown:',
      estimatedBasePrice: 'Estimated Total Cost:',
      estimatedWeight: 'Approximate Total Steel Weight:',
      estimatedProductionTime: 'Factory Fabrication Timeline:',
      warrantyDuration: 'Written Warranty for this Configuration:',
      priceBreakdown: 'Fabrication Cost Distribution:',
      materialShare: 'Certified MTC Stainless Steel Sheet & Tubes',
      laserAndWelding: '6kW Fiber Laser Cutting & TIG Argon Welding',
      pvdFinishShare: 'Cathodic Vacuum PVD Coating / 8K Polishing',
      installationShare: 'Site Installation, Hardware & Warranty',
      whatsappQuoteBtn: 'Send Official Quote Directly via WhatsApp',
      bookFreeVisitBtn: 'Request Free On-Site Laser Survey for this Estimate',
      disclaimer: '* The estimate above is dynamically computed based on global nickel and steel market indices and will be finalized after on-site laser dimensioning.'
    },
    portfolio: {
      badge: 'STELLEX Engineering Milestone Portfolio',
      title: 'Featured National & Luxury Case Studies',
      desc: 'From luxury penthouses and villas in Niavaran and Lavasan to pharmaceutical cleanrooms and international 5-star hotels with certified 304 and 316 materials.',
      orderSimilar: 'Request Similar Project Execution',
      allFilter: 'All Case Studies (1,450+)',
      yearLabel: 'Completion Year:',
      clientLabel: 'Client / Developer:',
      locationLabel: 'Project Location:',
      alloyLabel: 'Certified Alloy:',
      durationLabel: 'Fabrication & Install Time:',
      viewFullSpecs: 'View Full Blueprints & Specifications',
      beforeAfterNotice: 'Drag slider left and right to inspect the location before and after STELLEX installation'
    },
    whyUs: {
      badge: 'Why Leading Architects Choose STELLEX',
      title: 'Engineering Standards & Competitive Edge',
      desc: '15 years of exclusive focus on stainless steel alloys, modern CNC industrial machinery and uncompromising material integrity.',
      testimonialsTitle: 'What Architects & Clients Say About STELLEX',
      testimonialsDesc: '99.4% satisfaction score across 1,450+ corporate and private projects'
    },
    faq: {
      badge: 'Engineering Knowledge Base & FAQ',
      title: 'Frequently Asked Questions & Stainless Steel Buying Guide',
      desc: 'Key insights on non-magnetic alloy testing, choosing grades for humid marine environments, and warranty policies.',
      filterAll: 'All',
      stillHaveQuestion: 'Have a custom technical query about your project?',
      askAiOrSupport: 'Chat with our AI Metallurgy Advisor or request a complimentary on-site visit.'
    },
    consultation: {
      badge: 'Senior Metallurgical Survey & Laser Measurement',
      title: 'Request Complimentary On-Site Inspection & Engineering Consultation',
      desc: 'STELLEX surveying engineers equipped with 3D laser scanners and alloy samples will visit your site to prepare shop-drawings.',
      fullName: 'Full Name',
      phone: 'Direct Phone Number',
      city: 'City & Project Area',
      projectType: 'Building / Space Type',
      selectCategory: 'Engineering Division',
      notes: 'Estimated Dimensions & Notes',
      notesPlaceholder: 'Approximate dimensions, preferred alloy, environmental conditions (humid/dry)...',
      freeVisitDisclaimer: 'Initial on-site survey, 3D laser measurement, and alloy consulting are 100% complimentary.',
      submitBtn: 'Submit Request & Dispatch Engineer'
    },
    footer: {
      companyBio: 'STELLEX Engineering Group with 15 years of continuous leadership in architectural metal structures, luxury commercial decoration, landscape water features, pharmaceutical sanitary equipment, and designer radiators using pure 304 and 316 stainless alloys.',
      aboutText: 'STELLEX Engineering Group with 15 years of continuous leadership in architectural metal structures, luxury commercial decoration, landscape water features, pharmaceutical sanitary equipment, and designer radiators using pure 304 and 316 stainless alloys.',
      warrantyCert: '10 to 15 Years Written Warranty',
      mtcCert: 'Certified MTC Metallurgy',
      downloadTechnicalPdf: 'Download STELLEX Master Technical Catalog (PDF)',
      engineeringDepts: '7 Specialized Engineering Divisions',
      sixDeptsTitle: '7 Specialized Divisions',
      materialsStandards: 'ASTM Alloys & Standards',
      onlineToolsTitle: 'Online Interactive Tools',
      contactUs: 'Contact & Offices',
      contactHeadquarters: 'Headquarters & Factory Contact',
      allRightsReserved: 'All rights reserved.',
      rightsReserved: '© All rights reserved by STELLEX Engineering & Industrial Group. Engineered according to ASTM metallurgical standards.'
    }
  }
};
