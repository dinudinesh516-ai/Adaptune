import { motion } from 'framer-motion'
import logo from '../assets/logo.png?w=640&format=webp'
import Crown from './Crown.jsx'
import { waLink } from '../config.js'

const ease = [0.22, 1, 0.36, 1]
const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.85, delay, ease },
})

export default function Hero() {
  return (
    <header id="top" className="hero">
      <div className="hero-beam" aria-hidden="true" />
      <div className="hero-slash hero-slash-1" aria-hidden="true" />
      <div className="hero-slash hero-slash-2" aria-hidden="true" />
      <div className="grain" aria-hidden="true" />

      <div className="container position-relative">
        <div className="row align-items-center gy-5">
          <div className="col-lg-7 text-center text-lg-start">
            <motion.p className="script-quote mb-3" {...fadeUp(0.15)}>
              <span className="text-brand">Dance</span> is the hidden language of the <span className="text-brand">soul.</span>
            </motion.p>

            <motion.div {...fadeUp(0.3)}>
              <Crown className="hero-crown" />
              <h1 className="hero-title">ADAPTUNE</h1>
              <p className="hero-sub">DANCE CREW · COIMBATORE</p>
              <span className="brand-bar mx-auto mx-lg-0" />
            </motion.div>

            <motion.p className="hero-lead mt-4 mx-auto mx-lg-0" {...fadeUp(0.5)}>
              Choreography for schools, sangeeth, events, annual days, competitions and corporate stages,
              built around your people, your music and your story.
            </motion.p>

            <motion.div className="mt-4" {...fadeUp(0.65)}>
              <div className="hero-ctas">
                <a className="btn btn-brand" href={waLink()} target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-whatsapp me-2" />
                  Enquire on WhatsApp
                </a>
                <a className="btn btn-outline-brand" href="#gallery">
                  View Gallery
                </a>
              </div>
            </motion.div>
          </div>

          <div className="col-lg-5 d-flex justify-content-center">
            <motion.div
              className="hero-logo-wrap"
              initial={{ opacity: 0, scale: 0.7, rotate: -12 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1.1, delay: 0.3, ease }}
            >
              <div className="hero-logo-ring" aria-hidden="true" />
              <img src={logo} alt="Adaptune Dance Crew logo" className="hero-logo" />
              <p className="hero-story">
                Every Step
                <br />
                Tells a <span className="text-brand">Story.</span>
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      <a href="#about" className="scroll-cue" aria-label="Scroll to about section">
        <span />
      </a>
    </header>
  )
}
