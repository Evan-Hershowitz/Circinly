import { CheckCircle2, Circle, CircleDot } from 'lucide-react'
import TopBar from '@/components/TopBar'
import { currentUser, missions } from '@/data/mockData'
import type { Mission, MissionStatus } from '@/types'

const statusMeta: Record<
  MissionStatus,
  { label: string; icon: typeof Circle; className: string }
> = {
  completed: { label: 'Completed', icon: CheckCircle2, className: 'text-good' },
  'in-progress': { label: 'In progress', icon: CircleDot, className: 'text-brand-500' },
  'not-started': { label: 'Not started', icon: Circle, className: 'text-muted' },
}

function MissionRow({ mission }: { mission: Mission }) {
  const meta = statusMeta[mission.status]
  const Icon = meta.icon
  return (
    <div className="card p-5 flex items-start gap-4">
      <Icon size={20} className={`mt-0.5 shrink-0 ${meta.className}`} />
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between gap-3">
          <h3 className="font-semibold text-sm">{mission.title}</h3>
          {mission.dueDate && (
            <span className="text-xs text-muted whitespace-nowrap">
              Due {mission.dueDate}
            </span>
          )}
        </div>
        <p className="text-sm text-muted mt-1">{mission.description}</p>
        <div className="h-1.5 w-full bg-line rounded-full mt-3 overflow-hidden">
          <div
            className="h-full bg-brand-500 rounded-full"
            style={{ width: `${mission.progress}%` }}
          />
        </div>
      </div>
    </div>
  )
}

export default function Missions() {
  const categories = Array.from(new Set(missions.map((m) => m.category)))

  return (
    <div>
      <TopBar name={currentUser.name} />

      <div className="mb-8">
        <h1 className="text-3xl font-display font-bold">Missions</h1>
        <p className="text-muted mt-1">
          Your roadmap, broken into stages you can actually finish.
        </p>
      </div>

      <div className="card p-6 mb-8 flex items-center gap-6">
        <div>
          <p className="text-4xl font-display font-bold">
            {currentUser.missionProgress}
            <span className="text-xl align-top">%</span>
          </p>
          <p className="text-sm text-muted mt-1">overall complete</p>
        </div>
        <div className="flex-1 h-2 bg-line rounded-full overflow-hidden">
          <div
            className="h-full bg-brand-500 rounded-full"
            style={{ width: `${currentUser.missionProgress}%` }}
          />
        </div>
      </div>

      <div className="space-y-8">
        {categories.map((category) => (
          <section key={category}>
            <h2 className="text-sm font-semibold text-muted uppercase tracking-wide mb-3">
              {category}
            </h2>
            <div className="space-y-3">
              {missions
                .filter((m) => m.category === category)
                .map((mission) => (
                  <MissionRow key={mission.id} mission={mission} />
                ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
