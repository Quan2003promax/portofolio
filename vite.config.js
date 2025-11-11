import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // base: '/portofolio', // Commented out for Netlify deployment (root path)
  plugins: [react(), tailwindcss()],
})
