<script>
import { mapMutations, mapGetters } from "vuex";
export default {
  name: "PricingPage",
  head() {
    const title = "Fiyatlar"
    return {
      title,
    };
  },
  computed:{
    ...mapGetters({
        getBaseURL:"getBaseURL"
    })
  },
  methods: {
    register(){
        this.setRegisterPrompt(true)
    },
    ...mapMutations({ 
        setRegisterPrompt: "setRegisterPrompt" 
    }),
  },
};
</script>
<template>
    <v-container class='align-self-start mt-12'>
        <div class='text-center text-h2 font-weight-bold text--text'>
            mophead'ı ilk 1 ay ücretsiz deneyin.
        </div>
        <div class='text-center text-h5 text--text pa-6'>
            Daha sonrasında size uygun üyelik ile üyeliğinize devam edin.
        </div>
        <div class='primary rounded-lg'>
            <div class='text-center text-h6 btnText--text mb-12 mt-12 font-weight-bold pa-4'>
                Size uygun üyelik planını seçiniz
            </div>
        </div>
        <div class=" d-sm-flex justify-center">
            <v-hover
                v-slot="{ hover }"
                open-delay="128"
            >           
                <v-card 
                    :elevation="hover ? 16 : 2"
                    class='ma-2 rounded-lg' 
                    min-width='320' 
                    flat 
                    outlined
                >
                    <div class='text-center pa-4 text-h6 font-weight-bold primary btnText--text'>
                        Basit
                    </div>
                    <v-divider/>
                    <div class='text-center pa-4 text-body-1 font-weight-bold'>
                        Ayda
                    </div>        
                    <div class='text-center pa-4 text-h2 font-weight-bold'>
                        999 TL
                    </div>
                    <div class='text-center pa-2 text-body-2'>
                        + her chat ekranı için %0,2 komisyon
                    </div>
                    <v-divider class='ma-2'/>
                    <div class='text-center pa-2 text-body-2'>
                        Tekli kullanıcı
                    </div>
                    <div class='text-center pa-2 text-body-2'>
                        -
                    </div>
                    <div class='text-center pa-2 text-body-2'>
                        -
                    </div>
                    <div class='text-center'>
                        <v-btn
                            elevation="0"
                            color="primary"
                            class="rounded-lg text-capitalize btnText--text font-weight-bold text-body-1 ma-4"
                            @click="register"
                        >
                        Ücretsiz deneyin
                        </v-btn>
                    </div>
                </v-card>
            </v-hover>
            <v-hover
                v-slot="{ hover }"
                open-delay="128"
            >   
                <v-card
                    :elevation="hover ? 16 : 2"
                    class='ma-2 rounded-lg' 
                    min-width='320' 
                    flat 
                    outlined
                >
                    <div class='text-center pa-4 text-h6 font-weight-bold primary btnText--text'>Premium</div>
                    <v-divider/>
                    <div class='text-center pa-4 text-body-1 font-weight-bold'>
                        Ayda
                    </div>
                    <div class='text-center pa-4 text-h2 font-weight-bold'>
                        1499 TL
                    </div>
                    <div class='text-center pa-2 text-body-2'>
                        + her chat ekranı için %0,2 komisyon
                    </div>
                    <v-divider class='ma-2'/>
                    <div class='text-center pa-2 text-body-2'>
                        Çoklu kullanıcı
                    </div>
                    <div class='text-center pa-2 text-body-2'>
                        Aylık faaliyet raporu
                    </div>
                    <div class='text-center pa-2 text-body-2'>
                        Ana sayfada öne çıkarma
                    </div>
                    <div class='text-center'>
                        <v-btn
                            elevation="0"
                            color="primary"
                            class="rounded-lg text-capitalize btnText--text font-weight-bold text-body-1 ma-4"
                            @click="register"
                        >
                        Ücretsiz deneyin
                        </v-btn>
                    </div>
                </v-card>
            </v-hover>
        </div>
    </v-container>
</template>