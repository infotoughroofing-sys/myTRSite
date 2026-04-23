import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo">Tough<span>Roofing</span></Link>
      <ul className="nav-links">
        {!isHome && <li><Link to="/">Home</Link></li>}
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/areas">Areas We Service</Link></li>
        <li><Link to="/#why">Why Us</Link></li>
        <li><Link to="/#reviews">Reviews</Link></li>
        <li><Link to="/#faq">FAQ</Link></li>
        <li><a href="tel:9712304929" className="nav-cta">(971) 230-4929</a></li>
      </ul>
      <a href="tel:9712304929" className="btn-primary" style={{ fontSize: 14, padding: '9px 18px' }}>
        Call Now
      </a>
    </nav>
  )
}
