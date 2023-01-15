<template>
  <div>
    <div class="absolute-div"></div>
    <div class="hero">
      <v-container class="center">
        <div class="white--text">
          <v-text class="font-weight-black text-xl-h1">LET'S GET TRIPPY</v-text>
          <h2>Start paying for your trips in installments Today!</h2>
        </div>
        <div class="d-flex flex-column">
          <v-tabs width="100px" fixed-tabs>
            <v-tab><p>STAYS</p></v-tab>
            <v-tab>Packages</v-tab>
          </v-tabs>
          <div>vbgbghgthgtgghsssssssssssssssssssssssssssssssstg</div>
        </div>
      </v-container>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
// import NavBar from "./NavBar.vue";

export default Vue.extend({
  name: "HeroSection",
  // components: { NavBar },
});
</script>

<style scoped>
.absolute-div {
  position: absolute;
  animation: zoom-in-zoom-out 50s ease infinite;
  background-image: url("https://www.tripitaca.com/_nuxt/img/LandingImage4.43cce79.jpg") !important;
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: 50%;
  background-repeat: no-repeat;
  top: 0;
  left: 0;
}
.center {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  flex-direction: column;
}
.hero {
  height: 100vh;
  position: relative;
}

@keyframes zoom-in-zoom-out {
  0% {
    transform: scale(1, 1);
  }
  50% {
    transform: scale(2.5, 2.5);
  }
  100% {
    transform: scale(1, 1);
  }
}
</style>
