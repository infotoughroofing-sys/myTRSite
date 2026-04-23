import { Link } from 'react-router-dom'
import { WHY } from './siteData'
import Navbar from './Navbar'
import './App.css'
import './ServicePage.css'

export default function WhyUsPage() {
  return (
    <>
      <Navbar />

      <div className="sp-breadcrumb">
        <Link to="/">Home</Link>
        <span> / </span>
        <span>Why Choose Us</span>
      </div>

      <section className="sp-hero">
        <div className="sp-hero-icon">⭐</div>
        <h1>Why Choose Tough Roofing?</h1>
        <p className="sp-hero-tagline">We're a local, family-run Portland roofing company that takes pride in doing things the right way — every single time.</p>
        <a href="tel:9712304929" className="btn-primary" style={{ fontSize: 16, padding: '14px 32px' }}>
          Get a Free Estimate
        </a>
      </section>

      <section className="section">
        <div className="why-cards-full">
          {WHY.map(w => (
            <div className="why-full-card" key={w.title}>
              <div className="why-full-icon">{w.icon}</div>
              <div className="why-full-body">
                <h2>{w.title}</h2>
                <p className="why-full-desc">{w.desc}</p>
                <p className="why-full-detail">{w.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-section">
        <h2>Ready to Work With a Roofer You Can Trust?</h2>
        <p>Call us for a free, no-pressure estimate. We'll come to you, inspect your roof, and tell you exactly what we recommend.</p>
        <a href="tel:9712304929" className="btn-white">(971) 230-4929 — Call Now</a>
      </section>

      <footer className="footer">
        <div className="footer-grid">
          <div className="footer-col">
            <h4>Tough Roofing LLC</h4>
            <p>Portland's trusted local roofing contractor. Licensed in Oregon &amp; Washington.</p>
          </div>
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/areas">Areas We Service</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/financing">Financing</Link></li>
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
