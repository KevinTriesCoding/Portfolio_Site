import React from 'react';
import { FileText, Search, Lightbulb, Rocket } from 'lucide-react';
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
          className="relative block w-[calc(100%+1.3px)] h-[60px]">

          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            className="fill-white">
          </path>
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
            fill="none" />

        </svg>
      </div>
      <div className="absolute bottom-20 left-10 opacity-20">
        <svg width="150" height="20" viewBox="0 0 150 20">
          <path
            d="M0 10 Q 37.5 20 75 10 T 150 10"
            stroke="currentColor"
            strokeWidth="4"
            fill="none" />

        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <p className="text-lg italic opacity-80 mb-2">
            Methodology
          </p>
          <h2 className="text-6xl font-bold uppercase tracking-tight">
            How I Work
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Central Image */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full overflow-hidden border-8 border-white/10 hidden md:block z-0">
            <img
              src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Process"
              className="w-full h-full object-cover opacity-50" />

          </div>

          {/* Process Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-32 gap-y-16 relative z-10">
            {/* Step 1 */}
            <div className="text-center md:text-right">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#ff4d8d] mb-4 md:ml-auto">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">1. DISCOVER</h3>
              <p className="opacity-80">
                Deep dive into the problem space to understand stakeholders and constraints.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center md:text-left">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#ff4d8d] mb-4 md:mr-auto">
                <Search className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">2. RESEARCH</h3>
              <p className="opacity-80">
                Explore the landscape. What works? What can we learn from others?
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center md:text-right">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#ff4d8d] mb-4 md:ml-auto">
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">
                3. BUILD
              </h3>
              <p className="opacity-80">
                Test early, learn fast, and refine continuously through iteration.
              </p>
            </div>

            {/* Step 4 */}
            <div className="text-center md:text-left">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#ff4d8d] mb-4 md:mr-auto">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">4. LAUNCH</h3>
              <p className="opacity-80">
                Ship it, then track what matters. Real impact is measured in outcomes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>);

}
