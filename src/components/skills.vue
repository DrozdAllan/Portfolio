<template>
  <v-container class="pa-md-16 my-16">
    <div class="text-h4 py-5 py-16">
      {{ $t("know") }}
    </div>
    <v-flex>
      <div class="mb-4">
        <span class="text-h6 font-weight-bold">{{ $t("prog") }}</span>
        <div class="py-5">
          <v-row>
            <v-col>
              HTML
            </v-col>
            <v-col>
              <v-rating readonly color="completion" :value="4"> </v-rating>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              CSS
            </v-col>
            <v-col>
              <v-rating readonly color="completion" :value="3"> </v-rating>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              jQuery
            </v-col>
            <v-col>
              <v-rating readonly color="completion" :value="4"> </v-rating>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              PHP
            </v-col>
            <v-col>
              <v-rating readonly color="completion" :value="4"> </v-rating>
            </v-col>
          </v-row>
        </div>
      </div>
      <div class="mb-4">
        <span class="text-h6 font-weight-bold">{{ $t("other") }}</span>
        <div class="py-5">
          <v-row>
            <v-col>
              Photoshop
            </v-col>
            <v-col>
              <v-rating readonly color="completion" :value="2"> </v-rating>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              {{ $t("jap") }}
            </v-col>
            <v-col>
              <v-rating readonly color="completion" :value="2"> </v-rating>
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

<style lang="sass" scoped></style>
