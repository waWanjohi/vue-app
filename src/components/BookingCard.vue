<template>
  <!-- <v-container
    class="show-border-line d-flex justify-space-between align-center rounded-xl"
  > -->
  <v-card class="rounded-lg p-4">
    <div class="d-flex justify-space-between align-center">
      <div class="d-flex justify-space-between ml-5">
        <v-icon>mdi-calendar</v-icon>
        <v-card-title>Check In</v-card-title>
      </div>
      <v-divider vertical></v-divider>
      <div class="d-flex justify-space-between ml-5">
        <v-icon>mdi-calendar</v-icon>
        <v-card-title>Check Out</v-card-title>
      </div>
      <v-divider vertical></v-divider>
      <div class="d-flex justify-space-between ml-5">
        <v-card-title>2 Adults 0 Children 1 Room</v-card-title>
      </div>
      <v-divider vertical></v-divider>
      <v-btn><v-icon>mdi-magnify</v-icon> Search</v-btn>
    </div>
  </v-card>
  <!-- </v-container> -->
</template>

<script lang="ts">
export default {
  name: "BookingCard",
  data: () => ({
    picker: new Date(
      Date.now() - new Date().getTimezoneOffset() * 60000
    ).toISOString(),
  }),
};
</script>
