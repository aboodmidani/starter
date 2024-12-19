// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['@nuxt/content', '@nuxthq/studio', '@nuxt/ui'],
  css: ['~/css/tailwind.css'],

  routeRules: {
    '/': { prerender: true }
  },

  compatibilityDate: '2024-12-19'
})