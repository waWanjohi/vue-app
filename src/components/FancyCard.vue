<template>
  <v-card
    :loading="loading"
    class="mx-auto my-12"
    max-width="374"
    :class="{ unfocused: !isLarge }"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img height="280" :src="image"></v-img>

    <v-card-title> {{ title }}</v-card-title>

    <v-card-text class="black--text">
      <div class="my-4 text-subtitle-1">{{ upperText }}</div>

      <div>
        {{ lowerText }}
      </div>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
export default {
  name: "FancyCard",
  props: ["image", "title", "upperText", "lowerText", "isLarge"],

  data: () => ({
    loading: false,
    selection: 1,
  }),

  methods: {
    backgroundStyles(image: string) {
      return {
        "background-image": `url(${image})`,
      };
    },
    reserve() {
      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
    },
  },
};
</script>

<style scoped>
.unfocused {
  opacity: 0.6;
}
</style>
