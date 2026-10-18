import React from 'react'
import { siteConfig } from '../data/contentConfig'
import { ArrowUpRight, Check } from 'lucide-react'
import './ServicesSection.css'

export const ServicesSection: React.FC = () => {
  const { services } = siteConfig

  return (
    <section id="services" className="services-section" aria-label="Layanan Konstruksi dan Interior">
      <div className="container">
        <div className="section-header-block">
          <span className="eyebrow">LAYANAN UTAMA — 03</span>
          <h2 className="section-title">Konstruksi & Interior Terpadu.</h2>
          <p className="section-desc">
            Menyediakan dua ranah keahlian utama untuk mewujudkan bangunan dan ruang interior dengan standar presisi tinggi di Bali.
          </p>
        </div>

        <div className="services-editorial-list">
          {services.map((service) => (
            <article key={service.id} className="service-editorial-row">
              <div className="service-meta-col">
                <span className="service-number">{service.number}</span>
                <span className="service-cat-badge">{service.category}</span>
              </div>

              <div className="service-main-col">
                <div className="service-heading-group">
                  <h3 className="service-title">{service.title}</h3>
                  <span className="service-subtitle">{service.subtitle}</span>
                </div>

                <p className="service-description">{service.description}</p>

                <div className="service-capabilities-grid">
                  {service.capabilities.map((cap, i) => (
                    <div key={i} className="capability-item">
                      <Check size={14} className="capability-check" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>

                {service.note && (
                  <p className="service-disclaimer-note">
                    {service.note}
                  </p>
                )}

                <div className="service-cta-row">
                  <a
                    href={`https://wa.me/${siteConfig.brand.phoneRaw}?text=Halo%20MEGA%20INTERIOR%20BALI%2C%20saya%20tertarik%20dengan%20layanan%20${encodeURIComponent(service.title)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="service-inquire-link"
                  >
                    <span>KONSULTASIKAN PROYEK INI</span>
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
