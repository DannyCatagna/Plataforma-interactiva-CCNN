import React, { useState } from 'react';
import { QUIZ_QUESTIONS } from '../data/microscopeData';
import { PrintableWorksheet } from './PrintableWorksheet';
import { Printer, FileDown, Check, X, RotateCcw, FileText, CheckCircle } from 'lucide-react';

interface WorksheetSectionProps {
  onQuizComplete?: (score: number) => void;
}

export const WorksheetSection: React.FC<WorksheetSectionProps> = ({ onQuizComplete }) => {
  const [activeView, setActiveView] = useState<'worksheet' | 'quiz'>('worksheet');
  const [selectedAnswers, setSelectedAnswers] = useState<{ [qId: number]: number }>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);

  const handleSelectOption = (questionId: number, optionIndex: number) => {
    if (isSubmitted) return;
    setSelectedAnswers(prev => ({ ...prev, [questionId]: optionIndex }));
  };

  const handleCheckQuiz = () => {
    let currentScore = 0;
    QUIZ_QUESTIONS.forEach(q => {
      if (selectedAnswers[q.id] === q.correctAnswer) {
        currentScore += 1;
      }
    });
    setScore(currentScore);
    setIsSubmitted(true);
    onQuizComplete?.(currentScore);
  };

  const handleResetQuiz = () => {
    setSelectedAnswers({});
    setIsSubmitted(false);
    setScore(0);
  };

  const handlePrint = () => {
    window.print();
  };

  const answeredCount = Object.keys(selectedAnswers).length;

  return (
    <div className="space-y-8">
      {/* Encabezado y Acciones de Impresión / Descarga */}
      <section className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 space-y-4 shadow-2xs no-print">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-100 pb-4">
          <div>
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
              Sección 6 · Documentación y Evaluación
            </div>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
              Hoja de Trabajo A4 y Evaluación Formativa
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl leading-relaxed">
              Descarga la guía física oficial lista para imprimir en papel A4 o resuelve el cuestionario
              digital de diez preguntas para evaluar tus conocimientos sobre el microscopio, células y tejidos.
            </p>
          </div>

          {/* Botones obligatorios de impresión y descarga */}
          <div className="flex flex-wrap items-center gap-2 shrink-0">
            <button
              onClick={handlePrint}
              className="px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded transition-colors flex items-center gap-2 cursor-pointer shadow-2xs"
            >
              <Printer className="w-4 h-4 text-slate-300" />
              <span>Imprimir hoja de trabajo</span>
            </button>

            <button
              onClick={handlePrint}
              className="px-4 py-2 text-xs sm:text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-300 rounded transition-colors flex items-center gap-2 cursor-pointer"
              title="Guardar como PDF en el diálogo de impresión"
            >
              <FileDown className="w-4 h-4 text-slate-600" />
              <span>Descargar hoja en PDF</span>
            </button>
          </div>
        </div>

        {/* Pestañas de modo */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveView('worksheet')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded transition-colors flex items-center gap-1.5 ${
              activeView === 'worksheet'
                ? 'bg-slate-900 text-white'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Vista de la Hoja Física A4 (4 Páginas)</span>
          </button>

          <button
            onClick={() => setActiveView('quiz')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded transition-colors flex items-center gap-1.5 ${
              activeView === 'quiz'
                ? 'bg-slate-900 text-white'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <span>Cuestionario Digital (10 preguntas · 10 pts)</span>
          </button>
        </div>
      </section>

      {/* VISTA 1: HOJA DE TRABAJO IMPRIMIBLE OFICIAL */}
      {activeView === 'worksheet' && (
        <section className="space-y-4">
          <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 text-xs text-slate-700 flex flex-col sm:flex-row sm:items-center justify-between gap-3 no-print">
            <p>
              <strong>Indicaciones para el profesorado y alumnado:</strong> El siguiente documento está preparado
              para imprimirse en formato <strong>A4 vertical (210 × 297 mm)</strong> sin elementos de la interfaz web,
              con espacios reglamentarios de al menos 8 × 8 cm para los dibujos microscópicos y rúbrica de autoevaluación.
            </p>
            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 bg-slate-900 text-white text-xs font-semibold rounded hover:bg-slate-800 transition-colors shrink-0 flex items-center gap-1.5 cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Imprimir ahora</span>
            </button>
          </div>

          {/* Contenedor del documento A4 con borde tenue de papel */}
          <div className="bg-slate-100 p-2 sm:p-8 rounded-xl border border-slate-300 overflow-x-auto shadow-inner">
            <div className="bg-white mx-auto shadow-sm print:shadow-none">
              <PrintableWorksheet />
            </div>
          </div>
        </section>
      )}

      {/* VISTA 2: CUESTIONARIO DIGITAL DE 10 PREGUNTAS */}
      {activeView === 'quiz' && (
        <section className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 space-y-6 shadow-2xs no-print">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
            <div>
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Evaluación Digital de Contenidos
              </span>
              <h3 className="text-xl font-bold text-slate-900">
                Cuestionario de Ciencias Naturales
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                10 preguntas de opción múltiple · Calificación sobre 10 puntos
              </p>
            </div>

            {isSubmitted && (
              <div className="p-3 bg-slate-50 border border-slate-300 rounded text-center">
                <span className="text-[11px] text-slate-500 font-semibold block uppercase">Calificación:</span>
                <span className="text-2xl font-bold text-slate-900 font-mono">
                  {score} / 10
                </span>
              </div>
            )}
          </div>

          <div className="space-y-5">
            {QUIZ_QUESTIONS.map((q, qIndex) => {
              const selectedOption = selectedAnswers[q.id];
              const isCorrect = isSubmitted && selectedOption === q.correctAnswer;
              const isWrong = isSubmitted && selectedOption !== undefined && selectedOption !== q.correctAnswer;

              return (
                <div
                  key={q.id}
                  className={`p-4 rounded-lg border text-xs sm:text-sm transition-colors ${
                    isSubmitted
                      ? isCorrect
                        ? 'bg-emerald-50/40 border-emerald-300'
                        : 'bg-rose-50/30 border-rose-300'
                      : 'bg-slate-50/50 border-slate-200'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3 mb-2.5">
                    <h4 className="font-semibold text-slate-900 leading-snug">
                      <span className="font-mono text-slate-500 mr-1.5">{qIndex + 1}.</span>
                      {q.question}
                    </h4>

                    {isSubmitted && (
                      <span className="shrink-0 font-bold text-xs font-mono">
                        {isCorrect ? (
                          <span className="text-emerald-700">✓ 1.0 pto</span>
                        ) : (
                          <span className="text-rose-700">✕ 0.0 pto</span>
                        )}
                      </span>
                    )}
                  </div>

                  {/* 4 Opciones de respuesta */}
                  <div className="grid grid-cols-1 gap-1.5">
                    {q.options.map((opt, optIdx) => {
                      const isOptionSelected = selectedOption === optIdx;
                      const isOptionCorrect = isSubmitted && optIdx === q.correctAnswer;

                      return (
                        <button
                          key={optIdx}
                          disabled={isSubmitted}
                          onClick={() => handleSelectOption(q.id, optIdx)}
                          className={`w-full text-left p-2.5 rounded border text-xs font-medium transition-colors flex items-center justify-between ${
                            isSubmitted
                              ? isOptionCorrect
                                ? 'bg-emerald-50 border-emerald-400 text-emerald-950 font-semibold'
                                : isOptionSelected
                                ? 'bg-rose-50 border-rose-300 text-rose-950'
                                : 'bg-white border-slate-200 text-slate-400 opacity-60'
                              : isOptionSelected
                              ? 'bg-slate-900 border-slate-900 text-white font-semibold'
                              : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center text-[10px] font-mono shrink-0">
                              {['A', 'B', 'C', 'D'][optIdx]}
                            </span>
                            <span>{opt}</span>
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  {/* Retroalimentación explicativa */}
                  {isSubmitted && (
                    <div className="mt-3 pt-2.5 border-t border-slate-200 text-xs text-slate-700 leading-relaxed">
                      <strong className="text-slate-900 font-semibold">Explicación didáctica: </strong>
                      <span>{q.explanation}</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Barra de envío o reintento */}
          <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="text-xs text-slate-500">
              Respondidas: <strong className="font-mono text-slate-800">{answeredCount}</strong> de {QUIZ_QUESTIONS.length}
            </div>

            <div className="flex items-center gap-3">
              {!isSubmitted ? (
                <button
                  disabled={answeredCount < QUIZ_QUESTIONS.length}
                  onClick={handleCheckQuiz}
                  className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 disabled:opacity-30 disabled:pointer-events-none text-white text-xs sm:text-sm font-semibold rounded transition-colors cursor-pointer"
                >
                  {answeredCount < QUIZ_QUESTIONS.length
                    ? `Completa las ${QUIZ_QUESTIONS.length - answeredCount} pendientes`
                    : 'Calificar cuestionario'}
                </button>
              ) : (
                <button
                  onClick={handleResetQuiz}
                  className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Intentar de nuevo</span>
                </button>
              )}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};
