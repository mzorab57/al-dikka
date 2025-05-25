import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom', 'framer-motion', 'i18next', 'react-i18next'],
          ui: ['@headlessui/react', 'aos', 'react-icons'],
          slick: ['react-slick', 'slick-carousel']
        }
      }
    },
    chunkSizeWarningLimit: 600
  }
})
