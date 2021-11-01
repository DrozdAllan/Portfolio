<template>
  <v-container class="py-md-16 mx-md-13 mb-16">
    <v-col class="text-h4 text-center text-md-left pb-16">
      {{ $t("what") }}
    </v-col>
    <v-col cols="12" sm="6">
      <v-expansion-panels v-model="panel">
        <v-expansion-panel class="main white--text">
          <v-expansion-panel-header
            >{{ $t("what0") }}
            <template v-slot:actions>
              <v-icon color="white">
                $expand
              </v-icon>
            </template>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            {{ $t("whatText0") }}
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel class="main white--text">
          <v-expansion-panel-header
            >{{ $t("what1") }}
            <template v-slot:actions>
              <v-icon color="white">
                $expand
              </v-icon>
            </template>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            {{ $t("whatText1") }}
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel class="main white--text">
          <v-expansion-panel-header
            >{{ $t("what2") }}
            <template v-slot:actions>
              <v-icon color="white">
                $expand
              </v-icon>
            </template>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            {{ $t("whatText2") }}
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel class="main white--text">
          <v-expansion-panel-header
            >{{ $t("what3") }}
            <template v-slot:actions>
              <v-icon color="white">
                $expand
              </v-icon>
            </template>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            {{ $t("whatText3") }}
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-col>
  </v-container>
</template>

<script>
  export default {
    name: "services",
    data() {
      return {
        panel: 0,
      };
    },
  };
</script>

<style lang="sass" scoped></style>
