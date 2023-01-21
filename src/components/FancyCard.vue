<template>
  <v-card flat max-width="280px">
    <Icon :icon="image" height="72px" />

    <p class="text-h5 font-weight-bold">{{ title }}</p>
    <hr class="line my-1" />
    <v-card flat min-height="150px">
      <p class="text-subtitle-1 text--secondary">
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

<style scoped>
.line {
  width: 40px;
  height: 4px;
  border: none;
  background-color: #ff0800;
}
</style>
