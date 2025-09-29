import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Use a root-relative alias to avoid Node built-ins in ESM configs
      '@': '/src',
    },
  },
})
