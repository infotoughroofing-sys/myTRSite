import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './FinancingPopup.css'

export default function FinancingPopup() {
  const [visible, setVisible] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 10000)
    return () => clearTimeout(timer)
  }, [])

  if (!visible) return null

  function goToFinancing() {
    setVisible(false)
    navigate('/financing')
  }

  return (
    <div className="popup-overlay" onClick={() => setVisible(false)}>
      <div className="popup-card" onClick={e => e.stopPropagation()}>
        <button className="popup-close" onClick={() => setVisible(false)}>✕</button>
        <div className="popup-icon">💳</div>
        <h2>Buy Now, Pay Later!</h2>
        <p>Don't let budget timing stop you from getting the roof your home needs. We offer flexible financing with same-day approval available.</p>
        <ul className="popup-perks">
          <li>✅ Low monthly payments</li>
          <li>✅ 0% interest options available</li>
          <li>✅ Fast, easy approval</li>
        </ul>
        <button className="popup-cta" onClick={goToFinancing}>
          Learn About Financing →
        </button>
        <a href="tel:9712304929" className="popup-call">
          Or call us: (971) 230-4929
        </a>
      </div>
    </div>
  )
}
