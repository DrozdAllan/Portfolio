<template>
  <v-parallax dark src="../assets/aboutMedium.jpg" height="700">
    <v-flex
      class="badge text-h3 text-md-h2 text-uppercase flex-column text-center pl-16 ml-10"
    >
      <div class="name">allan drozd</div>
      <div class="prof pl-16">
        web developer
      </div>
    </v-flex>

    <v-flex class="who">
      <div class="titre">
        Who I am
      </div>
      <p class="text-center">
        I am a Symfony and Vue developer<br />
        I also like to play with Vuetify<br />
        Welcome to my page<br />
      </p>
    </v-flex>
  </v-parallax>
</template>

<script>
  export default {
    name: "about",
    data() {
      return {};
    },
  };
</script>

<style lang="sass" scoped>
  .badge
    color: rgb(55,134,97)
    padding-top: 3%
  .who
    padding-top: 10%
    padding-right: 50%
    .titre
      color: rgb(55, 134, 97)
      font-size: 45px
      margin: 0% 0% 0% 35%
    p
      padding-left: 0%
</style>
