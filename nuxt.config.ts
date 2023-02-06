// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  srcDir: 'src/client',
  serverDir: 'src/server',
  runtimeConfig: {
    public: {
      API_PATH: process.env.API_PATH,
      API_KEY: process.env.API_KEY
    }
  },
  plugins: ['@/plugins/antd']
});
