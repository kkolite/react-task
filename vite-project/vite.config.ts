import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import istanbul from 'vite-plugin-istanbul';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    istanbul({
        cypress: true,
        requireEnv: false,
      }),
    ],
  test: {
    coverage: {
      provider: 'istanbul',
    },
  },
  envDir: './'
})
