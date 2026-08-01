import { Routes, Route } from 'react-router-dom'
import Sidebar from '@/components/Sidebar'
import MobileNav from '@/components/MobileNav'
import Home from '@/pages/Home'
import Missions from '@/pages/Missions'
import Opportunities from '@/pages/Opportunities'
import Insights from '@/pages/Insights'
import Profile from '@/pages/Profile'

export default function App() {
  return (
    <div className="min-h-screen flex bg-paper">
      <Sidebar />
      <div className="flex-1 min-w-0 flex flex-col">
        <main className="flex-1 px-5 sm:px-8 lg:px-10 py-8 max-w-6xl w-full mx-auto pb-24 md:pb-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/missions" element={<Missions />} />
            <Route path="/opportunities" element={<Opportunities />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <MobileNav />
      </div>
    </div>
  )
}
