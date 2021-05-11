<template>
  <v-app>
    <NavigationDrawer />

    <Container />
  </v-app>
</template>

<script>
  import Container from "../components/Container.vue";
  import NavigationDrawer from "../components/NavigationDrawer.vue";
  export default {
    name: "Home",
    components: { Container, NavigationDrawer },
  };
</script>
