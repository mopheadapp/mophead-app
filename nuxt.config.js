export default {
  ssr: false,
  server: {
    port: process.env.PORT || 8001
  },
  generate: {
    fallback: true
  },
  loading: false,
  head: {
    titleTemplate: '%s',
    title: 'mophead',
    htmlAttrs: {
      lang: 'tr'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      { href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap", rel: "stylesheet" }
    ]
  },
  modules: [
    '@nuxtjs/i18n',
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],
  axios: {
    baseURL: 'https://apis.mophead.app/api/',
    proxyHeaders: false,
    credentials: false
  },
  publicRuntimeConfig: {
    axios: {
      browserBaseURL: 'http://localhost:3000/api/',
      proxyHeaders: false,
      credentials: false
    }
  },
  privateRuntimeConfig: {
    axios: {
      baseURL: 'https://apis.mophead.app/api/',
      proxyHeaders: false,
      credentials: false
    }
  },
  i18n: {
    locales: ['tr', 'en'],
    defaultLocale: 'tr',
    strategy: 'prefix',
    vueI18n: {
      fallbackLocale: 'tr'
    }
  },
  components: true,
  buildModules: [
    '@nuxtjs/vuetify',
  ],
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    theme: {
      options: { customProperties: true },
      dark: false, themes: {
        light: {
          primary: "723881",
          accent: "FFFFFF",
          text: "20262E",
          secondaryText: "5D5D5D",
          btnText: "F5F5F7",
        }
      }
    }
  },
}
