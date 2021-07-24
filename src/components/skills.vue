<template>
  <v-container class="pa-md-16 my-16">
    <div class="text-h4 mx-4 mx-md-0 py-16">
      {{ $t("know") }}
    </div>
    <v-container>
      <span class="text-h6 font-weight-bold">{{ $t("prog") }}</span>
      <v-row class="my-4 text-center">
        <v-col>
          <v-hover v-slot="{ hover }">
            <v-row>
              <v-col cols="12">
                <v-icon :elevation="hover ? 12 : 2"
                        :class="{ 'on-hover': hover }" size="65">$vuetify.icons.htmlIcon
                </v-icon>
              </v-col>
              <v-col cols="12">
                <span :class="{ 'show-name': hover, }" class="transparent--text">Html 5</span>
              </v-col>
            </v-row>
          </v-hover>
        </v-col>
        <v-col>
          <v-hover v-slot="{ hover }">
            <v-row>
              <v-col cols="12">
                <v-icon :elevation="hover ? 12 : 2"
                        :class="{ 'on-hover': hover }" size="65">$vuetify.icons.cssIcon
                </v-icon>
              </v-col>
              <v-col cols="12">
                <span :class="{ 'show-name': hover, }" class="transparent--text">Css 3</span>
              </v-col>
            </v-row>
          </v-hover>
        </v-col>
        <v-col>
          <v-hover v-slot="{ hover }">
            <v-row>
              <v-col cols="12">
                <v-icon :elevation="hover ? 12 : 2"
                        :class="{ 'on-hover': hover }" size="65">$vuetify.icons.vueIcon
                </v-icon>
              </v-col>
              <v-col cols="12">
                <span :class="{ 'show-name': hover, }" class="transparent--text">VueJS</span>
              </v-col>
            </v-row>
          </v-hover>
        </v-col>
        <v-col>
          <v-hover v-slot="{ hover }">
            <v-row>
              <v-col cols="12">
                <v-icon :elevation="hover ? 12 : 2"
                        :class="{ 'on-hover': hover }" size="65">$vuetify.icons.symfonyIcon
                </v-icon>
              </v-col>
              <v-col cols="12">
                <span :class="{ 'show-name': hover, }" class="transparent--text">Symfony</span>
              </v-col>
            </v-row>
          </v-hover>
        </v-col>
        <v-col>
          <v-hover v-slot="{ hover }">
            <v-row>
              <v-col cols="12">
                <v-icon :elevation="hover ? 12 : 2"
                        :class="{ 'on-hover': hover }" size="65">$vuetify.icons.electronIcon
                </v-icon>
              </v-col>
              <v-col cols="12">
                <span :class="{ 'show-name': hover, }" class="transparent--text">Electron</span>
              </v-col>
            </v-row>
          </v-hover>
        </v-col>
        <v-col>
          <v-hover v-slot="{ hover }">
            <v-row>
              <v-col cols="12">
                <v-icon :elevation="hover ? 12 : 2"
                        :class="{ 'on-hover': hover }" size="65">$vuetify.icons.firebaseIcon
                </v-icon>
              </v-col>
              <v-col cols="12">
                <span :class="{ 'show-name': hover, }" class="transparent--text">Firebase</span>
              </v-col>
            </v-row>
          </v-hover>
        </v-col>
      </v-row>
      <span class="text-h6 font-weight-bold">{{ $t("other") }}</span>
      <v-row class="my-4 text-center">
        <v-col>
          <v-hover v-slot="{ hover }">
            <v-row>
              <v-col cols="12">
                <v-icon :elevation="hover ? 12 : 2"
                        :class="{ 'on-hover': hover }" size="65">$vuetify.icons.figmaIcon
                </v-icon>
              </v-col>
              <v-col cols="12">
                <span :class="{ 'show-name': hover, }" class="transparent--text">Figma</span>
              </v-col>
            </v-row>
          </v-hover>
        </v-col>
        <v-col>
          <v-hover v-slot="{ hover }">
            <v-row>
              <v-col cols="12">
                <v-icon :elevation="hover ? 12 : 2"
                        :class="{ 'on-hover': hover }" size="65">$vuetify.icons.photoshopIcon
                </v-icon>
              </v-col>
              <v-col cols="12">
                <span :class="{ 'show-name': hover, }" class="transparent--text">Photoshop</span>
              </v-col>
            </v-row>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
	export default {
		data() {
			return {
				transparent: 'rgba(0, 0, 0, 0)',
			}
		}
	};
</script>

<style scoped>
  .v-icon {
    transition: opacity .4s ease-in-out;
  }

  .v-icon:not(.on-hover) {
    opacity: 0.6;
  }

  .show-name {
    color: rgba(255, 255, 255, 1) !important;
    transition: color .4s ease-in-out;
  }
</style>
