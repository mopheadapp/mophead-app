export default {
  ssr: false,
  server: {
    port: process.env.PORT || 8001
  },
  generate: {
    fallback: true
  },
  head: {
    titleTemplate: '%s',
    title: 'mophead',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { href: "https://fonts.googleapis.com/css2?family=Montserrat&display=swap", rel: "stylesheet" }
    ]
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
