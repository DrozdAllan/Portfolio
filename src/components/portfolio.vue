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
            <v-card-text> {{ $t("mynextgame") }} </v-card-text>
            <v-carousel
              continuous
              cycle
              interval="5000"
              hide-delimiters
              :show-arrows="false"
              :height="dynamicHeight"
            >
              <v-carousel-item
                v-for="(item, i) in mynextgame"
                :key="i"
                :src="item.src"
              ></v-carousel-item>
            </v-carousel>
          </v-card>
        </v-tab-item>
        <v-tab-item key="2">
          <v-card color="main" dark flat>
            <v-card-text> {{ $t("lanya") }} </v-card-text>
            <v-carousel
              continuous
              cycle
              interval="5000"
              hide-delimiters
              :show-arrows="false"
              :height="dynamicHeight"
            >
              <v-carousel-item
                v-for="(item, i) in lanya"
                :key="i"
                :src="item.src"
              ></v-carousel-item>
            </v-carousel>
          </v-card>
        </v-tab-item>
        <v-tab-item key="3">
          <v-card color="main" dark flat>
            <v-card-text>
              {{ $t("multitasky") }}
              <a
                target="_blank"
                href="https://multitask-6285a.web.app/"
                class="font-weight-bold white--text"
                >Mültitaskÿ</a
              >
            </v-card-text>
            <v-carousel
              continuous
              cycle
              interval="5000"
              hide-delimiters
              :show-arrows="false"
              :height="dynamicHeight"
            >
              <v-carousel-item
                v-for="(item, i) in multitask"
                :key="i"
                :src="item.src"
              ></v-carousel-item>
            </v-carousel>
          </v-card>
        </v-tab-item>
        <v-tab-item key="4">
          <v-card color="main" dark flat>
            <v-card-text>
              {{ $t("fleeting") }}
            </v-card-text>
            <v-carousel
              continuous
              cycle
              interval="5000"
              hide-delimiters
              :show-arrows="false"
              :height="dynamicHeight"
            >
              <v-carousel-item
                v-for="(item, i) in fleeting"
                :key="i"
                :src="item.src"
              ></v-carousel-item>
            </v-carousel>
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
            src: require("../assets/mynextgame/FeatureGraphic.png"),
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
    },
  };
</script>

<style>
  /* .v-image__image--cover {
    background-size: contain !important;
  } */
</style>
