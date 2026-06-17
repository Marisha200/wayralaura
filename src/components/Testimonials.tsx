import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Testimony } from '../types';

interface TestimonialsProps {
  testimonials: Testimony[];
}

export function Testimonials({ testimonials }: TestimonialsProps) {
  const [index, setIndex] = useState(0);

  const prevStep = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextStep = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[index];

  return (
    <section id="testimonios" className="py-20 bg-white border-y border-rose-100/40 text-left relative overflow-hidden">
      
      {/* Decorative background visual circles */}
      <div className="absolute top-1/2 left-4 w-40 h-40 bg-[#fbf5f2]/60 rounded-full blur-2xl -z-10" />
      <div className="absolute right-12 top-20 w-52 h-52 bg-amber-50/40 rounded-full blur-3xl -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center gap-6">
        
        <span className="text-xs uppercase font-bold tracking-[0.2em] text-[#b4843b]">Voces Reales Co-Creadoras</span>
        <h2 className="font-serif text-3xl sm:text-4xl text-[#351d2a] font-medium tracking-tight mb-4">
          La Experiencia de Quienes ya Transitaron el Camino
        </h2>
        <div className="w-12 h-[1px] bg-[#e5d5b7] mb-8" />

        {/* Carousel container */}
        <div className="w-full relative min-h-[300px] flex items-center justify-center p-4">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-[#faf8f5] border border-gold-border rounded-[2rem] p-8 md:p-12 text-center shadow-xs max-w-2xl relative"
            >
              <div className="flex items-center justify-center gap-1 text-amber-500 mb-6 font-semibold">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current text-[#b4843b]" />
                ))}
              </div>

              {/* Big quote symbol representation */}
              <span className="font-serif text-7xl text-[#b4843b]/25 absolute top-4 left-6 leading-none">&ldquo;</span>

              <p className="font-serif italic text-base md:text-lg text-[#351d2a] font-light leading-relaxed mb-6 pt-2 select-text">
                &quot;{current.text}&quot;
              </p>

              <div className="flex flex-col items-center gap-1 border-t border-rose-100/40 pt-6 mt-4">
                <span className="font-sans text-xs tracking-wider font-bold text-slate-800 uppercase block">
                  {current.name}
                </span>
                {current.role && (
                  <span className="text-[10px] text-slate-400 font-light block">
                    {current.role}
                  </span>
                )}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Nav arrows outside */}
          <button 
            onClick={prevStep}
            className="absolute left-0 md:-left-12 p-3.5 rounded-full bg-white border border-[#e5d5b7] hover:border-[#b4843b] transition-all text-slate-700 shadow-xs cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          
          <button 
            onClick={nextStep}
            className="absolute right-0 md:-right-12 p-3.5 rounded-full bg-white border border-[#e5d5b7] hover:border-[#b4843b] transition-all text-slate-700 shadow-xs cursor-pointer"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

        </div>

        {/* Dots indices indicator */}
        <div className="flex items-center gap-2 mt-4">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-2 h-2 rounded-full transition-all ${
                i === index ? 'w-5 bg-[#b4843b] h-2.5' : 'bg-slate-200 hover:bg-slate-300'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
