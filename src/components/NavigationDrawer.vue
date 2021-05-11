<template>
  <v-navigation-drawer app dark permanent>
    <v-list>
      <div class="text-center">
        <v-avatar color="teal" size="90">
          <span class="headavatar">DA</span>
        </v-avatar>
        <v-list-item-title>
          <span class="headtitle">Drozd Allan</span>
          <v-list-item-subtitle class="headsubtitle"
            >Web Developer</v-list-item-subtitle
          >
        </v-list-item-title>
      </div>
      <v-divider></v-divider>

      <v-list-item link @click="emitcustomevent">
        <v-list-item-icon>
          <v-icon>mdi-account-edit</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>About Me</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item link @click="$emit('scrollservices')">
        <v-list-item-icon>
          <v-icon>mdi-toolbox</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>Services</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item link @click="$emit('scrollskills')">
        <v-list-item-icon>
          <v-icon>mdi-head-check</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>Skills</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item link @click="$emit('scrollportfolio')">
        <v-list-item-icon>
          <v-icon>mdi-barley</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>Portfolio</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item link @click="$emit('scrollcontact')">
        <v-list-item-icon>
          <v-icon>mdi-message-text</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>Contact</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  export default {
    name: "navigationdrawer",
    data() {
      return {};
    },
    methods: {
      emitcustomevent() {
        this.$emit("customeventname", { message: "my custom message" });
      },
    },
  };
</script>

<style lang="sass" scoped>
  .v-list
    padding: 0px
    .headavatar
      font-size: 2.5rem
    .headtitle
      font-size: 2.5rem
    .headsubtitle
      font-size: 1.2rem
      padding-bottom: 10px
</style>
