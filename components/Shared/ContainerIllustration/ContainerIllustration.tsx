export default function ContainerIllustration() {
  return (
    <div className="relative size-full">
      <svg viewBox="0 0 200 150" className="relative size-full p-8" fill="none">
        <polygon
          points="140,58 168,32 168,86 140,112"
          fill="#f3f4f6"
          stroke="#b91c1c"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <polygon
          points="38,58 140,58 168,32 66,32"
          fill="#e5e7eb"
          stroke="#b91c1c"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <polygon
          points="38,58 140,58 140,112 38,112"
          fill="#fafafa"
          stroke="#b91c1c"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <line x1="64" y1="58" x2="64" y2="112" stroke="#b91c1c" strokeWidth="1" opacity="0.35" />
        <line x1="90" y1="58" x2="90" y2="112" stroke="#b91c1c" strokeWidth="1" opacity="0.35" />
        <line x1="116" y1="58" x2="116" y2="112" stroke="#b91c1c" strokeWidth="1" opacity="0.35" />
        <line x1="154" y1="45" x2="154" y2="99" stroke="#b91c1c" strokeWidth="1" opacity="0.35" />
        <image href="/logo-mark.png" x="72" y="69" width="34" height="32" preserveAspectRatio="xMidYMid meet" />
      </svg>
    </div>
  )
}
