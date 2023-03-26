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
};
</script>
<template>
  <v-app-bar color="accent" app flat>
    <v-container class="pa-0">
      <v-app-bar color="accent" flat>
        <v-toolbar-title
          style="cursor: pointer"
          class="text-h6 font-weight-bold primary--text mb-n3 ma-sm-3 mx-auto"
          >mophead</v-toolbar-title
        >
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
