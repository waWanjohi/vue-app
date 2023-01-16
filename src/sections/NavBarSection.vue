<template>
  <v-app-bar
    app
    height="80"
    :extended-height="500"
    :class="{
      changecolor: scrollPosition > 50,
      transparent: scrollPosition < 50,
      borderless: scrollPosition < 50,
    }"
    :elevation="{ 0: scrolled() }"
  >
    <v-container
      fluid
      class="d-flex align-center justify-xl-space-between justify-lg-space-between justify-md-center justify-sm-center"
    >
      <v-toolbar-title>
        <img
          v-if="scrollPosition > 50"
          :src="darkLogo"
          alt="Logo"
          class="nav-logo transparent d-none d-lg-flex d-xl-flex"
        />
        <img
          v-else
          :src="lightLogo"
          alt="Logo"
          class="nav-logo d-none d-lg-flex d-xl-flex"
        />
      </v-toolbar-title>
      <v-card
        v-if="scrollPosition > 50"
        color="white"
        height="47"
        min-width="360"
        class="rounded-xl searchbar d-flex justify-center"
      >
        <div class="d-flex flex-lg-row justify-center flex-md-row grey--text">
          <p class="text-sm-center mt-2">Where are you going?</p>
          <v-icon
            height="inherit"
            color="primary"
            :class="{ hide: scrollPosition < 50 }"
          >
            mdi-magnify
          </v-icon>
        </div>
      </v-card>
      <div class="justify-space-evenly d-none d-lg-flex d-xl-flex ml-n12">
        <v-toolbar-title
          class="tile font-weight-bold"
          v-for="(item, index) in menuItems"
          :key="index"
          :class="{
            darkText: scrollPosition > 50,
            lightText: scrollPosition < 50,
          }"
        >
          <p
            v-if="
              scrollPosition < 50 ||
              (scrollPosition > 50 && item.toBeHidden === false)
            "
            class="mx-3"
          >
            {{ item.title }}
          </p>
        </v-toolbar-title>
        <v-toolbar-title>
          <v-img
            lazy-src="https://picsum.photos/id/11/10/6"
            :src="rightImage"
            height="auto"
            width="40"
          ></v-img>
        </v-toolbar-title>
      </div>
    </v-container>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "NavBarSection",
  data() {
    return {
      scrollPosition: 0,
      sidebar: false,
      lightLogo:
        "https://www.tripitaca.com/_nuxt/img/TripitacaLogoWhite.c5e76f0.png",
      darkLogo:
        "https://www.tripitaca.com/_nuxt/img/tripitacalogo2.2b5908a.png",
      rightImage: "https://www.tripitaca.com/_nuxt/img/profile.c3f78de.png",
      menuItems: [
        { title: "PLACES TO STAY", toBeHidden: true },
        { title: "PACKAGES", toBeHidden: false },
        { title: "LIST YOUR PROPERTY", toBeHidden: false },
      ],
    };
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
    scrolled() {
      return this.scrollPosition < 50;
    },
    showitem(scrollPosition: number, toBeHidden: boolean): boolean {
      return toBeHidden === false && scrollPosition > 50;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
});
</script>

<style scoped>
.lightText {
  color: #fff !important;
}

.darkText {
  color: #000 !important;
}
.borderless {
  box-shadow: none !important;
}
.hide {
  display: hidden !important;
}

.searchbar {
  border: 1px solid #f7f7f7;
  box-shadow: 0px 0px 14px 4px rgba(67, 65, 65, 0.051) !important;
  color: #000;
  font-weight: 600;
}

.searchbar:hover {
  cursor: pointer;
  color: #1c1c1c72;
}

@media (max-width: 800px) {
  .searchbar {
    text-align: left;
    justify-content: left !important;
  }
  .search-icon-small {
    display: hidden;
  }
}

.transparent {
  background-color: transparent !important;
}

.changecolor {
  background-color: #fbfbfb !important;
  transition: background-color 200ms;
}

.nav-logo {
  height: 30px;
  margin-bottom: 13px;
}
</style>
