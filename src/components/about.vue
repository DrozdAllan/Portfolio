<template>
  <v-container fluid class="about-hero white--text">
    <v-row>
      <v-col class="text-h3 text-md-h2 text-right">
        <div>Allan Drozd</div>
        <div>
          <v-btn
            icon
            color="white"
            class="hidden-sm-and-up"
            @click="$emit('toggle-drawer')"
            ><v-icon>mdi-chevron-left</v-icon></v-btn
          >
          {{ $t("title") }}
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <div class="text-h2 white--text">
          {{ $t("who") }}
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
