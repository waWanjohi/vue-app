<template>
  <div class="d-flex flex-column align-center mx-auto">
    <v-card-text>
      <div class="center">
        <br /><br />
        <h2 class="text--primary text-center font-weight-black text-h3 mb-3">
          Why Get this Trippy?
        </h2>
      </div>
    </v-card-text>

    <v-container
      class="d-lg-flex align-lg-center justify-lg-space-evenly stack-top mb-n12"
    >
      <FancyCard
        v-for="(item, index) in fancyCardItems"
        :key="index"
        :title="item.title"
        :upper-text="item.upperText"
        :lower-text="item.lowerText"
        :image="item.background"
        :isLarge="item.isLarge"
      />
    </v-container>
    <v-card
      class="show-border-line mt-n15 image rounded-xl"
      min-width="90%"
      min-height="200px"
      :img="background"
    ></v-card>
  </div>
</template>

<script lang="ts">
import FancyCard from "@/components/FancyCard.vue";

export default {
  name: "GetTrippySection",
  components: { FancyCard },
  data: () => ({
    fancyCardItems: [
      {
        isLarge: false,
        background: "https://www.tripitaca.com/_nuxt/img/Packages.60534d7.jpeg",
        title: "Packages",
        upperText: "Customized packages for you.",
        lowerText:
          "Our hosts and hotels can customize a package for you based on your individual needs. Get a package directly from them and save more than 40%. There are no travel agents or middlemen, so you don't have to pay any extra or hidden fees.",
      },
      {
        isLarge: true,
        background: "https://www.tripitaca.com/_nuxt/img/Offers.2c8930b.jpeg",
        title: "Flexible Payments",
        upperText: "Pay in installments.",
        lowerText:
          "You don't have to break the bank to travel, you can now pay for your trips in installments either before or after departure at a 0% interest fee.",
      },
      {
        isLarge: false,
        background:
          "https://www.tripitaca.com/_nuxt/img/EmergencyBooking.d4e3913.jpeg",
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

<style scoped>
.stack-top {
  z-index: 2;
}

.image {
  transform: skewX(-10deg);
  opacity: 0.3;
}
</style>
