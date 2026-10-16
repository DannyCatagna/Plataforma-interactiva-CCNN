import React, { useState } from 'react';
import { Microscope, Printer, Menu, X, BookOpen } from 'lucide-react';

interface HeaderProps {
  currentSection: number;
  onNavigate: (section: number) => void;
  completedSections: number[];
  onOpenPrint: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentSection,
  onNavigate,
  completedSections,
  onOpenPrint
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 1, label: 'Inicio', title: 'Inicio' },
    { id: 2, label: 'El Microscopio', title: 'Conoce el Microscopio' },
    { id: 3, label: 'Protocolo de Uso', title: 'Uso y Seguridad' },
    { id: 4, label: 'Células y Tejidos', title: 'Células y Tejidos' },
    { id: 5, label: 'Laboratorio Virtual', title: 'Laboratorio Virtual' },
    { id: 6, label: 'Guía y Evaluación', title: 'Hoja A4 y Evaluación' }
  ];

  const progressPercent = Math.round((completedSections.length / 6) * 100);

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6 h-16">
          {/* Brand: Institutional crest feel, clean text */}
          <div
            onClick={() => onNavigate(1)}
            className="flex items-center gap-3 cursor-pointer select-none shrink-0"
          >
            <div className="w-10 h-10 rounded-md bg-slate-900 text-white flex items-center justify-center font-serif text-lg font-bold border border-slate-700">
              <Microscope className="w-5 h-5 text-sky-400" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-slate-900 tracking-tight leading-snug">
                Unidad Educativa Guano
              </span>
              <span className="text-[11px] text-slate-500 font-medium leading-none">
                Ciencias Naturales · 8.º Año EGB
              </span>
            </div>
          </div>

          {/* Navigation Links: Editorial, clean, single line */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => {
              const isActive = currentSection === item.id;
              const isCompleted = completedSections.includes(item.id);

              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-slate-900 text-white'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <span className="font-mono text-[11px] opacity-70">{item.id}.</span>
                  <span>{item.label}</span>
                  {isCompleted && !isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" title="Sección explorada" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action: Clean button + subtle progress indicator */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="hidden sm:flex items-center gap-2 text-xs text-slate-500 mr-1">
              <span className="tabular-nums font-mono text-slate-700">{progressPercent}%</span>
              <div className="w-14 h-1.5 bg-slate-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-slate-800 transition-all duration-300"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>

            <button
              onClick={onOpenPrint}
              className="px-3.5 py-1.5 text-xs font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 border border-slate-300 rounded-md transition-colors flex items-center gap-1.5 whitespace-nowrap"
            >
              <Printer className="w-3.5 h-3.5 text-slate-600" />
              <span>Imprimir Guía A4</span>
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-700 hover:text-slate-950 rounded-md hover:bg-slate-100"
              aria-label="Abrir navegación"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-3 border-t border-slate-200 flex flex-col gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full text-left px-3 py-2 text-xs font-medium rounded-md flex items-center justify-between ${
                  currentSection === item.id
                    ? 'bg-slate-900 text-white font-semibold'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                <span>{item.id}. {item.title}</span>
                {completedSections.includes(item.id) && (
                  <span className="text-[10px] text-emerald-600 font-bold uppercase">Listo</span>
                )}
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};
