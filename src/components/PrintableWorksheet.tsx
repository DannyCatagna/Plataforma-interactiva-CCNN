import React from 'react';
import { Microscope } from 'lucide-react';

export const PrintableWorksheet: React.FC = () => {
  return (
    <div id="printable-worksheet" className="bg-white text-black p-4 sm:p-8 max-w-[210mm] mx-auto print:p-0 print:m-0 font-serif leading-normal select-text">
      {/* =========================================================================
          PÁGINA 1 DE 4: ENCABEZADO, OBJETIVO, CONOCIMIENTOS PREVIOS E IDENTIFICACIÓN
         ========================================================================= */}
      <div className="sheet-page print:break-after-page min-h-[287mm] flex flex-col justify-between border-b-2 border-dashed border-slate-300 print:border-none pb-8 mb-8 print:pb-0 print:mb-0">
        <div>
          {/* ENCABEZADO INSTITUCIONAL OFICIAL */}
          <div className="border-2 border-black p-3 mb-4 text-center">
            <div className="text-xs uppercase tracking-wider font-sans font-bold text-slate-800">
              República del Ecuador · Ministerio de Educación
            </div>
            <h1 className="text-lg font-bold uppercase tracking-tight font-sans mt-0.5">
              Unidad Educativa Guano
            </h1>
            <div className="text-xs font-semibold uppercase tracking-wide">
              Área de Ciencias Naturales · Año Lectivo 2026 - 2027
            </div>
            <div className="mt-2 py-1 bg-slate-100 print:bg-transparent border-y border-black font-sans font-bold text-sm tracking-wide">
              PRÁCTICA DE LABORATORIO – USO DEL MICROSCOPIO Y OBSERVACIÓN DE CÉLULAS Y TEJIDOS
            </div>

            {/* Datos del estudiante */}
            <div className="grid grid-cols-12 gap-2 text-xs text-left font-sans mt-2 pt-1">
              <div className="col-span-8">
                <strong>Estudiante:</strong> <span className="border-b border-black inline-block w-[75%]">&nbsp;</span>
              </div>
              <div className="col-span-4">
                <strong>Paralelo:</strong> <span className="border-b border-black inline-block w-[50%]">&nbsp;</span>
              </div>
              <div className="col-span-4">
                <strong>Curso:</strong> Octavo año de EGB
              </div>
              <div className="col-span-4">
                <strong>Fecha:</strong> <span className="border-b border-black inline-block w-[60%]">&nbsp;</span>
              </div>
              <div className="col-span-4">
                <strong>Calificación:</strong> <span className="border-b border-black inline-block w-[40%]">&nbsp; / 10</span>
              </div>
              <div className="col-span-12">
                <strong>Docente:</strong> <span className="border-b border-black inline-block w-[80%]">&nbsp;</span>
              </div>
            </div>
          </div>

          {/* PARTE 1. OBJETIVO */}
          <div className="mb-4">
            <h2 className="text-xs font-bold font-sans uppercase bg-slate-200 print:bg-slate-200 px-2 py-0.5 border border-black mb-1">
              PARTE 1. OBJETIVO DE APRENDIZAJE
            </h2>
            <p className="text-xs italic pl-2 border-l-2 border-black">
              "Reconocer las partes del microscopio óptico y utilizarlas correctamente para observar, identificar,
              dibujar y comparar células y tejidos de origen animal y vegetal".
            </p>
          </div>

          {/* PARTE 2. CONOCIMIENTOS PREVIOS */}
          <div className="mb-4">
            <h2 className="text-xs font-bold font-sans uppercase bg-slate-200 print:bg-slate-200 px-2 py-0.5 border border-black mb-2">
              PARTE 2. CONOCIMIENTOS PREVIOS
            </h2>
            <div className="space-y-3 text-xs">
              <div>
                <p className="font-semibold">1. ¿Qué es un microscopio óptico y para qué sirve en las Ciencias Naturales?</p>
                <div className="border-b border-slate-400 h-5 mt-1" />
                <div className="border-b border-slate-400 h-5" />
              </div>
              <div>
                <p className="font-semibold">2. ¿Por qué necesitamos un microscopio para observar la gran mayoría de las células?</p>
                <div className="border-b border-slate-400 h-5 mt-1" />
                <div className="border-b border-slate-400 h-5" />
              </div>
              <div>
                <p className="font-semibold">3. ¿Cuál es la principal diferencia estructural que recuerdas entre una célula animal y una vegetal?</p>
                <div className="border-b border-slate-400 h-5 mt-1" />
                <div className="border-b border-slate-400 h-5" />
              </div>
            </div>
          </div>

          {/* PARTE 3. IDENTIFICACIÓN DEL MICROSCOPIO */}
          <div className="mb-2">
            <h2 className="text-xs font-bold font-sans uppercase bg-slate-200 print:bg-slate-200 px-2 py-0.5 border border-black mb-2">
              PARTE 3. IDENTIFICACIÓN DE LAS PARTES DEL MICROSCOPIO
            </h2>
            <p className="text-[11px] mb-2 text-slate-700">
              Observa el diagrama numerado del microscopio óptico. Escribe en las líneas numeradas inferiores
              el nombre correspondiente a cada una de las partes señaladas.
            </p>

            <div className="grid grid-cols-12 gap-3 items-center">
              {/* Diagrama en blanco y negro claro para impresión con números */}
              <div className="col-span-5 border border-slate-300 p-2 text-center bg-slate-50 print:bg-transparent">
                <svg viewBox="0 0 300 350" className="w-full max-h-[170px] mx-auto" fill="none" stroke="#000000">
                  {/* Base */}
                  <rect x="70" y="310" width="160" height="25" rx="4" strokeWidth="2" fill="#f8fafc" />
                  <text x="50" y="325" fontSize="11" fontWeight="bold" fontFamily="sans-serif">⑫</text>
                  <line x1="58" y1="322" x2="72" y2="322" strokeWidth="1" />

                  {/* Fuente de luz */}
                  <rect x="130" y="275" width="40" height="35" strokeWidth="1.5" />
                  <text x="180" y="295" fontSize="11" fontWeight="bold" fontFamily="sans-serif">⑧</text>
                  <line x1="168" y1="292" x2="178" y2="292" strokeWidth="1" />

                  {/* Condensador */}
                  <rect x="135" y="225" width="30" height="20" strokeWidth="1.5" />
                  <text x="95" y="238" fontSize="11" fontWeight="bold" fontFamily="sans-serif">⑦</text>
                  <line x1="108" y1="235" x2="135" y2="235" strokeWidth="1" />

                  {/* Platina */}
                  <line x1="80" y1="205" x2="220" y2="205" strokeWidth="3" />
                  <text x="60" y="208" fontSize="11" fontWeight="bold" fontFamily="sans-serif">⑤</text>
                  <line x1="68" y1="205" x2="80" y2="205" strokeWidth="1" />
                  {/* Pinzas */}
                  <text x="235" y="208" fontSize="11" fontWeight="bold" fontFamily="sans-serif">⑥</text>
                  <line x1="210" y1="205" x2="232" y2="205" strokeWidth="1" />

                  {/* Brazo */}
                  <path d="M 180 310 C 240 300 240 140 180 120" strokeWidth="3" fill="none" />
                  <text x="250" y="160" fontSize="11" fontWeight="bold" fontFamily="sans-serif">⑪</text>
                  <line x1="225" y1="165" x2="248" y2="165" strokeWidth="1" />

                  {/* Tornillo macrométrico y micrométrico */}
                  <circle cx="210" cy="245" r="14" strokeWidth="2" />
                  <circle cx="210" cy="245" r="6" strokeWidth="1.5" fill="#e2e8f0" />
                  <text x="240" y="242" fontSize="11" fontWeight="bold" fontFamily="sans-serif">⑨</text>
                  <text x="240" y="258" fontSize="11" fontWeight="bold" fontFamily="sans-serif">⑩</text>

                  {/* Revólver y Objetivos */}
                  <ellipse cx="150" cy="140" rx="25" ry="8" strokeWidth="1.5" />
                  <text x="95" y="142" fontSize="11" fontWeight="bold" fontFamily="sans-serif">③</text>
                  <line x1="107" y1="140" x2="128" y2="140" strokeWidth="1" />

                  <rect x="142" y="148" width="16" height="30" strokeWidth="2" />
                  <text x="110" y="168" fontSize="11" fontWeight="bold" fontFamily="sans-serif">④</text>
                  <line x1="120" y1="165" x2="142" y2="165" strokeWidth="1" />

                  {/* Tubo */}
                  <line x1="150" y1="130" x2="130" y2="60" strokeWidth="3" />
                  <text x="85" y="85" fontSize="11" fontWeight="bold" fontFamily="sans-serif">②</text>
                  <line x1="97" y1="82" x2="136" y2="82" strokeWidth="1" />

                  {/* Ocular */}
                  <rect x="120" y="35" width="22" height="25" strokeWidth="2" />
                  <text x="150" y="45" fontSize="11" fontWeight="bold" fontFamily="sans-serif">①</text>
                  <line x1="140" y1="42" x2="148" y2="42" strokeWidth="1" />
                </svg>
              </div>

              {/* Líneas numeradas para que el estudiante escriba */}
              <div className="col-span-7 grid grid-cols-2 gap-x-2 gap-y-1.5 text-[11px] font-sans">
                <div><strong>①:</strong> <span className="border-b border-black inline-block w-[75%]">&nbsp;</span></div>
                <div><strong>②:</strong> <span className="border-b border-black inline-block w-[75%]">&nbsp;</span></div>
                <div><strong>③:</strong> <span className="border-b border-black inline-block w-[75%]">&nbsp;</span></div>
                <div><strong>④:</strong> <span className="border-b border-black inline-block w-[75%]">&nbsp;</span></div>
                <div><strong>⑤:</strong> <span className="border-b border-black inline-block w-[75%]">&nbsp;</span></div>
                <div><strong>⑥:</strong> <span className="border-b border-black inline-block w-[75%]">&nbsp;</span></div>
                <div><strong>⑦:</strong> <span className="border-b border-black inline-block w-[75%]">&nbsp;</span></div>
                <div><strong>⑧:</strong> <span className="border-b border-black inline-block w-[75%]">&nbsp;</span></div>
                <div><strong>⑨:</strong> <span className="border-b border-black inline-block w-[75%]">&nbsp;</span></div>
                <div><strong>⑩:</strong> <span className="border-b border-black inline-block w-[75%]">&nbsp;</span></div>
                <div><strong>⑪:</strong> <span className="border-b border-black inline-block w-[75%]">&nbsp;</span></div>
                <div><strong>⑫:</strong> <span className="border-b border-black inline-block w-[75%]">&nbsp;</span></div>
              </div>
            </div>

            <div className="mt-2 text-xs pt-1">
              <p className="font-semibold">¿Por qué debemos comenzar la observación con el objetivo de menor aumento?</p>
              <div className="border-b border-slate-400 h-5 mt-1" />
              <div className="border-b border-slate-400 h-5" />
            </div>
          </div>
        </div>

        <div className="text-[10px] text-right font-sans text-slate-500 pt-2 border-t border-slate-200">
          Página 1 de 4 · U.E. Guano · Ciencias Naturales
        </div>
      </div>

      {/* =========================================================================
          PÁGINA 2 DE 4: PROCEDIMIENTO Y OBSERVACIONES DE DIBUJO (8x8 cm)
         ========================================================================= */}
      <div className="sheet-page print:break-after-page min-h-[287mm] flex flex-col justify-between border-b-2 border-dashed border-slate-300 print:border-none pb-8 mb-8 print:pb-0 print:mb-0">
        <div>
          {/* Encabezado secundario de página */}
          <div className="flex justify-between items-center border-b border-black pb-1 mb-3 text-[11px] font-sans font-bold">
            <span>PRÁCTICA: MICROSCOPIO Y CÉLULAS · 8.° EGB</span>
            <span>UNIDAD EDUCATIVA GUANO</span>
          </div>

          {/* PARTE 4. PROCEDIMIENTO PRÁCTICO */}
          <div className="mb-4">
            <h2 className="text-xs font-bold font-sans uppercase bg-slate-200 print:bg-slate-200 px-2 py-0.5 border border-black mb-2">
              PARTE 4. PROCEDIMIENTO PRÁCTICO Y MEDIDAS DE SEGURIDAD
            </h2>
            <p className="text-[11px] mb-2 text-slate-700">
              Sigue el protocolo de trabajo con las preparaciones fijadas proporcionadas por el docente o
              las muestras del Laboratorio Virtual. Marca con un visto [ ✓ ] a medida que cumplas cada paso:
            </p>

            <div className="grid grid-cols-2 gap-2 text-[11px] font-sans">
              <div className="space-y-1.5 p-2 border border-slate-300 rounded bg-slate-50 print:bg-transparent">
                <label className="flex items-start gap-1.5">
                  <input type="checkbox" className="mt-0.5" />
                  <span><strong>1. Ubicación:</strong> Colocar sobre mesa limpia, plana y seca.</span>
                </label>
                <label className="flex items-start gap-1.5">
                  <input type="checkbox" className="mt-0.5" />
                  <span><strong>2. Iluminación:</strong> Encender luz y regular diafragma.</span>
                </label>
                <label className="flex items-start gap-1.5">
                  <input type="checkbox" className="mt-0.5" />
                  <span><strong>3. Colocación:</strong> Sujetar la lámina con las pinzas.</span>
                </label>
                <label className="flex items-start gap-1.5">
                  <input type="checkbox" className="mt-0.5" />
                  <span><strong>4. Objetivo menor:</strong> Seleccionar 4x o 10x primero.</span>
                </label>
              </div>

              <div className="space-y-1.5 p-2 border border-slate-300 rounded bg-slate-50 print:bg-transparent">
                <label className="flex items-start gap-1.5">
                  <input type="checkbox" className="mt-0.5" />
                  <span><strong>5. Enfoque grueso:</strong> Usar macrométrico alejando lente.</span>
                </label>
                <label className="flex items-start gap-1.5">
                  <input type="checkbox" className="mt-0.5" />
                  <span><strong>6. Ajuste fino:</strong> Calibrar nitidez con micrométrico.</span>
                </label>
                <label className="flex items-start gap-1.5">
                  <input type="checkbox" className="mt-0.5" />
                  <span><strong>7. Registro:</strong> Dibujar exactamente lo que se observa.</span>
                </label>
                <label className="flex items-start gap-1.5">
                  <input type="checkbox" className="mt-0.5" />
                  <span><strong>8. Finalización:</strong> Bajar platina, apagar y limpiar.</span>
                </label>
              </div>
            </div>
          </div>

          {/* PARTE 5. REGISTRO DE OBSERVACIONES */}
          <div>
            <h2 className="text-xs font-bold font-sans uppercase bg-slate-200 print:bg-slate-200 px-2 py-0.5 border border-black mb-1">
              PARTE 5. REGISTRO DE OBSERVACIONES MICROSCÓPICAS
            </h2>
            <p className="text-[11px] mb-3 text-slate-700 italic">
              * Dibuja dentro del círculo ocular exactamente lo que observas por las lentes (o en el simulador si no hay microscopios físicos).
              No copies esquemas de libros; representa la muestra real y rotula las estructuras con flechas.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {/* Observación 1: Vegetal */}
              <div className="border border-black p-2.5 rounded">
                <div className="font-sans font-bold text-xs uppercase text-center border-b border-black pb-1 mb-2 bg-slate-100 print:bg-transparent">
                  OBSERVACIÓN 1: CÉLULAS VEGETALES
                </div>

                <div className="text-[11px] font-sans space-y-1 mb-2">
                  <div><strong>Muestra:</strong> <span className="border-b border-black inline-block w-[70%]">&nbsp;</span></div>
                  <div><strong>Aumento total:</strong> <span className="border-b border-black inline-block w-[60%]">&nbsp;</span> (ej. 100x o 400x)</div>
                </div>

                {/* Círculo de dibujo de 8 x 8 cm exacto */}
                <div className="w-[80mm] h-[80mm] mx-auto rounded-full border-2 border-black flex items-center justify-center relative my-2 bg-slate-50/40 print:bg-transparent">
                  <div className="w-4 h-4 border-t border-l border-slate-300 absolute" />
                  <span className="text-[9px] font-sans text-slate-400">Espacio de dibujo (8 x 8 cm)</span>
                </div>

                <div className="text-[11px] font-sans space-y-1 mt-2">
                  <div><strong>Estructuras identificadas:</strong> <span className="border-b border-black inline-block w-[100%]">&nbsp;</span></div>
                  <div><strong>Descripción:</strong> <span className="border-b border-black inline-block w-[100%]">&nbsp;</span></div>
                  <div className="border-b border-black h-4" />
                </div>
              </div>

              {/* Observación 2: Animal */}
              <div className="border border-black p-2.5 rounded">
                <div className="font-sans font-bold text-xs uppercase text-center border-b border-black pb-1 mb-2 bg-slate-100 print:bg-transparent">
                  OBSERVACIÓN 2: CÉLULAS O TEJIDO ANIMAL
                </div>

                <div className="text-[11px] font-sans space-y-1 mb-2">
                  <div><strong>Muestra:</strong> <span className="border-b border-black inline-block w-[70%]">&nbsp;</span></div>
                  <div><strong>Aumento total:</strong> <span className="border-b border-black inline-block w-[60%]">&nbsp;</span> (ej. 100x o 400x)</div>
                </div>

                {/* Círculo de dibujo de 8 x 8 cm exacto */}
                <div className="w-[80mm] h-[80mm] mx-auto rounded-full border-2 border-black flex items-center justify-center relative my-2 bg-slate-50/40 print:bg-transparent">
                  <div className="w-4 h-4 border-t border-l border-slate-300 absolute" />
                  <span className="text-[9px] font-sans text-slate-400">Espacio de dibujo (8 x 8 cm)</span>
                </div>

                <div className="text-[11px] font-sans space-y-1 mt-2">
                  <div><strong>Estructuras identificadas:</strong> <span className="border-b border-black inline-block w-[100%]">&nbsp;</span></div>
                  <div><strong>Descripción:</strong> <span className="border-b border-black inline-block w-[100%]">&nbsp;</span></div>
                  <div className="border-b border-black h-4" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-[10px] text-right font-sans text-slate-500 pt-2 border-t border-slate-200">
          Página 2 de 4 · U.E. Guano · Ciencias Naturales
        </div>
      </div>

      {/* =========================================================================
          PÁGINA 3 DE 4: CUADRO COMPARATIVO Y ANÁLISIS/REFLEXIÓN (5 PREGUNTAS)
         ========================================================================= */}
      <div className="sheet-page print:break-after-page min-h-[287mm] flex flex-col justify-between border-b-2 border-dashed border-slate-300 print:border-none pb-8 mb-8 print:pb-0 print:mb-0">
        <div>
          {/* Encabezado secundario de página */}
          <div className="flex justify-between items-center border-b border-black pb-1 mb-3 text-[11px] font-sans font-bold">
            <span>PRÁCTICA: MICROSCOPIO Y CÉLULAS · 8.° EGB</span>
            <span>UNIDAD EDUCATIVA GUANO</span>
          </div>

          {/* PARTE 6. CUADRO COMPARATIVO */}
          <div className="mb-5">
            <h2 className="text-xs font-bold font-sans uppercase bg-slate-200 print:bg-slate-200 px-2 py-0.5 border border-black mb-2">
              PARTE 6. CUADRO COMPARATIVO: MUESTRA VEGETAL VS MUESTRA ANIMAL
            </h2>
            <p className="text-[11px] mb-2 text-slate-700">
              Completa el cuadro comparando las muestras reales observadas en el laboratorio:
            </p>

            <table className="w-full border-collapse border border-black text-xs font-sans">
              <thead>
                <tr className="bg-slate-100 print:bg-slate-100 text-center">
                  <th className="border border-black p-1.5 w-[28%] font-bold">Criterio de comparación</th>
                  <th className="border border-black p-1.5 w-[36%] font-bold">Observación 1 (Vegetal)</th>
                  <th className="border border-black p-1.5 w-[36%] font-bold">Observación 2 (Animal)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-black p-2 font-semibold bg-slate-50 print:bg-transparent">Forma de las células</td>
                  <td className="border border-black p-2 h-9">&nbsp;</td>
                  <td className="border border-black p-2 h-9">&nbsp;</td>
                </tr>
                <tr>
                  <td className="border border-black p-2 font-semibold bg-slate-50 print:bg-transparent">Presencia de pared celular</td>
                  <td className="border border-black p-2 h-9">&nbsp;</td>
                  <td className="border border-black p-2 h-9">&nbsp;</td>
                </tr>
                <tr>
                  <td className="border border-black p-2 font-semibold bg-slate-50 print:bg-transparent">Presencia de membrana plasmática</td>
                  <td className="border border-black p-2 h-9">&nbsp;</td>
                  <td className="border border-black p-2 h-9">&nbsp;</td>
                </tr>
                <tr>
                  <td className="border border-black p-2 font-semibold bg-slate-50 print:bg-transparent">Núcleo celular (visibilidad y tinción)</td>
                  <td className="border border-black p-2 h-9">&nbsp;</td>
                  <td className="border border-black p-2 h-9">&nbsp;</td>
                </tr>
                <tr>
                  <td className="border border-black p-2 font-semibold bg-slate-50 print:bg-transparent">Organización celular en el tejido</td>
                  <td className="border border-black p-2 h-9">&nbsp;</td>
                  <td className="border border-black p-2 h-9">&nbsp;</td>
                </tr>
                <tr>
                  <td className="border border-black p-2 font-semibold bg-slate-50 print:bg-transparent">Función principal del tejido</td>
                  <td className="border border-black p-2 h-9">&nbsp;</td>
                  <td className="border border-black p-2 h-9">&nbsp;</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* PARTE 7. ANÁLISIS Y REFLEXIÓN (5 preguntas) */}
          <div>
            <h2 className="text-xs font-bold font-sans uppercase bg-slate-200 print:bg-slate-200 px-2 py-0.5 border border-black mb-2">
              PARTE 7. ANÁLISIS Y REFLEXIÓN CIENTÍFICA
            </h2>
            <div className="space-y-3.5 text-xs">
              <div>
                <p className="font-semibold">1. ¿Qué diferencias principales observaste entre las muestras de origen animal y vegetal?</p>
                <div className="border-b border-slate-400 h-5 mt-1" />
                <div className="border-b border-slate-400 h-5" />
              </div>

              <div>
                <p className="font-semibold">2. ¿Qué función biológica cumple la pared celular de celulosa en los vegetales?</p>
                <div className="border-b border-slate-400 h-5 mt-1" />
                <div className="border-b border-slate-400 h-5" />
              </div>

              <div>
                <p className="font-semibold">3. ¿Por qué es fundamental enfocar correctamente el microscopio utilizando el tornillo micrométrico?</p>
                <div className="border-b border-slate-400 h-5 mt-1" />
                <div className="border-b border-slate-400 h-5" />
              </div>

              <div>
                <p className="font-semibold">4. ¿Qué relación biológica existe entre una célula individual y un tejido orgánico?</p>
                <div className="border-b border-slate-400 h-5 mt-1" />
                <div className="border-b border-slate-400 h-5" />
              </div>

              <div>
                <p className="font-semibold">5. ¿Cómo ha contribuido la invención del microscopio al desarrollo de la medicina y las ciencias?</p>
                <div className="border-b border-slate-400 h-5 mt-1" />
                <div className="border-b border-slate-400 h-5" />
              </div>
            </div>
          </div>
        </div>

        <div className="text-[10px] text-right font-sans text-slate-500 pt-2 border-t border-slate-200">
          Página 3 de 4 · U.E. Guano · Ciencias Naturales
        </div>
      </div>

      {/* =========================================================================
          PÁGINA 4 DE 4: CONCLUSIÓN Y RÚBRICA DE AUTOEVALUACIÓN
         ========================================================================= */}
      <div className="sheet-page min-h-[287mm] flex flex-col justify-between">
        <div>
          {/* Encabezado secundario de página */}
          <div className="flex justify-between items-center border-b border-black pb-1 mb-3 text-[11px] font-sans font-bold">
            <span>PRÁCTICA: MICROSCOPIO Y CÉLULAS · 8.° EGB</span>
            <span>UNIDAD EDUCATIVA GUANO</span>
          </div>

          {/* PARTE 8. CONCLUSIÓN */}
          <div className="mb-6">
            <h2 className="text-xs font-bold font-sans uppercase bg-slate-200 print:bg-slate-200 px-2 py-0.5 border border-black mb-2">
              PARTE 8. CONCLUSIONES DEL ESTUDIANTE
            </h2>
            <p className="text-[11px] mb-2 text-slate-700">
              Redacta en cuatro o cinco líneas qué aprendiste durante esta práctica de laboratorio sobre el uso del microscopio y las células:
            </p>
            <div className="space-y-2 mt-2">
              <div className="border-b border-slate-400 h-6" />
              <div className="border-b border-slate-400 h-6" />
              <div className="border-b border-slate-400 h-6" />
              <div className="border-b border-slate-400 h-6" />
              <div className="border-b border-slate-400 h-6" />
            </div>
          </div>

          {/* PARTE 9. AUTOEVALUACIÓN DEL APRENDIZAJE */}
          <div className="mb-6">
            <h2 className="text-xs font-bold font-sans uppercase bg-slate-200 print:bg-slate-200 px-2 py-0.5 border border-black mb-2">
              PARTE 9. RÚBRICA DE AUTOEVALUACIÓN
            </h2>
            <p className="text-[11px] mb-2 text-slate-700">
              Marca con una [ X ] tu nivel de logro en cada uno de los siguientes criterios formativos:
            </p>

            <table className="w-full border-collapse border border-black text-xs font-sans">
              <thead>
                <tr className="bg-slate-100 print:bg-slate-100 text-center">
                  <th className="border border-black p-2 font-bold text-left w-[55%]">Criterio de Evaluación</th>
                  <th className="border border-black p-2 font-bold w-[15%]">Logrado (✓)</th>
                  <th className="border border-black p-2 font-bold w-[15%]">En proceso (~)</th>
                  <th className="border border-black p-2 font-bold w-[15%]">Necesito mejorar (✕)</th>
                </tr>
              </thead>
              <tbody className="text-center">
                <tr>
                  <td className="border border-black p-2.5 text-left font-medium">1. Identifico las partes principales del microscopio óptico y sus funciones.</td>
                  <td className="border border-black p-2.5">&nbsp;</td>
                  <td className="border border-black p-2.5">&nbsp;</td>
                  <td className="border border-black p-2.5">&nbsp;</td>
                </tr>
                <tr>
                  <td className="border border-black p-2.5 text-left font-medium">2. Utilizo el microscopio con cuidado siguiendo las normas de bioseguridad.</td>
                  <td className="border border-black p-2.5">&nbsp;</td>
                  <td className="border border-black p-2.5">&nbsp;</td>
                  <td className="border border-black p-2.5">&nbsp;</td>
                </tr>
                <tr>
                  <td className="border border-black p-2.5 text-left font-medium">3. Reconozco estructuras celulares visibles (pared celular, membrana, núcleo).</td>
                  <td className="border border-black p-2.5">&nbsp;</td>
                  <td className="border border-black p-2.5">&nbsp;</td>
                  <td className="border border-black p-2.5">&nbsp;</td>
                </tr>
                <tr>
                  <td className="border border-black p-2.5 text-left font-medium">4. Comparo células y tejidos animales y vegetales identificando semejanzas y diferencias.</td>
                  <td className="border border-black p-2.5">&nbsp;</td>
                  <td className="border border-black p-2.5">&nbsp;</td>
                  <td className="border border-black p-2.5">&nbsp;</td>
                </tr>
                <tr>
                  <td className="border border-black p-2.5 text-left font-medium">5. Registro mis observaciones mediante dibujos detallados y descripciones claras.</td>
                  <td className="border border-black p-2.5">&nbsp;</td>
                  <td className="border border-black p-2.5">&nbsp;</td>
                  <td className="border border-black p-2.5">&nbsp;</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* FIRMAS DE RESPONSABILIDAD */}
          <div className="grid grid-cols-2 gap-8 pt-8 font-sans text-xs text-center mt-6">
            <div>
              <div className="border-b border-black w-48 mx-auto h-8 mb-1" />
              <p className="font-bold">Firma del Estudiante</p>
            </div>
            <div>
              <div className="border-b border-black w-48 mx-auto h-8 mb-1" />
              <p className="font-bold">Firma del Docente de Ciencias Naturales</p>
            </div>
          </div>
        </div>

        <div className="text-[10px] text-right font-sans text-slate-500 pt-2 border-t border-slate-200">
          Página 4 de 4 · U.E. Guano · Ciencias Naturales
        </div>
      </div>
    </div>
  );
};
