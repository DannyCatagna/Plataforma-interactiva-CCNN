import React, { useState } from 'react';
import { PROTOCOL_STEPS, SAFETY_RULES, TRUE_FALSE_QUESTIONS } from '../data/microscopeData';
import { ChevronLeft, ChevronRight, Check, X, ShieldAlert, BookOpen, AlertCircle, ShieldCheck } from 'lucide-react';

export const MicroscopeProtocol: React.FC = () => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [tfAnswers, setTfAnswers] = useState<{ [id: number]: boolean }>({});
  const [tfChecked, setTfChecked] = useState<{ [id: number]: boolean }>({});

  const currentStep = PROTOCOL_STEPS[currentStepIndex];

  const handleNextStep = () => {
    if (currentStepIndex < PROTOCOL_STEPS.length - 1) {
      setCurrentStepIndex(prev => prev + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(prev => prev - 1);
    }
  };

  const handleTfSelect = (id: number, answer: boolean) => {
    setTfAnswers(prev => ({ ...prev, [id]: answer }));
    setTfChecked(prev => ({ ...prev, [id]: true }));
  };

  return (
    <div className="space-y-8">
      {/* Encabezado general */}
      <section className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 space-y-3 shadow-xs">
        <div className="text-xs font-semibold text-[#16A6A0] uppercase tracking-wider">
          Sección 3 · Metodología Experimental
        </div>
        <h2 className="text-2xl font-bold text-[#173B70] tracking-tight">
          Aprende a Utilizar el Microscopio Óptico
        </h2>
        <p className="text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
          Sigue esta secuencia técnica de ocho pasos para obtener observaciones nítidas sin riesgo de
          fracturar las láminas de vidrio ni dañar las lentes del equipo escolar.
        </p>
      </section>

      {/* GUÍA VISUAL PASO A PASO (8 Pasos) */}
      <section className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 space-y-6 shadow-xs">
        {/* Barra superior de pasos */}
        <div className="flex items-center justify-between gap-1 overflow-x-auto pb-2 border-b border-slate-100">
          {PROTOCOL_STEPS.map((step, idx) => {
            const isCurrent = idx === currentStepIndex;
            const isCompleted = idx < currentStepIndex;

            return (
              <button
                key={step.number}
                onClick={() => setCurrentStepIndex(idx)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium whitespace-nowrap transition-colors cursor-pointer ${
                  isCurrent
                    ? 'bg-[#173B70] text-white font-semibold shadow-xs'
                    : isCompleted
                    ? 'bg-slate-100 text-[#173B70] hover:bg-slate-200'
                    : 'text-slate-500 hover:bg-slate-50'
                }`}
              >
                <span className="font-mono text-[11px] opacity-75">{step.number}.</span>
                <span>{step.shortName}</span>
              </button>
            );
          })}
        </div>

        {/* Tarjeta del paso activo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[260px]">
          {/* Columna Izquierda: Ficha didáctica */}
          <div className="lg:col-span-4 bg-slate-50 border border-slate-200 rounded-xl p-5 flex flex-col justify-between space-y-4">
            <div>
              <span className="text-xs font-mono font-bold text-[#16A6A0] block mb-1">
                PASO {currentStep.number} DE 8
              </span>
              <h4 className="text-lg font-bold text-slate-900">
                {currentStep.title}
              </h4>
            </div>

            <div className="bg-white p-3.5 rounded-lg border border-slate-200 text-xs text-slate-600 space-y-1 shadow-2xs">
              <strong className="block text-[#173B70] font-semibold">
                Consejo del docente:
              </strong>
              <p className="italic">
                "{currentStep.teacherTip}"
              </p>
            </div>
          </div>

          {/* Columna Derecha: Instrucción detallada y botones de avance */}
          <div className="lg:col-span-8 space-y-5">
            <div>
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                Procedimiento en el Laboratorio
              </span>
              <p className="text-base sm:text-lg text-slate-800 leading-relaxed font-normal bg-slate-50/80 p-4 rounded-xl border border-slate-200">
                {currentStep.instruction}
              </p>
            </div>

            {currentStep.safetyNote && (
              <div className="p-3.5 rounded-lg bg-amber-50/80 border border-amber-200 text-xs text-amber-950 flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="font-semibold text-amber-900">Precaución indispensable: </strong>
                  <span>{currentStep.safetyNote}</span>
                </div>
              </div>
            )}

            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
              <button
                onClick={handlePrevStep}
                disabled={currentStepIndex === 0}
                className="px-3.5 py-1.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 disabled:opacity-30 disabled:pointer-events-none rounded-md transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Paso anterior</span>
              </button>

              <span className="text-xs font-mono text-slate-400">
                {currentStepIndex + 1} / {PROTOCOL_STEPS.length}
              </span>

              <button
                onClick={handleNextStep}
                disabled={currentStepIndex === PROTOCOL_STEPS.length - 1}
                className="px-4 py-1.5 text-xs font-semibold text-white bg-[#173B70] hover:bg-[#122e56] disabled:opacity-30 disabled:pointer-events-none rounded-md transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
              >
                <span>Paso siguiente</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* NORMAS DE SEGURIDAD (8 Normas) */}
      <section className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 space-y-4 shadow-xs">
        <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
          <div className="w-9 h-9 rounded-lg bg-[#173B70]/10 text-[#173B70] flex items-center justify-center">
            <ShieldCheck className="w-5 h-5 text-[#173B70]" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-[#173B70]">
              Normas de Bioseguridad y Cuidado del Equipo
            </h3>
            <p className="text-xs text-slate-500">
              Disposiciones obligatorias para los estudiantes durante la estancia en el laboratorio escolar
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-1">
          {SAFETY_RULES.map((rule) => (
            <div
              key={rule.id}
              className="p-4 rounded-xl border border-slate-200 bg-slate-50/60 flex items-start gap-3.5 text-xs hover:border-[#16A6A0]/40 transition-colors"
            >
              <span className="w-6 h-6 rounded-md bg-[#173B70] text-white font-mono font-bold flex items-center justify-center text-[11px] shrink-0 mt-0.5">
                {rule.id}
              </span>
              <div className="space-y-1">
                <p className="font-semibold text-slate-900 leading-snug">
                  {rule.rule}
                </p>
                <p className="text-slate-600 leading-relaxed">
                  <span className="font-medium text-slate-700">Justificación científica: </span>
                  {rule.rationale}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ACTIVIDAD DE VERDADERO O FALSO */}
      <section className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 space-y-5 shadow-xs">
        <div className="border-b border-slate-100 pb-3">
          <span className="text-xs font-semibold text-[#16A6A0] uppercase tracking-wider block mb-1">
            Autoevaluación Rápida
          </span>
          <h3 className="text-lg font-bold text-[#173B70]">
            Comprobación Formativa: Verdadero o Falso
          </h3>
          <p className="text-xs text-slate-500">
            Responde los siguientes enunciados sobre el manejo correcto y seguro del microscopio:
          </p>
        </div>

        <div className="space-y-3">
          {TRUE_FALSE_QUESTIONS.map((q) => {
            const hasAnswered = tfChecked[q.id];
            const userAnswer = tfAnswers[q.id];
            const isCorrect = hasAnswered && userAnswer === q.isTrue;

            return (
              <div
                key={q.id}
                className={`p-4 rounded-xl border text-xs sm:text-sm transition-colors ${
                  hasAnswered
                    ? isCorrect
                      ? 'bg-emerald-50/60 border-emerald-300'
                      : 'bg-rose-50/60 border-rose-300'
                    : 'bg-slate-50/40 border-slate-200'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <p className="font-medium text-slate-800">
                    <strong className="font-mono text-[#173B70] mr-2">{q.id}.</strong>
                    {q.statement}
                  </p>

                  <div className="flex items-center gap-1.5 shrink-0">
                    <button
                      onClick={() => handleTfSelect(q.id, true)}
                      className={`px-3 py-1.5 text-xs font-semibold rounded-md border transition-colors cursor-pointer ${
                        hasAnswered && userAnswer === true
                          ? 'bg-[#173B70] text-white border-[#173B70] shadow-xs'
                          : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      Verdadero
                    </button>

                    <button
                      onClick={() => handleTfSelect(q.id, false)}
                      className={`px-3 py-1.5 text-xs font-semibold rounded-md border transition-colors cursor-pointer ${
                        hasAnswered && userAnswer === false
                          ? 'bg-[#173B70] text-white border-[#173B70] shadow-xs'
                          : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      Falso
                    </button>
                  </div>
                </div>

                {hasAnswered && (
                  <div className="mt-2.5 pt-2.5 border-t border-slate-200/80 text-xs leading-relaxed">
                    <span className={`font-semibold mr-1.5 ${isCorrect ? 'text-emerald-700' : 'text-rose-700'}`}>
                      {isCorrect ? '✓ Correcto.' : '✕ Incorrecto.'}
                    </span>
                    <span className="text-slate-700">{q.explanation}</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
