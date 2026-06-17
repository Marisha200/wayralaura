import React from 'react';
import { Compass, Heart, Eye, Sparkles } from 'lucide-react';

export function SobreMi() {
  return (
    <section id="sobre-mi" className="py-20 bg-[#fdfbfa] text-left animate-fade-in-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top visual quote card style layout */}
        <div className="max-w-4xl mx-auto text-center mb-16 px-4 bg-[#fcf6f3] py-10 sm:py-12 rounded-[2.5rem] border border-[#e5d5b7]/45 shadow-sm">
          <p className="font-serif italic text-lg sm:text-xl md:text-2xl text-[#b4843b] leading-relaxed max-w-3xl mx-auto">
            “No siempre necesitamos hacer más,<br />
            no siempre necesitamos sanar más,<br />
            y no siempre la respuesta está en seguir buscando afuera.<br />
            Muchas veces, lo que necesitamos es comprender con mayor profundidad qué estamos viviendo, desde dónde lo estamos viviendo y qué está intentando mostrarnos nuestro proceso.”
          </p>
          <div className="flex items-center justify-center gap-1.5 mt-5">
            <span className="w-1.5 h-1.5 bg-[#b4843b] rotate-45" />
            <span className="w-16 h-[1px] bg-[#e5d5b7]" />
            <span className="w-1.5 h-1.5 bg-[#b4843b] rotate-45" />
          </div>
        </div>

        {/* Hero Title Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Portrait Image Block */}
          <div className="lg:col-span-5 relative flex justify-center w-full sticky top-28">
            <div className="relative w-full max-w-[390px]">
              {/* Delicate gold frame block */}
              <div className="absolute -inset-4 border border-[#e5d5b7]/50 rounded-[2.5rem] -z-10 pointer-events-none" />
              
              <div className="relative bg-[#fcf6f3] p-3 rounded-[2.2rem] shadow-xl border border-rose-100/60 overflow-hidden">
                <div className="aspect-[4/5] rounded-[1.8rem] overflow-hidden relative">
                  <img 
                    src="/src/assets/images/laura-wayra.png" 
                    alt="Laura Barros - Creadora de Camino Wayra" 
                    className="w-full h-full object-cover brightness-[101%] contrast-[98%] hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-xs rounded-xl p-3 border border-white/60 text-center">
                    <p className="font-serif italic text-lg text-[#351d2a] font-medium">Maria Laura Barros</p>
                    <p className="text-[10px] uppercase tracking-widest text-[#b4843b] font-bold">Counselor & Numeróloga</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Biography Content Block */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            <div className="flex flex-col gap-1.5">
              <span className="text-xs uppercase font-bold tracking-[0.25em] text-[#b4843b]">Sobre Mí</span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#351d2a] font-medium tracking-tight">
                Quién es Maria Laura Barros
              </h2>
              <div className="w-16 h-[1.5px] bg-[#bd763a]/35 mt-2" />
            </div>

            <div className="flex flex-col gap-5 text-slate-650 font-light text-sm md:text-base leading-relaxed max-w-2xl">
              <p>
                Soy <strong className="font-medium text-[#351d2a]">Maria Laura Barros</strong>, counselor, numeróloga y facilitadora de procesos personales y espirituales; desde hace más de diez años asisto a personas que desean comprenderse más profundamente, reconocer sus talentos, resignificar su historia y vivir con mayor consciencia, bienestar y autenticidad.
              </p>
              
              <p>
                A lo largo de este camino descubrí que, muchas veces, aquello que nos genera malestar no es el verdadero problema; detrás de los síntomas, los conflictos repetidos, los bloqueos o las crisis suelen existir patrones más profundos que buscan ser vistos, comprendidos e integrados. Comprendí que los desafíos que atravesamos rara vez están aislados: lo que sucede en nuestros vínculos suele dialogar con nuestra historia, lo que ocurre en el cuerpo suele relacionarse con nuestras emociones y aquello que buscamos crear o manifestar en la vida muchas veces encuentra sus límites en patrones más profundos que aún no han sido vistos.
              </p>

              {/* Highlight Box representing one of her strengths */}
              <div className="bg-[#fcf6f3] p-6 rounded-2xl border-l-4 border-[#b4843b] mt-2 mb-2">
                <p className="font-medium text-[#351d2a] text-sm md:text-[0.95rem] mb-2 flex items-center gap-2">
                  <Eye className="w-4.5 h-4.5 text-[#b4843b]" /> Una Escucha Profunda
                </p>
                <p className="italic text-slate-650 font-light text-xs md:text-sm">
                  Una de mis mayores fortalezas es la capacidad de escuchar profundamente, observar patrones y reconocer conexiones que muchas veces pasan desapercibidas, donde otros ven situaciones aisladas, yo suelo reconocer historias, memorias, creencias, identidades asumidas, dinámicas familiares, aprendizajes y ciclos que se entrelazan dando forma a la experiencia que cada persona está viviendo.
                </p>
              </div>

              <p>
                Mi mirada se orienta a comprender el entramado completo y no solamente una parte de la historia, porque cada persona es un universo y cada proceso tiene su propio lenguaje; por eso me considero una investigadora de la experiencia humana, me interesa comprender qué hay detrás de aquello que duele, limita o se repite, para acompañar procesos que permitan recuperar más claridad, libertad y coherencia interior.
              </p>

              <div className="bg-amber-50/30 p-6 rounded-3xl border border-[#e5d5b7]/40 mt-3">
                <span className="text-[10px] uppercase font-bold tracking-[0.15em] text-[#b4843b] block mb-3">
                  Pautas de mi mirada
                </span>
                <p className="text-slate-655 font-light text-sm mb-4">
                  Mi enfoque no parte de fórmulas rígidas ni de caminos iguales para todos; creo profundamente que cada proceso tiene su propio ritmo, su propia inteligencia y sus propias necesidades:
                </p>
                <ul className="flex flex-col gap-2.5 pl-2">
                  <li className="flex items-start gap-2.5 text-xs sm:text-sm">
                    <span className="w-1.5 h-1.5 bg-[#b4843b] rotate-45 shrink-0 mt-2" />
                    <span>A veces el siguiente paso es <strong>comprender</strong>,</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs sm:text-sm">
                    <span className="w-1.5 h-1.5 bg-[#b4843b] rotate-45 shrink-0 mt-2" />
                    <span>A veces es <strong>regular el cuerpo y el sistema nervioso</strong>,</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs sm:text-sm">
                    <span className="w-1.5 h-1.5 bg-[#b4843b] rotate-45 shrink-0 mt-2" />
                    <span>A veces es <strong>liberar emociones</strong> que han quedado retenidas,</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs sm:text-sm">
                    <span className="w-1.5 h-1.5 bg-[#b4843b] rotate-45 shrink-0 mt-2" />
                    <span>Y otras veces es <strong>revisar creencias, ampliar la mirada</strong> y abrirse a nuevas posibilidades.</span>
                  </li>
                </ul>
              </div>

              <p className="mt-2">
                Para ello, facilito encuentros y procesos desde una mirada integrativa que une cuerpo, mente, emoción, energía, consciencia y espiritualidad, tendiendo puentes entre la sabiduría interior y la vida cotidiana.
              </p>

              <p>
                Mi intención no es decirte quién deberías ser, es colaborar en tu proceso de recordar, descubrir y habitar con mayor congruencia aquello que ya vive en vos, porque cuando aprendés a habitarte de verdad, algo profundo comienza a ordenarse y desde allí... nuevas posibilidades emergen.
              </p>
            </div>

            {/* Practical columns for quick attributes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              <div className="bg-white p-4 rounded-2xl border border-[#e5d5b7]/30 flex gap-3 items-start shadow-2xs">
                <Compass className="w-5 h-5 text-[#b4843b] shrink-0 mt-0.5" />
                <div className="flex flex-col text-left">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#351d2a]">Investigadora</span>
                  <span className="text-[11px] text-slate-500 font-light">De la complejidad humana</span>
                </div>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-[#e5d5b7]/30 flex gap-3 items-start shadow-2xs">
                <Heart className="w-5 h-5 text-[#b4843b] shrink-0 mt-0.5" />
                <div className="flex flex-col text-left">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#351d2a]">Facilitadora</span>
                  <span className="text-[11px] text-slate-500 font-light">Espacios integrativos sutiles</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
