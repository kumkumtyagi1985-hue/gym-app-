import { useState } from 'react'
import { Dumbbell, Clock, Moon, Box } from 'lucide-react'
import { workoutPlans, SET_TAGS } from '../data/workoutData'
import MuscleDiagram from './MuscleDiagram'

export default function WorkoutPlans() {
  const [activePlan, setActivePlan] = useState(workoutPlans[0].id)
  const [openExercise, setOpenExercise] = useState(null) // unique key of expanded exercise
  const plan = workoutPlans.find((p) => p.id === activePlan)

  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="font-display text-2xl font-semibold text-white flex items-center gap-2 mb-1">
        <Dumbbell className="text-accent-teal" size={24} />
        Tiered Workout Plans
      </h2>
      <p className="text-gray-400 text-sm mb-6">
        Progressive overload ke liye level ke hisaab se schedule. Exercise par tap karke muscle diagram dekhein.
      </p>

      {/* Tier tabs */}
      <div className="flex gap-2 mb-6 overflow-x-auto pb-1">
        {workoutPlans.map((p) => (
          <button
            key={p.id}
            onClick={() => {
              setActivePlan(p.id)
              setOpenExercise(null)
            }}
            className={`tap-target px-4 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
              activePlan === p.id
                ? 'bg-accent-teal text-base-900'
                : 'bg-base-800 text-gray-300 border border-base-700'
            }`}
          >
            {p.title}
          </button>
        ))}
      </div>

      <div className="bg-base-800 border border-base-700 rounded-2xl p-5 mb-6">
        <p className="text-white font-display font-semibold">{plan.subtitle}</p>
        <p className="text-gray-400 text-sm mt-1">{plan.target}</p>
      </div>

      <div className="space-y-4">
        {plan.days.map((day) => (
          <div key={day.day} className="bg-base-800 border border-base-700 rounded-2xl overflow-hidden">
            <div className="px-5 py-3 border-b border-base-700 flex items-center justify-between">
              <div>
                <span className="text-accent-cyan text-xs uppercase tracking-wide">{day.day}</span>
                <p className="text-white font-medium">{day.name}</p>
              </div>
              {day.exercises.length === 0 && <Moon className="text-gray-500" size={18} />}
            </div>

            {day.exercises.length > 0 && (
              <ul className="divide-y divide-base-700">
                {day.exercises.map((ex) => {
                  const key = `${day.day}-${ex.name}`
                  const isOpen = openExercise === key
                  return (
                    <li key={key}>
                      <button
                        onClick={() => setOpenExercise(isOpen ? null : key)}
                        className="w-full text-left px-5 py-3 flex items-center justify-between gap-3 tap-target"
                      >
                        <div className="flex items-center gap-2 min-w-0">
                          {ex.tag && (
                            <span
                              className="text-[10px] font-bold px-1.5 py-0.5 rounded shrink-0"
                              style={{
                                color: SET_TAGS[ex.tag].color,
                                backgroundColor: `${SET_TAGS[ex.tag].color}22`,
                              }}
                              title={SET_TAGS[ex.tag].label}
                            >
                              {ex.tag}
                            </span>
                          )}
                          <Box size={14} className={isOpen ? 'text-accent-teal' : 'text-gray-500'} />
                          <span className="text-gray-200 text-sm truncate">{ex.name}</span>
                        </div>
                        <div className="text-right text-xs text-gray-400 shrink-0">
                          <div>{ex.sets} × {ex.reps}</div>
                          <div className="flex items-center gap-1 justify-end mt-0.5">
                            <Clock size={11} /> {ex.rest}s
                          </div>
                        </div>
                      </button>

                      {isOpen && (
                        <div className="px-5 pb-5 -mt-1 bg-base-900/40 flex justify-center">
                          <MuscleDiagram muscle={ex.muscle} view={ex.view} accentColor="#22C55E" height={300} />
                        </div>
                      )}
                    </li>
                  )
                })}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
