import React, { useState } from 'react';
import { MessageCircle, MapPin, Clock, Calendar, Check } from 'lucide-react';

interface ContactFormProps {
  createWhatsAppLink: (text: string) => string;
}

export function ContactForm({ createWhatsAppLink }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Consulta General',
    message: ''
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      // Trigger preset WhatsApp on submit if fields are filled
      const textPreset = `Hola Laura Barros! Me llamo ${formData.name}. Deseo ponerme en contacto contigo para el servicio de: ${formData.service}. Mensaje adicional: ${formData.message}`;
      window.open(createWhatsAppLink(textPreset), '_blank');
      setSent(false);
    }, 1500);
  };

  return (
    <section id="contacto" className="py-20 bg-white border-t border-rose-100/40 text-left relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left info column */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <span className="text-xs uppercase font-bold tracking-[0.2em] text-[#b4843b]">Iniciemos el Diálogo</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#351d2a] font-medium tracking-tight">
              ¿Listo para Agendar un Encuentro?
            </h2>
            
            <p className="text-slate-500 font-light text-sm leading-relaxed">
              No dudes en consultarnos cualquier duda o solicitar tu espacio terapéutico inicial de orientación. Te responderé de manera atenta y cuidada.
            </p>

            <div className="flex flex-col gap-5 mt-6 border-t border-rose-100 pt-6">
              
              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-[#b4843b]" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block">Ubicación Física</span>
                  <p className="text-xs text-slate-700 leading-snug mt-0.5">
                    Palermo Soho, Ciudad Autónoma de Buenos Aires, Argentina (Y soporte global online).
                  </p>
                </div>
              </div>

              {/* Time */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#fdf2f2] border border-rose-150 flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4 text-rose-700" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block">Horarios de Cobijo</span>
                  <p className="text-xs text-slate-700 leading-snug mt-0.5">
                    Lunes a Viernes de 09:00 a 19:30 hs. Sábados sugeridos para meriendas ceremoniales.
                  </p>
                </div>
              </div>

              {/* Direct Booking Phone */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-4 h-4 text-emerald-700 fill-current" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block">Llamada o Mensaje Directo</span>
                  <p className="text-xs text-slate-700 leading-snug mt-0.5 font-bold">
                    +54 9 11 2896-2181
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right inquiry form */}
          <div className="lg:col-span-7 bg-[#faf8f5] border border-gold-border rounded-[2.5rem] p-8 shadow-xs relative">
            <h3 className="font-serif text-xl text-[#351d2a] font-medium tracking-tight mb-6">
              Enviar Mensaje y Reservar Espacio
            </h3>

            {sent ? (
              <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-100 flex flex-col items-center text-center gap-2">
                <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center mb-2">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="font-serif text-lg font-bold text-emerald-800">¡Conexión Iniciada!</h4>
                <p className="text-xs text-emerald-600 leading-relaxed max-w-sm">
                  Estamos abriendo WhatsApp para canalizar tu solicitud directa al número personal de Laura Barros. ¡Aguardá por favor!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] uppercase font-bold tracking-wider text-[#533647] block mb-1.5">Tu Nombre</label>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Ej. Sofía Fernández"
                      className="w-full bg-white border border-[#e5d5b7] rounded-xl px-4 py-3 text-xs focus:ring-1 focus:ring-[#b4843b] focus:outline-none placeholder-slate-400 text-slate-800"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] uppercase font-bold tracking-wider text-[#533647] block mb-1.5">Tu Correo Electrónico</label>
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Ej. sofia@gmail.com"
                      className="w-full bg-white border border-[#e5d5b7] rounded-xl px-4 py-3 text-xs focus:ring-1 focus:ring-[#b4843b] focus:outline-none placeholder-slate-400 text-slate-800"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[10px] uppercase font-bold tracking-wider text-[#533647] block mb-1.5">Espacio o Consulta Terapéutica</label>
                  <select 
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full bg-white border border-[#e5d5b7] rounded-xl px-4 py-3 text-xs focus:ring-1 focus:ring-[#b4843b] focus:outline-none text-slate-800"
                  >
                    <option value="Consulta General">Consulta General / Orientación</option>
                    <option value="Acompañamiento Individual">Acompañamiento Individual de Calma</option>
                    <option value="Mentoría Grupal">Círculo o Mentoría Grupal</option>
                    <option value="Merienda Ritual Wayra">Merienda Ritual Presencial</option>
                  </select>
                </div>

                <div>
                  <label className="text-[10px] uppercase font-bold tracking-wider text-[#533647] block mb-1.5">Contame brevemente tu intención</label>
                  <textarea 
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Siento que necesito desacelerar..."
                    className="w-full bg-white border border-[#e5d5b7] rounded-xl p-4 text-xs focus:ring-1 focus:ring-[#b4843b] focus:outline-none placeholder-slate-400 text-slate-800 resize-none leading-relaxed"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#351d2a] hover:bg-[#533647] text-white text-xs tracking-widest uppercase font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-transform cursor-pointer shadow-sm mt-2"
                >
                  <MessageCircle className="w-4 h-4 fill-current text-white/90" />
                  <span>Enviar y Conectar por WhatsApp</span>
                </button>

              </form>
            )}

          </div>

        </div>
      </div>

    </section>
  );
}
