import { useState } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { SERVICES } from './services'
import Navbar from './Navbar'
import './ServicePage.css'

function FAQ({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="sp-faq-item">
      <div className="sp-faq-question" onClick={() => setOpen(o => !o)}>
        <span>{q}</span>
        <span className="sp-faq-toggle">{open ? '−' : '+'}</span>
      </div>
      {open && <p className="sp-faq-answer">{a}</p>}
    </div>
  )
}

export default function ServicePage() {
  const { id } = useParams()
  const service = SERVICES.find(s => s.id === id)

  if (!service) return <Navigate to="/" replace />

  const others = SERVICES.filter(s => s.id !== id).slice(0, 3)

  return (
    <>
      <Navbar />

      {/* BREADCRUMB */}
      <div className="sp-breadcrumb">
        <Link to="/">Home</Link>
        <span> / </span>
        <span>{service.title}</span>
      </div>

      {/* HERO */}
      <section className="sp-hero">
        <div className="sp-hero-icon">{service.icon}</div>
        <h1>{service.title}</h1>
        <p className="sp-hero-tagline">{service.tagline}</p>
        <a href="tel:9712304929" className="btn-primary" style={{ fontSize: 16, padding: '14px 32px' }}>
          Get a Free Estimate
        </a>
      </section>

      {/* OVERVIEW */}
      <section className="sp-section">
        <div className="sp-overview">
          <div className="sp-overview-text">
            <h2>Overview</h2>
            <p>{service.hero}</p>
            <a href="tel:9712304929" className="sp-call-link">📞 Call (971) 230-4929</a>
          </div>
          <div className="sp-overview-box">
            <h3>Quick Facts</h3>
            <ul>
              <li>✅ In-house crew — no subcontractors</li>
              <li>✅ Licensed in OR &amp; WA</li>
              <li>✅ 4.9★ Google rating</li>
              <li>✅ Free estimates</li>
              <li>✅ Financing available</li>
            </ul>
            <a href="tel:9712304929" className="btn-primary" style={{ display: 'block', textAlign: 'center', marginTop: 20 }}>
              Schedule Now
            </a>
          </div>
        </div>
      </section>

      {/* PHOTO (if available) */}
      {service.photo && (
        <section className="sp-section">
          <div className="sp-photo-block">
            <img
              src={`/src/assets/${service.photo}`}
              alt={service.photoAlt || service.title}
              className="sp-photo"
            />
            {service.photoCaption && (
              <p className="sp-photo-caption">{service.photoCaption}</p>
            )}
          </div>
        </section>
      )}

      {/* DETAILS */}
      <section className="sp-section sp-section-alt">
        <div className="sp-details-grid">
          {service.details.map(d => (
            <div className="sp-detail-card" key={d.heading}>
              <h3>{d.heading}</h3>
              <p style={{ whiteSpace: 'pre-line' }}>{d.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROS / CONS */}
      {service.prosCons && (
        <section className="sp-section">
          <h2 className="sp-section-heading">Material Comparison</h2>
          <div className="sp-proscons-grid">
            {service.prosCons.map(item => (
              <div className="sp-proscons-card" key={item.material}>
                <h3 className="sp-proscons-title">{item.material}</h3>
                <div className="sp-proscons-col">
                  <p className="sp-proscons-label sp-pros-label">Pros</p>
                  <ul className="sp-proscons-list">
                    {item.pros.map(p => <li key={p}><span className="sp-pro-icon">✓</span>{p}</li>)}
                  </ul>
                </div>
                <div className="sp-proscons-col">
                  <p className="sp-proscons-label sp-cons-label">Cons</p>
                  <ul className="sp-proscons-list">
                    {item.cons.map(c => <li key={c}><span className="sp-con-icon">✕</span>{c}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="sp-section sp-section-alt">
        <h2 className="sp-section-heading">Common Questions</h2>
        <div className="sp-faq-list">
          {service.faqs.map(f => <FAQ key={f.q} q={f.q} a={f.a} />)}
        </div>
      </section>

      {/* OTHER SERVICES */}
      <section className="sp-section">
        <h2 className="sp-section-heading">Other Services</h2>
        <div className="sp-others-grid">
          {others.map(s => (
            <Link to={`/services/${s.id}`} className="sp-other-card" key={s.id}>
              <span className="sp-other-icon">{s.icon}</span>
              <strong>{s.title}</strong>
              <p>{s.tagline}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <h2>Ready to Get Started?</h2>
        <p>Call us today for a free, no-pressure estimate on {service.title.toLowerCase()}.</p>
        <a href="tel:9712304929" className="btn-white">(971) 230-4929 — Call Now</a>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-grid">
          <div className="footer-col">
            <h4>Tough Roofing LLC</h4>
            <p>Portland's trusted local roofing contractor. Licensed in Oregon &amp; Washington.</p>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <p>📞 <a href="tel:9712304929">(971) 230-4929</a><br /><br />
            📍 Portland, OR &amp; surrounding areas</p>
          </div>
          <div className="footer-col">
            <h4>Licenses</h4>
            <p>OR CCB #205496<br />WA TOUGHRL772B4</p>
          </div>
        </div>
        <div className="footer-bottom">
          © {new Date().getFullYear()} Tough Roofing LLC. All rights reserved.
        </div>
      </footer>
    </>
  )
}
