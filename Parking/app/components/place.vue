<template>
    <Page class="page">
        <FlexboxLayout flexDirection="column">
            <!-- Przepełnienie ekranu -> powoduje dodanie scrolla -->
            <!-- horizontal po x lub vertical po y -->
            <ScrollView orientation="horizontal">
                <FlexboxLayout flexDirection="row" flexGrow="1" margin="25">
                    <!-- v-for to pętla -->
                    <!-- v-for = "(value, index)" tak jak w forEachu -->
                    <!-- in nazwa_zbioru -->
                    <!-- : oznacza że dziedziczy tylko po najbliższym flexboxie -->
                    <FlexboxLayout flexDirection="row" v-for="(item,i) in placeA">
                        <FlexboxLayout v-if="item.busy === false"
                            flexDirection="row">
                            <Label class="textlabel" height="128" margin="15"
                                width="128" class="h2" :text="item.name"
                                color="white" backgroundColor="red" @tap="onButtonTap(i)" />
                        </FlexboxLayout>
                        <FlexboxLayout v-if="item.busy === true"
                            flexDirection="row">
                            <Label class="textlabel" height="128" margin="15"
                                width="128" class="h2" :text="item.name"
                                color="white" backgroundColor="green" @tap="onButtonTap(i)" />
                        </FlexboxLayout>
                    </FlexboxLayout>
                </FlexboxLayout>
            </ScrollView>
        </FlexboxLayout>
    </Page>
</template>

<script>
    import Database from "./database";

    export default {
        methods: {
            onButtonTap(arg) {
                // place -> tablica obiektów
                //togglujemy
                this.$database.place[arg].busy = !this.$database.place[arg].busy;
            }
        },

        data() {
            return {
                placeA: this.$database.place
            };
        }
    };
</script>
<style>
    .open {
        background-color: "green";
    }

    .close {
        background-color: "red";
    }

    .textlabel {
        text-align: "center";
    }
</style>