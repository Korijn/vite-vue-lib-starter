import path from 'path';

import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.js"),
      name: "vue-three",
      fileName: (format) => `vue-three.${format}.js`,
    },
    rollupOptions: {
      plugins: [
        peerDepsExternal(),
      ],
      output: {
        globals: {
          vue: "vue",
          three: "three",
        },
      },
    },
  },
  plugins: [vue()],
})
