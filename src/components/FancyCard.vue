<template>
  <v-card flat max-width="280px" class="m-4">
    <div class="align-center justify-center d-flex">
      <Icon :icon="image" height="72px" />
    </div>

    <p class="text-h5 font-weight-bold text-center">{{ title }}</p>
    <div class="d-flex align-center justify-center">
      <hr class="line my-1" />
    </div>
    <v-card flat min-height="150px" class="mt-3">
      <p class="text-subtitle-1 text--secondary text-center">
        {{ upperText }}
        {{ lowerText }}
      </p>
    </v-card>
  </v-card>
</template>

<script lang="ts">
import { Icon } from "@iconify/vue2";
export default {
  name: "FancyCard",
  props: ["image", "title", "upperText", "lowerText", "isLarge"],
  components: { Icon },
};
</script>

<style scoped></style>
