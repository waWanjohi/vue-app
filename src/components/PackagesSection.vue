<template>
  <v-container>
    <h1 class="text--primary font-weight-black">Packages</h1>
    <br />
    <v-container class="cards-section">
      <div class="mb-6 cards-section">
        <PackageCard v-for="(item, index) in 5" :key="index" :name="name" />
      </div>
    </v-container>
    <div class="d-flex justify-end">
      <v-btn class="explore-btn font-weight-medium">Explore</v-btn>
    </div>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";

import PackageCard from "@/components/PackageCard.vue";

export default Vue.extend({
  name: "PackageSection",
  components: { PackageCard },
  data: () => ({
    name: "Some cool Shit bout to happen",
  }),
});
</script>

<style scoped>
.cards-section {
  display: flex;
  justify-content: space-between;
  overflow-x: auto;

  /* align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  row-gap: 12px;
  column-gap: 12px; */
}
@media (max-width: 800px) {
  .cards-section::-webkit-scrollbar {
    display: none;
  }
  .cards-section {
    display: flex;
    overflow-x: auto;
    align-items: center;
    height: 70vh;
    margin-right: 15px !important;
    padding: 20px;
  }
}
.explore-btn {
  color: white;
  background-image: linear-gradient(
    90deg,
    #ff0800,
    0,
    #ff0800,
    40%,
    #a20027 60%,
    #710a26 90%,
    #42101d
  );
}
</style>
