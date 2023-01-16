<template>
  <div class="a-tab rounded-lg">
    <v-tab class="rounded-lg">
      <div class="d-flex justify-center align-center pt-3">
        <v-img class="mb-3" :src="src" />
        <p class="ml-4 mt-1">{{ title }}</p>
      </div>
    </v-tab>
  </div>
</template>

<script lang="ts">
export default {
  props: ["src", "title"],
};
</script>

<style scoped>
.a-tab :hover {
  background-color: #000 !important;
  color: white !important;
  height: 100%;
}
</style>
