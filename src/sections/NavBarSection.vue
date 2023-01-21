<template>
  <div>
    <v-app-bar app flat inverted-scroll elevate-on-scroll color="white">
      <v-app-bar-nav-icon class="d-lg-none" @click.stop="drawer = !drawer" />

      <v-container class="d-flex">
        <v-toolbar-title>
          <v-img :src="logo" height="auto" width="140" />
        </v-toolbar-title>
        <!-- Space between -->
        <v-spacer></v-spacer>
        <!-- Right Side -->
        <v-list-item-group
          class="d-lg-flex justify-start align-start d-none"
          v-model="selectedItem"
          color="primary"
          height="auto"
        >
          <v-list-item v-for="(item, index) in items" :key="index">
            <v-list-item-content>
              <v-list-item-title
                class="font-weight-medium text-capitalize"
                v-text="item"
              />
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>

        <v-spacer></v-spacer>

        <div class="d-sm-flex d-none align-center ml-4">
          <v-btn color="primary" class="text-capitalize rounded-lg">
            register
          </v-btn>
        </div>
      </v-container>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" app temporary>
      <v-list-item>
        <v-list-item-avatar color="primary" />

        <v-list-item-content>
          <v-list-item-title class="font-weight-black">
            Tripitaca
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider light />

      <v-container nav dense>
        <v-list-item-group
          active-class="primary--text "
          class="d-flex flex-column align-center justify-center mt-2"
        >
          <v-list-item v-for="(item, index) in items" :key="index">
            <v-list-item-content>
              <v-list-item-title
                class="font-weight-medium text-capitalize"
                v-text="item"
              />
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
        <div class="d-sm-flex d-none align-center ml-4">
          <v-btn color="primary" class="text-capitalize"> register </v-btn>
        </div>
      </v-container>
    </v-navigation-drawer>
  </div>
</template>

<script lang="ts">
export default {
  name: "NavBarSection",
  data() {
    return {
      drawer: false,
      selectedItem: 1,
      items: ["Packages", "Places to Stay", "List Your Property"],
      logo: "https://www.tripitaca.com/_nuxt/img/tripitacalogo2.2b5908a.png",
    };
  },
  methods: {
    toggleDrawer() {
      this.drawer != this.drawer;
    },
  },
};
</script>

<style scoped></style>
