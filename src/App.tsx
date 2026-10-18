import React, { useState } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { IntroSection } from './components/IntroSection'
import { ServicesSection } from './components/ServicesSection'
import { ProjectsSection } from './components/ProjectsSection'
import { ApproachSection } from './components/ApproachSection'
import { AboutSection } from './components/AboutSection'
import { ContactSection } from './components/ContactSection'
import { Footer } from './components/Footer'
import { siteConfig } from './data/contentConfig'
import { MessageCircle } from 'lucide-react'

export const App: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('RESIDENTIAL')

  const handleHeroSelectCategory = (cat: string) => {
    setSelectedCategory(cat)
  }

  return (
    <div className="mega-interior-app">
      {/* Editorial Navigation Header */}
      <Header />

      {/* Main Architectural Presentation */}
      <main id="main-content">
        {/* Full-Screen Hero (Exact 100% Replication of Layout) */}
        <Hero onSelectCategory={handleHeroSelectCategory} />

        {/* Editorial Statement */}
        <IntroSection />

        {/* Construction & Interior Services */}
        <ServicesSection />

        {/* Asymmetrical Project Gallery */}
        <ProjectsSection
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        {/* Structured Methodology & Process */}
        <ApproachSection />

        {/* Studio Identity & Materiality */}
        <AboutSection />

        {/* High-Contrast Closing Contact CTA */}
        <ContactSection />
      </main>

      {/* Editorial Footer */}
      <Footer />

      {/* Subtle Floating WhatsApp Inquire Button for Quick Consultation */}
      <a
        href={siteConfig.whatsapp.url}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-wa-btn"
        aria-label="Konsultasi Cepat via WhatsApp"
      >
        <MessageCircle size={20} />
        <span className="wa-btn-text">WhatsApp</span>
      </a>
    </div>
  )
}
