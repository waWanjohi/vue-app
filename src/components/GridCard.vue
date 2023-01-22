<template>
  <v-row>
    <v-col class="pt-15">
      <v-card class="mb-4 rounded-lg" min-height="200px" :img="image1" />
      <v-card min-height="500px" class="rounded-lg" :img="image2" />
    </v-col>
    <v-col>
      <v-card class="mb-2 rounded-lg" min-height="500px" :img="image3" />
      <v-card min-height="200px" class="rounded-lg" :img="image4" />
    </v-col>
  </v-row>
</template>

<script lang="ts">
export default {
  name: "GridCard",
  props: ["image1", "image2", "image3", "image4"],
};
</script>

<style scoped></style>
