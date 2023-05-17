<script>
import { mapMutations } from "vuex"
export default {
    name: "PricingPage",
    head() {
        const title = "Fiyatlar"
        return {
            title,
        }
    },
    methods: {
        register() {
            this.setRegisterPrompt(true)
        },
        ...mapMutations({
            setRegisterPrompt: "setRegisterPrompt"
        }),
    },
}
</script>
<template>
    <v-container class='align-self-start mt-12'>
        <div class='text-center text-h2 font-weight-bold text--text'>
            {{ $t('pricingHeadText') }}
        </div>
        <div class='text-center text-h5 text--text pa-6'>
            {{ $t('pricingSubText') }}
        </div>
        <div class=" d-sm-flex justify-center">
            <v-card class='ma-2 rounded-lg' min-width='320' flat outlined>
                <div class='text-center pa-4 text-h6 font-weight-bold primary btnText--text'>
                    {{ $t('pricingCategoryOne') }}
                </div>
                <v-divider />
                <div class='text-center pa-4 text-body-1 font-weight-bold'>
                    {{ $t('inMonth') }}
                </div>
                <div class='text-center pa-4 text-h2 font-weight-bold'>
                    {{ $t('priceSingle') }}
                </div>
                <div class='text-center pa-2 text-body-2  secondaryText--text'>
                    {{ $t('commission') }}
                </div>
                <v-divider class='ma-2' />
                <div class='text-center pa-2 text-body-2 secondaryText--text'>
                    {{ $t('singleMember') }}
                </div>
                <div class='text-center pa-2 text-body-2 secondaryText--text'>
                    -
                </div>
                <div class='text-center pa-2 text-body-2 secondaryText--text'>
                    -
                </div>
                <div class='text-center'>
                    <v-btn elevation="0" color="primary"
                        class="rounded-lg text-capitalize btnText--text font-weight-bold text-body-1 ma-4"
                        @click="register">
                        {{ $t('tryFree') }}
                    </v-btn>
                </div>
            </v-card>
            <v-card class='ma-2 rounded-lg' min-width='320' flat outlined>
                <div class='text-center pa-4 text-h6 font-weight-bold primary btnText--text'>Premium</div>
                <v-divider />
                <div class='text-center pa-4 text-body-1 font-weight-bold'>
                    {{ $t('inMonth') }}
                </div>
                <div class='text-center pa-4 text-h2 font-weight-bold'>
                    {{ $t('priceMulti') }}
                </div>
                <div class='text-center pa-2 text-body-2 secondaryText--text'>
                    {{ $t('commission') }}
                </div>
                <v-divider class='ma-2' />
                <div class='text-center pa-2 text-body-2 secondaryText--text'>
                    {{ $t('multiUser') }}
                </div>
                <div class='text-center pa-2 text-body-2 secondaryText--text'>
                    {{ $t('activityReport') }}
                </div>
                <div class='text-center pa-2 text-body-2 secondaryText--text'>
                    {{ $t('highlightedMainScreen') }}
                </div>
                <div class='text-center'>
                    <v-btn elevation="0" color="primary"
                        class="rounded-lg text-capitalize btnText--text font-weight-bold text-body-1 ma-4"
                        @click="register">
                        {{ $t('tryFree') }}
                    </v-btn>
                </div>
            </v-card>
        </div>
    </v-container>
</template>