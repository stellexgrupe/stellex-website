import * as React from 'react';
import { AlertTriangle, RefreshCw, Home, Phone } from 'lucide-react';
import { COMPANY_INFO } from '../data/stellexData';

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends React.Component<Props, State> {
  override state: State = {
    hasError: false,
    error: null,
  };

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  override componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('STELLEX Application Error Caught:', error, errorInfo);
  }

  handleReload = () => {
    window.location.reload();
  };

  handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  override render() {
    if (this.state.hasError) {
      let lang = 'fa';
      try {
        lang = localStorage.getItem('stellex_language') || document.documentElement.lang || 'fa';
      } catch {
        lang = 'fa';
      }
      const isEn = lang === 'en';
      const isAr = lang === 'ar';

      return (
        <div className={`min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center p-4 font-sans ${isEn ? 'dir-ltr' : 'dir-rtl'}`}>
          <div className="max-w-lg w-full bg-slate-900 border border-amber-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl text-center space-y-6">
            <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/30 mx-auto flex items-center justify-center text-amber-400">
              <AlertTriangle className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h2 className="text-xl sm:text-2xl font-black text-white">
                {isEn ? 'STELLEX System is Updating' : isAr ? 'نظام ستيليكس قيد التحديث' : 'سامانه استلکس در حال به‌روزرسانی است'}
              </h2>
              <p className="text-sm text-slate-400 leading-relaxed">
                {isEn 
                  ? 'A temporary error occurred while rendering the preview. Please click the button below to reload the page.'
                  : isAr
                  ? 'حدث خطأ مؤقت في تحميل المعاينة. يرجى الضغط على الزر أدناه لإعادة تحميل الصفحة.'
                  : 'یک اختلال موقت در بارگذاری پیش‌نمایش رخ داد. با فشردن دکمه زیر صفحه را مجدداً بارگذاری نمایید.'}
              </p>
            </div>

            {this.state.error && (
              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-left text-xs text-slate-500 font-mono overflow-x-auto max-h-24">
                {this.state.error.message}
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <button
                onClick={this.handleReload}
                className="lux-btn-gold px-6 py-3 rounded-xl flex items-center justify-center gap-2 text-xs font-bold cursor-pointer"
              >
                <RefreshCw className="w-4 h-4" />
                <span>{isEn ? 'Reload Page' : isAr ? 'إعادة تحميل الصفحة' : 'بارگذاری مجدد صفحه'}</span>
              </button>

              <button
                onClick={this.handleReset}
                className="lux-btn-outline px-6 py-3 rounded-xl flex items-center justify-center gap-2 text-xs font-bold cursor-pointer"
              >
                <Home className="w-4 h-4" />
                <span>{isEn ? 'Back to Home' : isAr ? 'العودة للرئيسية' : 'بازگشت به صفحه اصلی'}</span>
              </button>
            </div>

            <div className="pt-4 border-t border-slate-800 text-xs text-slate-500 flex items-center justify-center gap-2">
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>{isEn ? `STELLEX Technical Support: ${COMPANY_INFO.phoneIntl}` : isAr ? `الدعم الفني لستيليكس: ${COMPANY_INFO.phoneIntl}` : `پشتیبانی فنی استلکس: ${COMPANY_INFO.phoneIntl}`}</span>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}




