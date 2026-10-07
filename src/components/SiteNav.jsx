import { useEffect, useState } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { motion } from 'framer-motion'
import logo from '../assets/logo.png?w=640&format=webp'
import { waLink } from '../config.js'

const links = [
  ['#about', 'About'],
  ['#services', 'Choreography'],
  ['#gallery', 'Gallery'],
  ['#team', 'Team'],
  ['#process', 'How it works'],
  ['#contact', 'Contact'],
]

export default function SiteNav() {
  const [scrolled, setScrolled] = useState(false)
  const [expanded, setExpanded] = useState(false)

  const [active, setActive] = useState(null)

  useEffect(() => {
    const sections = links.map(([href]) => document.querySelector(href)).filter(Boolean)
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      // The active section is the last one whose top has passed ~35% down the viewport
      const line = window.innerHeight * 0.35
      let current = null
      for (const s of sections) if (s.getBoundingClientRect().top <= line) current = `#${s.id}`
      // At the very bottom of the page, highlight the last section
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
        current = `#${sections.at(-1)?.id}`
      }
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <Navbar
      expand="lg"
      fixed="top"
      variant="dark"
      expanded={expanded}
      onToggle={setExpanded}
      className={`site-nav ${scrolled || expanded ? 'is-solid' : ''}`}
    >
      <Container>
        <Navbar.Brand href="#top" className="d-flex align-items-center gap-2" onClick={() => setExpanded(false)}>
          <img src={logo} alt="" width="42" height="42" className="nav-logo" />
          <span className="brand-word">ADAPTUNE</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-nav" className="border-0 shadow-none" />
        <Navbar.Collapse id="main-nav">
          <Nav className="ms-auto align-items-lg-center gap-lg-2">
            {links.map(([href, label]) => (
              <Nav.Link
                key={href}
                href={href}
                active={active === href}
                aria-current={active === href ? 'location' : undefined}
                onClick={() => setExpanded(false)}
              >
                {label}
                {active === href && (
                  <motion.span layoutId="nav-active-bar" className="nav-active-bar" transition={{ type: 'spring', stiffness: 420, damping: 36 }} />
                )}
              </Nav.Link>
            ))}
            <a className="btn btn-brand btn-sm ms-lg-3 mt-2 mt-lg-0 mb-2 mb-lg-0" href={waLink()} target="_blank" rel="noopener noreferrer">
              <i className="bi bi-whatsapp me-2" />
              Enquire
            </a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
