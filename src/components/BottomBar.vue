<template>
  <v-main class="">
    <v-bottom-navigation
      absolute
      horizontal
      scroll-target="#hide-on-scroll-example"
    >
      <v-btn color="deep-purple accent-4" text>
        <span>Recents</span>

        <v-icon>mdi-history</v-icon>
      </v-btn>

      <v-btn color="deep-purple accent-4" text>
        <span>Favorites</span>

        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn color="deep-purple accent-4" text>
        <span>Nearby</span>

        <v-icon>mdi-map-marker</v-icon>
      </v-btn>
    </v-bottom-navigation>

    <v-responsive
      id="hide-on-scroll-example"
      class="overflow-y-auto"
      max-height="100%"
    >
      <slot />
    </v-responsive>
  </v-main>
</template>
<script lang="ts">
export default {
  data: () => ({ value: "recent" }),
};
</script>
