import React from 'react'

type IconComponent = React.ComponentType<{
  size?: number
  className?: string
  strokeWidth?: number
}>

interface Skill {
  icon: IconComponent
  title: string
  description: string
  color: string
}
interface SkillGridProps {
  skills: Skill[]
}
export function SkillGrid({ skills }: SkillGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
      {skills.map((skill, index) => (
        <div key={index} className="flex flex-col items-start">
          <div className={`mb-6 p-3 rounded-lg ${skill.color}`}>
            <skill.icon size={32} className="text-gray-800" strokeWidth={1.5} />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            {skill.title}
          </h3>
          <p className="text-gray-500 leading-relaxed text-sm">
            {skill.description}
          </p>
        </div>
      ))}
    </div>
  )
}
