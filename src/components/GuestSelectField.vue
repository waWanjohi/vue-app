<template>
  <v-list-item>
    <v-list-item-title class="text-subtitle">{{ title }}</v-list-item-title>
    <div class="d-flex align-center justify-center">
      <v-btn
        class="mx-2"
        outlined
        fab
        dark
        x-small
        link
        color="primary"
        @click="countValue -= 1"
      >
        <v-icon>mdi-minus</v-icon>
      </v-btn>
      {{ countValue }}
      <v-btn
        class="mx-2"
        outlined
        fab
        dark
        x-small
        color="primary"
        @click="countValue += 1"
      >
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </div>
  </v-list-item>
</template>

<script lang="ts">
export default {
  name: "GuestSelectField",
  props: ["title", "count"],
  data: () => ({
    countValue: null,
  }),
  created() {
    this.countValue = this.count;
  },
};
</script>
