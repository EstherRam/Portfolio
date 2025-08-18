// vite.config.js
// Vite config for GitHub Pages + React
// References:
// - Vite config: https://vitejs.dev/config/
// - Vite static deploy: https://vitejs.dev/guide/static-deploy.html
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Portfolio/',
})



