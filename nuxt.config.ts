// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ["@nuxt/content", "@nuxthq/studio", "@nuxt/ui"],
  css: ["~/assets/css/tailwind.css", "~/assets/css/main.css"],

  routeRules: {
    "/": { prerender: true },
  },

  compatibilityDate: "2024-12-19",
});
