import React from 'react'
import { Button } from './ui/Button'
export function About() {
  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="relative">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-sm shadow-lg">
              <img
                src="/my_photo.jpg"
                alt="Kevin Moye"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-6">
            <p className="text-gray-500 font-medium text-lg italic">
              Quick get to know me
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 uppercase leading-none flex flex-wrap items-center gap-3">
              Lorem ipsum
            </h2>

            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">
                My name is Kevin Moye
              </p>
              <p>
                I'm an operations and project manager who leads, iterates, and ships—focused on clarity, efficiency, and getting things done.
              </p>
            </div>

            <div className="pt-4">
              <Button variant="primary" size="lg">
                Learn More About Me
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
