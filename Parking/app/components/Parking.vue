<template>
    <Page class="page">

        <FlexboxLayout class="background" flexDirection="column">
            <FlexboxLayout flexDirection="column" justifyContent="center"
                alignItems="center" flexGrow="1">
                <Image class="image" height="128" width="128" src="~/assets/parked-car.png" />
                <Label class="tekst" text="Witaj w aplikacji parkingowej" />

            </FlexboxLayout>

            <FlexboxLayout flexDirection="column" justifyContent="center"
                alignItems="center" flexGrow="1">
                <Button width="60%" text="Zaloguj" @tap="zaloguj" />
                <Button width="60%" text="Zarejestruj" @tap="rejestracja" />
            </FlexboxLayout>


        </FlexboxLayout>


    </Page>
</template>

<script>
    import Login from "./login";
    import Rejestracja from "./register";

    export default {
        methods: {
            zaloguj() {
                this.$navigateTo(Login, {
                    animated: true,
                    transition: {
                        name: "slideLeft",
                        duration: 250,
                        curve: "easeIn",
                    }
                });
            },
            rejestracja() {
                this.$navigateTo(Rejestracja, {
                    animated: true,
                    transition: {
                        name: "slideRight",
                        duration: 250,
                        curve: "easeIn",
                    }
                });
            }
        },

        data() {
            return {};
        }
    };
</script>

<style scoped>
    .background {
        background-color: #191414;
        color: white;
    }

    image {
        margin-bottom: 40;
    }


    .tekst {
        font-size: 25;
    }

    Button {
        orientation: vertical;
        background-color: #1db954;
        height: 70;
    }
</style>