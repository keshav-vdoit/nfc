import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()]
  // server:{
  //   proxy:{
  //     '/api': {
  //       target: 'https://mnsrc7w1-5000.inc1.devtunnels.ms',
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/api/, ''),
  //     },
  //   }
  // }
})
