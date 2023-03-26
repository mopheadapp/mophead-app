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
      pageNotFound: "404 Not Found",
      otherError: "An error occurred",
    };
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError;
    return {
      title,
    };
  },
};
</script>
<template>
  <v-container>
    <div class="text-center">
      <div class="text-h6 font-weight-bold text--text ma-8">
        The page you are looking for does not exist
      </div>
      <div
        class="text-h3 font-weight-bold text--text ma-8"
        v-if="error.statusCode === 404"
      >
        {{ pageNotFound }}
      </div>
      <div v-else class="text-h2 font-weight-bold text--text">
        {{ otherError }}
      </div>
      <v-btn
        x-large
        color="primary"
        class="rounded-lg text-capitalize ma-8 btnText--text font-weight-bold text-body-1"
        to="/"
        >Go to homepage</v-btn
      >
    </div>
  </v-container>
</template>
<style scoped>
h1 {
  font-size: 40px;
}
</style>
