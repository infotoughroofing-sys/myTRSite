import { Link } from 'react-router-dom'
import './AreasPage.css'

const AREAS = [
  {
    region: 'Portland Metro',
    cities: [
      'Portland', 'Northeast Portland', 'Southeast Portland', 'North Portland',
      'Southwest Portland', 'Northwest Portland', 'St. Johns', 'Sellwood',
    ],
  },
  {
    region: 'East Metro',
    cities: [
      'Gresham', 'Troutdale', 'Fairview', 'Wood Village', 'Corbett', 'Sandy',
    ],
  },
  {
    region: 'West Metro',
    cities: [
      'Beaverton', 'Hillsboro', 'Tigard', 'Tualatin', 'Sherwood',
      'Lake Oswego', 'West Linn', 'Wilsonville',
    ],
  },
  {
    region: 'North & Clark County (WA)',
    cities: [
      'Vancouver', 'Camas', 'Washougal', 'Battle Ground', 'Ridgefield', 'La Center',
    ],
  },
  {
    region: 'South Metro',
    cities: [
      'Milwaukie', 'Oregon City', 'Gladstone', 'Canby', 'Clackamas', 'Happy Valley',
    ],
  },
]

const HIGHLIGHTS = [
  { icon: '📍', label: '50+ Cities Served', desc: 'We cover the full Portland metro area in both Oregon and Washington.' },
  { icon: '⚡', label: 'Fast Response', desc: 'Same or next-day estimates for most areas. Emergency calls answered 24/7.' },
  { icon: '🚗', label: 'No Travel Fees', desc: 'No extra charges for traveling to your location within our service area.' },
  { icon: '🏡', label: 'Local Knowledge', desc: 'We know Portland-area weather, roof types, and permit requirements inside and out.' },
]

export default function AreasPage() {
  return (
    <>
      {/* NAV */}
      <nav className="navbar">
        <Link to="/" className="nav-logo">Tough<span>Roofing</span></Link>
        <ul className="nav-links">
          <li><Link to="/#services">Services</Link></li>
          <li><Link to="/areas" className="nav-active">Areas We Service</Link></li>
          <li><Link to="/#why">Why Us</Link></li>
          <li><Link to="/#reviews">Reviews</Link></li>
          <li><Link to="/#faq">FAQ</Link></li>
          <li><a href="tel:9712304929" className="nav-cta">(971) 230-4929</a></li>
        </ul>
        <a href="tel:9712304929" className="btn-primary" style={{ fontSize: 14, padding: '9px 18px' }}>
          Call Now
        </a>
      </nav>

      {/* BREADCRUMB */}
      <div className="sp-breadcrumb">
        <Link to="/">Home</Link>
        <span> / </span>
        <span>Areas We Service</span>
      </div>

      {/* HERO */}
      <section className="areas-hero">
        <div className="hero-badge">Serving Portland &amp; Surrounding Communities</div>
        <h1>Areas We <span>Service</span></h1>
        <p>From Portland proper to Clark County, WA — our in-house crew brings quality roofing to the entire metro area.</p>
        <a href="tel:9712304929" className="btn-primary" style={{ fontSize: 16, padding: '14px 32px' }}>
          Get a Free Estimate
        </a>
      </section>

      {/* AREA GRID */}
      <section className="section">
        <div className="section-title">
          <h2><span className="red-underline">Cities We Serve</span></h2>
          <p>Don't see your city? Give us a call — we may still be able to help.</p>
        </div>
        <div className="areas-regions">
          {AREAS.map(a => (
            <div className="areas-region-card" key={a.region}>
              <h3>{a.region}</h3>
              <ul>
                {a.cities.map(c => (
                  <li key={c}>
                    <span className="areas-check">✓</span> {c}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="section section-alt">
        <div className="areas-highlights">
          {HIGHLIGHTS.map(h => (
            <div className="areas-highlight-card" key={h.label}>
              <span className="areas-highlight-icon">{h.icon}</span>
              <strong>{h.label}</strong>
              <p>{h.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* NOT SURE SECTION */}
      <section className="section">
        <div className="areas-unsure">
          <h2>Not Sure If We Cover Your Area?</h2>
          <p>Just give us a call or send us a message. We'll let you know right away and can often accommodate locations outside our standard area for larger projects.</p>
          <div className="areas-contact-row">
            <a href="tel:9712304929" className="btn-primary">📞 (971) 230-4929</a>
            <a href="mailto:info@toughroofingportland.com" className="btn-outline-dark">✉️ Email Us</a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <h2>Ready for a Free Estimate?</h2>
        <p>We serve all of the Portland metro area — give us a call and we'll come to you.</p>
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
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/#services">Services</Link></li>
              <li><Link to="/areas">Areas We Service</Link></li>
              <li><Link to="/#why">Why Us</Link></li>
              <li><Link to="/#faq">FAQ</Link></li>
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
