<template>
  <!-- <v-container
    class="show-border-line d-flex justify-space-between align-center rounded-xl"
  > -->
  <v-card
    class="rounded-lg pt-2 pb-2 d-flex justify-space-around align-center"
    width="56vw"
  >
    <BookingLabel
      :title="'Location'"
      :description="'Where do you wanna go?'"
      :icon="'la:map-marker'"
    />
    <v-divider vertical></v-divider>
    <BookingLabel
      :title="'People'"
      :description="'How many People?'"
      :icon="'la:users'"
    />
    <v-divider vertical></v-divider>
    <div @click="showDate">
      <BookingLabel
        :title="'Date'"
        :description="'When do you want to be there?'"
        :icon="'la:calendar'"
      />
    </div>

    <v-btn color="primary" class="rounded-lg">Explore</v-btn>
  </v-card>
  <!-- </v-container> -->
</template>

<script lang="ts">
import BookingLabel from "./BookingLabel.vue";
export default {
  name: "BookingCard",
  data: () => ({
    picker: new Date(
      Date.now() - new Date().getTimezoneOffset() * 60000
    ).toISOString(),
  }),
  components: { BookingLabel },
  methods: {
    showDate() {
      alert(this.picker);
    },
  },
};
</script>
