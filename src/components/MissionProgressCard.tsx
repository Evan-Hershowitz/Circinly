import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import ProgressRing from './ProgressRing'

export default function MissionProgressCard({ percent }: { percent: number }) {
  return (
    <div className="card p-6 w-full md:w-[360px] shrink-0">
      <h2 className="text-lg font-display font-semibold mb-4">Mission Progress</h2>

      <div className="grid grid-cols-[1fr_auto] gap-4 items-center">
        <div>
          <p className="text-5xl font-display font-bold leading-none">
            {percent}
            <span className="text-2xl align-top">%</span>
          </p>
          <p className="text-sm text-muted mt-2">On track for your goals</p>

          <div className="h-2 w-full bg-line rounded-full mt-4 overflow-hidden">
            <div
              className="h-full bg-brand-500 rounded-full"
              style={{ width: `${percent}%` }}
            />
          </div>

          <Link
            to="/missions"
            className="link text-sm inline-flex items-center gap-1 mt-4"
          >
            View roadmap <ArrowRight size={14} />
          </Link>
        </div>

        <div className="w-28 h-28">
          <ProgressRing percent={percent} />
        </div>
      </div>
    </div>
  )
}
