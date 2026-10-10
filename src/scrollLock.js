// Locks page scrolling while a popup (team profile, photo viewer) is open.
// The lock goes on <html>, not <body>: <html> has `overflow-x: clip`, which stops an
// overflow set on <body> from reaching the page, so body-only locking leaves the page
// scrollbar visible and the page scrollable behind the popup.
// `scrollbar-gutter: stable` (in styles.css) keeps the layout from jumping when the bar hides.
let locks = 0

export function lockScroll() {
  if (locks++ === 0) document.documentElement.classList.add('scroll-locked')
  return () => {
    if (--locks === 0) document.documentElement.classList.remove('scroll-locked')
  }
}
