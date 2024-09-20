export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Oxford English Services',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'naver-site-verification', content: '9d5f727843c2afe41742141058a9d97ff240e236' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'We help businesses and professionals communicate more effectively with an international audience.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',

    // https://content.nuxtjs.org/
    '@nuxt/content', 

    // https://i18n.nuxtjs.org
    'nuxt-i18n'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {

  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {

  }, 

  // i18n configuration: https://i18n.nuxtjs.org/basic-usage
  i18n: {
    locales: ['en', 'kr'], 
    defaultLocale: 'en', 
    vueI18n: {
      fallbackLocale: 'en', 
      message: {
        en: {
        }, 
        kr: {

        }
      }
    }, 

    // Enable per-component translations: 
    // https://i18n.nuxtjs.org/per-component-translations
    vueI18nLoader: true
  }
}
