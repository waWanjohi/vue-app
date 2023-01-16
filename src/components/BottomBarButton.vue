<template>
  <div class="center mx-3">
    <v-btn text>
      <v-icon color="#ff7a79" size="30px">{{ icon }}</v-icon>
    </v-btn>
    <p class="text-caption color ml-3">{{ title }}</p>
  </div>
</template>

<script lang="ts">
export default {
  name: "BottomBarButton",
  props: ["icon", "title"],
};
</script>
