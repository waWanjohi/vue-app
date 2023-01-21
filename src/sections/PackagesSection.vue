<template>
  <v-container>
    <h1 class="text--primary font-weight-black">Packages</h1>
    <br />
    <div class="d-flex">
      <PackagesDrawer :items="items" />
      <v-container class="cards-section">
        <div class="mb-6 d-flex align-center justify-space-between no-overflow">
          <PackageCard
            v-for="(item, index) in $store.state.packageItems"
            :key="index"
            :guests="item.guests"
            :nights="item.nights"
            :title="item.title"
            :amount="item.amount"
            :from="item.from"
            :subtitle="item.subtitle"
            :btn-title="item.btnTitle"
            :photo-url="item.photoUrl"
          />
        </div>
      </v-container>
    </div>
  </v-container>
</template>

<script lang="ts">
import PackageCard from "@/components/PackageCard.vue";
import PackagesDrawer from "@/components/PackagesDrawer.vue";

export default {
  name: "PackageSection",
  components: { PackageCard, PackagesDrawer },
  data: () => ({
    items: [
      { title: "Dashboard", icon: "mdi-view-dashboard" },
      { title: "Photos", icon: "mdi-image" },
      { title: "About", icon: "mdi-help-box" },
    ],
    right: null,
  }),
};
</script>

<style scoped>
.cards-section {
  overflow-x: auto;
}

.cards-section::-webkit-scrollbar {
  display: none;
}
@media (max-width: 800px) {
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
  top: 0;
  right: 0;
}
</style>
