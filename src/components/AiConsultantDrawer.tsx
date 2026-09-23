import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { COMPANY_INFO, STEEL_ALLOYS, FINISH_TYPES } from '../data/stellexData';
import { 
  Bot, 
  X, 
  Send, 
  Sparkles, 
  User, 
  CheckCircle2, 
  ShieldCheck, 
  RotateCw, 
  HelpCircle,
  Flame,
  ArrowRight,
  ArrowLeft,
  Image as ImageIcon,
  Paperclip,
  Trash2
} from 'lucide-react';

interface AiConsultantDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenConsultation: () => void;
}

interface ChatMessage {
  id: string;
  sender: 'ai' | 'user';
  text: string;
  imageUrl?: string;
  timestamp: string;
}

export const AiConsultantDrawer: React.FC<AiConsultantDrawerProps> = ({
  isOpen,
  onClose,
  onOpenConsultation,
}) => {
  const { language, t, isRtl } = useLanguage();
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputVal, setInputVal] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [chatImage, setChatImage] = useState<string | null>(null);
  const [chatImageName, setChatImageName] = useState<string | null>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const quickPrompts = {
    fa: [
      'کدام آلیاژ برای پروژه من مناسب است؟ (۳۰۴ استاندارد، ۲۰۱ اقتصادی، یا ۳۱۶ صنعتی)',
      'تفاوت استیل ۳۰۴ نگیر با استیل ۲۰۱ و ۳۱۶ صنعتی چیست؟',
      'شرایط گارانتی ۱۰ تا ۱۵ ساله کتبی استیلکس به چه صورت است؟',
      'آیا رنگ طلایی PVD در برابر نور خورشید و سایش مقاوم است؟'
    ],
    ar: [
      'أي سبيكة تناسب مشروعي؟ (٣٠٤ القياسية، ٢٠١ الاقتصادية، أم ٣١٦ الصناعية)',
      'ما الفرق بين ستانلس ۳۰۴ و ۲۰۱ و ۳۱۶ الصناعي؟',
      'ما هي شروط ضمان استيلکس لمدة ١٠ إلى ١٥ عاماً؟',
      'هل يتغير لون طلاء الذهب PVD مع أشعة الشمس والحرارة؟'
    ],
    en: [
      'Which alloy suits my project? (304 Standard, 201 Economy, or 316 Industrial)',
      'What is the difference between SS304, SS201, and Industrial SS316?',
      'What are the terms of STELLEX 10-15 year written warranty?',
      'Does PVD Titanium Gold coating fade under UV sunlight?'
    ]
  };

  // Initialize initial greeting when opening or changing language
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      let welcomeMsg = '';
      if (language === 'en') {
        welcomeMsg = 'Hello! I am STELLEX AI Metallurgical Advisor. How can I assist you today with alloy selection (Standard AISI 304, dry-area economy 201, or industrial 316), PVD coating technologies, or our 10 to 15-year warranty standards?';
      } else if (language === 'ar') {
        welcomeMsg = 'أهلاً بك! أنا المستشار الهندسي لمجموعة استيلکس. كيف يمكنني مساعدتك في اختيار السبائك (ستانلس ۳۰۴ الأساسي، ۲۰١ للمناطق الجافة، أو ۳۱۶ للمشاريع الصناعية)، أو ضمان ١٠-١٥ عاماً؟';
      } else {
        welcomeMsg = 'درود بر شما! من مشاور هوشمند متالورژی و مهندسی استیلکس هستم. چطور می‌توانم در انتخاب آلیاژ مصرفی (استیل ۳۰۴ نگیر استاندارد، استیل ۲۰۱ برای فضاهای خشک جهت کاهش هزینه، و استیل ۳۱۶ صرفاً برای مصارف صنعتی)، پوشش PVD، یا گارانتی ۱۰ الی ۱۵ ساله راهنمایی‌تان کنم؟';
      }

      setMessages([
        {
          id: 'welcome',
          sender: 'ai',
          text: welcomeMsg,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        }
      ]);
    }
  }, [isOpen, language, messages.length]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  if (!isOpen) return null;

  const handleSendMessage = (userQuery?: string) => {
    const textToSend = userQuery?.trim() || inputVal.trim() || (chatImage ? (language === 'en' ? 'Attached project photo for structural evaluation' : language === 'ar' ? 'صورة المشروع المرفقة للتقييم الهندسي' : 'تصویر ضمیمه جهت بررسی و برآورد فنی سازه استیل') : '');
    if (!textToSend && !chatImage) return;

    const currentImage = chatImage;
    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: textToSend,
      imageUrl: currentImage || undefined,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages(prev => [...prev, userMsg]);
    setInputVal('');
    setChatImage(null);
    setChatImageName(null);
    if (imageInputRef.current) imageInputRef.current.value = '';
    setIsTyping(true);

    // Dynamic Intelligent Metallurgical Knowledge Engine
    setTimeout(() => {
      let reply = '';
      const q = textToSend.toLowerCase();

      if (currentImage) {
        if (language === 'en') {
          reply = '📸 **Project Image Received & Analyzed:**\n\n• **Structural Assessment:** Based on your photo, STELLEX precision stainless steel systems integrate seamlessly with hidden anchors.\n• **Alloy Recommendation:** As standard across our projects, we use **AISI 304 Austenitic (Non-magnetic)** with a **10 to 15-year guarantee**. For dry interior areas with budget reduction needs, Grade 201 can be specified. Grade 316 and higher is reserved exclusively for industrial applications.\n• **Next Step:** You can book a free on-site 3D laser survey or send your floor dimensions via WhatsApp for an immediate engineering estimate.';
        } else if (language === 'ar') {
          reply = '📸 **تم استلام صورة المشروع وتحليلها هندسياً:**\n\n• **التقييم الإنشائي:** بناءً على الصورة، يمكن تركيب قوائم استيلکس بنظام تثبيت مخفي بالكامل دون لحام بالموقع.\n• **السبيكة المقترحة:** السبيكة القياسية المعتمدة في معظم المشاريع هي **ستانلس ۳۰۴ نغير (غير مغناطيسي)** مع **ضمان من ١٠ إلى ١٥ عاماً**. للمساحات الداخلية الجافة يمكن استخدام سبيكة ۲۰۱ لخفض التكلفة، بينما سبيكة ۳۱۶ وما فوق مخصصة حصراً للاستخدامات الصناعية.\n• **الخطوة التالية:** يمكنك حجز موعد مسح ليزري مجاني أو مشاركة المقاسات عبر واتساب.';
        } else {
          reply = '📸 **تصویر پروژه شما با موفقیت دریافت و آنالیز شد:**\n\n• **بررسی فرم سازه:** بر اساس تصویر ارسالی، این طرح با قطعات پیش‌ساخته مدولار استیلکس و اتصالات فیتینگ مخفی (بدون نیاز به جوشکاری در محل و بدون آسیب به سنگ) کاملاً قابل پیاده‌سازی است.\n• **سیاست آلیاژ مصرفی:** آلیاژ پیش‌فرض و استاندارد در اکثر قریب‌به‌اتفاق پروژه‌های استیلکس **استیل ۳۰۴ نگیر** با **ضمانت ۱۰ تا ۱۵ ساله کتبی** است. در فضاهای کاملاً داخلی و عاری از هرگونه رطوبت، بنا به درخواست کارفرما جهت کاهش هزینه‌ها امکان استفاده از **استیل ۲۰۱** نیز وجود دارد. شایان ذکر است آلیاژ **استیل ۳۱۶ و بالاتر فقط در موارد و کاربری‌های صنعتی** به کار می‌رود.\n• **اقدام بعدی:** می‌توانید درخواست کارشناسی و اندازه‌گیری رایگان با متر لیزری در محل ثبت کنید یا ابعاد را در واتس‌اپ ارسال فرمایید.';
        }
      } else if (q.includes('304') || q.includes('316') || q.includes('201') || q.includes('آلیاژ') || q.includes('تفاوت') || q.includes('فرق') || q.includes('difference') || q.includes('alloy')) {
        if (language === 'en') {
          reply = '📌 **Official Metallurgical Alloy Policy & Standards:**\n\n• **AISI 304 Non-Magnetic (Standard Alloy in Most Projects):** The gold standard of STELLEX. High chromium-nickel content, completely non-magnetic, superior rust and corrosion resistance for residential and commercial architecture. Covered by a **10 to 15-year warranty**.\n• **AISI 201 (Economy / Dry Areas Only):** Used in select special circumstances and strictly dry, moisture-free indoor spaces to help clients reduce project costs.\n• **AISI 316 & Higher (Exclusively for Industrial Uses):** Contains molybdenum for harsh chemicals and severe environments. Reserved strictly for industrial applications, chemical plants, and specialized heavy engineering.';
        } else if (language === 'ar') {
          reply = '📌 **المعايير والسياسة الهندسية المعتمدة للسبائك:**\n\n• **ستانلس ۳۰۴ غير المغناطيسي (السبيكة الأساسية في معظم المشاريع):** الخيار الذهبي لمجموعة استيلکس بنسبة كروم ونيكل عالية، مقاوم تام للأكسدة والصدأ في المباني السكنية والتجارية مع **ضمان معتمد من ١٠ إلى ١٥ عاماً**.\n• **ستانلس ۲۰۱ (للمناطق الجافة وخفض التكاليف):** يُستخدم في حالات خاصة ومحددة، وحصراً في المساحات الداخلية الجافة تماماً الخالية من أي رطوبة لتقليل تكلفة المشروع.\n• **ستانلس ۳۱۶ وما فوق (مخصص حصراً للاستخدامات الصناعية):** يحتوي على الموليبدينوم للأحماض والمواد الكيميائية، ويُستخدم فقط في المنشآت الصناعية والمصانع المتخصصة.';
        } else {
          reply = '📌 **بررسی و خط‌مشی مهندسی آلیاژهای مصرفی در استیلکس:**\n\n• **استیل ۳۰۴ نگیر (آلیاژ اصلی و استاندارد در اکثر پروژه‌ها):** آلیاژ اصلی و استاندارد مصرفی در اکثر قریب‌به‌اتفاق پروژه‌های اجرایی استیلکس، استیل ۳۰۴ نگیر (آستنیتی ۱۸/۸ غیرمغناطیسی) است. این آلیاژ بالاترین مقاومت در برابر زنگ‌زدگی، تغییر رنگ و شرایط جوی را دارا بوده و مشمول **گارانتی ۱۰ تا ۱۵ ساله کتبی** شرکت است.\n• **استیل ۲۰۱ (موارد خاص، فضاهای بدون رطوبت و کاهش هزینه):** در بعضی موارد خاص و منحصراً در فضاهایی که رطوبت ندارد، برای کاهش هزینه‌های ساخت پروژه، با صلاحدید مهندسی از آلیاژ استیل ۲۰۱ نیز استفاده می‌شود.\n• **استیل ۳۱۶ و بالاتر (فقط در موارد صنعتی):** آلیاژهای استیل ۳۱۶، ۳۱۶L و آلیاژهای بالاتر به دلیل برخورداری از عنصر مولیبدن و خواص ویژه، فقط و فقط در موارد صنعتی، محیط‌های اسیدی، خطوط داروسازی و کاربری‌های خاص صنعتی مورد استفاده قرار می‌گیرند.';
        }
      } else if (q.includes('گارانتی') || q.includes('ضمانت') || q.includes('warranty') || q.includes('guarantee')) {
        if (language === 'en') {
          reply = '🛡️ **STELLEX 10 to 15-Year Official Written Warranty:**\n\nAll architectural projects engineered with standard AISI 304 stainless steel and PVD coatings include an official **10 to 15-year warranty** against metallurgy rust, PVD discoloration, and mechanical joint failure. For industrial installations, specific industrial certifications (MTC / ASTM) apply.';
        } else if (language === 'ar') {
          reply = '🛡️ **ضمان استيلکس الرسمي المكتوب من ١٠ إلى ١٥ عاماً:**\n\nتشمل كافة مشاريعنا المنفذة بستانلس ۳۰۴ وطلاء PVD ضماناً رسمياً مكتوباً يمتد من **١٠ إلى ١٥ عاماً** ضد الصدأ وتغير اللون وتفكك التثبيت الميكانيكي، مع تقديم شهادات فحص المعادن المعتمدة.';
        } else {
          reply = '🛡️ **شناسنامه و ضمانت کتبی ۱۰ الی ۱۵ ساله استیلکس:**\n\nکلیه پروژه‌های سازه‌ای و دکوراتیو اجرا شده با آلیاژ استاندارد استیل ۳۰۴ نگیر و پوشش‌های تحت خلأ PVD، دارای گارانتی و ضمانت‌نامه رسمی کتبی بین **۱۰ تا ۱۵ سال** می‌باشند. این ضمانت شامل ثبات متالورژیکی، عدم اکسیداسیون، پایداری رنگ PVD و استحکام تمام اتصالات مکانیکی بدون جوشکاری در محل است.';
        }
      } else if (q.includes('pvd') || q.includes('رنگ') || q.includes('طلا') || q.includes('color') || q.includes('gold')) {
        if (language === 'en') {
          reply = '✨ **PVD Cathodic Arc Vacuum Coating:**\n\nUnlike traditional plating or electroplating, STELLEX applies PVD (Physical Vapor Deposition) at 10⁻⁵ Torr vacuum chambers. Titanium nitride atoms fuse atomically with the stainless steel substrate. It will NOT peel, fade, or oxidize under UV sunlight or moisture. Scratch hardness reaches 2500-3000 HV (harder than hardened steel). Covered by our 10 to 15-year warranty.';
        } else if (language === 'ar') {
          reply = '✨ **تقنية طلاء PVD بالتفريغ الفراغي:**\n\nتعتمد استيلکس على ترسيب ذرات التيتانيوم في غرف تفريغ فائقة. هذا الطلاء يندمج ذرياً مع سطح الإستانلس ستيل، ولا يتقشر أو يتغير لونه تحت أشعة الشمس فوق البنفسجية أو الرطوبة، مع صلابة تصل إلى 3000HV ضد الخدش وضمان ١٠ إلى ١٥ عاماً.';
        } else {
          reply = '✨ **فناوری پوشش‌دهی PVD تحت خلاء استیلکس:**\n\nبرخلاف آبکاری‌های سنتی یا الکتروپلیت که پس از مدتی کدر شده یا پوسته می‌کنند، در سیستم PVD استیلکس ذرات نیترید تیتانیوم در کوره تحت خلاء با پیوند اتمی روی سطح استیل می‌نشینند. این پوشش کاملاً مقاوم به اشعه فرابنفش (UV)، بدون تغییر رنگ در برابر شوینده‌های غیراسیدی و با سختی ۳۰۰۰ ویکرز ضدخش است و با ضمانت ۱۰ تا ۱۵ ساله ارائه می‌شود.';
        }
      } else if (q.includes('آتش') || q.includes('پایان کار') || q.includes('ضخامت') || q.includes('fire') || q.includes('safety') || q.includes('سلامة')) {
        if (language === 'en') {
          reply = '🛡️ **Safety & Fire Regulatory Standards:**\n\nFor official building permits and fire department approval:\n1. Minimum railing height: 110 cm for staircase and 120 cm for voids/balconies.\n2. Maximum baluster gap: 11 cm.\n3. Minimum pipe wall thickness: 1.2 mm for posts (outer diameter 51mm) and 1.0 mm for handrails.\nSTELLEX guarantees all installations comply 100% with ASTM and municipal fire regulations.';
        } else if (language === 'ar') {
          reply = '🛡️ **معايير السلامة والدفاع المدني:**\n\n1. الارتفاع القياسي للدربزين: لا يقل عن 110 سم في السلالم و120 سم في الشرفات.\n2. الفراغ بين القوائم: أقصى حد 11 سم لمنع مرور الأطفال.\n3. سماكة جدار الأنابيب: لا تقل عن 1.2 مم للقوائم الرئيسية و1.0 مم للمقابض.\nجميع أعمال استيلکس مطابقة تماماً للمواصفات القياسية الهندسية.';
        } else {
          reply = '🛡️ **ضوابط رسمی سازمان آتش‌نشانی و نظام مهندسی:**\n\n۱. ارتفاع استاندارد هندریل: حداقل ۱۱۰ سانتی‌متر در راه‌پله و ۱۲۰ سانتی‌متر در ویدها و بالکن‌ها.\n۲. فاصله بین گاردها و لوله‌های محافظ: حداکثر ۱۱ سانتی‌متر (عدم عبور کره به قطر ۱۱ سانت).\n۳. ضخامت گوشت لوله: حداقل ۱.۲ میلی‌متر برای پایه‌های اصلی (قطر ۵۱) و ۱.۰ میلی‌متر برای لوله دستگیره (هندریل).\nکلیه سازه‌های استیلکس منطبق با چک‌لیست رسمی آتش‌نشانی اجرا شده و تاییدیه قطعی پایان‌کار اخذ می‌گردد.';
        }
      } else {
        if (language === 'en') {
          reply = `Thank you for your inquiry regarding "${userQuery}". STELLEX specializes in architectural stainless steel (standard Grade 304 with 10-15 year warranty, Grade 201 for dry economical spaces, and 316 for industrial needs), PVD finishes, and high-precision fabrication. Would you like to schedule a free on-site engineering visit or speak directly with our metallurgical team at ${COMPANY_INFO.phoneIntl}?`;
        } else if (language === 'ar') {
          reply = `شكراً لاستفسارك بخصوص "${userQuery}". تتولى استيلکس هندسة وتنفيذ أعمال الستانلس ستيل الفاخرة (سبيكة ۳۰۴ الأساسية بضمان ١٠-١٥ عاماً، سبيكة ۲۰۱ للمناطق الجافة، و۳۱۶ للاستخدامات الصناعية). يمكنك حجز موعد معاينة مجانية أو التواصل عبر ${COMPANY_INFO.phoneIntl}.`;
        } else {
          reply = `سپاس از پرسش شما درباره «${userQuery}». دپارتمان تخصصی استیلکس با تکیه بر استانداردهای مهندسی، آلیاژ استیل ۳۰۴ نگیر را به عنوان آلیاژ اصلی در اکثر پروژه‌ها با گارانتی ۱۰ الی ۱۵ ساله عرضه می‌دارد (و آلیاژ ۲۰۱ را برای فضاهای بدون رطوبت جهت کاهش هزینه و آلیاژ ۳۱۶ را منحصراً در کاربری‌های صنعتی به کار می‌برد). مایلید برای ثبت بازدید رایگان کارشناسی در محل یا صحبت مستقیم با مهندسان استیلکس هماهنگ شود؟`;
        }
      }

      const aiMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: reply,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages(prev => [...prev, aiMsg]);
      setIsTyping(false);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-slate-950/80 backdrop-blur-md animate-in fade-in">
      <div className={`w-full max-w-lg bg-slate-950 border-${isRtl ? 'r' : 'l'} border-slate-800 h-full flex flex-col justify-between shadow-2xl relative animate-in slide-in-from-${isRtl ? 'left' : 'right'}`}>
        
        {/* Drawer Header */}
        <div className="p-4 sm:p-5 border-b border-slate-800 bg-slate-900/80 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 p-[1.5px]">
              <div className="w-full h-full bg-slate-950 rounded-[9px] flex items-center justify-center">
                <Bot className="w-5 h-5 text-amber-400 animate-pulse" />
              </div>
            </div>
            <div>
              <h3 className="text-sm font-black text-white flex items-center gap-1.5">
                <span>{t.common.metallurgyAdvisor}</span>
                <span className="text-[9px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  ONLINE
                </span>
              </h3>
              <span className="text-[10px] text-slate-400">
                ASTM A240 / DIN 17440 Knowledge Base
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white cursor-pointer transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Chat Messages Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {msg.sender === 'ai' && (
                <div className="w-8 h-8 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center shrink-0 text-amber-400">
                  <Bot className="w-4 h-4" />
                </div>
              )}

              <div
                className={`max-w-[85%] rounded-2xl p-3.5 text-xs sm:text-sm leading-relaxed ${
                  msg.sender === 'user'
                    ? 'bg-amber-500 text-slate-950 font-semibold rounded-br-none rtl:rounded-br-2xl rtl:rounded-bl-none shadow-md'
                    : 'bg-slate-900 text-slate-200 border border-slate-800 rounded-bl-none rtl:rounded-bl-2xl rtl:rounded-br-none shadow-md whitespace-pre-line'
                }`}
              >
                {msg.imageUrl && (
                  <div className="mb-2.5 overflow-hidden rounded-xl border border-black/10">
                    <img src={msg.imageUrl} alt="Project sample" className="w-full max-h-52 object-cover rounded-xl" />
                  </div>
                )}
                <div>{msg.text}</div>
                <div className={`text-[9px] mt-1.5 opacity-60 text-right ${msg.sender === 'user' ? 'text-slate-900' : 'text-slate-400'}`}>
                  {msg.timestamp}
                </div>
              </div>

              {msg.sender === 'user' && (
                <div className="w-8 h-8 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center shrink-0 text-slate-300">
                  <User className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}

          {isTyping && (
            <div className="flex gap-3 justify-start items-center text-slate-400 text-xs">
              <div className="w-8 h-8 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center shrink-0 text-amber-400">
                <Bot className="w-4 h-4" />
              </div>
              <div className="bg-slate-900 px-3.5 py-2.5 rounded-2xl border border-slate-800 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-bounce" />
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-bounce [animation-delay:0.2s]" />
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-bounce [animation-delay:0.4s]" />
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Quick Prompts */}
        <div className="px-4 py-2 bg-slate-900/60 border-t border-slate-800/80">
          <div className="text-[10px] font-bold text-slate-400 mb-1.5 flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-amber-400" />
            <span>{language === 'en' ? 'Suggested Technical Topics:' : language === 'ar' ? 'مواضيع فنية مقترحة:' : 'پرسش‌های متداول مهندسی:'}</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {quickPrompts[language].map((qp, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(qp)}
                className="text-[10px] bg-slate-950 hover:bg-amber-500/15 text-slate-300 hover:text-amber-300 border border-slate-800 hover:border-amber-500/40 rounded-lg px-2.5 py-1 text-left rtl:text-right transition-colors cursor-pointer truncate max-w-[280px]"
              >
                {qp}
              </button>
            ))}
          </div>
        </div>

        {/* Chat Input & CTA */}
        <div className="p-4 border-t border-slate-800 bg-slate-900/90 space-y-2.5">
          {/* Attached Image Preview */}
          {chatImage && (
            <div className="p-2 bg-slate-950 border border-slate-700 rounded-xl flex items-center justify-between gap-2">
              <div className="flex items-center gap-2 overflow-hidden">
                <img src={chatImage} alt="Attach preview" className="w-10 h-10 object-cover rounded-lg border border-amber-500/40 shrink-0" />
                <div className="truncate">
                  <span className="text-[11px] font-bold text-slate-200 block truncate">{chatImageName || 'project-photo.jpg'}</span>
                  <span className="text-[9px] text-amber-400 block">{language === 'en' ? 'Photo ready to send' : language === 'ar' ? 'الصورة جاهزة للإرسال' : 'آماده بررسی و تحلیل مهندسی'}</span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => {
                  setChatImage(null);
                  setChatImageName(null);
                  if (imageInputRef.current) imageInputRef.current.value = '';
                }}
                className="p-1 rounded-lg bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 cursor-pointer"
                title={language === 'en' ? 'Remove' : language === 'ar' ? 'إلغاء' : 'حذف'}
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          )}

          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="flex items-center gap-2"
          >
            {/* Hidden image input */}
            <input
              type="file"
              ref={imageInputRef}
              accept="image/*"
              onChange={(e) => {
                if (e.target.files && e.target.files[0]) {
                  const file = e.target.files[0];
                  if (file.size > 15 * 1024 * 1024) {
                    alert(language === 'en' ? 'Image exceeds 15MB limit' : language === 'ar' ? 'حجم الصورة يتجاوز ١٥ ميجابايت' : 'حجم عکس نباید بیشتر از ۱۵ مگابایت باشد');
                    return;
                  }
                  setChatImageName(file.name);
                  const reader = new FileReader();
                  reader.onload = (ev) => {
                    setChatImage(ev.target?.result as string);
                  };
                  reader.readAsDataURL(file);
                }
              }}
              className="hidden"
            />

            <button
              type="button"
              onClick={() => imageInputRef.current?.click()}
              className="p-2.5 rounded-xl bg-slate-950 hover:bg-slate-800 text-slate-400 hover:text-amber-400 border border-slate-700 cursor-pointer transition-colors shrink-0"
              title={language === 'en' ? 'Attach project photo' : language === 'ar' ? 'إرفاق صورة المشروع' : 'ضمیمه کردن عکس پروژه'}
            >
              <ImageIcon className="w-4 h-4" />
            </button>

            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder={chatImage ? (language === 'en' ? 'Add question or send photo directly...' : language === 'ar' ? 'أضف استفساراً أو أرسل الصورة مباشرة...' : 'توضیحات یا پرسش درباره این عکس (یا ارسال مستقیم)...') : (language === 'en' ? 'Ask about alloys, standards, PVD...' : language === 'ar' ? 'اسأل عن السبائك، الأسعار، المواصفات...' : 'پرسش درباره آلیاژ، قیمت، ضخامت یا استاندارد...')}
              className="flex-1 bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:border-amber-400 focus:outline-none"
            />

            <button
              type="submit"
              disabled={!inputVal.trim() && !chatImage}
              className="lux-btn-gold p-2.5 rounded-xl cursor-pointer disabled:opacity-50 shrink-0"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

          {/* Quick Onsite Visit Shortcut */}
          <div className="flex items-center justify-between text-xs pt-1 text-slate-400">
            <span className="text-[11px]">{language === 'en' ? 'Need on-site 3D survey?' : language === 'ar' ? 'هل تحتاج مسح ليزري بالموقع؟' : 'نیاز به متره و بازدید حضوری دارید؟'}</span>
            <button
              onClick={() => {
                onClose();
                onOpenConsultation();
              }}
              className="text-amber-400 hover:text-amber-300 font-bold flex items-center gap-1 cursor-pointer"
            >
              <span>{t.nav.expertVisit}</span>
              <ArrowIcon className="w-3 h-3" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
