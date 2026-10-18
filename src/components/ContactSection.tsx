import React, { useState } from 'react'
import { siteConfig } from '../data/contentConfig'
import { Phone, ArrowUpRight, MessageCircle, MapPin } from 'lucide-react'
import './ContactSection.css'

export const ContactSection: React.FC = () => {
  const { contact, brand } = siteConfig
  const [serviceChoice, setServiceChoice] = useState<'Konstruksi' | 'Interior' | 'Keduanya'>('Keduanya')
  const [clientNote, setClientNote] = useState('')

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    let msg = `Halo MEGA INTERIOR BALI, saya ingin berkonsultasi mengenai kebutuhan proyek ${serviceChoice}.`
    if (clientNote.trim()) {
      msg += ` Catatan rencana: ${clientNote.trim()}`
    }
    const targetUrl = `https://wa.me/${brand.phoneRaw}?text=${encodeURIComponent(msg)}`
    window.open(targetUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="contact" className="contact-section" aria-label="Kontak dan Konsultasi Proyek">
      <div className="container">
        <div className="contact-editorial-frame">
          
          {/* Top Headline Block */}
          <div className="contact-headline-block">
            <span className="contact-eyebrow">KONSULTASI & INISIASI PROYEK — 06</span>
            <h2 className="contact-headline">{contact.headline}</h2>
            <p className="contact-subhead">{contact.subhead}</p>
          </div>

          {/* Two-Column Grid: Interactive WhatsApp Form & Direct Info */}
          <div className="contact-grid">
            
            {/* Interactive WhatsApp Inquiry Builder */}
            <form className="contact-interactive-form" onSubmit={handleWhatsAppSubmit}>
              <div className="form-legend">
                <span className="form-num">A.</span>
                <span className="form-title">Pilih Lingkup Layanan yang Anda Butuhkan</span>
              </div>

              <div className="service-choice-pills" role="radiogroup" aria-label="Pilihan Layanan">
                {(['Konstruksi', 'Interior', 'Keduanya'] as const).map((choice) => (
                  <button
                    key={choice}
                    type="button"
                    role="radio"
                    aria-checked={serviceChoice === choice}
                    className={`choice-pill-btn ${serviceChoice === choice ? 'is-selected' : ''}`}
                    onClick={() => setServiceChoice(choice)}
                  >
                    <span>{choice}</span>
                  </button>
                ))}
              </div>

              <div className="form-legend" style={{ marginTop: '1.5rem' }}>
                <span className="form-num">B.</span>
                <span className="form-title">Catatan Rencana Proyek (Opsional)</span>
              </div>

              <div className="form-input-wrap">
                <textarea
                  className="contact-textarea"
                  rows={3}
                  placeholder="Misal: Rencana pembangunan villa 3 kamar di Canggu / renovasi interior di Lovina..."
                  value={clientNote}
                  onChange={(e) => setClientNote(e.target.value)}
                  aria-label="Catatan Rencana Proyek"
                />
              </div>

              <button type="submit" className="contact-submit-btn">
                <MessageCircle size={18} />
                <span>KIRIM PESAN KE WHATSAPP</span>
                <ArrowUpRight size={16} />
              </button>

              <span className="form-secure-note">
                Terkoneksi langsung ke nomor resmi: +62 821-4696-3094
              </span>
            </form>

            {/* Direct Info & Physical Location */}
            <div className="contact-direct-info">
              
              {/* Direct Phone / Call Block */}
              <div className="direct-card">
                <span className="direct-label">KOMUNIKASI LANGSUNG</span>
                <div className="phone-display-row">
                  <Phone size={20} className="direct-icon" />
                  <a href={`tel:${brand.phone.replace(/[^0-9]/g, '')}`} className="phone-number-link">
                    {brand.phone}
                  </a>
                </div>
                <p className="direct-desc">
                  Hubungi kami via telepon atau pesan instan WhatsApp untuk penjadwalan survey lokasi dan konsultasi awal.
                </p>
                <a
                  href={`tel:${brand.phone.replace(/[^0-9]/g, '')}`}
                  className="direct-action-link"
                >
                  <span>PANGGIL SEKARANG</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>

              {/* Physical Location Block */}
              <div className="direct-card">
                <span className="direct-label">LOKASI & ALAMAT TERVERIFIKASI</span>
                <div className="address-display-row">
                  <MapPin size={20} className="direct-icon" />
                  <span className="address-text">{brand.address}</span>
                </div>
                <div className="maps-action-wrap">
                  <a
                    href="https://maps.google.com/?q=Jl.+Laksamana-Baktiseraga,+Buleleng,+Bali"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="direct-action-link"
                  >
                    <span>BUKA GOOGLE MAPS</span>
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
