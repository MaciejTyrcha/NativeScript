<template>

    <Page class="page">
        <FlexboxLayout flexDirection="column">

            <FlexboxLayout flexDirection="column">
                <Button text="Rezerwacja" @tap="booking" />
            </FlexboxLayout>

        </FlexboxLayout>
    </Page>
</template>

<script>
    import Database from "./database";
    import Place from "./place";

    export default {
        methods: {
            booking() {
                this.$navigateTo(Place)
            }
        },

        //obiekt z login.vue
        props: ["data"],
        data() {
            return {
                login: this.data.login,
                password: this.data.password,
                users: this.$database.allUsers()
            };
        }
    };
</script>

<style>
</style>