<template>
  <div class="text-center">
    <v-menu
      v-model="menu"
      :close-on-content-click="false"
      :nudge-width="200"
      offset-x
    >
      <template v-slot:activator="{ on, attrs }">
        <v-text-field
          v-bind="attrs"
          v-on="on"
          outlined
          readonly
          label="Number of Guests"
          prepend-inner-icon="mdi-account-group"
        ></v-text-field>
      </template>

      <v-card>
        <v-list>
          <GuestSelectField :title="'Adults'" :count="adultCount" />
          <GuestSelectField :title="'Children'" :count="childrenCount" />
        </v-list>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn text @click="menu = false"> Cancel </v-btn>
          <v-btn color="primary" text @click="menu = false"> Save </v-btn>
        </v-card-actions>
      </v-card>
    </v-menu>
  </div>
</template>

<script lang="ts">
import GuestSelectField from "./GuestSelectField.vue";

export default {
  name: "GuestsDropDown",
  data: () => ({
    childrenCount: 0,
    adultCount: 0,
    fav: true,
    menu: false,
    message: false,
    hints: true,
  }),
  components: { GuestSelectField },
};
</script>
