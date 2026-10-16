import React, { useState } from 'react';
import { SPECIMEN_SLIDES } from '../data/microscopeData';
import { OcularSpecimenView } from './CellSvg';
import { Sliders, RotateCcw, Tag, Sun, CheckCircle, Compass, ArrowRight, BookOpen } from 'lucide-react';

export const VirtualLab: React.FC = () => {
  const [selectedSlideId, setSelectedSlideId] = useState<string>('cebolla');
  const [magnification, setMagnification] = useState<'40x' | '100x' | '400x'>('100x');
  const [focusPosition, setFocusPosition] = useState<number>(52);
  const [showLabels, setShowLabels] = useState<boolean>(true);
  const [lightIntensity, setLightIntensity] = useState<number>(75);

  // Misión de Laboratorio
  const [missionActive, setMissionActive] = useState<boolean>(false);
  const [missionSample1, setMissionSample1] = useState<string>('cebolla');
  const [missionSample2, setMissionSample2] = useState<string>('mucosa');
  const [missionAnswer1, setMissionAnswer1] = useState<string>('');
  const [missionAnswer2, setMissionAnswer2] = useState<string>('');
  const [missionAnswer3, setMissionAnswer3] = useState<string>('');
  const [missionSubmitted, setMissionSubmitted] = useState<boolean>(false);

  const activeSlide = SPECIMEN_SLIDES.find(s => s.id === selectedSlideId) || SPECIMEN_SLIDES[0];
  const magDetails = activeSlide.magnifications[magnification];

  const handleReset = () => {
    setFocusPosition(52);
    setMagnification('100x');
    setShowLabels(true);
    setLightIntensity(75);
  };

  const ideal = activeSlide.magnifications[magnification].idealFocus;
  const focusDiff = Math.abs(focusPosition - ideal);
  const isSharp = focusDiff < 4;

  const handleCompleteMission = (e: React.FormEvent) => {
    e.preventDefault();
    setMissionSubmitted(true);
  };

  return (
    <div className="space-y-8">
      {/* Encabezado y etiqueta obligatoria */}
      <section className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 space-y-4 shadow-2xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
          <div>
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
              Sección 5 · Práctica Digital
            </div>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
              Laboratorio Virtual de Microscopía
            </h2>
          </div>

          {/* Etiqueta obligatoria requerida por el pliego */}
          <div className="text-xs font-semibold px-3 py-1 bg-slate-100 border border-slate-300 text-slate-800 rounded self-start sm:self-auto">
            Simulación educativa: no sustituye la observación real
          </div>
        </div>

        <p className="text-sm text-slate-600 max-w-3xl leading-relaxed">
          Manipula los mandos ópticos del microscopio compuesto: selecciona muestras histológicas,
          intercambia objetivos entre 40x, 100x y 400x, y calibra la nitidez mediante el tornillo de enfoque fino.
        </p>
      </section>

      {/* ÁREA DE OBSERVACIÓN: VISOR OCULAR Y CONSOLA MECÁNICA */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Columna Izquierda: Visor Ocular Circular */}
        <div className="lg:col-span-7 bg-slate-900 rounded-xl p-6 shadow-md border border-slate-800 flex flex-col items-center justify-center space-y-4">
          <div className="flex items-center justify-between w-full max-w-sm text-xs text-slate-300 font-mono px-2">
            <span>Ocular: 10x</span>
            <span className="text-sky-300 font-bold">Aumento Total: {magnification}</span>
          </div>

          {/* Círculo óptico */}
          <div className="w-full flex justify-center py-2">
            <OcularSpecimenView
              specimenId={selectedSlideId}
              magnification={magnification}
              focusSharpness={focusPosition}
              showLabels={showLabels}
              lightIntensity={lightIntensity}
            />
          </div>

          {/* Estado de nitidez */}
          <div className="text-xs font-mono text-center">
            {isSharp ? (
              <span className="text-emerald-400 font-medium">✓ Imagen enfocada (Plano focal óptimo)</span>
            ) : (
              <span className="text-amber-300">Imagen desenfocada. Ajusta el mando de enfoque fino.</span>
            )}
          </div>
        </div>

        {/* Columna Derecha: Consola de Mandos de la Platina */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-2xs space-y-5">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide">
                Mandos del Microscopio
              </h3>
              <button
                onClick={handleReset}
                className="text-xs text-slate-500 hover:text-slate-800 flex items-center gap-1 cursor-pointer"
                title="Reiniciar valores"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Restablecer</span>
              </button>
            </div>

            {/* 1. Selector de preparaciones */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-700 block">
                1. Muestra en platina:
              </label>
              <div className="space-y-1">
                {SPECIMEN_SLIDES.map((slide) => (
                  <button
                    key={slide.id}
                    onClick={() => {
                      setSelectedSlideId(slide.id);
                      setFocusPosition(50);
                    }}
                    className={`w-full text-left p-2 rounded border text-xs transition-colors flex items-center justify-between ${
                      selectedSlideId === slide.id
                        ? 'bg-slate-900 border-slate-900 text-white font-semibold'
                        : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <span className="truncate pr-2">{slide.name}</span>
                    <span className="text-[10px] font-mono opacity-80 uppercase shrink-0">
                      {slide.category}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Selector de aumento */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-xs">
                <label className="font-semibold text-slate-700">
                  2. Objetivo en revólver:
                </label>
                <span className="font-mono text-slate-500">{magnification} total</span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {(['40x', '100x', '400x'] as const).map((mag) => (
                  <button
                    key={mag}
                    onClick={() => setMagnification(mag)}
                    className={`py-1.5 text-xs font-semibold rounded border transition-colors ${
                      magnification === mag
                        ? 'bg-slate-800 border-slate-800 text-white'
                        : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    {mag}
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Control de enfoque fino */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-xs">
                <label className="font-semibold text-slate-700 flex items-center gap-1.5">
                  <Sliders className="w-3.5 h-3.5 text-slate-600" />
                  <span>3. Tornillo Micrométrico (Enfoque fino):</span>
                </label>
                <span className="font-mono text-slate-500">{focusPosition}%</span>
              </div>
              <input
                type="range"
                min="10"
                max="90"
                value={focusPosition}
                onChange={(e) => setFocusPosition(Number(e.target.value))}
                className="w-full accent-slate-800 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-400">
                <span>Distal</span>
                <span className="font-medium text-slate-600">Punto focal ≈ 52%</span>
                <span>Proximal</span>
              </div>
            </div>

            {/* 4. Interruptor de etiquetas e iluminación */}
            <div className="pt-2 border-t border-slate-100 flex items-center justify-between gap-4">
              <button
                onClick={() => setShowLabels(!showLabels)}
                className={`px-3 py-1.5 text-xs font-semibold rounded border transition-colors flex items-center gap-1.5 ${
                  showLabels
                    ? 'bg-slate-100 border-slate-300 text-slate-800'
                    : 'bg-white border-slate-200 text-slate-500 hover:bg-slate-50'
                }`}
              >
                <Tag className="w-3.5 h-3.5" />
                <span>{showLabels ? 'Ocultar rótulos' : 'Mostrar rótulos'}</span>
              </button>

              <div className="flex items-center gap-2 text-xs text-slate-500">
                <Sun className="w-3.5 h-3.5 text-slate-600" />
                <input
                  type="range"
                  min="40"
                  max="100"
                  value={lightIntensity}
                  onChange={(e) => setLightIntensity(Number(e.target.value))}
                  className="w-20 accent-slate-700"
                  title="Apertura diafragma / Luz"
                />
              </div>
            </div>
          </div>

          {/* Detalles identificables en este aumento */}
          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-2xs space-y-2 text-xs">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
              Detalles observables a {magnification}
            </span>
            <h4 className="text-sm font-bold text-slate-900">
              {activeSlide.name}
            </h4>
            <p className="text-slate-600 leading-relaxed">
              {magDetails.description}
            </p>

            <div className="pt-2 border-t border-slate-100">
              <strong className="block text-slate-800 font-semibold mb-1">
                Estructuras reconocibles:
              </strong>
              <ul className="space-y-1">
                {magDetails.visibleStructures.map((s, idx) => (
                  <li key={idx} className="text-slate-600 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ACTIVIDAD: MISIÓN MICROSCÓPICA */}
      <section className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 space-y-4 shadow-2xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
          <div>
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
              Actividad Práctica Guiada
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900">
              Misión Microscópica de Análisis Comparativo
            </h3>
            <p className="text-xs text-slate-500">
              Selecciona dos muestras observadas en el simulador y responde las preguntas de indagación:
            </p>
          </div>

          <button
            onClick={() => setMissionActive(!missionActive)}
            className="px-3.5 py-1.5 text-xs font-semibold bg-slate-900 text-white rounded hover:bg-slate-800 transition-colors self-start sm:self-auto cursor-pointer"
          >
            {missionActive ? 'Ocultar preguntas' : 'Abrir preguntas de análisis'}
          </button>
        </div>

        {missionActive && (
          <form onSubmit={handleCompleteMission} className="space-y-5 pt-1 text-xs sm:text-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="font-semibold text-slate-700 block mb-1">
                  Muestra Vegetal seleccionada:
                </label>
                <select
                  value={missionSample1}
                  onChange={(e) => setMissionSample1(e.target.value)}
                  className="w-full p-2 rounded border border-slate-200 bg-white text-slate-800 text-xs"
                >
                  <option value="cebolla">Epidermis de cebolla (Allium cepa)</option>
                  <option value="hoja_verde">Tejido foliar con cloroplastos</option>
                </select>
              </div>

              <div>
                <label className="font-semibold text-slate-700 block mb-1">
                  Muestra Animal seleccionada:
                </label>
                <select
                  value={missionSample2}
                  onChange={(e) => setMissionSample2(e.target.value)}
                  className="w-full p-2 rounded border border-slate-200 bg-white text-slate-800 text-xs"
                >
                  <option value="mucosa">Mucosa bucal humana</option>
                  <option value="muscular">Tejido muscular estriado</option>
                  <option value="nervioso">Tejido nervioso (médula espinal)</option>
                </select>
              </div>
            </div>

            <div className="space-y-3">
              <div>
                <label className="font-semibold text-slate-800 block mb-1">
                  1. ¿Qué diferencia evidente aprecias en la forma del contorno de las células entre la muestra vegetal y la animal?
                </label>
                <textarea
                  rows={2}
                  required
                  value={missionAnswer1}
                  onChange={(e) => setMissionAnswer1(e.target.value)}
                  placeholder="Redacta tu respuesta considerando la presencia o ausencia de pared celular..."
                  className="w-full p-2.5 rounded border border-slate-200 bg-slate-50 text-xs outline-none focus:bg-white focus:border-slate-400"
                />
              </div>

              <div>
                <label className="font-semibold text-slate-800 block mb-1">
                  2. ¿Qué estructura celular contiene el material genético visible en ambas preparaciones al aplicar tinción?
                </label>
                <textarea
                  rows={2}
                  required
                  value={missionAnswer2}
                  onChange={(e) => setMissionAnswer2(e.target.value)}
                  placeholder="Indica el nombre de la estructura y cómo se visualiza..."
                  className="w-full p-2.5 rounded border border-slate-200 bg-slate-50 text-xs outline-none focus:bg-white focus:border-slate-400"
                />
              </div>

              <div>
                <label className="font-semibold text-slate-800 block mb-1">
                  3. ¿Por qué al cambiar a mayor aumento (400x) el campo de visión se reduce pero se aprecian detalles más finos?
                </label>
                <textarea
                  rows={2}
                  required
                  value={missionAnswer3}
                  onChange={(e) => setMissionAnswer3(e.target.value)}
                  placeholder="Explica la relación entre poder de resolución, área visual y aumento..."
                  className="w-full p-2.5 rounded border border-slate-200 bg-slate-50 text-xs outline-none focus:bg-white focus:border-slate-400"
                />
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="px-4 py-2 bg-slate-900 text-white rounded text-xs font-semibold hover:bg-slate-800 transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <span>Registrar conclusiones</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {missionSubmitted && (
              <div className="p-4 rounded-lg bg-slate-50 border border-slate-300 text-slate-800 space-y-1">
                <strong className="block font-semibold">
                  ✓ Respuestas registradas en el cuaderno digital.
                </strong>
                <p className="text-xs text-slate-600">
                  Traslada tus respuestas y realiza tus dibujos en la <strong>Hoja de Trabajo física A4</strong> para entregar al docente en la clase presencial.
                </p>
              </div>
            )}
          </form>
        )}
      </section>
    </div>
  );
};
