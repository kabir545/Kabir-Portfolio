import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: './',  // ensures paths work correctly on Vercel
  plugins: [react()],
})
