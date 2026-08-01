import { useMemo, useState } from 'react'
import { MapPin, Wifi } from 'lucide-react'
import TopBar from '@/components/TopBar'
import { currentUser, opportunities } from '@/data/mockData'
import type { Opportunity, OpportunityStage } from '@/types'

const stageMeta: Record<OpportunityStage, { label: string; className: string }> = {
  saved: { label: 'Saved', className: 'bg-cloud text-muted' },
  applied: { label: 'Applied', className: 'bg-brand-100 text-brand-700' },
  interviewing: { label: 'Interviewing', className: 'bg-amber-100 text-amber-700' },
  offer: { label: 'Offer', className: 'bg-emerald-100 text-emerald-700' },
  closed: { label: 'Closed', className: 'bg-line text-muted' },
}

const filters: { key: OpportunityStage | 'all'; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'saved', label: 'Saved' },
  { key: 'applied', label: 'Applied' },
  { key: 'interviewing', label: 'Interviewing' },
  { key: 'offer', label: 'Offer' },
  { key: 'closed', label: 'Closed' },
]

function OpportunityCard({ opp }: { opp: Opportunity }) {
  const meta = stageMeta[opp.stage]
  return (
    <div className="card p-5 flex items-center justify-between gap-4 flex-wrap">
      <div className="min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <h3 className="font-semibold text-sm">{opp.role}</h3>
          <span className={`pill ${meta.className}`}>{meta.label}</span>
        </div>
        <p className="text-sm text-muted mt-1">{opp.company}</p>
        <div className="flex items-center gap-3 text-xs text-muted mt-2">
          <span className="inline-flex items-center gap-1">
            <MapPin size={12} /> {opp.location}
          </span>
          {opp.remote && (
            <span className="inline-flex items-center gap-1">
              <Wifi size={12} /> Remote
            </span>
          )}
          <span>Posted {opp.postedLabel}</span>
        </div>
      </div>
      <div className="text-right shrink-0">
        <p className="text-xs text-muted mb-1">Match</p>
        <p className="text-lg font-display font-bold text-brand-600">
          {opp.matchScore}%
        </p>
      </div>
    </div>
  )
}

export default function Opportunities() {
  const [activeFilter, setActiveFilter] = useState<OpportunityStage | 'all'>('all')

  const filtered = useMemo(
    () =>
      activeFilter === 'all'
        ? opportunities
        : opportunities.filter((o) => o.stage === activeFilter),
    [activeFilter],
  )

  return (
    <div>
      <TopBar name={currentUser.name} />

      <div className="mb-6">
        <h1 className="text-3xl font-display font-bold">Opportunities</h1>
        <p className="text-muted mt-1">Find. Track. Get ahead.</p>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {filters.map((f) => (
          <button
            key={f.key}
            onClick={() => setActiveFilter(f.key)}
            className={`text-sm font-medium px-4 py-1.5 rounded-full border transition-colors ${
              activeFilter === f.key
                ? 'bg-ink text-white border-ink'
                : 'border-line text-muted hover:border-brand-300 hover:text-ink'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="space-y-3">
        {filtered.map((opp) => (
          <OpportunityCard key={opp.id} opp={opp} />
        ))}
        {filtered.length === 0 && (
          <p className="text-sm text-muted py-8 text-center">
            Nothing here yet — add an opportunity to start tracking it.
          </p>
        )}
      </div>
    </div>
  )
}
