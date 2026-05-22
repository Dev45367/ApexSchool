import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'

export default defineConfig({
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
  server: {
    host: true,        // 🔥 IMPORTANT (same as 0.0.0.0)
    port: 5173,        // default vite port
    strictPort: true   // optional (prevents auto port change)
  }
})