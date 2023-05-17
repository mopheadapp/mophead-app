<script>
export default {
  name: "FooterComponent",
  data() {
    return {
      items: [
        { icon: 'mdi-facebook', text: "Facebook" },
        { icon: 'mdi-twitter', text: "Twitter" },
        { icon: 'mdi-instagram', text: "Instagram" },
        { icon: 'mdi-linkedin', text: "LinkedIn" }
      ],
    }
  },
  methods: {
    onClickSocial(social) {
      let url = null
      if (social === "Facebook") url = "https://www.facebook.com/mopheadapp"
      if (social === "Twitter") url = "https://www.twitter.com/mopheadapp"
      if (social === "Instagram") url = "https://www.instagram.com/mopheadapp"
      if (social === "Linkedin") url = "https://www.instagram.com/mopheadapp"
      if (social === "Clinic") url = "https://clinic.mophead.app/"
      window.open(url, '_blank')
    },

  },
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    },
  }
}
</script>
<template>
  <div class='text'>
    <v-card flat min-height='320px' color='text'>
      <v-container color='text'>
        <div class='d-flex align-start flex-wrap'>
          <div class='pa-6 ml-12 mr-12'>
            <div class='text-h5 font-weight-bold mb-4 btnText--text'>{{ $t('company') }}</div>
            <nuxt-link :to='localePath("about")' class='link'>
              <div class='text-body-1 mb-2 btnText--text hover-privacy'>{{ $t('about') }}</div>
            </nuxt-link>
            <nuxt-link :to='localePath("pricing")' class='link'>
              <div class='text-body-1 mb-2 btnText--text hover-privacy'>{{ $t('prices') }}</div>
            </nuxt-link>
            <div class='text-body-1 mb-2 btnText--text hover-privacy' @click='onClickSocial("Clinic")'>{{ $t('clinic') }}
            </div>
          </div>
          <div class='pa-6 ml-12'>
            <div class='text-h5 font-weight-bold mb-4 btnText--text'>{{ $t('help') }}</div>
            <nuxt-link :to='localePath("privacy")' class='link'>
              <div class='text-body-1 mb-2 btnText--text hover-privacy'>{{ $t('privacy') }}</div>
            </nuxt-link>
            <nuxt-link :to='localePath("terms-and-conditions")' class='link'>
              <div class='text-body-1 mb-2 btnText--text hover-privacy'>{{ $t('termsAndConditions') }}</div>
            </nuxt-link>
            <nuxt-link :to='localePath("contact-us")' class='link'>
              <div class='text-body-1 mb-2 btnText--text hover-privacy'>{{ $t('contactUs') }}</div>
            </nuxt-link>
          </div>
        </div>
      </v-container>
    </v-card>
    <v-divider dark />
    <v-footer color='text' padless class='pr-6 pl-6'>
      <v-container fill-height class="mx-auto d-flex justify-space-between align-center btnText--text text-body-2">
        <div>&copy; {{ new Date().getFullYear() }} mophead</div>
        <div class='d-flex'>
          <div v-for="(item, i) in items">
            <div class='d-flex text-body-1 mb-2 hover-privacy' @click='onClickSocial(item.text)'>
              <v-icon v-text="item.icon" color='btnText' class='mr-2'></v-icon>
            </div>
          </div>
        </div>
        <nuxt-link v-for="locale in availableLocales" :key="locale.code" :to="switchLocalePath(locale.code)"
          class='btnText--text'>{{
            locale.name
          }}</nuxt-link>
      </v-container>
    </v-footer>
  </div>
</template>
<style>
.hover-privacy {
  cursor: pointer;
}
</style>
