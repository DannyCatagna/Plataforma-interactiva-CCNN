import React from 'react';
import { Microscope, ArrowRight, BookOpen, CheckCircle, FileText, Compass, Sparkles } from 'lucide-react';

interface WelcomeSectionProps {
  onStart: () => void;
  onNavigateSection: (section: number) => void;
}

export const WelcomeSection: React.FC<WelcomeSectionProps> = ({
  onStart,
  onNavigateSection
}) => {
  return (
    <div className="space-y-10">
      {/* Editorial Academic Hero */}
      <section className="bg-white border border-slate-200 rounded-xl p-6 sm:p-10 shadow-2xs">
        <div className="max-w-4xl space-y-6">
          {/* Institutional masthead */}
          <div className="space-y-1">
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">
              <span>Unidad Educativa Guano</span>
              <span aria-hidden="true">·</span>
              <span>Área de Ciencias Naturales</span>
              <span aria-hidden="true">·</span>
              <span>8.º Año de Educación General Básica</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight text-balance">
              ¡Descubre un mundo invisible a simple vista!
            </h1>
          </div>

          {/* Welcome Text */}
          <div className="text-base sm:text-lg text-slate-700 leading-relaxed space-y-3 font-normal border-l-3 border-slate-800 pl-4 py-1">
            <p>
              ¿Sabías que tu cuerpo, las plantas y todos los seres vivos están formados por células?
              Muchas son tan pequeñas que necesitamos un microscopio para observarlas. Hoy aprenderás
              a utilizar este instrumento y descubrirás cómo son las células y los tejidos que forman
              parte de la vida.
            </p>
          </div>

          {/* Teacher's note / Pedagogical context */}
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 text-xs sm:text-sm text-slate-600 space-y-2">
            <div className="flex items-center gap-2 font-semibold text-slate-800">
              <BookOpen className="w-4 h-4 text-slate-700" />
              <span>Orientaciones didácticas para la clase</span>
            </div>
            <p className="leading-relaxed">
              Este recurso ha sido diseñado para acompañar el trabajo práctico en el aula y laboratorio escolar.
              A lo largo de las seis secciones podrás revisar las partes del microscopio, ensayar su calibración
              en el simulador virtual y descargar la hoja de trabajo en formato A4 para el registro de tus dibujos y conclusiones.
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={onStart}
              className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-md transition-colors flex items-center gap-2 cursor-pointer shadow-xs"
            >
              <span>¡Comenzar la exploración!</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onNavigateSection(5)}
              className="px-4 py-2.5 text-xs sm:text-sm font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 rounded-md transition-colors flex items-center gap-2 cursor-pointer"
            >
              <Compass className="w-4 h-4 text-slate-600" />
              <span>Acceder al Laboratorio Virtual</span>
            </button>

            <button
              onClick={() => onNavigateSection(6)}
              className="px-4 py-2.5 text-xs sm:text-sm font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 rounded-md transition-colors flex items-center gap-2 cursor-pointer"
            >
              <FileText className="w-4 h-4 text-slate-600" />
              <span>Ver Hoja de Trabajo A4</span>
            </button>
          </div>
        </div>
      </section>

      {/* Objetivos de Aprendizaje: Clean editorial 3-column layout */}
      <section className="space-y-4">
        <div className="border-b border-slate-200 pb-3">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
            Objetivos de Aprendizaje
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            Destrezas con criterios de desempeño del currículo ecuatoriano de Ciencias Naturales
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Objetivo 1 */}
          <div className="bg-white border border-slate-200 rounded-lg p-5 flex flex-col justify-between space-y-4 shadow-2xs">
            <div className="space-y-2">
              <div className="text-xs font-mono font-bold text-slate-500">
                01. COMPONENTES
              </div>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                Reconocer las partes y funciones del microscopio óptico
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Identificar el sistema mecánico (platina, tornillos, revólver), el sistema óptico (ocular, objetivos)
                y el sistema de iluminación (condensador, diafragma y fuente lumínica).
              </p>
            </div>
            <button
              onClick={() => onNavigateSection(2)}
              className="text-xs font-semibold text-slate-900 hover:text-sky-700 flex items-center gap-1.5 pt-2 border-t border-slate-100"
            >
              <span>Ver diagrama de 12 partes</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Objetivo 2 */}
          <div className="bg-white border border-slate-200 rounded-lg p-5 flex flex-col justify-between space-y-4 shadow-2xs">
            <div className="space-y-2">
              <div className="text-xs font-mono font-bold text-slate-500">
                02. PROCEDIMIENTO
              </div>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                Aprender a utilizar correctamente el microscopio
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Ejecutar la secuencia de 8 pasos desde la colocación de la lámina hasta el ajuste fino con el micrométrico,
                cumpliendo rigurosamente las normas de bioseguridad del laboratorio.
              </p>
            </div>
            <button
              onClick={() => onNavigateSection(3)}
              className="text-xs font-semibold text-slate-900 hover:text-sky-700 flex items-center gap-1.5 pt-2 border-t border-slate-100"
            >
              <span>Ver protocolo de 8 pasos</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Objetivo 3 */}
          <div className="bg-white border border-slate-200 rounded-lg p-5 flex flex-col justify-between space-y-4 shadow-2xs">
            <div className="space-y-2">
              <div className="text-xs font-mono font-bold text-slate-500">
                03. ANÁLISIS CELULAR
              </div>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                Observar, comparar y representar células y tejidos
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Diferenciar muestras vegetales (pared celular de celulosa, ausencia de cloroplastos en bulbo de cebolla,
                presencia en hojas) y animales (membrana flexible, núcleo con tinción, sin pared).
              </p>
            </div>
            <button
              onClick={() => onNavigateSection(4)}
              className="text-xs font-semibold text-slate-900 hover:text-sky-700 flex items-center gap-1.5 pt-2 border-t border-slate-100"
            >
              <span>Comparar muestras biológicas</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* Ficha técnica informativa de la práctica de laboratorio */}
      <section className="bg-white border border-slate-200 rounded-lg p-5">
        <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
          Estructura del Proyecto de Clase
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs divide-y sm:divide-y-0 sm:divide-x divide-slate-200">
          <div className="space-y-1">
            <span className="text-slate-400 block font-mono">01. Estudio Anatómico</span>
            <strong className="text-slate-800 text-sm block">12 Partes Clave</strong>
            <span className="text-slate-500">Con actividad de identificación</span>
          </div>
          <div className="space-y-1 sm:pl-4 pt-2 sm:pt-0">
            <span className="text-slate-400 block font-mono">02. Método Experimental</span>
            <strong className="text-slate-800 text-sm block">8 Pasos de Enfoque</strong>
            <span className="text-slate-500">Con normas de cuidado del equipo</span>
          </div>
          <div className="space-y-1 sm:pl-4 pt-2 sm:pt-0">
            <span className="text-slate-400 block font-mono">03. Preparaciones</span>
            <strong className="text-slate-800 text-sm block">5 Muestras Reales</strong>
            <span className="text-slate-500">Aumentos 40x, 100x y 400x</span>
          </div>
          <div className="space-y-1 sm:pl-4 pt-2 sm:pt-0">
            <span className="text-slate-400 block font-mono">04. Evaluación Física</span>
            <strong className="text-slate-800 text-sm block">Guía A4 (4 Páginas)</strong>
            <span className="text-slate-500">Lista para imprimir o resolver online</span>
          </div>
        </div>
      </section>
    </div>
  );
};
