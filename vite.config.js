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
  include: './app/icons/**/*.svg',
  svgrOptions: {
    ref: true,
  }
}

const cssConfig = {
  preprocessorOptions: {
    scss: {
      additionalData: `
        @import "./app/styles/_variables.scss";
        @import "./app/styles/_mixins.scss";
        @import "./app/styles/_fonts.scss";
      `
    }
  }
}

export default defineConfig({
  css: cssConfig,
  plugins: [
    remix(remixConfig),
    svgr(svgrConfig),
    tsconfigPaths(),
  ],
  test: {
    globals: true,
    include: ['./test/**/*.test.tsx', './test/**/*.test.ts'],
    setupFiles: ['./vitest.setup.ts'],
    passWithNoTests: true,
  },
})
