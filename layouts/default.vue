<script>
export default {
  name: "DefaultLayout",
};
</script>
<template>
  <v-app>
    <v-main>
      <AppBar />
      <v-container fill-height>
        <Nuxt />
      </v-container>
      <Footer />
    </v-main>
  </v-app>
</template>
