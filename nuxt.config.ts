import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  app: {
    head: {
      title: 'Orchard Frontend Test by Daniel F. Delgado',
      meta: [
        {
          charset: 'utf-8'
        },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0, shrink-to-fit=no'
        },
        {
          hid: 'description',
          name: 'description',
          content: 'Orchard Frontend Test by Daniel F. Delgado',
        }
      ]
    }
  },
  build: {
    transpile: ['vuetify']
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    }
  ],
  vite:{
    vue: {
      template: {
        transformAssetUrls
      }
    }
  },
  compatibilityDate: '2024-11-01',
  devtools: {
    enabled: true
  }
})
