import { BRAND } from '../config.js'

export default function Marquee() {
  const items = [...BRAND.pillars, ...BRAND.pillars, ...BRAND.pillars]
  return (
    <div className="marquee" role="img" aria-label={BRAND.pillars.join(', ')}>
      <div className="marquee-track" aria-hidden="true">
        {[0, 1].map((k) => (
          <div className="marquee-group" key={k}>
            {items.map((w, i) => (
              <span key={i}>
                {w.toUpperCase()} <i className="bi bi-circle-fill" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
