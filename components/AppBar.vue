<script>
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";
export default {
  name: "AppBarComponent",
  methods: {
    register() {
      this.setRegisterPrompt(true);
    },
    ...mapMutations({ setRegisterPrompt: "setRegisterPrompt" }),
  },
  computed: {
    imageWidth() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "160px";
        case "sm":
          return "160px";
        case "md":
          return "160px";
        case "lg":
          return "240px";
        case "xl":
          return "240px";
      }
    },
  },
};
</script>
<template>
  <v-app-bar color="accent" app flat>
    <v-container class="pa-0">
      <v-app-bar color="accent" flat>
        <v-img
        :src="require('~/static/logo.png')"                   
        :max-width="imageWidth"
        contain
        />
        <v-spacer></v-spacer>
        <v-btn
          elevation="2"
          color="primary"
          class="rounded-lg text-capitalize btnText--text font-weight-bold text-body-1"
          @click="register"
          >Kayıt ol</v-btn
        >
      </v-app-bar>
    </v-container>
  </v-app-bar>
</template>
