<template>
  <!-- App.vue -->

  <v-app>
    <NavBarSection />
    <v-main class="bg--white main-section">
      <HeroSection />
      <GetTrippySection />
      <PackagesSection />
      <DestinationsSection />
      <ListingsSection />
      <BottomFooter />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import NavBarSection from "@/sections/NavBarSection.vue";
import HeroSection from "@/sections/HeroSection.vue";
import GetTrippySection from "@/sections/GetTrippySection.vue";
import PackagesSection from "@/sections/PackagesSection.vue";
import BottomFooter from "./sections/BottomFooterSection.vue";
import DestinationsSection from "./sections/DestinationsSection.vue";
import ListingsSection from "./sections/ListingsSection.vue";

export default Vue.extend({
  name: "App",
  components: {
    NavBarSection,
    HeroSection,
    GetTrippySection,
    PackagesSection,
    BottomFooter,
    DestinationsSection,
    ListingsSection,
  },
  data: () => ({}),
});
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Pacifico&display=swap");

.main-section {
  display: flex;
  flex-direction: column;
  column-gap: 30px !important;
}

.show-border-line {
  border: 1px solid #e60be6;
}

.transparent {
  background: transparent;
}

body {
  font-family: Poppins, Hellix-Regular, "Courier New", Courier, monospace;
}

.pad-sections {
  padding: 40px !important;
}

.line {
  width: 40px;
  height: 4px;
  border: none;
  background-color: #ff0800;
}

@media (max-width: 800px) {
  .pad-sections {
    width: 100% !important;
    scrollbar-width: 100%;
  }
}
</style>
