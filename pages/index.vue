<script>
export default {
  name: "IndexPage",
  head() {
    const title = `mophead | ${this.$t('homeMainTitle')}`
    return {
      title,
      htmlAttrs: {
        lang: this.$i18n.locale
      },
      meta: [
        { hid: 'description', name: 'description', content: this.$t('homeSubTitle') }
      ]
    }
  },
}
</script>
<template>
  <div class='align-self-start mt-sm-8'>
    <v-row>
      <v-col cols="12" md="6" order-md="1" order="2" class='align-self-center'>
        <Statement />
      </v-col>
      <v-col cols="12" md="6" order-md="2" order="1">
        <PhoneImage />
      </v-col>
    </v-row>
  </div>
</template>
