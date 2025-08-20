import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Map '@' to the **root of your repo**
      '@': path.resolve(__dirname, '../../')
    }
  },
  base: '/hs-competition-results/'
})
