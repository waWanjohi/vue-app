<template>
  <v-card class="listing-card rounded-lg" max-width="500">
    <div class="d-flex">
      <div>
        <v-icon color="#fff" size="70">{{ icon ?? defaultIcon }}</v-icon>
      </div>
      <div class="right-section">
        <h2 class="listing-card-header">{{ title }}</h2>
        <p class="listing-card-text">
          {{ description }}
        </p>
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
export default {
  name: "ListingCard",
  props: ["image", "title", "description", "icon"],
  data: () => ({
    defaultIcon: "mdi-passport",
  }),
};
</script>

<style scoped>
.image {
  filter: invert(100%);
}
.listing-card {
  display: flex;
  align-items: center;
  margin: 20px 0;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  padding: 20px;
  color: #fff;
}

.listing-card-header {
  text-align: center;
  text-transform: capitalize;
}

.listing-card-text {
  font-size: 16px;
  margin: 8px auto 20px;
}

.right-section {
  padding: 0 12px;
  margin-bottom: -16px;
}
</style>
