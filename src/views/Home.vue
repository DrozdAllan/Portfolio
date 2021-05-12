<template>
  <v-app>
    <v-navigation-drawer app dark color="rgb(8,8,8)">
      <v-list>
        <div class="text-center">
          <v-avatar color="rgb(55,134,97)" size="90">
            <span class="headavatar">DA</span>
          </v-avatar>
          <v-list-item-title>
            <span class="headtitle">Drozd Allan</span>
            <v-list-item-subtitle class="headsubtitle"
              >Web Developer</v-list-item-subtitle
            >
          </v-list-item-title>
        </div>
        <v-divider></v-divider>

        <v-list-item link @click="scrollToElement('about')">
          <v-list-item-icon>
            <v-icon>mdi-account-edit</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>About Me</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link @click="scrollToElement('services')">
          <v-list-item-icon>
            <v-icon>mdi-toolbox</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Services</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link @click="scrollToElement('skills')">
          <v-list-item-icon>
            <v-icon>mdi-head-check</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Skills</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link @click="scrollToElement('portfolio')">
          <v-list-item-icon>
            <v-icon>mdi-barley</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Portfolio</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link @click="scrollToElement('contact')">
          <v-list-item-icon>
            <v-icon>mdi-message-text</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Contact</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <about ref="about" />

      <services ref="services" />

      <skills ref="skills" />

      <portfolio ref="portfolio" />

      <contact ref="contact" />
    </v-main>
  </v-app>
</template>

<script>
  import about from "../components/about";
  import Contact from "../components/contact.vue";
  import Portfolio from "../components/portfolio.vue";
  import services from "../components/services.vue";
  import Skills from "../components/skills.vue";
  export default {
    name: "home",
    components: { about, services, Skills, Portfolio, Contact },
    props: {},
    methods: {
      scrollToElement(option) {
        const el = this.$refs[option].$el;
        el.scrollIntoView({behavior: 'smooth'});
      },
    },
  };
</script>

<style lang="sass" scoped>
  .v-list
    padding: 0px
    .headavatar
      font-size: 2.5rem
    .headtitle
      font-size: 2.5rem
    .headsubtitle
      font-size: 1.2rem
      padding-bottom: 10px
</style>
