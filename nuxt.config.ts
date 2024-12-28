export default defineNuxtConfig({
  app: {
    head: {
      title: 'Oxford English Services',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'naver-site-verification', content: '9d5f727843c2afe41742141058a9d97ff240e236' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'We help businesses and professionals communicate more effectively with an international audience.' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },

  css: [],
  plugins: [],
  components: true,

  modules: ['@nuxt/content', '@nuxtjs/i18n'],

  content: {},

  i18n: {
    langDir: 'locales',
    locales: [
      {
        code: 'en',
        file: 'en.json'
      },
      {
        code: 'kr',
        file: 'kr.json'
      }
    ],
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    compilation: {strictMessage: false}
  },

  compatibilityDate: '2024-12-27'
})