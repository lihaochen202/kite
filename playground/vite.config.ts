import { resolve } from 'node:path'

import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'

export default defineConfig({
  plugins: [
    Vue(),
    UnoCSS(),
  ],
  resolve: {
    alias: {
      '@lihaochen/kite': resolve(__dirname, '../packages/kite/src/'),
    },
  },
})
