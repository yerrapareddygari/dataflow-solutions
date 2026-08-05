export default function Logo({ size = "md", dark = false }) {
  const sizes = {
    sm: { icon: 28, font: "text-base", gap: "gap-2" },
    md: { icon: 36, font: "text-xl", gap: "gap-2.5" },
    lg: { icon: 48, font: "text-3xl", gap: "gap-3" },
  };
  const s = sizes[size];

  return (
    <div className={`inline-flex items-center ${s.gap}`}>
      {/* Icon mark */}
      <svg
        width={s.icon}
        height={s.icon}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer ring */}
        <circle cx="24" cy="24" r="22" stroke="url(#grad1)" strokeWidth="2.5" fill="white" fillOpacity="0.05" />

        {/* Inner rotating hexagon core */}
        <path
          d="M24 8 L36 15.5 L36 30.5 L24 38 L12 30.5 L12 15.5 Z"
          fill="url(#grad2)"
          opacity="0.15"
        />

        {/* Three synergy arcs */}
        <path
          d="M24 14 C30 14 35 18.5 35 24"
          stroke="url(#grad1)"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M35 24 C35 29.5 30 34 24 34"
          stroke="#06b6d4"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
          opacity="0.7"
        />
        <path
          d="M24 34 C18 34 13 29.5 13 24 C13 18.5 18 14 24 14"
          stroke="#93c5fd"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
          opacity="0.5"
        />

        {/* Center dot */}
        <circle cx="24" cy="24" r="4" fill="url(#grad1)" />

        {/* Connector dots */}
        <circle cx="24" cy="14" r="2.5" fill="#2563eb" />
        <circle cx="35" cy="24" r="2.5" fill="#06b6d4" />
        <circle cx="24" cy="34" r="2.5" fill="#93c5fd" />

        <defs>
          <linearGradient id="grad1" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#2563eb" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
          <linearGradient id="grad2" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#2563eb" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
        </defs>
      </svg>

      {/* Wordmark */}
      <span className={`font-extrabold ${s.font} tracking-tight ${dark ? "text-white" : "text-gray-900"}`}>
        Core
        <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
          Synergy
        </span>
      </span>
    </div>
  );
}
