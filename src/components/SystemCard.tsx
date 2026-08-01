import { Link } from 'react-router-dom'
import { ArrowRight, type LucideIcon } from 'lucide-react'

interface Props {
  icon: LucideIcon
  iconBg: string
  iconColor: string
  title: string
  description: string
  to: string
}

export default function SystemCard({
  icon: Icon,
  iconBg,
  iconColor,
  title,
  description,
  to,
}: Props) {
  return (
    <div className="card p-6 flex flex-col justify-between min-h-[190px]">
      <div>
        <div
          className={`w-11 h-11 rounded-full flex items-center justify-center mb-4 ${iconBg}`}
        >
          <Icon size={18} className={iconColor} strokeWidth={2} />
        </div>
        <h3 className="font-display font-semibold text-base leading-snug">
          {title}
        </h3>
        <p className="text-sm text-muted mt-1.5 leading-snug">{description}</p>
      </div>
      <Link
        to={to}
        className="link text-sm inline-flex items-center gap-1 mt-5"
      >
        Open <ArrowRight size={14} />
      </Link>
    </div>
  )
}
