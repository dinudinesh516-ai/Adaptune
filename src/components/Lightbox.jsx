import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const slide = {
  enter: (dir) => ({ x: dir > 0 ? 120 : -120, opacity: 0, scale: 0.96 }),
  center: { x: 0, opacity: 1, scale: 1 },
  exit: (dir) => ({ x: dir > 0 ? -120 : 120, opacity: 0, scale: 0.96 }),
}

export default function Lightbox({ images, index, onChange, onClose }) {
  const open = index !== null && images[index]
  const [dir, setDir] = useState(0)
  const [playing, setPlaying] = useState(false)
  const thumbsRef = useRef(null)

  const go = useCallback(
    (step) => {
      setDir(step)
      onChange((i) => (i + step + images.length) % images.length)
    },
    [images.length, onChange]
  )

  // Keyboard controls + body scroll lock
  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') go(1)
      if (e.key === 'ArrowLeft') go(-1)
    }
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [open, go, onClose])

  // Slideshow
  useEffect(() => {
    if (!open || !playing) return
    const t = setTimeout(() => go(1), 3500)
    return () => clearTimeout(t)
  }, [open, playing, index, go])

  useEffect(() => {
    if (!open) setPlaying(false)
  }, [open])

  // Preload neighbours for instant swipes
  useEffect(() => {
    if (!open) return
    ;[1, -1].forEach((d) => {
      const n = images[(index + d + images.length) % images.length]
      if (n) new Image().src = n.full
    })
    thumbsRef.current?.querySelector('.active')?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
  }, [open, index, images])

  const img = open ? images[index] : null

  return (
    <AnimatePresence>
      {img && (
        <motion.div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
        >
          <div className="lb-bar" onClick={(e) => e.stopPropagation()}>
            <span className="lb-count">
              {index + 1} / {images.length}
            </span>
            <div className="d-flex gap-2">
              <button type="button" className="lb-btn" onClick={() => setPlaying((p) => !p)} aria-label={playing ? 'Pause slideshow' : 'Play slideshow'}>
                <i className={`bi ${playing ? 'bi-pause-fill' : 'bi-play-fill'}`} />
              </button>
              <button type="button" className="lb-btn" onClick={onClose} aria-label="Close">
                <i className="bi bi-x-lg" />
              </button>
            </div>
          </div>

          <div className="lb-stage">
            <AnimatePresence initial={false} custom={dir} mode="popLayout">
              <motion.img
                key={img.id}
                src={img.full}
                alt={img.alt}
                className="lb-img"
                custom={dir}
                variants={slide}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                drag={images.length > 1 ? 'x' : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.6}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -80 || info.velocity.x < -500) go(1)
                  else if (info.offset.x > 80 || info.velocity.x > 500) go(-1)
                }}
                onClick={(e) => e.stopPropagation()}
                draggable={false}
              />
            </AnimatePresence>
          </div>

          {images.length > 1 && (
            <>
              <button type="button" className="lb-nav lb-prev" onClick={(e) => (e.stopPropagation(), go(-1))} aria-label="Previous photo">
                <i className="bi bi-chevron-left" />
              </button>
              <button type="button" className="lb-nav lb-next" onClick={(e) => (e.stopPropagation(), go(1))} aria-label="Next photo">
                <i className="bi bi-chevron-right" />
              </button>
              <div className="lb-thumbs" ref={thumbsRef} onClick={(e) => e.stopPropagation()}>
                {images.map((t, i) => (
                  <button
                    type="button"
                    key={t.id}
                    className={i === index ? 'active' : ''}
                    onClick={() => {
                      setDir(i > index ? 1 : -1)
                      onChange(i)
                    }}
                    aria-label={`Show photo ${i + 1}`}
                  >
                    <img src={t.thumb} alt="" loading="lazy" />
                  </button>
                ))}
              </div>
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
