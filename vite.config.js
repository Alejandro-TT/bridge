import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main:       resolve(__dirname, 'index.html'),
        nosotros:   resolve(__dirname, 'nosotros.html'),
        razones:    resolve(__dirname, 'razones.html'),
        colegios:   resolve(__dirname, 'colegios.html'),
        blog:       resolve(__dirname, 'blog.html'),
        admisiones: resolve(__dirname, 'admisiones.html'),
      },
    },
  },
});
