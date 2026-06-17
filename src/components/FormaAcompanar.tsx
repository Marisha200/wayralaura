import React from 'react';
import { Sparkles, Sprout, Stars } from 'lucide-react';

export function FormaAcompanar() {
  return (
    <section id="forma-acompanar" className="py-20 bg-[#fdfaf6] text-left animate-fade-in-up">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Header */}
        <div className="flex flex-col items-center text-center mb-16 gap-3">
          <span className="text-xs uppercase font-bold tracking-[0.3em] text-[#b4843b] flex items-center gap-1.5 justify-center">
            <Sprout className="w-3.5 h-3.5" /> Procesos Conscientes
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#351d2a] font-medium tracking-tight">
            Mi Forma de Acompañar
          </h2>
          <div className="w-16 h-[1.5px] bg-[#bd763a]/35 mt-2" />
        </div>

        {/* Narrative Box */}
        <div className="bg-white/90 p-8 sm:p-12 md:p-16 rounded-[2.5rem] shadow-xl border border-[#e5d5b7]/40 backdrop-blur-md relative overflow-hidden">
          
          <div className="absolute right-6 top-6 opacity-5 text-[#b4843b] pointer-events-none">
            <Sparkles className="w-24 h-24" />
          </div>

          <div className="flex flex-col gap-6 text-slate-705 font-light text-base sm:text-lg leading-relaxed">
            
            <p className="font-serif italic text-xl sm:text-2xl text-[#b4843b] border-l-2 border-[#b4843b] pl-6 py-2 mb-4 leading-relaxed">
              Facilito procesos de autoconocimiento y transformación a través de encuentros individuales, talleres y programas.
            </p>

            <p>
              Acompaño el reconocimiento de patrones internos, la exploración de la historia personal cuando es pertinente, la resignificación de experiencias y la integración de recursos internos en la vida cotidiana.
            </p>

            <div className="my-8 p-8 bg-[#fcf6f3]/80 rounded-2xl border border-rose-100/60 max-w-2xl mx-auto text-center flex flex-col items-center gap-4">
              <Stars className="w-6 h-6 text-[#b4843b]" />
              <p className="font-serif text-[#351d2a] text-lg sm:text-xl font-medium leading-relaxed">
                El propósito es ampliar la conciencia de quién sos, para que puedas habitar tu vida con mayor claridad, congruencia, autenticidad y conexión con tu espíritu.
              </p>
            </div>

          </div>

          {/* Centered Signoff */}
          <div className="mt-12 flex flex-col items-center gap-1">
            <span className="font-serif text-sm uppercase tracking-[0.3em] text-[#b4843b] font-semibold">Camino Wayra</span>
            <div className="w-8 h-[1px] bg-[#e5d5b7] mt-1" />
          </div>

        </div>

      </div>
    </section>
  );
}
