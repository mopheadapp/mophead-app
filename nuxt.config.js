export default {
  server: {
    port: process.env.PORT || 8001
  },
  generate: {
    fallback: true
  },
  loading: false,
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'author', name: 'author', content: 'mophead' },
      { hid: 'keywords', name: 'keywords', content: 'mophead, saç, hair, hair transplant, saç ekimi' },
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
  i18n: {
    locales: [
      {
        code: 'tr',
        name: 'Türkçe',
        file: 'tr.json'
      },
      {
        code: 'en',
        name: 'English',
        file: 'en.json'
      }
    ],
    langDir: 'locales/',
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
