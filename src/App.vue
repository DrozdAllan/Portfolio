<template>
	<v-app>
		<v-navigation-drawer app dark color="main" v-model="drawer">
			<v-list>
				<div class="text-center">
					<v-avatar color="main" size="90">
						<img src="./assets/PortfolioLogoInkFree.png" />
					</v-avatar>
					<v-list-item-title>
						<span class="text-h4">Allan Drozd</span>
						<v-list-item-subtitle class="text-h5"
							>{{ $t("title") }}
						</v-list-item-subtitle>
					</v-list-item-title>
				</div>
				<v-divider></v-divider>

				<v-list-item link @click="navigateTo('#about')">
					<v-list-item-icon>
						<v-icon>mdi-account-edit</v-icon>
					</v-list-item-icon>

					<v-list-item-content>
						<v-list-item-title>{{ $t("about") }}</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
				<v-list-item link @click="navigateTo('#services')">
					<v-list-item-icon>
						<v-icon>mdi-toolbox</v-icon>
					</v-list-item-icon>

					<v-list-item-content>
						<v-list-item-title>Services</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
				<v-list-item link @click="navigateTo('#skills')">
					<v-list-item-icon>
						<v-icon>mdi-head-check</v-icon>
					</v-list-item-icon>

					<v-list-item-content>
						<v-list-item-title>{{
							$t("skills")
						}}</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
				<v-list-item link @click="navigateTo('#portfolio')">
					<v-list-item-icon>
						<v-icon>mdi-barley</v-icon>
					</v-list-item-icon>

					<v-list-item-content>
						<v-list-item-title>Portfolio</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
				<v-list-item link @click="navigateTo('#contact')">
					<v-list-item-icon>
						<v-icon>mdi-message-text</v-icon>
					</v-list-item-icon>

					<v-list-item-content>
						<v-list-item-title>Contact</v-list-item-title>
					</v-list-item-content>
				</v-list-item>

				<v-list-item class="align-end justify-center">
					<v-btn
						elevation="0"
						color="main"
						@click="$root.$i18n.locale = 'en'"
					>
						<v-icon x-large> $vuetify.icons.en</v-icon>
					</v-btn>
					<v-btn
						elevation="0"
						color="main"
						@click="$root.$i18n.locale = 'fr'"
					>
						<v-icon x-large>$vuetify.icons.fr</v-icon>
					</v-btn>
				</v-list-item>

				<v-list-item class="align-end justify-center">
					<v-btn elevation="0" color="main" @click="toggleTheme()">
						<v-icon v-if="isDarkTheme">
							mdi-white-balance-sunny
						</v-icon>
						<v-icon v-else> mdi-weather-night</v-icon>
					</v-btn>
				</v-list-item>
			</v-list>
		</v-navigation-drawer>

		<v-main class="white--text">
			<v-btn
				app
				fixed
				left
				bottom
				fab
				small
				color="main"
				class="hidden-md-and-up mt-2"
				@click="toggleDrawer()"
			>
				<v-icon color="white">mdi-ray-end-arrow</v-icon>
			</v-btn>

			<about ref="about" id="about" />

			<v-container fluid class="dropd py-14">
				<services ref="services" id="services" />

				<skills ref="skills" id="skills" />

				<portfolio ref="portfolio" id="portfolio" />

				<contact ref="contact" id="contact" />

				<credits />
			</v-container>
		</v-main>
	</v-app>
</template>

<script>
import about from "./components/about";
import Contact from "./components/contact.vue";
import Credits from "./components/credits.vue";
import Portfolio from "./components/portfolio.vue";
import services from "./components/services.vue";
import Skills from "./components/skills.vue";

export default {
	name: "App",
	components: { about, services, Skills, Portfolio, Contact, Credits },
	data() {
		return {
			drawer: null,
			isDarkTheme: false,
		};
	},
	computed: {
		drawerStatus() {
			if (this.$vuetify.breakpoint.mobile) {
				this.drawer = false;
			}
			return this.drawer;
		},
	},
	methods: {
		toggleDrawer() {
			this.drawer = !this.drawer;
		},
		toggleTheme() {
			this.isDarkTheme = !this.isDarkTheme;
			this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
		},
		navigateTo(location) {
			this.$vuetify.goTo(location, {
				duration: "1500",
				easing: "easeInOutQuad",
			});
			if (this.$vuetify.breakpoint.mobile) {
				this.drawer = false;
			}
		},
	},
};
</script>

<style lang="sass" scoped>
.dropd
  background-color: #507c54
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0) 1%, rgba(0, 0, 0, 0)), url('./assets/annie-spratt-KDVo3qepq3I-unsplash-min.jpg')
  background-size: cover
</style>

<style lang="scss">
// import from the web (slower)
// @import url("https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap");

// import from a .ttf file
@font-face {
	font-family: "Raleway";
	src: url("./assets/font/Raleway-Light.ttf");
}

$font-family: "Raleway", sans-serif;
.v-application {
	// Pour le général
	font-family: $font-family;

	// Pour englober toutes les classes de vuetify
	[class*="display-"],
	[class*="text-"] {
		font-family: $font-family !important;
	}
}
</style>
