import React from 'react';

// 1. Sarvin / Shreeram Group Logo
export const SarvinLogo: React.FC = () => (
  <svg viewBox="0 0 400 200" className="w-full h-full max-h-[75px]" xmlns="http://www.w3.org/2000/svg">
    {/* Green circular outer ring */}
    <circle cx="100" cy="100" r="85" fill="none" stroke="#0E7A3E" strokeWidth="6" strokeDasharray="140 10" />
    <circle cx="100" cy="100" r="75" fill="none" stroke="#2BAE66" strokeWidth="2" />
    
    {/* Orange crescent upper shape */}
    <path d="M 35 80 A 65 65 0 0 1 165 80 Q 155 40 100 40 Q 45 40 35 80" fill="url(#orangeGrad)" />
    
    {/* Green house/barn shape in the center */}
    <path d="M 40 120 L 100 65 L 160 120 L 150 120 L 150 145 L 50 145 L 50 120 Z" fill="#7CB342" />
    
    {/* White Cow Silhouette */}
    <path d="M 95 105 C 92 105 88 102 85 102 C 82 102 78 105 75 105 C 72 105 70 108 68 111 C 68 113 70 115 72 115 L 75 115 L 75 130 C 75 132 77 132 78 132 C 79 132 80 131 80 130 L 80 118 L 84 118 L 84 130 C 84 132 86 132 87 132 C 88 132 89 131 89 130 L 89 118 L 92 118 L 92 128 L 95 128 L 95 105 Z" fill="#FFFFFF" />
    
    {/* Wheat ears on left */}
    <path d="M 25 120 Q 25 100 40 85 M 22 110 Q 20 100 30 95 M 28 125 Q 32 115 42 110" stroke="#0E7A3E" strokeWidth="3" fill="none" strokeLinecap="round" />
    
    {/* Tractor shape at the bottom */}
    <rect x="65" y="148" width="45" height="22" rx="4" fill="#0D5C30" />
    <circle cx="75" cy="170" r="12" fill="#1E293B" stroke="#FFFFFF" strokeWidth="2.5" />
    <circle cx="100" cy="170" r="9" fill="#1E293B" stroke="#FFFFFF" strokeWidth="2.5" />
    <path d="M 75 148 L 75 140 L 85 140 L 85 148" stroke="#FFFFFF" strokeWidth="1.5" fill="none" />
    
    {/* Lower green swooshes */}
    <path d="M 35 155 Q 100 135 165 155 Q 100 195 35 155 Z" fill="#1B5E20" />
    <path d="M 50 170 Q 100 155 150 170 Q 100 205 50 170 Z" fill="#81C784" />
    
    {/* Text Section */}
    <text x="195" y="85" fontFamily="'Inter', sans-serif" fontSize="26" fontWeight="800" fill="#0E7A3E" letterSpacing="1">SHREERAM</text>
    <text x="195" y="112" fontFamily="'Inter', sans-serif" fontSize="12" fontWeight="900" fill="#F5B700" letterSpacing="3">SARVIN AGRO</text>
    <text x="195" y="132" fontFamily="'Inter', sans-serif" fontSize="13" fontWeight="600" fill="#475569" letterSpacing="0.5">Group of Companies</text>
    <text x="195" y="148" fontFamily="'Inter', sans-serif" fontSize="7.5" fontWeight="500" fill="#64748B" letterSpacing="0.2">INTEGRATED AGRI SOLUTIONS</text>
    
    <defs>
      <linearGradient id="orangeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFA726" />
        <stop offset="100%" stopColor="#FB8C00" />
      </linearGradient>
    </defs>
  </svg>
);

// 2. Geolife Logo
export const GeolifeLogo: React.FC = () => (
  <svg viewBox="0 0 300 150" className="w-full h-full max-h-[75px]" xmlns="http://www.w3.org/2000/svg">
    {/* Outer elegant border */}
    <ellipse cx="150" cy="75" rx="130" ry="50" fill="#FFFFFF" stroke="#FBBF24" strokeWidth="4.5" />
    <ellipse cx="150" cy="75" rx="124" ry="44" fill="none" stroke="#F59E0B" strokeWidth="1" opacity="0.6" />
    
    {/* Brand Text */}
    <text x="145" y="90" textAnchor="middle" fontFamily="'Inter', 'Arial Black', sans-serif" fontSize="42" fontWeight="900" fill="#DC2626" fontStyle="italic" letterSpacing="-1">
      Geolife
    </text>
    <text x="228" y="58" fontFamily="sans-serif" fontSize="9" fontWeight="extrabold" fill="#475569">®</text>
    
    {/* Sprout above the 'i' */}
    <g transform="translate(178, 36)">
      <path d="M 12 15 C 12 -2 22 -5 22 -5 C 22 -5 23 10 12 15 Z" fill="#10B981" />
      <path d="M 8 18 C -2 12 -4 2 -4 2 C -4 2 8 4 8 18 Z" fill="#059669" />
      <path d="M 16 18 C 26 12 28 2 28 2 C 28 2 16 4 16 18 Z" fill="#34D399" />
    </g>
  </svg>
);

// 3. Hifield Organics Logo
export const HifieldLogo: React.FC = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full max-h-[75px]" xmlns="http://www.w3.org/2000/svg">
    {/* Organic rich soil/ground background */}
    <path d="M 100 15 C 150 10 185 45 180 95 C 185 145 145 185 95 180 C 45 185 10 145 15 95 C 10 45 50 15 100 15" fill="#5C4033" />
    <circle cx="100" cy="100" r="75" fill="#4A3B32" opacity="0.6" />
    <path d="M 90 25 Q 110 20 120 40 M 150 60 Q 170 80 160 110 M 50 140 Q 40 100 60 70" stroke="#3E2723" strokeWidth="4" fill="none" strokeLinecap="round" opacity="0.4" />
    
    {/* Lime green sprouted 'H' shape */}
    <g transform="translate(68, 55)">
      <path d="M 10 32 L 10 80 L 25 80 L 25 32 Z" fill="#84CC16" />
      <path d="M 40 32 L 40 80 L 55 80 L 55 32 Z" fill="#84CC16" />
      <path d="M 25 48 L 40 48 L 40 60 L 25 60 Z" fill="#84CC16" />
      
      {/* 3 leaf sprout on top */}
      <g transform="translate(17, 24)">
        <path d="M 0 8 C 0 -4 8 -8 8 -8 C 8 -8 10 4 0 8 Z" fill="#65A30D" />
        <path d="M -2 10 C -10 6 -12 -2 -12 -2 C -12 -2 -2 -1 -2 10 Z" fill="#4D7C0F" />
        <path d="M 2 10 C 10 6 12 -2 12 -2 C 12 -2 2 -1 2 10 Z" fill="#84CC16" />
      </g>
    </g>
    <text x="100" y="165" textAnchor="middle" fontFamily="'Inter', sans-serif" fontSize="12" fontWeight="900" fill="#FFFFFF" letterSpacing="1.5">HIFIELD</text>
  </svg>
);

// 4. Titan Agritech Logo
export const TitanLogo: React.FC = () => (
  <svg viewBox="0 0 320 180" className="w-full h-full max-h-[75px]" xmlns="http://www.w3.org/2000/svg">
    {/* Orange/Green block */}
    <rect x="20" y="20" width="135" height="110" fill="#F97316" rx="6" />
    <rect x="155" y="20" width="145" height="110" fill="#15803D" rx="6" />
    
    {/* White bold 'T' */}
    <path d="M 45 40 L 115 40 L 115 55 L 90 55 L 90 110 L 70 110 L 70 55 L 45 55 Z" fill="#FFFFFF" />
    
    {/* White bold 'A' */}
    <path d="M 215 40 L 235 40 L 265 110 L 245 110 L 238 92 L 212 92 L 205 110 L 185 110 Z M 217 80 L 233 80 L 225 58 Z" fill="#FFFFFF" />
    
    {/* Leaves ornament */}
    <g transform="translate(130, 65)">
      <path d="M 0 0 C 15 -10 25 5 25 5 C 25 5 10 15 0 0 Z" fill="#FFFFFF" />
      <path d="M 5 12 C 18 5 24 20 24 20 C 24 20 8 22 5 12 Z" fill="#F3F4F6" opacity="0.9" />
    </g>
    
    {/* Bottom Label */}
    <text x="160" y="158" textAnchor="middle" fontFamily="'Inter', sans-serif" fontSize="17" fontWeight="900" fill="#1E293B" letterSpacing="1">
      TITAN AGRITECH LTD.
    </text>
  </svg>
);

// 5. Aries Agro Logo
export const AriesLogo: React.FC = () => (
  <svg viewBox="0 0 300 150" className="w-full h-full max-h-[75px]" xmlns="http://www.w3.org/2000/svg">
    {/* Double Leaf contour */}
    <g transform="translate(125, 12)">
      <path d="M 0 45 C 0 20 20 0 45 0 C 45 0 50 25 35 40 C 25 50 0 55 0 45" fill="#84CC16" />
      <path d="M 12 35 C 15 22 25 15 32 12 C 28 25 18 35 12 35" fill="#FFFFFF" />
      <path d="M 48 -10 C 48 -18 55 -24 64 -24 C 64 -24 66 -16 60 -10 C 56 -6 48 -5 48 -10" fill="#A3E635" />
    </g>
    
    {/* Brand Text */}
    <text x="150" y="105" textAnchor="middle" fontFamily="'Inter', sans-serif" fontSize="23" fontWeight="800" fill="#3F6212">
      aries agro limited
    </text>
    <text x="150" y="125" textAnchor="middle" fontFamily="'Inter', sans-serif" fontSize="10.5" fontWeight="900" fill="#84CC16" letterSpacing="4.5">
      NURTURING GROWTH
    </text>
  </svg>
);

// 6. Shurbans International Logo
export const ShurbansLogo: React.FC = () => (
  <svg viewBox="0 0 300 200" className="w-full h-full max-h-[75px]" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(150, 95)">
      {/* Radiant Sun Base */}
      <path d="M -60 0 A 60 60 0 0 1 60 0 Z" fill="#FBBF24" />
      <path d="M -45 0 A 45 45 0 0 1 45 0 Z" fill="#F59E0B" />
      <path d="M -25 0 A 25 25 0 0 1 25 0 Z" fill="#EF4444" />
      
      {/* Central Crop Sprout */}
      <path d="M 0 0 L 0 -80" stroke="#047857" strokeWidth="6" strokeLinecap="round" />
      <path d="M 0 -80 C -10 -90 0 -105 0 -105 C 0 -105 10 -90 0 -80 Z" fill="#047857" />
      
      <path d="M -3 -15 C -25 -25 -35 -45 -35 -45 C -35 -45 -12 -42 -3 -30 Z" fill="#059669" />
      <path d="M -3 -40 C -22 -50 -28 -70 -28 -70 C -28 -70 -10 -65 -3 -52 Z" fill="#10B981" />
      
      <path d="M 3 -15 C 25 -25 35 -45 35 -45 C 35 -45 12 -42 3 -30 Z" fill="#059669" />
      <path d="M 3 -40 C 22 -50 28 -70 28 -70 C 28 -70 10 -65 3 -52 Z" fill="#10B981" />
    </g>
    
    {/* Label */}
    <text x="150" y="162" textAnchor="middle" fontFamily="'Inter', sans-serif" fontSize="16" fontWeight="900" fill="#064E3B" letterSpacing="0.5">
      SHURBANS INTERNATIONAL
    </text>
    <text x="150" y="178" textAnchor="middle" fontFamily="'Inter', sans-serif" fontSize="9" fontWeight="800" fill="#10B981" letterSpacing="3.5">
      GLOBAL AGRI TRADING
    </text>
  </svg>
);

// 7. Kay Bee Bio-Organics Logo
export const KayBeeLogo: React.FC = () => (
  <svg viewBox="0 0 320 150" className="w-full h-full max-h-[75px]" xmlns="http://www.w3.org/2000/svg">
    {/* Stylized Red KB initials and green leaf */}
    <g transform="translate(10, 25)">
      <path d="M 15 15 L 30 15 L 30 85 L 15 85 Z" fill="#991B1B" />
      <path d="M 30 45 L 55 15 L 75 15 L 48 50 L 75 85 L 55 85 Z" fill="#991B1B" />
      
      <path d="M 80 15 C 95 15 105 24 105 35 C 105 44 98 48 90 50 C 100 52 108 58 108 70 C 108 81 95 85 80 85 L 75 85 L 75 15 Z M 88 30 L 85 30 L 85 43 L 88 43 C 92 43 94 40 94 36 C 94 32 92 30 88 30 Z M 88 56 L 85 56 L 85 71 L 88 71 C 93 71 95 68 95 63 C 95 59 93 56 88 56 Z" fill="#991B1B" />
      
      {/* Green Leaf Inside K */}
      <path d="M 30 50 Q 42 40 45 30 Q 33 42 30 50" fill="#16A34A" />
      <path d="M 30 50 Q 45 55 52 50 Q 38 48 30 50" fill="#15803D" />
    </g>
    
    {/* Red Brand name */}
    <text x="135" y="70" fontFamily="'Inter', sans-serif" fontSize="44" fontWeight="900" fill="#991B1B" letterSpacing="-1">
      kay bee
    </text>
    
    {/* Green Hindi subtitle */}
    <text x="138" y="98" fontFamily="'Inter', sans-serif" fontSize="12" fontWeight="800" fill="#15803D" letterSpacing="0.5">
      के. बी. बायो ऑर्गेनिक्स प्रा. लि.
    </text>
  </svg>
);

// 8. Exylon Logo
export const ExylonLogo: React.FC = () => (
  <svg viewBox="0 0 300 150" className="w-full h-full max-h-[75px]" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(20, 35)">
      {/* Sprouted circle surrounding 'E' */}
      <path d="M 40 40 A 30 30 0 1 1 25 15" fill="none" stroke="#16A34A" strokeWidth="6.5" strokeLinecap="round" />
      <path d="M 22 15 C 15 5 25 0 25 0 C 25 0 30 8 22 15 Z" fill="#15803D" />
      <path d="M 28 12 C 35 5 42 12 42 12 C 42 12 36 18 28 12 Z" fill="#4ADE80" />
      
      <text x="56" y="52" fontFamily="'Inter', sans-serif" fontSize="44" fontWeight="900" fill="#15803D" letterSpacing="0.5">
        EXYLON
      </text>
    </g>
    <text x="150" y="115" textAnchor="middle" fontFamily="'Inter', sans-serif" fontSize="10" fontWeight="900" fill="#16A34A" letterSpacing="4">
      ADVANCED CROP CARE
    </text>
  </svg>
);

// 9. Katra Fertilizers Logo
export const KatraLogo: React.FC = () => (
  <svg viewBox="0 0 300 150" className="w-full h-full max-h-[75px]" xmlns="http://www.w3.org/2000/svg">
    {/* Distinct three-leaf crown */}
    <g transform="translate(150, 48)">
      <path d="M 0 0 C -8 -20 0 -45 0 -45 C 0 -45 8 -20 0 0 Z" fill="#15803D" />
      <path d="M -4 -4 C -18 -20 -18 -40 -18 -40 C -18 -40 -5 -25 -4 -4 Z" fill="#16A34A" />
      <path d="M 4 -4 C 18 -20 18 -40 18 -40 C 18 -40 5 -25 4 -4 Z" fill="#16A34A" />
    </g>
    
    {/* Katra Label */}
    <text x="150" y="94" textAnchor="middle" fontFamily="'Inter', sans-serif" fontSize="33" fontWeight="900" fill="#15803D" letterSpacing="4.5">
      KATRA
    </text>
    <text x="150" y="116" textAnchor="middle" fontFamily="'Inter', sans-serif" fontSize="12" fontWeight="700" fill="#1E293B" letterSpacing="6">
      FERTILIZERS
    </text>
  </svg>
);

// 10. Smart BrandLogoImage Loader & Fallback Component
interface BrandLogoImageProps {
  brandKey: string;
  fallback: React.ReactNode;
  alt: string;
}

export const BrandLogoImage: React.FC<BrandLogoImageProps> = ({ brandKey, fallback, alt }) => {
  const [hasError, setHasError] = React.useState(false);
  const [attemptIndex, setAttemptIndex] = React.useState(0);

  const paths = [
    // 1. Root-level paths (for direct uploads in public folder)
    `/${brandKey}.png.webp`,
    `/${brandKey}.png.png`,
    `/${brandKey}.png.jpg`,
    `/${brandKey}.png.jpeg`,
    `/${brandKey}.png`,
    `/${brandKey}.jpg`,
    `/${brandKey}.jpeg`,
    `/${brandKey}.webp`,

    // 2. Folder-specific paths (logos/ folder)
    `/logos/${brandKey}.png.webp`,
    `/logos/${brandKey}.png.png`,
    `/logos/${brandKey}.png.jpg`,
    `/logos/${brandKey}.png.jpeg`,
    `/logos/${brandKey}.png`,
    `/logos/${brandKey}.jpg`,
    `/logos/${brandKey}.jpeg`,
    `/logos/${brandKey}.webp`,

    // 3. Folder-specific paths (brands/ folder)
    `/brands/${brandKey}.png`,
    `/brands/${brandKey}.jpg`,
    `/brands/${brandKey}.jpeg`,
    `/brands/${brandKey}.webp`
  ];

  const handleError = () => {
    if (attemptIndex < paths.length - 1) {
      setAttemptIndex(attemptIndex + 1);
    } else {
      setHasError(true);
    }
  };

  if (hasError) {
    return <div className="w-full h-full flex items-center justify-center">{fallback}</div>;
  }

  return (
    <div className="w-full h-full flex items-center justify-center max-h-[85px] py-1">
      <img
        src={paths[attemptIndex]}
        alt={alt}
        onError={handleError}
        className="max-h-[80px] max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
        referrerPolicy="no-referrer"
      />
    </div>
  );
};

