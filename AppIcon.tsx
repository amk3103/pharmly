export default function AppIcon({ size = 128 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#f0f9ff', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#fefefe', stopOpacity: 1 }} />
        </linearGradient>
      </defs>

      {/* Background */}
      <rect width="64" height="64" rx="14" fill="url(#bgGradient)" />

      {/* Left heart lobe (teal) */}
      <path
        d="M 32 52 C 32 52 14 40 14 26 C 14 20 18 16 23 16 C 27.5 16 31 19.5 32 23"
        fill="#00A6A6"
        stroke="none"
      />

      {/* Right heart lobe as capsule (blue/purple) */}
      <path
        d="M 32 23 C 33 19.5 36.5 16 41 16 C 46 16 50 20 50 26 C 50 40 32 52 32 52 L 32 23 Z"
        fill="#52489C"
        stroke="none"
      />

      {/* Capsule outline on right side */}
      <g>
        {/* Top rounded cap */}
        <path
          d="M 41 17 C 45 17 48 20 48 24 L 48 33 L 36 33 L 36 24 C 36 20 39 17 41 17 Z"
          fill="none"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        {/* Bottom rounded cap */}
        <path
          d="M 36 33 L 48 33 L 48 42 C 48 46 45 49 41 49 C 37 49 36 46 36 42 Z"
          fill="none"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        {/* Checkmark inside capsule */}
        <path
          d="M 38 32 L 41 36 L 46 29"
          stroke="#00A6A6"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>

      {/* Subtle heart outline to unify the shape */}
      <path
        d="M 23 16 C 18 16 14 20 14 26 C 14 40 32 52 32 52 C 32 52 50 40 50 26 C 50 20 46 16 41 16 C 36.5 16 33 19.5 32 23 C 31 19.5 27.5 16 23 16 Z"
        fill="none"
        stroke="rgba(0, 0, 0, 0.1)"
        strokeWidth="1.5"
      />
    </svg>
  );
}
