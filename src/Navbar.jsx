import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'
  const [open, setOpen] = useState(false)

  // Close menu on route change
  useEffect(() => { setOpen(false) }, [pathname])

  const links = [
    ...(!isHome ? [{ to: '/', label: 'Home' }] : []),
    { to: '/services', label: 'Services' },
    { to: '/areas', label: 'Areas We Service' },
    { to: '/why-us', label: 'Why Us' },
    { to: '/reviews', label: 'Reviews' },
    { to: '/faq', label: 'FAQ' },
    { to: '/financing', label: 'Financing' },
  ]

  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo">Tough<span>Roofing</span></Link>

      {/* Desktop links */}
      <ul className="nav-links">
        {links.map(l => (
          <li key={l.to}><Link to={l.to}>{l.label}</Link></li>
        ))}
        <li><a href="tel:9712304929" className="nav-cta">(971) 230-4929</a></li>
      </ul>

      {/* Desktop call button */}
      <a href="tel:9712304929" className="btn-primary nav-call-btn">
        Call Now
      </a>

      {/* Hamburger toggle */}
      <button
        className={`nav-hamburger${open ? ' is-open' : ''}`}
        onClick={() => setOpen(o => !o)}
        aria-label="Toggle menu"
      >
        <span /><span /><span />
      </button>

      {/* Mobile drawer */}
      {open && (
        <div className="nav-drawer">
          {links.map(l => (
            <Link key={l.to} to={l.to} className="nav-drawer-link">{l.label}</Link>
          ))}
          <a href="tel:9712304929" className="nav-drawer-cta">(971) 230-4929</a>
        </div>
      )}
    </nav>
  )
}
