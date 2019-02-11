<template>
    <Page class="page">

        <FlexboxLayout class="mainColor" height="100%" flexDirection="column">
            <FlexboxLayout>
                <TextField height="100" width="100%" v-model="suma" hint="Wybierz liczbę..." />
            </FlexboxLayout>

            <FlexboxLayout>
                <Button class="buttonPink" height="100" width="100%" text="C"
                    @tap="clear" />
                <Button class="buttonPink" height="100" width="100%" text="<-"
                    @tap="slice" />
            </FlexboxLayout>

            <FlexboxLayout height="100" flexDirection="row">
                <Button class="buttonGreen" width="100%" text="x^2" @tap="pow" />
                <Button class="buttonGreen" width="100%" text="sqrt" @tap="sqrt" />
                <Button class="buttonGreen" width="100%" text="!" @tap="silnia" />
                <Button class="buttonRed" width="100%" text="/" @tap="operators(1)" />
            </FlexboxLayout>

            <FlexboxLayout height="100" flexDirection="row">
                <Button class="buttonBlue numberFont" width="100%" text="7"
                    @tap="onButtonTap('7')" />
                <Button class="buttonBlue numberFont" width="100%" text="8"
                    @tap="onButtonTap('8')" />
                <Button class="buttonBlue numberFont" width="100%" text="9"
                    @tap="onButtonTap('9')" />
                <Button class="buttonRed" width="100%" text="*" @tap="operators(2)" />
            </FlexboxLayout>

            <FlexboxLayout height="100" flexDirection="row">
                <Button class="buttonBlue numberFont" width="100%" text="4"
                    @tap="onButtonTap('4')" />
                <Button class="buttonBlue numberFont" width="100%" text="5"
                    @tap="onButtonTap('5')" />
                <Button class="buttonBlue numberFont" width="100%" text="6"
                    @tap="onButtonTap('6')" />
                <Button class="buttonRed" width="100%" text="-" @tap="operators(3)" />
            </FlexboxLayout>

            <FlexboxLayout height="100" flexDirection="row">
                <Button class="buttonBlue numberFont" width="100%" text="1"
                    @tap="onButtonTap('1')" />
                <Button class="buttonBlue numberFont" width="100%" text="2"
                    @tap="onButtonTap('2')" />
                <Button class="buttonBlue numberFont" width="100%" text="3"
                    @tap="onButtonTap('3')" />
                <Button class="buttonRed" width="100%" text="+" @tap="operators(4)" />
            </FlexboxLayout>

            <FlexboxLayout height="100" flexDirection="row">
                <Button class="buttonBlack" width="100%" text="0" @tap="onButtonTap('0')" />
                <Button class="buttonBlack" width="100%" text="SUMA" @tap="count" />
            </FlexboxLayout>

        </FlexboxLayout>


    </Page>
</template>

<script>
    export default {
        methods: {
            onButtonTap(num) {
                this.suma += num;
            },
            clear() {
                this.suma = "";
            },
            slice() {
                this.suma = this.suma.slice(0, -1);
            },
            operators(num) {
                this.liczba = this.suma;
                this.operator = num;
                this.suma = "";
            },
            count() {
                if (this.operator === 1) {
                    if (this.suma == 0) {
                        this.suma = "Nie można dzielić przez 0!";
                    } 
                    else {
                        this.suma = parseFloat(this.liczba) / parseFloat(this.suma);
                    }
                }

                if (this.operator === 2) {
                    this.suma = parseFloat(this.liczba) * parseFloat(this.suma);
                }

                if (this.operator === 3) {
                    this.suma = parseFloat(this.liczba) - parseFloat(this.suma);
                }

                if (this.operator === 4) {
                    this.suma = parseFloat(this.liczba) + parseFloat(this.suma);
                }

                // if (this.operator === 5) {
                //     this.suma = Math.pow(this.liczba, this.suma);
                // }

                // if (this.operator === 6) {
                //     this.suma = Math.pow(this.liczba, 1 / this.suma);
                // }
                // if (this.operator === 7) {
                //     this.suma = this.liczba + "." + this.suma;
                // }
            },
            sqrt() {
                this.suma = Math.sqrt(this.suma);
            },
            pow() {
                this.suma = Math.pow(this.suma, 2);
            },
            silnia() {
                // silnia = 1;
                var a;
                var b = parseFloat(this.suma);
                for (a = 1; a < b; a++) {
                    this.suma *= a;
                }
            }
        },

        data() {
            return {
                //Suma "" bo będziemy parsować
                suma: "",
                operator: 0,
                liczba: 0
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

    .numberFont {
        font-size: 30
    }

    .mainColor {
        background-color: #f2f9b9;
    }

    .buttonGreen {
        background-color: green;
    }

    .buttonRed {
        background-color: red;
    }

    .buttonBlue {
        background-color: #5F9EA0;
    }

    .buttonPink {
        background-color: pink;
    }

    .buttonBlack {
        background-color: black;
        color: white;
    }
</style>