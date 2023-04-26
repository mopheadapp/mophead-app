<script>
export default {
  name: "FooterComponent",
  methods:{
    onClickPrivacy(){
      this.$router.push("privacy")
    }
  }
};
</script>
<template>
  <v-footer class="mx-auto d-flex justify-center accent ma-2" absolute>
    <span class="secondary--text text-body-2 mr-5">
     &copy; {{ new Date().getFullYear() }} mophead</span
    >
    <v-divider vertical></v-divider>
    <span class="secondary--text text-body-2 ml-5 hover-privacy" @click='onClickPrivacy'>
      Aydınlatma Metni</span
    >
  </v-footer>
</template>
<style>
.hover-privacy{
  cursor: pointer;
}
</style>
