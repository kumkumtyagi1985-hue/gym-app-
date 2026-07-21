// Static, realistic human-body silhouette (front/back) drawn with smooth anatomical
// curves (not blocky rectangles, not animated). The targeted muscle group is filled
// with the accent color; everything else stays a neutral body tone.
// Entirely original vector shapes — no external photos/assets, so no copyright issues.

const MUSCLE_LABEL = {
  chest: 'Chest',
  shoulders: 'Shoulders',
  biceps: 'Biceps',
  abs: 'Core / Abs',
  quads: 'Quads',
  back: 'Back / Lats',
  triceps: 'Triceps',
  glutes: 'Glutes',
  hamstrings: 'Hamstrings',
}

// Base body silhouette — same realistic outline for front & back.
function BodyOutline() {
  return (
    <path
      d="M100,26
         c12,0 20,10 20,22 c0,8 -3,14 -7,18
         c14,4 24,14 27,30 l6,46
         c1,8 -5,14 -13,13 l-8,-1
         l3,64 c1,10 -6,16 -15,16 l-4,0 -2,-58 -2,58 -4,0
         c-9,0 -16,-6 -15,-16 l3,-64 -8,1
         c-8,1 -14,-5 -13,-13 l6,-46
         c3,-16 13,-26 27,-30
         c-4,-4 -7,-10 -7,-18 c0,-12 8,-22 20,-22 z"
      fill="#2B2F36"
    />
  )
}

// Each highlight path approximates the real shape/location of that muscle group
// on the silhouette above.
const HIGHLIGHTS = {
  front: {
    shoulders: 'M62,58 c-6,-10 2,-20 12,-18 l2,14 -8,10 z M138,58 c6,-10 -2,-20 -12,-18 l-2,14 8,10 z',
    chest: 'M78,60 c8,-6 14,-6 22,0 c8,-6 14,-6 22,0 l-2,20 c-8,6 -32,6 -40,0 z',
    biceps: 'M60,64 c-6,4 -9,14 -8,24 l10,2 c2,-10 2,-18 0,-26 z M140,64 c6,4 9,14 8,24 l-10,2 c-2,-10 -2,-18 0,-26 z',
    abs: 'M82,84 c6,-3 12,-3 18,0 c6,-3 12,-3 18,0 l-2,34 c-6,4 -26,4 -32,0 z',
    quads: 'M85,150 c-3,18 -3,34 -1,50 l14,0 c1,-16 1,-32 -1,-50 z M115,150 c3,18 3,34 1,50 l-14,0 c-1,-16 -1,-32 1,-50 z',
  },
  back: {
    shoulders: 'M62,58 c-6,-10 2,-20 12,-18 l2,14 -8,10 z M138,58 c6,-10 -2,-20 -12,-18 l-2,14 8,10 z',
    back: 'M76,60 c14,-6 34,-6 48,0 l4,34 c-14,8 -42,8 -56,0 z',
    triceps: 'M60,64 c-6,4 -9,14 -8,24 l10,2 c2,-10 2,-18 0,-26 z M140,64 c6,4 9,14 8,24 l-10,2 c-2,-10 -2,-18 0,-26 z',
    glutes: 'M80,146 c8,-6 32,-6 40,0 l-2,20 c-8,6 -28,6 -36,0 z',
    hamstrings: 'M85,150 c-3,18 -3,34 -1,50 l14,0 c1,-16 1,-32 -1,-50 z M115,150 c3,18 3,34 1,50 l-14,0 c-1,-16 -1,-32 1,-50 z',
  },
}

export default function MuscleDiagram({ muscle = 'chest', view = 'front', accentColor = '#22C55E', height = 300 }) {
  const highlightPath = HIGHLIGHTS[view]?.[muscle]

  return (
    <div
      className="rounded-xl border border-base-700 bg-base-900 flex flex-col items-center justify-center overflow-hidden py-3"
      style={{ height }}
    >
      <svg viewBox="0 0 200 240" width="150" height="200">
        {/* Head */}
        <circle cx="100" cy="18" r="14" fill="#2B2F36" />
        <BodyOutline />
        {highlightPath && <path d={highlightPath} fill={accentColor} />}
      </svg>
      <p className="text-xs text-gray-400 mt-1">
        Target: <span className="font-medium" style={{ color: accentColor }}>{MUSCLE_LABEL[muscle] || muscle}</span>
        <span className="text-gray-600"> ({view === 'front' ? 'Front' : 'Back'} view)</span>
      </p>
    </div>
  )
}
