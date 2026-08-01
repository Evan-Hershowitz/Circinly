import { Bell } from 'lucide-react'

interface Props {
  name: string
}

export default function TopBar({ name }: Props) {
  const hour = new Date().getHours()
  const greeting =
    hour < 12 ? 'Good morning' : hour < 18 ? 'Good afternoon' : 'Good evening'

  return (
    <div className="flex items-center justify-between mb-2">
      <p className="text-muted">
        {greeting}, <span className="font-semibold text-ink">{name}.</span>
      </p>
      <div className="flex items-center gap-4">
        <button
          aria-label="Notifications"
          className="relative w-9 h-9 rounded-full border border-line flex items-center justify-center hover:border-brand-300 transition-colors"
        >
          <Bell size={16} />
          <span className="absolute top-1.5 right-2 w-1.5 h-1.5 rounded-full bg-brand-500" />
        </button>
        <div className="w-9 h-9 rounded-full bg-cloud border border-line flex items-center justify-center text-sm font-semibold">
          {name.charAt(0)}
        </div>
      </div>
    </div>
  )
}
