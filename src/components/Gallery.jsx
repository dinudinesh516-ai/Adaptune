import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import Reveal from './Reveal.jsx'
import Lightbox from './Lightbox.jsx'
import { galleryImages, galleryCategories } from '../gallery.js'
import { SOCIAL } from '../config.js'

const PAGE_SIZE = 12

function useColumnCount() {
  const get = () => {
    const w = window.innerWidth
    if (w < 768) return 2
    if (w < 1200) return 3
    return 4
  }
  const [cols, setCols] = useState(get)
  useEffect(() => {
    const onResize = () => setCols(get())
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])
  return cols
}

// Place each image in the currently shortest column so portrait and landscape shots
// pack tightly while keeping roughly left-to-right, newest-first reading order.
function toMasonry(items, cols) {
  const columns = Array.from({ length: cols }, () => ({ height: 0, items: [] }))
  items.forEach((item, index) => {
    const target = columns.reduce((min, c) => (c.height < min.height ? c : min), columns[0])
    target.items.push({ ...item, index })
    target.height += item.height / item.width
  })
  return columns.map((c) => c.items)
}

export default function Gallery() {
  const [filter, setFilter] = useState('All')
  const [visible, setVisible] = useState(PAGE_SIZE)
  const [active, setActive] = useState(null)
  const cols = useColumnCount()

  const filtered = useMemo(
    () => (filter === 'All' ? galleryImages : galleryImages.filter((i) => i.category === filter)),
    [filter]
  )
  const shown = filtered.slice(0, visible)
  const columns = useMemo(() => toMasonry(shown, cols), [shown, cols])

  const changeFilter = (f) => {
    setFilter(f)
    setVisible(PAGE_SIZE)
  }

  return (
    <section id="gallery" className="section gallery-section">
      <div className="container">
        <Reveal className="text-center mb-4">
          <p className="eyebrow">Gallery</p>
          <h2 className="section-title">
            Moments in <span className="marker">motion</span>
          </h2>
          <p className="text-soft mx-auto mt-3" style={{ maxWidth: 560 }}>
            Rehearsals, stages and celebrations. Tap any photo to view it full screen.
          </p>
        </Reveal>

        {galleryCategories.length > 0 && (
          <Reveal className="gallery-filters" y={20}>
            {['All', ...galleryCategories].map((c) => (
              <button
                key={c}
                type="button"
                className={`chip ${filter === c ? 'active' : ''}`}
                onClick={() => changeFilter(c)}
                aria-pressed={filter === c}
              >
                {filter === c && <motion.span layoutId="chip-bg" className="chip-bg" transition={{ type: 'spring', bounce: 0.25, duration: 0.5 }} />}
                <span className="position-relative">{c}</span>
              </button>
            ))}
          </Reveal>
        )}

        {filtered.length === 0 ? (
          <p className="text-center text-soft py-5">
            Photos coming soon. Follow us on{' '}
            <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" className="text-brand">
              Instagram
            </a>{' '}
            for the latest.
          </p>
        ) : (
          <div className="masonry" key={`${filter}-${cols}`}>
            {columns.map((col, ci) => (
              <div className="masonry-col" key={ci}>
                {col.map((img) => (
                  <motion.button
                    type="button"
                    key={img.id}
                    className="tile"
                    style={{ aspectRatio: `${img.width} / ${img.height}` }}
                    onClick={() => setActive(img.index)}
                    initial={{ opacity: 0, y: 50, scale: 0.94 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.7, delay: ci * 0.08, ease: [0.22, 1, 0.36, 1] }}
                    aria-label={`Open photo: ${img.alt}`}
                  >
                    <img src={img.thumb} alt={img.alt} width={img.width} height={img.height} loading="lazy" decoding="async" />
                    <span className="tile-overlay">
                      {img.category && <span className="tile-tag">{img.category}</span>}
                      <i className="bi bi-arrows-angle-expand" />
                    </span>
                  </motion.button>
                ))}
              </div>
            ))}
          </div>
        )}

        {visible < filtered.length && (
          <div className="text-center mt-5">
            <button type="button" className="btn btn-outline-brand btn-lg" onClick={() => setVisible((v) => v + PAGE_SIZE)}>
              Load more <span className="opacity-75">({filtered.length - visible})</span>
            </button>
          </div>
        )}
      </div>

      <Lightbox images={filtered} index={active} onChange={setActive} onClose={() => setActive(null)} />
    </section>
  )
}
