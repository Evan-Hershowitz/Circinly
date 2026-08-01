import { NavLink } from 'react-router-dom'
import { Home, Compass, Briefcase, BarChart3, User } from 'lucide-react'

const navItems = [
  { to: '/', label: 'Home', icon: Home, end: true },
  { to: '/missions', label: 'Missions', icon: Compass },
  { to: '/opportunities', label: 'Jobs', icon: Briefcase },
  { to: '/insights', label: 'Insights', icon: BarChart3 },
  { to: '/profile', label: 'Profile', icon: User },
]

export default function MobileNav() {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-line flex justify-around py-2 px-2 z-20">
      {navItems.map(({ to, label, icon: Icon, end }) => (
        <NavLink
          key={to}
          to={to}
          end={end}
          className={({ isActive }) =>
            `flex flex-col items-center gap-1 px-2 py-1.5 rounded-lg text-[11px] font-medium ${
              isActive ? 'text-brand-600' : 'text-muted'
            }`
          }
        >
          <Icon size={20} />
          {label}
        </NavLink>
      ))}
    </nav>
  )
}
