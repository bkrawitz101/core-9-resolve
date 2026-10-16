import React from 'react';

interface ArchitecturalConvergenceSvgProps {
  className?: string;
  variant?: 'hero' | 'invitation' | 'subtle';
}

export const ArchitecturalConvergenceSvg: React.FC<ArchitecturalConvergenceSvgProps> = ({
  className = '',
  variant = 'hero',
}) => {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden select-none ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 1440 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-cover opacity-90 transition-opacity duration-700"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Bronze-Gold Rim Light Gradient */}
          <linearGradient id="bronzeRimGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C59B5F" stopOpacity="0" />
            <stop offset="50%" stopColor="#C59B5F" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#E5C185" stopOpacity="1" />
          </linearGradient>

          <linearGradient id="bronzeRimGradLeft" x1="0%" y1="0%" x2="100%" y2="80%">
            <stop offset="0%" stopColor="#E5C185" stopOpacity="0.1" />
            <stop offset="40%" stopColor="#C59B5F" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#070B14" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="bronzeRimGradRight" x1="100%" y1="0%" x2="0%" y2="80%">
            <stop offset="0%" stopColor="#E5C185" stopOpacity="0.1" />
            <stop offset="40%" stopColor="#C59B5F" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#070B14" stopOpacity="0" />
          </linearGradient>

          {/* Plane fills: subtle architectural graphite sheen */}
          <linearGradient id="planeGradLeft" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#111726" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#070B14" stopOpacity="0.8" />
          </linearGradient>

          <linearGradient id="planeGradRight" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#111726" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#070B14" stopOpacity="0.8" />
          </linearGradient>

          {/* Focal Convergence Glow */}
          <radialGradient id="focalGlow" cx="50%" cy="85%" r="45%">
            <stop offset="0%" stopColor="#C59B5F" stopOpacity="0.18" />
            <stop offset="60%" stopColor="#111726" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#070B14" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Ambient Focal Glow at Convergence Point */}
        <ellipse cx="720" cy="760" rx="550" ry="240" fill="url(#focalGlow)" />

        {/* Subtle Architectural Grid Lines */}
        <g stroke="rgba(255, 255, 255, 0.03)" strokeWidth="1">
          <line x1="120" y1="0" x2="120" y2="900" />
          <line x1="360" y1="0" x2="360" y2="900" />
          <line x1="720" y1="0" x2="720" y2="900" strokeDasharray="4 8" stroke="rgba(197, 155, 95, 0.15)" />
          <line x1="1080" y1="0" x2="1080" y2="900" />
          <line x1="1320" y1="0" x2="1320" y2="900" />
        </g>

        {/* Outer Left Converging Architectural Plane */}
        <path
          d="M-100 200 L560 760 L420 900 L-100 900 Z"
          fill="url(#planeGradLeft)"
          opacity="0.6"
        />
        <line
          x1="-100"
          y1="200"
          x2="560"
          y2="760"
          stroke="url(#bronzeRimGradLeft)"
          strokeWidth="1.5"
        />

        {/* Outer Right Converging Architectural Plane */}
        <path
          d="M1540 200 L880 760 L1020 900 L1540 900 Z"
          fill="url(#planeGradRight)"
          opacity="0.6"
        />
        <line
          x1="1540"
          y1="200"
          x2="880"
          y2="760"
          stroke="url(#bronzeRimGradRight)"
          strokeWidth="1.5"
        />

        {/* Inner Secondary Left Vector */}
        <line
          x1="180"
          y1="50"
          x2="660"
          y2="750"
          stroke="url(#bronzeRimGradLeft)"
          strokeWidth="1.25"
          strokeDasharray="2 0"
        />

        {/* Inner Secondary Right Vector */}
        <line
          x1="1260"
          y1="50"
          x2="780"
          y2="750"
          stroke="url(#bronzeRimGradRight)"
          strokeWidth="1.25"
          strokeDasharray="2 0"
        />

        {/* Central Converging V-Planes */}
        <path
          d="M320 0 L720 680 L1120 0 L720 120 Z"
          fill="rgba(17, 23, 38, 0.25)"
          stroke="rgba(197, 155, 95, 0.12)"
          strokeWidth="1"
        />

        {/* Razor-sharp Lower Convergence Angle */}
        <path
          d="M580 820 L720 740 L860 820"
          stroke="#C59B5F"
          strokeWidth="1.75"
          strokeLinecap="round"
          opacity={variant === 'subtle' ? '0.4' : '0.85'}
        />

        {/* Precision Coordinate Crosshairs at Focal Apex */}
        <g stroke="#E5C185" strokeWidth="1" opacity="0.6">
          <circle cx="720" cy="740" r="3" fill="#E5C185" />
          <circle cx="720" cy="740" r="14" fill="none" strokeDasharray="2 3" opacity="0.4" />
        </g>
      </svg>
    </div>
  );
};
