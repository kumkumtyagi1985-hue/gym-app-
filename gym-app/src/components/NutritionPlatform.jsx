import { Apple, Droplets, UtensilsCrossed } from 'lucide-react'
import {
  dietFrameworks,
  highProteinFoods,
  smartSnacks,
  dailyMealPlan,
  nutritionTips,
} from '../data/nutritionData'

function FoodTable({ title, rows }) {
  return (
    <div className="bg-base-800 border border-base-700 rounded-2xl p-5">
      <p className="text-white font-medium mb-3">{title}</p>
      <ul className="space-y-2">
        {rows.map((r) => (
          <li key={r.name} className="flex items-center justify-between text-sm">
            <span className="text-gray-300">{r.name}</span>
            <span className="text-accent-teal font-medium">{r.value}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function NutritionPlatform() {
  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="font-display text-2xl font-semibold text-white flex items-center gap-2 mb-1">
        <Apple className="text-accent-teal" size={24} />
        Nutrition & Diet Platform
      </h2>
      <p className="text-gray-400 text-sm mb-6">Diet frameworks, food matrix aur daily meal structure.</p>

      {/* Diet frameworks */}
      <div className="grid sm:grid-cols-2 gap-4 mb-6">
        {dietFrameworks.map((d) => (
          <div key={d.id} className="bg-base-800 border border-base-700 rounded-2xl p-5">
            <p className="text-white font-medium">{d.title}</p>
            <p className="text-accent-cyan text-xs mt-0.5 mb-2">{d.subtitle}</p>
            <p className="text-gray-400 text-sm leading-relaxed">{d.detail}</p>
          </div>
        ))}
      </div>

      {/* Food matrix */}
      <div className="grid sm:grid-cols-2 gap-4 mb-6">
        <FoodTable title="High Protein Foods Matrix" rows={highProteinFoods} />
        <FoodTable title="Healthy Smart Snacks Matrix" rows={smartSnacks} />
      </div>

      {/* Meal plan */}
      <div className="bg-base-800 border border-base-700 rounded-2xl p-5 mb-6">
        <p className="text-white font-medium flex items-center gap-2 mb-3">
          <UtensilsCrossed size={16} className="text-accent-teal" /> Ideal Daily Meal Plan
        </p>
        <ul className="divide-y divide-base-700">
          {dailyMealPlan.map((m) => (
            <li key={m.meal} className="py-3 first:pt-0 last:pb-0">
              <span className="text-accent-cyan text-xs uppercase tracking-wide">{m.meal}</span>
              <p className="text-gray-300 text-sm mt-0.5">{m.detail}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Tips */}
      <div className="bg-base-800 border border-base-700 rounded-2xl p-5">
        <p className="text-white font-medium flex items-center gap-2 mb-3">
          <Droplets size={16} className="text-accent-teal" /> Essential Nutrition Tips
        </p>
        <ul className="space-y-1.5">
          {nutritionTips.map((t) => (
            <li key={t} className="text-gray-400 text-sm">• {t}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
