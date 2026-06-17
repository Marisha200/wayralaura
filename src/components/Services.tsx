import React, { useState } from 'react';
import { Clock, Check, MessageCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Service } from '../types';

interface ServicesProps {
  services: Service[];
  createWhatsAppLink: (text: string) => string;
}

export function Services({ services, createWhatsAppLink }: ServicesProps) {
  const [activeTab, setActiveTab] = useState<'all' | 'grupal' | 'individual' | 'presencial'>('all');
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const filteredServices = services.filter(s => activeTab === 'all' || s.modality === activeTab);

  return (
    <section id="servicios" className="py-20 bg-[#fdfbfa] text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Text */}
        <div className="text-center max-w-2xl mx-auto flex flex-col gap-4 mb-16">
          <span className="text-xs uppercase font-bold tracking-[0.2em] text-[#b4843b]">Espacios Ofrecidos para vos</span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#351d2a] font-medium tracking-tight">
            Nuestros Espacios y Servicios de Acompañamiento
          </h2>
          <p className="text-slate-500 font-light text-sm max-w-lg mx-auto leading-relaxed">
            Propuestas diseñadas con amor y rigurosidad holística para encontrar paz mental, habitar el cuerpo y reconectar con la sabiduría interna.
          </p>

          {/* Filter Tabs matching the custom aesthetic of the image */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6 bg-white border border-[#e5d5b7]/55 p-1 rounded-full w-fit mx-auto shadow-sm">
            {[
              { id: 'all', label: 'Todos' },
              { id: 'grupal', label: 'Grupales' },
              { id: 'individual', label: 'Individuales' },
              { id: 'presencial', label: 'Presencial / Especial' },
            ].map((tab) => (
              <button 
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider transition-all ${
                  activeTab === tab.id 
                    ? 'bg-[#b4843b] text-white shadow-xs' 
                    : 'text-slate-600 hover:bg-rose-50/30'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {filteredServices.map((service) => {
            const isPresencial = service.modality === 'presencial';
            
            return (
              <motion.div 
                layout
                key={service.id}
                className="bg-white rounded-[2rem] border border-rose-100/60 p-8 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow duration-300 relative overflow-hidden"
              >
                {/* Top header within card */}
                <div className="flex flex-col gap-4 text-left">
                  <div className="flex items-center justify-between">
                    <span className={`px-3 py-1 rounded-full text-[10px] tracking-wider font-bold uppercase ${
                      service.modality === 'grupal' ? 'bg-indigo-55/40 text-indigo-800' :
                      service.modality === 'individual' ? 'bg-rose-55/40 text-rose-800' :
                      'bg-amber-55/40 text-amber-800'
                    }`}>
                      {service.modality === 'grupal' ? 'Propuesta Grupal' :
                       service.modality === 'individual' ? 'Terapia Individual' : 'Ceremonia Especial'}
                    </span>
                    <span className="text-xs text-slate-400 font-light flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#b4843b]" />
                      {service.duration}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl text-[#351d2a] font-medium tracking-tight">
                    {service.title}
                  </h3>

                  <p className="text-slate-500 font-light text-sm leading-relaxed min-h-[4.5rem]">
                    {service.description}
                  </p>

                  {/* Highlights Bullet block */}
                  <div className="flex flex-col gap-2.5 mt-2 bg-rose-50/20 p-4 rounded-xl border border-rose-100/30">
                    <span className="text-[10px] font-bold text-[#533647] uppercase tracking-wider block">Qué incluye el encuentro:</span>
                    {service.details.slice(0, 3).map((detail, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-600 font-light">
                        <Check className="w-3.5 h-3.5 text-[#b4843b] shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </div>
                    ))}
                    {service.details.length > 3 && (
                      <button
                        onClick={() => setSelectedService(service)}
                        className="text-[10px] text-[#b4843b] font-bold hover:underline text-left mt-1 uppercase tracking-wide block"
                      >
                        + Ver detalles completos
                      </button>
                    )}
                  </div>
                </div>

                {/* Pricing & Send inquiry action */}
                <div className="mt-8 pt-6 border-t border-rose-100/40 flex items-center justify-between gap-3">
                  <div>
                    <span className="text-[9px] uppercase font-bold tracking-wider text-slate-400 block">Arancel sugerido</span>
                    <span className="text-sm font-semibold text-[#533647]">{service.price}</span>
                  </div>

                  <a 
                    href={createWhatsAppLink(`Hola Laura! Quiero consultar y anotarme para el servicio: ${service.title}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#44955a] hover:bg-[#347847] text-white text-[11px] font-bold tracking-wider px-5 py-3 rounded-full flex items-center gap-1.5 uppercase transition-transform hover:-translate-y-0.5"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-current" />
                    <span>Reservar</span>
                  </a>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Detailed Modal Overlay for full service viewing */}
        <AnimatePresence>
          {selectedService && (
            <div className="fixed inset-0 bg-slate-950/40 backdrop-blur-xs z-50 flex items-center justify-center p-4">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-white rounded-3xl p-8 max-w-lg w-full relative border border-[#e5d5b7] shadow-xl text-left"
              >
                <button 
                  onClick={() => setSelectedService(null)}
                  className="absolute top-4 right-4 p-2 rounded-full hover:bg-rose-50 text-slate-500"
                >
                  <X className="w-5 h-5" />
                </button>

                <span className="text-[10px] tracking-widest font-bold uppercase text-[#b4843b] block mb-2">Detalles Completos</span>
                <h3 className="font-serif text-2xl text-[#351d2a] font-medium tracking-tight mb-4">{selectedService.title}</h3>
                
                <p className="text-slate-500 font-light text-sm mb-6 leading-relaxed">{selectedService.description}</p>
                
                <div className="flex flex-col gap-3 mb-8 bg-[#faf8f5] p-5 rounded-xl border border-[#e5d5b7]/50">
                  <span className="text-xs uppercase font-bold tracking-wider text-slate-700 block">Programa del Encuentro:</span>
                  {selectedService.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-600 font-light">
                      <Check className="w-4 h-4 text-[#b4843b] shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between gap-4 border-t border-rose-100 pt-6">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block">Valor total</span>
                    <span className="text-lg font-bold text-[#351d2a]">{selectedService.price}</span>
                  </div>
                  
                  <a 
                    href={createWhatsAppLink(`Hola Laura! Deseo reservar mi lugar en el servicio: ${selectedService.title}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#44955a] hover:bg-[#347847] text-white font-bold text-xs tracking-wider px-6 py-3.5 rounded-full flex items-center gap-2 uppercase"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Inscribirse vía WhatsApp</span>
                  </a>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
