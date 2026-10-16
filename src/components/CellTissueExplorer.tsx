import React, { useState } from 'react';
import { CellDiagram } from './CellSvg';
import { TISSUE_CATEGORIES } from '../data/microscopeData';
import { BookOpen, Check, Layers, AlertCircle } from 'lucide-react';

export const CellTissueExplorer: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'A' | 'B' | 'C' | 'D'>('A');
  const [selectedCellType, setSelectedCellType] = useState<'vegetal' | 'animal'>('vegetal');
  const [activeTissueCategory, setActiveTissueCategory] = useState<'animal' | 'vegetal'>('animal');

  return (
    <div className="space-y-8">
      {/* Encabezado general */}
      <section className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 space-y-4 shadow-2xs">
        <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
          Sección 4 · Biología Celular y Tisular
        </div>
        <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
          Explora las Células y los Tejidos
        </h2>
        <p className="text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
          Comprende la célula como unidad estructural y funcional básica de la vida, analiza las diferencias
          morfológicas entre organismos animales y vegetales, y examina cómo las células se organizan en tejidos especializados.
        </p>

        {/* Pestañas de los 4 apartados en estilo limpio */}
        <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100">
          {[
            { id: 'A', title: 'A. ¿Qué es una célula?' },
            { id: 'B', title: 'B. Células vegetales' },
            { id: 'C', title: 'C. Células animales' },
            { id: 'D', title: 'D. ¿Qué son los tejidos?' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded transition-colors ${
                activeTab === tab.id
                  ? 'bg-slate-900 text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {tab.title}
            </button>
          ))}
        </div>
      </section>

      {/* APARTADO A: ¿QUÉ ES UNA CÉLULA? */}
      {activeTab === 'A' && (
        <section className="space-y-6">
          <div className="bg-white border border-slate-200 rounded-xl p-6 space-y-3 shadow-2xs">
            <h3 className="text-base font-bold text-slate-900">
              La Célula: Unidad Básica de la Vida
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              La <strong>célula</strong> es la unidad anatómica, funcional y genética más pequeña que puede
              realizar de manera autónoma las funciones vitales (nutrición, relación y reproducción). Todos
              los seres vivos que observaremos en este curso están formados por células <strong>eucariotas</strong>,
              las cuales comparten tres partes indispensables:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1 text-xs">
              <div className="p-3 bg-slate-50 border border-slate-200 rounded">
                <strong className="block text-slate-900 mb-1">1. Membrana Plasmática:</strong>
                <span className="text-slate-600">Envoltura externa que delimita a la célula y controla el paso de nutrientes, agua y desechos.</span>
              </div>
              <div className="p-3 bg-slate-50 border border-slate-200 rounded">
                <strong className="block text-slate-900 mb-1">2. Citoplasma:</strong>
                <span className="text-slate-600">Medio acuoso gelatinoso interno donde residen los organelos y ocurren las reacciones químicas vitales.</span>
              </div>
              <div className="p-3 bg-slate-50 border border-slate-200 rounded">
                <strong className="block text-slate-900 mb-1">3. Núcleo Celular:</strong>
                <span className="text-slate-600">Compartimento delimitado por doble membrana que resguarda el material hereditario (ADN).</span>
              </div>
            </div>
          </div>

          {/* Modelos didácticos interactivos comparados */}
          <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 space-y-6 shadow-2xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-3">
              <div>
                <h4 className="text-lg font-bold text-slate-900">
                  Modelos Celulares Eucariotas Comparados
                </h4>
                <p className="text-xs text-slate-500">
                  Selecciona el tipo celular para examinar sus estructuras características:
                </p>
              </div>

              <div className="flex items-center gap-1 bg-slate-100 p-1 rounded">
                <button
                  onClick={() => setSelectedCellType('vegetal')}
                  className={`px-3 py-1 text-xs font-semibold rounded transition-colors ${
                    selectedCellType === 'vegetal' ? 'bg-white text-slate-900 shadow-2xs' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Célula Vegetal
                </button>
                <button
                  onClick={() => setSelectedCellType('animal')}
                  className={`px-3 py-1 text-xs font-semibold rounded transition-colors ${
                    selectedCellType === 'animal' ? 'bg-white text-slate-900 shadow-2xs' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Célula Animal
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <CellDiagram type={selectedCellType} />
                <div className="text-[11px] text-slate-400 text-center mt-2 italic">
                  Figura 4.1: Modelo esquemático didáctico rotulado para 8.º EGB.
                </div>
              </div>

              <div className="lg:col-span-5 space-y-3 text-xs leading-relaxed">
                {selectedCellType === 'vegetal' ? (
                  <div className="space-y-3">
                    <span className="font-bold text-slate-900 text-sm block">
                      Estructuras distintivas de la Célula Vegetal:
                    </span>
                    <div className="border border-slate-200 p-3 rounded bg-slate-50 space-y-2">
                      <p>
                        <strong>• Pared celular de celulosa:</strong> Envoltura rígida externa que proporciona soporte mecánico y forma poliédrica constante a los tejidos vegetales.
                      </p>
                      <p>
                        <strong>• Gran vacuola central:</strong> Ocupa hasta el 80% del volumen celular. Almacena agua y sales minerales, manteniendo la turgencia de la planta.
                      </p>
                      <p>
                        <strong>• Cloroplastos:</strong> Organelos que contienen clorofila para realizar la fotosíntesis. <em>¡Aclaración importante!</em> Los cloroplastos solo están presentes en células de partes verdes expuestas a la luz (como hojas tiernas); no se encuentran en raíces ni bulbos subterráneos (como la cebolla).
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <span className="font-bold text-slate-900 text-sm block">
                      Estructuras distintivas de la Célula Animal:
                    </span>
                    <div className="border border-slate-200 p-3 rounded bg-slate-50 space-y-2">
                      <p>
                        <strong>• Membrana plasmática flexible:</strong> Carece de pared celular rígida, lo que confiere formas variadas y redondeadas o estrelladas.
                      </p>
                      <p>
                        <strong>• Ausencia de cloroplastos:</strong> Los animales tienen nutrición heterótrofa y no realizan fotosíntesis.
                      </p>
                      <p>
                        <strong>• Núcleo central y centríolos:</strong> Su núcleo suele situarse en posición central y posee centríolos para organizar el huso acromático durante la división.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Tabla Comparativa de Semejanzas y Diferencias */}
          <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 space-y-4 shadow-2xs">
            <h4 className="text-base font-bold text-slate-900">
              Cuadro Resumen: Semejanzas y Diferencias
            </h4>
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left border-collapse border border-slate-200">
                <thead>
                  <tr className="bg-slate-100 text-slate-800">
                    <th className="p-2.5 border border-slate-200 font-bold w-[25%]">Criterio</th>
                    <th className="p-2.5 border border-slate-200 font-bold w-[37%]">Célula Vegetal</th>
                    <th className="p-2.5 border border-slate-200 font-bold w-[38%]">Célula Animal</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-700">
                  <tr>
                    <td className="p-2.5 font-semibold bg-slate-50 border border-slate-200">Forma general</td>
                    <td className="p-2.5 border border-slate-200">Regular, geométrica, poligonal y rígida.</td>
                    <td className="p-2.5 border border-slate-200">Irregular, redondeada, aplanada o fusiforme.</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 font-semibold bg-slate-50 border border-slate-200">Pared celular</td>
                    <td className="p-2.5 border border-slate-200 font-semibold text-slate-900">Presente (de celulosa).</td>
                    <td className="p-2.5 border border-slate-200 text-slate-400">Ausente.</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 font-semibold bg-slate-50 border border-slate-200">Membrana celular</td>
                    <td className="p-2.5 border border-slate-200">Presente (justo por dentro de la pared).</td>
                    <td className="p-2.5 border border-slate-200">Presente (límite externo directo).</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 font-semibold bg-slate-50 border border-slate-200">Cloroplastos</td>
                    <td className="p-2.5 border border-slate-200">Presentes en tejidos fotosintéticos (hojas).</td>
                    <td className="p-2.5 border border-slate-200 text-slate-400">Ausentes en todas las células animales.</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 font-semibold bg-slate-50 border border-slate-200">Vacuolas</td>
                    <td className="p-2.5 border border-slate-200">Una gran vacuola central dominante.</td>
                    <td className="p-2.5 border border-slate-200">Múltiples vacuolas pequeñas y dispersas.</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 font-semibold bg-slate-50 border border-slate-200">Nutrición biológica</td>
                    <td className="p-2.5 border border-slate-200">Autótrofa (sintetizan materia orgánica).</td>
                    <td className="p-2.5 border border-slate-200">Heterótrofa (incorporan materia orgánica).</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* APARTADO B: CÉLULAS VEGETALES */}
      {activeTab === 'B' && (
        <section className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Caso 1: Epidermis de cebolla */}
            <div className="bg-white border border-slate-200 rounded-xl p-6 space-y-3 shadow-2xs">
              <span className="text-xs font-mono font-bold text-slate-500 uppercase">
                Muestra de Práctica 1
              </span>
              <h3 className="text-lg font-bold text-slate-900">
                Epidermis de Cebolla (Allium cepa)
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Es el tejido protector que recubre las catáfilas carnosas del bulbo de cebolla.
                Al observarse al microscopio, las células forman un mosaico continuo en hilera semejante a una pared de ladrillos.
              </p>

              <div className="p-3 bg-slate-50 border border-slate-200 rounded text-xs space-y-1.5 text-slate-700">
                <strong className="block text-slate-900">Observaciones científicas:</strong>
                <p>• Se distingue claramente el límite grueso de la <strong>pared celular</strong> de celulosa.</p>
                <p>• Al aplicar colorante (Lugol o azul de metileno), el <strong>núcleo</strong> se aprecia en tono oscuro desplazado hacia un lateral debido a la presión de la vacuola.</p>
                <p className="text-slate-900 font-semibold pt-1 border-t border-slate-200">
                  Nota pedagógica clave: Las células del bulbo de cebolla NO poseen cloroplastos visibles porque crecen bajo tierra en la oscuridad.
                </p>
              </div>
            </div>

            {/* Caso 2: Células de hoja verde */}
            <div className="bg-white border border-slate-200 rounded-xl p-6 space-y-3 shadow-2xs">
              <span className="text-xs font-mono font-bold text-slate-500 uppercase">
                Muestra de Práctica 2
              </span>
              <h3 className="text-lg font-bold text-slate-900">
                Células Foliares con Cloroplastos (Elodea)
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Muestra tomada de una hoja verde acuática expuesta a la luz solar. Representa las células del
                parénquima clorofílico (mesófilo foliar).
              </p>

              <div className="p-3 bg-slate-50 border border-slate-200 rounded text-xs space-y-1.5 text-slate-700">
                <strong className="block text-slate-900">Observaciones científicas:</strong>
                <p>• En el interior de cada célula se observan decenas de esferas de color verde natural llamadas <strong>cloroplastos</strong>.</p>
                <p>• No se requiere tinción artificial, pues la <strong>clorofila</strong> aporta pigmentación natural visible.</p>
                <p className="text-slate-900 font-semibold pt-1 border-t border-slate-200">
                  Función: En los cloroplastos se capta la energía lumínica para producir azúcares mediante la fotosíntesis.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* APARTADO C: CÉLULAS ANIMALES */}
      {activeTab === 'C' && (
        <section className="space-y-6">
          <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 space-y-4 shadow-2xs">
            <span className="text-xs font-mono font-bold text-slate-500 uppercase">
              Muestra Humana de Referencia
            </span>
            <h3 className="text-xl font-bold text-slate-900">
              Células Epiteliales de la Mucosa Bucal Humana
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
              <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                <p>
                  Corresponden a células planas de descamación natural del tejido epitelial estratificado que reviste
                  el interior de la boca y las mejillas.
                </p>
                <div className="border border-slate-200 p-3.5 rounded bg-slate-50 space-y-2 text-xs text-slate-700">
                  <p>
                    <strong>• Sin pared celular:</strong> Su contorno es delgado, redondeado o poligonal irregular, observándose pliegues naturales en los bordes celulares.
                  </p>
                  <p>
                    <strong>• Núcleo central definido:</strong> Presentan un núcleo esférico que retiene intensamente el colorante azul de metileno.
                  </p>
                  <p>
                    <strong>• Citoplasma granular:</strong> Translúcido, sin vacuolas rígidas ni pigmentos fotosintéticos.
                  </p>
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 space-y-2 text-xs">
                <strong className="block text-slate-900 font-semibold">
                  Fundamento de la tinción en el laboratorio:
                </strong>
                <p className="text-slate-600 leading-relaxed">
                  Las células vivas de la mucosa son prácticamente transparentes bajo la luz blanca del microscopio.
                  El <strong>azul de metileno (0.1%)</strong> es un colorante básico que se une selectivamente a los ácidos nucleicos
                  del núcleo celular, permitiendo observar claramente su morfología y posición.
                </p>
                <div className="text-[11px] text-slate-500 italic pt-1 border-t border-slate-200">
                  * En el laboratorio escolar de 8.º EGB, se trabaja habitualmente con láminas fijadas y teñidas provistas por el docente.
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* APARTADO D: ¿QUÉ SON LOS TEJIDOS? */}
      {activeTab === 'D' && (
        <section className="space-y-6">
          <div className="bg-white border border-slate-200 rounded-xl p-6 space-y-3 shadow-2xs">
            <h3 className="text-base font-bold text-slate-900">
              Nivel de Organización Tisular
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              Un <strong>tejido</strong> es una agrupación coordinada de células especializadas que comparten
              un origen común, forma semejante y colaboran para ejecutar una función fisiológica concreta.
            </p>

            <div className="flex items-center gap-1.5 pt-2">
              <button
                onClick={() => setActiveTissueCategory('animal')}
                className={`px-3 py-1.5 text-xs font-semibold rounded transition-colors ${
                  activeTissueCategory === 'animal'
                    ? 'bg-slate-900 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                Tejidos Animales (4 Básicos)
              </button>
              <button
                onClick={() => setActiveTissueCategory('vegetal')}
                className={`px-3 py-1.5 text-xs font-semibold rounded transition-colors ${
                  activeTissueCategory === 'vegetal'
                    ? 'bg-slate-900 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                Tejidos Vegetales (3 Principales)
              </button>
            </div>
          </div>

          {/* Tarjetas de tejidos sobrias y didácticas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {TISSUE_CATEGORIES[activeTissueCategory].map((tissue) => (
              <div
                key={tissue.name}
                className="bg-white border border-slate-200 rounded-lg p-5 space-y-2.5 shadow-2xs text-xs"
              >
                <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <h4 className="text-sm font-bold text-slate-900">
                    {tissue.name}
                  </h4>
                  <span className="font-mono text-slate-400">
                    {activeTissueCategory === 'animal' ? 'Animal' : 'Vegetal'}
                  </span>
                </div>

                <p className="text-slate-600 leading-relaxed">
                  <strong className="text-slate-800">Función principal: </strong>
                  {tissue.function}
                </p>

                <div className="pt-2 border-t border-slate-100 text-slate-500 space-y-1">
                  <p>
                    <strong className="text-slate-700">Localización típica: </strong>
                    {tissue.examples}
                  </p>
                  <p>
                    <strong className="text-slate-700">Morfología celular: </strong>
                    {tissue.cellType}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
