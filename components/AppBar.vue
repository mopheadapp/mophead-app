<script>
import { mapMutations,mapState } from "vuex";
export default {
  name: "AppBarComponent",
  methods: {
    register() {
      this.setRegisterPrompt(true);
    },
    clickHome(){
      this.$router.push("/")
    },
    ...mapMutations({ setRegisterPrompt: "setRegisterPrompt" }),
  },
  computed: {
    ...mapState({buttonDisabled:"buttonDisabled"}),
    imageWidth() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "160px";
        case "sm":
          return "240px";
        case "md":
          return "240px";
        case "lg":
          return "240px";
        case "xl":
          return "240px";
      }
    },
    imageWidthMiniLogo() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "60px";
        case "sm":
          return "100px";
        case "md":
          return "100px";
        case "lg":
          return "100px";
        case "xl":
          return "100px";
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
          @click='clickHome'
          class='hover-privacy d-none d-sm-flex'
          :src="require('~/static/logo.png')"                   
          :max-width="imageWidth"
          contain
        />
        <v-img
          @click='clickHome'
          class='hover-privacy d-flex d-sm-none'
          :src="require('~/static/logo_no_purple.png')"                   
          :max-width="imageWidthMiniLogo"
          contain
        />

        <v-spacer></v-spacer>
        <v-btn
          v-if='buttonDisabled'
          elevation="0"
          color="primary"
          class="rounded-lg text-capitalize btnText--text font-weight-bold text-body-1"
          @click="register"
          >Kurumsal kayıt</v-btn
        >
      </v-app-bar>
    </v-container>
  </v-app-bar>
</template>
<style>
.hover-privacy{
  cursor: pointer;
}
</style>
