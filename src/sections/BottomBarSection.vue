<template>
  <v-main class="">
    <v-bottom-navigation
      class="d-lg-none"
      fixed
      hide-on-scroll
      horizontal
      scroll-target="#hide-on-scroll-example"
      height="70"
      grow
    >
      <v-container class="d-flex align-center justify-center mx-md-3">
        <BottomBarButton
          v-for="(item, index) in iconData"
          :title="item.title"
          :icon="item.icon"
          :key="index"
        />
      </v-container>
    </v-bottom-navigation>

    <v-responsive id="hide-on-scroll-example" class="overflow-y-auto">
      <slot />
    </v-responsive>
  </v-main>
</template>
<script lang="ts">
import BottomBarButton from "@/components/BottomBarButton.vue";
export default {
  name: "BottomBarSection",
  components: { BottomBarButton },
  data: () => ({
    value: "recent",
    iconData: [
      {
        title: "Home",
        icon: "mdi-home-outline",
      },
      {
        title: "Offers",
        icon: "mdi-gift-outline",
      },
      {
        title: "Alerts",
        icon: "mdi-bell-outline",
      },
      {
        title: "Profile",
        icon: "mdi-account-circle-outline",
      },
    ],
  }),
};
</script>

<style>
.color {
  color: #ff7a79;
}
</style>
