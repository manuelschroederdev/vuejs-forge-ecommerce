export default defineNuxtConfig({
  buildModules: ['@nuxtjs/tailwindcss'],
  modules: [['@storyblok/nuxt', { accessToken: process.env.STORYBLOK_TOKEN }]],
  css: [
    '@/assets/css/roboto.css',
  ],
  app: {
    head: {
      bodyAttrs: {
        class: ['bg-white'],
      },
    },
  },
  runtimeConfig: {
    // Keys within public, will be also exposed to the client-side
    public: {
      shopifyToken: process.env.SHOPIFY_TOKEN || "shopify_token",
    }
  }
})
