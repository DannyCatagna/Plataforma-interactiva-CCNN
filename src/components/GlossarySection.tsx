import React, { useState } from 'react';
import { GLOSSARY_TERMS } from '../data/microscopeData';
import { Search, BookOpen, Filter, Sparkles } from 'lucide-react';

export const GlossarySection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'optica' | 'tecnica' | 'celular'>('all');

  const filteredTerms = GLOSSARY_TERMS.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch =
      item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.definition.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.simpleExplanation.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-8">
      {/* Encabezado del Glosario */}
      <section className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 space-y-4 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
          <div>
            <div className="text-xs font-semibold text-[#16A6A0] uppercase tracking-wider mb-1">
              Sección 7 · Vocabulario Científico Fundamental
            </div>
            <h2 className="text-2xl font-bold text-[#173B70] tracking-tight">
              Glosario Microscópico
            </h2>
          </div>

          <div className="text-xs font-medium text-slate-500 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200 self-start sm:self-auto">
            {filteredTerms.length} conceptos disponibles
          </div>
        </div>

        <p className="text-sm text-slate-600 max-w-3xl leading-relaxed">
          Consulta las definiciones formales y explicaciones sencillas de los conceptos esenciales
          utilizados en las prácticas de microscopía y biología celular de 8.º año de EGB.
        </p>

        {/* Buscador interactivo y filtros */}
        <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          {/* Campo de búsqueda */}
          <div className="relative w-full sm:max-w-xs">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar término (ej. resolución, tinción)..."
              className="w-full pl-9 pr-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg outline-none text-slate-800 focus:bg-white focus:border-[#16A6A0] transition-colors"
            />
          </div>

          {/* Filtros por categorías */}
          <div className="flex flex-wrap items-center gap-1.5 text-xs">
            <span className="text-slate-500 mr-1 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5 text-[#16A6A0]" />
              <span>Categoría:</span>
            </span>
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-colors cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-[#173B70] text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Todos ({GLOSSARY_TERMS.length})
            </button>
            <button
              onClick={() => setSelectedCategory('optica')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-colors cursor-pointer ${
                selectedCategory === 'optica'
                  ? 'bg-[#173B70] text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Óptica y Aumento
            </button>
            <button
              onClick={() => setSelectedCategory('tecnica')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-colors cursor-pointer ${
                selectedCategory === 'tecnica'
                  ? 'bg-[#173B70] text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Técnicas de Laboratorio
            </button>
            <button
              onClick={() => setSelectedCategory('celular')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-colors cursor-pointer ${
                selectedCategory === 'celular'
                  ? 'bg-[#173B70] text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Estructuras Celulares
            </button>
          </div>
        </div>
      </section>

      {/* Lista de términos en tarjetas sobrias */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredTerms.map((item) => (
          <div
            key={item.id}
            className="bg-white border border-slate-200 rounded-xl p-5 space-y-3 shadow-xs hover:border-[#16A6A0]/50 transition-colors flex flex-col justify-between"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-2">
                <h3 className="text-base font-bold text-slate-900">
                  {item.term}
                </h3>
                <span className="text-[11px] font-mono text-[#16A6A0] font-semibold uppercase">
                  {item.categoryLabel}
                </span>
              </div>

              {/* Definición técnica formal */}
              <p className="text-xs text-slate-700 leading-relaxed font-normal">
                {item.definition}
              </p>
            </div>

            <div className="space-y-2 pt-2 border-t border-slate-100 text-xs">
              {/* Explicación sencilla para 8.° EGB */}
              <div className="bg-slate-50 p-3 rounded-lg border-l-3 border-[#16A6A0] space-y-1">
                <span className="text-[11px] font-semibold text-[#173B70] block">
                  En palabras sencillas para el estudiante:
                </span>
                <p className="text-slate-600 leading-relaxed italic">
                  "{item.simpleExplanation}"
                </p>
              </div>

              {/* Ejemplo práctico de aula */}
              <div className="text-slate-500">
                <strong className="text-slate-700">Ejemplo en clase: </strong>
                <span>{item.example}</span>
              </div>
            </div>
          </div>
        ))}

        {filteredTerms.length === 0 && (
          <div className="col-span-full p-8 text-center bg-white border border-slate-200 rounded-xl text-slate-500 text-xs">
            No se encontraron términos coincidentes con "{searchTerm}". Intenta con otra palabra clave como <em>resolución</em> o <em>tinción</em>.
          </div>
        )}
      </section>
    </div>
  );
};
