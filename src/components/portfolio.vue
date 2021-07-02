<template>
  <v-container class="pa-md-16 my-16">
    <div class="text-h4 py-16">
      {{ $t("done") }}
    </div>
    <v-card>
      <v-tabs color="red" dark background-color="noir" v-model="tab">
        <v-tab key="1">Fleeting</v-tab>
        <v-tab key="2">Lanya</v-tab>
        <v-tab key="3">Projet Trois</v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab">
        <v-tab-item key="1">
          <v-card color="white" flat>
            <v-card-text>Fleeting is a Symfony based project with the use of mon cul</v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item key="2">
          <v-card color="white" flat>
            <v-card-text>Lanya is based on Vue 2 and Firebase running behind</v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item key="3">
          <v-card color="white" flat>
            <v-card-text>three</v-card-text>
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
      };
    },
  };
</script>

<style lang="sass" scoped></style>
