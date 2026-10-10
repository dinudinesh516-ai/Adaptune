import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { lockScroll } from '../scrollLock.js'
import Reveal from './Reveal.jsx'
import { TEAM, TEAM_DEFAULTS, TEAM_ORDER } from '../config.js'

// Every photo in /team becomes a member. File name (without extension) is the key into TEAM.
const thumbs = import.meta.glob('/team/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG,WEBP,AVIF}', {
  eager: true,
  import: 'default',
  query: { w: '640', format: 'webp', quality: '80', withoutEnlargement: 'true' },
})
const large = import.meta.glob('/team/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG,WEBP,AVIF}', {
  eager: true,
  import: 'default',
  query: { w: '1000', format: 'webp', quality: '84', withoutEnlargement: 'true' },
})

const keyOf = (path) => path.split('/').pop().replace(/\.[^.]+$/, '')
const rank = (key) => {
  const i = TEAM_ORDER.findIndex((k) => k.toLowerCase() === key.toLowerCase())
  return i === -1 ? TEAM_ORDER.length : i
}
const detailsFor = (key) => {
  const match = Object.keys(TEAM).find((k) => k.toLowerCase() === key.toLowerCase())
  return { ...TEAM_DEFAULTS, name: key, ...(match ? TEAM[match] : {}) }
}

const members = Object.keys(thumbs)
  .map((path) => {
    const key = keyOf(path)
    return { key, ...detailsFor(key), photo: thumbs[path], photoLarge: large[path] }
  })
  .sort((a, b) => rank(a.key) - rank(b.key) || a.key.localeCompare(b.key))

export default function Team() {
  const [active, setActive] = useState(null)

  if (!members.length) return null

  return (
    <section id="team" className="section section-alt">
      <div className="container">
        <Reveal className="text-center mb-5">
          <p className="eyebrow">Our team</p>
          <h2 className="section-title">
            The <span className="marker">crew</span> behind the moves
          </h2>
          <p className="text-soft mx-auto mt-3" style={{ maxWidth: 520 }}>
            Tap a profile to meet the dancer.
          </p>
        </Reveal>

        <div className="row g-4 justify-content-center">
          {members.map((m, i) => (
            <div className="col-6 col-md-4 col-xl-3" key={m.key}>
              <Reveal delay={(i % 4) * 0.1} className="h-100">
                <button type="button" className="team-card" onClick={() => setActive(i)} aria-haspopup="dialog">
                  <span className="team-photo">
                    <img src={m.photo} alt={m.name} loading="lazy" decoding="async" />
                    <span className="team-view">
                      View profile <i className="bi bi-arrow-right" />
                    </span>
                  </span>
                  <span className="team-info">
                    <span className="team-name">{m.name}</span>
                    {m.role && <span className="team-role">{m.role}</span>}
                  </span>
                </button>
              </Reveal>
            </div>
          ))}
        </div>
      </div>

      <TeamModal index={active} onChange={setActive} onClose={() => setActive(null)} />
    </section>
  )
}

function TeamModal({ index, onChange, onClose }) {
  const m = index !== null ? members[index] : null
  const [dir, setDir] = useState(0)
  const closeRef = useRef(null)
  const openerRef = useRef(null)

  const go = useCallback(
    (step) => {
      setDir(step)
      onChange((i) => (i + step + members.length) % members.length)
    },
    [onChange]
  )

  const isOpen = m !== null
  useEffect(() => {
    if (!isOpen) return
    openerRef.current = document.activeElement
    closeRef.current?.focus({ preventScroll: true })
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') go(1)
      if (e.key === 'ArrowLeft') go(-1)
    }
    const unlock = lockScroll()
    window.addEventListener('keydown', onKey)
    return () => {
      unlock()
      window.removeEventListener('keydown', onKey)
      openerRef.current?.focus?.({ preventScroll: true })
    }
  }, [isOpen, go, onClose])

  return (
    <AnimatePresence>
      {m && (
        <motion.div
          className="profile-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
        >
          <motion.div
            className="profile-card"
            role="dialog"
            aria-modal="true"
            aria-labelledby="profile-name"
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.97 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <button ref={closeRef} type="button" className="profile-close" onClick={onClose} aria-label="Close profile">
              <i className="bi bi-x-lg" />
            </button>

            <AnimatePresence mode="wait" initial={false} custom={dir}>
              <motion.div
                key={m.key}
                className="profile-body"
                custom={dir}
                initial={{ opacity: 0, x: dir * 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: dir * -40 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="profile-photo">
                  <img src={m.photoLarge} alt={m.name} />
                </div>

                <div className="profile-details">
                  <p className="eyebrow mb-2">{m.role}</p>
                  <h3 id="profile-name" className="profile-name">{m.name}</h3>

                  <dl className="profile-facts">
                    <div>
                      <dt>Experience</dt>
                      <dd>
                        <span className="profile-big">{m.experience}</span> years
                      </dd>
                    </div>
                  </dl>

                  <p className="profile-label">Known styles</p>
                  <ul className="profile-styles">
                    {m.knownStyles.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>

                  <p className="profile-bio">{m.bio}</p>

                  {m.instagram && (
                    <a className="btn btn-outline-brand btn-sm" href={m.instagram} target="_blank" rel="noopener noreferrer">
                      <i className="bi bi-instagram me-2" />
                      Instagram
                    </a>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>

            {members.length > 1 && (
              <div className="profile-nav">
                <button type="button" onClick={() => go(-1)} aria-label="Previous team member">
                  <i className="bi bi-chevron-left" />
                </button>
                <span>
                  {index + 1} / {members.length}
                </span>
                <button type="button" onClick={() => go(1)} aria-label="Next team member">
                  <i className="bi bi-chevron-right" />
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
