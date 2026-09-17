interface LanyardInteractiveHintProps {
  isLoaded: boolean;
  isDragging?: boolean;
  hasInteracted?: boolean;
  onNudge?: () => void;
}

export default function LanyardInteractiveHint({
  isLoaded,
  isDragging = false,
  hasInteracted = false,
  onNudge,
}: LanyardInteractiveHintProps) {
  // Hide once the user has dragged or interacted with the lanyard
  const isVisible = isLoaded && !hasInteracted && !isDragging;

  return (
    <div
      aria-hidden={!isVisible}
      onClick={onNudge}
      role="button"
      tabIndex={0}
      title="Hold & drag the lanyard to swing it"
      className={`absolute left-[calc(50%+80px)] top-[60%] z-20 transition-all duration-600 ease-out cursor-pointer select-none group ${isVisible
          ? 'opacity-100 scale-100 pointer-events-auto'
          : 'opacity-0 scale-95 pointer-events-none'
        }`}
      style={{
        filter: 'drop-shadow(0 0 10px rgba(168, 85, 247, 0.45))',
      }}
    >
      <div className="relative group-hover:scale-105 transition-transform duration-300">
        <svg
          width="155"
          height="105"
          viewBox="0 0 155 105"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="overflow-visible"
        >
          <defs>

            <linearGradient id="lanyard-arrow-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--accent-2, 285 85% 65%))" />
              <stop offset="100%" stopColor="hsl(var(--primary, 272 80% 55%))" />
            </linearGradient>


            <path
              id="lanyard-text-curve"
              d="M 30,86 Q 85,102 145,72"
              fill="none"
            />
          </defs>


          <path
            d="M 94,56 Q 52,44 18,14"
            stroke="url(#lanyard-arrow-grad)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-all duration-300 group-hover:stroke-[3]"
          />


          <path
            d="M 18,29 L 18,14 L 33,14"
            stroke="url(#lanyard-arrow-grad)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-all duration-300 group-hover:stroke-[3]"
          />


          <text
            className="font-display font-medium tracking-[0.08em] select-none uppercase"
            style={{
              fontSize: '12.5px',
              letterSpacing: '0.12em',
            }}
          >
            <textPath
              href="#lanyard-text-curve"
              startOffset="50%"
              textAnchor="middle"
              fill="url(#lanyard-arrow-grad)"
            >
              hold &amp; drag
            </textPath>
          </text>
        </svg>
      </div>
    </div>
  );
}
