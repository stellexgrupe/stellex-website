export type Language = 'fa' | 'ar' | 'en';

export type CategoryId = 
  | 'railings_doors'
  | 'prefab_posts'
  | 'commercial_decor'
  | 'landscaping'
  | 'medical_lab'
  | 'industrial_parts'
  | 'decorative_radiators';

export interface LocalizedString {
  fa: string;
  ar: string;
  en: string;
}

export interface ServiceCategory {
  id: CategoryId;
  title: LocalizedString;
  subtitle: LocalizedString;
  shortDesc: LocalizedString;
  description: LocalizedString;
  iconName: string;
  badge: LocalizedString;
  coverImage: string;
  galleryImages: string[];
  subFeatures: {
    title: LocalizedString;
    desc: LocalizedString;
    specs: LocalizedString;
  }[];
  appliedAlloys: LocalizedString[];
  recommendedFinishes: LocalizedString[];
  guaranteeYears: number;
}

export interface ProjectItem {
  id: string;
  title: LocalizedString;
  category: CategoryId;
  client: LocalizedString;
  location: LocalizedString;
  year: string;
  mainImage: string;
  additionalImages?: string[];
  description: LocalizedString;
  alloyUsed: LocalizedString;
  finish: LocalizedString;
  duration: LocalizedString;
  keyFeatures: LocalizedString[];
  beforeImage?: string;
  afterImage?: string;
}

export interface SteelAlloy {
  id: string;
  name: string;
  code: string;
  persianName: LocalizedString;
  grade: LocalizedString;
  chromium: string;
  nickel: string;
  molybdenum?: string;
  carbon: string;
  corrosionResistance: number; // 1-100
  heatResistance: number; // 1-100
  hardness: string;
  magnetResponse: LocalizedString;
  bestApplications: LocalizedString[];
  priceTier: LocalizedString;
  description: LocalizedString;
}

export interface FinishType {
  id: string;
  name: LocalizedString;
  englishName: string;
  colorHex: string;
  gradientBg: string;
  specularClass: string;
  pvdCoated: boolean;
  scratchResistance: LocalizedString;
  reflectionType: LocalizedString;
  description: LocalizedString;
  popularFor: LocalizedString;
}

export interface Testimonial {
  id: string;
  author: LocalizedString;
  role: LocalizedString;
  company: LocalizedString;
  location: LocalizedString;
  projectType: LocalizedString;
  rating: number;
  text: LocalizedString;
  avatar: string;
}

export interface FAQItem {
  id: string;
  question: LocalizedString;
  answer: LocalizedString;
  category: LocalizedString;
}

export interface ConsultationRequest {
  fullName: string;
  phoneNumber: string;
  city: string;
  serviceCategory: CategoryId;
  estimatedDimensions?: string;
  projectLocationType: string;
  preferredDate?: string;
  description: string;
}

export interface ReadyPostModel {
  id: string;
  name: LocalizedString;
  modelCode: string;
  badge: LocalizedString;
  image: string;
  detailImages: string[];
  projectImages: string[];
  projectVideoUrl?: string;
  // Technical & Engineering Specs
  height: string;
  profileDimensions: LocalizedString;
  thickness: string;
  alloyGrade: LocalizedString;
  finish: LocalizedString;
  baseMounting: LocalizedString;
  handrailCompatibility: LocalizedString;
  infillType: LocalizedString;
  weight: string;
  loadCapacity: string;
  warrantyYears: number;
  standardCert: string;
  includedHardware: LocalizedString[];
  // Pricing
  unitPrice: number; // قیمت هر عدد پایه به تومان
  linearMeterPrice: number; // قیمت متر طول اجرایی کامل به همراه تمام متعلقات و نصب
  // Extra features
  description: LocalizedString;
  idealFor: LocalizedString[];
  postCategory?: 'starter' | 'line' | 'spigot' | 'prefab';
  workClass?: LocalizedString;
}
