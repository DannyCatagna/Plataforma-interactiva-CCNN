import React from 'react';

interface UnachLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'color' | 'monochrome';
  showSubtitle?: boolean;
}

export const UnachLogo: React.FC<UnachLogoProps> = ({
  className = '',
  size = 'md',
  variant = 'color',
  showSubtitle = false
}) => {
  const sizeClasses = {
    sm: 'text-xs px-2 py-0.5 tracking-wider',
    md: 'text-sm px-2.5 py-0.5 tracking-widest',
    lg: 'text-base px-3 py-1 tracking-widest',
    xl: 'text-lg px-4 py-1.5 tracking-widest'
  };

  const isMono = variant === 'monochrome';

  return (
    <div className={`inline-flex items-center gap-2 select-none ${className}`}>
      {/* Texto puro UNACH sin logotipos ni gráficos */}
      <span
        className={`font-extrabold font-sans uppercase rounded ${
          isMono
            ? 'bg-transparent text-black border border-black'
            : 'bg-[#173B70] text-white shadow-xs'
        } ${sizeClasses[size]}`}
        title="Universidad Nacional de Chimborazo (UNACH)"
      >
        UNACH
      </span>

      {showSubtitle && (
        <div className="flex flex-col text-left">
          <span className="text-xs font-bold text-[#0a0a0a] tracking-tight leading-tight">
            Universidad Nacional de Chimborazo
          </span>
          <span className="text-[10px] text-[#524e47] font-medium leading-tight">
            Riobamba · Vinculación con la Sociedad
          </span>
        </div>
      )}
    </div>
  );
};
