<script>
export default {
    name: "AboutPage",
    head() {
        const title = "Hakkında"
        return {
            title,
        }
    },
}
</script>
<template>
    <v-container class='align-self-start mt-12 mb-12'>
        <div class='text-left text-h4 font-weight-bold text--text'>
            {{ $t('about') }}
        </div>
        <div class='text-left text-body-1 secondaryText--text mt-6'>
            <p>{{ $t('aboutOne') }}</p>
            <p>{{ $t('aboutTwo') }}</p>
            <p>{{ $t('aboutThree') }}</p>
            <p>{{ $t('aboutFour') }}</p>
            <p>{{ $t('aboutFive') }}</p>
        </div>
    </v-container>
</template>
