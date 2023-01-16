<template>
  <div class="rounded-lg mx-auto">
    <v-card
      rounded
      class="rounded-lg mb-4"
      width="280"
      height="450"
      dark
      :img="image"
    >
      <div class="bg-dark">
        <v-card-text>
          <div class="center">
            <br /><br />
            <h2 class="">{{ title }}</h2>
            <br />
            <hr class="line" />
            <br />
            <div class="h4">
              {{ upperText }}
            </div>
            <br />
            <div class="h4">
              {{ lowerText }}
            </div>
          </div>
        </v-card-text>
      </div>
    </v-card>
  </div>
</template>

<script lang="ts">
export default {
  name: "FancyCard",
  props: ["image", "title", "upperText", "lowerText"],

  methods: {
    backgroundStyles(image: string) {
      return {
        "background-image": `url(${image})`,
      };
    },
  },
};
</script>

<style scoped>
.bg-dark {
  color: #fff;
  background: #000;
  opacity: 60%;
  height: 100%;
}
.line {
  width: 30px;
  height: 2px;
  border: none;
  background-color: #ff0800;
}
.fancy-card {
  background-size: cover;
}
.center {
  top: 50%;
  left: 50%;
}
</style>
