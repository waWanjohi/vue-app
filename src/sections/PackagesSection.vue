<template>
  <v-container class="mb-md-15">
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
        v-for="(item, index) in items"
        :key="index"
        :id="'list-item-' + index"
      >
        <PackageCard
          class="mx-4 package-card"
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
import { GET_ITEMS } from "@/types/enums";
export default {
  name: "PackageSection",
  components: { PackageCard, Icon },
  data: () => ({
    index: 0,
    items: null,
  }),

  created() {
    this.$store.dispatch(GET_ITEMS);
    this.items = this.$store.getters.packageItems;
  },

  methods: {
    isStartOfList(): boolean {
      return this.index === 0;
    },
    isEndOfList(): boolean {
      return this.index === this.items.length - 1;
    },
    nextItem(): number {
      this.index += 2;
      if (this.index >= this.items.length) this.index = this.items.length - 1;
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
.package-card:hover {
  cursor: pointer;
}
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
</style>
