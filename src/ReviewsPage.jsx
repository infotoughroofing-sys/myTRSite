import { Link } from 'react-router-dom'
import { TESTIMONIALS } from './siteData'
import Navbar from './Navbar'
import './App.css'
import './ServicePage.css'

export default function ReviewsPage() {
  return (
    <>
      <Navbar />

      <div className="sp-breadcrumb">
        <Link to="/">Home</Link>
        <span> / </span>
        <span>Reviews</span>
      </div>

      <section className="sp-hero">
        <div className="sp-hero-icon">💬</div>
        <h1>What Our Customers Say</h1>
        <p className="sp-hero-tagline">4.9 stars across 19 Google reviews — real homeowners, real results, right here in Portland.</p>
        <a href="tel:9712304929" className="btn-primary" style={{ fontSize: 16, padding: '14px 32px' }}>
          Get a Free Estimate
        </a>
      </section>

      <section className="section">
        <div className="reviews-rating-banner">
          <div className="reviews-rating-score">4.9</div>
          <div>
            <div className="reviews-stars">★★★★★</div>
            <div className="reviews-source">Based on 19 Google Reviews</div>
          </div>
          <a
            href="https://www.google.com/maps/search/tough+roofing+portland"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ marginLeft: 'auto' }}
          >
            View on Google
          </a>
        </div>

        <div className="reviews-grid">
          {TESTIMONIALS.map(t => (
            <div className="review-card-full" key={t.name}>
              <div className="review-stars">{'★'.repeat(t.stars)}</div>
              <p className="review-text">{t.text}</p>
              <div className="review-meta">
                <strong>{t.name}</strong>
                <span>{t.when}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-section">
        <h2>Join Our Happy Customers</h2>
        <p>Give us a call for a free estimate and see for yourself why Portland homeowners give us 5 stars.</p>
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
