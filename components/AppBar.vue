<script>
import { mapMutations } from "vuex"
export default {
  name: "AppBarComponent",
  data() {
    return {
      data: [
        { to: "pricing", text: "Fiyatlar" },
        { to: "about", text: "Hakkında" },
        { to: "contact-us", text: "Bize ulaşın" }
      ]
    }
  },
  methods: {
    register() {
      this.setRegisterPrompt(true)
    },
    ...mapMutations({ setRegisterPrompt: "setRegisterPrompt" }),
  },
  computed: {
    imageWidth() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "160px"
        case "sm":
          return "240px"
        case "md":
          return "240px"
        case "lg":
          return "240px"
        case "xl":
          return "240px"
      }
    },
    imageWidthMiniLogo() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "60px"
        case "sm":
          return "100px"
        case "md":
          return "100px"
        case "lg":
          return "100px"
        case "xl":
          return "100px"
      }
    },
  },
}
</script>
<template>
  <div class='fixed-app'>
    <v-app-bar color="accent" flat>
      <v-container class="pa-0">
        <v-app-bar color="accent" flat>
          <nuxt-link :to='localePath("/")' class='link'>
            <v-img class='hover-privacy d-none d-sm-flex' :src="require('~/static/logo.png')" :max-width="imageWidth"
              contain />
          </nuxt-link>
          <nuxt-link :to='localePath("/")' class='link'>
            <v-img class='hover-privacy d-flex d-sm-none' :src="require('~/static/logo_no_purple.png')"
              :max-width="imageWidthMiniLogo" contain />
          </nuxt-link>
          <v-spacer />
          <div class='d-none d-md-flex'>
            <v-chip color='transparent' text-color='text' outlined label class='mr-2 ml-2 hover-privacy font-weight-bold'
              :to='localePath("pricing")'>
              Fiyatlar
            </v-chip>
            <v-chip color='transparent' text-color='text' outlined label class='mr-2 ml-2 hover-privacy font-weight-bold'
              :to='localePath("about")'>
              Hakkında
            </v-chip>
            <v-chip color='transparent' text-color='text' outlined label class='mr-2 ml-2 hover-privacy font-weight-bold'
              :to='localePath("contact-us")'>
              Bize ulaşın
            </v-chip>
          </div>
          <v-menu bottom offset-y transition="slide-y-transition" open-on-hover>
            <template v-slot:activator="{ on, attrs }">
              <v-chip v-bind="attrs" v-on="on" color='transparent' text-color='text' outlined label
                class='mr-2 ml-2 hover-privacy font-weight-bold d-flex d-md-none'>
                Ana sayfa
                <v-icon right>
                  mdi-menu-down
                </v-icon>
              </v-chip>
            </template>
            <v-list color='background'>
              <v-list-item dense v-for="(item, index) in data" :key="index" :to='item.to'>
                <v-list-item-title>{{ item.text }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
          <v-btn elevation="0" color="primary"
            class="rounded-lg text-capitalize btnText--text font-weight-bold text-body-1 ml-16 d-none d-sm-flex"
            @click="register">
            Kurumsal kayıt
          </v-btn>
        </v-app-bar>
      </v-container>
    </v-app-bar>
  </div>
</template>
<style>
.hover-privacy {
  cursor: pointer;
}

.fixed-app {
  top: 0px;
  position: sticky;
  border-bottom: 1px solid var(--v-border-base);
  z-index: 99999;
}
</style>
