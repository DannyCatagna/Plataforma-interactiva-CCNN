import React, { useState, useEffect, useRef } from 'react';
import { UnachLogo } from './UnachLogo';
import {
  FileEdit,
  Save,
  Trash2,
  Printer,
  Download,
  Plus,
  CheckCircle,
  Eye,
  Eraser,
  Palette,
  BookOpen,
  Calendar,
  User,
  X
} from 'lucide-react';

export interface LabNoteEntry {
  id: string;
  timestamp: string;
  studentName: string;
  parallel: string;
  specimen: string;
  magnification: string;
  stain: string;
  identifiedStructures: string[];
  notes: string;
  conclusion: string;
  drawingDataUrl?: string;
}

const STORAGE_KEY = 'mundo_microscopico_lab_notes_v1';

export const LabNotesModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose
}) => {
  const [notesList, setNotesList] = useState<LabNoteEntry[]>([]);
  const [activeNoteId, setActiveNoteId] = useState<string | null>(null);

  // Formulario actual
  const [studentName, setStudentName] = useState('');
  const [parallel, setParallel] = useState('8.° A');
  const [specimen, setSpecimen] = useState('Epidermis de cebolla (Allium cepa)');
  const [magnification, setMagnification] = useState('100x');
  const [stain, setStain] = useState('Solución de Lugol');
  const [structures, setStructures] = useState<string[]>(['Pared celular', 'Núcleo']);
  const [notes, setNotes] = useState('');
  const [conclusion, setConclusion] = useState('');
  const [saveStatus, setSaveStatus] = useState<string | null>(null);

  // Canvas para dibujo microscópico digital
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [drawColor, setDrawColor] = useState('#173B70');
  const [drawSize, setDrawSize] = useState(2);

  // Cargar apuntes guardados al iniciar
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        setNotesList(parsed);
        if (parsed.length > 0) {
          loadNoteToForm(parsed[0]);
        }
      }
    } catch (e) {
      console.error('Error cargando apuntes de laboratorio:', e);
    }
  }, []);

  const loadNoteToForm = (item: LabNoteEntry) => {
    setActiveNoteId(item.id);
    setStudentName(item.studentName);
    setParallel(item.parallel);
    setSpecimen(item.specimen);
    setMagnification(item.magnification);
    setStain(item.stain);
    setStructures(item.identifiedStructures || []);
    setNotes(item.notes || '');
    setConclusion(item.conclusion || '');

    // Cargar imagen en canvas si existe
    if (item.drawingDataUrl && canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        const img = new Image();
        img.onload = () => {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(img, 0, 0);
        };
        img.src = item.drawingDataUrl;
      }
    } else {
      clearCanvas();
    }
  };

  const handleCreateNew = () => {
    setActiveNoteId(null);
    setSpecimen('Epidermis de cebolla (Allium cepa)');
    setMagnification('100x');
    setStain('Solución de Lugol');
    setStructures(['Pared celular', 'Núcleo']);
    setNotes('');
    setConclusion('');
    clearCanvas();
    setSaveStatus('Nueva ficha lista para registrar.');
    setTimeout(() => setSaveStatus(null), 2500);
  };

  // Canvas drawing handlers (mouse & touch)
  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement>) => {
    setIsDrawing(true);
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const rect = canvas.getBoundingClientRect();
    ctx.beginPath();
    ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const rect = canvas.getBoundingClientRect();
    ctx.strokeStyle = drawColor;
    ctx.lineWidth = drawSize;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.lineTo(e.clientX - rect.left, e.clientY - rect.top);
    ctx.stroke();
  };

  const startDrawingTouch = (e: React.TouchEvent<HTMLCanvasElement>) => {
    setIsDrawing(true);
    const canvas = canvasRef.current;
    if (!canvas || e.touches.length === 0) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const rect = canvas.getBoundingClientRect();
    const touch = e.touches[0];
    ctx.beginPath();
    ctx.moveTo(touch.clientX - rect.left, touch.clientY - rect.top);
  };

  const drawTouch = (e: React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas || e.touches.length === 0) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const rect = canvas.getBoundingClientRect();
    const touch = e.touches[0];
    ctx.strokeStyle = drawColor;
    ctx.lineWidth = drawSize;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.lineTo(touch.clientX - rect.left, touch.clientY - rect.top);
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  const handleSaveNote = () => {
    const canvas = canvasRef.current;
    const drawingDataUrl = canvas ? canvas.toDataURL('image/png') : undefined;

    const newNote: LabNoteEntry = {
      id: activeNoteId || `note_${Date.now()}`,
      timestamp: new Date().toLocaleString('es-EC', { dateStyle: 'short', timeStyle: 'short' }),
      studentName: studentName.trim() || 'Estudiante de 8.° EGB',
      parallel,
      specimen,
      magnification,
      stain,
      identifiedStructures: structures,
      notes,
      conclusion,
      drawingDataUrl
    };

    let updated: LabNoteEntry[];
    if (activeNoteId) {
      updated = notesList.map(n => n.id === activeNoteId ? newNote : n);
    } else {
      updated = [newNote, ...notesList];
      setActiveNoteId(newNote.id);
    }

    setNotesList(updated);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      setSaveStatus('¡Apuntes guardados con éxito en la libreta!');
      setTimeout(() => setSaveStatus(null), 3000);
    } catch (e) {
      console.error('Error guardando en localStorage:', e);
      setSaveStatus('No se pudo guardar localmente');
    }
  };

  const handleDeleteNote = (id: string) => {
    if (confirm('¿Deseas eliminar este registro de observación?')) {
      const updated = notesList.filter(n => n.id !== id);
      setNotesList(updated);
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      } catch (e) {
        console.error(e);
      }
      if (activeNoteId === id) {
        if (updated.length > 0) {
          loadNoteToForm(updated[0]);
        } else {
          handleCreateNew();
        }
      }
    }
  };

  const toggleStructure = (name: string) => {
    if (structures.includes(name)) {
      setStructures(structures.filter(s => s !== name));
    } else {
      setStructures([...structures, name]);
    }
  };

  const handlePrintNotes = () => {
    window.print();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden">
        {/* Cabecera del modal */}
        <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-3">
            <UnachLogo size="sm" showSubtitle={false} />
            <div className="h-5 w-[1px] bg-slate-200 hidden sm:block" />
            <div>
              <h3 className="text-base font-bold text-[#173B70] flex items-center gap-2">
                <FileEdit className="w-4 h-4 text-[#16A6A0]" />
                <span>Cuaderno Digital de Apuntes de Laboratorio</span>
              </h3>
              <p className="text-[11px] text-slate-500">
                Unidad Educativa Guano · Ciencias Naturales (8.º EGB)
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-200/70 transition-colors cursor-pointer"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cuerpo con 2 columnas: Lista de notas guardadas / Formulario y Dibujo */}
        <div className="flex-1 overflow-y-auto p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 bg-white">
          {/* Columna Izquierda: Mis apuntes guardados */}
          <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-slate-200 pr-0 lg:pr-5 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[#173B70] uppercase tracking-wider">
                Observaciones ({notesList.length})
              </span>
              <button
                onClick={handleCreateNew}
                className="px-2.5 py-1 text-xs font-semibold bg-[#173B70] text-white rounded-md hover:bg-[#122e56] transition-colors flex items-center gap-1 cursor-pointer shadow-xs"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Nueva</span>
              </button>
            </div>

            <div className="space-y-2 max-h-[500px] overflow-y-auto pr-1">
              {notesList.map((note) => (
                <div
                  key={note.id}
                  onClick={() => loadNoteToForm(note)}
                  className={`p-3 rounded-xl border text-xs cursor-pointer transition-all ${
                    activeNoteId === note.id
                      ? 'bg-[#173B70] border-[#173B70] text-white shadow-xs'
                      : 'bg-slate-50 border-slate-200 text-slate-800 hover:border-[#16A6A0] hover:bg-slate-100/70'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <strong className="font-semibold block truncate leading-snug">
                      {note.specimen}
                    </strong>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDeleteNote(note.id);
                      }}
                      className="opacity-70 hover:opacity-100 p-0.5 text-rose-300 hover:text-rose-100"
                      title="Eliminar este apunte"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <div className="flex items-center justify-between mt-1 text-[10px] opacity-80">
                    <span>Aumento: {note.magnification}</span>
                    <span>{note.timestamp.split(',')[0]}</span>
                  </div>
                </div>
              ))}

              {notesList.length === 0 && (
                <div className="text-center py-8 text-xs text-slate-400 italic">
                  Aún no has registrado apuntes. Completa el formulario de la derecha para guardar tu primera observación de laboratorio.
                </div>
              )}
            </div>
          </div>

          {/* Columna Derecha: Formulario de Registro y Dibujo */}
          <div className="lg:col-span-8 space-y-5">
            {/* Datos del estudiante */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-slate-50 p-3.5 rounded-xl border border-slate-200 text-xs">
              <div>
                <label className="font-semibold text-slate-700 block mb-1">
                  Nombre del Estudiante:
                </label>
                <input
                  type="text"
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  placeholder="Escribe tu nombre y apellido..."
                  className="w-full p-2 rounded-lg border border-slate-200 bg-white outline-none focus:border-[#16A6A0]"
                />
              </div>

              <div>
                <label className="font-semibold text-slate-700 block mb-1">
                  Paralelo / Curso:
                </label>
                <select
                  value={parallel}
                  onChange={(e) => setParallel(e.target.value)}
                  className="w-full p-2 rounded-lg border border-slate-200 bg-white outline-none"
                >
                  <option value="8.° A">8.° de EGB - Paralelo A</option>
                  <option value="8.° B">8.° de EGB - Paralelo B</option>
                  <option value="8.° C">8.° de EGB - Paralelo C</option>
                  <option value="8.° D">8.° de EGB - Paralelo D</option>
                </select>
              </div>
            </div>

            {/* Parámetros de la preparación */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div>
                <label className="font-semibold text-slate-700 block mb-1">
                  Muestra Observada:
                </label>
                <select
                  value={specimen}
                  onChange={(e) => setSpecimen(e.target.value)}
                  className="w-full p-2 rounded-lg border border-slate-200 bg-white"
                >
                  <option value="Epidermis de cebolla (Allium cepa)">Epidermis de cebolla</option>
                  <option value="Mucosa bucal humana">Células de mucosa bucal</option>
                  <option value="Hoja verde de Elodea (cloroplastos)">Hoja verde (Elodea)</option>
                  <option value="Tejido muscular estriado">Tejido muscular estriado</option>
                  <option value="Tejido nervioso (neuronas)">Tejido nervioso (neuronas)</option>
                  <option value="Otra muestra biológica">Otra preparación</option>
                </select>
              </div>

              <div>
                <label className="font-semibold text-slate-700 block mb-1">
                  Aumento Total:
                </label>
                <select
                  value={magnification}
                  onChange={(e) => setMagnification(e.target.value)}
                  className="w-full p-2 rounded-lg border border-slate-200 bg-white"
                >
                  <option value="40x">40x (Ocular 10x · Obj. 4x)</option>
                  <option value="100x">100x (Ocular 10x · Obj. 10x)</option>
                  <option value="400x">400x (Ocular 10x · Obj. 40x)</option>
                </select>
              </div>

              <div>
                <label className="font-semibold text-slate-700 block mb-1">
                  Tinción / Montaje:
                </label>
                <select
                  value={stain}
                  onChange={(e) => setStain(e.target.value)}
                  className="w-full p-2 rounded-lg border border-slate-200 bg-white"
                >
                  <option value="Solución de Lugol">Lugol / Yodo</option>
                  <option value="Azul de metileno (0.1%)">Azul de metileno</option>
                  <option value="Montaje en fresco con agua">Agua (En fresco)</option>
                  <option value="Hematoxilina y Eosina">Hematoxilina-Eosina</option>
                </select>
              </div>
            </div>

            {/* Estructuras identificadas (Checkboxes rápidos) */}
            <div className="space-y-1.5 text-xs">
              <label className="font-semibold text-slate-700 block">
                Estructuras que lograste identificar con nitidez:
              </label>
              <div className="flex flex-wrap gap-1.5">
                {[
                  'Pared celular',
                  'Membrana plasmática',
                  'Núcleo celular',
                  'Nucléolo',
                  'Cloroplastos',
                  'Vacuola central',
                  'Citoplasma granular',
                  'Estriaciones transversales',
                  'Soma y dendritas'
                ].map((name) => (
                  <button
                    key={name}
                    type="button"
                    onClick={() => toggleStructure(name)}
                    className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition-colors ${
                      structures.includes(name)
                        ? 'bg-[#173B70] text-white font-semibold'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {structures.includes(name) ? '✓ ' : '+ '}
                    {name}
                  </button>
                ))}
              </div>
            </div>

            {/* Cuadro de apuntes y descripción detallada */}
            <div className="space-y-1 text-xs">
              <label className="font-semibold text-slate-700 block">
                Descripción detallada de la observación:
              </label>
              <textarea
                rows={3}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Describe la forma celular, cómo se vio la tinción, si las células estaban agrupadas o aisladas..."
                className="w-full p-2.5 rounded-lg border border-slate-200 bg-slate-50 text-xs focus:bg-white focus:border-[#16A6A0] outline-none"
              />
            </div>

            {/* Conclusión del estudiante */}
            <div className="space-y-1 text-xs">
              <label className="font-semibold text-slate-700 block">
                Conclusión biológica (¿Qué aprendiste de esta muestra?):
              </label>
              <input
                type="text"
                value={conclusion}
                onChange={(e) => setConclusion(e.target.value)}
                placeholder="Ejemplo: Se comprobó que las células de cebolla tienen forma poligonal rígida y no poseen cloroplastos..."
                className="w-full p-2.5 rounded-lg border border-slate-200 bg-slate-50 text-xs focus:bg-white focus:border-[#16A6A0] outline-none"
              />
            </div>

            {/* Área de Dibujo Microscópico Digital */}
            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-2 text-xs">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-slate-800 flex items-center gap-1.5">
                  <Palette className="w-3.5 h-3.5 text-[#16A6A0]" />
                  <span>Boceto Digital del Campo Microscópico:</span>
                </span>

                <div className="flex items-center gap-2">
                  {/* Selector de color */}
                  <div className="flex items-center gap-1">
                    {[
                      { color: '#173B70', label: 'Azul metileno' },
                      { color: '#16A6A0', label: 'Turquesa' },
                      { color: '#a16207', label: 'Ámbar Lugol' },
                      { color: '#15803d', label: 'Verde clorofila' },
                      { color: '#be123c', label: 'Rosa Eosina' },
                      { color: '#0f172a', label: 'Grafito' }
                    ].map((c) => (
                      <button
                        key={c.color}
                        type="button"
                        onClick={() => setDrawColor(c.color)}
                        className={`w-4 h-4 rounded-full border ${
                          drawColor === c.color ? 'ring-2 ring-slate-800 scale-110' : 'border-slate-300'
                        }`}
                        style={{ backgroundColor: c.color }}
                        title={c.label}
                      />
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={clearCanvas}
                    className="px-2.5 py-1 text-[11px] font-semibold text-slate-600 bg-white border border-slate-200 rounded-md hover:bg-slate-100"
                  >
                    Borrar
                  </button>
                </div>
              </div>

              {/* Canvas interactivo */}
              <div className="flex justify-center">
                <canvas
                  ref={canvasRef}
                  width={200}
                  height={200}
                  onMouseDown={startDrawing}
                  onMouseMove={draw}
                  onMouseUp={stopDrawing}
                  onMouseLeave={stopDrawing}
                  onTouchStart={startDrawingTouch}
                  onTouchMove={drawTouch}
                  onTouchEnd={stopDrawing}
                  className="bg-white rounded-full border-2 border-slate-300 shadow-inner cursor-crosshair touch-none"
                />
              </div>
              <div className="text-[10px] text-center text-slate-400">
                Traza con el ratón o dedo lo observado por el ocular
              </div>
            </div>

            {/* Notificación de guardado */}
            {saveStatus && (
              <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-900 rounded-lg text-xs flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{saveStatus}</span>
              </div>
            )}
          </div>
        </div>

        {/* Pie de controles del modal */}
        <div className="px-6 py-3.5 border-t border-slate-200 bg-slate-50 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="text-slate-500 text-[11px]">
            * Los apuntes se conservan automáticamente en la memoria de este navegador.
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleSaveNote}
              className="px-4 py-2 bg-[#173B70] hover:bg-[#122e56] text-white rounded-lg font-semibold transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
            >
              <Save className="w-3.5 h-3.5" />
              <span>Guardar en mi cuaderno</span>
            </button>

            <button
              onClick={handlePrintNotes}
              className="px-3.5 py-2 bg-white hover:bg-slate-100 border border-slate-200 text-slate-800 rounded-lg font-semibold transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5 text-[#173B70]" />
              <span>Imprimir</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
