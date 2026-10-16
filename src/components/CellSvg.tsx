import React from 'react';

interface CellModelProps {
  type: 'vegetal' | 'animal';
  highlightOrganelle?: string | null;
  onSelectOrganelle?: (name: string) => void;
}

export const CellDiagram: React.FC<CellModelProps> = ({
  type,
  highlightOrganelle,
  onSelectOrganelle
}) => {
  if (type === 'vegetal') {
    return (
      <div className="relative w-full aspect-4/3 bg-slate-900/5 rounded-xl p-2 select-none">
        <svg viewBox="0 0 600 450" className="w-full h-full drop-shadow-sm" fill="none">
          <defs>
            <linearGradient id="wallGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#15803d" />
              <stop offset="100%" stopColor="#166534" />
            </linearGradient>
            <linearGradient id="cytoPlant" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#dcfce7" />
              <stop offset="100%" stopColor="#bbf7d0" />
            </linearGradient>
            <radialGradient id="vacuoleGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#e0f2fe" />
              <stop offset="85%" stopColor="#bae6fd" />
              <stop offset="100%" stopColor="#7dd3fc" />
            </radialGradient>
            <radialGradient id="plantNucleus" cx="40%" cy="40%" r="50%">
              <stop offset="0%" stopColor="#fbcfe8" />
              <stop offset="80%" stopColor="#f472b6" />
              <stop offset="100%" stopColor="#db2777" />
            </radialGradient>
          </defs>

          {/* PARED CELULAR (Gruesa, externa, poligonal/hexagonal) */}
          <polygon
            points="70,50 530,50 560,390 40,390"
            fill="url(#wallGrad)"
            stroke="#14532d"
            strokeWidth="8"
            className="cursor-pointer transition-colors"
            onClick={() => onSelectOrganelle?.('Pared celular')}
          />
          {/* LÁMINA MEDIA Y PARED PRIMARIA */}
          <polygon
            points="85,65 515,65 542,375 58,375"
            fill="#86efac"
            stroke="#22c55e"
            strokeWidth="3"
          />

          {/* MEMBRANA PLASMÁTICA */}
          <polygon
            points="95,75 505,75 530,365 70,365"
            fill="url(#cytoPlant)"
            stroke="#15803d"
            strokeWidth="2.5"
            strokeDasharray="4,2"
            className="cursor-pointer"
            onClick={() => onSelectOrganelle?.('Membrana plasmática')}
          />

          {/* GRAN VACUOLA CENTRAL (Ocupa hasta el 80% del citoplasma) */}
          <path
            d="M 140 130 C 220 90 420 100 460 160 C 500 220 480 320 420 340 C 340 360 180 350 130 310 C 90 270 90 160 140 130 Z"
            fill="url(#vacuoleGrad)"
            stroke="#38bdf8"
            strokeWidth="3"
            className="cursor-pointer hover:opacity-90 transition-opacity"
            onClick={() => onSelectOrganelle?.('Vacuola central')}
          />
          <text x="260" y="225" fill="#0369a1" fontSize="13" fontWeight="bold" fontFamily="sans-serif">
            Gran Vacuola Central
          </text>
          <text x="240" y="243" fill="#0284c7" fontSize="11" fontFamily="sans-serif">
            (Almacén de agua y sales turgentes)
          </text>

          {/* NÚCLEO VEGETAL (Desplazado a la periferia por la vacuola) */}
          <g
            className="cursor-pointer"
            onClick={() => onSelectOrganelle?.('Núcleo')}
          >
            <circle cx="160" cy="140" r="42" fill="url(#plantNucleus)" stroke="#9d174d" strokeWidth="2.5" />
            <circle cx="152" cy="134" r="14" fill="#831843" />
            <text x="145" y="138" fill="#ffffff" fontSize="9" fontWeight="bold">ADN</text>
            <text x="135" y="196" fill="#831843" fontSize="12" fontWeight="bold">Núcleo</text>
          </g>

          {/* CLOROPLASTOS (Verdes con tilacoides internos) */}
          <g className="cursor-pointer" onClick={() => onSelectOrganelle?.('Cloroplastos')}>
            {/* Cloroplasto 1 */}
            <g transform="translate(430, 95) rotate(20)">
              <ellipse cx="25" cy="18" rx="28" ry="16" fill="#15803d" stroke="#166534" strokeWidth="2" />
              <line x1="8" y1="18" x2="42" y2="18" stroke="#86efac" strokeWidth="2.5" />
              <line x1="12" y1="12" x2="38" y2="12" stroke="#86efac" strokeWidth="2" />
              <line x1="12" y1="24" x2="38" y2="24" stroke="#86efac" strokeWidth="2" />
            </g>
            {/* Cloroplasto 2 */}
            <g transform="translate(460, 260) rotate(-15)">
              <ellipse cx="25" cy="18" rx="28" ry="16" fill="#15803d" stroke="#166534" strokeWidth="2" />
              <line x1="8" y1="18" x2="42" y2="18" stroke="#86efac" strokeWidth="2.5" />
              <line x1="12" y1="12" x2="38" y2="12" stroke="#86efac" strokeWidth="2" />
              <line x1="12" y1="24" x2="38" y2="24" stroke="#86efac" strokeWidth="2" />
            </g>
            {/* Cloroplasto 3 */}
            <g transform="translate(100, 315) rotate(35)">
              <ellipse cx="25" cy="18" rx="28" ry="16" fill="#15803d" stroke="#166534" strokeWidth="2" />
              <line x1="8" y1="18" x2="42" y2="18" stroke="#86efac" strokeWidth="2.5" />
              <line x1="12" y1="12" x2="38" y2="12" stroke="#86efac" strokeWidth="2" />
            </g>
            <text x="440" y="85" fill="#166534" fontSize="12" fontWeight="bold">Cloroplastos</text>
          </g>

          {/* MITOCONDRIAS VEGETALES */}
          <g transform="translate(240, 80) rotate(-10)">
            <ellipse cx="18" cy="10" rx="20" ry="10" fill="#f97316" stroke="#c2410c" strokeWidth="1.5" />
            <path d="M 5 10 Q 12 5 18 10 T 30 10" stroke="#ffedd5" strokeWidth="2" fill="none" />
          </g>
          <g transform="translate(360, 345) rotate(15)">
            <ellipse cx="18" cy="10" rx="20" ry="10" fill="#f97316" stroke="#c2410c" strokeWidth="1.5" />
            <path d="M 5 10 Q 12 5 18 10 T 30 10" stroke="#ffedd5" strokeWidth="2" fill="none" />
          </g>

          {/* Rótulo superior */}
          <rect x="180" y="12" width="240" height="28" rx="6" fill="#ffffff" stroke="#15803d" strokeWidth="1.5" />
          <text x="300" y="30" textAnchor="middle" fill="#15803d" fontSize="13" fontWeight="bold">
            CÉLULA VEGETAL EUCARIOTA
          </text>
        </svg>
      </div>
    );
  }

  // CÉLULA ANIMAL
  return (
    <div className="relative w-full aspect-4/3 bg-slate-900/5 rounded-xl p-2 select-none">
      <svg viewBox="0 0 600 450" className="w-full h-full drop-shadow-sm" fill="none">
        <defs>
          <radialGradient id="cytoAnimal" cx="45%" cy="45%" r="55%">
            <stop offset="0%" stopColor="#fef3c7" />
            <stop offset="70%" stopColor="#fde68a" />
            <stop offset="100%" stopColor="#fcd34d" />
          </radialGradient>
          <radialGradient id="animalNucleus" cx="35%" cy="35%" r="50%">
            <stop offset="0%" stopColor="#93c5fd" />
            <stop offset="75%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#1d4ed8" />
          </radialGradient>
        </defs>

        {/* MEMBRANA PLASMÁTICA FLEXIBLE (Forma irregular, sin pared) */}
        <path
          d="M 120 180 C 100 110 180 60 290 65 C 410 70 510 110 520 200 C 530 290 470 380 350 395 C 220 410 110 360 85 280 C 70 230 135 220 120 180 Z"
          fill="url(#cytoAnimal)"
          stroke="#d97706"
          strokeWidth="4"
          strokeDasharray="8,2"
          className="cursor-pointer"
          onClick={() => onSelectOrganelle?.('Membrana plasmática')}
        />

        {/* NÚCLEO CENTRAL (Ubicación céntrica típica animal) */}
        <g className="cursor-pointer" onClick={() => onSelectOrganelle?.('Núcleo')}>
          <circle cx="280" cy="225" r="54" fill="url(#animalNucleus)" stroke="#1e40af" strokeWidth="3" />
          {/* Poro nuclear / envoltura */}
          <circle cx="280" cy="225" r="50" stroke="#60a5fa" strokeWidth="2" strokeDasharray="6,4" fill="none" />
          {/* Nucléolo denso */}
          <circle cx="268" cy="215" r="18" fill="#1e3a8a" />
          <text x="260" y="220" fill="#ffffff" fontSize="9" fontWeight="bold">ADN</text>
          <text x="252" y="295" fill="#1e3a8a" fontSize="13" fontWeight="bold">Núcleo Celular</text>
        </g>

        {/* RETÍCULO ENDOPLASMÁTICO */}
        <path
          d="M 215 200 C 170 190 170 240 215 250 M 205 180 C 150 170 150 260 205 270"
          stroke="#a855f7"
          strokeWidth="3.5"
          fill="none"
          strokeLinecap="round"
        />

        {/* MITOCONDRIAS ABUNDANTES */}
        <g transform="translate(140, 110) rotate(-25)">
          <ellipse cx="24" cy="14" rx="26" ry="14" fill="#ea580c" stroke="#9a3412" strokeWidth="2" />
          <path d="M 6 14 Q 16 6 24 14 T 42 14" stroke="#ffedd5" strokeWidth="2.5" fill="none" />
        </g>
        <g transform="translate(380, 120) rotate(35)">
          <ellipse cx="24" cy="14" rx="26" ry="14" fill="#ea580c" stroke="#9a3412" strokeWidth="2" />
          <path d="M 6 14 Q 16 6 24 14 T 42 14" stroke="#ffedd5" strokeWidth="2.5" fill="none" />
        </g>
        <g transform="translate(390, 290) rotate(-15)">
          <ellipse cx="24" cy="14" rx="26" ry="14" fill="#ea580c" stroke="#9a3412" strokeWidth="2" />
          <path d="M 6 14 Q 16 6 24 14 T 42 14" stroke="#ffedd5" strokeWidth="2.5" fill="none" />
        </g>
        <text x="390" y="105" fill="#9a3412" fontSize="11" fontWeight="bold">Mitocondrias</text>

        {/* CENTRÍOLOS / CENTROSOMA (Exclusivo célula animal) */}
        <g transform="translate(340, 170)">
          <rect x="0" y="0" width="8" height="18" fill="#e11d48" rx="2" />
          <rect x="-5" y="8" width="18" height="8" fill="#be123c" rx="2" />
          <text x="22" y="14" fill="#be123c" fontSize="10" fontWeight="bold">Centríolos</text>
        </g>

        {/* PEQUEÑAS VESÍCULAS / LISOSOMAS */}
        <circle cx="160" cy="300" r="10" fill="#059669" stroke="#047857" strokeWidth="2" />
        <circle cx="190" cy="330" r="8" fill="#059669" stroke="#047857" strokeWidth="2" />
        <circle cx="430" cy="220" r="11" fill="#059669" stroke="#047857" strokeWidth="2" />
        <text x="140" y="340" fill="#047857" fontSize="10" fontWeight="bold">Lisosomas</text>

        {/* Destacar ausencia de pared y cloroplastos */}
        <rect x="70" y="385" width="220" height="24" rx="4" fill="#fee2e2" stroke="#ef4444" strokeWidth="1" />
        <text x="180" y="401" textAnchor="middle" fill="#b91c1c" fontSize="10" fontWeight="bold">
          ✕ Sin pared celular · Sin cloroplastos
        </text>

        {/* Rótulo superior */}
        <rect x="180" y="12" width="240" height="28" rx="6" fill="#ffffff" stroke="#2563eb" strokeWidth="1.5" />
        <text x="300" y="30" textAnchor="middle" fill="#2563eb" fontSize="13" fontWeight="bold">
          CÉLULA ANIMAL EUCARIOTA
        </text>
      </svg>
    </div>
  );
};

// Renderizador del campo visual del ocular microscópico (Simulador)
interface OcularViewProps {
  specimenId: string;
  magnification: '40x' | '100x' | '400x';
  focusSharpness: number; // 0 to 100
  showLabels: boolean;
  lightIntensity: number; // 0 to 100
}

export const OcularSpecimenView: React.FC<OcularViewProps> = ({
  specimenId,
  magnification,
  focusSharpness,
  showLabels,
  lightIntensity
}) => {
  // Cálculo de desenfoque óptico
  // La nitidez óptima está entre 48 y 58
  const ideal = specimenId === 'cebolla' ? 52 : specimenId === 'mucosa' ? 50 : 54;
  const deviation = Math.abs(focusSharpness - ideal);
  // Desenfoque de 0px a 10px
  const blurPx = Math.max(0, (deviation / 50) * 8.5);

  const brightness = 0.5 + (lightIntensity / 100) * 0.7; // 0.5 a 1.2

  return (
    <div className="relative w-full aspect-square max-w-[460px] mx-auto rounded-full overflow-hidden bg-black shadow-2xl border-8 border-slate-800 select-none flex items-center justify-center">
      {/* Retículo circular y diafragma de borde */}
      <div
        className="w-full h-full relative transition-all duration-150"
        style={{
          filter: `blur(${blurPx.toFixed(1)}px) brightness(${brightness})`,
          transform: magnification === '400x' ? 'scale(1.22)' : magnification === '100x' ? 'scale(1.05)' : 'scale(0.95)'
        }}
      >
        {specimenId === 'cebolla' && <OnionMicrograph mag={magnification} />}
        {specimenId === 'mucosa' && <MucosaMicrograph mag={magnification} />}
        {specimenId === 'hoja_verde' && <ChloroplastMicrograph mag={magnification} />}
        {specimenId === 'muscular' && <MuscleMicrograph mag={magnification} />}
        {specimenId === 'nervioso' && <NerveMicrograph mag={magnification} />}
      </div>

      {/* Micrometer scale and crosshair overlay (always sharp, inside eyepiece) */}
      <div className="absolute inset-0 pointer-events-none rounded-full border border-sky-400/20">
        {/* Retículo central fino */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 pointer-events-none opacity-40">
          <div className="w-full h-[1px] bg-slate-400 absolute top-1/2" />
          <div className="h-full w-[1px] bg-slate-400 absolute left-1/2" />
        </div>
        {/* Escala micrométrica inferior */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/60 px-3 py-0.5 rounded text-[10px] text-sky-200 font-mono tracking-wider">
          {magnification === '40x' ? 'Escala: 200 µm' : magnification === '100x' ? 'Escala: 50 µm' : 'Escala: 10 µm'}
        </div>
      </div>

      {/* Etiquetas superpuestas (cuando está suficientemente enfocado) */}
      {showLabels && blurPx < 3.2 && (
        <div className="absolute inset-0 pointer-events-none">
          {specimenId === 'cebolla' && (
            <>
              <div className="absolute top-[32%] left-[48%] -translate-x-1/2 bg-black/75 backdrop-blur-xs text-white text-[11px] px-2 py-0.5 rounded border border-emerald-400 shadow">
                Pared celular de celulosa
              </div>
              <div className="absolute top-[58%] left-[60%] bg-black/75 backdrop-blur-xs text-white text-[11px] px-2 py-0.5 rounded border border-amber-400 shadow">
                Núcleo con Lugol
              </div>
            </>
          )}
          {specimenId === 'mucosa' && (
            <>
              <div className="absolute top-[28%] left-[45%] bg-black/75 backdrop-blur-xs text-white text-[11px] px-2 py-0.5 rounded border border-sky-400 shadow">
                Membrana plasmática flexible
              </div>
              <div className="absolute top-[54%] left-[54%] bg-black/75 backdrop-blur-xs text-white text-[11px] px-2 py-0.5 rounded border border-indigo-400 shadow">
                Núcleo azul de metileno
              </div>
            </>
          )}
          {specimenId === 'hoja_verde' && (
            <>
              <div className="absolute top-[38%] left-[50%] bg-black/75 backdrop-blur-xs text-white text-[11px] px-2 py-0.5 rounded border border-green-400 shadow">
                Cloroplastos (Clorofila)
              </div>
            </>
          )}
          {specimenId === 'muscular' && (
            <>
              <div className="absolute top-[48%] left-[52%] bg-black/75 backdrop-blur-xs text-white text-[11px] px-2 py-0.5 rounded border border-rose-400 shadow">
                Estriaciones transversales
              </div>
              <div className="absolute top-[68%] left-[32%] bg-black/75 backdrop-blur-xs text-white text-[11px] px-2 py-0.5 rounded border border-purple-400 shadow">
                Núcleos periféricos
              </div>
            </>
          )}
          {specimenId === 'nervioso' && (
            <>
              <div className="absolute top-[42%] left-[48%] bg-black/75 backdrop-blur-xs text-white text-[11px] px-2 py-0.5 rounded border border-amber-400 shadow">
                Soma neuronal estrellado
              </div>
              <div className="absolute top-[28%] left-[62%] bg-black/75 backdrop-blur-xs text-white text-[11px] px-2 py-0.5 rounded border border-sky-400 shadow">
                Dendritas ramificadas
              </div>
            </>
          )}
        </div>
      )}

      {/* Viñeta circular de lente óptica (Bordes oscuros del campo) */}
      <div className="absolute inset-0 pointer-events-none rounded-full shadow-[inset_0_0_55px_rgba(0,0,0,0.92)]" />
    </div>
  );
};

// Micrografía precisa de Cebolla
const OnionMicrograph: React.FC<{ mag: '40x' | '100x' | '400x' }> = ({ mag }) => {
  return (
    <svg viewBox="0 0 500 500" className="w-full h-full bg-[#fefce8]">
      {/* Fondo teñido de Lugol amarillo ámbar suave */}
      <rect width="500" height="500" fill="#fef08a" opacity="0.35" />

      {/* Hileras de células de cebolla alargadas tipo pared de ladrillos */}
      {mag === '40x' && (
        <g stroke="#854d0e" strokeWidth="2.5" fill="none">
          {Array.from({ length: 8 }).map((_, r) => {
            const y = r * 65 - 20;
            const offset = (r % 2) * 80;
            return (
              <g key={r}>
                <line x1="0" y1={y} x2="500" y2={y} strokeWidth="3" />
                {Array.from({ length: 5 }).map((_, c) => {
                  const x = c * 140 - offset;
                  return (
                    <g key={c}>
                      <line x1={x} y1={y} x2={x} y2={y + 65} strokeWidth="2.5" />
                      <circle cx={x + 70} cy={y + 32} r="5" fill="#ca8a04" opacity="0.8" />
                    </g>
                  );
                })}
              </g>
            );
          })}
        </g>
      )}

      {mag === '100x' && (
        <g stroke="#713f12" strokeWidth="3.5" fill="none">
          {Array.from({ length: 5 }).map((_, r) => {
            const y = r * 110 - 20;
            const offset = (r % 2) * 120;
            return (
              <g key={r}>
                <line x1="0" y1={y} x2="500" y2={y} strokeWidth="4.5" />
                {Array.from({ length: 4 }).map((_, c) => {
                  const x = c * 200 - offset;
                  return (
                    <g key={c}>
                      <line x1={x} y1={y} x2={x} y2={y + 110} strokeWidth="3.5" />
                      {/* Núcleo teñido ámbar-marrón */}
                      <ellipse cx={x + 95} cy={y + 55} rx="12" ry="9" fill="#a16207" stroke="#713f12" strokeWidth="1.5" />
                      <circle cx={x + 93} cy={y + 53} r="3" fill="#451a03" />
                      {/* Citoplasma granular fino */}
                      <circle cx={x + 50} cy={y + 35} r="2" fill="#ca8a04" opacity="0.3" />
                      <circle cx={x + 140} cy={y + 75} r="2.5" fill="#ca8a04" opacity="0.3" />
                    </g>
                  );
                })}
              </g>
            );
          })}
        </g>
      )}

      {mag === '400x' && (
        <g stroke="#713f12" fill="none">
          {/* Dos células gigantes en gran aumento */}
          <line x1="0" y1="230" x2="500" y2="230" strokeWidth="8" />
          <line x1="0" y1="234" x2="500" y2="234" stroke="#ca8a04" strokeWidth="3" />
          <line x1="280" y1="0" x2="280" y2="500" strokeWidth="8" />
          <line x1="284" y1="0" x2="284" y2="500" stroke="#ca8a04" strokeWidth="3" />

          {/* Núcleo con nucléolo y membrana nuclear */}
          <ellipse cx="140" cy="130" rx="36" ry="26" fill="#a16207" stroke="#451a03" strokeWidth="3" />
          <circle cx="132" cy="125" r="8" fill="#451a03" />
          <ellipse cx="400" cy="340" rx="34" ry="24" fill="#a16207" stroke="#451a03" strokeWidth="3" />
          <circle cx="395" cy="336" r="7" fill="#451a03" />

          {/* Cordones citoplasmáticos y límite de gran vacuola */}
          <path d="M 60 70 Q 140 100 240 60" stroke="#ca8a04" strokeWidth="1.5" strokeDasharray="3,3" />
          <path d="M 40 180 Q 140 160 250 200" stroke="#ca8a04" strokeWidth="1.5" strokeDasharray="3,3" />
        </g>
      )}
    </svg>
  );
};

// Micrografía de Mucosa Bucal humana (azul de metileno)
const MucosaMicrograph: React.FC<{ mag: '40x' | '100x' | '400x' }> = ({ mag }) => {
  return (
    <svg viewBox="0 0 500 500" className="w-full h-full bg-[#f0f9ff]">
      {/* Fondo claro de agua y tinción */}
      <rect width="500" height="500" fill="#e0f2fe" opacity="0.4" />

      {mag === '40x' && (
        <g>
          {/* Células epiteliales dispersas pequeñas */}
          {[[120, 150], [240, 200], [310, 160], [180, 320], [380, 300], [270, 380]].map(([x, y], i) => (
            <g key={i}>
              <ellipse cx={x} cy={y} rx="22" ry="16" fill="#bfdbfe" stroke="#60a5fa" strokeWidth="1.5" opacity="0.85" />
              <circle cx={x + 2} cy={y} r="4" fill="#1e40af" />
            </g>
          ))}
        </g>
      )}

      {mag === '100x' && (
        <g>
          {/* Célula 1 central */}
          <path
            d="M 180 180 C 160 120 250 110 320 140 C 370 170 380 250 330 290 C 270 320 170 300 150 250 C 140 210 190 200 180 180 Z"
            fill="#93c5fd"
            stroke="#2563eb"
            strokeWidth="2.5"
            opacity="0.8"
          />
          <circle cx="260" cy="210" r="14" fill="#1e3a8a" stroke="#172554" strokeWidth="2" />

          {/* Célula 2 adyacente plegada */}
          <path
            d="M 330 250 C 350 210 440 220 460 270 C 470 320 430 380 370 370 C 330 360 310 300 330 250 Z"
            fill="#bfdbfe"
            stroke="#3b82f6"
            strokeWidth="2"
            opacity="0.75"
          />
          <circle cx="395" cy="305" r="11" fill="#1e3a8a" />

          {/* Pequeña bacteria de la flora bucal comensal */}
          <circle cx="200" cy="270" r="1.5" fill="#1e40af" />
          <circle cx="205" cy="274" r="1.5" fill="#1e40af" />
        </g>
      )}

      {mag === '400x' && (
        <g>
          {/* Célula epitelial gigante ocupando casi todo el campo */}
          <path
            d="M 100 140 C 90 40 260 50 390 90 C 480 140 470 340 400 400 C 300 450 120 440 70 340 C 40 240 120 200 100 140 Z"
            fill="#93c5fd"
            stroke="#1d4ed8"
            strokeWidth="4"
            opacity="0.85"
          />
          {/* Pliegues de la membrana plasmática delgada */}
          <path d="M 140 180 Q 220 220 310 160" stroke="#60a5fa" strokeWidth="2" fill="none" />
          <path d="M 160 320 Q 250 280 340 330" stroke="#60a5fa" strokeWidth="2" fill="none" />

          {/* Núcleo epitelial prominente teñido intensamente */}
          <ellipse cx="270" cy="245" rx="34" ry="28" fill="#1e3a8a" stroke="#0f172a" strokeWidth="3" />
          <circle cx="265" cy="240" r="10" fill="#0f172a" />
          <text x="250" y="244" fill="#93c5fd" fontSize="8" fontWeight="bold">ADN</text>
        </g>
      )}
    </svg>
  );
};

// Micrografía de Hoja Verde con Cloroplastos (Elodea)
const ChloroplastMicrograph: React.FC<{ mag: '40x' | '100x' | '400x' }> = ({ mag }) => {
  return (
    <svg viewBox="0 0 500 500" className="w-full h-full bg-[#f0fdf4]">
      {mag === '40x' && (
        <g stroke="#15803d" strokeWidth="2" fill="none">
          {Array.from({ length: 6 }).map((_, r) => (
            <g key={r}>
              <line x1="0" y1={r * 80 + 30} x2="500" y2={r * 80 + 30} strokeWidth="3" />
              {Array.from({ length: 5 }).map((_, c) => (
                <g key={c}>
                  <line x1={c * 105} y1={r * 80 + 30} x2={c * 105} y2={r * 80 + 110} />
                  {/* Mancha verde de clorofila */}
                  <circle cx={c * 105 + 50} cy={r * 80 + 70} r="16" fill="#22c55e" opacity="0.6" />
                </g>
              ))}
            </g>
          ))}
        </g>
      )}

      {mag === '100x' && (
        <g stroke="#166534" strokeWidth="3.5" fill="none">
          {/* Paredes celulares */}
          <line x1="50" y1="0" x2="50" y2="500" strokeWidth="5" />
          <line x1="280" y1="0" x2="280" y2="500" strokeWidth="5" />
          <line x1="500" y1="0" x2="500" y2="500" strokeWidth="5" />
          <line x1="0" y1="250" x2="500" y2="250" strokeWidth="5" />

          {/* Abundantes cloroplastos verdes en la célula izquierda */}
          {[
            [80, 80], [120, 70], [160, 90], [210, 80], [240, 110],
            [90, 160], [230, 180], [100, 220], [160, 230], [220, 220]
          ].map(([x, y], i) => (
            <ellipse key={i} cx={x} cy={y} rx="12" ry="8" fill="#15803d" stroke="#14532d" strokeWidth="1.5" />
          ))}

          {/* Cloroplastos en la célula inferior */}
          {[
            [90, 290], [150, 310], [220, 300], [110, 380], [180, 410], [240, 370]
          ].map(([x, y], i) => (
            <ellipse key={i} cx={x} cy={y} rx="12" ry="8" fill="#16a34a" stroke="#15803d" strokeWidth="1.5" />
          ))}
        </g>
      )}

      {mag === '400x' && (
        <g stroke="#14532d" fill="none">
          {/* Pared celular vegetal en primer plano */}
          <line x1="0" y1="120" x2="500" y2="120" strokeWidth="12" />
          <line x1="0" y1="390" x2="500" y2="390" strokeWidth="12" />
          <line x1="380" y1="0" x2="380" y2="500" strokeWidth="12" />

          {/* Cloroplastos con gran detalle discoidal y granas internas */}
          {[
            [80, 170], [160, 160], [250, 175], [320, 190],
            [90, 250], [150, 280], [330, 270],
            [120, 340], [210, 350], [290, 340]
          ].map(([x, y], i) => (
            <g key={i}>
              <ellipse cx={x} cy={y} rx="24" ry="16" fill="#15803d" stroke="#14532d" strokeWidth="2.5" />
              <line x1={x - 14} y1={y} x2={x + 14} y2={y} stroke="#86efac" strokeWidth="2" />
              <line x1={x - 10} y1={y - 5} x2={x + 10} y2={y - 5} stroke="#86efac" strokeWidth="1.5" />
              <line x1={x - 10} y1={y + 5} x2={x + 10} y2={y + 5} stroke="#86efac" strokeWidth="1.5" />
            </g>
          ))}
        </g>
      )}
    </svg>
  );
};

// Micrografía de Tejido Muscular Estriado (H&E)
const MuscleMicrograph: React.FC<{ mag: '40x' | '100x' | '400x' }> = ({ mag }) => {
  return (
    <svg viewBox="0 0 500 500" className="w-full h-full bg-[#ffe4e6]">
      {/* Fondo rosado de eosina */}
      <rect width="500" height="500" fill="#f43f5e" opacity="0.15" />

      {mag === '40x' && (
        <g stroke="#e11d48" strokeWidth="1.5">
          {Array.from({ length: 9 }).map((_, i) => (
            <g key={i}>
              <line x1="0" y1={i * 55 + 20} x2="500" y2={i * 55 + 20} strokeWidth="3" />
              {/* Núcleos periféricos oscuros */}
              <ellipse cx={120 + (i % 3) * 80} cy={i * 55 + 20} rx="12" ry="4" fill="#4c0519" />
              <ellipse cx={320 + (i % 2) * 60} cy={i * 55 + 20} rx="14" ry="4" fill="#4c0519" />
            </g>
          ))}
        </g>
      )}

      {mag === '100x' && (
        <g>
          {Array.from({ length: 4 }).map((_, i) => {
            const y = i * 115 + 40;
            return (
              <g key={i}>
                <rect x="0" y={y} width="500" height="85" fill="#f43f5e" opacity="0.45" stroke="#be123c" strokeWidth="3" />
                {/* Estriaciones suaves */}
                {Array.from({ length: 25 }).map((_, s) => (
                  <line
                    key={s}
                    x1={s * 20}
                    y1={y}
                    x2={s * 20}
                    y2={y + 85}
                    stroke="#be123c"
                    strokeWidth="3"
                    opacity="0.4"
                  />
                ))}
                {/* Núcleos alargados adosados al sarcolema */}
                <ellipse cx={140 + i * 50} cy={y + 6} rx="22" ry="6" fill="#4c0519" />
                <ellipse cx={340 - i * 30} cy={y + 79} rx="24" ry="6" fill="#4c0519" />
              </g>
            );
          })}
        </g>
      )}

      {mag === '400x' && (
        <g>
          {/* Fibra muscular en gran aumento con bandas A e I evidentes */}
          <rect x="0" y="70" width="500" height="160" fill="#f43f5e" opacity="0.5" stroke="#9f1239" strokeWidth="5" />
          <rect x="0" y="270" width="500" height="160" fill="#f43f5e" opacity="0.5" stroke="#9f1239" strokeWidth="5" />

          {/* Bandas transversales de sarcómeros (Bandas oscuras A y claras I) */}
          {Array.from({ length: 35 }).map((_, s) => (
            <React.Fragment key={s}>
              <line x1={s * 15} y1="70" x2={s * 15} y2="230" stroke="#881337" strokeWidth="6" opacity="0.75" />
              <line x1={s * 15} y1="270" x2={s * 15} y2="430" stroke="#881337" strokeWidth="6" opacity="0.75" />
            </React.Fragment>
          ))}

          {/* Núcleos periféricos gigantes con cromatina condensada */}
          <ellipse cx="180" cy="74" rx="42" ry="12" fill="#3b0764" stroke="#1e1b4b" strokeWidth="2" />
          <ellipse cx="360" cy="226" rx="46" ry="12" fill="#3b0764" stroke="#1e1b4b" strokeWidth="2" />
          <ellipse cx="240" cy="274" rx="44" ry="12" fill="#3b0764" stroke="#1e1b4b" strokeWidth="2" />
        </g>
      )}
    </svg>
  );
};

// Micrografía de Tejido Nervioso (Neuronas motoras)
const NerveMicrograph: React.FC<{ mag: '40x' | '100x' | '400x' }> = ({ mag }) => {
  return (
    <svg viewBox="0 0 500 500" className="w-full h-full bg-[#fdf4ff]">
      {/* Neurópilo de fondo (red fibrilar) */}
      <rect width="500" height="500" fill="#fae8ff" opacity="0.5" />

      {mag === '40x' && (
        <g>
          {/* Siluetas neuronales oscuras */}
          <polygon points="150,140 180,180 140,210 110,170" fill="#6b21a8" />
          <polygon points="340,260 380,310 320,330 300,280" fill="#6b21a8" />
          {/* Pequeños núcleos de glía */}
          {Array.from({ length: 30 }).map((_, i) => (
            <circle
              key={i}
              cx={(i * 37 + 23) % 480}
              cy={(i * 53 + 41) % 480}
              r="3"
              fill="#581c87"
              opacity="0.8"
            />
          ))}
        </g>
      )}

      {mag === '100x' && (
        <g>
          {/* Neurona motora central estrellada */}
          <path
            d="M 240 180 L 290 120 L 265 195 L 340 220 L 265 245 L 300 320 L 235 260 L 160 300 L 210 235 L 140 190 L 215 205 Z"
            fill="#7e22ce"
            stroke="#581c87"
            strokeWidth="3"
          />
          <circle cx="240" cy="225" r="20" fill="#e9d5ff" stroke="#3b0764" strokeWidth="2" />
          <circle cx="238" cy="223" r="7" fill="#3b0764" />

          {/* Núcleos de células de la glía alrededor */}
          {[
            [120, 120], [180, 90], [380, 150], [390, 280], [120, 360], [300, 390]
          ].map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r="6" fill="#3b0764" />
          ))}
        </g>
      )}

      {mag === '400x' && (
        <g>
          {/* Soma neuronal gigante */}
          <path
            d="M 230 110 L 320 30 L 280 150 L 460 200 L 300 270 L 390 420 L 240 320 L 60 410 L 170 250 L 40 160 L 180 180 Z"
            fill="#7e22ce"
            stroke="#3b0764"
            strokeWidth="5"
          />
          {/* Grumos de Nissl en el citoplasma del soma */}
          {Array.from({ length: 15 }).map((_, i) => (
            <ellipse
              key={i}
              cx={200 + (i % 4) * 25}
              cy={180 + Math.floor(i / 4) * 25}
              rx="5"
              ry="3"
              fill="#3b0764"
            />
          ))}

          {/* Gran núcleo esférico vesiculoso con nucléolo en "ojo de búho" */}
          <circle cx="245" cy="235" r="44" fill="#f3e8ff" stroke="#3b0764" strokeWidth="3" />
          <circle cx="240" cy="230" r="16" fill="#1e1b4b" />
          <circle cx="236" cy="226" r="4" fill="#ffffff" />
        </g>
      )}
    </svg>
  );
};
