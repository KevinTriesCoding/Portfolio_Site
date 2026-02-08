import React from 'react'
interface SectionProps {
  children: React.ReactNode
  className?: string
  hasPattern?: boolean
  id?: string
}
export function Section({
  children,
  className = '',
  hasPattern = false,
  id,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`relative py-16 md:py-24 px-6 md:px-12 overflow-hidden ${className}`}
    >
      {hasPattern && (
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(#000 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />
      )}
      <div className="max-w-7xl mx-auto relative z-10">{children}</div>
    </section>
  )
}
