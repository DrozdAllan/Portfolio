<template>
  <v-container class="pa-md-16 my-16">
    <div class="text-h4 mx-4 mx-md-0 py-16">
      {{ $t("done") }}
    </div>
    <v-card>
      <v-tabs grow color="white" dark background-color="noir" v-model="tab">
        <v-tab key="1">Lanya</v-tab>
        <v-tab key="2">Mültitaskÿ</v-tab>
        <v-tab key="3">Fleeting</v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab">

        <v-tab-item key="1">
          <v-card color="noir" dark flat>
            <v-card-text
            > {{ $t('lanya') }}
            </v-card-text>
            <v-carousel height="auto">
              <v-carousel-item
                      v-for="(item,i) in lanya"
                      :key="i"
                      :src="item.src"
                      reverse-transition="fade-transition"
                      transition="fade-transition"
              ></v-carousel-item>
            </v-carousel>
          </v-card>
        </v-tab-item>
        <v-tab-item key="2">
          <v-card color="noir" dark flat>
            <v-card-text> {{ $t('multitasky') }} <a target="_blank" href="https://multitask-6285a.web.app/"
                                                    class="font-weight-bold white--text">Mültitaskÿ</a>
            </v-card-text>
            <v-carousel :height="carouselHeight">
              <v-carousel-item
                      v-for="(item,i) in portfolio"
                      :key="i"
                      :src="item.src"
                      reverse-transition="fade-transition"
                      transition="fade-transition"
              ></v-carousel-item>
            </v-carousel>
          </v-card>
        </v-tab-item>
        <v-tab-item key="3">
          <v-card color="noir" dark flat>
            <v-card-text>
              {{ $t('fleeting') }}
            </v-card-text>
            <v-carousel :height="carouselHeight">
              <v-carousel-item
                      v-for="(item,i) in fleeting"
                      :key="i"
                      :src="item.src"
                      reverse-transition="fade-transition"
                      transition="fade-transition"
              ></v-carousel-item>
            </v-carousel>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </v-container>
</template>

<script>
	export default {
		data() {
			return {
				tab: null,
				portfolio: [
					{
						src: require('../assets/multitask/Screenshot1.png'),
					},
					{
						src: require('../assets/multitask/Screenshot2.png'),
					},
					{
						src: require('../assets/multitask/Screenshot3.png'),
					},
				],
				lanya: [
					{
						src: require('../assets/lanya/Screenshot1.png'),
					},
					{
						src: require('../assets/lanya/Screenshot2.png'),
					},
					{
						src: require('../assets/lanya/Screenshot3.png'),
					},
					{
						src: require('../assets/lanya/Screenshot4.png'),
					},
					{
						src: require('../assets/lanya/Screenshot5.png'),
					},
					{
						src: require('../assets/lanya/Screenshot6.png'),
					},
				],
				fleeting: [
					{
						src: require('../assets/fleeting/Screenshot1.png'),
					},
					{
						src: require('../assets/fleeting/Screenshot2.png'),
					},
					{
						src: require('../assets/fleeting/Screenshot3.png'),
					},
					{
						src: require('../assets/fleeting/Screenshot4.png'),
					},
				],
			};
		},
		computed: {
			carouselHeight() {
				if (this.$vuetify.breakpoint.smAndDown) {
					return 500
				} else {
					return 800
				}
			}
		}
	};
</script>

<style lang="sass" scoped></style>
