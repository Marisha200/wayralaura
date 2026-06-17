import React, { useState } from 'react';
import { MessageCircle, Menu, X, ChevronDown } from 'lucide-react';

interface SubMenuItem {
  label: string;
  routeKey: string;
}

interface MenuItem {
  label: string;
  href?: string;
  routeKey?: string;
  subItems?: SubMenuItem[];
}

interface HeaderProps {
  createWhatsAppLink: (text: string) => string;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export function Header({ createWhatsAppLink, activeTab, setActiveTab }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  const menuItems: MenuItem[] = [
    { label: 'INICIO', routeKey: 'INICIO' },
    { 
      label: 'QUIÉN SOY', 
      subItems: [
        { label: 'Sobre Mí', routeKey: 'SOBRE_MI' },
        { label: 'Mi Historia', routeKey: 'MI_HISTORIA' },
        { label: 'Mi Enfoque', routeKey: 'MI_ENFOQUE' },
        { label: 'Mi forma de acompañar', routeKey: 'FORMA_ACOMPANAR' },
        { label: 'Cosmovisión', routeKey: 'COSMOVISION' }
      ]
    },
    { 
      label: 'SERVICIOS', 
      subItems: [
        { label: 'Acompañamiento de Calma', routeKey: 'SERVICIOS' },
        { label: 'Merienda Ritual Wayra', routeKey: 'SERVICIOS' },
        { label: 'Círculo / Mentorías', routeKey: 'SERVICIOS' }
      ]
    },
    { 
      label: 'HERRAMIENTAS', 
      subItems: [
        { label: 'Talleres y Recursos', routeKey: 'RECURSOS' },
        { label: 'Bitácora / Blog', routeKey: 'BLOG' }
      ]
    },
    { label: 'TESTIMONIOS', routeKey: 'TESTIMONIOS' }
  ];

  const handleNavClick = (routeKey: string, e: React.MouseEvent) => {
    e.preventDefault();
    setActiveTab(routeKey);
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  const toggleMobileExpanded = (label: string) => {
    setMobileExpanded(mobileExpanded === label ? null : label);
  };

  // Helper to determine if a main dropdown has active subitem selected
  const isParentActive = (item: MenuItem) => {
    if (activeTab === item.routeKey) return true;
    if (item.subItems) {
      return item.subItems.some(sub => sub.routeKey === activeTab);
    }
    return false;
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-rose-100/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-24 flex items-center justify-between">
        
        {/* Brand/Logo */}
        <a href="#hero" className="flex items-center gap-3 group" onClick={(e) => handleNavClick('INICIO', e)}>
          <div className="relative w-12 h-12 flex items-center justify-center">
            {/* Sacred geometry circular sun line container */}
            <div className="absolute inset-0 border border-amber-300 rounded-full animate-[spin_100s_linear_infinite]" />
            <div className="absolute inset-1.5 border border-[#c2944b]/40 rounded-full" />
            <div className="w-8 h-8 rounded-full bg-amber-50/40 flex items-center justify-center">
              <svg className="w-5 h-5 text-gold-accent" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="5" />
                {[...Array(12)].map((_, i) => (
                  <line
                    key={i}
                    x1="12"
                    y1="12"
                    x2={12 + 10 * Math.cos((i * 30 * Math.PI) / 180)}
                    y2={12 + 10 * Math.sin((i * 30 * Math.PI) / 180)}
                    stroke="currentColor"
                    strokeWidth="0.75"
                  />
                ))}
              </svg>
            </div>
          </div>
          <div className="text-left">
            <span className="font-serif text-2xl tracking-[0.1em] text-slate-900 font-medium leading-none block">
              Camino Wayra
            </span>
            <span className="text-[10px] tracking-[0.25em] text-[#b4843b] uppercase font-bold mt-1 block">
              POR LAURA BARROS
            </span>
          </div>
        </a>

        {/* Desktop Nav Actions */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-xs font-semibold tracking-widest text-[#533647]/95">
          {menuItems.map((item) => {
            const isSelected = isParentActive(item);
            const hasSubitems = !!item.subItems;

            if (hasSubitems) {
              return (
                <div
                  key={item.label}
                  className="relative py-2 cursor-pointer group"
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    className={`flex items-center gap-1 transition-all duration-300 uppercase py-1 ${
                      openDropdown === item.label || isSelected ? 'text-[#b4843b] font-bold' : 'hover:text-[#b4843b]'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronDown className="w-3.5 h-3.5 opacity-60 transition-transform group-hover:rotate-180" />
                  </button>

                  {/* Dropdown Box Menu */}
                  {openDropdown === item.label && (
                    <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-56 z-50">
                      <div className="bg-white border border-[#e5d5b7]/60 rounded-2xl shadow-xl p-3 flex flex-col gap-1 text-left animate-fade-in-up">
                        {item.subItems?.map((sub) => {
                          const isSubSelected = activeTab === sub.routeKey;
                          return (
                            <a
                              key={sub.label}
                              href="#"
                              onClick={(e) => handleNavClick(sub.routeKey, e)}
                              className={`px-4 py-2.5 rounded-xl transition-all duration-300 text-xs tracking-widest uppercase block ${
                                isSubSelected 
                                  ? 'bg-[#b4843b]/10 text-[#b4843b] font-semibold' 
                                  : 'hover:bg-rose-50/50 hover:text-[#b4843b] text-[#533647]/95 font-semibold'
                              }`}
                            >
                              {sub.label}
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <a
                key={item.label}
                href="#"
                onClick={(e) => handleNavClick(item.routeKey!, e)}
                className={`transition-all duration-300 relative py-2 uppercase ${
                  isSelected ? 'text-[#b4843b] font-bold' : 'hover:text-[#b4843b]'
                }`}
              >
                {item.label}
                {isSelected && (
                  <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#b4843b]" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right WhatsApp Button */}
        <div className="hidden sm:flex items-center">
          <a
            id="whatsapp-header-nav-btn"
            href={createWhatsAppLink("Hola Laura! Vengo de tu web Camino Wayra y me gustaría realizar una consulta sobre tus espacios terapéuticos.")}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#44955a] hover:bg-[#347847] text-white font-medium text-xs tracking-wider px-5 py-3 rounded-full shadow-sm transition-transform hover:-translate-y-0.5 uppercase"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Contacto</span>
          </a>
        </div>

        {/* Mobile Toggle Menu */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 rounded-full border border-rose-100/80 text-slate-700 hover:bg-rose-50/40"
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

      </div>

      {/* Mobile Menu Backdrop & Panel */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-rose-100 py-4 px-6 flex flex-col gap-2.5 shadow-inner max-h-[80vh] overflow-y-auto">
          {menuItems.map((item) => {
            const isSelected = isParentActive(item);
            const hasSubitems = !!item.subItems;

            if (hasSubitems) {
              const isExpanded = mobileExpanded === item.label;
              return (
                <div key={item.label} className="border-b border-rose-50/50 py-1 flex flex-col">
                  <button
                    onClick={() => toggleMobileExpanded(item.label)}
                    className="w-full flex items-center justify-between text-xs font-semibold tracking-wider text-slate-700 py-2.5 uppercase"
                  >
                    <span className={isSelected ? 'text-[#b4843b]' : ''}>{item.label}</span>
                    <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} />
                  </button>

                  {/* Mobile Dropdown Expanded */}
                  {isExpanded && (
                    <div className="bg-rose-50/30 pl-4 pr-2 py-1 rounded-xl flex flex-col gap-1.5 mb-2 mt-1">
                      {item.subItems?.map((sub) => {
                        const isSubSelected = activeTab === sub.routeKey;
                          return (
                            <a
                              key={sub.label}
                              href="#"
                              onClick={(e) => handleNavClick(sub.routeKey, e)}
                              className={`text-xs py-2 font-semibold tracking-widest uppercase block ${
                                isSubSelected ? 'text-[#b4843b]' : 'text-[#533647]/90 hover:text-[#b4843b]'
                              }`}
                            >
                              {sub.label}
                            </a>
                          );
                      })}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <a
                key={item.label}
                href="#"
                onClick={(e) => handleNavClick(item.routeKey!, e)}
                className={`text-xs font-semibold tracking-wider py-2.5 border-b border-rose-50/50 uppercase ${
                  isSelected ? 'text-[#b4843b] font-bold' : 'text-slate-600'
                }`}
              >
                {item.label}
              </a>
            );
          })}
          
          <a
            href={createWhatsAppLink("Hola Laura! Vengo de tu web y me gustaría reservar un espacio.")}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-[#44955a] text-white text-xs py-3 rounded-full mt-3 font-bold tracking-widest uppercase"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>WHATSAPP DIRECTO</span>
          </a>
        </div>
      )}
    </header>
  );
}
