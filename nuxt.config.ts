// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxthub/core", "nuxt-vuefire"],
  ssr: true,
  vuefire: {
    config: {
      apiKey: process.env.GOOGLE_FIREBASE_CONFIG_API_KEY,
      authDomain: process.env.GOOGLE_FIREBASE_CONFIG_AUTH_DOMAIN,
      projectId: process.env.GOOGLE_FIREBASE_CONFIG_PROJECT_ID,
      appId: process.env.GOOGLE_FIREBASE_CONFIG_APP_ID,
      // there could be other properties depending on the project
    },
  },
});
