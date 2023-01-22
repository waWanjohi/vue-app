<template>
  <v-container class="d-flex align-center justify-center flex-column mb-md-15">
    <div>
      <p class="text-center primary--text text-uppercase">
        getting to the nitty gritty
      </p>
      <p class="text-center font-weight-black text-h3">Why List With Us</p>
    </div>

    <v-container
      class="justify-space-between align-center mb-3 d-flex flex-column flex-sm-row"
    >
      <ListingCard
        class="mt-3 mx-4"
        v-for="(item, i) in listItems"
        :key="i"
        :title="item.title"
        :description="item.description"
        :icon="item.icon"
      />
    </v-container>
  </v-container>
</template>

<script lang="ts">
import ListingCard from "@/components/ListingCard.vue";

export default {
  name: "ListingsSection",
  data: () => ({
    listItems: [
      {
        title: "Special Package",
        description:
          "Create your own packages and sell them directly to travelers, no agents, no middlemen.",
        icon: "noto-v1:backpack",
      },
      {
        title: "See Incoming Travelers",
        description:
          "We'll notify you when travelers looking for properties like yours are coming to your area increasing your chances of getting booked by 100%.",
        icon: "noto-v1:aerial-tramway",
      },
      {
        title: "Financial Support",
        description:
          "Get immediate access to affordable credit and other financial services to help your business get back on track.",
        icon: "noto-v1:money-with-wings",
      },
    ],
  }),
  components: { ListingCard },
};
</script>
