<template>
  <v-card class="d-flex justify-start mb-6 p-4" width="70%">
    <div class="d-flex justify-space-between mt-3">
      <v-icon class="mt-n2 mx-2">mdi-magnify</v-icon>
      <p class="mt-1 grey--text">{{ text }}</p>
    </div>
  </v-card>
</template>

<script lang="ts">
export default {
  props: ["text"],
};
</script>
