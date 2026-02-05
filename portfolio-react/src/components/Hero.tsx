import React from 'react';
export function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#f8f9fa] pt-20 flex items-center">
      {/* Background Elements */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full bg-[#3b2d68] hidden lg:block"
        style={{
          clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0% 100%)'
        }}>
      </div>

      {/* Pink Border Decoration */}
      <div className="absolute top-1/2 right-[15%] w-[400px] h-[400px] border-8 border-[#ff4d8d] transform -translate-y-1/2 hidden lg:block z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-block bg-[#2d58db] p-6 shadow-lg transform -rotate-1">
              <h1 className="text-4xl md:text-5xl font-bold text-white uppercase leading-tight">
                I build things that
                <br />
                matter
              </h1>
            </div>

            <div className="block"></div>

            <div className="inline-block bg-[#2d58db] p-6 shadow-lg transform rotate-1 max-w-xl">
              <h2 className="text-2xl md:text-3xl font-bold text-white uppercase leading-tight">
                Product & Project Management — a builder, problem-solver, and someone who believes the best work happens when you care deeply about the outcome
              </h2>
            </div>
          </div>

          {/* Right Content (Image) */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 z-20">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Kevin Moye"
                className="w-full h-full object-cover shadow-2xl" />

            </div>

            {/* Scribble Decoration */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 z-30 text-white opacity-80">
              <svg
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">

                <path
                  d="M10 100C40 80 80 150 120 100C160 50 180 120 190 150"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round" />

                <path
                  d="M20 120C50 100 90 170 130 120C170 70 190 140 200 170"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round" />

                <path
                  d="M30 140C60 120 100 190 140 140C180 90 200 160 210 190"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round" />

              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>);

}
