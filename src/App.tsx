import React, { useState } from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { ProjectShowcaseSlider } from './components/ProjectShowcaseSlider';
import { WhyStellex } from './components/WhyStellex';
import { MaterialVisualizer } from './components/MaterialVisualizer';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { AiConsultantDrawer } from './components/AiConsultantDrawer';
import { ImageViewerModal } from './components/ImageViewerModal';
import { QuickContactBar } from './components/QuickContactBar';
import { ThemeFloatingSwitcher } from './components/ThemeFloatingSwitcher';
import { ReadyPostDetailModal } from './components/ReadyPostDetailModal';
import { CalculatorPlus } from './components/CalculatorPlus';
import { BackToTopButton } from './components/BackToTopButton';
import { MobileLandscapeEnforcer } from './components/MobileLandscapeEnforcer';
import { ProjectItem, CategoryId, ReadyPostModel } from './types';

function MainApp() {
  const { language } = useLanguage();
  const [consultationOpen, setConsultationOpen] = useState<boolean>(false);
  const [consultationData, setConsultationData] = useState<{
    serviceCategory?: string;
    estimatedDimensions?: string;
    description?: string;
  } | undefined>(undefined);

  const [selectedServiceCat, setSelectedServiceCat] = useState<string | undefined>(undefined);
  
  const [aiAdvisorOpen, setAiAdvisorOpen] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [selectedReadyPost, setSelectedReadyPost] = useState<ReadyPostModel | null>(null);
  const [calculatorPlusPost, setCalculatorPlusPost] = useState<ReadyPostModel | undefined>(undefined);
  
  const [galleryModal, setGalleryModal] = useState<{
    isOpen: boolean;
    images: string[];
    title: string;
  }>({
    isOpen: false,
    images: [],
    title: '',
  });

  const handleOpenConsultation = (categoryId?: string, customDesc?: string) => {
    setConsultationData({
      serviceCategory: categoryId || undefined,
      description: customDesc || undefined,
    });
    setConsultationOpen(true);
  };

  const handleOpenConsultationWithData = (data: any) => {
    setConsultationData(data);
    setConsultationOpen(true);
  };

  const handleOpenCalculatorPlus = (post?: ReadyPostModel) => {
    if (post) {
      setCalculatorPlusPost(post);
    }
    const el = document.getElementById('calculator-plus');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectCategory = (categoryId: string) => {
    setSelectedServiceCat(categoryId);
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenGallery = (images: string[], title: string) => {
    setGalleryModal({
      isOpen: true,
      images,
      title,
    });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-950 pb-16 sm:pb-0">
      
      {/* Luxina Sticky Header & Top Bar */}
      <Header
        onOpenConsultation={() => handleOpenConsultation()}
        onOpenCalculatorPlus={() => handleOpenCalculatorPlus()}
        onOpenAiAdvisor={() => setAiAdvisorOpen(true)}
        onSelectCategory={handleSelectCategory}
      />

      {/* Main Sections */}
      <main>
        {/* Luxina Grand Hero */}
        <Hero
          onOpenConsultation={() => handleOpenConsultation()}
          onOpenCalculatorPlus={() => handleOpenCalculatorPlus()}
          onSelectCategory={handleSelectCategory}
        />

        {/* 7 Specialized Engineering Departments */}
        <ServicesSection
          selectedCategoryProp={selectedServiceCat}
          onOpenConsultation={(catId) => handleOpenConsultation(catId)}
          onOpenCalculatorPlus={(post) => handleOpenCalculatorPlus(post)}
          onOpenGallery={handleOpenGallery}
          onSelectPostDetail={(post) => setSelectedReadyPost(post)}
        />

        {/* 16:9 Cinematic Project Showcase Slideshow */}
        <ProjectShowcaseSlider
          onSelectProject={(project) => setSelectedProject(project)}
          onOpenConsultationWithProject={(title, cat) => handleOpenConsultation(cat, language === 'en' ? `Order similar design for project: ${title}` : language === 'ar' ? `طلب تنفيذ تصميم مماثل لمشروع: ${title}` : `سفارش طرح مشابه پروژه: ${title}`)}
          onOpenGallery={handleOpenGallery}
        />

        {/* Smart Calculator Plus for Ready Posts & Steps/Flights Formula */}
        <CalculatorPlus
          initialPostModel={calculatorPlusPost}
          onOpenConsultationWithInvoice={(inv) => handleOpenConsultationWithData(inv)}
          onSelectPostDetails={(post) => setSelectedReadyPost(post)}
        />

        {/* Why Stellex & Client Testimonials */}
        <WhyStellex
          onOpenConsultation={() => handleOpenConsultation()}
        />

        {/* Metallurgical Alloys & PVD Studio (Live Reflection Test & Titanium Colors) */}
        <MaterialVisualizer />

        {/* FAQ & Knowledge Base */}
        <FaqSection
          onOpenAiAdvisor={() => setAiAdvisorOpen(true)}
          onOpenConsultation={() => handleOpenConsultation()}
        />
      </main>

      {/* Luxury 4-Column Footer */}
      <Footer
        onOpenConsultation={() => handleOpenConsultation()}
        onOpenAiAdvisor={() => setAiAdvisorOpen(true)}
        onSelectCategory={handleSelectCategory}
      />

      {/* Floating Theme Switcher Quick Toggle */}
      <ThemeFloatingSwitcher />

      {/* Lightweight Smooth Back to Top Button */}
      <BackToTopButton />

      {/* Quick Action Floating Bar */}
      <QuickContactBar
        onOpenConsultation={() => handleOpenConsultation()}
        onOpenAiAdvisor={() => setAiAdvisorOpen(true)}
      />

      {/* Free On-Site Inspection & Consultation Modal */}
      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
        initialData={consultationData}
      />

      {/* Project Case Study Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenConsultationWithProject={(title, cat) => {
          setSelectedProject(null);
          handleOpenConsultation(cat, language === 'en' ? `Order similar design for project: ${title}` : language === 'ar' ? `طلب تنفيذ تصميم مماثل لمشروع: ${title}` : `سفارش طرح مشابه پروژه: ${title}`);
        }}
        onOpenGallery={handleOpenGallery}
      />

      {/* Ready Railing Post Detail Modal (Specs, Hardware, Project Photos & Videos) */}
      <ReadyPostDetailModal
        post={selectedReadyPost}
        onClose={() => setSelectedReadyPost(null)}
        onOpenCalculatorPlus={(post) => {
          setSelectedReadyPost(null);
          setCalculatorPlusPost(post);
          const el = document.getElementById('calculator-plus');
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }}
        onOpenConsultation={(postName) => {
          setSelectedReadyPost(null);
          handleOpenConsultation('ready-posts', language === 'en' ? `Inquiry & purchase consultation for ready post: ${postName}` : language === 'ar' ? `طلب استشارة وشراء قائمة جاهزة: ${postName}` : `درخواست مشاوره و خرید پایه آماده: ${postName}`);
        }}
      />

      {/* AI Metallurgy & Standards Advisor Drawer */}
      <AiConsultantDrawer
        isOpen={aiAdvisorOpen}
        onClose={() => setAiAdvisorOpen(false)}
        onOpenConsultation={() => {
          setAiAdvisorOpen(false);
          handleOpenConsultation();
        }}
      />

      {/* High Resolution Lightbox Image Viewer */}
      <ImageViewerModal
        isOpen={galleryModal.isOpen}
        images={galleryModal.images}
        title={galleryModal.title}
        onClose={() => setGalleryModal(prev => ({ ...prev, isOpen: false }))}
      />

      {/* Mobile Automated Landscape Orientation Enforcer */}
      <MobileLandscapeEnforcer />

    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <MainApp />
      </LanguageProvider>
    </ThemeProvider>
  );
}
