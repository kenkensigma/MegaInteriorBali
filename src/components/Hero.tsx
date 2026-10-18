import React, { useState } from 'react'
import { siteConfig } from '../data/contentConfig'
import { ArrowRight } from 'lucide-react'
import './Hero.css'

interface HeroProps {
  onSelectCategory?: (category: string) => void
}

export const Hero: React.FC<HeroProps> = ({ onSelectCategory }) => {
  const [activeCategory, setActiveCategory] = useState<string>('RESIDENTIAL')
  const { hero } = siteConfig

  const handleCategoryClick = (cat: string) => {
    setActiveCategory(cat)
    if (onSelectCategory) {
      onSelectCategory(cat)
    }
    const projectsEl = document.getElementById('projects')
    if (projectsEl) {
      projectsEl.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="hero-section" aria-label="Hero Architectural Presentation">
      <div className="hero-grid-container">
        
        {/* LEFT COLUMN: Headline + Sub-info + Staircase Photo */}
        <div className="hero-left-col">
          {/* Main Giant Headline matching 100% reference */}
          <div className="hero-headline-wrap">
            <h1 className="hero-headline">
              <span className="headline-line headline-roman">{hero.headlineWord1}</span>
              <span className="headline-line headline-italic">{hero.headlineWord2}</span>
            </h1>
          </div>

          {/* Lower Left Two-Column Content: Text & Staircase Image */}
          <div className="hero-lower-row">
            {/* Left Sub-column: Index, Bio, Link, Est */}
            <div className="hero-bio-subcol">
              <div className="hero-index-mark">
                <span className="dash">—</span>
                <span className="num">{hero.indexNumber}</span>
              </div>

              <p className="hero-bio-text">
                {hero.description}
              </p>

              <div className="hero-cta-wrap">
                <a href="#projects" className="hero-view-link">
                  <span>{hero.viewProjectsLabel}</span>
                  <ArrowRight size={14} className="arrow-icon" />
                </a>
              </div>

              <div className="hero-meta-footer">
                <span className="est-text">{hero.estLabel}</span>
                <span className="divider">|</span>
                <span className="loc-text">{hero.locationLabel}</span>
              </div>
            </div>

            {/* Right Sub-column: Vertical Curved Staircase Photo */}
            <div className="hero-staircase-subcol">
              <div className="staircase-img-frame">
                <img
                  src={hero.images.staircaseHero}
                  alt={hero.images.staircaseHeroAlt}
                  className="staircase-img"
                  loading="eager"
                  fetchPriority="high"
                />
              </div>
            </div>
          </div>

          {/* Plus Dots Matrix (positioned lower middle) */}
          <div className="hero-plus-grid" aria-hidden="true">
            {Array.from({ length: 35 }).map((_, i) => (
              <span key={i}>+</span>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN: Featured Villa Photo + Categories + Monogram */}
        <div className="hero-right-col">
          {/* Main Villa Feature Image */}
          <div className="hero-main-img-wrap">
            <img
              src={hero.images.mainHero}
              alt={hero.images.mainHeroAlt}
              className="hero-main-img"
              loading="eager"
              fetchPriority="high"
            />
          </div>

          {/* Lower Row under Main Image: Categories & Monogram */}
          <div className="hero-bottom-detail-row">
            {/* Category Selector with active dash indicator */}
            <div className="hero-categories-list" role="tablist" aria-label="Project Categories">
              {hero.categories.map((cat) => {
                const isActive = activeCategory === cat
                return (
                  <button
                    key={cat}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    className={`category-item-btn ${isActive ? 'is-active' : ''}`}
                    onClick={() => handleCategoryClick(cat)}
                  >
                    <span className="cat-indicator">{isActive ? '—' : ''}</span>
                    <span className="cat-name">{cat}</span>
                  </button>
                )
              })}
            </div>

            {/* Circular Serif Monogram Badge (M.) */}
            <div className="hero-monogram-wrap">
              <a href="#about" className="hero-circle-monogram" aria-label="Mega Interior Bali Identity">
                <span>{siteConfig.brand.monogram}</span>
              </a>
            </div>
          </div>
        </div>

        {/* FAR RIGHT VERTICAL TAGLINE: SPACES / THAT / ENDURE */}
        <aside className="hero-vertical-edge" aria-hidden="true">
          <span className="vertical-tagline-text">{hero.verticalTagline}</span>
        </aside>

      </div>
    </section>
  )
}
