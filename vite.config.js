import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // server: {
  //   proxy: {
  //     '/api': {
  //       target: 'https://d849-149-40-62-123.ngrok-free.app',
  //       changeOrigin: true,
  //       secure: false,
  //     },
  //   },
  // },
  plugins: [
    react(),
        tailwindcss(),
    
  ],
  server: {
    open: true, 
  },
  optimizeDeps: {
    include: [
      'react-leaflet', 
      'leaflet', 
      'react/jsx-runtime', 
      'react/jsx-dev-runtime'
    ]
  }
})