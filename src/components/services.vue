<template>
  <v-container>
    <div class="text-h2 white--text">
      What I can do for you
    </div>
    <v-col cols="12" sm="6">
      <v-item-group dark>
      <v-expansion-panels inset class="bob">
        <v-expansion-panel>
          <v-expansion-panel-header>Web Development</v-expansion-panel-header>
          <v-expansion-panel-content>
            I am focused on small to medium sized projects, depending on your needs and time.
            I am able to start a project from scratch or renewing your older configuration on some technologies.
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header>Deployment</v-expansion-panel-header>
          <v-expansion-panel-content>
            I am used to Firebase, Netlify and Heroku solutions to provide the best money/efficiency ratio but I have also experimented webhosting with FTP use.
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header>Design</v-expansion-panel-header>
          <v-expansion-panel-content>
            Inspired by UI/UX design agencies, I prototype my websites with the use of Figma. I try my best to implement latest trend design to provide quick and beautiful looking webpages.
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
      </v-item-group>
    </v-col>
  </v-container>
</template>

<script>
  export default {
    name: "services",
  };
</script>

<style lang="sass" scoped>
  .bob
    color: rgb(8,8,8)
</style>
