<template>
  <v-container>
    <iframe
      width="100%"
      height="600px"
      src="https://www.youtube.com/embed/Zt0obAXJzS8"
      title="Tripitaca Demo"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      class="rounded-xl"
    ></iframe>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "VideoIframeSection",
});
</script>

<style scoped></style>
