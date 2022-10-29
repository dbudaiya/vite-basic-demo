import { Options } from 'unplugin-auto-import/types'
export const AutoImportOptions: Options = {
  imports: [
    // presets
    'vue',
    'vue-router',
    'pinia',
    // '@vueuse/core',
    // custom
    {
      axios: [
        // default imports
        ['default', 'axios'] // import { default as axios } from 'axios',
      ]
    }
  ],
  dts: './auto-imports.d.ts',
  eslintrc: {
    enabled: true
  }
}
