// Every image placed in the /gallery folder (project root) is picked up automatically at build time.
// Sub-folders become filter categories, e.g. /gallery/annual-day/photo.jpg → "Annual Day".
// Images are sorted by file name, newest-looking names first (e.g. 2026-10-07-show.jpg before 2026-01-01-x.jpg).

const thumbs = import.meta.glob('/gallery/**/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG,WEBP,AVIF}', {
  eager: true,
  import: 'default',
  query: { w: '900', format: 'webp', quality: '78', withoutEnlargement: 'true', as: 'metadata' },
})

const fulls = import.meta.glob('/gallery/**/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG,WEBP,AVIF}', {
  eager: true,
  import: 'default',
  query: { w: '2000', format: 'webp', quality: '85', withoutEnlargement: 'true' },
})

const titleCase = (s) => s.replace(/[-_]+/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()).trim()

export const galleryImages = Object.keys(thumbs)
  .map((path) => {
    const meta = thumbs[path]
    const parts = path.replace(/^\/gallery\//, '').split('/')
    const file = parts.pop()
    return {
      id: path,
      file,
      category: parts.length ? titleCase(parts[0]) : null,
      thumb: meta.src,
      full: fulls[path],
      width: meta.width,
      height: meta.height,
      alt: `Adaptune Dance Crew – ${titleCase(file.replace(/\.[^.]+$/, ''))}`,
    }
  })
  .sort((a, b) => b.file.localeCompare(a.file, undefined, { numeric: true, sensitivity: 'base' }))

export const galleryCategories = [...new Set(galleryImages.map((i) => i.category).filter(Boolean))].sort()
