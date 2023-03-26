<script>
import Register from "../components/Register.vue";
export default {
  name: "IndexPage",
  components: { Register },
};
</script>
<template>
  <div>
    <v-container class="mt-8">
      <v-row>
        <v-col cols="12" md="6" order-md="1" order="2">
          <Statement />
        </v-col>
        <v-col cols="12" md="6" order-md="2" order="1">
          <PhoneImage />
        </v-col>
      </v-row>
    </v-container>
    <Register />
  </div>
</template>
