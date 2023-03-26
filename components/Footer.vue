<script>
export default {
  name: "FooterComponent",
};
</script>
<template>
  <v-footer class="mx-auto d-flex justify-center accent ma-2" absolute>
    <span class="secondary--text text-body-1">
      Copyright &copy; {{ new Date().getFullYear() }} mophead</span
    >
  </v-footer>
</template>
