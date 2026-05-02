export default function EmptyStateIllustration() {
  return (
    <svg
      width="200"
      height="200"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="100" cy="100" r="80" fill="#E8E9ED" opacity="0.5" />

      <path
        d="M100 60C77.909 60 60 77.909 60 100C60 122.091 77.909 140 100 140C122.091 140 140 122.091 140 100C140 77.909 122.091 60 100 60Z"
        fill="#52489C"
        opacity="0.1"
      />

      <rect
        x="70"
        y="85"
        width="60"
        height="30"
        rx="15"
        fill="white"
        stroke="#52489C"
        strokeWidth="2"
      />

      <circle cx="85" cy="100" r="8" fill="#00A6A6" opacity="0.3" />
      <circle cx="115" cy="100" r="8" fill="#00A6A6" opacity="0.3" />

      <path
        d="M80 125C80 125 90 135 100 135C110 135 120 125 120 125"
        stroke="#52489C"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.3"
      />
    </svg>
  );
}
