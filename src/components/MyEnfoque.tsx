import React from 'react';
import { Sparkles, Route, Activity, Moon, Milestone, HelpCircle } from 'lucide-react';

export function MyEnfoque() {
  return (
    <section id="mi-enfoque" className="py-20 bg-white border-y border-[#e5d5b7]/50 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        
        {/* Subtle section introduction */}
        <div className="flex flex-col items-center text-center gap-2 mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#b4843b] font-bold">La Filosofía del Acompañamiento</span>
          <h2 className="font-serif text-3xl md:text-4xl text-[#351d2a] font-medium tracking-tight">
            Mi Enfoque
          </h2>
          <div className="w-12 h-[1px] bg-[#e5d5b7] mt-3" />
        </div>

        {/* Narrative Flow */}
        <div className="flex flex-col gap-8 text-slate-700 font-light text-base md:text-[1.05rem] leading-relaxed max-w-4xl mx-auto">
          
          <div className="bg-[#fcf6f3] p-8 sm:p-10 rounded-[2.2rem] border border-[#e5d5b7]/40">
            <p className="font-serif italic text-xl sm:text-2xl text-[#b4843b] leading-relaxed">
              “Mi mirada parte de una comprensión simple y profunda: la vida no es un problema que necesita ser resuelto, sino una experiencia que nos invita a ser vivida.”
            </p>
            <p className="text-sm text-slate-600 mt-4 leading-relaxed font-light">
              Muchas veces intentamos controlar los resultados, evitar el dolor o aferrarnos a aquello que creemos que debería suceder, sin embargo, gran parte del sufrimiento surge cuando nos alejamos de la experiencia presente y quedamos atrapados en la resistencia, el miedo o el apego.
            </p>
          </div>

          <p className="mt-2">
            Creo que cada persona es mucho más que un síntoma, un conflicto o una dificultad puntual, los desafíos que atravesamos rara vez están aislados: lo que sucede en nuestros vínculos suele dialogar con nuestra historia, lo que ocurre en un área suele estar presente en otra, lo que ocurre en el cuerpo suele relacionarse con nuestras emociones y aquello que buscamos crear o manifestar en la vida muchas veces encuentra sus límites en patrones más profundos que aún no han sido vistos.
          </p>

          <p>
            Por eso mi mirada se orienta a comprender el entramado completo y no solamente una parte de la historia. Me gusta pensar mi labor como la <strong className="font-medium text-[#c2944b]">construcción de puentes</strong>: puentes entre el mundo interior y la vida cotidiana, entre la mente, el cuerpo, las emociones y el espíritu, entre la sabiduría ancestral y los desafíos del presente, y entre aquello que hemos sido y aquello que estamos llamados a desplegar.
          </p>

          <p>
            Cada persona guarda en su interior una sabiduría única; mi tarea no es indicar el camino, sino ofrecer un espacio de escucha, reflexión y acompañamiento para que cada uno pueda descubrir sus propios recursos, comprender sus ciclos, resignificar su historia y conectar con una forma de vivir más auténtica y alineada con su esencia.
          </p>

          {/* Singular process paths visual blocks */}
          <div className="mt-6 border-t border-[#e5d5b7]/40 pt-10">
            <h4 className="font-serif text-lg text-[#351d2a] font-medium mb-6 text-center">
              La singularidad de cada proceso
            </h4>
            <p className="text-sm text-slate-500 font-light mb-8 text-center max-w-2xl mx-auto">
              Integro herramientas contemporáneas y saberes ancestrales porque considero al ser humano una totalidad donde cuerpo, mente, emoción, energía, consciencia y espiritualidad se encuentran profundamente interrelacionados; no creo en fórmulas rígidas ni en caminos iguales para todos.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
              
              <div className="bg-[#fdfaf6] p-5 rounded-2xl border border-[#e5d5b7]/30 flex flex-col gap-3 min-h-[140px] justify-between">
                <span className="text-[#b4843b] font-serif font-semibold italic text-xs uppercase tracking-widest block">Camino 1</span>
                <p className="text-xs sm:text-sm text-[#351d2a] font-light leading-relaxed">
                  A veces el siguiente paso es <strong>comprender</strong>.
                </p>
                <div className="h-1 w-8 bg-[#b4843b]/40 rounded-full" />
              </div>

              <div className="bg-[#fdfaf6] p-5 rounded-2xl border border-[#e5d5b7]/30 flex flex-col gap-3 min-h-[140px] justify-between">
                <span className="text-[#b4843b] font-serif font-semibold italic text-xs uppercase tracking-widest block">Camino 2</span>
                <p className="text-xs sm:text-sm text-[#351d2a] font-light leading-relaxed">
                  A veces es <strong>regular el cuerpo y el sistema nervioso</strong>.
                </p>
                <div className="h-1 w-8 bg-[#b4843b]/40 rounded-full" />
              </div>

              <div className="bg-[#fdfaf6] p-5 rounded-2xl border border-[#e5d5b7]/30 flex flex-col gap-3 min-h-[140px] justify-between">
                <span className="text-[#b4843b] font-serif font-semibold italic text-xs uppercase tracking-widest block">Camino 3</span>
                <p className="text-xs sm:text-sm text-[#351d2a] font-light leading-relaxed">
                  A veces es <strong>liberar emociones retenidas</strong>.
                </p>
                <div className="h-1 w-8 bg-[#b4843b]/40 rounded-full" />
              </div>

              <div className="bg-[#fdfaf6] p-5 rounded-2xl border border-[#e5d5b7]/30 flex flex-col gap-3 min-h-[140px] justify-between">
                <span className="text-[#b4843b] font-serif font-semibold italic text-xs uppercase tracking-widest block">Camino 4</span>
                <p className="text-xs sm:text-sm text-[#351d2a] font-light leading-relaxed">
                  Y otras veces es <strong>revisar creencias, ampliar la mirada</strong> y abrirse a nuevas posibilidades.
                </p>
                <div className="h-1 w-8 bg-[#b4843b]/40 rounded-full" />
              </div>

            </div>
          </div>

          <p className="mt-4">
            Mi enfoque integra presencia, consciencia y espiritualidad práctica, entendiendo que la verdadera transformación ocurre cuando lo que comprendemos puede encarnarse en nuestra vida diaria.
          </p>

          <p className="font-medium text-slate-800">
            Mi intención no es decirte quién deberías ser, es acompañarte a recordar, descubrir y habitar con mayor coherencia aquello que ya vive en vos, porque cuando aprendemos a habitarnos de verdad, algo profundo comienza a ordenarse y desde allí... nuevas posibilidades emergen.
          </p>

        </div>

      </div>
    </section>
  );
}
