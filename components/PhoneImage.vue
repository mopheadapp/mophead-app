<script>
export default {
  name: "PhotoImageComponent",
  computed: {
    imageWidth() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "280px";
        case "sm":
          return "400px";
        case "md":
          return "480px";
        case "lg":
          return "540px";
        case "xl":
          return "600px";
      }
    },
  },
};
</script>
<template>
  <div class="d-flex justify-md-end justify-center">
    <v-sheet>
      <v-img
        :src="require('~/static/mockup.png')"
        :max-width="imageWidth"
      ></v-img>
    </v-sheet>
  </div>
</template>
