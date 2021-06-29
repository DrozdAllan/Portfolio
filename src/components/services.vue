<template>
  <v-container class="py-16 my-16">
    <div class="text-h2 white--text">
      {{ $t("what") }}
    </div>
    <v-col cols="12" sm="6">
      <v-item-group dark>
        <v-expansion-panels inset class="bob">
          <v-expansion-panel>
            <v-expansion-panel-header>{{
              $t("what1")
            }}</v-expansion-panel-header>
            <v-expansion-panel-content>
              {{ $t("whatText1") }}
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header>{{
              $t("what2")
            }}</v-expansion-panel-header>
            <v-expansion-panel-content>
              {{ $t("whatText2") }}
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header>{{
              $t("what3")
            }}</v-expansion-panel-header>
            <v-expansion-panel-content>
              {{ $t("whatText3") }}
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-item-group>
    </v-col>
  </v-container>
</template>

<script>
  export default {
    name: "services",
  };
</script>

<style lang="sass" scoped>
  .bob
    color: rgb(8,8,8)
</style>
