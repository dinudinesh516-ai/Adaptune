import Reveal from './Reveal.jsx'
import { TEAM } from '../config.js'

// Photos in /team are matched to members by file name: "Vismai Shankar" → team/vismai-shankar.jpg
const photos = import.meta.glob('/team/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG,WEBP,AVIF}', {
  eager: true,
  import: 'default',
  query: { w: '700', format: 'webp', quality: '80', withoutEnlargement: 'true' },
})

const slug = (s) => s.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
const photoFor = (name) =>
  Object.entries(photos).find(([path]) => slug(path.split('/').pop().replace(/\.[^.]+$/, '')) === slug(name))?.[1]
const initials = (name) =>
  name
    .split(/\s+/)
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

export default function Team() {
  return (
    <section id="team" className="section section-alt">
      <div className="container">
        <Reveal className="text-center mb-5">
          <p className="eyebrow">Our team</p>
          <h2 className="section-title">
            The <span className="marker">crew</span> behind the moves
          </h2>
        </Reveal>

        <div className="row g-4 justify-content-center">
          {TEAM.map((m, i) => {
            const photo = photoFor(m.name)
            return (
              <div className="col-sm-6 col-lg-4" key={m.name} style={{ maxWidth: 380 }}>
                <Reveal delay={i * 0.12} className="team-card">
                  <div className="team-photo">
                    {photo ? (
                      <img src={photo} alt={m.name} loading="lazy" />
                    ) : (
                      <div className="team-placeholder" aria-hidden="true">
                        <i className="bi bi-person-fill" />
                        <span>{initials(m.name)}</span>
                      </div>
                    )}
                    {m.instagram && (
                      <a className="team-social" href={m.instagram} target="_blank" rel="noopener noreferrer" aria-label={`${m.name} on Instagram`}>
                        <i className="bi bi-instagram" />
                      </a>
                    )}
                  </div>
                  <div className="team-info">
                    <h3>{m.name}</h3>
                    {m.role && <p>{m.role}</p>}
                  </div>
                </Reveal>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
