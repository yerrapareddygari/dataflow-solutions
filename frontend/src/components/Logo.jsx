export default function Logo({ size = "md", dark = false, showTagline = false }) {
  const sizes = {
    sm: { box: 36, font: "text-lg", tag: "text-[9px]", gap: "gap-2.5" },
    md: { box: 44, font: "text-xl", tag: "text-[10px]", gap: "gap-3" },
    lg: { box: 56, font: "text-3xl", tag: "text-xs", gap: "gap-3.5" },
  };
  const s = sizes[size];

  return (
    <div className={`inline-flex items-center ${s.gap}`}>
      {/* CS Monogram Icon */}
      <svg
        width={s.box}
        height={s.box}
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="csGrad" x1="0" y1="0" x2="56" y2="56" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#1d4ed8" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
          <linearGradient id="csGradLight" x1="0" y1="0" x2="56" y2="56" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#22d3ee" />
          </linearGradient>
        </defs>

        {/* Background rounded square */}
        <rect width="56" height="56" rx="14" fill="url(#csGrad)" />

        {/* Subtle inner glow */}
        <rect width="56" height="56" rx="14" fill="white" fillOpacity="0.06" />

        {/* Top-left corner accent */}
        <rect x="0" y="0" width="14" height="3" rx="1.5" fill="white" fillOpacity="0.3" />
        <rect x="0" y="0" width="3" height="14" rx="1.5" fill="white" fillOpacity="0.3" />

        {/* Bottom-right corner accent */}
        <rect x="42" y="53" width="14" height="3" rx="1.5" fill="white" fillOpacity="0.3" />
        <rect x="53" y="42" width="3" height="14" rx="1.5" fill="white" fillOpacity="0.3" />

        {/* Letter C */}
        <path
          d="M26 18 C20 18 15 22.5 15 28 C15 33.5 20 38 26 38 C29 38 31.5 36.8 33.2 35"
          stroke="white"
          strokeWidth="3.2"
          strokeLinecap="round"
          fill="none"
        />

        {/* Letter S */}
        <path
          d="M36 20 C33.5 18.5 30.5 18.5 29 20 C27.5 21.5 28 23.5 30 25 C32 26.5 34.5 27.5 34.5 30 C34.5 32.5 32.5 34 30 34 C28 34 26.5 33 25.5 31.5"
          stroke="#93c5fd"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />

        {/* Small dot accent */}
        <circle cx="43" cy="13" r="2.5" fill="#22d3ee" opacity="0.8" />
      </svg>

      {/* Wordmark + tagline */}
      <div className="flex flex-col leading-none">
        <span className={`font-extrabold ${s.font} tracking-tight leading-none ${dark ? "text-white" : "text-gray-900"}`}>
          Core
          <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            Synergy
          </span>
        </span>
        {showTagline && (
          <span className={`${s.tag} tracking-widest uppercase font-medium mt-1 ${dark ? "text-blue-300" : "text-blue-400"}`}>
            Precision in Every Process
          </span>
        )}
        {!showTagline && (
          <span className={`text-[9px] tracking-widest uppercase font-medium mt-0.5 ${dark ? "text-blue-300" : "text-blue-400"}`}>
            Business Solutions
          </span>
        )}
      </div>
    </div>
  );
}
