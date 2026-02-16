import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
interface ProjectProps {
  title: string
  description: string
  image: string
  logo?: string
  isReversed?: boolean
  to?: string
  flyDirection?: 'left' | 'right'
}
function Project({
  title,
  description,
  image,
  logo,
  isReversed = false,
  to = '/project/case-study',
  flyDirection = 'right',
}: ProjectProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  return (
    <div
      ref={ref}
      className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-16 items-center py-16`}
    >
      {/* Text Content */}
      <div className="flex-1 space-y-6 text-center md:text-left">
        {logo && (
          <div className="flex justify-center md:justify-start mb-4">
            <img
              src={logo}
              alt={`${title} logo`}
              className="h-12 object-contain"
            />
          </div>
        )}
        <h3 className="text-4xl font-bold text-gray-900">{title}</h3>
        <p className="text-xl text-gray-500 leading-relaxed max-w-lg mx-auto md:mx-0">
          {description}
        </p>
        <div>
          <Link
            to={to}
            className="inline-flex items-center text-[#ff4d8d] font-bold uppercase tracking-widest border-b-2 border-[#ff4d8d] pb-1 hover:text-[#e63e7b] hover:border-[#e63e7b] transition-colors"
          >
            Take a closer look <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* Image Content */}
      <div className="flex-1 w-full">
        <div className="relative group">
          <div className="absolute inset-0 bg-[#3b2d68] transform translate-x-3 translate-y-3 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <img
            src={image}
            alt={title}
            className={`relative w-full rounded-sm shadow-xl transform group-hover:-translate-y-1 group-hover:-translate-x-1 transition-transform duration-300 ${
              isVisible
                ? flyDirection === 'left'
                  ? 'animate-fly-in-left'
                  : 'animate-fly-in-right'
                : ''
            }`}
          />
        </div>
      </div>
    </div>
  )
}
export function Work() {
  return (
    <section id="work" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20 relative">
          <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 w-px h-16 bg-gray-300"></div>
          <p className="text-gray-500 text-lg italic mb-2">
            Where all my blood, sweat, & tears go to
          </p>
          <h2 className="text-6xl md:text-7xl font-bold text-gray-900 uppercase tracking-tight">
            My Work
          </h2>
        </div>

        {/* Projects List — Aveanna & Action Behavior first, The ABA Project last */}
        <div className="space-y-12">
          <Project
            title="Aveanna Healthcare"
            description="Created workflow automations to increase task efficiency and quality assurance for rote tasks."
            image="/assets/Aveanna_logo.png"
            isReversed={false}
            to="/project/aveanna"
            flyDirection="right"
          />

          <Project
            title="Action Behavior Centers"
            description="Built performance dashboard for internal team to track KPIs."
            image="/assets/Action_behavior.png"
            isReversed={true}
            to="/project/action-behavior"
            flyDirection="left"
          />

          <Project
            title="The ABA Project"
            description="My personal project where I provided digital marketing services to ABA companies."
            image="/assets/TAP_homepage.jpg"
            isReversed={false}
            flyDirection="right"
          />
        </div>

        <div className="text-center mt-16">
          <button className="px-8 py-3 border-2 border-[#ff4d8d] text-[#ff4d8d] font-bold uppercase tracking-widest hover:bg-[#ff4d8d] hover:text-white transition-colors">
            View More
          </button>
        </div>
      </div>
    </section>
  )
}
