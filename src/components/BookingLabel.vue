<template>
  <div class="d-flex flex-column mt-2 button">
    <div class="d-flex">
      <Icon class="primary--text" width="20px" :icon="icon" />
      <p class="h6 mx-3">{{ title }}</p>
      <Icon icon="la:angle-down" class="primary--text" width="15px" />
    </div>
    <p class="text-caption text--secondary mt-n4">{{ description }}</p>
  </div>
</template>

<script lang="ts">
import { Icon } from "@iconify/vue2";

export default {
  name: "BookingLabel",
  components: { Icon },
  props: ["title", "description", "icon"],
};
</script>

<style scoped>
.button :hover {
  cursor: pointer !important;
}
</style>
