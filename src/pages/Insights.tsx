import { TrendingUp, TrendingDown, Minus } from 'lucide-react'
import TopBar from '@/components/TopBar'
import { currentUser, insightMetrics, applicationsOverTime } from '@/data/mockData'

const trendIcon = { up: TrendingUp, down: TrendingDown, flat: Minus }
const trendColor = { up: 'text-good', down: 'text-red-500', flat: 'text-muted' }

export default function Insights() {
  const max = Math.max(...applicationsOverTime.map((d) => d.applications))

  return (
    <div>
      <TopBar name={currentUser.name} />

      <div className="mb-8">
        <h1 className="text-3xl font-display font-bold">Insights</h1>
        <p className="text-muted mt-1">
          The numbers behind your search, updated as you go.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        {insightMetrics.map((metric) => {
          const Trend = metric.trend ? trendIcon[metric.trend] : null
          return (
            <div key={metric.id} className="card p-5">
              <p className="text-sm text-muted">{metric.label}</p>
              <p className="text-3xl font-display font-bold mt-2">
                {metric.value}
              </p>
              {metric.delta && (
                <p
                  className={`text-xs font-medium mt-2 inline-flex items-center gap-1 ${
                    metric.trend ? trendColor[metric.trend] : 'text-muted'
                  }`}
                >
                  {Trend && <Trend size={12} />}
                  {metric.delta}
                </p>
              )}
            </div>
          )
        })}
      </div>

      <div className="card p-6">
        <h2 className="text-lg font-display font-semibold mb-6">
          Applications sent, last 4 weeks
        </h2>
        <div className="flex items-end gap-6 h-48">
          {applicationsOverTime.map((d) => (
            <div key={d.week} className="flex-1 flex flex-col items-center gap-3 h-full justify-end">
              <div className="w-full flex flex-col justify-end h-full">
                <div
                  className="w-full bg-brand-500 rounded-t-lg"
                  style={{ height: `${(d.applications / max) * 100}%` }}
                />
              </div>
              <p className="text-xs text-muted font-medium">{d.week}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
