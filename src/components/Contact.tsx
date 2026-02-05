import React from 'react'
import { Linkedin, Globe, Heart, Coffee, Trophy } from 'lucide-react'
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

          {/* Squiggle Arrow */}
          <div className="flex justify-center mt-4">
            <svg
              width="60"
              height="60"
              viewBox="0 0 60 60"
              className="text-[#4ade80] transform rotate-12"
            >
              <path
                d="M10 10 Q 30 5, 30 30 T 50 50"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
                markerEnd="url(#arrowhead)"
              />
              <defs>
                <marker
                  id="arrowhead"
                  markerWidth="10"
                  markerHeight="7"
                  refX="0"
                  refY="3.5"
                  orient="auto"
                >
                  <polygon points="0 0, 10 3.5, 0 7" fill="currentColor" />
                </marker>
              </defs>
            </svg>
          </div>
        </div>

        {/* Fun Facts Grid */}
        <div className="mb-24">
          <h3 className="text-3xl font-bold text-gray-400 uppercase mb-12 text-center md:text-left">
            Other Awesomeness
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Fact 1 */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Trophy className="w-8 h-8 text-[#ff4d8d]" />
                <h4 className="text-xl font-bold text-gray-900">
                  Culture is a Team Sport
                </h4>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Morale booster at Microsoft, head of culture at Kater—I've
                always believed great teams don't just happen. After all, even
                The Beatles needed more than just Ringo.
              </p>
            </div>

            {/* Fact 2 */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Globe className="w-8 h-8 text-[#2d58db]" />
                <h4 className="text-xl font-bold text-gray-900">
                  Moved Countries—With a Toddler and Six Pets
                </h4>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Relocated from Canada to Ireland with my family in tow—an
                adventure in logistics, adaptability, and keeping everyone on
                board (literally).
              </p>
            </div>

            {/* Fact 3 */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Heart className="w-8 h-8 text-[#ff4d8d]" />
                <h4 className="text-xl font-bold text-gray-900">
                  Animal Lover, Always
                </h4>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Life's never dull with two golden retrievers (Millie & Marty),
                two rescued bunnies (Optimus & Tulip), and two mischievous cats
                (Gyoza & Miso). My Zoom background may look like a chaotic
                pet-friendly farmhouse—but honestly, I wouldn't have it any
                other way.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mb-24">
          <div className="flex justify-center gap-8 mb-8 text-[#ff4d8d]">
            <Coffee className="w-8 h-8" />
            <Trophy className="w-8 h-8" />
          </div>
          <Button
            variant="outline"
            size="lg"
            className="px-12 py-4 text-xl border-4 hover:bg-[#ff4d8d] hover:text-white"
          >
            HIRE ME
          </Button>
        </div>

        {/* Footer */}
        <footer className="border-t border-gray-200 pt-12 pb-8 relative">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-full bg-[#3b2d68] flex items-center justify-center text-white font-bold">
                SL.
              </div>
            </div>

            <div className="text-center">
              <a
                href="mailto:sherlaine.lau@gmail.com"
                className="text-[#00a651] font-bold text-lg hover:underline"
              >
                sherlaine.lau@gmail.com
              </a>
            </div>

            <div className="flex gap-4">
              <a
                href="#"
                className="bg-[#0077b5] text-white p-2 rounded-sm hover:opacity-90 transition-opacity"
              >
                <Linkedin size={20} />
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
