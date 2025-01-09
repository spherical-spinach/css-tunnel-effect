import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    base: 'https://spherical-spinach.github.io/css-tunnel-effect/',
  },
})
