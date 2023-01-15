<template>
  <div class="a-tab rounded-lg">
    <v-tab class="">
      <div class="d-flex justify-center align-center pt-3">
        <v-img :src="src" />
        <p class="ml-4">{{ title }}</p>
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
