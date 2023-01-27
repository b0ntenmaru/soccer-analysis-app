// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      API_PATH: process.env.API_PATH,
      API_KEY: process.env.API_KEY,
    },
  }
})
