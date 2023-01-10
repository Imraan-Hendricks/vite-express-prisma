import autoprefixer from 'autoprefixer';
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: 'src',
  build: {
    outDir: '../build',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, '/src/index.html'),
        nested: resolve(__dirname, '/src/contact.html'),
      },
    },
  },
  server: {
    port: 3000,
    proxy: {
      '/api': 'http://localhost:5000',
    },
  },
  css: {
    postcss: {
      plugins: [autoprefixer()],
    },
  },
});
