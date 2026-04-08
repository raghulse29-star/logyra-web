export default function LogoIcon({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="28" height="28" rx="7" fill="url(#logoGrad)" />
      <path
        d="M7 20.5V9l5.5 5.5L17 8l4 12.5"
        stroke="#0a0f0a"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="17" cy="8" r="2" fill="#0a0f0a" />
      <defs>
        <linearGradient id="logoGrad" x1="0" y1="0" x2="28" y2="28" gradientUnits="userSpaceOnUse">
          <stop stopColor="#4ade80" />
          <stop offset="1" stopColor="#84cc16" />
        </linearGradient>
      </defs>
    </svg>
  );
}
