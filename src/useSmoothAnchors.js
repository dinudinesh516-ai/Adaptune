import { useEffect } from 'react'

// Smoothly scrolls to in-page anchors (#about, #gallery, …) and offsets for the fixed navbar.
// Animated by hand because browsers skip `behavior: 'smooth'` when the OS has animations turned off.
const easeInOutCubic = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2)
let frame = 0

function animateScrollTo(target) {
  cancelAnimationFrame(frame)
  const start = window.scrollY
  const distance = target - start
  if (Math.abs(distance) < 2) return
  const duration = Math.min(1100, Math.max(450, Math.abs(distance) * 0.35))
  const t0 = performance.now()

  // Let the visitor take over by scrolling themselves mid-animation
  const stop = () => {
    cancelAnimationFrame(frame)
    window.removeEventListener('wheel', stop)
    window.removeEventListener('touchstart', stop)
  }
  window.addEventListener('wheel', stop, { passive: true })
  window.addEventListener('touchstart', stop, { passive: true })

  const step = (now) => {
    const t = Math.min(1, (now - t0) / duration)
    // 'instant' is essential: Bootstrap sets `scroll-behavior: smooth` on :root, which would turn
    // every per-frame step into its own competing smooth-scroll and cause stalls.
    window.scrollTo({ top: start + distance * easeInOutCubic(t), left: 0, behavior: 'instant' })
    if (t < 1) frame = requestAnimationFrame(step)
    else stop()
  }
  frame = requestAnimationFrame(step)
}

export function scrollToHash(hash) {
  if (hash === '#top') {
    animateScrollTo(0)
    history.replaceState(null, '', window.location.pathname)
    return
  }
  const el = document.querySelector(hash)
  if (!el) return
  // Use the collapsed navbar height (--nav-h), not offsetHeight, which includes the open mobile menu
  const navH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h'), 10) || 72
  const max = document.documentElement.scrollHeight - window.innerHeight
  animateScrollTo(Math.min(max, el.getBoundingClientRect().top + window.scrollY - navH + 1))
  history.replaceState(null, '', hash)
}

export default function useSmoothAnchors() {
  useEffect(() => {
    const onClick = (e) => {
      const a = e.target.closest('a[href^="#"]')
      if (!a || e.defaultPrevented || e.metaKey || e.ctrlKey) return
      const hash = a.getAttribute('href')
      if (hash.length < 2) return
      e.preventDefault()
      scrollToHash(hash)
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])
}
