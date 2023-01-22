<template>
  <v-container>
    <div class="d-flex justify-space-between align-center">
      <v-container>
        <p
          class="primary--text text-subtitle font-weight-semibold text-uppercase"
        >
          Explore our Packages
        </p>
        <h1 class="text--primary font-weight-black">
          Explore Top Destinations <Icon icon="noto-v1:airplane" />
        </h1>
      </v-container>
      <div>
        <v-btn class="mx-2" outlined fab dark small link color="primary">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
        <v-btn class="mx-2" fab dark small link color="primary">
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </div>
    </div>
    <br />
    <div class="d-flex">
      <v-container>
        <v-row class="cols-12">
          <PackageCard
            class="col-4"
            v-for="(item, index) in $store.state.packageItems"
            :key="index"
            :photo-url="item.photoUrl"
            :title="item.title"
            :amount="item.amount"
            :subtitle="item.subtitle"
          />
        </v-row>
      </v-container>
    </div>
  </v-container>
</template>

<script lang="ts">
import PackageCard from "@/components/PackageCard.vue";
import { Icon } from "@iconify/vue2";
import { Item } from "@/types/item";

export default {
  name: "PackageSection",
  components: { PackageCard, Icon },
  data: () => ({
    items: [
      { title: "Dashboard", icon: "mdi-view-dashboard" },
      { title: "Photos", icon: "mdi-image" },
      { title: "About", icon: "mdi-help-box" },
    ],
    index: 2,
  }),

  methods: {
    visibleItems(): Item[] {
      return this.$store.state.packageItems.slice(this.index - 2, this.index);
    },
  },
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
