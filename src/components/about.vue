<template>
  <v-container fluid class="about-hero">
    <v-row class="ma-5">
      <v-col cols="12" class="text-h3 text-md-h2 text-right">
        Allan Drozd
      </v-col>
      <v-col cols="12" class="text-h4 text-md-h3 text-right">
        {{ $t("title") }}
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <v-btn
          icon
          x-large
          color="white"
          class="hidden-sm-and-up"
          @click="$emit('toggle-drawer')"
          ><v-icon>mdi-ray-end-arrow</v-icon></v-btn
        >
      </v-col>
    </v-row>

    <v-spacer class="py-16 my-3 my-md-16" />

    <v-row>
      <v-col>
        <div class="mx-4 pl-16 text-h4">
          {{ $t("who") }}
        </div>
      </v-col>
    </v-row>

    <v-spacer class="pb-16 mb-16 pb-md-4 mb-md-0" />

    <v-row>
      <v-col>
        <p class="text-center pr-16 text-subtitle-1">
          {{ $t("talk1") }}<br />
          {{ $t("talk2") }}<br />
          {{ $t("talk3") }}<br />
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
    background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0), 99%, rgba(0, 0, 0, 1)), url('../assets/bruno-thethe-g1GFWk_y8SA-unsplash.jpg')
    background-size: cover
    height: 100vh
</style>
