<!-- Template jest czymś cpodobnym do body -->
<template>
    <!-- Stronicowanie aplikacji - podział okna i przechodzenie między nimi -->
    <Page class="page">

        <StackLayout class="home-panel" orientation="vertical">

            <FlexboxLayout v-if = "show === true" flexDirection="column">
                <Label text="Maciej Tyrcha" />
                <Label text="Katowice" />
                <Label text="Mickiewicza 29" />
                <!-- v-model to bindowanie, czyli relacja ze zmienną -->
                <Label v-model="imie" text="" />
            </FlexboxLayout>
            <Button text="Change" @tap="onButtonTap" />

        </StackLayout>
    </Page>
</template>

<script>
    export default {
        methods: {
            onButtonTap() {
                this.show = !this.show
            }
        },

        data() {
            return {
                show: false
            };
        }
    };
</script>

<style scoped>
    .home-panel {
        vertical-align: center;
        font-size: 20;
        margin: 15;
    }

    .description-label {
        margin-bottom: 15;
    }
</style>