import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
//add base in vite


export default defineConfig({
  base: '/ReactWithVite/',
  plugins: [react()]
})
