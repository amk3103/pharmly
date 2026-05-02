export default function PharmlyLogo({
  size = "default",
  showTagline = true,
}: {
  size?: "small" | "default" | "large";
  showTagline?: boolean;
}) {
  const sizeMap = {
    small: { scale: 0.6, width: 100 },
    default: { scale: 1, width: 160 },
    large: { scale: 1.25, width: 200 },
  };

  const { scale, width } = sizeMap[size];

  return (
    <div style={{ width: `${width}px` }}>
      <svg
        width={width}
        height={width * 0.31}
        viewBox="0 0 400 124"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Heart + Capsule Icon */}
        <g transform="translate(0, 12)">
          {/* Left teal heart lobe */}
          <path
            d="M 50 85 C 50 85 20 65 20 42 C 20 32 26 25 35 25 C 44 25 49 32 50 38"
            fill="#00A6A6"
            stroke="none"
          />

          {/* Right purple heart lobe with capsule */}
          <path
            d="M 50 38 C 51 32 56 25 65 25 C 74 25 80 32 80 42 C 80 65 50 85 50 85 L 50 38 Z"
            fill="#52489C"
            stroke="none"
          />

          {/* Diagonal capsule details on right side */}
          <g transform="translate(50, 45) rotate(-30) translate(-50, -45)">
            {/* Top capsule cap */}
            <path
              d="M 50 32 C 58 32 64 38 64 45 L 64 58 L 36 58 L 36 45 C 36 38 42 32 50 32 Z"
              fill="none"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Center dividing line */}
            <line
              x1="36"
              y1="58"
              x2="64"
              y2="58"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
            />

            {/* Bottom capsule cap */}
            <path
              d="M 36 58 L 64 58 L 64 71 C 64 78 58 84 50 84 C 42 84 36 78 36 71 L 36 58 Z"
              fill="none"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Checkmark */}
            <path
              d="M 42 56 L 47 62 L 58 48"
              stroke="#00A6A6"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>

          {/* Subtle heart outline */}
          <path
            d="M 50 85 C 50 85 20 65 20 42 C 20 32 26 25 35 25 C 44 25 49 32 50 38 C 51 32 56 25 65 25 C 74 25 80 32 80 42 C 80 65 50 85 50 85 Z"
            fill="none"
            stroke="rgba(0, 0, 0, 0.06)"
            strokeWidth="1.5"
          />
        </g>

        {/* Pharmly Text */}
        <text
          x="110"
          y="68"
          fontFamily="Poppins, system-ui, -apple-system, sans-serif"
          fontSize="52"
          fontWeight="700"
          fill="#52489C"
          letterSpacing="-0.02em"
        >
          Pharmly
        </text>

        {/* Tagline */}
        {showTagline && (
          <text
            x="110"
            y="95"
            fontFamily="Poppins, system-ui, -apple-system, sans-serif"
            fontSize="16"
            fontWeight="400"
            fill="#9CA3AF"
            letterSpacing="0.01em"
          >
            Your prescriptions, simplified.
          </text>
        )}
      </svg>
    </div>
  );
}
