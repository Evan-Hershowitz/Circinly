interface Props {
  streakDays: number
  momentum: number[]
}

export default function MomentumWidget({ streakDays, momentum }: Props) {
  return (
    <div className="card p-4">
      <p className="text-xs font-semibold text-muted mb-3">Momentum</p>
      <p className="text-xs text-muted mb-1">Streak</p>
      <p className="text-2xl font-display font-bold leading-none mb-3">
        {streakDays} <span className="text-sm font-sans font-medium text-muted">days</span>
      </p>
      <div className="flex gap-1 mb-3">
        {momentum.map((active, i) => (
          <span
            key={i}
            className={`h-1.5 flex-1 rounded-full ${
              active ? 'bg-brand-500' : 'bg-line'
            }`}
          />
        ))}
      </div>
      <p className="text-xs font-medium text-ink/80">Keep showing up.</p>
    </div>
  )
}
