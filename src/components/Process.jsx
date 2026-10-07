import Reveal from './Reveal.jsx'

const steps = [
  ['bi-whatsapp', 'Say hello', 'Message us on WhatsApp with your event, date and group size.'],
  ['bi-lightbulb-fill', 'Plan the concept', 'We shortlist songs, themes and a rehearsal schedule that fits you.'],
  ['bi-arrow-repeat', 'Rehearse', 'Step-by-step sessions that build sync, confidence and stage presence.'],
  ['bi-stars', 'Showtime', 'Final polish and stage blocking, then you own the moment.'],
]

export default function Process() {
  return (
    <section id="process" className="section">
      <div className="container">
        <Reveal className="text-center mb-5">
          <p className="eyebrow">How it works</p>
          <h2 className="section-title">From first message to final bow</h2>
        </Reveal>
        <div className="row g-4">
          {steps.map(([icon, title, text], i) => (
            <div className="col-sm-6 col-lg-3" key={title}>
              <Reveal delay={i * 0.12} className="step h-100">
                <span className="step-num">{i + 1}</span>
                <i className={`bi ${icon} step-icon`} />
                <h3>{title}</h3>
                <p>{text}</p>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
