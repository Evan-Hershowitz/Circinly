import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Check, Calendar } from 'lucide-react'
import type { FocusItem, Priority } from '@/types'

const priorityStyles: Record<Priority, string> = {
  HIGH: 'bg-brand-100 text-brand-700',
  MEDIUM: 'bg-amber-100 text-amber-700',
  LOW: 'bg-cloud text-muted',
}

export default function TodaysFocusCard({ items }: { items: FocusItem[] }) {
  const [focus, setFocus] = useState(items)

  const toggle = (id: string) =>
    setFocus((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item,
      ),
    )

  return (
    <div className="card p-6 flex-1">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-lg font-display font-semibold">Today's Focus</h2>
        <Link to="/missions" className="link text-sm">
          View all
        </Link>
      </div>

      <ul className="divide-y divide-line">
        {focus.map((item) => (
          <li key={item.id} className="flex items-center justify-between py-3.5 first:pt-0 last:pb-0">
            <div className="flex items-center gap-3">
              <button
                onClick={() => toggle(item.id)}
                aria-pressed={item.completed}
                aria-label={item.completed ? 'Mark incomplete' : 'Mark complete'}
                className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 transition-colors ${
                  item.completed
                    ? 'bg-good/10 border-good text-good'
                    : 'border-line text-transparent hover:border-brand-400'
                }`}
              >
                <Check size={12} strokeWidth={3} />
              </button>
              <div>
                <p
                  className={`text-sm font-medium ${
                    item.completed ? 'text-ink' : 'text-ink'
                  }`}
                >
                  {item.label}
                </p>
                {item.completed ? (
                  <p className="text-xs text-good font-medium mt-0.5">Completed</p>
                ) : item.dueLabel ? (
                  <p className="text-xs text-brand-600 font-medium mt-0.5 flex items-center gap-1">
                    <Calendar size={12} /> {item.dueLabel}
                  </p>
                ) : null}
              </div>
            </div>
            {item.priority && !item.completed && (
              <span className={`pill ${priorityStyles[item.priority]}`}>
                {item.priority}
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}
