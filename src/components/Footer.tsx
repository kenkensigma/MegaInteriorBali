import React from 'react'
import { siteConfig } from '../data/contentConfig'
import { ArrowUp } from 'lucide-react'
import './Footer.css'

export const Footer: React.FC = () => {
  const { brand, navigation } = siteConfig
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="site-footer" aria-label="Footer Website">
      <div className="container">
        
        {/* Top Footer Row */}
        <div className="footer-top-row">
          <div className="footer-brand-col">
            <span className="footer-wordmark">{brand.name}</span>
            <p className="footer-descriptor">
              {brand.businessCategory} — {brand.scope}. Studio pengerjaan konstruksi arsitektural dan penataan interior berstandar presisi di Bali.
            </p>
          </div>

          <div className="footer-nav-col">
            <span className="footer-heading">NAVIGASI</span>
            <ul className="footer-links-list">
              {navigation.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="footer-nav-link">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-contact-col">
            <span className="footer-heading">HUBUNGI KAMI</span>
            <div className="footer-contact-details">
              <span className="footer-contact-item">
                <span className="label">Telepon / WhatsApp:</span>
                <a href={siteConfig.whatsapp.url} target="_blank" rel="noopener noreferrer" className="val-link">
                  {brand.phone}
                </a>
              </span>
              <span className="footer-contact-item">
                <span className="label">Alamat Kantor:</span>
                <span className="val">{brand.address}</span>
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="footer-bottom-bar">
          <div className="footer-copy-info">
            <span>&copy; {currentYear} {brand.name}. Seluruh hak cipta dilindungi.</span>
            <span className="footer-disclaimer">
              Catatan: Portofolio visual dan beberapa data operasional bersifat placeholder pengembangan hingga konfirmasi resmi pemilik bisnis.
            </span>
          </div>

          <button
            type="button"
            className="back-to-top-btn"
            onClick={scrollToTop}
            aria-label="Kembali ke atas"
          >
            <span>KEMBALI KE ATAS</span>
            <ArrowUp size={16} />
          </button>
        </div>

      </div>
    </footer>
  )
}
