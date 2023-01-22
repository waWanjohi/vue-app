<template>
  <v-card
    class="listing-card rounded-lg d-flex flex-column align-center p-5"
    max-width="300"
    flat
  >
    <div>
      <Icon :icon="icon" height="50px" />
    </div>
    <div>
      <p class="font-weight-black text-center text-subtitle">{{ title }}</p>
    </div>
    <hr class="line" />
    <div>
      <p class="text-center text--secondary">{{ description }}</p>
    </div>
  </v-card>
</template>

<script lang="ts">
import { Icon } from "@iconify/vue2";
export default {
  name: "ListingCard",
  props: ["title", "description", "icon"],
  data: () => ({
    defaultIcon: "mdi-passport",
  }),
  components: { Icon },
};
</script>

<style scoped></style>
