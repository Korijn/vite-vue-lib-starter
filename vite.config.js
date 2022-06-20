import path from 'path';

import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.js"),
      name: "my-vue-lib",
      fileName: (format) => `my-vue-lib.${format}.js`,
    },
    rollupOptions: {
      plugins: [
        peerDepsExternal(),
      ],
      output: {
        globals: {
          vue: "vue",
        },
      },
    },
  },
  plugins: [vue()],
})
