<template>
  <v-container>
    <div
      class="d-flex flex-column flex-sm-row justify-space-between align-center"
    >
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
      <v-container class="d-flex justify-space-between justify-sm-end nav-btns">
        <v-btn
          class="mx-2"
          :outlined="isStartOfList()"
          fab
          dark
          small
          link
          color="primary"
          @click="scrollTo(previousItem())"
        >
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
        <v-btn
          class="mx-2"
          :outlined="isEndOfList()"
          fab
          dark
          small
          link
          color="primary"
          @click="scrollTo(nextItem())"
        >
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </v-container>
    </div>
    <br />
    <div class="d-flex justify-space-between cards-section">
      <v-list-item
        v-for="(item, index) in $store.state.packageItems"
        :key="index"
        :id="'list-item-' + index"
      >
        <PackageCard
          class="mx-4"
          :photo-url="item.photoUrl"
          :title="item.title"
          :amount="item.amount"
          :subtitle="item.subtitle"
        />
      </v-list-item>
    </div>
  </v-container>
</template>

<script lang="ts">
import PackageCard from "@/components/PackageCard.vue";
import { Icon } from "@iconify/vue2";

export default {
  name: "PackageSection",
  components: { PackageCard, Icon },
  data: () => ({
    index: 0,
  }),

  methods: {
    isStartOfList(): boolean {
      return this.index === 0;
    },
    isEndOfList(): boolean {
      return this.index === this.$store.state.packageItems.length - 1;
    },
    nextItem(): number {
      this.index += 2;
      if (this.index >= this.$store.state.packageItems.length)
        this.index = this.$store.state.packageItems.length - 1;
      return this.index;
    },
    previousItem(): number {
      this.index -= 2;
      if (this.index <= 0) this.index = 0;
      return this.index;
    },
    scrollTo(item: number) {
      console.log(item);

      document.getElementById(`list-item-${item}`).scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
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
