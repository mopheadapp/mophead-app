<script>
import { mapGetters, mapMutations, mapState } from "vuex";
import axios from "axios";
export default {
  name: "RegisterComponent",
  data() {
    return {
      data: {
        taxNumber: "",
        email: "",
        phoneNumber: "",
      },
      button: {
        loading: false,
        state: true,
        errorState: false,
        message: null,
      },
      isSuccess: false,
    };
  },
  methods: {
    ...mapMutations({ setRegisterPrompt: "setRegisterPrompt" }),
    close() {
      this.setRegisterPrompt(false);
      this.data = {
        taxNumber: "",
        email: "",
        phoneNumber: "",
      };
      this.button = {
        loading: false,
        state: true,
        errorState: false,
        message: null,
      };
      setTimeout(() => {
        this.isSuccess = false;
      }, 500);
    },
    async confirm() {
      try {
        const config = {
          method: "post",
          headers: { "content-type": "application/json" },
          url: `${this.getBaseURL}/clinic/clinicRegister`,
          data: this.data,
        };
        this.button.loading = true;
        this.button.state = false;
        await axios(config);
        this.button.loading = false;
        this.button.state = true;
        this.isSuccess = true;
      } catch (err) {
        this.button.errorState = true;
        if(err.response.data.message === "Enter a valid tax number"){
          this.button.message="VKN/TCKN giriniz"
        }
        if(err.response.data.message === "Enter a valid e-mail"){
          this.button.message="Geçerli bir  e-posta adresi giriniz"
        }
        if(err.response.data.message === "Enter a valid number"){
          this.button.message="Geçerli bir telefon numarası giriniz"
        }
        this.button.state = true;
        this.button.loading = false;
      }
    },
    removeError() {
      this.button.errorState = false;
      this.button.message = null;
    },
  },
  computed: {
    ...mapState({ registerPrompt: "registerPrompt" }),
    ...mapGetters({ getBaseURL: "getBaseURL" }),
    buttonState() {
      return (
        this.data.taxNumber.length > 0 &&
        this.data.email.length > 0 &&
        this.data.phoneNumber.length > 0
      );
    },
  },
};
</script>
<template>
  <v-dialog v-model="registerPrompt" @click:outside="close" width="auto">
    <v-card
      v-if="!isSuccess"
      elevation="0"
      color="accent"
      class="rounded-lg mx-auto"
      width="500px"
    >
      <v-card-title class="text-h6 font-weight-bold text--text pa-5" >Kayıt</v-card-title>
      <v-text-field
        v-model="data.taxNumber"
        outlined
        dense
        hide-details
        label="VKN/TCKN"
        class="rounded-lg ma-5"
        type="number"
        :error="button.errorState"
        @input="removeError"
      ></v-text-field>
      <v-text-field
        v-model="data.email"
        outlined
        dense
        hide-details
        label="E-posta"
        class="rounded-lg ma-5"
        :error="button.errorState"
        @input="removeError"
      ></v-text-field>
      <v-text-field
        v-model="data.phoneNumber"
        outlined
        dense
        label="Telefon numarası"
        class="rounded-lg ma-5"
        :error="button.errorState"
        :rules="[!button.errorState || button.message]"
        @input="removeError"
      ></v-text-field>
      <div class="pa-5 pt-0">
        <v-btn
          large
          :loading="button.loading"
          :disabled="!buttonState || !this.button.state"
          elevation="0"
          color="primary"
          class="rounded-lg text-capitalize btnText--text font-weight-bold text-body-1"
          block
          @click="confirm"
          >Gönder</v-btn>
      </div>
    </v-card>
    <v-card
      v-else
      elevation="0"
      color="accent"
      class="rounded-lg mx-auto"
      width="500px"
    >
      <div class="text-center pa-12">
        <v-icon x-large color="success">mdi-check-circle</v-icon>
        <div class="text-h6 font-weight-bold text--text mt-6">
          Kaydınız alındı
        </div>
      </div>
    </v-card>
  </v-dialog>
</template>
