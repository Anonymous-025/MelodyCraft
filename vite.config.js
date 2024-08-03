// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/MelodyCraft/', // Make sure this matches your repository name
  plugins: [react()],
  homepage: 'https://Anonymous-025.github.io/MelodyCraft/',
})
