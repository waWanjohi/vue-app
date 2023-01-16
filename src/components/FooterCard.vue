<template>
  <div class="pa-2">
    <h2 class="mb-4 font-weight-black">{{ title }}</h2>
    <div v-for="(item, i) in links" :key="i">
      <div class="d-flex align-start">
        <v-icon v-if="item.hasIcon" class="mr-2">{{ item.icon }}</v-icon>
        <p>{{ item.title }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "FooterCard",
  props: ["title", "links"],
};
</script>

<style scoped>
.transparent {
  background: transparent;
  border: none;
}
</style>
