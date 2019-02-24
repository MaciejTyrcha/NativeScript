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
                <TextField v-model="login" hint="Podaj login..." />
                <TextField secure="true" v-model="password" hint="Podaj hasło..." />
                <Button width="60%" text="Zaloguj" @tap="zaloguj" />
            </FlexboxLayout>


        </FlexboxLayout>


    </Page>
</template>

<script>
    import Home from "./Home";
    var dialogs = require("tns-core-modules/ui/dialogs");

    export default {
        data() {
            return {
                login: "",
                password: ""
            };
        },
        methods: {
            zaloguj() {
                if (this.login == "admin" && this.password == "admin") {
                    this.$navigateTo(Home, {
                        // properties - własciwości
                        props: {
                            // Obiekt
                            data: {
                                login: this.login,
                                password: this.password
                            }
                        },
                        animated: true,
                        transition: {
                            name: "slideLeft",
                            duration: 250,
                            curve: "easeIn"
                        }
                    });
                } else {
                    dialogs.alert("Niepoprawna nazwa użytkownika");
                }
            }
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

    TextField {
        width: 60%;
        background-color: white;
        margin: 5;
        border-radius: 5;
        color: black;
    }
</style>