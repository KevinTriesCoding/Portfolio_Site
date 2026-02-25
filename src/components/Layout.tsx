import React from 'react'
import { Link } from 'react-router-dom'
import { Linkedin, Github } from 'lucide-react'
export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-white font-sans text-gray-900">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm py-6 px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="block">
            <div className="w-12 h-12 rounded-full bg-[#483D8B] flex items-center justify-center text-white font-bold text-lg tracking-wider">
              KM.
            </div>
          </Link>
        </div>
        <nav className="hidden md:flex items-center space-x-8 text-sm font-bold tracking-widest uppercase text-gray-500">
          <Link to="/" className="hover:text-black transition-colors">
            Home
          </Link>
          <Link to="/about" className="text-[#FF6B6B]">
            About
          </Link>
          <Link to="/" className="hover:text-black transition-colors">
            Portfolio
          </Link>
        </nav>
        {/* Mobile menu placeholder */}
        <button className="md:hidden p-2" aria-label="Menu">
          <div className="w-6 h-0.5 bg-black mb-1.5"></div>
          <div className="w-6 h-0.5 bg-black mb-1.5"></div>
          <div className="w-6 h-0.5 bg-black"></div>
        </button>
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-24">{children}</main>

      {/* Footer */}
      <footer className="bg-[#001F3F] text-white py-20 px-6 md:px-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <a
              href="mailto:kevcmoye98@gmail.com"
              className="text-2xl md:text-3xl font-bold text-[#00E5FF] hover:text-white transition-colors block mb-4"
            >
              kevcmoye98@gmail.com
            </a>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="https://www.linkedin.com/in/kevin-moye-410210216/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-[#00E5FF] text-[#001F3F] rounded hover:bg-white transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/KevinTriesCoding"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-[#00E5FF] text-[#001F3F] rounded hover:bg-white transition-colors"
              >
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Decorative elements in footer */}
        <div className="absolute left-0 bottom-10 w-32 h-32 rounded-full border-[16px] border-[#FF6B6B] -translate-x-1/2 opacity-80"></div>
        <div className="absolute right-10 bottom-20">
          <svg width="60" height="20" viewBox="0 0 60 20" fill="none">
            <path
              d="M0 10 L 10 0 L 20 10 L 30 0 L 40 10 L 50 0 L 60 10"
              stroke="#FF6B6B"
              strokeWidth="4"
            />
          </svg>
        </div>
      </footer>
    </div>
  )
}
