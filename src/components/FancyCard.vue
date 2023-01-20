<template>
  <div class="rounded-lg mx-auto mt-5">
    <v-card
      rounded
      class="rounded-lg mb-4"
      :width="isLarge ? 320 : 240"
      :height="isLarge ? 500 : 400"
      color="#a303031e"
      hover
      :elevation="isLarge ? 15 : 1"
    >
      <div>
        <v-card-text class="black--text">
          <div class="center">
            <br /><br />
            <h2 class="font-weight-black">{{ title }}</h2>
            <br />
            <hr class="line" />
            <br />
            <div
              class="d-flex flex-column text-subtitle"
              :class="isLarge ? `text-h5` : ``"
            >
              <div class="font-weight-medium">
                {{ upperText }}
              </div>
              <br />
              <div class="font-weight-medium">
                {{ lowerText }}
              </div>
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
  props: ["image", "title", "upperText", "lowerText", "isLarge"],

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
  width: 60px;
  height: 2px;
  border: none;
  background-color: #ff0800;
}
.fancy-card {
  background-size: cover;
  background: #a303033a;
}
</style>
