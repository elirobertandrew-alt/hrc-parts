import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { securityHeaders } from './src/securityHeaders.ts'

export default defineConfig({
  plugins: [react()],
  server: { host: '127.0.0.1' },
  preview: { headers: securityHeaders },
})
