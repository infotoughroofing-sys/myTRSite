import { Link } from 'react-router-dom'
import { SERVICES } from './services'
import Navbar from './Navbar'
import './App.css'

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      <div className="sp-breadcrumb">
        <Link to="/">Home</Link>
        <span> / </span>
        <span>Services</span>
      </div>

      <section className="sp-hero">
        <div className="sp-hero-icon">🏠</div>
        <h1>Our Roofing Services</h1>
        <p className="sp-hero-tagline">Everything your roof needs — done by our expert in-house crew with no subcontracting.</p>
        <a href="tel:9712304929" className="btn-primary" style={{ fontSize: 16, padding: '14px 32px' }}>
          Get a Free Estimate
        </a>
      </section>

      <section className="section">
        <div className="services-grid" style={{ maxWidth: 1100, margin: '0 auto' }}>
          {SERVICES.map(s => (
            <Link
              to={`/services/${s.id}`}
              className="service-card"
              key={s.id}
              style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}
            >
              <div className="service-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.tagline}</p>
              <span className="service-link">Learn more →</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="cta-section">
        <h2>Not Sure What You Need?</h2>
        <p>Give us a call and we'll assess your roof and recommend the right solution — no pressure, no obligation.</p>
        <a href="tel:9712304929" className="btn-white">(971) 230-4929 — Call Now</a>
      </section>

      <footer className="footer">
        <div className="footer-grid">
          <div className="footer-col">
            <h4>Tough Roofing LLC</h4>
            <p>Portland's trusted local roofing contractor. Licensed in Oregon &amp; Washington.</p>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              {SERVICES.map(s => (
                <li key={s.id}><Link to={`/services/${s.id}`}>{s.title}</Link></li>
              ))}
            </ul>
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
