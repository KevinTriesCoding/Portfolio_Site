import React, { useEffect, useRef, useState } from 'react'
import { Ear, Database, Wrench, Users } from 'lucide-react'

function ProcessStep({
  children,
  direction,
}: {
  children: React.ReactNode
  direction: 'north' | 'east' | 'south' | 'west'
}) {
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

  const directionClass =
    direction === 'north'
      ? 'animate-whip-north'
      : direction === 'east'
      ? 'animate-whip-east'
      : direction === 'south'
      ? 'animate-whip-south'
      : 'animate-whip-west'

  return (
    <div ref={ref} className={isVisible ? directionClass : ''}>
      {children}
    </div>
  )
}

export function Process() {
  return (
    <section className="relative bg-[#3b2d68] text-white pt-32 pb-40 overflow-hidden">
      {/* Angled Top Divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-[calc(100%+1.3px)] h-[60px]"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            className="fill-white"
          ></path>
        </svg>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 opacity-20">
        <svg width="100" height="100" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="currentColor"
            strokeWidth="8"
            fill="none"
          />
        </svg>
      </div>
      <div className="absolute bottom-20 left-10 opacity-20">
        <svg width="150" height="20" viewBox="0 0 150 20">
          <path
            d="M0 10 Q 37.5 20 75 10 T 150 10"
            stroke="currentColor"
            strokeWidth="4"
            fill="none"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <p className="text-lg italic opacity-80 mb-2">
            Gemini said
          </p>
          <h2 className="text-6xl font-bold uppercase tracking-tight">
            Process
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Central Image */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full overflow-hidden border-8 border-white/10 hidden md:block z-0">
            <img
              src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Brainstorming"
              className="w-full h-full object-cover opacity-50"
            />
          </div>

          {/* Process Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-32 gap-y-16 relative z-10">
            {/* Step 1 - From North */}
            <ProcessStep direction="north">
              <div className="text-center md:text-right">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#ff4d8d] mb-4 md:ml-auto">
                  <Ear className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">1. HEAR THE HUMAN STORY</h3>
                <p className="opacity-80">
                  "I start by listening to the people, not just the problem. Whether it's de-escalating a salary dispute or consoling a nurse after a patient passes, I build the trust required to get to the truth. I identify the emotional friction before I touch the operational friction."
                </p>
              </div>
            </ProcessStep>

            {/* Step 2 - From East */}
            <ProcessStep direction="east">
              <div className="text-center md:text-left">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#ff4d8d] mb-4 md:mr-auto">
                  <Database className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">2. INTERROGATE THE DATA</h3>
                <p className="opacity-80">
                  "Then, I validate the feelings with facts. I switch gears to 'Financial Detective,' using Python and SQL to audit the $480M portfolio or payroll logs. I let the numbers tell me why the burnout or the revenue leak is happening."
                </p>
              </div>
            </ProcessStep>

            {/* Step 3 - From South */}
            <ProcessStep direction="south">
              <div className="text-center md:text-right">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#ff4d8d] mb-4 md:ml-auto">
                  <Wrench className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">3. BUILD FOR RELIEF</h3>
                <p className="opacity-80">
                  "I design systems that reduce cognitive load. I don't just 'optimize workflows'; I build automated tools that give nurses time back to breathe. If a process adds stress rather than removing it, it's not a solution—it's just more paperwork."
                </p>
              </div>
            </ProcessStep>

            {/* Step 4 - From West */}
            <ProcessStep direction="west">
              <div className="text-center md:text-left">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#ff4d8d] mb-4 md:mr-auto">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">4. LEAD THROUGH CHANGE</h3>
                <p className="opacity-80">
                  "Delivery is a conversation, not an email. I manage the human impact of the change—handling the difficult compliance discussions and salary negotiations required to make the new standard stick. I ensure the team feels supported, not just 'managed,' through the transition."
                </p>
              </div>
            </ProcessStep>
          </div>
        </div>
      </div>
    </section>
  )
}
