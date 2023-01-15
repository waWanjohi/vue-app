<template>
  <!-- App.vue -->

  <v-app>
    <div class="main-body">
      <NavBar />
      <div>
        <v-container fluid class="hero-div">
          <HeroSection />
        </v-container>
      </div>
      <!-- <BottomBar> -->
      <div>
        <GetTrippySection />
        <PackagesSection />
        <DestinationsSection />
        <ListingsSection />
        <VideoIframe />
      </div>
      <BottomFooter />
      <!-- </BottomBar> -->
    </div>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
// import BottomBar from "./components/BottomBar.vue";
import NavBar from "@/components/NavBar.vue";
import HeroSection from "@/components/HeroSection.vue";
import GetTrippySection from "@/components/GetTrippySection.vue";
import PackagesSection from "@/components/PackagesSection.vue";
import BottomFooter from "./components/BottomFooter.vue";
import DestinationsSection from "./components/DestinationsSection.vue";
import ListingsSection from "./components/ListingsSection.vue";
import VideoIframe from "./components/VideoIframe.vue";

export default Vue.extend({
  name: "App",
  components: {
    NavBar,
    // BottomBar,
    HeroSection,
    GetTrippySection,
    PackagesSection,
    BottomFooter,
    DestinationsSection,
    ListingsSection,
    VideoIframe,
  },
  data: () => ({}),
});
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

.main-body {
  font-family: Hellix-Regular, Poppins, "Courier New", Courier, monospace;
}
.pad-sections {
  padding: 40px !important;
}

@media (max-width: 800px) {
  .pad-sections {
    width: 100% !important;
    scrollbar-width: 100%;
  }
}
.hero-div {
  height: 100vh !important;
  overflow-y: hidden;
  width: 100%;
  position: relative;
  scrollbar-width: none;
  -ms-overflow-style: none;
}
.hero-div::-webkit-scrollbar {
  display: none;
}
</style>
