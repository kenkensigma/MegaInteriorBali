import React, { useState } from 'react'
import { siteConfig, ProjectItem } from '../data/contentConfig'
import { ArrowUpRight, X, AlertCircle } from 'lucide-react'
import './ProjectsSection.css'

interface ProjectsSectionProps {
  selectedCategory?: string
  onCategoryChange?: (category: string) => void
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  selectedCategory = 'ALL',
  onCategoryChange
}) => {
  const [filter, setFilter] = useState<string>(selectedCategory)
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null)
  const { projects } = siteConfig

  const categories = ['ALL', 'RESIDENTIAL', 'INTERIOR', 'HOSPITALITY', 'COMMERCIAL']

  const handleFilterChange = (cat: string) => {
    setFilter(cat)
    if (onCategoryChange) {
      onCategoryChange(cat)
    }
  }

  const filteredProjects = filter === 'ALL'
    ? projects
    : projects.filter(p => p.category.toUpperCase() === filter.toUpperCase())

  return (
    <section id="projects" className="projects-section" aria-label="Galeri Proyek Terpilih">
      <div className="container">
        {/* Section Header with Category Tabs */}
        <div className="projects-header-row">
          <div className="projects-title-col">
            <span className="eyebrow">STUDI RUANG & ARSITEKTUR — 04</span>
            <h2 className="section-title">Galeri Proyek Referensi.</h2>
            <div className="placeholder-alert-badge" role="note">
              <AlertCircle size={15} />
              <span>
                Visual Placeholder: Foto dan rincian di bawah merupakan referensi gaya visual editorial. Hubungi kami untuk dokumentasi portofolio fisik terverifikasi.
              </span>
            </div>
          </div>

          {/* Filter Pills */}
          <div className="projects-filter-bar" role="tablist">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={filter === cat}
                className={`filter-pill-btn ${filter === cat ? 'is-active' : ''}`}
                onClick={() => handleFilterChange(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetric Gallery Grid */}
        <div className="projects-asymmetric-grid">
          {filteredProjects.map((project, idx) => {
            // Apply varied column spans for dynamic editorial rhythm
            const isWide = idx === 0 || idx === 3
            return (
              <article
                key={project.id}
                className={`project-card ${isWide ? 'is-wide' : 'is-tall'}`}
                onClick={() => setActiveModalProject(project)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    setActiveModalProject(project)
                  }
                }}
              >
                <div className="project-img-frame" style={{ aspectRatio: project.aspectRatio }}>
                  <img
                    src={project.image}
                    alt={`${project.title} - ${project.scope}`}
                    className="project-img"
                    loading="lazy"
                  />
                  <div className="project-hover-overlay">
                    <span className="view-detail-cue">
                      <span>LIHAT DETAIL PROYEK</span>
                      <ArrowUpRight size={16} />
                    </span>
                  </div>
                </div>

                <div className="project-card-footer">
                  <div className="project-primary-info">
                    <h3 className="project-name">{project.title}</h3>
                    <p className="project-scope">{project.scope}</p>
                  </div>
                  <div className="project-meta-info">
                    <span className="project-location">{project.location}</span>
                    <span className="project-cat-tag">{project.category}</span>
                  </div>
                </div>
              </article>
            )
          })}
        </div>

        {/* Bottom Lead to Custom Inquiry */}
        <div className="projects-bottom-cta">
          <p className="projects-cta-text">
            Mempunyai denah atau konsep arsitektur yang ingin direalisasikan di Bali?
          </p>
          <a
            href={siteConfig.whatsapp.url}
            target="_blank"
            rel="noopener noreferrer"
            className="editorial-link"
          >
            <span>KONSULTASI PERENCANAAN BERSAMA KAMI</span>
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>

      {/* Project Detail Modal Lightbox */}
      {activeModalProject && (
        <div
          className="project-modal-backdrop"
          onClick={() => setActiveModalProject(null)}
          role="dialog"
          aria-modal="true"
          aria-label={activeModalProject.title}
        >
          <div
            className="project-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="modal-close-btn"
              onClick={() => setActiveModalProject(null)}
              aria-label="Tutup jendela modal"
            >
              <X size={22} />
            </button>

            <div className="modal-img-wrap">
              <img
                src={activeModalProject.image}
                alt={activeModalProject.title}
                className="modal-img"
              />
            </div>

            <div className="modal-info-wrap">
              <div className="modal-header">
                <span className="eyebrow">{activeModalProject.category} — {activeModalProject.location}</span>
                <h3 className="modal-title">{activeModalProject.title}</h3>
                <span className="modal-scope">{activeModalProject.scope}</span>
              </div>

              <p className="modal-desc">{activeModalProject.description}</p>

              <div className="modal-meta-grid">
                <div className="modal-meta-item">
                  <span className="meta-label">LOKASI</span>
                  <span className="meta-val">{activeModalProject.location}</span>
                </div>
                <div className="modal-meta-item">
                  <span className="meta-label">STATUS KONSEP</span>
                  <span className="meta-val">Visual Reference</span>
                </div>
              </div>

              <div className="modal-actions">
                <a
                  href={`https://wa.me/${siteConfig.brand.phoneRaw}?text=Halo%20MEGA%20INTERIOR%20BALI%2C%20saya%20tertarik%20dengan%20gaya%20arsitektur%20${encodeURIComponent(activeModalProject.title)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modal-wa-btn"
                >
                  DISKUSIKAN GAYA INI DI WHATSAPP
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
