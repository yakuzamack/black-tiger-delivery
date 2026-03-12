import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? '/black-tiger-delivery/' : '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: undefined,
      }
    }
  },
  define: {
    'process.env.VITE_ANALYTICS_ENDPOINT': JSON.stringify(process.env.VITE_ANALYTICS_ENDPOINT || ''),
    'process.env.VITE_ANALYTICS_WEBSITE_ID': JSON.stringify(process.env.VITE_ANALYTICS_WEBSITE_ID || '')
  }
})