<template>
  <div>
    <v-app-bar app flat elevate-on-scroll color="white">
      <v-app-bar-nav-icon class="d-lg-none" @click.stop="drawer = !drawer" />
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
      <div class="d-sm-flex d-none align-center ml-4">
        <v-btn color="primary" class="text-capitalize" outlined>
          register
        </v-btn>
      </div>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" width="90%" app temporary>
      <v-list-item>
        <v-list-item-avatar color="primary" />

        <v-list-item-content>
          <v-list-item-title class="font-weight-black">
            Tripitaca
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider light />

      <v-list nav dense>
        <v-list-item-group
          active-class="primary--text text--accent-4"
          class="d-flex flex-column align-center justify-center mt-2"
        >
          <v-list-item v-for="(item, index) in items" :key="index" link>
            <v-list-item-content width="auto">
              <v-list-item-title
                class="font-weight-medium text-capitalize"
                v-text="item"
              />
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
        <div class="d-sm-flex d-none align-center ml-4">
          <v-btn color="primary" class="text-capitalize" outlined link>
            register
          </v-btn>
        </div>
      </v-list>
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
      items: ["Home", "About", "Contact Us"],
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
