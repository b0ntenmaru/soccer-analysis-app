// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src/client',
  serverDir: 'src/server',
  runtimeConfig: {
    public: {
      API_PATH: process.env.API_PATH,
      API_KEY: process.env.API_KEY
    }
  },
  css: ['vuetify/lib/styles/main.sass', 'mdi/css/materialdesignicons.min.css'],
  build: {
    transpile: ['vuetify']
  },
  plugins: ['@/plugins/antd']
});
