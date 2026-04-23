import { useState } from 'react'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import { SERVICES } from './services'
import { WHY, TESTIMONIALS, FAQS, BRANDS } from './siteData'
import ServicePage from './ServicePage'
import ServicesPage from './ServicesPage'
import AreasPage from './AreasPage'
import CityPage from './CityPage'
import WhyUsPage from './WhyUsPage'
import ReviewsPage from './ReviewsPage'
import FAQPage from './FAQPage'
import FinancingPage from './FinancingPage'
import Navbar from './Navbar'
import FinancingPopup from './FinancingPopup'
import './App.css'


function FAQ({ q, a }) {
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

function HomePage() {
  const navigate = useNavigate()

  return (
    <>
      <Navbar />

      {/* FINANCING BANNER */}
      <div className="financing-bar">
        🎉 Buy Now, Pay Later! Financing available for all roofing projects.
        <a href="#cta">Learn More →</a>
      </div>

      {/* HERO */}
      <section className="hero">
        <div className="hero-badge">Portland's #1 Rated Roofer</div>
        <h1>Roof Replacement &amp; Repair in <span>Portland</span></h1>
        <p>Local roofing services for homes and businesses across Portland and nearby communities.</p>
        <div className="hero-btns">
          <a href="tel:9712304929" className="btn-primary">Get a Free Estimate</a>
          <a href="#services" className="btn-outline">Our Services</a>
        </div>
        <div className="hero-stats">
          <div className="hero-stat"><strong>4.9★</strong><span>Google Rating</span></div>
          <div className="hero-stat"><strong>500+</strong><span>Roofs Completed</span></div>
          <div className="hero-stat"><strong>100%</strong><span>In-House Crew</span></div>
          <div className="hero-stat"><strong>24/7</strong><span>Emergency Service</span></div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section" id="services">
        <div className="section-title">
          <h2><span className="red-underline">Our Services</span></h2>
          <p>Everything your roof needs — from minor repairs to full replacements — done by our expert in-house crew.</p>
        </div>
        <div className="services-grid">
          {SERVICES.map(s => (
            <div
              className="service-card"
              key={s.id}
              onClick={() => navigate(`/services/${s.id}`)}
              style={{ cursor: 'pointer' }}
            >
              <div className="service-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.tagline}</p>
              <span className="service-link">Learn more →</span>
            </div>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="section section-alt" id="why">
        <div className="section-title">
          <h2><span className="red-underline">Why Choose Tough Roofing?</span></h2>
          <p>We're a local, family-run business that takes pride in every single job we do.</p>
        </div>
        <div className="why-grid">
          {WHY.map(w => (
            <div className="why-card" key={w.title}>
              <h3>{w.title}</h3>
              <p>{w.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section" id="reviews">
        <div className="section-title">
          <h2><span className="red-underline">What Customers Say</span></h2>
          <p>4.9 stars across 19 Google reviews — don't just take our word for it.</p>
        </div>
        <div className="testimonials-grid">
          {TESTIMONIALS.map(t => (
            <div className="testimonial-card" key={t.name}>
              <div className="stars">★★★★★</div>
              <p>{t.text}</p>
              <div className="reviewer">{t.name}<span>— {t.when}</span></div>
            </div>
          ))}
        </div>
      </section>

      {/* BRANDS */}
      <section className="section section-alt">
        <div className="section-title">
          <h2>Trusted Brands We Install</h2>
          <p>We only use top-quality materials with proven performance and strong warranties.</p>
        </div>
        <div className="brands-row">
          {BRANDS.map(b => (
            <div className="brand-pill" key={b}>{b}</div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="section" id="faq">
        <div className="section-title">
          <h2><span className="red-underline">Frequently Asked Questions</span></h2>
          <p>Everything you need to know before hiring a roofer.</p>
        </div>
        <div className="faq-list">
          {FAQS.map(f => <FAQ key={f.q} q={f.q} a={f.a} />)}
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section" id="cta">
        <h2>Ready for a New Roof?</h2>
        <p>Call us or request a free estimate online. We'll get back to you fast.</p>
        <a href="tel:9712304929" className="btn-white">(971) 230-4929 — Call Now</a>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-grid">
          <div className="footer-col">
            <h4>Tough Roofing LLC</h4>
            <p>Portland's trusted local roofing contractor. Licensed in Oregon &amp; Washington. Family-owned and operated.</p>
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
            <p>
              📞 <a href="tel:9712304929">(971) 230-4929</a><br /><br />
              📧 <a href="mailto:info@toughroofingportland.com">info@toughroofingportland.com</a><br /><br />
              📍 Portland, OR &amp; surrounding areas
            </p>
          </div>
          <div className="footer-col">
            <h4>Licenses</h4>
            <p>
              OR CCB #205496<br />
              WA TOUGHRL772B4<br /><br />
              Follow us:<br />
              Google · Facebook · Instagram · Yelp · Angi
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          © {new Date().getFullYear()} Tough Roofing LLC. All rights reserved. Portland, OR.
        </div>
      </footer>
    </>
  )
}

export default function App() {
  return (
    <>
      <FinancingPopup />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/:id" element={<ServicePage />} />
        <Route path="/areas" element={<AreasPage />} />
        <Route path="/areas/:id" element={<CityPage />} />
        <Route path="/why-us" element={<WhyUsPage />} />
        <Route path="/reviews" element={<ReviewsPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/financing" element={<FinancingPage />} />
      </Routes>
    </>
  )
}
