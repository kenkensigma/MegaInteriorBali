import React from 'react'
import { siteConfig } from '../data/contentConfig'
import './ApproachSection.css'

export const ApproachSection: React.FC = () => {
  const { approach } = siteConfig

  return (
    <section id="approach" className="approach-section" aria-label="Alur Kerja dan Metodologi">
      <div className="container">
        <div className="approach-header">
          <span className="eyebrow">METODOLOGI — 05</span>
          <h2 className="section-title">Alur Kerja Terstruktur.</h2>
          <p className="approach-sub">
            Pendekatan bertahap yang memastikan keselarasan antara visi desain arsitektural dan realisasi pengerjaan fisik di lokasi.
          </p>
          <span className="approach-note">
            // Alur kerja provisional — konfirmasi detail operasional bersama pemilik bisnis
          </span>
        </div>

        <div className="approach-steps-grid">
          {approach.map((item) => (
            <div key={item.step} className="approach-step-card">
              <div className="step-num-wrap">
                <span className="step-num">{item.step}</span>
                <span className="step-line" />
              </div>
              <h3 className="step-title">{item.title}</h3>
              <p className="step-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
