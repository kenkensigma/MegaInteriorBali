import React, { useState, useEffect } from 'react'
import { siteConfig } from '../data/contentConfig'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import './Header.css'

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  return (
    <header className={`site-header ${isScrolled ? 'is-scrolled' : ''}`}>
      <div className="header-inner">
        {/* Brand Wordmark (matching reference: serif with dot) */}
        <a href="#hero" className="brand-wordmark" aria-label="Mega Interior Bali Home">
          <span className="brand-primary">MEGA INTERIOR.</span>
          <span className="brand-secondary">{siteConfig.brand.locationBadge}</span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          {siteConfig.navigation.map((item) => (
            <a key={item.label} href={item.href} className="nav-item">
              {item.label}
            </a>
          ))}
        </nav>

        {/* Action Button: ENQUIRE + */}
        <div className="header-actions">
          <a
            href={siteConfig.whatsapp.url}
            target="_blank"
            rel="noopener noreferrer"
            className="enquire-button"
            aria-label="Enquire via WhatsApp"
          >
            <span>ENQUIRE</span>
            <span className="plus-symbol">+</span>
          </a>

          {/* Mobile Menu Hamburger */}
          <button
            type="button"
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Tutup menu' : 'Buka menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-drawer ${mobileMenuOpen ? 'is-open' : ''}`} aria-hidden={!mobileMenuOpen}>
        <div className="mobile-drawer-inner">
          <div className="mobile-nav-list">
            {siteConfig.navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="mobile-nav-item"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>{item.label}</span>
                <ArrowUpRight size={18} />
              </a>
            ))}
          </div>

          <div className="mobile-drawer-footer">
            <div className="mobile-meta">
              <span className="mobile-meta-label">TELEPON & WHATSAPP</span>
              <span className="mobile-meta-val">{siteConfig.brand.phone}</span>
            </div>
            <a
              href={siteConfig.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-cta-btn"
              onClick={() => setMobileMenuOpen(false)}
            >
              KONSULTASI VIA WHATSAPP
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
