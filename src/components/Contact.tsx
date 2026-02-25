import React from 'react'
import { Linkedin, Github } from 'lucide-react'
import { Button } from './ui/Button'
export function Contact() {
  return (
    <section id="contact" className="relative bg-white pt-32 pb-12">
      {/* Angled Top Divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-[calc(100%+1.3px)] h-[80px]"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            className="fill-[#3b2d68]"
          ></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-24">
          <p className="text-gray-500 italic mb-4">
            Well you made it to the bottom of the page ?
          </p>
          <h2 className="text-5xl md:text-7xl font-bold text-gray-900 uppercase leading-none mb-4">
            & Now you want
            <br />
            to click hire me
          </h2>

          {/* Elegant down arrow */}
          <div className="flex justify-center mt-6">
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              className="text-[#3b2d68] animate-bounce"
            >
              <path
                d="M12 5v14M5 12l7 7 7-7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* CTA Button */}
          <div className="mt-8">
            <Button
              variant="outline"
              size="lg"
              className="px-12 py-4 text-xl border-4 hover:bg-[#ff4d8d] hover:text-white"
            >
              HIRE ME
            </Button>
          </div>
        </div>

        {/* Other Tidbits */}
        <div className="mb-24">
          <h3 className="text-3xl font-bold text-gray-400 uppercase mb-12 text-center md:text-left">
            Other Tidbits
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Fitness */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-3xl" aria-hidden>🏃</span>
                <h4 className="text-xl font-bold text-gray-900">
                  Fitness fanatic
                </h4>
              </div>
              <p className="text-gray-600 leading-relaxed">
                When not working, you can likely catch me at my gym or on a run. I've always found exercise to be my go-to way to decompress after a chaotic day at work.
              </p>
            </div>

            {/* Bookworm */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-3xl" aria-hidden>🤓</span>
                <h4 className="text-xl font-bold text-gray-900">
                  Bookworm
                </h4>
              </div>
              <p className="text-gray-600 leading-relaxed">
                This may come as a surprise but… I'm a big ol' nerd! I love reading and currently have a fixation on the Classics of Greece and Rome.
              </p>
            </div>

            {/* Sports */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-3xl" aria-hidden>🏀</span>
                <h4 className="text-xl font-bold text-gray-900">
                  Sports are life
                </h4>
              </div>
              <p className="text-gray-600 leading-relaxed">
                BEWARE: Will talk your head off about the latest NBA, NFL, and MMA news. These are all a part of my daily nutrition.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="border-t border-gray-200 pt-12 pb-8 relative">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-full bg-[#3b2d68] flex items-center justify-center text-white font-bold">
                KM.
              </div>
            </div>

            <div className="text-center">
              <a
                href="mailto:kevcmoye98@gmail.com"
                className="text-[#00a651] font-bold text-lg hover:underline"
              >
                kevcmoye98@gmail.com
              </a>
            </div>

            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/kevin-moye-410210216/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0077b5] text-white p-2 rounded-sm hover:opacity-90 transition-opacity"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/KevinTriesCoding"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#333] text-white p-2 rounded-sm hover:opacity-90 transition-opacity"
              >
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Decorative shapes */}
          <div className="absolute left-0 bottom-0 w-32 h-32 overflow-hidden">
            <div className="w-48 h-48 bg-[#ff4d8d] rounded-full -translate-x-1/2 translate-y-1/2"></div>
          </div>
          <div className="absolute right-0 bottom-20 w-20 h-4">
            <svg width="80" height="20" viewBox="0 0 80 20">
              <path
                d="M0 10 L 10 0 L 20 10 L 30 0 L 40 10 L 50 0 L 60 10 L 70 0 L 80 10"
                stroke="#ff4d8d"
                strokeWidth="4"
                fill="none"
              />
            </svg>
          </div>
        </footer>
      </div>
    </section>
  )
}
