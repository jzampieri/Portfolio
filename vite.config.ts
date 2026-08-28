import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    // Honour an injected PORT so the dev server can be started alongside others.
    port: process.env.PORT ? Number(process.env.PORT) : 5173,
  },
})
