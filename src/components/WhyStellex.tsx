import React from 'react';
import { TESTIMONIALS, COMPANY_INFO } from '../data/stellexData';
import { useLanguage } from '../context/LanguageContext';
import { 
  ShieldCheck, 
  Flame, 
  Sparkles, 
  CheckCircle2, 
  Award, 
  Clock, 
  Wrench, 
  Star, 
  Quote, 
  Cpu,
  Layers,
  Check
} from 'lucide-react';

interface WhyStellexProps {
  onOpenConsultation: () => void;
}

export const WhyStellex: React.FC<WhyStellexProps> = ({ onOpenConsultation }) => {
  const { language, t } = useLanguage();

  const PILLARS = [
    {
      id: 'p1',
      icon: ShieldCheck,
      title: {
        fa: 'تضمین اصالت آلیاژ با برگه آنالیز MTC',
        ar: 'ضمان أصالة السبائك مع شهادة التحليل MTC',
        en: 'Certified Metallurgical Authenticity (MTC)',
      },
      desc: {
        fa: 'استفاده استاندارد از استنلس استیل خالص ۳۰۴ نگیر در اکثر پروژه‌ها، استیل ۲۰۱ در موارد خاص بدون رطوبت جهت کاهش هزینه، و آلیاژ ۳۱۶ فقط در موارد صنعتی با برگه آنالیز MTC.',
        ar: 'استخدام قياسي لستانلس ستيل ٣٠٤ الأصلي في معظم المشاريع، و٢٠١ للمناطق الجافة لخفض التكاليف، و٣١٦ حصراً للاستخدامات الصناعية مع شهادة MTC.',
        en: 'Standard use of pure 304 non-magnetic steel across most projects, 201 for dry spaces to reduce costs, and 316 reserved strictly for industrial applications with MTC analysis.',
      },
      badge: 'ASTM A240 Standard',
    },
    {
      id: 'p2',
      icon: Sparkles,
      title: {
        fa: 'پوشش PVD تحت خلأ با ماندگاری مادام‌العمر',
        ar: 'طلاء PVD عالي التفريغ بمتانة دائمة',
        en: 'Cathodic PVD Titanium Vacuum Coating',
      },
      desc: {
        fa: 'لایه‌نشانی فیزیکی تیتانیوم در کوره خلأ ۴۰۰ درجه با سختی ۳۰۰۰ ویکرز؛ کاملاً ضدخش، بدون تغییر رنگ در برابر اشعه UV و شوینده‌ها.',
        ar: 'ترسيب فيزيائي للبخار في أفران تفريغ ٤٠٠ درجة بصلادة ٣٠٠٠ فيكرز؛ مقاوم للخدش والأشعة فوق البنفسجية والمنظفات.',
        en: 'Titanium physical vapor deposition in 400°C vacuum with 3000 HV hardness; scratch-resistant with zero UV fading.',
      },
      badge: '3000 HV Hardness',
    },
    {
      id: 'p3',
      icon: Cpu,
      title: {
        fa: 'برش لیزر فایبر ۶ کیلووات و خمکاری CNC',
        ar: 'قص ليزر فايبر ٦ كيلوواط وثني CNC دقيق',
        en: '6kW High-Precision CNC Fiber Laser & Bending',
      },
      desc: {
        fa: 'مجهز به خط کامل برش لیزر فایبر با دقت ۰.۰۱ میلیمتر و جوشکاری میکرو تیگ (TIG) آرگون بدون به جا ماندن اثر سوختگی یا ناهمواری.',
        ar: 'خطوط قص ليزر بدقة ٠.٠١ ملم ولحام ميكرو تيج (TIG) بالأرجون يضمن تشطيباً ناعماً خالياً من أي عيوب.',
        en: 'Equipped with 6kW fiber laser cutters with 0.01mm tolerance and seamless micro-TIG argon welding.',
      },
      badge: '0.01mm Precision',
    },
    {
      id: 'p4',
      icon: Award,
      title: {
        fa: 'ضمانت کتبی ۱۰ الی ۱۵ ساله بدون قید و شرط',
        ar: 'ضمان خطي من ١٠ إلى ١٥ عاماً غير مشروط',
        en: '10 to 15 Years Written Unconditional Warranty',
      },
      desc: {
        fa: 'ارائه ضمانت‌نامه ثبتی و شرکتی برای کلیه سازه‌ها در برابر زنگ‌زدگی، تغییر رنگ PVD و افت کیفیت اتصالات.',
        ar: 'تقديم وثيقة ضمان رسمية لجميع الهياكل ضد الصدأ، تغير لون PVD وأي ارتخاء في الوصلات.',
        en: 'Official corporate written warranty against corrosion, PVD discoloration, and structural defects.',
      },
      badge: '15-Year Warranty',
    },
    {
      id: 'p5',
      icon: Clock,
      title: {
        fa: 'نقشه‌برداری لیزری ۳D و تحویل در زمان‌بندی دقیق',
        ar: 'مسح ليزري ثلاثي الأبعاد وتسليم بالميعاد',
        en: '3D Laser Survey & Guaranteed Timeline',
      },
      desc: {
        fa: 'برداشت دقیق ابعاد با مترهای لیزری پیشرفته سه‌بعدی و پایبندی صددرصدی به زمان‌بندی قرارداد بدون حتی یک روز تاخیر.',
        ar: 'أخذ القياسات بأحدث أجهزة الليزر ثلاثية الأبعاد والالتزام التام بجدول التسليم التعاقدي.',
        en: 'Precise on-site 3D laser surveying and strict adherence to contractual milestone delivery dates.',
      },
      badge: 'Zero Delay Policy',
    },
    {
      id: 'p6',
      icon: Wrench,
      title: {
        fa: 'تیم نصب مجرب با تجهیزات هیلتی و پولیش نهایی',
        ar: 'فريق تركيب محترف بمعدات هيلتي وتشطيب فاخر',
        en: 'Certified Installation Riggers & 8K Polishing',
      },
      desc: {
        fa: 'اجرای حرفه‌ای توسط تکنسین‌های ارشد استیل، استفاده از رول‌بولت‌ها و انکرهای استیل هیلتی و پولیش آینه‌ای نهایی در محل.',
        ar: 'تركيب بأيدي فنيين محترفين باستخدام مثبتات ستانلس هيلتي مع تلميع ميكانيكي نهائي في الموقع.',
        en: 'Installed by certified stainless master riggers using stainless Hilti anchors and on-site mirror repolishing.',
      },
      badge: 'Certified Riggers',
    },
  ];

  return (
    <section id="why-us" className="py-16 sm:py-24 relative overflow-hidden">
      
      {/* Background radial highlight */}
      <div className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-amber-500/5 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>{t.whyUs.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight mb-4">
            {t.whyUs.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-400 font-normal leading-relaxed">
            {t.whyUs.desc}
          </p>
        </div>

        {/* 6 Value Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 sm:mb-20">
          {PILLARS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="lux-card rounded-3xl p-6 sm:p-7 border border-slate-800 hover:border-amber-500/40 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-amber-400" />
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-500">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-black text-white group-hover:text-amber-400 transition-colors mb-2">
                    {item.title[language]}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {item.desc[language]}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-medium text-amber-400">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{language === 'en' ? 'Verified Quality' : language === 'ar' ? 'جودة معتمدة' : 'کیفیت تضمین شده'}</span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-500 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                    {item.badge}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Testimonials & Client Reviews */}
        <div className="mt-12">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-xl sm:text-2xl font-black text-white mb-2">
              {t.whyUs.testimonialsTitle}
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              {t.whyUs.testimonialsDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((review) => (
              <div
                key={review.id}
                className="lux-card rounded-3xl p-6 border border-slate-800 flex flex-col justify-between relative shadow-xl"
              >
                <Quote className="w-8 h-8 text-amber-500/20 absolute top-4 left-4 rtl:left-auto rtl:right-4 pointer-events-none" />

                <div>
                  {/* Stars */}
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 italic">
                    "{review.text[language]}"
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                  <div>
                    <h4 className="text-xs font-black text-white">
                      {review.author[language]}
                    </h4>
                    <span className="text-[10px] text-slate-400 block mt-0.5">
                      {review.role[language]}
                    </span>
                  </div>

                  <div className="text-right rtl:text-left">
                    <span className="px-2 py-0.5 rounded text-[9px] font-bold bg-amber-500/10 text-amber-400 border border-amber-500/30 font-mono">
                      {review.projectType[language]}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Banner with Free Inspection CTA */}
        <div className="mt-14 lux-card rounded-3xl p-8 sm:p-10 border border-amber-500/40 relative overflow-hidden bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8 space-y-2">
              <span className="text-xs font-bold text-amber-400 tracking-wider uppercase font-mono">
                {language === 'en' ? 'FREE 3D LASER MEASUREMENT & CONSULTATION' : language === 'ar' ? 'معاينة ميدانية ومسح ليزري مجاني' : 'اعزام رایگان کارشناس ارشد و متره‌برداری لیزری'}
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                {language === 'en' ? 'Book a Free Site Visit by STELLEX Engineers' : language === 'ar' ? 'احجز زيارة مجانية لمهندسي ستيليكس في موقع مشروعك' : 'درخواست بازدید رایگان و مشاوره تخصصی در محل پروژه'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
                {language === 'en' ? 'Our senior metallurgical engineers will visit your site with 3D laser scanners and alloy samples to evaluate architectural specifications.' : language === 'ar' ? 'يحضر مهندسونا الاستشاريون إلى موقعكم مع أجهزة المسح وعينات السبائك لتقديم دراسة هندسية دقيقة.' : 'کارشناسان متالورژی استیلکس با تجهیزات اندازه‌گیری دقیق و کاتالوگ سمپل‌های فیزیکی در محل پروژه شما حاضر می‌شوند.'}
              </p>
            </div>

            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <button
                onClick={onOpenConsultation}
                className="lux-btn-gold px-6 py-3.5 rounded-xl text-xs sm:text-sm font-black flex items-center gap-2 cursor-pointer shadow-xl"
              >
                <Sparkles className="w-4 h-4" />
                <span>{t.nav.expertVisit}</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
