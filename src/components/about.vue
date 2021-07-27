<template>
  <v-container fluid class="about-hero">
    <v-row class="ma-md-5">
      <v-col cols="12" class="text-h3 text-md-h2 text-center text-md-right">
        Allan Drozd
      </v-col>
      <v-col cols="12" class="text-h4 text-md-h3 text-center text-md-right">
        {{ $t("title") }}
      </v-col>
    </v-row>

    <v-spacer class="py-11 my-3 my-md-16"/>

    <v-row>
      <v-col class="text-center text-md-left">
        <div class="pl-md-16 text-h4">
          {{ $t("who") }}
        </div>
      </v-col>
    </v-row>

    <v-spacer class="hidden-sm-and-down pb-16 mb-16 pb-md-4 mb-md-0"/>

    <v-row>
      <v-col>
        <p class="text-center pr-md-16 pt-6 text-subtitle-1">
          {{ $t("talk1") }}<br/>
          {{ $t("talk2") }}<br/>
          {{ $t("talk3") }}<br/>
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
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) 97%, rgba(0, 0, 0, 1)), url('../assets/bruno-thethe-g1GFWk_y8SA-unsplash.jpg')
    background-size: cover
    height: 100vh
</style>
