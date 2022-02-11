<template>
    <div class="py-14">
        <v-col class="text-h4 text-center text-md-left pb-16">
            {{ $t("done") }}
        </v-col>

        <v-card>
            <v-tabs
                show-arrows
                center-active
                color="white"
                dark
                background-color="main"
                v-model="tab"
            >
                <v-tab key="1">My Next Game</v-tab>
                <v-tab key="2">Lanya</v-tab>
                <v-tab key="3">Mültitaskÿ</v-tab>
                <v-tab key="4">Fleeting</v-tab>
            </v-tabs>

            <v-tabs-items v-model="tab">
                <v-tab-item key="1">
                    <v-card color="main" dark flat>
                        <v-card-text class="white--text">
                            {{ $t("mynextgame") }}
                            <a
                                href="https://choosemyvideogame.web.app/#/"
                                target="_blank"
                                class="white--text"
                            >
                                Web Preview</a
                            >
                            {{ $t("appLink") }}
                            <a
                                href="https://play.google.com/store/apps/details?id=com.allandrozd.my_next_game"
                                target="_blank"
                                class="white--text"
                            >
                                My Next Game
                            </a>
                        </v-card-text>
                        <v-dialog v-model="dialogMyNextGame">
                            <template v-slot:activator="{ on, attrs }">
                                <v-row v-on="on" v-bind="attrs">
                                    <v-col cols="12">
                                        <v-img
                                            :src="mynextgame[0].src"
                                            class="main"
                                            contain
                                            max-height="400"
                                        />
                                    </v-col>
                                </v-row>
                            </template>

                            <v-card>
                                <v-carousel
                                    continuous
                                    cycle
                                    interval="5000"
                                    height="auto"
                                >
                                    <v-carousel-item
                                        v-for="(item, i) in mynextgame"
                                        :key="i"
                                    >
                                        <v-img
                                            :src="item.src"
                                            contain
                                            max-height="645"
                                            @click="dialogMyNextGame = false"
                                        />
                                    </v-carousel-item>
                                </v-carousel>
                            </v-card>
                        </v-dialog>
                    </v-card>
                </v-tab-item>
                <v-tab-item key="2">
                    <v-card color="main" dark flat>
                        <v-card-text class="white--text">
                            {{ $t("lanya") }}
                        </v-card-text>
                        <v-dialog v-model="dialogLanya">
                            <template v-slot:activator="{ on, attrs }">
                                <v-row v-on="on" v-bind="attrs">
                                    <v-col cols="12" md="6">
                                        <v-img
                                            :src="lanya[0].src"
                                            class="main"
                                        />
                                    </v-col>

                                    <v-col class="d-none d-md-block" md="6">
                                        <v-img
                                            :src="lanya[1].src"
                                            class="main"
                                        />
                                    </v-col>
                                </v-row>
                            </template>

                            <v-card>
                                <v-carousel
                                    continuous
                                    cycle
                                    interval="5000"
                                    height="auto"
                                >
                                    <v-carousel-item
                                        v-for="(item, i) in lanya"
                                        :key="i"
                                    >
                                        <v-img
                                            :src="item.src"
                                            contain
                                            max-height="645"
                                            @click="dialogLanya = false"
                                        />
                                    </v-carousel-item>
                                </v-carousel>
                            </v-card>
                        </v-dialog>
                    </v-card>
                </v-tab-item>
                <v-tab-item key="3">
                    <v-card color="main" dark flat>
                        <v-card-text class="white--text">
                            {{ $t("multitasky") }}
                            <a
                                target="_blank"
                                href="https://multitask-6285a.web.app/"
                                class="white--text"
                                >Mültitaskÿ</a
                            >
                        </v-card-text>
                        <v-dialog v-model="dialogMultitasky">
                            <template v-slot:activator="{ on, attrs }">
                                <v-row v-on="on" v-bind="attrs">
                                    <v-col cols="12" md="6">
                                        <v-img
                                            :src="multitask[0].src"
                                            class="main"
                                        />
                                    </v-col>

                                    <v-col class="d-none d-md-block" md="6">
                                        <v-img
                                            :src="multitask[1].src"
                                            class="main"
                                        />
                                    </v-col>
                                </v-row>
                            </template>

                            <v-card>
                                <v-carousel
                                    continuous
                                    cycle
                                    interval="5000"
                                    height="auto"
                                >
                                    <v-carousel-item
                                        v-for="(item, i) in multitask"
                                        :key="i"
                                    >
                                        <v-img
                                            :src="item.src"
                                            contain
                                            max-height="645"
                                            @click="dialogMultitasky = false"
                                        />
                                    </v-carousel-item>
                                </v-carousel>
                            </v-card>
                        </v-dialog>
                    </v-card>
                </v-tab-item>
                <v-tab-item key="4">
                    <v-card color="main" dark flat>
                        <v-card-text class="white--text">
                            {{ $t("fleeting") }}
                        </v-card-text>
                        <v-dialog v-model="dialogFleeting">
                            <template v-slot:activator="{ on, attrs }">
                                <v-row v-on="on" v-bind="attrs">
                                    <v-col cols="12" md="6">
                                        <v-img
                                            :src="fleeting[0].src"
                                            class="main"
                                        />
                                    </v-col>

                                    <v-col class="d-none d-md-block" md="6">
                                        <v-img
                                            :src="fleeting[1].src"
                                            class="main"
                                        />
                                    </v-col>
                                </v-row>
                            </template>

                            <v-card>
                                <v-carousel
                                    continuous
                                    cycle
                                    interval="5000"
                                    height="auto"
                                >
                                    <v-carousel-item
                                        v-for="(item, i) in fleeting"
                                        :key="i"
                                    >
                                        <v-img
                                            :src="item.src"
                                            contain
                                            max-height="645"
                                            @click="dialogFleeting = false"
                                        />
                                    </v-carousel-item>
                                </v-carousel>
                            </v-card>
                        </v-dialog>
                    </v-card>
                </v-tab-item>
            </v-tabs-items>
        </v-card>
    </div>
</template>

<script>
export default {
    data() {
        return {
            dialogMyNextGame: false,
            dialogLanya: false,
            dialogMultitasky: false,
            dialogFleeting: false,
            tab: null,
            multitask: [
                {
                    src: require("../assets/multitask/Screenshot1.png"),
                },
                {
                    src: require("../assets/multitask/Screenshot2.png"),
                },
                {
                    src: require("../assets/multitask/Screenshot3.png"),
                },
            ],
            lanya: [
                {
                    src: require("../assets/lanya/Screenshot1.png"),
                },
                {
                    src: require("../assets/lanya/Screenshot2.png"),
                },
                {
                    src: require("../assets/lanya/Screenshot3.png"),
                },
                {
                    src: require("../assets/lanya/Screenshot4.png"),
                },
                {
                    src: require("../assets/lanya/Screenshot5.png"),
                },
                {
                    src: require("../assets/lanya/Screenshot6.png"),
                },
            ],
            fleeting: [
                {
                    src: require("../assets/fleeting/Screenshot1.png"),
                },
                {
                    src: require("../assets/fleeting/Screenshot2.png"),
                },
                {
                    src: require("../assets/fleeting/Screenshot3.png"),
                },
            ],
            mynextgame: [
                {
                    src: require("../assets/mynextgame/AppPresentation.png"),
                },
            ],
        };
    },
    computed: {
        dynamicHeight() {
            if (this.$vuetify.breakpoint.smAndDown) {
                return 200;
            } else {
                return 650;
            }
        },
        myNextGameDynamicHeight() {
            if (this.$vuetify.breakpoint.smAndDown) {
                return 200;
            } else if (this.$vuetify.breakpoint.lg) {
                return 375;
            } else if (this.$vuetify.breakpoint.xl) {
                return 800;
            } else {
                return 375;
            }
        },
    },
};
</script>

<style>
/* .v-image__image--cover {
    background-size: contain !important;
  } */
</style>
