import { useEffect, useState } from 'react'
import Dashboard from './components/Dashboard'
import BMICalculator from './components/BMICalculator'
import WorkoutPlans from './components/WorkoutPlans'
import NutritionPlatform from './components/NutritionPlatform'
import ExerciseLibrary from './components/ExerciseLibrary'
import ProfileScreen from './components/ProfileScreen'
import AuthScreen from './components/AuthScreen'
import LoadingScreen from './components/LoadingScreen'
import { getCurrentUser } from './utils/auth'

export default function App() {
  const [active, setActive] = useState('bmi')
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)
  const [checkedSession, setCheckedSession] = useState(false)

  useEffect(() => {
    setUser(getCurrentUser())
    setCheckedSession(true)
  }, [])

  if (loading) {
    return <LoadingScreen onFinish={() => setLoading(false)} />
  }

  // Wait for the session check before deciding whether to show the login gate,
  // so a logged-in user doesn't flash the login screen on refresh.
  if (!checkedSession) return null

  if (!user) {
    return <AuthScreen onAuthSuccess={(u) => setUser(u)} />
  }

  return (
    <div className="min-h-screen bg-base-900 pb-20 sm:pb-10 animate-fade-in">
      <Dashboard active={active} onChange={setActive} userName={user.name} />

      <main className="px-4 py-8">
        {active === 'bmi' && <BMICalculator />}
        {active === 'workouts' && <WorkoutPlans />}
        {active === 'library' && <ExerciseLibrary />}
        {active === 'nutrition' && <NutritionPlatform />}
        {active === 'profile' && <ProfileScreen user={user} onLogout={() => setUser(null)} />}
      </main>
    </div>
  )
}
