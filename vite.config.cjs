const { defineConfig } = require('vite')
const react = require('@vitejs/plugin-react')

module.exports = defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    host: '0.0.0.0',
    open: true
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    minify: 'terser'
  }
}) 