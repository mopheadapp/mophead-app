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
        {{ $t('homeMainTitle') }}
      </div>
      <div class="ma-2 mb-4 secondaryText--text text-h6">
        {{ $t('homeSubTitle') }}
      </div>
    </v-sheet>
    <MarketIcons />
  </div>
</template>
