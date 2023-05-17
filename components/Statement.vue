<script>
import MarketIcons from "../components/MarketIcons.vue"
export default {
  name: "StatementComponent",
}
</script>
<template>
  <div>
    <v-sheet class='pa-12'>
      <div class="ma-2 mb-8 text--text font-weight-bold text-h3">
        Sizin için en iyi klinikleri bulun, mophead ile!
      </div>
      <div class="ma-2 mb-4 secondaryText--text text-h6">
        mophead ile Türkiye'nin dört bir yanından en iyi saç ekim, saç simülasyonu ve saç protezi merkezlerine talep
        gönderebilir, mesajlaşabilir ve operasyondan sonra kliniğini yorumlayabilirsin.
      </div>
    </v-sheet>
    <MarketIcons />
  </div>
</template>
