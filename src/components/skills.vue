<template>
  <v-container class="white--text">
    <div class="text-h2">
      What I know
    </div>
    <v-flex>
      <div class="mb-4">
        <h4>Programming</h4>
        <div>
          <v-row>
            <v-col>
              HTML
            </v-col>
            <v-col>
              <v-rating readonly color="rgb(55,134,97)" :value="4"> </v-rating>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              CSS
            </v-col>
            <v-col>
              <v-rating readonly color="rgb(55,134,97)" :value="3"> </v-rating>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              jQuery
            </v-col>
            <v-col>
              <v-rating readonly color="rgb(55,134,97)" :value="4"> </v-rating>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              PHP
            </v-col>
            <v-col>
              <v-rating readonly color="rgb(55,134,97)" :value="4"> </v-rating>
            </v-col>
          </v-row>
        </div>
      </div>
      <div class="mb-4">
        <h4>Other</h4>
        <div>
          <v-row>
            <v-col>
              Photoshop
            </v-col>
            <v-col>
              <v-rating readonly color="rgb(55,134,97)" :value="2"> </v-rating>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              Japanese
            </v-col>
            <v-col>
              <v-rating readonly color="rgb(55,134,97)" :value="2"> </v-rating>
            </v-col>
          </v-row>
        </div>
      </div>
    </v-flex>
  </v-container>
</template>

<script>
  export default {};
</script>

<style lang="sass" scoped>
</style>
