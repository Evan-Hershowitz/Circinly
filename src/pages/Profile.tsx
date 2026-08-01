import { Mail, MapPin } from 'lucide-react'
import TopBar from '@/components/TopBar'
import { currentUser } from '@/data/mockData'

export default function Profile() {
  return (
    <div>
      <TopBar name={currentUser.name} />

      <div className="mb-8">
        <h1 className="text-3xl font-display font-bold">Profile</h1>
        <p className="text-muted mt-1">Your identity across Circinly.</p>
      </div>

      <div className="card p-6 flex flex-col sm:flex-row sm:items-center gap-5 mb-6">
        <div className="w-16 h-16 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center text-2xl font-display font-bold shrink-0">
          {currentUser.name.charAt(0)}
        </div>
        <div>
          <h2 className="text-xl font-display font-semibold">{currentUser.name}</h2>
          <p className="text-muted text-sm mt-0.5">{currentUser.headline}</p>
          <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-muted">
            <span className="inline-flex items-center gap-1.5">
              <Mail size={14} /> {currentUser.email}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={14} /> {currentUser.location}
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card p-6">
          <h3 className="font-display font-semibold mb-3">Flight Oath</h3>
          <p className="text-sm text-muted leading-relaxed italic">
            "{currentUser.flightOath}"
          </p>
          <button className="btn-secondary mt-5 text-xs">Edit oath</button>
        </div>

        <div className="card p-6">
          <h3 className="font-display font-semibold mb-3">Momentum</h3>
          <p className="text-3xl font-display font-bold">
            {currentUser.streakDays}
            <span className="text-base font-sans font-medium text-muted ml-1">
              day streak
            </span>
          </p>
          <div className="flex gap-1 mt-4">
            {currentUser.momentum.map((active, i) => (
              <span
                key={i}
                className={`h-2 flex-1 rounded-full ${
                  active ? 'bg-brand-500' : 'bg-line'
                }`}
              />
            ))}
          </div>
          <p className="text-sm text-muted mt-3">
            Mission progress: {currentUser.missionProgress}%
          </p>
        </div>
      </div>
    </div>
  )
}
