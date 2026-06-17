import React from 'react';
import { Eye, Stars, Sparkles } from 'lucide-react';

export function Cosmovision() {
  return (
    <section id="cosmovision" className="py-20 bg-[#fefdfb] text-left animate-fade-in-up">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Header */}
        <div className="flex flex-col items-center text-center mb-16 gap-3">
          <span className="text-xs uppercase font-bold tracking-[0.3em] text-[#b4843b] flex items-center gap-1.5 justify-center">
            <Stars className="w-3.5 h-3.5" /> Entre lo Humano y lo Divino
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#351d2a] font-medium tracking-tight">
            Cosmovisión
          </h2>
          <div className="w-16 h-[1.5px] bg-[#bd763a]/35 mt-2" />
        </div>

        {/* Narrative Box */}
        <div className="bg-white/90 p-8 sm:p-12 md:p-16 rounded-[2.5rem] shadow-xl border border-[#e5d5b7]/40 backdrop-blur-sm relative overflow-hidden">
          
          <div className="absolute left-6 top-8 opacity-5 text-[#b4843b] pointer-events-none">
            <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-17.93c-3.953.54-7 3.92-7 8.01 0 1.09.22 2.13.61 3.08L9 11.23V7.5c0-.83.67-1.5 1.5-1.5h.5V4.07zm8.39 12.01c.39-.95.61-1.99.61-3.08 0-4.09-3.047-7.47-7-8.01V6h.5c.83 0 1.5.67 1.5 1.5v3.73l4.39 3.93z" />
            </svg>
          </div>

          <div className="flex flex-col gap-6 text-slate-705 font-light text-base sm:text-[1.05rem] leading-relaxed">
            
            <p className="font-serif italic text-xl sm:text-2xl text-[#b4843b] border-l-2 border-[#b4843b] pl-6 py-2 mb-4 leading-relaxed">
              Siento la vida como un campo de experiencia donde lo humano y lo divino están profundamente entrelazados; entiendo al ser humano como una expresión de una consciencia mayor que se experimenta a sí misma a través de cada uno de nosotros. Desde esta mirada, somos una totalidad integrada de cuerpo, mente, emociones, energía y espíritu.
            </p>

            <p>
              Percibo la existencia como una experiencia donde todo adquiere significado a través de la vivencia, aunque en un nivel profundo la reality pueda ser comprendida como una construcción de la conciencia, aunque en la experiencia humana todo se siente real, porque intervienen la emoción, la percepción y la identificación con lo que vivimos; desde allí, considero que la realidad que habitamos está profundamente influida por nuestras creencias y por el lugar interno desde el cual nos posicionamos.
            </p>

            <div className="my-6 py-5 px-6 bg-[#fcf6f3] rounded-2xl border-l-4 border-[#b4843b] flex gap-4 items-start">
              <Eye className="w-6 h-6 text-[#b4843b] shrink-0 mt-1" />
              <p className="font-serif text-[#351d2a] text-[0.95rem] md:text-base leading-relaxed">
                Por eso, ampliar la conciencia no significa alejarnos de la vida, sino habitarla con mayor claridad, presencia y congruencia, sosteniéndonos en mayor armonía incluso dentro del movimiento de la experiencia humana.
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
