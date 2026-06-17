import React from 'react';

export function GoldenBanner() {
  return (
    <section className="relative py-12 md:py-14 bg-plum-dark overflow-hidden text-white border-y border-[#b4843b]/20">
      
      {/* Background visual sparkles, stars, and golden constellations */}
      <div className="absolute inset-0 opacity-15 pointer-events-none select-none z-0">
        {/* Draw multiple tiny stars */}
        <div className="absolute top-10 left-10 w-1.5 h-1.5 bg-yellow-200 rounded-full animate-pulse" />
        <div className="absolute top-1/4 right-20 w-2 h-2 bg-yellow-200 rounded-full animate-ping" />
        <div className="absolute bottom-12 left-1/3 w-1 h-1 bg-yellow-100 rounded-full animate-pulse" />
        <div className="absolute top-12 right-1/3 w-1.5 h-1.5 bg-yellow-200 rounded-full" />
        <div className="absolute bottom-20 right-10 w-2 h-2 bg-yellow-200 rounded-full animate-pulse" />
        
        {/* Constellation line drawing */}
        <svg className="w-full h-full text-yellow-200" fill="none" stroke="currentColor" strokeWidth="0.5">
          <path d="M 50 100 L 120 150 L 180 80" strokeDasharray="3,3" />
          <path d="M 800 120 L 850 70 L 920 150 L 980 90" strokeDasharray="3,3" />
          {/* Gold branches/vines representations */}
          <path d="M 50 200 C 100 220, 150 180, 200 250" strokeWidth="0.75" />
          <path d="M 1100 20 C 1150 80, 1200 60, 1250 120" strokeWidth="0.75" />
        </svg>
      </div>

      {/* Trailing golden leaf decorations lining the left and right sides exactly as in the image */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 w-48 h-full hidden lg:flex items-center justify-start opacity-70 pointer-events-none select-none z-15">
        <svg className="w-full h-5/6 text-[#c2944b]" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 100 300">
          <path d="M10,280 Q40,150 10,20" strokeWidth="1.5" />
          {/* Left-facing leaves */}
          <path d="M15,220 Q5,200 15,183 Q25,200 15,220 Z" fill="currentColor" fillOpacity="0.1" />
          <path d="M23,160 Q13,140 23,123 Q33,140 23,160 Z" fill="currentColor" fillOpacity="0.1" />
          <path d="M18,90 Q8,70 18,53 Q28,70 18,90 Z" fill="currentColor" fillOpacity="0.1" />
          {/* Right-facing leaves */}
          <path d="M11,250 Q28,240 25,220 Q12,230 11,250 Z" fill="currentColor" fillOpacity="0.1" />
          <path d="M20,190 Q37,180 34,160 Q21,170 20,190 Z" fill="currentColor" fillOpacity="0.1" />
          <path d="M22,120 Q39,110 36,90 Q23,100 22,120 Z" fill="currentColor" fillOpacity="0.1" />
        </svg>
      </div>

      <div className="absolute right-4 top-1/2 -translate-y-1/2 w-48 h-full hidden lg:flex items-center justify-end opacity-70 pointer-events-none select-none z-15">
        <svg className="w-full h-5/6 text-[#c2944b]" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 100 300">
          <path d="M90,280 Q60,150 90,20" strokeWidth="1.5" />
          {/* Right-facing leaves */}
          <path d="M85,220 Q95,200 85,183 Q75,200 85,220 Z" fill="currentColor" fillOpacity="0.1" />
          <path d="M77,160 Q87,140 77,123 Q67,140 77,160 Z" fill="currentColor" fillOpacity="0.1" />
          <path d="M82,90 Q92,70 82,53 Q72,70 82,90 Z" fill="currentColor" fillOpacity="0.1" />
          {/* Left-facing leaves */}
          <path d="M89,250 Q72,240 75,220 Q88,230 89,250 Z" fill="currentColor" fillOpacity="0.1" />
          <path d="M80,190 Q63,180 66,160 Q79,170 80,190 Z" fill="currentColor" fillOpacity="0.1" />
          <path d="M78,120 Q61,110 64,90 Q77,100 78,120 Z" fill="currentColor" fillOpacity="0.1" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10 flex flex-col items-center gap-4 sm:gap-5">
        
        {/* Sparkles accent marker */}
        <div className="flex items-center gap-1 text-[#c2944b]">
          <span>✦</span>
          <span className="w-4 h-[1px] bg-[#c2944b]" />
          <span>✦</span>
        </div>

        {/* Beautiful display title from image */}
        <h3 className="font-serif text-2xl sm:text-3xl md:text-[2.25rem] text-[#faf6f0] tracking-tight leading-tight font-medium max-w-3xl">
          Dentro tuyo existen más posibilidades <br />
          de las que hoy alcanzás a ver.
        </h3>

        {/* Emotional paragraph with light gold text and beautiful line height */}
        <p className="text-xs sm:text-sm font-light text-rose-100/80 leading-relaxed max-w-2xl">
          Cuando dejás de vivir en automático y comenzás a alinearte internamente, <br />
          cambia tu manera de sentir, elegir, vincularte y crear realidad.
        </p>

        {/* True changes highlight */}
        <div className="flex flex-col items-center gap-1">
          <p className="font-serif uppercase tracking-[0.25em] text-[#c2944b] text-[10px] font-bold mt-1">
            Ahí empieza el verdadero cambio.
          </p>
          
          {/* Gorgeous handwritten script font from image */}
          <p className="font-script text-3xl sm:text-4xl text-amber-100 italic mt-1.5 tracking-wide">
            ¿Te animás a descubrir cómo?
          </p>
        </div>

        {/* Crescent moon icon centering below */}
        <div className="mt-4 sm:mt-5 flex flex-col items-center gap-1.5">
          <div className="relative w-10 h-10 flex items-center justify-center">
            {/* Soft background line art */}
            <div className="absolute inset-0 border border-amber-300/30 rounded-full" />
            
            {/* Golden moon detailed outline */}
            <svg className="w-5 h-5 text-[#c2944b]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.3 22h-.1c-5.5 0-10-4.5-10-10C2.2 6.6 6.6 2.1 12 2c.3 0 .6.2.7.5s-.1.6-.4.8c-3.1 1.7-4.6 5.3-3.6 8.7 1 3.5 4.3 5.8 7.9 5.4.3 0 .6.2.7.5.1.3-.1.6-.4.8-1.5.8-3.1 1.3-4.6 1.3zm-6.1-10c0 3.9 3.1 7.2 7 7.2 1 0 2-.2 2.9-.7-2.9-1.2-4.7-4-4.8-7.2s1.5-6.2 4.4-7.6c-5-.4-9.5 3.1-9.5 8.3z" />
              {/* Star inside moon */}
              <polygon points="15,6 16,8 18,8 16.5,10 17,12 15,11 13,12 13.5,10 12,8 14,8" fill="currentColor" />
            </svg>
          </div>
          <span className="text-[8px] uppercase tracking-[0.4em] text-[#c2944b] font-medium block">
            Camino Wayra
          </span>
        </div>

      </div>
    </section>
  );
}
