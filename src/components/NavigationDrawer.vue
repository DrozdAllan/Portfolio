<template>
  <v-navigation-drawer app dark permanent>
    <v-container>
      <v-list>
        <v-list-item>
          <v-list-item-avatar color="teal" size="90">
            DA
          </v-list-item-avatar>
        </v-list-item>
        <v-divider style="pt-6"></v-divider>
        
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-container>
  </v-navigation-drawer>
</template>

<script>
  export default {
    name: "NavigationDrawer",
    data() {
      return {
        items: [
          { title: "About Me", icon: "mdi-view-dashboard" },
          { title: "Services", icon: "mdi-image" },
          { title: "Skills", icon: "mdi-help-box" },
          { title: "Portfolio", icon: "mdi-help-box" },
          { title: "Clients", icon: "mdi-help-box" },
          { title: "Contact", icon: "mdi-help-box" },
        ],
        right: null,
      };
    },
  };
</script>

<style></style>
