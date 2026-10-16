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
import { GlossarySection } from './components/GlossarySection';
import { LabNotesModal } from './components/LabNotesModal';
import { ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react';

export default function App() {
  const [currentSection, setCurrentSection] = useState<number>(1);
  const [completedSections, setCompletedSections] = useState<number[]>([1]);
  const [isNotesOpen, setIsNotesOpen] = useState<boolean>(false);

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
    if (currentSection < 7) {
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
    'Protocolo de Uso',
    'Células y Tejidos',
    'Laboratorio Virtual',
    'Guía A4 y Evaluación',
    'Glosario Microscópico'
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans text-slate-900 selection:bg-[#16A6A0]/20 selection:text-[#173B70]">
      {/* Barra de navegación superior elegante y delgada */}
      <Header
        currentSection={currentSection}
        onNavigate={handleNavigate}
        completedSections={completedSections}
        onOpenPrint={handleOpenPrint}
        onOpenNotes={() => setIsNotesOpen(true)}
      />

      {/* Contenedor principal */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        {currentSection === 1 && (
          <WelcomeSection
            onStart={() => handleNavigate(2)}
            onNavigateSection={handleNavigate}
          />
        )}

        {currentSection === 2 && <MicroscopeGuide />}

        {currentSection === 3 && <MicroscopeProtocol />}

        {currentSection === 4 && <CellTissueExplorer />}

        {currentSection === 5 && (
          <VirtualLab onOpenNotes={() => setIsNotesOpen(true)} />
        )}

        {currentSection === 6 && (
          <WorksheetSection
            onQuizComplete={() => {
              if (!completedSections.includes(6)) {
                setCompletedSections(prev => [...prev, 6]);
              }
            }}
            onOpenNotes={() => setIsNotesOpen(true)}
          />
        )}

        {currentSection === 7 && <GlossarySection />}

        {/* Modal de Cuaderno Digital de Apuntes de Laboratorio */}
        <LabNotesModal
          isOpen={isNotesOpen}
          onClose={() => setIsNotesOpen(false)}
        />

        {/* Navegación secuencial inferior limpia */}
        <div className="mt-12 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 no-print text-xs">
          <div>
            {currentSection > 1 ? (
              <button
                onClick={handlePrevSection}
                className="px-4 py-2 font-medium text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 rounded-lg transition-colors flex items-center gap-2 cursor-pointer shadow-2xs"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Anterior: {sectionTitles[currentSection - 2]}</span>
              </button>
            ) : <div />}
          </div>

          <div className="text-slate-400 font-mono text-[11px]">
            Módulo {currentSection} de 7
          </div>

          <div>
            {currentSection < 7 ? (
              <button
                onClick={handleNextSection}
                className="px-5 py-2 font-semibold text-white bg-[#173B70] hover:bg-[#122e56] rounded-lg transition-colors flex items-center gap-2 cursor-pointer shadow-xs"
              >
                <span>Siguiente: {sectionTitles[currentSection]}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            ) : (
              <div className="flex items-center gap-1.5 text-emerald-700 font-medium bg-emerald-50 px-3.5 py-1.5 rounded-lg border border-emerald-200">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                <span>¡Todos los módulos completados!</span>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Pie de página limpio, sobrio y no invasivo */}
      <footer className="bg-slate-50 border-t border-slate-200 py-6 text-xs text-slate-500 no-print mt-auto">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center gap-2 font-medium text-slate-700">
            <span>UNACH · Unidad Educativa Guano</span>
            <span className="text-slate-300">·</span>
            <span className="text-slate-500 font-normal">Ciencias Naturales 8.º EGB</span>
          </div>

          <div className="text-[11px] text-slate-400">
            Proyecto de Vinculación con la Sociedad · Chimborazo, Ecuador
          </div>
        </div>
      </footer>
    </div>
  );
}
