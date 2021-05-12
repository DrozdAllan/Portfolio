<template>
  <v-parallax dark src="../assets/servicesMedium.jpg" height="1000">
    <div class="titre">
      What I can do for you
    </div>
    <v-col cols="12" sm="6">
      <v-item-group dark>
      <v-expansion-panels inset class="bob">
        <v-expansion-panel>
          <v-expansion-panel-header>Web Development</v-expansion-panel-header>
          <v-expansion-panel-content>
            I am focused on small to medium sized projects, depending on your needs and time.
            I am able to start a project from scratch or renewing your older configurations.
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header>Deployment</v-expansion-panel-header>
          <v-expansion-panel-content>
            I am used to Netlify or Heroku solutions to provide the best money/efficiency ratio but I have also experimented webhosting with FTP use
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header>Design</v-expansion-panel-header>
          <v-expansion-panel-content>
            Far from UI/UX design agencies, I try my best to implement licensed templates to provide quick and beautiful looking webpages.
            I often spend my time testing Vuetify components and I like the simplicity of use of Figma 
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
      </v-item-group>
    </v-col>
  </v-parallax>
</template>

<script>
  export default {
    name: "services",
  };
</script>

<style lang="sass" scoped>
  .titre
    color: rgb(55, 134, 97)
    font-size: 45px
    padding-left: 10%
    margin-top: 0
  .bob
    color: rgb(8,8,8)
</style>
