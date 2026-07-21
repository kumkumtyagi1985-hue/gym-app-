import { useMemo } from 'react'
import { User, Mail, Cake, Ruler, Weight, Target, LogOut, Calendar } from 'lucide-react'
import { logout } from '../utils/auth'

const GOAL_LABEL = {
  loss: 'Weight Loss',
  gain: 'Muscle Gain',
  maintenance: 'Maintenance',
}

export default function ProfileScreen({ user, onLogout }) {
  const bmi = useMemo(() => {
    const h = parseFloat(user.height) / 100
    const w = parseFloat(user.weight)
    if (!h || !w) return null
    return Math.round((w / (h * h)) * 10) / 10
  }, [user.height, user.weight])

  const joinDate = user.joinedAt
    ? new Date(user.joinedAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })
    : '—'

  function handleLogout() {
    logout()
    onLogout()
  }

  const Row = ({ icon: Icon, label, value }) => (
    <div className="flex items-center justify-between py-3 border-b border-base-700 last:border-0">
      <span className="flex items-center gap-2 text-gray-400 text-sm">
        <Icon size={15} /> {label}
      </span>
      <span className="text-white text-sm font-medium">{value || '—'}</span>
    </div>
  )

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex flex-col items-center mb-6">
        <div className="w-20 h-20 rounded-full bg-accent-teal/15 border-2 border-accent-teal flex items-center justify-center mb-3">
          <User size={32} className="text-accent-teal" />
        </div>
        <h2 className="font-display text-xl font-semibold text-white">{user.name}</h2>
        <p className="text-gray-500 text-sm">{user.email}</p>
      </div>

      <div className="bg-base-800 border border-base-700 rounded-2xl p-5 mb-4">
        <p className="text-accent-cyan text-xs uppercase tracking-wide font-semibold mb-1">Profile Details</p>
        <Row icon={Mail} label="Email" value={user.email} />
        <Row icon={Cake} label="Age" value={user.age ? `${user.age} yrs` : ''} />
        <Row icon={Ruler} label="Height" value={user.height ? `${user.height} cm` : ''} />
        <Row icon={Weight} label="Weight" value={user.weight ? `${user.weight} kg` : ''} />
        <Row icon={Target} label="Goal" value={GOAL_LABEL[user.goal] || user.goal} />
        <Row icon={Calendar} label="Member Since" value={joinDate} />
      </div>

      {bmi && (
        <div className="bg-base-800 border border-base-700 rounded-2xl p-5 mb-6 flex items-center justify-between">
          <span className="text-gray-400 text-sm">Current BMI</span>
          <span className="font-display text-2xl font-bold text-accent-teal">{bmi}</span>
        </div>
      )}

      <button
        onClick={handleLogout}
        className="tap-target w-full bg-base-800 border border-status-obese text-status-obese font-medium rounded-xl flex items-center justify-center gap-2"
      >
        <LogOut size={16} /> Logout
      </button>
    </div>
  )
}
