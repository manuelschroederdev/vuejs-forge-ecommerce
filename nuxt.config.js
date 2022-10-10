export default defineNuxtConfig({
  buildModules: ['@nuxtjs/tailwindcss'],
  modules: [['@storyblok/nuxt', { accessToken: process.env.STORYBLOK_TOKEN }]],
  app: {
    head: {
      bodyAttrs: {
        class: ['bg-white'],
      },
    },
  },
})
