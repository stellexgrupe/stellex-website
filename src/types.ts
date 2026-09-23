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
  postCategory?: 'prefab' | 'starter' | 'artistic_handrail' | 'line' | 'spigot' | 'handrail';
  workClass?: LocalizedString;
}

export interface RadiatorModel {
  id: string;
  name: LocalizedString;
  modelCode: string;
  designerSeries: LocalizedString;
  pinterestInspiration: string;
  badge: LocalizedString;
  category: 'all' | 'living_art' | 'bathroom_towel' | 'architectural_column' | 'geometric_origami' | 'curved_sculptural';
  image: string;
  fallbackImage: string;
  detailImages: string[];
  interiorDesignTip: LocalizedString;
  roomSuitability: LocalizedString[];
  aestheticStyle: LocalizedString;
  dimensions: {
    height: string;
    width: string;
    depth: string;
    pipeCenterDistance: string;
  };
  thermalOutput: {
    kcalPerHour: string;
    btu: string;
    wattage: string;
    coverageArea: string;
  };
  alloyGrade: LocalizedString;
  availableFinishes: LocalizedString[];
  heatingMode: LocalizedString;
  testPressure: string;
  warrantyYears: number;
  priceToman: number;
  description: LocalizedString;
  keyFeatures: LocalizedString[];
}

export interface LandscapingProduct {
  id: string;
  name: LocalizedString;
  modelCode: string;
  designerSeries: LocalizedString;
  pinterestInspiration: string;
  badge: LocalizedString;
  category: 'all' | 'water_wall' | 'pool_cascade' | 'entrance_fountain' | 'garden_bridge';
  image: string;
  fallbackImage: string;
  detailImages: string[];
  landscapeDesignTip: LocalizedString;
  outdoorSuitability: LocalizedString[];
  aestheticStyle: LocalizedString;
  dimensions: {
    height: string;
    width: string;
    depth: string;
    weirLipLength: string;
  };
  hydraulicSpecs: {
    flowRate: string;
    pumpPower: string;
    lighting: string;
    coverageArea: string;
  };
  alloyGrade: LocalizedString;
  availableFinishes: LocalizedString[];
  weatherResistance: LocalizedString;
  warrantyYears: number;
  priceToman: number;
  description: LocalizedString;
  keyFeatures: LocalizedString[];
  includedHardware: LocalizedString[];
}

export interface RailingDoorProduct {
  id: string;
  name: LocalizedString;
  modelCode: string;
  designerSeries: LocalizedString;
  badge: LocalizedString;
  category: 'all' | 'luxury_stairs' | 'glass_spigot' | 'entrance_doors' | 'security_grilles';
  client: LocalizedString;
  location: LocalizedString;
  image: string;
  fallbackImage: string;
  detailImages: string[];
  architecturalTip: LocalizedString;
  buildingSuitability: LocalizedString[];
  aestheticStyle: LocalizedString;
  dimensions: {
    height: string;
    profileSize: string;
    thickness: string;
    spanOrWidth: string;
  };
  structuralSpecs: {
    lateralLoadCapacity: string;
    safetyFactor: string;
    fireRating: string;
    windOrImpactResistance: string;
  };
  alloyGrade: LocalizedString;
  availableFinishes: LocalizedString[];
  installationMethod: LocalizedString;
  warrantyYears: number;
  priceToman: number;
  priceUnitLabel: LocalizedString;
  description: LocalizedString;
  keyFeatures: LocalizedString[];
  includedHardware: LocalizedString[];
}

