import { useState } from 'react'
import { Dumbbell, Mail, Lock, User, ArrowRight } from 'lucide-react'
import { signup, login } from '../utils/auth'

export default function AuthScreen({ onAuthSuccess }) {
  const [mode, setMode] = useState('login') // 'login' | 'signup'
  const [form, setForm] = useState({ name: '', email: '', password: '', confirm: '', age: '', height: '', weight: '', goal: 'maintenance' })
  const [error, setError] = useState('')

  function update(field, value) {
    setForm((f) => ({ ...f, [field]: value }))
    setError('')
  }

  function handleSubmit(e) {
    e.preventDefault()
    setError('')

    if (mode === 'signup') {
      if (!form.name.trim() || !form.email.trim() || !form.password) {
        setError('Naam, email aur password zaroori hain.')
        return
      }
      if (form.password.length < 4) {
        setError('Password kam se kam 4 characters ka hona chahiye.')
        return
      }
      if (form.password !== form.confirm) {
        setError('Password match nahi kar raha.')
        return
      }
      const res = signup(form)
      if (res.error) return setError(res.error)
      onAuthSuccess(res.user)
    } else {
      if (!form.email.trim() || !form.password) {
        setError('Email aur password daalein.')
        return
      }
      const res = login(form)
      if (res.error) return setError(res.error)
      onAuthSuccess(res.user)
    }
  }

  const inputCls =
    'tap-target w-full bg-base-800 border border-base-700 rounded-xl pl-10 pr-3 text-sm text-white outline-none focus:border-accent-teal placeholder:text-gray-600'

  return (
    <div className="min-h-screen bg-base-900 flex flex-col items-center justify-center px-6 py-10">
      <div className="w-10 h-10 rounded-xl bg-accent-teal flex items-center justify-center mb-4">
        <Dumbbell size={22} className="text-base-900" />
      </div>
      <h1 className="font-display text-2xl font-bold text-white mb-1">Alpha Lift</h1>
      <p className="text-gray-400 text-sm mb-8">
        {mode === 'login' ? 'Apne account me login karein' : 'Naya account banayein'}
      </p>

      <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-3">
        {mode === 'signup' && (
          <div className="relative">
            <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
            <input
              className={inputCls}
              placeholder="Poora naam"
              value={form.name}
              onChange={(e) => update('name', e.target.value)}
            />
          </div>
        )}

        <div className="relative">
          <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
          <input
            type="email"
            className={inputCls}
            placeholder="Email"
            value={form.email}
            onChange={(e) => update('email', e.target.value)}
          />
        </div>

        <div className="relative">
          <Lock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
          <input
            type="password"
            className={inputCls}
            placeholder="Password"
            value={form.password}
            onChange={(e) => update('password', e.target.value)}
          />
        </div>

        {mode === 'signup' && (
          <>
            <div className="relative">
              <Lock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
              <input
                type="password"
                className={inputCls}
                placeholder="Password confirm karein"
                value={form.confirm}
                onChange={(e) => update('confirm', e.target.value)}
              />
            </div>

            <div className="grid grid-cols-3 gap-2">
              <input
                className="tap-target bg-base-800 border border-base-700 rounded-xl px-3 text-sm text-white outline-none focus:border-accent-teal placeholder:text-gray-600"
                placeholder="Age"
                inputMode="numeric"
                value={form.age}
                onChange={(e) => update('age', e.target.value)}
              />
              <input
                className="tap-target bg-base-800 border border-base-700 rounded-xl px-3 text-sm text-white outline-none focus:border-accent-teal placeholder:text-gray-600"
                placeholder="Height (cm)"
                inputMode="decimal"
                value={form.height}
                onChange={(e) => update('height', e.target.value)}
              />
              <input
                className="tap-target bg-base-800 border border-base-700 rounded-xl px-3 text-sm text-white outline-none focus:border-accent-teal placeholder:text-gray-600"
                placeholder="Weight (kg)"
                inputMode="decimal"
                value={form.weight}
                onChange={(e) => update('weight', e.target.value)}
              />
            </div>

            <select
              className="tap-target w-full bg-base-800 border border-base-700 rounded-xl px-3 text-sm text-white outline-none focus:border-accent-teal"
              value={form.goal}
              onChange={(e) => update('goal', e.target.value)}
            >
              <option value="loss">Goal: Weight Loss</option>
              <option value="gain">Goal: Muscle Gain</option>
              <option value="maintenance">Goal: Maintenance</option>
            </select>
          </>
        )}

        {error && <p className="text-status-obese text-xs">{error}</p>}

        <button
          type="submit"
          className="tap-target w-full bg-accent-teal text-base-900 font-semibold rounded-xl flex items-center justify-center gap-2 mt-2"
        >
          {mode === 'login' ? 'Login' : 'Sign Up'} <ArrowRight size={16} />
        </button>
      </form>

      <button
        onClick={() => {
          setMode(mode === 'login' ? 'signup' : 'login')
          setError('')
        }}
        className="text-gray-400 text-sm mt-6"
      >
        {mode === 'login' ? (
          <>Account nahi hai? <span className="text-accent-teal font-medium">Sign Up karein</span></>
        ) : (
          <>Pehle se account hai? <span className="text-accent-teal font-medium">Login karein</span></>
        )}
      </button>
    </div>
  )
}
