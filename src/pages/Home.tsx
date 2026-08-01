import { FileText, CalendarDays, Flag, Target } from 'lucide-react'
import TopBar from '@/components/TopBar'
import OrbitGraphic from '@/components/OrbitGraphic'
import TodaysFocusCard from '@/components/TodaysFocusCard'
import MissionProgressCard from '@/components/MissionProgressCard'
import SystemCard from '@/components/SystemCard'
import { currentUser, todaysFocus } from '@/data/mockData'

export default function Home() {
  return (
    <div>
      <TopBar name={currentUser.name} />

      <div className="relative overflow-hidden mb-8">
        <div className="relative z-10 max-w-xl pt-2 pb-8 md:pb-16">
          <h1 className="text-4xl md:text-6xl font-display font-bold tracking-tight leading-[1.05]">
            Orbit your future.
          </h1>
          <p className="text-muted text-lg mt-4">
            Your career. Planned. Tracked. Launched.
          </p>
        </div>
        <div className="pointer-events-none absolute right-0 top-0 w-[60%] h-full max-w-md hidden sm:block">
          <OrbitGraphic />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6 mb-10">
        <TodaysFocusCard items={todaysFocus} />
        <MissionProgressCard percent={currentUser.missionProgress} />
      </div>

      <section>
        <h2 className="text-lg font-display font-semibold mb-4">Your System</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <SystemCard
            icon={FileText}
            iconBg="bg-brand-100"
            iconColor="text-brand-600"
            title="Resume Review / Builder"
            description="Polish. Optimize. Stand out."
            to="/profile"
          />
          <SystemCard
            icon={CalendarDays}
            iconBg="bg-sky-100"
            iconColor="text-sky-600"
            title="Calendar Reminder"
            description="Never miss what matters."
            to="/missions"
          />
          <SystemCard
            icon={Flag}
            iconBg="bg-emerald-100"
            iconColor="text-emerald-600"
            title="Flight Oath"
            description="Your roadmap to success."
            to="/profile"
          />
          <SystemCard
            icon={Target}
            iconBg="bg-orange-100"
            iconColor="text-orange-500"
            title="Opportunity Radar"
            description="Find. Track. Get ahead."
            to="/opportunities"
          />
        </div>
      </section>
    </div>
  )
}
