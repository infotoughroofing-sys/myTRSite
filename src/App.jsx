import { useState } from 'react'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import { SERVICES } from './services'
import ServicePage from './ServicePage'
import './App.css'

const WHY = [
  { title: 'In-House Crews Only', desc: 'We never subcontract. Our own trained crew does every job — so you know who\'s on your roof.' },
  { title: 'Rated 4.9 / 5 Stars', desc: '19 Google reviews from real Portland homeowners who trust us with their biggest investment.' },
  { title: 'Licensed & Insured', desc: 'CCB #205496 (OR) | TOUGHRL772B4 (WA). Fully licensed in Oregon and Washington.' },
  { title: 'Top-Tier Materials', desc: 'CertainTeed, Owens Corning, Malarkey, GAF, IKO — only proven, USA-made products.' },
  { title: 'Digital Tracking', desc: 'Approve work and track job progress online through our Jobber platform.' },
  { title: 'Family-Run Business', desc: 'Local, family-owned and operated. We treat every home like it\'s our own.' },
]

const TESTIMONIALS = [
  {
    name: 'Marcus Robinson',
    when: '5 months ago',
    text: '"Great work. Pedro and his crew were exceptional. Work was done expeditiously with quality and care. Very transparent and honest throughout the whole process."',
  },
  {
    name: 'Donnie Brown',
    when: '6 months ago',
    text: '"The guys at Tough Roofing are fantastic to work with. They showed up at 7am sharp to remove the old roof, and by dinnertime we had a brand new roof! Highly recommend."',
  },
  {
    name: 'Krys M',
    when: '9 months ago',
    text: '"Excellent communication from start to finish. The crew was professional, clean, and left the yard spotless. Our new roof looks amazing and the price was very fair."',
  },
]

const FAQS = [
  { q: 'How do I know if my roof needs repair or replacement?', a: 'If your roof is under 15–20 years old and damage is localized, repair is usually best. For older roofs or widespread damage, a full replacement is often more cost-effective. We offer free inspections to help you decide.' },
  { q: 'What types of roofing materials do you use?', a: 'We work with CertainTeed, Owens Corning, Malarkey, GAF, and IKO — all top-tier, USA-made brands.' },
  { q: 'Do you offer emergency roofing services?', a: 'Yes! We provide 24/7 emergency response. Call us anytime at (971) 230-4929.' },
  { q: 'How fast can repairs or replacements be completed?', a: 'Most repairs are completed same-day or next-day. Full roof replacements typically take one to two days.' },
  { q: 'Are your roofing crews in-house or subcontracted?', a: '100% in-house. We never subcontract work.' },
  { q: 'Do you use roofing materials made in the USA?', a: 'Yes — we specifically source materials from manufacturers who produce quality products domestically.' },
]

const BRANDS = ['CertainTeed', 'Owens Corning', 'Malarkey', 'GAF', 'IKO']

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
      {/* NAV */}
      <nav className="navbar">
        <div className="nav-logo">Tough<span>Roofing</span></div>
        <ul className="nav-links">
          <li><a href="#services">Services</a></li>
          <li><a href="#why">Why Us</a></li>
          <li><a href="#reviews">Reviews</a></li>
          <li><a href="#faq">FAQ</a></li>
          <li><a href="tel:9712304929" className="nav-cta">(971) 230-4929</a></li>
        </ul>
        <a href="tel:9712304929" className="btn-primary" style={{ fontSize: 14, padding: '9px 18px' }}>
          Call Now
        </a>
      </nav>

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
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/services/:id" element={<ServicePage />} />
    </Routes>
  )
}
