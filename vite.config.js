// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/',
  plugins: [react()],
  build: {
    target: 'es2020',
    sourcemap: false,
    cssCodeSplit: true,
    assetsInlineLimit: 2048,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) return undefined
          if (id.includes('react-dom')) return 'vendor-react-dom'
          if (id.includes('/react/') || id.endsWith('/react') || id.includes('react/jsx-runtime')) return 'vendor-react'
          if (id.includes('react-router')) return 'vendor-router'
          if (id.includes('framer-motion')) return 'vendor-framer'
          if (id.includes('dompurify')) return 'vendor-dompurify'
          if (id.includes('react-helmet-async')) return 'vendor-helmet'
          if (id.includes('@vercel')) return 'vendor-vercel'
          return 'vendor'
        },
      },
    },
  },
})
