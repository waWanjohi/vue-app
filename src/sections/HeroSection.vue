<template>
  <v-container
    class="mx-auto hero-card d-flex flex-column flex-md-row justify-space-between align-center rounded-xl p-4"
    max-height="600px"
    min-height="400px"
  >
    <v-container
      class="blur d-flex justify-center align-center flex-column"
      elevation="12"
    >
      <v-card-title
        class="text-h3 font-weight-bold flex-sm-column justify-sm-center align-sm-center"
        >Enjoy Your Vacation</v-card-title
      >
      <v-card-text class="text-subtitle">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, quis
        optio!
      </v-card-text>
    </v-container>
    <v-container>
      <v-img :src="image" class="tilted-left rounded-xl" />
    </v-container>
  </v-container>
</template>

<script lang="ts">
export default {
  name: "HeroSection",
  data: () => ({
    image:
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  }),
};
</script>

<style scoped>
.hero-card {
  background-color: #f6d9d891;
  overflow: hidden;
}

@media (min-width: 900px) {
  .tilted-left {
    transform: rotate(-0.009turn);
  }
}
</style>
