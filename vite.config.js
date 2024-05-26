import { vitePlugin as remix } from '@remix-run/dev'
import { vercelPreset } from '@vercel/remix/vite'
import { remixDevTools } from 'remix-development-tools'
import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'
import tsconfigPaths from 'vite-tsconfig-paths'

const remixConfig = {
  ignoredRouteFiles: ['**/*.scss', '**/*.svg'],
  presets: [vercelPreset()],
}

const svgrConfig = {
  include: './app/icons/**/*.svg',
  svgrOptions: {
    ref: true,
  },
}

const cssConfig = {
  preprocessorOptions: {
    scss: {
      additionalData: `
        @import "./app/styles/_variables.scss";
        @import "./app/styles/_mixins.scss";
        @import "./app/styles/_fonts.scss";
      `,
    },
  },
}

const baseViteConfig = {
  css: cssConfig,
  plugins: [remix(remixConfig), svgr(svgrConfig), tsconfigPaths()],
  test: {
    globals: true,
    include: ['./test/**/*.test.tsx', './test/**/*.test.ts'],
    setupFiles: ['./vitest.setup.ts'],
    passWithNoTests: true,
  },
  resolve: {
    alias: {
      '.prisma/client/index-browser':
        './node_modules/.prisma/client/index-browser.js',
      '.prisma/client/default': './node_modules/.prisma/client/default.js',
    },
  },
}

export default defineConfig(
  process.env.NODE_ENV === 'production'
    ? {
        ...baseViteConfig,
        ssr: {
          noExternal: true,
        },
      }
    : {
        ...baseViteConfig,
        plugins: [remixDevTools(), ...baseViteConfig.plugins],
      },
)
