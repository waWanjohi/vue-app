<template>
  <v-container class="hero-section">
    <v-row class="fill-height">
      <v-col
        color="primary"
        class="d-flex flex-column align-center justify-center column"
      >
        <p class="text-h5 text-md-h2 font-weight-bold">Let's get</p>
        <p class="primary--text text-h3 text-md-h1 font-weight-black">
          Trippy!
        </p>
      </v-col>
      <v-col fill-height>
        <div class="mt-8 d-none d-md-flex">
          <GridCard
            :image1="image1"
            :image2="image2"
            :image3="image3"
            :image4="image4"
          />
        </div>
      </v-col>
    </v-row>

    <div class="send-front d-none d-md-block">
      <v-card-text class="text-md-subtitle mb-3">
        Start paying for your trips in installments Today!
      </v-card-text>
      <BookingCard />
    </div>
  </v-container>
</template>

<script lang="ts">
import BookingCard from "@/components/BookingCard.vue";
import GridCard from "@/components/GridCard.vue";
export default {
  name: "HeroSection",
  data: () => ({
    image2:
      "https://images.unsplash.com/photo-1470755148323-3b7582338b8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    image1:
      "https://media.istockphoto.com/id/623284160/photo/3d-rendering-outdoor-beach-bed-near-beach-with-beautiful-sky.jpg?b=1&s=170667a&w=0&k=20&c=OZSsx7zMHTnOphv1Z-hGLR4iXifGu8Z0sVYtURmHMhE=",
    image3:
      "https://images.unsplash.com/photo-1534719156993-f3c9448673bf?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f089cfa06eb1cd7c0f654b39d8fdfd07&auto=format&fit=crop&w=1350&q=80",
    image4:
      "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  }),
  components: { GridCard, BookingCard },
};
</script>

<style scoped>
.hero-section {
  min-height: 90vh;
  position: relative;
}

.send-front {
  position: absolute;
  left: 0;
  bottom: 20%;
}
</style>
