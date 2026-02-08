import React from 'react'
interface TimelineItem {
  period?: string
  title: string
  subtitle?: string
  description?: string
}
interface TimelineProps {
  title: string
  subtitle: string
  items: TimelineItem[]
}
export function Timeline({ title, subtitle, items }: TimelineProps) {
  return (
    <div className="w-full">
      <div className="mb-16">
        <div className="flex items-center mb-4">
          <div className="w-8 h-0.5 bg-gray-400 mr-4"></div>
          <p className="text-gray-500 font-serif italic text-lg">{subtitle}</p>
        </div>
        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight">
          {title}
        </h2>
      </div>

      <div className="space-y-12">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row border-b border-gray-100 pb-12 last:border-0"
          >
            <div className="md:w-1/4 mb-4 md:mb-0">
              {item.period && (
                <span className="font-bold text-gray-900 block text-lg">
                  {item.period}
                </span>
              )}
            </div>
            <div className="md:w-3/4">
              <h3 className="text-2xl font-bold text-gray-900 mb-1">
                {item.title}
              </h3>
              {item.subtitle && (
                <p className="text-gray-500 mb-4">{item.subtitle}</p>
              )}
              {item.description && (
                <p className="text-gray-600 leading-relaxed max-w-2xl">
                  {item.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
