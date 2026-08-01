import { NavLink } from 'react-router-dom'
import {
  Home,
  Compass,
  Briefcase,
  BarChart3,
  User,
} from 'lucide-react'
import { currentUser } from '@/data/mockData'
import MomentumWidget from './MomentumWidget'

const navItems = [
  { to: '/', label: 'Home', icon: Home, end: true },
  { to: '/missions', label: 'Missions', icon: Compass },
  { to: '/opportunities', label: 'Opportunities', icon: Briefcase },
  { to: '/insights', label: 'Insights', icon: BarChart3 },
  { to: '/profile', label: 'Profile', icon: User },
]

export default function Sidebar() {
  return (
    <aside className="hidden md:flex md:flex-col md:w-60 md:shrink-0 border-r border-line px-5 py-8">
      <a href="/" className="flex items-center gap-2 mb-10 px-1">
        <svg width="30" height="30" viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="16" r="13" stroke="#14131a" strokeWidth="1.6" />
          <ellipse
            cx="16"
            cy="16"
            rx="13"
            ry="5.5"
            stroke="#14131a"
            strokeWidth="1.6"
            transform="rotate(-18 16 16)"
          />
          <circle cx="23.5" cy="9.5" r="1.5" fill="#14131a" />
        </svg>
        <span className="font-display font-bold tracking-wide text-sm">
          CIRCINLY
        </span>
      </a>

      <nav className="flex flex-col gap-1">
        {navItems.map(({ to, label, icon: Icon, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-brand-50 text-brand-700'
                  : 'text-ink/70 hover:bg-cloud hover:text-ink'
              }`
            }
          >
            <Icon size={18} strokeWidth={2} />
            {label}
          </NavLink>
        ))}
      </nav>

      <div className="mt-auto pt-8">
        <MomentumWidget
          streakDays={currentUser.streakDays}
          momentum={currentUser.momentum}
        />
      </div>
    </aside>
  )
}
