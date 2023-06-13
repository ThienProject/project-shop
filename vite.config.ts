import { fileURLToPath, URL } from 'node:url'
import * as path from "path";
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Pages from "vite-plugin-pages";
import Layouts from "vite-plugin-vue-layouts";
import AutoImport from "unplugin-auto-import/vite";
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      "@pages": path.resolve(__dirname, "./src/pages"),

    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/scss/_mixins.scss";`,
      },
    },
  },
  plugins: [vue(), vueJsx(), Pages(), Layouts(), AutoImport({
    include: [
      /\.[t]s?$/, // .ts
      /\.vue$/,
      /\.vue\?vue/, // .vue
    ],
    dts: "./src/auto-imports.d.ts",
    dirs: [
      "./src/composables",
      "./src/composables/**",
      "./src/components/**",
    ],
  })],
})

