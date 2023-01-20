<template>
  <div
    class="d-flex flex-column flex-md-row justify-center justify-md-space-around rounded-t-0 hero-section rounded-xl"
  >
    <div class="flex-column d-flex justify-center align-center">
      <v-card-title class="text-h4 text-md-h3 font-weight-bold text-center"
        >Enjoy Your Vacation</v-card-title
      >
      <v-card-text class="text-md-subtitle text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, quis
        optio!
      </v-card-text>
    </div>
    <div class="d-flex align-center justify-center mt-sm-5">
      <div class="stack borderbox">
        <v-img class="tilted-right" :src="image" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "HeroSection",
  data: () => ({
    image:
      "https://media.istockphoto.com/id/623284160/photo/3d-rendering-outdoor-beach-bed-near-beach-with-beautiful-sky.jpg?b=1&s=170667a&w=0&k=20&c=OZSsx7zMHTnOphv1Z-hGLR4iXifGu8Z0sVYtURmHMhE=",
  }),
};
</script>

<style scoped>
.hero-section {
  background-color: #f6d9d891;
  height: 80vh;
}
.hero-card {
  background-color: #f6d9d891;
  overflow: hidden;
}

.stack {
  position: relative;
  z-index: 10;
  margin-bottom: 20px;
  display: inline-block;
}

.borderbox img {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border: 3px solid #fff;
}
.stack img {
  background: #fff;
  -moz-box-sizing: content-box;
  -webkit-box-sizing: content-box;
  box-sizing: content-box;
  padding: 10px;
  width: 100%;
}

.stack:before {
  /* opacity: 0.2; */
  border: 1px solid #a30303;
  background: #ffffff;
  content: "";
  /* background-image: url("https://images.unsplash.com/photo-1563911302283-d2bc129e7570?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"); */
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: -10;
  -webkit-transform: rotate(-0.009turn);
  -moz-transform: rotate(-0.009turn);
  -ms-transform: rotate(-0.009turn);
  transform: rotate(-0.009turn);
}

@media (min-width: 900px) {
  .tilted-right {
    transform: rotate(0.009turn);
  }
}
</style>
