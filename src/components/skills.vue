<template>
  <div class="py-14">
    <v-col class="text-h4 text-center text-md-left pb-16">
      {{ $t("know") }}
    </v-col>
    <v-container>
      <span class="text-h6 font-weight-bold">{{ $t("prog") }}</span>
      <v-row class="py-12 text-center">
        <v-col>
          <v-hover v-slot="{ hover }">
            <v-row>
              <v-col>
                <v-icon
                  :elevation="hover ? 12 : 2"
                  :class="{ 'on-hover': hover }"
                  size="60"
                  >$vuetify.icons.flutterIcon
                </v-icon>
              </v-col>
              <v-col cols="12">
                <span :class="{ 'show-name': hover }" class="transparent--text"
                  >Flutter</span
                >
              </v-col>
            </v-row>
          </v-hover>
        </v-col>
        <v-col>
          <v-hover v-slot="{ hover }">
            <v-row>
              <v-col>
                <v-icon
                  :elevation="hover ? 12 : 2"
                  :class="{ 'on-hover': hover }"
                  size="60"
                  >$vuetify.icons.firebaseIcon
                </v-icon>
              </v-col>
              <v-col cols="12">
                <span :class="{ 'show-name': hover }" class="transparent--text"
                  >Firebase</span
                >
              </v-col>
            </v-row>
          </v-hover>
        </v-col>
        <v-col>
          <v-hover v-slot="{ hover }">
            <v-row>
              <v-col>
                <v-icon
                  :elevation="hover ? 12 : 2"
                  :class="{ 'on-hover': hover }"
                  size="60"
                  >$vuetify.icons.vueIcon
                </v-icon>
              </v-col>
              <v-col cols="12">
                <span :class="{ 'show-name': hover }" class="transparent--text"
                  >Vue</span
                >
              </v-col>
            </v-row>
          </v-hover>
        </v-col>
        <v-col>
          <v-hover v-slot="{ hover }">
            <v-row>
              <v-col>
                <v-icon
                  :elevation="hover ? 12 : 2"
                  :class="{ 'on-hover': hover }"
                  size="60"
                  >$vuetify.icons.symfonyIcon
                </v-icon>
              </v-col>
              <v-col cols="12">
                <span :class="{ 'show-name': hover }" class="transparent--text"
                  >Symfony</span
                >
              </v-col>
            </v-row>
          </v-hover>
        </v-col>
        <v-col>
          <v-hover v-slot="{ hover }">
            <v-row>
              <v-col>
                <v-icon
                  :elevation="hover ? 12 : 2"
                  :class="{ 'on-hover': hover }"
                  size="60"
                  >$vuetify.icons.apiPlatformIcon
                </v-icon>
              </v-col>
              <v-col cols="12">
                <span :class="{ 'show-name': hover }" class="transparent--text"
                  >Api Platform</span
                >
              </v-col>
            </v-row>
          </v-hover>
        </v-col>
      </v-row>
      <span class="text-h6 font-weight-bold">{{ $t("design") }}</span>
      <v-row class="py-12 text-center">
        <v-col>
          <v-hover v-slot="{ hover }">
            <v-row>
              <v-col>
                <v-icon
                  :elevation="hover ? 12 : 2"
                  :class="{ 'on-hover': hover }"
                  size="60"
                  >$vuetify.icons.figmaIcon
                </v-icon>
              </v-col>
              <v-col cols="12">
                <span :class="{ 'show-name': hover }" class="transparent--text"
                  >Figma</span
                >
              </v-col>
            </v-row>
          </v-hover>
        </v-col>
        <v-col>
          <v-hover v-slot="{ hover }">
            <v-row>
              <v-col>
                <v-icon
                  :elevation="hover ? 12 : 2"
                  :class="{ 'on-hover': hover }"
                  size="60"
                  >$vuetify.icons.gimpIcon
                </v-icon>
              </v-col>
              <v-col cols="12">
                <span :class="{ 'show-name': hover }" class="transparent--text"
                  >Gimp</span
                >
              </v-col>
            </v-row>
          </v-hover>
        </v-col>
        <v-col>
          <v-hover v-slot="{ hover }">
            <v-row>
              <v-col>
                <v-icon
                  :elevation="hover ? 12 : 2"
                  :class="{ 'on-hover': hover }"
                  size="60"
                  >$vuetify.icons.photoshopIcon
                </v-icon>
              </v-col>
              <v-col cols="12">
                <span :class="{ 'show-name': hover }" class="transparent--text"
                  >Photoshop</span
                >
              </v-col>
            </v-row>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        transparent: "rgba(0, 0, 0, 0)",
      };
    },
  };
</script>

<style scoped>
  .v-icon {
    transition: opacity 0.4s ease-in-out;
  }

  .v-icon:not(.on-hover) {
    opacity: 0.8;
  }

  .show-name {
    color: rgba(255, 255, 255, 1) !important;
    transition: color 0.4s ease-in-out;
  }
</style>
