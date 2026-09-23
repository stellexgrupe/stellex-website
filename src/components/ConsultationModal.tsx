import React, { useState, useEffect } from 'react';
import { SERVICE_CATEGORIES, COMPANY_INFO } from '../data/stellexData';
import { useLanguage } from '../context/LanguageContext';
import { 
  X, 
  Sparkles, 
  Send, 
  CheckCircle2, 
  Phone, 
  User, 
  MapPin, 
  Calendar, 
  FileText, 
  ShieldCheck,
  Building2,
  Upload,
  Image as ImageIcon,
  Trash2,
  Paperclip,
  AlertCircle
} from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialData?: {
    serviceCategory?: string;
    estimatedDimensions?: string;
    description?: string;
  };
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  initialData,
}) => {
  const { language, t, isRtl } = useLanguage();

  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [city, setCity] = useState('');
  const [category, setCategory] = useState(initialData?.serviceCategory || 'railings_doors');
  const [projectType, setProjectType] = useState<'commercial' | 'residential' | 'villa' | 'industrial'>('residential');
  const [description, setDescription] = useState(initialData?.description || '');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // File / Photo upload states
  const [attachedFile, setAttachedFile] = useState<File | null>(null);
  const [filePreviewUrl, setFilePreviewUrl] = useState<string | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const handleProcessFile = (file: File) => {
    setUploadError(null);
    // Limit to 20MB
    if (file.size > 20 * 1024 * 1024) {
      setUploadError(
        language === 'en'
          ? 'File size exceeds the 20MB limit. Please choose a smaller photo.'
          : language === 'ar'
          ? 'حجم الملف يتجاوز الحد المسموح (٢٠ ميجابايت). يرجى اختيار ملف أصغر.'
          : 'حجم فایل بیشتر از سقف مجاز (۲۰ مگابایت) است. لطفاً حجم آن را کاهش دهید.'
      );
      return;
    }

    setAttachedFile(file);
    if (file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setFilePreviewUrl(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setFilePreviewUrl(null);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleProcessFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileRemove = () => {
    setAttachedFile(null);
    setFilePreviewUrl(null);
    setUploadError(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  useEffect(() => {
    if (initialData?.serviceCategory) setCategory(initialData.serviceCategory);
    if (initialData?.description) setDescription(initialData.description);
  }, [initialData]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);

    // Also offer WhatsApp submission
    const catTitle = SERVICE_CATEGORIES.find(c => c.id === category)?.title[language] || '';
    const fileInfo = attachedFile ? `\n📎 ${language === 'en' ? 'Attached Photo/Plan' : language === 'ar' ? 'الملف المرفق' : 'عکس/نقشه پیوست'}: ${attachedFile.name} (${(attachedFile.size / 1024).toFixed(0)} KB)` : '';
    const msgText = language === 'en'
      ? `STELLEX On-site Engineering Consultation Request:\n` +
        `👤 Name: ${fullName}\n` +
        `📞 Phone: ${phoneNumber}\n` +
        `📍 City / Address: ${city}\n` +
        `🏗️ Category: ${catTitle}\n` +
        `🏢 Project Type: ${projectType}\n` +
        `📝 Notes: ${description}${fileInfo}`
      : language === 'ar'
      ? `طلب معاينة واستشارة هندسية في الموقع - ستيليكس:\n` +
        `👤 الاسم: ${fullName}\n` +
        `📞 الهاتف: ${phoneNumber}\n` +
        `📍 المدينة / العنوان: ${city}\n` +
        `🏗️ الفئة: ${catTitle}\n` +
        `🏢 نوع المشروع: ${projectType}\n` +
        `📝 ملاحظات: ${description}${fileInfo}`
      : `درخواست کارشناسی و بازدید در محل استیلکس:\n` +
        `👤 نام: ${fullName}\n` +
        `📞 تلفن: ${phoneNumber}\n` +
        `📍 شهر / آدرس: ${city}\n` +
        `🏗️ دسته: ${catTitle}\n` +
        `🏢 نوع پروژه: ${projectType}\n` +
        `📝 توضیحات: ${description}${fileInfo}`;
    const msg = encodeURIComponent(msgText);

    // Optional direct redirect if desired
    setTimeout(() => {
      // Keep open state showing confirmation
    }, 500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-xl animate-in fade-in">
      <div className="lux-card w-full max-w-2xl rounded-3xl p-6 sm:p-8 border border-slate-700 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 rtl:right-auto rtl:left-5 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white cursor-pointer transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="text-center py-10 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto animate-bounce">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-black text-white">
              {language === 'en' ? 'Consultation Request Registered!' : language === 'ar' ? 'تم تسجيل طلب المعاينة بنجاح!' : 'درخواست کارشناسی شما ثبت شد!'}
            </h3>
            <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
              {language === 'en'
                ? 'Our chief metallurgical engineer will contact you within 2 business hours to coordinate the on-site 3D laser measurement.'
                : language === 'ar'
                ? 'سيتواصل معك كبير مهندسي المعادن لدينا خلال ساعتي عمل لتنسيق موعد المعاينة والمسح الليزري ثلاثي الأبعاد.'
                : 'مهندسان ارشد متالورژی استیلکس حداکثر تا ۲ ساعت کاری با شما تماس گرفته و زمان اعزام کارشناس فنی همراه با نمونه آلیاژها را هماهنگ خواهند کرد.'}
            </p>

            {attachedFile && (
              <div className="p-3 bg-slate-900 border border-slate-700/80 rounded-2xl flex items-center justify-center gap-3 max-w-sm mx-auto">
                {filePreviewUrl ? (
                  <img src={filePreviewUrl} alt="Attached Preview" className="w-10 h-10 object-cover rounded-lg border border-amber-500/40" />
                ) : (
                  <Paperclip className="w-5 h-5 text-amber-400 shrink-0" />
                )}
                <div className="text-right rtl:text-right ltr:text-left truncate">
                  <span className="text-xs font-bold text-white block truncate">{attachedFile.name}</span>
                  <span className="text-[10px] text-slate-400 block font-mono">{(attachedFile.size / 1024).toFixed(0)} KB</span>
                </div>
              </div>
            )}

            <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 cursor-pointer shadow-lg"
              >
                <Send className="w-4 h-4" />
                <span>{language === 'en' ? 'Send Specs via WhatsApp' : language === 'ar' ? 'إرسال المخططات عبر واتساب' : 'ارسال نقشه و فایل در واتس‌اپ'}</span>
              </a>

              <button
                onClick={() => {
                  setIsSubmitted(false);
                  onClose();
                }}
                className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs cursor-pointer"
              >
                {t.common.close}
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 text-amber-400 text-xs font-bold mb-1">
              <Sparkles className="w-4 h-4" />
              <span>{t.consultation.badge}</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-white mb-2">
              {t.consultation.title}
            </h3>

            <p className="text-xs sm:text-sm text-slate-400 mb-4 leading-relaxed">
              {t.consultation.desc}
            </p>

            {/* Urgent Direct Engineering Consultation Hotline */}
            <div className="mb-5 p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-xs text-slate-200 font-medium">
                <Phone className="w-4 h-4 text-amber-400 animate-pulse" />
                <span>
                  {language === 'fa' 
                    ? 'مشاوره فوری مهندسی و تماس مستقیم:' 
                    : language === 'ar' 
                    ? 'استشارة هندسية فورية واتصال مباشر:' 
                    : 'Urgent Engineering Consultation & Direct Call:'}
                </span>
              </div>
              <a 
                href="tel:+989125529304" 
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-mono font-black text-xs transition-colors shadow-sm cursor-pointer"
                dir="ltr"
              >
                +989125529304
              </a>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1.5 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-amber-400" />
                    <span>{t.consultation.fullName} *</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder={language === 'en' ? 'e.g. Eng. David Miller' : language === 'ar' ? 'مثال: المهندس أحمد الراشد' : 'مثال: مهندس رادمهر'}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:border-amber-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1.5 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-amber-400" />
                    <span>{t.consultation.phone} *</span>
                  </label>
                  <input
                    type="tel"
                    required
                    dir="ltr"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder={language === 'en' ? '+1 (555) 000-0000' : language === 'ar' ? '+971 50 000 0000' : '0912...'}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:border-amber-400 focus:outline-none text-left"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1.5 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-amber-400" />
                    <span>{t.consultation.city} *</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder={language === 'en' ? 'City / Area' : language === 'ar' ? 'المدينة / المنطقة' : 'تهران، زعفرانیه'}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:border-amber-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1.5 flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-amber-400" />
                    <span>{t.consultation.projectType}</span>
                  </label>
                  <select
                    value={projectType}
                    onChange={(e: any) => setProjectType(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white focus:border-amber-400 focus:outline-none cursor-pointer"
                  >
                    <option value="residential">{language === 'en' ? 'Luxury Residential' : language === 'ar' ? 'سكني فاخر' : 'ساختمان مسکونی لوکس'}</option>
                    <option value="villa">{language === 'en' ? 'Modern Private Villa' : language === 'ar' ? 'فيلا خاصة' : 'ویلا و باغ مدرن'}</option>
                    <option value="commercial">{language === 'en' ? 'Commercial / Jewelry / Cafe' : language === 'ar' ? 'تجاري / مجوهرات / مقهى' : 'طلافروشی، صرافی، کافه، رستوران'}</option>
                    <option value="industrial">{language === 'en' ? 'Hospital / Cleanroom / Factory' : language === 'ar' ? 'مستشفى / مصنع / مختبر' : 'بیمارستان، آزمایشگاه، صنعتی'}</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1.5">
                  {t.consultation.selectCategory}
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white focus:border-amber-400 focus:outline-none cursor-pointer"
                >
                  {SERVICE_CATEGORIES.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.title[language]} ({cat.badge[language]})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1.5 flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-amber-400" />
                  <span>{t.consultation.notes}</span>
                </label>
                <textarea
                  rows={3}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder={t.consultation.notesPlaceholder}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:border-amber-400 focus:outline-none"
                />
              </div>

              {/* File / Blueprint / Photo Upload Field */}
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1.5 flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <ImageIcon className="w-3.5 h-3.5 text-amber-400" />
                    <span>{t.common.uploadBlueprint}</span>
                  </span>
                  <span className="text-[10px] text-slate-400 font-normal">
                    {language === 'en' ? 'Max 20MB (JPG, PNG, WEBP, PDF)' : language === 'ar' ? 'أقصى حد ٢٠ ميجابايت (JPG, PNG, PDF)' : 'حداکثر ۲۰ مگابایت (JPG, PNG, PDF)'}
                  </span>
                </label>

                {/* Hidden File Input */}
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/jpeg,image/png,image/webp,image/gif,application/pdf"
                  onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                      handleProcessFile(e.target.files[0]);
                    }
                  }}
                  className="hidden"
                />

                {!attachedFile ? (
                  <div
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    onClick={() => fileInputRef.current?.click()}
                    className={`border-2 border-dashed rounded-2xl p-4 sm:p-5 text-center cursor-pointer transition-all duration-200 ${
                      dragActive
                        ? 'border-amber-400 bg-amber-500/10 scale-[1.01]'
                        : 'border-slate-700 hover:border-amber-500/50 bg-slate-900/60 hover:bg-slate-900'
                    }`}
                  >
                    <div className="flex flex-col items-center justify-center gap-2">
                      <div className="w-10 h-10 rounded-full bg-slate-800 text-amber-400 flex items-center justify-center">
                        <Upload className="w-5 h-5" />
                      </div>
                      <div className="text-xs text-slate-200 font-bold">
                        {language === 'en'
                          ? 'Click to browse or drag & drop project photo'
                          : language === 'ar'
                          ? 'انقر للاختيار أو اسحب وأفلت صورة المشروع'
                          : 'برای انتخاب عکس یا نقشه کلیک کنید یا فایل را اینجا رها کنید'}
                      </div>
                      <p className="text-[11px] text-slate-400">
                        {language === 'en'
                          ? 'Photos of stairs, balcony, blueprints, CAD plans or sketches'
                          : language === 'ar'
                          ? 'صور السلالم، الشرفات، المخططات المعمارية أو التصاميم'
                          : 'عکس راه‌پله، وید، بالکن، نقشه ساختمانی یا طرح مد نظرتان'}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="p-3 bg-slate-900 border border-slate-700 rounded-2xl flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3 overflow-hidden">
                      {filePreviewUrl ? (
                        <img
                          src={filePreviewUrl}
                          alt="Preview"
                          className="w-14 h-14 object-cover rounded-xl border border-amber-500/40 shrink-0"
                        />
                      ) : (
                        <div className="w-12 h-12 rounded-xl bg-slate-800 text-amber-400 flex items-center justify-center shrink-0">
                          <Paperclip className="w-6 h-6" />
                        </div>
                      )}
                      <div className="truncate">
                        <div className="text-xs font-bold text-white truncate flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span className="truncate">{attachedFile.name}</span>
                        </div>
                        <div className="text-[10px] text-slate-400 font-mono mt-0.5">
                          {(attachedFile.size / 1024).toFixed(0)} KB • {attachedFile.type || 'Document'}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        type="button"
                        onClick={() => fileInputRef.current?.click()}
                        className="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-[11px] cursor-pointer"
                      >
                        {language === 'en' ? 'Change' : language === 'ar' ? 'تغيير' : 'تغییر'}
                      </button>
                      <button
                        type="button"
                        onClick={handleFileRemove}
                        className="p-1.5 rounded-lg bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 cursor-pointer"
                        title={language === 'en' ? 'Remove file' : language === 'ar' ? 'حذف الملف' : 'حذف فایل'}
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {uploadError && (
                  <div className="mt-2 p-2.5 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center gap-2 text-rose-400 text-xs">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{uploadError}</span>
                  </div>
                )}
              </div>

              {/* Free Visit Guarantee Badge */}
              <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center gap-2.5 text-xs text-amber-300">
                <ShieldCheck className="w-5 h-5 shrink-0" />
                <span>{t.consultation.freeVisitDisclaimer}</span>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="lux-btn-gold w-full py-3.5 rounded-xl text-xs font-black flex items-center justify-center gap-2 cursor-pointer shadow-xl"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>{t.consultation.submitBtn}</span>
                </button>
              </div>

            </form>
          </div>
        )}

      </div>
    </div>
  );
};
