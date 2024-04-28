/// <reference types="vitest" />
/// <reference types="vite/client" />
import { vitePlugin as remix } from '@remix-run/dev'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [
    remix({
      ignoredRouteFiles: ['**/*.scss'],
    }),
    tsconfigPaths(),
  ],
  test: {
    globals: true,
    include: ['test/**/*.test.tsx', 'test/**/*.test.ts'],
    setupFiles: ['vitest/setup.ts'],
    passWithNoTests: true,
  },
})
