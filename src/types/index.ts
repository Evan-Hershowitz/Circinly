export type Priority = 'LOW' | 'MEDIUM' | 'HIGH'

export interface FocusItem {
  id: string
  label: string
  meta?: string
  priority?: Priority
  completed: boolean
  dueLabel?: string
}

export type MissionStatus = 'not-started' | 'in-progress' | 'completed'

export interface Mission {
  id: string
  title: string
  description: string
  status: MissionStatus
  progress: number // 0-100
  category: string
  dueDate?: string
}

export type OpportunityStage =
  | 'saved'
  | 'applied'
  | 'interviewing'
  | 'offer'
  | 'closed'

export interface Opportunity {
  id: string
  role: string
  company: string
  location: string
  stage: OpportunityStage
  matchScore: number // 0-100
  postedLabel: string
  remote: boolean
}

export interface InsightMetric {
  id: string
  label: string
  value: string
  delta?: string
  trend?: 'up' | 'down' | 'flat'
}

export interface UserProfile {
  name: string
  headline: string
  email: string
  location: string
  streakDays: number
  momentum: number[] // last N days, 0-1 scale representing activity
  missionProgress: number
  flightOath: string
}
