import type {
  FocusItem,
  Mission,
  Opportunity,
  InsightMetric,
  UserProfile,
} from '@/types'

export const currentUser: UserProfile = {
  name: 'Evan',
  headline: 'Product Designer, launching into fintech',
  email: 'evan@circinly.app',
  location: 'Boston, MA',
  streakDays: 7,
  momentum: [1, 1, 1, 1, 0, 0, 0],
  missionProgress: 67,
  flightOath:
    'I will apply with intention, follow up with discipline, and treat every rejection as data, not verdict.',
}

export const todaysFocus: FocusItem[] = [
  {
    id: 'focus-1',
    label: 'Apply to 2 new opportunities',
    meta: 'Due today',
    dueLabel: 'Due today',
    priority: 'HIGH',
    completed: false,
  },
  {
    id: 'focus-2',
    label: 'Review your resume',
    completed: true,
  },
  {
    id: 'focus-3',
    label: 'Update Flight Oath',
    completed: true,
  },
]

export const missions: Mission[] = [
  {
    id: 'm-1',
    title: 'Launch your resume',
    description: 'Polish formatting, tighten bullet impact, pass ATS scan.',
    status: 'completed',
    progress: 100,
    category: 'Foundations',
  },
  {
    id: 'm-2',
    title: 'Write your Flight Oath',
    description: 'Define the commitments that will carry you through the search.',
    status: 'completed',
    progress: 100,
    category: 'Foundations',
  },
  {
    id: 'm-3',
    title: 'Apply to 10 opportunities',
    description: 'Quality over volume — tailor each application to the role.',
    status: 'in-progress',
    progress: 60,
    category: 'Momentum',
    dueDate: 'Aug 8',
  },
  {
    id: 'm-4',
    title: 'Run 3 informational interviews',
    description: 'Reach out to people already doing the job you want.',
    status: 'in-progress',
    progress: 33,
    category: 'Momentum',
    dueDate: 'Aug 15',
  },
  {
    id: 'm-5',
    title: 'Negotiate your first offer',
    description: 'Prep your numbers, know your floor, practice the ask.',
    status: 'not-started',
    progress: 0,
    category: 'Landing',
  },
]

export const opportunities: Opportunity[] = [
  {
    id: 'o-1',
    role: 'Senior Product Designer',
    company: 'Northwind Labs',
    location: 'Boston, MA',
    stage: 'interviewing',
    matchScore: 92,
    postedLabel: '2 days ago',
    remote: true,
  },
  {
    id: 'o-2',
    role: 'Product Designer, Growth',
    company: 'Fleet & Co.',
    location: 'Remote',
    stage: 'applied',
    matchScore: 87,
    postedLabel: '5 days ago',
    remote: true,
  },
  {
    id: 'o-3',
    role: 'UX Designer II',
    company: 'Aster Health',
    location: 'Cambridge, MA',
    stage: 'saved',
    matchScore: 81,
    postedLabel: '1 week ago',
    remote: false,
  },
  {
    id: 'o-4',
    role: 'Design Lead, Payments',
    company: 'Circuit Financial',
    location: 'Remote',
    stage: 'saved',
    matchScore: 78,
    postedLabel: '3 days ago',
    remote: true,
  },
  {
    id: 'o-5',
    role: 'Product Designer',
    company: 'Hearth',
    location: 'Providence, RI',
    stage: 'closed',
    matchScore: 64,
    postedLabel: '3 weeks ago',
    remote: false,
  },
]

export const insightMetrics: InsightMetric[] = [
  {
    id: 'i-1',
    label: 'Applications sent',
    value: '14',
    delta: '+4 this week',
    trend: 'up',
  },
  {
    id: 'i-2',
    label: 'Response rate',
    value: '28%',
    delta: '+6 pts',
    trend: 'up',
  },
  {
    id: 'i-3',
    label: 'Avg. time to apply',
    value: '1.8 days',
    delta: '-0.4 days',
    trend: 'up',
  },
  {
    id: 'i-4',
    label: 'Interviews booked',
    value: '3',
    delta: 'steady',
    trend: 'flat',
  },
]

export const applicationsOverTime = [
  { week: 'Wk 1', applications: 2 },
  { week: 'Wk 2', applications: 3 },
  { week: 'Wk 3', applications: 5 },
  { week: 'Wk 4', applications: 4 },
]
