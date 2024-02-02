import path from 'path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  plugins: [
    react(),
    svgr({
      include: '**/*.svg'
    })
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  define: {
    __API__: JSON.stringify('https://front-test.hex.team')
  },
  build: {
    outDir: 'build'
  },
  server: {
    port: 3000,
    host: '0.0.0.0'
  },
  preview: {
    port: 4000
  }
})
