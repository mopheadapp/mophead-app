<script>
import { mapMutations, mapGetters } from "vuex";
import axios from "axios";
export default {
  name: "ContactUsPage",
  data() {
    return {
      data: {
        body: null,
        userId: null,
      },
      button: {
        loading: false,
        state: false,
      },
    };
  },
  computed:{
    ...mapGetters({
      getBaseURL:"getBaseURL"
    })
  },
  methods: {
    async send(){
        try {
        const config = {
          method: "post",
          headers: { "content-type": "application/json" },
          url: `${this.getBaseURL}/user/contactUs`,
          data: this.data,
        };
        this.button.loading = true;
        this.button.state = true;
        await axios(config);
        this.button.loading = false;
        this.button.state = false;
      } catch (err) {
        this.button.state = false;
        this.button.loading = false;
      }
    },
  },
};
</script>
<template>
      <v-row class="align-self-start mt-12">
        <v-col cols="12" md="6">
            <div class='d-block justify-center'>
                <div class='mb-12 text-h4 text--text font-weight-bold'>
                    Bir talep gönder
                </div>
                <v-text-field 
                    v-model='data.userId'
                    outlined 
                    dense 
                    class='mb-6' 
                    label='E-posta'
                />
                <v-textarea 
                    v-model='data.body'
                    outlined 
                    height='320' 
                />
                <div class='mb-10 text-caption mt-n6 text--text'>
                    Lütfen talebinizi yazın. Bir destek personeli size en kısa zamanda yanıt verecektir
                </div>
                <v-btn 
                    :loading="button.loading"
                    :disabled="buttonState || button.state"
                    @click='send'
                    color="primary"
                    class="rounded-lg text-capitalize btnText--text font-weight-bold text-body-1 mb-6"
                >
                    Gönder
                </v-btn>
            </div>   
        </v-col>
        <v-col cols="12" md="6">
        </v-col>
    </v-row>
</template>
