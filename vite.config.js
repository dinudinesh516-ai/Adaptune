import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { imagetools } from 'vite-imagetools'

// imagetools resizes + converts every photo in /gallery to optimised WebP at build time,
// so you can drop in full-size phone photos without slowing the site down.
export default defineConfig({
  plugins: [react(), imagetools()],
})
