import React, { useState } from 'react';
import { MICROSCOPE_PARTS } from '../data/microscopeData';
import { MicroscopePart } from '../types/microscope';
import { MicroscopeSvg } from './MicroscopeSvg';
import { BookOpen, CheckCircle, HelpCircle, RotateCcw, ArrowRight } from 'lucide-react';

export const MicroscopeGuide: React.FC = () => {
  const [selectedPartId, setSelectedPartId] = useState<string>(MICROSCOPE_PARTS[0].id);
  const [hoveredPartId, setHoveredPartId] = useState<string | null>(null);
  const [filterSystem, setFilterSystem] = useState<'all' | 'optico' | 'mecanico' | 'iluminacion'>('all');

  // Estado del juego de identificación
  const [quizActive, setQuizActive] = useState(false);
  const [quizIndex, setQuizIndex] = useState(0);
  const [quizScore, setQuizScore] = useState(0);
  const [quizFeedback, setQuizFeedback] = useState<{ isCorrect: boolean; message: string } | null>(null);
  const [quizAnswered, setQuizAnswered] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [quizQuestions, setQuizQuestions] = useState<MicroscopePart[]>([]);

  const startQuiz = () => {
    const shuffled = [...MICROSCOPE_PARTS].sort(() => 0.5 - Math.random()).slice(0, 8);
    setQuizQuestions(shuffled);
    setQuizIndex(0);
    setQuizScore(0);
    setQuizFeedback(null);
    setQuizAnswered(false);
    setQuizCompleted(false);
    setQuizActive(true);
  };

  const currentQuizPart = quizQuestions[quizIndex];

  // Distractores para el juego
  const getQuizOptions = () => {
    if (!currentQuizPart) return [];
    const others = MICROSCOPE_PARTS.filter(p => p.id !== currentQuizPart.id);
    const distractors = [...others].sort(() => 0.5 - Math.random()).slice(0, 3);
    return [...distractors, currentQuizPart].sort(() => 0.5 - Math.random());
  };

  const [currentOptions, setCurrentOptions] = useState<MicroscopePart[]>([]);

  React.useEffect(() => {
    if (quizActive && currentQuizPart) {
      setCurrentOptions(getQuizOptions());
    }
  }, [quizIndex, quizActive]);

  const handleAnswerQuiz = (chosenPart: MicroscopePart) => {
    if (quizAnswered) return;
    const isCorrect = chosenPart.id === currentQuizPart.id;
    if (isCorrect) {
      setQuizScore(prev => prev + 1);
      setQuizFeedback({
        isCorrect: true,
        message: `¡Correcto! El número señalado corresponde a "${currentQuizPart.name}". ${currentQuizPart.shortDesc}`
      });
    } else {
      setQuizFeedback({
        isCorrect: false,
        message: `Incorrecto. Has elegido "${chosenPart.name}". La parte señalada en la figura es "${currentQuizPart.name}".`
      });
    }
    setQuizAnswered(true);
  };

  const handleNextQuizQuestion = () => {
    if (quizIndex + 1 < quizQuestions.length) {
      setQuizIndex(prev => prev + 1);
      setQuizAnswered(false);
      setQuizFeedback(null);
    } else {
      setQuizCompleted(true);
    }
  };

  const activePart = MICROSCOPE_PARTS.find(p => p.id === (hoveredPartId || selectedPartId)) || MICROSCOPE_PARTS[0];

  const filteredParts = filterSystem === 'all'
    ? MICROSCOPE_PARTS
    : MICROSCOPE_PARTS.filter(p => p.system === filterSystem);

  return (
    <div className="space-y-8">
      {/* Encabezado y definición científica */}
      <section className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 space-y-4 shadow-2xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
          <div>
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
              Sección 2 · Anatomía del Instrumento
            </div>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
              Conoce el Microscopio Óptico Compuesto
            </h2>
          </div>

          <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-md shrink-0">
            <button
              onClick={() => setQuizActive(false)}
              className={`px-3 py-1.5 text-xs font-semibold rounded transition-colors ${
                !quizActive ? 'bg-white text-slate-900 shadow-2xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Exploración Libre
            </button>
            <button
              onClick={startQuiz}
              className={`px-3 py-1.5 text-xs font-semibold rounded transition-colors flex items-center gap-1.5 ${
                quizActive ? 'bg-slate-900 text-white' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Actividad: Identificar Partes</span>
            </button>
          </div>
        </div>

        {/* Cita textual requerida */}
        <p className="text-sm sm:text-base text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-lg border border-slate-200">
          "El microscopio óptico es un instrumento que utiliza lentes y luz para observar objetos
          y estructuras que son demasiado pequeños para distinguirlos a simple vista".
        </p>
      </section>

      {/* MODO 1: EXPLORACIÓN INTERACTIVA */}
      {!quizActive ? (
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Columna Izquierda: Diagrama Vectorial Científico */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-xl p-6 shadow-2xs space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="text-xs font-medium text-slate-500">
                Haz clic sobre los números o el listado para revisar la función
              </span>
              <span className="text-xs font-mono text-slate-400">12 componentes</span>
            </div>

            {/* Filtros de sistemas sin pills */}
            <div className="flex flex-wrap items-center gap-1 text-xs">
              <span className="text-slate-400 mr-2">Sistemas:</span>
              <button
                onClick={() => setFilterSystem('all')}
                className={`px-2.5 py-1 rounded font-medium transition-colors ${
                  filterSystem === 'all' ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                Todos (12)
              </button>
              <button
                onClick={() => setFilterSystem('optico')}
                className={`px-2.5 py-1 rounded font-medium transition-colors ${
                  filterSystem === 'optico' ? 'bg-slate-800 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                Sistema Óptico (2)
              </button>
              <button
                onClick={() => setFilterSystem('mecanico')}
                className={`px-2.5 py-1 rounded font-medium transition-colors ${
                  filterSystem === 'mecanico' ? 'bg-slate-800 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                Sistema Mecánico (8)
              </button>
              <button
                onClick={() => setFilterSystem('iluminacion')}
                className={`px-2.5 py-1 rounded font-medium transition-colors ${
                  filterSystem === 'iluminacion' ? 'bg-slate-800 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                Sistema de Iluminación (2)
              </button>
            </div>

            <div className="py-2">
              <MicroscopeSvg
                parts={MICROSCOPE_PARTS}
                selectedPartId={selectedPartId}
                onSelectPart={(id) => setSelectedPartId(id)}
                hoveredPartId={hoveredPartId}
                onHoverPart={(id) => setHoveredPartId(id)}
              />
            </div>

            <div className="text-[11px] text-slate-400 text-center italic">
              Figura 2.1: Esquema de trayectoria óptica y soporte mecánico en un microscopio compuesto escolar.
            </div>
          </div>

          {/* Columna Derecha: Tarjeta descriptiva sobria */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-2xs space-y-4 sticky top-20">
              <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                <span className="text-xs font-mono text-slate-400">
                  PARTE #{MICROSCOPE_PARTS.findIndex(p => p.id === activePart.id) + 1}
                </span>
                <span className="text-xs font-semibold text-slate-600">
                  {activePart.systemName}
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  {activePart.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-normal font-medium">
                  {activePart.shortDesc}
                </p>
              </div>

              <div className="space-y-3 pt-2 text-xs leading-relaxed">
                <div className="border border-slate-200 rounded-lg p-3 bg-slate-50/70">
                  <strong className="block text-slate-800 font-semibold mb-1">
                    Descripción física:
                  </strong>
                  <p className="text-slate-600">
                    {activePart.fullDesc}
                  </p>
                </div>

                <div className="border border-slate-200 rounded-lg p-3 bg-slate-50/70">
                  <strong className="block text-slate-800 font-semibold mb-1">
                    Función óptica o mecánica:
                  </strong>
                  <p className="text-slate-600">
                    {activePart.functionDesc}
                  </p>
                </div>
              </div>

              {/* Selector en lista compacta */}
              <div className="pt-2 border-t border-slate-100">
                <span className="text-[11px] font-semibold text-slate-500 uppercase block mb-2">
                  Seleccionar componente:
                </span>
                <div className="grid grid-cols-2 gap-1 max-h-48 overflow-y-auto pr-1">
                  {filteredParts.map((part) => (
                    <button
                      key={part.id}
                      onClick={() => setSelectedPartId(part.id)}
                      className={`text-left px-2 py-1.5 text-xs rounded transition-colors truncate ${
                        selectedPartId === part.id
                          ? 'bg-slate-900 text-white font-semibold'
                          : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      {MICROSCOPE_PARTS.findIndex(p => p.id === part.id) + 1}. {part.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        /* MODO 2: ACTIVIDAD "¿Puedes identificar las partes del microscopio?" */
        <section className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 space-y-6 shadow-2xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
            <div>
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Actividad Práctica
              </span>
              <h3 className="text-xl font-bold text-slate-900">
                ¿Puedes identificar las partes del microscopio?
              </h3>
            </div>

            {!quizCompleted && (
              <div className="flex items-center gap-3 text-xs text-slate-600">
                <span>Pregunta <strong className="font-mono text-slate-900">{quizIndex + 1}</strong> de {quizQuestions.length}</span>
                <span>·</span>
                <span>Aciertos: <strong className="font-mono text-slate-900">{quizScore}</strong></span>
              </div>
            )}
          </div>

          {!quizCompleted && currentQuizPart ? (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 bg-slate-50 border border-slate-200 rounded-lg p-4">
                <div className="text-xs text-slate-600 font-medium text-center mb-2">
                  Observa la parte señalada en la figura:
                </div>
                <MicroscopeSvg
                  parts={MICROSCOPE_PARTS}
                  selectedPartId={currentQuizPart.id}
                  onSelectPart={() => {}}
                  hoveredPartId={null}
                  onHoverPart={() => {}}
                  quizTargetPartId={currentQuizPart.id}
                />
              </div>

              <div className="lg:col-span-6 space-y-4">
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                  <span className="text-xs font-mono font-semibold text-slate-500">
                    Posición #{MICROSCOPE_PARTS.findIndex(p => p.id === currentQuizPart.id) + 1}
                  </span>
                  <p className="text-sm font-semibold text-slate-900 mt-1">
                    ¿Cuál es el nombre correcto del componente señalado en el microscopio?
                  </p>
                </div>

                <div className="space-y-2">
                  {currentOptions.map((opt) => (
                    <button
                      key={opt.id}
                      disabled={quizAnswered}
                      onClick={() => handleAnswerQuiz(opt)}
                      className={`w-full text-left p-3 rounded-lg border text-xs sm:text-sm font-medium transition-colors ${
                        quizAnswered
                          ? opt.id === currentQuizPart.id
                            ? 'bg-emerald-50 border-emerald-500 text-emerald-950 font-semibold'
                            : 'bg-white border-slate-200 text-slate-400 opacity-60'
                          : 'bg-white border-slate-200 text-slate-800 hover:border-slate-400 hover:bg-slate-50'
                      }`}
                    >
                      {opt.name}
                    </button>
                  ))}
                </div>

                {/* Retroalimentación inmediata */}
                {quizFeedback && (
                  <div className={`p-4 rounded-lg border text-xs sm:text-sm leading-relaxed ${
                    quizFeedback.isCorrect
                      ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
                      : 'bg-slate-50 border-slate-300 text-slate-800'
                  }`}>
                    <p className="font-semibold mb-1">
                      {quizFeedback.isCorrect ? '✓ Respuesta Correcta' : '✕ Respuesta Incorrecta'}
                    </p>
                    <p>{quizFeedback.message}</p>

                    <button
                      onClick={handleNextQuizQuestion}
                      className="mt-3 px-4 py-2 bg-slate-900 text-white rounded text-xs font-semibold hover:bg-slate-800 transition-colors flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>{quizIndex + 1 < quizQuestions.length ? 'Siguiente pregunta' : 'Ver resultado'}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="text-center py-8 max-w-sm mx-auto space-y-3">
              <h4 className="text-lg font-bold text-slate-900">
                Actividad finalizada
              </h4>
              <p className="text-xs sm:text-sm text-slate-600">
                Has obtenido <strong className="font-mono text-slate-900">{quizScore}</strong> aciertos de {quizQuestions.length} preguntas.
              </p>
              <div className="pt-2 flex justify-center gap-3">
                <button
                  onClick={startQuiz}
                  className="px-4 py-2 text-xs font-semibold bg-slate-900 text-white rounded hover:bg-slate-800 transition-colors flex items-center gap-1.5"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Repetir actividad</span>
                </button>
                <button
                  onClick={() => setQuizActive(false)}
                  className="px-4 py-2 text-xs font-semibold bg-slate-100 text-slate-700 rounded hover:bg-slate-200 transition-colors"
                >
                  Volver a la exploración
                </button>
              </div>
            </div>
          )}
        </section>
      )}
    </div>
  );
};
