import React, { useState } from 'react';
import { Microscope, Printer, Menu, X, BookOpen, Check } from 'lucide-react';

interface HeaderProps {
  currentSection: number;
  onNavigate: (section: number) => void;
  completedSections: number[];
  onOpenPrint: () => void;
  onOpenNotes?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentSection,
  onNavigate,
  completedSections,
  onOpenPrint,
  onOpenNotes
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 1, label: 'Inicio', title: 'Inicio' },
    { id: 2, label: 'Microscopio', title: 'Conoce el Microscopio' },
    { id: 3, label: 'Protocolo', title: 'Protocolo de Uso' },
    { id: 4, label: 'Células y Tejidos', title: 'Células y Tejidos' },
    { id: 5, label: 'Laboratorio Virtual', title: 'Laboratorio Virtual' },
    { id: 6, label: 'Guía y Test', title: 'Guía A4 y Evaluación' },
    { id: 7, label: 'Glosario', title: 'Glosario Microscópico' }
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3 h-14 sm:h-15">
          {/* Identidad única y elegante: UNACH + Unidad Educativa Guano */}
          <div
            onClick={() => onNavigate(1)}
            className="flex items-center gap-2 sm:gap-2.5 cursor-pointer select-none shrink-0"
            title="Ir al inicio"
          >
            <span className="px-2 py-0.5 text-xs font-black tracking-wider text-white bg-[#173B70] rounded shadow-2xs">
              UNACH
            </span>
            <div className="h-4 w-[1px] bg-slate-300 hidden sm:block" />
            <div className="flex items-center gap-1.5">
              <span className="text-xs sm:text-sm font-bold text-[#173B70] tracking-tight">
                Unidad Educativa Guano
              </span>
              <span className="hidden md:inline text-xs text-slate-500 font-medium">
                · Ciencias Naturales 8.°
              </span>
            </div>
          </div>

          {/* Menú de Navegación en Computadora */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = currentSection === item.id;
              const isCompleted = completedSections.includes(item.id);

              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`px-2.5 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap flex items-center gap-1.5 cursor-pointer ${
                    isActive
                      ? 'bg-[#173B70]/10 text-[#173B70] font-semibold'
                      : 'text-slate-600 hover:text-[#173B70] hover:bg-slate-100/70'
                  }`}
                >
                  <span>{item.label}</span>
                  {isCompleted && !isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#16A6A0]" title="Módulo completado" />
                  )}
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#173B70]" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Acciones Rápidas del Encabezado */}
          <div className="flex items-center gap-2 shrink-0">
            {/* Cuaderno Digital de Apuntes */}
            {onOpenNotes && (
              <button
                onClick={onOpenNotes}
                className="px-2.5 sm:px-3 py-1.5 text-xs font-medium text-slate-700 bg-slate-50 hover:bg-slate-100 hover:text-[#173B70] border border-slate-200 rounded-md transition-colors flex items-center gap-1.5 whitespace-nowrap cursor-pointer shadow-2xs"
                title="Abrir cuaderno digital de apuntes del laboratorio"
              >
                <BookOpen className="w-3.5 h-3.5 text-[#16A6A0]" />
                <span className="hidden sm:inline">Mis Apuntes</span>
              </button>
            )}

            {/* Imprimir Hoja A4 */}
            <button
              onClick={onOpenPrint}
              className="px-3 py-1.5 text-xs font-semibold text-white bg-[#173B70] hover:bg-[#122e56] rounded-md transition-colors flex items-center gap-1.5 whitespace-nowrap shadow-xs cursor-pointer"
              title="Descargar o imprimir la guía A4 oficial"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Guía A4</span>
            </button>

            {/* Disparador de Menú en Móvil */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-700 hover:text-[#173B70] rounded-md hover:bg-slate-100 focus:outline-hidden focus:ring-2 focus:ring-[#16A6A0]"
              aria-label="Abrir menú de navegación"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Menú desplegable para Dispositivos Móviles */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-3 border-t border-slate-200/90 space-y-1">
            <div className="px-2 py-1 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
              Módulos Educativos
            </div>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full text-left px-3 py-2 text-xs font-medium rounded-md flex items-center justify-between min-h-[44px] transition-colors ${
                  currentSection === item.id
                    ? 'bg-[#173B70] text-white font-semibold'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[11px] opacity-70">{item.id}.</span>
                  <span>{item.title}</span>
                </div>
                {completedSections.includes(item.id) && (
                  <span className={`text-[10px] font-bold uppercase flex items-center gap-1 ${
                    currentSection === item.id ? 'text-teal-200' : 'text-[#16A6A0]'
                  }`}>
                    <Check className="w-3 h-3" />
                    <span>Listo</span>
                  </span>
                )}
              </button>
            ))}

            {/* Accesos rápidos en móvil */}
            <div className="pt-2 border-t border-slate-100 flex gap-2 px-1">
              {onOpenNotes && (
                <button
                  onClick={() => {
                    onOpenNotes();
                    setMobileMenuOpen(false);
                  }}
                  className="flex-1 py-2 px-3 text-xs font-medium text-slate-700 bg-slate-100 rounded-md flex items-center justify-center gap-1.5"
                >
                  <BookOpen className="w-3.5 h-3.5 text-[#16A6A0]" />
                  <span>Mis Apuntes</span>
                </button>
              )}
              <button
                onClick={() => {
                  onOpenPrint();
                  setMobileMenuOpen(false);
                }}
                className="flex-1 py-2 px-3 text-xs font-medium text-white bg-[#173B70] rounded-md flex items-center justify-center gap-1.5"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Guía A4</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
