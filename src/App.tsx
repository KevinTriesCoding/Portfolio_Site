import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LandingPage } from './pages/LandingPage'
import { AboutPage } from './pages/AboutPage'
import { CaseStudyPage } from './pages/CaseStudyPage'

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/project/case-study" element={<CaseStudyPage />} />
      </Routes>
    </BrowserRouter>
  )
}
