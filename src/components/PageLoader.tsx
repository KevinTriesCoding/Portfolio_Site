import React, { useEffect, useState } from 'react'

export function PageLoader() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // Hide loader after page loads
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 1500) // Show for 1.5 seconds

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 bg-white z-[9999] flex items-center justify-center">
      <div className="relative">
        {/* Cute KM bubble */}
        <div className="w-24 h-24 rounded-full bg-[#3b2d68] flex items-center justify-center text-white font-bold text-2xl shadow-lg animate-bounce">
          KM.
        </div>
        {/* Optional: floating dots or sparkles */}
        <div className="absolute -top-2 -right-2 w-3 h-3 bg-[#ff4d8d] rounded-full animate-ping"></div>
        <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-[#ff4d8d] rounded-full animate-pulse"></div>
      </div>
    </div>
  )
}
