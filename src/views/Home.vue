<template>
  <v-app>
    <navigationdrawer @customeventname="setMessage" />

    <container />
  </v-app>
</template>

<script>
  import container from '../components/container';
  import navigationdrawer from '../components/navigationdrawer';
  export default {
    name: "home",
    components: { container, navigationdrawer },
    props: {

    },
    methods: {
      setMessage(payload) {
        console.log(payload.message);
        this.focus="payload.message"
      }
    }
  };
</script>
