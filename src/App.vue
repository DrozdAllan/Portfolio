<template>
  <v-app>
    <v-navigation-drawer app dark color="noir" v-model="drawer">
      <v-list>
        <div class="text-center">
          <v-avatar color="bleu" size="90">
            <span class="text-h3">AD</span>
          </v-avatar>
          <v-list-item-title>
            <span class="text-h4">Allan Drozd</span>
            <v-list-item-subtitle class="text-h5">{{
              $t("title")
            }}</v-list-item-subtitle>
          </v-list-item-title>
        </div>
        <v-divider></v-divider>

        <v-list-item
          link
          @click="
            $vuetify.goTo('#about', {
              duration: '1500',
              easing: 'easeInOutQuad',
            })
          "
        >
          <v-list-item-icon>
            <v-icon>mdi-account-edit</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ $t("about") }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          link
          @click="
            $vuetify.goTo('#services', {
              duration: '1500',
              easing: 'easeInOutQuad',
            })
          "
        >
          <v-list-item-icon>
            <v-icon>mdi-toolbox</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Services</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          link
          @click="
            $vuetify.goTo('#skills', {
              duration: '1500',
              easing: 'easeInOutQuad',
            })
          "
        >
          <v-list-item-icon>
            <v-icon>mdi-head-check</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ $t("skills") }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          link
          @click="
            $vuetify.goTo('#portfolio', {
              duration: '1500',
              easing: 'easeInOutQuad',
            })
          "
        >
          <v-list-item-icon>
            <v-icon>mdi-barley</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Portfolio</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          link
          @click="
            $vuetify.goTo('#contact', {
              duration: '1500',
              easing: 'easeInOutQuad',
            })
          "
        >
          <v-list-item-icon>
            <v-icon>mdi-message-text</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Contact</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item class="align-end justify-center">
          <v-btn @click="$root.$i18n.locale = 'fr'">
            FR
          </v-btn>
          <v-btn @click="$root.$i18n.locale = 'en'">
            EN
          </v-btn>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <about ref="about" id="about" @toggle-drawer="toggleDrawer()" />

      <v-container fluid class="dropd">
        <services ref="services" id="services" />

        <skills ref="skills" id="skills" />

        <portfolio ref="portfolio" id="portfolio" />

        <contact ref="contact" id="contact" />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
  import about from "./components/about";
  import Contact from "./components/contact.vue";
  import Portfolio from "./components/portfolio.vue";
  import services from "./components/services.vue";
  import Skills from "./components/skills.vue";
  export default {
    name: "App",
    components: { about, services, Skills, Portfolio, Contact },
    props: {},
    data() {
      return {
        drawer: false,
      };
    },
    methods: {
      toggleDrawer() {
        this.drawer = !this.drawer;
      },
    },
  };
</script>

<style lang="sass" scoped>
  .dropd
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), 1%, rgba(255, 255, 255, 0)), url('./assets/blues-lee-zUsvn51N2Ro-unsplash.jpg')
    background-size: cover
    height: 400vh
</style>

<style lang="scss">
  @import url("https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap");
  $font-family: "Raleway", sans-serif;
  .v-application {
    // Pour le général
    font-family: $font-family;

    // Pour englober toutes les classes de vuetify
    [class*="display-"],
    [class*="text-"] {
      font-family: $font-family !important;
    }
  }
</style>
