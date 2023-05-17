<script>
export default {
  name: "ContactUsPage",
  head() {
    const title = "Bize ulaşın"
    return {
      title,
    }
  },
  data() {
    return {
      data: {
        body: null,
        userId: null,
      },
      button: {
        loading: false,
        state: false,
      },
    }
  },
  methods: {
    async send() {
      try {
        const config = {
          method: "post",
          headers: { "content-type": "application/json" },
          url: `user/contactUs`,
          data: this.data,
        }
        this.button.loading = true
        this.button.state = true
        await this.$axios(config)
        this.button.loading = false
        this.button.state = false
      } catch (err) {
        this.button.state = false
        this.button.loading = false
      }
    },
  },
}
</script>
<template>
  <v-container fill-height>
    <v-row class="align-self-start mt-12 mb-12">
      <v-col cols="12" md="6">
        <div class='d-block justify-center'>
          <div class='mb-12 text-h4 text--text font-weight-bold'>
            {{ $t('sendARequest') }}
          </div>
          <v-text-field v-model='data.userId' outlined dense class='mb-6' :label='$t("email")' />
          <v-textarea v-model='data.body' outlined height='320' />
          <div class='mb-10 text-caption mt-n6 text--text'>
            {{ $t('requestNotes') }}
          </div>
          <v-btn :loading="button.loading" :disabled="button.state" @click='send' color="primary"
            class="rounded-lg text-capitalize btnText--text font-weight-bold text-body-1 mb-6">
            {{ $t('send') }}
          </v-btn>
        </div>
      </v-col>
      <v-col cols="12" md="6">
      </v-col>
    </v-row>
  </v-container>
</template>
