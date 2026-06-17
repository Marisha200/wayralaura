import React, { useState, useEffect } from 'react';
import { Download, Check, Play, Pause } from 'lucide-react';
import { motion } from 'motion/react';
import { FreeResource } from '../types';

interface ResourcesProps {
  resources: FreeResource[];
  downloadingResourceId: string | null;
  downloadProgress: number;
  downloadSuccessId: string | null;
  handleDownload: (res: FreeResource) => void;
}

export function Resources({
  resources,
  downloadingResourceId,
  downloadProgress,
  downloadSuccessId,
  handleDownload
}: ResourcesProps) {
  // Visual Audio Meditation / Breathing states
  const [breathPhase, setBreathPhase] = useState<'Inhala' | 'Sostén' | 'Exhala'>('Inhala');
  const [breathSec, setBreathSec] = useState<number>(4);
  const [isBreathingOngoing, setIsBreathingOngoing] = useState<boolean>(false);

  // Breathing simulation 4-7-8 timer
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isBreathingOngoing) {
      timer = setInterval(() => {
        setBreathSec((prev) => {
          if (prev <= 1) {
            if (breathPhase === 'Inhala') {
              setBreathPhase('Sostén');
              return 7;
            } else if (breathPhase === 'Sostén') {
              setBreathPhase('Exhala');
              return 8;
            } else {
              setBreathPhase('Inhala');
              return 4;
            }
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      setBreathPhase('Inhala');
      setBreathSec(4);
    }
    return () => clearInterval(timer);
  }, [isBreathingOngoing, breathPhase]);

  // Helper helper to resolve nice emoji icon & display format label
  const getResourceMeta = (type: string) => {
    switch (type) {
      case 'pdf':
        return { emoji: '📚', label: 'Guía PDF' };
      case 'audio':
        return { emoji: '🎧', label: 'Audio de Calma' };
      case 'guia':
        return { emoji: '📖', label: 'Documento Guía' };
      case 'ejercicio':
        return { emoji: '🌱', label: 'Ejercicio Sutil' };
      default:
        return { emoji: '✨', label: 'Recurso' };
    }
  };

  return (
    <section id="recursos" className="py-20 bg-pastel-rose text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header content section */}
        <div className="text-center max-w-2xl mx-auto flex flex-col gap-4 mb-16">
          <span className="text-xs uppercase font-bold tracking-[0.2em] text-[#b4843b]">Recursos Sin Cargo</span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#351d2a] font-medium tracking-tight">
            Talleres y Herramientas Gratuitas de Cultivo Interior
          </h2>
          <p className="text-slate-500 font-light text-sm max-w-lg mx-auto">
            Descargate guías en formato PDF e intégrate en meditaciones guiadas breves para volver a sintonizar con tu respiración natural.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Auditive Breath simulator Coach */}
          <div className="lg:col-span-5 bg-white p-8 rounded-[2.5rem] border border-rose-100 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-rose-50 rounded-full blur-2xl -z-10" />

            <div className="flex items-center gap-3 border-b border-rose-50 pb-5 mb-6">
              <span className="text-2xl">🎧</span>
              <div className="text-left">
                <h3 className="font-serif text-lg text-[#351d2a] font-medium">Respirador Guided Wayra</h3>
                <span className="text-[9px] uppercase tracking-wider font-bold text-[#b4843b] block mt-0.5">Entrenamiento de calma 4-7-8</span>
              </div>
            </div>

            {/* Breathing cycle visuals and progress */}
            <div className="bg-[#faf8f5] p-6 rounded-2xl border border-gold-border flex flex-col items-center gap-6 relative">
              
              {/* Expanding Visual Ball */}
              <div className="relative w-44 h-44 flex items-center justify-center">
                <motion.div 
                  animate={{
                    scale: !isBreathingOngoing ? 1.0 : (breathPhase === 'Inhala' ? 1.55 : (breathPhase === 'Sostén' ? 1.55 : 0.95)),
                    backgroundColor: !isBreathingOngoing ? '#faf8f5' : (breathPhase === 'Inhala' ? 'rgba(251, 113, 133, 0.12)' : (breathPhase === 'Sostén' ? 'rgba(217, 119, 6, 0.08)' : 'rgba(52, 211, 153, 0.12)'))
                  }}
                  transition={{ 
                    duration: !isBreathingOngoing ? 1.0 : (breathPhase === 'Inhala' ? 4 : (breathPhase === 'Sostén' ? 7 : 8)), 
                    ease: "easeInOut" 
                  }}
                  className="absolute inset-0 rounded-full border border-[#e5d5b7]/50"
                />

                {/* Core breathing state labels */}
                <div className="z-10 flex flex-col items-center text-center gap-1">
                  <span className="text-[10px] tracking-widest text-[#b4843b] uppercase font-bold block">
                    {!isBreathingOngoing ? 'Listo' : breathPhase}
                  </span>
                  <span className="font-serif text-4xl text-[#351d2a] font-semibold block">
                    {!isBreathingOngoing ? '---' : `${breathSec}s`}
                  </span>
                  <span className="text-[9px] text-slate-400 max-w-[120px] leading-snug">
                    {!isBreathingOngoing ? "Presioná play para iniciar tu ciclo de calma." : (breathPhase === 'Inhala' ? 'Toma aire despacio por la nariz' : (breathPhase === 'Sostén' ? 'Sostén el aire libre' : 'Suelta con un suspiro largo'))}
                  </span>
                </div>
              </div>

              {/* Action trigger button */}
              <button
                onClick={() => setIsBreathingOngoing(!isBreathingOngoing)}
                className={`py-3 px-6 rounded-full flex items-center gap-2 text-xs font-bold tracking-wider uppercase transition-all shadow-xs ${
                  isBreathingOngoing 
                    ? 'bg-[#351d2a] text-white' 
                    : 'bg-[#b4843b] text-white hover:bg-[#c2944b]'
                }`}
              >
                {isBreathingOngoing ? (
                  <>
                    <Pause className="w-4 h-4 fill-current" />
                    <span>Pausar ciclo</span>
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 fill-current" />
                    <span>Iniciar respirador</span>
                  </>
                )}
              </button>

            </div>

            <p className="text-[11px] text-slate-400 font-light leading-relaxed mt-4 text-center">
              Alineá tu respiración por un ciclo continuo de 2 a 3 minutos para notar tu sistema nervioso desacelerándose por completo.
            </p>
          </div>

          {/* Right Column: Downloadable PDF Toolkits */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <h3 className="font-serif text-2xl text-[#351d2a] font-medium tracking-tight mb-2">Cuadernos de Trabajo y Bitácoras</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {resources.map((item) => {
                const isDownloading = downloadingResourceId === item.id;
                const isSuccess = downloadSuccessId === item.id;
                const { emoji, label } = getResourceMeta(item.type);

                return (
                  <div 
                    key={item.id}
                    className="bg-white rounded-3xl p-6 border border-rose-100/65 flex flex-col justify-between shadow-xs shadow-rose-100/30"
                  >
                    <div className="flex flex-col gap-3">
                      <span className="text-3xl text-left">{emoji}</span>
                      <h4 className="font-serif text-lg text-[#351d2a] font-medium tracking-tight">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-500 font-light leading-relaxed mb-4">
                        {item.description}
                      </p>
                    </div>

                    <div className="border-t border-rose-50 pt-5 flex flex-col gap-2">
                      <div className="flex items-center justify-between text-[11px] text-slate-400 block pb-1">
                        <span>Formato: {label}</span>
                        {item.duration && <span className="text-[#b4843b] font-semibold">Duración: {item.duration}</span>}
                      </div>

                      {/* Download status handler button */}
                      <button
                        onClick={() => handleDownload(item)}
                        disabled={isDownloading}
                        className={`w-full py-2.5 rounded-xl font-bold text-xs tracking-wider uppercase transition-all flex items-center justify-center gap-2 ${
                          isSuccess 
                            ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' 
                            : 'bg-[#faf8f5] hover:bg-rose-50/40 text-slate-700 border border-[#e5d5b7]'
                        }`}
                      >
                        {isDownloading ? (
                          <div className="flex flex-col items-center w-full">
                            <span className="text-[10px] uppercase tracking-wider mb-1 block animate-pulse">Abriendo recurso... {downloadProgress}%</span>
                            <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                              <div style={{ width: `${downloadProgress}%` }} className="bg-[#b4843b] h-full transition-all duration-300" />
                            </div>
                          </div>
                        ) : isSuccess ? (
                          <>
                            <Check className="w-4 h-4 text-emerald-600" />
                            <span>¡Listo para ver!</span>
                          </>
                        ) : (
                          <>
                            <Download className="w-4 h-4 text-[#b4843b]" />
                            <span>Obtener gratis</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
