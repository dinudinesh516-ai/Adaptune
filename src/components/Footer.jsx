import logo from '../assets/logo.png?w=640&format=webp'
import { BRAND, SOCIAL, WHATSAPP_DISPLAY, waLink } from '../config.js'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row gy-4 align-items-center">
          <div className="col-md-4 text-center text-md-start">
            <a href="#top" className="d-inline-flex align-items-center gap-2 text-decoration-none">
              <img src={logo} alt="" width="48" height="48" className="nav-logo" />
              <span className="brand-word">ADAPTUNE</span>
            </a>
            <p className="small text-soft mt-2 mb-0">Every step tells a story.</p>
          </div>
          <div className="col-md-4 text-center">
            <p className="footer-pillars mb-0">{BRAND.pillars.join(' • ').toUpperCase()}</p>
          </div>
          <div className="col-md-4 text-center text-md-end">
            <div className="d-inline-flex gap-2">
              <a className="social-btn" href={waLink()} target="_blank" rel="noopener noreferrer" aria-label={`WhatsApp ${WHATSAPP_DISPLAY}`}>
                <i className="bi bi-whatsapp" />
              </a>
              <a className="social-btn" href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <i className="bi bi-instagram" />
              </a>
              <a className="social-btn" href={SOCIAL.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <i className="bi bi-youtube" />
              </a>
            </div>
          </div>
        </div>
        <hr className="my-4 border-secondary" />
        <p className="small text-soft text-center mb-0">
          © {new Date().getFullYear()} Adaptune Dance Crew, Coimbatore. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
