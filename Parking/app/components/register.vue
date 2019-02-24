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

                <FlexboxLayout flexDirection="row">
                    <TextField v-model="imie" hint="Podaj Imię..." />
                    <TextField v-model="nazwisko" hint="Podaj Nazwisko..." />
                </FlexboxLayout>

                <FlexboxLayout flexDirection="row">
                    <TextField v-model="email" hint="Podaj maila..." />
                    <TextField v-model="haslo" hint="Podaj Hasło..." secure="true" />
                </FlexboxLayout>

                <Button width="60%" text="Wyślij" @tap="onButtonTap" />
            </FlexboxLayout>
        </FlexboxLayout>


    </Page>
</template>

<script>
    import Database from "./database";
    //Moduł do native scripta, w nim są okienka dialogowe.
    var dialogs = require("tns-core-modules/ui/dialogs");

    export default {
        methods: {
            onButtonTap() {
                this.$database.register(this.imie, this.nazwisko, this.email, this.haslo);
                dialogs.alert("Pomyślnie zarejestrowano w aplikacji");
            }
        },

        data() {
            return {
                imie: "",
                nazwisko: "",
                email: "",
                haslo: "",
            };
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

    FlexboxLayout {
        width: 100%;
    }
</style>