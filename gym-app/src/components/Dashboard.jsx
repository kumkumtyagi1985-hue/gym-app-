import { Activity, Dumbbell, Apple, BookOpen, User } from 'lucide-react'
import Logo from './Logo'

const TABS = [
  { id: 'bmi', label: 'BMI', icon: Activity },
  { id: 'workouts', label: 'Workouts', icon: Dumbbell },
  { id: 'library', label: 'Library', icon: BookOpen },
  { id: 'nutrition', label: 'Nutrition', icon: Apple },
  { id: 'profile', label: 'Profile', icon: User },
]

export default function Dashboard({ active, onChange, userName }) {
  return (
    <>
      {/* Header */}
      <header className="border-b border-base-700 bg-base-900/80 backdrop-blur sticky top-0 z-10">
        <div className="max-w-3xl mx-auto px-4 py-4 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Logo size={30} />
            <span className="font-display font-semibold text-white text-lg">Alpha Lift</span>
          </div>
          {userName && (
            <button
              onClick={() => onChange('profile')}
              className="text-xs text-gray-400 hover:text-accent-teal"
            >
              Hi, {userName.split(' ')[0]}
            </button>
          )}
        </div>
      </header>

      {/* Desktop tabs */}
      <nav className="hidden sm:flex max-w-3xl mx-auto gap-2 px-4 mt-4 flex-wrap">
        {TABS.map((t) => (
          <button
            key={t.id}
            onClick={() => onChange(t.id)}
            className={`tap-target flex items-center gap-2 px-4 rounded-full text-sm font-medium transition-colors ${
              active === t.id
                ? 'bg-accent-teal text-base-900'
                : 'bg-base-800 text-gray-300 border border-base-700'
            }`}
          >
            <t.icon size={16} /> {t.label}
          </button>
        ))}
      </nav>

      {/* Mobile bottom nav - big tap targets, sweaty-hands friendly */}
      <nav className="sm:hidden fixed bottom-0 inset-x-0 bg-base-800 border-t border-base-700 flex z-10">
        {TABS.map((t) => (
          <button
            key={t.id}
            onClick={() => onChange(t.id)}
            className={`flex-1 flex flex-col items-center gap-1 py-2.5 tap-target ${
              active === t.id ? 'text-accent-teal' : 'text-gray-500'
            }`}
          >
            <t.icon size={18} />
            <span className="text-[10px] font-medium">{t.label}</span>
          </button>
        ))}
      </nav>
    </>
  )
}
