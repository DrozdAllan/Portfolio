<template>
  <v-container fluid class="about-hero white--text">
    <v-row>
      <v-col class="text-h3 text-md-h2 text-right">
        <div>Allan Drozd</div>
        <div>
          Web Developer
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <div class="text-h2 white--text">
          Who I am
        </div>
      </v-col>
    </v-row>
    <!-- MDR VIRE MOI CETTE MERDE EN DESSOUS -->
    <v-row>
      <v-col>
        <v-spacer class="py-16 my-16" />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <p class="text-center">
          I am a Symfony and Vue developer<br />
          I also like to play with Vuetify<br />
          Welcome to my page<br />
        </p>
      </v-col>
    </v-row>
  </v-container>
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
  .about-hero
    background: url('../assets/bruno-thethe-g1GFWk_y8SA-unsplash.jpg') no-repeat
    background-size: cover
    height: 100vh
</style>
