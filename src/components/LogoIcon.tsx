import svgPaths from '@/imports/Logo/svg-yq89ht9eph'

export default function LogoIcon({ size = 48 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 216 216"
      fill="none"
      style={{ display: 'block' }}
    >
      <rect fill="#ffffff" height="216" rx="40" width="216" />
      <path
        clipRule="evenodd"
        d={svgPaths.p2ab4d700}
        fill="url(#logo-gradient)"
        fillRule="evenodd"
      />
      <defs>
        <linearGradient gradientUnits="userSpaceOnUse" id="logo-gradient" x1="108.066" x2="108.066" y1="45" y2="167">
          <stop stopColor="#31B98B" />
          <stop offset="1" stopColor="#016742" />
        </linearGradient>
      </defs>
    </svg>
  )
}
