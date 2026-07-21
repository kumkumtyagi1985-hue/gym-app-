// Set tags per brief: W = Warm-up, X = Working, D = Drop Set, F = Failure
export const SET_TAGS = {
  W: { label: 'Warm-up', color: '#4ADE80' },
  X: { label: 'Working', color: '#22C55E' },
  D: { label: 'Drop Set', color: '#FBBF24' },
  F: { label: 'Failure', color: '#FB7185' },
}

// `pattern` drives the 2D animation. `muscle` + `view` drive the muscle diagram.
export const workoutPlans = [
  {
    id: 'beginner',
    title: 'Beginner Plan',
    subtitle: '3-Day Full Body Split',
    target: 'Adaptability, form validation, muscle activation.',
    days: [
      {
        day: 'Day 1',
        name: 'Full Body A',
        exercises: [
          { name: 'Goblet Squats', sets: 3, reps: '10', rest: 60, pattern: 'squat', muscle: 'quads', view: 'front' },
          { name: 'Dumbbell Bench Press', sets: 3, reps: '10', rest: 60, pattern: 'press', muscle: 'chest', view: 'front' },
          { name: 'Lat Pulldowns', sets: 3, reps: '12', rest: 60, pattern: 'pull', muscle: 'back', view: 'back' },
          { name: 'Plank Hold', sets: 3, reps: '30-45s', rest: 45, pattern: 'core', muscle: 'abs', view: 'front' },
        ],
      },
      { day: 'Day 2', name: 'Active Recovery / Rest', exercises: [] },
      {
        day: 'Day 3',
        name: 'Full Body B',
        exercises: [
          { name: 'Romanian Deadlifts (DB)', sets: 3, reps: '10', rest: 60, pattern: 'hinge', muscle: 'hamstrings', view: 'back' },
          { name: 'Overhead Dumbbell Press', sets: 3, reps: '10', rest: 60, pattern: 'press', muscle: 'shoulders', view: 'front' },
          { name: 'Seated Cable Rows', sets: 3, reps: '12', rest: 60, pattern: 'pull', muscle: 'back', view: 'back' },
          { name: 'Lying Leg Raises', sets: 3, reps: '12', rest: 45, pattern: 'core', muscle: 'abs', view: 'front' },
        ],
      },
    ],
  },
  {
    id: 'intermediate',
    title: 'Intermediate Plan',
    subtitle: '4-Day Push/Pull Split',
    target: 'Hypertrophy focus, structural volume tracking.',
    days: [
      {
        day: 'Day 1',
        name: 'Push Day (Chest, Shoulders, Triceps)',
        exercises: [
          { name: 'Barbell Bench Press', sets: 4, reps: '8', rest: 90, pattern: 'press', muscle: 'chest', view: 'front' },
          { name: 'Incline Dumbbell Press', sets: 3, reps: '10', rest: 75, pattern: 'press', muscle: 'chest', view: 'front' },
          { name: 'Overhead Press (Barbell)', sets: 3, reps: '8', rest: 90, pattern: 'press', muscle: 'shoulders', view: 'front' },
          { name: 'Tricep Overhead Extensions', sets: 3, reps: '12', rest: 60, pattern: 'curl', muscle: 'triceps', view: 'back' },
        ],
      },
      {
        day: 'Day 2',
        name: 'Pull Day (Back, Biceps)',
        exercises: [
          { name: 'Conventional Barbell Deadlift', sets: 3, reps: '5', rest: 120, pattern: 'hinge', muscle: 'hamstrings', view: 'back' },
          { name: 'Bent-Over Barbell Rows', sets: 4, reps: '8', rest: 90, pattern: 'pull', muscle: 'back', view: 'back' },
          { name: 'Pull-ups / Chin-ups', sets: 3, reps: 'Max', rest: 75, pattern: 'pull', muscle: 'back', view: 'back' },
          { name: 'Alternating DB Bicep Curls', sets: 3, reps: '12', rest: 60, pattern: 'curl', muscle: 'biceps', view: 'front' },
        ],
      },
    ],
  },
  {
    id: 'advanced',
    title: 'Advanced Plan',
    subtitle: '5-Day Push/Pull/Legs Split',
    target: 'Maximum intensity, specific isolation matrices.',
    days: [
      {
        day: 'Day 1',
        name: 'Push Focus (Heavy)',
        exercises: [
          { name: 'Barbell Bench Press', sets: 4, reps: '5', rest: 180, tag: 'W', pattern: 'press', muscle: 'chest', view: 'front' },
          { name: 'Weighted Dips', sets: 3, reps: '8', rest: 90, pattern: 'press', muscle: 'chest', view: 'front' },
          { name: 'Cable Lateral Raises', sets: 4, reps: '15', rest: 60, tag: 'D', pattern: 'raise', muscle: 'shoulders', view: 'front' },
        ],
      },
      {
        day: 'Day 2',
        name: 'Pull Focus (Heavy)',
        exercises: [
          { name: 'Barbell Rows', sets: 4, reps: '6', rest: 120, pattern: 'pull', muscle: 'back', view: 'back' },
          { name: 'Weighted Pull-ups', sets: 3, reps: '6', rest: 90, pattern: 'pull', muscle: 'back', view: 'back' },
          { name: 'Face Pulls', sets: 4, reps: '15', rest: 60, pattern: 'pull', muscle: 'shoulders', view: 'back' },
        ],
      },
      {
        day: 'Day 3',
        name: 'Legs Focus (Heavy)',
        exercises: [
          { name: 'Barbell Back Squats', sets: 4, reps: '6', rest: 180, pattern: 'squat', muscle: 'quads', view: 'front' },
          { name: 'Leg Press', sets: 3, reps: '10', rest: 90, tag: 'F', pattern: 'squat', muscle: 'quads', view: 'front' },
          { name: 'Seated Hamstring Curls', sets: 4, reps: '12', rest: 60, pattern: 'curl', muscle: 'hamstrings', view: 'back' },
        ],
      },
    ],
  },
]
