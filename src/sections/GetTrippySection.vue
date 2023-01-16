<template>
  <v-container class="d-flex fancy-section align-center mx-auto">
    <v-card
      class="mr-6 d-flex flex-column justify-center"
      flat
      min-width="280"
      min-height="450"
    >
      <v-card-text>
        <div class="center">
          <br /><br />
          <h2 class="text--primary text-center font-weight-black text-h3">
            Why Get this Trippy?
          </h2>
          <br />
          <div class="h4 text--primary">
            Don’t go looking for great deals, great deals will come looking for
            you.
          </div>
        </div>
      </v-card-text>
    </v-card>
    <FancyCard
      v-for="(item, index) in fancyCardItems"
      :key="index"
      :title="item.title"
      :upper-text="item.upperText"
      :lower-text="item.lowerText"
      :image="item.background"
    />
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
        background: "https://www.tripitaca.com/_nuxt/img/Packages.60534d7.jpeg",
        title: "Packages",
        upperText: "Customized packages for you.",
        lowerText:
          "Our hosts and hotels can customize a package for you based on your individual needs. Get a package directly from them and save more than 40%. There are no travel agents or middlemen, so you don't have to pay any extra or hidden fees.",
      },
      {
        background: "https://www.tripitaca.com/_nuxt/img/Offers.2c8930b.jpeg",
        title: "Flexible Payments",
        upperText: "Pay in installments.",
        lowerText:
          "You don't have to break the bank to travel, you can now pay for your trips in installments either before or after departure at a 0% interest fee.",
      },
      {
        background:
          "https://www.tripitaca.com/_nuxt/img/EmergencyBooking.d4e3913.jpeg",
        title: "Emergency Booking",
        upperText: "For tonight Only",
        lowerText:
          "Are you running late and in need of a place to stay at the last minute? Get up to 50% off bookings made after 9 p.m. For that night only!",
      },
    ],
  }),
};
</script>

<style scoped>
.fancy-section {
  row-gap: 12px;
  column-gap: 20px;
}

@media (max-width: 860px) {
  .fancy-section {
    flex-direction: column;
  }
}
.center {
  top: 50%;
  left: 50%;
}
</style>
