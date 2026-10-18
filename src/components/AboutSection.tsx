import React from 'react'
import { siteConfig } from '../data/contentConfig'
import './AboutSection.css'

export const AboutSection: React.FC = () => {
  const { about, brand } = siteConfig

  return (
    <section id="about" className="about-section" aria-label="Tentang Mega Interior Bali">
      <div className="container">
        <div className="about-editorial-grid">
          
          {/* Left Column: Image & Monogram Stamp */}
          <div className="about-visual-col">
            <div className="about-image-frame">
              <img
                src={about.image}
                alt={about.imageAlt}
                className="about-image"
                loading="lazy"
              />
              <div className="about-monogram-stamp">
                <span className="stamp-letter">{brand.monogram}</span>
              </div>
            </div>

            <div className="about-location-caption">
              <span className="caption-label">STUDIO BASIS</span>
              <span className="caption-text">{brand.address}</span>
            </div>
          </div>

          {/* Right Column: Editorial Narrative */}
          <div className="about-narrative-col">
            <span className="eyebrow">{about.badge}</span>
            <h2 className="about-headline">{about.headline}</h2>

            <blockquote className="about-editorial-quote">
              <p>“{about.quote}”</p>
            </blockquote>

            <div className="about-body-paragraphs">
              {about.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            <div className="about-pillars-list">
              {about.pillars.map((pillar, i) => (
                <div key={i} className="pillar-item">
                  <span className="pillar-num">0{i + 1}</span>
                  <div className="pillar-text">
                    <h4 className="pillar-title">{pillar.label}</h4>
                    <p className="pillar-desc">{pillar.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
