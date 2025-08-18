// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// References:
// - Vite config docs: https://vitejs.dev/config/
// - GitHub Pages setup with Vite: https://vitejs.dev/guide/static-deploy.html

export default defineConfig({
  plugins: [react()],
  base: '/Portfolio/'
})
