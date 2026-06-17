import React from 'react';
import { ArrowRight, Leaf, Sparkles, Heart } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  createWhatsAppLink: (text: string) => string;
  onNavigate: (tab: string) => void;
}

export function Hero({ createWhatsAppLink, onNavigate }: HeroProps) {
  return (
    <section id="hero" className="relative py-16 md:py-24 bg-[#fdfbfa] overflow-hidden text-left">
      {/* Delicate background textures */}
      <div className="absolute top-24 left-10 w-96 h-96 bg-[#fcf6f3] rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-12 right-20 w-[40rem] h-[40rem] bg-[#f9f5eb]/60 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main 2-column content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left column of content */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Main Display Heading */}
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-[5.5rem] tracking-tight text-[#351d2a] leading-none font-medium">
              Habitarte <br />
              <span className="text-[#b4843b] italic font-normal tracking-wide">lo cambia todo.</span>
            </h1>

            {/* Golden/Warm Elegant Subheading */}
            <div className="mt-2 max-w-xl">
              <p className="font-serif italic text-2xl md:text-3xl text-[#b4843b] leading-tight">
                Cuando te habitás, <br />
                accedés a nuevas posibilidades.
              </p>
              {/* Tiny elegant gold element below subtitle */}
              <div className="flex items-center gap-1.5 mt-4">
                <span className="w-1.5 h-1.5 bg-[#b4843b] rotate-45" />
                <span className="w-24 h-[1px] bg-[#e5d5b7]" />
              </div>
            </div>

            {/* Description paragraphs exactly as requested in the image */}
            <div className="flex flex-col gap-5 text-slate-600 font-light text-base md:text-[1.05rem] leading-relaxed max-w-2xl mt-4">
              <p>
                El cambio profundo no nace solo de entender ni solo de accionar.
              </p>
              <p>
                Nace cuando aprendés a escuchar qué necesita tu proceso hoy y comenzás a integrar <strong className="font-medium text-slate-800">cuerpo, mente, energía y conciencia.</strong>
              </p>
              <p>
                Desde ahí, <strong className="font-medium text-slate-800">nuevas posibilidades emergen</strong> de forma más natural, coherente y sostenible.
              </p>
            </div>

          </div>

          {/* Right column of image and floating moon details */}
          <div className="lg:col-span-5 relative flex justify-center w-full mt-8 lg:mt-0">
            <div className="relative w-full max-w-[420px]">
              
              {/* Delicate gold geometric/astronomical line framework in background */}
              <div className="absolute -inset-10 flex items-center justify-center z-0 opacity-40 select-none pointer-events-none">
                <svg className="w-full h-full text-[#c2944b]" fill="none" stroke="currentColor" strokeWidth="0.5" viewBox="0 0 200 200">
                  <circle cx="100" cy="100" r="95" strokeDasharray="2,2" />
                  <circle cx="100" cy="100" r="70" />
                  <polygon points="100,10 185,150 15,150" />
                  <line x1="100" y1="10" x2="100" y2="190" />
                  <line x1="10" y1="100" x2="190" y2="100" />
                  {/* Crescent Moon */}
                  <path d="M 120 70 A 15 15 0 0 1 120 100 A 13 13 0 0 0 120 70 Z" fill="currentColor" />
                </svg>
              </div>

              {/* Premium editorial single picture frame container */}
              <div className="relative bg-white/60 p-4 rounded-[2.5rem] shadow-2xl border border-[#e5d5b7]/50 z-10 overflow-hidden backdrop-blur-sm">
                <div className="aspect-[5/6] rounded-[2.2rem] bg-gradient-to-tr from-[#fcf6f3] to-[#faf5eb] overflow-hidden relative">
                  
                  {/* High quality portrait styling for Laura Barros */}
                  <img 
                    src="/src/assets/images/laura-wayra.png" 
                    alt="Laura Barros - Camino Wayra" 
                    className="w-full h-full object-cover brightness-[101%] contrast-[98%] hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />

                  {/* Overlaid elegant script signoff name banner */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white/80 backdrop-blur-sm rounded-2xl p-4 border border-white/60">
                    <span className="text-[10px] tracking-[0.2em] font-bold text-[#b4843b] uppercase block">
                      Laura Barros
                    </span>
                    <p className="text-[11px] font-serif text-slate-700 italic font-light mt-0.5 leading-snug">
                      Terapeuta Integral, fundadora de este cobijo de aire para el alma.
                    </p>
                  </div>
                </div>
              </div>

             
            </div>
          </div>
        </div>

        {/* Horizontal Action Blocks exactly styled like the user picture */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 relative z-10 w-full">
          
          {/* Card 1: MI MIRADA */}
          <button 
            type="button"
            onClick={() => onNavigate('MI_ENFOQUE')}
            className="bg-[#3d2331] hover:bg-[#4a2b3c] p-6 sm:p-7 rounded-[2rem] text-white transition-all duration-300 flex items-center justify-between group text-left shadow-sm hover:shadow-md border border-transparent min-h-[130px] sm:min-h-[140px] w-full"
            id="hero-card-1"
          >
            <div className="flex items-center gap-5 sm:gap-6 w-full">
              {/* Left hand-crafted botanical circular ornament */}
              <div className="shrink-0">
                <svg viewBox="0 0 100 100" className="w-16 h-16 sm:w-20 sm:h-20 text-[#e5d5b7] shrink-0" fill="none" stroke="currentColor" strokeWidth="1">
                  <circle cx="50" cy="50" r="38" stroke="currentColor" strokeWidth="0.75" />
                  <path d="M50,22 L50,78" stroke="currentColor" strokeWidth="0.75" />
                  {/* Botanical leaflets */}
                  <path d="M50,30 C38,26 36,34 50,36 C64,34 62,26 50,30" stroke="currentColor" strokeWidth="0.75" />
                  <path d="M50,42 C36,38 34,46 50,48 C66,46 64,38 50,42" stroke="currentColor" strokeWidth="0.75" />
                  <path d="M50,54 C38,50 36,58 50,60 C64,58 62,50 50,54" stroke="currentColor" strokeWidth="0.75" />
                  <path d="M50,66 C40,62 38,70 50,72 C62,70 60,62 50,66" stroke="currentColor" strokeWidth="0.75" />
                </svg>
              </div>

              {/* Right content aligned in columns */}
              <div className="flex-1 flex flex-col justify-center">
                <h4 className="font-sans text-xs sm:text-[13px] font-semibold tracking-[0.18em] uppercase text-white leading-tight">
                  MI MIRADA
                </h4>
                <p className="font-script text-2xl sm:text-3xl text-[#e5d5b7] leading-none mt-1.5 lowercase block font-normal">
                  conocé mi enfoque
                </p>
                {/* Minimal thin long arrow pointing right as requested */}
                <div className="mt-2.5 flex items-center justify-start h-5">
                  <svg viewBox="0 0 80 20" className="w-11 h-3 text-[#e5d5b7] group-hover:translate-x-1.5 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="1">
                    <line x1="0" y1="10" x2="80" y2="10" />
                    <polyline points="74,5 80,10 74,15" />
                  </svg>
                </div>
              </div>
            </div>
          </button>

          {/* Card 2: INICIAR EL CAMINO */}
          <button 
            type="button"
            onClick={() => onNavigate('SERVICIOS')}
            className="bg-[#bd763a] hover:bg-[#c98347] p-6 sm:p-7 rounded-[2rem] text-white transition-all duration-300 flex items-center justify-between group text-left shadow-sm hover:shadow-md border border-transparent min-h-[130px] sm:min-h-[140px] w-full"
            id="hero-card-2"
          >
            <div className="flex items-center gap-5 sm:gap-6 w-full">
              {/* Left hand-crafted sun rising path circular ornament */}
              <div className="shrink-0">
                <svg viewBox="0 0 100 100" className="w-16 h-16 sm:w-20 sm:h-20 text-[#fdfbfa] shrink-0" fill="none" stroke="currentColor" strokeWidth="1">
                  <circle cx="50" cy="50" r="38" stroke="currentColor" strokeWidth="0.75" />
                  {/* Sun */}
                  <circle cx="50" cy="38" r="10" stroke="currentColor" strokeWidth="0.75" />
                  <line x1="50" y1="21" x2="50" y2="25" stroke="currentColor" strokeWidth="0.75" />
                  <line x1="33" y1="33" x2="37" y2="35" stroke="currentColor" strokeWidth="0.75" />
                  <line x1="67" y1="33" x2="63" y2="35" stroke="currentColor" strokeWidth="0.75" />
                  <line x1="28" y1="44" x2="33" y2="44" stroke="currentColor" strokeWidth="0.75" />
                  <line x1="72" y1="44" x2="67" y2="44" stroke="currentColor" strokeWidth="0.75" />
                  {/* Path */}
                  <path d="M50,38 C50,38 42,55 54,62 C65,70 38,76 48,78" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" />
                </svg>
              </div>

              {/* Right content aligned in columns */}
              <div className="flex-1 flex flex-col justify-center">
                <h4 className="font-sans text-xs sm:text-[13px] font-semibold tracking-[0.18em] uppercase text-white leading-tight">
                  INICIAR EL CAMINO
                </h4>
                <p className="font-script text-2xl sm:text-3xl text-[#fdfbfa] leading-none mt-1.5 lowercase block font-normal">
                  conocé cómo puedo acompañarte
                </p>
                {/* Minimal thin long arrow pointing right as requested */}
                <div className="mt-2.5 flex items-center justify-start h-5">
                  <svg viewBox="0 0 80 20" className="w-11 h-3 text-[#fdfbfa] group-hover:translate-x-1.5 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="1">
                    <line x1="0" y1="10" x2="80" y2="10" />
                    <polyline points="74,5 80,10 74,15" />
                  </svg>
                </div>
              </div>
            </div>
          </button>

          {/* Card 3: AGENDAR UN ENCUENTRO */}
          <button 
            type="button"
            onClick={() => onNavigate('CONTACTO')}
            className="bg-[#fcfaf6] hover:bg-[#faf4ec] p-6 sm:p-7 rounded-[2rem] text-[#3d2331] transition-all duration-300 flex items-center justify-between group text-left shadow-sm hover:shadow-md border border-[#e5d5b7]/50 min-h-[130px] sm:min-h-[140px] w-full"
            id="hero-card-3"
          >
            <div className="flex items-center gap-5 sm:gap-6 w-full">
              {/* Left hand-crafted heart with rays circular ornament */}
              <div className="shrink-0">
                <svg viewBox="0 0 100 100" className="w-16 h-16 sm:w-20 sm:h-20 text-[#c2944b] shrink-0" fill="none" stroke="currentColor" strokeWidth="1">
                  <circle cx="50" cy="50" r="38" stroke="currentColor" strokeWidth="0.75" />
                  {/* Radiant Heart */}
                  <path d="M50,62 C50,62 35,50 35,40 C35,32 41,27 50,34 C59,27 65,32 65,40 C65,50 50,62 50,62 Z" stroke="currentColor" strokeWidth="0.75" strokeLinejoin="round" />
                  <line x1="50" y1="18" x2="50" y2="24" stroke="currentColor" strokeWidth="0.75" />
                  <line x1="50" y1="67" x2="50" y2="73" stroke="currentColor" strokeWidth="0.75" />
                  <line x1="26" y1="45" x2="31" y2="45" stroke="currentColor" strokeWidth="0.75" />
                  <line x1="69" y1="45" x2="74" y2="45" stroke="currentColor" strokeWidth="0.75" />
                </svg>
              </div>

              {/* Right content aligned in columns */}
              <div className="flex-1 flex flex-col justify-center">
                <h4 className="font-sans text-xs sm:text-[13px] font-semibold tracking-[0.18em] uppercase text-[#3d2331] leading-tight">
                  AGENDAR UN ENCUENTRO
                </h4>
                <p className="font-script text-2xl sm:text-3xl text-[#c2944b] leading-none mt-1.5 lowercase block font-normal">
                  hablemos
                </p>
                {/* Minimal thin long arrow pointing right as requested */}
                <div className="mt-2.5 flex items-center justify-start h-5">
                  <svg viewBox="0 0 80 20" className="w-11 h-3 text-[#c2944b] group-hover:translate-x-1.5 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="1">
                    <line x1="0" y1="10" x2="80" y2="10" />
                    <polyline points="74,5 80,10 74,15" />
                  </svg>
                </div>
              </div>
            </div>
          </button>

        </div>

      </div>
    </section>
  );
}
