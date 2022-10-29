import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import {
  ElementPlusResolver
} from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
import VueSetupExtend from 'vite-plugin-vue-setup-extend'
import { AutoImportOptions } from './vite-variable-config.ts'

export default defineConfig({
  plugins: [
    vue(),
    AutoImport(AutoImportOptions),
    Components({ resolvers: ElementPlusResolver() }),
    VueSetupExtend()
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    },
    extensions: ['.ts', '.js', '.json', '.jsx']
  }
})
