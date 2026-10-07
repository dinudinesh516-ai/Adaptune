import Reveal from './Reveal.jsx'
import { SERVICES, waLink } from '../config.js'

export default function Services() {
  return (
    <section id="services" className="section section-alt">
      <div className="container">
        <Reveal className="text-center mb-5">
          <p className="marker-heading">Choreographies for</p>
          <h2 className="section-title">Every stage, every occasion</h2>
        </Reveal>
        <div className="row g-4">
          {SERVICES.map((s, i) => (
            <div className="col-sm-6 col-lg-4" key={s.title}>
              <Reveal delay={(i % 3) * 0.1} className="h-100">
                <a
                  className="service-card h-100"
                  href={waLink(`Hi Adaptune! I'd like to enquire about choreography for ${s.title}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="service-icon">
                    <i className={`bi ${s.icon}`} />
                  </span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                  <span className="service-link">
                    Enquire <i className="bi bi-arrow-right" />
                  </span>
                </a>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
