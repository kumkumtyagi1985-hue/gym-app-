// Simple client-side auth (localStorage-based) — good enough for a demo/MVP.
// NOTE: passwords are stored in plain text in the browser; this is NOT secure
// for a real production app. Swap for Firebase/Supabase Auth before going live.

const USERS_KEY = 'alphaLiftUsers'
const SESSION_KEY = 'alphaLiftSession'

function getUsers() {
  try {
    return JSON.parse(localStorage.getItem(USERS_KEY)) || []
  } catch {
    return []
  }
}

function saveUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users))
}

export function signup({ name, email, password, age, height, weight, goal }) {
  const users = getUsers()
  const exists = users.some((u) => u.email.toLowerCase() === email.toLowerCase())
  if (exists) return { error: 'Is email se pehle se account bana hua hai. Login karein.' }

  const user = {
    name,
    email,
    password, // demo-only, plaintext
    age: age || '',
    height: height || '',
    weight: weight || '',
    goal: goal || 'maintenance',
    joinedAt: new Date().toISOString(),
  }
  users.push(user)
  saveUsers(users)
  localStorage.setItem(SESSION_KEY, email)
  return { user }
}

export function login({ email, password }) {
  const users = getUsers()
  const user = users.find((u) => u.email.toLowerCase() === email.toLowerCase())
  if (!user) return { error: 'Ye email registered nahi hai. Pehle Sign Up karein.' }
  if (user.password !== password) return { error: 'Password galat hai.' }
  localStorage.setItem(SESSION_KEY, email)
  return { user }
}

export function logout() {
  localStorage.removeItem(SESSION_KEY)
}

export function getCurrentUser() {
  const email = localStorage.getItem(SESSION_KEY)
  if (!email) return null
  const users = getUsers()
  return users.find((u) => u.email.toLowerCase() === email.toLowerCase()) || null
}

export function updateCurrentUser(updates) {
  const email = localStorage.getItem(SESSION_KEY)
  if (!email) return null
  const users = getUsers()
  const idx = users.findIndex((u) => u.email.toLowerCase() === email.toLowerCase())
  if (idx === -1) return null
  users[idx] = { ...users[idx], ...updates }
  saveUsers(users)
  return users[idx]
}
