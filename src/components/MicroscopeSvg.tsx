import React from 'react';
import { MicroscopePart } from '../types/microscope';

interface MicroscopeSvgProps {
  parts: MicroscopePart[];
  selectedPartId: string | null;
  onSelectPart: (partId: string) => void;
  hoveredPartId: string | null;
  onHoverPart: (partId: string | null) => void;
  interactiveMode?: 'learn' | 'quiz';
  quizTargetPartId?: string | null;
}

export const MicroscopeSvg: React.FC<MicroscopeSvgProps> = ({
  parts,
  selectedPartId,
  onSelectPart,
  hoveredPartId,
  onHoverPart,
  quizTargetPartId
}) => {
  return (
    <div className="relative w-full max-w-md mx-auto aspect-square select-none">
      <svg
        viewBox="0 0 600 680"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="metalChrome" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#64748b" />
            <stop offset="50%" stopColor="#cbd5e1" />
            <stop offset="100%" stopColor="#475569" />
          </linearGradient>
          <linearGradient id="bodyFinish" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f8fafc" />
            <stop offset="70%" stopColor="#e2e8f0" />
            <stop offset="100%" stopColor="#cbd5e1" />
          </linearGradient>
          <linearGradient id="armIron" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1e293b" />
            <stop offset="40%" stopColor="#334155" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>
        </defs>

        {/* --- BASE DE FUNDICIÓN --- */}
        <g id="base-pie">
          <ellipse cx="300" cy="650" rx="200" ry="18" fill="#0f172a" fillOpacity="0.08" />
          <path
            d="M 130 625 C 130 595 190 575 300 575 C 410 575 470 595 470 625 L 470 645 C 470 655 410 665 300 665 C 190 665 130 655 130 645 Z"
            fill="url(#armIron)"
            stroke="#0f172a"
            strokeWidth="2"
          />
          {/* Apoyos de goma antideslizantes */}
          <rect x="150" y="645" width="28" height="6" rx="2" fill="#0f172a" />
          <rect x="420" y="645" width="28" height="6" rx="2" fill="#0f172a" />
          <rect x="286" y="656" width="28" height="6" rx="2" fill="#0f172a" />
        </g>

        {/* --- FUENTE DE ILUMINACIÓN LED INTEGRADA --- */}
        <g id="fuente-iluminacion">
          <rect x="255" y="530" width="90" height="46" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="1.5" />
          <ellipse cx="300" cy="530" rx="38" ry="12" fill="#0f172a" stroke="#475569" strokeWidth="1.5" />
          <ellipse cx="300" cy="530" rx="32" ry="9" fill="#fef08a" stroke="#ca8a04" strokeWidth="1.5" />
          {/* Cono de luz hacia la platina */}
          <polygon points="275,530 250,430 350,430 325,530" fill="#fef9c3" opacity="0.3" />
        </g>

        {/* --- CONDENSADOR Y DIAFRAGMA IRIS --- */}
        <g id="condensador-diafragma">
          <rect x="265" y="415" width="70" height="38" rx="3" fill="url(#metalChrome)" stroke="#334155" strokeWidth="1.5" />
          <path d="M 275 415 Q 300 405 325 415 Z" fill="#bae6fd" stroke="#0284c7" strokeWidth="1.5" />
          {/* Palanquita del diafragma */}
          <line x1="335" y1="428" x2="365" y2="433" stroke="#64748b" strokeWidth="3" strokeLinecap="round" />
          <circle cx="365" cy="433" r="4.5" fill="#e2e8f0" stroke="#334155" strokeWidth="1" />
        </g>

        {/* --- BRAZO O COLUMNA MECÁNICA --- */}
        <g id="brazo-columna">
          <path
            d="M 360 580 C 440 570 465 510 455 380 C 450 250 425 190 320 180 L 320 225 C 385 235 400 280 400 370 C 400 460 375 500 350 530 Z"
            fill="url(#armIron)"
            stroke="#0f172a"
            strokeWidth="2.5"
          />
        </g>

        {/* --- PLATINA MECÁNICA Y SUJETADORES --- */}
        <g id="platina-pinzas">
          <rect x="330" y="375" width="35" height="50" fill="#334155" stroke="#1e293b" strokeWidth="1.5" />
          <polygon
            points="180,365 375,365 420,385 225,385"
            fill="#1e293b"
            stroke="#0f172a"
            strokeWidth="2"
          />
          <polygon
            points="180,365 225,385 225,395 180,375"
            fill="#0f172a"
          />
          <polygon
            points="225,385 420,385 420,395 225,395"
            fill="#0f172a"
          />
          {/* Orificio iluminado */}
          <ellipse cx="300" cy="375" rx="16" ry="6" fill="#fef08a" stroke="#ca8a04" strokeWidth="1.5" />
          {/* Portaobjetos de vidrio sobre la platina */}
          <polygon
            points="245,371 355,371 365,378 255,378"
            fill="#e0f2fe"
            fillOpacity="0.8"
            stroke="#38bdf8"
            strokeWidth="1"
          />
          {/* Pinzas */}
          <path d="M 235 371 Q 250 363 268 372" stroke="#cbd5e1" strokeWidth="3" strokeLinecap="round" fill="none" />
          <path d="M 365 373 Q 350 365 335 373" stroke="#cbd5e1" strokeWidth="3" strokeLinecap="round" fill="none" />
        </g>

        {/* --- MANDOS DE ENFOQUE (TORNILLOS MACRO Y MICRO) --- */}
        <g id="mandos-enfoque">
          {/* Macrométrico exterior */}
          <circle cx="430" cy="442" r="36" fill="url(#metalChrome)" stroke="#1e293b" strokeWidth="2" />
          <circle cx="430" cy="442" r="30" stroke="#475569" strokeWidth="1.5" strokeDasharray="4,4" fill="none" />
          {/* Micrométrico concéntrico fino */}
          <circle cx="430" cy="442" r="16" fill="#0f172a" stroke="#334155" strokeWidth="2" />
          <circle cx="430" cy="442" r="12" fill="url(#metalChrome)" />
          <circle cx="430" cy="442" r="4" fill="#0f172a" />
        </g>

        {/* --- CABEZAL ÓPTICO Y TUBO --- */}
        <g id="tubo-cabezal">
          <path
            d="M 265 175 L 340 175 L 335 240 L 270 240 Z"
            fill="url(#bodyFinish)"
            stroke="#334155"
            strokeWidth="2"
          />
          <path
            d="M 285 175 L 320 175 L 290 85 L 260 95 Z"
            fill="url(#metalChrome)"
            stroke="#1e293b"
            strokeWidth="1.5"
          />
        </g>

        {/* --- OCULAR (10x) --- */}
        <g id="ocular-lente">
          <rect
            x="245"
            y="65"
            width="38"
            height="32"
            rx="2"
            transform="rotate(18, 264, 81)"
            fill="#1e293b"
            stroke="#0f172a"
            strokeWidth="1.5"
          />
          <rect
            x="241"
            y="52"
            width="46"
            height="14"
            rx="3"
            transform="rotate(18, 264, 59)"
            fill="#334155"
            stroke="#1e293b"
            strokeWidth="1.5"
          />
          <ellipse
            cx="273"
            y="58"
            rx="13"
            ry="4"
            transform="rotate(18, 273, 58)"
            fill="#7dd3fc"
          />
          <text
            x="285"
            y="94"
            fill="#e2e8f0"
            fontSize="9"
            fontFamily="monospace"
            fontWeight="bold"
            transform="rotate(18, 285, 94)"
          >
            10x
          </text>
        </g>

        {/* --- REVÓLVER PORTAOBJETIVOS --- */}
        <g id="revolver-torreta">
          <ellipse cx="300" cy="242" rx="42" ry="14" fill="#1e293b" stroke="#334155" strokeWidth="2" />
          <ellipse cx="300" cy="245" rx="38" ry="11" fill="url(#metalChrome)" />
        </g>

        {/* --- OBJETIVOS (4x, 10x, 40x) --- */}
        <g id="juego-objetivos">
          {/* Objetivo 4x (rojo) inactivo */}
          <g transform="rotate(22, 270, 248)">
            <rect x="258" y="248" width="22" height="35" rx="2" fill="#334155" stroke="#1e293b" strokeWidth="1.5" />
            <rect x="258" y="260" width="22" height="4" fill="#dc2626" />
          </g>

          {/* Objetivo 40x (azul) inactivo */}
          <g transform="rotate(-22, 330, 248)">
            <rect x="320" y="248" width="22" height="65" rx="2" fill="#334155" stroke="#1e293b" strokeWidth="1.5" />
            <rect x="320" y="265" width="22" height="4" fill="#2563eb" />
          </g>

          {/* Objetivo 10x (amarillo) central alineado */}
          <rect x="288" y="250" width="26" height="50" rx="2" fill="url(#metalChrome)" stroke="#0f172a" strokeWidth="1.5" />
          <rect x="288" y="268" width="26" height="5" fill="#eab308" />
          <text x="292" y="284" fill="#0f172a" fontSize="8" fontFamily="monospace" fontWeight="bold">10x</text>
          <path d="M 292 300 L 295 315 L 307 315 L 310 300 Z" fill="#475569" stroke="#0f172a" strokeWidth="1" />
          <ellipse cx="301" cy="315" rx="4" ry="1.2" fill="#7dd3fc" />
        </g>

        {/* --- PUNTOS INTERACTIVOS ROTULADOS (HOTSPOTS 1 A 12) --- */}
        {parts.map((part, index) => {
          const isSelected = selectedPartId === part.id;
          const isHovered = hoveredPartId === part.id;
          const isQuizTarget = quizTargetPartId === part.id;

          const cx = (part.coords.x / 100) * 600;
          const cy = (part.coords.y / 100) * 680;

          return (
            <g
              key={part.id}
              className="cursor-pointer"
              onClick={() => onSelectPart(part.id)}
              onMouseEnter={() => onHoverPart(part.id)}
              onMouseLeave={() => onHoverPart(null)}
            >
              {/* Anillo de selección discreto */}
              {(isSelected || isQuizTarget) && (
                <circle
                  cx={cx}
                  cy={cy}
                  r="21"
                  fill="none"
                  stroke="#16A6A0"
                  strokeWidth="2.5"
                  strokeDasharray="4,3"
                />
              )}

              {/* Botón circular numerado */}
              <circle
                cx={cx}
                cy={cy}
                r={isSelected ? 15 : isHovered ? 13 : 11}
                fill={isSelected ? '#173B70' : isHovered ? '#16A6A0' : '#ffffff'}
                stroke={isSelected ? '#173B70' : isHovered ? '#16A6A0' : '#334155'}
                strokeWidth={1.8}
                className="transition-all"
              />

              {/* Número del 1 al 12 */}
              <text
                x={cx}
                y={cy + 4}
                textAnchor="middle"
                fill={isSelected || isHovered ? '#ffffff' : '#173B70'}
                fontSize={isSelected ? '11' : '10'}
                fontFamily="sans-serif"
                fontWeight="bold"
                className="pointer-events-none select-none"
              >
                {index + 1}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
};
