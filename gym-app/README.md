# Alpha Lift — Gym Workout & Diet Platform (MVP Frontend)

Blueprint document ke Module 1 (BMI Engine), Module 2 (Tiered Workout Plans), aur
Module 3 (Nutrition Platform) ka working React frontend.

## Folder Structure

```
gym-app/
├── index.html              # Fonts (Space Grotesk + Inter) load karta hai
├── package.json
├── vite.config.js
├── tailwind.config.js      # Dark theme + Neon Teal/Cyan tokens
├── postcss.config.js
└── src/
    ├── main.jsx             # React root
    ├── App.jsx              # Tab state: bmi | workouts | nutrition
    ├── index.css             # Tailwind + global resets
    ├── data/
    │   ├── workoutData.js    # Beginner/Intermediate/Advanced plans (source of truth)
    │   └── nutritionData.js  # Diet frameworks, food matrix, meal plan
    └── components/
        ├── Dashboard.jsx      # Top nav (desktop) + bottom nav (mobile)
        ├── BMICalculator.jsx  # Module 1: live BMI + classification + recommendation
        ├── WorkoutPlans.jsx   # Module 2: tiered plans with set tags (W/D/F)
        └── NutritionPlatform.jsx # Module 3: diet + food matrix + meal plan
```

## Run Locally

```bash
npm install
npm run dev
```

## Next Steps (per blueprint's own roadmap)

1. **Database Setup**: `src/data/*.js` abhi static hai — Supabase/Firebase se replace
   karke App ↔ Website sync live karein.
2. **Active Workout Log screen**: naya component banayein jisme live timer + set-by-set
   input ho (yeh sabse important gym-floor screen hai).
3. **Offline-first logging**: local storage / IndexedDB me draft save karke, network
   milne par cloud sync karein (weak gym-basement network ke liye).
4. **Auth + Admin Panel**: exercises add/manage karne ke liye separate protected route.
5. **Monetization gates**: Advanced tier aur analytics ko subscription check ke peeche
   lock karein.

Design tokens (`tailwind.config.js`) already Black/Dark Grey + Neon Teal/Cyan follow
karte hain jaisa original brief me maanga gaya tha, taaki App aur Website dono consistent
rahein.
