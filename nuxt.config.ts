// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['nuxt-auth-sanctum'],
  css: [
    "assets/css/vendor/bootstrap.min.css",
    "assets/css/styles.min.css"
  ],
  sanctum: {
    baseUrl: 'http://socialcrypto.test',
  }
})