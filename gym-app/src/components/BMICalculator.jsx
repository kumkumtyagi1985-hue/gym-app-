import { useMemo, useState } from 'react'
import { Ruler, Weight, Activity } from 'lucide-react'

// Logical Classification Matrix — Module 3 of blueprint
function classify(bmi) {
  if (bmi < 18.5) {
    return {
      category: 'Underweight',
      color: '#5EEAD4',
      recommendation:
        "Trigger 'Muscle Gain Diet Framework' aur 'Beginner Workout Template'. High calorie focus modules auto-suggest honge.",
    }
  }
  if (bmi < 25) {
    return {
      category: 'Normal Weight',
      color: '#22C55E',
      recommendation:
        "Maintenance programs unlock. 'Intermediate Workout Split' track karein performance optimization ke liye.",
    }
  }
  if (bmi < 30) {
    return {
      category: 'Overweight',
      color: '#FBBF24',
      recommendation:
        "Activate 'Weight Loss Diet Blueprint' aur dynamic cardio integration with step tracking updates.",
    }
  }
  return {
    category: 'Obese',
    color: '#FB7185',
    recommendation:
      'High-impact safety guidelines trigger. Low-impact movement tracking automatic initialize hoga.',
  }
}

export default function BMICalculator() {
  const [height, setHeight] = useState('') // cm
  const [weight, setWeight] = useState('') // kg

  const result = useMemo(() => {
    const h = parseFloat(height) / 100
    const w = parseFloat(weight)
    if (!h || !w || h <= 0 || w <= 0) return null
    const bmi = w / (h * h)
    return { bmi: Math.round(bmi * 10) / 10, ...classify(bmi) }
  }, [height, weight])

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-6">
        <h2 className="font-display text-2xl font-semibold text-white flex items-center gap-2">
          <Activity className="text-accent-teal" size={24} />
          BMI Calculator Engine
        </h2>
        <p className="text-base-600 text-sm mt-1 text-gray-400">
          Height aur weight daalein — instant category aur recommendation milega.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <label className="bg-base-800 border border-base-700 rounded-2xl p-4 block">
          <span className="text-xs uppercase tracking-wide text-gray-400 flex items-center gap-1.5 mb-2">
            <Ruler size={14} /> Height (cm)
          </span>
          <input
            type="number"
            inputMode="decimal"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="e.g. 175"
            className="tap-target w-full bg-transparent text-2xl font-display text-white outline-none placeholder:text-gray-600"
          />
        </label>

        <label className="bg-base-800 border border-base-700 rounded-2xl p-4 block">
          <span className="text-xs uppercase tracking-wide text-gray-400 flex items-center gap-1.5 mb-2">
            <Weight size={14} /> Weight (kg)
          </span>
          <input
            type="number"
            inputMode="decimal"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="e.g. 70"
            className="tap-target w-full bg-transparent text-2xl font-display text-white outline-none placeholder:text-gray-600"
          />
        </label>
      </div>

      {result ? (
        <div
          className="rounded-2xl p-6 border shadow-glow transition-all"
          style={{ borderColor: result.color, backgroundColor: `${result.color}0D` }}
        >
          <div className="flex items-baseline justify-between flex-wrap gap-2">
            <span className="font-display text-5xl font-bold text-white">{result.bmi}</span>
            <span
              className="font-display text-lg font-semibold px-3 py-1 rounded-full"
              style={{ color: result.color, backgroundColor: `${result.color}22` }}
            >
              {result.category}
            </span>
          </div>
          <p className="text-gray-300 text-sm mt-4 leading-relaxed">
            <span className="text-gray-500 uppercase text-xs tracking-wide block mb-1">
              System Recommendation
            </span>
            {result.recommendation}
          </p>
        </div>
      ) : (
        <div className="rounded-2xl p-6 border border-dashed border-base-700 text-center text-gray-500 text-sm">
          Result yahan dikhega jab dono values fill ho jayengi.
        </div>
      )}
    </div>
  )
}
