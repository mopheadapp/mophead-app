<script>
import Register from "../components/Register.vue"
import Footer from "../components/Footer.vue"
import AppBar from "../components/AppBar.vue"
export default {
  name: "DefaultLayout",
  components: { Register, Footer, AppBar },
}
</script>
<template>
  <v-app>
    <v-main>
      <AppBar />
      <Nuxt />
      <v-divider />
      <Footer />
    </v-main>
    <Register />
  </v-app>
</template>
