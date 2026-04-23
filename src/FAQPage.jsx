import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FAQS } from './siteData'
import Navbar from './Navbar'
import './App.css'
import './ServicePage.css'

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="faq-item">
      <div className="faq-question" onClick={() => setOpen(o => !o)}>
        <span>{q}</span>
        <span className="faq-toggle">{open ? '−' : '+'}</span>
      </div>
      {open && <p className="faq-answer">{a}</p>}
    </div>
  )
}

export default function FAQPage() {
  return (
    <>
      <Navbar />

      <div className="sp-breadcrumb">
        <Link to="/">Home</Link>
        <span> / </span>
        <span>FAQ</span>
      </div>

      <section className="sp-hero">
        <div className="sp-hero-icon">❓</div>
        <h1>Frequently Asked Questions</h1>
        <p className="sp-hero-tagline">Everything you need to know before hiring a roofer — answered honestly.</p>
        <a href="tel:9712304929" className="btn-primary" style={{ fontSize: 16, padding: '14px 32px' }}>
          Still Have Questions? Call Us
        </a>
      </section>

      <section className="section">
        <div className="faq-list" style={{ maxWidth: 740, margin: '0 auto' }}>
          {FAQS.map(f => <FAQItem key={f.q} q={f.q} a={f.a} />)}
        </div>
      </section>

      <section className="section section-alt" style={{ textAlign: 'center' }}>
        <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 12 }}>Don't See Your Question?</h2>
        <p style={{ color: 'var(--gray)', marginBottom: 28, fontSize: 16 }}>
          Give us a call and we'll answer anything you want to know — no obligation, no sales pressure.
        </p>
        <a href="tel:9712304929" className="btn-primary" style={{ fontSize: 16, padding: '14px 32px' }}>
          📞 (971) 230-4929
        </a>
      </section>

      <section className="cta-section">
        <h2>Ready for a Free Estimate?</h2>
        <p>We'll come out, inspect your roof, and give you a straight answer on what it needs.</p>
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
              <li><Link to="/why-us">Why Choose Us</Link></li>
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
