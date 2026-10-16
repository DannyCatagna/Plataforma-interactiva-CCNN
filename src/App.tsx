/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { WelcomeSection } from './components/WelcomeSection';
import { MicroscopeGuide } from './components/MicroscopeGuide';
import { MicroscopeProtocol } from './components/MicroscopeProtocol';
import { CellTissueExplorer } from './components/CellTissueExplorer';
import { VirtualLab } from './components/VirtualLab';
import { WorksheetSection } from './components/WorksheetSection';
import { ArrowLeft, ArrowRight, CheckCircle, Microscope } from 'lucide-react';

export default function App() {
  const [currentSection, setCurrentSection] = useState<number>(1);
  const [completedSections, setCompletedSections] = useState<number[]>([1]);

  const handleNavigate = (sectionId: number) => {
    setCurrentSection(sectionId);
    setCompletedSections(prev => {
      if (!prev.includes(sectionId)) {
        return [...prev, sectionId];
      }
      return prev;
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNextSection = () => {
    if (currentSection < 6) {
      handleNavigate(currentSection + 1);
    }
  };

  const handlePrevSection = () => {
    if (currentSection > 1) {
      handleNavigate(currentSection - 1);
    }
  };

  const handleOpenPrint = () => {
    setCurrentSection(6);
    setTimeout(() => {
      window.print();
    }, 250);
  };

  const sectionTitles = [
    'Inicio',
    'Conoce el Microscopio',
    'Protocolo de Uso y Seguridad',
    'Células y Tejidos',
    'Laboratorio Virtual',
    'Guía A4 y Evaluación'
  ];

  return (
    <div className="min-h-screen bg-[#fafaf9] flex flex-col font-sans text-slate-800">
      {/* Barra de navegación superior institucional */}
      <Header
        currentSection={currentSection}
        onNavigate={handleNavigate}
        completedSections={completedSections}
        onOpenPrint={handleOpenPrint}
      />

      {/* Contenedor principal de contenidos */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        {currentSection === 1 && (
          <WelcomeSection
            onStart={() => handleNavigate(2)}
            onNavigateSection={handleNavigate}
          />
        )}

        {currentSection === 2 && <MicroscopeGuide />}

        {currentSection === 3 && <MicroscopeProtocol />}

        {currentSection === 4 && <CellTissueExplorer />}

        {currentSection === 5 && <VirtualLab />}

        {currentSection === 6 && (
          <WorksheetSection
            onQuizComplete={() => {
              if (!completedSections.includes(6)) {
                setCompletedSections(prev => [...prev, 6]);
              }
            }}
          />
        )}

        {/* Navegación secuencial inferior */}
        <div className="mt-12 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 no-print text-xs">
          <div>
            {currentSection > 1 ? (
              <button
                onClick={handlePrevSection}
                className="px-3.5 py-2 font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 rounded transition-colors flex items-center gap-2 cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Anterior: {sectionTitles[currentSection - 2]}</span>
              </button>
            ) : <div />}
          </div>

          <div className="text-slate-400 font-mono">
            Módulo {currentSection} de 6
          </div>

          <div>
            {currentSection < 6 ? (
              <button
                onClick={handleNextSection}
                className="px-4 py-2 font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded transition-colors flex items-center gap-2 cursor-pointer shadow-2xs"
              >
                <span>Siguiente: {sectionTitles[currentSection]}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            ) : (
              <div className="flex items-center gap-1.5 text-slate-700 font-semibold bg-white px-3 py-1.5 rounded border border-slate-300">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                <span>Módulos completados</span>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Pie de página institucional y pedagógico */}
      <footer className="bg-white border-t border-slate-200 py-6 text-xs text-slate-500 no-print mt-auto">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-800">Unidad Educativa Guano</span>
            <span>·</span>
            <span>Ciencias Naturales · 8.º Año EGB</span>
          </div>
          <div className="text-slate-400">
            Cantón Guano, Chimborazo · Currículo Nacional Ecuatoriano
          </div>
        </div>
      </footer>
    </div>
  );
}
