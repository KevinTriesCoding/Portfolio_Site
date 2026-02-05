import React from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Work } from '../components/Work';
import { Process } from '../components/Process';
import { Contact } from '../components/Contact';
export function LandingPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-[#ff4d8d] selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Work />
        <Process />
        <Contact />
      </main>
    </div>);

}
