<template>
  <v-row>
    <v-col class="pt-15">
      <v-card class="mb-4 rounded-lg" min-height="200px" :img="col1" />
      <v-card min-height="500px" class="rounded-lg" :img="image" />
    </v-col>
    <v-col>
      <v-card class="mb-2 rounded-lg" min-height="500px" :img="col1" />
      <v-card min-height="200px" class="rounded-lg" :img="image" />
    </v-col>
  </v-row>
</template>

<script lang="ts">
export default {
  name: "GridCard",
  props: ["image", "col1"],
};
</script>

<style scoped></style>
