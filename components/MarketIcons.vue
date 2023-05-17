<script>
export default {
  name: "MarketIcons",
  computed: {
    imageWidth() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "180"
        case "sm":
          return "192"
        case "md":
          return "212"
        case "lg":
          return "244"
        case "xl":
          return "256px"
      }
    },
  },
}
</script>
<template>
  <div class="d-flex justify-center">
    <v-sheet>
      <v-img :src="require('~/static/ios.svg')" :max-width="imageWidth" />
    </v-sheet>
    <v-sheet>
      <v-img :src="require('~/static/android.svg')" :max-width="imageWidth" />
    </v-sheet>
  </div>
</template>
