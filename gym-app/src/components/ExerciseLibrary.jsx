import { useMemo, useState } from 'react'
import { BookOpen, Search } from 'lucide-react'
import { workoutPlans } from '../data/workoutData'
import MuscleDiagram from './MuscleDiagram'

const CATEGORY_ORDER = ['chest', 'back', 'shoulders', 'biceps', 'triceps', 'quads', 'hamstrings', 'abs']
const CATEGORY_LABEL = {
  chest: 'Chest',
  back: 'Back',
  shoulders: 'Shoulders',
  biceps: 'Biceps',
  triceps: 'Triceps',
  quads: 'Quads',
  hamstrings: 'Hamstrings',
  abs: 'Core / Abs',
}

// Flatten every exercise across all plans/days into one de-duplicated library.
function buildLibrary() {
  const map = new Map()
  workoutPlans.forEach((plan) => {
    plan.days.forEach((day) => {
      day.exercises.forEach((ex) => {
        if (!map.has(ex.name)) map.set(ex.name, ex)
      })
    })
  })
  return Array.from(map.values())
}

export default function ExerciseLibrary() {
  const [query, setQuery] = useState('')
  const library = useMemo(buildLibrary, [])

  const filtered = library.filter((ex) => ex.name.toLowerCase().includes(query.toLowerCase()))

  const grouped = CATEGORY_ORDER.map((cat) => ({
    category: cat,
    items: filtered.filter((ex) => ex.muscle === cat),
  })).filter((g) => g.items.length > 0)

  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="font-display text-2xl font-semibold text-white flex items-center gap-2 mb-1">
        <BookOpen className="text-accent-teal" size={24} />
        Exercise Library
      </h2>
      <p className="text-gray-400 text-sm mb-5">
        Muscle group ke hisaab se saari exercises, target diagram ke saath.
      </p>

      <div className="relative mb-6">
        <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Exercise search karein..."
          className="tap-target w-full bg-base-800 border border-base-700 rounded-full pl-10 pr-4 text-sm text-white outline-none focus:border-accent-teal placeholder:text-gray-600"
        />
      </div>

      {grouped.length === 0 && (
        <p className="text-center text-gray-500 text-sm py-10">Koi exercise nahi mili.</p>
      )}

      <div className="space-y-8">
        {grouped.map((g) => (
          <div key={g.category}>
            <p className="text-accent-cyan text-xs uppercase tracking-wide font-semibold mb-3">
              {CATEGORY_LABEL[g.category]}
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {g.items.map((ex) => (
                <div
                  key={ex.name}
                  className="bg-base-800 border border-base-700 rounded-2xl overflow-hidden hover:border-accent-teal transition-colors"
                >
                  <MuscleDiagram muscle={ex.muscle} view={ex.view} accentColor="#22C55E" height={170} />
                  <div className="px-3 py-2 border-t border-base-700">
                    <p className="text-white text-xs font-medium leading-tight">{ex.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
