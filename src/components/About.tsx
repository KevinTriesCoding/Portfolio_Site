import React from 'react'
import { Link } from 'react-router-dom'
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

            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">
                My name is Kevin Moye
              </p>
              <p>
                I'm a healthcare operations manager who leads, innovates, and works tirelessly to deliver the best experience possible to our clientele. It is my belief that the biggest edge that can be brought to the healthcare space is the implementation of emerging technologies to create more efficient processes.
              </p>
            </div>

            <div className="pt-4">
              <Link
                to="/about"
                className="inline-flex items-center justify-center rounded-sm font-bold transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 uppercase tracking-wider h-14 px-8 text-base bg-[#3b2d68] text-white hover:bg-[#2a1f4d] focus:ring-[#3b2d68]"
              >
                Learn More About Me
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
