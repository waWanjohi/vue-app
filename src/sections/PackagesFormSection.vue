<template>
  <v-card flat class="d-flex flex-column align-center mt-4 justify-center">
    <div>
      <v-menu
        :close-on-content-click="false"
        transition="scale-transition"
        min-width="auto"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            readonly
            outlined
            v-model="checkinDate"
            label="Check In Date"
            prepend-inner-icon="mdi-calendar"
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker no-title :max="today()" min="1950-01-01"></v-date-picker>
      </v-menu>
    </div>
    <v-text-field
      outlined
      label="Location"
      prepend-inner-icon="mdi-map-marker"
    ></v-text-field>
    <div>
      <v-text-field
        outlined
        label="Nights"
        prepend-inner-icon="mdi-format-list-numbered"
      ></v-text-field>
    </div>

    <div>
      <GuestsDropDown />
    </div>

    <v-btn
      class="text-capitalize rounded-lg mt-2 d-md-none"
      color="primary"
      min-width="70%"
      >search packages</v-btn
    >
  </v-card>
</template>

<script lang="ts">
import GuestsDropDown from "@/components/GuestsDropDown.vue";

export default {
  name: "PackagesFormSection",
  data: () => ({
    checkinDate: null,
    checkoutDate: null,
  }),
  methods: {
    today() {
      return new Date(
        Date.now() - new Date().getTimezoneOffset() * 60000
      ).toISOString();
    },
  },
  components: { GuestsDropDown },
};
</script>
