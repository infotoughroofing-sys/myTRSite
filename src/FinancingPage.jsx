import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import './App.css'
import './ServicePage.css'

const STEPS = [
  { step: '1', title: 'Request Your Free Estimate', desc: 'Call us or fill out a request online. We\'ll come to your property, inspect the roof, and provide a clear written estimate at no cost.' },
  { step: '2', title: 'Choose Your Financing Plan', desc: 'We\'ll walk you through available financing options — including deferred payment and low-interest plans — so you can pick what works for your budget.' },
  { step: '3', title: 'Get Approved Fast', desc: 'Most applicants receive same-day approval. The application is quick and straightforward — we\'ll guide you through it.' },
  { step: '4', title: 'We Get to Work', desc: 'Once you\'re approved and the project is scheduled, our in-house crew handles everything. You focus on the payment plan, we focus on your roof.' },
]

const FAQS = [
  { q: 'Is there a minimum project size for financing?', a: 'Financing is available for most full replacement and larger repair projects. Ask us when you request your estimate.' },
  { q: 'How fast is approval?', a: 'Many applicants receive same-day approval. The process is quick and straightforward — we\'ll guide you through it.' },
  { q: 'Are there 0% interest options?', a: 'Yes — promotional 0% interest periods are often available for qualified applicants. We\'ll go over all current plans with you.' },
  { q: 'Will financing affect my credit?', a: 'Initial pre-qualification typically uses a soft pull that doesn\'t affect your credit score. A full application may involve a hard pull — your financing provider will explain the details.' },
  { q: 'Can I finance a repair, not just a replacement?', a: 'Yes. Larger repair projects are often eligible. Smaller repairs may not qualify — ask us when you get your estimate.' },
]

export default function FinancingPage() {
  const [open, setOpen] = useState(null)

  return (
    <>
      <Navbar />

      <div className="sp-breadcrumb">
        <Link to="/">Home</Link>
        <span> / </span>
        <span>Financing</span>
      </div>

      <section className="sp-hero">
        <div className="sp-hero-icon">💳</div>
        <h1>Roofing Financing</h1>
        <p className="sp-hero-tagline">Buy now, pay later. Don't let budget timing stop you from protecting your home.</p>
        <a href="tel:9712304929" className="btn-primary" style={{ fontSize: 16, padding: '14px 32px' }}>
          Ask About Financing
        </a>
      </section>

      <section className="section">
        <div className="financing-intro">
          <div className="financing-intro-text">
            <h2>A New Roof Shouldn't Have to Wait</h2>
            <p>A failing roof doesn't care about your budget cycle. Water intrusion, structural damage, and energy loss compound quickly when a roof goes unaddressed. Financing lets you act now and spread the cost over time — protecting your home and your wallet.</p>
            <p>We partner with leading financing providers to offer competitive rates and flexible terms for homeowners across Portland and the surrounding area.</p>
          </div>
          <div className="financing-highlights">
            <div className="financing-highlight">💰 Low monthly payments</div>
            <div className="financing-highlight">⚡ Same-day approval available</div>
            <div className="financing-highlight">🎯 0% interest options for qualified buyers</div>
            <div className="financing-highlight">📋 No prepayment penalties</div>
            <div className="financing-highlight">🏠 Available for repairs &amp; replacements</div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="section-title">
          <h2><span className="red-underline">How It Works</span></h2>
          <p>Getting financing through Tough Roofing is simple and fast.</p>
        </div>
        <div className="financing-steps">
          {STEPS.map(s => (
            <div className="financing-step" key={s.step}>
              <div className="financing-step-num">{s.step}</div>
              <div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-title">
          <h2><span className="red-underline">Financing FAQ</span></h2>
        </div>
        <div className="faq-list" style={{ maxWidth: 700, margin: '0 auto' }}>
          {FAQS.map((f, i) => (
            <FinFAQ key={f.q} f={f} open={open === i} toggle={() => setOpen(open === i ? null : i)} />
          ))}
        </div>
      </section>

      <section className="cta-section">
        <h2>Ready to Get Started?</h2>
        <p>Call us today and ask about financing options for your project. We'll get you an estimate and walk through the plans together.</p>
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
              <li><Link to="/faq">FAQ</Link></li>
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

function FinFAQ({ f, open, toggle }) {
  return (
    <div className="faq-item">
      <div className="faq-question" onClick={toggle}>
        <span>{f.q}</span>
        <span className="faq-toggle">{open ? '−' : '+'}</span>
      </div>
      {open && <p className="faq-answer">{f.a}</p>}
    </div>
  )
}
