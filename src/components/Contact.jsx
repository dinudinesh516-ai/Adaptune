import { useEffect, useRef, useState } from 'react'
import Reveal from './Reveal.jsx'
import { ADDRESS, SERVICES, SOCIAL, WHATSAPP_DISPLAY, waLink } from '../config.js'

// Google Maps is heavy; loading it mid-scroll freezes the page for a moment.
// Only load it once the map is on screen and scrolling has settled.
function LazyMap({ src, title }) {
  const ref = useRef(null)
  const [load, setLoad] = useState(false)
  useEffect(() => {
    if (load) return
    let timer
    let visible = false
    const arm = () => {
      clearTimeout(timer)
      if (visible) timer = setTimeout(() => setLoad(true), 300)
    }
    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting
      arm()
    })
    io.observe(ref.current)
    window.addEventListener('scroll', arm, { passive: true })
    return () => {
      io.disconnect()
      clearTimeout(timer)
      window.removeEventListener('scroll', arm)
    }
  }, [load])
  return (
    <div className="map-wrap mt-auto" ref={ref}>
      {load && <iframe title={title} src={src} referrerPolicy="no-referrer-when-downgrade" />}
    </div>
  )
}

const initial = { name: '', type: '', date: '', size: '', location: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(initial)
  const [validated, setValidated] = useState(false)

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const submit = (e) => {
    e.preventDefault()
    if (!e.currentTarget.checkValidity()) {
      setValidated(true)
      return
    }
    const date = form.date
      ? new Date(`${form.date}T00:00:00`).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })
      : ''
    const details = [
      ['Name', form.name],
      ['Choreography for', form.type],
      ['Event date', date],
      ['Group size', form.size],
      ['Location', form.location],
      ['Details', form.message],
    ]
      .filter(([, v]) => v.trim())
      .map(([k, v]) => `*${k}:* ${v.trim()}`)
    const lines = ["Hi Adaptune! I'd like to enquire about choreography.", '', ...details]
    window.open(waLink(lines.join('\n')), '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <Reveal className="text-center mb-5">
          <p className="eyebrow">Enquire</p>
          <h2 className="section-title">
            Let&apos;s make your stage <span className="marker">move</span>
          </h2>
          <p className="text-soft mx-auto mt-3" style={{ maxWidth: 560 }}>
            Fill in a few details and we&apos;ll open WhatsApp with your message ready to send.
          </p>
        </Reveal>

        <div className="row g-4 align-items-stretch">
          <div className="col-lg-7">
            <Reveal className="contact-card h-100">
              <form noValidate className={`row g-3 ${validated ? 'was-validated' : ''}`} onSubmit={submit}>
                <div className="col-md-6">
                  <label htmlFor="f-name" className="form-label">Your name *</label>
                  <input id="f-name" className="form-control" required value={form.name} onChange={set('name')} autoComplete="name" />
                  <div className="invalid-feedback">Please tell us your name.</div>
                </div>
                <div className="col-md-6">
                  <label htmlFor="f-type" className="form-label">Choreography for *</label>
                  <select id="f-type" className="form-select" required value={form.type} onChange={set('type')}>
                    <option value="">Choose…</option>
                    {SERVICES.map((s) => (
                      <option key={s.title}>{s.title}</option>
                    ))}
                    <option>Other</option>
                  </select>
                  <div className="invalid-feedback">Please pick an option.</div>
                </div>
                <div className="col-md-6">
                  <label htmlFor="f-date" className="form-label">Event date</label>
                  <input id="f-date" type="date" className="form-control" value={form.date} onChange={set('date')} />
                </div>
                <div className="col-md-6">
                  <label htmlFor="f-size" className="form-label">Group size</label>
                  <input id="f-size" className="form-control" placeholder="e.g. 12 dancers" value={form.size} onChange={set('size')} />
                </div>
                <div className="col-12">
                  <label htmlFor="f-loc" className="form-label">Venue / city</label>
                  <input id="f-loc" className="form-control" value={form.location} onChange={set('location')} />
                </div>
                <div className="col-12">
                  <label htmlFor="f-msg" className="form-label">Anything else?</label>
                  <textarea id="f-msg" rows="3" className="form-control" placeholder="Songs, theme, age group…" value={form.message} onChange={set('message')} />
                </div>
                <div className="col-12">
                  <button type="submit" className="btn btn-brand btn-lg w-100">
                    <i className="bi bi-whatsapp me-2" />
                    Send enquiry on WhatsApp
                  </button>
                </div>
              </form>
            </Reveal>
          </div>

          <div className="col-lg-5">
            <Reveal delay={0.1} className="contact-card h-100 d-flex flex-column">
              <ul className="contact-list">
                <li>
                  <span className="ci"><i className="bi bi-whatsapp" /></span>
                  <div>
                    <small>WhatsApp (enquiries)</small>
                    <a href={waLink()} target="_blank" rel="noopener noreferrer">{WHATSAPP_DISPLAY}</a>
                  </div>
                </li>
                <li>
                  <span className="ci"><i className="bi bi-instagram" /></span>
                  <div>
                    <small>Instagram</small>
                    <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer">{SOCIAL.instagramHandle}</a>
                  </div>
                </li>
                <li>
                  <span className="ci"><i className="bi bi-youtube" /></span>
                  <div>
                    <small>YouTube</small>
                    <a href={SOCIAL.youtube} target="_blank" rel="noopener noreferrer">ADAPTUNE</a>
                  </div>
                </li>
                <li>
                  <span className="ci"><i className="bi bi-geo-alt-fill" /></span>
                  <div>
                    <small>Studio</small>
                    <address className="mb-0">
                      {ADDRESS.lines.map((l) => (
                        <span key={l} className="d-block">{l}</span>
                      ))}
                    </address>
                  </div>
                </li>
              </ul>
              <LazyMap title="Adaptune studio location" src={`https://www.google.com/maps?q=${encodeURIComponent(ADDRESS.mapQuery)}&output=embed`} />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
