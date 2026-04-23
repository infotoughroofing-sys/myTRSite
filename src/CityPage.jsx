import { useParams, Link, Navigate } from 'react-router-dom'
import { getCityById } from './cities'
import { SERVICES } from './services'
import Navbar from './Navbar'
import './CityPage.css'

export default function CityPage() {
  const { id } = useParams()
  const city = getCityById(id)

  if (!city) return <Navigate to="/areas" replace />

  return (
    <>
      <Navbar />

      {/* BREADCRUMB */}
      <div className="sp-breadcrumb">
        <Link to="/">Home</Link>
        <span> / </span>
        <Link to="/areas">Areas We Service</Link>
        <span> / </span>
        <span>{city.name}</span>
      </div>

      {/* HERO */}
      <section className="city-hero">
        <div className="hero-badge">{city.region}</div>
        <h1>Roofing in <span>{city.name}</span></h1>
        <p>Trusted local roofing — replacements, repairs, gutters, and more — serving {city.name} and surrounding communities.</p>
        <a href="tel:9712304929" className="btn-primary" style={{ fontSize: 16, padding: '14px 32px' }}>
          📞 Call for a Free Quote
        </a>
      </section>

      {/* CITY OVERVIEW */}
      <section className="section">
        <div className="city-overview">
          <div className="city-overview-text">
            <h2>Roofing Services in {city.name}</h2>
            <p>{city.cityDesc}</p>
            <p className="city-roofing-note">
              <strong>Local tip:</strong> {city.roofingNote}
            </p>
          </div>
          <div className="city-quote-box">
            <h3>Get a Free Quote</h3>
            <p>We serve {city.name} with the same in-house crew and quality materials we use across all of Portland.</p>
            <ul>
              <li>✅ No subcontractors</li>
              <li>✅ Free estimates</li>
              <li>✅ Licensed in OR &amp; WA</li>
              <li>✅ Financing available</li>
            </ul>
            <a href="tel:9712304929" className="btn-primary" style={{ display: 'block', textAlign: 'center', marginTop: 20 }}>
              (971) 230-4929
            </a>
          </div>
        </div>
      </section>

      {/* NEIGHBORHOOD SPOTLIGHT */}
      <section className="section section-alt">
        <div className="city-neighborhood">
          <div className="city-nbhd-badge">Neighborhood Spotlight</div>
          <h2 style={city.neighborhood.length > 40 ? { fontSize: '24px' } : {}}>{city.neighborhood}</h2>
          <p>{city.neighborhoodDesc}</p>
          <a href="tel:9712304929" className="city-call-cta">
            📞 Serving {city.name} — Call (971) 230-4929 for a Free Quote
          </a>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section">
        <div className="section-title">
          <h2><span className="red-underline">Services We Offer in {city.name}</span></h2>
          <p>Our full range of roofing services — all performed by our in-house crew.</p>
        </div>
        <div className="city-services-grid">
          {SERVICES.map(s => (
            <Link to={`/services/${s.id}`} className="city-service-card" key={s.id}>
              <span className="city-service-icon">{s.icon}</span>
              <strong>{s.title}</strong>
              <p>{s.tagline}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* BIG CTA */}
      <section className="city-cta-banner">
        <div className="city-cta-inner">
          <h2>Ready for a Free Roofing Quote in {city.name}?</h2>
          <p>Call us today — we'll come to you, assess your roof, and give you an honest estimate with no pressure.</p>
          <a href="tel:9712304929" className="btn-white" style={{ fontSize: 18, padding: '16px 40px' }}>
            📞 (971) 230-4929
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-grid">
          <div className="footer-col">
            <h4>Tough Roofing LLC</h4>
            <p>Serving {city.name} and all of Portland metro. Licensed in OR &amp; WA.</p>
          </div>
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/#services">All Services</Link></li>
              <li><Link to="/areas">Areas We Service</Link></li>
              <li><Link to="/#faq">FAQ</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <p>📞 <a href="tel:9712304929">(971) 230-4929</a><br /><br />
            📍 {city.name}, OR</p>
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
