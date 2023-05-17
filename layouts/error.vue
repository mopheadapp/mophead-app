<script>
export default {
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      pageNotFound: this.$t('notFound'),
      otherError: this.$t('otherError'),
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title,
    }
  },
}
</script>
<template>
  <v-container>
    <div class="text-center">
      <div class="text-h6 font-weight-bold text--text ma-8">
        {{ $t('notExist') }}
      </div>
      <div class="text-h3 font-weight-bold text--text ma-8" v-if="error.statusCode === 404">
        {{ $t('notFound') }}
      </div>
      <div v-else class="text-h2 font-weight-bold text--text">
        {{ $t('otherError') }}
      </div>
      <v-btn x-large color="primary" class="rounded-lg text-capitalize ma-8 btnText--text font-weight-bold text-body-1"
        :to='localePath("/")'>
        {{ $t('goToHomepage') }}
      </v-btn>
    </div>
  </v-container>
</template>
<style scoped>
h1 {
  font-size: 40px;
}
</style>
