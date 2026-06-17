import React from 'react';
import { Compass, BookOpen, Heart, Stars } from 'lucide-react';

export function MiHistoria() {
  return (
    <section id="mi-historia" className="py-20 bg-[#fdfaf6] text-left animate-fade-in-up">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Header */}
        <div className="flex flex-col items-center text-center mb-16 gap-3">
          <span className="text-xs uppercase font-bold tracking-[0.3em] text-[#b4843b] flex items-center gap-1.5 justify-center">
            <Stars className="w-3.5 h-3.5" /> El Recorrido del Sentido
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl text-[#351d2a] font-medium tracking-tight">
            Mi Historia
          </h2>
          <div className="w-16 h-[1.5px] bg-[#bd763a]/35 mt-2" />
        </div>

        {/* Narrative layout inspired by a high-end editorial book */}
        <div className="bg-white/80 p-8 sm:p-12 md:p-16 rounded-[2.5rem] shadow-2xl border border-[#e5d5b7]/40 backdrop-blur-md relative overflow-hidden">
          
          {/* Subtle starry background icons */}
          <div className="absolute right-8 top-12 opacity-5 text-[#b4843b] pointer-events-none">
            <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2c5.5 0 10 4.5 10 10s-4.5 10-10 10S2 17.5 2 12c0-5.5 4.5-10 10-10zm0 1c-4.9 0-9 4.1-9 9 0 3.5 2 6.5 4.9 8-1.5-2.2-1.9-5-1-7.8 1-3.1 3.5-5.5 6.7-6.2.3-.1.6 0 .7.3.1.3-.1.6-.4.7-3.2.7-5.5 3.1-6.1 6.3s1.2 6.2 4.1 7.4c.3.1.4.4.3.7-.1.3-.4.4-.7.3-3.9-1.6-6.5-5.5-6.5-9.7zM11.5 5.5s1 2 3 2c-2 0-3 2-3 2s-1-2-3-2c2 0 3-2 3-2z" />
            </svg>
          </div>

          <div className="flex flex-col gap-6 text-slate-755 font-light text-base sm:text-[1.05rem] leading-relaxed">
            
            {/* Elegant Large Intro Block quotes styled like a book */}
            <div className="border-l-2 border-[#b4843b] pl-6 py-1 mb-4">
              <p className="font-serif italic text-xl sm:text-2xl text-[#b4843b] leading-snug">
                “Antes de que las palabras les dieran forma, muchas de mis preguntas habitaban el cielo.”
              </p>
            </div>

            <p>
              Nací en Aguilares, Tucumán, una ciudad del sur tucumano abrazada por el verde y los amplios horizontes. Cuando miro hacia atrás, comprendo que mi camino comenzó allí: observando el cielo, maravillándome con los animales y sintiendo que existía algo sagrado habitando cada rincón de la naturaleza.
            </p>

            <p>
              Desde pequeña sentí una profunda curiosidad por la vida, por las personas y por aquello que existe más allá de lo visible; había en mí una sensación íntima de que la existencia guardaba significados que aún no lograba nombrar.
            </p>

            <p>
              A los 17 años migré a Buenos Aires junto a mis padres; con el tiempo comprendí que aquella experiencia fue uno de mis primeros grandes procesos de transformación, dejaba atrás una tierra, una forma de vida y una parte de mi identidad para abrirme a nuevos desafíos, aprendizajes y preguntas. 
            </p>

            <p>
              Crecí siendo una observadora sensible del mundo y de las personas, aprendí a escuchar, acompañar y sostener. Durante años ocupé el lugar de quien intentaba armonizar, comprender y aliviar el malestar de los demás, muchas veces fui quien contenía emociones, buscaba respuestas y procuraba que todo estuviera bien; ese camino me permitió desarrollar una profunda capacidad de escucha y empatía, pero también me llevó, con el tiempo, a descubrir algo esencial: la importancia de volver la mirada hacia mí misma.
            </p>

            <p>
              Aunque mi curiosidad por comprender la vida estuvo presente desde siempre, fue alrededor de mis veinte años cuando comencé a acercarme de manera consciente a distintos senderos de autoconocimiento y desarrollo espiritual: el Sincronario Maya fue una de las primeras puertas que se abrieron, dando inicio a un recorrido que continuó expandiéndose a través del estudio, la práctica y la integración de múltiples herramientas, saberes ancestrales y enfoques contemporáneos.
            </p>

            <div className="my-6 py-4 border-y border-[#e5d5b7]/40 text-[#b4843b] flex items-center justify-center gap-6">
              <span className="w-2.5 h-2.5 bg-[#b4843b] rotate-45 shrink-0" />
              <p className="font-serif italic text-center text-sm md:text-base leading-relaxed tracking-wide text-[#b4843b]">
                "El verdadero aprendizaje no ocurre solamente a través del conocimiento; ocurre cuando aquello que comprendemos puede ser vivido."
              </p>
              <span className="w-2.5 h-2.5 bg-[#b4843b] rotate-45 shrink-0" />
            </div>

            <p>
              Con los años me convertí en una observadora profunda de la experiencia humana, siempre me interesó comprender qué hay detrás de aquello que vivimos, qué nos mueve, qué nos limita y qué nos invita a crecer; esa inquietud me llevó a estudiar, investigar y explorar distintos caminos vinculados al desarrollo humano, la espiritualidad, la psicología, la filosofía, la metafísica, la simbología, la gestión emocional y diversos saberes ancestrales y contemporáneos. Sin embargo, la vida me enseñó que el verdadero aprendizaje no ocurre solamente a través del conocimiento, ocurre cuando aquello que comprendemos puede ser vivido.
            </p>

            <p>
              Como muchas personas, atravesé pérdidas, duelos, cambios y momentos que transformaron profundamente mi manera de comprender la existencia; experiencias que dejaron huellas en mi cuerpo, en mi corazón y en mi forma de mirar la vida. Aprendí que el dolor necesita ser escuchado, atravesado y honrado, pero también comprendí algo que se convirtió en una de las grandes enseñanzas de mi camino: existe una diferencia entre transitar el dolor y acostumbrarse a vivir en él.
            </p>

            <p>
              Con el tiempo comprendí que no siempre necesitamos hacer más, sanar más o seguir buscando respuestas afuera, a veces, lo que realmente necesitamos es comprender qué está pidiendo nuestro proceso y aprender a habitarnos de una manera nueva.
            </p>

            <p>
              Mirando hacia atrás, reconozco que siempre hubo un hilo conductor en mi recorrido: la búsqueda de sentido, una búsqueda acompañada por la certeza íntima de que nunca he estado sola, incluso en los momentos más difíciles encontré consuelo, guía y fortaleza en una presencia amorosa que me sostuvo una y otra vez, una presencia que para mí ha tenido el rostro de Cristo y que forma parte de mi experiencia espiritual más profunda.
            </p>

            <p>
              Hoy acompaño a otras personas desde ese lugar, no desde las respuestas absolutas ni desde la idea de haber llegado a un destino final, sino desde la experiencia de quien continúa experimentando, creciendo y descubriendo.
            </p>

            <p className="font-medium text-slate-800">
              Creo profundamente que cada persona guarda dentro de sí una sabiduría, una fuerza y una capacidad de transformación mucho mayor de la que imagina y que cuando encuentra el espacio adecuado para escucharse, comprenderse y habitarse de una nueva forma, nuevos caminos comienzan a abrirse.
            </p>

          </div>

          {/* Centered Golden Star Signoff */}
          <div className="mt-12 flex flex-col items-center gap-1">
            <span className="font-script text-4xl text-[#b4843b]">Laura Barros</span>
            <span className="text-[9px] uppercase tracking-[0.3em] text-slate-400 font-bold">Camino Wayra</span>
          </div>

        </div>

      </div>
    </section>
  );
}
