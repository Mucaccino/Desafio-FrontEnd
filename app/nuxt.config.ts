// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  modules: ["@nuxt/ui", '@nuxtjs/i18n'],
  i18n: {
    // Module Options
    lazy: true,
    langDir: "locales", 
    strategy: "prefix_except_default",
    defaultLocale: "pt", // Default Language
    locales: [
        { code: "pt", iso: "pt-BR", file: "pt.json"},
        { code: "en", iso: "en-US", file: "en.json" },
    ],
  }
})