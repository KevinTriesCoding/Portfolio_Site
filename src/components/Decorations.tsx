import React from 'react'
export function SquiggleArrow({ className }: { className?: string }) {
  return (
    <svg
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M10 10 C 20 5, 20 25, 30 20 C 40 15, 40 35, 50 30 L 45 45 L 55 35"
        stroke="#FF6B6B"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
export function WavyLine({ className }: { className?: string }) {
  return (
    <svg
      width="100"
      height="20"
      viewBox="0 0 100 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M0 10 Q 12.5 0, 25 10 T 50 10 T 75 10 T 100 10"
        stroke="#CED4DA"
        strokeWidth="4"
        strokeLinecap="round"
        className="stroke-current"
      />
    </svg>
  )
}
export function ZigZag({ className }: { className?: string }) {
  return (
    <svg
      width="80"
      height="20"
      viewBox="0 0 80 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M0 10 L 10 0 L 20 10 L 30 0 L 40 10 L 50 0 L 60 10 L 70 0 L 80 10"
        stroke="#FF6B6B"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
export function CircleOutline({ className }: { className?: string }) {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="20" cy="20" r="16" stroke="#FF6B6B" strokeWidth="4" />
    </svg>
  )
}
