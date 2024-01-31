import path from 'path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
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
    port: 3000
  }
})
