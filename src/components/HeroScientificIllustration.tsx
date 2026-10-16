import React from 'react';

export const HeroScientificIllustration: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative w-full aspect-4/3 sm:aspect-square max-w-[480px] mx-auto select-none ${className}`}>
      {/* Decorative ambient scientific glow */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-[#173B70]/8 via-[#16A6A0]/10 to-transparent rounded-3xl blur-2xl pointer-events-none" />

      <svg
        viewBox="0 0 540 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full relative z-10 drop-shadow-sm"
      >
        <defs>
          {/* Gradients */}
          <linearGradient id="deepBlueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1E4785" />
            <stop offset="100%" stopColor="#173B70" />
          </linearGradient>

          <linearGradient id="turquoiseGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22C5BE" />
            <stop offset="100%" stopColor="#16A6A0" />
          </linearGradient>

          <linearGradient id="metalGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#94a3b8" />
            <stop offset="50%" stopColor="#f1f5f9" />
            <stop offset="100%" stopColor="#64748b" />
          </linearGradient>

          <linearGradient id="lensGlass" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#e0f2fe" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#bae6fd" stopOpacity="0.4" />
          </linearGradient>

          <linearGradient id="lightCone" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#16A6A0" stopOpacity="0.55" />
            <stop offset="60%" stopColor="#22C5BE" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.05" />
          </linearGradient>

          <pattern id="reticleGrid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#16A6A0" strokeWidth="0.5" strokeOpacity="0.25" />
          </pattern>
        </defs>

        {/* --- BASE Y FONDO DEL DIAGRAMA --- */}
        <circle cx="270" cy="250" r="215" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1.5" />
        <circle cx="270" cy="250" r="215" fill="url(#reticleGrid)" />

        {/* Círculo de aumento concéntrico decorativo */}
        <circle cx="270" cy="250" r="200" stroke="#16A6A0" strokeWidth="1" strokeDasharray="4 6" strokeOpacity="0.4" />

        {/* --- MICROSCOPIO EN SILUETA CIENTÍFICA --- */}
        {/* Base del microscopio */}
        <path
          d="M 120 440 C 120 420 160 410 240 410 C 320 410 360 420 360 440 L 350 455 C 350 462 310 468 240 468 C 170 468 130 462 130 455 Z"
          fill="#173B70"
          stroke="#0f2648"
          strokeWidth="2"
        />
        <rect x="150" y="455" width="20" height="4" rx="2" fill="#0f172a" />
        <rect x="310" y="455" width="20" height="4" rx="2" fill="#0f172a" />

        {/* Fuente de Luz / Foco */}
        <path d="M 220 410 L 260 410 L 255 385 L 225 385 Z" fill="#334155" />
        <ellipse cx="240" cy="385" rx="14" ry="4" fill="#16A6A0" />

        {/* Cono de Luz Óptica Turquesa */}
        <polygon points="230,385 250,385 248,310 232,310" fill="url(#lightCone)" />
        <polygon points="232,305 248,305 243,260 237,260" fill="url(#lightCone)" />

        {/* Brazo / Columna del microscopio */}
        <path
          d="M 180 420 C 180 340 185 220 225 155 C 235 140 255 130 280 130 L 290 130 L 290 160 L 265 160 C 240 160 220 180 215 230 C 210 270 210 370 215 420 Z"
          fill="url(#deepBlueGrad)"
          stroke="#0f2648"
          strokeWidth="2"
        />

        {/* Platina Mecánica */}
        <rect x="175" y="305" width="130" height="12" rx="3" fill="#0f172a" />
        {/* Portaobjetos de vidrio sobre la platina */}
        <rect x="205" y="300" width="70" height="5" rx="1" fill="#bae6fd" stroke="#38bdf8" strokeWidth="1" />
        {/* Muestra biológica en la laminilla */}
        <circle cx="240" cy="302" r="3.5" fill="#16A6A0" />
        {/* Pinzas de sujeción */}
        <rect x="208" y="297" width="10" height="3" fill="#cbd5e1" />
        <rect x="262" y="297" width="10" height="3" fill="#cbd5e1" />

        {/* Tornillos Macrométrico y Micrométrico */}
        <g id="focus-knobs">
          {/* Macrométrico grande */}
          <circle cx="170" cy="350" r="18" fill="#173B70" stroke="#cbd5e1" strokeWidth="2.5" />
          <circle cx="170" cy="350" r="13" fill="#334155" />
          {/* Micrométrico concéntrico fino */}
          <circle cx="170" cy="350" r="7" fill="#16A6A0" stroke="#ffffff" strokeWidth="1.5" />
        </g>

        {/* Revólver y Objetivos */}
        <path d="M 225 220 L 255 220 L 250 238 L 230 238 Z" fill="#475569" />
        <ellipse cx="240" cy="238" rx="20" ry="6" fill="#334155" stroke="#16A6A0" strokeWidth="1.5" />

        {/* Objetivo 40x apuntando hacia abajo */}
        <rect x="235" y="244" width="10" height="22" rx="1.5" fill="url(#metalGrad)" stroke="#334155" strokeWidth="1" />
        <rect x="235" y="256" width="10" height="3.5" fill="#16A6A0" /> {/* Anillo azul/turquesa del 40x */}

        {/* Objetivo 10x oblicuo */}
        <path d="M 252 242 L 265 258 L 260 262 L 247 246 Z" fill="#64748b" />
        <line x1="255" y1="250" x2="260" y2="256" stroke="#f59e0b" strokeWidth="2" /> {/* Anillo amarillo 10x */}

        {/* Tubo Óptico */}
        <path d="M 230 220 L 270 140 L 290 150 L 250 220 Z" fill="url(#deepBlueGrad)" stroke="#0f2648" strokeWidth="1.5" />

        {/* Ocular en la parte superior */}
        <rect x="272" y="105" width="22" height="38" rx="2" transform="rotate(26 272 105)" fill="#0f172a" stroke="#475569" strokeWidth="1" />
        <ellipse cx="295" cy="116" rx="8" ry="4" transform="rotate(26 295 116)" fill="#38bdf8" opacity="0.8" />

        {/* --- LENTE OCULAR DE CAMPO VISUAL MAGNIFICADO (CÉLULAS ILUMINADAS) --- */}
        {/* Círculo ocular exterior */}
        <g id="specimen-magnified-view" className="cursor-pointer">
          <circle cx="370" cy="210" r="115" fill="#0b1728" stroke="#173B70" strokeWidth="5" />
          <circle cx="370" cy="210" r="110" fill="#042f2e" stroke="#16A6A0" strokeWidth="2.5" />

          {/* Luz interna del microscopio dentro del campo visual */}
          <circle cx="370" cy="210" r="108" fill="#083344" />
          <circle cx="370" cy="210" r="108" fill="url(#turquoiseGrad)" opacity="0.12" />

          {/* TEJIDO VEGETAL: Células poligonales de cebolla y cloroplastos */}
          <g id="cells" stroke="#22d3ee" strokeWidth="1.2" opacity="0.85">
            {/* Fila superior de células */}
            <polygon points="290,160 330,145 380,150 375,185 325,180 288,175" fill="#0e7490" fillOpacity="0.25" />
            <circle cx="335" cy="165" r="5" fill="#22d3ee" fillOpacity="0.7" stroke="#ffffff" strokeWidth="0.8" />

            <polygon points="380,150 430,142 460,170 455,195 375,185" fill="#0891b2" fillOpacity="0.25" />
            <circle cx="418" cy="168" r="5.5" fill="#22d3ee" fillOpacity="0.7" stroke="#ffffff" strokeWidth="0.8" />

            {/* Fila central de células (enfoque principal) */}
            <polygon points="278,210 325,180 375,185 380,235 325,240 275,230" fill="#14b8a6" fillOpacity="0.3" stroke="#2dd4bf" strokeWidth="1.6" />
            {/* Núcleo celular conspicuo con nucléolo */}
            <circle cx="330" cy="212" r="7" fill="#16A6A0" stroke="#f0fdfa" strokeWidth="1.2" />
            <circle cx="332" cy="210" r="2.5" fill="#ffffff" />
            {/* Cloroplastos / gránulos citoplasmáticos */}
            <circle cx="305" cy="198" r="3" fill="#4ade80" />
            <circle cx="355" cy="202" r="2.5" fill="#4ade80" />
            <circle cx="312" cy="225" r="3" fill="#4ade80" />
            <circle cx="358" cy="222" r="2.8" fill="#4ade80" />

            {/* Célula contigua derecha */}
            <polygon points="375,185 455,195 465,240 380,235" fill="#0f766e" fillOpacity="0.28" stroke="#2dd4bf" strokeWidth="1.4" />
            <circle cx="420" cy="215" r="6.5" fill="#16A6A0" stroke="#f0fdfa" strokeWidth="1" />
            <circle cx="395" cy="200" r="2.5" fill="#4ade80" />
            <circle cx="440" cy="225" r="2.8" fill="#4ade80" />

            {/* Fila inferior */}
            <polygon points="285,260 325,240 380,235 375,280 320,285 280,275" fill="#0e7490" fillOpacity="0.22" />
            <circle cx="332" cy="260" r="5" fill="#22d3ee" fillOpacity="0.6" stroke="#ffffff" strokeWidth="0.8" />

            <polygon points="380,235 465,240 450,285 375,280" fill="#0891b2" fillOpacity="0.22" />
            <circle cx="415" cy="258" r="5" fill="#22d3ee" fillOpacity="0.6" stroke="#ffffff" strokeWidth="0.8" />
          </g>

          {/* Retícula óptica científica (Crosshairs & Micrómetro) */}
          <line x1="262" y1="210" x2="478" y2="210" stroke="#16A6A0" strokeWidth="0.8" strokeDasharray="3 4" strokeOpacity="0.6" />
          <line x1="370" y1="102" x2="370" y2="318" stroke="#16A6A0" strokeWidth="0.8" strokeDasharray="3 4" strokeOpacity="0.6" />

          {/* Graduación micrométrica en el eje */}
          <line x1="350" y1="206" x2="350" y2="214" stroke="#ffffff" strokeWidth="1" />
          <line x1="360" y1="207" x2="360" y2="213" stroke="#ffffff" strokeWidth="1" />
          <line x1="370" y1="205" x2="370" y2="215" stroke="#ffffff" strokeWidth="1.2" />
          <line x1="380" y1="207" x2="380" y2="213" stroke="#ffffff" strokeWidth="1" />
          <line x1="390" y1="206" x2="390" y2="214" stroke="#ffffff" strokeWidth="1" />

          {/* Reflejo vítreo en la lente */}
          <path
            d="M 290 150 C 330 120 410 120 450 150 C 430 140 370 135 310 155 Z"
            fill="#ffffff"
            opacity="0.25"
          />

          {/* Badge flotante de Aumento 400x */}
          <g transform="translate(370, 290)">
            <rect x="-42" y="-12" width="84" height="24" rx="12" fill="#173B70" stroke="#16A6A0" strokeWidth="1.5" />
            <text x="0" y="4" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="700" fontFamily="sans-serif">
              400x · Nitidez
            </text>
          </g>
        </g>

        {/* --- ETIQUETAS TÉCNICAS E INDICADORES CIENTÍFICOS --- */}
        {/* Puntero y etiqueta: Núcleo Celular */}
        <line x1="330" y1="205" x2="280" y2="120" stroke="#16A6A0" strokeWidth="1.2" strokeDasharray="2 3" />
        <circle cx="280" cy="120" r="3" fill="#16A6A0" />
        <g transform="translate(195, 105)">
          <rect x="0" y="0" width="80" height="22" rx="4" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
          <text x="40" y="15" textAnchor="middle" fill="#173B70" fontSize="10" fontWeight="700" fontFamily="sans-serif">
            Núcleo Celular
          </text>
        </g>

        {/* Puntero y etiqueta: Pared Celular */}
        <line x1="380" y1="235" x2="430" y2="340" stroke="#16A6A0" strokeWidth="1.2" strokeDasharray="2 3" />
        <circle cx="430" cy="340" r="3" fill="#16A6A0" />
        <g transform="translate(400, 345)">
          <rect x="0" y="0" width="85" height="22" rx="4" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
          <text x="42.5" y="15" textAnchor="middle" fill="#173B70" fontSize="10" fontWeight="700" fontFamily="sans-serif">
            Pared Celular
          </text>
        </g>

        {/* Indicador de Escala Científica */}
        <g transform="translate(50, 60)">
          <rect x="0" y="0" width="135" height="38" rx="6" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
          <text x="12" y="16" fill="#173B70" fontSize="10" fontWeight="700" fontFamily="sans-serif">
            Óptica Acromática DIN
          </text>
          <text x="12" y="30" fill="#64748b" fontSize="9" fontWeight="500" fontFamily="sans-serif">
            Res. Teórica: 0.2 µm · 8.º EGB
          </text>
        </g>
      </svg>
    </div>
  );
};
