import React, { useState } from 'react';
import {
  ArrowRight,
  Compass,
  FileText,
  BookOpen,
  Layers,
  ShieldCheck,
  Microscope,
  Sparkles,
  HelpCircle,
  Eye,
  Info
} from 'lucide-react';
import { HeroScientificIllustration } from './HeroScientificIllustration';
import { MicroscopeSvg } from './MicroscopeSvg';
import { MICROSCOPE_PARTS } from '../data/microscopeData';

interface WelcomeSectionProps {
  onStart: () => void;
  onNavigateSection: (section: number) => void;
}

export const WelcomeSection: React.FC<WelcomeSectionProps> = ({
  onStart,
  onNavigateSection
}) => {
  // Estado para el diagrama interactivo en la página principal
  const [selectedPartId, setSelectedPartId] = useState<string>(MICROSCOPE_PARTS[0].id);
  const [hoveredPartId, setHoveredPartId] = useState<string | null>(null);
  const [filterSystem, setFilterSystem] = useState<'all' | 'optico' | 'mecanico' | 'iluminacion'>('all');

  const activePart = MICROSCOPE_PARTS.find(p => p.id === (hoveredPartId || selectedPartId)) || MICROSCOPE_PARTS[0];

  const filteredParts = filterSystem === 'all'
    ? MICROSCOPE_PARTS
    : MICROSCOPE_PARTS.filter(p => p.system === filterSystem);

  return (
    <div className="space-y-14">
      {/* 1. SECCIÓN PRINCIPAL HERO: TÍTULO + ILUSTRACIÓN CIENTÍFICA GRANDE */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pt-2 sm:pt-4">
        {/* Columna Izquierda: Título atractivo, descripción concisa y botón de acción */}
        <div className="lg:col-span-7 space-y-6 text-left">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[#16A6A0]/10 border border-[#16A6A0]/20 rounded-full text-xs font-semibold text-[#16A6A0]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Ciencias Naturales · 8.º Año EGB</span>
          </div>

          <div className="space-y-3">
            <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#173B70] tracking-tight leading-[1.14]">
              Descubre el Mundo Invisible: Células y Tejidos
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-xl">
              Aprende a calibrar el microscopio óptico escolar, examina muestras biológicas
              de cebolla, hojas y células bucales a 40x, 100x y 400x, y registra tus observaciones
              en la guía de laboratorio.
            </p>
          </div>

          {/* Botones de acción principales */}
          <div className="flex flex-wrap items-center gap-3 pt-1">
            <button
              onClick={onStart}
              className="px-6 py-3 text-sm font-semibold text-white bg-[#173B70] hover:bg-[#122e56] rounded-lg transition-all duration-150 flex items-center gap-2.5 cursor-pointer shadow-sm hover:shadow active:scale-[0.98]"
            >
              <span>Comenzar exploración</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onNavigateSection(5)}
              className="px-5 py-3 text-sm font-medium text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 hover:border-[#16A6A0] rounded-lg transition-colors flex items-center gap-2 cursor-pointer shadow-2xs"
            >
              <Compass className="w-4 h-4 text-[#16A6A0]" />
              <span>Laboratorio Virtual</span>
            </button>

            <button
              onClick={() => onNavigateSection(6)}
              className="px-4 py-3 text-sm font-medium text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 hover:border-slate-300 rounded-lg transition-colors flex items-center gap-2 cursor-pointer shadow-2xs"
            >
              <FileText className="w-4 h-4 text-[#173B70]" />
              <span>Guía A4</span>
            </button>
          </div>

          {/* Indicadores clave limpios sin píldoras invasivas */}
          <div className="pt-2 border-t border-slate-200/80 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-slate-500">
            <span className="flex items-center gap-1.5 font-medium text-slate-700">
              <span className="w-2 h-2 rounded-full bg-[#16A6A0]" />
              12 Partes del Microscopio
            </span>
            <span className="text-slate-300">·</span>
            <span className="flex items-center gap-1.5 font-medium text-slate-700">
              <span className="w-2 h-2 rounded-full bg-[#173B70]" />
              5 Muestras Vivas
            </span>
            <span className="text-slate-300">·</span>
            <span className="flex items-center gap-1.5 font-medium text-slate-700">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              Guía A4 Imprimible
            </span>
          </div>
        </div>

        {/* Columna Derecha: Gran ilustración científica con microscopio y células */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <HeroScientificIllustration className="w-full max-w-[480px]" />
        </div>
      </section>

      {/* 2. DIAGRAMA INTERACTIVO DE LAS PARTES DEL MICROSCOPIO EN LA PÁGINA PRINCIPAL */}
      <section className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
          <div>
            <div className="text-xs font-semibold text-[#16A6A0] uppercase tracking-wider mb-1">
              Interactivo en Vivo
            </div>
            <h2 className="text-2xl font-bold text-[#173B70] tracking-tight">
              Diagrama Interactivo: Partes del Microscopio
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl leading-relaxed">
              Toca o haz clic sobre los puntos numerados (1 al 12) en el microscopio o selecciona
              cualquier componente en la lista para descubrir su función óptica o mecánica.
            </p>
          </div>

          <button
            onClick={() => onNavigateSection(2)}
            className="px-4 py-2 text-xs font-semibold text-white bg-[#173B70] hover:bg-[#122e56] rounded-lg transition-colors flex items-center gap-1.5 self-start sm:self-auto cursor-pointer shadow-xs shrink-0"
          >
            <span>Ver módulo completo</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Filtros por sistema */}
        <div className="flex flex-wrap items-center gap-1.5 text-xs">
          <span className="text-slate-500 mr-2 font-medium">Filtrar por sistema:</span>
          <button
            onClick={() => setFilterSystem('all')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-colors cursor-pointer ${
              filterSystem === 'all'
                ? 'bg-[#173B70] text-white shadow-xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Todos (12)
          </button>
          <button
            onClick={() => setFilterSystem('optico')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-colors cursor-pointer ${
              filterSystem === 'optico'
                ? 'bg-[#173B70] text-white shadow-xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Sistema Óptico (2)
          </button>
          <button
            onClick={() => setFilterSystem('mecanico')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-colors cursor-pointer ${
              filterSystem === 'mecanico'
                ? 'bg-[#173B70] text-white shadow-xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Sistema Mecánico (8)
          </button>
          <button
            onClick={() => setFilterSystem('iluminacion')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-colors cursor-pointer ${
              filterSystem === 'iluminacion'
                ? 'bg-[#173B70] text-white shadow-xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Sistema de Iluminación (2)
          </button>
        </div>

        {/* Contenedor del Diagrama Interactivo + Ficha Explicativa */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2">
          {/* Columna Izquierda: Diagrama Vectorial Interactivo */}
          <div className="lg:col-span-7 bg-slate-50/60 border border-slate-200 rounded-xl p-4 sm:p-6 flex flex-col items-center justify-center">
            <div className="w-full max-w-md">
              <MicroscopeSvg
                parts={MICROSCOPE_PARTS}
                selectedPartId={selectedPartId}
                onSelectPart={(id) => setSelectedPartId(id)}
                hoveredPartId={hoveredPartId}
                onHoverPart={(id) => setHoveredPartId(id)}
              />
            </div>
            <div className="text-[11px] text-slate-400 text-center mt-2 font-mono">
              Punto seleccionado: #{MICROSCOPE_PARTS.findIndex(p => p.id === activePart.id) + 1} · {activePart.name}
            </div>
          </div>

          {/* Columna Derecha: Tarjeta didáctica activa del componente */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-200/80 pb-2">
                <span className="text-xs font-mono font-bold text-[#16A6A0]">
                  PARTE #{MICROSCOPE_PARTS.findIndex(p => p.id === activePart.id) + 1} DE 12
                </span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-700">
                  {activePart.systemName}
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#173B70]">
                  {activePart.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 font-medium">
                  {activePart.shortDesc}
                </p>
              </div>

              <div className="space-y-2.5 text-xs">
                <div className="bg-white border border-slate-200 rounded-lg p-3 space-y-1">
                  <strong className="block text-slate-800 font-semibold">
                    Descripción física:
                  </strong>
                  <p className="text-slate-600 leading-relaxed">
                    {activePart.fullDesc}
                  </p>
                </div>

                <div className="bg-white border border-slate-200 rounded-lg p-3 space-y-1 border-l-3 border-l-[#16A6A0]">
                  <strong className="block text-[#173B70] font-semibold">
                    Función en la observación:
                  </strong>
                  <p className="text-slate-600 leading-relaxed">
                    {activePart.functionDesc}
                  </p>
                </div>
              </div>

              {/* Botonera de acceso directo a los 12 componentes */}
              <div className="pt-2 border-t border-slate-200">
                <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-2">
                  Seleccionar directamente:
                </span>
                <div className="grid grid-cols-2 gap-1.5 max-h-40 overflow-y-auto pr-1">
                  {filteredParts.map((part) => (
                    <button
                      key={part.id}
                      onClick={() => setSelectedPartId(part.id)}
                      className={`text-left px-2 py-1.5 rounded-md text-xs transition-colors truncate cursor-pointer ${
                        selectedPartId === part.id
                          ? 'bg-[#173B70] text-white font-semibold'
                          : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      {MICROSCOPE_PARTS.findIndex(p => p.id === part.id) + 1}. {part.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SECCIONES DEL RECORRIDO PEDAGÓGICO */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-slate-200/80 pb-3">
          <div>
            <span className="text-xs font-bold text-[#16A6A0] uppercase tracking-wider">
              Ruta de Aprendizaje
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-[#173B70] tracking-tight">
              Módulos Didácticos de la Práctica
            </h2>
          </div>
          <span className="text-xs text-slate-500 font-medium">
            Diseñado para estudiantes de 8.º EGB
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Tarjeta 1 */}
          <div
            onClick={() => onNavigateSection(2)}
            className="group bg-white hover:bg-slate-50/70 border border-slate-200 hover:border-[#173B70]/30 rounded-xl p-5 flex flex-col justify-between transition-all duration-150 cursor-pointer shadow-xs hover:shadow-sm"
          >
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#173B70]/10 text-[#173B70] flex items-center justify-center font-bold">
                <Microscope className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <span className="text-[11px] font-mono font-bold text-[#16A6A0]">MÓDULO 01</span>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-[#173B70] transition-colors">
                  El Microscopio
                </h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Identifica el sistema mecánico, óptico y de iluminación en un diagrama interactivo con juego de autoevaluación.
              </p>
            </div>
            <div className="pt-4 mt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#173B70]">
              <span>Explorar partes</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Tarjeta 2 */}
          <div
            onClick={() => onNavigateSection(3)}
            className="group bg-white hover:bg-slate-50/70 border border-slate-200 hover:border-[#173B70]/30 rounded-xl p-5 flex flex-col justify-between transition-all duration-150 cursor-pointer shadow-xs hover:shadow-sm"
          >
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#16A6A0]/10 text-[#16A6A0] flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <span className="text-[11px] font-mono font-bold text-[#16A6A0]">MÓDULO 02</span>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-[#173B70] transition-colors">
                  Protocolo y Seguridad
                </h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Secuencia metódica de 8 pasos para enfocar sin quebrar la laminilla ni rallar el lente frontal de inmersión.
              </p>
            </div>
            <div className="pt-4 mt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#173B70]">
              <span>Ver protocolo</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Tarjeta 3 */}
          <div
            onClick={() => onNavigateSection(4)}
            className="group bg-white hover:bg-slate-50/70 border border-slate-200 hover:border-[#173B70]/30 rounded-xl p-5 flex flex-col justify-between transition-all duration-150 cursor-pointer shadow-xs hover:shadow-sm"
          >
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#173B70]/10 text-[#173B70] flex items-center justify-center font-bold">
                <Layers className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <span className="text-[11px] font-mono font-bold text-[#16A6A0]">MÓDULO 03</span>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-[#173B70] transition-colors">
                  Células y Tejidos
                </h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Compara células vegetales con cloroplastos frente a células animales, tinciones de azul de metileno y tejidos.
              </p>
            </div>
            <div className="pt-4 mt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#173B70]">
              <span>Comparar muestras</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Tarjeta 4 */}
          <div
            onClick={() => onNavigateSection(5)}
            className="group bg-white hover:bg-slate-50/70 border border-slate-200 hover:border-[#173B70]/30 rounded-xl p-5 flex flex-col justify-between transition-all duration-150 cursor-pointer shadow-xs hover:shadow-sm"
          >
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#16A6A0]/10 text-[#16A6A0] flex items-center justify-center font-bold">
                <Compass className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <span className="text-[11px] font-mono font-bold text-[#16A6A0]">MÓDULO 04</span>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-[#173B70] transition-colors">
                  Laboratorio Virtual
                </h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Simulador interactivo con control de aumento (40x, 100x, 400x), enfoque fino y visor de muestras histológicas.
              </p>
            </div>
            <div className="pt-4 mt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#173B70]">
              <span>Entrar al lab</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </section>

      {/* Bloque complementario de apoyo pedagógico */}
      <section className="bg-slate-50 border border-slate-200/80 rounded-xl p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-[#173B70] text-white flex items-center justify-center shrink-0">
            <BookOpen className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-900">
              Glosario Microscópico y Cuaderno Digital
            </h4>
            <p className="text-xs text-slate-600">
              Consulta definiciones clave (resolución, tinción, aumentos) o registra tus observaciones en la libreta web.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 self-end sm:self-auto shrink-0">
          <button
            onClick={() => onNavigateSection(7)}
            className="px-3.5 py-2 text-xs font-semibold text-[#173B70] hover:bg-[#173B70]/10 rounded-md transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <span>Ver Glosario</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>
    </div>
  );
};
