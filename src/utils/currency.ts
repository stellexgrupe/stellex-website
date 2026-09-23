import { Language } from '../types';

/**
 * Currency conversion constants:
 * Base data prices in STELLEX are stored in Iranian Tomans (IRT).
 * Standard reference market rates:
 * - 1 USD = 65,000 Tomans
 * - 1 USD = 3.6725 AED (UAE Dirham fixed peg)
 * - 1 AED = 65,000 / 3.6725 ≈ 17,700 Tomans
 */
export const TOMAN_PER_USD = 65_000;
export const AED_PER_USD = 3.6725;
export const TOMAN_PER_AED = 17_700;

export interface ConvertedPrice {
  amount: number;
  formattedNumber: string;
  currencyCode: 'IRT' | 'AED' | 'USD';
  currencyName: string;
  currencySymbol: string;
  shortLabel: string;
  fullLabel: string;
}

/**
 * Convert an amount from Iranian Tomans to target language's local currency:
 * - Persian ('fa'): Iranian Tomans (تومان)
 * - Arabic ('ar'): UAE Dirhams (درهم إماراتي / AED)
 * - English ('en'): US Dollars ($ / USD)
 */
export function convertFromToman(
  amountInToman: number,
  language: Language
): ConvertedPrice {
  if (language === 'ar') {
    // Converted to UAE Dirhams (درهم إماراتي)
    const aedValue = Math.max(1, Math.round(amountInToman / TOMAN_PER_AED));
    const formatted = aedValue.toLocaleString('en-US');
    return {
      amount: aedValue,
      formattedNumber: formatted,
      currencyCode: 'AED',
      currencyName: 'درهم إماراتي',
      currencySymbol: 'د.إ',
      shortLabel: 'درهم',
      fullLabel: `${formatted} درهم إماراتي (AED)`,
    };
  }

  if (language === 'en') {
    // Converted to US Dollars ($ USD)
    const usdValue = Math.max(1, Math.round(amountInToman / TOMAN_PER_USD));
    const formatted = usdValue.toLocaleString('en-US');
    return {
      amount: usdValue,
      formattedNumber: formatted,
      currencyCode: 'USD',
      currencyName: 'US Dollar',
      currencySymbol: '$',
      shortLabel: 'USD',
      fullLabel: `$${formatted} USD`,
    };
  }

  // Default: Persian ('fa') in Tomans
  const formatted = amountInToman.toLocaleString('fa-IR');
  return {
    amount: amountInToman,
    formattedNumber: formatted,
    currencyCode: 'IRT',
    currencyName: 'تومان',
    currencySymbol: 'ت',
    shortLabel: 'تومان',
    fullLabel: `${formatted} تومان`,
  };
}

/**
 * Quick format helper for display strings
 */
export function formatPriceWithUnit(
  amountInToman: number,
  language: Language,
  style: 'short' | 'full' | 'card' | 'total' = 'full'
): string {
  const converted = convertFromToman(amountInToman, language);

  if (style === 'card') {
    if (language === 'ar') return `${converted.formattedNumber} درهم`;
    if (language === 'en') return `$${converted.formattedNumber} USD`;
    return `${converted.formattedNumber} ت`;
  }

  if (style === 'short') {
    if (language === 'ar') return `${converted.formattedNumber} د.إ`;
    if (language === 'en') return `$${converted.formattedNumber}`;
    return `${converted.formattedNumber} تومان`;
  }

  if (style === 'total') {
    if (language === 'ar') return `${converted.formattedNumber} درهم إماراتي`;
    if (language === 'en') return `$${converted.formattedNumber} USD`;
    return `${converted.formattedNumber} تومان`;
  }

  return converted.fullLabel;
}

/**
 * Returns metadata badge text for active currency
 */
export function getCurrencyNotice(language: Language): {
  badge: string;
  subnote: string;
  code: string;
} {
  if (language === 'ar') {
    return {
      badge: 'العملة المعتمدة: درهم إماراتي (AED)',
      subnote: 'الأسعار محولة بمعادل الصرف المعتمد لدول الخليج العربي',
      code: 'AED',
    };
  }

  if (language === 'en') {
    return {
      badge: 'Currency: US Dollar (USD)',
      subnote: 'Converted at standard international exchange equivalent',
      code: 'USD',
    };
  }

  return {
    badge: 'واحد قیمت: تومان ایران (IRT)',
    subnote: 'قیمت‌گذاری دست اول کارخانه استیلکس بدون واسطه',
    code: 'تومان',
  };
}
