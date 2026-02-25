import React, { useRef, useState } from 'react'
import { Play, Pause, Volume2, VolumeX } from 'lucide-react'

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)

  const togglePlay = () => {
    if (!videoRef.current) return
    if (isPlaying) {
      videoRef.current.pause()
    } else {
      videoRef.current.play()
    }
    setIsPlaying(!isPlaying)
  }

  const toggleMute = () => {
    if (!videoRef.current) return
    videoRef.current.muted = !isMuted
    setIsMuted(!isMuted)
  }

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      <video
        ref={videoRef}
        src="/assets/hero_video.mp4"
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-contain md:object-cover"
      />

      <div className="absolute inset-0 bg-black/30" />

      {/* Controls */}
      <div className="absolute bottom-8 right-8 z-20 flex gap-3">
        <button
          onClick={togglePlay}
          className="w-11 h-11 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-colors"
          aria-label={isPlaying ? 'Pause video' : 'Play video'}
        >
          {isPlaying ? <Pause size={18} /> : <Play size={18} />}
        </button>
        <button
          onClick={toggleMute}
          className="w-11 h-11 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-colors"
          aria-label={isMuted ? 'Unmute video' : 'Mute video'}
        >
          {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
        </button>
      </div>
    </section>
  )
}
