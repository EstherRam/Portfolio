// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// References:
// – Vite config: https://vitejs.dev/config/
// – Vite + Pages: https://vitejs.dev/guide/static-deploy.html
export default defineConfig({
  plugins: [react()],
  base: '/Portfolio/'
})

