<template>
  <v-main>
    <about />

    <services />

    <skills />

    <portfolio />

    <contact />
  </v-main>
</template>

<script>
  import about from "./about";
import Contact from './contact.vue';
import Portfolio from './portfolio.vue';
  import services from "./services.vue";
import Skills from './skills.vue';
  export default {
    components: { about, services, Skills, Portfolio, Contact },
    name: "container",
    
  };
</script>

<style></style>
