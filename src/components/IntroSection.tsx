import React from 'react'
import { siteConfig } from '../data/contentConfig'
import './IntroSection.css'

export const IntroSection: React.FC = () => {
  const { intro } = siteConfig

  return (
    <section className="intro-section" aria-label="Pengenalan Studio">
      <div className="container">
        <hr className="editorial-rule" />

        <div className="intro-grid">
          {/* Eyebrow & Meta Column */}
          <div className="intro-meta-col">
            <span className="eyebrow">{intro.tag}</span>
            <div className="intro-meta-list">
              {intro.meta.map((item, idx) => (
                <div key={idx} className="intro-meta-item">
                  <span className="meta-label">{item.label}</span>
                  <span className="meta-val">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Statement & Body Column */}
          <div className="intro-content-col">
            <h2 className="intro-statement">
              {intro.statement}
            </h2>
            <div className="intro-subtext-wrap">
              <p className="intro-subtext">
                {intro.subtext}
              </p>
              <div className="intro-badge-row">
                <span className="location-pill">Kabupaten Buleleng, Bali</span>
                <span className="scope-pill">Konstruksi & Interior</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
