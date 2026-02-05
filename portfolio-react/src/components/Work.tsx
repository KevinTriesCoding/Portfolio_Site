import React from 'react';
import { ArrowRight } from 'lucide-react';
interface ProjectProps {
  title: string;
  description: string;
  image: string;
  logo?: string;
  isReversed?: boolean;
}
function Project({
  title,
  description,
  image,
  logo,
  isReversed = false
}: ProjectProps) {
  return (
    <div
      className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-16 items-center py-16`}>

      {/* Text Content */}
      <div className="flex-1 space-y-6 text-center md:text-left">
        {logo &&
        <div className="flex justify-center md:justify-start mb-4">
            <img
            src={logo}
            alt={`${title} logo`}
            className="h-12 object-contain" />

          </div>
        }
        <h3 className="text-4xl font-bold text-gray-900">{title}</h3>
        <p className="text-xl text-gray-500 leading-relaxed max-w-lg mx-auto md:mx-0">
          {description}
        </p>
        <div>
          <a
            href="#"
            className="inline-flex items-center text-[#ff4d8d] font-bold uppercase tracking-widest border-b-2 border-[#ff4d8d] pb-1 hover:text-[#e63e7b] hover:border-[#e63e7b] transition-colors">

            View Case Study <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>

      {/* Image Content */}
      <div className="flex-1 w-full">
        <div className="relative group">
          <div className="absolute inset-0 bg-[#3b2d68] transform translate-x-3 translate-y-3 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <img
            src={image}
            alt={title}
            className="relative w-full rounded-sm shadow-xl transform group-hover:-translate-y-1 group-hover:-translate-x-1 transition-transform duration-300" />

        </div>
      </div>
    </div>);

}
export function Work() {
  return (
    <section id="work" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20 relative">
          <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 w-px h-16 bg-gray-300"></div>
          <p className="text-gray-500 text-lg italic mb-2">
            Selected Projects
          </p>
          <h2 className="text-6xl md:text-7xl font-bold text-gray-900 uppercase tracking-tight">
            Recent Work
          </h2>
        </div>

        {/* Projects List */}
        <div className="space-y-12">
          <Project
            title="The ABA Project"
            description="Building tools and resources that make a meaningful difference in the lives of families navigating ABA therapy."
            image="https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            isReversed={false} />


          <Project
            title="Work Flow Automations"
            description="Designing automation systems that eliminate repetitive tasks and give teams back their time."
            image="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            isReversed={true} />


          <Project
            title="Billable Utilization"
            description="Strategic initiatives focused on maximizing utilization and optimizing operational processes."
            image="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            isReversed={false} />

        </div>

        <div className="text-center mt-16">
          <button className="px-8 py-3 border-2 border-[#ff4d8d] text-[#ff4d8d] font-bold uppercase tracking-widest hover:bg-[#ff4d8d] hover:text-white transition-colors">
            View More
          </button>
        </div>
      </div>
    </section>);

}
