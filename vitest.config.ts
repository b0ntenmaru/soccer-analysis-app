/// <reference types="vitest" />

import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [Vue()],
  test: {
    globals: true,
    environment: 'jsdom'
  },
  resolve: {
    // nuxtのtsconfigからコピペ
    alias: {
      '~~': '.',
      '~~/*': './*',
      '@@': '.',
      '@@/*': './*',
      '~': 'src/client',
      '~/*': 'src/client/*',
      '@': 'src/client',
      '@/*': 'src/client/*'
    }
  }
});
