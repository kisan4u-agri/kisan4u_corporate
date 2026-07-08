import { motion } from 'motion/react';

interface LogoProps {
  className?: string;
  lightText?: boolean;
}

export default function Logo({ className = "h-9", lightText = false }: LogoProps) {
  // Rich colors matches the user's provided logo
  // kisan: #048283 (rich teal)
  // 4u: #167a93 (blue-teal)
  // leaves: #7abb43 (vibrant green) and #b5d535 (light green)
  
  const textColor1 = lightText ? "#ffffff" : "#0e8585";
  const textColor2 = lightText ? "#ffffff" : "#1a7c93";
  const leafColorLeft = "#6eba45";
  const leafColorRight = "#a0d136";

  return (
    <div id="kisan4u-logo" className={`flex items-center select-none ${className}`}>
      <svg
        viewBox="0 0 170 50"
        className="h-full w-auto"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="textGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={textColor1} />
            <stop offset="60%" stopColor={textColor1} />
            <stop offset="100%" stopColor={textColor2} />
          </linearGradient>
        </defs>

        <g>
          {/* Letter k */}
          <text
            x="4"
            y="37"
            fill="url(#textGrad)"
            style={{
              fontFamily: '"Outfit", "Inter", system-ui, sans-serif',
              fontWeight: 900,
              fontSize: '35px',
              letterSpacing: '-2px',
            }}
          >
            k
          </text>

          {/* Letter i Stem */}
          <rect
            x="24"
            y="17"
            width="6.5"
            height="20"
            rx="1.2"
            fill={textColor1}
          />

          {/* Two Plant Leaves as the i dot */}
          {/* Left Leaf (Drawn pointing up-left) */}
          <path
            d="M 23.5 14 C 23.5 14, 13.5 10.5, 17.5 1 C 24.5 1, 26.5 7, 25 11 C 24.5 12, 24 13, 23.5 14 Z"
            fill={leafColorLeft}
          />
          {/* Right Leaf (Drawn pointing up-right) */}
          <path
            d="M 26.5 13.5 C 26.5 13.5, 33.5 10.5, 32.5 3 C 27.5 3.5, 26 8, 26.5 11 C 26.5 12, 26.5 12.8, 26.5 13.5 Z"
            fill={leafColorRight}
          />

          {/* Letters san4u */}
          <text
            x="32.5"
            y="37"
            fill="url(#textGrad)"
            style={{
              fontFamily: '"Outfit", "Inter", system-ui, sans-serif',
              fontWeight: 900,
              fontSize: '35px',
              letterSpacing: '-2px',
            }}
          >
            san4u
          </text>
        </g>
      </svg>
    </div>
  );
}
