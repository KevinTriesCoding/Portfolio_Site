import React from 'react';
import { Button } from './ui/Button';
export function About() {
  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="relative">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-sm shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Kevin Moye"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />

            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-6">
            <p className="text-gray-500 font-medium text-lg italic">
              I turn complexity into clarity.
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 uppercase leading-none flex flex-wrap items-center gap-3">
              Introduction
            </h2>

            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">
                Hi! I'm Kevin
              </p>
              <p>
                I thrive at the intersection of strategy and execution. Whether I'm building automated workflows or leading cross-functional teams, I bring the same energy: curiosity, care, and a relentless focus on outcomes.
              </p>
            </div>

            <div className="pt-4">
              <Button variant="primary" size="lg">
                More about me
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>);

}
