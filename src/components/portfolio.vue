<template>
  <div class="py-14">
	 <v-col class="text-h4 text-center text-md-left pb-16">
		{{ $t("done") }}
	 </v-col>
	 <v-card>
		<v-tabs v-model="tab"
				  background-color="main"
				  center-active
				  color="white"
				  dark
				  show-arrows>
		  <v-tab key="8">Movie Titles API</v-tab>
		  <v-tab key="7">Larallo</v-tab>
		  <v-tab key="6">Lanya</v-tab>
		  <v-tab key="5">My Next Game</v-tab>
		  <v-tab key="4">Flutter Hackaton</v-tab>
		  <v-tab key="3">MoviesTitle</v-tab>
		  <v-tab key="2">Mültitaskÿ</v-tab>
		  <v-tab key="1">Fleeting</v-tab>
		</v-tabs>
		<v-tabs-items v-model="tab">
		  <v-tab-item key="8">
			 <v-card color="main"
						dark
						flat>
				<v-card-text class="white--text">
				  {{ $t("movietitlesapi") }} <a class="white--text"
												 href="https://movietitlesapi.herokuapp.com/"
												 target="_blank"> Movie Titles Api </a>
				</v-card-text>
				<v-dialog v-model="dialogMovieTitlesApi">
				  <template v-slot:activator="{ on, attrs }">
					 <v-row dense
							  v-bind="attrs"
							  v-on="on">
						<v-col cols="12"
								 md="6">
						  <v-img :src="movietitlesapi[0].src"
									aspect-ratio="1.7778"
									class="main"
									eager />
						</v-col>
						<v-col class="d-none d-md-block"
								 md="6">
						  <v-img :src="movietitlesapi[1].src"
									aspect-ratio="1.7778"
									class="main"
									eager />
						</v-col>
					 </v-row>
				  </template>
				  <v-card>
					 <v-carousel continuous
									 cycle
									 height="auto"
									 interval="5000">
						<v-carousel-item v-for="(item, i) in movietitlesapi"
											  :key="i">
						  <v-sheet color="main"
									  height="100%">
							 <v-img :src="item.src"
									  contain
									  eager
									  max-height="645"
									  @click="dialogMovieTitlesApi = false" />
						  </v-sheet>
						</v-carousel-item>
					 </v-carousel>
				  </v-card>
				</v-dialog>
			 </v-card>
		  </v-tab-item>
		  <v-tab-item key="7">
			 <v-card color="main"
						dark
						flat>
				<v-card-text class="white--text">
				  {{ $t("larallo") }} <a class="white--text"
												 href="https://larallovue3quasar.herokuapp.com/"
												 target="_blank"> Larallo </a>
				</v-card-text>
				<v-dialog v-model="dialogLarallo">
				  <template v-slot:activator="{ on, attrs }">
					 <v-row dense
							  v-bind="attrs"
							  v-on="on">
						<v-col cols="12"
								 md="6">
						  <v-img :src="larallo[0].src"
									aspect-ratio="1.7778"
									class="main"
									eager />
						</v-col>
						<v-col class="d-none d-md-block"
								 md="6">
						  <v-img :src="larallo[1].src"
									aspect-ratio="1.7778"
									class="main"
									eager />
						</v-col>
					 </v-row>
				  </template>
				  <v-card>
					 <v-carousel continuous
									 cycle
									 height="auto"
									 interval="5000">
						<v-carousel-item v-for="(item, i) in larallo"
											  :key="i">
						  <v-sheet color="main"
									  height="100%">
							 <v-img :src="item.src"
									  contain
									  eager
									  max-height="645"
									  @click="dialogLarallo = false" />
						  </v-sheet>
						</v-carousel-item>
					 </v-carousel>
				  </v-card>
				</v-dialog>
			 </v-card>
		  </v-tab-item>
		  <v-tab-item key="6">
			 <v-card color="main"
						dark
						flat>
				<v-card-text class="white--text">
				  {{ $t("lanya") }} <a class="white--text"
											  href="https://lanya-312d6.web.app/"
											  target="_blank"> Lanya </a>
				</v-card-text>
				<v-dialog v-model="dialogLanya">
				  <template v-slot:activator="{ on, attrs }">
					 <v-row dense
							  v-bind="attrs"
							  v-on="on">
						<v-col cols="12"
								 md="6">
						  <v-img :src="lanya[0].src"
									aspect-ratio="1.7778"
									class="main"
									eager />
						</v-col>
						<v-col class="d-none d-md-block"
								 md="6">
						  <v-img :src="lanya[1].src"
									aspect-ratio="1.7778"
									class="main"
									eager />
						</v-col>
					 </v-row>
				  </template>
				  <v-card>
					 <v-carousel continuous
									 cycle
									 height="auto"
									 interval="5000">
						<v-carousel-item v-for="(item, i) in lanya"
											  :key="i"
											  eager>
						  <v-sheet color="main"
									  height="100%">
							 <v-img :src="item.src"
									  contain
									  eager
									  max-height="645"
									  @click="dialogLanya = false" />
						  </v-sheet>
						</v-carousel-item>
					 </v-carousel>
				  </v-card>
				</v-dialog>
			 </v-card>
		  </v-tab-item>
		  <v-tab-item key="5">
			 <v-card color="main"
						dark
						flat>
				<v-card-text class="white--text">
				  {{ $t("mynextgame") }} <a class="white--text"
													 href="https://choosemyvideogame.web.app/#/"
													 target="_blank"> Web Preview </a> {{ $t("appLink") }} <a class="white--text"
																																 href="https://play.google.com/store/apps/details?id=com.allandrozd.my_next_game"
																																 target="_blank"> My
																																						Next
																																						Game </a>
				</v-card-text>
				<v-dialog v-model="dialogMyNextGame">
				  <template v-slot:activator="{ on, attrs }">
					 <v-row dense
							  v-bind="attrs"
							  v-on="on">
						<v-col cols="12"
								 md="6">
						  <v-img :src="mynextgame[0].src"
									aspect-ratio="1.7778"
									class="main"
									eager />
						</v-col>
						<v-col class="d-none d-md-block"
								 md="6">
						  <v-img :src="mynextgame[1].src"
									aspect-ratio="1.7778"
									class="main"
									eager />
						</v-col>
						<!-- <v-col class="hidden-sm-and-down"></v-col>
									<v-col cols="12" md="6" align-self="center">
											<v-img
													:src="mynextgame[0].src"
													class="main"
													eager
													aspect-ratio="1.7776"
													align-self="center"
											/>
									</v-col>
									<v-col class="hidden-sm-and-down"></v-col> -->
					 </v-row>
				  </template>
				  <v-card>
					 <v-carousel continuous
									 cycle
									 height="auto"
									 interval="5000">
						<v-carousel-item v-for="(item, i) in mynextgame"
											  :key="i">
						  <v-sheet color="main"
									  height="100%">
							 <v-img :src="item.src"
									  contain
									  eager
									  max-height="645"
									  @click="dialogMyNextGame = false" />
						  </v-sheet>
						</v-carousel-item>
					 </v-carousel>
				  </v-card>
				</v-dialog>
			 </v-card>
		  </v-tab-item>
		  <v-tab-item key="4">
			 <v-card color="main"
						dark
						flat>
				<v-card-text class="white--text">
				  {{ $t("hackaton") }} <a class="white--text"
												  href="https://flutter-hackaton-afbbc.web.app/#/"
												  target="_blank"> Flutter Hackaton </a>
				</v-card-text>
				<v-dialog v-model="dialogHackaton">
				  <template v-slot:activator="{ on, attrs }">
					 <v-row dense
							  v-bind="attrs"
							  v-on="on">
						<v-col cols="12"
								 md="6">
						  <v-img :src="hackaton[0].src"
									aspect-ratio="1.7778"
									class="main"
									eager />
						</v-col>
						<v-col class="d-none d-md-block"
								 md="6">
						  <v-img :src="hackaton[2].src"
									aspect-ratio="1.7778"
									class="main"
									eager />
						</v-col>
					 </v-row>
				  </template>
				  <v-card>
					 <v-carousel continuous
									 cycle
									 height="auto"
									 interval="5000">
						<v-carousel-item v-for="(item, i) in hackaton"
											  :key="i">
						  <v-sheet color="main"
									  height="100%">
							 <v-img :src="item.src"
									  contain
									  eager
									  max-height="645"
									  @click="dialogHackaton = false" />
						  </v-sheet>
						</v-carousel-item>
					 </v-carousel>
				  </v-card>
				</v-dialog>
			 </v-card>
		  </v-tab-item>
		  <v-tab-item key="3">
			 <v-card color="main"
						dark
						flat>
				<v-card-text class="white--text">
				  {{ $t("moviesTitle") }} <a class="white--text"
													  href="https://mysterious-woodland-51583.herokuapp.com/"
													  target="_blank"> MoviesTitle </a>
				</v-card-text>
				<v-dialog v-model="dialogMovies">
				  <template v-slot:activator="{ on, attrs }">
					 <v-row dense
							  v-bind="attrs"
							  v-on="on">
						<v-col cols="12"
								 md="6">
						  <v-img :src="moviestitle[0].src"
									aspect-ratio="1.7778"
									class="main"
									eager />
						</v-col>
						<v-col class="d-none d-md-block"
								 md="6">
						  <v-img :src="moviestitle[1].src"
									aspect-ratio="1.7778"
									class="main"
									eager />
						</v-col>
					 </v-row>
				  </template>
				  <v-card>
					 <v-carousel continuous
									 cycle
									 height="auto"
									 interval="5000">
						<v-carousel-item v-for="(item, i) in moviestitle"
											  :key="i"
											  eager>
						  <v-sheet color="main"
									  height="100%">
							 <v-img :src="item.src"
									  contain
									  eager
									  max-height="645"
									  @click="dialogMovies = false" />
						  </v-sheet>
						</v-carousel-item>
					 </v-carousel>
				  </v-card>
				</v-dialog>
			 </v-card>
		  </v-tab-item>
		  <v-tab-item key="2">
			 <v-card color="main"
						dark
						flat>
				<v-card-text class="white--text">
				  {{ $t("multitasky") }} <a class="white--text"
													 href="https://multitask-6285a.web.app/"
													 target="_blank">Mültitaskÿ</a>
				</v-card-text>
				<v-dialog v-model="dialogMultitasky">
				  <template v-slot:activator="{ on, attrs }">
					 <v-row dense
							  v-bind="attrs"
							  v-on="on">
						<v-col cols="12"
								 md="6">
						  <v-img :src="multitask[0].src"
									aspect-ratio="1.7778"
									class="main"
									eager />
						</v-col>
						<v-col class="d-none d-md-block"
								 md="6">
						  <v-img :src="multitask[1].src"
									aspect-ratio="1.7778"
									class="main"
									eager />
						</v-col>
					 </v-row>
				  </template>
				  <v-card>
					 <v-carousel continuous
									 cycle
									 height="auto"
									 interval="5000">
						<v-carousel-item v-for="(item, i) in multitask"
											  :key="i"
											  eager>
						  <v-sheet color="main"
									  height="100%">
							 <v-img :src="item.src"
									  contain
									  eager
									  max-height="645"
									  @click="
                                                    dialogMultitasky = false
                                                " />
						  </v-sheet>
						</v-carousel-item>
					 </v-carousel>
				  </v-card>
				</v-dialog>
			 </v-card>
		  </v-tab-item>
		  <v-tab-item key="1">
			 <v-card color="main"
						dark
						flat>
				<v-card-text class="white--text">
				  {{ $t("fleeting") }}
				</v-card-text>
				<v-dialog v-model="dialogFleeting">
				  <template v-slot:activator="{ on, attrs }">
					 <v-row dense
							  v-bind="attrs"
							  v-on="on">
						<v-col cols="12"
								 md="6">
						  <v-img :src="fleeting[0].src"
									aspect-ratio="1.7778"
									class="main"
									eager />
						</v-col>
						<v-col class="d-none d-md-block"
								 md="6">
						  <v-img :src="fleeting[1].src"
									aspect-ratio="1.7778"
									class="main"
									eager />
						</v-col>
					 </v-row>
				  </template>
				  <v-card>
					 <v-carousel continuous
									 cycle
									 height="auto"
									 interval="5000">
						<v-carousel-item v-for="(item, i) in fleeting"
											  :key="i"
											  eager>
						  <v-sheet color="main"
									  height="100%">
							 <v-img :src="item.src"
									  contain
									  eager
									  max-height="645"
									  @click="dialogFleeting = false" />
						  </v-sheet>
						</v-carousel-item>
					 </v-carousel>
				  </v-card>
				</v-dialog>
			 </v-card>
		  </v-tab-item>
		</v-tabs-items>
	 </v-card>
  </div>
</template>
<script>
export default {
    data() {
        return {
            dialogMyNextGame: false,
            dialogLanya: false,
            dialogMultitasky: false,
            dialogFleeting: false,
            dialogMovies: false,
            dialogHackaton: false,
            dialogLarallo: false,
            dialogMovieTitlesApi: false,
            tab: null,
            multitask: [{
                src: require("../assets/multitask/Screenshot1-min.png"),
            }, {
                src: require("../assets/multitask/Screenshot2-min.jpg"),
            }, {
                src: require("../assets/multitask/Screenshot3-min.png"),
            },],
            lanya: [{
                src: require("../assets/lanya/Screenshot1-min.png"),
            }, {
                src: require("../assets/lanya/Screenshot2-min.png"),
            }, {
                src: require("../assets/lanya/Screenshot3-min.png"),
            }, {
                src: require("../assets/lanya/Screenshot4-min.png"),
            }, {
                src: require("../assets/lanya/Screenshot5-min.png"),
            }, {
                src: require("../assets/lanya/Screenshot6-min.png"),
            }, {
                src: require("../assets/lanya/Screenshot7-min.png"),
            },],
            fleeting: [{
                src: require("../assets/fleeting/Screenshot1-min.jpg"),
            }, {
                src: require("../assets/fleeting/Screenshot2-min.jpg"),
            }, {
                src: require("../assets/fleeting/Screenshot3-min.jpg"),
            },],
            mynextgame: [{
                src: require("../assets/mynextgame/FeatureGraphic-min.png"),
            }, {
                src: require("../assets/mynextgame/AppPresentation-min.png"),
            },],
            moviestitle: [{
                src: require("../assets/moviestitle/Screenshot1-min.png"),
            }, {
                src: require("../assets/moviestitle/Screenshot2-min.png"),
            }, {
                src: require("../assets/moviestitle/Screenshot3-min.png"),
            },],
            hackaton: [{
                src: require("../assets/puzzle/screenshot1-min.png"),
            }, {
                src: require("../assets/puzzle/screenshot2-min.png"),
            }, {
                src: require("../assets/puzzle/screenshot3-min.png"),
            },],
            larallo: [{
                src: require("../assets/larallo/newversion1.png"),
            }, {
                src: require("../assets/larallo/newversion2.png"),
            },],
            movietitlesapi: [{
                src: require("../assets/movietitlesapi/movietitlesapi1.png"),
            }, {
                src: require("../assets/movietitlesapi/movietitlesapi2.png"),
            }, {
                src: require("../assets/movietitlesapi/movietitlesapi3.png"),
            }],
        };
    }, computed: {
        dynamicHeight() {
            if (this.$vuetify.breakpoint.smAndDown) {
                return 200;
            } else {
                return 650;
            }
        },
    },
};
</script>
