import { vitePlugin as remix } from '@remix-run/dev'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import svgr from "vite-plugin-svgr"

const remixConfig = {
  ignoredRouteFiles: [
    '**/*.scss',
    '**/*.svg',
  ],
}

const svgrConfig = {
  include: 'public/icons/**/*.svg',
}

export default defineConfig({
  plugins: [
    remix(remixConfig),
    svgr(svgrConfig),
    tsconfigPaths(),
  ],
  test: {
    globals: true,
    include: ['test/**/*.test.tsx', 'test/**/*.test.ts'],
    setupFiles: ['vitest/setup.ts'],
    passWithNoTests: true,
  },
})
