import React from 'react';
import { ReadyPostModel } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { EngineeringCatalogModal } from './EngineeringCatalogModal';

interface ReadyPostDetailModalProps {
  post: ReadyPostModel | null;
  onClose: () => void;
  onOpenCalculatorPlus: (post: ReadyPostModel) => void;
  onOpenConsultation: (postName: string) => void;
}

export const ReadyPostDetailModal: React.FC<ReadyPostDetailModalProps> = ({
  post,
  onClose,
  onOpenCalculatorPlus,
  onOpenConsultation,
}) => {
  const { language } = useLanguage();

  if (!post) return null;

  return (
    <EngineeringCatalogModal
      item={{
        id: post.id,
        name: post.name,
        modelCode: post.modelCode,
        categoryTitle: {
          fa: 'پایه‌های پیش‌ساخته نرده و هندریل استیلکس',
          ar: 'قوائم جاهزة للدرابزين ستانلس ستيل',
          en: 'STELLEX Pre-Engineered Railing Posts & Spigots',
        },
        badge: post.badge,
        image: post.image,
        detailImages: [...post.detailImages, ...(post.projectImages || [])],
        description: post.description,
        alloyGrade: post.alloyGrade,
        warrantyYears: post.warrantyYears || 10,
        priceToman: post.postCategory === 'artistic_handrail' || post.postCategory === 'handrail'
          ? post.linearMeterPrice
          : post.unitPrice,
        priceUnitLabel: post.postCategory === 'artistic_handrail' || post.postCategory === 'handrail' ? {
          fa: 'قیمت هر متر طول (با اتصالات و نصب)',
          ar: 'السعر لكل متر طولي مع الملحقات',
          en: 'Price per linear meter (Installed)',
        } : post.postCategory === 'starter' ? {
          fa: 'قیمت هر عدد استارتر لوکس',
          ar: 'السعر لكل عامود بداية',
          en: 'Price per starter unit',
        } : {
          fa: 'قیمت هر عدد پایه پیش‌ساخته',
          ar: 'السعر لكل قطعة قائمة جاهزة',
          en: 'Price per prefab post unit',
        },
        finish: post.finish,
        weight: post.weight,
        dimensions: {
          height: post.height,
          profileSize: post.profileDimensions[language],
          thickness: post.thickness,
        },
        structuralSpecs: {
          lateralLoadCapacity: post.loadCapacity,
          safetyFactor: '2.5x (استاندارد ASTM E985)',
          fireRating: 'Class A1 نسوز و ضدحریق',
          windOrImpactResistance: post.standardCert,
        },
        keyFeatures: [
          {
            fa: `نحوه مهار و اتصال کف: ${post.baseMounting.fa}`,
            ar: `نظام تثبيت القاعدة: ${post.baseMounting.ar}`,
            en: `Base mounting system: ${post.baseMounting.en}`,
          },
          {
            fa: `سازگاری هندریل و دستگیره: ${post.handrailCompatibility.fa}`,
            ar: `توافقية مقبض الدرابزين: ${post.handrailCompatibility.ar}`,
            en: `Handrail compatibility: ${post.handrailCompatibility.en}`,
          },
          {
            fa: `نوع پرکننده و فیلر میانی: ${post.infillType.fa}`,
            ar: `نوع الحشوة الوسطية: ${post.infillType.ar}`,
            en: `Infill system: ${post.infillType.en}`,
          },
          ...(post.idealFor?.map((item) => ({
            fa: `کاربرد توصیه شده: ${item.fa}`,
            ar: `التطبيق الموصى به: ${item.ar}`,
            en: `Recommended application: ${item.en}`,
          })) || []),
        ],
        includedHardware: post.includedHardware,
        architecturalTip: {
          fa: 'توصیه فنی استیلکس: برای پروژه‌های پرتردد یا مناطق با رطوبت و نمک بالا، استفاده از آلیاژ استیل 316 و انکربولت‌های ضدزنگ توصیه اکید می‌شود.',
          ar: 'نصيحة ستيلكس الهندسية: للمناطق الساحلية والمباني العامة ذات الكثافة العالية يُفضل استخدام ستانلس 316.',
          en: 'STELLEX Recommendation: For high-traffic public spaces and coastal environments, AISI 316 alloy is strictly recommended.',
        },
      }}
      onClose={onClose}
      onOpenConsultation={(name) => onOpenConsultation(name)}
      onOpenCalculator={() => onOpenCalculatorPlus(post)}
    />
  );
};
