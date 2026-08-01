export default function OrbitGraphic() {
  const stars = [
    [50, 20], [140, 60], [260, 15], [310, 90], [40, 110],
    [200, 130], [330, 40], [90, 70], [270, 130], [10, 60],
  ]

  return (
    <svg
      viewBox="0 0 360 200"
      fill="none"
      className="w-full h-full"
      aria-hidden="true"
    >
      {stars.map(([x, y], i) => (
        <path
          key={i}
          d={`M${x} ${y - 4} L${x + 1.1} ${y - 1.1} L${x + 4} ${y} L${x + 1.1} ${y + 1.1} L${x} ${y + 4} L${x - 1.1} ${y + 1.1} L${x - 4} ${y} L${x - 1.1} ${y - 1.1} Z`}
          fill="#14131a"
          opacity={0.5}
        />
      ))}

      <path
        d="M0 170 C 60 120, 300 120, 360 170"
        stroke="#14131a"
        strokeWidth="1.2"
        opacity="0.85"
      />
      <path
        d="M0 178 C 60 132, 300 132, 360 178"
        stroke="#14131a"
        strokeWidth="1"
        opacity="0.35"
      />

      <path
        d="M120 150 C 170 60, 260 30, 330 20"
        stroke="#14131a"
        strokeWidth="1.2"
        strokeDasharray="1 7"
        strokeLinecap="round"
        opacity="0.6"
      />

      <g transform="translate(322, 16) rotate(35)">
        <path
          d="M0 16 C 0 6, 4 -6, 8 -6 C 12 -6, 16 6, 16 16 L 12 20 L 4 20 Z"
          fill="#fbfaf8"
          stroke="#14131a"
          strokeWidth="1.4"
        />
        <circle cx="8" cy="8" r="2.4" fill="#fbfaf8" stroke="#14131a" strokeWidth="1.2" />
        <path d="M0 16 L -5 24 L 2 20 Z" fill="#fbfaf8" stroke="#14131a" strokeWidth="1.2" />
        <path d="M16 16 L 21 24 L 14 20 Z" fill="#fbfaf8" stroke="#14131a" strokeWidth="1.2" />
        <path d="M4 20 L 2 28 L 6 24 Z" fill="#14131a" opacity="0.8" />
        <path d="M12 20 L 14 28 L 10 24 Z" fill="#14131a" opacity="0.5" />
      </g>
    </svg>
  )
}
