import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { MyEnfoque } from './components/MyEnfoque';
import { GoldenBanner } from './components/GoldenBanner';
import { Services } from './components/Services';
import { Resources } from './components/Resources';
import { Testimonials } from './components/Testimonials';
import { ContactForm } from './components/ContactForm';
import { Blog } from './components/Blog';
import { SobreMi } from './components/SobreMi';
import { MiHistoria } from './components/MiHistoria';
import { FormaAcompanar } from './components/FormaAcompanar';
import { Cosmovision } from './components/Cosmovision';

import { 
  SERVICES, 
  TESTIMONIALS, 
  BLOG_POSTS, 
  FREE_RESOURCES 
} from './data';

export default function App() {
  // Navigation active tab index
  const [activeTab, setActiveTab] = useState<string>('INICIO');

  // Resource Downloads State
  const [downloadingResourceId, setDownloadingResourceId] = useState<string | null>(null);
  const [downloadProgress, setDownloadProgress] = useState<number>(0);
  const [downloadSuccessId, setDownloadSuccessId] = useState<string | null>(null);

  // Helper: Pre-format direct WhatsApp linkages easily
  const createWhatsAppLink = (text: string) => {
    const defaultNumber = '5491128962181';
    return `https://wa.me/${defaultNumber}?text=${encodeURIComponent(text)}`;
  };

  // Simulate premium PDF guide generation download
  const handleDownload = (resource: typeof FREE_RESOURCES[0]) => {
    setDownloadingResourceId(resource.id);
    setDownloadProgress(0);
    setDownloadSuccessId(null);

    const timer = setInterval(() => {
      setDownloadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setDownloadingResourceId(null);
          setDownloadSuccessId(resource.id);
          setTimeout(() => setDownloadSuccessId(null), 3500);
          return 100;
        }
        return prev + 20;
      });
    }, 300);
  };

  // Helper to render the currently active page/section
  const renderActiveSection = () => {
    switch (activeTab) {
      case 'INICIO':
        return (
          <>
            {/* 1. Hero Showcase view */}
            <Hero createWhatsAppLink={createWhatsAppLink} onNavigate={setActiveTab} />
            
            {/* 2. Golden Banner (the grand text bridge requested to be immediately before the footer) */}
            <GoldenBanner />
          </>
        );
      case 'SOBRE_MI':
        return <SobreMi />;
      case 'MI_HISTORIA':
        return <MiHistoria />;
      case 'FORMA_ACOMPANAR':
        return <FormaAcompanar />;
      case 'COSMOVISION':
        return <Cosmovision />;
      case 'MI_ENFOQUE':
        return <MyEnfoque />;
      case 'SERVICIOS':
        return <Services services={SERVICES} createWhatsAppLink={createWhatsAppLink} />;
      case 'RECURSOS':
        return (
          <Resources 
            resources={FREE_RESOURCES}
            downloadingResourceId={downloadingResourceId}
            downloadProgress={downloadProgress}
            downloadSuccessId={downloadSuccessId}
            handleDownload={handleDownload}
          />
        );
      case 'TESTIMONIOS':
        return <Testimonials testimonials={TESTIMONIALS} />;
      case 'BLOG':
        return <Blog posts={BLOG_POSTS} />;
      case 'CONTACTO':
        return <ContactForm createWhatsAppLink={createWhatsAppLink} />;
      default:
        return (
          <>
            <Hero createWhatsAppLink={createWhatsAppLink} onNavigate={setActiveTab} />
            <GoldenBanner />
          </>
        );
    }
  };

  const handleFooterNavigate = (tabKey: string) => {
    setActiveTab(tabKey);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-pastel-warm min-h-screen text-slate-800 font-sans selection:bg-rose-100 selection:text-amber-805 antialiased flex flex-col justify-between">
      
      <div>
        {/* 1. Header Navigation System */}
        <Header 
          createWhatsAppLink={createWhatsAppLink} 
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        {/* 2. Primary Page Render Slot wrapped with elegant air fade transition */}
        <main className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
            >
              {renderActiveSection()}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>

      {/* FOOTER AREA */}
      <div>
        {/* UPPER FOOTER (Cream/rose background, Deep Borravino text, featuring links and descriptions) */}
        <footer className="bg-[#fcf6f3] text-[#3d2331] py-16 text-left border-t border-[#e5d5b7]/50 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              
              {/* Col 1: Brand description based on logo and aesthetic */}
              <div className="md:col-span-2 flex flex-col gap-4">
                <span className="font-serif text-3xl tracking-widest text-[#3d2331] block">
                  Camino Wayra
                </span>
                <span className="text-[10px] tracking-[0.3em] text-[#bd763a] font-bold uppercase block -mt-3.5">
                  POR LAURA BARROS
                </span>
                <p className="text-xs text-[#3d2331]/75 font-light leading-relaxed max-w-sm mt-1">
                  Un cobijo de aire sutil y físico pensado para desacelerar, habitar el cuerpo, y reconectar profundamente con tu sabiduría natural.
                </p>
              </div>

              {/* Col 2: Navigation indices */}
              <div>
                <h4 className="text-[#bd763a] uppercase text-xs tracking-wider font-bold mb-4">Quién Soy</h4>
                <div className="flex flex-col gap-2.5 text-xs font-light text-[#3d2331]/80 items-start">
                  <button 
                    onClick={() => handleFooterNavigate('INICIO')} 
                    className="hover:text-[#bd763a] transition-colors uppercase tracking-widest text-[10px]"
                  >
                    Inicio
                  </button>
                  <button 
                    onClick={() => handleFooterNavigate('SOBRE_MI')} 
                    className="hover:text-[#bd763a] transition-colors uppercase tracking-widest text-[10px]"
                  >
                    Sobre Mí
                  </button>
                  <button 
                    onClick={() => handleFooterNavigate('MI_HISTORIA')} 
                    className="hover:text-[#bd763a] transition-colors uppercase tracking-widest text-[10px]"
                  >
                    Mi Historia
                  </button>
                  <button 
                    onClick={() => handleFooterNavigate('MI_ENFOQUE')} 
                    className="hover:text-[#bd763a] transition-colors uppercase tracking-widest text-[10px]"
                  >
                    Mi Enfoque
                  </button>
                  <button 
                    onClick={() => handleFooterNavigate('FORMA_ACOMPANAR')} 
                    className="hover:text-[#bd763a] transition-colors uppercase tracking-widest text-[10px] text-left text-left"
                  >
                    Forma de acompañar
                  </button>
                  <button 
                    onClick={() => handleFooterNavigate('COSMOVISION')} 
                    className="hover:text-[#bd763a] transition-colors uppercase tracking-widest text-[10px]"
                  >
                    Cosmovisión
                  </button>
                </div>
              </div>

              {/* Col 3: Resources */}
              <div>
                <h4 className="text-[#bd763a] uppercase text-xs tracking-wider font-bold mb-4">Herramientas</h4>
                <div className="flex flex-col gap-2.5 text-xs font-light text-[#3d2331]/80 items-start">
                  <button 
                    onClick={() => handleFooterNavigate('RECURSOS')} 
                    className="hover:text-[#bd763a] transition-colors uppercase tracking-widest text-[10px]"
                  >
                    Talleres Gratuitos
                  </button>
                  <button 
                    onClick={() => handleFooterNavigate('BLOG')} 
                    className="hover:text-[#bd763a] transition-colors uppercase tracking-widest text-[10px]"
                  >
                    Bitácora / Blog
                  </button>
                  <button 
                    onClick={() => handleFooterNavigate('CONTACTO')} 
                    className="hover:text-[#bd763a] transition-colors uppercase tracking-widest text-[10px]"
                  >
                    Contacto Directo
                  </button>
                </div>
              </div>

            </div>
          </div>
        </footer>

        {/* FINAL BOTTOM FOOTER (Dark layout matching the rest of the application) */}
        <footer className="bg-[#1e0f18] text-rose-100/45 py-8 text-center text-xs tracking-wider border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-4 items-center justify-between">
            <span className="font-light">
              © 2026 Camino Wayra - Todos los derechos reservados.
            </span>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-[11px] text-rose-100/35">
              <span>Ubicación: Palermo Soho, Buenos Aires</span>
              <span className="hidden sm:inline">•</span>
              <span>Teléfono: +54 9 11 2896-2181</span>
            </div>
          </div>
        </footer>
      </div>

    </div>
  );
}
