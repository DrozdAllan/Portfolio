<template>
  <v-container fluid class="about-hero pa-12">
    <v-col
      cols="12"
      class="text-h3 text-md-h2 text-center text-md-right font-weight-bold"
    >
      Allan Drozd
    </v-col>
    <v-col
      cols="12"
      class="text-h4 text-md-h3 text-center text-md-right font-weight-bold"
    >
      {{ $t("title") }}
    </v-col>

    <v-col cols="12" class="text-center text-md-left py-16">
      <div class="text-h4 font-weight-bold">
        {{ $t("who") }}
      </div>
    </v-col>

    <v-col cols="12" class="text-center text-md-left pt-md-16">
      <p class="text-h6 font-weight-bold">
        {{ $t("talk1") }}<br />
        {{ $t("talk2") }}<br />
        {{ $t("talk3") }}<br />
      </p>
    </v-col>
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
  background-color: #507c54
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) 97%, rgba(0, 0, 0, 1)), url('../assets/ivan-lopatin-yJEvZGhsSLY-unsplash.jpg')
  background-size: cover
  height: 100vh
</style>
