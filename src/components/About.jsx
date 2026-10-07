import Reveal from './Reveal.jsx'
import { BRAND } from '../config.js'

const pillarText = {
  Move: 'Clean technique and fresh, music-driven choreography.',
  Inspire: 'Performances that leave the audience and the dancers buzzing.',
  Create: 'Concepts, themes and formations designed from scratch.',
  Belong: 'A crew where every dancer, beginner or pro, has a place.',
}

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="row gy-5 align-items-center">
          <div className="col-lg-6">
            <Reveal>
              <p className="eyebrow">Who we are</p>
              <h2 className="section-title">
                A crew that <span className="marker">adapts</span> to your tune
              </h2>
              <p className="text-soft mt-4">
                Adaptune is a Coimbatore-based dance crew that turns stages, schools and celebrations into
                performances people remember. We choreograph for first-timers and seasoned dancers alike, and
                shape every routine around the group, the occasion and the song you love.
              </p>
              <p className="text-soft">
                From a ten-member school act to a full corporate showcase, we handle concept, music edits,
                formations and rehearsals so your team can simply enjoy the spotlight.
              </p>
            </Reveal>
          </div>
          <div className="col-lg-6">
            <div className="row g-3">
              {BRAND.pillars.map((p, i) => (
                <div className="col-6" key={p}>
                  <Reveal delay={i * 0.1} className="pillar h-100">
                    <span className="pillar-num">0{i + 1}</span>
                    <h3>{p}</h3>
                    <p>{pillarText[p]}</p>
                  </Reveal>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
