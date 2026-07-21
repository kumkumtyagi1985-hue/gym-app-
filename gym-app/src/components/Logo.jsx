// Alpha Lift mark: an infinity loop capped with barbell plates — endless reps, endless progress.
export default function Logo({ size = 40, showWordmark = false, className = '' }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="alphaLiftGradient" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#22C55E" />
            <stop offset="100%" stopColor="#4ADE80" />
          </linearGradient>
        </defs>

        {/* Infinity loop */}
        <path
          d="M20 50 C20 38 30 32 38 42 C46 52 54 52 62 42 C70 32 80 38 80 50 C80 62 70 68 62 58 C54 48 46 48 38 58 C30 68 20 62 20 50 Z"
          stroke="url(#alphaLiftGradient)"
          strokeWidth="6"
          strokeLinejoin="round"
        />

        {/* Barbell plates capping each end */}
        <circle cx="16" cy="50" r="7" fill="url(#alphaLiftGradient)" />
        <circle cx="84" cy="50" r="7" fill="url(#alphaLiftGradient)" />
      </svg>
      {showWordmark && (
        <span className="font-display font-bold text-white text-xl tracking-tight">Alpha Lift</span>
      )}
    </div>
  )
}
