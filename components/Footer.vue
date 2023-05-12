<script>
export default {
  name: "FooterComponent",
  data() {
    return {
      items: [
      {icon:'mdi-facebook',text:"Facebook"},
      {icon:'mdi-twitter',text:"Twitter"},
      {icon:'mdi-instagram',text:"Instagram"},
      {icon:'mdi-linkedin',text:"LinkedIn"}
    ],
    };
  },
  methods:{
    onClick(page){
      this.$router.push(page)
    },
    onClickSocial(social){
      let url = null
      if(social === "Facebook") url = "https://www.facebook.com/mopheadapp"
      if(social === "Twitter") url = "https://www.twitter.com/mopheadapp"
      if(social === "Instagram") url = "https://www.instagram.com/mopheadapp"
      if(social === "Linkedin") url = "https://www.instagram.com/mopheadapp"
      if(social === "Clinic") url = "https://clinic.mophead.app/"
      window.open(url,'_blank');
    },

  }
};
</script>
<template>
  <div class='mt-8'>
    <v-card flat>
      <v-container  fill-height>
        <v-col cols="12" sm="4" align-self='start' class='d-flex justify-sm-end justify-start pa-4'>
          <div>
            <div class='text-h5 font-weight-bold mb-4'>Şirket</div>
            <div class='text-body-1 mb-2 secondaryText--text'>Biz kimiz</div>
            <div class='text-body-1 mb-2 secondaryText--text'>Ekip</div>
            <div class='text-body-1 mb-2 secondaryText--text'>Blog</div>
            <div class='text-body-1 mb-2 secondaryText--text hover-privacy' @click='onClick("pricing")'>Fiyatlar</div>
            <div class='text-body-1 mb-2 secondaryText--text hover-privacy' @click='onClickSocial("Clinic")'>Klinik</div>
          </div>
        </v-col>
        <v-col cols="12" sm="4" align-self='start' class='d-flex justify-sm-end justify-start pa-4'>
          <div>
            <div class='text-h5 font-weight-bold mb-4'>Yardım</div>
            <div class='text-body-1 mb-2 secondaryText--text hover-privacy' @click='onClick("privacy")'>Aydınlatma metni</div>
            <div class='text-body-1 mb-2 secondaryText--text hover-privacy' @click='onClick("contact-us")'>Bize ulaşın</div>
          </div>
        </v-col>
        <v-col cols="12" sm="4" align-self='start' class='d-flex justify-sm-end justify-start pa-4'>
          <div>
            <div class='text-h5 font-weight-bold mb-4'>Sosyal medya</div>
            <div v-for="(item, i) in items">
              <div class='d-flex text-body-1 mb-2 hover-privacy' @click='onClickSocial(item.text)'>
                <v-icon v-text="item.icon" color='text' class='mr-2' small></v-icon>
                <div class='text-body-1  secondaryText--text'>{{ item.text }}</div>
              </div>
            </div>
          </div>
        </v-col>
      </v-container>
    </v-card>
    <v-footer
      class="mx-auto d-flex justify-center accent ma-2 text-body-2">    
      &copy; {{ new Date().getFullYear() }} mophead
    </v-footer>
  </div>
</template>
<style>
.hover-privacy{
  cursor: pointer;
}
</style>
