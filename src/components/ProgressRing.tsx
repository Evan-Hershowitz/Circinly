interface Props {
  percent: number
}

export default function ProgressRing({ percent }: Props) {
  const dots = Array.from({ length: 8 }, (_, i) => {
    const angle = (i / 8) * Math.PI * 2 - Math.PI / 2
    return {
      x: 100 + Math.cos(angle) * 78,
      y: 100 + Math.sin(angle) * 78,
    }
  })

  return (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      <circle cx="100" cy="100" r="95" stroke="#e8e6e1" strokeWidth="1" fill="none" />
      <circle cx="100" cy="100" r="78" stroke="#e8e6e1" strokeWidth="1" fill="none" />
      <circle cx="100" cy="100" r="55" stroke="#e0e3ff" strokeWidth="1" fill="none" />
      {dots.map((d, i) => (
        <circle key={i} cx={d.x} cy={d.y} r={2} fill="#c5caff" />
      ))}
      <circle cx="176" cy="78" r="3.5" fill="#635bf0" />
      <circle cx="100" cy="100" r="34" fill="#635bf0" />
      <path
        d="M100 88 L104 98 L114 100 L104 102 L100 112 L96 102 L86 100 L96 98 Z"
        fill="#fbfaf8"
      />
      <text
        x="100"
        y="100"
        textAnchor="middle"
        className="hidden"
      >
        {percent}%
      </text>
    </svg>
  )
}
