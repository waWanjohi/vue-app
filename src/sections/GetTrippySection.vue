<template>
  <v-container
    class="d-flex px-5 flex-column justify-center align-center justify-md-space-between mb-md-15"
  >
    <div class="d-flex flex-column justify-center">
      <p class="primary--text font-weight-semibold text-center text-uppercase">
        Top value for you
      </p>
      <p class="text--primary font-weight-black text-h4 text-center">
        Why Get this Trippy?
      </p>
      <p class="text--secondary text-center">
        Don’t go looking for great deals, great deals will come looking for you.
      </p>
    </div>
    <v-container
      class="d-flex flex-sm-row flex-column justify-space-between align-center"
    >
      <FancyCard
        v-for="(item, index) in fancyCardItems"
        :key="index"
        :title="item.title"
        :upper-text="item.upperText"
        :lower-text="item.lowerText"
        :image="item.background"
      />
    </v-container>
  </v-container>
</template>

<script lang="ts">
import FancyCard from "@/components/FancyCard.vue";

export default {
  name: "GetTrippySection",
  components: { FancyCard },
  data: () => ({
    fancyCardItems: [
      {
        background: "flat-color-icons:expired",
        title: "Flexible Payments",
        upperText: "Pay in installments.",
        lowerText:
          "You don't have to break the bank to travel, you can now pay for your trips in installments either before or after departure at a 0% interest fee.",
      },
      {
        background: "flat-color-icons:briefcase",
        title: "Packages",
        upperText: "Customized packages for you.",
        lowerText:
          "Our hosts and hotels can customize a package for you based on your individual needs.",
      },
      {
        background: "flat-color-icons:donate",
        title: "Emergency Booking",
        upperText: "For tonight Only",
        lowerText:
          "Are you running late and in need of a place to stay at the last minute? Get up to 50% off bookings made after 9 p.m. For that night only!",
      },
    ],
    background:
      "https://centralpenn.aaa.com/sites/default/files/styles/large_xl/public/2022-11/tropical-beach-scene.jpg?itok=f-fOCktb",
  }),
};
</script>

<style scoped></style>
